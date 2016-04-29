# NativeScript Firebase plugin

<img src="screenshots/firebase.png" width="154px" height="43px" alt="Firebase"/><br/>
The leading realtime app platform (Database, Auth & Hosting). [Docs here.](https://www.firebase.com/docs/)



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
like `https://resplendent-fire-4211.firebaseio.com/`.

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
        {name: 'Telerik', country: 'Bulgaria'},
        {name: 'Google', country: 'USA'}
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
  ).then(
      function (result) {
        console.log("created key: " + result.key);
      }
  );
```

### query
Firebase supports querying data and this plugin does too, since v2.0.0.

Let's say we have the structure as defined at `setValue`, then use this query to retrieve the companies in country 'Bulgaria':

```js
    var onQueryEvent = function(result) {
        // note that the query returns 1 match at a time
        // in the order specified in the query
        if (!result.error) {
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value));
        }
    };

    firebase.query(
        onQueryEvent,
        "/companies",
        {
            // set this to true if you want to check if the value exists or just want the event to fire once
            // default false, so it listens continuously
            singleEvent: true,
            // order by company.country
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'country' // mandatory when type is 'child'
            },
            // but only companies named 'Telerik'
            // (this range relates to the orderBy clause)
            range: {
                type: firebase.QueryRangeType.EQUAL_TO,
                value: 'Bulgaria'
            },
            // only the first 2 matches
            // (note that there's only 1 in this case anyway)
            limit: {
                type: firebase.QueryLimitType.LAST,
                value: 2
            }
        }
    );
```

For supported values of the orderBy/range/limit's `type` properties, take a look at the [`firebase-common.d.ts`](firebase-common.d.ts) TypeScript definitions in this repo.

### update
Changes the values of the keys specified in the dictionary without overwriting other keys at this location.

```js
  firebase.update(
      '/companies',
      {'foo':'baz'}
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
    type: firebase.LoginType.ANONYMOUS
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
    type: firebase.LoginType.PASSWORD,
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

#### Creating a Password account
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
  )
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
  )
```

#### Changing a password
```js
  firebase.changePassword({
    email: 'useraccount@provider.com',
    oldPassword: 'myOldPassword',
    newPassword: 'myNewPassword'
  }).then(
      function () {
        // called when password change was successful,
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

## Future work
- Add support for `removeEventListener`.
- Possibly add more login mechanisms.


## Credits
The starting point for this plugin was [this great Gist](https://gist.github.com/jbristowe/c89a7bcae7fc9a035ee7) by [John Bristowe](https://github.com/jbristowe).
