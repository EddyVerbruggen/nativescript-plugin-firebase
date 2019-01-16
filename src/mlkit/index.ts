import * as textrecognition from "./textrecognition";
import * as barcodescanning from "./barcodescanning";
import * as facedetection from "./facedetection";
import * as imagelabeling from "./imagelabeling";
import * as landmarkrecognition from "./landmarkrecognition";
import * as custommodel from "./custommodel";

import { ImageSource } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";

export interface MLKitOptions {
  image?: Image | ImageSource;
}

export type MLKitCloudModelType = "stable" | "latest";

export interface MLKitCloudOptions extends MLKitOptions {
  /**
   * Defaults to "stable".
   */
  modelType?: MLKitCloudModelType;
  /**
   * Defaults to 10.
   */
  maxResults?: number
}

export interface MLKitResult {
  /**
   * Only set when using a camera stream,
   * because when detecting from static images... you already have the image, right? :)
   */
  // imageSource?: ImageSource;
}

export declare class MLKitCameraView {
}

export {
  textrecognition,
  barcodescanning,
  facedetection,
  imagelabeling,
  landmarkrecognition,
  custommodel
};

