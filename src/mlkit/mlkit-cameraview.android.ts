import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";

const CAMERA_PERMISSION_REQUEST_CODE = 502;

declare const com, android: any;

class SizePair {
  pictureSize: {
    width: number;
    height: number;
  };
  previewSize: {
    width: number;
    height: number;
  };
}

// TODO pause/resume handling
export abstract class MLKitCameraView extends MLKitCameraViewBase {
  private surfaceView: any; // android.view.SurfaceView;
  private bytesToByteBuffer = new Map();
  private pendingFrameData = null;
  protected rotation;
  protected lastVisionImage;
  private detector: any;
  private camera;

  disposeNativeView(): void {
    super.disposeNativeView();
    this.surfaceView = null;

    if (this.camera != null) {
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
    let v = super.createNativeView();

    if (this.hasCamera()) {
      const permissionCb = (args: application.AndroidActivityRequestPermissionsEventData) => {
        if (args.requestCode === CAMERA_PERMISSION_REQUEST_CODE) {
          application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);

          for (let i = 0; i < args.permissions.length; i++) {
            if (args.grantResults[i] === android.content.pm.PackageManager.PERMISSION_DENIED) {
              console.log("Camera permission denied");
              return;
            }
          }

          this.initView();
        }
      };

      // grab the permission dialog result
      application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, permissionCb);

      // invoke the permission dialog
      (android.support.v4.app.ActivityCompat as any).requestPermissions(
          application.android.foregroundActivity || application.android.startActivity,
          [android.Manifest.permission.CAMERA],
          CAMERA_PERMISSION_REQUEST_CODE
      );
    } else {
      console.log("There's no Camera on this device :(");
    }
    return v;
  }

  private hasCamera() {
    return !!utils.ad
        .getApplicationContext()
        .getPackageManager()
        .hasSystemFeature("android.hardware.camera");
  }

  private initView() {
    // if (this.preferFrontCamera) {
    // this._reader.switchDeviceInput();
    // }

    this.surfaceView = new android.view.SurfaceView(utils.ad.getApplicationContext());
    this.nativeView.addView(this.surfaceView);

    // Note that surfacview callbacks didn't see to work, so using a good old timeout (https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/CameraSourcePreview.java#L47)
    setTimeout(() => {
      const surfaceHolder = this.surfaceView.getHolder();
      const cameraFacingRequested = android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK;
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

      const sizePair = this.selectSizePair(this.camera, 800, 600); // TODO based on wrapping frame

      if (!sizePair) {
        console.log("Could not find suitable preview size.");
        return;
      }

      let pictureSize = sizePair.pictureSize;
      let previewSize = sizePair.previewSize;

      const parameters = this.camera.getParameters();

      if (pictureSize) {
        parameters.setPictureSize(pictureSize.width, pictureSize.height);
      }
      parameters.setPreviewSize(previewSize.width, previewSize.height);
      parameters.setPreviewFormat(android.graphics.ImageFormat.NV21);

      this.setRotation(this.camera, parameters, requestedCameraId);

      if (parameters.getSupportedFocusModes().contains(android.hardware.Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO)) {
        parameters.setFocusMode(android.hardware.Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO);
      }

      // TODO this setter seems odd, but it's part of the example: https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/CameraSource.java#L312
      this.camera.setParameters(parameters);

      this.detector = this.createDetector();
      const onSuccessListener = this.createSuccessListener();
      const onFailureListener = this.createFailureListener();

      let metadata =
          new com.google.firebase.ml.vision.common.FirebaseVisionImageMetadata.Builder()
              .setFormat(com.google.firebase.ml.vision.common.FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
              .setWidth(previewSize.width)
              .setHeight(previewSize.height)
              .setRotation(this.rotation)
              .build();

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

          this.pendingFrameData = this.bytesToByteBuffer.get(byteArray);

          if (throttle++ % this.processEveryNthFrame !== 0) {
            return;
          }

          let data = this.pendingFrameData;
          // pendingFrameData = null;

          this.lastVisionImage = com.google.firebase.ml.vision.common.FirebaseVisionImage.fromByteBuffer(data, metadata);

          this.detector
              .detectInImage(this.lastVisionImage)
              .addOnSuccessListener(onSuccessListener)
              .addOnFailureListener(onFailureListener);
        }
      }));

      this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
      this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
      this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));
      this.camera.addCallbackBuffer(this.createPreviewBuffer(previewSize));

      this.camera.setPreviewDisplay(surfaceHolder);
      this.camera.startPreview();

    }, 500); // TODO 500 works fine on my device, but would be wise to explore the boundaries
  }

  protected abstract createDetector(): any;

  protected abstract createSuccessListener(): any;

  private createFailureListener(): any {
    return new com.google.android.gms.tasks.OnFailureListener({
      onFailure: exception => console.log(exception.getMessage())
    });
  };

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
    let windowManager = (application.android.foregroundActivity || application.android.startActivity).getSystemService(android.content.Context.WINDOW_SERVICE);
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
