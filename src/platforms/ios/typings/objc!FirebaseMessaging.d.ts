
declare class FIRMessaging extends NSObject {

	static alloc(): FIRMessaging; // inherited from NSObject

	static extensionHelper(): FIRMessagingExtensionHelper;

	static messaging(): FIRMessaging;

	static new(): FIRMessaging; // inherited from NSObject

	APNSToken: NSData;

	readonly FCMToken: string;

	autoInitEnabled: boolean;

	delegate: FIRMessagingDelegate;

	readonly isDirectChannelEstablished: boolean;

	shouldEstablishDirectChannel: boolean;

	appDidReceiveMessage(message: NSDictionary<any, any>): FIRMessagingMessageInfo;

	deleteFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: NSError) => void): void;

	retrieveFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: string, p2: NSError) => void): void;

	sendMessageToWithMessageIDTimeToLive(message: NSDictionary<any, any>, receiver: string, messageID: string, ttl: number): void;

	setAPNSTokenType(apnsToken: NSData, type: FIRMessagingAPNSTokenType): void;

	subscribeToTopic(topic: string): void;

	subscribeToTopicCompletion(topic: string, completion: (p1: NSError) => void): void;

	unsubscribeFromTopic(topic: string): void;

	unsubscribeFromTopicCompletion(topic: string, completion: (p1: NSError) => void): void;
}

declare const enum FIRMessagingAPNSTokenType {

	Unknown = 0,

	Sandbox = 1,

	Prod = 2
}

declare var FIRMessagingConnectionStateChangedNotification: string;

interface FIRMessagingDelegate extends NSObjectProtocol {

	messagingDidReceiveMessage?(messaging: FIRMessaging, remoteMessage: FIRMessagingRemoteMessage): void;

	messagingDidReceiveRegistrationToken?(messaging: FIRMessaging, fcmToken: string): void;
}
declare var FIRMessagingDelegate: {

	prototype: FIRMessagingDelegate;
};

declare const enum FIRMessagingError {

	Unknown = 0,

	Authentication = 1,

	NoAccess = 2,

	Timeout = 3,

	Network = 4,

	OperationInProgress = 5,

	InvalidRequest = 7,

	InvalidTopicName = 8
}

declare class FIRMessagingExtensionHelper extends NSObject {

	static alloc(): FIRMessagingExtensionHelper; // inherited from NSObject

	static new(): FIRMessagingExtensionHelper; // inherited from NSObject

	populateNotificationContentWithContentHandler(content: UNMutableNotificationContent, contentHandler: (p1: UNNotificationContent) => void): void;
}

declare class FIRMessagingMessageInfo extends NSObject {

	static alloc(): FIRMessagingMessageInfo; // inherited from NSObject

	static new(): FIRMessagingMessageInfo; // inherited from NSObject

	readonly status: FIRMessagingMessageStatus;
}

declare const enum FIRMessagingMessageStatus {

	Unknown = 0,

	New = 1
}

declare var FIRMessagingMessagesDeletedNotification: string;

declare var FIRMessagingRegistrationTokenRefreshedNotification: string;

declare class FIRMessagingRemoteMessage extends NSObject {

	static alloc(): FIRMessagingRemoteMessage; // inherited from NSObject

	static new(): FIRMessagingRemoteMessage; // inherited from NSObject

	readonly appData: NSDictionary<any, any>;

	readonly messageID: string;
}

declare var FIRMessagingSendErrorNotification: string;

declare var FIRMessagingSendSuccessNotification: string;

declare var FirebaseMessagingVersionNumber: number;

declare var FirebaseMessagingVersionString: interop.Reference<number>;
