package org.nativescript.plugins.firebase;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;

import java.io.IOException;

public class FirebasePlugin {
  private static final String TAG = "FirebasePlugin";

  private static String cachedToken;
  private static String cachedNotification;

  private static FirebasePluginListener onPushTokenReceivedCallback;
  private static FirebasePluginListener onNotificationReceivedCallback;

  public static void registerForPushNotifications(final String senderId) {
    new Thread() {
      public void run() {
        try {
          FirebaseInstanceId.getInstance().getToken(senderId, "FCM");
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
//          FirebaseInstanceId.getInstance().deleteToken(senderId, "FCM");
          FirebaseInstanceId.getInstance().deleteInstanceId();
        } catch (IOException e) {
          Log.e(TAG, "Error deleting token in FCM: " + e.getMessage(), e);
        }
      }
    }.start();
  }

  public static void setOnPushTokenReceivedCallback(FirebasePluginListener callbacks) {
    onPushTokenReceivedCallback = callbacks;
    if (cachedToken != null) {
      executeOnPushTokenReceivedCallback(cachedToken);
      cachedToken = null;
    }
  }

  public static void setOnNotificationReceivedCallback(FirebasePluginListener callbacks) {
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
