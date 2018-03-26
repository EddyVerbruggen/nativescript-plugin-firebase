import * as firebase from "../../firebase";

export module firestore {
  export class Firestore {
    collection(collectionPath: string): firebase.firestore.CollectionReference {
      return firebase.firestore.collection(collectionPath);
    }
  }
}
