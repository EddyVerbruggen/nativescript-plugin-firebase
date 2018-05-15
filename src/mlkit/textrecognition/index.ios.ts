import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitRecognizeTextOnDeviceOptions, MLKitRecognizeTextCloudOptions, MLKitRecognizeTextOnDeviceResult, MLKitRecognizeTextCloudResult } from "./";
import { MLKitTextRecognition as MLKitTextRecognitionBase } from "./textrecognition-common";
import { MLKitRecognizeTextResultFeature } from "./index";

export class MLKitTextRecognition extends MLKitTextRecognitionBase {
  protected createDetector(): any {
    const firVision: FIRVision = FIRVision.vision();
    return firVision.textDetector();
  }

  protected createSuccessListener(): any {
    return (features: NSArray<FIRVisionText>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);
      } else if (features !== null && features.count > 0) {
        this.notify({
          eventName: MLKitTextRecognition.scanResultEvent,
          object: this,
          value: getOnDeviceResult(features)
        });
      }
    };
  }

  protected rotateRecording(): boolean {
    return true;
  }

}

function getOnDeviceResult(features: NSArray<FIRVisionText>): MLKitRecognizeTextOnDeviceResult {
  const result = <MLKitRecognizeTextOnDeviceResult>{
    features: []
  };

  for (let i = 0, l = features.count; i < l; i++) {
    const feature = features.objectAtIndex(i);
    const resultFeature = <MLKitRecognizeTextResultFeature>{
      text: feature.text,
      elements: []
    };

    const addLineToResult = (line: FIRVisionTextLine): void => {
      for (let a = 0, m = line.elements.count; a < m; a++) {
        const element: FIRVisionTextElement = line.elements.objectAtIndex(a);
        const bounds = element.frame;
        resultFeature.elements.push({
          text: element.text,
          bounds: bounds,
        });
      }
    };

    if (feature instanceof FIRVisionTextBlock) {
      const textBlock = <FIRVisionTextBlock>feature;
      for (let j = 0, k = textBlock.lines.count; j < k; j++) {
        addLineToResult(textBlock.lines.objectAtIndex(j));
      }
    }

    if (feature instanceof FIRVisionTextLine) {
      addLineToResult(feature);
    }

    console.log(">>> resulting resultFeature: " + JSON.stringify(resultFeature));
    result.features.push(resultFeature);
  }
  return result;
}

export function recognizeTextOnDevice(options: MLKitRecognizeTextOnDeviceOptions): Promise<MLKitRecognizeTextOnDeviceResult> {
  return new Promise((resolve, reject) => {
    try {
      const firVision: FIRVision = FIRVision.vision();
      const textDetector: FIRVisionTextDetector = firVision.textDetector();

      textDetector.detectInImageCompletion(getImage(options), (features: NSArray<FIRVisionText>, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);
        } else if (features !== null) {
          resolve(getOnDeviceResult(features));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextOnDevice: " + ex);
      reject(ex);
    }
  });
}

export function recognizeTextCloud(options: MLKitRecognizeTextCloudOptions): Promise<MLKitRecognizeTextCloudResult> {
  return new Promise((resolve, reject) => {
    try {
      const fIRVisionCloudDetectorOptions = FIRVisionCloudDetectorOptions.new();
      fIRVisionCloudDetectorOptions.modelType = options.modelType === "latest" ? FIRVisionCloudModelType.Latest : FIRVisionCloudModelType.Stable;
      fIRVisionCloudDetectorOptions.maxResults = options.maxResults || 10;

      const firVision: FIRVision = FIRVision.vision();
      const textDetector = firVision.cloudTextDetectorWithOptions(fIRVisionCloudDetectorOptions);

      textDetector.detectInImageCompletion(getImage(options), (cloudText: FIRVisionCloudText, error: NSError) => {
        console.log(">>> recognizeTextCloud error? " + error + ", cloudText? " + cloudText);
        if (error !== null) {
          reject(error.localizedDescription);
        } else if (cloudText !== null) {
          console.log(">>> recognizeTextCloud result: " + cloudText);
          resolve({
            text: cloudText.text
          });
        } else {
          reject("Unknown error :'(");
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.recognizeTextCloud: " + ex);
      reject(ex);
    }
  });
}

// TODO move to a common file
function getImage(options: MLKitOptions): FIRVisionImage {
  const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;
  return FIRVisionImage.alloc().initWithImage(image);
}
