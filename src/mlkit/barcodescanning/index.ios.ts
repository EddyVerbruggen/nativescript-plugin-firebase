import { ImageSource, Utils } from "@nativescript/core";
import { MLKitScanBarcodesOnDeviceOptions, MLKitScanBarcodesOnDeviceResult } from "./index";
import { BarcodeFormat, MLKitBarcodeScanner as MLKitBarcodeScannerBase } from "./barcodescanning-common";

export { BarcodeFormat };

export class MLKitBarcodeScanner extends MLKitBarcodeScannerBase {

  private player: AVAudioPlayer;
  private inverseThrottle = 0;

  protected createDetector(): any {
    let formats: Array<BarcodeFormat>;
    if (this.formats) {
      formats = [];
      const requestedFormats = this.formats.split(",");
      requestedFormats.forEach(format => formats.push(BarcodeFormat[format.trim().toUpperCase()]));
    }

    if (this.beepOnScan) {
      // play nice with others when playing sound
      AVAudioSession.sharedInstance().setCategoryModeOptionsError(AVAudioSessionCategoryPlayback, AVAudioSessionModeDefault, AVAudioSessionCategoryOptions.MixWithOthers);

      // prepare an audio player, with a sound file bundled in our custom fwk
      const barcodeBundlePath = NSBundle.bundleWithIdentifier("org.nativescript.plugin.firebase.MLKit").bundlePath;
      this.player = new AVAudioPlayer({contentsOfURL: NSURL.fileURLWithPath(barcodeBundlePath + "/beep.caf")});
      this.player.numberOfLoops = 1;
      this.player.volume = 0.7; // this is not the actual volume, as that really depends on the device volume
      this.player.prepareToPlay();
    }

    return getBarcodeDetector(formats);
  }

  protected createSuccessListener(): any {
    return (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (barcodes !== null) {
        const result = <MLKitScanBarcodesOnDeviceResult>{
          barcodes: []
        };

        for (let i = 0, l = barcodes.count; i < l; i++) {
          const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
          const image: UIImage = this.lastVisionImage;
          let imageWidth = image.size.width;
          let imageHeight = image.size.height;

          // the iOS image is rotated, so compensate for it when reporting these
          let { x, y } = barcode.frame.origin;
          let { width, height } = barcode.frame.size;

          if (image) {
            const origX = x;
            const origWidth = width;
            const origImageWidth = imageWidth;

            if (Utils.ios.isLandscape()) {
              if (UIDevice.currentDevice.orientation === UIDeviceOrientation.LandscapeRight) {
                // the image is rotated 180 degrees
                x = image.size.width - (width + x);
                y = image.size.height - (height + y);
              }
            } else {
              // the image is rotated 90 degrees to the left
              x = image.size.height - (height + y);
              y = origX;
              width = height;
              height = origWidth;
              imageWidth = imageHeight;
              imageHeight = origImageWidth;
            }
          }

          result.barcodes.push({
            value: barcode.rawValue,
            displayValue: barcode.displayValue,
            format: BarcodeFormat[barcode.format],
            ios: barcode,
            bounds: {
              origin: {
                x,
                y
              },
              size: {
                width,
                height
              }
            },
            image: {
              width: imageWidth,
              height: imageHeight
            }
          });
        }

        this.notify({
          eventName: MLKitBarcodeScanner.scanResultEvent,
          object: this,
          value: result
        });

        if (barcodes.count > 0 && this.player) {
          this.player.play();
        }
      }
    };
  }

  protected rotateRecording(): boolean {
    return false;
  }

  protected preProcessImage(image: any): any {
    if (this.supportInverseBarcodes && this.inverseThrottle++ % 2 === 0) {
      const filter = CIFilter.filterWithName('CIColorInvert');
      let ciImg = CIImage.alloc().initWithImage(image);
      filter.setValueForKey(ciImg, kCIInputImageKey);
      filter.setDefaults();
      ciImg = filter.outputImage;
      const context = CIContext.alloc().init();
      const cgImg = context.createCGImageFromRect(ciImg, ciImg.extent);
      image = UIImage.alloc().initWithCGImage(cgImg);
    }
    return image;
  }
}

function getBarcodeDetector(formats?: Array<BarcodeFormat>): any {
  if (formats && formats.length > 0) {
    let barcodeFormats = 0;
    formats.forEach(format => barcodeFormats |= format);
    return FIRVision.vision().barcodeDetectorWithOptions(FIRVisionBarcodeDetectorOptions.alloc().initWithFormats(barcodeFormats));
  } else {
    return FIRVision.vision().barcodeDetector();
  }
}

export function scanBarcodesOnDevice(options: MLKitScanBarcodesOnDeviceOptions): Promise<MLKitScanBarcodesOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const barcodeDetector = getBarcodeDetector(options.formats);

      const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
      const firImage = FIRVisionImage.alloc().initWithImage(image);

      barcodeDetector.detectInImageCompletion(firImage, (barcodes: NSArray<FIRVisionBarcode>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (barcodes !== null) {
          const result = <MLKitScanBarcodesOnDeviceResult>{
            barcodes: []
          };

          for (let i = 0, l = barcodes.count; i < l; i++) {
            const barcode: FIRVisionBarcode = barcodes.objectAtIndex(i);
            result.barcodes.push({
              value: barcode.rawValue,
              displayValue: barcode.displayValue,
              format: BarcodeFormat[barcode.format],
              ios: barcode,
              bounds: barcode.frame,
              image: {
                width: image.size.width,
                height: image.size.height
              }
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.scanBarcodesOnDevice: " + ex);
      reject(ex);
    }
  });
}
