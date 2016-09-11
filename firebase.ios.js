var firebase = require("./firebase-common");
var fs = require("file-system");
var application = require("application");
var types = require("utils/types");
var frame = require("ui/frame");

firebase._messagingConnected = null;
firebase._pendingNotifications = [];
firebase._receivedPushTokenCallback = null;

firebase._addObserver = function (eventName, callback) {
  return NSNotificationCenter.defaultCenter().addObserverForNameObjectQueueUsingBlock(eventName, null, NSOperationQueue.mainQueue(), callback);
};

firebase.addAppDelegateMethods = function(appDelegate) {

  // we need the launchOptions for this one so it's a bit hard to use the UIApplicationDidFinishLaunchingNotification pattern we're using for other things
  appDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
    // Firebase Facebook authentication
    if (typeof(FBSDKApplicationDelegate) !== "undefined") {
      FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
    }
    return true;
  };

  // there's no notification event to hook into for this one, so using the appDelegate
  appDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = function (application, url, sourceApplication, annotation) {
    var result = false;
    if (typeof(FBSDKApplicationDelegate) !== "undefined") {
      result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
    }
    // for iOS <= 8
    if (typeof(GIDSignIn) !== "undefined") {
      result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
    }
    return result;
  };

  if (typeof(GIDSignIn) !== "undefined") {
    appDelegate.prototype.applicationOpenURLOptions = function (application, url, options) {
      var result = false;
      if (typeof(FBSDKApplicationDelegate) !== "undefined") {
        result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(
          application,
          url,
          options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
          options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      }
      // for iOS >= 9
      result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(
          url,
          options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
          options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      return result;
    };

    // Untested, so commented out
    /*
    appDelegate.prototype.signDidDisconnectWithUserWithError = function (signIn, user, error) {
      if (error === null) {
        console.log("--- OK in signDidDisconnectWithUserWithError");
      } else {
        console.log("--- error in signDidDisconnectWithUserWithError: " + error.localizedDescription);
      }
    };
    */
  }

  // making this conditional to avoid http://stackoverflow.com/questions/37428539/firebase-causes-issue-missing-push-notification-entitlement-after-delivery-to ?
  if (typeof(FIRMessaging) !== "undefined") {
    appDelegate.prototype.applicationDidRegisterForRemoteNotificationsWithDeviceToken = function (application, devToken) {
      // TODO guard with _messagingConnected ?
      FIRInstanceID.instanceID().setAPNSTokenType(devToken, FIRInstanceIDAPNSTokenTypeUnknown);
      FIRMessaging.messaging().connectWithCompletion(function(error) {
        if (!error) {
          firebase._messagingConnected = true;
        }
      });
    };

    appDelegate.prototype.applicationDidReceiveRemoteNotificationFetchCompletionHandler = function (application, userInfo, completionHandler) {
      completionHandler(UIBackgroundFetchResultNewData);
      var userInfoJSON = firebase.toJsObject(userInfo);

      if (application.applicationState === UIApplicationState.UIApplicationStateActive) {
        if (firebase._receivedNotificationCallback !== null) {
          userInfoJSON.foreground = true;
          firebase._receivedNotificationCallback(userInfoJSON);
        } else {
          userInfoJSON.foreground = false;
          firebase._pendingNotifications.push(userInfoJSON);
        }
      } else {
        userInfoJSON.foreground = false;
        firebase._pendingNotifications.push(userInfoJSON);
      }
    };
  }
};

firebase.addOnMessageReceivedCallback = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }

      firebase._receivedNotificationCallback = callback;
      firebase._processPendingNotifications();
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
      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }

      firebase._receivedPushTokenCallback = callback;
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
};

firebase._processPendingNotifications = function() {
  if (firebase._receivedNotificationCallback !== null) {
    for (var p in firebase._pendingNotifications) {
      var userInfoJSON = firebase._pendingNotifications[p];
      console.log("Received a push notification with title: " + userInfoJSON.aps.alert.title);
      // move the most relevant properties so it's according to the TS definition and aligned with Android
      userInfoJSON.title = userInfoJSON.aps.alert.title;
      userInfoJSON.body = userInfoJSON.aps.alert.body;
      userInfoJSON.badge = userInfoJSON.aps.badge;
      firebase._receivedNotificationCallback(userInfoJSON);
    }
    firebase._pendingNotifications = [];
    UIApplication.sharedApplication().applicationIconBadgeNumber = 0;
  }
};

firebase._onTokenRefreshNotification = function (notification) {
  var token = FIRInstanceID.instanceID().token();
  if (token === null) {
    return;
  }

  console.log("Firebase FCM token received: " + token);

  if (firebase._receivedPushTokenCallback) {
    firebase._receivedPushTokenCallback(token);
  }

  FIRMessaging.messaging().connectWithCompletion(function(error) {
    if (error) {
      // this is not fatal and it scares the hell out of ppl so not logging it
      // console.log("Firebase was unable to connect to FCM. Error: " + error);
    } else {
      firebase._messagingConnected = true;
    }
  });
};

// rather than hijacking the appDelegate for these we'll be a good citizen and listen to the notifications
(function () {

  if (typeof(FIRMessaging) !== "undefined") {

    firebase._addObserver(kFIRInstanceIDTokenRefreshNotification, firebase._onTokenRefreshNotification);

    firebase._addObserver(UIApplicationDidFinishLaunchingNotification, function (appNotification) {
      var notificationTypes = UIUserNotificationTypeAlert | UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationActivationModeBackground;
      var notificationSettings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
      var application = appNotification.object;
      application.registerForRemoteNotifications();
      application.registerUserNotificationSettings(notificationSettings);
    });

    firebase._addObserver(UIApplicationDidFinishLaunchingNotification, function (appNotification) {
      firebase._processPendingNotifications();
    });

    firebase._addObserver(UIApplicationDidBecomeActiveNotification, function (appNotification) {
      firebase._processPendingNotifications();
    });

    firebase._addObserver(UIApplicationDidEnterBackgroundNotification, function (appNotification) {
      // Firebase notifications (FCM)
      if (firebase._messagingConnected) {
        FIRMessaging.messaging().disconnect();
      }
    });

    firebase._addObserver(UIApplicationWillEnterForegroundNotification, function (appNotification) {
      // Firebase notifications (FCM)
      if (firebase._messagingConnected !== null) {
        FIRMessaging.messaging().connectWithCompletion(function(error) {
          if (!error) {
            firebase._messagingConnected = true;
          }
        });
      }
    });
  }

  if (application.ios.delegate !== undefined) {
    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    firebase.addAppDelegateMethods(application.ios.delegate);
  } else {
    var __extends = this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };

    var appDelegate = (function (_super) {
      __extends(appDelegate, _super);
      function appDelegate() {
          _super.apply(this, arguments);
      }
      firebase.addAppDelegateMethods(appDelegate);
      appDelegate.ObjCProtocols = [UIApplicationDelegate];
      return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
  }
})();

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

      if (arg.iOSEmulatorFlush) {
        try {
          // Attempt to sign out before initializing, useful in case previous
          // project token is cached which leads to following type of error:
          // "[FirebaseDatabase] Authentication failed: invalid_token ..."
          console.log('Attempting to sign out of Firebase before init');
          FIRAuth.auth().signOut();
          console.log('Sign out of Firebase successful');
        } catch(signOutErr) {
          console.log('Sign out of Firebase error: ' + signOutErr);
        }
      }

      if (arg.onAuthStateChanged) {
        firebase.authStateListener = function(auth, user) {
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
          firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
          });
        };
        FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
      }

      // Facebook Auth
      if (typeof(FBSDKAppEvents) !== "undefined") {
        FBSDKAppEvents.activateApp();
      }

      // Firebase notifications (FCM)
      if (typeof(FIRMessaging) !== "undefined") {
        if (arg.onMessageReceivedCallback !== undefined) {
          firebase.addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
        }
        if (arg.onPushTokenReceivedCallback !== undefined) {
          firebase.addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
        }
      }

      // Firebase storage
      if (arg.storageBucket) {
        if (typeof(FIRStorage) === "undefined") {
          reject("Uncomment Storage in the plugin's Podfile first");
          return;
        }
        firebase.storage = FIRStorage.storage().referenceForURL(arg.storageBucket);
      }

      resolve(firebase.instance);
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.logEvent = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (arg.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      var dic = NSMutableDictionary.new();
      if (arg.parameters !== undefined) {
        for (var p in arg.parameters) {
          var param = arg.parameters[p];
          if (param.value !== undefined) {
            dic.setObjectForKey(param.value, param.key);
          }
        }
      }

      FIRAnalytics.logEventWithNameParameters(arg.key, dic);

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

      FIRAnalytics.setUserPropertyStringForName(arg.value, arg.key);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.setUserProperty: " + ex);
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
      if (user) {
        resolve({
          uid: user.uid,
          // anonymous: user.anonymous,
          // provider: user.providerID,
          profileImageURL: user.photoURL ? user.photoURL.absoluteString : null,
          email: user.email,
          emailVerified: user.emailVerified,
          name: user.displayName,
          refreshToken: user.refreshToken
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

      // also disconnect from Google otherwise ppl can't connect with a different account
      if (typeof(GIDSignIn) !== "undefined") {
        GIDSignIn.sharedInstance().disconnect();
      }

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
      profileImageURL: user.photoURL ? user.photoURL.absoluteString : null,
      email: user.email,
      emailVerified: user.emailVerified,
      name: user.displayName,
      refreshToken: user.refreshToken
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
            console.log("Facebook login error " + error);
            reject(error.localizedDescription);
          } else if (fbSDKLoginManagerLoginResult.isCancelled) {
            reject("login cancelled");
          } else {
            // headless facebook auth
            // var fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(fbSDKLoginManagerLoginResult.token.tokenString);
            var fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(FBSDKAccessToken.currentAccessToken().tokenString);
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
        var scope = ["public_profile", "email"];

        if (arg.scope) {
          scope = arg.scope;
        }

        fbSDKLoginManager.logInWithReadPermissionsFromViewControllerHandler(
            scope,
            null, // the viewcontroller param can be null since by default topmost is taken
            onFacebookCompletion);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (typeof(GIDSignIn) === "undefined") {
          reject("Google Sign In not installed - see Podfile");
          return;
        }

        var sIn = GIDSignIn.sharedInstance();
        sIn.uiDelegate = application.ios.rootController;
        sIn.clientID = FIRApp.defaultApp().options.clientID;

        var delegate = GIDSignInDelegateImpl.new().initWithCallback(function (user, error) {
          if (error === null) {
            // Get a Google ID token and Google access token from the GIDAuthentication object and exchange them for a Firebase credential
            var authentication = user.authentication;
            var fIRAuthCredential = FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(authentication.idToken, authentication.accessToken);

            // Finally, authenticate with Firebase using the credential
            if (fAuth.currentUser) {
              // link credential, note that you only want to do this if this user doesn't already use Google as an auth provider
              var onCompletionLink = function (user, error) {
                if (error) {
                  // ignore, as this one was probably already linked, so just return the user
                  fAuth.signInWithCredentialCompletion(fIRAuthCredential, onCompletion);
                } else {
                  onCompletion(user);
                }
              };
              fAuth.currentUser.linkWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

            } else {
              fAuth.signInWithCredentialCompletion(fIRAuthCredential, onCompletion);
            }

          } else {
            reject(error.localizedDescription);
          }
          delegate = undefined;
        });

        sIn.delegate = delegate;
        sIn.signIn();
      } else {
        reject ("Unsupported auth type: " + arg.type);
      }
    } catch (ex) {
      console.log("Error in firebase.login: " + ex);
      reject(ex);
    }
  });
};

var GIDSignInDelegateImpl = (function (_super) {
  __extends(GIDSignInDelegateImpl, _super);
  function GIDSignInDelegateImpl() {
    _super.apply(this, arguments);
  }

  GIDSignInDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  GIDSignInDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };
  GIDSignInDelegateImpl.prototype.signInDidSignInForUserWithError = function (signIn, user, error) {
    this._callback(user, error);
  };
  if (typeof(GIDSignInDelegate) !== "undefined") {
    GIDSignInDelegateImpl.ObjCProtocols = [GIDSignInDelegate];
  }
  return GIDSignInDelegateImpl;
})(NSObject);

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
  var listeners = [];
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildAdded, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildRemoved, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildChanged, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.FIRDataEventTypeChildMoved, function (snapshot) {
    updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
  }));
  return listeners;
};

firebase.keepInSync = function (path, switchOn) {
  return new Promise(function (resolve, reject) {
    try {
      var where = firebase.instance.childByAppendingPath(path);
      where.keepSynced(switchOn);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.keepInSync: " + ex);
      reject(ex);
    }
  });
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }
      resolve({
        path: path,
        listeners: firebase._addObservers(where, updateCallback)
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
      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }
      var listener = where.observeEventTypeWithBlockWithCancelBlock(
          FIRDataEventType.FIRDataEventTypeValue,
          function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          function (firebaseError) {
            updateCallback({
              error: firebaseError.localizedDescription
            });
          });
      resolve({
        path: path,
        listeners: [listener]
      });
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListeners = function (listeners, path) {
  return new Promise(function (resolve, reject) {
    try {
      var where = firebase.instance;
      if (path !== undefined) {
        where = firebase.instance.childByAppendingPath(path);
      }
      for (var i=0; i < listeners.length; i++) {
        var listener = listeners[i];
        console.log("Removing listener at path " + path + ": " + listener);
        where.removeObserverWithHandle(listener);
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
          query = query.queryEndingAtValue(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.EQUAL_TO) {
          query = query.queryEqualToValue(options.range.value);
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
            query = query.queryStartingAtValue(range.value);
          } else if (range.type === firebase.QueryRangeType.END_AT) {
            query = query.queryEndingAtValue(range.value);
          } else if (range.type === firebase.QueryRangeType.EQUAL_TO) {
            query = query.queryEqualToValue(range.value);
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
          query = query.queryLimitedToFirst(options.limit.value);
        } else if (options.limit.type === firebase.QueryLimitType.LAST) {
          query = query.queryLimitedToLast(options.limit.value);
        } else {
          reject("Invalid limit.type, use constants like firebase.queryOptions.limitType.FIRST");
          return;
        }
      }

      if (options.singleEvent) {
        query.observeSingleEventOfTypeWithBlock(FIRDataEventType.FIRDataEventTypeValue, function (snapshot) {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          // resolve promise with data in case of single event, see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/126
          resolve(firebase.getCallbackData('ValueChanged', snapshot));
        });
      } else {
        resolve({
          path: path,
          listeners: firebase._addObservers(query, updateCallback)
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
      firebase.instance.childByAppendingPath(path).setValue(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

function getStorageRef(reject, arg) {
  if (typeof(FIRStorage) === "undefined") {
    reject("Uncomment Storage in the plugin's Podfile first");
    return;
  }

  if (!arg.remoteFullPath) {
    reject("remoteFullPath is mandatory");
    return;
  }

  var storageRef = firebase.storage;

  if (arg.bucket) {
    storageRef = FIRStorage.storage().referenceForURL(arg.bucket);
  }

  return storageRef;
}

firebase.uploadFile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var onCompletion = function(metadata, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            name: metadata.name,
            url: metadata.downloadURL.absoluteString,
            contentType: metadata.contentType,
            created: metadata.timeCreated,
            updated: metadata.updated,
            bucket: metadata.bucket,
            size: metadata.size
          });
        }
      };

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var fIRStorageReference = storageRef.child(arg.remoteFullPath);
      var fIRStorageUploadTask = null;

      if (arg.localFile) {
        if (typeof(arg.localFile) != "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        var error;
        var contents = arg.localFile.readSync(function(e) { error = e; });

        if (error) {
          alert("Error reading file " + arg.localFile + ": " + error);
          return;
        }

        fIRStorageUploadTask = fIRStorageReference.putDataMetadataCompletion(contents, null, onCompletion);

      } else if (arg.localFullPath) {
        var localFileUrl = NSURL.fileURLWithPath(arg.localFullPath);
        fIRStorageUploadTask = fIRStorageReference.putFileMetadataCompletion(localFileUrl, null, onCompletion);

      } else {
        reject("One of localFile or localFullPath is required");
        return;
      }

      if (fIRStorageUploadTask !== null) {
        // Add a progress observer to an upload task
        var fIRStorageHandle = fIRStorageUploadTask.observeStatusHandler(FIRStorageTaskStatusProgress, function(snapshot) {
          if (!snapshot.error && typeof(arg.onProgress) === "function") {
            arg.onProgress({
              fractionCompleted: snapshot.progress.fractionCompleted,
              percentageCompleted: Math.round(snapshot.progress.fractionCompleted * 100)
            });
          }
        });
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

      var onCompletion = function(url, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(url.absoluteString);
        }
      };

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var fIRStorageReference = storageRef.child(arg.remoteFullPath);

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

      // Create local filesystem URL
      var localFileUrl = NSURL.fileURLWithPath(localFilePath);

      var fIRStorageDownloadTask = fIRStorageReference.writeToFileCompletion(localFileUrl, onCompletion);

    } catch (ex) {
      console.log("Error in firebase.downloadFile: " + ex);
      reject(ex);
    }
  });
};

firebase.getDownloadUrl = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var onCompletion = function(url, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(url.absoluteString);
        }
      };

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var fIRStorageReference = storageRef.child(arg.remoteFullPath);

      fIRStorageReference.downloadURLWithCompletion(onCompletion);

    } catch (ex) {
      console.log("Error in firebase.getDownloadUrl: " + ex);
      reject(ex);
    }
  });
};

firebase.deleteFile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      var onCompletion = function(error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      var storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      var fIRStorageFileRef = storageRef.child(arg.remoteFullPath);

      fIRStorageFileRef.deleteWithCompletion(onCompletion);

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

      if (typeof(FIRCrashLog) === "undefined") {
        reject("Make sure 'Firebase/Crash' is in the plugin's Podfile");
        return;
      }

      if (!arg.log) {
        reject("The mandatory 'log' argument is missing");
        return;
      }

      if (showInConsole) {
        FIRCrashNSLog(arg.log);
      } else {
        FIRCrashLog(arg.log);
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.sendCrashLog: " + ex);
      reject(ex);
    }
  });
};
*/

module.exports = firebase;