/**
 * This is the firebase.js (web) compatible API.
 * Use 'const firebase = require("nativescript-plugin-firebase/app")'
 */

import { firebase } from "../firebase";
import { auth as firebaseAuthModule } from "./auth";
import { database as firebaseDatabaseModule } from "./database";
import { firestore as firebaseFirestoreModule } from "./firestore";
import { storage as firebaseStorageModule } from "./storage";
import { functions as firebaseFunctionsModule } from "./functions";

export function initializeApp(options?: firebase.InitOptions, name? /* ignored */: string): Promise<any> {
  return firebase.init(options);
}

let authCache;

export function auth(app?: any): firebaseAuthModule.Auth {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!authCache) {
    authCache = new firebaseAuthModule.Auth();
  }
  return authCache;
}

let dbCache;

export function database(app?: any): firebaseDatabaseModule.Database {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!dbCache) {
    dbCache = new firebaseDatabaseModule.Database();
  }
  return dbCache;
}

let firestoreCache;

export function firestore(app?: any): firebaseFirestoreModule.Firestore {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!firestoreCache) {
    firestoreCache = new firebaseFirestoreModule.Firestore();
  }
  return firestoreCache;
}

let functionsCache;

export namespace database {
  // This is just to follow the webs interface. On android and ios enable logging only accepts a boolean
  // By default logging is set to Info. We will set to debug if true and none if false.
  export function enableLogging(logger?: boolean | ((a: string) => any), persistent?: boolean): any {
    firebase.enableLogging(logger, persistent);
  }
}

export function functions(app?: any): firebaseFunctionsModule.Functions {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!functionsCache) {
    functionsCache = new firebaseFunctionsModule.Functions();
  }
  return functionsCache;
}

let storageCache;

export function storage(app?: any): firebaseStorageModule.Storage {
  if (app) {
    console.log("The 'app' param is ignored at the moment.");
  }
  if (!storageCache) {
    storageCache = new firebaseStorageModule.Storage();
  }
  return storageCache;
}
