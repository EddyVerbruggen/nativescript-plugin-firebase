import { OnMessageImpressionCallbackData, OnMessageClickedCallbackData } from "./inappmessaging";

let _firInAppMessagingDisplayDelegate: FIRInAppMessagingDisplayDelegateImpl;

export function onMessageClicked(callback: (data: OnMessageClickedCallbackData) => void): void {
  ensureDelegate();
  _firInAppMessagingDisplayDelegate.setOnMessageClickedCallback(callback);
}

export function onMessageImpression(callback: (data: OnMessageImpressionCallbackData) => void): void {
  ensureDelegate();
  _firInAppMessagingDisplayDelegate.setOnMessageImpressionCallback(callback);
}

export function triggerEvent(eventName: string): void {
  FIRInAppMessaging.inAppMessaging().triggerEvent(eventName);
}

function ensureDelegate(): void {
  if (!_firInAppMessagingDisplayDelegate) {
    FIRInAppMessaging.inAppMessaging().delegate = _firInAppMessagingDisplayDelegate = FIRInAppMessagingDisplayDelegateImpl.new();
  }
}

@NativeClass()
class FIRInAppMessagingDisplayDelegateImpl extends NSObject implements FIRInAppMessagingDisplayDelegate {
  public static ObjCProtocols = [];

  static new(): FIRInAppMessagingDisplayDelegateImpl {
    if (FIRInAppMessagingDisplayDelegateImpl.ObjCProtocols.length === 0 && typeof (FIRInAppMessagingDisplayDelegate) !== "undefined") {
      FIRInAppMessagingDisplayDelegateImpl.ObjCProtocols.push(FIRInAppMessagingDisplayDelegate);
    }
    return <FIRInAppMessagingDisplayDelegateImpl>super.new();
  }

  private onMessageClickedCallback: (data: OnMessageClickedCallbackData) => void;
  private onMessageImpressionCallback: (data: OnMessageImpressionCallbackData) => void;

  public setOnMessageClickedCallback(callback: (data: OnMessageClickedCallbackData) => void): void {
    this.onMessageClickedCallback = callback;
  }

  public setOnMessageImpressionCallback(callback: (data: OnMessageImpressionCallbackData) => void): void {
    this.onMessageImpressionCallback = callback;
  }

  displayErrorForMessageError(inAppMessage: FIRInAppMessagingDisplayMessage, error: NSError): void {
    console.log("InAppMessaging error: " + error.localizedDescription);
  }

  impressionDetectedForMessage(inAppMessage: FIRInAppMessagingDisplayMessage): void {
    console.log("InAppMessaging impression");
    this.onMessageImpressionCallback && this.onMessageImpressionCallback({
      campaignName: inAppMessage.campaignInfo.campaignName
    });
  }

  messageClicked(inAppMessage: FIRInAppMessagingDisplayMessage): void {
    console.log("InAppMessaging clicked");
    this.onMessageClickedCallback && this.onMessageClickedCallback({
      campaignName: inAppMessage.campaignInfo.campaignName
    });
  }

  messageClickedWithAction(inAppMessage: FIRInAppMessagingDisplayMessage, action: FIRInAppMessagingAction): void {
    console.log("InAppMessaging clicked with action, text: " + action.actionText + ", url: " + action.actionURL);
    this.onMessageClickedCallback && this.onMessageClickedCallback({
      campaignName: inAppMessage.campaignInfo.campaignName,
      actionText: action.actionText,
      actionURL: action.actionURL.absoluteString
    });
  }

  messageDismissedDismissType(inAppMessage: FIRInAppMessagingDisplayMessage, dismissType: FIRInAppMessagingDismissType): void {
    console.log("InAppMessaging dismissed");
  }
}