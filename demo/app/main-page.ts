import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

const model = new HelloWorldModel();

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = model;
}

export function onBarcodeScanResult(scanResult: any) {
  console.log(`onScanResult: ${scanResult.value} (${scanResult.format})`);
  model.set("barcodeValue", scanResult.value);
  model.set("barcodeFormat", scanResult.format);
}
