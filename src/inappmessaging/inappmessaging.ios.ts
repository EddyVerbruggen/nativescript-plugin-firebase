import { OnMessageCallbackData } from "./inappmessaging";

let _firInAppMessagingDisplayDelegate: FIRInAppMessagingDisplayDelegateImpl;

export function onMessageClicked(callback: (data: OnMessageCallbackData) => void): void {
  ensureDelegate();
  _firInAppMessagingDisplayDelegate.setOnMessageClickedCallback(callback);
}

export function onMessageImpression(callback: (data: OnMessageCallbackData) => void): void {
  ensureDelegate();
  _firInAppMessagingDisplayDelegate.setOnMessageImpressionCallback(callback);
}

function ensureDelegate(): void {
  if (!_firInAppMessagingDisplayDelegate) {
    FIRInAppMessaging.inAppMessaging().delegate = _firInAppMessagingDisplayDelegate = FIRInAppMessagingDisplayDelegateImpl.new();
  }
}

class FIRInAppMessagingDisplayDelegateImpl extends NSObject implements FIRInAppMessagingDisplayDelegate {
  public static ObjCProtocols = [];

  static new(): FIRInAppMessagingDisplayDelegateImpl {
    if (FIRInAppMessagingDisplayDelegateImpl.ObjCProtocols.length === 0 && typeof (FIRInAppMessagingDisplayDelegate) !== "undefined") {
      FIRInAppMessagingDisplayDelegateImpl.ObjCProtocols.push(FIRInAppMessagingDisplayDelegate);
    }
    return <FIRInAppMessagingDisplayDelegateImpl>super.new();
  }

  private onMessageClickedCallback: (data: OnMessageCallbackData) => void;
  private onMessageImpressionCallback: (data: OnMessageCallbackData) => void;

  public setOnMessageClickedCallback(callback: (data: OnMessageCallbackData) => void): void {
    this.onMessageClickedCallback = callback;
  }

  public setOnMessageImpressionCallback(callback: (data: OnMessageCallbackData) => void): void {
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

  messageDismissedDismissType(inAppMessage: FIRInAppMessagingDisplayMessage, dismissType: FIRInAppMessagingDismissType): void {
    console.log("InAppMessaging dismissed");
  }
}