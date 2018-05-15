import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitRecognizeTextOptions, MLKitRecognizeTextResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import { MLKitRecognizeTextResultFeature } from "./index";

export class MLKitTextRecognition extends MLKitTextRecognitionBase {
  protected createDetector(): any {
    const firVision: FIRVision = FIRVision.vision();
    return firVision.textDetector();
  }

  protected createSuccessListener(): any {
    return (features: NSArray<FIRVisionText>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);
      } else if (features !== null && features.count > 0) {
        this.notify({
          eventName: MLKitTextRecognition.scanResultEvent,
          object: this,
          value: getResult(features)
        });
      }
    };
  }

  protected rotateRecording(): boolean {
    return true;
  }

  /*
  private getCorners(cornerPoints: NSArray<CGPoint>) {
    for (let i = 0, l = cornerPoints.count; i < l; i++) {
      const point = cornerPoints.objectAtIndex(i);
      console.log(point);
    }
    return {};
  }
  */
}

function getResult(features: NSArray<FIRVisionText>): MLKitRecognizeTextResult {
  const result = <MLKitRecognizeTextResult>{
    features: []
  };

  for (let i = 0, l = features.count; i < l; i++) {
    const feature = features.objectAtIndex(i);
    const resultFeature = <MLKitRecognizeTextResultFeature>{
      text: feature.text,
      elements: []
    };

    const addLineToResult = (line: FIRVisionTextLine): void => {
      for (let a = 0, m = line.elements.count; a < m; a++) {
        const element: FIRVisionTextElement = line.elements.objectAtIndex(a);
        const bounds = element.frame;
        resultFeature.elements.push({
          text: element.text,
          bounds: bounds,
        });
      }
    };

    if (feature instanceof FIRVisionTextBlock) {
      const textBlock = <FIRVisionTextBlock>feature;
      for (let j = 0, k = textBlock.lines.count; j < k; j++) {
        addLineToResult(textBlock.lines.objectAtIndex(j));
      }
    }

    if (feature instanceof FIRVisionTextLine) {
      addLineToResult(feature);
    }

    console.log(">>> resulting resultFeature: " + JSON.stringify(resultFeature));
    result.features.push(resultFeature);
  }
  return result;
}

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextDetector = firVision.textDetector();

      textDetector.detectInImageCompletion(getImage(options), (features: NSArray<FIRVisionText>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);
        } else if (features !== null) {
          resolve(getResult(features));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeText: " + ex);
      reject(ex);
    }
  });
}

// TODO move to a common file
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
