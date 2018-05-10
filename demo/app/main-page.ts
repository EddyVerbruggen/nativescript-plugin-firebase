import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";

const model = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = model;
}

export function onBarcodesScanResult(scanResult: any) {
  const value: MLKitScanBarcodesResult = scanResult.value;
  // if multiple barcodes are returned, this will show the last one ;)
  value.barcodes.forEach(barcode => {
    model.set("barcodeValue", barcode.value);
    model.set("barcodeFormat", barcode.format);
  });
}

export function onTextRecognitionResult(scanResult: any) {
  const value: MLKitRecognizeTextResult = scanResult.value;
  model.set("textValue", value.features.map(feature => feature.text).join("\n"));
}
