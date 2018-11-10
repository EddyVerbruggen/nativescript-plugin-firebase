<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/crashlytics.png" height="85px" alt="Crashlytics"/>

> ⚠️ The NativeScript **5** Android runtime is currently **NOT** compatible with Crashlytics. See [#1023](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/1023).

> Firebase Crash reporting is deprecated - use Crashlytics if you can!


## Enabling Crash Reporting / Crashlytics
Since version 5.3.0 you can choose either Crashlytics (recommended) or the older Firebase Crash Reporting (which doesn't really work on iOS).
You will be prompted during installation of the plugin to enable either Crashlytics or Crash Reporting (both are off by default).

Note that if you want to use Crashlytics, make sure your `firebase.nativescript.json` file has `"crashlytics": true` and `"crash_reporting": false`,
then remove the `platforms` folder so these changes are picked up.

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
import { crashlytics } from "nativescript-plugin-firebase"; // and do: crashlytics.sendCrashLog

crashlytics.setString("test_key", "test_value");
crashlytics.setBool("test_key_bool", true);
crashlytics.setInt("test_key_int", 2);
crashlytics.setDouble("test_key_double", 56615.55548465);
crashlytics.setFloat("test_key", 54646.45);

crashlytics.setUserId("user#42");
```
