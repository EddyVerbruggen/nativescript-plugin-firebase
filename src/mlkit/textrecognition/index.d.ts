import { MLKitCameraView, MLKitCloudOptions, MLKitOptions, MLKitResult } from "../index";

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
	bounds: MLKitRecognizeTextResultBounds;
	elements: Array<MLKitRecognizeTextResultElement>;
}

export interface MLKitRecognizeTextResultBlock {
	text: string;
	bounds: MLKitRecognizeTextResultBounds;
	lines: Array<MLKitRecognizeTextResultLine>;
}

export interface MLKitRecognizeTextResult extends MLKitResult {
  text?: string;
	blocks?: Array<MLKitRecognizeTextResultBlock>;
  ios?: any;
  android?: any;
}

// TODO see 'setLanguageHints' at https://firebase.google.com/docs/ml-kit/android/recognize-text

export interface MLKitRecognizeTextOnDeviceOptions extends MLKitOptions {
}

export interface MLKitRecognizeTextCloudOptions extends MLKitCloudOptions {
}

export declare function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextResult>;

export declare function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextResult>;

export declare class MLKitTextRecognition extends MLKitCameraView {
}
