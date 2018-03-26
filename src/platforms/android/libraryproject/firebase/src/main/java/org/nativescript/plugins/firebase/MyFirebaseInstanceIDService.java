package org.nativescript.plugins.firebase;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

public class MyFirebaseInstanceIDService extends FirebaseInstanceIdService {

  @Override
  public void onTokenRefresh() {
    // Get updated InstanceID token (may be null in case the device has no internet)
    final String refreshedToken = FirebaseInstanceId.getInstance().getToken();

    // Send to client
    FirebasePlugin.executeOnPushTokenReceivedCallback(refreshedToken);
  }
}
