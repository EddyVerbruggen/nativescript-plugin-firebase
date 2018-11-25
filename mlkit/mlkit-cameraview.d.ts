import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";

export declare abstract class MLKitCameraView extends MLKitCameraViewBase {
  protected lastVisionImage;

  protected abstract createDetector(): any;

  protected abstract createSuccessListener(): any;

  getVisionOrientation(imageOrientation: any): any;
}

