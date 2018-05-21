import { ImageSource } from "tns-core-modules/image-source";
import { MLKitScanBarcodesOnDeviceOptions, MLKitScanBarcodesOnDeviceResult } from "./index";
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

      } else if (barcodes !== null && barcodes.count > 0) {
        const result = <MLKitScanBarcodesOnDeviceResult>{
          barcodes: []
        };

        for (let i = 0, l = barcodes.count; i < l; i++) {
          const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
          result.barcodes.push({
            value: barcode.rawValue,
            format: BarcodeFormat[barcode.format],
            ios: barcode
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

  protected rotateRecording(): boolean {
    return false;
  }
}

function getBarcodeDetector(formats?: Array<BarcodeFormat>): any {
  if (formats && formats.length > 0) {
    let barcodeFormats = 0;
    formats.forEach(format => barcodeFormats |= format);
    return FIRVision.vision().barcodeDetectorWithOptions(FIRVisionBarcodeDetectorOptions.alloc().initWithFormats(barcodeFormats));
  } else {
    return FIRVision.vision().barcodeDetector();
  }
}

export function scanBarcodesOnDevice(options: MLKitScanBarcodesOnDeviceOptions): Promise<MLKitScanBarcodesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const barcodeDetector = getBarcodeDetector(options.formats);

      barcodeDetector.detectInImageCompletion(getImage(options), (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (barcodes !== null) {
          const result = <MLKitScanBarcodesOnDeviceResult>{
            barcodes: []
          };

          for (let i = 0, l = barcodes.count; i < l; i++) {
            const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
            result.barcodes.push({
              value: barcode.rawValue,
              format: BarcodeFormat[barcode.format],
              ios: barcode
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodesOnDevice: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
