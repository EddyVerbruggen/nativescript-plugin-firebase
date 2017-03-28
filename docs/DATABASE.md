<img src="images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/>

<img src="images/features/database.png" width="296px" height="124px" alt="Database"/>

If you can spare 41 seconds, check (an older version of) this plugin's [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo) in action:
[![YouTube demo, 41 sec](images/yt-thumb-database.png)](https://youtu.be/7zYU5e0Djkw "YouTube demo, 41 sec")

## Enabling the database features
Since this is the most likely feature you'll use with this plugin it has already been properly configured to interact with the database, so nothing to do here on top of the stuff in the main readme.

## Functions

### init
You can optionally pass `persist` to the [`init` function](../README.md#init) to make Firebase save data to the local disc so it will work in offline scenario's. Default `false`.

> Beware that `persist` [may cause trouble](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/186#issuecomment-265276766) when using `livesync`.

```js
  firebase.init({
    persist: true
  });
```

### setValue
Data is stored as JSON data at a specific path (which is appended to the URL you passed to `init`).
If you want to add data to a known path use this, otherwise use `push` (see below).

The plugin will take care of serializing JSON data to native data structures.

```js
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
            console.log("Value: " + JSON.stringify(result.value));
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
    
export function removeEventListeners(listeners: Array<any>, path: string): Promise<any>;

### removeEventListeners
Firebase does not automatically remove listeners when fi. a user logs out.
So please keep track of these listeners yourself and remove them when appropriate.

You can see an example of this in the [demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase-demo/blob/master/Firebase/app/main-view-model.js).

> Note that there was a bug in the Android runtime that was fixed in NativeScript 2.3.0 which caused a crash when using this function.

```js
  firebase.removeEventListeners(
     listeners, // an Array of listeners
     "/users" // the path the listener was previously listening to
  );
```

### remove
You can remove the entire database content by passing `/` as param,
but if you only want to wipe everything at `/users`, do this:

```js
  firebase.remove("/users");
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
