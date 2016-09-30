var firebase = {};
firebase.analytics = {};

firebase.LoginType = {
  ANONYMOUS: "anonymous",
  PASSWORD: "password",
  CUSTOM: "custom",
  FACEBOOK: "facebook",
  GOOGLE: "google"
};

firebase.QueryOrderByType = {
  KEY: "key",
  VALUE: "value",
  CHILD: "child",
  PRIORITY: "priority"    
};

firebase.QueryLimitType = {
  FIRST: "first",
  LAST: "last"
};
  
firebase.QueryRangeType = {
  START_AT: "startAt",
  END_AT: "endAt",
  EQUAL_TO: "equalTo"
};

firebase.instance = null;
firebase.storage = null;
firebase.firebaseRemoteConfig = null;
firebase.authStateListeners = [];
firebase._receivedNotificationCallback = null;

firebase.addAuthStateListener = function(listener) {
  if (firebase.authStateListeners.indexOf(listener) === -1) {
    firebase.authStateListeners.push(listener);
  }
  return true;
};
    
firebase.removeAuthStateListener = function(listener) {
  var index = firebase.authStateListeners.indexOf(listener);
  if (index >= 0) {
    firebase.authStateListeners.splice(index, 1);
  } else {
    return false;
  }
};

firebase.hasAuthStateListener = function(listener) {
  return firebase.authStateListeners.indexOf(listener) >= 0;
};

firebase.notifyAuthStateListeners = function(data) {
  firebase.authStateListeners.forEach(function (listener) {
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
};

firebase.strongTypeify = function (value) {
  if (value === "true") {
    value = true;
  } else if (value === "false") {
    value = false;
  } else if (parseFloat(value) == value) {
    value = parseFloat(value);
  } else if (parseInt(value) == value) {
    value = parseInt(value);
  }
  return value;
};

module.exports = firebase;