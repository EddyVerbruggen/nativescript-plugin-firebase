import { MLKitCloudOptions, MLKitResult } from "../index";

export interface MLKitLandmarkRecognitionCloudResult extends MLKitResult {
  // TODO add locations
  landmarks: Array<{
    name: string;
    confidence: number;
  }>;
}

export interface MLKitLandmarkRecognitionCloudOptions extends MLKitCloudOptions {
}

export declare function recognizeLandmarksCloud(options: MLKitLandmarkRecognitionCloudOptions): Promise<MLKitLandmarkRecognitionCloudResult>;
