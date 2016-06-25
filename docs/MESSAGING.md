<table>
<tr>
<td><img src="images/firebase.png" width="154px" height="43px" alt="Firebase"/></td>
<td>Cloud Messaging</td>
</tr>
</table>

## Enabling Firebase Cloud Messaging (FCM)
Version 3.3.0 of this plugin added FCM support (which is the successor of GCM).

Although using push messages in your Firebase app is really easy setting it up is not. Traditionally, especially for iOS.

### Android
Work in progress.

### iOS

#### Receiving remote notifications in the background
Open `app/App_Resources/iOS/Info.plist` and add this to the bottom:

```xml
<key>UIBackgroundModes</key>
<array>
	<string>remote-notification</string>
</array>
```

#### Provisioning hell
Follow [this guide](https://firebase.google.com/docs/cloud-messaging/ios/certs) to the letter. Once you've done it run `tns run ios` and upon starting the app it should prompt you for notification support. That also works on the simulator, but actually receiving notifications is _only_ possible on a real device.

## Functions
I tried to make this as simple as possible, so everything is handled for you transparently. If you want to act upon the notification that triggered opening your app then configure a callback handler as follows.

### Handling a notification
To listen to received notifications while in the foreground or when your app moves from the background to the foreground, add a handler `init`.

Any pending notifications (while your app was not in the foreground) will trigger the `onMessageReceivedCallback` handler.

```js
  firebase.init({
    onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
      // if your server passed a custom property called 'foo', then do this:
      console.log("Value of 'foo': " + message.foo);
  });
```

You don't _have_ to provide the handler during `init` - you can also do it through a dedicated function.

```js
  firebase.addOnMessageReceivedCallback(
    function(message) {
      // ..
    });
  });
```
