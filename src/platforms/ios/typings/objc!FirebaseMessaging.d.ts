
declare class FIRMessaging extends NSObject {

	static alloc(): FIRMessaging; // inherited from NSObject

	static messaging(): FIRMessaging;

	static new(): FIRMessaging; // inherited from NSObject

	APNSToken: NSData;

	readonly FCMToken: string;

	delegate: FIRMessagingDelegate;

	readonly isDirectChannelEstablished: boolean;

	remoteMessageDelegate: FIRMessagingDelegate;

	shouldEstablishDirectChannel: boolean;

	appDidReceiveMessage(message: NSDictionary<any, any>): FIRMessagingMessageInfo;

	connectWithCompletion(handler: (p1: NSError) => void): void;

	deleteFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: NSError) => void): void;

	disconnect(): void;

	retrieveFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: string, p2: NSError) => void): void;

	sendMessageToWithMessageIDTimeToLive(message: NSDictionary<any, any>, receiver: string, messageID: string, ttl: number): void;

	setAPNSTokenType(apnsToken: NSData, type: FIRMessagingAPNSTokenType): void;

	subscribeToTopic(topic: string): void;

	unsubscribeFromTopic(topic: string): void;
}

declare const enum FIRMessagingAPNSTokenType {

	Unknown = 0,

	Sandbox = 1,

	Prod = 2
}

declare var FIRMessagingConnectionStateChangedNotification: string;

interface FIRMessagingDelegate extends NSObjectProtocol {

	applicationReceivedRemoteMessage?(remoteMessage: FIRMessagingRemoteMessage): void;

	messagingDidReceiveMessage?(messaging: FIRMessaging, remoteMessage: FIRMessagingRemoteMessage): void;

	messagingDidReceiveRegistrationToken?(messaging: FIRMessaging, fcmToken: string): void;

	messagingDidRefreshRegistrationToken?(messaging: FIRMessaging, fcmToken: string): void;
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

	InvalidRequest = 7
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
}

declare var FIRMessagingSendErrorNotification: string;

declare var FIRMessagingSendSuccessNotification: string;
