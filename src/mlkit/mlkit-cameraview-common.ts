import { ContentView } from "tns-core-modules/ui/content-view";
import { Property } from "tns-core-modules/ui/core/properties";
import { booleanConverter } from "tns-core-modules/ui/core/view-base";

export const processEveryNthFrameProperty = new Property<MLKitCameraView, number>({
  name: "processEveryNthFrame",
  defaultValue: 10,
});

export const preferFrontCameraProperty = new Property<MLKitCameraView, boolean>({
  name: "preferFrontCamera",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitCameraView extends ContentView {
  static scanResultEvent: string = "scanResult";

  protected lastVisionImage;

  protected processEveryNthFrame: number;
  protected preferFrontCamera: boolean;

  [processEveryNthFrameProperty.setNative](value: number) {
    this.processEveryNthFrame = value;
  }

  [preferFrontCameraProperty.setNative](value: boolean) {
    this.preferFrontCamera = value;
  }
}

processEveryNthFrameProperty.register(MLKitCameraView);
preferFrontCameraProperty.register(MLKitCameraView);
