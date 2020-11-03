import { Property } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";

export const localModelResourceFolderProperty = new Property<MLKitAutoML, string>({
  name: "localModelResourceFolder",
  defaultValue: null,
});

export const confidenceThresholdProperty = new Property<MLKitAutoML, number>({
  name: "confidenceThreshold",
  defaultValue: 0.5,
});

export abstract class MLKitAutoML extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected localModelResourceFolder: string;
  protected confidenceThreshold: number;


  [localModelResourceFolderProperty.setNative](value: string) {
    this.localModelResourceFolder = value;
  }

  [confidenceThresholdProperty.setNative](value: any) {
    this.confidenceThreshold = parseFloat(value);
  }
}

localModelResourceFolderProperty.register(MLKitAutoML);
confidenceThresholdProperty.register(MLKitAutoML);
