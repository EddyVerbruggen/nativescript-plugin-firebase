import { ImageSource } from "@nativescript/core";
import { MLKitAutoMLResult, MLKitAutoMLOptions } from "./index";
import { MLKitVisionOptions } from "../index";
import { MLKitAutoML as MLKitAutoMLBase } from "./automl-common";

export class MLKitAutoML extends MLKitAutoMLBase {

  protected createDetector(): any {
    return getDetector(this.localModelResourceFolder, this.confidenceThreshold);
  }

  protected createSuccessListener(): any {
    return (labels: NSArray<FIRVisionImageLabel>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (labels !== null && labels.count > 0) {
        const result = <MLKitAutoMLResult>{
          labels: []
        };

        for (let i = 0, l = labels.count; i < l; i++) {
          const label: FIRVisionImageLabel = labels.objectAtIndex(i);
          result.labels.push({
            text: label.text,
            confidence: label.confidence
          });
        }

        this.notify({
          eventName: MLKitAutoML.scanResultEvent,
          object: this,
          value: result
        });
      }
    }
  }

  protected rotateRecording(): boolean {
    return true;
  }
}

function getDetector(localModelResourceFolder: string, confidenceThreshold?: number): FIRVisionImageLabeler {
  const manifestPath = NSBundle.mainBundle.pathForResourceOfTypeInDirectory("manifest", "json", localModelResourceFolder);
  const fIRAutoMLLocalModel = FIRAutoMLLocalModel.alloc().initWithManifestPath(manifestPath);

  const options = FIRVisionOnDeviceAutoMLImageLabelerOptions.alloc().initWithLocalModel(fIRAutoMLLocalModel);
  options.confidenceThreshold = confidenceThreshold || 0.5;
  const fIRVisionImageLabeler = FIRVision.vision().onDeviceAutoMLImageLabelerWithOptions(options);

  // TODO also support cloud hosted models
  return fIRVisionImageLabeler;
}

export function labelImage(options: MLKitAutoMLOptions): Promise<MLKitAutoMLResult> {
  return new Promise((resolve, reject) => {
    try {
      const labelDetector = getDetector(options.localModelResourceFolder, options.confidenceThreshold);

      labelDetector.processImageCompletion(getImage(options), (labels: NSArray<FIRVisionImageLabel>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (labels !== null) {
          const result = <MLKitAutoMLResult>{
            labels: []
          };

          for (let i = 0, l = labels.count; i < l; i++) {
            const label: FIRVisionImageLabel = labels.objectAtIndex(i);
            result.labels.push({
              text: label.text,
              confidence: label.confidence
            });
          }
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.labelImageOnDevice: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
