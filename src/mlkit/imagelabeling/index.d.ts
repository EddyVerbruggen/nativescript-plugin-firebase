import { MLKitVisionOptions } from "../";
import { MLKitCameraView, MLKitVisionResult } from "../index";

export interface MLKitImageLabelingResultLabel {
  text: string;
  confidence: number;
  ios?: any;
  android?: any;
}

export interface MLKitImageLabelingCloudResult extends MLKitVisionResult {
  labels: Array<MLKitImageLabelingResultLabel>;
}

export interface MLKitImageLabelingOnDeviceResult extends MLKitImageLabelingCloudResult {
}

export interface MLKitImageLabelingOptions extends MLKitVisionOptions {
  /**
   * 0.5 by default
   */
  confidenceThreshold?: number;
}

export declare function labelImageOnDevice(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingOnDeviceResult>;

export declare function labelImageCloud(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingCloudResult>;

export declare class MLKitImageLabeling extends MLKitCameraView {}
