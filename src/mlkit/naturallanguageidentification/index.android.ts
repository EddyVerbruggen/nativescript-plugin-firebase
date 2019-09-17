import {
  MLKitNaturalLanguageIdentificationLanguage,
  MLKitNaturalLanguageIdentificationOptions,
  MLKitNaturalLanguageIdentificationResult
} from "./index";

export function identifyNaturalLanguage(options: MLKitNaturalLanguageIdentificationOptions): Promise<MLKitNaturalLanguageIdentificationResult> {
  return new Promise((resolve, reject) => {
    try {
      if (!options.text) {
        reject("'text' property not set to a valid value");
        return;
      }

      const languageIdentifier: com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification =
          com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage.getInstance().getLanguageIdentification(
              new com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions.Builder()
                  .setConfidenceThreshold(options.confidenceThreshold || 0.5)
                  .build());

      languageIdentifier.identifyLanguage(options.text)
          .addOnSuccessListener(new (<any>com.google.android.gms).tasks.OnSuccessListener({
            onSuccess: languageCode => {
              console.log("languageCode: " + languageCode);
              console.log(languageCode);
              console.log(typeof languageCode);
              console.log("languageCode.");
              if (languageCode && languageCode !== "und") {
                resolve({ languageCode })
              } else {
                resolve();
              }
            }
          }))
          .addOnFailureListener(new (<any>com.google.android.gms).tasks.OnFailureListener({
            onFailure: exception => reject(exception.getMessage())
          }));
    } catch (ex) {
      console.log("Error in firebase.mlkit.identifyNaturalLanguage: " + ex);
      reject(ex);
    }
  });
}

export function indentifyPossibleLanguages(options: MLKitNaturalLanguageIdentificationOptions): Promise<Array<MLKitNaturalLanguageIdentificationLanguage>> {
  return new Promise((resolve, reject) => {
    try {
      const languageIdentifier: com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification =
          com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage.getInstance().getLanguageIdentification(
              new com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions.Builder()
                  .setConfidenceThreshold(options.confidenceThreshold || 0.01)
                  .build());

      languageIdentifier.identifyPossibleLanguages(options.text)
          .addOnSuccessListener(new (<any>com.google.android.gms).tasks.OnSuccessListener({
            onSuccess: languages => {
              const langs: Array<MLKitNaturalLanguageIdentificationLanguage> = [];
              if (languages && languages.get(0).getLanguageCode() !== "und") { // und = undetermined
                for (let i = 0; i < languages.size(); i++) {
                  const l = languages.get(i);
                  langs.push({
                    languageCode: l.getLanguageCode(),
                    confidence: l.getConfidence()
                  })
                }
              }
              resolve(langs);
            }
          }))
          .addOnFailureListener(new (<any>com.google.android.gms).tasks.OnFailureListener({
            onFailure: exception => reject(exception.getMessage())
          }));
    } catch (ex) {
      console.log("Error in firebase.mlkit.indentifyPossibleLanguages: " + ex);
      reject(ex);
    }
  });
}
