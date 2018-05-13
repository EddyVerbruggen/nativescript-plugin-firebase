import { ios as iosUtils } from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application";
import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";

// TODO pause/resume handling
export abstract class MLKitCameraView extends MLKitCameraViewBase {
  private captureSession: AVCaptureSession;
  private captureDevice: AVCaptureDevice;
  private previewLayer: AVCaptureVideoPreviewLayer;
  private cameraView: TNSMLKitCameraView;

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
    // TODO also check for availability of AVCaptureDeviceDiscoverySession (iOS 10)
    return AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo) !== null;
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

    // begin the session
    this.captureSession = AVCaptureSession.new();
    this.captureSession.sessionPreset = AVCaptureSessionPresetHigh; // TODO was medium

    const captureDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.captureDevice);
    this.captureSession.addInput(captureDeviceInput);

    this.previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this.captureSession);
    this.previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;

    if (iosUtils.isLandscape()) {
      this.previewLayer.orientation = AVCaptureVideoOrientation.LandscapeRight;
    } else {
      this.previewLayer.orientation = AVCaptureVideoOrientation.Portrait;
    }

    // note that when rotating back to portrait, this event fires very late.. not much we can do I think
    // TODO .off
    application.on("orientationChanged", arg => {
      if (arg.newValue === "landscape") {
        // with both set to 1, detection works in both portr and landsc (but the image is on its side in landscape)
        this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.LandscapeRight; // deviceOrientation === UIDeviceOrientation.LandscapeLeft ? AVCaptureVideoOrientation.LandscapeRight : AVCaptureVideoOrientation.LandscapeLeft;
      } else if (arg.newValue === "portrait") {
        this.previewLayer.connection.videoOrientation = AVCaptureVideoOrientation.Portrait;
      }
    });

    // this doesn't do much
    this.previewLayer.automaticallyAdjustsMirroring = true;

    if (this.ios) {
      this.ios.layer.addSublayer(this.previewLayer);
    }

    this.captureSession.startRunning();

    this.cameraView = TNSMLKitCameraView.alloc().initWithCaptureSession(this.captureSession);
    this.cameraView.processEveryXFrames = this.processEveryNthFrame;

    // this orientation is how the captured image is rotated (and shown)
    // TODO do this for textrecognition, but NOT for barcode scanning (so set in subclass)
    if (this.rotateRecording()) {
      this.cameraView.imageOrientation = UIImageOrientation.Right;
    }

    this.cameraView.delegate = TNSMLKitCameraViewDelegateImpl.createWithOwnerResultCallbackAndOptions(
        new WeakRef(this),
        data => {},
        {});
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    if (this.ios && this.canUseCamera()) {
      this.previewLayer.frame = this.ios.layer.bounds;
      // this.previewLayer.bounds = this.ios.layer.bounds;
    }
  }

  abstract rotateRecording(): boolean;

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
  private rotateRecording: boolean;

  public static createWithOwnerResultCallbackAndOptions(owner: WeakRef<MLKitCameraView>, callback: (message: any) => void, options?: any): TNSMLKitCameraViewDelegateImpl {
    let delegate = <TNSMLKitCameraViewDelegateImpl>TNSMLKitCameraViewDelegateImpl.new();
    delegate.owner = owner;
    delegate.options = options;
    delegate.resultCallback = callback;
    delegate.detector = owner.get().createDetector();
    delegate.onSuccessListener = owner.get().createSuccessListener();
    delegate.rotateRecording = owner.get().rotateRecording();
    return delegate;
  }

  cameraDidOutputImage(image: UIImage): void {
    if (image) {
      // more fine grained
      // console.log("UIDevice.current.orientation: " + UIDevice.currentDevice.orientation);

      const fIRVisionImage = FIRVisionImage.alloc().initWithImage(image);
      if (this.rotateRecording && !iosUtils.isLandscape()) {
        const fIRVisionImageMetadata = FIRVisionImageMetadata.new();
        // TODO see detectorOrientationFrom in MLKitExample
        fIRVisionImageMetadata.orientation = FIRVisionDetectorImageOrientation.RightTop;
        fIRVisionImage.metadata = fIRVisionImageMetadata;
      }

      this.detector.detectInImageCompletion(fIRVisionImage, this.onSuccessListener);

      // TODO remove (this is for debugging only)... but we could pass the image to the UI anyway (although the rotation may need to be corrected in some cases)
      this.owner.get().notify({
        eventName: "scanResultImage",
        object: this.owner.get(),
        value: image
      });
    }
  }
}
