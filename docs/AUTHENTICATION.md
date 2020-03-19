<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/auth.png" height="85px" alt="Authentication"/>

## Enabling Authentication
You can sign in a user, using either

* [anonymously](#anonymous-login),
* by [email and password](#email-password-login),
* by [email link](#email-link-login),
* by [phone verification](#phone-verification),
* using a [custom token](#custom-login),
* using [Facebook](#facebook-login),
* using [Google](#google-sign-in),
* using [Apple](#sign-in-with-apple).

Each of these login mechanisms need to be enabled in your Firebase console at the 'Login & Auth' tab.

## What's returned when logged in?
All login functions below, as well as `getCurrentUser` return a 'User' object with these properties:

|param|optional|description
|---|---|---
|`uid`|no|The Firebase User ID
|`anonymous`|no|Whether or not the user logged in anonymously
|`emailVerified`|no|You can send an email with a verification link which this refers to
|`providers`|no|An array of {id: value} objects, where value can be 'facebook.com', etc
|`email`|yes|Not all providers require an email address
|`displayName`|yes|The name stored at the provider. Note that before plugin version 8.2.0 this was called `name`.
|`photoURL`|yes|A string containing a link to a user image on the web. Note that before plugin version 8.2.0 this was called `profileImageURL`.
|`phoneNumber`|yes|The user's phone number
|`refreshToken`|yes|iOS only
|`additionalUserInfo`|no|See `AdditionalUserInfo` below
|`metadata`|no|See `UserMetadata` below

### `AdditionalUserInfo`

|param|optional|description
|---|---|---
|`profile`|yes|Any profile data the auth provider may supply. Type is `Map<string, any>`.
|`providerId`|no|The provider that was used to login this time. Example: `password` or `google.com`.
|`username`|yes|The username, usually `null`.
|`isNewUser`|no|Whether or not the user was just created.

### `UserMetadata`

|param|optional|description
|---|---|---
|`creationTimestamp`|no|Type is `Date`.
|`lastSignInTimestamp`|no|Type is `Date`.

## Functions
You can either use the Native API, or the Web API. It's just a matter of personal background or preference. Under the hood the implementations are identical.

You can also mix and match the API calls.

The relevant imports would be:

```typescript
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
```

### Listening to auth state changes
As stated [here](https://firebase.google.com/docs/auth/ios/manage-users#get_the_currently_signed-in_user):

> The recommended way to get the current user is by setting a listener on the Auth object
<details>
 <summary>Native API</summary>
To listen to auth state changes you can register a listener during `init`:

```js
  firebase.init({
    onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when they re-visit your app
      console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
      if (data.loggedIn) {
        console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
      }
    }
  });
```

If - for some reason - you want more control over the listener you can use these methods after you ran `init`:

```js
  // configure a listener:
  var listener = {
    onAuthStateChanged: function(data) {
      console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
      if (data.loggedIn) {
        console.log("User info", data.user);
      }
    },
    thisArg: this
  };

  // add the listener:
  firebase.addAuthStateListener(listener);
  
  // stop listening to auth state changes:
  firebase.removeAuthStateListener(listener);
  
  // check if already listening to auth state changes
  firebase.hasAuthStateListener(listener);
 ```
</details>

<details>
 <summary>Web API</summary>

The callback handler in will be called with the currentUser (undefined if not signed in) upon attaching the listener
and when the auth state changes.

```js
  firebaseWebApi.auth().onAuthStateChanged((user?: User) => {
    console.log(">> auth state changed: " + user);
    if (user) {
      this.set("userEmailOrPhone", user.email ? user.email : (user.phoneNumber ? user.phoneNumber : "N/A"));
      alert({
        title: "User signed in",
        message: JSON.stringify(user),
        okButtonText: "Nice!"
      });
    } else {
      alert({
        title: "User signed out",
        okButtonText: "Bye!"
      });
    }
  },
error => console.log("OnAuthChanged Error: " + error));
```
</details>

### Get Current User
Once the user is logged in you can retrieve the currently logged in user:

<details>
 <summary>Native API</summary>

```typescript
  firebase.getCurrentUser()
      .then(user => console.log("User uid: " + user.uid))
      .catch(error => console.log("Trouble in paradise: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  const user = firebaseWebApi.auth().currentUser;
```
</details>

### Fetch sign-in methods for email
Use this if you want to know which auth providers are associated with an emailaddress.

<details>
 <summary>Native API</summary>

```typescript
  const emailAddress = "someone@domain.com";
  firebase.fetchSignInMethodsForEmail(emailAddress).then((methods: Array<string>) => {
    console.log(`Sign-in methods for ${emailAddress}: ${JSON.stringify(methods)}`);
  });
```
</details>

<details>
 <summary>Web API</summary>

```js
  const user = firebaseWebApi.auth().currentUser;
  if (!user || !user.email) {
    console.log("Can't fetch sign-in methods; no user with an emailaddress logged in.");
    return;
  }

  firebaseWebApi.auth().fetchSignInMethodsForEmail(user.email)
      .then(result => console.log(`Sign-in methods for ${user.email}: ${JSON.stringify(result)}`))
      .catch(error => console.log("Fetch Sign-in methods for Email error: " + error));
```
</details>

### Updating a profile
Pass in at least one of `displayName` and `photoURL`.
The logged in user will be updated, but for `getCurrentUser` to reflect the change you'll need to do a logout-login.

```js
  firebase.updateProfile({
    displayName: 'Eddy Verbruggen',
    photoURL: 'http://provider.com/profiles/eddyverbruggen.png'
  }).then(
      function () {
        // called when update profile was successful
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

### Reloading a user
The currently logged in user will be reloaded (the one returned by `getCurrentUser`).

```js
  firebase.reloadUser().then(
      function () {
        // now call 'getCurrentUser' to get the reloaded user data
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

### Deleting a user
The currently logged in user will be deleted (the one returned by `getCurrentUser`).

```js
  firebase.deleteUser().then(
      function () {
        // called when the user was successfully deleted
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

### Anonymous login
Don't forget to enable anonymous login in your firebase instance.

<details>
 <summary>Native API</summary>

```typescript
  firebase.login(
      {
        type: firebase.LoginType.ANONYMOUS
      })
      .then(user => console.log("User uid: " + user.uid))
      .catch(error => console.log("Trouble in paradise: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().signInAnonymously()
      .then(() => console.log("User logged in"))
      .catch(err => console.log("Login error: " + JSON.stringify(err)));
```
</details>

### Email-Password login
Don't forget to enable email-password login in your firebase instance.

<details>
 <summary>Native API</summary>

```typescript
  firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: 'useraccount@provider.com',
          password: 'theirpassword'
        }
      })
      .then(result => JSON.stringify(result))
      .catch(error => console.log(error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().signInWithEmailAndPassword('eddy@x-services.nl', 'firebase')
      .then(() => console.log("User logged in"))
      .catch(err => console.log("Login error: " + JSON.stringify(err)));
```
</details>


### Email-Link login
Enable email-password login in your firebase instance, and flip the "E-mail link" switch.

This login type allows your users to login without providing a password. They can simply click a link
and get redirected to the app. The app may even run on a different device.

Enable dynamic links, as described in the [Dynamic Links readme](./DYNAMIC_LINKS.md), because the user
that receives the link will need to be redirected to your app.

#### iOS configuration
- Specify the bundle id of your app in the Firebase console.

#### Android configuration
- Specify the package name of your app in the Firebase console.
- Upload the SHA-1 and SHA-256 of the (debug) signing certificates to the Firebase console, as described in the [Dynamic Links readme](./DYNAMIC_LINKS.md).
- Also add an `android:host` for the `emailLinkOptions.url` to your `app/App_Resources/Android/AndroidManifest.xml` file as described in that readme.

<details>
 <summary>Native API</summary>

```typescript
  firebase.login(
      {
        type: firebase.LoginType.EMAIL_LINK,
        emailLinkOptions: {
          email: "eddy@x-services.nl",
          url: "https://domain.com?foo=bar",
          // the stuff below is optional, if not set the plugin will infer this for you (bundle/package is taken from currently used platform)
          iOS: {
            bundleId: "my.bundle.id"
          },
          android: {
            packageName: "my.package.name"
          }
        }
      })
      .then(result => JSON.stringify(result))
      .catch(error => console.log(error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().sendSignInLinkToEmail(
      "eddy@x-services.nl",
       {
         url: "https://domain.com?foo=bar",
         // the stuff below is optional, if not set the plugin will infer this for you (bundle/package is taken from currently used platform)
         iOS: {
           bundleId: "my.bundle.id"
         },
         android: {
           packageName: "my.package.name"
         }
       })
      .then(() => console.log("Email link sent"))
      .catch(err => console.log("Login error: " + JSON.stringify(err)));
```
</details>


#### Creating a Password account
This may not work on an (Android) simulator. See #463.

<details>
 <summary>Native API</summary>

```js
  firebase.createUser({
    email: 'eddyverbruggen@gmail.com',
    password: 'firebase'
  }).then(
      function (user) {
        dialogs.alert({
          title: "User created",
          message: "email: " + user.email,
          okButtonText: "Nice!"
        })
      },
      function (errorMessage) {
        dialogs.alert({
          title: "No user created",
          message: errorMessage,
          okButtonText: "OK, got it"
        })
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().createUserWithEmailAndPassword('eddyverbruggen@gmail.com', 'firebase')
      .then((user: User) => {
        console.log("User created: " + JSON.stringify(user));
      })
      .catch(error => console.log("Error creating user: " + error));
```
</details>


#### Resetting a password
> ⚠️ The method name and signature has changed in 8.0.0 from `resetPassword` to `sendPasswordResetEmail` to better align with the Web API.

<details>
 <summary>Native API</summary>

```typescript
  firebase.sendPasswordResetEmail("user@example.com")
      .then(() => console.log("Password reset email sent"))
      .catch(error => console.log("Error sending password reset email: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().sendPasswordResetEmail("user@example.com")
      .then(() => console.log("Password reset email sent"))
      .catch(error => console.log("Error sending password reset email: " + error));
```
</details>

#### Updating an email address
Note that changing an email address may fail if your login for this `email` was too long ago (per Firebase's standards, whatever they are).

<details>
 <summary>Native API</summary>

```typescript
  firebase.updateEmail("user@example.com")
      .then(() => console.log("Email updated"))
      .catch(error => console.log("Error updating email: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().updateEmail("user@example.com")
      .then(() => console.log("Email updated"))
      .catch(error => console.log("Error updating email: " + error));
```
</details>

#### Updating a password
> ⚠️ The method name and signature has changed in 8.0.0 from `changePassword` to `updatePassword` to better align with the Web API.

Note that changing a password may fail if your login for this `email` was too long ago (per Firebase's standards, whatever they are).

<details>
 <summary>Native API</summary>

```typescript
  firebase.updatePassword("myNewPassword")
      .then(() => console.log("Password updated"))
      .catch(error => console.log("Error updating password: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().updatePassword("myNewPassword")
      .then(() => console.log("Password updated"))
      .catch(error => console.log("Error updating password: " + error));
```
</details>

### Phone Verification
* Don't forget to enable Phone login in your firebase instance.
* You can only test this on a real device (not on an emulator/simulator).
* Use the phone number of the device you're testing on.
* _ANDROID:_ [Make sure you've uploaded your SHA1 fingerprints](https://developers.google.com/android/guides/client-auth) to the Firebase console, then download the latest `google-services.json` file and add it to `app/App_Resources/Android`.
* _iOS:_ Make sure you have messaging enabled as well, as this uses push notifications on iOS.

```js
  firebase.login({
    type: firebase.LoginType.PHONE,
    phoneOptions: {
      phoneNumber: '+12345678900',
      verificationPrompt: "The received verification code", // default "Verification code"
      // Optional
      android: {
          timeout: 30 // The maximum amount of time you are willing to wait for SMS auto-retrieval to be completed by the library
      }
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```


### Custom login
Use this login type to authenticate against firebase using a token generated by your own backend server. See these [instructions on how to generate the authentication token](https://firebase.google.com/docs/auth/server).

<details>
 <summary>Native API</summary>

```js
  var token = "myBackendToken";

  firebase.login({
    type: firebase.LoginType.CUSTOM,
    customOptions: {
      token: token
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().signInWithCustomToken(token)
      .then(result => console.log(JSON.stringify(result)))
      .catch(error => console.log(JSON.stringify(error)));
```
</details>

### Facebook login

First, enable Facebook login in your Firebase instance and add the App-ID and App-Secret.

Then add the following lines to your code and check for setup instructions for your platform below.

```js
  firebase.login({
    type: firebase.LoginType.FACEBOOK,
    // Optional
    facebookOptions: {
      // defaults to ['public_profile', 'email']
      scopes: ['public_profile', 'email'] // note: this property was renamed from "scope" in 8.4.0
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

For a complete list of the available scope permissions, visit Facebook's documentation: https://developers.facebook.com/docs/facebook-login/permissions. 

#### Post-login Graph API querying
Upon successful authentication, Facebook creates an access token that can be obtained from the login method's result object. This access token can then be used for querying the Facebook Graph API, by feeding it to either Facebook's Javascript SDK or their iOS/Android native SDKs:

```js
"providers": [
         {
             "id": "facebook.com",
             "token": "<FB token>"
         }
     ]
```

#### iOS
1. If you didn't choose `Firebase Authentication` and `Firebase Facebook Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
2. Add a bit of config to `app\App_Resources\iOS\Info.plist` as instructed in Step 4 of the iOS Quickstart in the Facebook Developer console of your app. Facebook login works perfectly on the demo app, so if you can't get it working, make sure to check out the [demo app's config](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo/blob/ad85e187dbbb12ef0e705d1bfaed90c702846bc4/Firebase/app/App_Resources/iOS/Info.plist).

#### Android
1. If you didn't choose `Firebase Authentication` and `Firebase Facebook Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
2. Add `<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>` to the `manifest/application tag` in `app\App_Resources\Android\AndroidManifest.xml`, so it becomes similar to this:

   ```xml
   	<application
   		android:name="com.tns.NativeScriptApplication"
   		..>
   		
   		<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
   
   		<activity
   			android:name="com.tns.NativeScriptActivity"
   			..>
   ```
   
3. Create a file `facebooklogin.xml`. Depending on your project structure this either goes into `App_Resources/Android/values/` or `App_Resources/Android/src/main/res/values/`. Add this to the file (replace the id):

   ```xml
   <?xml version='1.0' encoding='utf-8'?>
   <resources>
        <string name="facebook_app_id">126035687816994</string>
   </resources>
   ```
4. In your Facebook dev console, go to the Basic settings and add the Android platform if you haven't already. Then set the 'Google Play Packagename' to your applicationId (see your `package.json`) and set 'Classname' to `com.tns.NativeScriptActivity`.
5. Set the Key-Hash as well. If you don't know it you can try Facebook login in your app and observe the `adb logcat` output for something like `Key hash <......> does not match any stored key hashes.` 

### Google Sign-In

First, enable Google Sign-In in your firebase instance and add the _Web SDK configuration_.

Make sure you've uploaded your [SHA1 fingerprints](https://developers.google.com/android/guides/client-auth) to the Firebase console, then download the latest `google-services.json` file and add it to `app/App_Resources/Android`.

> **Uploading your SHA1 fingerprint is required for _debug_ and _release_ builds.**

> If you have enabled Google Play's _App Signing_ feature you will need to add the SHA1 for Google's signing certificate to your Firebase project's fingerprints. If you fail to do this, your release builds will fail because they were not signed by Google. See image below:
>
> <img src="./images/app-signing.png" max-height="300px" alt="Google App Signing"/>

Then add the following lines to your code and check for setup instructions for your platform below.

```js
  firebase.login({
    type: firebase.LoginType.GOOGLE,
    // Optional 
    googleOptions: {
      hostedDomain: "mygsuitedomain.com",
      // NOTE: no need to add 'profile' nor 'email', because they are always provided
      // NOTE 2: requesting scopes means you may access those properties, but they are not automatically fetched by the plugin
      scopes: ['https://www.googleapis.com/auth/user.birthday.read']
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

#### Google Access Token
Upon successful authentication, Google creates an access token that can be obtained from the login method's result object. This access token can then be used for Google API:

```js
"providers": [
         {
             "id": "google.com",
             "token": "<Google Access Token>"
         }
     ]
```

#### iOS
If you didn't choose `Firebase Authentication` and `Firebase Google Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
 
Make sure the URL Scheme for `REVERSED_CLIENT_ID` is in `app/App_Resources/iOS/Info.plist`.  The value of `REVERSED_CLIENT_ID` can be found in your `App_Resources/iOS/GoogleService-Info.plist` :
 
```xml
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>REVERSED_CLIENT_ID</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>com.googleusercontent.apps.1052836194035-l81fsjai1u40ocnqjcpnoebnnsltt03b</string>
			</array>
		</dict>
	</array>
```

*NOTE:* iOS 10 and below issue for Google Auth when opening from a modal.

If you are planning to open Google Auth from a modal view you may encounter this error resulting in nothing happening (no google auth dialog) on iOS 10 and below:

```
Warning: Attempt to present <SFSafariViewController: 0x7fa575968470> on <UILayoutViewController: 0x7fa575e3d710> whose view is not in the window hierarchy!
```

To solve, you will want to pass in the appropriate iOS controller of the active view. This can be accomplished as follows:

```js
  firebase.login({
    type: firebase.LoginType.GOOGLE,
    ios: {
      controller: topmost().ios.controller
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

#### Android
1. If you didn't choose `Firebase Authentication` and `Firebase Google Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
2. Google Sign-In requires an SHA1 fingerprint: see [Authenticating Your Client for details](https://developers.google.com/android/guides/client-auth). If you don't do this you will see the account selection popup, but you won't be able to actually sign in.
3. Those fingerprints need to be added to your Firebase console. Go to 'project overview', 'project settings', then scroll down a bit.

### Sign in with Apple
First, enable Apple login in your Firebase instance.

Then add the following lines to your code and check for further setup instructions for your platform below.

```js
  firebase.login({
    type: firebase.LoginType.APPLE,
    // Optional
    appleOptions: {
      locale: "nl", // for Android
      scopes: ["email"] // default ["email", "name"]
    }
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

#### iOS
1. If you didn't choose `Firebase Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
2. Follow [these instructions](https://firebase.google.com/docs/auth/ios/apple), including enabling Sign In for your App ID. You may need to recreate your provisioning profile as well.
3. Add this to `app\App_Resources\iOS\*.entitlements`:

```xml
  <key>com.apple.developer.applesignin</key>
  <array>
    <string>Default</string>
  </array>
```

[Here's a complete example.](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/demo/app_resources/iOS/app.entitlements)

#### Android
1. If you didn't choose `Firebase Authentication` during installation you can remove the `platforms` and `node_modules` folders and the `firebase.nativescript.json` file, then run `npm i`. This will prompt your which Firebase features you'd like to enable.
2. In your Firebase console add the "Services ID". Make sure to follow all steps, including completing the "OAuth code flow configuration".
3. Follow [these instructions](https://firebase.google.com/docs/auth/android/apple), including adding your `SHA-1` hash, website association, website ownership confirmation, creating an Apple private key. Just do everything except for adding Java code, because the plugin takes care of that.  

### getAuthToken / getIdToken
If you want to authenticate your user from your backend server you can obtain a Firebase auth token for the currently logged in user.

You'll get the token, as well as the provider that was used to sign in, and any custom claims you may have previously set via the Firebase Admin SDK as outlined [here](https://firebase.google.com/docs/auth/admin/custom-claims):


<details>
 <summary>Native API</summary>

```js
  firebase.getAuthToken({
    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
    forceRefresh: false
  }).then(
      function (result) {
        // for both platforms
        console.log("Auth token retrieved: " + result.token);
        console.log("Sign-In provider: " + result.signInProvider);
        console.log("Specific custom claim retrieved: " + result.claims.yourClaimKey); // or result.claims["yourClaimKey"]
      },
      function (errorMessage) {
        console.log("Auth result retrieval error: " + errorMessage);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.auth().currentUser.getIdToken(false)
      .then((token: string) => console.log("Auth token retrieved: " + token))
      .catch(errorMessage => console.log("Auth token retrieval error: " + errorMessage));
```
</details>

### logout
Shouldn't be more complicated than:

<details>
 <summary>Native API</summary>

```js
  firebase.logout();
```
</details>

<details>
 <summary>Web API</summary>

```js
  firebaseWebApi.auth().signOut()
      .then(() => console.log("Logout OK"))
      .catch(error => console.log("Logout error: " + JSON.stringify(error)));
```
</details>

### unlinking provider
For a given user, and a given provider ("google.com","password",...)

<details>
 <summary>Native API</summary>

```js
  user.unlink(providerId /* string */)
      .then(user => console.log("Unlink OK, user: " + JSON.stringify(user)))
      .catch(error => console.log("Unlink error: " + JSON.stringify(error)));
```
</details>

<details>
 <summary>Web API</summary>

```js
  firebaseWebApi.auth().unlink(providerId /* string */)
      .then(user => console.log("Unlink OK, user: " + JSON.stringify(user)))
      .catch(error => console.log("Unlink error: " + JSON.stringify(error)));
```
</details>

### reauthenticate
Some security-sensitive actions (deleting an account, changing a password) require that the user has recently signed in.
If you perform one of these actions, and the user signed in too long ago, the action fails.
When this happens (or to prevent it from happening), re-authenticate the user.

> Since plugin version 9.0.0 the Promise will resolve the user in the result. Older version don't return anything.

```js
  firebase.reauthenticate({
    type: firebase.LoginType.PASSWORD, // or GOOGLE / FACEBOOK
    // this is only required in type == PASSWORD
    passwordOptions: {
      email: 'user@domain.com',
      password: 'thePassword'
    }
  }).then(
      function (result) {
        // you can now safely delete the account / change the password, etc
        dialogs.alert({
          title: "Re-authenticated user",
          message: JSON.stringify(result),
          okButtonText: "OK"
        });
      },
      function (error) {
        dialogs.alert({
          title: "Re-authenticate error",
          message: error,
          okButtonText: "OK"
        });
      }
  );
```

### sendEmailVerification
Sending an "email confirmation" email can be done after the user logged in:

```js
firebase.sendEmailVerification().then(
  function () {
    console.log("Email verification sent");
  },
  function (error) {
    console.log("Error sending email verification: " + error);
  }
);
```

You can also pass state to this function - for details on the properties, see [the Firebase docs](https://firebase.google.com/docs/auth/web/passing-state-in-email-actions).

```js
firebase.sendEmailVerification({
   url: "https://www.google.com",
   handleCodeInApp: true,
   iOS: {
     bundleId: "com.bla.hoopla",
     dynamicLinkDomain: "xyz"
   },
   android: {
     minimumVersion: "13",
     installApp: true,
     packageName: "x.y.z"
   }
 }).then(
  function () {
    console.log("Email verification sent");
  },
  function (error) {
    console.log("Error sending email verification: " + error);
  }
);
```

Note that you can also use this with the Web API:

```js
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const user = firebaseWebApi.auth().currentUser;

user.sendEmailVerification() // see the implementation above 
```
