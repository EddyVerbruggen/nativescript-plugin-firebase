import { MLKitCameraView, MLKitVisionOptions, MLKitVisionResult } from "../";

export interface MLKitDetectFacesResultBounds {
  origin: {
    x: number;
    y: number;
  },
  size: {
    width: number;
    height: number;
  }
}

export interface MLKitDetectFacesResultFace {
  smilingProbability?: number;
  leftEyeOpenProbability?: number;
  rightEyeOpenProbability?: number;
  trackingId?: number;
  ios?: any;
  android?: any;
  bounds?: MLKitDetectFacesResultBounds;
  headEulerAngleZ?: number;
  headEulerAngleY?: number;
}

export interface MLKitDetectFacesOnDeviceResult extends MLKitVisionResult {
  faces: Array<MLKitDetectFacesResultFace>;
}

export type MLKitFaceDetectionMode = "fast" | "accurate";

export interface MLKitDetectFacesOnDeviceOptions extends MLKitVisionOptions {
  /**
   * Favor speed or accuracy when detecting faces.
   * Default "fast".
   */
  detectionMode?: MLKitFaceDetectionMode;

  /**
   * Whether or not to attempt to identify facial "landmarks": eyes, ears, nose, cheeks, mouth.
   * Default "none".
   *
   // detectLandmarks?: "none" | "all";
   */

  /**
   * The minimum size, relative to the image, of faces to detect.
   * Default 0.1.
   */
  minimumFaceSize?: number;

  /**
   * Whether or not to assign faces an ID, which can be used to track faces across images.
   * Default false.
   */
  enableFaceTracking?: boolean;
}

export declare function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult>;

export declare class MLKitFaceDetection extends MLKitCameraView {
}
