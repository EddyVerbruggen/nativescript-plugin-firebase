
declare var FIRInstallationIDDidChangeNotification: string;

declare class FIRInstallations extends NSObject {

	static alloc(): FIRInstallations; // inherited from NSObject

	static installations(): FIRInstallations;

	static installationsWithApp(application: FIRApp): FIRInstallations;

	static new(): FIRInstallations; // inherited from NSObject

	authTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: FIRInstallationsAuthTokenResult, p2: NSError) => void): void;

	authTokenWithCompletion(completion: (p1: FIRInstallationsAuthTokenResult, p2: NSError) => void): void;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	installationIDWithCompletion(completion: (p1: string, p2: NSError) => void): void;
}

declare class FIRInstallationsAuthTokenResult extends NSObject {

	static alloc(): FIRInstallationsAuthTokenResult; // inherited from NSObject

	static new(): FIRInstallationsAuthTokenResult; // inherited from NSObject

	readonly authToken: string;

	readonly expirationDate: Date;
}

declare const enum FIRInstallationsErrorCode {

	Unknown = 0,

	Keychain = 1,

	ServerUnreachable = 2,

	InvalidConfiguration = 3
}

declare var FIRInstallationsVersionStr: string;

declare var FirebaseInstallationsVersionNumber: number;

declare var FirebaseInstallationsVersionString: interop.Reference<number>;

declare var kFIRInstallationIDDidChangeNotificationAppNameKey: string;

declare var kFirebaseInstallationsErrorDomain: string;
