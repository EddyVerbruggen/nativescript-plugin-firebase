import { MLKitCameraView, MLKitOptions, MLKitResult } from "../index";

export interface MLKitLandmarkRecognitionResult extends MLKitResult {
  // TODO add locations
  landmarks: Array<{
    name: string;
    confidence: number;
  }>;
}

export interface MLKitLandmarkRecognitionOptions extends MLKitOptions {
  /**
   * 10 by default
   */
  maxResults?: number;
}

export declare function recognizeLandmarks(options: MLKitLandmarkRecognitionOptions): Promise<MLKitLandmarkRecognitionResult>;

// TODO not sure this works.. but we need quite a processing threshold as this is always in the cloud..
// .. and what about other features.. the camera should prolly always use a local model
export declare class MLKitLandmarkRecognition extends MLKitCameraView {}
