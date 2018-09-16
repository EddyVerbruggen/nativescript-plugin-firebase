import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitRecognizeTextCloudOptions, MLKitRecognizeTextOnDeviceOptions, MLKitRecognizeTextResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import { MLKitRecognizeTextResultBlock, MLKitRecognizeTextResultLine } from "./index";

export class MLKitTextRecognition extends MLKitTextRecognitionBase {
  protected createDetector(): any {
    const firVision: FIRVision = FIRVision.vision();
    return firVision.onDeviceTextRecognizer();
  }

  protected createSuccessListener(): any {
    return (visionText: FIRVisionText, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);
      } else if (visionText !== null) {
        this.notify({
          eventName: MLKitTextRecognition.scanResultEvent,
          object: this,
          value: getResult(visionText)
        });
      }
    };
  }

  protected rotateRecording(): boolean {
    return true;
  }
}

function getResult(visionText: FIRVisionText): MLKitRecognizeTextResult {
  if (visionText === null) {
    return {};
  }

  const result = <MLKitRecognizeTextResult>{
    text: visionText.text,
    blocks: [],
    ios: visionText
  };

  for (let i = 0, l = visionText.blocks.count; i < l; i++) {
    const feature: FIRVisionTextBlock = visionText.blocks.objectAtIndex(i);
    const resultFeature = <MLKitRecognizeTextResultBlock>{
      text: feature.text,
      bounds: feature.frame,
      lines: []
    };

    const addLineToResult = (line: FIRVisionTextLine): void => {
      const resultLine = <MLKitRecognizeTextResultLine>{
        text: feature.text,
        bounds: line.frame,
        elements: []
      };
      for (let a = 0, m = line.elements.count; a < m; a++) {
        const element: FIRVisionTextElement = line.elements.objectAtIndex(a);
        resultLine.elements.push({
          text: element.text,
          bounds: element.frame,
        });
      }
      resultFeature.lines.push(resultLine);
    };

    // TODO
    if (feature instanceof FIRVisionTextBlock) {
      const textBlock = <FIRVisionTextBlock>feature;
      for (let j = 0, k = textBlock.lines.count; j < k; j++) {
        addLineToResult(textBlock.lines.objectAtIndex(j));
      }
    }

    // TODO
    if (feature instanceof FIRVisionTextLine) {
      addLineToResult(feature);
    }

    result.blocks.push(resultFeature);
  }
  return result;
}

export function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextRecognizer = firVision.onDeviceTextRecognizer();

      textDetector.processImageCompletion(getImage(options), (visionText: FIRVisionText, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);
        } else {
          resolve(getResult(visionText));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextOnDevice: " + ex);
      reject(ex);
    }
  });
}

export function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const fIRVisionCloudDetectorOptions = FIRVisionCloudTextRecognizerOptions.new();
      fIRVisionCloudDetectorOptions.modelType = FIRVisionCloudTextModelType.Sparse;
      // fIRVisionCloudDetectorOptions.modelType = options.modelType === "latest" ? FIRVisionCloudModelType.Latest : FIRVisionCloudModelType.Stable;
      // fIRVisionCloudDetectorOptions.maxResults = options.maxResults || 10;

      const firVision: FIRVision = FIRVision.vision();
      const textDetector = firVision.cloudTextRecognizerWithOptions(fIRVisionCloudDetectorOptions);

      textDetector.processImageCompletion(getImage(options), (visionText: FIRVisionText, error: NSError) => {
        console.log(">>> recognizeTextCloud error? " + error + ", visionText? " + visionText);
        if (error !== null) {
          reject(error.localizedDescription);
        } else if (visionText !== null) {
          resolve(getResult(visionText));
        } else {
          reject("Unknown error :'(");
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextCloud: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
