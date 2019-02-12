
declare const enum FIAMDisplayRenderErrorType {

	ImageDataInvalid = 0,

	UnspecifiedError = 1
}

declare class FIRInAppMessaging extends NSObject {

	static alloc(): FIRInAppMessaging; // inherited from NSObject

	static inAppMessaging(): FIRInAppMessaging;

	static new(): FIRInAppMessaging; // inherited from NSObject

	automaticDataCollectionEnabled: boolean;

	messageDisplayComponent: FIRInAppMessagingDisplay;

	messageDisplaySuppressed: boolean;
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

declare class FIRInAppMessagingBannerDisplay extends FIRInAppMessagingDisplayMessageBase {

	static alloc(): FIRInAppMessagingBannerDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingBannerDisplay; // inherited from NSObject

	readonly bodyText: string;

	readonly displayBackgroundColor: UIColor;

	readonly imageData: FIRInAppMessagingImageData;

	textColor: UIColor;

	readonly title: string;

	constructor(o: { messageID: string; renderAsTestMessage: boolean; titleText: string; bodyText: string; textColor: UIColor; backgroundColor: UIColor; imageData: FIRInAppMessagingImageData; });

	initWithMessageIDRenderAsTestMessageTitleTextBodyTextTextColorBackgroundColorImageData(messageID: string, renderAsTestMessage: boolean, title: string, bodyText: string, textColor: UIColor, backgroundColor: UIColor, imageData: FIRInAppMessagingImageData): this;
}

declare const enum FIRInAppMessagingDismissType {

	TypeUserSwipe = 0,

	TypeUserTapClose = 1,

	TypeAuto = 2,

	Unspecified = 3
}

interface FIRInAppMessagingDisplay {

	displayMessageDisplayDelegate(messageForDisplay: FIRInAppMessagingDisplayMessageBase, displayDelegate: FIRInAppMessagingDisplayDelegate): void;
}
declare var FIRInAppMessagingDisplay: {

	prototype: FIRInAppMessagingDisplay;
};

interface FIRInAppMessagingDisplayDelegate extends NSObjectProtocol {

	displayErrorEncountered(error: NSError): void;

	impressionDetected(): void;

	messageClicked(): void;

	messageDismissedWithType(dismissType: FIRInAppMessagingDismissType): void;
}
declare var FIRInAppMessagingDisplayDelegate: {

	prototype: FIRInAppMessagingDisplayDelegate;
};

declare class FIRInAppMessagingDisplayMessageBase extends NSObject {

	static alloc(): FIRInAppMessagingDisplayMessageBase; // inherited from NSObject

	static new(): FIRInAppMessagingDisplayMessageBase; // inherited from NSObject

	readonly messageID: string;

	readonly renderAsTestMessage: boolean;

	constructor(o: { messageID: string; renderAsTestMessage: boolean; });

	initWithMessageIDRenderAsTestMessage(messageID: string, renderAsTestMessage: boolean): this;
}

declare class FIRInAppMessagingImageData extends NSObject {

	static alloc(): FIRInAppMessagingImageData; // inherited from NSObject

	static new(): FIRInAppMessagingImageData; // inherited from NSObject

	readonly imageRawData: NSData;

	readonly imageURL: string;

	constructor(o: { imageURL: string; imageData: NSData; });

	initWithImageURLImageData(imageURL: string, imageData: NSData): this;
}

declare class FIRInAppMessagingImageOnlyDisplay extends FIRInAppMessagingDisplayMessageBase {

	static alloc(): FIRInAppMessagingImageOnlyDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingImageOnlyDisplay; // inherited from NSObject

	readonly imageData: FIRInAppMessagingImageData;

	constructor(o: { messageID: string; renderAsTestMessage: boolean; imageData: FIRInAppMessagingImageData; });

	initWithMessageIDRenderAsTestMessageImageData(messageID: string, renderAsTestMessage: boolean, imageData: FIRInAppMessagingImageData): this;
}

declare class FIRInAppMessagingModalDisplay extends FIRInAppMessagingDisplayMessageBase {

	static alloc(): FIRInAppMessagingModalDisplay; // inherited from NSObject

	static new(): FIRInAppMessagingModalDisplay; // inherited from NSObject

	readonly actionButton: FIRInAppMessagingActionButton;

	readonly bodyText: string;

	displayBackgroundColor: UIColor;

	readonly imageData: FIRInAppMessagingImageData;

	textColor: UIColor;

	readonly title: string;

	constructor(o: { messageID: string; renderAsTestMessage: boolean; titleText: string; bodyText: string; textColor: UIColor; backgroundColor: UIColor; imageData: FIRInAppMessagingImageData; actionButton: FIRInAppMessagingActionButton; });

	initWithMessageIDRenderAsTestMessageTitleTextBodyTextTextColorBackgroundColorImageDataActionButton(messageID: string, renderAsTestMessage: boolean, title: string, bodyText: string, textColor: UIColor, backgroundColor: UIColor, imageData: FIRInAppMessagingImageData, actionButton: FIRInAppMessagingActionButton): this;
}
