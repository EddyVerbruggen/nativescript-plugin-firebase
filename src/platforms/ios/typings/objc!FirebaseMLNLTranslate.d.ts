
declare function FIRTranslateAllLanguages(): NSSet<number>;

declare const enum FIRTranslateLanguage {

	AF = 0,

	AR = 1,

	BE = 2,

	BG = 3,

	BN = 4,

	CA = 5,

	CS = 6,

	CY = 7,

	DA = 8,

	DE = 9,

	EL = 10,

	EN = 11,

	EO = 12,

	ES = 13,

	ET = 14,

	FA = 15,

	FI = 16,

	FR = 17,

	GA = 18,

	GL = 19,

	GU = 20,

	HE = 21,

	HI = 22,

	HR = 23,

	HT = 24,

	HU = 25,

	ID = 26,

	IS = 27,

	IT = 28,

	JA = 29,

	KA = 30,

	KN = 31,

	KO = 32,

	LT = 33,

	LV = 34,

	MK = 35,

	MR = 36,

	MS = 37,

	MT = 38,

	NL = 39,

	NO = 40,

	PL = 41,

	PT = 42,

	RO = 43,

	RU = 44,

	SK = 45,

	SL = 46,

	SQ = 47,

	SV = 48,

	SW = 49,

	TA = 50,

	TE = 51,

	TH = 52,

	TL = 53,

	TR = 54,

	UK = 55,

	UR = 56,

	VI = 57,

	ZH = 58,

	Invalid = 65535
}

declare function FIRTranslateLanguageCodeForLanguage(language: FIRTranslateLanguage): string;

declare function FIRTranslateLanguageForLanguageCode(languageCode: string): FIRTranslateLanguage;

declare class FIRTranslateRemoteModel extends FIRRemoteModel {

	static alloc(): FIRTranslateRemoteModel; // inherited from NSObject

	static new(): FIRTranslateRemoteModel; // inherited from NSObject

	static translateRemoteModelForAppLanguageConditions(app: FIRApp, language: FIRTranslateLanguage, conditions: FIRModelDownloadConditions): FIRTranslateRemoteModel;

	static translateRemoteModelWithLanguage(language: FIRTranslateLanguage): FIRTranslateRemoteModel;

	readonly language: FIRTranslateLanguage;
}

declare class FIRTranslator extends NSObject {

	static alloc(): FIRTranslator; // inherited from NSObject

	static new(): FIRTranslator; // inherited from NSObject

	downloadModelIfNeededWithCompletion(completion: (p1: NSError) => void): void;

	downloadModelIfNeededWithConditionsCompletion(conditions: FIRModelDownloadConditions, completion: (p1: NSError) => void): void;

	translateTextCompletion(text: string, completion: (p1: string, p2: NSError) => void): void;
}

declare class FIRTranslatorOptions extends NSObject {

	static alloc(): FIRTranslatorOptions; // inherited from NSObject

	static new(): FIRTranslatorOptions; // inherited from NSObject

	readonly sourceLanguage: FIRTranslateLanguage;

	readonly targetLanguage: FIRTranslateLanguage;

	constructor(o: { sourceLanguage: FIRTranslateLanguage; targetLanguage: FIRTranslateLanguage; });

	initWithSourceLanguageTargetLanguage(sourceLanguage: FIRTranslateLanguage, targetLanguage: FIRTranslateLanguage): this;
}
