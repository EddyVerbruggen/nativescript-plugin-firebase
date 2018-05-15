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

export interface MLKitRecognizeTextOnDeviceResult extends MLKitResult {
  features: Array<MLKitRecognizeTextResultFeature>;
}

export interface MLKitRecognizeTextCloudResult extends MLKitResult {
  text: string;
}

export interface MLKitRecognizeTextOnDeviceOptions extends MLKitOptions {
}

export interface MLKitRecognizeTextCloudOptions extends MLKitCloudOptions {
}

export declare function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextOnDeviceResult>;

export declare function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextCloudResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {
}
