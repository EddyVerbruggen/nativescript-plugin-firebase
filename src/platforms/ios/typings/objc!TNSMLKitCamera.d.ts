declare var TNSMLKitCameraVersionNumber: number;

declare var TNSMLKitCameraVersionString: interop.Reference<number>;

declare class TNSMLKitCameraView extends UIViewController implements AVCaptureVideoDataOutputSampleBufferDelegate {

  static alloc(): TNSMLKitCameraView; // inherited from NSObject

  static new(): TNSMLKitCameraView; // inherited from NSObject

  static resizeImage(image: UIImage): NSArray<any>;

  delegate: TNSMLKitCameraViewDelegate;

  imageOrientation: UIImageOrientation;

  processEveryXFrames: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly;  // inherited from NSObjectProtocol

  constructor(o: { captureSession: AVCaptureSession; });

  captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

  captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithCaptureSession(captureSession: AVCaptureSession): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

interface TNSMLKitCameraViewDelegate extends NSObjectProtocol {

  cameraDidOutputImage(image: UIImage): void;
}

declare var TNSMLKitCameraViewDelegate: {

  prototype: TNSMLKitCameraViewDelegate;
};
