import { MLKitCloudOptions, MLKitResult } from "../index";

export interface MLKitLandmarkRecognitionResultLandmark {
  // TODO add location (see #704)
  name: string;
  confidence: number;
  ios?: any;
  android?: any;
}

export interface MLKitLandmarkRecognitionCloudResult extends MLKitResult {
  landmarks: Array<MLKitLandmarkRecognitionResultLandmark>;
}

export interface MLKitLandmarkRecognitionCloudOptions extends MLKitCloudOptions {
}

export declare function recognizeLandmarksCloud(options: MLKitLandmarkRecognitionCloudOptions): Promise<MLKitLandmarkRecognitionCloudResult>;
