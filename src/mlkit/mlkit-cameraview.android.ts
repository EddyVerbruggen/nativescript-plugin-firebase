import { Application, AndroidActivityRequestPermissionsEventData, AndroidApplication, Utils } from "@nativescript/core";
import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";

declare const android, global: any;

const ActivityCompatClass = useAndroidX() ? global.androidx.core.app.ActivityCompat : android.support.v4.app.ActivityCompat;
const ContentPackageName = useAndroidX() ? global.androidx.core.content : android.support.v4.content;

const CAMERA_PERMISSION_REQUEST_CODE = 502;

interface SizeWH {
  width: number;
  height: number;
}

class SizePair {
  pictureSize: SizeWH;
  previewSize: SizeWH;
}

function useAndroidX() {
  return global.androidx && global.androidx.appcompat;
}

export abstract class MLKitCameraView extends MLKitCameraViewBase {
  private surfaceView: any; // android.view.SurfaceView;
  private bytesToByteBuffer = new Map();
  private pendingFrameData = null;
  protected rotation;
  public lastVisionImage;
  private detector: any;
  private camera;
  private metadata;

  disposeNativeView(): void {
    super.disposeNativeView();
    this.surfaceView = null;

    if (this.camera != null) {
      Application.off("orientationChanged");

      this.camera.stopPreview();
      this.camera.setPreviewCallbackWithBuffer(null);
      try {
        this.camera.setPreviewDisplay(null);
      } catch (e) {
        console.log("Error cleaning up the ML Kit camera (you can probably ignore this): " + e);
      }
      this.camera.release();
      this.camera = null;
    }
    this.bytesToByteBuffer.clear();

    if (this.detector) {
      this.detector.close();
      this.detector = undefined;
    }
    this.lastVisionImage = null;
    this.pendingFrameData = null;
  }

  createNativeView(): Object {
    let nativeView = super.createNativeView();

    if (this.hasCamera()) {
      if (this.wasCameraPermissionGranted()) {
        this.initView(nativeView);
      } else {
        const permissionCb = (args: AndroidActivityRequestPermissionsEventData) => {
          if (args.requestCode === CAMERA_PERMISSION_REQUEST_CODE) {
            Application.android.off(AndroidApplication.activityRequestPermissionsEvent, permissionCb);

            for (let i = 0; i < args.permissions.length; i++) {
              if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
                console.log("Camera permission denied");
                return;
              }
            }

            this.initView(nativeView);
          }
        };

        // grab the permission dialog result
        Application.android.on(AndroidApplication.activityRequestPermissionsEvent, permissionCb);

        // invoke the permission dialog
        ActivityCompatClass.requestPermissions(
            Application.android.foregroundActivity || Application.android.startActivity,
            [android.Manifest.permission.CAMERA],
            CAMERA_PERMISSION_REQUEST_CODE);
      }
    } else {
      console.log("There's no Camera on this device :(");
    }
    return nativeView;
  }

  initNativeView(): void {
    super.initNativeView();
    Application.on("resume", arg => this.runCamera());
  }

  private hasCamera(): boolean {
    return !!Utils.android
        .getApplicationContext()
        .getPackageManager()
        .hasSystemFeature("android.hardware.camera");
  }

  private wasCameraPermissionGranted() {
    let hasPermission = android.os.Build.VERSION.SDK_INT < 23; // Android M. (6.0)
    if (!hasPermission) {
      hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ===
          ContentPackageName.ContextCompat.checkSelfPermission(Utils.android.getApplicationContext(), android.Manifest.permission.CAMERA);
    }
    return hasPermission;
  }

  private initView(nativeView): void {
    this.surfaceView = new android.view.SurfaceView(Utils.android.getApplicationContext());
    nativeView.addView(this.surfaceView);
    this.runCamera();
  }

  private runCamera(): void {
    // Note that surfaceview callbacks didn't seem to work, so using a good old timeout (https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/CameraSourcePreview.java#L47)
    setTimeout(() => {
      if (!this.surfaceView) {
        return;
      }
      try {

        const surfaceHolder = this.surfaceView.getHolder();
        const cameraFacingRequested = this.preferFrontCamera ? android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT : android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK;
        const cameraInfo = new android.hardware.Camera.CameraInfo();

        let requestedCameraId = android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK; // use this as the default
        for (let i = 0; i < android.hardware.Camera.getNumberOfCameras(); ++i) {
          android.hardware.Camera.getCameraInfo(i, cameraInfo);
          if (cameraInfo.facing === cameraFacingRequested) {
            requestedCameraId = i;
            break;
          }
        }
        this.camera = android.hardware.Camera.open(requestedCameraId);

        let sizePair = this.selectSizePair(this.camera, 1400, 1200); // TODO based on wrapping frame

        if (!sizePair) {
          console.log("Could not find suitable preview size.");
          return;
        }

        const pictureSize = sizePair.pictureSize;
        const previewSize = sizePair.previewSize;

        const parameters = this.camera.getParameters();

        if (pictureSize) {
          parameters.setPictureSize(pictureSize.width, pictureSize.height);
        }
        parameters.setPreviewSize(previewSize.width, previewSize.height);
        parameters.setPreviewFormat(android.graphics.ImageFormat.NV21);

        Application.off("orientationChanged");
        Application.on("orientationChanged", () => {
          this.setRotation(this.camera, parameters, requestedCameraId);
          setTimeout(() => {
            this.fixStretch(previewSize);
            this.setMetadata(previewSize);
          }, 700);
        });

        this.setRotation(this.camera, parameters, requestedCameraId);
        this.fixStretch(previewSize);

        if (parameters.getSupportedFocusModes().contains(android.hardware.Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO)) {
          parameters.setFocusMode(android.hardware.Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO);
        }

        if (this.torchOn) {
          if (parameters.getSupportedFlashModes() && parameters.getSupportedFlashModes().contains(android.hardware.Camera.Parameters.FLASH_MODE_TORCH)) {
            parameters.setFlashMode(android.hardware.Camera.Parameters.FLASH_MODE_TORCH);
          }
        }

        this.camera.setParameters(parameters);

        this.detector = this.createDetector();
        const onSuccessListener = this.createSuccessListener();
        const onFailureListener = this.createFailureListener();

        this.setMetadata(previewSize);

        let throttle = 0;
        this.camera.setPreviewCallbackWithBuffer(new android.hardware.Camera.PreviewCallback({
          onPreviewFrame: (byteArray, camera) => {

            if (this.pendingFrameData !== null) {
              camera.addCallbackBuffer(this.pendingFrameData.array());
              this.pendingFrameData = null;
            }

            if (!this.bytesToByteBuffer.has(byteArray)) {
              console.log("Skipping frame");
              return;
            }

            byteArray = this.preProcessImage(byteArray);
            this.pendingFrameData = this.bytesToByteBuffer.get(byteArray);

            if (throttle++ % this.processEveryNthFrame !== 0) {
              return;
            }

            let data = this.pendingFrameData;

            if (this.detector.processImage) {
              this.lastVisionImage = com.google.firebase.ml.vision.common.FirebaseVisionImage.fromByteBuffer(data, this.metadata);
              this.detector
                  .processImage(this.lastVisionImage)
                  .addOnSuccessListener(onSuccessListener)
                  .addOnFailureListener(onFailureListener);
            } else if (this.detector.detectInImage) {
              this.lastVisionImage = com.google.firebase.ml.vision.common.FirebaseVisionImage.fromByteBuffer(data, this.metadata);
              this.detector
                  .detectInImage(this.lastVisionImage)
                  .addOnSuccessListener(onSuccessListener)
                  .addOnFailureListener(onFailureListener);
            } else {
              this.runDetector(data, previewSize.width, previewSize.height);
            }
          }
        }));

        this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
        this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
        this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
        this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));

        this.camera.setPreviewDisplay(surfaceHolder);

        if (!this.pause) {
          this.camera.startPreview();
        }

      } catch (e) {
        console.log("Error in Firebase MLKit's runCamera function: " + e);
      }
    }, 500);
  }

  private setMetadata(previewSize: SizeWH): void {
    this.metadata =
        new com.google.firebase.ml.vision.common.FirebaseVisionImageMetadata.Builder()
            .setFormat(com.google.firebase.ml.vision.common.FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
            .setWidth(previewSize.width)
            .setHeight(previewSize.height)
            .setRotation(this.rotation)
            .build();
  }

  private fixStretch(previewSize: SizeWH): void {
    let measuredWidth = this.surfaceView.getMeasuredWidth();
    let measuredHeight = this.surfaceView.getMeasuredHeight();

    let scale = previewSize.width / previewSize.height;
    let invertedScale = previewSize.height / previewSize.width;
    let measuredScale = measuredWidth / measuredHeight;

    let scaleX = 1, scaleY = 1;
    if (this.rotation == 1 || this.rotation == 3) {
      if (measuredScale <= scale) {
        scaleY = (measuredWidth * scale) / measuredHeight;
      } else {
        scaleX = (measuredHeight * scale) / measuredWidth;
      }
    } else {
      if (measuredScale >= invertedScale) {
        scaleY = (measuredWidth * invertedScale) / measuredHeight;
      } else {
        scaleX = (measuredHeight * invertedScale) / measuredWidth;
      }
    }

    // make sure the new size covers the entire viewport requested
    const correction = scaleX / scaleY > 1 ? scaleX / scaleY : 1;

    this.surfaceView.setScaleX(scaleX * correction);
    this.surfaceView.setScaleY(scaleY * correction);
  }

  protected updateTorch(): void {
    if (this.camera) {
      const parameters = this.camera.getParameters();
      parameters.setFlashMode(this.torchOn ? android.hardware.Camera.Parameters.FLASH_MODE_TORCH : android.hardware.Camera.Parameters.FLASH_MODE_OFF);
      this.camera.setParameters(parameters);
    }
  }

  protected pauseScanning(): void {
    if (this.camera != null) {
      this.camera.stopPreview();
    }
  }

  protected resumeScanning(): void {
    this.runCamera();
  }

  protected abstract createDetector(): any;

  protected abstract createSuccessListener(): any;

  protected runDetector(imageByteBuffer, width, height): void {
    throw new Error("No custom detector implemented for detector " + this.detector + ", so 'runDetector' can't do its thing");
  }

  private createFailureListener(): any {
    return new (<any>com.google.android.gms).tasks.OnFailureListener({
      onFailure: exception => console.log(exception.getMessage())
    });
  }

  private generateValidPreviewSizeList(camera): Array<SizePair> {
    let parameters = camera.getParameters();
    let supportedPreviewSizes = parameters.getSupportedPreviewSizes();
    let supportedPictureSizes = parameters.getSupportedPictureSizes();
    let validPreviewSizes: Array<SizePair> = [];
    for (let i = 0; i < supportedPreviewSizes.size(); i++) {
      let previewSize = supportedPreviewSizes.get(i);
      let previewAspectRatio = previewSize.width / previewSize.height;

      // By looping through the picture sizes in order, we favor the higher resolutions.
      // We choose the highest resolution in order to support taking the full resolution
      // picture later.
      for (let j = 0; j < supportedPictureSizes.size(); j++) {
        let pictureSize = supportedPictureSizes.get(j);
        let pictureAspectRatio = pictureSize.width / pictureSize.height;
        if (Math.abs(previewAspectRatio - pictureAspectRatio) < 0.01 /* ASPECT_RATIO_TOLERANCE */) {
          validPreviewSizes.push({previewSize: previewSize, pictureSize: pictureSize});
          break;
        }
      }
    }

    // If there are no picture sizes with the same aspect ratio as any preview sizes, allow all
    // of the preview sizes and hope that the camera can handle it.  Probably unlikely, but we
    // still account for it.
    if (validPreviewSizes.length === 0) {
      console.log("No preview sizes have a corresponding same-aspect-ratio picture size");
      for (let i = 0; i < supportedPreviewSizes.size(); i++) {
        let previewSize = supportedPreviewSizes.get(i);
        // The null picture size will let us know that we shouldn't set a picture size.
        validPreviewSizes.push({previewSize: previewSize, pictureSize: null});
      }
    }

    return validPreviewSizes;
  }

  private selectSizePair(camera, desiredWidth, desiredHeight): SizePair {
    const validPreviewSizes = this.generateValidPreviewSizeList(camera);

    // The method for selecting the best size is to minimize the sum of the differences between
    // the desired values and the actual values for width and height.  This is certainly not the
    // only way to select the best size, but it provides a decent tradeoff between using the
    // closest aspect ratio vs. using the closest pixel area.
    let selectedPair = null;
    let minDiff = java.lang.Integer.MAX_VALUE;
    for (let i = 0; i < validPreviewSizes.length; i++) {
      const sizePair = validPreviewSizes[i];
      let size = sizePair.previewSize;
      let diff = Math.abs(size.width - desiredWidth) + Math.abs(size.height - desiredHeight);
      if (diff < minDiff) {
        selectedPair = sizePair;
        minDiff = diff;
      }
    }

    return selectedPair;
  }

  private createPreviewBuffer(previewSize): any {
    let bitsPerPixel = android.graphics.ImageFormat.getBitsPerPixel(android.graphics.ImageFormat.NV21);
    let sizeInBits = previewSize.height * previewSize.width * bitsPerPixel;
    let bufferSize = Math.ceil(sizeInBits / 8.0) + 1;
    let byteArray = Array.create('byte', bufferSize);
    let buffer = java.nio.ByteBuffer.wrap(byteArray);

    if (!buffer.hasArray() || (buffer.array() !== byteArray)) {
      console.log("Failed to create valid buffer for camera source.");
    } else {
      this.bytesToByteBuffer.set(byteArray, buffer);
      return byteArray;
    }
  }

  private setRotation(camera, parameters, cameraId): void {
    let windowManager = (Application.android.foregroundActivity || Application.android.startActivity).getSystemService(android.content.Context.WINDOW_SERVICE);
    let degrees = 0;
    const deviceRotation = windowManager.getDefaultDisplay().getRotation();
    switch (deviceRotation) {
      case android.view.Surface.ROTATION_0:
        degrees = 0;
        break;
      case android.view.Surface.ROTATION_90:
        degrees = 90;
        break;
      case android.view.Surface.ROTATION_180:
        degrees = 180;
        break;
      case android.view.Surface.ROTATION_270:
        degrees = 270;
        break;
      default:
        console.log("Bad rotation value: " + deviceRotation);
    }

    const cameraInfo = new android.hardware.Camera.CameraInfo();
    android.hardware.Camera.getCameraInfo(cameraId, cameraInfo);

    let angle;
    let displayAngle;
    if (cameraInfo.facing === android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT) {
      angle = (cameraInfo.orientation + degrees) % 360;
      displayAngle = (360 - angle) % 360; // compensate for it being mirrored
    } else { // back-facing
      angle = (cameraInfo.orientation - degrees + 360) % 360;
      displayAngle = angle;
    }

    // This corresponds to the rotation constants.
    this.rotation = angle / 90;

    camera.setDisplayOrientation(displayAngle);
    parameters.setRotation(angle);
  }
}
