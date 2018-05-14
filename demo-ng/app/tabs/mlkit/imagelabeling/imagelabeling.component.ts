import { Component } from "@angular/core";
import { MLKitImageLabelingResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";

@Component({
  selector: "mlkit-imagelabeling",
  moduleId: module.id,
  templateUrl: "./imagelabeling.component.html",
})
export class ImageLabelingComponent {
  labels: Array<{
    text: string;
    confidence: number;
  }>;

  onImageLabeledResult(scanResult: any): void {
    const value: MLKitImageLabelingResult = scanResult.value;
    this.labels = value.labels;
  }
}
