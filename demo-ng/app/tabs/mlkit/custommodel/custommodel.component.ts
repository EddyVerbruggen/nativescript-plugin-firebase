import { Component } from "@angular/core";
import { MLKitCustomModelResult } from "nativescript-plugin-firebase/mlkit/custommodel";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-custommodel",
  moduleId: module.id,
  templateUrl: "./custommodel.component.html",
})
export class CustomModelComponent extends AbstractMLKitViewComponent {
  result: any;

  onCustomModelResult(scanResult: any): void {
    const value: MLKitCustomModelResult = scanResult.value;
    this.result = value.result;
  }
}
