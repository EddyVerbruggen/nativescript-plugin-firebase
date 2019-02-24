<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/invites.png" height="85px" alt="Invites"/>

## Enabling Invites
Since plugin version 3.12.0 you can use Firebase _Invites_ features.

_Invites_ lets you invite other users to your app from right within your own app, via SMS and/or Email.

Keep in mind that invites are based of dynamic links, and so calling for an invite may return a plain dynamic link, in which case invitationId is null.

### Android
* [Make sure you've uploaded your SHA256 fingerprints](https://developers.google.com/android/guides/client-auth) to the Firebase console.

### iOS
* On iOS the user must be signed in with their Google Account to send invitations.
* You must have the App Store ID set in your developer console project in order for invitations to successfully be sent.
* For more details see [https://firebase.google.com/docs/invites/ios](https://firebase.google.com/docs/invites/ios).

#### Contacts Usage Permission
Open `app/App_Resources/iOS/Info.plist` and add this somewhere in the file (if it's not already there):

```xml
  <key>NSContactsUsageDescription</key>
  <string>For inviting others to use this app.</string>
```

## Receiving Dynamic Links

### Android
To have a dynamic link open your app you need to add an Intent filter to the `<activity>` in `app/App_Resources/Android/AndroidManifest.xml`:

```xml
  <intent-filter>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:host="www.coolapp.com" android:scheme="http"/><!-- Change this -->
    <data android:host="www.coolapp.com" android:scheme="https"/><!-- .. and this! -->
  </intent-filter>
```

### iOS
> We may automate parts of this later, but for now you'll need to do it by hand.

On iOS you'll need to add a custom URL scheme to `app/App_Resources/iOS/Info.plist` (if you don't have this one already):

```xml
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>firebaseplugin.deeplink.urlscheme</string><!-- anything you like, but must be unique -->
			<key>CFBundleURLSchemes</key>
			<array>
				<string>org.nativescript.firebasedemo</string><!-- the same as your bundle id (nativescript.id in package.json) -->
			</array>
		</dict>
	</array>
```

Now open the project in Xcode (the `platforms/ios/<projectname>.xcworkspace` file!) and in the Capabilities tab
enable Associated Domains and add the following to the Associated Domains list:

```
applinks:app_code.app.goo.gl
```

Where `app_code` can be found in the Firebase console at the Dynamic Links section.

#### Copy the entitlements file
The previous step created a the file`platforms/ios/YourAppName/(Resources/)YourAppName.entitlements`.
Copy that file to `app/App_Resources/iOS/` (if it doesn't exist yet, otherwise merge its contents),
so it's not removed when you remove and re-add the iOS platform. The relevant content looks like this:

```xml
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>applinks:j4ctx.app.goo.gl</string>
	</array>
```

> Note that since plugin version 5.1.8 the name of the file can either be `<YourAppName>.entitlements` or `app.entitlements`. `YourAppName` is the iOS foldername, see the path above.

## Functions

### invites.sendInvitation

```js
firebase.invites.sendInvitation({
  title: "Invite title here",
  message: "Invite message here"
}).then(
    function (result) { // SendInvitationResult
      console.log(result.count + "invitations sent, ID's: " + JSON.stringify(result.invitationIds));
    },
    function (error) {
      console.log("sendInvitation error: " + error);
    }
);
```

The options you can pass to `sendInvitation` are:

|param|optional|description
|---|---|---
|`title`|no|Invitation title you want to send.
|`message`|no|Sets the default message sent with invitations.
|`deepLink`|yes|Sets the link into your app that is sent with invitations.
|`callToActionText`|yes|Sets the call-to-action text of the button rendered in email invitations. Cannot exceed 32 characters.
|`customImage`|yes|Sets the URL of a custom image to include in email invitations. The image must be square and around 600x600 pixels. The image can be no larger than 4000x4000 pixels.
|`androidClientID`|yes|If you have an Android version of your app and you want to send an invitation that can be opened on Android in addition to iOS.
|`iosClientID`|yes|You can find your iOS app's client ID in the GoogleService-Info.plist file you downloaded from the Firebase console.


### invites.getInvitation
When the user opens your app from an invite or a dynamic link, you can retrieve the details via the `getInvitation` function after you initialize Firebase:

```js
firebase.invites.getInvitation().then(
    function (result) { // GetInvitationResult
      console.log("deepLink: " + result.deepLink + ", invitationId: " + result.invitationId+ ", matchType: "+ result.matchType);
    },
    function (error) {
      console.log("getInvitation error: " + error);
    }
);
```

### addOnDynamicLinkReceivedCallback / init.onDynamicLinkCallback
When your app is launched from a dynamic link, you may want to capture that link and perform some action.

You can either add an `onDynamicLinkCallback` callback to `init`, or use `addOnDynamicLinkReceivedCallback`:

```js
  firebase.init({
    onDynamicLinkCallback: function (result) {
      console.log("Dynamic Link: " + result.url+ ", matchConfidence: "+ result.matchConfidence); 
    }
  });
```

.. or:

```js
  firebase.addOnDynamicLinkReceivedCallback(
    function (url) {
      // ..
    }
  );
```
