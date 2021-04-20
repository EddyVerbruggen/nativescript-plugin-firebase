import * as firebase from "nativescript-plugin-firebase";
import { Message, messaging } from "nativescript-plugin-firebase/messaging";
import * as applicationSettings from "tns-core-modules/application-settings";
import { Observable } from "tns-core-modules/data/observable";
import * as platform from "tns-core-modules/platform";
import { alert, confirm } from "tns-core-modules/ui/dialogs";

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

export class PushViewModel extends Observable {

  private static APP_REGISTERED_FOR_NOTIFICATIONS = "APP_REGISTERED_FOR_NOTIFICATIONS";

  constructor() {
    super();
    if (applicationSettings.getBoolean(PushViewModel.APP_REGISTERED_FOR_NOTIFICATIONS, false)) {
      this.doRegisterPushHandlers();
    }
    // this.setScreenName("push-demo-view");
  }

  public doRequestConsent(): void {
    confirm({
      title: "We'd like to send notifications",
      message: "Do you agree? Please do, we won't spam you. Promised.",
      okButtonText: "Yep!",
      cancelButtonText: "Maybe later"
    }).then(pushAllowed => {
      if (pushAllowed) {
        applicationSettings.setBoolean(PushViewModel.APP_REGISTERED_FOR_NOTIFICATIONS, true);
        this.doRegisterForPushNotifications();
      }
    });
  }

  public doGetCurrentPushToken(): void {
    messaging.getCurrentPushToken()
        .then(token => {
          // may be null/undefined if not known yet
          console.log(token);
          alert({
            title: "Current Push Token",
            message: (!token ? "Not received yet (note that on iOS this does not work on a simulator)" : token + ("\n\nSee the console log if you want to copy-paste it.")),
            okButtonText: "OK, thx"
          });
        })
        .catch(err => console.log("Error in doGetCurrentPushToken: " + err));
  }

  public doRegisterForInteractivePush(): void {
    if (!platform.isIOS) {
      console.log("##### Interactive push messaging is currently iOS-only!");
      console.log("##### Also, please make sure you don't include the 'click_action' notification property when pusing to Android.");
      return;
    }

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

    model.onNotificationActionTakenCallback = (actionIdentifier: string, message: Message, inputText?: string) => {
      console.log(`onNotificationActionTakenCallback fired! \n\r Message: ${JSON.stringify(message)}, \n\r Action taken: ${actionIdentifier}`);

      alert({
        title: "Interactive push action",
        message: `Message: ${JSON.stringify(message)}, \n\r Action taken: ${actionIdentifier}` + (inputText ? `, \n\r Input text: ${inputText}` : ""),
        okButtonText: "Nice!"
      });
    };

    messaging.registerForInteractivePush(model);

    console.log("Registered for interactive push");
    alert({
      title: "Registered for interactive push",
      okButtonText: "Thx!"
    });
  }

  // You could add these handlers in 'init', but if you want you can do it seperately as well.
  // The benefit being your user will not be confronted with the "Allow notifications" consent popup when 'init' runs.
  public doRegisterPushHandlers(): void {
    // note that this will implicitly register for push notifications, so there's no need to call 'registerForPushNotifications'
    messaging.addOnPushTokenReceivedCallback(
        token => {
          // you can use this token to send to your own backend server,
          // so you can send notifications to this specific device
          console.log("Firebase plugin received a push token: " + token);
          // var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
          // pasteboard.setValueForPasteboardType(token, kUTTypePlainText);
        }
    );
    messaging.addOnMessageReceivedCallback(
        message => {
          console.log("Push message received in push-view-model: " + JSON.stringify(message, getCircularReplacer()));

          setTimeout(() => {
            alert({
              title: "Push message!",
              message: (message !== undefined && message.title !== undefined ? message.title : ""),
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
    messaging.unregisterForPushNotifications().then(
        () => {
          alert({
            title: "Unregistered",
            message: "If you were registered, that is.",
            okButtonText: "Got it, thanks!"
          });
        });
  }

  public doRegisterForPushNotifications(): void {
    messaging.registerForPushNotifications({
      onPushTokenReceivedCallback: (token: string): void => {
        console.log(">>>> Firebase plugin received a push token: " + token);
      },

      onMessageReceivedCallback: (message: Message) => {
        console.log("Push message received in push-view-model: " + JSON.stringify(message, getCircularReplacer()));

        setTimeout(() => {
          alert({
            title: "Push message!",
            message: (message !== undefined && message.title !== undefined ? message.title : ""),
            okButtonText: "Sw33t"
          });
        }, 500);
      },

      showNotifications: true,

      // Whether you want this plugin to always handle the notifications when the app is in foreground.
      // Currently used on iOS only. Default false.
      // When false, you can still force showing it when the app is in the foreground by adding 'showWhenInForeground' to the notification as mentioned in the readme.
      showNotificationsWhenInForeground: false
    })
        .then(() => console.log(">>>> Registered for push"))
        .catch(err => console.log(">>>> Failed to register for push"));
  }

  public doSubscribeToTopic(): void {
    messaging.subscribeToTopic("demo").then(
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
    messaging.unsubscribeFromTopic("demo").then(
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
      message: "" + messaging.areNotificationsEnabled(),
      okButtonText: "Okay, very interesting"
    });
  }

  private setScreenName(screenName): void {
    firebase.analytics.setScreenName(
        {
          screenName
        })
        .then(() => console.log("Analytics screen name set to: " + screenName))
        .catch(err => console.log("Analytics error: " + err));
  }
}
