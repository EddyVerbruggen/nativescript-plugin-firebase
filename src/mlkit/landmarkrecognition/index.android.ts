import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitLandmarkRecognitionOptions, MLKitLandmarkRecognitionResult } from "./";
import { MLKitLandmarkRecognition as MLKitLandmarkRecognitionBase } from "./landmarkrecognition-common";

declare const com: any;

export class MLKitLandmarkRecognition extends MLKitLandmarkRecognitionBase {

  protected createDetector(): any {
    return getDetector(this.maxResults);
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: landmarks => {

        if (landmarks.size() === 0) return;

        // const imageSource = new ImageSource();
        // imageSource.setNativeSource(this.lastVisionImage.getBitmapForDebugging());

        const result = <MLKitLandmarkRecognitionResult>{
          // imageSource: imageSource,
          landmarks: []
        };

        for (let i = 0; i < landmarks.size(); i++) {
          const landmark = landmarks.get(i);
          result.landmarks.push({
            name: landmark.getLandmark(),
            confidence: landmark.getConfidence()
          });
        }

        this.notify({
          eventName: MLKitLandmarkRecognition.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

function getDetector(confidenceThreshold: number): any {
  const landmarkDetectorOptions =
      new com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.Builder()
          .setMaxResults(confidenceThreshold)
          .build();

  return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionCloudLandmarkDetector(landmarkDetectorOptions);
}

export function recognizeLandmark(options: MLKitLandmarkRecognitionOptions): Promise<MLKitLandmarkRecognitionResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionLandmarkDetector = getDetector(options.maxResults || 10);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: landmarks => {
          const result = <MLKitLandmarkRecognitionResult>{
            landmarks: []
          };

          for (let i = 0; i < landmarks.size(); i++) {
            const landmark = landmarks.get(i);
            result.landmarks.push({
              name: landmark.getLandmark(),
              confidence: landmark.getConfidence()
            });
          }

          resolve(result);
          firebaseVisionLandmarkDetector.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionLandmarkDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeLandmark: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
