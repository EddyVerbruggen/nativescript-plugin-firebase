import { Component } from "@angular/core";
import { MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

@Component({
  selector: "mlkit-barcodescanning",
  moduleId: module.id,
  templateUrl: "./barcodescanning.component.html",
})
export class BarcodeScanningComponent {
  barcodes: Array<{
    value: string;
    format: string;
  }>;

  onBarcodeScanResult(event): void {
    const result: MLKitScanBarcodesResult = event.value;
    this.barcodes = result.barcodes;
    console.log(">>> onBarcodeScanResult, this.barcodes: " + JSON.stringify(this.barcodes));
  }
}
