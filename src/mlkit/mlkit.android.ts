import {
  MLKitOptions,
  MLKitRecognizeTextOptions,
  MLKitRecognizeTextResult,
  MLKitScanBarcodesOptions,
  MLKitScanBarcodesResult
} from "./mlkit";
import { ImageSource } from "tns-core-modules/image-source";

declare const com: any;

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionTextDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionTextDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (textBlocks) => {
          console.log(">>> success: " + textBlocks);
          const blocks = textBlocks.getBlocks();
          console.log(">>> blocks: " + blocks);
          console.log(">>> blocks size: " + blocks.size());

          const result = <MLKitRecognizeTextResult>{
            features: []
          };

          // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
          for (let i = 0; i < blocks.size(); i++) {
            const textBlock = blocks.get(i);
            console.log(">>> success textBlock: " + textBlock);
            console.log(">>> success textBlock.getText(): " + textBlock.getText());

            result.features.push({
              text: textBlock.getText()
            });
          }

          firebaseVisionTextDetector.close();

          resolve(result);
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionTextDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeText: " + ex);
      reject(ex);
    }
  });
}

export function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult> {
  return new Promise((resolve, reject) => {
    try {
      /*
      // TODO from options.. it makes scanning faster (esp when camera support is added)
      const firebaseVisionBarcodeDetectorOptions =
          new com.google.firebase.ml.vision.barcode.FirebaseVisionBarcodeDetectorOptions.Builder()
              .setBarcodeFormats([
                  com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode.FORMAT_QR_CODE,
                  com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode.FORMAT_AZTEC
              ])
              .build();
      */

      const firebaseVisionBarcodeDetector =
          // com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector(firebaseVisionBarcodeDetectorOptions);
          com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionBarcodeDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (barcodes) => {
          console.log(">>> barcodes: " + barcodes);
          console.log(">>> barcodes size: " + barcodes.size());

          const result = <MLKitScanBarcodesResult>{
            features: []
          };

          // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
          for (let i = 0; i < barcodes.size(); i++) {
            const barcode = barcodes.get(i);
            console.log(">>> success barcode: " + barcode);
            console.log(">>> success barcode.getRawValue(): " + barcode.getRawValue());
            console.log(">>> success barcode.getDisplayValue(): " + barcode.getDisplayValue());

            result.features.push({
              text: barcode.getRawValue()
            });
          }

          firebaseVisionBarcodeDetector.close();

          resolve(result);
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      console.log(">>> scanBarcodes D");

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

function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}

