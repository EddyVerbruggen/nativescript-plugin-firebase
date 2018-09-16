import { Component } from "@angular/core";
import { MLKitImageLabelingOnDeviceResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-imagelabeling",
  moduleId: module.id,
  templateUrl: "./imagelabeling.component.html",
})
export class ImageLabelingComponent extends AbstractMLKitViewComponent {
  labels: Array<{
    text: string;
    confidence: number;
  }>;

  constructor() {
    super();
    // let's start with the torch on, just for show
    this.torchOn = true;
  }

  onImageLabelingResult(scanResult: any): void {
    const value: MLKitImageLabelingOnDeviceResult = scanResult.value;
    this.labels = value.labels;
  }
}
