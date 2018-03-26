
declare class FBSDKAccessToken extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKAccessToken; // inherited from NSObject

	static currentAccessToken(): FBSDKAccessToken;

	static new(): FBSDKAccessToken; // inherited from NSObject

	static refreshCurrentAccessToken(completionHandler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	static setCurrentAccessToken(token: FBSDKAccessToken): void;

	readonly appID: string;

	readonly declinedPermissions: NSSet<any>;

	readonly expirationDate: Date;

	readonly permissions: NSSet<any>;

	readonly refreshDate: Date;

	readonly tokenString: string;

	readonly userID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tokenString: string; permissions: NSArray<any>; declinedPermissions: NSArray<any>; appID: string; userID: string; expirationDate: Date; refreshDate: Date; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	hasGranted(permission: string): boolean;

	initWithCoder(aDecoder: NSCoder): this;

	initWithTokenStringPermissionsDeclinedPermissionsAppIDUserIDExpirationDateRefreshDate(tokenString: string, permissions: NSArray<any>, declinedPermissions: NSArray<any>, appID: string, userID: string, expirationDate: Date, refreshDate: Date): this;

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

declare var FBSDKAccessTokenDidChangeUserID: string;

declare var FBSDKAppEventNameAchievedLevel: string;

declare var FBSDKAppEventNameAddedPaymentInfo: string;

declare var FBSDKAppEventNameAddedToCart: string;

declare var FBSDKAppEventNameAddedToWishlist: string;

declare var FBSDKAppEventNameCompletedRegistration: string;

declare var FBSDKAppEventNameCompletedTutorial: string;

declare var FBSDKAppEventNameInitiatedCheckout: string;

declare var FBSDKAppEventNameRated: string;

declare var FBSDKAppEventNameSearched: string;

declare var FBSDKAppEventNameSpentCredits: string;

declare var FBSDKAppEventNameUnlockedAchievement: string;

declare var FBSDKAppEventNameViewedContent: string;

declare var FBSDKAppEventParameterNameContent: string;

declare var FBSDKAppEventParameterNameContentID: string;

declare var FBSDKAppEventParameterNameContentType: string;

declare var FBSDKAppEventParameterNameCurrency: string;

declare var FBSDKAppEventParameterNameDescription: string;

declare var FBSDKAppEventParameterNameLevel: string;

declare var FBSDKAppEventParameterNameMaxRatingValue: string;

declare var FBSDKAppEventParameterNameNumItems: string;

declare var FBSDKAppEventParameterNamePaymentInfoAvailable: string;

declare var FBSDKAppEventParameterNameRegistrationMethod: string;

declare var FBSDKAppEventParameterNameSearchString: string;

declare var FBSDKAppEventParameterNameSuccess: string;

declare var FBSDKAppEventParameterValueNo: string;

declare var FBSDKAppEventParameterValueYes: string;

declare class FBSDKAppEvents extends NSObject {

	static activateApp(): void;

	static alloc(): FBSDKAppEvents; // inherited from NSObject

	static flush(): void;

	static flushBehavior(): FBSDKAppEventsFlushBehavior;

	static logEvent(eventName: string): void;

	static logEventParameters(eventName: string, parameters: NSDictionary<any, any>): void;

	static logEventValueToSum(eventName: string, valueToSum: number): void;

	static logEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<any, any>): void;

	static logEventValueToSumParametersAccessToken(eventName: string, valueToSum: number, parameters: NSDictionary<any, any>, accessToken: FBSDKAccessToken): void;

	static logPurchaseCurrency(purchaseAmount: number, currency: string): void;

	static logPurchaseCurrencyParameters(purchaseAmount: number, currency: string, parameters: NSDictionary<any, any>): void;

	static logPurchaseCurrencyParametersAccessToken(purchaseAmount: number, currency: string, parameters: NSDictionary<any, any>, accessToken: FBSDKAccessToken): void;

	static logPushNotificationOpen(payload: NSDictionary<any, any>): void;

	static logPushNotificationOpenAction(payload: NSDictionary<any, any>, action: string): void;

	static loggingOverrideAppID(): string;

	static new(): FBSDKAppEvents; // inherited from NSObject

	static requestForCustomAudienceThirdPartyIDWithAccessToken(accessToken: FBSDKAccessToken): FBSDKGraphRequest;

	static setFlushBehavior(flushBehavior: FBSDKAppEventsFlushBehavior): void;

	static setLoggingOverrideAppID(appID: string): void;

	static setPushNotificationsDeviceToken(deviceToken: NSData): void;

	static setUserID(userID: string): void;

	static updateUserPropertiesHandler(properties: NSDictionary<any, any>, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	static userID(): string;
}

declare const enum FBSDKAppEventsFlushBehavior {

	Auto = 0,

	ExplicitOnly = 1
}

declare var FBSDKAppEventsLoggingResultNotification: string;

declare var FBSDKAppEventsOverrideAppIDBundleKey: string;

declare class FBSDKAppLinkResolver extends NSObject implements BFAppLinkResolving {

	static alloc(): FBSDKAppLinkResolver; // inherited from NSObject

	static new(): FBSDKAppLinkResolver; // inherited from NSObject

	static resolver(): FBSDKAppLinkResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appLinkFromURLInBackground(url: NSURL): BFTask<any>;

	appLinksFromURLsInBackground(urls: NSArray<any>): BFTask<any>;

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

declare class FBSDKAppLinkUtility extends NSObject {

	static alloc(): FBSDKAppLinkUtility; // inherited from NSObject

	static appInvitePromotionCodeFromURL(url: NSURL): string;

	static fetchDeferredAppInvite(handler: (p1: NSURL) => void): boolean;

	static fetchDeferredAppLink(handler: (p1: NSURL, p2: NSError) => void): void;

	static new(): FBSDKAppLinkUtility; // inherited from NSObject
}

declare class FBSDKApplicationDelegate extends NSObject {

	static alloc(): FBSDKApplicationDelegate; // inherited from NSObject

	static new(): FBSDKApplicationDelegate; // inherited from NSObject

	static sharedInstance(): FBSDKApplicationDelegate;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;
}

declare class FBSDKButton extends UIButton {

	static alloc(): FBSDKButton; // inherited from NSObject

	static appearance(): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FBSDKButton; // inherited from UIAppearance

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

declare var FBSDKErrorArgumentCollectionKey: string;

declare var FBSDKErrorArgumentNameKey: string;

declare var FBSDKErrorArgumentValueKey: string;

declare const enum FBSDKErrorCode {

	ReservedErrorCode = 0,

	EncryptionErrorCode = 1,

	InvalidArgumentErrorCode = 2,

	UnknownErrorCode = 3,

	NetworkErrorCode = 4,

	AppEventsFlushErrorCode = 5,

	GraphRequestNonTextMimeTypeReturnedErrorCode = 6,

	GraphRequestProtocolMismatchErrorCode = 7,

	GraphRequestGraphAPIErrorCode = 8,

	DialogUnavailableErrorCode = 9,

	AccessTokenRequiredErrorCode = 10,

	AppVersionUnsupportedErrorCode = 11,

	BrowserUnavailableErrorCode = 12,

	BrowswerUnavailableErrorCode = 12
}

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

	readonly parameters: NSMutableDictionary<any, any>;

	readonly tokenString: string;

	readonly version: string;

	constructor(o: { graphPath: string; parameters: NSDictionary<any, any>; });

	constructor(o: { graphPath: string; parameters: NSDictionary<any, any>; HTTPMethod: string; });

	constructor(o: { graphPath: string; parameters: NSDictionary<any, any>; tokenString: string; version: string; HTTPMethod: string; });

	initWithGraphPathParameters(graphPath: string, parameters: NSDictionary<any, any>): this;

	initWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<any, any>, HTTPMethod: string): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<any, any>, tokenString: string, version: string, HTTPMethod: string): this;

	setGraphErrorRecoveryDisabled(disable: boolean): void;

	startWithCompletionHandler(handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): FBSDKGraphRequestConnection;
}

declare class FBSDKGraphRequestConnection extends NSObject {

	static alloc(): FBSDKGraphRequestConnection; // inherited from NSObject

	static new(): FBSDKGraphRequestConnection; // inherited from NSObject

	static setDefaultConnectionTimeout(defaultConnectionTimeout: number): void;

	readonly URLResponse: NSHTTPURLResponse;

	delegate: FBSDKGraphRequestConnectionDelegate;

	timeout: number;

	addRequestCompletionHandler(request: FBSDKGraphRequest, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestCompletionHandlerBatchEntryName(request: FBSDKGraphRequest, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void, name: string): void;

	addRequestCompletionHandlerBatchParameters(request: FBSDKGraphRequest, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void, batchParameters: NSDictionary<any, any>): void;

	cancel(): void;

	overrideVersionPartWith(version: string): void;

	setDelegateQueue(queue: NSOperationQueue): void;

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

declare const enum FBSDKGraphRequestErrorCategory {

	Other = 0,

	Transient = 1,

	Recoverable = 2
}

declare var FBSDKGraphRequestErrorCategoryKey: string;

declare var FBSDKGraphRequestErrorGraphErrorCode: string;

declare var FBSDKGraphRequestErrorGraphErrorSubcode: string;

declare var FBSDKGraphRequestErrorHTTPStatusCodeKey: string;

declare var FBSDKGraphRequestErrorParsedJSONResponseKey: string;

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

interface FBSDKMutableCopying extends FBSDKCopying, NSMutableCopying {

	mutableCopy(): any;
}
declare var FBSDKMutableCopying: {

	prototype: FBSDKMutableCopying;
};

declare var FBSDKNonJSONResponseProperty: string;

declare class FBSDKProfile extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): FBSDKProfile; // inherited from NSObject

	static currentProfile(): FBSDKProfile;

	static enableUpdatesOnAccessTokenChange(enable: boolean): void;

	static loadCurrentProfileWithCompletion(completion: (p1: FBSDKProfile, p2: NSError) => void): void;

	static new(): FBSDKProfile; // inherited from NSObject

	static setCurrentProfile(profile: FBSDKProfile): void;

	readonly firstName: string;

	readonly lastName: string;

	readonly linkURL: NSURL;

	readonly middleName: string;

	readonly name: string;

	readonly refreshDate: Date;

	readonly userID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	imagePathForPictureModeSize(mode: FBSDKProfilePictureMode, size: CGSize): string;

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

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FBSDKProfilePictureView; // inherited from UIAppearance

	static new(): FBSDKProfilePictureView; // inherited from NSObject

	pictureMode: FBSDKProfilePictureMode;

	profileID: string;

	setNeedsImageUpdate(): void;
}

declare class FBSDKSettings extends NSObject {

	static JPEGCompressionQuality(): number;

	static alloc(): FBSDKSettings; // inherited from NSObject

	static appID(): string;

	static appURLSchemeSuffix(): string;

	static autoLogAppEventsEnabled(): number;

	static clientToken(): string;

	static disableLoggingBehavior(loggingBehavior: string): void;

	static displayName(): string;

	static enableLoggingBehavior(loggingBehavior: string): void;

	static facebookDomainPart(): string;

	static graphAPIVersion(): string;

	static legacyUserDefaultTokenInformationKeyName(): string;

	static limitEventAndDataUsage(): boolean;

	static loggingBehavior(): NSSet<any>;

	static new(): FBSDKSettings; // inherited from NSObject

	static sdkVersion(): string;

	static setAppID(appID: string): void;

	static setAppURLSchemeSuffix(appURLSchemeSuffix: string): void;

	static setAutoLogAppEventsEnabled(AutoLogAppEventsEnabled: number): void;

	static setClientToken(clientToken: string): void;

	static setDisplayName(displayName: string): void;

	static setFacebookDomainPart(facebookDomainPart: string): void;

	static setGraphAPIVersion(version: string): void;

	static setGraphErrorRecoveryDisabled(disableGraphErrorRecovery: boolean): void;

	static setJPEGCompressionQuality(JPEGCompressionQuality: number): void;

	static setLegacyUserDefaultTokenInformationKeyName(tokenInformationKeyName: string): void;

	static setLimitEventAndDataUsage(limitEventAndDataUsage: boolean): void;

	static setLoggingBehavior(loggingBehavior: NSSet<any>): void;
}

declare class FBSDKTestUsersManager extends NSObject {

	static alloc(): FBSDKTestUsersManager; // inherited from NSObject

	static new(): FBSDKTestUsersManager; // inherited from NSObject

	static sharedInstanceForAppIDAppSecret(appID: string, appSecret: string): FBSDKTestUsersManager;

	addTestAccountWithPermissionsCompletionHandler(permissions: NSSet<any>, handler: (p1: NSArray<any>, p2: NSError) => void): void;

	makeFriendsWithFirstSecondCallback(first: FBSDKAccessToken, second: FBSDKAccessToken, callback: (p1: NSError) => void): void;

	removeTestAccountCompletionHandler(userId: string, handler: (p1: NSError) => void): void;

	requestTestAccountTokensWithArraysOfPermissionsCreateIfNotFoundCompletionHandler(arraysOfPermissions: NSArray<any>, createIfNotFound: boolean, handler: (p1: NSArray<any>, p2: NSError) => void): void;
}

declare class FBSDKUtility extends NSObject {

	static URLDecode(value: string): string;

	static URLEncode(value: string): string;

	static alloc(): FBSDKUtility; // inherited from NSObject

	static dictionaryWithQueryString(queryString: string): NSDictionary<any, any>;

	static new(): FBSDKUtility; // inherited from NSObject

	static queryStringWithDictionaryError(dictionary: NSDictionary<any, any>): string;
}
