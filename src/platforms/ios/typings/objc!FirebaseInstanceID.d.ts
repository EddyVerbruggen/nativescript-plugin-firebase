
declare class FIRInstanceID extends NSObject {

	static alloc(): FIRInstanceID; // inherited from NSObject

	static instanceID(): FIRInstanceID;

	static new(): FIRInstanceID; // inherited from NSObject

	deleteIDWithHandler(handler: (p1: NSError) => void): void;

	deleteTokenWithAuthorizedEntityScopeHandler(authorizedEntity: string, scope: string, handler: (p1: NSError) => void): void;

	getIDWithHandler(handler: (p1: string, p2: NSError) => void): void;

	token(): string;

	tokenWithAuthorizedEntityScopeOptionsHandler(authorizedEntity: string, scope: string, options: NSDictionary<any, any>, handler: (p1: string, p2: NSError) => void): void;
}

declare const enum FIRInstanceIDError {

	Unknown = 0,

	Authentication = 1,

	NoAccess = 2,

	Timeout = 3,

	Network = 4,

	OperationInProgress = 5,

	InvalidRequest = 7
}

declare var kFIRInstanceIDScopeFirebaseMessaging: string;

declare var kFIRInstanceIDTokenRefreshNotification: string;
