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

  constructor() {
    super();
    // let's start with the torch on, just for show
    this.torchOn = true;
  }

  onBarcodeScanResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;
  }
}
