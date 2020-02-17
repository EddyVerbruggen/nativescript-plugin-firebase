
declare class TFLInterpreter extends NSObject {

	static alloc(): TFLInterpreter; // inherited from NSObject

	static new(): TFLInterpreter; // inherited from NSObject

	readonly inputTensorCount: number;

	readonly outputTensorCount: number;

	constructor(o: { modelPath: string; });

	constructor(o: { modelPath: string; options: TFLInterpreterOptions; });

	allocateTensorsWithError(): boolean;

	initWithModelPathError(modelPath: string): this;

	initWithModelPathOptionsError(modelPath: string, options: TFLInterpreterOptions): this;

	inputTensorAtIndexError(index: number): TFLTensor;

	invokeWithError(): boolean;

	outputTensorAtIndexError(index: number): TFLTensor;

	resizeInputTensorAtIndexToShapeError(index: number, shape: NSArray<number> | number[]): boolean;
}

declare const enum TFLInterpreterErrorCode {

	InvalidTensorIndex = 0,

	InvalidInputByteSize = 1,

	InvalidShape = 2,

	FailedToLoadModel = 3,

	FailedToCreateInterpreter = 4,

	FailedToInvoke = 5,

	FailedToGetTensor = 6,

	InvalidTensor = 7,

	FailedToResizeInputTensor = 8,

	FailedToCopyDataToInputTensor = 9,

	CopyDataToOutputTensorNotAllowed = 10,

	FailedToGetDataFromTensor = 11,

	FailedToAllocateTensors = 12,

	AllocateTensorsRequired = 13,

	InvokeInterpreterRequired = 14
}

declare class TFLInterpreterOptions extends NSObject {

	static alloc(): TFLInterpreterOptions; // inherited from NSObject

	static new(): TFLInterpreterOptions; // inherited from NSObject

	numberOfThreads: number;
}

declare class TFLQuantizationParameters extends NSObject {

	static alloc(): TFLQuantizationParameters; // inherited from NSObject

	static new(): TFLQuantizationParameters; // inherited from NSObject

	readonly scale: number;

	readonly zeroPoint: number;
}

declare class TFLTensor extends NSObject {

	static alloc(): TFLTensor; // inherited from NSObject

	static new(): TFLTensor; // inherited from NSObject

	readonly dataType: TFLTensorDataType;

	readonly name: string;

	readonly quantizationParameters: TFLQuantizationParameters;

	copyDataError(data: NSData): boolean;

	dataWithError(): NSData;

	shapeWithError(): NSArray<number>;
}

declare const enum TFLTensorDataType {

	NoType = 0,

	Float32 = 1,

	Float16 = 2,

	Int32 = 3,

	UInt8 = 4,

	Int64 = 5,

	Bool = 6,

	Int16 = 7,

	Int8 = 8
}

declare var TFLVersion: string;
