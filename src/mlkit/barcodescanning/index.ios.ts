import { ImageSource } from "tns-core-modules/image-source";
import { BarcodeFormat } from "./barcodescanning-common";
import { MLKitCameraView as MLKitBarcodeScannerBase } from "../mlkit-cameraview";
import { MLKitScanBarcodesOptions, MLKitScanBarcodesResult } from "./index";
import { MLKitOptions } from "../index";

export { BarcodeFormat };

export class MLKitBarcodeScanner extends MLKitBarcodeScannerBase {

  protected createDetector(): any {
  }

  protected createFailureListener(): any {
  }

  protected createSuccessListener(): any {
  }

  // public onLayout(left: number, top: number, right: number, bottom: number): void {
  //   super.onLayout(left, top, right, bottom);
  //   if (this._hasSupport && this.ios) {
  //     this._reader.previewLayer.frame = this.ios.layer.bounds;
  //   }
  // }
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
