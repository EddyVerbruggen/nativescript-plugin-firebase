import { firestore as fStore } from "../../firebase";
// import * as firebaseSdk from 'firebase/app';

export namespace firestore {
  export class Firestore /*implements firebaseSdk.firestore.Firestore*/ {
    collection(collectionPath: string): fStore.CollectionReference {
      return fStore.collection(collectionPath);
    }

    collectionGroup(id: string): fStore.CollectionGroup {
      return fStore.collectionGroup(id);
    }

    doc(path: string): fStore.DocumentReference {
      return fStore.docRef(path);
    }

    FieldValue(): firebase.firestore.FieldValue {
      return <any>{
        type: undefined,
        value: undefined,
        serverTimestamp: () => "SERVER_TIMESTAMP",
        delete: () => "DELETE_FIELD",
        arrayUnion: (...elements: any[]) => new fStore.FieldValue("ARRAY_UNION", elements),
        arrayRemove: (...elements: any[]) => new fStore.FieldValue("ARRAY_REMOVE", elements),
        increment: (n: number) => new fStore.FieldValue("INCREMENT", n)
      };
    }

    GeoPoint(latitude: number, longitude: number): fStore.GeoPoint {
      return fStore.GeoPoint(latitude, longitude);
    }

    runTransaction<T>(updateFunction: (transaction: fStore.Transaction) => Promise<any>): Promise<void> {
      return fStore.runTransaction(updateFunction);
    }

    batch(): fStore.WriteBatch {
      return fStore.batch();
    }

    settings(settings: fStore.Settings): void {
      fStore.settings(settings);
    }

    clearPersistence(): Promise<void> {
      return fStore.clearPersistence();
    }
  }
}
