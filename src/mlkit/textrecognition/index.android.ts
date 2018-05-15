import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitRecognizeTextLocalOptions, MLKitRecognizeTextLocalResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import {
  MLKitRecognizeTextCloudOptions,
  MLKitRecognizeTextCloudResult,
  MLKitRecognizeTextResultFeature
} from "./index";

declare const com: any;

export class MLKitTextRecognition extends MLKitTextRecognitionBase {

  protected createDetector(): any {
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionTextDetector();
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: textBlocks => {
        if (textBlocks.getBlocks().size() > 0) {
          this.notify({
            eventName: MLKitTextRecognition.scanResultEvent,
            object: this,
            value: getLocalResult(textBlocks.getBlocks())
          });
        }
      }
    });
  }
}

function getLocalResult(blocks: any): MLKitRecognizeTextLocalResult {
  const result = <MLKitRecognizeTextLocalResult>{
    features: []
  };

  // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
  for (let i = 0; i < blocks.size(); i++) {
    const textBlock = blocks.get(i);
    const blockResult = <MLKitRecognizeTextResultFeature>{
      text: textBlock.getText(),
      elements: []
    };

    const lines = textBlock.getLines();
    for (let j = 0; j < lines.size(); j++) {
      const elements = lines.get(j).getElements();
      for (let k = 0; k < elements.size(); k++) {
        const element = elements.get(k);
        const rect = element.getBoundingBox();
        const blockElement = {
          text: element.getText(),
          bounds: {
            origin: {
              x: rect.left,
              y: rect.top
            },
            size: {
              width: rect.width(),
              height: rect.height()
            }
          }
        };
        blockResult.elements.push(blockElement);
      }
    }

    result.features.push(blockResult);
  }
  return result;
}

export function recognizeTextLocal(options: MLKitRecognizeTextLocalOptions): Promise<MLKitRecognizeTextLocalResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionTextDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionTextDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: textBlocks => {
          resolve(getLocalResult(textBlocks.getBlocks()));
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
      console.log("Error in firebase.mlkit.recognizeTextLocal: " + ex);
      reject(ex);
    }
  });
}

export function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const cloudDetectorOptions =
          new com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.Builder()
              .setModelType(options.modelType === "latest" ? com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.LATEST_MODEL : com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.STABLE_MODEL)
              .setMaxResults(options.maxResults || 10)
              .build();

      const firebaseVisionCloudTextDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionCloudTextDetector(cloudDetectorOptions);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: firebaseVisionCloudText => {
          resolve({
            text: firebaseVisionCloudText.getText()
          });
          firebaseVisionCloudTextDetector.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionCloudTextDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextCloud: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
