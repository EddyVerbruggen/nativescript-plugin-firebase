import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export const maxResultsThresholdProperty = new Property<MLKitLandmarkRecognition, number>({
  name: "maxResults",
  defaultValue: 10,
});

export abstract class MLKitLandmarkRecognition extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected maxResults: number;

  [maxResultsThresholdProperty.setNative](value: number) {
    this.maxResults = value;
  }
}

maxResultsThresholdProperty.register(MLKitLandmarkRecognition);
