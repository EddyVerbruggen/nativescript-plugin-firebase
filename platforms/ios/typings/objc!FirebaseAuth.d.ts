
declare class FIRActionCodeInfo extends NSObject {

	static alloc(): FIRActionCodeInfo; // inherited from NSObject

	static new(): FIRActionCodeInfo; // inherited from NSObject

	readonly operation: FIRActionCodeOperation;

	dataForKey(key: FIRActionDataKey): string;
}

declare const enum FIRActionCodeOperation {

	Unknown = 0,

	PasswordReset = 1,

	VerifyEmail = 2
}

declare const enum FIRActionDataKey {

	CodeEmailKey = 0,

	CodeFromEmailKey = 1
}

declare class FIRAuth extends NSObject {

	static alloc(): FIRAuth; // inherited from NSObject

	static auth(): FIRAuth;

	static authWithApp(app: FIRApp): FIRAuth;

	static new(): FIRAuth; // inherited from NSObject

	readonly app: FIRApp;

	readonly currentUser: FIRUser;

	addAuthStateDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	applyActionCodeCompletion(code: string, completion: (p1: NSError) => void): void;

	checkActionCodeCompletion(code: string, completion: (p1: FIRActionCodeInfo, p2: NSError) => void): void;

	confirmPasswordResetWithCodeNewPasswordCompletion(code: string, newPassword: string, completion: (p1: NSError) => void): void;

	createUserWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	fetchProvidersForEmailCompletion(email: string, completion: (p1: NSArray<string>, p2: NSError) => void): void;

	removeAuthStateDidChangeListener(listenerHandle: NSObjectProtocol): void;

	sendPasswordResetWithEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	signInAnonymouslyWithCompletion(completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithCustomTokenCompletion(token: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	signOut(): boolean;

	verifyPasswordResetCodeCompletion(code: string, completion: (p1: string, p2: NSError) => void): void;
}

declare class FIRAuthCredential extends NSObject {

	static alloc(): FIRAuthCredential; // inherited from NSObject

	static new(): FIRAuthCredential; // inherited from NSObject

	readonly provider: string;
}

declare const enum FIRAuthErrorCode {

	ErrorCodeInvalidCustomToken = 17000,

	ErrorCodeCustomTokenMismatch = 17002,

	ErrorCodeInvalidCredential = 17004,

	ErrorCodeUserDisabled = 17005,

	ErrorCodeOperationNotAllowed = 17006,

	ErrorCodeEmailAlreadyInUse = 17007,

	ErrorCodeInvalidEmail = 17008,

	ErrorCodeWrongPassword = 17009,

	ErrorCodeTooManyRequests = 17010,

	ErrorCodeUserNotFound = 17011,

	ErrorCodeAccountExistsWithDifferentCredential = 17012,

	ErrrorCodeAccountExistsWithDifferentCredential = 17012,

	ErrorCodeRequiresRecentLogin = 17014,

	ErrorCodeProviderAlreadyLinked = 17015,

	ErrorCodeNoSuchProvider = 17016,

	ErrorCodeInvalidUserToken = 17017,

	ErrorCodeNetworkError = 17020,

	ErrorCodeUserTokenExpired = 17021,

	ErrorCodeInvalidAPIKey = 17023,

	ErrorCodeUserMismatch = 17024,

	ErrorCodeCredentialAlreadyInUse = 17025,

	ErrorCodeWeakPassword = 17026,

	ErrorCodeAppNotAuthorized = 17028,

	ErrorCodeExpiredActionCode = 17029,

	ErrorCodeInvalidActionCode = 17030,

	ErrorCodeInvalidMessagePayload = 17031,

	ErrorCodeInvalidSender = 17032,

	ErrorCodeInvalidRecipientEmail = 17033,

	ErrorCodeKeychainError = 17995,

	ErrorCodeInternalError = 17999
}

declare var FIRAuthErrorDomain: string;

declare var FIRAuthErrorNameKey: string;

declare class FIRAuthErrors {
}

declare var FIRAuthStateDidChangeNotification: string;

declare class FIREmailPasswordAuthProvider extends NSObject {

	static alloc(): FIREmailPasswordAuthProvider; // inherited from NSObject

	static credentialWithEmailPassword(email: string, password: string): FIRAuthCredential;

	static new(): FIREmailPasswordAuthProvider; // inherited from NSObject
}

declare var FIREmailPasswordAuthProviderID: string;

declare class FIRFacebookAuthProvider extends NSObject {

	static alloc(): FIRFacebookAuthProvider; // inherited from NSObject

	static credentialWithAccessToken(accessToken: string): FIRAuthCredential;

	static new(): FIRFacebookAuthProvider; // inherited from NSObject
}

declare var FIRFacebookAuthProviderID: string;

declare class FIRGitHubAuthProvider extends NSObject {

	static alloc(): FIRGitHubAuthProvider; // inherited from NSObject

	static credentialWithToken(token: string): FIRAuthCredential;

	static new(): FIRGitHubAuthProvider; // inherited from NSObject
}

declare var FIRGitHubAuthProviderID: string;

declare class FIRGoogleAuthProvider extends NSObject {

	static alloc(): FIRGoogleAuthProvider; // inherited from NSObject

	static credentialWithIDTokenAccessToken(IDToken: string, accessToken: string): FIRAuthCredential;

	static new(): FIRGoogleAuthProvider; // inherited from NSObject
}

declare var FIRGoogleAuthProviderID: string;

declare class FIRTwitterAuthProvider extends NSObject {

	static alloc(): FIRTwitterAuthProvider; // inherited from NSObject

	static credentialWithTokenSecret(token: string, secret: string): FIRAuthCredential;

	static new(): FIRTwitterAuthProvider; // inherited from NSObject
}

declare var FIRTwitterAuthProviderID: string;

declare class FIRUser extends NSObject implements FIRUserInfo {

	static alloc(): FIRUser; // inherited from NSObject

	static new(): FIRUser; // inherited from NSObject

	readonly anonymous: boolean;

	readonly emailVerified: boolean;

	readonly providerData: NSArray<FIRUserInfo>;

	readonly refreshToken: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly displayName: string; // inherited from FIRUserInfo

	readonly email: string; // inherited from FIRUserInfo

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly photoURL: NSURL; // inherited from FIRUserInfo

	readonly providerID: string; // inherited from FIRUserInfo

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly uid: string; // inherited from FIRUserInfo

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	getTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: string, p2: NSError) => void): void;

	getTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	linkWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRUser, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	profileChangeRequest(): FIRUserProfileChangeRequest;

	reauthenticateWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: NSError) => void): void;

	reloadWithCompletion(completion: (p1: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendEmailVerificationWithCompletion(completion: (p1: NSError) => void): void;

	unlinkFromProviderCompletion(provider: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	updateEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	updatePasswordCompletion(password: string, completion: (p1: NSError) => void): void;
}

interface FIRUserInfo extends NSObjectProtocol {

	displayName: string;

	email: string;

	photoURL: NSURL;

	providerID: string;

	uid: string;
}
declare var FIRUserInfo: {

	prototype: FIRUserInfo;
};

declare class FIRUserProfileChangeRequest extends NSObject {

	static alloc(): FIRUserProfileChangeRequest; // inherited from NSObject

	static new(): FIRUserProfileChangeRequest; // inherited from NSObject

	displayName: string;

	photoURL: NSURL;

	commitChangesWithCompletion(completion: (p1: NSError) => void): void;
}

declare var FirebaseAuthVersionNumber: number;

declare var FirebaseAuthVersionString: string;
