import { ImageSource } from "tns-core-modules/image-source";
import { MLKitDetectFacesOnDeviceOptions, MLKitDetectFacesOnDeviceResult } from "./";
import { MLKitOptions } from "../index";
import { MLKitFaceDetection as MLKitFaceDetectionBase } from "./facedetection-common";

export class MLKitFaceDetection extends MLKitFaceDetectionBase {

  protected createDetector(): any {
    return getDetector();
  }

  protected createSuccessListener(): any {
    return (faces: NSArray<FIRVisionFace>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (faces !== null && faces.count > 0) {
        const result = <MLKitDetectFacesOnDeviceResult>{
          faces: []
        };

        for (let i = 0, l = faces.count; i < l; i++) {
          const face: FIRVisionFace = faces.objectAtIndex(i);
          console.log(">> face: " + face);
          result.faces.push({
            smilingProbability: face.hasSmilingProbability ? face.smilingProbability : undefined,
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

  protected rotateRecording(): boolean {
    return false;
  }
}

function getDetector(): FIRVisionFaceDetector {
  // TODO make configurable
  const firVision: FIRVision = FIRVision.vision();
  const options = FIRVisionFaceDetectorOptions.new();
  options.modeType = FIRVisionFaceDetectorMode.Accurate;
  options.landmarkType = FIRVisionFaceDetectorLandmark.All;
  options.classificationType = FIRVisionFaceDetectorClassification.All;
  options.minFaceSize = 0.1;
  // options.isTrackingEnabled = true;
  return firVision.faceDetectorWithOptions(options);
}

// TODO somehow this function doesn't work.. probably because of the passed image, but I can't find the cause.. the live camera version works great tho
export function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const faceDetector = getDetector();
      faceDetector.detectInImageCompletion(getImage(options), (faces: NSArray<FIRVisionFace>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (faces !== null) {
          const result = <MLKitDetectFacesOnDeviceResult>{
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

// TODO resize the image (here), like the example app?
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  console.log(">> image.imageOrientation: " + image.imageOrientation);

  const fIRVisionImageMetadata = FIRVisionImageMetadata.new();
  // fIRVisionImageMetadata.orientation = FIRVisionDetectorImageOrientation.TopLeft;

  // const randomOrientation = Math.floor(Math.random() * 8) + 1;
  // console.log(">>> randomOrientation: " + randomOrientation);
  fIRVisionImageMetadata.orientation = 1;

  const fIRVisionImage = FIRVisionImage.alloc().initWithImage(image);
  fIRVisionImage.metadata = fIRVisionImageMetadata;
  return fIRVisionImage;
}
