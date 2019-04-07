
declare const enum FIRModelElementType {

	Unknown = 0,

	Float32 = 1,

	Int32 = 2,

	UInt8 = 3,

	Int64 = 4
}

declare class FIRModelInputOutputOptions extends NSObject {

	static alloc(): FIRModelInputOutputOptions; // inherited from NSObject

	static new(): FIRModelInputOutputOptions; // inherited from NSObject

	setInputFormatForIndexTypeDimensionsError(index: number, type: FIRModelElementType, dimensions: NSArray<number> | number[]): boolean;

	setOutputFormatForIndexTypeDimensionsError(index: number, type: FIRModelElementType, dimensions: NSArray<number> | number[]): boolean;
}

declare class FIRModelInputs extends NSObject {

	static alloc(): FIRModelInputs; // inherited from NSObject

	static new(): FIRModelInputs; // inherited from NSObject

	addInputError(input: any): boolean;
}

declare class FIRModelInterpreter extends NSObject {

	static alloc(): FIRModelInterpreter; // inherited from NSObject

	static modelInterpreterWithOptions(options: FIRModelOptions): FIRModelInterpreter;

	static new(): FIRModelInterpreter; // inherited from NSObject

	statsCollectionEnabled: boolean;

	inputIndexForOpCompletion(opName: string, completion: (p1: number, p2: NSError) => void): void;

	outputIndexForOpCompletion(opName: string, completion: (p1: number, p2: NSError) => void): void;

	runWithInputsOptionsCompletion(inputs: FIRModelInputs, options: FIRModelInputOutputOptions, completion: (p1: FIRModelOutputs, p2: NSError) => void): void;
}

declare class FIRModelOptions extends NSObject {

	static alloc(): FIRModelOptions; // inherited from NSObject

	static new(): FIRModelOptions; // inherited from NSObject

	readonly localModelName: string;

	readonly remoteModelName: string;

	constructor(o: { remoteModelName: string; localModelName: string; });

	initWithRemoteModelNameLocalModelName(remoteModelName: string, localModelName: string): this;
}

declare class FIRModelOutputs extends NSObject {

	static alloc(): FIRModelOutputs; // inherited from NSObject

	static new(): FIRModelOutputs; // inherited from NSObject

	outputAtIndexError(index: number): any;
}
