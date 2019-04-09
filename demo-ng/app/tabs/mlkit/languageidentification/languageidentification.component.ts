import { Component } from "@angular/core";
import {
  indentifyPossibleLanguages,
  MLKitNaturalLanguageIdentificationLanguage
} from "nativescript-plugin-firebase/mlkit/naturallanguageidentification";
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { AbstractMLKitViewComponent } from "~/tabs/mlkit/abstract.mlkitview.component";

@Component({
  selector: "mlkit-languageidentification",
  moduleId: module.id,
  templateUrl: "./languageidentification.component.html",
})
export class LanguageIdentificationComponent extends AbstractMLKitViewComponent {
  possibleLanguages: Array<MLKitNaturalLanguageIdentificationLanguage>;

  onTextRecognitionResult(scanResult: any): void {
    const result: MLKitRecognizeTextResult = scanResult.value;
    if (!result.text) {
      return;
    }

    indentifyPossibleLanguages({
      text: result.text,
      confidenceThreshold: 0.05
    }).then(
        (languageIdResults: Array<MLKitNaturalLanguageIdentificationLanguage>) => {
          console.log(">> results: " + JSON.stringify(languageIdResults));
          this.possibleLanguages = languageIdResults
        })
        .catch(errorMessage => console.log("ML Kit error: " + errorMessage));
  }
}
