
declare var FIRDefaultIdentifyLanguageConfidenceThreshold: number;

declare var FIRDefaultIdentifyPossibleLanguagesConfidenceThreshold: number;

declare class FIRIdentifiedLanguage extends NSObject {

	static alloc(): FIRIdentifiedLanguage; // inherited from NSObject

	static new(): FIRIdentifiedLanguage; // inherited from NSObject

	readonly confidence: number;

	readonly languageCode: string;
}

declare class FIRLanguageIdentification extends NSObject {

	static alloc(): FIRLanguageIdentification; // inherited from NSObject

	static new(): FIRLanguageIdentification; // inherited from NSObject

	identifyLanguageForTextCompletion(text: string, completion: (p1: string, p2: NSError) => void): void;

	identifyPossibleLanguagesForTextCompletion(text: string, completion: (p1: NSArray<FIRIdentifiedLanguage>, p2: NSError) => void): void;
}

declare class FIRLanguageIdentificationOptions extends NSObject {

	static alloc(): FIRLanguageIdentificationOptions; // inherited from NSObject

	static new(): FIRLanguageIdentificationOptions; // inherited from NSObject

	readonly confidenceThreshold: number;

	constructor(o: { confidenceThreshold: number; });

	initWithConfidenceThreshold(confidenceThreshold: number): this;
}

declare var FIRMLKitUndeterminedLanguageCode: string;
