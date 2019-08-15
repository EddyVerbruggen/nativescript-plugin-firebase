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

export const pauseProperty = new Property<MLKitCameraView, boolean>({
  name: "pause",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitCameraView extends ContentView {
  static scanResultEvent: string = "scanResult";

  public lastVisionImage;

  protected processEveryNthFrame: number;
  protected preferFrontCamera: boolean;
  protected torchOn: boolean;
  protected pause: boolean;

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

  [pauseProperty.setNative](value: boolean) {
    this.pause = value;
    this.pause ? this.pauseScanning() : this.resumeScanning();
  }

  protected updateTorch(): void {
    // implemented in concrete classes
  }

  protected pauseScanning(): void {
    // implemented in concrete classes
  }

  protected resumeScanning(): void {
    // implemented in concrete classes
  }

  protected preProcessImage(image: any): any {
    // implemented in concrete classes
    return image;
  }
}

processEveryNthFrameProperty.register(MLKitCameraView);
preferFrontCameraProperty.register(MLKitCameraView);
torchOnProperty.register(MLKitCameraView);
pauseProperty.register(MLKitCameraView);
