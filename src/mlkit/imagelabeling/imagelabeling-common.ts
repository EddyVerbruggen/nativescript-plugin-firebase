import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export const confidenceThresholdProperty = new Property<MLKitImageLabeling, number>({
  name: "confidenceThreshold",
  defaultValue: 0.5,
});

export abstract class MLKitImageLabeling extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected confidenceThreshold: number;
  protected maxResults: number;

  [confidenceThresholdProperty.setNative](value: number) {
    this.confidenceThreshold = value;
  }
}

confidenceThresholdProperty.register(MLKitImageLabeling);
