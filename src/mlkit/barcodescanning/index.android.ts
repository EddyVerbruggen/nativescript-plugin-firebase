import { ImageSource } from "tns-core-modules/image-source";
import { MLKitScanBarcodesOptions, MLKitScanBarcodesResult } from "./";
import { MLKitOptions } from "../index";
import { BarcodeFormat, MLKitBarcodeScanner as MLKitBarcodeScannerBase } from "./barcodescanning-common";

declare const com: any;

export class MLKitBarcodeScanner extends MLKitBarcodeScannerBase {

  protected createDetector(): any {
    return getBarcodeDetector();
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: (barcodes) => {

        const imageSource = new ImageSource();
        imageSource.setNativeSource(this.lastVisionImage.getBitmapForDebugging());

        const result = <MLKitScanBarcodesResult>{
          imageSource: imageSource,
          barcodes: []
        };

        // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
        for (let i = 0; i < barcodes.size(); i++) {
          const barcode = barcodes.get(i);
          result.barcodes.push({
            value: barcode.getRawValue(),
            format: BarcodeFormat[barcode.getFormat()]
          });
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

function getBarcodeDetector(formats?: Array<BarcodeFormat>): any {
  if (formats) {
    const nativeFormats: Array<any> = [];
    formats.forEach(format => {
      format === BarcodeFormat.AZTEC && nativeFormats.push(com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode.FORMAT_AZTEC);
      format === BarcodeFormat.CODABAR && nativeFormats.push(com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode.FORMAT_CODABAR);
      format === BarcodeFormat.QR_CODE && nativeFormats.push(com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode.FORMAT_QR_CODE);
      // TODO other formats..
    });

    console.log("formats: " + JSON.stringify(formats));
    console.log("nativeFormats: " + JSON.stringify(nativeFormats));

    const firebaseVisionBarcodeDetectorOptions =
        new com.google.firebase.ml.vision.barcode.FirebaseVisionBarcodeDetectorOptions.Builder()
            .setBarcodeFormats(nativeFormats)
            .build();
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector(firebaseVisionBarcodeDetectorOptions);
  } else {
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector();
  }
}

export function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionBarcodeDetector = getBarcodeDetector(options.formats);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (barcodes) => {
          const result = <MLKitScanBarcodesResult>{
            barcodes: []
          };

          // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
          for (let i = 0; i < barcodes.size(); i++) {
            const barcode = barcodes.get(i);
            result.barcodes.push({
              value: barcode.getRawValue(),
              format: BarcodeFormat[barcode.getFormat()]
            });
          }

          resolve(result);
          firebaseVisionBarcodeDetector.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionBarcodeDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodes: " + ex);
      reject(ex);
    }
  });
}

// TODO move
function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
