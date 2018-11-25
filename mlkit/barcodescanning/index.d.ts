import { MLKitOptions } from "../";
import { BarcodeFormat } from "./barcodescanning-common";
import { MLKitResult, MLKitCameraView } from "../index";

export { BarcodeFormat };

export interface MLKitScanBarcodesResultBarcode {
  value: string;
  format: string;
  ios?: any;
  android?: any;
  // TODO details
}

export interface MLKitScanBarcodesOnDeviceResult extends MLKitResult {
  barcodes: Array<MLKitScanBarcodesResultBarcode>;
}

export interface MLKitScanBarcodesOnDeviceOptions extends MLKitOptions {
  /**
   * Limit to only what you need to speed up processing.
   * If not set, we'll detect all supported formats.
   */
  formats?: Array<BarcodeFormat>;
}

export declare function scanBarcodesOnDevice(options: MLKitScanBarcodesOnDeviceOptions): Promise<MLKitScanBarcodesOnDeviceResult>;

export declare class MLKitBarcodeScanner extends MLKitCameraView {}
