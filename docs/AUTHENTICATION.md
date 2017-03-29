<img src="images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/>

<img src="images/features/auth.png" width="296px" height="124px" alt="Auth"/>

## Enabling Authentication
You can sign in a user either

* [anonymously](#anonymous-login),
* by [email and password](#email-password-login),
* using a [custom token](#custom-login),
* using [Facebook](#facebook-login),
* using [Google](#google-sign-in).

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
|`name`|yes|The name stored at the provider
|`profileImageURL`|yes|A string containing a link to a user image on the web
|`refreshToken`|yes|iOS only


## Functions

### Listening to auth state changes
As stated [here](https://firebase.google.com/docs/auth/ios/manage-users#get_the_currently_signed-in_user):

> The recommended way to get the current user is by setting a listener on the Auth object

To listen to auth state changes you can register a listener during `init`:

```js
  firebase.init({
    onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
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

### Get Current User
Once the user is logged in you can retrieve the currently logged in user.

##### JavaScript
```js
  firebase.getCurrentUser().then(
    function (result) {
      console.log(JSON.stringify(result));
    },
    function (errorMessage) {
      console.log(errorMessage);
    }
  );
```

##### TypeScript
```js
  firebase.getCurrentUser().then((user) => {
      alert("User uid: " + user.uid);
  }, (error) => {
      alert("Trouble in paradise: " + error);
  });
```

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

### Anonymous login
Don't forget to enable anonymous login in your firebase instance.

##### JavaScript
```js
  firebase.login({
    type: firebase.LoginType.ANONYMOUS
  }).then(
      function (result) {
        console.log(JSON.stringify(result));
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

##### TypeScript
```js
  firebase.login({
      type: firebase.LoginType.ANONYMOUS
  }).then((user) => {
      alert("User uid: " + user.uid);
  }, (error) => {
      alert("Trouble in paradise: " + error);
  });
```

### Email-Password login
Don't forget to enable email-password login in your firebase instance.

```js
  firebase.login({
    type: firebase.LoginType.PASSWORD,
    email: 'useraccount@provider.com',
    password: 'theirpassword'
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

#### Managing email-password accounts
##### Creating a Password account
```js
  firebase.createUser({
    email: 'eddyverbruggen@gmail.com',
    password: 'firebase'
  }).then(
      function (result) {
        dialogs.alert({
          title: "User created",
          message: "userid: " + result.key,
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

#### Resetting a password
```js
  firebase.resetPassword({
    email: 'useraccount@provider.com'
  }).then(
      function () {
        // called when password reset was successful,
        // you could now prompt the user to check his email
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

#### Changing a password
```js
  firebase.changePassword({
    email: 'useraccount@provider.com',
    oldPassword: 'myOldPassword',
    newPassword: 'myNewPassword'
  }).then(
      function () {
        // called when password change was successful
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

### Custom login
Use this login type to authenticate against firebase using a token generated by your own backend server. See these [instructions on how to generate the authentication token](https://firebase.google.com/docs/auth/server).

```js
  var token = "myBackendToken";

  firebase.login({
    type: firebase.LoginType.CUSTOM,
    token: token
  }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  );
```

### Facebook login

First, enable Facebook login in your Firebase instance and add the App-ID and App-Secret.

Then add the following lines to your code and check for setup instructions for your platform below.

```js
  firebase.login({
    type: firebase.LoginType.FACEBOOK,
    scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
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
 1. If you didn't choose this feature during installation you can open the `Podfile` in the plugin's `platforms/ios` folder and uncomment the Facebook line.
 2. Add a bit of config to `app\App_Resources\iOS\Info.plist` as instructed in Step 4 [here](https://developers.facebook.com/docs/ios/getting-started).

#### Android

1. If you didn't choose this feature during installation you can uncomment the facebook SDK in `node_modules\nativescript-plugin-firebase\platforms\android\include.gradle`
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
3. Create a file `app\App_Resources\Android\values\facebooklogin.xml` and add this (replace the id):

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

Then add the following lines to your code and check for setup instructions for your platform below.

```js
  firebase.login({
    type: firebase.LoginType.GOOGLE
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
 If you didn't choose this feature during installation you can open the `Podfile` in the plugin's `platforms/ios` folder and uncomment the `GoogleSignIn` line.
 
 Make sure the URL Scheme for `REVERSED_CLIENT_ID` is in `app/App_Resources/iOS/Info.plist`:
 
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

#### Android

1. If you didn't choose this feature during installation you can uncomment `google-services-auth` in `node_modules\nativescript-plugin-firebase\platforms\android\include.gradle`
2. Google Sign-In requires an SHA1 fingerprint: see [Authenticating Your Client for details](https://developers.google.com/android/guides/client-auth). If you don't do this you will see the account selection popup, but you won't be able to actually sign in.

### getAuthToken
If you want to authenticate your user from your backend server you can obtain
a Firebase auth token for the currently logged in user.

```js
  firebase.getAuthToken({
    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
    forceRefresh: false
  }).then(
      function (token) {
        console.log("Auth token retrieved: " + token);
      },
      function (errorMessage) {
        console.log("Auth token retrieval error: " + errorMessage);
      }
  );
```

### logout
Shouldn't be more complicated than:

```js
  firebase.logout();
```

### reauthenticate
Some security-sensitive actions (deleting an account, changing a password) require that the user has recently signed in.
If you perform one of these actions, and the user signed in too long ago, the action fails.
When this happens (or to prevent it from happening), re-authenticate the user.

```js
  firebase.reauthenticate({
    type: firebase.LoginType.PASSWORD, // or GOOGLE / FACEBOOK
    // these are only required in type = PASSWORD
    email: 'user@domain.com',
    password: 'thePassword'
  }).then(
      function () {
        // you can now safely delete the account / change the password
        dialogs.alert({
          title: "Re-authenticated user",
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


