import { Component, NgZone } from "@angular/core";
import { firestore } from "nativescript-plugin-firebase";
import { Observable } from "rxjs/Observable";
import { City } from "~/model/City";
import { ImageSource } from "tns-core-modules/image-source";

import { BarcodeFormat, MLKitScanBarcodesResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
import { MLKitDetectFacesResult } from "nativescript-plugin-firebase/mlkit/facedetection";
import { Image } from "tns-core-modules/ui/image";

const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

// import { AngularFireModule } from 'angularfire2';

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent {

  private listenerUnsubscribe: () => void;

  public myCity$: Observable<City>;
  public myCities$: Observable<Array<City>>;
  public mlKitTextValue: string;
  public mlKitAllOK: string;
  public mlKitLastMatchImg: ImageSource;

  public scannedImage: Image;

  private city: City;
  private cities: Array<City> = [];

  constructor(private zone: NgZone) {
    // AngularFireModule.initializeApp({});
  }

  recognizeText(): void {
    const path = "~/images/please_walk_on_the_grass.jpg";
    const img = new ImageSource();
    img.fromFile(path)
        .then(() => {
          firebase.mlkit.textrecognition.recognizeText({
            image: img
          }).then(
              (result: MLKitRecognizeTextResult) => {
                alert({
                  title: `Result from ${path}:`,
                  message: JSON.stringify(result.features),
                  okButtonText: "OK"
                });
              }, errorMessage => {
                console.log("ML Kit error: " + errorMessage);
              }
          );
        })
        .catch(err => console.log("Error in recognizeText: " + err));
  }

  scanBarcode(): void {
    const path = "~/images/barcodes/2qrcodes.png";
    const img = new ImageSource();
    img.fromFile(path)
        .then(() => {
          firebase.mlkit.barcodescanning.scanBarcodes({
            image: img,
            formats: [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13]
          }).then(
              (result: MLKitScanBarcodesResult) => {
                alert({
                  title: `Result from ${path}:`,
                  message: JSON.stringify(result.barcodes),
                  okButtonText: "OK"
                });
              }, errorMessage => {
                console.log("ML Kit error: " + errorMessage);
              }
          );
        })
        .catch(err => console.log("Error in scanBarcode: " + err));
  }

  detectFaces(): void {
    const path = "~/images/faces.jpg";
    const img = new ImageSource();
    img.fromFile(path)
        .then(() => {
          firebase.mlkit.facedetection.detectFaces({
            image: img
          }).then(
              (result: MLKitDetectFacesResult) => {
                alert({
                  title: `Result from ${path}:`,
                  message: JSON.stringify(result.faces),
                  okButtonText: "OK"
                });
              }, errorMessage => {
                console.log("ML Kit error: " + errorMessage);
              }
          );
        })
        .catch(err => console.log("Error in detectFaces: " + err));
  }

  onBarcodeScanResult(event): void {
    const result: MLKitScanBarcodesResult = event.value;
    this.mlKitTextValue = JSON.stringify(result.barcodes);
  }

  onScanResultImage(event): void {
    this.scannedImage = event.value;
  }

  onTextRecognitionResult(scanResult: any): void {
    const value: MLKitRecognizeTextResult = scanResult.value;
    // this.mlKitTextValue = value.features.map(feature => feature.text).join("\n\n");
    this.mlKitTextValue = value.features.map(feature => JSON.stringify(feature)).join("\n\n");
  }

  onFaceDetectionResult(scanResult: any): any {
    const value: MLKitDetectFacesResult = scanResult.value;
    if (value.faces.length > 0) {
      let allSmilingAndEyesOpen = true;
      value.faces.forEach(face => {
        allSmilingAndEyesOpen = allSmilingAndEyesOpen && face.smilingProbability && face.leftEyeOpenProbability && face.rightEyeOpenProbability &&
            face.smilingProbability > 0.7 && face.leftEyeOpenProbability > 0.7 && face.rightEyeOpenProbability > 0.7;
      });
      this.mlKitAllOK = `All smiling and eyes open? ${allSmilingAndEyesOpen ? 'Yes, screen grabbed:' : 'Nope. Sad.'}`;
      // model.set("textValue", value.faces.map(face => JSON.stringify(face)).join("\n"));
      this.mlKitTextValue = value.faces.map(face => `Smiling? ${this.round(face.smilingProbability)}%\nLeft eye open? ${this.round(face.leftEyeOpenProbability)}%\nRight eye open? ${this.round(face.rightEyeOpenProbability)}%`).join("\n\n");

      if (allSmilingAndEyesOpen && value.imageSource) {
        this.mlKitLastMatchImg = value.imageSource;
      }
    }
  }

  private round(input: number): number {
    if (isNaN(input)) {
      return 0;
    }
    return Math.round(input * 100);
  }

  public loginAnonymously(): void {
    firebaseWebApi.auth().signInAnonymously()
        .then(() => console.log("Logged in"))
        .catch(err => console.log("Login error: " + JSON.stringify(err)));
  }

  public firestoreAdd(): void {
    firebaseWebApi.firestore().collection("dogs").add({name: "Fido"})
        .then((docRef: firestore.DocumentReference) => {
          console.log("Fido added, ref: " + docRef.id);
        })
        .catch(err => console.log("Adding Fido failed, error: " + err));
  }

  public firestoreSet(): void {
    firebaseWebApi.firestore().collection("dogs").doc("fave")
        .set({name: "Woofie", last: "lastofwoofie", date: new Date()}, {merge: true})
        .then(() => {
          console.log("Woofie set");
        })
        .catch(err => console.log("Setting Woofie failed, error: " + err));


    // example from https://firebase.google.com/docs/firestore/query-data/get-data
    const citiesCollection = firebaseWebApi.firestore().collection("cities");

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
    firebaseWebApi.firestore().collection("dogs").doc()
        .set({name: "Woofie", last: "lastofwoofie", date: new Date()})
        .then(() => {
          console.log("Woofie set");
        })
        .catch(err => console.log("Setting Woofie failed, error: " + err));
  }

  public firestoreUpdate(): void {
    firebaseWebApi.firestore().collection("dogs").doc("fave")
        .update({name: "Woofieupdate", last: "updatedwoofie"})
        .then(() => {
          console.log("Woofie updated");
        })
        .catch(err => console.log("Updating Woofie failed, error: " + JSON.stringify(err)));
  }

  public firestoreGet(): void {
    const collectionRef: firestore.CollectionReference = firebaseWebApi.firestore().collection("dogs");
    collectionRef.get()
        .then((querySnapshot: firestore.QuerySnapshot) => {
          querySnapshot.forEach(doc => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));
        })
        .catch(err => console.log("Get failed, error" + err));

    // examples from https://firebase.google.com/docs/firestore/query-data/get-data
    const docRef: firestore.DocumentReference = firebaseWebApi.firestore().collection("cities").doc("BJ");

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
        firebaseWebApi.firestore()
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
      const docRef: firestore.DocumentReference = firebaseWebApi.firestore().collection("cities").doc("SF");
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
      const colRef: firestore.CollectionReference = firebaseWebApi.firestore().collection("cities");
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

    const docRef: firestore.DocumentReference = firebaseWebApi.firestore().collection("cities").doc("SF");

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
    const query: firestore.Query = firebaseWebApi.firestore().collection("cities")
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
    const query: firestore.Query = firebaseWebApi.firestore().collection("cities")
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
    firebaseWebApi.firestore().collection("dogs").doc("fave")
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
