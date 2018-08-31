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

export const torchOnProperty = new Property<MLKitCameraView, boolean>({
  name: "torchOn",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitCameraView extends ContentView {
  static scanResultEvent: string = "scanResult";

  protected lastVisionImage;

  protected processEveryNthFrame: number;
  protected preferFrontCamera: boolean;
  protected torchOn: boolean;

  [processEveryNthFrameProperty.setNative](value: number) {
    this.processEveryNthFrame = value;
  }

  [preferFrontCameraProperty.setNative](value: boolean) {
    this.preferFrontCamera = value;
  }

  [torchOnProperty.setNative](value: boolean) {
    this.torchOn = value;
    this.updateTorch();
  }

  protected updateTorch(): void {
    // implemented in concrete classes
  };
}

processEveryNthFrameProperty.register(MLKitCameraView);
preferFrontCameraProperty.register(MLKitCameraView);
torchOnProperty.register(MLKitCameraView);
