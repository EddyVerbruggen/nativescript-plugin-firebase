import { ImageSource } from "tns-core-modules/image-source";
import { MLKitDetectFacesOptions, MLKitDetectFacesResult } from "./";
import { MLKitOptions } from "../index";

// export class MLKitFaceDetection extends MLKitFaceDetectionBase {
//   constructor() {
//     super();
//     console.log(">>> MLKitFaceDetection constr");
//   }
// }

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
