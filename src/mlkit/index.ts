import * as textrecognition from "./textrecognition";
import * as barcodescanning from "./barcodescanning";
import { ImageSource } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";

export interface MLKitOptions {
  image: Image | ImageSource;
}

export interface MLKitMultiEngineOptions extends MLKitOptions {
  engine?: "device" | "cloud"; // defaults to local, as cloud requires an additional plan
}

export {
  textrecognition,
  barcodescanning
};

