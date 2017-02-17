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
* [Analytics](docs/ANALYTICS.md)
* [AdMob](docs/ADMOB.md)

## Prerequisites
Head on over to [https://console.firebase.google.com/](https://console.firebase.google.com/) and sign up for a free account.
Your first 'Firebase' will be automatically created and made available via an URL like `https://n-plugin-test.firebaseio.com`.

Open your Firebase project at the Google console and click 'Add app' to add an iOS and / or Android app. Follow the steps (make sure the bundle id is the same as your `nativescript.id` in `package.json` and you'll be able to download:

* iOS: `GoogleService-Info.plist` which you'll add to your NativeScript project at `app/App_Resources/iOS/GoogleService-Info.plist`

* Android: `google-services.json` which you'll add to your NativeScript project at `app/App_Resources/Android/google-services.json`

## Installation
If you rather watch a video explaining the steps then check out this step-by-step guide - you'll also learn how to
add iOS and Android support to the Firebase console and how to integrate anonymous authentication:
[![YouTube demo](docs/images/yt-thumb-setup.png)](https://youtu.be/IextEpoIzwE "YouTube demo")


From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-plugin-firebase
```

Now start an install script which will guide you through installing additional components. Check the doc links above to see what's what. You can always change your choices later.

```
cd node_modules/nativescript-plugin-firebase
```

If you run NativeScript 2.5.0 (only that exact version) then run (with other versions this runs automatically through a postinstall script):

__NativeScript 2.5.0 is no longer the latest release, so you might as well update before adding this plugin to avoid this issue.__

```
npm run setup
```

### Config
If you choose to save your config during the installation, the supported options may be saved in the `firebase.nativescript.json` at the root of your app.
This is to ensure your app may roundtrip source control and installation on CI won't run the questionary during install.

You can reconfigure the plugin by going to the `node_modules/nativescript-plugin-firebase` and running `npm run config`.

You can also change the configuration by deleting the `firebase.nativescript.json` and reinstalling the plugin.

### Android
Install the latest packages 'Google Play Services' and 'Google Repository' in your [Android SDK Manager](http://stackoverflow.com/a/37310513)

#### Google Play Services Version
The plugin will default to version 10.0+ of the Android `play-services-base` SDK.
If you need to change the version (to for instance the latest version), you can add a project ext property `googlePlayServicesVersion` like so:

```
//   /app/App_Resources/Android/app.gradle

project.ext {
    googlePlayServicesVersion = "+"
}
```

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

#### Authentication failed: invalid_token
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

#### Pod dependency error
If you see an error like `Unable to satisfy the following requirements: Firebase (~> 3.13.0) required by Podfile`,
then run `pod repo update` on the command line to make sure you have the latest Podspec.

This could happen when updating the plugin to a new version. You'll want to `tns platform remove ios && tns platform add ios` as well to clean out the old pod version.

## Known issues on Android

#### Genymotion
You can use the awesome [Genymotion emulator](https://www.genymotion.com/)
but you'll need to [install Google Play Services on it](https://inthecheesefactory.com/blog/how-to-install-google-services-on-genymotion/en) or you'll run into errors during authentication.

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

#### Could not find any version that matches com.google.android.gms:play-services-auth:10.2.+.
That means making sure you have the latest `Google Repository` bits installed.
Just run `android` from a command prompt, expand `Extras` and install any pending updates.

Also, an error like "Could not find com.google.firebase:firebase-core:10.0.0" can be caused by having
more than one version of the Android SDK installed. Make sure ANDROID_HOME is set to the Android SDK directory
that is being updated otherwise it will seem as though your updates have no effect.

#### Found play-services:9.0.0, but version 10.X.Y is needed..
Update your Android bits like the issue above and reinstall the android platform in your project.

#### `include.gradle`: Failed to apply plugin .. For input string: "+"
You probably have another plugin depending on Google Play Services (Google Maps, perhaps).
We need to pin to a specific play services version to play nice with others, so open `app/App_Resources/Android/app.gradle` and add:

```
android {  
  // other stuff here

  project.ext {
    googlePlayServicesVersion = "10.0.+"
  }
}
```

Where `"10.0.+"` is best set to the same value as the version on [this line](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/platforms/android/include.gradle#L23).

## Credits
The starting point for this plugin was [this great Gist](https://gist.github.com/jbristowe/c89a7bcae7fc9a035ee7) by [John Bristowe](https://github.com/jbristowe).
