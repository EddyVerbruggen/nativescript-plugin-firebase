import { MLKitVisionOptions } from "../";
import { MLKitCameraView, MLKitVisionResult } from "../index";

export interface MLKitObjectDetectionResultItemBounds {
  origin: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

export interface MLKitObjectDetectionResultItem {
  /**
   * Only set when detecting objects in a stream (not when using a still image)
   */
  id?: number;
  confidence: number;
  category: any;
  bounds: MLKitObjectDetectionResultItemBounds;
  image: {
    width: number;
    height: number;
  };
  ios?: any;
  android?: any;
}

export interface MLKitObjectDetectionResult extends MLKitVisionResult {
  objects: Array<MLKitObjectDetectionResultItem>;
}

export interface MLKitObjectDetectionOptions extends MLKitVisionOptions {
  /**
   * Detect and track multiple objects in the image.
   * Default false.
   */
  multiple?: boolean;

  /**
   * Try to classify the detected object(s).
   * Default false.
   */
  classify?: boolean;
}

export declare function detectObjects(options: MLKitObjectDetectionOptions): Promise<MLKitObjectDetectionResult>;

export declare class MLKitObjectDetection extends MLKitCameraView {
}
