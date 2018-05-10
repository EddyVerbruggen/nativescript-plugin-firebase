import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";

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
  model.set("textValue", value.features.map(feature => feature.text).join("\n\n"));
}

export function onFaceDetectionResult(scanResult: any) {
  const value: MLKitDetectFacesResult = scanResult.value;
  if (value.faces.length > 0) {
    let allSmilingAndEyesOpen = true;
    value.faces.forEach(face => {
      allSmilingAndEyesOpen = allSmilingAndEyesOpen && face.smilingProbability && face.leftEyeOpenProbability && face.rightEyeOpenProbability &&
          face.smilingProbability > 0.7 && face.leftEyeOpenProbability > 0.7 && face.rightEyeOpenProbability > 0.7;
    });
    model.set("allOK", `All smiling and eyes open? ${allSmilingAndEyesOpen ? 'Yes, screen grabbed:' : 'Nope. Sad.'}`);
    // model.set("textValue", value.faces.map(face => JSON.stringify(face)).join("\n"));
    model.set("textValue", value.faces.map(face => `Smiling? ${round(face.smilingProbability)}%\nLeft eye open? ${round(face.leftEyeOpenProbability)}%\nRight eye open? ${round(face.rightEyeOpenProbability)}%`).join("\n\n"));

    if (allSmilingAndEyesOpen && value.imageSource) {
      model.set("lastMatch", value.imageSource);
    }
  }
}

function round (input) {
  if (isNaN(input)) {
    return 0;
  }
  return Math.round(input * 100);
}
