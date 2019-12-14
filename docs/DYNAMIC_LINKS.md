<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/dynamiclinks.png" height="86px" alt="Dynamic Links"/>

> Note that the _Invites_ feature has been removed in plugin version 9.0.0, and will be removed from Firebase itself on January 24, 2020.

## Enabling Dynamic Links

You will be prompted during installation of the plugin to enable Dynamic Links (off by default).
This will add `"dynamic_links": true` to your `firebase.nativescript.json` file, now remove the `platforms` folder so this change is picked up.

### Android
* If you want to use App Links, [make sure you've uploaded your SHA256 fingerprints](https://developers.google.com/android/guides/client-auth) to the Firebase console.

### iOS
* You must have the App Store ID and App ID set in your developer console [project settings](https://console.firebase.google.com/project/_/settings/general/).

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

When users open a Dynamic Link with a deep link to the scheme and host you specify, your app will start the activity with this intent filter to handle the link. See [the offical docs](https://firebase.google.com/docs/dynamic-links/android/receive#add-an-intent-filter-for-deep-links) for details.

### iOS

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

If you are using a custom domain, add in your App_Resources/iOS/Info.plist the following lines
```xml
<key>FirebaseDynamicLinksCustomDomains</key>
<array>
  <string>https://example.com/link</string>
  <string>https://example.com/promos</string>
</array>
```

See https://firebase.google.com/docs/dynamic-links/custom-domains#set_up_a_custom_domain_in_the for more info

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
