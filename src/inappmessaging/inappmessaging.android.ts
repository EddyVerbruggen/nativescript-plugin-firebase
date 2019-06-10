import { OnMessageImpressionCallbackData, OnMessageClickedCallbackData } from "./inappmessaging";

export function onMessageClicked(callback: (data: OnMessageClickedCallbackData) => void): void {
  const listener = new com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener({
    messageClicked: (message: com.google.firebase.inappmessaging.model.InAppMessage, action: com.google.firebase.inappmessaging.model.Action) => {
      console.log(">> listener, messageClicked");
      console.log(">> listener, messageClicked, message: " + message);
      console.log(">> listener, messageClicked, action: " + action);
      console.log(">> listener, messageClicked, campaign: " + message.getCampaignName());
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
      console.log(">> listener, impressionDetected");
      console.log(">> listener, impressionDetected, message: " + message);
      console.log(">> listener, impressionDetected, campaign: " + message.getCampaignName());
      callback({
        campaignName: message.getCampaignName()
      })
    }
  });

  com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance().addImpressionListener(listener)
}
