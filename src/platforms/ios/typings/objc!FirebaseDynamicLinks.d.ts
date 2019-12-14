
declare const enum FIRDLMatchType {

	None = 0,

	Weak = 1,

	Default = 2,

	Unique = 3
}

declare class FIRDynamicLink extends NSObject {

	static alloc(): FIRDynamicLink; // inherited from NSObject

	static new(): FIRDynamicLink; // inherited from NSObject

	readonly matchType: FIRDLMatchType;

	readonly minimumAppVersion: string;

	readonly url: NSURL;
}

declare class FIRDynamicLinkAndroidParameters extends NSObject {

	static alloc(): FIRDynamicLinkAndroidParameters; // inherited from NSObject

	static new(): FIRDynamicLinkAndroidParameters; // inherited from NSObject

	static parametersWithPackageName(packageName: string): FIRDynamicLinkAndroidParameters;

	fallbackURL: NSURL;

	minimumVersion: number;

	readonly packageName: string;

	constructor(o: { packageName: string; });

	initWithPackageName(packageName: string): this;
}

declare class FIRDynamicLinkComponents extends NSObject {

	static alloc(): FIRDynamicLinkComponents; // inherited from NSObject

	static componentsWithLinkDomainURIPrefix(link: NSURL, domainURIPrefix: string): FIRDynamicLinkComponents;

	static new(): FIRDynamicLinkComponents; // inherited from NSObject

	static shortenURLOptionsCompletion(url: NSURL, options: FIRDynamicLinkComponentsOptions, completion: (p1: NSURL, p2: NSArray<string>, p3: NSError) => void): void;

	analyticsParameters: FIRDynamicLinkGoogleAnalyticsParameters;

	androidParameters: FIRDynamicLinkAndroidParameters;

	domain: string;

	iOSParameters: FIRDynamicLinkIOSParameters;

	iTunesConnectParameters: FIRDynamicLinkItunesConnectAnalyticsParameters;

	link: NSURL;

	navigationInfoParameters: FIRDynamicLinkNavigationInfoParameters;

	options: FIRDynamicLinkComponentsOptions;

	otherPlatformParameters: FIRDynamicLinkOtherPlatformParameters;

	socialMetaTagParameters: FIRDynamicLinkSocialMetaTagParameters;

	readonly url: NSURL;

	constructor(o: { link: NSURL; domainURIPrefix: string; });

	initWithLinkDomainURIPrefix(link: NSURL, domainURIPrefix: string): this;

	shortenWithCompletion(completion: (p1: NSURL, p2: NSArray<string>, p3: NSError) => void): void;
}

declare class FIRDynamicLinkComponentsOptions extends NSObject {

	static alloc(): FIRDynamicLinkComponentsOptions; // inherited from NSObject

	static new(): FIRDynamicLinkComponentsOptions; // inherited from NSObject

	static options(): FIRDynamicLinkComponentsOptions;

	pathLength: FIRShortDynamicLinkPathLength;
}

declare class FIRDynamicLinkGoogleAnalyticsParameters extends NSObject {

	static alloc(): FIRDynamicLinkGoogleAnalyticsParameters; // inherited from NSObject

	static new(): FIRDynamicLinkGoogleAnalyticsParameters; // inherited from NSObject

	static parameters(): FIRDynamicLinkGoogleAnalyticsParameters;

	static parametersWithSourceMediumCampaign(source: string, medium: string, campaign: string): FIRDynamicLinkGoogleAnalyticsParameters;

	campaign: string;

	content: string;

	medium: string;

	source: string;

	term: string;

	constructor(o: { source: string; medium: string; campaign: string; });

	initWithSourceMediumCampaign(source: string, medium: string, campaign: string): this;
}

declare class FIRDynamicLinkIOSParameters extends NSObject {

	static alloc(): FIRDynamicLinkIOSParameters; // inherited from NSObject

	static new(): FIRDynamicLinkIOSParameters; // inherited from NSObject

	static parametersWithBundleID(bundleID: string): FIRDynamicLinkIOSParameters;

	appStoreID: string;

	readonly bundleID: string;

	customScheme: string;

	fallbackURL: NSURL;

	iPadBundleID: string;

	iPadFallbackURL: NSURL;

	minimumAppVersion: string;

	constructor(o: { bundleID: string; });

	initWithBundleID(bundleID: string): this;
}

declare class FIRDynamicLinkItunesConnectAnalyticsParameters extends NSObject {

	static alloc(): FIRDynamicLinkItunesConnectAnalyticsParameters; // inherited from NSObject

	static new(): FIRDynamicLinkItunesConnectAnalyticsParameters; // inherited from NSObject

	static parameters(): FIRDynamicLinkItunesConnectAnalyticsParameters;

	affiliateToken: string;

	campaignToken: string;

	providerToken: string;
}

declare class FIRDynamicLinkNavigationInfoParameters extends NSObject {

	static alloc(): FIRDynamicLinkNavigationInfoParameters; // inherited from NSObject

	static new(): FIRDynamicLinkNavigationInfoParameters; // inherited from NSObject

	static parameters(): FIRDynamicLinkNavigationInfoParameters;

	forcedRedirectEnabled: boolean;
}

declare class FIRDynamicLinkOtherPlatformParameters extends NSObject {

	static alloc(): FIRDynamicLinkOtherPlatformParameters; // inherited from NSObject

	static new(): FIRDynamicLinkOtherPlatformParameters; // inherited from NSObject

	static parameters(): FIRDynamicLinkOtherPlatformParameters;

	fallbackUrl: NSURL;
}

declare class FIRDynamicLinkSocialMetaTagParameters extends NSObject {

	static alloc(): FIRDynamicLinkSocialMetaTagParameters; // inherited from NSObject

	static new(): FIRDynamicLinkSocialMetaTagParameters; // inherited from NSObject

	static parameters(): FIRDynamicLinkSocialMetaTagParameters;

	descriptionText: string;

	imageURL: NSURL;

	title: string;
}

declare class FIRDynamicLinks extends NSObject {

	static alloc(): FIRDynamicLinks; // inherited from NSObject

	static dynamicLinks(): FIRDynamicLinks;

	static new(): FIRDynamicLinks; // inherited from NSObject

	static performDiagnosticsWithCompletion(completionHandler: (p1: string, p2: boolean) => void): void;

	dynamicLinkFromCustomSchemeURL(url: NSURL): FIRDynamicLink;

	dynamicLinkFromUniversalLinkURL(url: NSURL): FIRDynamicLink;

	handleUniversalLinkCompletion(url: NSURL, completion: (p1: FIRDynamicLink, p2: NSError) => void): boolean;

	matchesShortLinkFormat(url: NSURL): boolean;

	resolveShortLinkCompletion(url: NSURL, completion: (p1: NSURL, p2: NSError) => void): void;

	shouldHandleDynamicLinkFromCustomSchemeURL(url: NSURL): boolean;
}

declare const enum FIRShortDynamicLinkPathLength {

	Default = 0,

	Short = 1,

	Unguessable = 2
}

declare var FirebaseDynamicLinksVersionNumber: number;

declare var FirebaseDynamicLinksVersionString: interop.Reference<number>;
