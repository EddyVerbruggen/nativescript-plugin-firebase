import { alert } from "tns-core-modules/ui/dialogs";
import { isIOS } from "tns-core-modules/platform";
import * as firebase from "nativescript-plugin-firebase";
import { IOSPushSettings, IosInteractiveNotificationActionOptions, IosInteractivePushSettings, PushNotificationModel } from "nativescript-plugin-firebase/messaging/messaging";

const getCircularReplacer = () => {
  const seen = new WeakSet;
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export class MessagingViewModel {
  public doGetCurrentPushToken(): void {
    firebase.getCurrentPushToken().then(token => {
      // may be null if not known yet
      console.log("Current push token: " + token);
      alert({
        title: "Current Push Token",
        message: (token === null ? "Not received yet" : token),
        okButtonText: "OK, thx"
      });
    });
  }

  public doRegisterForInteractivePush(): void {
    if (isIOS) {
      let model = new PushNotificationModel();
      model.iosSettings = new IOSPushSettings();
      model.iosSettings.badge = false;
      model.iosSettings.alert = true;
      model.iosSettings.interactiveSettings = new IosInteractivePushSettings();
      model.iosSettings.interactiveSettings.actions = [
        {
          identifier: "OPEN_ACTION",
          title: "Open",
          options: IosInteractiveNotificationActionOptions.foreground
        },
        {
          identifier: "IGNORE_ACTION",
          title: "Ignore",
          options: IosInteractiveNotificationActionOptions.foreground
        },
        {
          identifier: "DELETE_ACTION",
          title: "Delete",
          options: IosInteractiveNotificationActionOptions.foreground | IosInteractiveNotificationActionOptions.destructive
        }
      ];
      model.iosSettings.interactiveSettings.categories = [
        {
          identifier: "GENERAL"
          // actionsForDefaultContext: ['OPEN_ACTION', 'IGNORE_ACTION', 'DELETE_ACTION'],
          // actionsForMinimalContext: ['OPEN_ACTION', 'IGNORE_ACTION', 'DELETE_ACTION']
        }
      ];

      model.onNotificationActionTakenCallback = (actionIdentifier: string, message: firebase.Message) => {
        console.log(`onNotificationActionTakenCallback fired!`);
        console.log(">>>>> Action taken: " + actionIdentifier);
        console.log(">>>>> message: " + JSON.stringify(message));

        alert({
          title: "Interactive push action",
          message: `Message: ${JSON.stringify(message)}, \n\r Action taken: ${actionIdentifier}`,
          okButtonText: "Nice!"
        });
      };

      firebase.registerForInteractivePush(model);
    } else {
      console.log("Interactive push messaging is iOS-only!");
    }
  }

  // You would normally add these handlers in 'init', but if you want you can do it seperately as well:
  public doRegisterPushHandlers(): void {
    firebase.addOnPushTokenReceivedCallback(
      token => {
        // you can use this token to send to your own backend server,
        // so you can send notifications to this specific device
        console.log("Firebase plugin received a push token: " + token);
        // var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
        // pasteboard.setValueForPasteboardType(token, kUTTypePlainText);
      }
    );
    firebase.addOnMessageReceivedCallback(
      message => {
        console.log("------------------- push message received: " + JSON.stringify(message, getCircularReplacer()));

        // alert({
        //   title: "Push message!",
        //   message: (message.title !== undefined ? message.title : ""),
        //   okButtonText: "Sw33t"
        // });
      }
    ).then(() => {
      console.log("Added addOnMessageReceivedCallback");
    }, err => {
      console.log("Failed to add addOnMessageReceivedCallback: " + err);
    });
  }

  public doUnregisterForPushNotifications(): void {
    firebase.unregisterForPushNotifications().then(
      () => {
        alert({
          title: "Unregistered",
          message: "If you were registered, that is.",
          okButtonText: "Got it, thanks!"
        });
      });
  }

  public doSubscribeToTopic(): void {
    firebase.subscribeToTopic("demo").then(
      () => {
        alert({
          title: "Subscribed",
          message: ".. to the 'demo' topic",
          okButtonText: "Okay, interesting"
        });
      },
      error => {
        alert({
          title: "Subscribe error",
          message: error,
          okButtonText: "OK"
        });
      }
    );
  }

  public doUnsubscribeFromTopic(): void {
    firebase.unsubscribeFromTopic("demo").then(
      () => {
        alert({
          title: "Unsubscribed",
          message: ".. from the 'demo' topic",
          okButtonText: "Okay, very interesting"
        });
      },
      error => {
        alert({
          title: "Unsubscribe error",
          message: error,
          okButtonText: "OK"
        });
      }
    );
  }
}
