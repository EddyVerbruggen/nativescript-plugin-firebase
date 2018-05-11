import { ContentView } from "tns-core-modules/ui/content-view";

// TODO pause/resume handling
export abstract class MLKitCameraView extends ContentView {
  private captureSession: AVCaptureSession;
  private captureDevice: AVCaptureDevice;
  private previewLayer: CALayer;
  private cameraView: TNSMLKitCameraView;

  private bytesToByteBuffer = new Map();
  private pendingFrameData = null;
  protected rotation;
  protected lastVisionImage;

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
    this.captureSession.sessionPreset = AVCaptureSessionPresetMedium;

    const captureDeviceInput = AVCaptureDeviceInput.deviceInputWithDeviceError(this.captureDevice);
    this.captureSession.addInput(captureDeviceInput);

    this.previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this.captureSession);

    if (this.ios) {
      this.ios.layer.addSublayer(this.previewLayer);
    }

    this.captureSession.startRunning();

    this.cameraView = TNSMLKitCameraView.alloc().initWithCaptureSession(this.captureSession);
    this.cameraView.processEveryXFrames = 5;
    this.cameraView.delegate = TNSMLKitCameraViewDelegateImpl.createWithOwnerResultCallbackAndOptions(
        new WeakRef(this),
        data => {
        },
        {});
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    if (this.ios && this.canUseCamera) {
      this.previewLayer.frame = this.ios.layer.bounds;
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

  cameraDidOutputSampleBuffer(image: UIImage): void {
    if (image) {
      this.detector.detectInImageCompletion(FIRVisionImage.alloc().initWithImage(image), this.onSuccessListener);
    }
  }
}
