import { ImageSource } from "tns-core-modules/image-source";
import { MLKitOptions } from "../";
import { MLKitCustomModelOptions, MLKitCustomModelResult } from "./";
import { MLKitCustomModel as MLKitCustomModelBase } from "./custommodel-common";

declare const com: any;

export class MLKitCustomModel extends MLKitCustomModelBase {

  protected createDetector(): any {
    return getInterpreter();
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

function getInterpreter(): any {
  const localSource = new com.google.firebase.ml.custom.model.FirebaseLocalModelSource.Builder("my_local_model")
      .setAssetFilePath("mobilenet_quant_v1_224.tflite")  // Or setFilePath if you downloaded from your host
      .build();
  com.google.firebase.ml.custom.FirebaseModelManager.getInstance().registerLocalModelSource(localSource);

  const options = new com.google.firebase.ml.custom.FirebaseModelOptions.Builder()
      // .setCloudModelName("my_cloud_model")
      .setLocalModelName("my_local_model")
      .build();
  return com.google.firebase.ml.custom.FirebaseModelInterpreter.getInstance(options);
}

export function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult> {
  return new Promise((resolve, reject) => {
    try {
      const interpreter = getInterpreter();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: labels => {
          const result = <MLKitCustomModelResult>{
            result: []
          };

          resolve(result);
          interpreter.close();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      let intArrayIn = Array.create('int', 4);
      intArrayIn[0] = 1;
      intArrayIn[1] = 640;
      intArrayIn[2] = 480;
      intArrayIn[3] = 3;

      let intArrayOut = Array.create('int', 2);
      intArrayOut[0] = 1;
      intArrayOut[1] = 1000;

      const inputOutputOptions = new com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder()
          .setInputFormat(0, com.google.firebase.ml.custom.FirebaseModelDataType.BYTE, intArrayIn)
          .setOutputFormat(0, com.google.firebase.ml.custom.FirebaseModelDataType.FLOAT32, intArrayOut)
          .build();

      // TODO check native example project
      const input = null; // getData();

      // input = getYourInputData();
      const inputs = new com.google.firebase.ml.custom.FirebaseModelInputs.Builder()
          .add(input)  // add() as many input arrays as your model requires
          .build();

      // TODO see https://firebase.google.com/docs/ml-kit/android/use-custom-models
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
