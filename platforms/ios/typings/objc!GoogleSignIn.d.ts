
declare class GIDAuthentication extends NSObject implements NSCoding {

	static alloc(): GIDAuthentication; // inherited from NSObject

	static new(): GIDAuthentication; // inherited from NSObject

	readonly accessToken: string;

	readonly accessTokenExpirationDate: Date;

	readonly clientID: string;

	readonly idToken: string;

	readonly idTokenExpirationDate: Date;

	readonly refreshToken: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	fetcherAuthorizer(): GTMFetcherAuthorizationProtocol;

	getAccessTokenWithHandler(handler: (p1: string, p2: NSError) => void): void;

	getTokensWithHandler(handler: (p1: GIDAuthentication, p2: NSError) => void): void;

	initWithCoder(aDecoder: NSCoder): this;

	refreshAccessTokenWithHandler(handler: (p1: string, p2: NSError) => void): void;

	refreshTokensWithHandler(handler: (p1: GIDAuthentication, p2: NSError) => void): void;
}

declare class GIDGoogleUser extends NSObject implements NSCoding {

	static alloc(): GIDGoogleUser; // inherited from NSObject

	static new(): GIDGoogleUser; // inherited from NSObject

	readonly accessibleScopes: NSArray<any>;

	readonly authentication: GIDAuthentication;

	readonly hostedDomain: string;

	readonly profile: GIDProfileData;

	readonly serverAuthCode: string;

	readonly userID: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class GIDProfileData extends NSObject implements NSCoding {

	static alloc(): GIDProfileData; // inherited from NSObject

	static new(): GIDProfileData; // inherited from NSObject

	readonly email: string;

	readonly familyName: string;

	readonly givenName: string;

	readonly hasImage: boolean;

	readonly name: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	imageURLWithDimension(dimension: number): NSURL;

	initWithCoder(aDecoder: NSCoder): this;
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

	scopes: NSArray<any>;

	serverClientID: string;

	shouldFetchBasicProfile: boolean;

	uiDelegate: GIDSignInUIDelegate;

	disconnect(): void;

	handleURLSourceApplicationAnnotation(url: NSURL, sourceApplication: string, annotation: any): boolean;

	hasAuthInKeychain(): boolean;

	signIn(): void;

	signInSilently(): void;

	signOut(): void;
}

declare class GIDSignInButton extends UIControl {

	static alloc(): GIDSignInButton; // inherited from NSObject

	static appearance(): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GIDSignInButton; // inherited from UIAppearance

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

	kGIDSignInErrorCodeNoSignInHandlersInstalled = -3,

	kGIDSignInErrorCodeHasNoAuthInKeychain = -4,

	kGIDSignInErrorCodeCanceled = -5
}

interface GIDSignInUIDelegate extends NSObjectProtocol {

	signInDismissViewController?(signIn: GIDSignIn, viewController: UIViewController): void;

	signInPresentViewController?(signIn: GIDSignIn, viewController: UIViewController): void;

	signInWillDispatchError?(signIn: GIDSignIn, error: NSError): void;
}
declare var GIDSignInUIDelegate: {

	prototype: GIDSignInUIDelegate;
};

declare var kGIDSignInErrorDomain: string;
