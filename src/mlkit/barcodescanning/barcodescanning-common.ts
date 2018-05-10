import { booleanConverter } from "tns-core-modules/ui/core/view-base";
import { Property } from "tns-core-modules/ui/core/properties";
import { MLKitCameraView } from "../mlkit-cameraview";

export enum BarcodeFormat {
  // UNKNOWN = -1,
  // ALL = 0,
  CODE_128 = 1,
  CODE_39 = 2,
  CODE_93 = 4,
  CODABAR = 8,
  DATA_MATRIX = 16,
  EAN_13 = 32,
  EAN_8 = 64,
  ITF = 128,
  QR_CODE = 256,
  UPC_A = 512,
  UPC_E = 1024,
  PDF417 = 2048,
  AZTEC = 4096,
}

export const formatsProperty = new Property<MLKitBarcodeScanner, string>({
  name: "formats",
  defaultValue: null,
});

export const preferFrontCameraProperty = new Property<MLKitBarcodeScanner, boolean>({
  name: "preferFrontCamera",
  defaultValue: false,
  valueConverter: booleanConverter
});

export const beepOnScanProperty = new Property<MLKitBarcodeScanner, boolean>({
  name: "beepOnScan",
  defaultValue: true,
  valueConverter: booleanConverter
});

export const reportDuplicatesProperty = new Property<MLKitBarcodeScanner, boolean>({
  name: "reportDuplicates",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitBarcodeScanner extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";

  protected formats: string;
  protected preferFrontCamera: boolean;
  protected beepOnScan: boolean;
  protected reportDuplicates: boolean;

  [formatsProperty.setNative](value: string) {
    this.formats = value;
  }

  [preferFrontCameraProperty.setNative](value: boolean) {
    this.preferFrontCamera = value;
  }

  [beepOnScanProperty.setNative](value: boolean) {
    this.beepOnScan = value;
  }

  [reportDuplicatesProperty.setNative](value: boolean) {
    this.reportDuplicates = value;
  }
}

formatsProperty.register(MLKitBarcodeScanner);
preferFrontCameraProperty.register(MLKitBarcodeScanner);
beepOnScanProperty.register(MLKitBarcodeScanner);
reportDuplicatesProperty.register(MLKitBarcodeScanner);
