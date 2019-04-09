
declare class FIRFunctions extends NSObject {

	static alloc(): FIRFunctions; // inherited from NSObject

	static functions(): FIRFunctions;

	static functionsForApp(app: FIRApp): FIRFunctions;

	static functionsForAppRegion(app: FIRApp, region: string): FIRFunctions;

	static functionsForRegion(region: string): FIRFunctions;

	static new(): FIRFunctions; // inherited from NSObject

	HTTPSCallableWithName(name: string): FIRHTTPSCallable;

	useFunctionsEmulatorOrigin(origin: string): void;
}

declare const enum FIRFunctionsErrorCode {

	OK = 0,

	Cancelled = 1,

	Unknown = 2,

	InvalidArgument = 3,

	DeadlineExceeded = 4,

	NotFound = 5,

	AlreadyExists = 6,

	PermissionDenied = 7,

	ResourceExhausted = 8,

	FailedPrecondition = 9,

	Aborted = 10,

	OutOfRange = 11,

	Unimplemented = 12,

	Internal = 13,

	Unavailable = 14,

	DataLoss = 15,

	Unauthenticated = 16
}

declare var FIRFunctionsErrorDetailsKey: string;

declare var FIRFunctionsErrorDomain: string;

declare class FIRHTTPSCallable extends NSObject {

	static alloc(): FIRHTTPSCallable; // inherited from NSObject

	static new(): FIRHTTPSCallable; // inherited from NSObject

	timeoutInterval: number;

	callWithCompletion(completion: (p1: FIRHTTPSCallableResult, p2: NSError) => void): void;

	callWithObjectCompletion(data: any, completion: (p1: FIRHTTPSCallableResult, p2: NSError) => void): void;
}

declare class FIRHTTPSCallableResult extends NSObject {

	static alloc(): FIRHTTPSCallableResult; // inherited from NSObject

	static new(): FIRHTTPSCallableResult; // inherited from NSObject

	readonly data: any;
}

declare var FirebaseFunctionsVersionNumber: number;

declare var FirebaseFunctionsVersionString: interop.Reference<number>;
