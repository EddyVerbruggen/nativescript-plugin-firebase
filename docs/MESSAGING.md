<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/notifications.png" height="85px" alt="Notifications"/>

## Enabling Firebase Cloud Messaging (FCM)
Version 3.3.0 of this plugin added FCM support (which is the successor of GCM).

Although using push messages in your Firebase app is really easy setting it up is not. Traditionally, especially for iOS.

### Android
If you didn't choose this feature during installation you can uncomment `firebase-messaging` in [include.gradle](../platforms/android/include.gradle)

You will not get the title and body if the notification was received while the application was in the background, but you will get the *data* payload.

Add the following services in the `app/App_Resources/Android/AndroidManifest.xml` to enable advanced FCM messaging:
```
<manifest ... >
    <application ... >
        ...
        <service android:name="org.nativescript.plugins.firebase.MyFirebaseInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
            </intent-filter>
        </service>
        <service android:name="org.nativescript.plugins.firebase.MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
    </application>
</manifest>
```

### iOS
If you didn't choose this feature during installation you can run the "post install" script again (see the main readme) to add messaging support.

#### Enable push support in Xcode

Open /platforms/ios/yourproject.__xcworkspace__ (!) and go to your project's target and head over to "Capabilities" to switch this on (if it isn't already):
<img src="images/push-xcode-config.png" width="600px" alt="Push Xcode config"/>

> Without this enabled you will receive push messages in the foreground, but **NOT in the background** / when the app is killed.

#### Copy the entitlements file
The previous step created a the file`platforms/ios/YourAppName/(Resources/)YourAppName.entitlements`.
Copy that file to `app/App_Resources/iOS/` (if it doesn't exist yet, otherwise merge its contents),
so it's not removed when you remove and re-add the iOS platform. The relevant content for background push in that file is:

```xml
	<key>aps-environment</key>
	<string>development</string>
```

> Note that since plugin version 5.1.8 the name of the file can either be `<YourAppName>.entitlements` or `app.entitlements`. `YourAppName` is the iOS foldername, see the path above.

#### Allow processing when a background push is received
Open `app/App_Resources/iOS/Info.plist` and add this to the bottom:

```xml
<key>UIBackgroundModes</key>
<array>
  <string>remote-notification</string>
</array>
```

#### Provisioning hell
Follow [this guide](https://firebase.google.com/docs/cloud-messaging/ios/certs) to the letter. Once you've done it run `tns run ios` and upon starting the app it should prompt you for notification support. That also works on the simulator, but actually receiving (background) notifications is __only__ possible on a real device.

### Handling a notification
To listen to received notifications while in the foreground or when your app moves from the background to the foreground, add a handler to `init`.

Any pending notifications (while your app was not in the foreground) will trigger the `onMessageReceivedCallback` handler.

##### JavaScript
```js
  firebase.init({
    onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      // if your server passed a custom property called 'foo', then do this:
      console.log("Value of 'foo': " + message.data.foo);
    }
  });
```

##### TypeScript
```typescript
  firebase.init({
    onMessageReceivedCallback: (message: Message) => {
      console.log(`Title: ${message.title}`);
      console.log(`Body: ${message.body}`);
      // if your server passed a custom property called 'foo', then do this:
      console.log(`Value of 'foo': ${message.data.foo}`);
    }
  });
```

You don't _have_ to provide the handler during `init` - you can also do it through a dedicated function.

One scenario where you want to do this is if you don't want the "This app wants to send push notifications" popup during init, but delay it until you call this function. Second case is when you want to use Angular's `Router` or `RouterExtensions` `navigate` method inside your handler, otherwise the view just won't update.

```js
  firebase.addOnMessageReceivedCallback(
    function(message) {
      // ..
    }
  );
```

### Pushing to individual devices
If you want to send push messages to individual devices, either from your own backend or the FCM console, you need the push token.

Similarly to the message callback you can either wire this through `init` or as a separate function:

```js
  firebase.init({
    onPushTokenReceivedCallback: function(token) {
      console.log("Firebase push token: " + token);
    }
  });
```

.. or:

```js
  firebase.addOnPushTokenReceivedCallback(
    function(token) {
      // ..
    }
  );
```

### Send messages to Topics
Based on the publish/subscribe model, FCM topic messaging allows you to send a message to multiple devices that have opted in to a particular topic. You compose topic messages as needed, and FCM handles routing and delivering the message reliably to the right devices.

Client apps can subscribe to any existing topic, or they can create a new topic. When a client app subscribes to a new topic name (one that does not already exist for your Firebase project), a new topic of that name is created in FCM and any client can subsequently subscribe to it.

```typescript
  firebase.subscribeToTopic("news").then(() => console.log("Subscribed to topic"));
```

and:

```typescript
  firebase.unsubscribeFromTopic("news").then(() => console.log("Unsubscribed from topic"));
```

### Retrieving the push registration token
If - for some reason - you need to manually retrieve the current push registration token of the device, you can do:

```typescript
  firebase.getCurrentPushToken().then((token: string) => {
    // may be null if not known yet
    console.log(`Current push token: ${token}`);
  });
```

## Testing
If you want to report an issue regarding notifications not working, PLEASE try these CURL commands first.

```
curl -X POST --header "Authorization: key=SERVER_KEY" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"notification\":{\"title\": \"My title\", \"text\": \"My text\", \"badge\": \"1\", \"sound\": \"default\"}, \"data\":{\"foo\":\"bar\"}, \"priority\": \"High\", \"to\": \"DEVICE_TOKEN\"}"
```

* SERVER_KEY: see the image below (make sure to use the 'Legacy' server key).
* DEVICE_TOKEN: the one you got in `addOnPushTokenReceivedCallback` or `init`'s `onPushTokenReceivedCallback`.

<img src="images/push-server-key.png" width="459px" height="220px" alt="Push server key"/>

> Note that if you don't want a badge on the app icon, remove the `badge` property or set it to 0. Note that launching the app clears the badge anyway.

### Notfication-popup example

```bash
curl -X POST --header "Authorization: key=AAAA9SHtZvM:APA91bGoY0H2nS8GlzzypDXSiUkNY3nrti4st4WOUs_w1A0Rttcx31U90YGv-p3U4Oql-vh-FzZzWUUPEwl47uvwhI4tB5yz4wwzrJA2fVqLEKZpDU42AQppYnU2-dsURqkyc9sKcjay2egWbfyNK2b-G2JQCqrLVA" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"notification\":{\"title\": \"My title\", \"text\": \"My text\", \"badge\": \"1\", \"sound\": \"default\"}, \"data\":{\"foo\":\"bar\"}, \"priority\": \"High\", \"to\": \"exbKSYOGbto:APA91bHqFX9EA6SxY7NkVKV3ajea9xYn9_2dPz2jS7DGuymoE3fMDhPZLVbTXxbQ5_tS6nxmjdmfAEACM4_L-egNneXInuvg8JfRjrCVICTa8vnccTBq8cAnIx6cME1FvER9WIDC3dC4\"}"
```

This results in a payload of:

- App in the foreground: `{"foo":"bar", "gcm.message_id":"0:1522952720644653%3194ccac3194ccac", "foreground":true, "title":"My title", "body":"My text"}`
- App in the background: `{"foo":"bar", "gcm.message_id":"0:1522952737879515%3194ccac3194ccac", "title":"My title", "body":"My text", "foreground":false}`

### (iOS) background notification example

> Take note of `content_available:true` here

```bash
curl -X POST --header "Authorization: key=AAAA9SHtZvM:APA91bGoY0H2nS8GlzzypDXSiUkNY3nrti4st4WOUs_w1A0Rttcx31U90YGv-p3U4Oql-vh-FzZzWUUPEwl47uvwhI4tB5yz4wwzrJA2fVqLEKZpDU42AQppYnU2-dsURqkyc9sKcjay2egWbfyNK2b-G2JQCqrLVA" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"data\":{\"foo\":\"bar\"}, \"priority\": \"High\", \"content_available\":true, \"to\": \"exbKSYOGbto:APA91bHqFX9EA6SxY7NkVKV3ajea9xYn9_2dPz2jS7DGuymoE3fMDhPZLVbTXxbQ5_tS6nxmjdmfAEACM4_L-egNneXInuvg8JfRjrCVICTa8vnccTBq8cAnIx6cME1FvER9WIDC3dC4\"}"
```

This results in a payload of:
- App in the foreground: `{"gcm.message_id":"0:1522952782882471%3194ccac3194ccac", "foo":"bar", "foreground":true}`
- App in the background: `{"gcm.message_id":"0:1522952757954843%3194ccac3194ccac", "foo":"bar", "foreground":false}`

### Interactive notifications (iOS only for now)
To register the app to receive interactive pushes you need to call `firebase.registerForInteractivePush(model)`.
And you may hook to the `model.onNotificationActionTakenCallback` callback to know what action the user took interacting with the notification.

Each action has either type `button` or `input`, and you can set `options` to do any or all of:
- Launch the app: `foreground`.
- Only allow the action when the device is unlocked: `authenticationRequired`.
- Make the text red to indicate something will be removed/deleted/killed: `destructive`.

Consider this example, where an interactive push notification is received which the user expands and picks the fourth option.
He then types his reply, and (because of how the action was configured) the app launches and captures the reply.

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/messaging/interactive01.png" height="270px" alt="Interactive Notification, part 1"/> <img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/messaging/interactive02.png" height="270px" alt="Interactive Notification, part 2"/> <img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/messaging/interactive03.png" height="270px" alt="Interactive Notification, part 3"/> <img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/messaging/interactive04.png" height="270px" alt="Interactive Notification, part 4"/>

```typescript
import { messaging } from "nativescript-plugin-firebase/messaging";

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

model.onNotificationActionTakenCallback = (actionIdentifier: string, message: firebase.Message) => {
  console.log(`onNotificationActionTakenCallback fired! Message: ${JSON.stringify(message)}, Action taken: ${actionIdentifier}`);
};

firebase.registerForInteractivePush(model);
```

To send an interactive push, add the `"click_action"` property to the notification, with a value corresponding to the `category` defined in the model you've registered in the app.
The payload to trigger the notification in the screenshots above is:

```json
{
  "notification": {
    "title": "I DEMAND YOUR ATTENTION",
    "subtitle": "Just kidding, but not really",
    "text": "Sorry to bother you I meant, please pick an option below..",
    "click_action": "GENERAL",
    "badge": "1",
    "sound": "default",
    "showWhenInForeground": true
  },
  "content_available": false,
  "data": {
    "foo": "bar"
  },
  "priority": "High",
  "to": "DEVICE_PUSH_KEY>"
}
```

### (iOS) showing a notification while the app is in the foreground
Add the `showWhenInForeground` flag to your payload:

```json
{
  "notification": {
    "showWhenInForeground": true
  }
}
```

## What if iOS doesn't show/receive notifications in the background?
Make sure you [`require` the plugin in `app.ts` / `main.ts` / `main.aot.ts`](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/55cfb4f69cf8939f9101712fed22383196b08d36/demo/app/app.ts#L5)
*before* `application.start()`, and do `init()` *after* the app has started (not in `app.ts` - not even in a timeout; move it out of `app.ts` entirely!).

> Make sure to use `require`, *not* `import` in `app.ts` because TSC will remove the import in case you're not using it.
