import { MLKitMultiEngineOptions } from "../";
import { MLKitCameraView, MLKitResult } from "../index";

export interface MLKitRecognizeTextResultFeature {
  text: string;
  elements: Array<{
    text: string;
    bounds: {
      origin: {
        x: number;
        y: number;
      },
      size: {
        width: number;
        height: number;
      }
    };
  }>
}

export interface MLKitRecognizeTextResult extends MLKitResult {
  features: Array<MLKitRecognizeTextResultFeature>;
}

export interface MLKitRecognizeTextOptions extends MLKitMultiEngineOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {}
