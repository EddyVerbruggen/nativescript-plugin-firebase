
declare const enum FIAMDisplayRenderErrorType {

	ImageDataInvalid = 0,

	UnspecifiedError = 1
}

declare class FIRInAppMessaging extends NSObject {

	static alloc(): FIRInAppMessaging; // inherited from NSObject

	static inAppMessaging(): FIRInAppMessaging;

	static new(): FIRInAppMessaging; // inherited from NSObject

	automaticDataCollectionEnabled: boolean;

	delegate: FIRInAppMessagingDisplayDelegate;

	messageDisplayComponent: FIRInAppMessagingDisplay;

	messageDisplaySuppressed: boolean;

	triggerEvent(eventName: string): void;
}

declare class FIRInAppMessagingAction extends NSObject {

	static alloc(): FIRInAppMessagingAction; // inherited from NSObject

	static new(): FIRInAppMessagingAction; // inherited from NSObject

	readonly actionText: string;

	readonly actionURL: NSURL;

	constructor(o: { actionText: string; actionURL: NSURL; });

	initWithActionTextActionURL(actionText: string, actionURL: NSURL): this;
}

declare class FIRInAppMessagingActionButton extends NSObject {

	static alloc(): FIRInAppMessagingActionButton; // inherited from NSObject

	static new(): FIRInAppMessagingActionButton; // inherited from NSObject

	readonly buttonBackgroundColor: UIColor;

	readonly buttonText: string;

	readonly buttonTextColor: UIColor;

	constructor(o: { buttonText: string; buttonTextColor: UIColor; backgroundColor: UIColor; });

	initWithButtonTextButtonTextColorBackgroundColor(btnText: string, textColor: UIColor, bkgColor: UIColor): this;
}

declare class FIRInAppMessagingBannerDisplay extends FIRInAppMessagingDisplayMessage {

	static alloc(): FIRInAppMessagingBannerDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingBannerDisplay; // inherited from NSObject

	readonly actionURL: NSURL;

	readonly bodyText: string;

	readonly displayBackgroundColor: UIColor;

	readonly imageData: FIRInAppMessagingImageData;

	textColor: UIColor;

	readonly title: string;

	constructor(o: { messageID: string; campaignName: string; renderAsTestMessage: boolean; triggerType: FIRInAppMessagingDisplayTriggerType; titleText: string; bodyText: string; textColor: UIColor; backgroundColor: UIColor; imageData: FIRInAppMessagingImageData; actionURL: NSURL; });

	initWithMessageIDCampaignNameRenderAsTestMessageTriggerTypeTitleTextBodyTextTextColorBackgroundColorImageDataActionURL(messageID: string, campaignName: string, renderAsTestMessage: boolean, triggerType: FIRInAppMessagingDisplayTriggerType, title: string, bodyText: string, textColor: UIColor, backgroundColor: UIColor, imageData: FIRInAppMessagingImageData, actionURL: NSURL): this;
}

declare class FIRInAppMessagingCampaignInfo extends NSObject {

	static alloc(): FIRInAppMessagingCampaignInfo; // inherited from NSObject

	static new(): FIRInAppMessagingCampaignInfo; // inherited from NSObject

	readonly campaignName: string;

	readonly messageID: string;

	readonly renderAsTestMessage: boolean;

	constructor(o: { messageID: string; campaignName: string; renderAsTestMessage: boolean; });

	initWithMessageIDCampaignNameRenderAsTestMessage(messageID: string, campaignName: string, renderAsTestMessage: boolean): this;
}

declare class FIRInAppMessagingCardDisplay extends FIRInAppMessagingDisplayMessage {

	static alloc(): FIRInAppMessagingCardDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingCardDisplay; // inherited from NSObject

	readonly body: string;

	readonly displayBackgroundColor: UIColor;

	readonly landscapeImageData: FIRInAppMessagingImageData;

	readonly portraitImageData: FIRInAppMessagingImageData;

	readonly primaryActionButton: FIRInAppMessagingActionButton;

	readonly primaryActionURL: NSURL;

	readonly secondaryActionButton: FIRInAppMessagingActionButton;

	readonly secondaryActionURL: NSURL;

	readonly textColor: UIColor;

	readonly title: string;
}

declare const enum FIRInAppMessagingDismissType {

	TypeUserSwipe = 0,

	TypeUserTapClose = 1,

	TypeAuto = 2,

	Unspecified = 3
}

interface FIRInAppMessagingDisplay {

	displayMessageDisplayDelegate(messageForDisplay: FIRInAppMessagingDisplayMessage, displayDelegate: FIRInAppMessagingDisplayDelegate): void;
}
declare var FIRInAppMessagingDisplay: {

	prototype: FIRInAppMessagingDisplay;
};

interface FIRInAppMessagingDisplayDelegate extends NSObjectProtocol {

	displayErrorForMessageError?(inAppMessage: FIRInAppMessagingDisplayMessage, error: NSError): void;

	impressionDetectedForMessage?(inAppMessage: FIRInAppMessagingDisplayMessage): void;

	messageClicked?(inAppMessage: FIRInAppMessagingDisplayMessage): void;

	messageClickedWithAction?(inAppMessage: FIRInAppMessagingDisplayMessage, action: FIRInAppMessagingAction): void;

	messageDismissedDismissType?(inAppMessage: FIRInAppMessagingDisplayMessage, dismissType: FIRInAppMessagingDismissType): void;
}
declare var FIRInAppMessagingDisplayDelegate: {

	prototype: FIRInAppMessagingDisplayDelegate;
};

declare class FIRInAppMessagingDisplayMessage extends NSObject {

	static alloc(): FIRInAppMessagingDisplayMessage; // inherited from NSObject

	static new(): FIRInAppMessagingDisplayMessage; // inherited from NSObject

	readonly campaignInfo: FIRInAppMessagingCampaignInfo;

	readonly triggerType: FIRInAppMessagingDisplayTriggerType;

	readonly type: FIRInAppMessagingDisplayMessageType;

	constructor(o: { messageID: string; campaignName: string; renderAsTestMessage: boolean; messageType: FIRInAppMessagingDisplayMessageType; triggerType: FIRInAppMessagingDisplayTriggerType; });

	initWithMessageIDCampaignNameRenderAsTestMessageMessageTypeTriggerType(messageID: string, campaignName: string, renderAsTestMessage: boolean, messageType: FIRInAppMessagingDisplayMessageType, triggerType: FIRInAppMessagingDisplayTriggerType): this;
}

declare const enum FIRInAppMessagingDisplayMessageType {

	Modal = 0,

	Banner = 1,

	ImageOnly = 2,

	Card = 3
}

declare const enum FIRInAppMessagingDisplayTriggerType {

	OnAppForeground = 0,

	OnAnalyticsEvent = 1
}

declare class FIRInAppMessagingImageData extends NSObject {

	static alloc(): FIRInAppMessagingImageData; // inherited from NSObject

	static new(): FIRInAppMessagingImageData; // inherited from NSObject

	readonly imageRawData: NSData;

	readonly imageURL: string;

	constructor(o: { imageURL: string; imageData: NSData; });

	initWithImageURLImageData(imageURL: string, imageData: NSData): this;
}

declare class FIRInAppMessagingImageOnlyDisplay extends FIRInAppMessagingDisplayMessage {

	static alloc(): FIRInAppMessagingImageOnlyDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingImageOnlyDisplay; // inherited from NSObject

	readonly actionURL: NSURL;

	readonly imageData: FIRInAppMessagingImageData;

	constructor(o: { messageID: string; campaignName: string; renderAsTestMessage: boolean; triggerType: FIRInAppMessagingDisplayTriggerType; imageData: FIRInAppMessagingImageData; actionURL: NSURL; });

	initWithMessageIDCampaignNameRenderAsTestMessageTriggerTypeImageDataActionURL(messageID: string, campaignName: string, renderAsTestMessage: boolean, triggerType: FIRInAppMessagingDisplayTriggerType, imageData: FIRInAppMessagingImageData, actionURL: NSURL): this;
}

declare class FIRInAppMessagingModalDisplay extends FIRInAppMessagingDisplayMessage {

	static alloc(): FIRInAppMessagingModalDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingModalDisplay; // inherited from NSObject

	readonly actionButton: FIRInAppMessagingActionButton;

	readonly actionURL: NSURL;

	readonly bodyText: string;

	displayBackgroundColor: UIColor;

	readonly imageData: FIRInAppMessagingImageData;

	textColor: UIColor;

	readonly title: string;

	constructor(o: { messageID: string; campaignName: string; renderAsTestMessage: boolean; triggerType: FIRInAppMessagingDisplayTriggerType; titleText: string; bodyText: string; textColor: UIColor; backgroundColor: UIColor; imageData: FIRInAppMessagingImageData; actionButton: FIRInAppMessagingActionButton; actionURL: NSURL; });

	initWithMessageIDCampaignNameRenderAsTestMessageTriggerTypeTitleTextBodyTextTextColorBackgroundColorImageDataActionButtonActionURL(messageID: string, campaignName: string, renderAsTestMessage: boolean, triggerType: FIRInAppMessagingDisplayTriggerType, title: string, bodyText: string, textColor: UIColor, backgroundColor: UIColor, imageData: FIRInAppMessagingImageData, actionButton: FIRInAppMessagingActionButton, actionURL: NSURL): this;
}

declare var FirebaseInAppMessagingVersionNumber: number;

declare var FirebaseInAppMessagingVersionString: interop.Reference<number>;
