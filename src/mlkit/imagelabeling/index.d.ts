import { MLKitOptions } from "../";
import { MLKitCameraView, MLKitCloudOptions, MLKitResult } from "../index";

export interface MLKitImageLabelingCloudResult extends MLKitResult {
  labels: Array<{
    text: string;
    confidence: number;
  }>;
}

export interface MLKitImageLabelingOnDeviceResult extends MLKitImageLabelingCloudResult {
}

export interface MLKitImageLabelingOnDeviceOptions extends MLKitOptions {
  /**
   * 0.5 by default
   */
  confidenceThreshold?: number;
}

export interface MLKitImageLabelingCloudOptions extends MLKitCloudOptions {
}

export declare function labelImageOnDevice(options: MLKitImageLabelingOnDeviceOptions): Promise<MLKitImageLabelingOnDeviceResult>;

export declare function labelImageCloud(options: MLKitImageLabelingCloudOptions): Promise<MLKitImageLabelingCloudResult>;

export declare class MLKitImageLabeling extends MLKitCameraView {}
