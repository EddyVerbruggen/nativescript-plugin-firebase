
declare class FBSDKAccessToken extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKAccessToken; // inherited from NSObject

	static new(): FBSDKAccessToken; // inherited from NSObject

	static refreshCurrentAccessToken(completionHandler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	readonly appID: string;

	readonly dataAccessExpirationDate: Date;

	readonly dataAccessExpired: boolean;

	readonly declinedPermissions: NSSet<string>;

	readonly expirationDate: Date;

	readonly expired: boolean;

	readonly expiredPermissions: NSSet<string>;

	readonly permissions: NSSet<string>;

	readonly refreshDate: Date;

	readonly tokenString: string;

	readonly userID: string;

	static currentAccessToken: FBSDKAccessToken;

	static readonly currentAccessTokenIsActive: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tokenString: string; permissions: NSArray<string> | string[]; declinedPermissions: NSArray<string> | string[]; expiredPermissions: NSArray<string> | string[]; appID: string; userID: string; expirationDate: Date; refreshDate: Date; dataAccessExpirationDate: Date; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	hasGranted(permission: string): boolean;

	initWithCoder(aDecoder: NSCoder): this;

	initWithTokenStringPermissionsDeclinedPermissionsExpiredPermissionsAppIDUserIDExpirationDateRefreshDateDataAccessExpirationDate(tokenString: string, permissions: NSArray<string> | string[], declinedPermissions: NSArray<string> | string[], expiredPermissions: NSArray<string> | string[], appID: string, userID: string, expirationDate: Date, refreshDate: Date, dataAccessExpirationDate: Date): this;

	isEqual(object: any): boolean;

	isEqualToAccessToken(token: FBSDKAccessToken): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var FBSDKAccessTokenChangeNewKey: string;

declare var FBSDKAccessTokenChangeOldKey: string;

declare var FBSDKAccessTokenDidChangeNotification: string;

declare var FBSDKAccessTokenDidChangeUserIDKey: string;

declare var FBSDKAccessTokenDidExpireKey: string;

declare var FBSDKAppEventCity: string;

declare var FBSDKAppEventCountry: string;

declare var FBSDKAppEventDateOfBirth: string;

declare var FBSDKAppEventEmail: string;

declare var FBSDKAppEventFirstName: string;

declare var FBSDKAppEventGender: string;

declare var FBSDKAppEventLastName: string;

declare var FBSDKAppEventNameAchievedLevel: string;

declare var FBSDKAppEventNameAdClick: string;

declare var FBSDKAppEventNameAdImpression: string;

declare var FBSDKAppEventNameAddedPaymentInfo: string;

declare var FBSDKAppEventNameAddedToCart: string;

declare var FBSDKAppEventNameAddedToWishlist: string;

declare var FBSDKAppEventNameCompletedRegistration: string;

declare var FBSDKAppEventNameCompletedTutorial: string;

declare var FBSDKAppEventNameContact: string;

declare var FBSDKAppEventNameCustomizeProduct: string;

declare var FBSDKAppEventNameDonate: string;

declare var FBSDKAppEventNameFindLocation: string;

declare var FBSDKAppEventNameInitiatedCheckout: string;

declare var FBSDKAppEventNamePurchased: string;

declare var FBSDKAppEventNameRated: string;

declare var FBSDKAppEventNameSchedule: string;

declare var FBSDKAppEventNameSearched: string;

declare var FBSDKAppEventNameSpentCredits: string;

declare var FBSDKAppEventNameStartTrial: string;

declare var FBSDKAppEventNameSubmitApplication: string;

declare var FBSDKAppEventNameSubscribe: string;

declare var FBSDKAppEventNameSubscriptionHeartbeat: string;

declare var FBSDKAppEventNameUnlockedAchievement: string;

declare var FBSDKAppEventNameViewedContent: string;

declare var FBSDKAppEventParameterNameAdType: string;

declare var FBSDKAppEventParameterNameContent: string;

declare var FBSDKAppEventParameterNameContentID: string;

declare var FBSDKAppEventParameterNameContentType: string;

declare var FBSDKAppEventParameterNameCurrency: string;

declare var FBSDKAppEventParameterNameDescription: string;

declare var FBSDKAppEventParameterNameLevel: string;

declare var FBSDKAppEventParameterNameMaxRatingValue: string;

declare var FBSDKAppEventParameterNameNumItems: string;

declare var FBSDKAppEventParameterNameOrderID: string;

declare var FBSDKAppEventParameterNamePaymentInfoAvailable: string;

declare var FBSDKAppEventParameterNameRegistrationMethod: string;

declare var FBSDKAppEventParameterNameSearchString: string;

declare var FBSDKAppEventParameterNameSuccess: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidAppName: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidPackage: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIOSAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIOSAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIOSUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIPadAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIPadAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIPadUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneUrl: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneAppID: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneAppName: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneUrl: string;

declare var FBSDKAppEventParameterProductCategory: string;

declare var FBSDKAppEventParameterProductCustomLabel0: string;

declare var FBSDKAppEventParameterProductCustomLabel1: string;

declare var FBSDKAppEventParameterProductCustomLabel2: string;

declare var FBSDKAppEventParameterProductCustomLabel3: string;

declare var FBSDKAppEventParameterProductCustomLabel4: string;

declare var FBSDKAppEventParameterValueNo: string;

declare var FBSDKAppEventParameterValueYes: string;

declare var FBSDKAppEventPhone: string;

declare var FBSDKAppEventState: string;

declare var FBSDKAppEventZip: string;

declare class FBSDKAppEvents extends NSObject {

	static activateApp(): void;

	static alloc(): FBSDKAppEvents; // inherited from NSObject

	static augmentHybridWKWebView(webView: WKWebView): void;

	static clearUserData(): void;

	static clearUserDataForType(type: string): void;

	static clearUserID(): void;

	static flush(): void;

	static getUserData(): string;

	static logEvent(eventName: string): void;

	static logEventParameters(eventName: string, parameters: NSDictionary<string, any>): void;

	static logEventValueToSum(eventName: string, valueToSum: number): void;

	static logEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>): void;

	static logEventValueToSumParametersAccessToken(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	static logProductItemAvailabilityConditionDescriptionImageLinkLinkTitlePriceAmountCurrencyGtinMpnBrandParameters(itemID: string, availability: FBSDKProductAvailability, condition: FBSDKProductCondition, description: string, imageLink: string, link: string, title: string, priceAmount: number, currency: string, gtin: string, mpn: string, brand: string, parameters: NSDictionary<string, any>): void;

	static logPurchaseCurrency(purchaseAmount: number, currency: string): void;

	static logPurchaseCurrencyParameters(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>): void;

	static logPurchaseCurrencyParametersAccessToken(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	static logPushNotificationOpen(payload: NSDictionary<any, any>): void;

	static logPushNotificationOpenAction(payload: NSDictionary<any, any>, action: string): void;

	static new(): FBSDKAppEvents; // inherited from NSObject

	static requestForCustomAudienceThirdPartyIDWithAccessToken(accessToken: FBSDKAccessToken): FBSDKGraphRequest;

	static sendEventBindingsToUnity(): void;

	static setIsUnityInit(isUnityInit: boolean): void;

	static setPushNotificationsDeviceToken(deviceToken: NSData): void;

	static setPushNotificationsDeviceTokenString(deviceTokenString: string): void;

	static setUserDataForType(data: string, type: string): void;

	static setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountry(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string): void;

	static updateUserPropertiesHandler(properties: NSDictionary<string, any>, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	static flushBehavior: FBSDKAppEventsFlushBehavior;

	static loggingOverrideAppID: string;

	static userID: string;
}

declare const enum FBSDKAppEventsFlushBehavior {

	Auto = 0,

	ExplicitOnly = 1
}

declare var FBSDKAppEventsLoggingResultNotification: string;

declare var FBSDKAppEventsOverrideAppIDBundleKey: string;

declare class FBSDKAppLink extends NSObject {

	static alloc(): FBSDKAppLink; // inherited from NSObject

	static appLinkWithSourceURLTargetsWebURL(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTarget> | FBSDKAppLinkTarget[], webURL: NSURL): FBSDKAppLink;

	static new(): FBSDKAppLink; // inherited from NSObject

	readonly sourceURL: NSURL;

	readonly targets: NSArray<FBSDKAppLinkTarget>;

	readonly webURL: NSURL;
}

declare var FBSDKAppLinkNavigateBackToReferrerEventName: string;

declare var FBSDKAppLinkNavigateInEventName: string;

declare var FBSDKAppLinkNavigateOutEventName: string;

declare class FBSDKAppLinkNavigation extends NSObject {

	static alloc(): FBSDKAppLinkNavigation; // inherited from NSObject

	static callbackAppLinkDataForAppWithNameUrl(appName: string, url: string): NSDictionary<string, NSDictionary<string, string>>;

	static navigateToAppLinkError(link: FBSDKAppLink): FBSDKAppLinkNavigationType;

	static navigateToURLHandler(destination: NSURL, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigateToURLResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigationTypeForLink(link: FBSDKAppLink): FBSDKAppLinkNavigationType;

	static navigationWithAppLinkExtrasAppLinkData(appLink: FBSDKAppLink, extras: NSDictionary<string, any>, appLinkData: NSDictionary<string, any>): FBSDKAppLinkNavigation;

	static new(): FBSDKAppLinkNavigation; // inherited from NSObject

	static resolveAppLinkHandler(destination: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	static resolveAppLinkResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	readonly appLink: FBSDKAppLink;

	readonly appLinkData: NSDictionary<string, any>;

	readonly extras: NSDictionary<string, any>;

	readonly navigationType: FBSDKAppLinkNavigationType;

	static defaultResolver: FBSDKAppLinkResolving;

	navigate(): FBSDKAppLinkNavigationType;
}

declare const enum FBSDKAppLinkNavigationType {

	Failure = 0,

	Browser = 1,

	App = 2
}

declare var FBSDKAppLinkParseEventName: string;

declare class FBSDKAppLinkResolver extends NSObject implements FBSDKAppLinkResolving {

	static alloc(): FBSDKAppLinkResolver; // inherited from NSObject

	static new(): FBSDKAppLinkResolver; // inherited from NSObject

	static resolver(): FBSDKAppLinkResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	appLinksFromURLsHandler(urls: NSArray<NSURL> | NSURL[], handler: (p1: NSDictionary<NSURL, FBSDKAppLink>, p2: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface FBSDKAppLinkResolving extends NSObjectProtocol {

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;
}
declare var FBSDKAppLinkResolving: {

	prototype: FBSDKAppLinkResolving;
};

declare class FBSDKAppLinkReturnToRefererController extends NSObject implements FBSDKAppLinkReturnToRefererViewDelegate {

	static alloc(): FBSDKAppLinkReturnToRefererController; // inherited from NSObject

	static new(): FBSDKAppLinkReturnToRefererController; // inherited from NSObject

	delegate: FBSDKAppLinkReturnToRefererControllerDelegate;

	view: FBSDKAppLinkReturnToRefererView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { forDisplayAboveNavController: UINavigationController; });

	class(): typeof NSObject;

	closeViewAnimated(animated: boolean): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initForDisplayAboveNavController(navController: UINavigationController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeFromNavController(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	returnToRefererViewDidTapInsideCloseButton(view: FBSDKAppLinkReturnToRefererView): void;

	returnToRefererViewDidTapInsideLinkLink(view: FBSDKAppLinkReturnToRefererView, link: FBSDKAppLink): void;

	self(): this;

	showViewForRefererAppLink(refererAppLink: FBSDKAppLink): void;

	showViewForRefererURL(url: NSURL): void;
}

interface FBSDKAppLinkReturnToRefererControllerDelegate extends NSObjectProtocol {

	returnToRefererControllerDidNavigateToAppLinkType?(controller: FBSDKAppLinkReturnToRefererController, url: FBSDKAppLink, type: FBSDKAppLinkNavigationType): void;

	returnToRefererControllerWillNavigateToAppLink?(controller: FBSDKAppLinkReturnToRefererController, appLink: FBSDKAppLink): void;
}
declare var FBSDKAppLinkReturnToRefererControllerDelegate: {

	prototype: FBSDKAppLinkReturnToRefererControllerDelegate;
};

declare class FBSDKAppLinkReturnToRefererView extends UIView {

	static alloc(): FBSDKAppLinkReturnToRefererView; // inherited from NSObject

	static appearance(): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKAppLinkReturnToRefererView; // inherited from UIAppearance

	static new(): FBSDKAppLinkReturnToRefererView; // inherited from NSObject

	closed: boolean;

	delegate: FBSDKAppLinkReturnToRefererViewDelegate;

	includeStatusBarInSize: FBSDKIncludeStatusBarInSize;

	refererAppLink: FBSDKAppLink;

	textColor: UIColor;
}

interface FBSDKAppLinkReturnToRefererViewDelegate extends NSObjectProtocol {

	returnToRefererViewDidTapInsideCloseButton(view: FBSDKAppLinkReturnToRefererView): void;

	returnToRefererViewDidTapInsideLinkLink(view: FBSDKAppLinkReturnToRefererView, link: FBSDKAppLink): void;
}
declare var FBSDKAppLinkReturnToRefererViewDelegate: {

	prototype: FBSDKAppLinkReturnToRefererViewDelegate;
};

declare class FBSDKAppLinkTarget extends NSObject {

	static alloc(): FBSDKAppLinkTarget; // inherited from NSObject

	static appLinkTargetWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): FBSDKAppLinkTarget;

	static new(): FBSDKAppLinkTarget; // inherited from NSObject

	readonly URL: NSURL;

	readonly appName: string;

	readonly appStoreId: string;
}

declare class FBSDKAppLinkUtility extends NSObject {

	static alloc(): FBSDKAppLinkUtility; // inherited from NSObject

	static appInvitePromotionCodeFromURL(url: NSURL): string;

	static fetchDeferredAppLink(handler: (p1: NSURL, p2: NSError) => void): void;

	static new(): FBSDKAppLinkUtility; // inherited from NSObject
}

declare var FBSDKAppLinkVersion: string;

declare class FBSDKApplicationDelegate extends NSObject {

	static alloc(): FBSDKApplicationDelegate; // inherited from NSObject

	static initializeSDK(launchOptions: NSDictionary<string, any>): void;

	static new(): FBSDKApplicationDelegate; // inherited from NSObject

	static readonly sharedInstance: FBSDKApplicationDelegate;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;
}

declare class FBSDKBasicUtility extends NSObject {

	static alloc(): FBSDKBasicUtility; // inherited from NSObject

	static new(): FBSDKBasicUtility; // inherited from NSObject
}

declare class FBSDKButton extends UIButton {

	static alloc(): FBSDKButton; // inherited from NSObject

	static appearance(): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKButton; // inherited from UIButton

	static new(): FBSDKButton; // inherited from NSObject
}

interface FBSDKCopying extends NSCopying, NSObjectProtocol {

	copy(): any;
}
declare var FBSDKCopying: {

	prototype: FBSDKCopying;
};

declare var FBSDKCoreKitVersionNumber: number;

declare var FBSDKCoreKitVersionString: interop.Reference<number>;

declare const enum FBSDKError {

	Reserved = 0,

	Encryption = 1,

	InvalidArgument = 2,

	Unknown = 3,

	Network = 4,

	AppEventsFlush = 5,

	GraphRequestNonTextMimeTypeReturned = 6,

	GraphRequestProtocolMismatch = 7,

	GraphRequestGraphAPI = 8,

	DialogUnavailable = 9,

	AccessTokenRequired = 10,

	AppVersionUnsupported = 11,

	BrowserUnavailable = 12
}

declare var FBSDKErrorArgumentCollectionKey: string;

declare var FBSDKErrorArgumentNameKey: string;

declare var FBSDKErrorArgumentValueKey: string;

declare var FBSDKErrorDeveloperMessageKey: string;

declare var FBSDKErrorDomain: string;

declare var FBSDKErrorLocalizedDescriptionKey: string;

declare var FBSDKErrorLocalizedTitleKey: string;

interface FBSDKErrorRecoveryAttempting extends NSObjectProtocol {

	attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo(error: NSError, recoveryOptionIndex: number, delegate: any, didRecoverSelector: string, contextInfo: interop.Pointer | interop.Reference<any>): void;
}
declare var FBSDKErrorRecoveryAttempting: {

	prototype: FBSDKErrorRecoveryAttempting;
};

declare class FBSDKGraphErrorRecoveryProcessor extends NSObject {

	static alloc(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	static new(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	readonly delegate: FBSDKGraphErrorRecoveryProcessorDelegate;

	didPresentErrorWithRecoveryContextInfo(didRecover: boolean, contextInfo: interop.Pointer | interop.Reference<any>): void;

	processErrorRequestDelegate(error: NSError, request: FBSDKGraphRequest, delegate: FBSDKGraphErrorRecoveryProcessorDelegate): boolean;
}

interface FBSDKGraphErrorRecoveryProcessorDelegate extends NSObjectProtocol {

	processorDidAttemptRecoveryDidRecoverError(processor: FBSDKGraphErrorRecoveryProcessor, didRecover: boolean, error: NSError): void;

	processorWillProcessErrorError?(processor: FBSDKGraphErrorRecoveryProcessor, error: NSError): boolean;
}
declare var FBSDKGraphErrorRecoveryProcessorDelegate: {

	prototype: FBSDKGraphErrorRecoveryProcessorDelegate;
};

declare class FBSDKGraphRequest extends NSObject {

	static alloc(): FBSDKGraphRequest; // inherited from NSObject

	static new(): FBSDKGraphRequest; // inherited from NSObject

	readonly HTTPMethod: string;

	readonly graphPath: string;

	parameters: NSDictionary<string, any>;

	readonly tokenString: string;

	readonly version: string;

	constructor(o: { graphPath: string; });

	constructor(o: { graphPath: string; HTTPMethod: string; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; HTTPMethod: string; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; version: string; HTTPMethod: string; });

	initWithGraphPath(graphPath: string): this;

	initWithGraphPathHTTPMethod(graphPath: string, method: string): this;

	initWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): this;

	initWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): this;

	setGraphErrorRecoveryDisabled(disable: boolean): void;

	startWithCompletionHandler(handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): FBSDKGraphRequestConnection;
}

declare class FBSDKGraphRequestConnection extends NSObject {

	static alloc(): FBSDKGraphRequestConnection; // inherited from NSObject

	static new(): FBSDKGraphRequestConnection; // inherited from NSObject

	delegate: FBSDKGraphRequestConnectionDelegate;

	delegateQueue: NSOperationQueue;

	timeout: number;

	readonly urlResponse: NSHTTPURLResponse;

	static defaultConnectionTimeout: number;

	addRequestBatchEntryNameCompletionHandler(request: FBSDKGraphRequest, name: string, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestBatchParametersCompletionHandler(request: FBSDKGraphRequest, batchParameters: NSDictionary<string, any>, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestCompletionHandler(request: FBSDKGraphRequest, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	cancel(): void;

	overrideGraphAPIVersion(version: string): void;

	start(): void;
}

interface FBSDKGraphRequestConnectionDelegate extends NSObjectProtocol {

	requestConnectionDidFailWithError?(connection: FBSDKGraphRequestConnection, error: NSError): void;

	requestConnectionDidFinishLoading?(connection: FBSDKGraphRequestConnection): void;

	requestConnectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite?(connection: FBSDKGraphRequestConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	requestConnectionWillBeginLoading?(connection: FBSDKGraphRequestConnection): void;
}
declare var FBSDKGraphRequestConnectionDelegate: {

	prototype: FBSDKGraphRequestConnectionDelegate;
};

declare class FBSDKGraphRequestDataAttachment extends NSObject {

	static alloc(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	static new(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	readonly contentType: string;

	readonly data: NSData;

	readonly filename: string;

	constructor(o: { data: NSData; filename: string; contentType: string; });

	initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;
}

declare const enum FBSDKGraphRequestError {

	Other = 0,

	Transient = 1,

	Recoverable = 2
}

declare var FBSDKGraphRequestErrorGraphErrorCodeKey: string;

declare var FBSDKGraphRequestErrorGraphErrorSubcodeKey: string;

declare var FBSDKGraphRequestErrorHTTPStatusCodeKey: string;

declare var FBSDKGraphRequestErrorKey: string;

declare var FBSDKGraphRequestErrorParsedJSONResponseKey: string;

declare var FBSDKHTTPMethodDELETE: string;

declare var FBSDKHTTPMethodGET: string;

declare var FBSDKHTTPMethodPOST: string;

declare const enum FBSDKIncludeStatusBarInSize {

	Never = 0,

	Always = 1
}

declare var FBSDKLoggingBehaviorAccessTokens: string;

declare var FBSDKLoggingBehaviorAppEvents: string;

declare var FBSDKLoggingBehaviorCacheErrors: string;

declare var FBSDKLoggingBehaviorDeveloperErrors: string;

declare var FBSDKLoggingBehaviorGraphAPIDebugInfo: string;

declare var FBSDKLoggingBehaviorGraphAPIDebugWarning: string;

declare var FBSDKLoggingBehaviorInformational: string;

declare var FBSDKLoggingBehaviorNetworkRequests: string;

declare var FBSDKLoggingBehaviorPerformanceCharacteristics: string;

declare var FBSDKLoggingBehaviorUIControlErrors: string;

declare class FBSDKMeasurementEvent extends NSObject {

	static alloc(): FBSDKMeasurementEvent; // inherited from NSObject

	static new(): FBSDKMeasurementEvent; // inherited from NSObject
}

declare var FBSDKMeasurementEventArgsKey: string;

declare var FBSDKMeasurementEventNameKey: string;

declare var FBSDKMeasurementEventNotification: string;

interface FBSDKMutableCopying extends FBSDKCopying, NSMutableCopying {

	mutableCopy(): any;
}
declare var FBSDKMutableCopying: {

	prototype: FBSDKMutableCopying;
};

declare var FBSDKNonJSONResponseProperty: string;

declare const enum FBSDKProductAvailability {

	InStock = 0,

	OutOfStock = 1,

	PreOrder = 2,

	AvailableForOrder = 3,

	Discontinued = 4
}

declare const enum FBSDKProductCondition {

	New = 0,

	Refurbished = 1,

	Used = 2
}

declare class FBSDKProfile extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): FBSDKProfile; // inherited from NSObject

	static enableUpdatesOnAccessTokenChange(enable: boolean): void;

	static loadCurrentProfileWithCompletion(completion: (p1: FBSDKProfile, p2: NSError) => void): void;

	static new(): FBSDKProfile; // inherited from NSObject

	readonly firstName: string;

	readonly lastName: string;

	readonly linkURL: NSURL;

	readonly middleName: string;

	readonly name: string;

	readonly refreshDate: Date;

	readonly userID: string;

	static currentProfile: FBSDKProfile;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	imageURLForPictureModeSize(mode: FBSDKProfilePictureMode, size: CGSize): NSURL;

	initWithCoder(aDecoder: NSCoder): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDate(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date): this;

	isEqualToProfile(profile: FBSDKProfile): boolean;
}

declare var FBSDKProfileChangeNewKey: string;

declare var FBSDKProfileChangeOldKey: string;

declare var FBSDKProfileDidChangeNotification: string;

declare const enum FBSDKProfilePictureMode {

	Square = 0,

	Normal = 1
}

declare class FBSDKProfilePictureView extends UIView {

	static alloc(): FBSDKProfilePictureView; // inherited from NSObject

	static appearance(): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKProfilePictureView; // inherited from UIAppearance

	static new(): FBSDKProfilePictureView; // inherited from NSObject

	pictureMode: FBSDKProfilePictureMode;

	profileID: string;

	setNeedsImageUpdate(): void;
}

declare class FBSDKSettings extends NSObject {

	static alloc(): FBSDKSettings; // inherited from NSObject

	static disableLoggingBehavior(loggingBehavior: string): void;

	static enableLoggingBehavior(loggingBehavior: string): void;

	static new(): FBSDKSettings; // inherited from NSObject

	static JPEGCompressionQuality: number;

	static advertiserIDCollectionEnabled: boolean;

	static appID: string;

	static appURLSchemeSuffix: string;

	static autoInitEnabled: boolean;

	static autoLogAppEventsEnabled: boolean;

	static clientToken: string;

	static codelessDebugLogEnabled: boolean;

	static readonly defaultGraphAPIVersion: string;

	static displayName: string;

	static facebookDomainPart: string;

	static graphAPIVersion: string;

	static graphErrorRecoveryEnabled: boolean;

	static limitEventAndDataUsage: boolean;

	static loggingBehaviors: NSSet<string>;

	static readonly sdkVersion: string;
}

declare class FBSDKTestUsersManager extends NSObject {

	static alloc(): FBSDKTestUsersManager; // inherited from NSObject

	static new(): FBSDKTestUsersManager; // inherited from NSObject

	static sharedInstanceForAppIDAppSecret(appID: string, appSecret: string): FBSDKTestUsersManager;

	addTestAccountWithPermissionsCompletionHandler(permissions: NSSet<string>, handler: (p1: NSArray<FBSDKAccessToken>, p2: NSError) => void): void;

	makeFriendsWithFirstSecondCallback(first: FBSDKAccessToken, second: FBSDKAccessToken, callback: (p1: NSError) => void): void;

	removeTestAccountCompletionHandler(userId: string, handler: (p1: NSError) => void): void;

	requestTestAccountTokensWithArraysOfPermissionsCreateIfNotFoundCompletionHandler(arraysOfPermissions: NSArray<NSSet<string>> | NSSet<string>[], createIfNotFound: boolean, handler: (p1: NSArray<FBSDKAccessToken>, p2: NSError) => void): void;
}

declare class FBSDKURL extends NSObject {

	static URLWithInboundURLSourceApplication(url: NSURL, sourceApplication: string): FBSDKURL;

	static URLWithURL(url: NSURL): FBSDKURL;

	static alloc(): FBSDKURL; // inherited from NSObject

	static new(): FBSDKURL; // inherited from NSObject

	readonly appLinkData: NSDictionary<string, any>;

	readonly appLinkExtras: NSDictionary<string, any>;

	readonly appLinkReferer: FBSDKAppLink;

	readonly inputQueryParameters: NSDictionary<string, any>;

	readonly inputURL: NSURL;

	readonly targetQueryParameters: NSDictionary<string, any>;

	readonly targetURL: NSURL;
}

declare class FBSDKUtility extends NSObject {

	static SHA256Hash(input: NSObject): string;

	static URLDecode(value: string): string;

	static URLEncode(value: string): string;

	static alloc(): FBSDKUtility; // inherited from NSObject

	static dictionaryWithQueryString(queryString: string): NSDictionary<string, string>;

	static new(): FBSDKUtility; // inherited from NSObject

	static queryStringWithDictionaryError(dictionary: NSDictionary<string, any>): string;

	static startGCDTimerWithIntervalBlock(interval: number, block: () => void): NSObject;

	static stopGCDTimer(timer: NSObject): void;
}

declare class FBSDKWebViewAppLinkResolver extends NSObject implements FBSDKAppLinkResolving {

	static alloc(): FBSDKWebViewAppLinkResolver; // inherited from NSObject

	static new(): FBSDKWebViewAppLinkResolver; // inherited from NSObject

	static readonly sharedInstance: FBSDKWebViewAppLinkResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
