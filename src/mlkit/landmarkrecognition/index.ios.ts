import { ImageSource } from "@nativescript/core";
import { MLKitVisionOptions } from "../";
import { MLKitLandmarkRecognitionCloudOptions, MLKitLandmarkRecognitionCloudResult } from "./";
import { MLKitCloudModelType } from "../index";

function getDetector(modelType: MLKitCloudModelType, maxResults: number): FIRVisionCloudLandmarkDetector {
  const firVision: FIRVision = FIRVision.vision();
  const fIRVisionCloudDetectorOptions = FIRVisionCloudDetectorOptions.alloc();
  fIRVisionCloudDetectorOptions.modelType = modelType === "latest" ? FIRVisionCloudModelType.Latest : FIRVisionCloudModelType.Stable;
  fIRVisionCloudDetectorOptions.maxResults = maxResults || 10;
  return firVision.cloudLandmarkDetectorWithOptions(fIRVisionCloudDetectorOptions);
}

export function recognizeLandmarksCloud(options: MLKitLandmarkRecognitionCloudOptions): Promise<MLKitLandmarkRecognitionCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const landmarkDetector = getDetector(options.modelType, options.maxResults);

      landmarkDetector.detectInImageCompletion(getImage(options), (landmarks: NSArray<FIRVisionCloudLandmark>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (landmarks !== null) {
          const result = <MLKitLandmarkRecognitionCloudResult>{
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
      console.log("Error in firebase.mlkit.recognizeLandmarksCloud: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
