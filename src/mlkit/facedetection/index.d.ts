import { MLKitOptions } from "../";
import { BarcodeFormat } from "./barcodescanning-common";
import { MLKitCameraView, MLKitResult } from "../index";

export interface MLKitDetectFacesResult extends MLKitResult {
  // TODO there are more properties we can return, see https://firebase.google.com/docs/ml-kit/android/detect-faces
  faces: Array<{
    smilingProbability: number;
    leftEyeOpenProbability: number;
    rightEyeOpenProbability: number;
  }>;
}

export interface MLKitDetectFacesOptions extends MLKitOptions {
  // TODO there are a few options here
}

export declare function detectFaces(options: MLKitDetectFacesOptions): Promise<MLKitDetectFacesResult>;

export declare class MLKitFaceDetection extends MLKitCameraView {}
