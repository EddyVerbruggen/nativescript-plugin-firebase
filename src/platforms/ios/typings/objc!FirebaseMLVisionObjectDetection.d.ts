
declare class FIRVisionObject extends NSObject {

	static alloc(): FIRVisionObject; // inherited from NSObject

	static new(): FIRVisionObject; // inherited from NSObject

	readonly classificationCategory: FIRVisionObjectCategory;

	readonly confidence: number;

	readonly frame: CGRect;

	readonly trackingID: number;
}

declare const enum FIRVisionObjectCategory {

	Unknown = 0,

	HomeGoods = 1,

	FashionGoods = 2,

	Food = 3,

	Places = 4,

	Plants = 5
}

declare class FIRVisionObjectDetector extends NSObject {

	static alloc(): FIRVisionObjectDetector; // inherited from NSObject

	static new(): FIRVisionObjectDetector; // inherited from NSObject

	processImageCompletion(image: FIRVisionImage, completion: (p1: NSArray<FIRVisionObject>, p2: NSError) => void): void;

	resultsInImageError(image: FIRVisionImage): NSArray<FIRVisionObject>;
}

declare const enum FIRVisionObjectDetectorMode {

	SingleImage = 0,

	Stream = 1
}

declare class FIRVisionObjectDetectorOptions extends NSObject {

	static alloc(): FIRVisionObjectDetectorOptions; // inherited from NSObject

	static new(): FIRVisionObjectDetectorOptions; // inherited from NSObject

	detectorMode: FIRVisionObjectDetectorMode;

	shouldEnableClassification: boolean;

	shouldEnableMultipleObjects: boolean;
}
