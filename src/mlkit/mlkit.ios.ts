import { MLKitRecognizeTextOptions, MLKitRecognizeTextResult } from "./mlkit";
import { ImageSource } from "tns-core-modules/image-source";

export function recognizeText(options: MLKitRecognizeTextOptions): Promise<MLKitRecognizeTextResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextDetector = firVision.textDetector();

      const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
      const visionImage: FIRVisionImage = FIRVisionImage.alloc().initWithImage(image);

      textDetector.detectInImageCompletion(visionImage, (features: NSArray<FIRVisionText>, error: NSError) => {
        if (error !== null) {
          console.log(">> recog text error: " + error);
          reject(error.localizedDescription);
        } else if (features !== null) {
          console.log(">> recog text ok: " + features);
          console.log(">> recog text ok, count: " + features.count);

          const result = <MLKitRecognizeTextResult>{
            features: []
          };

          for (let i = 0, l = features.count; i < l; i++) {
            const feature: FIRVisionText = features.objectAtIndex(i);
            console.log(">>> feature: " + feature.text);
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
