import { MLKitCameraView } from "../mlkit-cameraview";

export abstract class MLKitCustomModel extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";
}
