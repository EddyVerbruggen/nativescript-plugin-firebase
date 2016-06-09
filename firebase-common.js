var firebase = {};

firebase.LoginType = {
  ANONYMOUS: "anonymous",
  PASSWORD: "password",
  CUSTOM: "custom"
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

firebase.authStateListeners = [];

firebase.addAuthStateListener = function(listener) {
  if (authStateListeners.indexOf(listener) === -1) {
    authStateListeners.push(listener);
  }
  return true;
};
    
firebase.removeAuthStateListener = function(listener) {
  var index = authStateListeners.indexOf(listener);
  if (index >= 0) {
    authStateListeners.splice(index, 1);
  } else {
    return false;
  }
};

firebase.hasAuthStateListener = function(listener) {
  return authStateListeners.indexOf(listener) >= 0;
}

firebase.notifyAuthStateListeners = function(data) {
  authStateListeners.forEach(function (listener) {
    try {
      if (listener.thisArg) {
        listener.onAuthStateChanged.apply(thisArg, data);
      } else {
        listener.onAuthStateChanged(data);
      }
    } catch (ex) {
      console.error("Firebase AuthStateListener failed to trigger", listener, ex);
    }
  });
}

module.exports = firebase;