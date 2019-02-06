import { MLKitVisionCloudOptions, MLKitVisionResult } from "../index";

export interface MLKitLandmarkRecognitionResultLandmark {
  // TODO add location (see #704)
  name: string;
  confidence: number;
  ios?: any;
  android?: any;
}

export interface MLKitLandmarkRecognitionCloudResult extends MLKitVisionResult {
  landmarks: Array<MLKitLandmarkRecognitionResultLandmark>;
}

export interface MLKitLandmarkRecognitionCloudOptions extends MLKitVisionCloudOptions {
}

export declare function recognizeLandmarksCloud(options: MLKitLandmarkRecognitionCloudOptions): Promise<MLKitLandmarkRecognitionCloudResult>;
