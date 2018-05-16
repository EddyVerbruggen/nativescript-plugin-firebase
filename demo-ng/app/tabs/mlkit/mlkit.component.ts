import { Component, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ImageSource } from "tns-core-modules/image-source";
import { action } from "tns-core-modules/ui/dialogs";
import { ImageAsset } from "tns-core-modules/image-asset";
import { isIOS } from "tns-core-modules/platform";
import * as ImagePicker from "nativescript-imagepicker";
import * as Camera from "nativescript-camera";
import { BarcodeFormat, MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitLandmarkRecognitionCloudResult } from "nativescript-plugin-firebase/mlkit/landmarkrecognition";
import { MLKitDetectFacesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import {
  MLKitRecognizeTextCloudResult,
  MLKitRecognizeTextOnDeviceResult
} from "nativescript-plugin-firebase/mlkit/textrecognition";
import {
  MLKitImageLabelingCloudResult,
  MLKitImageLabelingOnDeviceResult
} from "nativescript-plugin-firebase/mlkit/imagelabeling";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "mlkit",
  moduleId: module.id,
  templateUrl: "./mlkit.component.html",
})
export class MLKitComponent {

  pickedImage: ImageSource;

  private mlkitFeatures: Array<string> = [
    "Text recognition (on device)",
    "Text recognition (cloud)",
    "Barcode scanning (on device)",
    "Face detection (on device)",
    "Image labeling (on device)",
    "Image labeling (cloud)",
    "Landmark recognition (cloud)"
  ];

  private mlkitOnDeviceFeatures: Array<string> = [
    "Text recognition",
    "Barcode scanning",
    "Face detection",
    "Image labeling"
  ];

  constructor(private routerExtensions: RouterExtensions,
              private zone: NgZone) {
  }

  fromCameraFeed(): void {
    action(
        "Test which on-device ML Kit feature?",
        "Cancel",
        this.mlkitOnDeviceFeatures
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
    if (!isIOS) {
      Camera.requestPermissions();
    }
    Camera.takePicture({
      width: 800,
      height: 800,
      keepAspectRatio: true,
      saveToGallery: false,
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
              alert({
                title: `Invalid image`,
                message: `Perhaps this is an image from cloud storage?`,
                okButtonText: "Hmm.."
              });
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

  reusePickedImage(): void {
    this.selectMLKitFeature(this.pickedImage);
  }

  private selectMLKitFeature(imageSource: ImageSource): void {
    action(
        "Use which ML Kit feature?",
        "Cancel",
        this.mlkitFeatures
    ).then((pickedItem: string) => {
      let pickedItemIndex = this.mlkitFeatures.indexOf(pickedItem);
      if (pickedItem === "Text recognition (on device)") {
        this.recognizeTextOnDevice(imageSource);
      } else if (pickedItem === "Text recognition (cloud)") {
        this.recognizeTextCloud(imageSource);
      } else if (pickedItem === "Barcode scanning (on device)") {
        this.scanBarcodeOnDevice(imageSource);
      } else if (pickedItem === "Face detection (on device)") {
        this.detectFacesOnDevice(imageSource);
      } else if (pickedItem === "Image labeling (on device)") {
        this.labelImageOnDevice(imageSource);
      } else if (pickedItem === "Image labeling (cloud)") {
        this.labelImageCloud(imageSource);
      } else if (pickedItem === "Landmark recognition (cloud)") {
        this.recognizeLandmarkCloud(imageSource);
      }
    });
  }

  private recognizeTextOnDevice(imageSource: ImageSource): void {
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: imageSource
    }).then((result: MLKitRecognizeTextOnDeviceResult) => {
      alert({
        title: `Result`,
        message: result.blocks.map(block => block.text).join(""),
        okButtonText: "OK"
      });
    }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private recognizeTextCloud(imageSource: ImageSource): void {
    firebase.mlkit.textrecognition.recognizeTextCloud({
      image: imageSource,
      modelType: "latest",
      maxResults: 15
    }).then(
        (result: MLKitRecognizeTextCloudResult) => {
          alert({
            title: `Result`,
            message: result.text,
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private recognizeLandmarkCloud(imageSource: ImageSource): void {
    firebase.mlkit.landmarkrecognition.recognizeLandmarksCloud({
      image: imageSource,
      maxResults: 8
    }).then(
        (result: MLKitLandmarkRecognitionCloudResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.landmarks),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private scanBarcodeOnDevice(imageSource: ImageSource): void {
    console.log(">>> imageSource.rotationAngle: " + imageSource.rotationAngle);
    firebase.mlkit.barcodescanning.scanBarcodesOnDevice({
      image: imageSource,
      formats: [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13]
    }).then(
        (result: MLKitScanBarcodesOnDeviceResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.barcodes),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private detectFacesOnDevice(imageSource: ImageSource): void {
    firebase.mlkit.facedetection.detectFacesOnDevice({
      image: imageSource
    }).then(
        (result: MLKitDetectFacesOnDeviceResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.faces),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private labelImageOnDevice(imageSource: ImageSource): void {
    firebase.mlkit.imagelabeling.labelImageOnDevice({
      image: imageSource,
      confidenceThreshold: 0.3
    }).then(
        (result: MLKitImageLabelingOnDeviceResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.labels),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private labelImageCloud(imageSource: ImageSource): void {
    firebase.mlkit.imagelabeling.labelImageCloud({
      image: imageSource,
      modelType: "stable",
      maxResults: 5
    }).then(
        (result: MLKitImageLabelingCloudResult) => {
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
