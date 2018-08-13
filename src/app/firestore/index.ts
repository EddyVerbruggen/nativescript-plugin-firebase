import * as firebase from "../../firebase";

export module firestore {
  export class Firestore {
    collection(collectionPath: string): firebase.firestore.CollectionReference {
      return firebase.firestore.collection(collectionPath);
    }

    FieldValue(): firebase.firestore.FieldValue {
      return {
        serverTimestamp: () => "SERVER_TIMESTAMP"
      }
    }

    GeoPoint(latitude: number, longitude: number): firebase.firestore.GeoPoint {
      return firebase.firestore.GeoPoint(latitude, longitude);
    }

    runTransaction<T>(updateFunction: (transaction: firebase.firestore.Transaction) => Promise<any>): Promise<void> {
      return firebase.firestore.runTransaction(updateFunction);
    }

    batch(): firebase.firestore.WriteBatch {
      return firebase.firestore.batch();
    }
  }
}
