import { Component } from "@angular/core";
import { MLKitObjectDetectionResult, MLKitObjectDetectionResultItem } from "nativescript-plugin-firebase/mlkit/objectdetection";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-objectdetection",
  moduleId: module.id,
  templateUrl: "./objectdetection.component.html",
})
export class ObjectDetectionComponent extends AbstractMLKitViewComponent {
  objs: Array<MLKitObjectDetectionResultItem>;

  onObjectDetectionResult(scanResult: any): void {
    const value: MLKitObjectDetectionResult = scanResult.value;
    this.objs = value.objects;
    value.objects.forEach(o => console.log(">> id: " + o.id + ", category: " + o.category + ", bounds: " + JSON.stringify(o.bounds)));
  }
}
