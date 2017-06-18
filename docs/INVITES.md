<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/invites.png" height="85px" alt="Invites"/>

## Enabling Invites
Since plugin version 3.12.0 you can use Firebase _Invites_ features.

_Invites_ lets you invite other users to your app from right within your own app, via SMS and/or Email.

### Android
* [Make sure you've uploaded your SHA1 fingerprint(s)](https://developers.google.com/android/guides/client-auth) to the Firebase console, then download the latest `google-services.json` file and add it to `app/App_Resources/Android`.

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
When the user opens your app from an invite, you can retrieve the details via the `getInvitation` function:

```js
firebase.invites.getInvitation().then(
    function (result) { // GetInvitationResult
      console.log("deeplink: " + result.deeplink + ", invitationId: " result.invitationId);
    },
    function (error) {
      console.log("getInvitation error: " + error);
    }
);
```