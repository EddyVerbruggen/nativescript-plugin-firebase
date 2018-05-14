import { booleanConverter } from "tns-core-modules/ui/core/view-base";
import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export const preferFrontCameraProperty = new Property<MLKitFaceDetection, boolean>({
  name: "preferFrontCamera",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitFaceDetection extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected formats: string;
  protected preferFrontCamera: boolean;

  [preferFrontCameraProperty.setNative](value: boolean) {
    this.preferFrontCamera = value;
  }
}

preferFrontCameraProperty.register(MLKitFaceDetection);
