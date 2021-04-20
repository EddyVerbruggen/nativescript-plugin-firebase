import { Component, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import * as Camera from "nativescript-camera";
import * as ImagePicker from "nativescript-imagepicker";
import { BarcodeFormat, MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitCustomModelResult } from "nativescript-plugin-firebase/mlkit/custommodel";
import { MLKitDetectFacesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { MLKitImageLabelingCloudResult, MLKitImageLabelingOnDeviceResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";
import { MLKitLandmarkRecognitionCloudResult } from "nativescript-plugin-firebase/mlkit/landmarkrecognition";
import { MLKitNaturalLanguageIdentificationResult } from "nativescript-plugin-firebase/mlkit/naturallanguageidentification";
import { MLKitAutoMLResult } from "nativescript-plugin-firebase/mlkit/automl";
import { MLKitObjectDetectionResult } from "nativescript-plugin-firebase/mlkit/objectdetection";
import { MLKitSmartReplyConversationMessage } from "nativescript-plugin-firebase/mlkit/smartreply";
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import * as fileSystemModule from "tns-core-modules/file-system";
import { ImageAsset } from "tns-core-modules/image-asset";
import { fromFile, ImageSource } from "tns-core-modules/image-source";
import { isIOS } from "tns-core-modules/platform";
import { action } from "tns-core-modules/ui/dialogs";

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
    "Detect Objects (on device)",
    "Image labeling (on device)",
    "Image labeling (cloud)",
    "Custom model",
    "AutoML",
    "Landmark recognition (cloud)",
    "Language identification",
    "Text translation (to EN)",
    "Smart reply"
  ];

  private mlkitOnDeviceFeatures: Array<string> = [
    "Text recognition",
    "Barcode scanning",
    "Face detection",
    "Object detection",
    "Image labeling",
    "Custom model",
    "AutoML",
    "Language identification"
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
      } else if (pickedItem === "Object detection") {
        to = "/tabs/mlkit/objectdetection";
      } else if (pickedItem === "Image labeling") {
        to = "/tabs/mlkit/imagelabeling";
      } else if (pickedItem === "Custom model") {
        to = "/tabs/mlkit/custommodel";
      } else if (pickedItem === "AutoML") {
        to = "/tabs/mlkit/automl";
      } else if (pickedItem === "Language identification") {
        to = "/tabs/mlkit/languageidentification";
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

  fromAppFolder(): void {
    const folder = fileSystemModule.knownFolders.currentApp();
    const path = fileSystemModule.path.join(folder.path, "/images/puppy.jpg");
    if (!fileSystemModule.File.exists(path)) {
      console.log(`File doesn't exist at path: ${path}`);
      return;
    }
    const imageSource = fromFile(path);
    this.pickedImage = imageSource;
    // give the user some time to to see the picture
    setTimeout(() => this.selectMLKitFeature(imageSource), 500);
  }

  fromCameraPicture(): void {
    if (!isIOS) {
      Camera.requestPermissions();
    }
    Camera.takePicture({
      width: 600,
      height: 600,
      keepAspectRatio: true,
      saveToGallery: true,
      cameraFacing: "rear"
    }).then(imageAsset => {
      new ImageSource().fromAsset(imageAsset).then(imageSource => {
        this.pickedImage = imageSource;
        // give the user some time to to see the picture
        setTimeout(() => this.selectMLKitFeature(imageSource), 700);
      });
    });
  }

  fromCameraRoll(): void {
    const imagePicker = ImagePicker.create({
      mode: "single"
    });

    imagePicker
        .authorize()
        .then(() => imagePicker.present())
        .then((selection: Array<ImageAsset>) => {
          if (selection.length === 0) return;

          const selected = selection[0];
          selected.options.height = 600;
          selected.options.width = 600;
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
            // give the user some time to to see the picture
            setTimeout(() => this.selectMLKitFeature(imageSource), 500);
          });
        })
        .catch(e => {
          console.log(`Image Picker error: ${e}`);
        });
  }

  reusePickedImage(): void {
    if (this.pickedImage) {
      this.selectMLKitFeature(this.pickedImage);
    }
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
      } else if (pickedItem === "Detect Objects (on device)") {
        this.detectObjects(imageSource);
      } else if (pickedItem === "Landmark recognition (cloud)") {
        this.recognizeLandmarkCloud(imageSource);
      } else if (pickedItem === "Custom model") {
        this.customModel(imageSource);
      } else if (pickedItem === "AutoML") {
        this.autoML(imageSource);
      } else if (pickedItem === "Language identification") {
        this.languageIdentification(imageSource);
      } else if (pickedItem === "Text translation (to EN)") {
        this.textTranslation(imageSource);
      } else if (pickedItem === "Smart reply") {
        this.smartReply(imageSource);
      }
    });
  }

  private recognizeTextOnDevice(imageSource: ImageSource): void {
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: imageSource
    }).then((result: MLKitRecognizeTextResult) => {
      console.log("recognizeTextOnDevice result: " + JSON.stringify(result));
      alert({
        title: `Result`,
        message: result.text ? result.text : "",
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
        (result: MLKitRecognizeTextResult) => {
          console.log("recognizeTextCloud result: " + JSON.stringify(result));
          alert({
            title: `Result`,
            message: result.text ? result.text : "",
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

  private languageIdentification(imageSource: ImageSource): void {
    // First recognize text, then get its language
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: imageSource
    }).then((result: MLKitRecognizeTextResult) => {
      firebase.mlkit.naturallanguageidentification.identifyNaturalLanguage({
        text: result.text
      }).then((languageIdResult: MLKitNaturalLanguageIdentificationResult) => {
        alert({
          title: `Result`,
          message: `Language code: ${languageIdResult ? languageIdResult.languageCode : "Unknown"}`,
          okButtonText: "OK"
        });
      }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
    }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private textTranslation(imageSource: ImageSource): void {
    // First recognize text, then get its language, then translate the text
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: imageSource
    }).then((result: MLKitRecognizeTextResult) => {
      if (!result || !result.text) {
        alert({
          title: `No text found`,
          message: `MLKit text recognition could not find any text in your image - please try a different one`,
          okButtonText: "Damn! OK.."
        });
        return;
      }

      firebase.mlkit.naturallanguageidentification.identifyNaturalLanguage({
        text: result.text
      }).then((languageIdResult: MLKitNaturalLanguageIdentificationResult) => {

        if (!languageIdResult || !languageIdResult.languageCode) {
          alert({
            title: `Unknown language`,
            message: `Could not determine language, please try again`,
            okButtonText: "Damn! OK.."
          });

        } else if (languageIdResult.languageCode.toLowerCase() === "en") {
          alert({
            title: `Dude..`,
            message: `Language already English.. no need to translate 😉`,
            okButtonText: "Lol, fine.."
          });

        } else {
          // translate to EN
          console.log(`Translating '${languageIdResult.languageCode}' to 'en'`);

          firebase.mlkit.translation.ensureTranslationModelDownloaded({
            from: languageIdResult.languageCode,
            to: "en"
          }).then(() => {
            firebase.mlkit.translation.translateText({
              from: languageIdResult.languageCode,
              to: "en",
              text: result.text
            }).then(result => {
              alert({
                title: "Translated to English:",
                message: result,
                okButtonText: "Awesome!"
              });
            }).catch(console.error)
          }).catch(console.error);
        }
      }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
    }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  // it would be easier to hardcode the conversation, but this fits better with the other image-based examples
  private smartReply(imageSource: ImageSource): void {
    firebase.mlkit.textrecognition.recognizeTextOnDevice({
      image: imageSource
    }).then((result: MLKitRecognizeTextResult) => {
      const conversation: Array<MLKitSmartReplyConversationMessage> = [];
      let personId = 0;

      // just faking a conversation based on the text blocks we got from the image :)
      result.blocks.forEach(block => conversation.push({
        text: block.text,
        userId: "person" + (++personId % 2 === 0 ? 1 : 2),
        localUser: (personId % 2 === 0),
        timestamp: new Date().getTime() - 500000 + (personId * 5000)
      }));

      console.log(JSON.stringify(conversation));

      firebase.mlkit.smartreply.suggestReplies({
        conversation
      }).then((result: Array<string>) => {
        console.log("result1: " + JSON.stringify(result));
        alert({
          title: `Suggestions`,
          message: JSON.stringify(result),
          okButtonText: "OK"
        });
      }).catch(errorMessage => {
        console.log("ML Kit error: " + errorMessage);
        alert({
          title: `Error getting suggestions`,
          message: errorMessage,
          okButtonText: "Pity.."
        });
      });
    }).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private customModel(imageSource: ImageSource): void {
    firebase.mlkit.custommodel.useCustomModel({
      image: imageSource,

      // note that only local quant models work currently (so not 'float' models, and not loaded from the cloud)

      // cloudModelName: "~/mobilenet_quant_v2_1_0_299",
      // cloudModelName: "~/inception_v3_quant",

      // note that there's an issue with this model (making the app crash): "ValueError: Model provided has model identifier 'Mobi', should be 'TFL3'" (reported by https://github.com/EddyVerbruggen/ns-mlkit-tflite-curated/blob/master/scripts/get_model_details.py)
      // localModelFile: "~/custommodel/nutella/nutella_quantize.tflite",
      // labelsFile: "~/custommodel/nutella/nutella_labels.txt",

      // localModelFile: "~/custommodel/mobilenet/mobilenet_quant_v2_1.0_299.tflite",
      // labelsFile: "~/custommodel/mobilenet/mobilenet_labels.txt",

      localModelFile: "~/custommodel/inception/inception_v3_quant.tflite",
      labelsFile: "~/custommodel/inception/inception_labels.txt",

      maxResults: 5,
      modelInput: [{
        // shape: [1, 224, 224, 3], // flowers / nutella
        shape: [1, 299, 299, 3], // others
        type: "QUANT" // the only currently supported type of model
      }],
    }).then(
        (result: MLKitCustomModelResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.result),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  private scanBarcodeOnDevice(imageSource: ImageSource): void {
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
      image: imageSource,
      detectionMode: "accurate",
      enableFaceTracking: false,
      minimumFaceSize: 0.25
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

  private autoML(imageSource: ImageSource): void {
    firebase.mlkit.automl.labelImage({
      image: imageSource,
      localModelResourceFolder: "leftright",
      confidenceThreshold: 0.3
    }).then(
        (result: MLKitAutoMLResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.labels),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }

  /*
  private customModelOnDevice(imageSource: ImageSource): void {
    console.log("customModelOnDevice");
    firebase.mlkit.custommodel.useCustomModel({
      image: imageSource
    }).then(
        (result: MLKitCustomModelResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.result),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }
  */

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

  private detectObjects(imageSource: ImageSource): void {
    firebase.mlkit.objectdetection.detectObjects({
      image: imageSource,
      classify: true,
      multiple: true
    }).then(
        (result: MLKitObjectDetectionResult) => {
          alert({
            title: `Result`,
            message: JSON.stringify(result.objects),
            okButtonText: "OK"
          });
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }
}
