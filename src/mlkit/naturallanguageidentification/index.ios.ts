import { MLKitNaturalLanguageIdentificationOptions, MLKitNaturalLanguageIdentificationResult } from "./index";

export function identifyNaturalLanguage(options: MLKitNaturalLanguageIdentificationOptions): Promise<MLKitNaturalLanguageIdentificationResult> {
  return new Promise((resolve, reject) => {
    try {
      reject("Not implemented yet, because of build issues");
    } catch (ex) {
      console.log("Error in firebase.mlkit.identifyNaturalLanguage: " + ex);
      reject(ex);
    }
  });
}
