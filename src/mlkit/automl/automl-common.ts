import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export const confidenceThresholdProperty = new Property<MLKitAutoML, number>({
  name: "confidenceThreshold",
  defaultValue: 0.5,
});

export abstract class MLKitAutoML extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected confidenceThreshold: number;

  [confidenceThresholdProperty.setNative](value: any) {
    this.confidenceThreshold = parseFloat(value);
  }
}

confidenceThresholdProperty.register(MLKitAutoML);
