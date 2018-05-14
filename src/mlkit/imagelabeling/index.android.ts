import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitImageLabelingOptions, MLKitImageLabelingResult } from "./";

declare const com: any;

// TODO View

export function labelImage(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionLabelDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionLabelDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (labels) => {
          const result = <MLKitImageLabelingResult>{
            labels: []
          };

          for (let i = 0; i < labels.size(); i++) {
            const label = labels.get(i);
            result.labels.push({
              text: label.getLabel(),
              confidence: label.getConfidence()
            });
          }

          resolve(result);
          firebaseVisionLabelDetector.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionLabelDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.labelImage: " + ex);
      reject(ex);
    }
  });
}

// TODO move
function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
