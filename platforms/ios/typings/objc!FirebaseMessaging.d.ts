
declare class FIRMessaging extends NSObject {

	static alloc(): FIRMessaging; // inherited from NSObject

	static messaging(): FIRMessaging;

	static new(): FIRMessaging; // inherited from NSObject

	remoteMessageDelegate: FIRMessagingDelegate;

	appDidReceiveMessage(message: NSDictionary<any, any>): FIRMessagingMessageInfo;

	connectWithCompletion(handler: (p1: NSError) => void): void;

	disconnect(): void;

	sendMessageToWithMessageIDTimeToLive(message: NSDictionary<any, any>, receiver: string, messageID: string, ttl: number): void;

	subscribeToTopic(topic: string): void;

	unsubscribeFromTopic(topic: string): void;
}

interface FIRMessagingDelegate extends NSObjectProtocol {

	applicationReceivedRemoteMessage(remoteMessage: FIRMessagingRemoteMessage): void;
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

declare class FIRMessagingRemoteMessage extends NSObject {

	static alloc(): FIRMessagingRemoteMessage; // inherited from NSObject

	static new(): FIRMessagingRemoteMessage; // inherited from NSObject

	readonly appData: NSDictionary<any, any>;
}

declare var FIRMessagingSendErrorNotification: string;

declare var FIRMessagingSendSuccessNotification: string;
