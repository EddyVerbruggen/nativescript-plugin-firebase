import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions, } from "../";
import { MLKitRecognizeTextOnDeviceOptions, MLKitRecognizeTextResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import {
  MLKitRecognizeTextCloudOptions,
  MLKitRecognizeTextResultBounds,
  MLKitRecognizeTextResultElement,
  MLKitRecognizeTextResultLine
} from "./index";

declare const com: any;

export class MLKitTextRecognition extends MLKitTextRecognitionBase {

  protected createDetector(): any /* FirebaseVisionTextRecognizer */ {
    return com.google.firebase.ml.vision.FirebaseVision.getInstance().getOnDeviceTextRecognizer();
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: firebaseVisionText => {
        if (firebaseVisionText.getTextBlocks().size() > 0) {
          this.notify({
            eventName: MLKitTextRecognition.scanResultEvent,
            object: this,
            value: getResult(firebaseVisionText)
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
function getResult(firebaseVisionText: any): MLKitRecognizeTextResult {
  if (firebaseVisionText === null) {
    return {};
  }

  const result = <MLKitRecognizeTextResult>{ // TODO rename the return type
    text: firebaseVisionText.getText(),
    blocks: [],
    android: firebaseVisionText
  };

  for (let i = 0; i < firebaseVisionText.getTextBlocks().size(); i++) {
    const textBlock = firebaseVisionText.getTextBlocks().get(i);
    // const blockText: string = textBlock.getText();
    // const blockConfidence: number = textBlock.getConfidence();
    const lines = textBlock.getLines();

    const lns: MLKitRecognizeTextResultLine[] = [];

    for (let j = 0; j < lines.size(); j++) {
      const line = lines.get(j);
      // const lineText = line.getText();
      // const lineConfidence = line.getConfidence();
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

    result.blocks.push({
      text: textBlock.getText(),
      bounds: boundingBoxToBounds(textBlock.getBoundingBox()),
      lines: lns
    });
  }

  return result;
}

export function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionTextRecognizer = com.google.firebase.ml.vision.FirebaseVision.getInstance().getOnDeviceTextRecognizer();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: firebaseVisionText => {
          resolve(getResult(firebaseVisionText));
          firebaseVisionTextRecognizer.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionTextRecognizer
          .processImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextOnDevice: " + ex);
      reject(ex);
    }
  });
}

export function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      // const firebaseVisionCloudTextRecognizerOptions =
      //     new com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.Builder()
          // TODO see 'setLanguageHints' at https://firebase.google.com/docs/ml-kit/android/recognize-text
          // .setModelType(options.modelType === "latest" ? com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.LATEST_MODEL : com.google.firebase.ml.vision.cloud.FirebaseVisionCloudDetectorOptions.STABLE_MODEL)
          // .setMaxResults(options.maxResults || 10)
          //     .build();

      const firebaseVisionCloudTextRecognizer = com.google.firebase.ml.vision.FirebaseVision.getInstance().getCloudTextRecognizer();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: firebaseVisionText => {
          resolve(getResult(firebaseVisionText));
          firebaseVisionCloudTextRecognizer.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionCloudTextRecognizer
          .processImage(getImage(options))
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
