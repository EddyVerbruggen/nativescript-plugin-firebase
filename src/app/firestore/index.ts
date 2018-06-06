import * as firebase from "../../firebase";
import { FIRESTORE_SERVER_TS } from "../../firebase";

export module firestore {
  export class Firestore {
    collection(collectionPath: string): firebase.firestore.CollectionReference {
      return firebase.firestore.collection(collectionPath);
    }
    FieldValue(): firebase.firestore.FieldValue {
      return {
        serverTimestamp: () => FIRESTORE_SERVER_TS
      }
    }
  }
}
