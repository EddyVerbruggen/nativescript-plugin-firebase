import { firebase } from "../firebase-common";
import { Application } from "@nativescript/core";
import { PushNotificationModel } from "./messaging.ios";
import { firebase as fbNamespace } from "../firebase";

declare const android, com, global: any;
const NotificationManagerCompatClass = useAndroidX() ? global.androidx.core.app.NotificationManagerCompat : android.support.v4.app.NotificationManagerCompat;

let _launchNotification = null;
let _senderId: string = null;

function getSenderId(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (_senderId !== null) {
      resolve(_senderId);
    }

    const setSenderIdAndResolve = () => {
      const senderIdResourceId = Application.android.context.getResources().getIdentifier("gcm_defaultSenderId", "string", Application.android.context.getPackageName());
      if (senderIdResourceId === 0) {
        throw new Error("####################### Seems like you did not include 'google-services.json' in your project! Firebase Messaging will not work properly. #######################");
      }
      _senderId = Application.android.context.getString(senderIdResourceId);
      resolve(_senderId);
    };

    if (!Application.android.context) {
      // throw new Error("Don't call this function before your app has started.");
      Application.on(Application.launchEvent, () => setSenderIdAndResolve())
    } else {
      setSenderIdAndResolve();
    }
  });
}

export function initFirebaseMessaging(options?: fbNamespace.MessagingOptions) {
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

export function onAppModuleLaunchEvent(args: any) {
  org.nativescript.plugins.firebase.FirebasePluginLifecycleCallbacks.registerCallbacks(Application.android.nativeApp);
}

export function onAppModuleResumeEvent(args: any) {
  const intent = args.android.getIntent();
  const extras = intent.getExtras();

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

    // clear, otherwise the next resume we trigger this again
    intent.removeExtra("from");

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
            success: notification => callback(JSON.parse(notification)),
            error: err => console.log("Error handling message: " + err)
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
      let tokenReturned = false;
      org.nativescript.plugins.firebase.FirebasePlugin.setOnPushTokenReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: token => {
              tokenReturned = true;
              callback(token);
            },
            error: err => console.log("addOnPushTokenReceivedCallback error: " + err)
          })
      );

      // make sure we return a token if we already have it
      setTimeout(() => {
        if (!tokenReturned) {
          getSenderId().then(senderId => {
            org.nativescript.plugins.firebase.FirebasePlugin.getCurrentPushToken(
                senderId,
                new org.nativescript.plugins.firebase.FirebasePluginListener({
                  success: token => callback(token),
                  error: err => console.log(err)
                })
            );
          });
        }
      }, 2000);

      resolve();
    } catch (ex) {
      console.log("Error in messaging.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
}

export function registerForPushNotifications(options?: fbNamespace.MessagingOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      initFirebaseMessaging(options);

      getSenderId()
          .then(senderId => {
            org.nativescript.plugins.firebase.FirebasePlugin.registerForPushNotifications(senderId);
            resolve();
          })
          .catch(e => reject(e));
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

function useAndroidX() {
  return global.androidx && global.androidx.appcompat;
}

export function areNotificationsEnabled() {
  const androidSdkVersion = android.os.Build.VERSION.SDK_INT;

  if (androidSdkVersion >= 24) { // android.os.Build.VERSION_CODES.N
    return NotificationManagerCompatClass.from(Application.android.context).areNotificationsEnabled();
  } else {
    console.log("NotificationManagerCompat.areNotificationsEnabled() is not supported in Android SDK VERSION " + androidSdkVersion);
    return true;
  }
}
