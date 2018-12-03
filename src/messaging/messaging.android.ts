import { firebase } from "../firebase-common";
import * as appModule from "tns-core-modules/application";
import * as application from "tns-core-modules/application/application";
import { PushNotificationModel } from "./messaging.ios";
import { MessagingOptions } from "../firebase";

declare const android, com, org: any;

let _launchNotification = null;
let _senderId: string = null;

function getSenderId(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (_senderId !== null) {
      resolve(_senderId);
    }

    const setSenderIdAndResolve = () => {
      const senderIdResourceId = application.android.context.getResources().getIdentifier("gcm_defaultSenderId", "string", application.android.context.getPackageName());
      if (senderIdResourceId === 0) {
        throw new Error("####################### Seems like you did not include 'google-services.json' in your project! Firebase Messaging will not work properly. #######################");
      }
      _senderId = application.android.context.getString(senderIdResourceId);
      resolve(_senderId);
    };

    if (!application.android.context) {
      // throw new Error("Don't call this function before your app has started.");
      appModule.on(appModule.launchEvent, () => setSenderIdAndResolve())
    } else {
      setSenderIdAndResolve();
    }
  });
}

export function initFirebaseMessaging(options?: MessagingOptions) {
  if (!options) {
    return;
  }
  if (options.onMessageReceivedCallback !== undefined) {
    addOnMessageReceivedCallback(options.onMessageReceivedCallback);
  }
  if (options.onPushTokenReceivedCallback !== undefined) {
    addOnPushTokenReceivedCallback(options.onPushTokenReceivedCallback);
  }
}

export function onAppModuleResumeEvent(args: any) {
  org.nativescript.plugins.firebase.FirebasePluginLifecycleCallbacks.registerCallbacks(appModule.android.nativeApp);

  const intent = args.android.getIntent();
  const extras = intent.getExtras();
  // filter out any rubbish that doesn't have a 'from' key
    if (extras !== null && extras.keySet().contains("from")) {
      let result = {
        foreground: false,
        data: {}
      };

      const iterator = extras.keySet().iterator();
      while (iterator.hasNext()) {
        const key = iterator.next();
        if (key !== "from" && key !== "collapse_key") {
          result[key] = extras.get(key);
          result.data[key] = extras.get(key);
        }
      }

      if (firebase._receivedNotificationCallback === null) {
        _launchNotification = result;
      } else {
        // add a little delay just to make sure clients alerting this message will see it as the UI needs to settle
        setTimeout(() => {
          firebase._receivedNotificationCallback(result);
        });
      }
    }
}

export function registerForInteractivePush(model?: PushNotificationModel): void {
  console.log("'registerForInteractivePush' is not currently implemented on Android");
}

export function getCurrentPushToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (com.google.firebase.messaging || com.google.firebase.iid) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      getSenderId().then(senderId => {
        org.nativescript.plugins.firebase.FirebasePlugin.getCurrentPushToken(
            senderId,
            new org.nativescript.plugins.firebase.FirebasePluginListener({
              success: token => resolve(token),
              error: err => reject(err)
            })
        );
      });

    } catch (ex) {
      console.log("Error in messaging.getCurrentPushToken: " + ex);
      reject(ex);
    }
  });
}

export function addOnMessageReceivedCallback(callback) {
  return new Promise((resolve, reject) => {
    try {
      firebase._receivedNotificationCallback = callback;

      org.nativescript.plugins.firebase.FirebasePlugin.setOnNotificationReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: notification => callback(JSON.parse(notification))
          })
      );

      // if the app was launched from a notification, process it now
      if (_launchNotification !== null) {
        callback(_launchNotification);
        _launchNotification = null;
      }

      resolve();
    } catch (ex) {
      console.log("Error in messaging.addOnMessageReceivedCallback: " + ex);
      reject(ex);
    }
  });
}

export function addOnPushTokenReceivedCallback(callback) {
  return new Promise((resolve, reject) => {
    try {
      org.nativescript.plugins.firebase.FirebasePlugin.setOnPushTokenReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: token => callback(token),
            error: err => console.log("addOnPushTokenReceivedCallback error: " + err)
          })
      );

      resolve();
    } catch (ex) {
      console.log("Error in messaging.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
}

export function registerForPushNotifications(options?: MessagingOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      initFirebaseMessaging(options);
      getSenderId().then(senderId => org.nativescript.plugins.firebase.FirebasePlugin.registerForPushNotifications(senderId));
    } catch (ex) {
      console.log("Error in messaging.registerForPushNotifications: " + ex);
      reject(ex);
    }
  });
}

export function unregisterForPushNotifications(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      getSenderId().then(senderId => org.nativescript.plugins.firebase.FirebasePlugin.unregisterForPushNotifications(senderId));

      resolve();
    } catch (ex) {
      console.log("Error in messaging.unregisterForPushNotifications: " + ex);
      reject(ex);
    }
  });
}

export function subscribeToTopic(topicName) {
  return new Promise((resolve, reject) => {
    try {

      if (typeof (com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => task.isSuccessful() ? resolve() : reject(task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException())
      });

      com.google.firebase.messaging.FirebaseMessaging.getInstance()
          .subscribeToTopic(topicName)
          .addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      console.log("Error in messaging.subscribeToTopic: " + ex);
      reject(ex);
    }
  });
}

export function unsubscribeFromTopic(topicName) {
  return new Promise((resolve, reject) => {
    try {

      if (typeof (com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => task.isSuccessful() ? resolve() : reject(task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException())
      });

      com.google.firebase.messaging.FirebaseMessaging.getInstance()
          .unsubscribeFromTopic(topicName)
          .addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      console.log("Error in messaging.unsubscribeFromTopic: " + ex);
      reject(ex);
    }
  });
}

export function areNotificationsEnabled() {
  const androidSdkVersion = android.os.Build.VERSION.SDK_INT;

  if (androidSdkVersion >= 24) { // android.os.Build.VERSION_CODES.N
    return android.support.v4.app.NotificationManagerCompat.from(application.android.context).areNotificationsEnabled();
  } else {
    console.log("NotificationManagerCompat.areNotificationsEnabled() is not supported in Android SDK VERSION " + androidSdkVersion);
    return true;
  }
}
