package org.nativescript.plugins.firebase;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Map;

/**
 * This class takes care of notifications received while the app is in the foreground.
 */
public class MyFirebaseMessagingService extends FirebaseMessagingService {

  @Override
  public void onMessageReceived(RemoteMessage remoteMessage) {
    RemoteMessage.Notification not = remoteMessage.getNotification();
    try {
      JSONObject json = new JSONObject()
          .put("title", not.getTitle())
          .put("body", not.getBody())
          .put("foreground", true);

      Map<String, String> data = remoteMessage.getData();
      for (Map.Entry<String, String> stringStringEntry : data.entrySet()) {
        json.put(stringStringEntry.getKey(), stringStringEntry.getValue());
      }

      FirebasePlugin.executeOnNotificationReceivedCallback(json.toString());
    } catch (JSONException e) {
      e.printStackTrace();
    }
  }


  /*
  private void sendNotification(String messageBody) {
    Intent intent = new Intent(this, MainActivity.class);
    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
    PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent,
        PendingIntent.FLAG_ONE_SHOT);

    Uri defaultSoundUri= RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
    NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this)
        .setSmallIcon(R.drawable.ic_stat_ic_notification)
        .setContentTitle("FCM Message")
        .setContentText(messageBody)
        .setAutoCancel(true)
        .setSound(defaultSoundUri)
        .setContentIntent(pendingIntent);

    NotificationManager notificationManager =
        (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

    // 0 = id of notification
    notificationManager.notify(0, notificationBuilder.build());
  }
*/

}
