var firebase = require("./firebase-common");
var types = require("utils/types");
var frame = require("ui/frame");

firebase.toJsObject = function(objCObj) {
  if (objCObj === null || typeof objCObj != "object") {
    return objCObj;
  }
  var node, key, i, l,
      oKeyArr = objCObj.allKeys;

  if (oKeyArr === undefined) {
    // array
    node = [];
    for (i = 0, l = objCObj.count; i < l; i++) {
      key = objCObj.objectAtIndex(i);
      node.push(firebase.toJsObject(key));
    }
  } else {
    // object
    node = {};
    for (i = 0, l = oKeyArr.count; i < l; i++) {
      key = oKeyArr.objectAtIndex(i);
      var val = objCObj.valueForKey(key);

      switch (types.getClass(val)) {
        case 'NSMutableArray':
          node[key] = firebase.toJsObject(val);
          break;
        case 'NSMutableDictionary':
          node[key] = firebase.toJsObject(val);
          break;
        case 'String':
          node[key] = String(val);
          break;
        case 'Boolean':
          node[key] = val;
          break;
        case 'Number':
          node[key] = Number(String(val));
          break;
      }
    }
  }
  return node;
};

firebase.getCallbackData = function(type, snapshot) {
  return {
    type: type,
    key: snapshot.key,
    value: firebase.toJsObject(snapshot.value)
  };
};

firebase.authStateListener = null;

firebase.init = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (firebase.instance !== null) {
        // if we would run 'FIRApp.configure()' again the app would crash, so: 
        reject("You already ran init");
        return;
      }

      // this requires you to download GoogleService-Info.plist and
      // it to app/App_Resources/iOS/, see https://firebase.google.com/support/guides/firebase-ios
      FIRApp.configure();

      if (arg.persist) {
        FIRDatabase.database().persistenceEnabled = true;
      }
      
      firebase.instance = FIRDatabase.database().reference();

      if (arg.onAuthStateChanged) {
        firebase.authStateListener = function(auth, user) {
          console.log("--------- auth change 1, user: " + user);
          arg.onAuthStateChanged({
              loggedIn: user !== null,
              user: toLoginResult(user)
          });
        };
        FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
      }

      // Listen to auth state changes
      if (!firebase.authStateListener) {
        firebase.authStateListener = function(auth, user) {
          console.log("--------- auth change 2, user: " + user);
          firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
        };
        FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
      }

      // TODO can we move the stuff from app.js to here?
      if (typeof(FBSDKAppEvents) !== "undefined") {
        FBSDKAppEvents.activateApp();
      }

      resolve(firebase.instance);
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.getRemoteConfig = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRRemoteConfig) === "undefined") {
        reject("Uncomment RemoteConfig in the plugin's Podfile first");
        return;
      }

      if (arg.properties === undefined) {
        reject("Argument 'properties' is missing");
        return;
      }

      // Get a Remote Config object instance
      firebaseRemoteConfig = FIRRemoteConfig.remoteConfig();

      // Enable developer mode to allow for frequent refreshes of the cache
      var remoteConfigSettings = FIRRemoteConfigSettings.new();
      remoteConfigSettings.developerModeEnabled = arg.developerMode || false;
      firebaseRemoteConfig.configSettings = remoteConfigSettings;

      var dic = NSMutableDictionary.new();
      for (var p in arg.properties) {
        var prop = arg.properties[p];
        var key = prop.key;
        if (prop.default !== undefined) {
          dic.setObjectForKey(prop.default, prop.key);
        }
      }
      firebaseRemoteConfig.setDefaults(dic);

      var onCompletion = function(remoteConfigFetchStatus, error) {

        if (remoteConfigFetchStatus == FIRRemoteConfigFetchStatusSuccess ||
            remoteConfigFetchStatus == FIRRemoteConfigFetchStatusThrottled) {
          
          var activated = firebaseRemoteConfig.activateFetched();

          var result = {
            lastFetch: firebaseRemoteConfig.lastFetchTime,
            throttled: remoteConfigFetchStatus == FIRRemoteConfigFetchStatusThrottled,
            properties: {}
          };

          for (var p in arg.properties) {
            var prop = arg.properties[p];
            var key = prop.key;
            var value = firebaseRemoteConfig.configValueForKey(key).stringValue;
            // we could have the user pass in the type but this seems easier to use
            result.properties[key] = firebase.strongTypeify(value);
          }
          resolve(result);

        } else {
          reject(error.localizedDescription);
        }
      };

      // default 12 hours, just like the SDK does
      var expirationDuration = arg.cacheExpirationSeconds || 43200;

      firebaseRemoteConfig.fetchWithExpirationDurationCompletionHandler(expirationDuration, onCompletion);
    } catch (ex) {
      console.log("Error in firebase.getRemoteConfig: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      var user = fAuth.currentUser;
      console.log("getCurrentUser: " + user);
      if (user) {
        resolve({
          uid: user.uid,
          // anonymous: user.anonymous,
          // provider: user.providerID,
          profileImageURL: user.photoURL ? user.photoURL.absoluteURL : null,
          email: user.email,
          emailVerified: user.emailVerified,
          name: user.displayName,
          refreshToken: user.refreshToken,
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
      FIRAuth.auth().signOut(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

function toLoginResult(user) {
  return user && {
      uid: user.uid,
      // anonymous: user.anonymous,
      // provider: user.providerID,
      profileImageURL: user.photoURL ? user.photoURL.absoluteURL : null,
      email: user.email,
      emailVerified: user.emailVerified,
      name: user.displayName,
      refreshToken: user.refreshToken,
    };
}

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var onCompletion = function(user, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(toLoginResult(user));

          firebase.notifyAuthStateListeners({
            loggedIn: true,
            user: user
          });
        }
      };

      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        fAuth.signInAnonymouslyWithCompletion(onCompletion);
      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          fAuth.signInWithEmailPasswordCompletion(arg.email, arg.password, onCompletion);
        }
      } else if (arg.type === firebase.LoginType.CUSTOM) {
        if (!arg.token && !arg.tokenProviderFn) {
          reject("Auth type custom requires a token or a tokenProviderFn argument");
        } else if (arg.token) {
          fAuth.signInWithCustomToken(arg.token, onCompletion);
        }  else if (arg.tokenProviderFn) {
          arg.tokenProviderFn()
            .then(
              function (token) {
                firebaseAuth.signInWithCustomToken(arg.token, onCompletion);
              },
              function (error) {
                reject(error);
              }
            );
        }

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (typeof(FBSDKLoginManager) === "undefined") {
          reject("Facebook SDK not installed - see Podfile");
          return;
        }
        
        var onFacebookCompletion = function(fbSDKLoginManagerLoginResult, error) {
          if (error) {
            console.log("FB login error " + error);
            reject(error.localizedDescription);
          } else if (fbSDKLoginManagerLoginResult.isCancelled) {
            reject("login cancelled");
          } else {
            console.log("fAuth.currentUser 2: " + fAuth.currentUser);

            // headless facebook auth
            // var fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(fbSDKLoginManagerLoginResult.token.tokenString);
            var fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(FBSDKAccessToken.currentAccessToken().tokenString);
            console.log("fIRAuthCredential: " + fIRAuthCredential);

            console.log("fAuth.currentUser 3: " + fAuth.currentUser);
            if (fAuth.currentUser) {
              // link credential, note that you only want to do this if this user doesn't already use fb as an auth provider
              var onCompletionLink = function (user, error) {
                if (error) {
                  // ignore, as this one was probably already linked, so just return the user
                  log("--- linking error: " + error.localizedDescription);
                  fAuth.signInWithCredentialCompletion(fIRAuthCredential, onCompletion);
                } else {
                  onCompletion(user);
                }
              };
              fAuth.currentUser.linkWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

            } else {
              fAuth.signInWithCredentialCompletion(fIRAuthCredential, onCompletion);
            }
          }
        };

        // this requires you to set the appid and customurlscheme in app_resources/.plist
        var fbSDKLoginManager = FBSDKLoginManager.new();
        //fbSDKLoginManager.loginBehavior = FBSDKLoginBehavior.Web;

        fbSDKLoginManager.logInWithReadPermissionsFromViewControllerHandler(
            ["public_profile", "email"], // TODO allow user to pass this in
            null, // the viewcontroller param can be null since by default topmost is taken
            onFacebookCompletion);

      } else {
        reject ("Unsupported auth type: " + arg.type);
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
      var onCompletion = function(error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        FIRAuth.auth().sendPasswordResetWithEmailCompletion(arg.email, onCompletion);
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
      var onCompletion = function(error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        var user = FIRAuth.auth().currentUser;
        if (user === null) {
          reject("no current user");
        } else {
          user.updatePasswordCompletion(arg.newPassword, onCompletion);
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
      var onCompletion = function(user, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            key: user.uid // firebase.toJsObject(authData).uid
          });
        }
      };

      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        // instance.createUserPasswordWithValueCompletionBlock(arg.email, arg.password, onCompletion);
        FIRAuth.auth().createUserWithEmailPasswordCompletion(arg.email, arg.password, onCompletion);
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
      var user = FIRAuth.auth().currentUser;
      if (user === null) {
        reject("no current user");
        return;
      }

      var onCompletion = function(user, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      user.deleteWithCompletion(onCompletion);
    } catch (ex) {
      console.log("Error in firebase.deleteUser: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = function(to, updateCallback) {
  to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildAdded, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
  });
  to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildRemoved, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
  });
  to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildChanged, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
  });
  to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildMoved, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
  });
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }
      firebase._addObservers(where, updateCallback);
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
      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }
      where.observeEventTypeWithBlockWithCancelBlock(
          FIRDataEventType.FIRDataEventTypeValue,
          function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          function (firebaseError) {
            updateCallback({
              error: firebaseError.localizedDescription
            });
          });
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.push = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      var ref = firebase.instance.childByAppendingPath(path).childByAutoId();
      ref.setValue(val);
      resolve({
        key: ref.key
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
      firebase.instance.childByAppendingPath(path).setValue(val);
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
      firebase.instance.childByAppendingPath(path).updateChildValues(val);
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

      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }

      var query;
      
      // orderBy
      if (options.orderBy.type === firebase.QueryOrderByType.KEY) {
        query = where.queryOrderedByKey();
      } else if (options.orderBy.type === firebase.QueryOrderByType.VALUE) {
        query = where.queryOrderedByValue();
      } else if (options.orderBy.type === firebase.QueryOrderByType.PRIORITY) {
        query = where.queryOrderedByPriority();
      } else if (options.orderBy.type === firebase.QueryOrderByType.CHILD) {
        if (!options.orderBy.value) {
          reject("When orderBy.type is 'child' you must set orderBy.value as well.");
          return;
        }
        query = where.queryOrderedByChild(options.orderBy.value);
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
          query = query.queryStartingAtValue(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.END_AT) {
          console.log("----- ending at: " + options.range.value);
          query = query.queryEndingAtValue(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.EQUAL_TO) {
          query = query.queryEqualToValue(options.range.value);
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
          query = query.queryLimitedToFirst(options.limit.value);
        } else if (options.limit.type === firebase.QueryLimitType.LAST) {
          console.log("---- LAST");
          query = query.queryLimitedToLast(options.limit.value);
        } else {
          reject("Invalid limit.type, use constants like firebase.queryOptions.limitType.FIRST");
          return;
        }
      }

      if (options.singleEvent) {
        query.observeSingleEventOfTypeWithBlock(FIRDataEventType.FIRDataEventTypeValue, function (snapshot) {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
        });
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
      firebase.instance.childByAppendingPath(path).setValue(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

module.exports = firebase;