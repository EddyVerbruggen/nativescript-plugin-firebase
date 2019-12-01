import { MLKitCameraView, MLKitVisionOptions, MLKitVisionResult } from "../index";

export interface MLKitAutoMLResultLabel {
  text: string;
  confidence: number;
  ios?: any;
  android?: any;
}

export interface MLKitAutoMLResult extends MLKitVisionResult {
  labels: Array<MLKitAutoMLResultLabel>;
}

export interface MLKitAutoMLOptions extends MLKitVisionOptions {
  /**
   * The folder name in your App_Resources/iOS or App_Resources/Android/src/main/assets folder.
   */
  localModelResourceFolder: string;

  /**
   * Evaluate your model in the Firebase console to determine an appropriate value.
   * 0.5 by default.
   */
  confidenceThreshold?: number;
}

export declare function labelImage(options: MLKitAutoMLOptions): Promise<MLKitAutoMLResult>;

export declare class MLKitAutoML extends MLKitCameraView {}
