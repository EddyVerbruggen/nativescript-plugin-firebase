import { booleanConverter, Property } from "@nativescript/core";
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

export const supportInverseBarcodesProperty = new Property<MLKitBarcodeScanner, boolean>({
  name: "supportInverseBarcodes",
  defaultValue: false,
  valueConverter: booleanConverter
});

export abstract class MLKitBarcodeScanner extends MLKitCameraView {
  protected formats: string;
  protected beepOnScan: boolean;
  protected reportDuplicates: boolean;
  protected supportInverseBarcodes: boolean;

  [formatsProperty.setNative](value: string) {
    this.formats = value;
  }

  [beepOnScanProperty.setNative](value: boolean) {
    this.beepOnScan = value;
  }

  [reportDuplicatesProperty.setNative](value: boolean) {
    this.reportDuplicates = value;
  }

  [supportInverseBarcodesProperty.setNative](value: boolean) {
    this.supportInverseBarcodes = value;
  }
}

formatsProperty.register(MLKitBarcodeScanner);
beepOnScanProperty.register(MLKitBarcodeScanner);
reportDuplicatesProperty.register(MLKitBarcodeScanner);
supportInverseBarcodesProperty.register(MLKitBarcodeScanner);
