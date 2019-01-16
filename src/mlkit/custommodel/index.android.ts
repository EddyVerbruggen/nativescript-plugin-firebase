import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitCustomModelOptions, MLKitCustomModelResult, MLKitCustomModelResultValue } from "./";
import { getLabelsFromAppFolder, MLKitCustomModel as MLKitCustomModelBase } from "./custommodel-common";
import * as fs from "tns-core-modules/file-system";

declare const com: any;
declare const org: any; // TODO remove after regenerating typings

export class MLKitCustomModel extends MLKitCustomModelBase {

  protected createDetector(): any {
    return getInterpreter(null); // TODO
  }

  protected createSuccessListener(): any {
    return new com.google.android.gms.tasks.OnSuccessListener({
      onSuccess: labels => {

        if (labels.size() === 0) return;

        const result = <MLKitCustomModelResult>{
          result: []
        };

        // see https://github.com/firebase/quickstart-android/blob/0f4c86877fc5f771cac95797dffa8bd026dd9dc7/mlkit/app/src/main/java/com/google/firebase/samples/apps/mlkit/textrecognition/TextRecognitionProcessor.java#L62
        for (let i = 0; i < labels.size(); i++) {
          const label = labels.get(i);
          result.result.push({
            text: label.getLabel(),
            confidence: label.getConfidence()
          });
        }

        this.notify({
          eventName: MLKitCustomModel.scanResultEvent,
          object: this,
          value: result
        });
      }
    });
  }
}

// TODO should probably cache this
function getInterpreter(options: MLKitCustomModelOptions): any {
  const firModelOptionsBuilder = new com.google.firebase.ml.custom.FirebaseModelOptions.Builder();

  let localModelRegistrationSuccess = false;
  let cloudModelRegistrationSuccess = false;
  let localModelName;

  if (options.localModelFile) {
    localModelName = options.localModelFile.lastIndexOf("/") === -1 ? options.localModelFile : options.localModelFile.substring(options.localModelFile.lastIndexOf("/") + 1);

    if (com.google.firebase.ml.custom.FirebaseModelManager.getInstance().getLocalModelSource(localModelName)) {
      localModelRegistrationSuccess = true;
      firModelOptionsBuilder.setLocalModelName(localModelName)
    } else {
      console.log("model not yet loaded: " + options.localModelFile);

      const firModelLocalSourceBuilder = new com.google.firebase.ml.custom.model.FirebaseLocalModelSource.Builder(localModelName);

      if (options.localModelFile.indexOf("~/") === 0) {
        firModelLocalSourceBuilder.setFilePath(fs.knownFolders.currentApp().path + options.localModelFile.substring(1));
      } else {
        // note that this doesn't seem to work, let's advice users to use ~/ for now
        firModelLocalSourceBuilder.setAssetFilePath(options.localModelFile);
      }

      localModelRegistrationSuccess = com.google.firebase.ml.custom.FirebaseModelManager.getInstance().registerLocalModelSource(firModelLocalSourceBuilder.build());
      if (localModelRegistrationSuccess) {
        firModelOptionsBuilder.setLocalModelName(localModelName)
      }
    }
  }

  // if (options.cloudModelName) {
  //   firModelOptionsBuilder.setCloudModelName(options.cloudModelName)
  // }

  if (!localModelRegistrationSuccess && !cloudModelRegistrationSuccess) {
    // TODO handle this case upstream
    console.log("No (cloud or local) model was successfully loaded.");
    return null;
  }

  return com.google.firebase.ml.custom.FirebaseModelInterpreter.getInstance(firModelOptionsBuilder.build());
}

export function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult> {
  return new Promise((resolve, reject) => {
    try {
      const interpreter = getInterpreter(options);

      let labels: Array<string>;
      if (options.labelsFile.indexOf("~/") === 0) {
        labels = getLabelsFromAppFolder(options.labelsFile);
      } else {
        // no dice loading from assets yet, let's advice users to use ~/ for now
        reject("Use the ~/ prefix for now..");
        return;
      }

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
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

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      let intArrayIn = Array.create("int", 4);
      intArrayIn[0] = options.modelInput[0].shape[0];
      intArrayIn[1] = options.modelInput[0].shape[1];
      intArrayIn[2] = options.modelInput[0].shape[2];
      intArrayIn[3] = options.modelInput[0].shape[3];

      const inputType = options.modelInput[0].type === "FLOAT32" ? com.google.firebase.ml.custom.FirebaseModelDataType.FLOAT32 : com.google.firebase.ml.custom.FirebaseModelDataType.BYTE;

      let intArrayOut = Array.create("int", 2);
      intArrayOut[0] = 1;
      intArrayOut[1] = labels.length;

      const inputOutputOptions = new com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder()
          .setInputFormat(0, inputType, intArrayIn)
          .setOutputFormat(0, inputType, intArrayOut)
          .build();

      const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;

      const input = org.nativescript.plugins.firebase.mlkit.BitmapUtil.bitmapToByteBuffer(image, options.modelInput[0].shape[1], options.modelInput[0].shape[2]);

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

function getImage(options: MLKitOptions): any /* com.google.firebase.ml.vision.common.FirebaseVisionImage */ {
  const image: android.graphics.Bitmap = options.image instanceof ImageSource ? options.image.android : options.image.imageSource.android;
  return com.google.firebase.ml.vision.common.FirebaseVisionImage.fromBitmap(image);
}

function getSortedResult(labels: Array<string>, probabilities: Array<number>, maxResults?: number): Array<MLKitCustomModelResultValue> {
  const result: Array<MLKitCustomModelResultValue> = [];
  labels.forEach((text, i) => result.push({text, confidence: probabilities[i]}));
  result.sort((a, b) => a.confidence < b.confidence ? 1 : (a.confidence === b.confidence ? 0 : -1));
  if (maxResults && result.length > maxResults) {
    result.splice(maxResults);
  }
  result.map(r => r.confidence = (r.confidence & 0xff) / 255.0);
  return result;
}
