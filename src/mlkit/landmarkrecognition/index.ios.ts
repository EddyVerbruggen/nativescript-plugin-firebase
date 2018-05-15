import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitLandmarkRecognitionOptions, MLKitLandmarkRecognitionResult } from "./";
import { MLKitLandmarkRecognition as MLKitLandmarkRecognitionBase } from "./landmarkrecognition-common";

export class MLKitLandmarkRecognition extends MLKitLandmarkRecognitionBase {

  protected createDetector(): any {
    return getDetector(this.maxResults);
  }

  protected createSuccessListener(): any {
    return (landmarks: NSArray<FIRVisionCloudLandmark>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (landmarks !== null && landmarks.count > 0) {
        const result = <MLKitLandmarkRecognitionResult>{
          landmarks: []
        };

        for (let i = 0, l = landmarks.count; i < l; i++) {
          const landmark: FIRVisionCloudLandmark = landmarks.objectAtIndex(i);
          console.log(">> detected landmark: " + landmark);
          result.landmarks.push({
            name: landmark.landmark,
            confidence: landmark.confidence
          });
        }

        console.log(">>> notify " + MLKitLandmarkRecognition.scanResultEvent + " with " + JSON.stringify(result));
        this.notify({
          eventName: MLKitLandmarkRecognition.scanResultEvent,
          object: this,
          value: result
        });
      }
    }
  }

  protected rotateRecording(): boolean {
    return false;
  }
}

function getDetector(maxResults: number): FIRVisionCloudLandmarkDetector {
  const firVision: FIRVision = FIRVision.vision();
  const fIRVisionCloudDetectorOptions = FIRVisionCloudDetectorOptions.alloc();
  fIRVisionCloudDetectorOptions.maxResults = maxResults;
  return firVision.cloudLandmarkDetectorWithOptions(fIRVisionCloudDetectorOptions);
}

export function recognizeLandmark(options: MLKitLandmarkRecognitionOptions): Promise<MLKitLandmarkRecognitionResult> {
  return new Promise((resolve, reject) => {
    try {
      const landmarkDetector = getDetector(options.maxResults || 10);

      landmarkDetector.detectInImageCompletion(getImage(options), (landmarks: NSArray<FIRVisionCloudLandmark>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (landmarks !== null) {
          const result = <MLKitLandmarkRecognitionResult>{
            landmarks: []
          };

          for (let i = 0, l = landmarks.count; i < l; i++) {
            const landmark: FIRVisionCloudLandmark = landmarks.objectAtIndex(i);
            console.log(">> detected landmark: " + landmark);
            result.landmarks.push({
              name: landmark.landmark,
              confidence: landmark.confidence
            });
          }

          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeLandmark: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
