import { Property, booleanConverter } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";

export enum ObjectDetectionCategory {
  Unknown = 0,
  HomeGoods = 1,
  FashionGoods = 2,
  Food = 3,
  Places = 4,
  Plants = 5
}

export const classifyProperty = new Property<MLKitObjectDetection, boolean>({
  name: "classify",
  defaultValue: false,
  valueConverter: booleanConverter
});

export const multipleProperty = new Property<MLKitObjectDetection, boolean>({
  name: "multiple",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitObjectDetection extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected classify: boolean;
  protected multiple: boolean;

  [classifyProperty.setNative](value: boolean) {
    this.classify = value;
  }

  [multipleProperty.setNative](value: boolean) {
    this.multiple = value;
  }
}

classifyProperty.register(MLKitObjectDetection);
multipleProperty.register(MLKitObjectDetection);
