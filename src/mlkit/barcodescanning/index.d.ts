import { MLKitOptions } from "../";
import { ContentView } from "tns-core-modules/ui/content-view";
import { BarcodeFormat } from "./barcodescanning-common";

export declare const BarcodeFormat: typeof BarcodeFormat;

export interface MLKitScanBarcodesResult {
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

export declare class MLKitBarcodeScanner extends ContentView {}
