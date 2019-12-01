
declare var FIRFaceContourTypeAll: string;

declare var FIRFaceContourTypeFace: string;

declare var FIRFaceContourTypeLeftEye: string;

declare var FIRFaceContourTypeLeftEyebrowBottom: string;

declare var FIRFaceContourTypeLeftEyebrowTop: string;

declare var FIRFaceContourTypeLowerLipBottom: string;

declare var FIRFaceContourTypeLowerLipTop: string;

declare var FIRFaceContourTypeNoseBottom: string;

declare var FIRFaceContourTypeNoseBridge: string;

declare var FIRFaceContourTypeRightEye: string;

declare var FIRFaceContourTypeRightEyebrowBottom: string;

declare var FIRFaceContourTypeRightEyebrowTop: string;

declare var FIRFaceContourTypeUpperLipBottom: string;

declare var FIRFaceContourTypeUpperLipTop: string;

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

	statsCollectionEnabled: boolean;

	barcodeDetector(): FIRVisionBarcodeDetector;

	barcodeDetectorWithOptions(options: FIRVisionBarcodeDetectorOptions): FIRVisionBarcodeDetector;

	cloudDocumentTextRecognizer(): FIRVisionDocumentTextRecognizer;

	cloudDocumentTextRecognizerWithOptions(options: FIRVisionCloudDocumentTextRecognizerOptions): FIRVisionDocumentTextRecognizer;

	cloudImageLabeler(): FIRVisionImageLabeler;

	cloudImageLabelerWithOptions(options: FIRVisionCloudImageLabelerOptions): FIRVisionImageLabeler;

	cloudLandmarkDetector(): FIRVisionCloudLandmarkDetector;

	cloudLandmarkDetectorWithOptions(options: FIRVisionCloudDetectorOptions): FIRVisionCloudLandmarkDetector;

	cloudTextRecognizer(): FIRVisionTextRecognizer;

	cloudTextRecognizerWithOptions(options: FIRVisionCloudTextRecognizerOptions): FIRVisionTextRecognizer;

	faceDetector(): FIRVisionFaceDetector;

	faceDetectorWithOptions(options: FIRVisionFaceDetectorOptions): FIRVisionFaceDetector;

	objectDetector(): FIRVisionObjectDetector;

	objectDetectorWithOptions(options: FIRVisionObjectDetectorOptions): FIRVisionObjectDetector;

	onDeviceAutoMLImageLabelerWithOptions(options: FIRVisionOnDeviceAutoMLImageLabelerOptions): FIRVisionImageLabeler;

	onDeviceImageLabeler(): FIRVisionImageLabeler;

	onDeviceImageLabelerWithOptions(options: FIRVisionOnDeviceImageLabelerOptions): FIRVisionImageLabeler;

	onDeviceTextRecognizer(): FIRVisionTextRecognizer;
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

	readonly rawData: NSData;

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

declare class FIRVisionCloudDetectorOptions extends NSObject {

	static alloc(): FIRVisionCloudDetectorOptions; // inherited from NSObject

	static new(): FIRVisionCloudDetectorOptions; // inherited from NSObject

	APIKeyOverride: string;

	maxResults: number;

	modelType: FIRVisionCloudModelType;
}

declare class FIRVisionCloudDocumentTextRecognizerOptions extends NSObject {

	static alloc(): FIRVisionCloudDocumentTextRecognizerOptions; // inherited from NSObject

	static new(): FIRVisionCloudDocumentTextRecognizerOptions; // inherited from NSObject

	APIKeyOverride: string;

	languageHints: NSArray<string>;
}

declare class FIRVisionCloudImageLabelerOptions extends NSObject {

	static alloc(): FIRVisionCloudImageLabelerOptions; // inherited from NSObject

	static new(): FIRVisionCloudImageLabelerOptions; // inherited from NSObject

	APIKeyOverride: string;

	confidenceThreshold: number;
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

declare const enum FIRVisionCloudTextModelType {

	Sparse = 0,

	Dense = 1
}

declare class FIRVisionCloudTextRecognizerOptions extends NSObject {

	static alloc(): FIRVisionCloudTextRecognizerOptions; // inherited from NSObject

	static new(): FIRVisionCloudTextRecognizerOptions; // inherited from NSObject

	APIKeyOverride: string;

	languageHints: NSArray<string>;

	modelType: FIRVisionCloudTextModelType;
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

declare class FIRVisionDocumentText extends NSObject {

	static alloc(): FIRVisionDocumentText; // inherited from NSObject

	static new(): FIRVisionDocumentText; // inherited from NSObject

	readonly blocks: NSArray<FIRVisionDocumentTextBlock>;

	readonly text: string;
}

declare class FIRVisionDocumentTextBlock extends NSObject {

	static alloc(): FIRVisionDocumentTextBlock; // inherited from NSObject

	static new(): FIRVisionDocumentTextBlock; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly paragraphs: NSArray<FIRVisionDocumentTextParagraph>;

	readonly recognizedBreak: FIRVisionTextRecognizedBreak;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;

	readonly type: FIRVisionDocumentTextBlockType;
}

declare const enum FIRVisionDocumentTextBlockType {

	Unknown = 0,

	Barcode = 1,

	Picture = 2,

	Ruler = 3,

	Table = 4,

	Text = 5
}

declare class FIRVisionDocumentTextParagraph extends NSObject {

	static alloc(): FIRVisionDocumentTextParagraph; // inherited from NSObject

	static new(): FIRVisionDocumentTextParagraph; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly recognizedBreak: FIRVisionTextRecognizedBreak;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;

	readonly words: NSArray<FIRVisionDocumentTextWord>;
}

declare class FIRVisionDocumentTextRecognizer extends NSObject {

	static alloc(): FIRVisionDocumentTextRecognizer; // inherited from NSObject

	static new(): FIRVisionDocumentTextRecognizer; // inherited from NSObject

	processImageCompletion(image: FIRVisionImage, completion: (p1: FIRVisionDocumentText, p2: NSError) => void): void;
}

declare class FIRVisionDocumentTextSymbol extends NSObject {

	static alloc(): FIRVisionDocumentTextSymbol; // inherited from NSObject

	static new(): FIRVisionDocumentTextSymbol; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly recognizedBreak: FIRVisionTextRecognizedBreak;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;
}

declare class FIRVisionDocumentTextWord extends NSObject {

	static alloc(): FIRVisionDocumentTextWord; // inherited from NSObject

	static new(): FIRVisionDocumentTextWord; // inherited from NSObject

	readonly confidence: number;

	readonly frame: CGRect;

	readonly recognizedBreak: FIRVisionTextRecognizedBreak;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly symbols: NSArray<FIRVisionDocumentTextSymbol>;

	readonly text: string;
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

	contourOfType(type: string): FIRVisionFaceContour;

	landmarkOfType(type: string): FIRVisionFaceLandmark;
}

declare class FIRVisionFaceContour extends NSObject {

	static alloc(): FIRVisionFaceContour; // inherited from NSObject

	static new(): FIRVisionFaceContour; // inherited from NSObject

	readonly points: NSArray<FIRVisionPoint>;

	readonly type: string;
}

declare class FIRVisionFaceDetector extends NSObject {

	static alloc(): FIRVisionFaceDetector; // inherited from NSObject

	static new(): FIRVisionFaceDetector; // inherited from NSObject

	processImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionFace>, p2: NSError) => void): void;

	resultsInImageError(image: FIRVisionImage): NSArray<FIRVisionFace>;
}

declare const enum FIRVisionFaceDetectorClassificationMode {

	None = 1,

	All = 2
}

declare const enum FIRVisionFaceDetectorContourMode {

	None = 1,

	All = 2
}

declare const enum FIRVisionFaceDetectorLandmarkMode {

	None = 1,

	All = 2
}

declare class FIRVisionFaceDetectorOptions extends NSObject {

	static alloc(): FIRVisionFaceDetectorOptions; // inherited from NSObject

	static new(): FIRVisionFaceDetectorOptions; // inherited from NSObject

	classificationMode: FIRVisionFaceDetectorClassificationMode;

	contourMode: FIRVisionFaceDetectorContourMode;

	landmarkMode: FIRVisionFaceDetectorLandmarkMode;

	minFaceSize: number;

	performanceMode: FIRVisionFaceDetectorPerformanceMode;

	trackingEnabled: boolean;
}

declare const enum FIRVisionFaceDetectorPerformanceMode {

	Fast = 1,

	Accurate = 2
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

declare class FIRVisionImageLabel extends NSObject {

	static alloc(): FIRVisionImageLabel; // inherited from NSObject

	static new(): FIRVisionImageLabel; // inherited from NSObject

	readonly confidence: number;

	readonly entityID: string;

	readonly text: string;
}

declare class FIRVisionImageLabeler extends NSObject {

	static alloc(): FIRVisionImageLabeler; // inherited from NSObject

	static new(): FIRVisionImageLabeler; // inherited from NSObject

	readonly type: FIRVisionImageLabelerType;

	processImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionImageLabel>, p2: NSError) => void): void;
}

declare const enum FIRVisionImageLabelerType {

	OnDevice = 0,

	Cloud = 1,

	OnDeviceAutoML = 2
}

declare class FIRVisionImageMetadata extends NSObject {

	static alloc(): FIRVisionImageMetadata; // inherited from NSObject

	static new(): FIRVisionImageMetadata; // inherited from NSObject

	orientation: FIRVisionDetectorImageOrientation;
}

declare class FIRVisionLatitudeLongitude extends NSObject {

	static alloc(): FIRVisionLatitudeLongitude; // inherited from NSObject

	static new(): FIRVisionLatitudeLongitude; // inherited from NSObject

	latitude: number;

	longitude: number;

	constructor(o: { latitude: number; longitude: number; });

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

declare class FIRVisionOnDeviceImageLabelerOptions extends NSObject {

	static alloc(): FIRVisionOnDeviceImageLabelerOptions; // inherited from NSObject

	static new(): FIRVisionOnDeviceImageLabelerOptions; // inherited from NSObject

	confidenceThreshold: number;
}

declare class FIRVisionPoint extends NSObject {

	static alloc(): FIRVisionPoint; // inherited from NSObject

	static new(): FIRVisionPoint; // inherited from NSObject

	readonly x: number;

	readonly y: number;

	readonly z: number;
}

declare class FIRVisionText extends NSObject {

	static alloc(): FIRVisionText; // inherited from NSObject

	static new(): FIRVisionText; // inherited from NSObject

	readonly blocks: NSArray<FIRVisionTextBlock>;

	readonly text: string;
}

declare class FIRVisionTextBlock extends NSObject {

	static alloc(): FIRVisionTextBlock; // inherited from NSObject

	static new(): FIRVisionTextBlock; // inherited from NSObject

	readonly confidence: number;

	readonly cornerPoints: NSArray<NSValue>;

	readonly frame: CGRect;

	readonly lines: NSArray<FIRVisionTextLine>;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;
}

declare class FIRVisionTextElement extends NSObject {

	static alloc(): FIRVisionTextElement; // inherited from NSObject

	static new(): FIRVisionTextElement; // inherited from NSObject

	readonly confidence: number;

	readonly cornerPoints: NSArray<NSValue>;

	readonly frame: CGRect;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;
}

declare class FIRVisionTextLine extends NSObject {

	static alloc(): FIRVisionTextLine; // inherited from NSObject

	static new(): FIRVisionTextLine; // inherited from NSObject

	readonly confidence: number;

	readonly cornerPoints: NSArray<NSValue>;

	readonly elements: NSArray<FIRVisionTextElement>;

	readonly frame: CGRect;

	readonly recognizedLanguages: NSArray<FIRVisionTextRecognizedLanguage>;

	readonly text: string;
}

declare class FIRVisionTextRecognizedBreak extends NSObject {

	static alloc(): FIRVisionTextRecognizedBreak; // inherited from NSObject

	static new(): FIRVisionTextRecognizedBreak; // inherited from NSObject

	readonly isPrefix: boolean;

	readonly type: FIRVisionTextRecognizedBreakType;
}

declare const enum FIRVisionTextRecognizedBreakType {

	Unknown = 0,

	LineWrap = 1,

	Hyphen = 2,

	LineBreak = 3,

	Space = 4,

	SureSpace = 5
}

declare class FIRVisionTextRecognizedLanguage extends NSObject {

	static alloc(): FIRVisionTextRecognizedLanguage; // inherited from NSObject

	static new(): FIRVisionTextRecognizedLanguage; // inherited from NSObject

	readonly languageCode: string;
}

declare class FIRVisionTextRecognizer extends NSObject {

	static alloc(): FIRVisionTextRecognizer; // inherited from NSObject

	static new(): FIRVisionTextRecognizer; // inherited from NSObject

	readonly type: FIRVisionTextRecognizerType;

	processImageCompletion(image: FIRVisionImage, completion: (p1: FIRVisionText, p2: NSError) => void): void;
}

declare const enum FIRVisionTextRecognizerType {

	OnDevice = 0,

	Cloud = 1
}
