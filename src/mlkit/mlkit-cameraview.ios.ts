import { ios as iosUtils } from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application";
import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";
import { OrientationChangedEventData } from "tns-core-modules/application";

export abstract class MLKitCameraView extends MLKitCameraViewBase {
  private captureSession: AVCaptureSession;
  private captureDevice: AVCaptureDevice;
  private previewLayer: AVCaptureVideoPreviewLayer;
  private cameraView: TNSMLKitCameraView;

  disposeNativeView(): void {
    super.disposeNativeView();
    if (this.captureSession) {
      this.captureSession.stopRunning();
      this.captureSession = undefined;
    }
    this.captureDevice = undefined;
    this.previewLayer = undefined;
    this.cameraView = undefined;
    application.off("orientationChanged");
  }

  createNativeView(): Object {
    let v = super.createNativeView();
    if (this.canUseCamera()) {
      this.initView();
    } else {
      console.log("There's no Camera on this device :(");
    }
    return v;
  }

  private canUseCamera() {
    try {
      return !!AVCaptureDeviceDiscoverySession &&
          AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo) !== null &&
          NSProcessInfo.processInfo.environment.objectForKey("SIMULATOR_DEVICE_NAME") === null;
    } catch (ignore) {
      return false;
    }
  }

  private initView() {
    // if (this.preferFrontCamera) {
    // this._reader.switchDeviceInput();
    // }

    // find a suitable device
    this.captureDevice = AVCaptureDeviceDiscoverySession.discoverySessionWithDeviceTypesMediaTypePosition(
        <any>[AVCaptureDeviceTypeBuiltInWideAngleCamera],
        AVMediaTypeVideo,
        AVCaptureDevicePosition.Back
    ).devices.firstObject;

    if (this.torchOn) {
      this.updateTorch();
    }

    // begin the session
    this.captureSession = AVCaptureSession.new();
    this.captureSession.sessionPreset = AVCaptureSessionPreset1280x720;

    const captureDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.captureDevice);
    this.captureSession.addInput(captureDeviceInput);

    this.previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this.captureSession);
    this.previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;

    if (iosUtils.isLandscape()) {
      const deviceOrientation = UIDevice.currentDevice.orientation;
      this.previewLayer.connection.videoOrientation = deviceOrientation === UIDeviceOrientation.LandscapeLeft ? AVCaptureVideoOrientation.LandscapeRight : AVCaptureVideoOrientation.LandscapeLeft;
    } else {
      this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.Portrait;
    }

    // note that when rotating back to portrait, this event fires very late.. not much we can do I think
    application.off("orientationChanged"); // just making sure it was off
    application.on("orientationChanged", this.rotateOnOrientationChange.bind(this));

    if (this.ios) {
      this.ios.layer.addSublayer(this.previewLayer);
    }

    this.captureSession.startRunning();

    this.cameraView = TNSMLKitCameraView.alloc().initWithCaptureSession(this.captureSession);
    this.cameraView.processEveryXFrames = this.processEveryNthFrame;

    // this orientation is how the captured image is rotated (and shown)
    if (this.rotateRecording()) {
      this.cameraView.imageOrientation = UIImageOrientation.Right;
    }

    this.cameraView.delegate = TNSMLKitCameraViewDelegateImpl.createWithOwnerResultCallbackAndOptions(
        new WeakRef(this),
        data => {},
        {});
  }

  private rotateOnOrientationChange(args: OrientationChangedEventData): void {
    if (this.previewLayer) {
      if (args.newValue === "landscape") {
        const deviceOrientation = UIDevice.currentDevice.orientation;
        this.previewLayer.connection.videoOrientation = deviceOrientation === UIDeviceOrientation.LandscapeLeft ? AVCaptureVideoOrientation.LandscapeRight : AVCaptureVideoOrientation.LandscapeLeft;
      } else if (args.newValue === "portrait") {
        this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.Portrait;
      }
    }
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    if (this.ios && this.canUseCamera()) {
      this.previewLayer.frame = this.ios.layer.bounds;
    }
  }

  abstract rotateRecording(): boolean;

  getVisionOrientation(imageOrientation: UIImageOrientation): FIRVisionDetectorImageOrientation {
    if (imageOrientation === UIImageOrientation.Up) {
      return FIRVisionDetectorImageOrientation.TopLeft;
    } else if (imageOrientation === UIImageOrientation.Down) {
      return FIRVisionDetectorImageOrientation.BottomRight;
    } else if (imageOrientation === UIImageOrientation.Left) {
      return FIRVisionDetectorImageOrientation.LeftBottom;
    } else if (imageOrientation === UIImageOrientation.Right) {
      return FIRVisionDetectorImageOrientation.RightTop;
    } else if (imageOrientation === UIImageOrientation.UpMirrored) {
      return FIRVisionDetectorImageOrientation.TopRight;
    } else if (imageOrientation === UIImageOrientation.DownMirrored) {
      return FIRVisionDetectorImageOrientation.BottomLeft;
    } else if (imageOrientation === UIImageOrientation.LeftMirrored) {
      return FIRVisionDetectorImageOrientation.LeftTop;
    } else if (imageOrientation === UIImageOrientation.RightMirrored) {
      return FIRVisionDetectorImageOrientation.RightBottom;
    } else {
      return FIRVisionDetectorImageOrientation.TopLeft;
    }
  }

  protected updateTorch(): void {
    const device = this.captureDevice;
    if (device && device.lockForConfiguration()) {
      if (this.torchOn) {
        device.torchMode = AVCaptureTorchMode.On;
        device.flashMode = AVCaptureFlashMode.On;
      } else {
        device.torchMode = AVCaptureTorchMode.Off;
        device.flashMode = AVCaptureFlashMode.Off;
      }
      device.unlockForConfiguration();
    }
  }

  abstract createDetector(): any;

  abstract createSuccessListener(): any;
}

class TNSMLKitCameraViewDelegateImpl extends NSObject implements TNSMLKitCameraViewDelegate {
  public static ObjCProtocols = [TNSMLKitCameraViewDelegate];

  private owner: WeakRef<MLKitCameraView>;
  private resultCallback: (message: any) => void;
  private options?: any;

  private detector: any;
  private onSuccessListener: any;

  public static createWithOwnerResultCallbackAndOptions(owner: WeakRef<MLKitCameraView>, callback: (message: any) => void, options?: any): TNSMLKitCameraViewDelegateImpl {
    let delegate = <TNSMLKitCameraViewDelegateImpl>TNSMLKitCameraViewDelegateImpl.new();
    delegate.owner = owner;
    delegate.options = options;
    delegate.resultCallback = callback;
    delegate.detector = owner.get().createDetector();
    delegate.onSuccessListener = owner.get().createSuccessListener();
    return delegate;
  }

  cameraDidOutputImage(image: UIImage): void {
    if (image) {
      const fIRVisionImage = FIRVisionImage.alloc().initWithImage(image);
      const fIRVisionImageMetadata = FIRVisionImageMetadata.new();
      fIRVisionImageMetadata.orientation = this.owner.get().getVisionOrientation(image.imageOrientation);
      fIRVisionImage.metadata = fIRVisionImageMetadata;

      if (this.detector.detectInImageCompletion) {
        this.detector.detectInImageCompletion(fIRVisionImage, this.onSuccessListener);
      } else {
        this.detector.processImageCompletion(fIRVisionImage, this.onSuccessListener);
      }
    }
  }
}
