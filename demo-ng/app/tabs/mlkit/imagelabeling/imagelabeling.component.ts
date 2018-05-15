import { Component } from "@angular/core";
import { MLKitImageLabelingOnDeviceResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";

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

  onImageLabelingResult(scanResult: any): void {
    const value: MLKitImageLabelingOnDeviceResult = scanResult.value;
    this.labels = value.labels;
  }
}
