import { MLKitMultiEngineOptions } from "../";
import { MLKitCameraView, MLKitResult } from "../index";

export interface MLKitRecognizeTextResult extends MLKitResult {
  features: Array<{
    text: string;
    // corners: any;
  }>;
}

export interface MLKitRecognizeTextOptions extends MLKitMultiEngineOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {}
