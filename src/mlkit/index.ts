import * as textrecognition from "./textrecognition";
import * as barcodescanning from "./barcodescanning";
import * as facedetection from "./facedetection";
import * as imagelabeling from "./imagelabeling";
import * as landmarkrecognition from "./landmarkrecognition";

import { ImageSource } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";

export interface MLKitOptions {
  image: Image | ImageSource;
}

export interface MLKitMultiEngineOptions extends MLKitOptions {
  engine?: "device" | "cloud"; // defaults to local, as cloud requires an additional plan
}

export interface MLKitResult {
  /**
   * Only set when using a camera stream,
   * because when detecting from static images... you already have the image, right? :)
   */
  imageSource?: ImageSource;
}

export declare class MLKitCameraView {
}

export declare class MLKitBarcodeScanner {
}

export {
  textrecognition,
  barcodescanning,
  facedetection,
  imagelabeling,
  landmarkrecognition
};

