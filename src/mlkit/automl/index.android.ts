import { ImageSource } from "@nativescript/core";
import { MLKitVisionOptions, } from "../";
import { MLKitAutoMLOptions, MLKitAutoMLResult } from "./";
import { MLKitAutoML as MLKitAutoMLBase } from "./automl-common";

declare const com: any;

export class MLKitAutoML extends MLKitAutoMLBase {

  protected createDetector(): any {
    return getDetector(this.localModelResourceFolder, this.confidenceThreshold);
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: labels => {

        if (labels.size() === 0) return;

        // const imageSource = new ImageSource();
        // imageSource.setNativeSource(this.lastVisionImage.getBitmapForDebugging());

        const result = <MLKitAutoMLResult>{
          // imageSource: imageSource,
          labels: []
        };

        // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
        for (let i = 0; i < labels.size(); i++) {
          const label: com.google.firebase.ml.vision.label.FirebaseVisionImageLabel = labels.get(i);
          result.labels.push({
            text: label.getText(),
            confidence: label.getConfidence()
          });
        }

        this.notify({
          eventName: MLKitAutoML.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

function getDetector(localModelResourceFolder: string, confidenceThreshold: number): com.google.firebase.ml.vision.label.FirebaseVisionImageLabeler {
  // TODO also support cloud hosted models
  const model = new com.google.firebase.ml.vision.automl.FirebaseAutoMLLocalModel.Builder()
      .setAssetFilePath(localModelResourceFolder + "/manifest.json") // we can use this..
      // .setFilePath() // .. or this
      .build();

  const labelDetectorOptions =
      new com.google.firebase.ml.vision.label.FirebaseVisionOnDeviceAutoMLImageLabelerOptions.Builder(model)
          .setConfidenceThreshold(confidenceThreshold)
          .build();

  return com.google.firebase.ml.vision.FirebaseVision.getInstance()
      .getOnDeviceAutoMLImageLabeler(labelDetectorOptions);
}

export function labelImage(options: MLKitAutoMLOptions): Promise<MLKitAutoMLResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionAutoMLImageLabeler = getDetector(options.localModelResourceFolder, options.confidenceThreshold || 0.5);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: labels => {
          const result = <MLKitAutoMLResult>{
            labels: []
          };

          if (labels) {
            for (let i = 0; i < labels.size(); i++) {
              const label: com.google.firebase.ml.vision.label.FirebaseVisionImageLabel = labels.get(i);
              result.labels.push({
                text: label.getText(),
                confidence: label.getConfidence()
              });
            }
          }

          resolve(result);
          firebaseVisionAutoMLImageLabeler.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionAutoMLImageLabeler
          .processImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.labelImageOnDevice: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
