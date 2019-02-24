export interface MLKitNaturalLanguageIdentificationLanguage {
  languageCode: string;
  confidence: number;
}

export interface MLKitNaturalLanguageIdentificationResult {
  landmarks: Array<MLKitNaturalLanguageIdentificationLanguage>;
}

export interface MLKitNaturalLanguageIdentificationOptions {
}

export declare function identifyNaturalLanguage(options: MLKitNaturalLanguageIdentificationOptions): Promise<MLKitNaturalLanguageIdentificationResult>;
