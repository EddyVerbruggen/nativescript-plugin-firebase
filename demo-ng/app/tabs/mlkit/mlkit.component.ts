import { Component, NgZone } from "@angular/core";
import { ImageSource } from "tns-core-modules/image-source";

import { BarcodeFormat, MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { MLKitLandmarkRecognitionResult } from "nativescript-plugin-firebase/mlkit/landmarkrecognition";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { action } from "tns-core-modules/ui/dialogs";
import { ImageAsset } from "tns-core-modules/image-asset";
import * as ImagePicker from "nativescript-imagepicker";
import * as Camera from "nativescript-camera";
import { RouterExtensions } from "nativescript-angular";
import { isIOS } from "tns-core-modules/platform";
import { MLKitImageLabelingResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "mlkit",
  moduleId: module.id,
  templateUrl: "./mlkit.component.html",
})
export class MLKitComponent {

  pickedImage: ImageSource;

  private mlkitFeatures: Array<string> = [
    "Text recognition",
    "Barcode scanning",
    "Face detection",
    "Image labeling",
    "Landmark recognition (cloud)"
  ];

  constructor(private routerExtensions: RouterExtensions,
              private zone: NgZone) {
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
      } else if (pickedItem === "Landmark recognition (cloud)") {
        alert({
          title: `Not available`,
          message: `Landmark recognition is currently cloud-only, so that would be a bit too taxing on your dataplan.`,
          okButtonText: "Gotcha!"
        });
        return;
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
    if (!isIOS) {
      Camera.requestPermissions();
    }
    Camera.takePicture({
      width: 800,
      height: 800,
      keepAspectRatio: true,
      saveToGallery: true,
      cameraFacing: "rear"
    }).then(imageAsset => {
      new ImageSource().fromAsset(imageAsset).then(imageSource => {
        this.pickedImage = imageSource;
        // give the user some to to see the picture
        setTimeout(() => this.selectMLKitFeature(imageSource), 500);
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
          if (selection.length === 0) return;

          const selected = selection[0];
          selected.options.height = 800;
          selected.options.width = 800;
          selected.options.keepAspectRatio = true;
          selected.getImageAsync((image: any, error: any) => {
            if (error) {
              console.log(`Error getting image source from picker: ${error}`);
              return;
            }
            if (!image) {
              console.log(`This is probably an iCloud image - which won't work`);
              return;
            }
            const imageSource = new ImageSource();
            imageSource.setNativeSource(image);
            this.zone.run(() => {
              this.pickedImage = imageSource;
            });
            // give the user some to to see the picture
            setTimeout(() => this.selectMLKitFeature(imageSource), 500);
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
      } else if (pickedItem === "Landmark recognition (cloud)") {
        this.recognizeLandmark(imageSource);
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

  private recognizeLandmark(imageSource: ImageSource): void {
    firebase.mlkit.landmarkrecognition.recognizeLandmark({
      image: imageSource
    }).then(
        (result: MLKitLandmarkRecognitionResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.landmarks),
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
        (result: MLKitImageLabelingResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.labels),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  // onScanResultImage(event): void {
  //   this.scannedImage = event.value;
  // }
}
