import {
  MLKitOptions,
  MLKitRecognizeTextOptions,
  MLKitRecognizeTextResult,
  MLKitScanBarcodesOptions,
  MLKitScanBarcodesResult
} from "./mlkit";
import { ImageSource } from "tns-core-modules/image-source";

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextDetector = firVision.textDetector();

      textDetector.detectInImageCompletion(getImage(options), (features: NSArray<FIRVisionText>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (features !== null) {
          const result = <MLKitRecognizeTextResult>{
            features: []
          };

          for (let i = 0, l = features.count; i < l; i++) {
            const feature: FIRVisionText = features.objectAtIndex(i);
            result.features.push({
              text: feature.text
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeText: " + ex);
      reject(ex);
    }
  });
}

export function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      // TODO pass in formats
      const barcodeDetector: FIRVisionBarcodeDetector = firVision.barcodeDetector();
      // const textDetector: FIRVisionBarcodeDetector = firVision.barcodeDetectorWithOptions();

      barcodeDetector.detectInImageCompletion(getImage(options), (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (barcodes !== null) {
          const result = <MLKitScanBarcodesResult>{
            barcodes: []
          };

          for (let i = 0, l = barcodes.count; i < l; i++) {
            const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
            result.barcodes.push({
              value: barcode.rawValue,
              format: barcode.format // TODO transform in a x-plat friendly way
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodes: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
