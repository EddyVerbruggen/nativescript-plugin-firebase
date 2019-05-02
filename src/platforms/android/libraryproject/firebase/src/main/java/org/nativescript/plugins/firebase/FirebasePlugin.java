package org.nativescript.plugins.firebase;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;

import java.io.IOException;

public class FirebasePlugin {
  private static final String TAG = "FirebasePlugin";

  private static String cachedToken;
  private static String cachedNotification;
  private static boolean preventInitialRegisterTokenCallback = false;

  private static FirebasePluginListener onPushTokenReceivedCallback;
  private static FirebasePluginListener onNotificationReceivedCallback;

  public static void registerForPushNotifications(final String senderId) {
    new Thread() {
      public void run() {
        try {
          String token = FirebaseInstanceId.getInstance().getToken(senderId, "FCM");

          if (!preventInitialRegisterTokenCallback) {
            executeOnPushTokenReceivedCallback(token);
          }

          preventInitialRegisterTokenCallback = false;
        } catch (IOException e) {
          Log.e(TAG, "Error getting a token from FCM: " + e.getMessage(), e);
        }
      }
    }.start();
  }

  public static void getCurrentPushToken(final String senderId, final FirebasePluginListener callback) {
    new Thread() {
      public void run() {
        try {
          callback.success(FirebaseInstanceId.getInstance().getToken(senderId, "FCM"));
        } catch (IOException e) {
          Log.e(TAG, "Error getting a token from FCM: " + e.getMessage(), e);
          callback.error(e.getMessage());
        }
      }
    }.start();
  }

  public static void unregisterForPushNotifications(final String senderId) {
    new Thread() {
      public void run() {
        try {
          // No matter the workflow, on unregister we must ensure that subsequent calls to register
          // will trigger any callbacks.
          preventInitialRegisterTokenCallback = false;

          FirebaseInstanceId.getInstance().deleteToken(senderId, "FCM");
          // Do not use deleteInstanceId because by default FCM automatically re-initializes
          // the token and we get onPushTokenReceivedCallback triggered.
//          FirebaseInstanceId.getInstance().deleteInstanceId();
        } catch (IOException e) {
          Log.e(TAG, "Error deleting token in FCM: " + e.getMessage(), e);
        }
      }
    }.start();
  }

  public static void setOnPushTokenReceivedCallback(FirebasePluginListener callbacks) {
    // Workflow 1: User uses the registerForPushNotifications
    // In this case we are getting a double callback on initial app start up, since the FB instance
    // generates a new token at application startup automatically. So we need to prevent
    // the one triggered from the register.
    // Workflow 2: Users uses addPushTokenReceivedCallback directly
    // In this case we need to emit the token
    onPushTokenReceivedCallback = callbacks;
    if (cachedToken != null) {
      executeOnPushTokenReceivedCallback(cachedToken);
      cachedToken = null;
      preventInitialRegisterTokenCallback = true;
    }
  }

  public static void setOnNotificationReceivedCallback(FirebasePluginListener callbacks) {
    // TODO perhaps use this to set a badge: https://github.com/gogoout/nativescript-plugin-badge/blob/28e79f6d5614ec9b9b98bb07c67df32fdc42ba9a/src/badge.android.ts#L13
    //  Default count=1, and perhaps pass it in via the notification payload (like on iOS)
    onNotificationReceivedCallback = callbacks;
    if (cachedNotification != null) {
      executeOnNotificationReceivedCallback(cachedNotification);
      cachedNotification = null;
    }
  }

  public static void executeOnPushTokenReceivedCallback(String token) {
    if (onPushTokenReceivedCallback != null) {
      onPushTokenReceivedCallback.success(token);
    } else {
      cachedToken = token;
    }
  }

  public static void executeOnNotificationReceivedCallback(String notification) {
    if (onNotificationReceivedCallback != null) {
      onNotificationReceivedCallback.success(notification);
    } else {
      cachedNotification = notification;
    }
  }
}
