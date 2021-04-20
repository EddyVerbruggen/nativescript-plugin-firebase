import { ImageSource } from "@nativescript/core";
import { MLKitVisionOptions } from "../";
import { MLKitImageLabelingCloudResult, MLKitImageLabelingOnDeviceResult, MLKitImageLabelingOptions } from "./";
import { MLKitImageLabeling as MLKitImageLabelingBase } from "./imagelabeling-common";

export class MLKitImageLabeling extends MLKitImageLabelingBase {

  protected createDetector(): any {
    return getDetector(this.confidenceThreshold);
  }

  protected createSuccessListener(): any {
    return (labels: NSArray<FIRVisionImageLabel>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (labels !== null && labels.count > 0) {
        const result = <MLKitImageLabelingOnDeviceResult>{
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
          eventName: MLKitImageLabeling.scanResultEvent,
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

function getDetector(confidenceThreshold?: number): FIRVisionImageLabeler {
  const firVision: FIRVision = FIRVision.vision();
  const fIRVisionOnDeviceImageLabelerOptions = FIRVisionOnDeviceImageLabelerOptions.new();
  fIRVisionOnDeviceImageLabelerOptions.confidenceThreshold = confidenceThreshold || 0.5;
  return firVision.onDeviceImageLabelerWithOptions(fIRVisionOnDeviceImageLabelerOptions);
}

export function labelImageOnDevice(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const labelDetector = getDetector(options.confidenceThreshold);

      labelDetector.processImageCompletion(getImage(options), (labels: NSArray<FIRVisionImageLabel>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (labels !== null) {
          const result = <MLKitImageLabelingOnDeviceResult>{
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

export function labelImageCloud(options: MLKitImageLabelingOptions): Promise<MLKitImageLabelingCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const fIRVisionCloudImageLabelerOptions = FIRVisionCloudImageLabelerOptions.new();
      fIRVisionCloudImageLabelerOptions.confidenceThreshold = options.confidenceThreshold || 0.5;

      const firVision: FIRVision = FIRVision.vision();
      const labeler = firVision.cloudImageLabelerWithOptions(fIRVisionCloudImageLabelerOptions);

      labeler.processImageCompletion(getImage(options), (labels: NSArray<FIRVisionImageLabel>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (labels !== null) {
          const result = <MLKitImageLabelingCloudResult>{
            labels: []
          };

          for (let i = 0, l = labels.count; i < l; i++) {
            const label: FIRVisionImageLabel = labels.objectAtIndex(i);
            result.labels.push({
              text: label.text,
              confidence: label.confidence
            });
          }
          console.log(">>> cloud image labeling result: " + JSON.stringify(result.labels));
          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.labelImageCloud: " + ex);
      reject(ex);
    }
  });
}

function getImage(options: MLKitVisionOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
