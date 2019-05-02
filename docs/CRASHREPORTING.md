<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/crashlytics.png" height="85px" alt="Crashlytics"/>

> Firebase Crash reporting is deprecated - use Crashlytics if you can!

## Enabling Crash Reporting / Crashlytics
Since version 5.3.0 you can choose either Crashlytics (recommended) or the older Firebase Crash Reporting (which doesn't really work on iOS).
You will be prompted during installation of the plugin to enable either Crashlytics or Crash Reporting (both are off by default).

Note that if you want to use Crashlytics, make sure your `firebase.nativescript.json` file has `"crashlytics": true` and `"crash_reporting": false`,
then remove the `platforms` folder so these changes are picked up.

## Enabling Opt-In Crashlytics Collection (GDPR, anyone?)
Since plugin version 8.3.0 you can disable Crashlytics collection by default, and enabled it at runtime.

Add [this](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/7418905a22661dfc3bf40d1a67a5e7254c89d54e/demo/app_resources/Android/src/main/AndroidManifest.xml#L32-L34) to your `AndroidManifest.xml`
and [this](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/7418905a22661dfc3bf40d1a67a5e7254c89d54e/demo/app_resources/iOS/Info.plist#L109-L110) to your `Info.plist`, so it's disabled by default.

You can then either pass `crashlyticsCollectionEnabled: true` in `firebase.init()`,
or call `crashlytics.setCrashlyticsCollectionEnabled(true)` to enabled Crashlytics collection for this user.

## Configuration in the Firebase Console
When setting up Crashlytics, select "This app is new to Crashlytics" and press "Next".
Then the screen changes to something like "waiting for your first crash report".
Then produce a crash, and it can easily take a day before that screen changes (later data comes in much quicker).

## Crashlytics API

### `sendCrashLog`
Send a native iOS or Android exception to Crashlytics.

```typescript
// either import like this:
import { crashlytics } from "nativescript-plugin-firebase"; // and do: crashlytics.sendCrashLog
// or this:
import { crashlytics as firebaseCrashlytics } from "nativescript-plugin-firebase"; // and do: firebaseCrashlytics.sendCrashLog
// or this:
import * as firebase from "nativescript-plugin-firebase"; // and do: firebase.crashlytics.sendCrashLog

import { isAndroid, isIOS } from "tns-core-modules/platform";

if (isAndroid) {
  crashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
} else if (isIOS) {
  crashlytics.sendCrashLog(new NSError({
    domain: 'ShiploopHttpResponseErrorDomain',
    code: 42,
    userInfo: null
  }));
}
```

### `set*`
Set a value that will be logged with an error and showing in the Firebase console on the 'Keys' tab of the error details.

```typescript
import { crashlytics } from "nativescript-plugin-firebase";

crashlytics.setString("test_key", "test_value");
crashlytics.setBool("test_key_bool", true);
crashlytics.setInt("test_key_int", 2);
crashlytics.setDouble("test_key_double", 56615.55548465);
crashlytics.setFloat("test_key", 54646.45);

crashlytics.setUserId("user#42");
```

### `crash`
For easier testing, version 8.2.0 exposed this `crash()` function of the native Firebase Crashlytics SDKs:

```typescript
import { crashlytics } from "nativescript-plugin-firebase";

crashlytics.crash();
```

> This should crash your app unless you have `discardUncaughtJsExceptions` set to `true` in `app/package.json`.