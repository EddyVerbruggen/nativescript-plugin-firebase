import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitImageLabelingOnDeviceOptions, MLKitImageLabelingOnDeviceResult } from "./";
import { MLKitImageLabeling as MLKitImageLabelingBase } from "./imagelabeling-common";
import { MLKitImageLabelingCloudOptions, MLKitImageLabelingCloudResult } from "./index";

export class MLKitImageLabeling extends MLKitImageLabelingBase {

  protected createDetector(): any {
    return getDetector(this.confidenceThreshold);
  }

  protected createSuccessListener(): any {
    return (labels: NSArray<FIRVisionLabel>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (labels !== null && labels.count > 0) {
        const result = <MLKitImageLabelingOnDeviceResult>{
          labels: []
        };

        for (let i = 0, l = labels.count; i < l; i++) {
          const label: FIRVisionLabel = labels.objectAtIndex(i);
          result.labels.push({
            text: label.label,
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

function getDetector(confidenceThreshold: number): FIRVisionLabelDetector {
  const firVision: FIRVision = FIRVision.vision();
  const fIRVisionLabelDetectorOptions = FIRVisionLabelDetectorOptions.alloc().initWithConfidenceThreshold(confidenceThreshold);
  return firVision.labelDetectorWithOptions(fIRVisionLabelDetectorOptions);
}

export function labelImageOnDevice(options: MLKitImageLabelingOnDeviceOptions): Promise<MLKitImageLabelingOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const labelDetector = getDetector(options.confidenceThreshold || 0.5);

      labelDetector.detectInImageCompletion(getImage(options), (labels: NSArray<FIRVisionLabel>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (labels !== null) {
          const result = <MLKitImageLabelingOnDeviceResult>{
            labels: []
          };

          for (let i = 0, l = labels.count; i < l; i++) {
            const label: FIRVisionLabel = labels.objectAtIndex(i);
            result.labels.push({
              text: label.label,
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

export function labelImageCloud(options: MLKitImageLabelingCloudOptions): Promise<MLKitImageLabelingCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const fIRVisionCloudDetectorOptions = FIRVisionCloudDetectorOptions.new();
      fIRVisionCloudDetectorOptions.modelType = options.modelType === "latest" ? FIRVisionCloudModelType.Latest : FIRVisionCloudModelType.Stable;
      fIRVisionCloudDetectorOptions.maxResults = options.maxResults || 10;

      const firVision: FIRVision = FIRVision.vision();
      const labelDetector = firVision.cloudLabelDetectorWithOptions(fIRVisionCloudDetectorOptions);

      labelDetector.detectInImageCompletion(getImage(options), (labels: NSArray<FIRVisionCloudLabel>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (labels !== null) {
          const result = <MLKitImageLabelingCloudResult>{
            labels: []
          };

          for (let i = 0, l = labels.count; i < l; i++) {
            const label: FIRVisionCloudLabel = labels.objectAtIndex(i);
            result.labels.push({
              text: label.label,
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

function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
