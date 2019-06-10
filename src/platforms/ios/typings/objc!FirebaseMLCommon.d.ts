
declare class FIRLocalModel extends NSObject {

	static alloc(): FIRLocalModel; // inherited from NSObject

	static new(): FIRLocalModel; // inherited from NSObject

	readonly name: string;

	readonly path: string;

	constructor(o: { name: string; path: string; });

	initWithNamePath(name: string, path: string): this;
}

declare class FIRModelDownloadConditions extends NSObject implements NSCopying {

	static alloc(): FIRModelDownloadConditions; // inherited from NSObject

	static new(): FIRModelDownloadConditions; // inherited from NSObject

	readonly allowsBackgroundDownloading: boolean;

	readonly allowsCellularAccess: boolean;

	constructor(o: { allowsCellularAccess: boolean; allowsBackgroundDownloading: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAllowsCellularAccessAllowsBackgroundDownloading(allowsCellularAccess: boolean, allowsBackgroundDownloading: boolean): this;
}

declare var FIRModelDownloadDidFailNotification: string;

declare var FIRModelDownloadDidSucceedNotification: string;

declare var FIRModelDownloadUserInfoKeyError: string;

declare var FIRModelDownloadUserInfoKeyRemoteModel: string;

declare class FIRModelManager extends NSObject {

	static alloc(): FIRModelManager; // inherited from NSObject

	static modelManager(): FIRModelManager;

	static new(): FIRModelManager; // inherited from NSObject

	downloadRemoteModel(remoteModel: FIRRemoteModel): NSProgress;

	isRemoteModelDownloaded(remoteModel: FIRRemoteModel): boolean;

	localModelWithName(name: string): FIRLocalModel;

	registerLocalModel(localModel: FIRLocalModel): boolean;

	registerRemoteModel(remoteModel: FIRRemoteModel): boolean;

	remoteModelWithName(name: string): FIRRemoteModel;
}

declare class FIRRemoteModel extends NSObject {

	static alloc(): FIRRemoteModel; // inherited from NSObject

	static new(): FIRRemoteModel; // inherited from NSObject

	readonly allowsModelUpdates: boolean;

	readonly initialConditions: FIRModelDownloadConditions;

	readonly name: string;

	readonly updateConditions: FIRModelDownloadConditions;

	constructor(o: { name: string; allowsModelUpdates: boolean; initialConditions: FIRModelDownloadConditions; updateConditions: FIRModelDownloadConditions; });

	initWithNameAllowsModelUpdatesInitialConditionsUpdateConditions(name: string, allowsModelUpdates: boolean, initialConditions: FIRModelDownloadConditions, updateConditions: FIRModelDownloadConditions): this;
}
