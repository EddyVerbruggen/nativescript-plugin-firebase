import { MLKitTranslationModelDownloadOptions, MLKitTranslationOptions } from "./";

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
      _downloadTranslationModelIfNeeded(options)
          .then(firTranslator => {
            firTranslator.translateTextCompletion(options.text, ((result: string, error: NSError) => {
              error ? reject(error.localizedDescription) : resolve(result);
            }));
          })
          .catch(reject);
    } catch (ex) {
      console.log("Error in firebase.mlkit.translation.translateText: " + ex);
      reject(ex);
    }
  });
}

function _downloadTranslationModelIfNeeded(options: MLKitTranslationModelDownloadOptions): Promise<FIRTranslator> {
  return new Promise<FIRTranslator>((resolve, reject) => {
    try {
      const firTranslatorOptions = FIRTranslatorOptions.alloc().initWithSourceLanguageTargetLanguage(FIRTranslateLanguageForLanguageCode(options.from), FIRTranslateLanguageForLanguageCode(options.to));
      const nl = FIRNaturalLanguage.naturalLanguage();

      // this line currently (plugin v 10.0.0) errors: CONSOLE ERROR file:///node_modules/@angular/core/fesm5/core.js:26769:0: Error: -[FIRTranslateRemoteModel initWithName:allowsModelUpdates:initialConditions:updateConditions:isBaseModel:]: unrecognized selector sent to instance 0x280567360
      const firTranslator = nl.translatorWithOptions(firTranslatorOptions);

      const firModelDownloadConditions = FIRModelDownloadConditions.alloc().initWithAllowsCellularAccessAllowsBackgroundDownloading(false, true);
      firTranslator.downloadModelIfNeededWithConditionsCompletion(firModelDownloadConditions, (error: NSError) => {
        error ? reject(error.localizedDescription) : resolve(firTranslator);
      });
    } catch (ex) {
      console.log("Error downloading translation model: " + ex);
      reject(ex);
    }
  });
}
