var appModule = require("application");
var utils = require("utils/utils");
var fs = require("file-system");
var firebase = require("./firebase-common");

firebase._launchNotification = null;

var fbCallbackManager =  null;

(function() {
  if (typeof(com.google.firebase.messaging) === "undefined") {
    return;
  }
  appModule.onLaunch = function(intent) {
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
  };

})();

firebase.toHashMap = function(obj) {
  var node = new java.util.HashMap();
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (obj[property] !== null) {
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

firebase.toJsObject = function(javaObj) {
  if (javaObj === null || typeof javaObj != "object") {
    return javaObj;
  }

  var node;
  switch (javaObj.getClass().getName()) {
    case 'java.lang.Boolean':
      return Boolean(String(javaObj));
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
        switch (item.getClass().getName()) {
          case 'java.util.HashMap$HashMapEntry':
            node[item.getKey()] = firebase.toJsObject(item.getValue());
            break;
          case 'java.lang.String':
            node[item.getKey()] = String(item.getValue());
            break;
          case 'java.lang.Boolean':
            node[item.getKey()] = Boolean(String(item.getValue()));
            break;
          case 'java.lang.Long':
          case 'java.lang.Double':
            node[item.getKey()] = Number(String(item.getValue()));
            break;
          default:
            node[item.getKey()] = item.getValue();
        }
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
    try {
      if (firebase.instance !== null) {
        reject("You already ran init");
        return;
      }

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
      if (typeof(com.facebook) !== "undefined") {
        com.facebook.FacebookSdk.sdkInitialize(appModule.android.context);
        fbCallbackManager = com.facebook.CallbackManager.Factory.create();
        appModule.android.on("activityResult",function(eventData){
          fbCallbackManager.onActivityResult(eventData.requestCode, eventData.resultCode, eventData.intent);
        });
      }

      resolve(firebase.instance);
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
  var context = appModule.android.context;
  var playServiceStatusSuccess = com.google.android.gms.common.ConnectionResult.SUCCESS; // 0
  var playServicesStatus = com.google.android.gms.common.GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context);
  return playServicesStatus === playServiceStatusSuccess;
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
      console.log("getCurrentUser: " + user);
      if (user !== null) {
        resolve({
          uid: user.getUid(),
          name: user.getDisplayName(),
          email: user.getEmail(),
          profileImageURL: user.getPhotoUrl() ? user.getPhotoUrl().toString() : null
        });
      } else {
        reject();
      }
    } catch (ex) {
      console.log("Error in firebase.getCurrentUser: " + ex);
      reject(ex);
    }
  });
};

firebase.logout = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      com.google.firebase.auth.FirebaseAuth.getInstance().signOut();
      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

function toLoginResult(user) {
  if (user === null) {
    return false;
  }
  /*
  var providerData = user.getProviderData();
  for (var i = 0; i < providerData.size(); i++) {
    var info = providerData.get(i);
    console.log("--- userInfo - provider: " + info.getProviderId());
  }
  */

  return {
    uid: user.getUid(),
    name: user.getDisplayName(),
    email: user.getEmail(),
    // expiresAtUnixEpochSeconds: authData.getExpires(),
     profileImageURL: user.getPhotoUrl() ? user.getPhotoUrl().toString() : null
    // token: user.getToken() // can be used to auth with a backend server
  };
}

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {

      function _resolve() {
        if (!firebase._isGooglePlayServicesAvailable()) {
          reject("Google Play services is required for this feature, but not available on this device");
          return;
        }

        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            if (!task.isSuccessful()) {
              reject("Logging in the user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            } else {
              var user = task.getResult().getUser();
              resolve(toLoginResult(user));
            }
          }
        });

        if (arg.type === firebase.LoginType.ANONYMOUS) {
          // var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
          // onFailure: function (throwable) {
          // reject("Anonymous login failed with message: " + throwable.getMessage());
          // }
          // });
          // firebaseAuth.signInAnonymously().addOnFailureListener(onFailureListener);
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
                      firebaseAuth.signInWithCustomToken(arg.token).addOnCompleteListener(onCompleteListener);
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
                var token = loginResult.getAccessToken().getToken();
                var authCredential = com.google.firebase.auth.FacebookAuthProvider.getCredential(token);
                firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
              },
              onCancel: function() {
                reject("Facebook Login canceled");
              },
              onError: function(ex) {
                reject("Error while trying to login with Fb "+ex);
              }
            })
          );

          var permissions = utils.ad.collections.stringArrayToStringSet(["public_profile", "email"]);
          var activity = appModule.android.foregroundActivity;
          fbLoginManager.logInWithReadPermissions(activity, permissions);

        } else {
          reject ("Unsupported auth type: " + arg.type);
        }
      }


      try {
        if (appModule.android.foregroundActivity) {
          _resolve();
        } else {
          // if this is called before application.start() wait for the event to fire
          appModule.on(appModule.launchEvent, _resolve);      
        }
      } catch (ex) {
        console.log("Error in firebase.login: " + ex);
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
              resolve(toLoginResult(user));
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
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      firebase._addObservers(firebase.instance.child(path), updateCallback);
      resolve();
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
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addValueEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListener = function (listener, path) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("Removing at path " + path + ": " + listener);
      firebase.instance.child(path).removeEventListener(listener);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.removeEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.push = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      var pushInstance = firebase.instance.child(path).push();
      pushInstance.setValue(firebase.toHashMap(val));
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
      firebase.instance.child(path).setValue(firebase.toHashMap(val));
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
          },
          onCancelled: function (databaseError) {
            updateCallback({
              error: databaseError.getMessage()
            });
          }
        });
        query.addListenerForSingleValueEvent(listener);
      } else {
        firebase._addObservers(query, updateCallback);
      }
      resolve();
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
            url: metadata.getDownloadUrl().toString(),
          });
        }
      });

      var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: function (exception) {
          console.log("--- upload failed");
          reject("Upload failed. " + exception);
        }
      });

      if (arg.localFile) {
        if (typeof(arg.localFile) != "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        var error;
        var contents = arg.localFile.readSync(function(e) { error = e; });

        if (error) {
          reject("Error reading file " + arg.localFile + ": " + error);
          return;
        }

        var uploadDataTask = storageReference.putBytes(contents)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener);

      } else if (arg.localFullPath) {

        if (!fs.File.exists(arg.localFullPath)) {
          reject("File does not exist: " + arg.localFullPath);
          return;
        }

        // TODO there's prolly a more efficient way to get the file obj.. .android perhaps?
        var localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFullPath));
        var uploadFileTask = storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener);

      } else {
        reject("One of localFile or localFullPath is required");
        return;
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
        if (typeof(arg.localFile) != "object") {
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
          resolve(uri);
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