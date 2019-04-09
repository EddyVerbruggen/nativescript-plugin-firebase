export interface MLKitSmartReplyConversationMessage {
  text: string;
  timestamp: number;
  userId: string;
  localUser: boolean;
}

export interface MLKitSmartReplySuggestRepliesOptions {
  conversation: Array<MLKitSmartReplyConversationMessage>;
}

export declare function suggestReplies(options: MLKitSmartReplySuggestRepliesOptions): Promise<Array<string>>;
