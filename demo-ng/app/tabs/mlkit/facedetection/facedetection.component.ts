import { Component } from "@angular/core";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { ImageSource } from "tns-core-modules/image-source";

@Component({
  selector: "mlkit-facedetection",
  moduleId: module.id,
  templateUrl: "./facedetection.component.html",
})
export class FaceDetectionComponent {
  faces: Array<{
    smilingProbability: number;
    leftEyeOpenProbability: number;
    rightEyeOpenProbability: number;
  }>;

  mlKitAllOK: string;
  mlKitLastMatchImg: ImageSource;

  onFaceDetectionResult(scanResult: any): any {
    const value: MLKitDetectFacesResult = scanResult.value;
    if (value.faces.length > 0) {
      let allSmilingAndEyesOpen = true;
      value.faces.forEach(face => {
        allSmilingAndEyesOpen = allSmilingAndEyesOpen && face.smilingProbability && face.leftEyeOpenProbability && face.rightEyeOpenProbability &&
            face.smilingProbability > 0.7 && face.leftEyeOpenProbability > 0.7 && face.rightEyeOpenProbability > 0.7;
      });
      this.mlKitAllOK = `All smiling and eyes open? ${allSmilingAndEyesOpen ? 'Yes, screen grabbed:' : 'Nope. Sad.'}`;

      // value.faces.map(face => {
      //   face.smilingProbability = FaceDetectionComponent.getPercentage(face.smilingProbability);
      //   face.leftEyeOpenProbability = FaceDetectionComponent.getPercentage(face.leftEyeOpenProbability);
      //   face.rightEyeOpenProbability = FaceDetectionComponent.getPercentage(face.rightEyeOpenProbability);
      // });
      this.faces = value.faces;

      if (allSmilingAndEyesOpen && value.imageSource) {
        this.mlKitLastMatchImg = value.imageSource;
      }
    }
  }

  private static getPercentage(input: number): number {
    if (isNaN(input)) {
      return 0;
    }
    return Math.round(input * 100);
  }

}
