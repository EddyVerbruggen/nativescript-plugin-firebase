import { Component } from "@angular/core";
import {
  MLKitScanBarcodesOnDeviceResult,
  MLKitScanBarcodesResultBarcode
} from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-barcodescanning",
  moduleId: module.id,
  templateUrl: "./barcodescanning.component.html",
})
export class BarcodeScanningComponent extends AbstractMLKitViewComponent {

  barcodes: Array<MLKitScanBarcodesResultBarcode>;

  pause: boolean = false;

  onBarcodeScanResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;

    if (this.barcodes.length > 0) {
      console.log("this.barcodes: " + JSON.stringify(this.barcodes));
      // this.pause = true;
      // setTimeout(() => this.pause = false, 500)
    }
  }
}
