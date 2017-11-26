import { Component, OnInit } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
// import { firestore } from "nativescript-plugin-firebase/app/firestore";

const firebase = require("nativescript-plugin-firebase/app");

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    firebase.initializeApp();
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
          });
        })
        .catch(err => console.log("Get failed, error" + err));
  }

  public firestoreDelete(): void {
    firebase.firestore().collection("dogs").doc("fave")
        .delete()
        .then(() => {
          console.log("Woofie deleted");
        })
        .catch(err => console.log("Delete failed, error" + err));
  }
}