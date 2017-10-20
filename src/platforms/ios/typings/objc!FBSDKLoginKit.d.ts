
declare const enum FBSDKDefaultAudience {

	Friends = 0,

	OnlyMe = 1,

	Everyone = 2
}

declare const enum FBSDKLoginBehavior {

	Native = 0,

	Browser = 1,

	SystemAccount = 2,

	Web = 3
}

declare class FBSDKLoginButton extends FBSDKButton {

	static alloc(): FBSDKLoginButton; // inherited from NSObject

	static appearance(): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FBSDKLoginButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKLoginButton; // inherited from UIButton

	static new(): FBSDKLoginButton; // inherited from NSObject

	defaultAudience: FBSDKDefaultAudience;

	delegate: FBSDKLoginButtonDelegate;

	loginBehavior: FBSDKLoginBehavior;

	publishPermissions: NSArray<any>;

	readPermissions: NSArray<any>;

	tooltipBehavior: FBSDKLoginButtonTooltipBehavior;

	tooltipColorStyle: FBSDKTooltipColorStyle;
}

interface FBSDKLoginButtonDelegate extends NSObjectProtocol {

	loginButtonDidCompleteWithResultError(loginButton: FBSDKLoginButton, result: FBSDKLoginManagerLoginResult, error: NSError): void;

	loginButtonDidLogOut(loginButton: FBSDKLoginButton): void;

	loginButtonWillLogin?(loginButton: FBSDKLoginButton): boolean;
}
declare var FBSDKLoginButtonDelegate: {

	prototype: FBSDKLoginButtonDelegate;
};

declare const enum FBSDKLoginButtonTooltipBehavior {

	Automatic = 0,

	ForceDisplay = 1,

	Disable = 2
}

declare const enum FBSDKLoginErrorCode {

	ReservedErrorCode = 300,

	UnknownErrorCode = 301,

	PasswordChangedErrorCode = 302,

	UserCheckpointedErrorCode = 303,

	UserMismatchErrorCode = 304,

	UnconfirmedUserErrorCode = 305,

	SystemAccountAppDisabledErrorCode = 306,

	SystemAccountUnavailableErrorCode = 307,

	BadChallengeString = 308
}

declare var FBSDKLoginErrorDomain: string;

declare var FBSDKLoginKitVersionNumber: number;

declare var FBSDKLoginKitVersionString: interop.Reference<number>;

declare class FBSDKLoginManager extends NSObject {

	static alloc(): FBSDKLoginManager; // inherited from NSObject

	static new(): FBSDKLoginManager; // inherited from NSObject

	static renewSystemCredentials(handler: (p1: ACAccountCredentialRenewResult, p2: NSError) => void): void;

	defaultAudience: FBSDKDefaultAudience;

	loginBehavior: FBSDKLoginBehavior;

	logInWithPublishPermissionsFromViewControllerHandler(permissions: NSArray<any>, fromViewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithPublishPermissionsHandler(permissions: NSArray<any>, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithReadPermissionsFromViewControllerHandler(permissions: NSArray<any>, fromViewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithReadPermissionsHandler(permissions: NSArray<any>, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logOut(): void;
}

declare class FBSDKLoginManagerLoginResult extends NSObject {

	static alloc(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	static new(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	declinedPermissions: NSSet<any>;

	grantedPermissions: NSSet<any>;

	readonly isCancelled: boolean;

	token: FBSDKAccessToken;

	constructor(o: { token: FBSDKAccessToken; isCancelled: boolean; grantedPermissions: NSSet<any>; declinedPermissions: NSSet<any>; });

	initWithTokenIsCancelledGrantedPermissionsDeclinedPermissions(token: FBSDKAccessToken, isCancelled: boolean, grantedPermissions: NSSet<any>, declinedPermissions: NSSet<any>): this;
}

declare class FBSDKLoginTooltipView extends FBSDKTooltipView {

	static alloc(): FBSDKLoginTooltipView; // inherited from NSObject

	static appearance(): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FBSDKLoginTooltipView; // inherited from UIAppearance

	static new(): FBSDKLoginTooltipView; // inherited from NSObject

	delegate: FBSDKLoginTooltipViewDelegate;

	forceDisplay: boolean;
}

interface FBSDKLoginTooltipViewDelegate extends NSObjectProtocol {

	loginTooltipViewShouldAppear?(view: FBSDKLoginTooltipView, appIsEligible: boolean): boolean;

	loginTooltipViewWillAppear?(view: FBSDKLoginTooltipView): void;

	loginTooltipViewWillNotAppear?(view: FBSDKLoginTooltipView): void;
}
declare var FBSDKLoginTooltipViewDelegate: {

	prototype: FBSDKLoginTooltipViewDelegate;
};

declare const enum FBSDKTooltipColorStyle {

	FriendlyBlue = 0,

	NeutralGray = 1
}

declare class FBSDKTooltipView extends UIView {

	static alloc(): FBSDKTooltipView; // inherited from NSObject

	static appearance(): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FBSDKTooltipView; // inherited from UIAppearance

	static new(): FBSDKTooltipView; // inherited from NSObject

	colorStyle: FBSDKTooltipColorStyle;

	displayDuration: number;

	message: string;

	tagline: string;

	constructor(o: { tagline: string; message: string; colorStyle: FBSDKTooltipColorStyle; });

	dismiss(): void;

	initWithTaglineMessageColorStyle(tagline: string, message: string, colorStyle: FBSDKTooltipColorStyle): this;

	presentFromView(anchorView: UIView): void;

	presentInViewWithArrowPositionDirection(view: UIView, arrowPosition: CGPoint, arrowDirection: FBSDKTooltipViewArrowDirection): void;
}

declare const enum FBSDKTooltipViewArrowDirection {

	Down = 0,

	Up = 1
}
