import * as fs from "tns-core-modules/file-system";
import { ImageSource } from "tns-core-modules/image-source";
import { MLKitCustomModelOptions, MLKitCustomModelResult, MLKitCustomModelResultValue } from "./";
import { getLabelsFromAppFolder, MLKitCustomModel as MLKitCustomModelBase } from "./custommodel-common";

const gmsTasks = (<any>com.google.android.gms).tasks;

export class MLKitCustomModel extends MLKitCustomModelBase {
  private detector;
  private onFailureListener;
  private inputOutputOptions;

  protected createDetector(): any {
    this.detector = getInterpreter(this.localModelFile);
    return this.detector;
  }

  protected runDetector(imageByteBuffer, previewWidth, previewHeight): void {
    if (this.detectorBusy) {
      return;
    }

    this.detectorBusy = true;

    if (!this.onFailureListener) {
      this.onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => {
          console.log(exception.getMessage());
          this.detectorBusy = false;
        }
      });
    }

    const modelExpectsWidth = this.modelInputShape[1];
    const modelExpectsHeight = this.modelInputShape[2];
    const isQuantized = this.modelInputType !== "FLOAT32";

    if (!this.inputOutputOptions) {
      let intArrayIn = Array.create("int", 4);
      intArrayIn[0] = this.modelInputShape[0];
      intArrayIn[1] = modelExpectsWidth;
      intArrayIn[2] = modelExpectsHeight;
      intArrayIn[3] = this.modelInputShape[3];

      const inputType = isQuantized ? com.google.firebase.ml.custom.FirebaseModelDataType.BYTE : com.google.firebase.ml.custom.FirebaseModelDataType.FLOAT32;

      let intArrayOut = Array.create("int", 2);
      intArrayOut[0] = 1;
      intArrayOut[1] = this.labels.length;

      this.inputOutputOptions = new com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder()
          .setInputFormat(0, inputType, intArrayIn)
          .setOutputFormat(0, inputType, intArrayOut)
          .build();
    }

    const input = org.nativescript.plugins.firebase.mlkit.BitmapUtil.byteBufferToByteBuffer(imageByteBuffer, previewWidth, previewHeight, modelExpectsWidth, modelExpectsHeight, isQuantized);
    const inputs = new com.google.firebase.ml.custom.FirebaseModelInputs.Builder()
        .add(input) // add as many input arrays as your model requires
        .build();

    this.detector
        .run(inputs, this.inputOutputOptions)
        .addOnSuccessListener(this.onSuccessListener)
        .addOnFailureListener(this.onFailureListener);
  }

  protected createSuccessListener(): any {
    this.onSuccessListener = new gmsTasks.OnSuccessListener({
      onSuccess: output => {
        const probabilities: Array<number> = output.getOutput(0)[0];

        if (this.labels.length !== probabilities.length) {
          console.log(`The number of labels (${this.labels.length}) is not equal to the interpretation result (${probabilities.length})!`);
          return;
        }

        const result = <MLKitCustomModelResult>{
          result: getSortedResult(this.labels, probabilities, this.maxResults)
        };

        this.notify({
          eventName: MLKitCustomModel.scanResultEvent,
          object: this,
          value: result
        });

        this.detectorBusy = false;
      }
    });

    return this.onSuccessListener;
  }
}

const registeredModels = [];

function getInterpreter(localModelFile?: string): any {
  const firModelOptionsBuilder = new com.google.firebase.ml.custom.FirebaseModelOptions.Builder();

  const localModelName = localModelFile.lastIndexOf("/") === -1 ? localModelFile : localModelFile.substring(localModelFile.lastIndexOf("/") + 1);
  let localModelRegistrationSuccess = false;

  if (localModelFile) {
    if (registeredModels.indexOf(localModelName) > -1) {
      localModelRegistrationSuccess = true;
      firModelOptionsBuilder.setLocalModelName(localModelName)
    } else {
      const firModelLocalBuilder = new com.google.firebase.ml.common.modeldownload.FirebaseLocalModel.Builder(localModelName);

      if (localModelFile.startsWith("~/")) {
        firModelLocalBuilder.setFilePath(fs.knownFolders.currentApp().path + localModelFile.substring(1));
      } else {
        // note that this doesn't seem to work, let's advice users to use ~/ for now
        firModelLocalBuilder.setAssetFilePath(localModelFile);
      }

      localModelRegistrationSuccess = com.google.firebase.ml.common.modeldownload.FirebaseModelManager.getInstance().registerLocalModel(firModelLocalBuilder.build());

      if (localModelRegistrationSuccess) {
        registeredModels.push(localModelName);
        firModelOptionsBuilder.setLocalModelName(localModelName)
      }
    }
  }

  // if (options.cloudModelName) {
  //   firModelOptionsBuilder.setRemoteModelName(options.cloudModelName)
  // }

  if (!localModelRegistrationSuccess) {
    // TODO handle this case upstream
    console.log("No (cloud or local) model was successfully loaded.");
    return null;
  }

  return com.google.firebase.ml.custom.FirebaseModelInterpreter.getInstance(firModelOptionsBuilder.build());
}

export function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult> {
  return new Promise((resolve, reject) => {
    try {
      const interpreter = getInterpreter(options.localModelFile);

      let labels: Array<string>;
      if (options.labelsFile.startsWith("~/")) {
        labels = getLabelsFromAppFolder(options.labelsFile);
      } else {
        // no dice loading from assets yet, let's advice users to use ~/ for now
        reject("Use the ~/ prefix for now..");
        return;
      }

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: output => {
          const probabilities: Array<number> = output.getOutput(0)[0];

          if (labels.length !== probabilities.length) {
            console.log(`The number of labels in ${options.labelsFile} (${labels.length}) is not equal to the interpretation result (${probabilities.length})!`);
            return;
          }

          const result = <MLKitCustomModelResult>{
            result: getSortedResult(labels, probabilities, options.maxResults)
          };

          resolve(result);
          interpreter.close();
        }
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      let intArrayIn = Array.create("int", 4);
      intArrayIn[0] = options.modelInput[0].shape[0];
      intArrayIn[1] = options.modelInput[0].shape[1];
      intArrayIn[2] = options.modelInput[0].shape[2];
      intArrayIn[3] = options.modelInput[0].shape[3];

      const isQuantized = options.modelInput[0].type !== "FLOAT32";
      const inputType = isQuantized ? com.google.firebase.ml.custom.FirebaseModelDataType.BYTE : com.google.firebase.ml.custom.FirebaseModelDataType.FLOAT32;

      let intArrayOut = Array.create("int", 2);
      intArrayOut[0] = 1;
      intArrayOut[1] = labels.length;

      const inputOutputOptions = new com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder()
          .setInputFormat(0, inputType, intArrayIn)
          .setOutputFormat(0, inputType, intArrayOut)
          .build();

      const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
      const input = org.nativescript.plugins.firebase.mlkit.BitmapUtil.bitmapToByteBuffer(image, options.modelInput[0].shape[1], options.modelInput[0].shape[2], isQuantized);
      const inputs = new com.google.firebase.ml.custom.FirebaseModelInputs.Builder()
          .add(input) // add as many input arrays as your model requires
          .build();

      interpreter
          .run(inputs, inputOutputOptions)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.mlkit.useCustomModel: " + ex);
      reject(ex);
    }
  });
}

function getSortedResult(labels: Array<string>, probabilities: Array<number>, maxResults = 5): Array<MLKitCustomModelResultValue> {
  const result: Array<MLKitCustomModelResultValue> = [];
  labels.forEach((text, i) => result.push({text, confidence: probabilities[i]}));
  result.sort((a, b) => a.confidence < b.confidence ? 1 : (a.confidence === b.confidence ? 0 : -1));
  if (result.length > maxResults) {
    result.splice(maxResults);
  }
  result.map(r => r.confidence = (r.confidence & 0xff) / 255.0);
  return result;
}
