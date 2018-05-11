import { ImageSource } from "tns-core-modules/image-source";
import { MLKitScanBarcodesOptions, MLKitScanBarcodesResult } from "./index";
import { MLKitOptions } from "../index";
import { BarcodeFormat, MLKitBarcodeScanner as MLKitBarcodeScannerBase } from "./barcodescanning-common";

export { BarcodeFormat };

export class MLKitBarcodeScanner extends MLKitBarcodeScannerBase {
  protected createDetector(): any {
    let formats: Array<BarcodeFormat>;
    if (this.formats) {
      formats = [];
      const requestedFormats = this.formats.split(",");
      requestedFormats.forEach(format => formats.push(BarcodeFormat[format.trim().toUpperCase()]))
    }
    return getBarcodeDetector(formats);
  }

  protected createSuccessListener(): any {
    return (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (barcodes !== null) {
        const result = <MLKitScanBarcodesResult>{
          barcodes: []
        };

        for (let i = 0, l = barcodes.count; i < l; i++) {
          const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
          result.barcodes.push({
            value: barcode.rawValue,
            format: BarcodeFormat[barcode.format]
          });
        }

        this.notify({
          eventName: MLKitBarcodeScanner.scanResultEvent,
          object: this,
          value: result
        });
      }
    }
  }
}

function getBarcodeDetector(formats?: Array<BarcodeFormat>): any {
  if (formats && formats.length > 0) {
    // TODO
    const barcodeDetector: FIRVisionBarcodeDetector = FIRVision.vision().barcodeDetector();
    return barcodeDetector;
    // const firebaseVisionBarcodeDetectorOptions =
    //     new com.google.firebase.ml.vision.barcode.FirebaseVisionBarcodeDetectorOptions.Builder()
    //         .setBarcodeFormats(formats[0], formats) // the seconds argument is a varargs.. let's make it easy and just do it like this
    //         .build();
    // return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector(firebaseVisionBarcodeDetectorOptions);
  } else {
    return FIRVision.vision().barcodeDetector();
  }
}

export function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult> {
  return new Promise((resolve, reject) => {
    try {
      const barcodeDetector = getBarcodeDetector(options.formats);

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
              format: BarcodeFormat[barcode.format]
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

// TODO move
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
