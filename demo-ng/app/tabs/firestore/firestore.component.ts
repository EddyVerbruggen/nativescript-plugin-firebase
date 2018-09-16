import { Component, NgZone } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
import { Observable } from "rxjs";
import { City } from "~/model/City";

const firebase = require("nativescript-plugin-firebase/app");

// import { AngularFireModule } from 'angularfire2';

@Component({
  selector: "firestore",
  moduleId: module.id,
  templateUrl: "./firestore.component.html",
})
export class FirestoreComponent {

  private listenerUnsubscribe: () => void;

  public myCity$: Observable<City>;
  public myCities$: Observable<Array<City>>;

  private city: City;
  private cities: Array<City> = [];

  constructor(private zone: NgZone) {
    // AngularFireModule.initializeApp({});
  }

  public issue854(): void {
    const helloRef: firestore.DocumentReference =
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("availability")
            .doc("hello");

    helloRef.get().then(snapshot => console.log(snapshot.data()))
  }

  public loginAnonymously(): void {
    firebase.auth().signInAnonymously()
        .then(() => {
          const user = firebase.auth().currentUser;
          firebase.firestore().collection("users").doc(user.uid).set(user);
        })
        .catch(err => console.log("Login error: " + JSON.stringify(err)));
  }

  public firestoreAdd(): void {
    firebase.firestore().collection("dogs").add({name: "Fido"})
        .then((docRef: firestore.DocumentReference) => {
          console.log("Fido added, ref: " + docRef.id);
        })
        .catch(err => console.log("Adding Fido failed, error: " + err));
  }

  public firestoreSet(): void {
    firebase.firestore().collection("dogs").doc("fave")
        .set({
              name: "Woofie",
              last: "lastofwoofie",
              // note that this only works on iOS (there's a limitation in the Firestore Android SDK)
              // updateTsSet: firebase.firestore().FieldValue().serverTimestamp()
            },
            {
              merge: true
            }
        )
        .then(() => console.log("Woofie set"))
        .catch(err => console.log("Setting Woofie failed, error: " + err));


    // example from https://firebase.google.com/docs/firestore/query-data/get-data
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
      population: 3900000,
      landmarks: ["lake", "mountain"]
    });

    citiesCollection.doc("SAC").set({
      name: "Sacramento",
      state: "CA",
      country: "USA",
      capital: true,
      population: 500000,
      landmarks: ["mountain"]
    });

    citiesCollection.doc("DC").set({
      name: "Washington, D.C.",
      state: "WA",
      country: "USA",
      capital: true,
      population: 680000,
      landmarks: ["airport", "lake"]
    });

    citiesCollection.doc("TOK").set({
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000
    });

    citiesCollection.doc("BJ").set({
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000
    });
  }

  public firestoreSetByAutoID(): void {
    firebase.firestore().collection("dogs").doc()
        .set({name: "Woofie", last: "lastofwoofie", date: new Date()})
        .then(() => console.log("Woofie set"))
        .catch(err => console.log("Setting Woofie failed, error: " + err));
  }

  public firestoreUpdate(): void {
    // get a document reference so we can add a city reference to our favourite dog
    const sfDocRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");

    firebase.firestore().collection("dogs").doc("fave")
        .update({
          name: "Woofieupdate",
          last: "updatedwoofie!",
          city: sfDocRef,
          updateTs: firestore.FieldValue.serverTimestamp(),
          updateTsAlt: firebase.firestore().FieldValue().serverTimestamp(),
          lastKnownLocation: firebase.firestore().GeoPoint(4.34, 5.67)
        })
        .then(() => console.log("Woofie updated"))
        .catch(err => console.log("Updating Woofie failed, error: " + JSON.stringify(err)));
  }

  public firestoreGet(): void {
    const collectionRef: firestore.CollectionReference = firebase.firestore().collection("dogs");
    collectionRef.get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));
        })
        .catch(err => console.log("Get failed, error: " + err));

    // examples from https://firebase.google.com/docs/firestore/query-data/get-data
    const docRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("BJ");

    docRef.get().then((doc: firestore.DocumentSnapshot) => {
      if (doc.exists) {
        console.log("Document data:", JSON.stringify(doc.data()));
        // since there's a reference stored here, we can use that to retrieve its data
        const docRef: firestore.DocumentReference = doc.data().referenceToCitiesDC;
        docRef.get().then(res => console.log("docref.get: " + JSON.stringify(res.data())));
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  public firestoreGetNested(): void {
    const mainStreetInSFDocRef: firestore.DocumentReference =
        firebase.firestore()
            .collection("cities")
            .doc("SF")
            .collection("streets")
            .doc("QZNrg22tkN8W71YC3qCb"); // id of 'main st.'
    // .doc("doesntexist");

    mainStreetInSFDocRef.get().then((doc: firestore.DocumentSnapshot) => {
      if (doc.exists) {
        console.log("Document data:", JSON.stringify(doc.data()));
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  firestoreDocumentObservable(): void {
    this.myCity$ = Observable.create(subscriber => {
      const docRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");
      docRef.onSnapshot((doc: firestore.DocumentSnapshot) => {
        this.zone.run(() => {
          this.city = <City>doc.data();
          subscriber.next(this.city);
        });
      });
    });
  }

  firestoreCollectionObservable(): void {
    this.myCities$ = Observable.create(subscriber => {
      const colRef: firestore.CollectionReference = firebase.firestore().collection("cities");
      colRef.onSnapshot((snapshot: firestore.QuerySnapshot) => {
        this.zone.run(() => {
          this.cities = [];
          snapshot.forEach(docSnap => this.cities.push(<City>docSnap.data()));
          subscriber.next(this.cities);
        });
      });
    });
  }

  public firestoreListen(): void {
    if (this.listenerUnsubscribe !== undefined) {
      console.log("Already listening ;)");
      return;
    }

    const docRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");

    this.listenerUnsubscribe = docRef.onSnapshot((doc: firestore.DocumentSnapshot) => {
      if (doc.exists) {
        console.log("Document data:", JSON.stringify(doc.data()));
      } else {
        console.log("No such document!");
      }
    });
  }

  public firestoreStopListening(): void {
    if (this.listenerUnsubscribe === undefined) {
      console.log("Please start listening first ;)");
      return;
    }

    this.listenerUnsubscribe();
    this.listenerUnsubscribe = undefined;
  }

  public firestoreWhere(): void {
    const cityDocRef = firebase.firestore().collection("cities").doc("SF");

    firebase.firestore().collection("dogs")
        .where("city", "==", cityDocRef)
        .get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .catch(err => console.log("Where-get failed, error: " + err));
  }

  public firestoreWhereOrderLimit(): void {
    const query: firestore.Query = firebase.firestore().collection("cities")
        .where("state", "==", "CA")
        .where("population", "<", 99999999)
        .orderBy("population", "desc")
        .limit(2);

    query
        .get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`Large Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .catch(err => console.log("firestoreWhereOrderLimit failed, error: " + err));
  }

  public firestoreWhereCityHasALake(): void {
    const query: firestore.Query = firebase.firestore().collection("cities")
        .where("landmarks", "array-contains", "lake");

    query
        .get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`city with a lake: ${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .catch(err => console.log("firestoreWhereCityHasALake failed, error: " + err));
  }

  public firestoreDelete(): void {
    firebase.firestore().collection("dogs").doc("fave")
        .delete()
        .then(() => {
          console.log("Woofie deleted");
        })
        .catch(err => console.log("Delete failed, error: " + err));
  }

  public doWebGetValueForCompanies(): void {
    const path = "/companies";
    firebase.database().ref(path)
        .once("value")
        .then(result => console.log(`${result.key} => ${JSON.stringify(result.val())}`))
        .catch(error => console.log("doWebGetValueForCompanies error: " + error));
  }

  public writeBatch(): void {
    // one batch can update multiple docs
    const sfDocRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");
    const sacDocRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SAC");

    firebase.firestore().batch()
        .set(sfDocRef, {capital: false}, {merge: true})
        // .delete(sfDocRef) // Want to verify batches are atomic? With this line enabled, the next line will fail and the entire batch is rolled back correctly 👍
        .update(sfDocRef, {population: 860100})
        .update(sacDocRef, {population: 6500100})
        .commit()
        .then(() => console.log(`Batch successfully committed`))
        .catch(error => console.log("Batch error: " + error));
  }

  public transactionalUpdate(): void {
    const sfDocRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("SF");

    firebase.firestore().runTransaction(transaction => {
      const sfDoc = transaction.get(sfDocRef);
      if (!sfDoc.exists) {
        console.log("City SF doesn't exist");
      } else {
        const newPopulation = sfDoc.data().population + 1;
        console.log(`Updating city 'SF' to a new population of: ${newPopulation}, and flipping the 'capital' state to ${sfDoc.data().capital}.`);

        transaction
            .set(sfDocRef, {capital: !sfDoc.data().capital}, {merge: true})
            // .delete(sfDocRef) // with this line enabled, the next line will fail and the entire tx is rolled back 👍
            .update(sfDocRef, {population: newPopulation})
      }
      return null;
    })
        .then(() => console.log(`Transaction successfully committed`))
        .catch(error => console.log("doTransaction error: " + error));
  }

  public firestoreStartAt(): void {
    firebase.firestore().collection('cities')
      .doc('LA')
      .get()
      .then(doc => {
        firebase.firestore().collection('cities')
          .orderBy('name', 'asc')
          .startAt(doc)
          .get()
          .then(snap => snap.forEach(doc => console.log(doc.id, doc.data())));
      });
  }

  public firestoreStartAfter(): void {
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
  }
}
