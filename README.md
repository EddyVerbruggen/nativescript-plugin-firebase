# NativeScript Firebase plugin

<img src="screenshots/firebase.png" width="154px" height="43px" alt="Firebase"/><br/>
The leading realtime database. [Docs here.](https://www.firebase.com/docs/)



If you can spare 41 seconds, please check this video of the [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo) in action:
[![YouTube demo, 41 sec](screenshots/yt-thumb.png)](https://youtu.be/7zYU5e0Djkw "YouTube demo, 41 sec")

### Use when
* you need to store JSON data in the cloud,
* you want to sync that data to other devices and platforms,
* you want to optionally protect that data by having users log in,
* you want to update clients at the moment the data changes (think chat and multiplayer games).

## Prerequisites
NativeScript 1.3.0 (`tns --version`) is required for smooth installation, so please upgrade if you need to.

Head on over to firebase.com and sign up for a free account.
Your first 'Firebase' will be automatically created and made available via a URL
like https://resplendent-fire-4211.firebaseio.com/.

## Installation
From the command prompt go to your app's root folder and execute:
```
tns plugin add nativescript-plugin-firebase
```

## Usage

If you want a quickstart, [clone our demo app (the one in the YouTube video)](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo).
And here's the comprehensive list of supported functions:

### init
```js
  var firebase = require("nativescript-plugin-firebase");

  firebase.init({
    url: 'https://resplendent-fire-4211.firebaseio.com'
  }).then(
      function (instance) {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
  );
```

All further examples assume `firebase` has been required.
Also, all functions support promises, but we're leaving out the `.then()` stuff for brevity where it doesn't add value.

### setValue
Data is stored as JSON data at a specific path (which is appended to the URL you passed to `init`).
If you want to add data to a known path use this, otherwise use `push` (see below).

The plugin will take care of serializing JSON data to native data structures.

```js

  // to store a JSON object
  firebase.setValue(
      '/companies',
      {'foo':'bar'}
  );

  // to store an array of JSON objects
  firebase.setValue(
      '/companies',
      [
        {name: 'Telerik'},
        {name: 'Google'}
      ]
  );
```

### push
This function will store a JSON object at path `<Firebase URL>/users/<Generated Key>`

```js
  firebase.push(
      '/users',
      {
        'first': 'Eddy',
        'last': 'Verbruggen',
        'birthYear': 1977,
        'isMale': true,
        'address': {
          'street': 'foostreet',
          'number': 123
        }
      }
  );
```

### addChildEventListener
To listen for changes in your database you can pass in a listener callback function.
You get to control which path inside you database you want to listen to, by default it's `/` which is the entire database.

The plugin will take care of serializing native data structures to JSON data.

```js
  var onChildEvent = function(result) {
    console.log("Event type: " + result.type);
    console.log("Key: " + result.key);
    console.log("Value: " + JSON.stringify(result.value));
  };

  // listen to changes in the /users path
  firebase.addChildEventListener(onChildEvent, "/users");
```

### addValueEventListener
The difference with `addChildEventListener` is [explained here](https://www.firebase.com/docs/ios/guide/retrieving-data.html).
The link is for the iOS SDK, but it's the same for Android.

```js
  var onValueEvent = function(result) {
    console.log("Event type: " + result.type);
    console.log("Key: " + result.key);
    console.log("Value: " + JSON.stringify(result.value));
  };

  // listen to changes in the /companies path
  firebase.addValueEventListener(onValueEvent, "/companies");
```

### remove
You can remove the entire database content by passing in '/' as param,
but if you only want to wipe everything at '/users', do this:

```js
  firebase.remove("/users");
```

### login
v 1.1.0 of this plugin adds the capability to log your users in. Either anonymously or by email and password.
You need to add support for those features in your Firebase instance at the 'Login & Auth' tab.

You can expect more login mechanisms to be added in the future.

#### Anonymous login
```js
  firebase.login({
    // note that you need to enable anonymous login in your firebase instance
    type: firebase.loginType.ANONYMOUS
  }).then(
      function (result) {
        // the result object has these properties: uid, provider, expiresAtUnixEpochSeconds, profileImageURL, token
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  )
```

#### Password login
```js
  firebase.login({
      // note that you need to enable email-password login in your firebase instance
    type: firebase.loginType.PASSWORD,
    email: 'useraccount@provider.com',
    password: 'theirpassword'
  }).then(
      function (result) {
        // the result object has these properties: uid, provider, expiresAtUnixEpochSeconds, profileImageURL, token
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      }
  )
```

### logout
Shouldn't be more complicated than:

```js
  firebase.logout();
```

## Pro tips

### See what's happening
It's kinda cool to manipulate data while using multiple devices or your device and the Firebase Dashboard. You will instantly see the update on the other end.
The Firebase Dashboard can be reached by simply loading your Firebase URL in a web browser.

### Testing your app in the emulator

`tns emulate ios --device iPhone-6s`

`tns emulate android --geny "Nexus 6_23"`

or start a geny emulator first and do: `tns run android`


## Credits
The starting point for this plugin was [this great Gist](https://gist.github.com/jbristowe/c89a7bcae7fc9a035ee7) by [John Bristowe](https://github.com/jbristowe).
