import { MLKitSmartReplySuggestRepliesOptions, } from "./index";

export function suggestReplies(options: MLKitSmartReplySuggestRepliesOptions): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    try {
      const naturalLanguage = FIRNaturalLanguage.naturalLanguage();
      const smartReply = naturalLanguage.smartReply();
      const conversation: Array<FIRTextMessage> = [];
      options.conversation.forEach(m => conversation.push(new FIRTextMessage({
        text: m.text,
        isLocalUser: m.localUser,
        timestamp: m.timestamp,
        userID: m.userId
      })));

      smartReply.suggestRepliesForMessagesCompletion(conversation, (result: FIRSmartReplySuggestionResult, error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else if (!result) {
          reject("No results");
        } else if (result.status === FIRSmartReplyResultStatus.NotSupportedLanguage) {
          reject("Unsupported language");
        } else if (result.status === FIRSmartReplyResultStatus.NoReply) {
          reject("No reply");
        } else if (result.status === FIRSmartReplyResultStatus.Success) {
          const suggestions = [];
          for (let i = 0; i < result.suggestions.count; i++) {
            const s = result.suggestions.objectAtIndex(i);
            suggestions.push(s.text);
          }
          resolve(suggestions);
        } else {
          reject();
        }
      });
    } catch (ex) {
      console.log("Error in firebase.mlkit.suggestReplies: " + ex);
      reject(ex);
    }
  });
}
