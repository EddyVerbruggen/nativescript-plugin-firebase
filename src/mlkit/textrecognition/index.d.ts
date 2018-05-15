import { MLKitCameraView, MLKitCloudOptions, MLKitOptions, MLKitResult } from "../index";

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

export interface MLKitRecognizeTextLocalResult extends MLKitResult {
  features: Array<MLKitRecognizeTextResultFeature>;
}

export interface MLKitRecognizeTextCloudResult extends MLKitResult {
  text: string;
}

export interface MLKitRecognizeTextLocalOptions extends MLKitOptions {
}

export interface MLKitRecognizeTextCloudOptions extends MLKitCloudOptions {
}

export declare function recognizeTextLocal(options: MLKitRecognizeTextLocalOptions): Promise<MLKitRecognizeTextLocalResult>;

export declare function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextCloudResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {
}
