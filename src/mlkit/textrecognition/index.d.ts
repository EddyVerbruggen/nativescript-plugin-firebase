import { MLKitMultiEngineOptions } from "../";

export interface MLKitRecognizeTextResult {
  features: Array<{
    text: string;
  }>;
}

export interface MLKitRecognizeTextOptions extends MLKitMultiEngineOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;
