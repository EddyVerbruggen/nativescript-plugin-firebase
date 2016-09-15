<img src="docs/images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/>

## 3.6.2 (2016, September 15)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.6.1...3.6.2)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.5.x
- Android: 9.4.0

### New
- [#126](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/126) When `singleEvent` is `true` return data in the promise
- [#129](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/129) Ability to remove listeners

### Fixes
- [#128](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/128) On Android `logEvent` may cause an exception



## 3.6.1 (2016, September 7)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.5.4...3.6.1)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- __iOS: 3.5.x__
- Android: 9.4.0

### New
- [#119](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/119) Upload Progress
- [#120](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/120) Chaining range types for `.query`
- [#125](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/125) Analytics API



## 3.5.4 (2016, August 29)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.5.3...3.5.4)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.4.x
- Android: 9.4.0

### Fixes
- [#107](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/107) Facebook Login does not return any result in iOS
- [#115](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/115) Facebook Authentication Redirect 



## 3.5.3 (2016, August 20)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.5.1...3.5.3)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- __iOS: 3.4.x__
- Android: 9.4.0

### New
- [#104](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/104) Swap authentiction to a different Google account

### Fixes
- [#105](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/105) Receiving notifications from FCM on iOS may work better now 



## 3.5.1 (2016, August 12)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.5.0...3.5.1)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- Android: 9.4.0

### New
- [#101](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/101) Post Install script, to help making configuration easier!



## 3.5.0 (2016, August 9)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.4.4...3.5.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- __Android: 9.4.0__

### New
- [#92](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/92) Google Sign In, including automatic linking of Facebook-authenticated users in case email addresses match
- [#77](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/77) Allow users to pass scope for Facebook Authentication

### Fixes
- [#94](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/94) Fix getDownloadUrl on Android to return string 
- [#97](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/97) Trying to fix toJsObject for Android (Boolean)
- [#99](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/99) FirebaseApp with name [DEFAULT] doesn't exist (when running `init` before app start)


## 3.4.4 (2016, July 17)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.4.3...3.4.4)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- Android: 9.2.0

### New
- [#75](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/75) [Nathan Walker](https://github.com/NathanWalker) added the ability to remove files from Firebase Storage, thanks Nathan!



## 3.4.3 (2016, July 16)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.4.2...3.4.3)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- Android: 9.2.0

### New
- [#74](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/74) Facebook login for Android.



## 3.4.2 (2016, July 14)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.4.0...3.4.2)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- Android: 9.2.0

### New
- [#61](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/61) Added `keepInSync` for enhanced offline support.
- [#65](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/65) Crash Reporting, which is automatically enabled for you.

### Fixes
- [#68](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/68) Fix an issue where you'd log in on Android before `application.start()`.
- [#70](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/70) Added a TypeScript definition for `getCurrentUser()`.
- [#71](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/71) Added a TypeScript definition for LoginResult.email.



## 3.4.0 (2016, July 7)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.3.0...3.4.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.3.x
- __Android: 9.2.0__

### New
- [#43](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/43) Storage ([docs](docs/STORAGE.md))
- [#66](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/66) Added `iOSSimulatorFlush` for a known iOS emulator issue with `invalid_token`

### Fixes
- [#69](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/69) Fix `onAuthStateChanged` feature on `init`


## 3.3.0 (2016, June 26)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.2.0...3.3.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: __3.2.x__
- Android: 9.0.2

### New
- [#54](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/54) FCM Messaging / Push Notifications ([docs](docs/MESSAGING.md))


## 3.2.0 (2016, June 19)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.1.0...3.2.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.2.0
- Android: __9.0.2__

### New
- [#56](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/56) Remote Config ([docs](docs/REMOTECONFIG.md))


## 3.1.0 (2016, June 17)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.0.0...3.1.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.2.0
- Android: 9.0.0

### New
- [#49](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/49) Custom Authentication ([docs](docs/AUTHENTICATION.md#custom-login))


## 3.0.0 (2016, May 26)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/2.1.8...3.0.0)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.2.0
- Android: 9.0.0

### New
- [#34](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/34) Support new Firebase 3 release
