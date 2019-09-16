
declare var FIRActivateExperimentEventName: string;

declare var FIRClearExperimentEventName: string;

declare class FIRExperimentController extends NSObject {

	static alloc(): FIRExperimentController; // inherited from NSObject

	static new(): FIRExperimentController; // inherited from NSObject

	static sharedInstance(): FIRExperimentController;

	latestExperimentStartTimestampBetweenTimestampAndPayloads(timestamp: number, payloads: NSArray<NSData> | NSData[]): number;
}

declare var FIRExpireExperimentEventName: string;

declare class FIRLifecycleEvents extends NSObject {

	static alloc(): FIRLifecycleEvents; // inherited from NSObject

	static new(): FIRLifecycleEvents; // inherited from NSObject

	activateExperimentEventName: string;

	clearExperimentEventName: string;

	expireExperimentEventName: string;

	setExperimentEventName: string;

	timeoutExperimentEventName: string;
}

declare var FIRSetExperimentEventName: string;

declare var FIRTimeoutExperimentEventName: string;

declare var FirebaseABTestingVersionNumber: number;

declare var FirebaseABTestingVersionString: interop.Reference<number>;
