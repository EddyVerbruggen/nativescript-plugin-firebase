export interface MLKitNaturalLanguageIdentificationLanguage {
  languageCode: string;
  confidence: number;
}

export interface MLKitNaturalLanguageIdentificationResult {
  languageCode?: string;
}

export interface MLKitNaturalLanguageIdentificationOptions {
  text: string;
  /**
   * By default, ML Kit returns a non-undefined value only when it identifies the language with a confidence value higher than X.
   * X is 0.5 for 'identifyNaturalLanguage'.
   * X is 0.01 for 'indentifyPossibleLanguages'.
   */
  confidenceThreshold?: number;
}

export declare function identifyNaturalLanguage(options: MLKitNaturalLanguageIdentificationOptions): Promise<MLKitNaturalLanguageIdentificationResult>;
export declare function indentifyPossibleLanguages(options: MLKitNaturalLanguageIdentificationOptions): Promise<Array<MLKitNaturalLanguageIdentificationLanguage>>;
