import { ImageSource } from "tns-core-modules/image-source";
import { MLKitCustomModelOptions, MLKitCustomModelResult, MLKitCustomModelResultValue } from "./";
import {
  getLabelsFromAppFolder,
  getLabelsFromFile,
  MLKitCustomModel as MLKitCustomModelBase
} from "./custommodel-common";
import * as fs from "tns-core-modules/file-system";

declare const TNSMLKitCameraView: any;

export class MLKitCustomModel extends MLKitCustomModelBase {

  protected createDetector(): any {
    return getInterpreter(null); // TODO
  }

  protected createSuccessListener(): any {
    return (outputs: NSArray<FIRModelOutputs>, error: NSError) => {
      if (error !== null) {
        console.log(error.localizedDescription);

      } else if (outputs !== null) {
        const result = <MLKitCustomModelResult>{
          result: []
        };

        console.log(">>> outputs: " + outputs);

        this.notify({
          eventName: MLKitCustomModel.scanResultEvent,
          object: this,
          value: result
        });
      }
    }
  }

  protected rotateRecording(): boolean {
    return false;
  }
}

// TODO should probably cache this
function getInterpreter(options: MLKitCustomModelOptions): FIRModelInterpreter {
  let localModelRegistrationSuccess = false;
  let cloudModelRegistrationSuccess = false;
  let localModelName;

  if (options.localModelFile) {
    localModelName = options.localModelFile.lastIndexOf("/") === -1 ? options.localModelFile : options.localModelFile.substring(options.localModelFile.lastIndexOf("/") + 1);
    console.log({localModelName});

    // make sure we load the model (with the same name) only once
    if (FIRModelManager.modelManager().localModelSourceForModelName(localModelName)) {
      localModelRegistrationSuccess = true;
    } else {
      let localModelFilePath: string;
      if (options.localModelFile.indexOf("~/") === 0) {
        localModelFilePath = fs.knownFolders.currentApp().path + options.localModelFile.substring(1);
      } else {
        localModelFilePath = NSBundle.mainBundle.pathForResourceOfType(
            options.localModelFile.substring(0, options.localModelFile.lastIndexOf(".")),
            options.localModelFile.substring(options.localModelFile.lastIndexOf(".") + 1));
      }
      const localModelSource = FIRLocalModelSource.alloc().initWithModelNamePath(localModelName, localModelFilePath);
      localModelRegistrationSuccess = FIRModelManager.modelManager().registerLocalModelSource(localModelSource);
    }
  }

  /*
  if (options.cloudModelName) {
    const fIRModelDownloadConditions = FIRModelDownloadConditions.alloc().initWithIsWiFiRequiredCanDownloadInBackground(options.requireWifiForCloudModelDownload, true);

    const fIRCloudModelSource = FIRCloudModelSource.alloc().initWithModelNameEnableModelUpdatesInitialConditionsUpdateConditions(
        options.cloudModelName,
        true,
        fIRModelDownloadConditions,
        fIRModelDownloadConditions);

    cloudModelRegistrationSuccess = FIRModelManager.modelManager().registerCloudModelSource(fIRCloudModelSource);
    console.log("cloudModelRegistrationSuccess: " + cloudModelRegistrationSuccess);
  }
  */

  if (!localModelRegistrationSuccess && !cloudModelRegistrationSuccess) {
    // TODO handle this case upstream
    console.log("No (cloud or local) model was successfully loaded.");
    return null;
  }

  const fIRModelOptions = FIRModelOptions.alloc().initWithCloudModelNameLocalModelName(
      null, // cloudModelRegistrationSuccess ? options.cloudModelName : null,
      localModelRegistrationSuccess ? localModelName : null);

  return FIRModelInterpreter.modelInterpreterWithOptions(fIRModelOptions);
}

export function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult> {
  return new Promise((resolve, reject) => {
    try {

      const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;

      const isQuant = options.modelInput[0].type !== "FLOAT32";
      console.log(">> isQuant: " + isQuant);

      let inputData: NSMutableData;
      if (isQuant) {
        inputData = TNSMLKitCameraView.scaledDataWithSizeByteCountIsQuantized(
            image, CGSizeMake(options.modelInput[0].shape[1], options.modelInput[0].shape[2]), options.modelInput[0].shape[1] * options.modelInput[0].shape[2] * options.modelInput[0].shape[3] * options.modelInput[0].shape[0], options.modelInput[0].type !== "FLOAT32");
      } else {
        // Note that this doesn't work correctly.. users should use quant (aka UInt8 aka BYTE)
        inputData = TNSMLKitCameraView.getInputDataWithRowsAndColumnsAndType(
            image, options.modelInput[0].shape[1], options.modelInput[0].shape[2], "Float32");
      }
      const inputs = FIRModelInputs.new();
      const successAddingInput = inputs.addInputError(inputData);
      const inputOptions = FIRModelInputOutputOptions.new();

      let inputType;
      options.modelInput.forEach((dimensionAndType, i) => {
        const arrIn = NSMutableArray.new();
        dimensionAndType.shape.forEach(dim => arrIn.addObject(dim));
        inputType = dimensionAndType.type === "FLOAT32" ? FIRModelElementType.Float32 : FIRModelElementType.UInt8;
        inputOptions.setInputFormatForIndexTypeDimensionsError(i, inputType, <any>arrIn);
      });

      let labels: Array<string>;
      if (options.labelsFile.indexOf("~/") === 0) {
        labels = getLabelsFromAppFolder(options.labelsFile);
      } else {
        const labelsFile = NSBundle.mainBundle.pathForResourceOfType(
            options.labelsFile.substring(0, options.labelsFile.lastIndexOf(".")),
            options.labelsFile.substring(options.labelsFile.lastIndexOf(".") + 1));
        labels = getLabelsFromFile(labelsFile);
      }

      const arrOut = NSMutableArray.new();
      arrOut.addObject(1);
      arrOut.addObject(labels.length);
      inputOptions.setOutputFormatForIndexTypeDimensionsError(0, inputType, <any>arrOut);

      const modelInterpreter = getInterpreter(options);
      modelInterpreter.runWithInputsOptionsCompletion(inputs, inputOptions, (outputs: FIRModelOutputs, error: NSError) => {
        if (error !== null) {
          reject(error.localizedDescription);

        } else if (outputs !== null) {
          const probabilities: NSArray<number> = outputs.outputAtIndexError(0)[0];

          if (labels.length !== probabilities.count) {
            console.log(`The number of labels in ${options.labelsFile} (${labels.length}) is not equal to the interpretation result (${probabilities.count})!`);
            return;
          }

          const result = <MLKitCustomModelResult>{
            result: getSortedResult(labels, probabilities, options.maxResults)
          };

          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.useCustomModel: " + ex);
      reject(ex);
    }
  });
}

function getSortedResult(labels: Array<string>, probabilities: NSArray<number>, maxResults?: number): Array<MLKitCustomModelResultValue> {
  const result: Array<MLKitCustomModelResultValue> = [];
  labels.forEach((text, i) => result.push({text, confidence: probabilities.objectAtIndex(i)}));
  result.sort((a, b) => a.confidence < b.confidence ? 1 : (a.confidence === b.confidence ? 0 : -1));
  if (maxResults && result.length > maxResults) {
    result.splice(maxResults);
  }
  const SoftmaxScale = 1.0 / 256.0;
  result.map(r => r.confidence = NSNumber.numberWithFloat(SoftmaxScale * r.confidence));
  return result;
}
