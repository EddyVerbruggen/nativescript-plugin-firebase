import { MLKitOptions } from "../";
import { MLKitCameraView, MLKitResult } from "../index";

export interface MLKitDetectFacesOnDeviceResult extends MLKitResult {
  // TODO there are more properties we can return, see https://firebase.google.com/docs/ml-kit/android/detect-faces
  faces: Array<{
    smilingProbability?: number;
    leftEyeOpenProbability?: number;
    rightEyeOpenProbability?: number;
  }>;
}

export interface MLKitDetectFacesOnDeviceOptions extends MLKitOptions {
  // TODO there are a few options here
}

export declare function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult>;

export declare class MLKitFaceDetection extends MLKitCameraView {}
