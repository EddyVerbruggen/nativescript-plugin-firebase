import { Property, booleanConverter } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";

export const reportDuplicatesProperty = new Property<MLKitTextRecognition, boolean>({
  name: "reportDuplicates",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitTextRecognition extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected reportDuplicates: boolean;

  [reportDuplicatesProperty.setNative](value: boolean) {
    this.reportDuplicates = value;
  }
}

reportDuplicatesProperty.register(MLKitTextRecognition);
