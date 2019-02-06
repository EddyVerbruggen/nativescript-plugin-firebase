import { MLKitCameraView, MLKitVisionCloudOptions, MLKitVisionOptions, MLKitVisionResult } from "../index";

export interface MLKitRecognizeTextResultBounds {
  origin: {
    x: number;
    y: number;
  },
  size: {
    width: number;
    height: number;
  }
}

export interface MLKitRecognizeTextResultElement {
  text: string;
  bounds: MLKitRecognizeTextResultBounds;
}

export interface MLKitRecognizeTextResultLine {
  text: string;
  confidence: number;
  bounds: MLKitRecognizeTextResultBounds;
  elements: Array<MLKitRecognizeTextResultElement>;
}

export interface MLKitRecognizeTextResultBlock {
  text: string;
  confidence: number;
  bounds: MLKitRecognizeTextResultBounds;
  lines: Array<MLKitRecognizeTextResultLine>;
}

export interface MLKitRecognizeTextResult extends MLKitVisionResult {
  text?: string;
  blocks?: Array<MLKitRecognizeTextResultBlock>;
  ios?: any;
  android?: any;
}

// TODO see 'setLanguageHints' at https://firebase.google.com/docs/ml-kit/android/recognize-text

export interface MLKitRecognizeTextOnDeviceOptions extends MLKitVisionOptions {
}

export interface MLKitRecognizeTextCloudOptions extends MLKitVisionCloudOptions {
}

export declare function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextResult>;

export declare function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {
}
