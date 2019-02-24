import { Component } from "@angular/core";
import {
  MLKitRecognizeTextResult,
  MLKitRecognizeTextResultBlock
} from "nativescript-plugin-firebase/mlkit/textrecognition";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-textrecognition",
  moduleId: module.id,
  templateUrl: "./textrecognition.component.html",
})
export class TextRecognitionComponent extends AbstractMLKitViewComponent {
  blocks: Array<MLKitRecognizeTextResultBlock>;

  onTextRecognitionResult(scanResult: any): void {
    const value: MLKitRecognizeTextResult = scanResult.value;
    this.blocks = value.blocks;
  }
}
