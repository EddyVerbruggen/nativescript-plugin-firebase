import { ImageSource } from "tns-core-modules/image-source";
import { BarcodeFormat, MLKitBarcodeScanner as MLKitBarcodeScannerBase } from "./barcodescanning-common";
import { MLKitScanBarcodesOptions, MLKitScanBarcodesResult } from "./index";
import { MLKitOptions } from "../index";

export class MLKitBarcodeScanner extends MLKitBarcodeScannerBase {

  // private _reader: QRCodeReader;
  // private _scanner: QRCodeReaderViewController;

  constructor() {
    super();
    console.log("-- constr view");
  }

  createNativeView(): Object {
    let v = super.createNativeView();
    console.log("-- createNativeView");
    this.initView();
    return v;
  }

  initView() {
    // const types = getBarcodeTypes(this.formats);
    // this._reader = QRCodeReader.readerWithMetadataObjectTypes(<any>types);

    let torch = false;
    let flip = false;
    let closeButtonLabel = null;
    let cancelLabelBackgroundColor = null;

    if (this.preferFrontCamera) {
      // this._reader.switchDeviceInput();
    }

    // this._scanner = QRCodeReaderViewController.readerWithCancelButtonTitleCodeReaderStartScanningAtLoadShowSwitchCameraButtonShowTorchButtonCancelButtonBackgroundColor(
    //     closeButtonLabel, this._reader, true, flip, torch, cancelLabelBackgroundColor);
    // this._scanner.modalPresentationStyle = UIModalPresentationStyle.CurrentContext;

    /*
    const that = this;
    let delegate = QRCodeReaderDelegateImpl.initWithOwner(new WeakRef(this));
    delegate.setCallback(
        this.beepOnScan,
        true,
        this.reportDuplicates,
        (text: string, format: string) => {
          that.notify({
            eventName: BarcodeScannerBaseView.scanResultEvent,
            object: that,
            format: format,
            text: text
          });
        });
    this._scanner.delegate = delegate;

    if (this.ios) {
      this.ios.layer.insertSublayerAtIndex(this._reader.previewLayer, 0);
      this._reader.startScanning();
    }
    */
  }

  // public onLayout(left: number, top: number, right: number, bottom: number): void {
  //   super.onLayout(left, top, right, bottom);
  //   if (this._hasSupport && this.ios) {
  //     this._reader.previewLayer.frame = this.ios.layer.bounds;
  //   }
  // }
}

export function scanBarcodes(options: MLKitScanBarcodesOptions): Promise<MLKitScanBarcodesResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      // TODO pass in formats
      const barcodeDetector: FIRVisionBarcodeDetector = firVision.barcodeDetector();
      // const textDetector: FIRVisionBarcodeDetector = firVision.barcodeDetectorWithOptions();

      barcodeDetector.detectInImageCompletion(getImage(options), (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (barcodes !== null) {
          const result = <MLKitScanBarcodesResult>{
            barcodes: []
          };

          for (let i = 0, l = barcodes.count; i < l; i++) {
            const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
            result.barcodes.push({
              value: barcode.rawValue,
              format: BarcodeFormat[barcode.format]
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodes: " + ex);
      reject(ex);
    }
  });
}

// TODO move
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
