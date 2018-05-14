import { Component, NgZone } from "@angular/core";
import { ImageSource } from "tns-core-modules/image-source";

import { BarcodeFormat, MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { Image } from "tns-core-modules/ui/image";
import { action } from "tns-core-modules/ui/dialogs";
import { ImageAsset } from "tns-core-modules/image-asset";
import * as ImagePicker from "nativescript-imagepicker";
import * as Camera from "nativescript-camera";
import { RouterExtensions } from "nativescript-angular";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "mlkit",
  moduleId: module.id,
  templateUrl: "./mlkit.component.html",
})
export class MLKitComponent {
  public scannedImage: Image;

  private mlkitFeatures: Array<string> = [
    "Text recognition",
    "Barcode scanning",
    "Face detection",
    "Image labeling",
    "Landmark recognition"
  ];

  constructor(private zone: NgZone,
              private routerExtensions: RouterExtensions) {
  }

  fromCameraFeed(): void {
    action(
        "Test which ML Kit feature?",
        "Cancel",
        this.mlkitFeatures
    ).then((pickedItem: string) => {
      let to;
      if (pickedItem === "Text recognition") {
        to = "/tabs/mlkit/textrecognition";
      } else if (pickedItem === "Barcode scanning") {
        to = "/tabs/mlkit/barcodescanning";
      } else if (pickedItem === "Face detection") {
        to = "/tabs/mlkit/facedetection";
      } else if (pickedItem === "Image labeling") {
        to = "/tabs/mlkit/imagelabeling";
      }
      if (to !== undefined) {
        this.routerExtensions.navigate([to],
            {
              animated: true,
              transition: {
                name: "slide",
                duration: 250,
                curve: "ease"
              }
            });
      }
    });
  }

  fromCameraPicture(): void {
    Camera.takePicture({
      width: 1000,
      height: 1000,
      keepAspectRatio: true,
      saveToGallery: false,
      cameraFacing: "rear"
    }).then(imageAsset => {
      new ImageSource().fromAsset(imageAsset).then(imageSource => {
        this.selectMLKitFeature(imageSource);
      });
    });
  }

  fromCameraroll(): void {
    const imagePicker = ImagePicker.create({
      mode: "single"
    });

    imagePicker
        .authorize()
        .then(() => imagePicker.present())
        .then((selection: Array<ImageAsset>) => {
          console.log(">>> selection: " + selection);
          if (selection.length === 0) return;

          const selected = selection[0];
          console.log(">>> selected: " + selected);
          selected.options.height = 1000;
          selected.options.width = 1000;
          selected.options.keepAspectRatio = true;
          selected.getImageAsync((image: any, error: any) => {
            console.log(">>> error: " + error);
            console.log(">>> image: " + image);
            if (error) {
              console.log(`Error getting image source from pickerI: ${error}`);
              return;
            }
            const imageSource = new ImageSource();
            imageSource.setNativeSource(image);
            this.selectMLKitFeature(imageSource);
          });
        })
        .catch(e => {
          console.log(`Image Picker error: ${e}`);
        });
  }

  selectMLKitFeature(imageSource: ImageSource): void {
    action(
        "Use which ML Kit feature?",
        "Cancel",
        this.mlkitFeatures
    ).then((pickedItem: string) => {
      let pickedItemIndex = this.mlkitFeatures.indexOf(pickedItem);
      if (pickedItem === "Text recognition") {
        this.recognizeText(imageSource);
      } else if (pickedItem === "Barcode scanning") {
        this.scanBarcode(imageSource);
      } else if (pickedItem === "Face detection") {
        this.detectFaces(imageSource);
      } else if (pickedItem === "Image labeling") {
        this.labelImage(imageSource);
      }
    });
  }

  private recognizeText(imageSource: ImageSource): void {
    firebase.mlkit.textrecognition.recognizeText({
      image: imageSource
    }).then(
        (result: MLKitRecognizeTextResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.features),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private scanBarcode(imageSource: ImageSource): void {
    firebase.mlkit.barcodescanning.scanBarcodes({
      image: imageSource,
      formats: [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13]
    }).then(
        (result: MLKitScanBarcodesResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.barcodes),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private detectFaces(imageSource: ImageSource): void {
    firebase.mlkit.facedetection.detectFaces({
      image: imageSource
    }).then(
        (result: MLKitDetectFacesResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.faces),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private labelImage(imageSource: ImageSource): void {
    firebase.mlkit.imagelabeling.labelImage({
      image: imageSource,
      confidenceThreshold: 0.3
    }).then(
        (result: MLKitDetectFacesResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.faces),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  // onScanResultImage(event): void {
  //   this.scannedImage = event.value;
  // }
}
