<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/firestore.png" height="85px" alt="Cloud Firestore"/>

## Enabling Firestore
During plugin installation you'll be asked whether or not you use Firestore.

In case you're upgrading and you have the `firebase.nativescript.json` file in your project root, edit it and add: `"firestore": true`.
Then run `rm -rf platforms && rm -rf node_modules && npm i`.

## Functions
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

### `collection.get()`
To get all documents inside a collection:

```typescript
const citiesCollection = firebase.firestore().collection("cities");

citiesCollection.get().then(querySnapshot => {
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
```

> Using **Observables**? [Check the example in the demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/f6972433dea48bf1d342a6e4ef7f955dff341837/demo-ng/app/item/items.component.ts#L187-L198).

### `collection.doc()`
As mentioned, a document lives inside a collection and contains the actual data:

```typescript
const citiesCollection = firebase.firestore().collection("cities");
const sanFranciscoDocument = citiesCollection.doc("SF");
```

### `collection.doc().get()`
To get the data inside a document (and check whether or not the document actually exists):

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

sanFranciscoDocument.get().then(doc => {
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
  population: 860000
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

Use the special property `firebase.firestore().FieldValue().serverTimestamp()` to update a server timestamp
(as opposed to a local timestamp, which would be different for every client).

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

sanFranciscoDocument.update({
  population: 860001,
  updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
}).then(() => {
  console.log("SF population updated");
});
```

### `collection.doc().delete()`
Entirely remove a document from a collection:

```typescript
const sanFranciscoDocument = firebase.firestore().collection("cities").doc("SF");

sanFranciscoDocument.delete().then(() => {
  console.log("SF was erased from the face of the earth!");
});
```

### `collection.where()`
Firestore supports advanced querying with the `where` function. Those `where` clauses can be chained to form logical 'AND' queries:

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

### Ordering and limiting results of `collection.where()`
Return data sorted (asc or desc), or limit to a certain number of results:

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
    });
```

## Future work
Need something else that's not supported yet? Please open an Issue or PR 😚
