
declare class FIRIAMDefaultDisplayImpl extends NSObject implements FIRInAppMessagingDisplay {

	static alloc(): FIRIAMDefaultDisplayImpl; // inherited from NSObject

	static new(): FIRIAMDefaultDisplayImpl; // inherited from NSObject

	displayMessageDisplayDelegate(messageForDisplay: FIRInAppMessagingDisplayMessage, displayDelegate: FIRInAppMessagingDisplayDelegate): void;
}

declare var FirebaseInAppMessagingDisplayVersionNumber: number;

declare var FirebaseInAppMessagingDisplayVersionString: interop.Reference<number>;
