import { Component } from "@angular/core";
import { MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

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

  onBarcodeScanResult(event: any): void {
    const result: MLKitScanBarcodesOnDeviceResult = event.value;
    this.barcodes = result.barcodes;
  }
}
