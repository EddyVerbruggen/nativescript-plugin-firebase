
declare class FIRCrash extends NSObject {

	static alloc(): FIRCrash; // inherited from NSObject

	static new(): FIRCrash; // inherited from NSObject

	static sharedInstance(): FIRCrash;

	crashCollectionEnabled: boolean;
}
