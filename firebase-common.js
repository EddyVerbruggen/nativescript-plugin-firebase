var dialogs = require("ui/dialogs");

var firebase = {};
firebase.analytics = {};
firebase.invites = {};
firebase.admob = {};
firebase.admob.AD_SIZE = {
  SMART_BANNER: "SMART",
  LARGE_BANNER: "LARGE",
  BANNER: "BANNER",
  MEDIUM_RECTANGLE: "MEDIUM",
  FULL_BANNER: "FULL",
  LEADERBOARD: "LEADERBOARD",
  SKYSCRAPER: "SKYSCRAPER",
  FLUID: "FLUID"
};
firebase.admob.defaults = {
  margins: {
    top: -1,
    bottom: -1
  },
  testing: false,
  size: firebase.admob.AD_SIZE.SMART_BANNER
};

firebase.merge = function merge(obj1, obj2) { // Our merge function
  var result = {}; // return result
  for (var i in obj1) {      // for every property in obj1
    if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
      result[i] = merge(obj1[i], obj2[i]); // if it's an object, merge
    } else {
      result[i] = obj1[i]; // add it to result
    }
  }
  for (i in obj2) { // add the remaining properties from object 2
    if (i in result) { //conflict
      continue;
    }
    result[i] = obj2[i];
  }
  return result;
};

firebase.LoginType = {
  ANONYMOUS: "anonymous",
  PASSWORD: "password",
  PHONE: "phone",
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
firebase._dynamicLinkCallback = null;

firebase.addAuthStateListener = function (listener) {
  if (firebase.authStateListeners.indexOf(listener) === -1) {
    firebase.authStateListeners.push(listener);
  }
  return true;
};

firebase.removeAuthStateListener = function (listener) {
  var index = firebase.authStateListeners.indexOf(listener);
  if (index >= 0) {
    firebase.authStateListeners.splice(index, 1);
  } else {
    return false;
  }
};

firebase.hasAuthStateListener = function (listener) {
  return firebase.authStateListeners.indexOf(listener) >= 0;
};

firebase.notifyAuthStateListeners = function (data) {
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

firebase.requestPhoneAuthVerificationCode = function (onUserResponse, verificationPrompt) {
  dialogs.prompt(verificationPrompt || "Verification code").then(function (promptResult) {
    if (!promptResult.result) {
      return;
    }
    onUserResponse(promptResult.text);
  });
};

// for backward compatibility, because plugin version 4.0.0 move the params to per-logintype objects
firebase.moveLoginOptionsToObjects = function (loginOptions) {
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
};

module.exports = firebase;