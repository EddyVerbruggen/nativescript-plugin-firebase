<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/firestore.png" height="85px" alt="Cloud Firestore"/>

## Enabling Firestore
During plugin installation you'll be asked whether or not you use Firestore.

In case you're upgrading and you have the `firebase.nativescript.json` file in your project root, edit it and add: `"firestore": true`.
Then run `rm -rf platforms && rm -rf node_modules && npm i`.

## API
All of these are 100% compatible with the Firestore Web API to make it easy to share code between web and native, and you can
refer to the [Firestore web api docs](https://firebase.google.com/docs/firestore/data-model) (make sure to look at the 'WEB' tab of those code samples).

### `init` / `initializeApp`
By default Firestore on iOS and Android persists data locally for offline usage (web doesn't by default, and the regular Firebase DB doesn't either on any platform).
If you don't like that awesome feature, you can pass `persist: false` to the [`init` function](../README.md#init).

> Note that `initializeApp` is simply an alias for `init` to make the plugin compatible with the web API.

```typescript
const firebase = require("nativescript-plugin-firebase/app");

firebase.initializeApp({
  persist: false
});
```

### `collection`
A 'collection' is at the root of any Firestore interaction. Data is stored as a 'document' inside a collection.

```typescript
const citiesCollection = firebase.firestore().collection("cities");
```

### `collection.get(options?)`
To get all documents inside a collection:

```typescript
const citiesCollection = firebase.firestore().collection("cities");

// note that the options object is optional, but you can use it to specify the source of data ("server", "cache", "default").
citiesCollection.get({ source: "server" }).then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});
```

### `collection().onSnapshot()`
To listen to changes in a certain collection, you can register a callback function that gets invoked every time data is changed.

To unsubscribe the listener, just invoke the function that was returned when attaching the listener.

> NOTE: Due to a bug in the iOS Firestore SDK 'unsubscribe' does not currently work (plugin version 5.0.0), so the plugin is silently ignoring further updates after unsubscribing. This should not hurt your usage in any way though.

```typescript
const citiesCollection = firebase.firestore().collection("cities");

const unsubscribe = citiesCollection.onSnapshot((snapshot: firestore.QuerySnapshot) => {
  snapshot.forEach(city => console.log(city.data()));
});

// then after a while, to detach the listener:
unsubscribe();

/**
 * If you pass in SnapshotOptions for the first parameter then your next should be onNext and
 * onError if you want for the third parameter. If you pass onNext as the first parameter the
 * second will be interpreted as onError callback. Note that you could pass onComplete, but
 * it will never be called as stated by Firestore docs.
 *
 * onError callbacks are optional!
 * onSnapshot(p1: SnapshotListenOptions|onNextCallback, p2?: onNextCallback | onErrorCallback, p3?: onErrorCallback?)
 */
const docRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");
docRef.onSnapshot(
    {includeMetadataChanges: true},   // Comment out if you just want onNext && onError callbacks
    (doc: firestore.DocumentSnapshot) => {

      const source = doc.metadata.fromCache ? "local cache" : "server";
      console.log("Data came from " + source);
      console.log("Has pending writes? " + doc.metadata.hasPendingWrites);
    },
    (error: Error) => {
      console.error(error);
    }
  );
```

> Using **Observables**? [Check the example in the demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/f6972433dea48bf1d342a6e4ef7f955dff341837/demo-ng/app/item/items.component.ts#L187-L198).

#### Snapshot metadata (for queries and documents)
Firestore can return metadata when passing the `includeMetadataChanges` boolean property. This can be used for:

- `snapshot.metadata.fromCache`: True if the snapshot was created from cached data rather than guaranteed up-to-date server data.
- `snapshot.metadata.hasPendingWrites`: True if the snapshot contains the result of local writes that have not yet been committed to the backend.

```typescript
import { firestore } from "nativescript-plugin-firebase";
const citiesCollection = firebase.firestore().collection("cities");

const unsubscribe = citiesCollection.onSnapshot(({ includeMetadataChanges: true }, snapshot: firestore.QuerySnapshot) => {
  snapshot.forEach(city => console.log(city.data()));

  console.log("Data came from " + (snapshot.metadata.fromCache ? "local cache" : "server"));
  console.log("Has pending writes? " + snapshot.metadata.hasPendingWrites);
});

// then after a while, to detach the listener:
unsubscribe();
```

### `collection.doc()`
As mentioned, a document lives inside a collection and contains the actual data:

```typescript
const citiesCollection = firebase.firestore().collection("cities");
const sanFranciscoDocument = citiesCollection.doc("SF");
```

### `collection.doc().get(options?)`
To get the data inside a document (and check whether or not the document actually exists):

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

// note that the options object is optional, but you can use it to specify the source of data ("server", "cache", "default").
sanFranciscoDocument.get({ source: "cache" }).then(doc => {
  if (doc.exists) {
    console.log(`Document data: ${JSON.stringify(doc.data())}`);
  } else {
    console.log("No such document!");
  }
});
```

### `collection.doc().onSnapshot()`
To listen to changes in a certain document, you can register a callback function that gets invoked every time data is changed.

To unsubscribe the listener, just invoke the function that was returned when attaching the listener.

> NOTE: Due to a bug in the iOS Firestore SDK 'unsubscribe' does not currently work (plugin version 5.0.0), so the plugin is silently ignoring further updates after unsubscribing. This should not hurt your usage in any way though.

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

const unsubscribe = sanFranciscoDocument.onSnapshot(doc => {
  if (doc.exists) {
    console.log("Document data:", JSON.stringify(doc.data()));
  } else {
    console.log("No such document!");
  }
});

// then after a while, to detach the listener:
unsubscribe();
```

> Using **Observables**? [Check the example in the demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/f6972433dea48bf1d342a6e4ef7f955dff341837/demo-ng/app/item/items.component.ts#L175-L185).

### `collection.add()`
If you want to add a document with an auto-generated ID, use `add` on a *collection*:

```typescript
const citiesCollection = firebase.firestore().collection("cities");

citiesCollection.add({
  name: "San Francisco",
  state: "CA",
  country: "USA",
  capital: false,
  population: 860000,
  location: firebase.firestore().GeoPoint(4.34, 5.67)
}).then(documentRef => {
  console.log(`San Francisco added with auto-generated ID: ${documentRef.id}`);
});
```

### `collection.doc().set()`
If you want to specify an ID yourself, use `set` on a *document*:

```typescript
const citiesCollection = firebase.firestore().collection("cities");

citiesCollection.doc("SF").set({
   name: "San Francisco",
   state: "CA",
   country: "USA",
   capital: false,
   population: 860000
});

citiesCollection.doc("LA").set({
  name: "Los Angeles",
  state: "CA",
  country: "USA",
  capital: false,
  population: 3900000
});
```

### `collection.doc().update()`
Update any number of properties of a document.

Note that you can use the special `serverTimestamp()` function to update a server timestamp (as opposed to a local timestamp, which would be different for every client):

#### Web API
```typescript
const firebase = require("nativescript-plugin-firebase/app");

firebase.firestore().FieldValue().serverTimestamp()
```

#### Native API
```typescript
import { firestore } from "nativescript-plugin-firebase";

firestore.FieldValue.serverTimestamp()
```

And this is what an update would look like, using the Web API:

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

sanFranciscoDocument.update({
  population: 860001,
  updateTimestamp: firebase.firestore().FieldValue().serverTimestamp(),
  location: firebase.firestore().GeoPoint(4.34, 5.67)
}).then(() => {
  console.log("SF population updated");
});
```

> NB: serverTimestamp() only works in an update on the Android SDK, not add or set.

### `collection.where()`
Firestore supports advanced querying with the `where` function. Those `where` clauses can be chained to form logical 'AND' queries:

You can use the operators defined in `firestore.WhereFilterOp`, which are: `'<' | '<=' | '==' | '>=' | '>' | 'in' | 'array-contains' | 'array-contains-any'`.

```typescript
const citiesCollection = firebase.firestore().collection("cities");

// "Gimme all cities in California with a population below 550000"
const query = citiesCollection
    .where("state", "==", "CA")
    .where("population", "<", 550000);

query
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    });
```

### [Collection Group Queries](https://firebase.google.com/docs/firestore/query-data/queries#collection-group-query): `collectionGroup.where()`
A collection group consists of all collections with the same ID. By default, queries retrieve results from a single collection in your database. Use a collection group query to retrieve documents from a collection group instead of from a single collection.

Note that this will require an *index* in your db, so make sure to `catch` any errors when invoking this method
and log out any error messages so you can easily copy-paste the required index into your browser URL bar.

```typescript
// "Gimme all cities with a population of at least a million"
firebase.firestore().collectionGroup("cities").where("population", ">=", 1_000_000)
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`City with >= 1M population: ${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    })
    .catch(err => console.log("Querying collection group failed, error: " + err));
```

### Delete an entire document: `collection.doc().delete()`
Entirely remove a document from a collection:

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

sanFranciscoDocument.delete().then(() => {
  console.log("SF was erased from the face of the earth!");
});
```

### Delete specific fields in a document
To delete one or more fields in a document, do this (showing two flavors, use whatever you fancy):

```typescript
import { firestore } from "nativescript-plugin-firebase";
const firebase = require("nativescript-plugin-firebase/app");

firebase.firestore().collection("dogs").doc("fave")
    .update({
      field1ToDelete: firestore.FieldValue.delete(),
      field2ToDelete: firebase.firestore().FieldValue().delete(),
    });
```

### Increment numbers
To easily increment numbers (`int` or `float`), you can use the `increment` feature since plugin version 8.2.1.

```typescript
import { firestore } from "nativescript-plugin-firebase";
const firebase = require("nativescript-plugin-firebase/app");

firebase.firestore().collection("dogs").doc("fave")
    .update({
      age: firestore.FieldValue.increment(1),
      lifePercentage: firebase.firestore().FieldValue().increment(0.0027),
    });
```

### Adding to (`arrayUnion`) and removing from (`arrayRemove`) Arrays
If your document contains an array field, you can use `arrayUnion()` and `arrayRemove()` to add and remove elements.

`arrayUnion()` adds elements to an array but only elements not already present:

```typescript
import { firestore } from "nativescript-plugin-firebase";
const firebase = require("nativescript-plugin-firebase/app");

firebase.firestore().collection("dogs").doc("fave")
    .update({
      // you can either use this syntax:
      colors1: firebase.firestore().FieldValue().arrayUnion("red", "blue"),
      //.. or this one:
      colors2: firestore.FieldValue.arrayUnion("red", "blue")
    });
```

`arrayRemove()` removes all instances of each given element:

```typescript
firebase.firestore().collection("dogs").doc("fave")
    .update({
      colors: firebase.firestore().FieldValue().arrayRemove("red")
    });
```

### Ordering and limiting results of `collection.where()`
Return data sorted (asc or desc), or limit to a certain number of results:

> Make sure to checkt the comment on the `.catch` below.

```typescript
const citiesCollection = firebase.firestore().collection("cities");

// "Gimme the two largest cities in California, the largest first please"
const query = citiesCollection
    .where("state", "==", "CA")
    .orderBy("population", "desc")
    .limit(2);

query
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`Large Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    }).catch(err => console.log(err)); // make sure you add this because Firestore may request you to create an index for this query!
```

### Paginate data with query cursors
You can use `startAt`, `startAfter`, `endAt`, and `endBefore` as documented for 'WEB' [here](https://firebase.google.com/docs/firestore/query-data/query-cursors).

Here's an example, grabbing cities ordered by name, starting after 'LA':

```typescript
firebase.firestore().collection('cities')
  .doc('LA')
  .get()
  .then(doc => {
    firebase.firestore().collection('cities')
      .orderBy('name', 'asc')
      .startAfter(doc)
      .get()
      .then(snap => snap.forEach(doc => console.log(doc.id, doc.data())));
  });
```

### Batched Writes: `batch()`
To perform a (mixed) sequence of `set`, `update`, and/or `delete` operations in an atomic fashion
(everything is rolled back if 1 operation fails), use the `batch` feature.

```typescript
// one batch can set/update/delete multiple documents
const sanFranciscoDocumentReference: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");
const sacramentoDocumentReference: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SAC");

firebase.firestore().batch()
    .set(sanFranciscoDocumentReference, {capital: false}, {merge: true})
    .update(sanFranciscoDocumentReference, {population: 5})
    .update(sacramentoDocumentReference, {population: 6})
    .commit()
    .then(() => console.log("Batch successfully committed"))
    .catch(error => console.log("Batch error: " + error));
```

Need proof these batches are atomic? Try deleting and then updating a document 😉

```typescript
firebase.firestore().batch()
    .delete(sanFranciscoDocumentReference)
    .update(sanFranciscoDocumentReference, {population: 7})
    .commit()
    .then(() => console.log("Batch successfully committed"))
    .catch(error => console.log(`Batch error: ${error}`));
```

### Transactional Updates: `runTransaction()` (iOS only)
> There's a technical hurdle which prevents this from working on Android.

In contrast to `batch` you can `runTransaction` to also be able to use `get`, but only use `get`
before calling `set`, `update`, or `delete` (or the transaction will fail).

```typescript
const sanFranciscoDocumentReference: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");

firebase.firestore().runTransaction(transaction => {
  const doc = transaction.get(sanFranciscoDocumentReference);
  if (!doc.exists) {
    console.log("City SF doesn't exist");
  } else {
    const newPopulation = doc.data().population + 1;
    console.log(`Updating city 'SF' to a new population of: ${newPopulation}, and flipping the 'capital' state to ${sfDoc.data().capital}.`);

    transaction
        .set(sanFranciscoDocumentReference, {capital: !doc.data().capital}, {merge: true})
        .update(sanFranciscoDocumentReference, {population: newPopulation})
  }
  return null;
})
   .then(() => console.log("Transaction successfully committed"))
   .catch(error => console.log(`Transaction error: ${error}`));
```

### Firestore configurations: `settings()`
> You must set these before invoking any other methods!

You can modify `host`, `ssl` and `cacheSizeBytes` (this one is Android only).  (`timestampsInSnapshots` shouldn't be used as it will be deprecated)
See [docs](https://firebase.google.com/docs/reference/js/firebase.firestore.Settings) for more information.

```typescript
   firebase.firestore.settings({});

   firebaseWebApi.firestore().settings({"host" : "Example", "ssl" : false});
```

### Clearing persistence data: `clearPersistence()`
> You should do this before any other interactions with the database.

This clears the persistent storage including pending writes and cached documents.
This is intended to help write reliable test, not so much for production usage.

```typescript
firebase.firestore.clearPersistence()
   .then(() => console.log("Persistence data cleared"))
   .catch(error => console.log(`Error clearing persistence data: ${error}`));
```
