<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/database.png" height="85px" alt="Realtime Database"/>

If you can spare 41 seconds, check (an older version of) this plugin's [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo) in action:
[![YouTube demo, 41 sec](images/yt-thumb-database.png)](https://youtu.be/7zYU5e0Djkw "YouTube demo, 41 sec")

## Enabling the database features
Before plugin version 5.0.0 this was enabled by default, but since 5.0.0 we're also supporting Firestore.

If your saved config file `firebase.nativescript.json` (in the root of your project) doesn't include `"realtimedb"` we'll assume `true` for backward compatibility.
You can disable it by editing that file and setting `"realtimedb": false`. Then run `rm -rf platforms && rm -rf node_modules && npm i`.

## Functions
You can either use the Native API, or the Web API. It's just a matter of personal background or preference. Under the hood the implementations are identical.

You can also mix and match the API calls.

The relevant imports would be:

```typescript
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
```

### init
You can optionally pass `persist` to the [`init` function](../README.md#init) to make Firebase save data to the local disc so it will work in offline scenario's. Default `false`.

<details>
 <summary>Native API</summary>

```js
  firebase.init({
    persist: true
  });
```
</details>

<details>
 <summary>Web API</summary>

```js
  firebaseWebApi.initializeApp({
    persist: true
  });
```
</details>

### setValue
Data is stored as JSON data at a specific path. If you want to add data to a known path use this, otherwise use `push` (see below).

The plugin will take care of serializing JSON data to native data structures.

<details>
 <summary>Native API</summary>

```typescript
  // to store a JSON object
  firebase.setValue(
      '/companies',
      {foo:'bar'}
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
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.database().ref("/companies")
      .set([
            {
              name: 'Telerik (web)',
              country: 'Bulgaria',
              since: 2000,
              updateTs: firebase.ServerValue.TIMESTAMP
            },
            {
              name: 'Google (web)',
              country: 'USA',
              since: 1900,
              updateTs: firebase.ServerValue.TIMESTAMP
            }
          ]
      )
      .then(() => console.log("Value set"))
      .catch(error => console.log("Error: " + error));
```
</details>


### getValue
To just get a value at a certain path *once*, use this method:

<details>
 <summary>Native API</summary>

```typescript
  firebase.getValue('/companies')
      .then(result => console.log(JSON.stringify(result)))
      .catch(error => console.log("Error: " + error));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.database().ref("/companies")
      .once("value")
      .then(result => console.log(JSON.stringify(result)))
      .catch(error => console.log("Error: " + error));
```
</details>

#### Adding an update timestamp
If you want to have Firebase a timestamp to your data (instead of clients which likely are not synchronized),
you can use the placeholder value `firebase.ServerValue.TIMESTAMP` (or `firebase["ServerValue"].TIMESTAMP` if your IDE complains about the former), so for instance:

```js
  // to store a JSON object
  firebase.setValue(
      '/companies',
      {
        foo: 'bar',
        updateTs: firebase.ServerValue.TIMESTAMP
      }
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
            console.log("Value: " + JSON.stringify(result.value)); // a JSON object
            console.log("Children: " + JSON.stringify(result.children)); // an array, added in plugin v 8.0.0
        }
    };

    firebase.query(
        onQueryEvent,
        "/companies",
        {
            // set this to true if you want to check if the value exists or just want the event to fire once
            // default false, so it listens continuously.
            // Only when true, this function will return the data in the promise as well!
            singleEvent: true,
            // order by company.country
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since' // mandatory when type is 'child'
            },
            // but only companies 'since' a certain year (Telerik's value is 2000, which is imaginary btw)
            // use either a 'range'
            //range: {
            //    type: firebase.QueryRangeType.EQUAL_TO,
            //    value: 2000
            ///},
            // .. or 'chain' ranges like this:
            ranges: [
              {
                  type: firebase.QueryRangeType.START_AT,
                  value: 1999
              },
              {
                  type: firebase.QueryRangeType.END_AT,
                  value: 2000
              }
            ],
            // only the first 2 matches
            // (note that there's only 1 in this case anyway)
            limit: {
                type: firebase.QueryLimitType.LAST,
                value: 2
            }
        }
    );
```

For supported values of the orderBy/range/ranges/limit's `type` properties, take a look at the [`firebase-common.d.ts`](firebase-common.d.ts) TypeScript definitions in this repo.

### update
Changes the values of the keys specified in the dictionary without overwriting other keys at this location.

```js
  firebase.update(
      '/companies',
      {'foo':'baz'}
  );
```

#### atomic writes across multiple locations
Changes values in multiple locations

```js
  var entriesPath = 'entries';
  var usersPath = 'users';

  var data = {};
  data[entriesPath] = {'foo':'bar'};
  data[usersPath] = {'name': 'John'};

  firebase.update('/', data);
```

#### atomic remove across multiple locations
Removes values in multiple locations

```js
  var entriesPath = 'entries';
  var usersPath = 'users';

  var data = {};
  data[entriesPath] = null;
  data[usersPath] = null;

  firebase.update('/', data);
```

### addChildEventListener

To listen for changes in your database you can pass in a listener callback function.
You get to control which path inside you database you want to listen to, by default it's `/` which is the entire database.

If you have defined access rules that depend on authentication, add listeners after authentication, attempting to access data not authorized by the access rules will prevent your listener from working properly, even if you add them at first. listing some data as just added, which seems to be a bug in Firebase's access rules system.

The plugin will take care of serializing native data structures to JSON data.

```js
  var onChildEvent = function(result) {
    console.log("Event type: " + result.type);
    console.log("Key: " + result.key);
    console.log("Value: " + JSON.stringify(result.value));
  };

  // listen to changes in the /users path
  firebase.addChildEventListener(onChildEvent, "/users").then(
    function(listenerWrapper) {
      var path = listenerWrapper.path;
      var listeners = listenerWrapper.listeners; // an Array of listeners added
      // you can store the wrapper somewhere to later call 'removeEventListeners'
    }
  );
```

### addValueEventListener
The difference with `addChildEventListener` is [explained here](https://www.firebase.com/docs/ios/guide/retrieving-data.html).
The link is for the iOS SDK, but it's the same for Android.

<details>
 <summary>Native API</summary>

```js
  var onValueEvent = function(result) {
    console.log("Event type: " + result.type);
    console.log("Key: " + result.key);
    console.log("Value: " + JSON.stringify(result.value));
  };

  // listen to changes in the /companies path
  firebase.addValueEventListener(onValueEvent, "/companies").then(
    function(listenerWrapper) {
      var path = listenerWrapper.path;
      var listeners = listenerWrapper.listeners; // an Array of listeners added
      // you can store the wrapper somewhere to later call 'removeEventListeners'
    }
  );
```
</details>

<details>
 <summary>Web API</summary>

```js
  const onValueEvent = result => {
    if (result.error) {
      console.log("Listener error: " + result.error);
    } else {
      console.log("Key: " + result.key);
      console.log("key exists? " + result.exists());
      console.log("Value: " + JSON.stringify(result.val()));
    }
  };

  firebaseWebApi.database().ref("/companies").on("value", onValueEvent);
```
</details>


### removeEventListeners
Firebase does not automatically remove listeners when fi. a user logs out.
So please keep track of these listeners yourself and remove them when appropriate.

You can see an example of this (for both the native and web API) in the [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo/blob/master/Firebase/app/main-view-model.js).

<details>
 <summary>Native API</summary>

```js
  firebase.removeEventListeners(
     listeners, // an Array of listeners
     "/users" // the path the listener was previously listening to
  );
```
</details>

<details>
 <summary>Web API</summary>

```js
  firebaseWebApi.database().ref("/companies").off("value");
```
</details>

### OnDisconnect
Use OnDisconnect to run operations on Firebase Realtime Database when the client disconnects.
Disconnections can happen when the app is killed from the recent tasks, internet loss, etc. When
you regain internet (app wasn't closed) then the database will update instantly.

Note that if the device restarts / app is killed in background (ungraceful disconnect) the database will
NOT update in realtime (there's no way), but after Firebase detects that the device is unreachable then it
will run the function given to onDisconnect.

Rather than passing in callbacks every function returns a promise.

<details>
 <summary>Native API</summary>

```typescript
  firebase.onDisconnect("/companies").cancel().then(() => console.log("Success")).catch(error => console.log(error));
  firebase.onDisconnect("/companies").remove();
  firebase.onDisconnect("/companies").set(value);
  firebase.onDisconnect("/companies").setWithPriority(value, priority /* string | number */);
  firebase.onDisconnect("/companies").update(value);

```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.database().ref("/companies").onDisconnect().cancel().then(() => console.log("Success"));
  firebaseWebApi.database().ref("/companies").onDisconnect().remove();
  firebaseWebApi.database().ref("/companies").onDisconnect().set(value);
  firebaseWebApi.database().ref("/companies").onDisconnect().setWithPriority(value, priority /* string | number*/);
  firebaseWebApi.database().ref("/companies").onDisconnect().update(values);
```
</details>

### remove
You can remove the entire database content by passing `/` as param,
but if you only want to for instance wipe everything at `/users`, do this:

```js
  firebase.remove("/users");
```

<details>
 <summary>Native API</summary>

```typescript
  firebase.remove("/users");
```
</details>

<details>
 <summary>Web API</summary>

```typescript
  firebaseWebApi.database().ref("/users").remove()
      .then(() => console.log("Removal done"))
      .catch((err) => console.log("Error: " + err));
```
</details>

### Transaction
Transactions are used when you want to atomically modify data at this location. This
ensures there are no conflicts with other clients writing to the same location at the
same time.

You can look at the [docs](https://firebase.google.com/docs/reference/js/firebase.database.Reference#transaction) for more information.

Note that a return value of `null` will delete the value at this location whereas returning
undefined will not modify the data at this location. Firebase web aborts the transaction when
given an undefined, but due to technically difficulties we just return transaction success which
results in committed = true. On transaction complete a promise is returned containing
{committed:boolean, snapshot: DataSnapshot} and an error will be returned if the transaciton
failed.

<details>
 <summary>Native API</summary>

```typescript
firebase.transaction(path, (currentValue => {
      if (currentValue === null) {
        return 0;
      } else {
        return ++currentValue; // Increment the current value. Do not try to increment currentValue if its NaN!
      }
    }))
     .then((result: { committed: boolean, snapshot: firebase.DataSnapshot }) => {
        console.log(result.committed + " snapshotValue: " + result.snapshot.val());
      }).catch(err => console.log("Encountered an error " + err));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
firebaseWebApi.database().ref(path).transaction(currentValue => {
      if (currentValue === null) {
        return { name: { first: 'Ada', last: 'Lovelace' } };
      } else {
        // console.log('User ada already exists.');
        return; // Abort the transaction.
      }
    })
      .then((result: { committed: boolean, snapshot: firebase.DataSnapshot }) => {
        console.log(result.committed + " snapshotValue: " + result.snapshot.val());
      }).catch(err => console.log("Encountered an error " + err));


firebaseWebApi.database().ref(path).transaction(currentValue => {
      if (currentValue === null) {
        return null; // Do nothing if this value doesn't exist or return undefined (null works here because theres nothing at this path)
       //return 0    // If you want to put a 0 in if no value exist
      } else {
        return ++currentValue; // increment the value
      }
    })

// Based off Firebase simple blog post. You can also treat the
// data as an object and return an updated version of post
firebaseWebApi.database().ref(path).transaction(function(post) {
      if (post) {
        console.log("Post Object looks like: " +  JSON.stringify(post));
        if (post.stars && post.stars[uid]) {
          post.starCount--;
          post.stars[uid] = null;
        } else {
          post.starCount++;
          if (!post.stars) {
            post.stars = {};
          }
          post.stars[uid] = true;
        }
      }
      return post;
    });
```
</details>

### enableLogging
The Firebase Realtime Database allows you turn on/off logs. This can be especially useful when trying to pinpoint any issues you may be having.
By default the log level is set to INFO. Turning on logging will set the log level to DEBUG and off will set it to NONE.

You MUST call `enableLogging()` before initializing firebase otherwise the app will crash.

```js
  firebase.enableLogging(true); // OR
  firebaseWebApi.database.enableLogging(false);
```
### keepInSync
The Firebase Realtime Database synchronizes and stores a local copy of the data for active listeners (see the methods above). In addition, you can keep specific locations in sync.

The client will automatically download the data at these locations and keep it in sync even if the reference has no active listeners.

```js
  firebase.keepInSync(
    "/users", // which path in your Firebase needs to be kept in sync?
    true      // set to false to disable this feature again
  ).then(
    function () {
      console.log("firebase.keepInSync is ON for /users");
    },
    function (error) {
      console.log("firebase.keepInSync error: " + error);
    }
  );
```

By default, 10MB of previously synced data will be cached. If the cache outgrows its configured size, the Firebase Realtime Database will purge data that has been used least recently. Data that is kept in sync, will not be purged from the cache. _(From the official doc for [iOS](https://firebase.google.com/docs/database/ios/offline-capabilities) and [Android](https://firebase.google.com/docs/database/android/offline-capabilities))._
