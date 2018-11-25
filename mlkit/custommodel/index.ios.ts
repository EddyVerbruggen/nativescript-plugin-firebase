import { ImageSource } from "tns-core-modules/image-source";
import { MLKitCustomModelOptions, MLKitCustomModelResult } from "./";
import { MLKitCustomModel as MLKitCustomModelBase } from "./custommodel-common";

declare const TNSMLKitCameraView: any;

export class MLKitCustomModel extends MLKitCustomModelBase {

  protected createDetector(): any {
    return getInterpreter();
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

function getInterpreter(): FIRModelInterpreter {
  const fIRModelDownloadConditions = FIRModelDownloadConditions.alloc().initWithIsWiFiRequiredCanDownloadInBackground(false, true);

  const fIRCloudModelSource = FIRCloudModelSource.alloc().initWithModelNameEnableModelUpdatesInitialConditionsUpdateConditions(
      "my-custom-model",
      true,
      fIRModelDownloadConditions,
      fIRModelDownloadConditions);

  // const cloudModelRegistrationSuccess = FIRModelManager.modelManager().registerCloudModelSource(fIRCloudModelSource);
  // console.log("cloudModelRegistrationSuccess: " + cloudModelRegistrationSuccess);

  loadLocalModel();

  const fIRModelOptions = FIRModelOptions.alloc().initWithCloudModelNameLocalModelName(
      // "my-custom-model",
      null,
      "mobilenet");

  return FIRModelInterpreter.modelInterpreterWithOptions(fIRModelOptions);
}

function loadLocalModel(): void {
  const localModelFilePath = NSBundle.mainBundle.pathForResourceOfType("mobilenet_quant_v1_224", "tflite");
  console.log(">>> localModelFilePath: " + localModelFilePath);

  const localModelSource = FIRLocalModelSource.alloc().initWithModelNamePath("mobilenet", localModelFilePath);
  console.log(">>> localModelSource: " + localModelSource);

  const localModelRegistrationSuccess = FIRModelManager.modelManager().registerLocalModelSource(localModelSource);
  console.log("localModelRegistrationSuccess: " + localModelRegistrationSuccess);
}

export function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult> {
  return new Promise((resolve, reject) => {
    try {
      const modelInterpreter = getInterpreter();

      const inputs = FIRModelInputs.new();
      const image: UIImage = options.image instanceof ImageSource ? options.image.ios : options.image.imageSource.ios;

      // note that there's a LoC in this native function that crashes the app (see the code for details)
      const resizedImg = TNSMLKitCameraView.resizeImage(image);
      const successAddingInput = inputs.addInputError(resizedImg);

      const inputOptions = FIRModelInputOutputOptions.new();
      const arrIn = NSMutableArray.new();
      arrIn.addObject(1);
      arrIn.addObject(image.size.width);
      arrIn.addObject(image.size.height);
      arrIn.addObject(3);

      const arrOut = NSMutableArray.new();
      arrOut.addObject(1);
      arrOut.addObject(1001);

      inputOptions.setInputFormatForIndexTypeDimensionsError(0, FIRModelElementType.UInt8, <any>arrIn);
      inputOptions.setOutputFormatForIndexTypeDimensionsError(0, FIRModelElementType.UInt8, <any>arrOut);

      modelInterpreter.runWithInputsOptionsCompletion(inputs, inputOptions, (outputs: FIRModelOutputs, error: NSError) => {
        console.log(">>> error: " + error);
        console.log(">>> outputs: " + outputs);

        if (error !== null) {
          reject(error.localizedDescription);

        } else if (outputs !== null) {
          console.log(">>> outputs.count: " + outputs.outputAtIndexError(0));
          const result = <MLKitCustomModelResult>{
            result: []
          };

          console.log(">>> outputs: " + outputs);

          resolve(result);
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.useCustomModel: " + ex);
      reject(ex);
    }
  });
}
