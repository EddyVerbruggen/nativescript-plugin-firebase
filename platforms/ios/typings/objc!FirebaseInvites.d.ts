
interface FIRInviteBuilder extends NSObjectProtocol {

	open(): void;

	setAndroidMinimumVersionCode(versionCode: number): void;

	setCallToActionText(callToActionText: string): void;

	setCustomImage(imageURI: string): void;

	setDeepLink(deepLink: string): void;

	setDescription(description: string): void;

	setInviteDelegate(inviteDelegate: FIRInviteDelegate): void;

	setMessage(message: string): void;

	setOtherPlatformsTargetApplication(targetApplication: FIRInvitesTargetApplication): void;

	setTitle(title: string): void;
}
declare var FIRInviteBuilder: {

	prototype: FIRInviteBuilder;
};

interface FIRInviteDelegate extends NSObjectProtocol {

	inviteFinishedWithInvitationsError?(invitationIds: NSArray<string>, error: NSError): void;
}
declare var FIRInviteDelegate: {

	prototype: FIRInviteDelegate;
};

declare class FIRInvites extends NSObject {

	static alloc(): FIRInvites; // inherited from NSObject

	static applicationDidFinishLaunching(): void;

	static applicationDidFinishLaunchingWithOptions(launchOptions: NSDictionary<any, any>): void;

	static closeActiveInviteDialog(): void;

	static completeInvitation(): void;

	static convertInvitation(invitationId: string): void;

	static handleURLSourceApplicationAnnotation(url: NSURL, sourceApplication: string, annotation: any): any;

	static handleUniversalLinkCompletion(URL: NSURL, completion: (p1: FIRReceivedInvite, p2: NSError) => void): boolean;

	static inviteDialog(): FIRInviteBuilder;

	static new(): FIRInvites; // inherited from NSObject

	static setAPIKey(apiKey: string): void;

	static setDefaultOtherPlatformsTargetApplication(targetApplication: FIRInvitesTargetApplication): void;

	static setGoogleAnalyticsTrackingId(trackingId: string): void;

	targetApp: FIRInvitesTargetApplication;
}

declare const enum FIRInvitesErrorCode {

	Unknown = -400,

	Canceled = -401,

	CanceledByUser = -402,

	LaunchError = -403,

	SignInError = -404,

	ServerError = -490,

	NetworkError = -491,

	SMSError = -492,

	InvalidParameters = -497
}

declare class FIRInvitesTargetApplication extends NSObject {

	static alloc(): FIRInvitesTargetApplication; // inherited from NSObject

	static new(): FIRInvitesTargetApplication; // inherited from NSObject

	androidClientID: string;
}

declare class FIRReceivedInvite extends NSObject {

	static alloc(): FIRReceivedInvite; // inherited from NSObject

	static new(): FIRReceivedInvite; // inherited from NSObject

	readonly deepLink: string;

	readonly inviteId: string;

	readonly matchType: FIRReceivedInviteMatchType;
}

declare const enum FIRReceivedInviteMatchType {

	Weak = 0,

	Strong = 1
}

declare var kFIRInvitesErrorDomain: string;
