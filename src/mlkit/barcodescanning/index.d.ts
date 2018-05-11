import { MLKitOptions } from "../";
import { BarcodeFormat } from "./barcodescanning-common";
import { MLKitResult, MLKitCameraView } from "../index";

export interface MLKitScanBarcodesResult extends MLKitResult {
  barcodes: Array<{
    value: string;
    format: string;
  }>;
}

export interface MLKitScanBarcodesOptions extends MLKitOptions {
  /**
   * Limit to only what you need to speed up processing.
   * If not set, we'll detect all supported formats.
   */
  formats?: Array<BarcodeFormat>;
}

export declare function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult>;

export declare class MLKitBarcodeScanner extends MLKitCameraView {}
