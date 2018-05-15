import { ImageSource } from "tns-core-modules/image-source";
import { MLKitDetectFacesOptions, MLKitDetectFacesResult } from "./";
import { MLKitOptions } from "../index";
import { MLKitFaceDetection as MLKitFaceDetectionBase } from "./facedetection-common";

export class MLKitFaceDetection extends MLKitFaceDetectionBase {
  protected createDetector(): any {
    const firVision: FIRVision = FIRVision.vision();
    return firVision.faceDetector();
  }

  protected createSuccessListener(): any {
    return (faces: NSArray<FIRVisionFace>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (faces !== null && faces.count > 0) {
        const result = <MLKitDetectFacesResult>{
          faces: []
        };

        for (let i = 0, l = faces.count; i < l; i++) {
          const face: FIRVisionFace = faces.objectAtIndex(i);
          result.faces.push({
            // smilingProbability: face.hasSmilingProbability ? face.smilingProbability : undefined,
            smilingProbability: face.smilingProbability,
            leftEyeOpenProbability: face.hasLeftEyeOpenProbability ? face.leftEyeOpenProbability : undefined,
            rightEyeOpenProbability: face.hasRightEyeOpenProbability ? face.rightEyeOpenProbability : undefined
          });
        }

        console.log(">>> notify " + MLKitFaceDetection.scanResultEvent + " with " + JSON.stringify(result.faces));
        this.notify({
          eventName: MLKitFaceDetection.scanResultEvent,
          object: this,
          value: result
        });
      }
    };
  }

  // TODO only seems to work in landscape
  protected rotateRecording(): boolean {
    return false;
  }
}

export function detectFaces(options: MLKitDetectFacesOptions): Promise<MLKitDetectFacesResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const faceDetector: FIRVisionFaceDetector = firVision.faceDetector();

      faceDetector.detectInImageCompletion(getImage(options), (faces: NSArray<FIRVisionFace>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (faces !== null) {
          const result = <MLKitDetectFacesResult>{
            faces: []
          };

          for (let i = 0, l = faces.count; i < l; i++) {
            const face: FIRVisionFace = faces.objectAtIndex(i);
            result.faces.push({
              smilingProbability: face.hasSmilingProbability ? face.smilingProbability : undefined,
              leftEyeOpenProbability: face.hasLeftEyeOpenProbability ? face.leftEyeOpenProbability : undefined,
              rightEyeOpenProbability: face.hasRightEyeOpenProbability ? face.rightEyeOpenProbability : undefined
            });
          }
          console.log(">>> face result: " + JSON.stringify(result.faces));
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.detectFaces: " + ex);
      reject(ex);
    }
  });
}

// TODO move
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
