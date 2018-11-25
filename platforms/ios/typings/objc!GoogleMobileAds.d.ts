
declare function CGSizeFromGADAdSize(size: GADAdSize): CGSize;

interface DFPBannerAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveDFPBannerView(adLoader: GADAdLoader, bannerView: DFPBannerView): void;

	validBannerSizesForAdLoader(adLoader: GADAdLoader): NSArray<NSValue>;
}
declare var DFPBannerAdLoaderDelegate: {

	prototype: DFPBannerAdLoaderDelegate;
};

declare class DFPBannerView extends GADBannerView {

	static alloc(): DFPBannerView; // inherited from NSObject

	static appearance(): DFPBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DFPBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DFPBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): DFPBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DFPBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): DFPBannerView; // inherited from UIAppearance

	static new(): DFPBannerView; // inherited from NSObject

	appEventDelegate: GADAppEventDelegate;

	correlator: GADCorrelator;

	customRenderedBannerViewDelegate: DFPCustomRenderedBannerViewDelegate;

	enableManualImpressions: boolean;

	validAdSizes: NSArray<any>;

	readonly videoController: GADVideoController;

	recordImpression(): void;

	resize(size: GADAdSize): void;

	setAdOptions(adOptions: NSArray<any>): void;

	setValidAdSizesWithSizes(firstSize: interop.Pointer | interop.Reference<GADAdSize>): void;
}

declare class DFPBannerViewOptions extends GADAdLoaderOptions {

	static alloc(): DFPBannerViewOptions; // inherited from NSObject

	static new(): DFPBannerViewOptions; // inherited from NSObject

	adSizeDelegate: GADAdSizeDelegate;

	appEventDelegate: GADAppEventDelegate;

	enableManualImpressions: boolean;
}

declare class DFPCustomRenderedAd extends NSObject {

	static alloc(): DFPCustomRenderedAd; // inherited from NSObject

	static new(): DFPCustomRenderedAd; // inherited from NSObject

	readonly adBaseURL: NSURL;

	readonly adHTML: string;

	finishedRenderingAdView(view: UIView): void;

	recordClick(): void;

	recordImpression(): void;
}

interface DFPCustomRenderedBannerViewDelegate extends NSObjectProtocol {

	bannerViewDidReceiveCustomRenderedAd(bannerView: DFPBannerView, customRenderedAd: DFPCustomRenderedAd): void;
}
declare var DFPCustomRenderedBannerViewDelegate: {

	prototype: DFPCustomRenderedBannerViewDelegate;
};

interface DFPCustomRenderedInterstitialDelegate extends NSObjectProtocol {

	interstitialDidReceiveCustomRenderedAd(interstitial: DFPInterstitial, customRenderedAd: DFPCustomRenderedAd): void;
}
declare var DFPCustomRenderedInterstitialDelegate: {

	prototype: DFPCustomRenderedInterstitialDelegate;
};

declare class DFPInterstitial extends GADInterstitial {

	static alloc(): DFPInterstitial; // inherited from NSObject

	static new(): DFPInterstitial; // inherited from NSObject

	appEventDelegate: GADAppEventDelegate;

	correlator: GADCorrelator;

	customRenderedInterstitialDelegate: DFPCustomRenderedInterstitialDelegate;
}

declare class DFPRequest extends GADRequest {

	static alloc(): DFPRequest; // inherited from NSObject

	static new(): DFPRequest; // inherited from NSObject

	static request(): DFPRequest; // inherited from GADRequest

	static updateCorrelator(): void;

	categoryExclusions: NSArray<any>;

	customTargeting: NSDictionary<any, any>;

	publisherProvidedID: string;
}

declare const enum GADAdChoicesPosition {

	TopRightCorner = 0,

	TopLeftCorner = 1,

	BottomRightCorner = 2,

	BottomLeftCorner = 3
}

declare class GADAdChoicesView extends UIView {

	static alloc(): GADAdChoicesView; // inherited from NSObject

	static appearance(): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADAdChoicesView; // inherited from UIAppearance

	static new(): GADAdChoicesView; // inherited from NSObject
}

declare class GADAdLoader extends NSObject {

	static alloc(): GADAdLoader; // inherited from NSObject

	static new(): GADAdLoader; // inherited from NSObject

	readonly adUnitID: string;

	delegate: GADAdLoaderDelegate;

	readonly loading: boolean;

	constructor(o: { adUnitID: string; rootViewController: UIViewController; adTypes: NSArray<string>; options: NSArray<GADAdLoaderOptions>; });

	initWithAdUnitIDRootViewControllerAdTypesOptions(adUnitID: string, rootViewController: UIViewController, adTypes: NSArray<string>, options: NSArray<GADAdLoaderOptions>): this;

	loadRequest(request: GADRequest): void;
}

interface GADAdLoaderDelegate extends NSObjectProtocol {

	adLoaderDidFailToReceiveAdWithError(adLoader: GADAdLoader, error: GADRequestError): void;

	adLoaderDidFinishLoading?(adLoader: GADAdLoader): void;
}
declare var GADAdLoaderDelegate: {

	prototype: GADAdLoaderDelegate;
};

declare class GADAdLoaderOptions extends NSObject {

	static alloc(): GADAdLoaderOptions; // inherited from NSObject

	static new(): GADAdLoaderOptions; // inherited from NSObject
}

interface GADAdNetworkExtras extends NSObjectProtocol {
}
declare var GADAdNetworkExtras: {

	prototype: GADAdNetworkExtras;
};

declare class GADAdReward extends NSObject {

	static alloc(): GADAdReward; // inherited from NSObject

	static new(): GADAdReward; // inherited from NSObject

	readonly amount: NSDecimalNumber;

	readonly type: string;

	constructor(o: { rewardType: string; rewardAmount: NSDecimalNumber; });

	initWithRewardTypeRewardAmount(rewardType: string, rewardAmount: NSDecimalNumber): this;
}

interface GADAdSize {
	size: CGSize;
	flags: number;
}
declare var GADAdSize: interop.StructType<GADAdSize>;

interface GADAdSizeDelegate extends NSObjectProtocol {

	adViewWillChangeAdSizeTo(bannerView: GADBannerView, size: GADAdSize): void;
}
declare var GADAdSizeDelegate: {

	prototype: GADAdSizeDelegate;
};

declare function GADAdSizeEqualToSize(size1: GADAdSize, size2: GADAdSize): boolean;

declare function GADAdSizeFromCGSize(size: CGSize): GADAdSize;

declare function GADAdSizeFromNSValue(value: NSValue): GADAdSize;

declare function GADAdSizeFullWidthLandscapeWithHeight(height: number): GADAdSize;

declare function GADAdSizeFullWidthPortraitWithHeight(height: number): GADAdSize;

declare function GADAdSizeIsFluid(size: GADAdSize): boolean;

interface GADAppEventDelegate extends NSObjectProtocol {

	adViewDidReceiveAppEventWithInfo?(banner: GADBannerView, name: string, info: string): void;

	interstitialDidReceiveAppEventWithInfo?(interstitial: GADInterstitial, name: string, info: string): void;
}
declare var GADAppEventDelegate: {

	prototype: GADAppEventDelegate;
};

declare class GADAudioVideoManager extends NSObject {

	static alloc(): GADAudioVideoManager; // inherited from NSObject

	static new(): GADAudioVideoManager; // inherited from NSObject

	audioSessionIsApplicationManaged: boolean;

	delegate: GADAudioVideoManagerDelegate;
}

interface GADAudioVideoManagerDelegate extends NSObjectProtocol {

	audioVideoManagerDidPauseAllVideo?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerDidStopPlayingAudio?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerWillPlayAudio?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerWillPlayVideo?(audioVideoManager: GADAudioVideoManager): void;
}
declare var GADAudioVideoManagerDelegate: {

	prototype: GADAudioVideoManagerDelegate;
};

declare class GADBannerView extends UIView {

	static alloc(): GADBannerView; // inherited from NSObject

	static appearance(): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADBannerView; // inherited from UIAppearance

	static new(): GADBannerView; // inherited from NSObject

	readonly adNetworkClassName: string;

	adSize: GADAdSize;

	adSizeDelegate: GADAdSizeDelegate;

	adUnitID: string;

	autoloadEnabled: boolean;

	delegate: GADBannerViewDelegate;

	readonly hasAutoRefreshed: boolean;

	inAppPurchaseDelegate: GADInAppPurchaseDelegate;

	readonly mediatedAdView: UIView;

	rootViewController: UIViewController;

	constructor(o: { adSize: GADAdSize; });

	constructor(o: { adSize: GADAdSize; origin: CGPoint; });

	initWithAdSize(adSize: GADAdSize): this;

	initWithAdSizeOrigin(adSize: GADAdSize, origin: CGPoint): this;

	loadRequest(request: GADRequest): void;
}

interface GADBannerViewDelegate extends NSObjectProtocol {

	adViewDidDismissScreen?(bannerView: GADBannerView): void;

	adViewDidFailToReceiveAdWithError?(bannerView: GADBannerView, error: GADRequestError): void;

	adViewDidReceiveAd?(bannerView: GADBannerView): void;

	adViewWillDismissScreen?(bannerView: GADBannerView): void;

	adViewWillLeaveApplication?(bannerView: GADBannerView): void;

	adViewWillPresentScreen?(bannerView: GADBannerView): void;
}
declare var GADBannerViewDelegate: {

	prototype: GADBannerViewDelegate;
};

declare class GADCorrelator extends NSObject {

	static alloc(): GADCorrelator; // inherited from NSObject

	static new(): GADCorrelator; // inherited from NSObject

	reset(): void;
}

declare class GADCorrelatorAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADCorrelatorAdLoaderOptions; // inherited from NSObject

	static new(): GADCorrelatorAdLoaderOptions; // inherited from NSObject

	correlator: GADCorrelator;
}

interface GADCustomEventBanner extends NSObjectProtocol {

	delegate: GADCustomEventBannerDelegate;

	requestBannerAdParameterLabelRequest(adSize: GADAdSize, serverParameter: string, serverLabel: string, request: GADCustomEventRequest): void;
}
declare var GADCustomEventBanner: {

	prototype: GADCustomEventBanner;
};

interface GADCustomEventBannerDelegate extends NSObjectProtocol {

	viewControllerForPresentingModalView: UIViewController;

	customEventBannerClickDidOccurInAd(customEvent: GADCustomEventBanner, view: UIView): void;

	customEventBannerDidDismissModal(customEvent: GADCustomEventBanner): void;

	customEventBannerDidFailAd(customEvent: GADCustomEventBanner, error: NSError): void;

	customEventBannerDidReceiveAd(customEvent: GADCustomEventBanner, view: UIView): void;

	customEventBannerWasClicked(customEvent: GADCustomEventBanner): void;

	customEventBannerWillDismissModal(customEvent: GADCustomEventBanner): void;

	customEventBannerWillLeaveApplication(customEvent: GADCustomEventBanner): void;

	customEventBannerWillPresentModal(customEvent: GADCustomEventBanner): void;
}
declare var GADCustomEventBannerDelegate: {

	prototype: GADCustomEventBannerDelegate;
};

declare class GADCustomEventExtras extends NSObject implements GADAdNetworkExtras {

	static alloc(): GADCustomEventExtras; // inherited from NSObject

	static new(): GADCustomEventExtras; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	allExtras(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	extrasForLabel(label: string): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllExtras(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setExtrasForLabel(extras: NSDictionary<any, any>, label: string): void;
}

interface GADCustomEventInterstitial extends NSObjectProtocol {

	delegate: GADCustomEventInterstitialDelegate;

	presentFromRootViewController(rootViewController: UIViewController): void;

	requestInterstitialAdWithParameterLabelRequest(serverParameter: string, serverLabel: string, request: GADCustomEventRequest): void;
}
declare var GADCustomEventInterstitial: {

	prototype: GADCustomEventInterstitial;
};

interface GADCustomEventInterstitialDelegate extends NSObjectProtocol {

	customEventInterstitialDidDismiss(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialDidFailAd(customEvent: GADCustomEventInterstitial, error: NSError): void;

	customEventInterstitialDidReceiveAd(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialDidReceiveAd(customEvent: GADCustomEventInterstitial, ad: NSObject): void;

	customEventInterstitialWasClicked(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillDismiss(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillLeaveApplication(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillPresent(customEvent: GADCustomEventInterstitial): void;
}
declare var GADCustomEventInterstitialDelegate: {

	prototype: GADCustomEventInterstitialDelegate;
};

interface GADCustomEventNativeAd extends NSObjectProtocol {

	delegate: GADCustomEventNativeAdDelegate;

	handlesUserClicks(): boolean;

	handlesUserImpressions(): boolean;

	requestNativeAdWithParameterRequestAdTypesOptionsRootViewController(serverParameter: string, request: GADCustomEventRequest, adTypes: NSArray<any>, options: NSArray<any>, rootViewController: UIViewController): void;
}
declare var GADCustomEventNativeAd: {

	prototype: GADCustomEventNativeAd;
};

interface GADCustomEventNativeAdDelegate extends NSObjectProtocol {

	customEventNativeAdDidFailToLoadWithError(customEventNativeAd: GADCustomEventNativeAd, error: NSError): void;

	customEventNativeAdDidReceiveMediatedNativeAd(customEventNativeAd: GADCustomEventNativeAd, mediatedNativeAd: GADMediatedNativeAd): void;

	customEventNativeAdDidReceiveMediatedUnifiedNativeAd(customEventNativeAd: GADCustomEventNativeAd, mediatedUnifiedNativeAd: GADMediatedUnifiedNativeAd): void;
}
declare var GADCustomEventNativeAdDelegate: {

	prototype: GADCustomEventNativeAdDelegate;
};

declare var GADCustomEventParametersServer: string;

declare class GADCustomEventRequest extends NSObject {

	static alloc(): GADCustomEventRequest; // inherited from NSObject

	static new(): GADCustomEventRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<any, any>;

	readonly isTesting: boolean;

	readonly userBirthday: Date;

	readonly userGender: GADGender;

	readonly userHasLocation: boolean;

	readonly userKeywords: NSArray<any>;

	readonly userLatitude: number;

	readonly userLocationAccuracyInMeters: number;

	readonly userLocationDescription: string;

	readonly userLongitude: number;
}

declare class GADDebugOptionsViewController extends UIViewController {

	static alloc(): GADDebugOptionsViewController; // inherited from NSObject

	static debugOptionsViewControllerWithAdUnitID(adUnitID: string): GADDebugOptionsViewController;

	static new(): GADDebugOptionsViewController; // inherited from NSObject

	delegate: GADDebugOptionsViewControllerDelegate;
}

interface GADDebugOptionsViewControllerDelegate extends NSObjectProtocol {

	debugOptionsViewControllerDidDismiss(controller: GADDebugOptionsViewController): void;
}
declare var GADDebugOptionsViewControllerDelegate: {

	prototype: GADDebugOptionsViewControllerDelegate;
};

declare class GADDefaultInAppPurchase extends NSObject {

	static alloc(): GADDefaultInAppPurchase; // inherited from NSObject

	static disableDefaultPurchaseFlow(): void;

	static enableDefaultPurchaseFlowWithDelegate(delegate: GADDefaultInAppPurchaseDelegate): void;

	static new(): GADDefaultInAppPurchase; // inherited from NSObject

	readonly paymentTransaction: SKPaymentTransaction;

	readonly productID: string;

	readonly quantity: number;

	finishTransaction(): void;
}

interface GADDefaultInAppPurchaseDelegate extends NSObjectProtocol {

	shouldStartPurchaseForProductIDQuantity?(productID: string, quantity: number): boolean;

	userDidPayForPurchase(defaultInAppPurchase: GADDefaultInAppPurchase): void;
}
declare var GADDefaultInAppPurchaseDelegate: {

	prototype: GADDefaultInAppPurchaseDelegate;
};

declare class GADDynamicHeightSearchRequest extends GADRequest {

	static alloc(): GADDynamicHeightSearchRequest; // inherited from NSObject

	static new(): GADDynamicHeightSearchRequest; // inherited from NSObject

	static request(): GADDynamicHeightSearchRequest; // inherited from GADRequest

	CSSWidth: string;

	adBorderCSSSelections: string;

	adBorderColor: string;

	adPage: number;

	adSeparatorColor: string;

	adTestEnabled: boolean;

	adjustableLineHeight: number;

	annotationFontSize: number;

	annotationTextColor: string;

	attributionBottomSpacing: number;

	attributionFontFamily: string;

	attributionFontSize: number;

	attributionTextColor: string;

	backgroundColor: string;

	boldTitleEnabled: boolean;

	borderCSSSelections: string;

	borderColor: string;

	channel: string;

	clickToCallExtensionEnabled: boolean;

	descriptionFontSize: number;

	detailedAttributionExtensionEnabled: boolean;

	domainLinkColor: string;

	domainLinkFontSize: number;

	fontFamily: string;

	hostLanguage: string;

	locationExtensionEnabled: boolean;

	locationExtensionFontSize: number;

	locationExtensionTextColor: string;

	longerHeadlinesExtensionEnabled: boolean;

	numberOfAds: number;

	plusOnesExtensionEnabled: boolean;

	query: string;

	sellerRatingsExtensionEnabled: boolean;

	siteLinksExtensionEnabled: boolean;

	textColor: string;

	titleFontSize: number;

	titleLinkColor: string;

	titleUnderlineHidden: boolean;

	verticalSpacing: number;

	setAdvancedOptionValueForKey(value: any, key: string): void;
}

declare const enum GADErrorCode {

	kGADErrorInvalidRequest = 0,

	kGADErrorNoFill = 1,

	kGADErrorNetworkError = 2,

	kGADErrorServerError = 3,

	kGADErrorOSVersionTooLow = 4,

	kGADErrorTimeout = 5,

	kGADErrorInterstitialAlreadyUsed = 6,

	kGADErrorMediationDataError = 7,

	kGADErrorMediationAdapterError = 8,

	kGADErrorMediationNoFill = 9,

	kGADErrorMediationInvalidAdSize = 10,

	kGADErrorInternalError = 11,

	kGADErrorInvalidArgument = 12,

	kGADErrorReceivedInvalidResponse = 13
}

declare class GADExtras extends NSObject implements GADAdNetworkExtras {

	static alloc(): GADExtras; // inherited from NSObject

	static new(): GADExtras; // inherited from NSObject

	additionalParameters: NSDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

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
}

declare const enum GADGender {

	kGADGenderUnknown = 0,

	kGADGenderMale = 1,

	kGADGenderFemale = 2
}

declare class GADInAppPurchase extends NSObject {

	static alloc(): GADInAppPurchase; // inherited from NSObject

	static new(): GADInAppPurchase; // inherited from NSObject

	readonly productID: string;

	readonly quantity: number;

	reportPurchaseStatus(purchaseStatus: GADInAppPurchaseStatus): void;
}

interface GADInAppPurchaseDelegate extends NSObjectProtocol {

	didReceiveInAppPurchase(purchase: GADInAppPurchase): void;
}
declare var GADInAppPurchaseDelegate: {

	prototype: GADInAppPurchaseDelegate;
};

declare const enum GADInAppPurchaseStatus {

	kGADInAppPurchaseStatusError = 0,

	kGADInAppPurchaseStatusSuccessful = 1,

	kGADInAppPurchaseStatusCancel = 2,

	kGADInAppPurchaseStatusInvalidProduct = 3
}

declare class GADInterstitial extends NSObject {

	static alloc(): GADInterstitial; // inherited from NSObject

	static new(): GADInterstitial; // inherited from NSObject

	readonly adNetworkClassName: string;

	readonly adUnitID: string;

	delegate: GADInterstitialDelegate;

	readonly hasBeenUsed: boolean;

	inAppPurchaseDelegate: GADInAppPurchaseDelegate;

	readonly isReady: boolean;

	constructor(o: { adUnitID: string; });

	initWithAdUnitID(adUnitID: string): this;

	loadRequest(request: GADRequest): void;

	presentFromRootViewController(rootViewController: UIViewController): void;

	setAdUnitID(adUnitID: string): void;
}

interface GADInterstitialDelegate extends NSObjectProtocol {

	interstitialDidDismissScreen?(ad: GADInterstitial): void;

	interstitialDidFailToPresentScreen?(ad: GADInterstitial): void;

	interstitialDidFailToReceiveAdWithError?(ad: GADInterstitial, error: GADRequestError): void;

	interstitialDidReceiveAd?(ad: GADInterstitial): void;

	interstitialWillDismissScreen?(ad: GADInterstitial): void;

	interstitialWillLeaveApplication?(ad: GADInterstitial): void;

	interstitialWillPresentScreen?(ad: GADInterstitial): void;
}
declare var GADInterstitialDelegate: {

	prototype: GADInterstitialDelegate;
};

interface GADMAdNetworkAdapter extends NSObjectProtocol {

	changeAdSizeTo?(adSize: GADAdSize): void;

	getBannerWithSize(adSize: GADAdSize): void;

	getInterstitial(): void;

	getNativeAdWithAdTypesOptions?(adTypes: NSArray<any>, options: NSArray<any>): void;

	handlesUserClicks?(): boolean;

	handlesUserImpressions?(): boolean;

	initWithGADMAdNetworkConnector?(connector: GADMAdNetworkConnector): GADMAdNetworkAdapter;

	isBannerAnimationOK(animType: GADMBannerAnimationType): boolean;

	presentInterstitialFromRootViewController(rootViewController: UIViewController): void;

	stopBeingDelegate(): void;
}
declare var GADMAdNetworkAdapter: {

	prototype: GADMAdNetworkAdapter;

	adapterVersion(): string;

	networkExtrasClass(): typeof NSObject;
};

interface GADMAdNetworkConnector extends GADMediationAdRequest {

	adMuted(): boolean;

	adVolume(): number;

	adapterClickDidOccurInBanner(adapter: GADMAdNetworkAdapter, view: UIView): void;

	adapterDidDismissFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterDidDismissInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterDidFailAd(adapter: GADMAdNetworkAdapter, error: NSError): void;

	adapterDidFailInterstitial(adapter: GADMAdNetworkAdapter, error: NSError): void;

	adapterDidGetAdClick(adapter: GADMAdNetworkAdapter): void;

	adapterDidReceiveAdView(adapter: GADMAdNetworkAdapter, view: UIView): void;

	adapterDidReceiveInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterDidReceiveInterstitial(adapter: GADMAdNetworkAdapter, interstitial: NSObject): void;

	adapterDidReceiveMediatedNativeAd(adapter: GADMAdNetworkAdapter, mediatedNativeAd: GADMediatedNativeAd): void;

	adapterDidReceiveMediatedUnifiedNativeAd(adapter: GADMAdNetworkAdapter, mediatedUnifiedNativeAd: GADMediatedUnifiedNativeAd): void;

	adapterWillDismissFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterWillDismissInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterWillLeaveApplication(adapter: GADMAdNetworkAdapter): void;

	adapterWillPresentFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterWillPresentInterstitial(adapter: GADMAdNetworkAdapter): void;

	viewControllerForPresentingModalView(): UIViewController;
}
declare var GADMAdNetworkConnector: {

	prototype: GADMAdNetworkConnector;
};

declare const enum GADMBannerAnimationType {

	kGADMBannerAnimationTypeNone = 0,

	kGADMBannerAnimationTypeFlipFromLeft = 1,

	kGADMBannerAnimationTypeFlipFromRight = 2,

	kGADMBannerAnimationTypeCurlUp = 3,

	kGADMBannerAnimationTypeCurlDown = 4,

	kGADMBannerAnimationTypeSlideFromLeft = 5,

	kGADMBannerAnimationTypeSlideFromRight = 6,

	kGADMBannerAnimationTypeFadeIn = 7,

	kGADMBannerAnimationTypeRandom = 8
}

interface GADMRewardBasedVideoAdNetworkAdapter extends NSObjectProtocol {

	initWithGADMAdNetworkConnector?(connector: GADMRewardBasedVideoAdNetworkConnector): GADMRewardBasedVideoAdNetworkAdapter;

	initWithRewardBasedVideoAdNetworkConnector?(connector: GADMRewardBasedVideoAdNetworkConnector): GADMRewardBasedVideoAdNetworkAdapter;

	initWithRewardBasedVideoAdNetworkConnectorCredentials?(connector: GADMRewardBasedVideoAdNetworkConnector, credentials: NSArray<NSDictionary<any, any>>): GADMRewardBasedVideoAdNetworkAdapter;

	presentRewardBasedVideoAdWithRootViewController(viewController: UIViewController): void;

	requestRewardBasedVideoAd(): void;

	setUp(): void;

	setUpWithUserID?(userID: string): void;

	stopBeingDelegate(): void;
}
declare var GADMRewardBasedVideoAdNetworkAdapter: {

	prototype: GADMRewardBasedVideoAdNetworkAdapter;

	adapterVersion(): string;

	networkExtrasClass(): typeof NSObject;
};

interface GADMRewardBasedVideoAdNetworkConnector extends GADMediationAdRequest {

	adapterDidCloseRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidCompletePlayingRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidFailToLoadRewardBasedVideoAdwithError(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter, error: NSError): void;

	adapterDidFailToSetUpRewardBasedVideoAdWithError(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter, error: NSError): void;

	adapterDidGetAdClick(adapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidOpenRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidReceiveRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidRewardUserWithReward(rewardBasedVideoAd: GADMRewardBasedVideoAdNetworkAdapter, reward: GADAdReward): void;

	adapterDidSetUpRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidStartPlayingRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterWillLeaveApplication(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;
}
declare var GADMRewardBasedVideoAdNetworkConnector: {

	prototype: GADMRewardBasedVideoAdNetworkConnector;
};

declare class GADMediaView extends UIView {

	static alloc(): GADMediaView; // inherited from NSObject

	static appearance(): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADMediaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADMediaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADMediaView; // inherited from UIAppearance

	static new(): GADMediaView; // inherited from NSObject
}

interface GADMediatedNativeAd extends NSObjectProtocol {

	extraAssets(): NSDictionary<any, any>;

	mediatedNativeAdDelegate(): GADMediatedNativeAdDelegate;
}
declare var GADMediatedNativeAd: {

	prototype: GADMediatedNativeAd;
};

interface GADMediatedNativeAdDelegate extends NSObjectProtocol {

	mediatedNativeAdDidRecordClickOnAssetWithNameViewViewController?(mediatedNativeAd: GADMediatedNativeAd, assetName: string, view: UIView, viewController: UIViewController): void;

	mediatedNativeAdDidRecordImpression?(mediatedNativeAd: GADMediatedNativeAd): void;

	mediatedNativeAdDidRenderInViewClickableAssetViewsNonclickableAssetViewsViewController?(mediatedNativeAd: GADMediatedNativeAd, view: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>, viewController: UIViewController): void;

	mediatedNativeAdDidRenderInViewViewController?(mediatedNativeAd: GADMediatedNativeAd, view: UIView, viewController: UIViewController): void;

	mediatedNativeAdDidUntrackView?(mediatedNativeAd: GADMediatedNativeAd, view: UIView): void;
}
declare var GADMediatedNativeAdDelegate: {

	prototype: GADMediatedNativeAdDelegate;
};

declare class GADMediatedNativeAdNotificationSource extends NSObject {

	static alloc(): GADMediatedNativeAdNotificationSource; // inherited from NSObject

	static mediatedNativeAdDidDismissScreen(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdDidEndVideoPlayback(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdDidPauseVideo(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdDidPlayVideo(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdDidRecordClick(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdDidRecordImpression(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdWillDismissScreen(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdWillLeaveApplication(mediatedNativeAd: GADMediatedNativeAd): void;

	static mediatedNativeAdWillPresentScreen(mediatedNativeAd: GADMediatedNativeAd): void;

	static new(): GADMediatedNativeAdNotificationSource; // inherited from NSObject
}

interface GADMediatedNativeAppInstallAd extends GADMediatedNativeAd {

	adChoicesView?(): UIView;

	body(): string;

	callToAction(): string;

	hasVideoContent?(): boolean;

	headline(): string;

	icon(): GADNativeAdImage;

	images(): NSArray<any>;

	mediaView?(): UIView;

	price(): string;

	starRating(): NSDecimalNumber;

	store(): string;
}
declare var GADMediatedNativeAppInstallAd: {

	prototype: GADMediatedNativeAppInstallAd;
};

interface GADMediatedNativeContentAd extends GADMediatedNativeAd {

	adChoicesView?(): UIView;

	advertiser(): string;

	body(): string;

	callToAction(): string;

	hasVideoContent?(): boolean;

	headline(): string;

	images(): NSArray<any>;

	logo(): GADNativeAdImage;

	mediaView?(): UIView;
}
declare var GADMediatedNativeContentAd: {

	prototype: GADMediatedNativeContentAd;
};

interface GADMediatedUnifiedNativeAd extends NSObjectProtocol {

	adChoicesView?: UIView;

	advertiser: string;

	body: string;

	callToAction: string;

	extraAssets: NSDictionary<string, any>;

	hasVideoContent?: boolean;

	headline: string;

	icon: GADNativeAdImage;

	images: NSArray<GADNativeAdImage>;

	mediaView?: UIView;

	price: string;

	starRating: NSDecimalNumber;

	store: string;

	didRecordClickOnAssetWithNameViewViewController?(assetName: string, view: UIView, viewController: UIViewController): void;

	didRecordImpression?(): void;

	didRenderInViewClickableAssetViewsNonclickableAssetViewsViewController?(view: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>, viewController: UIViewController): void;

	didUntrackView?(view: UIView): void;
}
declare var GADMediatedUnifiedNativeAd: {

	prototype: GADMediatedUnifiedNativeAd;
};

declare class GADMediatedUnifiedNativeAdNotificationSource extends NSObject {

	static alloc(): GADMediatedUnifiedNativeAdNotificationSource; // inherited from NSObject

	static mediatedNativeAdDidDismissScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidEndVideoPlayback(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidPauseVideo(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidPlayVideo(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidRecordClick(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidRecordImpression(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillDismissScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillLeaveApplication(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillPresentScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static new(): GADMediatedUnifiedNativeAdNotificationSource; // inherited from NSObject
}

interface GADMediationAdRequest extends NSObjectProtocol {

	childDirectedTreatment(): number;

	credentials(): NSDictionary<any, any>;

	networkExtras(): GADAdNetworkExtras;

	publisherId(): string;

	testMode(): boolean;

	userBirthday(): Date;

	userGender(): GADGender;

	userHasLocation(): boolean;

	userKeywords(): NSArray<any>;

	userLatitude(): number;

	userLocationAccuracyInMeters(): number;

	userLocationDescription(): string;

	userLongitude(): number;
}
declare var GADMediationAdRequest: {

	prototype: GADMediationAdRequest;
};

declare class GADMobileAds extends NSObject {

	static alloc(): GADMobileAds; // inherited from NSObject

	static configureWithApplicationID(applicationID: string): void;

	static disableAutomatedInAppPurchaseReporting(): void;

	static disableSDKCrashReporting(): void;

	static new(): GADMobileAds; // inherited from NSObject

	static sharedInstance(): GADMobileAds;

	applicationMuted: boolean;

	applicationVolume: number;

	readonly audioVideoManager: GADAudioVideoManager;

	isSDKVersionAtLeastMajorMinorPatch(major: number, minor: number, patch: number): boolean;
}

declare class GADMultipleAdsAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADMultipleAdsAdLoaderOptions; // inherited from NSObject

	static new(): GADMultipleAdsAdLoaderOptions; // inherited from NSObject

	numberOfAds: number;
}

declare class GADNativeAd extends NSObject {

	static alloc(): GADNativeAd; // inherited from NSObject

	static new(): GADNativeAd; // inherited from NSObject

	readonly adNetworkClassName: string;

	delegate: GADNativeAdDelegate;

	readonly extraAssets: NSDictionary<any, any>;

	rootViewController: UIViewController;
}

interface GADNativeAdDelegate extends NSObjectProtocol {

	nativeAdDidDismissScreen?(nativeAd: GADNativeAd): void;

	nativeAdDidRecordClick?(nativeAd: GADNativeAd): void;

	nativeAdDidRecordImpression?(nativeAd: GADNativeAd): void;

	nativeAdWillDismissScreen?(nativeAd: GADNativeAd): void;

	nativeAdWillLeaveApplication?(nativeAd: GADNativeAd): void;

	nativeAdWillPresentScreen?(nativeAd: GADNativeAd): void;
}
declare var GADNativeAdDelegate: {

	prototype: GADNativeAdDelegate;
};

declare class GADNativeAdImage extends NSObject {

	static alloc(): GADNativeAdImage; // inherited from NSObject

	static new(): GADNativeAdImage; // inherited from NSObject

	readonly image: UIImage;

	readonly imageURL: NSURL;

	readonly scale: number;

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; scale: number; });

	initWithImage(image: UIImage): this;

	initWithURLScale(URL: NSURL, scale: number): this;
}

declare class GADNativeAdImageAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeAdImageAdLoaderOptions; // inherited from NSObject

	static new(): GADNativeAdImageAdLoaderOptions; // inherited from NSObject

	disableImageLoading: boolean;

	preferredImageOrientation: GADNativeAdImageAdLoaderOptionsOrientation;

	shouldRequestMultipleImages: boolean;
}

declare const enum GADNativeAdImageAdLoaderOptionsOrientation {

	Any = 1,

	Portrait = 2,

	Landscape = 3
}

declare class GADNativeAdViewAdOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeAdViewAdOptions; // inherited from NSObject

	static new(): GADNativeAdViewAdOptions; // inherited from NSObject

	preferredAdChoicesPosition: GADAdChoicesPosition;
}

declare class GADNativeAppInstallAd extends GADNativeAd {

	static alloc(): GADNativeAppInstallAd; // inherited from NSObject

	static new(): GADNativeAppInstallAd; // inherited from NSObject

	readonly body: string;

	readonly callToAction: string;

	readonly headline: string;

	readonly icon: GADNativeAdImage;

	readonly images: NSArray<any>;

	readonly price: string;

	readonly starRating: NSDecimalNumber;

	readonly store: string;

	readonly videoController: GADVideoController;

	registerAdViewAssetViews(adView: UIView, assetViews: NSDictionary<string, UIView>): void;

	registerAdViewClickableAssetViewsNonclickableAssetViews(adView: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>): void;

	unregisterAdView(): void;
}

declare var GADNativeAppInstallAdChoicesViewAsset: string;

interface GADNativeAppInstallAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveNativeAppInstallAd(adLoader: GADAdLoader, nativeAppInstallAd: GADNativeAppInstallAd): void;
}
declare var GADNativeAppInstallAdLoaderDelegate: {

	prototype: GADNativeAppInstallAdLoaderDelegate;
};

declare class GADNativeAppInstallAdView extends UIView {

	static alloc(): GADNativeAppInstallAdView; // inherited from NSObject

	static appearance(): GADNativeAppInstallAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADNativeAppInstallAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADNativeAppInstallAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADNativeAppInstallAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADNativeAppInstallAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADNativeAppInstallAdView; // inherited from UIAppearance

	static new(): GADNativeAppInstallAdView; // inherited from NSObject

	adChoicesView: GADAdChoicesView;

	bodyView: UIView;

	callToActionView: UIView;

	headlineView: UIView;

	iconView: UIView;

	imageView: UIView;

	mediaView: GADMediaView;

	nativeAppInstallAd: GADNativeAppInstallAd;

	priceView: UIView;

	starRatingView: UIView;

	storeView: UIView;
}

declare var GADNativeAppInstallAttributionIconAsset: string;

declare var GADNativeAppInstallAttributionTextAsset: string;

declare var GADNativeAppInstallBackgroundAsset: string;

declare var GADNativeAppInstallBodyAsset: string;

declare var GADNativeAppInstallCallToActionAsset: string;

declare var GADNativeAppInstallHeadlineAsset: string;

declare var GADNativeAppInstallIconAsset: string;

declare var GADNativeAppInstallImageAsset: string;

declare var GADNativeAppInstallMediaViewAsset: string;

declare var GADNativeAppInstallPriceAsset: string;

declare var GADNativeAppInstallStarRatingAsset: string;

declare var GADNativeAppInstallStoreAsset: string;

declare class GADNativeContentAd extends GADNativeAd {

	static alloc(): GADNativeContentAd; // inherited from NSObject

	static new(): GADNativeContentAd; // inherited from NSObject

	readonly advertiser: string;

	readonly body: string;

	readonly callToAction: string;

	readonly headline: string;

	readonly images: NSArray<any>;

	readonly logo: GADNativeAdImage;

	readonly videoController: GADVideoController;

	registerAdViewAssetViews(adView: UIView, assetViews: NSDictionary<string, UIView>): void;

	registerAdViewClickableAssetViewsNonclickableAssetViews(adView: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>): void;

	unregisterAdView(): void;
}

declare var GADNativeContentAdChoicesViewAsset: string;

interface GADNativeContentAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveNativeContentAd(adLoader: GADAdLoader, nativeContentAd: GADNativeContentAd): void;
}
declare var GADNativeContentAdLoaderDelegate: {

	prototype: GADNativeContentAdLoaderDelegate;
};

declare class GADNativeContentAdView extends UIView {

	static alloc(): GADNativeContentAdView; // inherited from NSObject

	static appearance(): GADNativeContentAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADNativeContentAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADNativeContentAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADNativeContentAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADNativeContentAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADNativeContentAdView; // inherited from UIAppearance

	static new(): GADNativeContentAdView; // inherited from NSObject

	adChoicesView: GADAdChoicesView;

	advertiserView: UIView;

	bodyView: UIView;

	callToActionView: UIView;

	headlineView: UIView;

	imageView: UIView;

	logoView: UIView;

	mediaView: GADMediaView;

	nativeContentAd: GADNativeContentAd;
}

declare var GADNativeContentAdvertiserAsset: string;

declare var GADNativeContentAttributionIconAsset: string;

declare var GADNativeContentAttributionTextAsset: string;

declare var GADNativeContentBackgroundAsset: string;

declare var GADNativeContentBodyAsset: string;

declare var GADNativeContentCallToActionAsset: string;

declare var GADNativeContentHeadlineAsset: string;

declare var GADNativeContentImageAsset: string;

declare var GADNativeContentLogoAsset: string;

declare var GADNativeContentMediaViewAsset: string;

declare class GADNativeCustomTemplateAd extends GADNativeAd {

	static alloc(): GADNativeCustomTemplateAd; // inherited from NSObject

	static new(): GADNativeCustomTemplateAd; // inherited from NSObject

	readonly availableAssetKeys: NSArray<string>;

	customClickHandler: (p1: string) => void;

	readonly mediaView: GADMediaView;

	readonly templateID: string;

	readonly videoController: GADVideoController;

	imageForKey(key: string): GADNativeAdImage;

	performClickOnAssetWithKey(assetKey: string): void;

	performClickOnAssetWithKeyCustomClickHandler(assetKey: string, customClickHandler: () => void): void;

	recordImpression(): void;

	stringForKey(key: string): string;
}

interface GADNativeCustomTemplateAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveNativeCustomTemplateAd(adLoader: GADAdLoader, nativeCustomTemplateAd: GADNativeCustomTemplateAd): void;

	nativeCustomTemplateIDsForAdLoader(adLoader: GADAdLoader): NSArray<string>;
}
declare var GADNativeCustomTemplateAdLoaderDelegate: {

	prototype: GADNativeCustomTemplateAdLoaderDelegate;
};

declare var GADNativeCustomTemplateAdMediaViewKey: string;

declare class GADNativeExpressAdView extends UIView {

	static alloc(): GADNativeExpressAdView; // inherited from NSObject

	static appearance(): GADNativeExpressAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADNativeExpressAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADNativeExpressAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADNativeExpressAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADNativeExpressAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADNativeExpressAdView; // inherited from UIAppearance

	static new(): GADNativeExpressAdView; // inherited from NSObject

	readonly adNetworkClassName: string;

	adSize: GADAdSize;

	adUnitID: string;

	autoloadEnabled: boolean;

	delegate: GADNativeExpressAdViewDelegate;

	rootViewController: UIViewController;

	readonly videoController: GADVideoController;

	constructor(o: { adSize: GADAdSize; });

	constructor(o: { adSize: GADAdSize; origin: CGPoint; });

	initWithAdSize(adSize: GADAdSize): this;

	initWithAdSizeOrigin(adSize: GADAdSize, origin: CGPoint): this;

	loadRequest(request: GADRequest): void;

	setAdOptions(adOptions: NSArray<any>): void;
}

interface GADNativeExpressAdViewDelegate extends NSObjectProtocol {

	nativeExpressAdViewDidDismissScreen?(nativeExpressAdView: GADNativeExpressAdView): void;

	nativeExpressAdViewDidFailToReceiveAdWithError?(nativeExpressAdView: GADNativeExpressAdView, error: GADRequestError): void;

	nativeExpressAdViewDidReceiveAd?(nativeExpressAdView: GADNativeExpressAdView): void;

	nativeExpressAdViewWillDismissScreen?(nativeExpressAdView: GADNativeExpressAdView): void;

	nativeExpressAdViewWillLeaveApplication?(nativeExpressAdView: GADNativeExpressAdView): void;

	nativeExpressAdViewWillPresentScreen?(nativeExpressAdView: GADNativeExpressAdView): void;
}
declare var GADNativeExpressAdViewDelegate: {

	prototype: GADNativeExpressAdViewDelegate;
};

declare class GADRequest extends NSObject implements NSCopying {

	static alloc(): GADRequest; // inherited from NSObject

	static new(): GADRequest; // inherited from NSObject

	static request(): GADRequest;

	static sdkVersion(): string;

	birthday: Date;

	contentURL: string;

	gender: GADGender;

	keywords: NSArray<any>;

	requestAgent: string;

	testDevices: NSArray<any>;

	adNetworkExtrasFor(aClass: typeof NSObject): GADAdNetworkExtras;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	registerAdNetworkExtras(extras: GADAdNetworkExtras): void;

	removeAdNetworkExtrasFor(aClass: typeof NSObject): void;

	setBirthdayWithMonthDayYear(month: number, day: number, year: number): void;

	setLocationWithDescription(locationDescription: string): void;

	setLocationWithLatitudeLongitudeAccuracy(latitude: number, longitude: number, accuracyInMeters: number): void;

	tagForChildDirectedTreatment(childDirectedTreatment: boolean): void;
}

declare class GADRequestError extends NSError {

	static alloc(): GADRequestError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): GADRequestError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): GADRequestError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): GADRequestError; // inherited from NSError

	static new(): GADRequestError; // inherited from NSObject
}

declare class GADRewardBasedVideoAd extends NSObject {

	static alloc(): GADRewardBasedVideoAd; // inherited from NSObject

	static new(): GADRewardBasedVideoAd; // inherited from NSObject

	static sharedInstance(): GADRewardBasedVideoAd;

	readonly adNetworkClassName: string;

	delegate: GADRewardBasedVideoAdDelegate;

	readonly ready: boolean;

	userIdentifier: string;

	loadRequestWithAdUnitID(request: GADRequest, adUnitID: string): void;

	presentFromRootViewController(viewController: UIViewController): void;
}

interface GADRewardBasedVideoAdDelegate extends NSObjectProtocol {

	rewardBasedVideoAdDidClose?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;

	rewardBasedVideoAdDidCompletePlaying?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;

	rewardBasedVideoAdDidFailToLoadWithError?(rewardBasedVideoAd: GADRewardBasedVideoAd, error: NSError): void;

	rewardBasedVideoAdDidOpen?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;

	rewardBasedVideoAdDidReceiveAd?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;

	rewardBasedVideoAdDidRewardUserWithReward(rewardBasedVideoAd: GADRewardBasedVideoAd, reward: GADAdReward): void;

	rewardBasedVideoAdDidStartPlaying?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;

	rewardBasedVideoAdWillLeaveApplication?(rewardBasedVideoAd: GADRewardBasedVideoAd): void;
}
declare var GADRewardBasedVideoAdDelegate: {

	prototype: GADRewardBasedVideoAdDelegate;
};

declare class GADSearchBannerView extends GADBannerView {

	static alloc(): GADSearchBannerView; // inherited from NSObject

	static appearance(): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADSearchBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADSearchBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADSearchBannerView; // inherited from UIAppearance

	static new(): GADSearchBannerView; // inherited from NSObject
}

declare const enum GADSearchBorderType {

	kGADSearchBorderTypeNone = 0,

	kGADSearchBorderTypeDashed = 1,

	kGADSearchBorderTypeDotted = 2,

	kGADSearchBorderTypeSolid = 3
}

declare const enum GADSearchCallButtonColor {

	kGADSearchCallButtonLight = 0,

	kGADSearchCallButtonMedium = 1,

	kGADSearchCallButtonDark = 2
}

declare class GADSearchRequest extends GADRequest {

	static alloc(): GADSearchRequest; // inherited from NSObject

	static new(): GADSearchRequest; // inherited from NSObject

	static request(): GADSearchRequest; // inherited from GADRequest

	anchorTextColor: UIColor;

	readonly backgroundColor: UIColor;

	borderColor: UIColor;

	borderThickness: number;

	borderType: GADSearchBorderType;

	callButtonColor: GADSearchCallButtonColor;

	customChannels: string;

	descriptionTextColor: UIColor;

	fontFamily: string;

	readonly gradientFrom: UIColor;

	readonly gradientTo: UIColor;

	headerColor: UIColor;

	headerTextSize: number;

	query: string;

	setBackgroundGradientFromToColor(from: UIColor, toColor: UIColor): void;

	setBackgroundSolid(color: UIColor): void;
}

declare class GADUnifiedNativeAd extends NSObject {

	static alloc(): GADUnifiedNativeAd; // inherited from NSObject

	static new(): GADUnifiedNativeAd; // inherited from NSObject

	readonly adNetworkClassName: string;

	readonly advertiser: string;

	readonly body: string;

	readonly callToAction: string;

	delegate: GADUnifiedNativeAdDelegate;

	readonly extraAssets: NSDictionary<string, any>;

	readonly headline: string;

	readonly icon: GADNativeAdImage;

	readonly images: NSArray<GADNativeAdImage>;

	readonly price: string;

	rootViewController: UIViewController;

	readonly starRating: NSDecimalNumber;

	readonly store: string;

	unconfirmedClickDelegate: GADUnifiedNativeAdUnconfirmedClickDelegate;

	readonly videoController: GADVideoController;

	cancelUnconfirmedClick(): void;

	registerAdViewClickableAssetViewsNonclickableAssetViews(adView: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>): void;

	registerClickConfirmingView(view: UIView): void;

	unregisterAdView(): void;
}

declare var GADUnifiedNativeAdChoicesViewAsset: string;

interface GADUnifiedNativeAdDelegate extends NSObjectProtocol {

	nativeAdDidDismissScreen?(nativeAd: GADUnifiedNativeAd): void;

	nativeAdDidRecordClick?(nativeAd: GADUnifiedNativeAd): void;

	nativeAdDidRecordImpression?(nativeAd: GADUnifiedNativeAd): void;

	nativeAdWillDismissScreen?(nativeAd: GADUnifiedNativeAd): void;

	nativeAdWillLeaveApplication?(nativeAd: GADUnifiedNativeAd): void;

	nativeAdWillPresentScreen?(nativeAd: GADUnifiedNativeAd): void;
}
declare var GADUnifiedNativeAdDelegate: {

	prototype: GADUnifiedNativeAdDelegate;
};

interface GADUnifiedNativeAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveUnifiedNativeAd(adLoader: GADAdLoader, nativeAd: GADUnifiedNativeAd): void;
}
declare var GADUnifiedNativeAdLoaderDelegate: {

	prototype: GADUnifiedNativeAdLoaderDelegate;
};

interface GADUnifiedNativeAdUnconfirmedClickDelegate extends NSObjectProtocol {

	nativeAdDidCancelUnconfirmedClick(nativeAd: GADUnifiedNativeAd): void;

	nativeAdDidReceiveUnconfirmedClickOnAssetID(nativeAd: GADUnifiedNativeAd, assetID: string): void;
}
declare var GADUnifiedNativeAdUnconfirmedClickDelegate: {

	prototype: GADUnifiedNativeAdUnconfirmedClickDelegate;
};

declare class GADUnifiedNativeAdView extends UIView {

	static alloc(): GADUnifiedNativeAdView; // inherited from NSObject

	static appearance(): GADUnifiedNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADUnifiedNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADUnifiedNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GADUnifiedNativeAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADUnifiedNativeAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GADUnifiedNativeAdView; // inherited from UIAppearance

	static new(): GADUnifiedNativeAdView; // inherited from NSObject

	adChoicesView: GADAdChoicesView;

	advertiserView: UIView;

	bodyView: UIView;

	callToActionView: UIView;

	headlineView: UIView;

	iconView: UIView;

	imageView: UIView;

	mediaView: GADMediaView;

	nativeAd: GADUnifiedNativeAd;

	priceView: UIView;

	starRatingView: UIView;

	storeView: UIView;
}

declare var GADUnifiedNativeAdvertiserAsset: string;

declare var GADUnifiedNativeBodyAsset: string;

declare var GADUnifiedNativeCallToActionAsset: string;

declare var GADUnifiedNativeHeadlineAsset: string;

declare var GADUnifiedNativeIconAsset: string;

declare var GADUnifiedNativeImageAsset: string;

declare var GADUnifiedNativeMediaViewAsset: string;

declare var GADUnifiedNativePriceAsset: string;

declare var GADUnifiedNativeStarRatingAsset: string;

declare var GADUnifiedNativeStoreAsset: string;

declare class GADVideoController extends NSObject {

	static alloc(): GADVideoController; // inherited from NSObject

	static new(): GADVideoController; // inherited from NSObject

	delegate: GADVideoControllerDelegate;

	aspectRatio(): number;

	clickToExpandEnabled(): boolean;

	customControlsEnabled(): boolean;

	hasVideoContent(): boolean;

	pause(): void;

	play(): void;

	setMute(mute: boolean): void;
}

interface GADVideoControllerDelegate extends NSObjectProtocol {

	videoControllerDidEndVideoPlayback?(videoController: GADVideoController): void;

	videoControllerDidMuteVideo?(videoController: GADVideoController): void;

	videoControllerDidPauseVideo?(videoController: GADVideoController): void;

	videoControllerDidPlayVideo?(videoController: GADVideoController): void;

	videoControllerDidUnmuteVideo?(videoController: GADVideoController): void;
}
declare var GADVideoControllerDelegate: {

	prototype: GADVideoControllerDelegate;
};

declare class GADVideoOptions extends GADAdLoaderOptions {

	static alloc(): GADVideoOptions; // inherited from NSObject

	static new(): GADVideoOptions; // inherited from NSObject

	clickToExpandRequested: boolean;

	customControlsRequested: boolean;

	startMuted: boolean;
}

declare var GoogleMobileAdsVersionString: interop.Reference<number>;

declare function IsGADAdSizeValid(size: GADAdSize): boolean;

declare function NSStringFromGADAdSize(size: GADAdSize): string;

declare function NSValueFromGADAdSize(size: GADAdSize): NSValue;

declare var kDFPSimulatorID: any;

declare var kGADAdLoaderAdTypeDFPBanner: string;

declare var kGADAdLoaderAdTypeNativeAppInstall: string;

declare var kGADAdLoaderAdTypeNativeContent: string;

declare var kGADAdLoaderAdTypeNativeCustomTemplate: string;

declare var kGADAdLoaderAdTypeUnifiedNative: string;

declare var kGADAdSizeBanner: GADAdSize;

declare var kGADAdSizeFluid: GADAdSize;

declare var kGADAdSizeFullBanner: GADAdSize;

declare var kGADAdSizeInvalid: GADAdSize;

declare var kGADAdSizeLargeBanner: GADAdSize;

declare var kGADAdSizeLeaderboard: GADAdSize;

declare var kGADAdSizeMediumRectangle: GADAdSize;

declare var kGADAdSizeSkyscraper: GADAdSize;

declare var kGADAdSizeSmartBannerLandscape: GADAdSize;

declare var kGADAdSizeSmartBannerPortrait: GADAdSize;

declare var kGADErrorDomain: string;

declare var kGADSimulatorID: any;
