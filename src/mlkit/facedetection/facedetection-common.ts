import { Property, booleanConverter, makeParser, makeValidator } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";
import { MLKitFaceDetectionMode } from "./";

export const minimumFaceSizeProperty = new Property<MLKitFaceDetection, number>({
  name: "minimumFaceSize",
  defaultValue: 0.1
});

export const enableFaceTrackingProperty = new Property<MLKitFaceDetection, boolean>({
  name: "enableFaceTracking",
  defaultValue: false,
  valueConverter: booleanConverter
});

const detectionModeConverter = makeParser<MLKitFaceDetectionMode>(makeValidator<MLKitFaceDetectionMode>("accurate", "fast"));
export const detectionModeProperty = new Property<MLKitFaceDetection, MLKitFaceDetectionMode>({
  name: "detectionMode",
  defaultValue: "fast",
  valueConverter: detectionModeConverter
});

export abstract class MLKitFaceDetection extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected enableFaceTracking: boolean;
  protected detectionMode: MLKitFaceDetectionMode;
  protected minimumFaceSize: number;

  [minimumFaceSizeProperty.setNative](value: number) {
    this.minimumFaceSize = value;
  }

  [enableFaceTrackingProperty.setNative](value: boolean) {
    this.enableFaceTracking = value;
  }

  [detectionModeProperty.setNative](value: MLKitFaceDetectionMode) {
    this.detectionMode = value;
  }
}

minimumFaceSizeProperty.register(MLKitFaceDetection);
enableFaceTrackingProperty.register(MLKitFaceDetection);
detectionModeProperty.register(MLKitFaceDetection);
