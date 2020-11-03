import { ImageSource, Utils } from "@nativescript/core";
import { MLKitVisionOptions } from "../";
import { MLKitDetectFacesOnDeviceOptions, MLKitDetectFacesOnDeviceResult } from "./";
import { MLKitFaceDetection as MLKitFaceDetectionBase } from "./facedetection-common";

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
          result.faces.push({
            smilingProbability: face.hasSmilingProbability ? face.smilingProbability : undefined,
            leftEyeOpenProbability: face.hasLeftEyeOpenProbability ? face.leftEyeOpenProbability : undefined,
            rightEyeOpenProbability: face.hasRightEyeOpenProbability ? face.rightEyeOpenProbability : undefined,
            trackingId: face.hasTrackingID ? face.trackingID : undefined,
            bounds: face.frame,
            headEulerAngleY: face.headEulerAngleY,
            headEulerAngleZ: face.headEulerAngleZ
          });
        }

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
    if (imageOrientation === UIImageOrientation.Up && !Utils.ios.isLandscape()) {
      return FIRVisionDetectorImageOrientation.RightTop;
    } else {
      return super.getVisionOrientation(imageOrientation);
    }
  }
}

function getDetector(options: MLKitDetectFacesOnDeviceOptions): FIRVisionFaceDetector {
  const firVision: FIRVision = FIRVision.vision();
  const firOptions = FIRVisionFaceDetectorOptions.new();
  firOptions.performanceMode = options.detectionMode === "accurate" ? FIRVisionFaceDetectorPerformanceMode.Accurate : FIRVisionFaceDetectorPerformanceMode.Fast;
  firOptions.landmarkMode = FIRVisionFaceDetectorLandmarkMode.All; // TODO make configurable
  firOptions.classificationMode = FIRVisionFaceDetectorClassificationMode.All; // TODO make configurable
  firOptions.minFaceSize = options.minimumFaceSize;
  firOptions.trackingEnabled = options.enableFaceTracking === true;
  return firVision.faceDetectorWithOptions(firOptions);
}

export function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const faceDetector = getDetector(options);
      faceDetector.processImageCompletion(getImage(options), (faces: NSArray<FIRVisionFace>, error: NSError) => {
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
              bounds: face.frame,
              headEulerAngleY: face.headEulerAngleY,
              headEulerAngleZ: face.headEulerAngleZ
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

function getImage(options: MLKitVisionOptions): FIRVisionImage {
  const image = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  const newImage = UIImage.alloc().initWithCGImageScaleOrientation(image.CGImage, 1, UIImageOrientation.Up);
  return FIRVisionImage.alloc().initWithImage(newImage);
}
