import { MLKitMultiEngineOptions } from "../";
import { MLKitResult } from "../index";

export interface MLKitRecognizeTextResult extends MLKitResult {
  features: Array<{
    text: string;
  }>;
}

export interface MLKitRecognizeTextOptions extends MLKitMultiEngineOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;
