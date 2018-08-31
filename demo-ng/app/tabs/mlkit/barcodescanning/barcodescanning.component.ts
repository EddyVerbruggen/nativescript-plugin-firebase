import { Component } from "@angular/core";
import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-barcodescanning",
  moduleId: module.id,
  templateUrl: "./barcodescanning.component.html",
})
export class BarcodeScanningComponent extends AbstractMLKitViewComponent {
  barcodes: Array<{
    value: string;
    format: string;
  }>;

  onBarcodeScanResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;
    console.log("this.barcodes: " + JSON.stringify(this.barcodes));
  }
}
