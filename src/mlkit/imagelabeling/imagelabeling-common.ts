import { Property } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";

// TODO could combine this with 'maxResults'
export const confidenceThresholdProperty = new Property<MLKitImageLabeling, number>({
  name: "confidenceThreshold",
  defaultValue: 0.5,
});

export abstract class MLKitImageLabeling extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected confidenceThreshold: number;

  [confidenceThresholdProperty.setNative](value: any) {
    this.confidenceThreshold = parseFloat(value);
  }
}

confidenceThresholdProperty.register(MLKitImageLabeling);
