# NativeScript Firebase plugin

<img src="docs/images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/><br/>
Google's realtime app platform (Database, Authentication, Configuration, Notifications) [firebase.google.com](https://firebase.google.com/)

## Features
For readability the supported features have been moved to their own README's:

* Setup and troubleshooting (continue reading below)
* [Realtime Database](docs/DATABASE.md)
* [Authentication](docs/AUTHENTICATION.md)
* [Remote Config](docs/REMOTECONFIG.md)
* [Cloud Messaging](docs/MESSAGING.md)
* [Storage](docs/STORAGE.md)
* [Crash Reporting](docs/CRASHREPORTING.md)

## Prerequisites
Head on over to [https://console.firebase.google.com/](https://console.firebase.google.com/) and sign up for a free account.
Your first 'Firebase' will be automatically created and made available via an URL like `https://n-plugin-test.firebaseio.com`.

Open your Firebase project at the Google console and click 'Add app' to add an iOS and / or Android app. Follow the steps (make sure the bundle id is the same as your `nativescript.id` in `package.json` and you'll be able to download:

* iOS: `GoogleService-Info.plist` which you'll add to your NativeScript project at `app/App_Resources/iOS/GoogleService-Info.plist`

* Android: `google-services.json` which you'll add to your NativeScript project at `platforms/android/google-services.json`

## Installation
If you rather watch a video explaining the steps then check out this step-by-step guide - you'll also learn how to
add iOS and Android support to the Firebase console and how to integrate anonymous authentication:
[![YouTube demo](docs/images/yt-thumb-setup.png)](https://youtu.be/IextEpoIzwE "YouTube demo")


From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-plugin-firebase
```

And do yourself a favor by adding TypeScript support to your nativeScript app:

```
tns install typescript
```

Then open `references.d.ts` in the root of your project and add this line to get autocompletion and type-checking for this plugin:

```
/// <reference path="./node_modules/nativescript-plugin-firebase/firebase.d.ts" />
```

### Android
Install packages 'Google Play Services' and 'Google Repository' in your [Android SDK Manager](http://stackoverflow.com/a/37310513)

#### Open `app/App_Resources/Android/app.gradle`
- If there's no `applicationId` yet please add it to the `defaultConfig` node so it becomes:

```
android {
    ...
    defaultConfig {
        applicationId = "your.package.name"  
        ...
    }
}
```

#### Open `platforms/android/build.gradle`
- Near the top there's a dependencies section, add `classpath "com.google.gms:google-services:3.0.0"` so it becomes something like:
```
  dependencies {
    classpath "com.android.tools.build:gradle:1.5.0"
    classpath "com.google.gms:google-services:3.0.0"
  }
```
- Add the very bottom of the same file add `apply plugin: "com.google.gms.google-services"`

## Usage

If you want a quickstart, [clone our demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo).

### Start-up wiring
We need to do some wiring when your app starts, so open `app.js` and add this before `application.start();`:

##### JavaScript
```js
var firebase = require("nativescript-plugin-firebase");

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
```

#### TypeScript
```js
import firebase = require("nativescript-plugin-firebase");

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);
```

## Known issues on iOS
On the simulator you may see this message if you have more than one app with the Firebase SDK ever installed:

```
[FirebaseDatabase] Authentication failed: invalid_token (Invalid claim 'aud' in auth token.)
or
[FirebaseDatabase] Authentication failed: invalid_token (audience was project 'firegroceries-904d0' but should have been project 'your-firebase-project')
```

This is [a known issue in the Firebase SDK](http://stackoverflow.com/questions/37857131/swift-firebase-database-invalid-token-error).
I always use a real device to avoid this problem, but you can pass an 'iOSEmulatorFlush' option to init.
```
firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs and 'iOSEmulatorFlush' to flush token before init.
  iOSEmulatorFlush: true
}).then()
```

## Known issues on Android

#### DexIndexOverflowException
```
com.android.dex.DexIndexOverflowException: method ID not in..
```

Congrats, you ran into [this issue](https://github.com/NativeScript/android-runtime/issues/344)
which can be solved by adding `multiDexEnabled true` to your `app/App_Resources/Android/app.gradle`
so it becomes something like this:

```
android {  
  defaultConfig {  
    applicationId = "__PACKAGE__"  
    multiDexEnabled true
    generatedDensities = []
  }  
  aaptOptions {  
    additionalParameters "--no-version-vectors"  
  }  
}
```

#### java.lang.OutOfMemoryError: GC overhead limit exceeded

Increase the Java Max Heap Size like this (the bit at the end):

```
android {  
  defaultConfig {  
    applicationId = "__PACKAGE__"  
    multiDexEnabled true
    generatedDensities = []
  }
  aaptOptions {  
    additionalParameters "--no-version-vectors"  
  }
  dexOptions {
    javaMaxHeapSize "4g"
  }
}
```

#### FirebaseApp with name [DEFAULT] doesn't exist
Another possible error is "FirebaseApp with name [DEFAULT] doesn't exist." which will be solved by
placing `google-services.json` to `platforms/android/google-services.json` (see above), and making
the changes to `build.gradle` which are mentioned above as well.

#### Could not find com.google...
And there's this one: "Could not find com.google.firebase:firebase-auth:9.0.2". That means
making sure you have the latest Google Repository bits installed.
Just run `android` from a command prompt and install any pending updates.

#### Found play-services:9.0.0, but version 9.0.2 is needed..
Update your Android bits like the issue above and reinstall the android platform in your project.

## Future work
- Add support for `removeEventListener`
- Possibly add more login mechanisms
- Add other Firebase 3.x SDK features (there's already a few feature requests in the GitHub issue tracker

## Credits
The starting point for this plugin was [this great Gist](https://gist.github.com/jbristowe/c89a7bcae7fc9a035ee7) by [John Bristowe](https://github.com/jbristowe).
