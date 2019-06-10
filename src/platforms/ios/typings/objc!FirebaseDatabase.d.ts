
declare const enum FIRDataEventType {

	ChildAdded = 0,

	ChildRemoved = 1,

	ChildChanged = 2,

	ChildMoved = 3,

	Value = 4
}

declare class FIRDataSnapshot extends NSObject {

	static alloc(): FIRDataSnapshot; // inherited from NSObject

	static new(): FIRDataSnapshot; // inherited from NSObject

	readonly children: NSEnumerator<FIRDataSnapshot>;

	readonly childrenCount: number;

	readonly key: string;

	readonly priority: any;

	readonly ref: FIRDatabaseReference;

	readonly value: any;

	childSnapshotForPath(childPathString: string): FIRDataSnapshot;

	exists(): boolean;

	hasChild(childPathString: string): boolean;

	hasChildren(): boolean;

	valueInExportFormat(): any;
}

declare class FIRDatabase extends NSObject {

	static alloc(): FIRDatabase; // inherited from NSObject

	static database(): FIRDatabase;

	static databaseForApp(app: FIRApp): FIRDatabase;

	static databaseForAppURL(app: FIRApp, url: string): FIRDatabase;

	static databaseWithURL(url: string): FIRDatabase;

	static new(): FIRDatabase; // inherited from NSObject

	static sdkVersion(): string;

	static setLoggingEnabled(enabled: boolean): void;

	readonly app: FIRApp;

	callbackQueue: NSObject;

	persistenceCacheSizeBytes: number;

	persistenceEnabled: boolean;

	goOffline(): void;

	goOnline(): void;

	purgeOutstandingWrites(): void;

	reference(): FIRDatabaseReference;

	referenceFromURL(databaseUrl: string): FIRDatabaseReference;

	referenceWithPath(path: string): FIRDatabaseReference;
}

declare class FIRDatabaseQuery extends NSObject {

	static alloc(): FIRDatabaseQuery; // inherited from NSObject

	static new(): FIRDatabaseQuery; // inherited from NSObject

	readonly ref: FIRDatabaseReference;

	keepSynced(keepSynced: boolean): void;

	observeEventTypeAndPreviousSiblingKeyWithBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot, p2: string) => void): number;

	observeEventTypeAndPreviousSiblingKeyWithBlockWithCancelBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot, p2: string) => void, cancelBlock: (p1: NSError) => void): number;

	observeEventTypeWithBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot) => void): number;

	observeEventTypeWithBlockWithCancelBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot) => void, cancelBlock: (p1: NSError) => void): number;

	observeSingleEventOfTypeAndPreviousSiblingKeyWithBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot, p2: string) => void): void;

	observeSingleEventOfTypeAndPreviousSiblingKeyWithBlockWithCancelBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot, p2: string) => void, cancelBlock: (p1: NSError) => void): void;

	observeSingleEventOfTypeWithBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot) => void): void;

	observeSingleEventOfTypeWithBlockWithCancelBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot) => void, cancelBlock: (p1: NSError) => void): void;

	queryEndingAtValue(endValue: any): FIRDatabaseQuery;

	queryEndingAtValueChildKey(endValue: any, childKey: string): FIRDatabaseQuery;

	queryEqualToValue(value: any): FIRDatabaseQuery;

	queryEqualToValueChildKey(value: any, childKey: string): FIRDatabaseQuery;

	queryLimitedToFirst(limit: number): FIRDatabaseQuery;

	queryLimitedToLast(limit: number): FIRDatabaseQuery;

	queryOrderedByChild(key: string): FIRDatabaseQuery;

	queryOrderedByKey(): FIRDatabaseQuery;

	queryOrderedByPriority(): FIRDatabaseQuery;

	queryOrderedByValue(): FIRDatabaseQuery;

	queryStartingAtValue(startValue: any): FIRDatabaseQuery;

	queryStartingAtValueChildKey(startValue: any, childKey: string): FIRDatabaseQuery;

	removeAllObservers(): void;

	removeObserverWithHandle(handle: number): void;
}

declare class FIRDatabaseReference extends FIRDatabaseQuery {

	static alloc(): FIRDatabaseReference; // inherited from NSObject

	static goOffline(): void;

	static goOnline(): void;

	static new(): FIRDatabaseReference; // inherited from NSObject

	readonly URL: string;

	readonly database: FIRDatabase;

	readonly key: string;

	readonly parent: FIRDatabaseReference;

	readonly root: FIRDatabaseReference;

	cancelDisconnectOperations(): void;

	cancelDisconnectOperationsWithCompletionBlock(block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	child(pathString: string): FIRDatabaseReference;

	childByAutoId(): FIRDatabaseReference;

	description(): string;

	onDisconnectRemoveValue(): void;

	onDisconnectRemoveValueWithCompletionBlock(block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	onDisconnectSetValue(value: any): void;

	onDisconnectSetValueAndPriority(value: any, priority: any): void;

	onDisconnectSetValueAndPriorityWithCompletionBlock(value: any, priority: any, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	onDisconnectSetValueWithCompletionBlock(value: any, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	onDisconnectUpdateChildValues(values: NSDictionary<any, any>): void;

	onDisconnectUpdateChildValuesWithCompletionBlock(values: NSDictionary<any, any>, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	removeValue(): void;

	removeValueWithCompletionBlock(block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	runTransactionBlock(block: (p1: FIRMutableData) => FIRTransactionResult): void;

	runTransactionBlockAndCompletionBlock(block: (p1: FIRMutableData) => FIRTransactionResult, completionBlock: (p1: NSError, p2: boolean, p3: FIRDataSnapshot) => void): void;

	runTransactionBlockAndCompletionBlockWithLocalEvents(block: (p1: FIRMutableData) => FIRTransactionResult, completionBlock: (p1: NSError, p2: boolean, p3: FIRDataSnapshot) => void, localEvents: boolean): void;

	setPriority(priority: any): void;

	setPriorityWithCompletionBlock(priority: any, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	setValue(value: any): void;

	setValueAndPriority(value: any, priority: any): void;

	setValueAndPriorityWithCompletionBlock(value: any, priority: any, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	setValueWithCompletionBlock(value: any, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;

	updateChildValues(values: NSDictionary<any, any>): void;

	updateChildValuesWithCompletionBlock(values: NSDictionary<any, any>, block: (p1: NSError, p2: FIRDatabaseReference) => void): void;
}

declare class FIRMutableData extends NSObject {

	static alloc(): FIRMutableData; // inherited from NSObject

	static new(): FIRMutableData; // inherited from NSObject

	readonly children: NSEnumerator<FIRMutableData>;

	readonly childrenCount: number;

	readonly key: string;

	priority: any;

	value: any;

	childDataByAppendingPath(path: string): FIRMutableData;

	hasChildAtPath(path: string): boolean;

	hasChildren(): boolean;
}

declare class FIRServerValue extends NSObject {

	static alloc(): FIRServerValue; // inherited from NSObject

	static new(): FIRServerValue; // inherited from NSObject

	static timestamp(): NSDictionary<any, any>;
}

declare class FIRTransactionResult extends NSObject {

	static abort(): FIRTransactionResult;

	static alloc(): FIRTransactionResult; // inherited from NSObject

	static new(): FIRTransactionResult; // inherited from NSObject

	static successWithValue(value: FIRMutableData): FIRTransactionResult;
}

declare var FirebaseDatabaseVersionNumber: number;

declare var FirebaseDatabaseVersionString: interop.Reference<number>;
