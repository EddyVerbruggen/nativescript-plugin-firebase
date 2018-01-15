import { Component, NgZone, OnInit } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
import { Observable } from "rxjs/Observable";
import { City } from "../model/City";

const firebase = require("nativescript-plugin-firebase/app");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

// import { AngularFireModule } from 'angularfire2';

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

  private listenerUnsubscribe: () => void;

  public myCity$: Observable<City>;
  public myCities$: Observable<Array<City>>;
  private city: City;
  private cities: Array<City> = [];

  constructor(private zone: NgZone) {
    // AngularFireModule.initializeApp({});
  }

  ngOnInit(): void {
    firebase.initializeApp({
      persist: false
    }).then(() => {
      console.log("Firebase initialized");
    });
  }

  public loginAnonymously(): void {
    firebase.auth().signInAnonymously()
        .then(() => console.log("Logged in"))
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
        .set({name: "Woofie", last: "lastofwoofie", date: new Date()}, {merge: true})
        .then(() => {
          console.log("Woofie set");
        })
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
      population: 3900000
    });

    citiesCollection.doc("SAC").set({
      name: "Sacramento",
      state: "CA",
      country: "USA",
      capital: true,
      population: 500000
    });

    citiesCollection.doc("DC").set({
      name: "Washington, D.C.",
      state: "WA",
      country: "USA",
      capital: true,
      population: 680000
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
        .then(() => {
          console.log("Woofie set");
        })
        .catch(err => console.log("Setting Woofie failed, error: " + err));
  }

  public firestoreUpdate(): void {
    firebase.firestore().collection("dogs").doc("fave")
        .update({name: "Woofieupdate", last: "updatedwoofie"})
        .then(() => {
          console.log("Woofie updated");
        })
        .catch(err => console.log("Updating Woofie failed, error: " + JSON.stringify(err)));
  }

  public firestoreGet(): void {
    const collectionRef: firestore.CollectionReference = firebase.firestore().collection("dogs");
    collectionRef.get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            // since there's a reference stored here, we can use that to retrieve its data
            const docRef: firestore.DocumentReference = doc.data().ref2sf;
            docRef.get().then(res => console.log("docref.get: " + JSON.stringify(res.data())));
          });
        })
        .catch(err => console.log("Get failed, error" + err));

    // examples from https://firebase.google.com/docs/firestore/query-data/get-data
    const docRef: firestore.DocumentReference = firebase.firestore().collection("cities").doc("BJ");

    docRef.get().then((doc: firestore.DocumentSnapshot) => {
      if (doc.exists) {
        console.log("Document data:", JSON.stringify(doc.data()));
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
    const query: firestore.Query = firebase.firestore().collection("cities")
        .where("state", "==", "CA")
        .where("population", "<", 550000);

    query
        .get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`Relatively small Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .catch(err => console.log("Where-get failed, error" + err));
  }

  public firestoreWhereOrderLimit(): void {
    const query: firestore.Query = firebase.firestore().collection("cities")
        .where("state", "==", "CA")
        .orderBy("population", "desc")
        .limit(2);

    query
        .get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => {
            console.log(`Large Californian city: ${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        })
        .catch(err => console.log("firestoreWhereOrderLimit failed, error" + err));
  }

  public firestoreDelete(): void {
    firebase.firestore().collection("dogs").doc("fave")
        .delete()
        .then(() => {
          console.log("Woofie deleted");
        })
        .catch(err => console.log("Delete failed, error" + err));
  }

  public doWebGetValueForCompanies(): void {
    const path = "/companies";
    firebaseWebApi.database().ref(path)
        .once("value")
        .then(result => {
          console.log(`${result.key} => ${JSON.stringify(result.val())}`);
        })
        .catch(error => console.log("doWebGetValueForCompanies error: " + error));
  }
}