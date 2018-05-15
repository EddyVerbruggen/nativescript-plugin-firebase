import { Component } from "@angular/core";
import { MLKitRecognizeTextOnDeviceResult } from "nativescript-plugin-firebase/mlkit/textrecognition";

@Component({
  selector: "mlkit-textrecognition",
  moduleId: module.id,
  templateUrl: "./textrecognition.component.html",
})
export class TextRecognitionComponent {
  features: Array<{
    text: string;
  }>;

  onTextRecognitionResult(scanResult: any): void {
    const value: MLKitRecognizeTextOnDeviceResult = scanResult.value;
    this.features = value.features;
  }
}
