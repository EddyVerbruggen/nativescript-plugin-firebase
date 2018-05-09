import { QuerySnapshot } from "../firebase";
import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "tns-core-modules/image-source";

export interface MLKitRecognizeTextResult {
  features: Array<{
    text: string;
  }>;
}

export interface MLKitScanBarcodesResult {
  barcodes: Array<{
    value: string;
    format: number; // TODO friendly x-plat value
  }>;
}

export interface MLKitOptions {
  image: Image | ImageSource;
}

export interface MLKitMultiEngineOptions extends MLKitOptions {
  engine?: "device" | "cloud"; // defaults to local, as cloud requires an additional plan
}

export interface MLKitRecognizeTextOptions extends MLKitMultiEngineOptions {
}

export interface MLKitScanBarcodesOptions extends MLKitOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;
export declare function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult>;
