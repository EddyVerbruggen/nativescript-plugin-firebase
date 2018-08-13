import { ImageSource } from "tns-core-modules/image-source";
import { MLKitDetectFacesOnDeviceOptions, MLKitDetectFacesOnDeviceResult } from "./";
import { MLKitOptions } from "../index";
import { MLKitFaceDetection as MLKitFaceDetectionBase } from "./facedetection-common";
import { ios as iosUtils } from "tns-core-modules/utils/utils";

export class MLKitFaceDetection extends MLKitFaceDetectionBase {

  protected createDetector(): any {
    return getDetector({
      detectionMode: this.detectionMode,
      enableFaceTracking: this.enableFaceTracking,
      minimumFaceSize: this.minimumFaceSize
    });
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
            rightEyeOpenProbability: face.hasRightEyeOpenProbability ? face.rightEyeOpenProbability : undefined,
            trackingId: face.hasTrackingID ? face.trackingID : undefined,
            bounds: face.frame
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

  getVisionOrientation(imageOrientation: UIImageOrientation): FIRVisionDetectorImageOrientation {
    if (imageOrientation === UIImageOrientation.Up && !iosUtils.isLandscape()) {
      return FIRVisionDetectorImageOrientation.RightTop;
    } else {
      return super.getVisionOrientation(imageOrientation);
    }
  }
}

function getDetector(options: MLKitDetectFacesOnDeviceOptions): FIRVisionFaceDetector {
  const firVision: FIRVision = FIRVision.vision();
  const firOptions = FIRVisionFaceDetectorOptions.new();
  firOptions.modeType = options.detectionMode === "accurate" ? FIRVisionFaceDetectorMode.Accurate : FIRVisionFaceDetectorMode.Fast;
  firOptions.landmarkType = FIRVisionFaceDetectorLandmark.All; // TODO make configurable
  firOptions.classificationType = FIRVisionFaceDetectorClassification.All; // TODO make configurable
  firOptions.minFaceSize = options.minimumFaceSize;
  firOptions.isTrackingEnabled = options.enableFaceTracking === true;
  return firVision.faceDetectorWithOptions(firOptions);
}

// TODO somehow this function doesn't work.. probably because of the passed image, but I can't find the cause.. the live camera version works great tho
export function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const faceDetector = getDetector(options);
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
              rightEyeOpenProbability: face.hasRightEyeOpenProbability ? face.rightEyeOpenProbability : undefined,
              trackingId: face.hasTrackingID ? face.trackingID : undefined,
              bounds: face.frame
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

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
