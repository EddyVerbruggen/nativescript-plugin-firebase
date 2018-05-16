
declare var FIRFaceLandmarkTypeLeftCheek: string;

declare var FIRFaceLandmarkTypeLeftEar: string;

declare var FIRFaceLandmarkTypeLeftEye: string;

declare var FIRFaceLandmarkTypeMouthBottom: string;

declare var FIRFaceLandmarkTypeMouthLeft: string;

declare var FIRFaceLandmarkTypeMouthRight: string;

declare var FIRFaceLandmarkTypeNoseBase: string;

declare var FIRFaceLandmarkTypeRightCheek: string;

declare var FIRFaceLandmarkTypeRightEar: string;

declare var FIRFaceLandmarkTypeRightEye: string;

declare class FIRVision extends NSObject {

	static alloc(): FIRVision; // inherited from NSObject

	static new(): FIRVision; // inherited from NSObject

	static vision(): FIRVision;

	static visionForApp(app: FIRApp): FIRVision;

	barcodeDetector(): FIRVisionBarcodeDetector;

	barcodeDetectorWithOptions(options: FIRVisionBarcodeDetectorOptions): FIRVisionBarcodeDetector;

	cloudDocumentTextDetector(): FIRVisionCloudDocumentTextDetector;

	cloudDocumentTextDetectorWithOptions(options: FIRVisionCloudDetectorOptions): FIRVisionCloudDocumentTextDetector;

	cloudLabelDetector(): FIRVisionCloudLabelDetector;

	cloudLabelDetectorWithOptions(options: FIRVisionCloudDetectorOptions): FIRVisionCloudLabelDetector;

	cloudLandmarkDetector(): FIRVisionCloudLandmarkDetector;

	cloudLandmarkDetectorWithOptions(options: FIRVisionCloudDetectorOptions): FIRVisionCloudLandmarkDetector;

	cloudTextDetector(): FIRVisionCloudTextDetector;

	cloudTextDetectorWithOptions(options: FIRVisionCloudDetectorOptions): FIRVisionCloudTextDetector;

	faceDetector(): FIRVisionFaceDetector;

	faceDetectorWithOptions(options: FIRVisionFaceDetectorOptions): FIRVisionFaceDetector;

	labelDetector(): FIRVisionLabelDetector;

	labelDetectorWithOptions(options: FIRVisionLabelDetectorOptions): FIRVisionLabelDetector;

	textDetector(): FIRVisionTextDetector;
}

declare class FIRVisionBarcode extends NSObject {

	static alloc(): FIRVisionBarcode; // inherited from NSObject

	static new(): FIRVisionBarcode; // inherited from NSObject

	readonly URL: FIRVisionBarcodeURLBookmark;

	readonly calendarEvent: FIRVisionBarcodeCalendarEvent;

	readonly contactInfo: FIRVisionBarcodeContactInfo;

	readonly cornerPoints: NSArray<NSValue>;

	readonly displayValue: string;

	readonly driverLicense: FIRVisionBarcodeDriverLicense;

	readonly email: FIRVisionBarcodeEmail;

	readonly format: FIRVisionBarcodeFormat;

	readonly frame: CGRect;

	readonly geoPoint: FIRVisionBarcodeGeoPoint;

	readonly phone: FIRVisionBarcodePhone;

	readonly rawValue: string;

	readonly sms: FIRVisionBarcodeSMS;

	readonly valueType: FIRVisionBarcodeValueType;

	readonly wifi: FIRVisionBarcodeWiFi;
}

declare class FIRVisionBarcodeAddress extends NSObject {

	static alloc(): FIRVisionBarcodeAddress; // inherited from NSObject

	static new(): FIRVisionBarcodeAddress; // inherited from NSObject

	readonly addressLines: NSArray<string>;

	readonly type: FIRVisionBarcodeAddressType;
}

declare const enum FIRVisionBarcodeAddressType {

	Unknown = 0,

	Work = 1,

	Home = 2
}

declare class FIRVisionBarcodeCalendarEvent extends NSObject {

	static alloc(): FIRVisionBarcodeCalendarEvent; // inherited from NSObject

	static new(): FIRVisionBarcodeCalendarEvent; // inherited from NSObject

	readonly end: Date;

	readonly eventDescription: string;

	readonly location: string;

	readonly organizer: string;

	readonly start: Date;

	readonly status: string;

	readonly summary: string;
}

declare class FIRVisionBarcodeContactInfo extends NSObject {

	static alloc(): FIRVisionBarcodeContactInfo; // inherited from NSObject

	static new(): FIRVisionBarcodeContactInfo; // inherited from NSObject

	readonly addresses: NSArray<FIRVisionBarcodeAddress>;

	readonly emails: NSArray<FIRVisionBarcodeEmail>;

	readonly jobTitle: string;

	readonly name: FIRVisionBarcodePersonName;

	readonly organization: string;

	readonly phones: NSArray<FIRVisionBarcodePhone>;

	readonly urls: NSArray<string>;
}

declare class FIRVisionBarcodeDetector extends NSObject {

	static alloc(): FIRVisionBarcodeDetector; // inherited from NSObject

	static new(): FIRVisionBarcodeDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionBarcode>, p2: NSError) => void): void;
}

declare class FIRVisionBarcodeDetectorOptions extends NSObject {

	static alloc(): FIRVisionBarcodeDetectorOptions; // inherited from NSObject

	static new(): FIRVisionBarcodeDetectorOptions; // inherited from NSObject

	readonly formats: FIRVisionBarcodeFormat;

	constructor(o: { formats: FIRVisionBarcodeFormat; });

	initWithFormats(formats: FIRVisionBarcodeFormat): this;
}

declare class FIRVisionBarcodeDriverLicense extends NSObject {

	static alloc(): FIRVisionBarcodeDriverLicense; // inherited from NSObject

	static new(): FIRVisionBarcodeDriverLicense; // inherited from NSObject

	readonly addressCity: string;

	readonly addressState: string;

	readonly addressStreet: string;

	readonly addressZip: string;

	readonly birthDate: string;

	readonly documentType: string;

	readonly expiryDate: string;

	readonly firstName: string;

	readonly gender: string;

	readonly issuingCountry: string;

	readonly issuingDate: string;

	readonly lastName: string;

	readonly licenseNumber: string;

	readonly middleName: string;
}

declare class FIRVisionBarcodeEmail extends NSObject {

	static alloc(): FIRVisionBarcodeEmail; // inherited from NSObject

	static new(): FIRVisionBarcodeEmail; // inherited from NSObject

	readonly address: string;

	readonly body: string;

	readonly subject: string;

	readonly type: FIRVisionBarcodeEmailType;
}

declare const enum FIRVisionBarcodeEmailType {

	Unknown = 0,

	Work = 1,

	Home = 2
}

declare const enum FIRVisionBarcodeFormat {

	UnKnown = 0,

	All = 65535,

	Code128 = 1,

	Code39 = 2,

	Code93 = 4,

	CodaBar = 8,

	DataMatrix = 16,

	EAN13 = 32,

	EAN8 = 64,

	ITF = 128,

	QRCode = 256,

	UPCA = 512,

	UPCE = 1024,

	PDF417 = 2048,

	Aztec = 4096
}

declare class FIRVisionBarcodeGeoPoint extends NSObject {

	static alloc(): FIRVisionBarcodeGeoPoint; // inherited from NSObject

	static new(): FIRVisionBarcodeGeoPoint; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;
}

declare class FIRVisionBarcodePersonName extends NSObject {

	static alloc(): FIRVisionBarcodePersonName; // inherited from NSObject

	static new(): FIRVisionBarcodePersonName; // inherited from NSObject

	readonly first: string;

	readonly formattedName: string;

	readonly last: string;

	readonly middle: string;

	readonly prefix: string;

	readonly pronounciation: string;

	readonly suffix: string;
}

declare class FIRVisionBarcodePhone extends NSObject {

	static alloc(): FIRVisionBarcodePhone; // inherited from NSObject

	static new(): FIRVisionBarcodePhone; // inherited from NSObject

	readonly number: string;

	readonly type: FIRVisionBarcodePhoneType;
}

declare const enum FIRVisionBarcodePhoneType {

	Unknown = 0,

	Work = 1,

	Home = 2,

	Fax = 3,

	Mobile = 4
}

declare class FIRVisionBarcodeSMS extends NSObject {

	static alloc(): FIRVisionBarcodeSMS; // inherited from NSObject

	static new(): FIRVisionBarcodeSMS; // inherited from NSObject

	readonly message: string;

	readonly phoneNumber: string;
}

declare class FIRVisionBarcodeURLBookmark extends NSObject {

	static alloc(): FIRVisionBarcodeURLBookmark; // inherited from NSObject

	static new(): FIRVisionBarcodeURLBookmark; // inherited from NSObject

	readonly title: string;

	readonly url: string;
}

declare const enum FIRVisionBarcodeValueType {

	Unknown = 0,

	ContactInfo = 1,

	Email = 2,

	ISBN = 3,

	Phone = 4,

	Product = 5,

	SMS = 6,

	Text = 7,

	URL = 8,

	WiFi = 9,

	GeographicCoordinates = 10,

	CalendarEvent = 11,

	DriversLicense = 12
}

declare class FIRVisionBarcodeWiFi extends NSObject {

	static alloc(): FIRVisionBarcodeWiFi; // inherited from NSObject

	static new(): FIRVisionBarcodeWiFi; // inherited from NSObject

	readonly password: string;

	readonly ssid: string;

	readonly type: FIRVisionBarcodeWiFiEncryptionType;
}

declare const enum FIRVisionBarcodeWiFiEncryptionType {

	Unknown = 0,

	Open = 1,

	WPA = 2,

	WEP = 3
}

declare class FIRVisionCloudBlock extends NSObject {

	static alloc(): FIRVisionCloudBlock; // inherited from NSObject

	static new(): FIRVisionCloudBlock; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly paragraphs: NSArray<FIRVisionCloudParagraph>;

	readonly textProperty: FIRVisionCloudTextProperty;

	readonly type: FIRVisionCloudBlockType;
}

declare const enum FIRVisionCloudBlockType {

	Unknown = 0,

	Barcode = 1,

	Picture = 2,

	Ruler = 3,

	Table = 4,

	Text = 5
}

declare class FIRVisionCloudDetectedBreak extends NSObject {

	static alloc(): FIRVisionCloudDetectedBreak; // inherited from NSObject

	static new(): FIRVisionCloudDetectedBreak; // inherited from NSObject

	readonly isPrefix: number;

	readonly type: FIRVisionCloudDetectedBreakType;
}

declare const enum FIRVisionCloudDetectedBreakType {

	Unknown = 0,

	LineWrap = 1,

	Hyphen = 2,

	LineBreak = 3,

	Space = 4,

	SureSpace = 5
}

declare class FIRVisionCloudDetectedLanguage extends NSObject {

	static alloc(): FIRVisionCloudDetectedLanguage; // inherited from NSObject

	static new(): FIRVisionCloudDetectedLanguage; // inherited from NSObject

	readonly confidence: number;

	readonly languageCode: string;
}

declare class FIRVisionCloudDetectorOptions extends NSObject {

	static alloc(): FIRVisionCloudDetectorOptions; // inherited from NSObject

	static new(): FIRVisionCloudDetectorOptions; // inherited from NSObject

	maxResults: number;

	modelType: FIRVisionCloudModelType;
}

declare class FIRVisionCloudDocumentTextDetector extends NSObject {

	static alloc(): FIRVisionCloudDocumentTextDetector; // inherited from NSObject

	static new(): FIRVisionCloudDocumentTextDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: FIRVisionCloudText, p2: NSError) => void): void;
}

declare class FIRVisionCloudLabel extends NSObject {

	static alloc(): FIRVisionCloudLabel; // inherited from NSObject

	static new(): FIRVisionCloudLabel; // inherited from NSObject

	readonly confidence: number;

	readonly entityId: string;

	readonly label: string;
}

declare class FIRVisionCloudLabelDetector extends NSObject {

	static alloc(): FIRVisionCloudLabelDetector; // inherited from NSObject

	static new(): FIRVisionCloudLabelDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionCloudLabel>, p2: NSError) => void): void;
}

declare class FIRVisionCloudLandmark extends NSObject {

	static alloc(): FIRVisionCloudLandmark; // inherited from NSObject

	static new(): FIRVisionCloudLandmark; // inherited from NSObject

	readonly confidence: number;

	readonly entityId: string;

	readonly frame: CGRect;

	readonly landmark: string;

	readonly locations: NSArray<FIRVisionLatitudeLongitude>;
}

declare class FIRVisionCloudLandmarkDetector extends NSObject {

	static alloc(): FIRVisionCloudLandmarkDetector; // inherited from NSObject

	static new(): FIRVisionCloudLandmarkDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionCloudLandmark>, p2: NSError) => void): void;
}

declare const enum FIRVisionCloudModelType {

	Stable = 0,

	Latest = 1
}

declare class FIRVisionCloudPage extends NSObject {

	static alloc(): FIRVisionCloudPage; // inherited from NSObject

	static new(): FIRVisionCloudPage; // inherited from NSObject

	readonly blocks: NSArray<FIRVisionCloudBlock>;

	readonly confidence: number;

	readonly height: number;

	readonly textProperty: FIRVisionCloudTextProperty;

	readonly width: number;
}

declare class FIRVisionCloudParagraph extends NSObject {

	static alloc(): FIRVisionCloudParagraph; // inherited from NSObject

	static new(): FIRVisionCloudParagraph; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly textProperty: FIRVisionCloudTextProperty;

	readonly words: NSArray<FIRVisionCloudWord>;
}

declare class FIRVisionCloudSymbol extends NSObject {

	static alloc(): FIRVisionCloudSymbol; // inherited from NSObject

	static new(): FIRVisionCloudSymbol; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly text: string;

	readonly textProperty: FIRVisionCloudTextProperty;
}

declare class FIRVisionCloudText extends NSObject {

	static alloc(): FIRVisionCloudText; // inherited from NSObject

	static new(): FIRVisionCloudText; // inherited from NSObject

	readonly pages: NSArray<FIRVisionCloudPage>;

	readonly text: string;
}

declare class FIRVisionCloudTextDetector extends NSObject {

	static alloc(): FIRVisionCloudTextDetector; // inherited from NSObject

	static new(): FIRVisionCloudTextDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: FIRVisionCloudText, p2: NSError) => void): void;
}

declare class FIRVisionCloudTextProperty extends NSObject {

	static alloc(): FIRVisionCloudTextProperty; // inherited from NSObject

	static new(): FIRVisionCloudTextProperty; // inherited from NSObject

	readonly detectedBreak: FIRVisionCloudDetectedBreak;

	readonly detectedLanguages: NSArray<FIRVisionCloudDetectedLanguage>;
}

declare class FIRVisionCloudWord extends NSObject {

	static alloc(): FIRVisionCloudWord; // inherited from NSObject

	static new(): FIRVisionCloudWord; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly symbols: NSArray<FIRVisionCloudSymbol>;

	readonly textProperty: FIRVisionCloudTextProperty;
}

declare const enum FIRVisionDetectorImageOrientation {

	TopLeft = 1,

	TopRight = 2,

	BottomRight = 3,

	BottomLeft = 4,

	LeftTop = 5,

	RightTop = 6,

	RightBottom = 7,

	LeftBottom = 8
}

declare class FIRVisionFace extends NSObject {

	static alloc(): FIRVisionFace; // inherited from NSObject

	static new(): FIRVisionFace; // inherited from NSObject

	readonly frame: CGRect;

	readonly hasHeadEulerAngleY: boolean;

	readonly hasHeadEulerAngleZ: boolean;

	readonly hasLeftEyeOpenProbability: boolean;

	readonly hasRightEyeOpenProbability: boolean;

	readonly hasSmilingProbability: boolean;

	readonly hasTrackingID: boolean;

	readonly headEulerAngleY: number;

	readonly headEulerAngleZ: number;

	readonly leftEyeOpenProbability: number;

	readonly rightEyeOpenProbability: number;

	readonly smilingProbability: number;

	readonly trackingID: number;

	landmarkOfType(type: string): FIRVisionFaceLandmark;
}

declare var FIRVisionFaceDetectionMinSize: number;

declare class FIRVisionFaceDetector extends NSObject {

	static alloc(): FIRVisionFaceDetector; // inherited from NSObject

	static new(): FIRVisionFaceDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionFace>, p2: NSError) => void): void;
}

declare const enum FIRVisionFaceDetectorClassification {

	None = 1,

	All = 2
}

declare const enum FIRVisionFaceDetectorLandmark {

	None = 1,

	All = 2
}

declare const enum FIRVisionFaceDetectorMode {

	Fast = 1,

	Accurate = 2
}

declare class FIRVisionFaceDetectorOptions extends NSObject {

	static alloc(): FIRVisionFaceDetectorOptions; // inherited from NSObject

	static new(): FIRVisionFaceDetectorOptions; // inherited from NSObject

	classificationType: FIRVisionFaceDetectorClassification;

	isTrackingEnabled: boolean;

	landmarkType: FIRVisionFaceDetectorLandmark;

	minFaceSize: number;

	modeType: FIRVisionFaceDetectorMode;
}

declare class FIRVisionFaceLandmark extends NSObject {

	static alloc(): FIRVisionFaceLandmark; // inherited from NSObject

	static new(): FIRVisionFaceLandmark; // inherited from NSObject

	readonly position: FIRVisionPoint;

	readonly type: string;
}

declare class FIRVisionImage extends NSObject {

	static alloc(): FIRVisionImage; // inherited from NSObject

	static new(): FIRVisionImage; // inherited from NSObject

	metadata: FIRVisionImageMetadata;

	constructor(o: { buffer: any; });

	constructor(o: { image: UIImage; });

	initWithBuffer(sampleBuffer: any): this;

	initWithImage(image: UIImage): this;
}

declare class FIRVisionImageMetadata extends NSObject {

	static alloc(): FIRVisionImageMetadata; // inherited from NSObject

	static new(): FIRVisionImageMetadata; // inherited from NSObject

	orientation: FIRVisionDetectorImageOrientation;
}

declare class FIRVisionLabel extends NSObject {

	static alloc(): FIRVisionLabel; // inherited from NSObject

	static new(): FIRVisionLabel; // inherited from NSObject

	readonly confidence: number;

	readonly entityID: string;

	readonly frame: CGRect;

	readonly label: string;
}

declare class FIRVisionLabelDetector extends NSObject {

	static alloc(): FIRVisionLabelDetector; // inherited from NSObject

	static new(): FIRVisionLabelDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionLabel>, p2: NSError) => void): void;
}

declare class FIRVisionLabelDetectorOptions extends NSObject {

	static alloc(): FIRVisionLabelDetectorOptions; // inherited from NSObject

	static new(): FIRVisionLabelDetectorOptions; // inherited from NSObject

	readonly confidenceThreshold: number;

	constructor(o: { confidenceThreshold: number; });

	initWithConfidenceThreshold(confidenceThreshold: number): this;
}

declare class FIRVisionLatitudeLongitude extends NSObject {

	static alloc(): FIRVisionLatitudeLongitude; // inherited from NSObject

	static new(): FIRVisionLatitudeLongitude; // inherited from NSObject

	latitude: number;

	longitude: number;

	constructor(o: { latitude: number; longitude: number; });

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

declare class FIRVisionPoint extends NSObject {

	static alloc(): FIRVisionPoint; // inherited from NSObject

	static new(): FIRVisionPoint; // inherited from NSObject

	readonly x: number;

	readonly y: number;

	readonly z: number;
}

interface FIRVisionText extends NSObjectProtocol {

	cornerPoints: NSArray<NSValue>;

	frame: CGRect;

	text: string;
}
declare var FIRVisionText: {

	prototype: FIRVisionText;
};

declare class FIRVisionTextBlock extends NSObject implements FIRVisionText {

	static alloc(): FIRVisionTextBlock; // inherited from NSObject

	static new(): FIRVisionTextBlock; // inherited from NSObject

	readonly lines: NSArray<FIRVisionTextLine>;

	readonly cornerPoints: NSArray<NSValue>; // inherited from FIRVisionText

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly frame: CGRect; // inherited from FIRVisionText

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly text: string; // inherited from FIRVisionText

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FIRVisionTextDetector extends NSObject {

	static alloc(): FIRVisionTextDetector; // inherited from NSObject

	static new(): FIRVisionTextDetector; // inherited from NSObject

	detectInImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionText>, p2: NSError) => void): void;
}

declare class FIRVisionTextElement extends NSObject implements FIRVisionText {

	static alloc(): FIRVisionTextElement; // inherited from NSObject

	static new(): FIRVisionTextElement; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>; // inherited from FIRVisionText

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly frame: CGRect; // inherited from FIRVisionText

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly text: string; // inherited from FIRVisionText

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FIRVisionTextLine extends NSObject implements FIRVisionText {

	static alloc(): FIRVisionTextLine; // inherited from NSObject

	static new(): FIRVisionTextLine; // inherited from NSObject

	readonly elements: NSArray<FIRVisionTextElement>;

	readonly cornerPoints: NSArray<NSValue>; // inherited from FIRVisionText

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly frame: CGRect; // inherited from FIRVisionText

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly text: string; // inherited from FIRVisionText

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
