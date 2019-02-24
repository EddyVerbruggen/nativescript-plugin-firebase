
declare class FIRCloudModelSource extends NSObject {

	static alloc(): FIRCloudModelSource; // inherited from NSObject

	static new(): FIRCloudModelSource; // inherited from NSObject

	readonly enableModelUpdates: boolean;

	readonly initialConditions: FIRModelDownloadConditions;

	readonly name: string;

	readonly updateConditions: FIRModelDownloadConditions;

	constructor(o: { name: string; enableModelUpdates: boolean; initialConditions: FIRModelDownloadConditions; updateConditions: FIRModelDownloadConditions; });

	initWithNameEnableModelUpdatesInitialConditionsUpdateConditions(name: string, enableModelUpdates: boolean, initialConditions: FIRModelDownloadConditions, updateConditions: FIRModelDownloadConditions): this;
}

declare class FIRLocalModelSource extends NSObject {

	static alloc(): FIRLocalModelSource; // inherited from NSObject

	static new(): FIRLocalModelSource; // inherited from NSObject

	readonly name: string;

	readonly path: string;

	constructor(o: { name: string; path: string; });

	initWithNamePath(name: string, path: string): this;
}

declare class FIRModelDownloadConditions extends NSObject implements NSCopying {

	static alloc(): FIRModelDownloadConditions; // inherited from NSObject

	static new(): FIRModelDownloadConditions; // inherited from NSObject

	readonly canDownloadInBackground: boolean;

	readonly isWiFiRequired: boolean;

	constructor(o: { isWiFiRequired: boolean; canDownloadInBackground: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithIsWiFiRequiredCanDownloadInBackground(isWiFiRequired: boolean, canDownloadInBackground: boolean): this;
}

declare class FIRModelManager extends NSObject {

	static alloc(): FIRModelManager; // inherited from NSObject

	static modelManager(): FIRModelManager;

	static new(): FIRModelManager; // inherited from NSObject

	cloudModelSourceForModelName(name: string): FIRCloudModelSource;

	localModelSourceForModelName(name: string): FIRLocalModelSource;

	registerCloudModelSource(cloudModelSource: FIRCloudModelSource): boolean;

	registerLocalModelSource(localModelSource: FIRLocalModelSource): boolean;
}
