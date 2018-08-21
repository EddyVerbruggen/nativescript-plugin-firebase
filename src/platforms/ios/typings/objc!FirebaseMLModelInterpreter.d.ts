
declare class FIRCloudModelSource extends NSObject {

	static alloc(): FIRCloudModelSource; // inherited from NSObject

	static new(): FIRCloudModelSource; // inherited from NSObject

	readonly enableModelUpdates: boolean;

	readonly initialConditions: FIRModelDownloadConditions;

	readonly modelName: string;

	readonly updateConditions: FIRModelDownloadConditions;

	constructor(o: { modelName: string; enableModelUpdates: boolean; initialConditions: FIRModelDownloadConditions; updateConditions: FIRModelDownloadConditions; });

	initWithModelNameEnableModelUpdatesInitialConditionsUpdateConditions(modelName: string, enableModelUpdates: boolean, initialConditions: FIRModelDownloadConditions, updateConditions: FIRModelDownloadConditions): this;
}

declare class FIRLocalModelSource extends NSObject {

	static alloc(): FIRLocalModelSource; // inherited from NSObject

	static new(): FIRLocalModelSource; // inherited from NSObject

	readonly modelName: string;

	readonly path: string;

	constructor(o: { modelName: string; path: string; });

	initWithModelNamePath(modelName: string, path: string): this;
}

declare class FIRModelDownloadConditions extends NSObject implements NSCopying {

	static alloc(): FIRModelDownloadConditions; // inherited from NSObject

	static new(): FIRModelDownloadConditions; // inherited from NSObject

	readonly isIdleRequired: boolean;

	readonly isWiFiRequired: boolean;

	constructor(o: { wiFiRequired: boolean; idleRequired: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithIsWiFiRequiredCanDownloadInBackground(isWiFiRequired: boolean, canDownloadInBackground: boolean): this;
}

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

	setInputFormatForIndexTypeDimensionsError(index: number, type: FIRModelElementType, dimensions: NSArray<number>): boolean;

	setOutputFormatForIndexTypeDimensionsError(index: number, type: FIRModelElementType, dimensions: NSArray<number>): boolean;
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

	inputIndexForOpCompletion(opName: string, completion: (p1: number, p2: NSError) => void): void;

	outputIndexForOpCompletion(opName: string, completion: (p1: number, p2: NSError) => void): void;

	runWithInputsOptionsCompletion(inputs: FIRModelInputs, options: FIRModelInputOutputOptions, completion: (p1: FIRModelOutputs, p2: NSError) => void): void;
}

declare class FIRModelManager extends NSObject {

	static alloc(): FIRModelManager; // inherited from NSObject

	static modelManager(): FIRModelManager;

	static new(): FIRModelManager; // inherited from NSObject

	cloudModelSourceForModelName(modelName: string): FIRCloudModelSource;

	localModelSourceForModelName(modelName: string): FIRLocalModelSource;

	registerCloudModelSource(cloudModelSource: FIRCloudModelSource): boolean;

	registerLocalModelSource(localModelSource: FIRLocalModelSource): boolean;
}

declare class FIRModelOptions extends NSObject {

	static alloc(): FIRModelOptions; // inherited from NSObject

	static new(): FIRModelOptions; // inherited from NSObject

	readonly cloudModelName: string;

	readonly localModelName: string;

	constructor(o: { cloudModelName: string; localModelName: string; });

	initWithCloudModelNameLocalModelName(cloudModelName: string, localModelName: string): this;
}

declare class FIRModelOutputs extends NSObject {

	static alloc(): FIRModelOutputs; // inherited from NSObject

	static new(): FIRModelOutputs; // inherited from NSObject

	outputAtIndexError(index: number): any;
}
