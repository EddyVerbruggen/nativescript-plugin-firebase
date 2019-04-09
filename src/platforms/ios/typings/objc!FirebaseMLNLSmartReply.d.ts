
declare class FIRSmartReply extends NSObject {

	static alloc(): FIRSmartReply; // inherited from NSObject

	static new(): FIRSmartReply; // inherited from NSObject

	suggestRepliesForMessagesCompletion(messages: NSArray<FIRTextMessage> | FIRTextMessage[], completion: (p1: FIRSmartReplySuggestionResult, p2: NSError) => void): void;
}

declare const enum FIRSmartReplyResultStatus {

	Success = 0,

	NotSupportedLanguage = 1,

	NoReply = 2
}

declare class FIRSmartReplySuggestion extends NSObject {

	static alloc(): FIRSmartReplySuggestion; // inherited from NSObject

	static new(): FIRSmartReplySuggestion; // inherited from NSObject

	readonly text: string;
}

declare class FIRSmartReplySuggestionResult extends NSObject {

	static alloc(): FIRSmartReplySuggestionResult; // inherited from NSObject

	static new(): FIRSmartReplySuggestionResult; // inherited from NSObject

	readonly status: FIRSmartReplyResultStatus;

	readonly suggestions: NSArray<FIRSmartReplySuggestion>;
}

declare class FIRTextMessage extends NSObject {

	static alloc(): FIRTextMessage; // inherited from NSObject

	static new(): FIRTextMessage; // inherited from NSObject

	readonly isLocalUser: boolean;

	readonly text: string;

	readonly timestamp: number;

	readonly userID: string;

	constructor(o: { text: string; timestamp: number; userID: string; isLocalUser: boolean; });

	initWithTextTimestampUserIDIsLocalUser(text: string, timestamp: number, userID: string, isLocalUser: boolean): this;
}
