
declare class GIDAuthentication extends NSObject implements NSSecureCoding {

	static alloc(): GIDAuthentication; // inherited from NSObject

	static new(): GIDAuthentication; // inherited from NSObject

	readonly accessToken: string;

	readonly accessTokenExpirationDate: Date;

	readonly clientID: string;

	readonly idToken: string;

	readonly idTokenExpirationDate: Date;

	readonly refreshToken: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	fetcherAuthorizer(): GTMFetcherAuthorizationProtocol;

	getTokensWithHandler(handler: (p1: GIDAuthentication, p2: NSError) => void): void;

	initWithCoder(coder: NSCoder): this;

	refreshTokensWithHandler(handler: (p1: GIDAuthentication, p2: NSError) => void): void;
}

declare class GIDGoogleUser extends NSObject implements NSSecureCoding {

	static alloc(): GIDGoogleUser; // inherited from NSObject

	static new(): GIDGoogleUser; // inherited from NSObject

	readonly authentication: GIDAuthentication;

	readonly grantedScopes: NSArray<any>;

	readonly hostedDomain: string;

	readonly profile: GIDProfileData;

	readonly serverAuthCode: string;

	readonly userID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GIDProfileData extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GIDProfileData; // inherited from NSObject

	static new(): GIDProfileData; // inherited from NSObject

	readonly email: string;

	readonly familyName: string;

	readonly givenName: string;

	readonly hasImage: boolean;

	readonly name: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	imageURLWithDimension(dimension: number): NSURL;

	initWithCoder(coder: NSCoder): this;
}

declare class GIDSignIn extends NSObject {

	static alloc(): GIDSignIn; // inherited from NSObject

	static new(): GIDSignIn; // inherited from NSObject

	static sharedInstance(): GIDSignIn;

	clientID: string;

	readonly currentUser: GIDGoogleUser;

	delegate: GIDSignInDelegate;

	hostedDomain: string;

	language: string;

	loginHint: string;

	openIDRealm: string;

	presentingViewController: UIViewController;

	scopes: NSArray<any>;

	serverClientID: string;

	shouldFetchBasicProfile: boolean;

	disconnect(): void;

	handleURL(url: NSURL): boolean;

	hasPreviousSignIn(): boolean;

	restorePreviousSignIn(): void;

	signIn(): void;

	signOut(): void;
}

declare class GIDSignInButton extends UIControl {

	static alloc(): GIDSignInButton; // inherited from NSObject

	static appearance(): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GIDSignInButton; // inherited from UIAppearance

	static new(): GIDSignInButton; // inherited from NSObject

	colorScheme: GIDSignInButtonColorScheme;

	style: GIDSignInButtonStyle;
}

declare const enum GIDSignInButtonColorScheme {

	kGIDSignInButtonColorSchemeDark = 0,

	kGIDSignInButtonColorSchemeLight = 1
}

declare const enum GIDSignInButtonStyle {

	kGIDSignInButtonStyleStandard = 0,

	kGIDSignInButtonStyleWide = 1,

	kGIDSignInButtonStyleIconOnly = 2
}

interface GIDSignInDelegate extends NSObjectProtocol {

	signInDidDisconnectWithUserWithError?(signIn: GIDSignIn, user: GIDGoogleUser, error: NSError): void;

	signInDidSignInForUserWithError(signIn: GIDSignIn, user: GIDGoogleUser, error: NSError): void;
}
declare var GIDSignInDelegate: {

	prototype: GIDSignInDelegate;
};

declare const enum GIDSignInErrorCode {

	kGIDSignInErrorCodeUnknown = -1,

	kGIDSignInErrorCodeKeychain = -2,

	kGIDSignInErrorCodeHasNoAuthInKeychain = -4,

	kGIDSignInErrorCodeCanceled = -5,

	kGIDSignInErrorCodeEMM = -6
}

declare var kGIDSignInErrorDomain: string;
