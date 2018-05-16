import { MLKitCameraView, MLKitCloudOptions, MLKitOptions, MLKitResult } from "../index";

export interface MLKitRecognizeTextResultBounds {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface MLKitRecognizeTextResultElement {
	text: string;
	bounds: MLKitRecognizeTextResultBounds;
}

export interface MLKitRecognizeTextResultLine {
	text: string;
	bounds: MLKitRecognizeTextResultBounds;
	elements: MLKitRecognizeTextResultElement[];
}

export interface MLKitRecognizeTextResultBlock {
	text: string;
	bounds: MLKitRecognizeTextResultBounds;
	lines: MLKitRecognizeTextResultLine[];
}

export interface MLKitRecognizeTextOnDeviceResult extends MLKitResult {
	blocks: MLKitRecognizeTextResultBlock[];
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
