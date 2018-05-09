import { QuerySnapshot } from "../firebase";
import { Image } from "tns-core-modules/ui/image";
import { ImageSource } from "tns-core-modules/image-source";

export interface MLKitRecognizeTextResult {
  features: Array<{
    text: string;
  }>;
}

export interface MLKitScanBarcodesResult {
  features: Array<{
    text: string;
  }>;
}

export interface MLKitOptions {
  engine?: "device" | "cloud"; // defaults to local, as cloud requires an additional plan
  image: Image | ImageSource;
}

export interface MLKitRecognizeTextOptions extends MLKitOptions {
}

export interface MLKitScanBarcodesOptions extends MLKitOptions {
}

export declare function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult>;
export declare function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult>;
