import { Component } from "@angular/core";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { ImageSource } from "tns-core-modules/image-source";

@Component({
  selector: "mlkit-facedetection",
  moduleId: module.id,
  templateUrl: "./facedetection.component.html",
})
export class FaceDetectionComponent {
  // TODO create a type (in the plugin) for these Arrays
  faces: Array<{
    smilingProbability?: number;
    leftEyeOpenProbability?: number;
    rightEyeOpenProbability?: number;
  }>;

  mlKitAllOK: string;

  onFaceDetectionResult(scanResult: any): any {
    const value: MLKitDetectFacesResult = scanResult.value;
    if (value.faces.length > 0) {
      this.faces = value.faces;

      let allSmilingAndEyesOpen = true;
      value.faces.forEach(face => {
        allSmilingAndEyesOpen = allSmilingAndEyesOpen && face.smilingProbability && face.leftEyeOpenProbability && face.rightEyeOpenProbability &&
            face.smilingProbability > 0.7 && face.leftEyeOpenProbability > 0.7 && face.rightEyeOpenProbability > 0.7;
      });
      this.mlKitAllOK = `All smiling and eyes open? ${allSmilingAndEyesOpen ? 'Yes!' : 'Nope'}`;
    }
  }
}
