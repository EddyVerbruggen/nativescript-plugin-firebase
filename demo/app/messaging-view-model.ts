import { alert } from "tns-core-modules/ui/dialogs";
import * as platform from "tns-core-modules/platform";
import * as firebase from "nativescript-plugin-firebase";
import { messaging } from "nativescript-plugin-firebase/messaging";

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
    if (platform.isIOS) {
      const model = new messaging.PushNotificationModel();
      model.iosSettings = new messaging.IosPushSettings();
      model.iosSettings.badge = false;
      model.iosSettings.alert = true;
      model.iosSettings.interactiveSettings = new messaging.IosInteractivePushSettings();
      model.iosSettings.interactiveSettings.actions = [
        {
          identifier: "OPEN_ACTION",
          title: "Open the app (if closed)",
          options: messaging.IosInteractiveNotificationActionOptions.foreground
        },
        {
          identifier: "AUTH",
          title: "Open the app, but only if device is not locked with a passcode",
          options: messaging.IosInteractiveNotificationActionOptions.foreground | messaging.IosInteractiveNotificationActionOptions.authenticationRequired
        },
        {
          identifier: "INPUT_ACTION",
          title: "Tap to reply without opening the app",
          type: "input",
          submitLabel: "Fire!",
          placeholder: "Load the gun..."
        },
        {
          identifier: "INPUT_ACTION",
          title: "Tap to reply and open the app",
          options: messaging.IosInteractiveNotificationActionOptions.foreground,
          type: "input",
          submitLabel: "OK, send it",
          placeholder: "Type here, baby!"
        },
        {
          identifier: "DELETE_ACTION",
          title: "Delete without opening the app",
          options: messaging.IosInteractiveNotificationActionOptions.destructive
        }
      ];

      model.iosSettings.interactiveSettings.categories = [{
        identifier: "GENERAL"
      }];

      model.onNotificationActionTakenCallback = (actionIdentifier: string, message: firebase.Message, inputText?: string) => {
        console.log(`onNotificationActionTakenCallback fired! \n\r Message: ${JSON.stringify(message)}, \n\r Action taken: ${actionIdentifier}`);

        alert({
          title: "Interactive push action",
          message: `Message: ${JSON.stringify(message)}, \n\r Action taken: ${actionIdentifier}` + (inputText ? `, \n\r Input text: ${inputText}` : ""),
          okButtonText: "Nice!"
        });
      };

      firebase.registerForInteractivePush(model);
      console.log("Registered for interactive push");
    } else {
      console.log("Interactive push messaging is iOS-only!");
    }
  }

  // You would normally add these handlers in 'init', but if you want you can do it seperately as well.
  // The benefit being your user will not be confronted with the "Allow notifications" consent popup when 'init' runs.
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

          setTimeout(() => {
            alert({
              title: "Push message!",
              message: (message.title !== undefined ? message.title : ""),
              okButtonText: "Sw33t"
            });
          }, 500);
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

  public doGetAreNotificationsEnabled(): void {
    alert({
      title: "AreNotificationsEnabled",
      message: "" + firebase.areNotificationsEnabled(),
      okButtonText: "Okay, very interesting"
    });
  }
}
