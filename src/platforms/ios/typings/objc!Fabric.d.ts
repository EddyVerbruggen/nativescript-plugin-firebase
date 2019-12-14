
declare class Fabric extends NSObject {

	static alloc(): Fabric; // inherited from NSObject

	static new(): Fabric; // inherited from NSObject

	static sharedSDK(): Fabric;

	static with(kitClasses: NSArray<any> | any[]): Fabric;

	debug: boolean;
}
