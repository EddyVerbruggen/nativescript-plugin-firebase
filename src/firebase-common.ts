import { prompt } from "tns-core-modules/ui/dialogs";
import { firestore } from "./firebase";

export const firebase: any = {
  initialized: false,
  instance: null,
  storage: null,
  firebaseRemoteConfig: null,
  authStateListeners: [],
  _receivedNotificationCallback: null,
  _dynamicLinkCallback: null,
  analytics: {},
  firestore: {},
  invites: {
    MATCH_TYPE: {
      WEAK: 0,
      STRONG: 1
    }
  },
  dynamicLinks: {
    MATCH_CONFIDENCE: {
      WEAK: 0,
      STRONG: 1
    }
  },
  admob: {
    AD_SIZE: {
      SMART_BANNER: "SMART",
      LARGE_BANNER: "LARGE",
      BANNER: "BANNER",
      MEDIUM_RECTANGLE: "MEDIUM",
      FULL_BANNER: "FULL",
      LEADERBOARD: "LEADERBOARD",
      SKYSCRAPER: "SKYSCRAPER",
      FLUID: "FLUID"
    },
    defaults: {
      margins: {
        top: -1,
        bottom: -1
      },
      testing: false,
      size: "SMART"
    }
  },
  LoginType: {
    ANONYMOUS: "anonymous",
    PASSWORD: "password",
    PHONE: "phone",
    CUSTOM: "custom",
    FACEBOOK: "facebook",
    GOOGLE: "google"
  },
  QueryOrderByType: {
    KEY: "key",
    VALUE: "value",
    CHILD: "child",
    PRIORITY: "priority"
  },
  QueryLimitType: {
    FIRST: "first",
    LAST: "last"
  },
  QueryRangeType: {
    START_AT: "startAt",
    END_AT: "endAt",
    EQUAL_TO: "equalTo"
  },
  addAuthStateListener: listener => {
    if (firebase.authStateListeners.indexOf(listener) === -1) {
      firebase.authStateListeners.push(listener);
    }
    return true;
  },
  removeAuthStateListener: listener => {
    const index = firebase.authStateListeners.indexOf(listener);
    if (index >= 0) {
      firebase.authStateListeners.splice(index, 1);
      return true;
    } else {
      return false;
    }
  },
  hasAuthStateListener: listener => {
    return firebase.authStateListeners.indexOf(listener) >= 0;
  },
  notifyAuthStateListeners: data => {
    firebase.authStateListeners.forEach(listener => {
      try {
        if (listener.thisArg) {
          listener.onAuthStateChanged.call(listener.thisArg, data);
        } else {
          listener.onAuthStateChanged(data);
        }
      } catch (ex) {
        console.error("Firebase AuthStateListener failed to trigger", listener, ex);
      }
    });
  },
  strongTypeify: value => {
    if (value === "true") {
      value = true;
    } else if (value === "false") {
      value = false;
    } else if (parseFloat(value) === value) {
      value = parseFloat(value);
    } else if (parseInt(value) === value) {
      value = parseInt(value);
    }
    return value;
  },
  requestPhoneAuthVerificationCode: (onUserResponse, verificationPrompt) => {
    prompt(verificationPrompt || "Verification code").then(promptResult => {
      if (!promptResult.result) {
        return;
      }
      onUserResponse(promptResult.text);
    });
  },
  // for backward compatibility, because plugin version 4.0.0 moved the params to per-logintype objects
  moveLoginOptionsToObjects: loginOptions => {
    if (loginOptions.email) {
      console.log("Please update your code: the 'email' property is deprecated and now expected at 'passwordOptions.email'");
      if (!loginOptions.passwordOptions) {
        loginOptions.passwordOptions = {};
      }
      if (!loginOptions.passwordOptions.email) {
        loginOptions.passwordOptions.email = loginOptions.email;
      }
    }

    if (loginOptions.password) {
      console.log("Please update your code: the 'password' property is deprecated and now expected at 'passwordOptions.password'");
      if (!loginOptions.passwordOptions) {
        loginOptions.passwordOptions = {};
      }
      if (!loginOptions.passwordOptions.password) {
        loginOptions.passwordOptions.password = loginOptions.password;
      }
    }

    if (loginOptions.token) {
      console.log("Please update your code: the 'token' property is deprecated and now expected at 'customOptions.token'");
      if (!loginOptions.customOptions) {
        loginOptions.customOptions = {};
      }
      if (!loginOptions.customOptions.token) {
        loginOptions.customOptions.token = loginOptions.token;
      }
    }

    if (loginOptions.tokenProviderFn) {
      console.log("Please update your code: the 'tokenProviderFn' property is deprecated and now expected at 'customOptions.tokenProviderFn'");
      if (!loginOptions.customOptions) {
        loginOptions.customOptions = {};
      }
      if (!loginOptions.customOptions.tokenProviderFn) {
        loginOptions.customOptions.tokenProviderFn = loginOptions.tokenProviderFn;
      }
    }

    if (loginOptions.scope) {
      console.log("Please update your code: the 'scope' property is deprecated and now expected at 'facebookOptions.scope'");
      if (!loginOptions.facebookOptions) {
        loginOptions.facebookOptions = {};
      }
      if (!loginOptions.facebookOptions.scope) {
        loginOptions.facebookOptions.scope = loginOptions.scope;
      }
    }
  },
  merge: (obj1, obj2) => {
    const result = {}; // return result
    for (let i in obj1) {      // for every property in obj1
      if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
        result[i] = firebase.merge(obj1[i], obj2[i]); // if it's an object, merge
      } else {
        result[i] = obj1[i]; // add it to result
      }
    }
    for (let i in obj2) { // add the remaining properties from object 2
      if (i in result) { // conflict
        continue;
      }
      result[i] = obj2[i];
    }
    return result;
  }
};

export class DocumentSnapshot implements firestore.DocumentSnapshot {
  constructor(public id: string, public exists: boolean, public data: () => firestore.DocumentData) {
  }
}

export class QuerySnapshot implements firestore.QuerySnapshot {
  public docSnapshots: firestore.DocumentSnapshot[];

  forEach(callback: (result: firestore.DocumentSnapshot) => void, thisArg?: any): void {
    this.docSnapshots.map(snapshot => callback(snapshot));
  }
}
