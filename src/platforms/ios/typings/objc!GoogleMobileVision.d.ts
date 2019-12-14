
declare class GMVBarcodeFeature extends GMVFeature {

	static alloc(): GMVBarcodeFeature; // inherited from NSObject

	static new(): GMVBarcodeFeature; // inherited from NSObject

	readonly calendarEvent: GMVBarcodeFeatureCalendarEvent;

	readonly contactInfo: GMVBarcodeFeatureContactInfo;

	readonly cornerPoints: NSArray<NSValue>;

	readonly displayValue: string;

	readonly driverLicense: GMVBarcodeFeatureDriverLicense;

	readonly email: GMVBarcodeFeatureEmail;

	readonly format: GMVDetectorBarcodeFormat;

	readonly geoPoint: GMVBarcodeFeatureGeoPoint;

	readonly phone: GMVBarcodeFeaturePhone;

	readonly rawValue: string;

	readonly sms: GMVBarcodeFeatureSMS;

	readonly url: GMVBarcodeFeatureURLBookmark;

	readonly valueFormat: GMVDetectorBarcodeValueFormat;

	readonly wifi: GMVBarcodeFeatureWiFi;
}

declare class GMVBarcodeFeatureAddress extends NSObject {

	static alloc(): GMVBarcodeFeatureAddress; // inherited from NSObject

	static new(): GMVBarcodeFeatureAddress; // inherited from NSObject

	readonly addressLines: NSArray<string>;

	readonly type: GMVBarcodeFeatureAddressType;
}

declare const enum GMVBarcodeFeatureAddressType {

	Unknown = 0,

	Work = 1,

	Home = 2
}

declare class GMVBarcodeFeatureCalendarEvent extends NSObject {

	static alloc(): GMVBarcodeFeatureCalendarEvent; // inherited from NSObject

	static new(): GMVBarcodeFeatureCalendarEvent; // inherited from NSObject

	readonly end: Date;

	readonly eventDescription: string;

	readonly location: string;

	readonly organizer: string;

	readonly start: Date;

	readonly status: string;

	readonly summary: string;
}

declare class GMVBarcodeFeatureContactInfo extends NSObject {

	static alloc(): GMVBarcodeFeatureContactInfo; // inherited from NSObject

	static new(): GMVBarcodeFeatureContactInfo; // inherited from NSObject

	readonly addresses: NSArray<GMVBarcodeFeatureAddress>;

	readonly emails: NSArray<GMVBarcodeFeatureEmail>;

	readonly jobTitle: string;

	readonly name: GMVBarcodeFeaturePersonName;

	readonly organization: string;

	readonly phones: NSArray<GMVBarcodeFeaturePhone>;

	readonly urls: NSArray<string>;
}

declare class GMVBarcodeFeatureDriverLicense extends NSObject {

	static alloc(): GMVBarcodeFeatureDriverLicense; // inherited from NSObject

	static new(): GMVBarcodeFeatureDriverLicense; // inherited from NSObject

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

declare class GMVBarcodeFeatureEmail extends NSObject {

	static alloc(): GMVBarcodeFeatureEmail; // inherited from NSObject

	static new(): GMVBarcodeFeatureEmail; // inherited from NSObject

	readonly address: string;

	readonly body: string;

	readonly subject: string;

	readonly type: GMVBarcodeFeatureEmailType;
}

declare const enum GMVBarcodeFeatureEmailType {

	Unknown = 0,

	Work = 1,

	Home = 2
}

declare class GMVBarcodeFeatureGeoPoint extends NSObject {

	static alloc(): GMVBarcodeFeatureGeoPoint; // inherited from NSObject

	static new(): GMVBarcodeFeatureGeoPoint; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;
}

declare class GMVBarcodeFeaturePersonName extends NSObject {

	static alloc(): GMVBarcodeFeaturePersonName; // inherited from NSObject

	static new(): GMVBarcodeFeaturePersonName; // inherited from NSObject

	readonly first: string;

	readonly formattedName: string;

	readonly last: string;

	readonly middle: string;

	readonly prefix: string;

	readonly pronounciation: string;

	readonly suffix: string;
}

declare class GMVBarcodeFeaturePhone extends NSObject {

	static alloc(): GMVBarcodeFeaturePhone; // inherited from NSObject

	static new(): GMVBarcodeFeaturePhone; // inherited from NSObject

	readonly number: string;

	readonly type: GMVBarcodeFeaturePhoneType;
}

declare const enum GMVBarcodeFeaturePhoneType {

	Unknown = 0,

	Work = 1,

	Home = 2,

	Fax = 3,

	Mobile = 4
}

declare class GMVBarcodeFeatureSMS extends NSObject {

	static alloc(): GMVBarcodeFeatureSMS; // inherited from NSObject

	static new(): GMVBarcodeFeatureSMS; // inherited from NSObject

	readonly message: string;

	readonly phoneNumber: string;
}

declare class GMVBarcodeFeatureURLBookmark extends NSObject {

	static alloc(): GMVBarcodeFeatureURLBookmark; // inherited from NSObject

	static new(): GMVBarcodeFeatureURLBookmark; // inherited from NSObject

	readonly title: string;

	readonly url: string;
}

declare class GMVBarcodeFeatureWiFi extends NSObject {

	static alloc(): GMVBarcodeFeatureWiFi; // inherited from NSObject

	static new(): GMVBarcodeFeatureWiFi; // inherited from NSObject

	readonly password: string;

	readonly ssid: string;

	readonly type: GMVBarcodeFeatureWiFiEncryptionType;
}

declare const enum GMVBarcodeFeatureWiFiEncryptionType {

	Unknown = 0,

	Open = 1,

	WPA = 2,

	WEP = 3
}

declare class GMVDetector extends NSObject {

	static alloc(): GMVDetector; // inherited from NSObject

	static detectorOfTypeOptions(type: string, options: NSDictionary<any, any>): GMVDetector;

	static new(): GMVDetector; // inherited from NSObject

	featuresInBufferOptions(sampleBuffer: any, options: NSDictionary<any, any>): NSArray<GMVFeature>;

	featuresInImageOptions(image: UIImage, options: NSDictionary<any, any>): NSArray<GMVFeature>;
}

declare const enum GMVDetectorBarcodeFormat {

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

declare var GMVDetectorBarcodeFormats: string;

declare const enum GMVDetectorBarcodeValueFormat {

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

declare const enum GMVDetectorError {

	InvalidInput = -301
}

declare const enum GMVDetectorFaceClassification {

	None = 1,

	All = 2
}

declare var GMVDetectorFaceClassificationType: string;

declare const enum GMVDetectorFaceLandmark {

	None = 1,

	All = 2,

	Contour = 4
}

declare var GMVDetectorFaceLandmarkType: string;

declare var GMVDetectorFaceMinSize: string;

declare var GMVDetectorFaceMode: string;

declare const enum GMVDetectorFaceModeOption {

	FastMode = 200,

	AccurateMode = 201,

	SelfieMode = 202
}

declare var GMVDetectorFaceTrackingEnabled: string;

declare var GMVDetectorImageOrientation: string;

declare var GMVDetectorLabelScoreThreshold: string;

declare var GMVDetectorObjectCategories: string;

declare const enum GMVDetectorObjectCategory {

	HomeGood = 1,

	FashionGood = 2,

	Food = 4,

	Places = 8,

	Plants = 16
}

declare var GMVDetectorObjectClassifierEnabled: string;

declare var GMVDetectorObjectProminentObject: string;

declare var GMVDetectorObjectTrackingEnabled: string;

declare var GMVDetectorTypeBarcode: string;

declare var GMVDetectorTypeFace: string;

declare var GMVDetectorTypeLabel: string;

declare var GMVDetectorTypeObject: string;

declare var GMVDetectorTypeText: string;

declare class GMVFaceContour extends NSObject {

	static alloc(): GMVFaceContour; // inherited from NSObject

	static new(): GMVFaceContour; // inherited from NSObject

	readonly allPoints: NSArray<NSValue>;

	readonly bottomLeftEyebrowContour: NSArray<NSValue>;

	readonly bottomLowerLipContour: NSArray<NSValue>;

	readonly bottomNoseContour: NSArray<NSValue>;

	readonly bottomRightEyebrowContour: NSArray<NSValue>;

	readonly bottomUpperLipContour: NSArray<NSValue>;

	readonly faceContour: NSArray<NSValue>;

	readonly leftEyeContour: NSArray<NSValue>;

	readonly noseBridgeContour: NSArray<NSValue>;

	readonly rightEyeContour: NSArray<NSValue>;

	readonly topLeftEyebrowContour: NSArray<NSValue>;

	readonly topLowerLipContour: NSArray<NSValue>;

	readonly topRightEyebrowContour: NSArray<NSValue>;

	readonly topUpperLipContour: NSArray<NSValue>;
}

declare class GMVFaceFeature extends GMVFeature {

	static alloc(): GMVFaceFeature; // inherited from NSObject

	static new(): GMVFaceFeature; // inherited from NSObject

	readonly bottomMouthPosition: CGPoint;

	readonly contour: GMVFaceContour;

	readonly hasBottomMouthPosition: boolean;

	readonly hasHeadEulerAngleX: boolean;

	readonly hasHeadEulerAngleY: boolean;

	readonly hasHeadEulerAngleZ: boolean;

	readonly hasLeftCheekPosition: boolean;

	readonly hasLeftEarPosition: boolean;

	readonly hasLeftEyeOpenProbability: boolean;

	readonly hasLeftEyePosition: boolean;

	readonly hasLeftMouthPosition: boolean;

	readonly hasMouthPosition: boolean;

	readonly hasNoseBasePosition: boolean;

	readonly hasRightCheekPosition: boolean;

	readonly hasRightEarPosition: boolean;

	readonly hasRightEyeOpenProbability: boolean;

	readonly hasRightEyePosition: boolean;

	readonly hasRightMouthPosition: boolean;

	readonly hasSmilingProbability: boolean;

	readonly headEulerAngleX: number;

	readonly headEulerAngleY: number;

	readonly headEulerAngleZ: number;

	readonly leftCheekPosition: CGPoint;

	readonly leftEarPosition: CGPoint;

	readonly leftEyeOpenProbability: number;

	readonly leftEyePosition: CGPoint;

	readonly leftMouthPosition: CGPoint;

	readonly mouthPosition: CGPoint;

	readonly noseBasePosition: CGPoint;

	readonly rightCheekPosition: CGPoint;

	readonly rightEarPosition: CGPoint;

	readonly rightEyeOpenProbability: number;

	readonly rightEyePosition: CGPoint;

	readonly rightMouthPosition: CGPoint;

	readonly smilingProbability: number;
}

declare class GMVFeature extends NSObject {

	static alloc(): GMVFeature; // inherited from NSObject

	static new(): GMVFeature; // inherited from NSObject

	readonly bounds: CGRect;

	readonly hasTrackingID: boolean;

	readonly trackingID: number;

	readonly type: string;
}

declare var GMVFeatureTypeBarcode: string;

declare var GMVFeatureTypeFace: string;

declare var GMVFeatureTypeLabel: string;

declare var GMVFeatureTypeObject: string;

declare var GMVFeatureTypeTextBlock: string;

declare var GMVFeatureTypeTextElement: string;

declare var GMVFeatureTypeTextLine: string;

declare const enum GMVImageOrientation {

	TopLeft = 1,

	TopRight = 2,

	BottomRight = 3,

	BottomLeft = 4,

	LeftTop = 5,

	RightTop = 6,

	RightBottom = 7,

	LeftBottom = 8
}

declare class GMVLabelFeature extends GMVFeature {

	static alloc(): GMVLabelFeature; // inherited from NSObject

	static new(): GMVLabelFeature; // inherited from NSObject

	readonly MID: string;

	readonly labelDescription: string;

	readonly score: number;
}

declare class GMVObjectFeature extends GMVFeature {

	static alloc(): GMVObjectFeature; // inherited from NSObject

	static new(): GMVObjectFeature; // inherited from NSObject

	readonly MID: string;

	readonly hasScore: boolean;

	readonly labelDescription: string;

	readonly score: number;
}

declare class GMVTextBlockFeature extends GMVFeature {

	static alloc(): GMVTextBlockFeature; // inherited from NSObject

	static new(): GMVTextBlockFeature; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly language: string;

	readonly lines: NSArray<GMVTextLineFeature>;

	readonly value: string;
}

declare class GMVTextElementFeature extends GMVFeature {

	static alloc(): GMVTextElementFeature; // inherited from NSObject

	static new(): GMVTextElementFeature; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly value: string;
}

declare class GMVTextLineFeature extends GMVFeature {

	static alloc(): GMVTextLineFeature; // inherited from NSObject

	static new(): GMVTextLineFeature; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly elements: NSArray<GMVTextElementFeature>;

	readonly language: string;

	readonly value: string;
}

declare class GMVUtility extends NSObject {

	static alloc(): GMVUtility; // inherited from NSObject

	static anySampleBufferFormatTo32RGBA(sampleBuffer: any): NSData;

	static imageFromDataWidthHeight(data: NSData, width: number, height: number): UIImage;

	static imageOrientationFromOrientationWithCaptureDevicePositionDefaultDeviceOrientation(deviceOrientation: UIDeviceOrientation, position: AVCaptureDevicePosition, defaultOrientation: UIDeviceOrientation): GMVImageOrientation;

	static new(): GMVUtility; // inherited from NSObject

	static sampleBufferTo32RGBA(sampleBuffer: any): UIImage;
}

declare var kGMVDetectorLabelScoreThresholdDefaultValue: number;
