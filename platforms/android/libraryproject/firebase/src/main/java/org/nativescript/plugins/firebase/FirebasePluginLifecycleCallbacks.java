package org.nativescript.plugins.firebase;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.util.Log;

/**
 * Subscribe to the Pause and Resume activity events in order to toggle the PushPlugin's status.
 * When the Plugin is not in active state - i.e. at foreground, notifications should be created
 * and published in the Notification Center, otherwise they're passed directly to the application
 * by invoking the onMessageReceived callback.
 */
public class FirebasePluginLifecycleCallbacks implements Application.ActivityLifecycleCallbacks {
  static final String TAG = "FirebasePluginCB";

  private static FirebasePluginLifecycleCallbacks callbacks = new FirebasePluginLifecycleCallbacks();

  /**
   * Register for the application's events
   * @param app
   */
  public static void registerCallbacks(Application app) {
    if (app == null) {
      Log.d(TAG, "The application is null, it's not passed correctly!");
      throw new RuntimeException("The application is null, it's not passed correctly!");
    }

    // clean up, not to leak and register it N times...
    Log.d(TAG, "Unregistering the activity lifecycle callbacks...");
    app.unregisterActivityLifecycleCallbacks(callbacks);

    Log.d(TAG, "Registering the activity lifecycle callbacks...");
    app.registerActivityLifecycleCallbacks(callbacks);
  }

  public void onActivityPaused(Activity activity) {
    Log.d(MyFirebaseMessagingService.TAG, "onActivityPaused: Application has been stopped.");

    // the application is being stopped -> the push plugin is not in active/foreground state anymore
    MyFirebaseMessagingService.isActive = false;
  }

  public void onActivityResumed(Activity activity) {
    Log.d(MyFirebaseMessagingService.TAG, "onActivityResumed: Application has been started");

    // the application has been resumed-> the push plugin is now in active/foreground state
    MyFirebaseMessagingService.isActive = true;
  }

  public void onActivityCreated(Activity activity, Bundle bundle) {
  }

  public void onActivityDestroyed(Activity activity) {
  }

  public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
  }

  public void onActivityStarted(Activity activity) {
  }

  public void onActivityStopped(Activity activity) {
  }
}