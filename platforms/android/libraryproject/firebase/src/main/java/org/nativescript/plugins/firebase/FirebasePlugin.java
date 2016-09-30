package org.nativescript.plugins.firebase;

public class FirebasePlugin {

  private static String cachedToken;
  private static String cachedNotification;

  private static FirebasePluginListener onPushTokenReceivedCallback;
  private static FirebasePluginListener onNotificationReceivedCallback;

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
