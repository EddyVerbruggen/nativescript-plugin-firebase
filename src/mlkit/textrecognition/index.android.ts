import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitRecognizeTextOnDeviceOptions, MLKitRecognizeTextOnDeviceResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import {
  MLKitRecognizeTextCloudOptions,
  MLKitRecognizeTextCloudResult,
  MLKitRecognizeTextResultBlock,
  MLKitRecognizeTextResultLine,
  MLKitRecognizeTextResultElement,
  MLKitRecognizeTextResultBounds
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
            value: getOnDeviceResult(textBlocks.getBlocks())
          });
        }
      }
    });
  }
}

function boundingBoxToBounds(rect: any): MLKitRecognizeTextResultBounds {
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

// see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
function getOnDeviceResult(blocks: any): MLKitRecognizeTextOnDeviceResult {
  const blks: MLKitRecognizeTextResultBlock[] = [];

  for (let i = 0; i < blocks.size(); i++) {
    const block = blocks.get(i);
    const lines = block.getLines();

    const lns:  MLKitRecognizeTextResultLine[] = [];

    for (let j = 0; j < lines.size(); j++) {
      const line = lines.get(j);
      const elements = line.getElements();

      const elms: MLKitRecognizeTextResultElement[] = [];

      for (let k = 0; k < elements.size(); k++) {
        const element = elements.get(k);
        elms.push({
          text: element.getText(),
          bounds: boundingBoxToBounds(element.getBoundingBox())
        });
      }

      lns.push({
        text: line.getText(),
        bounds: boundingBoxToBounds(line.getBoundingBox()),
        elements: elms
      });
    }

    blks.push({
      text: block.getText(),
      bounds: boundingBoxToBounds(block.getBoundingBox()),
      lines: lns
    });
  }

  return {
    blocks: blks
  };
}

export function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionTextDetector = com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionTextDetector();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: textBlocks => {
          resolve(getOnDeviceResult(textBlocks.getBlocks()));
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
      console.log("Error in firebase.mlkit.recognizeTextOnDevice: " + ex);
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
            text: firebaseVisionCloudText ? firebaseVisionCloudText.getText() : null
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
