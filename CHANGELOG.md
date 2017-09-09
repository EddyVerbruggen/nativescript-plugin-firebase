<img src="docs/images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/>

[Firebase iOS SDK Changelog](https://firebase.google.com/support/release-notes/ios)
[Firebase Android SDK Changelog](https://firebase.google.com/support/release-notes/android)

## 4.1.1 (2017, September 9)

### Fixes
- [#482](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/482) Update to 4.0.1 and got error: Cannot read property 'initialize' of undefined


## 4.1.0 (2017, September 8)

### New
- [#476](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/476) Moved AdMob init to firebase.init, added AdListener to showBanner()
- [#478](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/478) Invites on Android: AppInviteApi has been deprecated
- [#479](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/479) Is anybody using the invites part? I can't get the deeplink or invitation id.

### Fixes
- [#319](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/319) Unable to query by child that equals to null
- [#475](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/475) Broken firebase API broken since 8/26


## 4.0.6 (2017, August 23)

### New
- [#443](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/pull/443) fixed invitation sample code
- [#444](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/pull/444) Updated how options.*.value is checked to allow booleans and numbers
- [#449](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/pull/449) Mark init and getRemoteConfig for profiling

### Fixes
- [#328](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/328) Query range with START_AT not fetching data as expected
- [#438](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/438) Query : range not working when value is number
- [#445](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/pull/445) Skip linking for anonymous users
- [464](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/464) 'phoneNumber' is missing in login result TypeScript definition


## 4.0.5 (2017, July 22)

### Fixes
- [#387](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/387) Fix issues
- [#434](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/434) JS: Error in firebase.init: TypeError: gson(...).toJson is not a function


## 4.0.4 (2017, July 16)

### New
- [#420](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/420) found no keychain client entitlements" after upgrade
- [#430](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/430) Can we set screenName?

### Fixes
- [#418](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/418) Logout breaking on Android when nativescript-fresco plugin is added to app


## 4.0.3 (2017, June 29)
Webpack fix


## 4.0.0, 4.0.1, 4.0.2 (2017, June 20)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/milestone/26?closed=1)

### SDK versions

- iOS: 4.0.x
- Android: 11.0.x

### New
- [#247](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/247) Device_Token not getting to send notifications
- [#255](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/255) How to Regenerate the Firebase Cloud Messaging Token
- [#360](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/360) export fetchProvidersForEmail
- [#376](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/376) Add support for firebase phone authentication
- [#388](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/388) Check for 'init' at 'push', 'setValue', 'update' and 'query'

### Fixes
- [#87](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/87) BUG Database query - range not working when value is number.
- [#186](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/386) Can't read number field where value is greater than 0
- [#227](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/227) facing issue while login with facebook :prefilling my firebase account details in facebook popup
- [#349](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/349) App crashes on iOS emulator
- [#365](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/365) IOS firebase to JSON not converting numbers with NSDecimalNumber subclass 



## 3.12.0 (2017, June 4)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.11.4...3.12.0)

### SDK versions

- iOS: 3.17.0
- Android: 10.2.x

### New

- [#199](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/199) Feature request: Invites
- [#362](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/362) Add Feature Firebase Invites (Android)
- [#383](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/383) Auto-upgrade com.google.gms:google-services:3.0.0 to 3.1.0




## 3.11.4 (2017, April 21)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.11.3...3.11.4)

### SDK versions

- iOS: 3.13.x
- Android: 10.2.x

### Fixes
- [#343](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/352) Fix hanging CI builds #352




## 3.11.3 (2017, April 2)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.11.2...3.11.3)

### SDK versions

- iOS: 3.13.x
- Android: 10.2.x

### Fixes
- [#343](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/343) Update dependency of xcode > node-uuid




## 3.11.2 (2017, March 27)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.11.1...3.11.2)

### SDK versions

- iOS: 3.13.x
- Android: 10.2.x

### Fixes
- [#333](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/333) New error after fresh install; Stop at ProcessProductPackaging




## 3.11.1 (2017, March 23)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.11.0...3.11.1)

### SDK versions

- iOS: 3.13.x
- Android: 10.2.x

### New
- [#226](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/226) Cannot find how to link anonymous account to other login type
- [#316](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/316) Implemented email account linking
- [#324](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/324) Use Gson to convert javaObject to jsObject

### Fixes
- [#331](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/331) CI builds may file if no entitlements file exists




## 3.11.0 (2017, March 22)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.10.2...3.11.0)

### SDK versions

- iOS: 3.13.x
- Android: 10.2.x

### Fixes
- [#304](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/304) IOS cloud notification on click not triggering addOnMessageReceivedCallback
- [#274](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/274) Cleanup AppDelegate call #274




## 3.10.2 (2017, March 12)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.10.1...3.10.2)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.13.x
- Android: 10.2.x

### New
- [#307](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/307) Feature Request: Support crash log API

### Fixes
- [#272](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/272) Unusual error message when retrieving data set and binding to layout
- [#292](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/292) Nativescript app is not running with Firebase in IOS. 




## 3.10.1 (2017, February 22)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.10.0...3.10.1)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.13.x
- Android: 10.2.x

### Fixes
- [#290](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/290) Don't load AdMob symbols if AdMob was not enabled in the config 
- [#293](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/293) Fix postinstall when nativescript is not in the PATH
- [#294](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/294) iOS crashes when AdMob is not enabled




## 3.10.0 (2017, February 17)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.9.3...3.10.0)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- __iOS: 3.13.x__
- __Android: 10.2.x__

### New
- postinstall script enabled again, unless you're using NativeScript 2.5.0
- [#19](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/19) Conflict with nativescript-admob  …
- [#55](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/55) Support for AdMob
- [#85](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/85) Google Service conflits on using nativescript-admob with this plugin
- [#284](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/284) nativescript-plugin-firebase and nativescript admob conflict
- [#286](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/286) send push notifications from app + small callback fix for push

### Fixes
- [#146](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/146) Sending Data Messages without notification key.
- [#281](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/281) Fix app crash when notification structure is missing
- [#285](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/285) Plugins not uncommented in include.gradle




## 3.9.3 (2017, February 8)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.9.2...3.9.3)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.11.x
- Android: 10.0.x

### Fixes
- [#275](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/275) tns plugin add nativescript-plugin-firebase seems to hang forever




## 3.9.2 (2017, January 20)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.9.1...3.9.2)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.11.x
- Android: 10.0.x

### Fixes
- [#237](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/237) Notification message not shown when app is in the background  
- [#243](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/243) iOS: Push Notifications not working in Background or when application is reopened 
- [#258](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/258) iOS Notification not received in background mode 
- [#264](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/264) iOS: Push Notifications not working in Background in Production 




## 3.9.1 (2017, January 18)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.9.0...3.9.1)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.11.x
- Android: 10.0.x

### New
- [#262](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/262) Adding ability to (un/)subscribe to topics at firebase 




## 3.9.0 (2017, January 3)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.8.5...3.9.0)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: __3.11.x__
- Android: __10.0.x__

### New
- [#245](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/245) Re-Authenticate a user 
- [#249](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/249) Added updateProfile method 
- [#240](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/240) Crash reporting slows startup time

### Fixes
- [#229](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/229) Update null doesn't remove key on Android
- [#236](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/236) iOS Image Upload Type in Firebase
- [#239](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/239) fAuth.signInWithCustomToken is not a function
- [#250](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/250) Gradle build error when nativescript-google-maps-sdk is added




## 3.8.5 (2016, December 23)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.8.4...3.8.5)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.9.x
- Android: 9.8.x

### Fixes
- [#217](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/217) Property 'ServerValue' does not exist on type 'typeof'
- [#233](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/233) Update package.json to allow webpack bundling




## 3.8.4 (2016, November 23)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.8.3...3.8.4)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.9.x
- Android: 9.8.x

### Fixes
- [#222](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/222) Let iOS handle push notifications after the app was killed in the springboard
- [#225](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/225) Still problems with push messages




## 3.8.3 (2016, November 21)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.8.2...3.8.3)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: 3.9.x
- Android: 9.8.x

### New
- [#196](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/196) firebase user provider data? 

### Fixes
- [#205](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/205) Crash after push notification confirmation
- [#218](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/218) Error: "null is not an object (evaluating 'app.registerForRemoteNotifications')" #218




## 3.8.2 (2016, November 20)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.7.2...3.8.2)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.
Also, for Android update your Google Repository in the Android SDK manager (type `android` on the command prompt),
and for iOS do a `pod repo update` to fetch the latest versions from Cocoapods.

- iOS: __3.9.x__
- Android: __9.8.x__

### New
- [#102](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/102) Add google-services to the include.gradle file 
- [#110](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/110) Version control firebase add-on services configuration? 
- [#198](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/198) Some automations for Android 
- [#213](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/213) Bundle postinstall script dependencies 
- [#214](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/214) Send Email Verification enhancement 
- [#215](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/215) Upgrade to latest Firebase SDK's 
- [#216](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/216) Automate enabling iOS 10 keychain sharing 

### Fixes
- [#53](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/53) Error in tns build android: 'spawn gradle.bat ENOENT'
- [#211](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/211) `prompt` dependency breaking tns builds and a possible solution




## 3.7.2 (2016, November 8)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.7.1...3.7.2)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.7.x
- Android: 9.6.x

### New
- [#165](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/165) Feature/Question: Is it possible to have more control over push notifications prompt 

### Fixes
- [#175](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/175) There's a few function params missing in the TS definition file
- [#176](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/176) Remote Config TS definition is incorrect
- [#178](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/178) Running in debug works, running in release on iOS causes crash
- [#179](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/179) Error TS2656: Exported external package typings file 'firebase.d.ts' is not a module.
- [#187](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/187) IOS facebook login crash




## 3.7.1 (2016, October 10)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.6.4...3.7.1)

### SDK versions

If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: __3.7.x__
- Android: __9.6.x__

### New
- [#153](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/153) / [#157](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/157) Get Auth Token

### Fixes
- [#154](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/154) Compatibility with Fresco
- `createUser` now returns the same value on iOS and Android
- TypeScript changes in 3.6.4 rolled back because of a few bugreports.




## 3.6.4 (2016, October 9)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.6.3...3.6.4)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.5.x
- Android: 9.4.0

### New
- [#132](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/132) Get Firebase timestamp
- [#148](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/148) Fix for storing primitive types on Android
- Better TypeScript support (updated `firebase.ts.d`).

### Fixes
- [#141](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/141) Fix return result of `createUser` on Android
- [#156](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/156) Invoking `init` before app start now works for Android as well



## 3.6.3 (2016, September 21)

[Full changelog](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/compare/3.6.2...3.6.3)

### SDK versions
If version numbers __changed__, clean your platform folders to avoid build errors.

- iOS: 3.5.x
- Android: 9.4.0

### Fixes
- [#135](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/135) Xcode 8 compatibility (iOS 10 SDK)



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
