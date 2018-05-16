import { ContentView } from "tns-core-modules/ui/content-view";
import { Property } from "tns-core-modules/ui/core/properties";

export const processEveryNthFrameProperty = new Property<MLKitCameraView, number>({
  name: "processEveryNthFrame",
  defaultValue: 10,
});

export abstract class MLKitCameraView extends ContentView {
  static scanResultEvent: string = "scanResult";

  protected lastVisionImage;

  protected processEveryNthFrame: number;

  [processEveryNthFrameProperty.setNative](value: number) {
    this.processEveryNthFrame = value;
  }
}

processEveryNthFrameProperty.register(MLKitCameraView);
