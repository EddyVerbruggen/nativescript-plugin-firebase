import { ImageSource } from "@nativescript/core";
import { MLKitDetectFacesOnDeviceOptions, MLKitDetectFacesOnDeviceResult, MLKitDetectFacesResultBounds } from "./";
import { MLKitVisionOptions } from "../";
import { MLKitFaceDetection as MLKitFaceDetectionBase } from "./facedetection-common";

export class MLKitFaceDetection extends MLKitFaceDetectionBase {

  protected createDetector(): any {
    return getFaceDetector({
      detectionMode: this.detectionMode,
      enableFaceTracking: this.enableFaceTracking,
      minimumFaceSize: this.minimumFaceSize
    });
  }

  protected createSuccessListener(): any {
    return new (<any>com.google.android.gms).tasks.OnSuccessListener({
      onSuccess: faces => {

        if (!faces || faces.size() === 0) return;

        // const imageSource = new ImageSource();
        // imageSource.setNativeSource(this.lastVisionImage.getBitmapForDebugging());

        const result = <MLKitDetectFacesOnDeviceResult>{
          // imageSource: imageSource,
          faces: []
        };

        // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
        for (let i = 0; i < faces.size(); i++) {
          const face = faces.get(i);
          result.faces.push({
            bounds: boundingBoxToBounds(face.getBoundingBox()),
            smilingProbability: face.getSmilingProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getSmilingProbability() : undefined,
            leftEyeOpenProbability: face.getLeftEyeOpenProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getLeftEyeOpenProbability() : undefined,
            rightEyeOpenProbability: face.getRightEyeOpenProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getRightEyeOpenProbability() : undefined,
            trackingId: face.getTrackingId() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.INVALID_ID ? face.getTrackingId() : undefined,
            headEulerAngleY: face.getHeadEulerAngleY(),
            headEulerAngleZ: face.getHeadEulerAngleZ()
          });
        }

        this.notify({
          eventName: MLKitFaceDetection.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

function getFaceDetector(options: MLKitDetectFacesOnDeviceOptions): any {
  const builder = new com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions.Builder()
      .setPerformanceMode(options.detectionMode === "accurate" ? com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions.ACCURATE : com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions.FAST)
      .setLandmarkMode(com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions.ALL_LANDMARKS) // TODO make configurable
      .setClassificationMode(com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions.ALL_CLASSIFICATIONS) // TODO make configurable
      .setMinFaceSize(options.minimumFaceSize);

  if (options.enableFaceTracking === true) {
    builder.enableTracking();
  }

  return com.google.firebase.ml.vision.FirebaseVision.getInstance().getVisionFaceDetector(builder.build());
}

function boundingBoxToBounds(rect: any): MLKitDetectFacesResultBounds {
  return {
    origin: {
      x: rect.left,
      y: rect.top
    },
    size: {
      width: rect.width(),
      height: rect.height()
    }
  }
}

export function detectFacesOnDevice(options: MLKitDetectFacesOnDeviceOptions): Promise<MLKitDetectFacesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const firebaseVisionFaceDetector = getFaceDetector(options);

      const onSuccessListener = new (<any>com.google.android.gms).tasks.OnSuccessListener({
        onSuccess: faces => {

          const result = <MLKitDetectFacesOnDeviceResult>{
            faces: []
          };

          if (faces) {
            // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
            for (let i = 0; i < faces.size(); i++) {
              const face = faces.get(i);
              result.faces.push({
                bounds: boundingBoxToBounds(face.getBoundingBox()),
                smilingProbability: face.getSmilingProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getSmilingProbability() : undefined,
                leftEyeOpenProbability: face.getLeftEyeOpenProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getLeftEyeOpenProbability() : undefined,
                rightEyeOpenProbability: face.getRightEyeOpenProbability() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.UNCOMPUTED_PROBABILITY ? face.getRightEyeOpenProbability() : undefined,
                trackingId: face.getTrackingId() !== com.google.firebase.ml.vision.face.FirebaseVisionFace.INVALID_ID ? face.getTrackingId() : undefined,
                headEulerAngleY: face.getHeadEulerAngleY(),
                headEulerAngleZ: face.getHeadEulerAngleZ()
              });
            }
          }

          resolve(result);
          firebaseVisionFaceDetector.close();
        }
      });

      const onFailureListener = new (<any>com.google.android.gms).tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firebaseVisionFaceDetector
          .detectInImage(getImage(options))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.detectFacesOnDevice: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}
