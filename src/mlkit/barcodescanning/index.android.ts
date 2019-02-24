import { ImageSource } from "tns-core-modules/image-source";
import { MLKitScanBarcodesOnDeviceOptions, MLKitScanBarcodesOnDeviceResult, MLKitScanBarcodesResultBounds } from "./";
import { MLKitVisionOptions } from "../index";
import { BarcodeFormat, MLKitBarcodeScanner as MLKitBarcodeScannerBase } from "./barcodescanning-common";

export { BarcodeFormat };

const gmsTasks = (<any>com.google.android.gms).tasks;

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
    return new gmsTasks.OnSuccessListener({
      onSuccess: barcodes => {

        const result = <MLKitScanBarcodesOnDeviceResult>{
          barcodes: []
        };

        if (barcodes) {
          // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
          for (let i = 0; i < barcodes.size(); i++) {
            const barcode = barcodes.get(i);
            result.barcodes.push({
              value: barcode.getRawValue(),
              format: BarcodeFormat[barcode.getFormat()],
              android: barcode,
              bounds: boundingBoxToBounds(barcode.getBoundingBox())
            });
          }
        }

        this.notify({
          eventName: MLKitBarcodeScanner.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

function boundingBoxToBounds(rect: any): MLKitScanBarcodesResultBounds {
  return {
    origin: {
      x: rect.left,
      y: rect.top
    },
    size: {
      width: rect.width(),
      height: rect.height()
    }
  }
}

function getBarcodeDetector(formats?: Array<BarcodeFormat>): any {
  if (formats && formats.length > 0) {
    const firebaseVisionBarcodeDetectorOptions =
        new com.google.firebase.ml.vision.barcode.FirebaseVisionBarcodeDetectorOptions.Builder()
            .setBarcodeFormats(formats[0], formats) // the seconds argument is a varargs.. let's make it easy and just do it like this
            .build();
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector(firebaseVisionBarcodeDetectorOptions);
  } else {
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector();
  }
}

export function scanBarcodesOnDevice(options: MLKitScanBarcodesOnDeviceOptions): Promise<MLKitScanBarcodesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionBarcodeDetector = getBarcodeDetector(options.formats);

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: barcodes => {
          const result = <MLKitScanBarcodesOnDeviceResult>{
            barcodes: []
          };

          if (barcodes) {
            // There are more details available, see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
            for (let i = 0; i < barcodes.size(); i++) {
              const barcode = barcodes.get(i);
              result.barcodes.push({
                value: barcode.getRawValue(),
                format: BarcodeFormat[barcode.getFormat()],
                android: barcode,
                bounds: boundingBoxToBounds(barcode.getBoundingBox())
              });
            }
          }

          resolve(result);
          firebaseVisionBarcodeDetector.close();
        }
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionBarcodeDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodesOnDevice: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
