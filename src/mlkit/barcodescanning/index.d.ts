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
}

export declare function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult>;

export declare class MLKitBarcodeScanner extends ContentView {}
