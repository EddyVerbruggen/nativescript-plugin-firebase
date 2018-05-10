import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitRecognizeTextOptions, MLKitRecognizeTextResult } from "./";

declare const com: any;

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionTextDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionTextDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (textBlocks) => {
          const blocks = textBlocks.getBlocks();

          const result = <MLKitRecognizeTextResult>{
            features: []
          };

          // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
          for (let i = 0; i < blocks.size(); i++) {
            const textBlock = blocks.get(i);
            result.features.push({
              text: textBlock.getText()
            });
          }

          resolve(result);
          firebaseVisionTextDetector.close();
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

// TODO move
function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
