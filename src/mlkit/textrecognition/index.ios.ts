import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitRecognizeTextOptions, MLKitRecognizeTextResult } from "./";

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
              text: feature.text
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
