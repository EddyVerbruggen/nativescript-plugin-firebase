
declare class FIRNaturalLanguage extends NSObject {

	static alloc(): FIRNaturalLanguage; // inherited from NSObject

	static naturalLanguage(): FIRNaturalLanguage;

	static naturalLanguageForApp(app: FIRApp): FIRNaturalLanguage;

	static new(): FIRNaturalLanguage; // inherited from NSObject

	statsCollectionEnabled: boolean;

	languageIdentification(): FIRLanguageIdentification;

	languageIdentificationWithOptions(options: FIRLanguageIdentificationOptions): FIRLanguageIdentification;

	smartReply(): FIRSmartReply;

	translatorWithOptions(options: FIRTranslatorOptions): FIRTranslator;
}
