
declare class FIRLocalModel extends NSObject {

	static alloc(): FIRLocalModel; // inherited from NSObject

	static new(): FIRLocalModel; // inherited from NSObject

	readonly path: string;
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

	static modelManagerForApp(app: FIRApp): FIRModelManager;

	static new(): FIRModelManager; // inherited from NSObject

	readonly downloadedTranslateModels: NSSet<FIRTranslateRemoteModel>;

	deleteDownloadedModelCompletion(remoteModel: FIRRemoteModel, completion: (p1: NSError) => void): void;

	downloadModelConditions(remoteModel: FIRRemoteModel, conditions: FIRModelDownloadConditions): NSProgress;

	isModelDownloaded(remoteModel: FIRRemoteModel): boolean;
}

declare class FIRRemoteModel extends NSObject {

	static alloc(): FIRRemoteModel; // inherited from NSObject

	static new(): FIRRemoteModel; // inherited from NSObject

	readonly name: string;
}
