import { MLKitOptions } from "../";
import { MLKitCameraView, MLKitResult } from "../index";

export interface MLKitImageLabelingResult extends MLKitResult {
  labels: Array<{
    text: string;
    confidence: number;
    // corners: any;
  }>;
}

export interface MLKitImageLabelingOptions extends MLKitOptions {
  /**
   * 0.5 by default
   */
  confidenceThreshold?: number;
  /**
   * 10 by default
   */
  maxResults?: number;
}

export declare function labelImage(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingResult>;

export declare class MLKitImageLabeling extends MLKitCameraView {}
