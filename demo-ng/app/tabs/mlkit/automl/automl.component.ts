import { Component } from "@angular/core";
import { MLKitAutoMLResult } from "nativescript-plugin-firebase/mlkit/automl";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-automl",
  moduleId: module.id,
  templateUrl: "./automl.component.html",
})
export class AutoMLComponent extends AbstractMLKitViewComponent {
  leftOrRight = "";

  onAutoMLResult(scanResult: any): void {
    const value: MLKitAutoMLResult = scanResult.value;

    if (value.labels.length === 0) {
      this.leftOrRight = "";
    } else {
      value.labels.forEach(label => {
        console.log(`${label.text}: ${label.confidence}`);
        if (label.text === "Left" && label.confidence >= 0.51) {
          this.leftOrRight = label.text;
        } else if (label.text === "Right" && label.confidence >= 0.55) {
          this.leftOrRight = label.text;
        }
      });
    }
  }
}
