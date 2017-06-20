
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

declare class FIRAdditionalUserInfo extends NSObject {

	static alloc(): FIRAdditionalUserInfo; // inherited from NSObject

	static new(): FIRAdditionalUserInfo; // inherited from NSObject

	readonly newUser: boolean;

	readonly profile: NSDictionary<string, NSObject>;

	readonly providerID: string;

	readonly username: string;
}

declare class FIRAuth extends NSObject {

	static alloc(): FIRAuth; // inherited from NSObject

	static auth(): FIRAuth;

	static authWithApp(app: FIRApp): FIRAuth;

	static new(): FIRAuth; // inherited from NSObject

	APNSToken: NSData;

	readonly app: FIRApp;

	readonly currentUser: FIRUser;

	addAuthStateDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	addIDTokenDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	applyActionCodeCompletion(code: string, completion: (p1: NSError) => void): void;

	canHandleNotification(userInfo: NSDictionary<any, any>): boolean;

	checkActionCodeCompletion(code: string, completion: (p1: FIRActionCodeInfo, p2: NSError) => void): void;

	confirmPasswordResetWithCodeNewPasswordCompletion(code: string, newPassword: string, completion: (p1: NSError) => void): void;

	createUserWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	fetchProvidersForEmailCompletion(email: string, completion: (p1: NSArray<string>, p2: NSError) => void): void;

	removeAuthStateDidChangeListener(listenerHandle: NSObjectProtocol): void;

	removeIDTokenDidChangeListener(listenerHandle: NSObjectProtocol): void;

	sendPasswordResetWithEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	setAPNSTokenType(token: NSData, type: FIRAuthAPNSTokenType): void;

	signInAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInAnonymouslyWithCompletion(completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithCustomTokenCompletion(token: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	signInWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	signOut(): boolean;

	verifyPasswordResetCodeCompletion(code: string, completion: (p1: string, p2: NSError) => void): void;
}

declare const enum FIRAuthAPNSTokenType {

	Unknown = 0,

	Sandbox = 1,

	Prod = 2
}

declare class FIRAuthCredential extends NSObject {

	static alloc(): FIRAuthCredential; // inherited from NSObject

	static new(): FIRAuthCredential; // inherited from NSObject

	readonly provider: string;
}

declare class FIRAuthDataResult extends NSObject {

	static alloc(): FIRAuthDataResult; // inherited from NSObject

	static new(): FIRAuthDataResult; // inherited from NSObject

	readonly additionalUserInfo: FIRAdditionalUserInfo;

	readonly user: FIRUser;
}

declare const enum FIRAuthErrorCode {

	InvalidCustomToken = 17000,

	CustomTokenMismatch = 17002,

	InvalidCredential = 17004,

	UserDisabled = 17005,

	OperationNotAllowed = 17006,

	EmailAlreadyInUse = 17007,

	InvalidEmail = 17008,

	WrongPassword = 17009,

	TooManyRequests = 17010,

	UserNotFound = 17011,

	AccountExistsWithDifferentCredential = 17012,

	RequiresRecentLogin = 17014,

	ProviderAlreadyLinked = 17015,

	NoSuchProvider = 17016,

	InvalidUserToken = 17017,

	NetworkError = 17020,

	UserTokenExpired = 17021,

	InvalidAPIKey = 17023,

	UserMismatch = 17024,

	CredentialAlreadyInUse = 17025,

	WeakPassword = 17026,

	AppNotAuthorized = 17028,

	ExpiredActionCode = 17029,

	InvalidActionCode = 17030,

	InvalidMessagePayload = 17031,

	InvalidSender = 17032,

	InvalidRecipientEmail = 17033,

	MissingPhoneNumber = 17041,

	InvalidPhoneNumber = 17042,

	MissingVerificationCode = 17043,

	InvalidVerificationCode = 17044,

	MissingVerificationID = 17045,

	InvalidVerificationID = 17046,

	MissingAppCredential = 17047,

	InvalidAppCredential = 17048,

	SessionExpired = 17051,

	QuotaExceeded = 17052,

	MissingAppToken = 17053,

	NotificationNotForwarded = 17054,

	AppNotVerified = 17055,

	KeychainError = 17995,

	InternalError = 17999
}

declare var FIRAuthErrorDomain: string;

declare var FIRAuthErrorNameKey: string;

declare var FIRAuthErrorUserInfoEmailKey: string;

declare class FIRAuthErrors {
}

declare var FIRAuthStateDidChangeNotification: string;

declare var FIRAuthUpdatedCredentialKey: string;

declare class FIREmailAuthProvider extends NSObject {

	static alloc(): FIREmailAuthProvider; // inherited from NSObject

	static credentialWithEmailPassword(email: string, password: string): FIRAuthCredential;

	static new(): FIREmailAuthProvider; // inherited from NSObject
}

declare var FIREmailAuthProviderID: string;

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

declare class FIROAuthProvider extends NSObject {

	static alloc(): FIROAuthProvider; // inherited from NSObject

	static credentialWithProviderIDAccessToken(providerID: string, accessToken: string): FIRAuthCredential;

	static credentialWithProviderIDIDTokenAccessToken(providerID: string, IDToken: string, accessToken: string): FIRAuthCredential;

	static new(): FIROAuthProvider; // inherited from NSObject
}

declare class FIRPhoneAuthCredential extends FIRAuthCredential {

	static alloc(): FIRPhoneAuthCredential; // inherited from NSObject

	static new(): FIRPhoneAuthCredential; // inherited from NSObject
}

declare class FIRPhoneAuthProvider extends NSObject {

	static alloc(): FIRPhoneAuthProvider; // inherited from NSObject

	static new(): FIRPhoneAuthProvider; // inherited from NSObject

	static provider(): FIRPhoneAuthProvider;

	static providerWithAuth(auth: FIRAuth): FIRPhoneAuthProvider;

	credentialWithVerificationIDVerificationCode(verificationID: string, verificationCode: string): FIRPhoneAuthCredential;

	verifyPhoneNumberCompletion(phoneNumber: string, completion: (p1: string, p2: NSError) => void): void;
}

declare var FIRPhoneAuthProviderID: string;

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

	readonly phoneNumber: string; // inherited from FIRUserInfo

	readonly photoURL: NSURL; // inherited from FIRUserInfo

	readonly providerID: string; // inherited from FIRUserInfo

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly uid: string; // inherited from FIRUserInfo

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	getIDTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: string, p2: NSError) => void): void;

	getIDTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	getTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: string, p2: NSError) => void): void;

	getTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	linkAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	linkWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRUser, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	profileChangeRequest(): FIRUserProfileChangeRequest;

	reauthenticateAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	reauthenticateWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: NSError) => void): void;

	reloadWithCompletion(completion: (p1: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendEmailVerificationWithCompletion(completion: (p1: NSError) => void): void;

	unlinkFromProviderCompletion(provider: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	updateEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	updatePasswordCompletion(password: string, completion: (p1: NSError) => void): void;

	updatePhoneNumberCredentialCompletion(phoneNumberCredential: FIRPhoneAuthCredential, completion: (p1: NSError) => void): void;
}

interface FIRUserInfo extends NSObjectProtocol {

	displayName: string;

	email: string;

	phoneNumber: string;

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
