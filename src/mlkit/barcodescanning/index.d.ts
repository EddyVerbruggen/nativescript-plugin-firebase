import { MLKitCameraView, MLKitVisionOptions, MLKitVisionResult } from "../";
import { BarcodeFormat } from "./barcodescanning-common";

export { BarcodeFormat };

export interface MLKitScanBarcodesResultBounds {
  origin: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

export interface MLKitScanBarcodesResultBarcode {
  value: string;
  displayValue: string;
  format: string;
  bounds: MLKitScanBarcodesResultBounds;
  image: {
    width: number;
    height: number;
  };
  ios?: any;
  android?: any;
}

export interface MLKitScanBarcodesOnDeviceResult extends MLKitVisionResult {
  barcodes: Array<MLKitScanBarcodesResultBarcode>;
}

export interface MLKitScanBarcodesOnDeviceOptions extends MLKitVisionOptions {
  /**
   * Limit to only what you need to speed up processing.
   * If not set, we'll detect all supported formats.
   */
  formats?: Array<BarcodeFormat>;

  /**
   * Play a sound when a code was scanned.
   * Default true
   */
  beepOnScan?: boolean;

  /**
   * Wheter or not to report duplicate scan results during continuous scanning.
   * Default false.
   */
  reportDuplicates?: boolean;

  /**
   * Support for scanning inverse barcodes.
   * Default false.
   */
  supportInverseBarcodes?: boolean;
}

export declare function scanBarcodesOnDevice(options: MLKitScanBarcodesOnDeviceOptions): Promise<MLKitScanBarcodesOnDeviceResult>;

export declare class MLKitBarcodeScanner extends MLKitCameraView {
}