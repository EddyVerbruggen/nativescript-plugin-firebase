var appModule = require("application");
var utils = require("utils/utils");
var fs = require("file-system");
var firebase = require("./firebase-common");

firebase._launchNotification = null;

// we need to cache and restore the context, otherwise the next invocation is broken
firebase._rememberedContext = null;
firebase._googleSignInIdToken = null;
firebase._facebookAccessToken = null;

var fbCallbackManager = null;
var GOOGLE_SIGNIN_INTENT_ID = 123;

(function() {
  if (typeof(com.google.firebase.messaging) === "undefined") {
    return;
  }
  appModule.on("launch", function(args) {

    var intent = args.android;

    var extras = intent.getExtras();
    if (extras !== null) {
      var result = {
        foreground: false
      };

      var iterator = extras.keySet().iterator();
      while (iterator.hasNext()) {
        var key = iterator.next();
        if (key !== "from" && key !== "collapse_key") {
          result[key] = extras.get(key);
        }
      }

      // in case this was a cold start we don't have the _receivedNotificationCallback yet
      if (firebase._receivedNotificationCallback === null) {
        firebase._launchNotification = result;
      } else {
        // add a little delay just to make sure clients alerting this message will see it as the UI needs to settle
        setTimeout(function() {
          firebase._receivedNotificationCallback(result);
        });
      }
    }
  });

})();

firebase.toHashMap = function(obj) {
  var node = new java.util.HashMap();
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (obj[property] === null) {
        node.put(property, null);
      } else {
        switch (typeof obj[property]) {
          case 'object':
            node.put(property, firebase.toHashMap(obj[property], node));
            break;
          case 'boolean':
            node.put(property, java.lang.Boolean.valueOf(String(obj[property])));
            break;
          case 'number':
            if (Number(obj[property]) === obj[property] && obj[property] % 1 === 0)
              node.put(property, java.lang.Long.valueOf(String(obj[property])));
            else
              node.put(property, java.lang.Double.valueOf(String(obj[property])));
            break;
          case 'string':
            node.put(property, String(obj[property]));
            break;
        }
      }
    }
  }
  return node;
};

firebase.toValue = function(val){
  var returnVal = null;
  if (val !== null) {
    switch (typeof val) {
      case 'object':
        returnVal = firebase.toHashMap(val);
        break;
      case 'boolean':
        returnVal = java.lang.Boolean.valueOf(String(val));
        break;
      case 'number':
        if (Number(val) === val && val % 1 === 0)
          returnVal = java.lang.Long.valueOf(String(val));
        else
          returnVal = java.lang.Double.valueOf(String(val));
        break;
      case 'string':
        returnVal = String(val);
        break;
    }
  }
  return returnVal;
};

firebase.toJsObject = function(javaObj) {
  if (javaObj === null || typeof javaObj != "object") {
    return javaObj;
  }

  var node;
  switch (javaObj.getClass().getName()) {
    case 'java.lang.Boolean':
      var str = String(javaObj);
      return Boolean(!!(str == "True" || str == "true"));
    case 'java.lang.String':
      return String(javaObj);
    case 'java.lang.Long':
    case 'java.lang.Double':
      return Number(String(javaObj));
    case 'java.util.ArrayList':
      node = [];
      for (var i = 0; i < javaObj.size(); i++) {
        node[i] = firebase.toJsObject(javaObj.get(i));
      }
      break;
    default:
      node = {};
      var iterator = javaObj.entrySet().iterator();
      while (iterator.hasNext()) {
        var item = iterator.next();
        node[item.getKey()] = firebase.toJsObject(item.getValue());
      }
  }
  return node;
};

firebase.getCallbackData = function(type, snapshot) {
  return {
    type: type,
    key: snapshot.getKey(),
    value: firebase.toJsObject(snapshot.getValue())
  };
};

firebase.authStateListener = null;

firebase.init = function (arg) {
  return new Promise(function (resolve, reject) {

    function _resolve() {
      if (firebase.instance !== null) {
        reject("You already ran init");
        return;
      }

      firebase.ServerValue = {
        TIMESTAMP: firebase.toJsObject(com.google.firebase.database.ServerValue.TIMESTAMP)
      };

      var fDatabase = com.google.firebase.database.FirebaseDatabase;
      if (arg.persist) {
        fDatabase.getInstance().setPersistenceEnabled(true);
      }
      // the URL is picked up from google-services.json, so you can use it like this:
      firebase.instance = fDatabase.getInstance().getReference();
      // it is however still possible to pass the URL programmatically (which we'll do for now):
      // firebase.instance = fDatabase.getInstance().getReferenceFromUrl(arg.url);

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

      if (arg.onAuthStateChanged) {
        firebase.authStateListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
          onAuthStateChanged: function (fbAuth) {
            var user = fbAuth.getCurrentUser();
            arg.onAuthStateChanged({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          }
        });
        firebaseAuth.addAuthStateListener(firebase.authStateListener);
      }

      // Listen to auth state changes
      if (!firebase.authStateListener) {
        firebase.authStateListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
          onAuthStateChanged: function (fbAuth) {
            var user = fbAuth.getCurrentUser();
            firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          }
        });
        firebaseAuth.addAuthStateListener(firebase.authStateListener);
      }

      // Firebase notifications (FCM)
      if (typeof(com.google.firebase.messaging) !== "undefined") {
        if (arg.onMessageReceivedCallback !== undefined) {
          firebase.addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
        }
        if (arg.onPushTokenReceivedCallback !== undefined) {
          firebase.addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
        }
      }

      // Firebase storage
      if (arg.storageBucket) {
        if (typeof(com.google.firebase.storage) === "undefined") {
          reject("Uncomment firebase-storage in the plugin's include.gradle first");
          return;
        }
        firebase.storage = com.google.firebase.storage.FirebaseStorage.getInstance().getReferenceFromUrl(arg.storageBucket);
      }

      // Facebook
      if (typeof(com.facebook) !== "undefined" && typeof(com.facebook.FacebookSdk) !== "undefined") {
        com.facebook.FacebookSdk.sdkInitialize(com.tns.NativeScriptApplication.getInstance());
        fbCallbackManager = com.facebook.CallbackManager.Factory.create();
        appModule.android.on(appModule.AndroidApplication.activityResultEvent, function(eventData){
          if (eventData.requestCode !== GOOGLE_SIGNIN_INTENT_ID) {
            fbCallbackManager.onActivityResult(eventData.requestCode, eventData.resultCode, eventData.intent);
          }
        });
      }

      resolve(firebase.instance);
    }

    try {
      if (appModule.android.foregroundActivity) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        appModule.on(appModule.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnMessageReceivedCallback = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      firebase._receivedNotificationCallback = callback;

      org.nativescript.plugins.firebase.FirebasePlugin.setOnNotificationReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: function(notification) {
              callback(JSON.parse(notification));
            }
          })
      );

      // if the app was launched from a notification, process it now
      if (firebase._launchNotification !== null) {
        callback(firebase._launchNotification);
        firebase._launchNotification = null;
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnMessageReceivedCallback: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnPushTokenReceivedCallback = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      org.nativescript.plugins.firebase.FirebasePlugin.setOnPushTokenReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: function(token) {
              callback(token);
            }
          })
      );

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
};

firebase.getRemoteConfigDefaults = function (properties) {
  var defaults = {};
  for (var p in properties) {
    var prop = properties[p];
    if (prop.default !== undefined) {
      defaults[prop.key] = prop.default;
    }
  }
  return defaults;
};

firebase._isGooglePlayServicesAvailable = function () {
  var context = com.tns.NativeScriptApplication.getInstance();
  var playServiceStatusSuccess = com.google.android.gms.common.ConnectionResult.SUCCESS; // 0
  var playServicesStatus = com.google.android.gms.common.GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context);
  return playServicesStatus === playServiceStatusSuccess;
};

firebase.analytics.logEvent = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (arg.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      var bundle = new android.os.Bundle();
      if (arg.parameters !== undefined) {
        for (var p in arg.parameters) {
          var param = arg.parameters[p];
          if (param.value !== undefined) {
            bundle.putString(param.key, param.value);
          }
        }
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).logEvent(arg.key, bundle);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.logEvent: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.setUserProperty = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (arg.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }
      if (arg.value === undefined) {
        reject("Argument 'value' is missing");
        return;
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).setUserProperty(arg.key, arg.value);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.setUserProperty: " + ex);
      reject(ex);
    }
  });
};

firebase.getRemoteConfig = function (arg) {
  return new Promise(function (resolve, reject) {

    if (typeof(com.google.firebase.remoteconfig) === "undefined") {
      reject("Uncomment firebase-config in the plugin's include.gradle first");
      return;
    }

    if (arg.properties === undefined) {
      reject("Argument 'properties' is missing");
      return;
    }

    function _resolve() {
      if (!firebase._isGooglePlayServicesAvailable()) {
        reject("Google Play services is required for this feature, but not available on this device");
        return;
      }

      // Get a Remote Config object instance
      firebaseRemoteConfig = com.google.firebase.remoteconfig.FirebaseRemoteConfig.getInstance();

      // Enable developer mode to allow for frequent refreshes of the cache
      var remoteConfigSettings = new com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder()
          .setDeveloperModeEnabled(arg.developerMode || false)
          .build();
      firebaseRemoteConfig.setConfigSettings(remoteConfigSettings);

      var defaults = firebase.getRemoteConfigDefaults(arg.properties);
      firebaseRemoteConfig.setDefaults(firebase.toHashMap(defaults));

      var returnMethod = function (throttled) {
        firebaseRemoteConfig.activateFetched();

        var lastFetchTime = firebaseRemoteConfig.getInfo().getFetchTimeMillis();
        var lastFetch = new Date(lastFetchTime);

        var result = {
          lastFetch: lastFetch,
          throttled: throttled,
          properties: {}
        };

        for (var p in arg.properties) {
          var prop = arg.properties[p];
          var key = prop.key;
          var value = firebaseRemoteConfig.getString(key);
          // we could have the user pass in the type but this seems easier to use
          result.properties[key] = firebase.strongTypeify(value);
        }

        resolve(result);
      };

      var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: function() {
          returnMethod(false);
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          if (exception == "com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException") {
            returnMethod(true);
          } else {
            reject("Retrieving remote config data failed. " + exception);
          }
        }
      });

      // default 12 hours, just like the SDK does
      var expirationDuration = arg.cacheExpirationSeconds || 43200;

      firebaseRemoteConfig.fetch(expirationDuration)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);
    }

    try {
      if (appModule.android.foregroundActivity) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        appModule.on(appModule.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in firebase.getRemoteConfig: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      var user = firebaseAuth.getCurrentUser();
      if (user !== null) {
        resolve(toLoginResult(user));
      } else {
        reject();
      }
    } catch (ex) {
      console.log("Error in firebase.getCurrentUser: " + ex);
      reject(ex);
    }
  });
};

firebase.sendEmailVerification = function () {
  return new Promise(function (resolve, reject) {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      var user = firebaseAuth.getCurrentUser();
      if (user !== null) {
        var addOnCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function(task) {
            if (!task.isSuccessful()) {
              reject((task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            } else {
              resolve();
            }
          }
        });

        user.sendEmailVerification().addOnCompleteListener(addOnCompleteListener);
      } else {
        reject("Log in first");
      }
    } catch (ex) {
      console.log("Error in firebase.sendEmailVerification: " + ex);
      reject(ex);
    }
  });
};

firebase.logout = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      com.google.firebase.auth.FirebaseAuth.getInstance().signOut();

      // also disconnect from Google otherwise ppl can't connect with a different account
      if (firebase._mGoogleApiClient) {
        com.google.android.gms.auth.api.Auth.GoogleSignInApi.revokeAccess(firebase._mGoogleApiClient);
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

firebase.getAuthToken = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      var user = firebaseAuth.getCurrentUser();
      if (user !== null) {
        var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
          onSuccess: function(getTokenResult) {
            resolve(getTokenResult.getToken());
          }
        });

        var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
          onFailure: function (exception) {
            reject(exception);
          }
        });

        user.getToken(arg.forceRefresh)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

      } else {
        reject("Log in first");
      }
    } catch (ex) {
      console.log("Error in firebase.getAuthToken: " + ex);
      reject(ex);
    }
  });
};

function toLoginResult(user) {
  if (user === null) {
    return false;
  }

  // for convenience return the result in multiple formats
  var providers = [];
  var providerData = user.getProviderData();
  for (var i = 0; i < providerData.size(); i++) {
    var pid = providerData.get(i).getProviderId();
    providers.push({
      id: pid
    });
  }

  return {
    uid: user.getUid(),
    name: user.getDisplayName(),
    email: user.getEmail(),
    emailVerified: user.isEmailVerified(),
    // provider: user.getProviderId(), // always 'firebase'
    providers: providers,
    anonymous: user.isAnonymous(),
    profileImageURL: user.getPhotoUrl() ? user.getPhotoUrl().toString() : null
  };
}

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (!firebase._isGooglePlayServicesAvailable()) {
        reject("Google Play services is required for this feature, but not available on this device");
        return;
      }

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: function (task) {
          if (firebase._rememberedContext !== null) {
            appModule.android.currentContext = firebase._rememberedContext;
            firebase._rememberedContext = null;
          }
          if (!task.isSuccessful()) {
            console.log("Logging in the user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            reject("Logging in the user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
          } else {
            var user = task.getResult().getUser();
            resolve(toLoginResult(user));
          }
        }
      });

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        firebaseAuth.signInAnonymously().addOnCompleteListener(onCompleteListener);

      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          firebaseAuth.signInWithEmailAndPassword(arg.email, arg.password).addOnCompleteListener(onCompleteListener);
        }

      } else if (arg.type === firebase.LoginType.CUSTOM) {
        if (!arg.token && !arg.tokenProviderFn) {
          reject("Auth type custom requires a token or a tokenProviderFn argument");
        } else if (arg.token) {
          firebaseAuth.signInWithCustomToken(arg.token).addOnCompleteListener(onCompleteListener);
        } else if (arg.tokenProviderFn) {
          arg.tokenProviderFn()
              .then(
                  function (token) {
                    firebaseAuth.signInWithCustomToken(token).addOnCompleteListener(onCompleteListener);
                  },
                  function (error) {
                    reject(error);
                  }
              );
        }

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (typeof(com.facebook) === "undefined") {
          reject("Facebook SDK not installed - see gradle config");
          return;
        }

        var fbLoginManager = com.facebook.login.LoginManager.getInstance();
        fbLoginManager.registerCallback(
            fbCallbackManager,
            new com.facebook.FacebookCallback({
              onSuccess: function (loginResult) {
                firebase._facebookAccessToken = loginResult.getAccessToken().getToken();
                var authCredential = com.google.firebase.auth.FacebookAuthProvider.getCredential(firebase._facebookAccessToken);

                var user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
                if (user) {
                  if (firebase._alreadyLinkedToAuthProvider(user, "facebook.com")) {
                    firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                  } else {
                    user.linkWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                  }
                } else {
                  firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                }
              },
              onCancel: function() {
                reject("Facebook Login canceled");
              },
              onError: function(ex) {
                reject("Error while trying to login with Fb "+ex);
              }
            })
        );

        var scope = ["public_profile", "email"];
        if (arg.scope) {
          scope = arg.scope;
        }
        var permissions = utils.ad.collections.stringArrayToStringSet(scope);

        var activity = appModule.android.foregroundActivity;
        firebase._rememberedContext = appModule.android.currentContext;
        fbLoginManager.logInWithReadPermissions(activity, permissions);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (typeof(com.google.android.gms.auth.api.Auth) === "undefined") {
          reject("Google Sign In not installed - see gradle config");
          return;
        }

        var clientStringId = utils.ad.resources.getStringId("default_web_client_id");
        var clientId = utils.ad.getApplicationContext().getResources().getString(clientStringId);

        // Configure Google Sign In
        var googleSignInOptions = new com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder(com.google.android.gms.auth.api.signin.GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(clientId)
            .requestEmail()
            .build();

        var onConnectionFailedListener = new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener({
          onConnectionFailed: function (connectionResult) {
            reject(connectionResult.getErrorMessage());
          }
        });

        firebase._mGoogleApiClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(com.tns.NativeScriptApplication.getInstance())
            .addOnConnectionFailedListener(onConnectionFailedListener)
            .addApi(com.google.android.gms.auth.api.Auth.GOOGLE_SIGN_IN_API, googleSignInOptions)
            .build();

        var signInIntent = com.google.android.gms.auth.api.Auth.GoogleSignInApi.getSignInIntent(firebase._mGoogleApiClient);

        firebase._rememberedContext = appModule.android.currentContext;
        appModule.android.currentContext.startActivityForResult(signInIntent, GOOGLE_SIGNIN_INTENT_ID);

        appModule.android.on(appModule.AndroidApplication.activityResultEvent, function(eventData) {
          if (eventData.requestCode === GOOGLE_SIGNIN_INTENT_ID) {
            if (firebase._rememberedContext !== null) {
              appModule.android.currentContext = firebase._rememberedContext;
              firebase._rememberedContext = null;
            }
            var googleSignInResult = com.google.android.gms.auth.api.Auth.GoogleSignInApi.getSignInResultFromIntent(eventData.intent);
            var success = googleSignInResult.isSuccess();
            if (success) {
              var googleSignInAccount = googleSignInResult.getSignInAccount();
              firebase._googleSignInIdToken = googleSignInAccount.getIdToken();
              var accessToken = null;
              var authCredential = com.google.firebase.auth.GoogleAuthProvider.getCredential(firebase._googleSignInIdToken, accessToken);

              firebase._mGoogleApiClient.connect();

              var user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
              if (user) {
                if (firebase._alreadyLinkedToAuthProvider(user, "google.com")) {
                  firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                } else {
                  user.linkWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                }
              } else {
                firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
              }
            } else {
              console.log("Make sure you've uploaded you SHA1 fingerprint(s) to the Firebase console");
              reject("Has the SHA1 fingerprint been uploaded? Sign-in status: " + googleSignInResult.getStatus());
            }
          }
        });

      } else {
        reject ("Unsupported auth type: " + arg.type);
      }
    } catch (ex) {
      console.log("Error in firebase.login: " + ex);
      reject(ex);
    }
  });
};

firebase._alreadyLinkedToAuthProvider = function (user, providerId) {
  var providerData = user.getProviderData();
  for (var i = 0; i < providerData.size(); i++) {
    var profile = providerData.get(i);
    if (profile.getProviderId() === providerId) {
      return true;
    }
  }
  return false;
};

firebase.reauthenticate = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
      if (user === null) {
        reject("no current user");
        return;
      }

      var authCredential = null;
      if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          authCredential = com.google.firebase.auth.EmailAuthProvider.getCredential(arg.email, arg.password);
        }

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (!firebase._googleSignInIdToken) {
          reject("Not currently logged in with Google");
          return;
        }
        authCredential = com.google.firebase.auth.GoogleAuthProvider.getCredential(firebase._googleSignInIdToken, null);

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (!firebase._facebookAccessToken) {
          reject("Not currently logged in with Facebook");
          return;
        }
        authCredential = com.google.firebase.auth.FacebookAuthProvider.getCredential(firebase._facebookAccessToken);
      }

      if (authCredential === null) {
        reject("arg.type should be one of LoginType.PASSWORD | LoginType.GOOGLE | LoginType.FACEBOOK");
        return;
      }

      var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: function (task) {
          if (task.isSuccessful()) {
            resolve();
          } else {
            // TODO extract error
            reject("Reathentication failed");
          }
        }
      });
      user.reauthenticate(authCredential).addOnCompleteListener(onCompleteListener);

    } catch (ex) {
      console.log("Error in firebase.reauthenticate: " + ex);
      reject(ex);
    }
  });
};

firebase.resetPassword = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            console.log("--- reset pwd: " + task);
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Sending password reset email failed");
            }
          }
        });

        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        firebaseAuth.sendPasswordResetEmail(arg.email).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.resetPassword: " + ex);
      reject(ex);
    }
  });
};

firebase.changePassword = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            console.log("--- changed pwd: " + task);
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Updating password failed");
            }
          }
        });

        var user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();

        if (user === null) {
          reject("no current user");
        } else {
          user.updatePassword(arg.newPassword).addOnCompleteListener(onCompleteListener);
        }
      }
    } catch (ex) {
      console.log("Error in firebase.changePassword: " + ex);
      reject(ex);
    }
  });
};

firebase.createUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            // see https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth#public-methods
            if (!task.isSuccessful()) {
              reject("Creating a user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            } else {
              var user = task.getResult().getUser();
              resolve({key: user.getUid()});
            }
          }
        });
        firebaseAuth.createUserWithEmailAndPassword(arg.email, arg.password).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.createUser: " + ex);
      reject(ex);
    }
  });
};

firebase.deleteUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      var user = firebaseAuth.getCurrentUser();

      if (user === null) {
        reject("no current user");
        return;
      }

      var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: function (task) {
          if (!task.isSuccessful()) {
            reject("Deleting a user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
          } else {
            resolve();
          }
        }
      });

      user.delete().addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      console.log("Error in firebase.deleteUser: " + ex);
      reject(ex);
    }
  });
};

firebase.updateProfile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (!arg.displayName && !arg.photoURL) {
        reject("Updating a profile requires a displayName and / or a photoURL argument");
      } else {
        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        var user = firebaseAuth.getCurrentUser();

        if (user === null) {
          reject("No current user");
          return;
        }

        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            if (task.isSuccessful()) {
              resolve();
            } else {
              reject("Updating a profile failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            }
          }
        });

        var profileUpdateBuilder = new com.google.firebase.auth.UserProfileChangeRequest.Builder();

        if (arg.displayName)
          profileUpdateBuilder.setDisplayName(arg.displayName)

        if (arg.photoURL)
          profileUpdateBuilder.setPhotoUri(android.net.Uri.parse(arg.photoURL))

        var profileUpdate = profileUpdateBuilder.build();

        user.updateProfile(profileUpdate).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.updateProfile: " + ex);
      reject(ex);
    }
  });
};

firebase.keepInSync = function (path, switchOn) {
  return new Promise(function (resolve, reject) {
    try {
      var where = firebase.instance.child(path);
      where.keepSynced(switchOn);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.keepInSync: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = function(to, updateCallback) {
  var listener = new com.google.firebase.database.ChildEventListener({
    onChildAdded: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
    },
    onChildRemoved: function (snapshot) {
      updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
    },
    onChildChanged: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
    },
    onChildMoved: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
    }
  });
  to.addChildEventListener(listener);
  return listener;
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      resolve({
        path: path,
        listeners: [firebase._addObservers(firebase.instance.child(path), updateCallback)]
      });
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.addValueEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var listener = new com.google.firebase.database.ValueEventListener({
        onDataChange: function (snapshot) {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
        },
        onCancelled: function (databaseError) {
          updateCallback({
            error: databaseError.getMessage()
          });
        }
      });
      firebase.instance.child(path).addValueEventListener(listener);
      resolve({
        path: path,
        listeners: [listener]
      });
    } catch (ex) {
      console.log("Error in firebase.addValueEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListeners = function (listeners, path) {
  return new Promise(function (resolve, reject) {
    try {
      var ref = firebase.instance.child(path);
      for (var i=0; i < listeners.length; i++) {
        var listener = listeners[i];
        console.log("Removing listener at path " + path + ": " + listener);
        ref.removeEventListener(listener);
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.removeEventListeners: " + ex);
      reject(ex);
    }
  });
};

firebase.push = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      var pushInstance = firebase.instance.child(path).push();
      pushInstance.setValue(firebase.toValue(val));
      resolve({
        key: pushInstance.getKey()
      });
    } catch (ex) {
      console.log("Error in firebase.push: " + ex);
      reject(ex);
    }
  });
};

firebase.setValue = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      firebase.instance.child(path).setValue(firebase.toValue(val));
      resolve();
    } catch (ex) {
      console.log("Error in firebase.setValue: " + ex);
      reject(ex);
    }
  });
};

firebase.update = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      firebase.instance.child(path).updateChildren(firebase.toHashMap(val));
      resolve();
    } catch (ex) {
      console.log("Error in firebase.update: " + ex);
      reject(ex);
    }
  });
};

firebase.query = function (updateCallback, path, options) {
  return new Promise(function (resolve, reject) {
    try {
      var query;

      // orderBy
      if (options.orderBy.type === firebase.QueryOrderByType.KEY) {
        query = firebase.instance.child(path).orderByKey();
      } else if (options.orderBy.type === firebase.QueryOrderByType.VALUE) {
        query = firebase.instance.child(path).orderByValue();
      } else if (options.orderBy.type === firebase.QueryOrderByType.PRIORITY) {
        query = firebase.instance.child(path).orderByPriority();
      } else if (options.orderBy.type === firebase.QueryOrderByType.CHILD) {
        if (!options.orderBy.value) {
          reject("When orderBy.type is 'child' you must set orderBy.value as well.");
          return;
        }
        query = firebase.instance.child(path).orderByChild(options.orderBy.value);
      } else {
        reject("Invalid orderBy.type, use constants like firebase.QueryOrderByType.VALUE");
        return;
      }

      // range
      if (options.range && options.range.type) {
        if (!options.range.value) {
          reject("Please set range.value");
          return;
        }
        if (options.range.type === firebase.QueryRangeType.START_AT) {
          query = query.startAt(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.END_AT) {
          query = query.endAt(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.EQUAL_TO) {
          query = query.equalTo(options.range.value);
        } else {
          reject("Invalid range.type, use constants like firebase.QueryRangeType.START_AT");
          return;
        }
      }

      // ranges
      if (options.ranges) {
        for (var i=0; i < options.ranges.length; i++) {
          var range = options.ranges[i];
          if (!range.value) {
            reject("Please set ranges["+i+"].value");
            return;
          }
          if (range.type === firebase.QueryRangeType.START_AT) {
            query = query.startAt(range.value);
          } else if (range.type === firebase.QueryRangeType.END_AT) {
            query = query.endAt(range.value);
          } else if (range.type === firebase.QueryRangeType.EQUAL_TO) {
            query = query.equalTo(range.value);
          } else {
            reject("Invalid ranges["+i+"].type, use constants like firebase.QueryRangeType.START_AT");
            return;
          }
        }
      }

      // limit
      if (options.limit && options.limit.type) {
        if (!options.limit.value) {
          reject("Please set limit.value");
          return;
        }
        if (options.limit.type === firebase.QueryLimitType.FIRST) {
          query = query.limitToFirst(options.limit.value);
        } else if (options.limit.type === firebase.QueryLimitType.LAST) {
          query = query.limitToLast(options.limit.value);
        } else {
          reject("Invalid limit.type, use constants like firebase.QueryLimitType.FIRST");
          return;
        }
      }

      if (options.singleEvent) {
        var listener = new com.google.firebase.database.ValueEventListener({
          onDataChange: function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
            // resolve promise with data in case of single event, see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/126
            resolve(firebase.getCallbackData('ValueChanged', snapshot));
          },
          onCancelled: function (databaseError) {
            updateCallback({
              error: databaseError.getMessage()
            });
            // see comment at 'onDataChange'
            resolve({
              error: databaseError.getMessage()
            });
          }
        });
        query.addListenerForSingleValueEvent(listener);
      } else {
        resolve({
          path: path,
          listeners: [firebase._addObservers(query, updateCallback)]
        });
      }
    } catch (ex) {
      console.log("Error in firebase.query: " + ex);
      reject(ex);
    }
  });
};

firebase.remove = function (path) {
  return new Promise(function (resolve, reject) {
    try {
      firebase.instance.child(path).setValue(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

function getStorageRef(reject, arg) {
  if (typeof(com.google.firebase.storage) === "undefined") {
    reject("Uncomment firebase-storage in the plugin's include.gradle first");
    return;
  }

  if (!arg.remoteFullPath) {
    reject("remoteFullPath is mandatory");
    return;
  }

  var storageRef = firebase.storage;

  if (arg.bucket) {
    storageRef = com.google.firebase.storage.FirebaseStorage.getInstance().getReferenceFromUrl(arg.bucket);
  }

  return storageRef;
}

firebase.uploadFile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var storageReference = storageRef.child(arg.remoteFullPath);

      var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: function(uploadTaskSnapshot) {
          var metadata = uploadTaskSnapshot.getMetadata();
          resolve({
            name: metadata.getName(),
            contentType: metadata.getContentType(),
            created: new Date(metadata.getCreationTimeMillis()),
            updated: new Date(metadata.getUpdatedTimeMillis()),
            bucket: metadata.getBucket(),
            size: metadata.getSizeBytes(),
            url: metadata.getDownloadUrl().toString()
          });
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          console.log("--- upload failed");
          reject("Upload failed. " + exception);
        }
      });

      var onProgressListener = new com.google.firebase.storage.OnProgressListener({
        onProgress: function (snapshot) {
          if (typeof(arg.onProgress) === "function") {
            var fractionCompleted = snapshot.getBytesTransferred() / snapshot.getTotalByteCount();
            arg.onProgress({
              fractionCompleted: fractionCompleted,
              percentageCompleted: Math.round(fractionCompleted * 100)
            });
          }
        }
      });

      if (arg.localFile) {
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        // using 'putFile' (not 'putBytes') so Firebase can infer the mimetype
        var localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFile.path));
        var uploadFileTask = storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);

        /*
        var error;
        var contents = arg.localFile.readSync(function(e) { error = e; });

        if (error) {
          reject("Error reading file " + arg.localFile + ": " + error);
          return;
        }

        var uploadDataTask = storageReference.putBytes(contents)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);
        */

      } else if (arg.localFullPath) {

        if (!fs.File.exists(arg.localFullPath)) {
          reject("File does not exist: " + arg.localFullPath);
          return;
        }

        var localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFullPath));
        var uploadFileTask = storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);

      } else {
        reject("One of localFile or localFullPath is required");
      }

    } catch (ex) {
      console.log("Error in firebase.uploadFile: " + ex);
      reject(ex);
    }
  });
};

firebase.downloadFile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var storageReference = storageRef.child(arg.remoteFullPath);

      var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: function(downloadTaskSnapshot) {
          resolve();
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          reject("Download failed. " + exception);
        }
      });

      var localFilePath;

      if (arg.localFile) {
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }
        localFilePath = arg.localFile.path;

      } else if (arg.localFullPath) {
        localFilePath = arg.localFullPath;

      } else {
        reject("One of localFile or localFullPath is required");
        return;
      }

      var file = new java.io.File(localFilePath);

      storageReference.getFile(file)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.downloadFile: " + ex);
      reject(ex);
    }
  });
};

firebase.getDownloadUrl = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var storageReference = storageRef.child(arg.remoteFullPath);

      var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: function(uri) {
          resolve(uri.toString());
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          reject(exception.getMessage());
        }
      });

      storageReference.getDownloadUrl()
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.getDownloadUrl: " + ex);
      reject(ex);
    }
  });
};

firebase.deleteFile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var storageReference = storageRef.child(arg.remoteFullPath);

      var onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: function() {
          resolve();
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          reject(exception.getMessage());
        }
      });

      storageReference.delete()
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.deleteFile: " + ex);
      reject(ex);
    }
  });
};

/*
firebase.sendCrashLog = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      if (typeof(com.google.firebase.crash) === "undefined") {
        reject("Make sure firebase-crash is in the plugin's include.gradle");
        return;
      }

      if (!arg.log) {
        reject("The mandatory 'log' argument is missing");
        return;
      }

      com.google.firebase.crash.FirebaseCrash.log(arg.log);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.sendCrashLog: " + ex);
      reject(ex);
    }
  });
};
*/

module.exports = firebase;