import { MLKitTranslationModelDownloadOptions, MLKitTranslationOptions } from "./";

declare const com: any;

export function ensureTranslationModelDownloaded(options: MLKitTranslationModelDownloadOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    _downloadTranslationModelIfNeeded(options)
        .then(() => resolve())
        .catch(reject);
  });
}

export function translateText(options: MLKitTranslationOptions): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (result: string) => resolve(result)
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      _downloadTranslationModelIfNeeded(options)
          .then(translator => {
            translator.translate(options.text)
                .addOnSuccessListener(onSuccessListener)
                .addOnFailureListener(onFailureListener);
          })
          .catch(reject);
    } catch (ex) {
      console.log("Error in firebase.mlkit.translation.translateText: " + ex);
      reject(ex);
    }
  });
}

function _downloadTranslationModelIfNeeded(options: MLKitTranslationModelDownloadOptions): Promise<com.google.firebase.ml.naturallanguage.translate.FirebaseTranslator> {
  return new Promise<com.google.firebase.ml.naturallanguage.translate.FirebaseTranslator>((resolve, reject) => {
    try {
      const source = +com.google.firebase.ml.naturallanguage.translate.FirebaseTranslateLanguage.languageForLanguageCode(options.from);
      const target = +com.google.firebase.ml.naturallanguage.translate.FirebaseTranslateLanguage.languageForLanguageCode(options.to);

      const firTranslatorOptions = new com.google.firebase.ml.naturallanguage.translate.FirebaseTranslatorOptions.Builder()
          .setSourceLanguage(source)
          .setTargetLanguage(target)
          .build();

      const firTranslator = com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage.getInstance().getTranslator(firTranslatorOptions);

      const modelDownloadConditions = new com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions.Builder()
          .requireWifi()
          .build();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => resolve(firTranslator)
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      firTranslator.downloadModelIfNeeded(modelDownloadConditions)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error downloading translation model: " + ex);
      reject(ex);
    }
  });
}
