package org.nativescript.plugins.firebase;

import android.util.Log;

public class FirebasePlugin {

  static final String TAG = "FirebasePlugin";

  private static String cachedToken;
  private static String cachedNotification;

  private static FirebasePluginListener onPushTokenReceivedCallback;
  private static FirebasePluginListener onNotificationReceivedCallback;

  public static void setOnPushTokenReceivedCallback(FirebasePluginListener callbacks) {
    Log.d(TAG, "******* Setting onPushTokenReceivedCallback");
    onPushTokenReceivedCallback = callbacks;
    if (cachedToken != null) {
      Log.d(TAG, "******* Setting onPushTokenReceivedCallback - cachedToken is available");
      executeOnPushTokenReceivedCallback(cachedToken);
      cachedToken = null;
    }
  }

  public static void setOnNotificationReceivedCallback(FirebasePluginListener callbacks) {
    Log.d(TAG, "******* Setting onNotificationReceivedCallback");
    onNotificationReceivedCallback = callbacks;
    if (cachedNotification != null) {
      Log.d(TAG, "******* Setting onNotificationReceivedCallback - cachedNotification is available");
      executeOnNotificationReceivedCallback(cachedNotification);
      cachedNotification = null;
    }
  }

  public static void executeOnPushTokenReceivedCallback(String token) {
    if (onPushTokenReceivedCallback != null) {
      Log.d(TAG, "******* Sending message to client");
      onPushTokenReceivedCallback.success(token);
    } else {
      Log.d(TAG, "******* No callback function - caching the data for later retrieval.");
      cachedToken = token;
    }
  }

  public static void executeOnNotificationReceivedCallback(String notification) {
    if (onNotificationReceivedCallback != null) {
      Log.d(TAG, "******* Sending message to client");
      onNotificationReceivedCallback.success(notification);
    } else {
      Log.d(TAG, "******* No callback function - caching the data for later retrieval.");
      cachedNotification = notification;
    }
  }
}
