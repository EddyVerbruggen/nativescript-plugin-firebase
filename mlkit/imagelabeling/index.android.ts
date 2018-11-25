import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitImageLabelingOnDeviceOptions, MLKitImageLabelingOnDeviceResult } from "./";
import { MLKitImageLabeling as MLKitImageLabelingBase } from "./imagelabeling-common";
import { MLKitImageLabelingCloudOptions, MLKitImageLabelingCloudResult } from "./index";

declare const com: any;

export class MLKitImageLabeling extends MLKitImageLabelingBase {

  protected createDetector(): any {
    return getDetector(this.confidenceThreshold);
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: labels => {

        if (labels.size() === 0) return;

        // const imageSource = new ImageSource();
        // imageSource.setNativeSource(this.lastVisionImage.getBitmapForDebugging());

        const result = <MLKitImageLabelingOnDeviceResult>{
          // imageSource: imageSource,
          labels: []
        };

        // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
        for (let i = 0; i < labels.size(); i++) {
          const label = labels.get(i);
          result.labels.push({
            text: label.getLabel(),
            confidence: label.getConfidence()
          });
        }

        this.notify({
          eventName: MLKitImageLabeling.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

function getDetector(confidenceThreshold: number): any {
  const labelDetectorOptions =
      new com.google.firebase.ml.vision.label.FirebaseVisionLabelDetectorOptions.Builder()
          .setConfidenceThreshold(confidenceThreshold)
          .build();

  return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionLabelDetector(labelDetectorOptions);
}

export function labelImageOnDevice(options: MLKitImageLabelingOnDeviceOptions): Promise<MLKitImageLabelingOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionLabelDetector = getDetector(options.confidenceThreshold || 0.5);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: labels => {
          const result = <MLKitImageLabelingOnDeviceResult>{
            labels: []
          };

          if (labels) {
            for (let i = 0; i < labels.size(); i++) {
              const label = labels.get(i);
              result.labels.push({
                text: label.getLabel(),
                confidence: label.getConfidence()
              });
            }
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
      console.log("Error in firebase.mlkit.labelImageOnDevice: " + ex);
      reject(ex);
    }
  });
}

export function labelImageCloud(options: MLKitImageLabelingCloudOptions): Promise<MLKitImageLabelingCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const cloudDetectorOptions =
          new com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.Builder()
              .setModelType(options.modelType === "latest" ? com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.LATEST_MODEL : com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.STABLE_MODEL)
              .setMaxResults(options.maxResults || 10)
              .build();

      const firebaseVisionCloudLabelDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionCloudLabelDetector(cloudDetectorOptions);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: labels => {
          const result = <MLKitImageLabelingCloudResult>{
            labels: []
          };

          if (labels) {
            for (let i = 0; i < labels.size(); i++) {
              const label = labels.get(i);
              result.labels.push({
                text: label.getLabel(),
                confidence: label.getConfidence()
              });
            }
          }

          resolve(result);
          firebaseVisionCloudLabelDetector.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionCloudLabelDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.labelImageCloud: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
