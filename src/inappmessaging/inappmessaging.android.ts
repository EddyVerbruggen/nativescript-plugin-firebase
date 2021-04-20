import { OnMessageImpressionCallbackData, OnMessageClickedCallbackData } from "./inappmessaging";

export function onMessageClicked(callback: (data: OnMessageClickedCallbackData) => void): void {
  const listener = new com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener({
    messageClicked: (message: com.google.firebase.inappmessaging.model.InAppMessage, action: com.google.firebase.inappmessaging.model.Action) => {
      callback({
        campaignName: message.getCampaignName()
      })
    }
  });

  com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance().addClickListener(listener)
}

export function onMessageImpression(callback: (data: OnMessageImpressionCallbackData) => void): void {
  const listener = new com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener({
    impressionDetected: (message: com.google.firebase.inappmessaging.model.InAppMessage) => {
      callback({
        campaignName: message.getCampaignName()
      })
    }
  });

  com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance().addImpressionListener(listener)
}

export function triggerEvent(eventName: string): void {
  com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance().triggerEvent(eventName);
}