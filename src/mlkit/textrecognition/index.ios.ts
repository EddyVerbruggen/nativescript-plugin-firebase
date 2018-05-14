import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitRecognizeTextOptions, MLKitRecognizeTextResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";

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
        const result = <MLKitRecognizeTextResult>{
          features: []
        };

        for (let i = 0, l = features.count; i < l; i++) {
          const feature: FIRVisionText = features.objectAtIndex(i);
          // Note that fetching these details works, but there's currently no added value
          /*
            if (feature instanceof FIRVisionTextBlock) {
              const textBlock = <FIRVisionTextBlock>feature;
              for (let j = 0, k = textBlock.lines.count; j < k; j++) {
                const textBlockLine: FIRVisionTextLine = textBlock.lines.objectAtIndex(j);
                for (let a = 0, m = textBlockLine.elements.count; a < m; a++) {
                  const element: FIRVisionTextElement = textBlockLine.elements.objectAtIndex(a);
                  console.log("FIRVisionTextBlock text: " + element.text);
                }
              }
            }
            if (feature instanceof FIRVisionTextLine) {
              for (let a = 0, m = feature.elements.count; a < m; a++) {
                const element: FIRVisionTextElement = feature.elements.objectAtIndex(a);
                console.log("FIRVisionTextLine text: " + element.text);
              }
            }
          */
          result.features.push({
            text: feature.text,
            // corners: this.getCorners(<any>feature.cornerPoints)
          });
        }

        this.notify({
          eventName: MLKitTextRecognition.scanResultEvent,
          object: this,
          value: result
        });
      }
    }
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

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextDetector = firVision.textDetector();

      textDetector.detectInImageCompletion(getImage(options), (features: NSArray<FIRVisionText>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (features !== null) {
          const result = <MLKitRecognizeTextResult>{
            features: []
          };

          for (let i = 0, l = features.count; i < l; i++) {
            const feature: FIRVisionText = features.objectAtIndex(i);
            result.features.push({
              text: feature.text,
              // corners: <any>feature.cornerPoints
            });
          }
          resolve(result);
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
