
declare class FIRAutoMLLocalModel extends FIRLocalModel {

	static alloc(): FIRAutoMLLocalModel; // inherited from NSObject

	static new(): FIRAutoMLLocalModel; // inherited from NSObject

	constructor(o: { manifestPath: string; });

	initWithManifestPath(manifestPath: string): this;
}

declare class FIRAutoMLRemoteModel extends FIRRemoteModel {

	static alloc(): FIRAutoMLRemoteModel; // inherited from NSObject

	static new(): FIRAutoMLRemoteModel; // inherited from NSObject

	constructor(o: { name: string; });

	initWithName(name: string): this;
}

declare class FIRVisionOnDeviceAutoMLImageLabelerOptions extends NSObject {

	static alloc(): FIRVisionOnDeviceAutoMLImageLabelerOptions; // inherited from NSObject

	static new(): FIRVisionOnDeviceAutoMLImageLabelerOptions; // inherited from NSObject

	confidenceThreshold: number;

	constructor(o: { localModel: FIRAutoMLLocalModel; });

	constructor(o: { remoteModel: FIRAutoMLRemoteModel; });

	initWithLocalModel(localModel: FIRAutoMLLocalModel): this;

	initWithRemoteModel(remoteModel: FIRAutoMLRemoteModel): this;
}
