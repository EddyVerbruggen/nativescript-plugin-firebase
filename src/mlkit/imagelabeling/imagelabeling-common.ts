import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export const confidenceThresholdProperty = new Property<MLKitImageLabeling, number>({
  name: "confidenceThreshold",
  defaultValue: 0.5,
});

// TODO use
export const maxResultsThresholdProperty = new Property<MLKitImageLabeling, number>({
  name: "maxResults",
  defaultValue: 10,
});

export abstract class MLKitImageLabeling extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected confidenceThreshold: number;
  protected maxResults: number;

  [confidenceThresholdProperty.setNative](value: number) {
    this.confidenceThreshold = value;
  }

  [maxResultsThresholdProperty.setNative](value: number) {
    this.maxResults = value;
  }
}

confidenceThresholdProperty.register(MLKitImageLabeling);
maxResultsThresholdProperty.register(MLKitImageLabeling);
