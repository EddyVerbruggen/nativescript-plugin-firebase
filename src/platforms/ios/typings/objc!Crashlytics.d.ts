
declare class Answers extends NSObject {

	static alloc(): Answers; // inherited from NSObject

	static logAddToCartWithPriceCurrencyItemNameItemTypeItemIdCustomAttributes(itemPriceOrNil: NSDecimalNumber, currencyOrNil: string, itemNameOrNil: string, itemTypeOrNil: string, itemIdOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logContentViewWithNameContentTypeContentIdCustomAttributes(contentNameOrNil: string, contentTypeOrNil: string, contentIdOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logCustomEventWithNameCustomAttributes(eventName: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logInviteWithMethodCustomAttributes(inviteMethodOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logLevelEndScoreSuccessCustomAttributes(levelNameOrNil: string, scoreOrNil: number, levelCompletedSuccesfullyOrNil: number, customAttributesOrNil: NSDictionary<string, any>): void;

	static logLevelStartCustomAttributes(levelNameOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logLoginWithMethodSuccessCustomAttributes(loginMethodOrNil: string, loginSucceededOrNil: number, customAttributesOrNil: NSDictionary<string, any>): void;

	static logPurchaseWithPriceCurrencySuccessItemNameItemTypeItemIdCustomAttributes(itemPriceOrNil: NSDecimalNumber, currencyOrNil: string, purchaseSucceededOrNil: number, itemNameOrNil: string, itemTypeOrNil: string, itemIdOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logRatingContentNameContentTypeContentIdCustomAttributes(ratingOrNil: number, contentNameOrNil: string, contentTypeOrNil: string, contentIdOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logSearchWithQueryCustomAttributes(queryOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logShareWithMethodContentNameContentTypeContentIdCustomAttributes(shareMethodOrNil: string, contentNameOrNil: string, contentTypeOrNil: string, contentIdOrNil: string, customAttributesOrNil: NSDictionary<string, any>): void;

	static logSignUpWithMethodSuccessCustomAttributes(signUpMethodOrNil: string, signUpSucceededOrNil: number, customAttributesOrNil: NSDictionary<string, any>): void;

	static logStartCheckoutWithPriceCurrencyItemCountCustomAttributes(totalPriceOrNil: NSDecimalNumber, currencyOrNil: string, itemCountOrNil: number, customAttributesOrNil: NSDictionary<string, any>): void;

	static new(): Answers; // inherited from NSObject
}

interface CLSCrashReport extends NSObjectProtocol {

	OSBuildVersion: string;

	OSVersion: string;

	bundleShortVersionString: string;

	bundleVersion: string;

	crashedOnDate: Date;

	customKeys: NSDictionary<any, any>;

	identifier: string;
}
declare var CLSCrashReport: {

	prototype: CLSCrashReport;
};

declare class CLSReport extends NSObject implements CLSCrashReport {

	static alloc(): CLSReport; // inherited from NSObject

	static new(): CLSReport; // inherited from NSObject

	readonly dateCreated: Date;

	readonly isCrash: boolean;

	userEmail: string;

	userIdentifier: string;

	userName: string;

	readonly OSBuildVersion: string; // inherited from CLSCrashReport

	readonly OSVersion: string; // inherited from CLSCrashReport

	readonly bundleShortVersionString: string; // inherited from CLSCrashReport

	readonly bundleVersion: string; // inherited from CLSCrashReport

	readonly crashedOnDate: Date; // inherited from CLSCrashReport

	readonly customKeys: NSDictionary<any, any>; // inherited from CLSCrashReport

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly identifier: string; // inherited from CLSCrashReport

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

	setObjectValueForKey(value: any, key: string): void;
}

declare class CLSStackFrame extends NSObject {

	static alloc(): CLSStackFrame; // inherited from NSObject

	static new(): CLSStackFrame; // inherited from NSObject

	static stackFrame(): CLSStackFrame;

	static stackFrameWithAddress(address: number): CLSStackFrame;

	static stackFrameWithSymbol(symbol: string): CLSStackFrame;

	address: number;

	fileName: string;

	library: string;

	lineNumber: number;

	offset: number;

	rawSymbol: string;

	symbol: string;
}

declare class Crashlytics extends NSObject {

	static alloc(): Crashlytics; // inherited from NSObject

	static logEvent(eventName: string): void;

	static logEventAttributes(eventName: string, attributes: NSDictionary<any, any>): void;

	static new(): Crashlytics; // inherited from NSObject

	static setBoolValueForKey(value: boolean, key: string): void;

	static setFloatValueForKey(value: number, key: string): void;

	static setIntValueForKey(value: number, key: string): void;

	static setObjectValueForKey(value: any, key: string): void;

	static setUserEmail(email: string): void;

	static setUserIdentifier(identifier: string): void;

	static setUserName(name: string): void;

	static sharedInstance(): Crashlytics;

	static startWithAPIKey(apiKey: string): Crashlytics;

	static startWithAPIKeyAfterDelay(apiKey: string, delay: number): Crashlytics;

	static startWithAPIKeyDelegate(apiKey: string, delegate: CrashlyticsDelegate): Crashlytics;

	static startWithAPIKeyDelegateAfterDelay(apiKey: string, delegate: CrashlyticsDelegate, delay: number): Crashlytics;

	readonly APIKey: string;

	debugMode: boolean;

	delegate: CrashlyticsDelegate;

	readonly version: string;

	crash(): void;

	logEvent(eventName: string): void;

	logEventAttributes(eventName: string, attributes: NSDictionary<any, any>): void;

	recordCustomExceptionNameReasonFrameArray(name: string, reason: string, frameArray: NSArray<CLSStackFrame> | CLSStackFrame[]): void;

	recordError(error: NSError): void;

	recordErrorWithAdditionalUserInfo(error: NSError, userInfo: NSDictionary<string, any>): void;

	setBoolValueForKey(value: boolean, key: string): void;

	setFloatValueForKey(value: number, key: string): void;

	setIntValueForKey(value: number, key: string): void;

	setObjectValueForKey(value: any, key: string): void;

	setUserEmail(email: string): void;

	setUserIdentifier(identifier: string): void;

	setUserName(name: string): void;

	throwException(): void;
}

interface CrashlyticsDelegate extends NSObjectProtocol {

	crashlyticsCanUseBackgroundSessions?(crashlytics: Crashlytics): boolean;

	crashlyticsDidDetectCrashDuringPreviousExecution?(crashlytics: Crashlytics): void;

	crashlyticsDidDetectCrashDuringPreviousExecution?(crashlytics: Crashlytics, crash: CLSCrashReport): void;

	crashlyticsDidDetectReportForLastExecution?(report: CLSReport): void;

	crashlyticsDidDetectReportForLastExecutionCompletionHandler?(report: CLSReport, completionHandler: (p1: boolean) => void): void;
}
declare var CrashlyticsDelegate: {

	prototype: CrashlyticsDelegate;
};
