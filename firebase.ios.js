var firebase = require("./firebase-common");
var application = require("application");
var applicationSettings = require("application-settings");
var utils = require("utils/utils");
var types = require("utils/types");
var frame = require("ui/frame");
var platform = require("platform");
var DeviceType = require("ui/enums").DeviceType;

firebase._messagingConnected = null;
firebase._pendingNotifications = [];
firebase._receivedPushTokenCallback = null;
firebase._gIDAuthentication = null;
firebase._cachedInvitation = null;
firebase._cachedDynamicLink = null;

firebase._addObserver = function (eventName, callback) {
  var queue = utils.ios.getter(NSOperationQueue, NSOperationQueue.mainQueue);
  return utils.ios.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).addObserverForNameObjectQueueUsingBlock(eventName, null, queue, callback);
};

function handleRemoteNotification(app, userInfo) {
  var userInfoJSON = firebase.toJsObject(userInfo);
  var aps = userInfo.objectForKey("aps");
  if (aps !== null) {
    var alrt = aps.objectForKey("alert");
    if (alrt !== null && alrt.objectForKey) {
      userInfoJSON.title = alrt.objectForKey("title");
      userInfoJSON.body = alrt.objectForKey("body");
    }
  }

  firebase._pendingNotifications.push(userInfoJSON);
  if (app.applicationState === UIApplicationState.UIApplicationStateActive) {
    // If this is called from applicationDidFinishLaunchingWithOptions probably the app was dead (background)
    userInfoJSON.foreground = true;
    if (firebase._receivedNotificationCallback !== null) {
      firebase._processPendingNotifications();
    }
  } else {
    userInfoJSON.foreground = false;
  }
}

function addBackgroundRemoteNotificationHandler(appDelegate) {
  if (typeof(FIRMessaging) !== "undefined") {
    appDelegate.prototype.applicationDidReceiveRemoteNotificationFetchCompletionHandler = function (app, notification, completionHandler) {
      // Pass notification to auth and check if they can handle it (in case phone auth is being used), see https://firebase.google.com/docs/auth/ios/phone-auth
      if (FIRAuth.auth().canHandleNotification(notification)) {
        completionHandler(UIBackgroundFetchResultNoData);
        return;
      }

      completionHandler(UIBackgroundFetchResultNewData);
      handleRemoteNotification(app, notification);
    };
  }
}

firebase.addAppDelegateMethods = function (appDelegate) {
  // we need the launchOptions for this one so it's a bit hard to use the UIApplicationDidFinishLaunchingNotification pattern we're using for other things
  appDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
    // If the app was terminated and the iOS is launching it in result of push notification tapped by the user, this will hold the notification data.
    if (launchOptions && typeof(FIRMessaging) !== "undefined") {
      var remoteNotification = launchOptions.objectForKey(UIApplicationLaunchOptionsRemoteNotificationKey);
      if (remoteNotification) {
        handleRemoteNotification(application, remoteNotification);
      }
    }
    // Firebase Facebook authentication
    if (typeof(FBSDKApplicationDelegate) !== "undefined") {
      FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
    }
    return true;
  };

  // there's no notification event to hook into for this one, so using the appDelegate
  if (typeof(FBSDKApplicationDelegate) !== "undefined" || typeof(GIDSignIn) !== "undefined" || typeof(FIRInvites) !== "undefined" || typeof(FIRDynamicLink) !== "undefined") {
    appDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = function (application, url, sourceApplication, annotation) {
      var result = false;
      if (typeof(FBSDKApplicationDelegate) !== "undefined") {
        result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
      }

      if (typeof(GIDSignIn) !== "undefined") {
        result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
      }

      if (typeof(FIRInvites) !== "undefined") {
        var receivedInvite = FIRInvites.handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
        if (receivedInvite) {
          console.log("Deep link from " + sourceApplication + ", Invite ID: " + invite.invideId + ", App URL: " + invite.deepLink);
          this._cachedInvitation = {
            deepLink: invite.deepLink,
            invitationId: invite.invideId
          };
          result = true;
        }
      }

      if (typeof(FIRDynamicLink) !== "undefined") {
        var dynamicLink = FIRDynamicLinks.dynamicLinks().dynamicLinkFromCustomSchemeURL(url)
        if (dynamicLink) {
          this._cachedDeepLink = dynamicLink.url.absoluteString;
          result = true;
        }
      }

      return result;
    };
  }

  if (typeof(FBSDKApplicationDelegate) !== "undefined" || typeof(GIDSignIn) !== "undefined" || typeof(FIRDynamicLink) !== "undefined") {
    appDelegate.prototype.applicationOpenURLOptions = function (application, url, options) {
      var result = false;
      if (typeof(FBSDKApplicationDelegate) !== "undefined") {
        result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(
            application,
            url,
            options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
            options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      }

      if (typeof(GIDSignIn) !== "undefined") {
        result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(
            url,
            options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
            options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      }

      if (typeof(FIRDynamicLink) !== "undefined") {
        var dynamicLink = FIRDynamicLinks.dynamicLinks().dynamicLinkFromCustomSchemeURL(url)
        if (dynamicLink) {
          if (dynamicLink.url !== null) {
            console.log(">>> dynamicLink.url.absoluteString: " + dynamicLink.url.absoluteString);
            if (this._dynamicLinkCallback) {
              this._dynamicLinkCallback(dynamicLink.url.absoluteString);
            } else {
              this._cachedDeepLink = dynamicLink.url.absoluteString;
            }
            result = true;
          }
        }
      }

      return result;
    };
  }

  addBackgroundRemoteNotificationHandler(appDelegate);
};

firebase.fetchProvidersForEmail = function (email) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(email) !== "string") {
        reject("A parameter representing an email address is required.");
        return;
      }

      FIRAuth.auth().fetchProvidersForEmailCompletion(email, function (providerNSArray, error) /* FIRProviderQueryCallback */ {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(firebase.toJsObject(providerNSArray));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.fetchProvidersForEmail: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentPushToken = function () {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }

      resolve(FIRMessaging.messaging().FCMToken);
    } catch (ex) {
      console.log("Error in firebase.getCurrentPushToken: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnMessageReceivedCallback = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }
      firebase._receivedNotificationCallback = callback;

      firebase._registerForRemoteNotifications();
      firebase._processPendingNotifications();

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnMessageReceivedCallback: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnDynamicLinkReceivedCallback = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRDynamicLink) === "undefined") {
        reject("Enable FIRInvites in Podfile first");
        return;
      }

      firebase._dynamicLinkCallback = callback;

      // if the app was launched from a dynamic link, process it now
      if (firebase._cachedDynamicLink !== null) {
        callback(firebase._cachedDynamicLink);
        firebase._cachedDynamicLink = null;
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnDynamicLinkReceivedCallback: " + ex);
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

      // may already be present
      if (firebase._pushToken) {
        callback(firebase._pushToken);
      }

      firebase._registerForRemoteNotifications();
      firebase._processPendingNotifications();

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
};

firebase.unregisterForPushNotifications = function (callback) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }
      utils.ios.getter(UIApplication, UIApplication.sharedApplication).unregisterForRemoteNotifications();
      resolve();
    } catch (ex) {
      console.log("Error in firebase.unregisterForPushNotifications: " + ex);
      reject(ex);
    }
  });
};

firebase._processPendingNotifications = function () {
  var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
  if (!app) {
    application.on("launch", function () {
      firebase._processPendingNotifications();
    });
    return;
  }
  if (firebase._receivedNotificationCallback !== null) {
    for (var p in firebase._pendingNotifications) {
      var userInfoJSON = firebase._pendingNotifications[p];
      // move the most relevant properties (if set) so it's according to the TS definition and aligned with Android
      if (userInfoJSON.aps && userInfoJSON.aps.alert) {
        userInfoJSON.title = userInfoJSON.aps.alert.title;
        userInfoJSON.body = userInfoJSON.aps.alert.body;
      }
      // also, to make the ts.d happy copy all properties to a data element
      userInfoJSON.data = userInfoJSON;
      // cleanup
      userInfoJSON.aps = undefined;
      firebase._receivedNotificationCallback(userInfoJSON);
    }
    firebase._pendingNotifications = [];
    app.applicationIconBadgeNumber = 0;
  }
};

firebase._onTokenRefreshNotification = function (token) {
  firebase._pushToken = token;

  if (firebase._receivedPushTokenCallback) {
    firebase._receivedPushTokenCallback(token);
  }

  FIRMessaging.messaging().connectWithCompletion(function (error) {
    if (error) {
      // this is not fatal and it scares the hell out of ppl so not logging it
      // console.log("Firebase was unable to connect to FCM. Error: " + error);
    } else {
      firebase._messagingConnected = true;
    }
  });
};

firebase._registerForRemoteNotificationsRanThisSession = false;

firebase._registerForRemoteNotifications = function () {
  var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
  if (!app) {
    application.on("launch", function () {
      firebase._registerForRemoteNotifications();
    });
    return;
  }
  if (firebase._registerForRemoteNotificationsRanThisSession) {
    // ignore
    // return;
  }
  firebase._registerForRemoteNotificationsRanThisSession = true;

  if (parseInt(platform.device.osVersion) >= 10) {
    var authorizationOptions = UNAuthorizationOptionAlert | UNAuthorizationOptionSound | UNAuthorizationOptionBadge;
    var curNotCenter = utils.ios.getter(UNUserNotificationCenter, UNUserNotificationCenter.currentNotificationCenter);
    curNotCenter.requestAuthorizationWithOptionsCompletionHandler(authorizationOptions, function (granted, error) {
      if (!error) {
        // applicationSettings.setBoolean("registered", true);
        if (app === null) {
          app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        }
        if (app !== null) {
          app.registerForRemoteNotifications();
        }
      } else {
        console.log("Error requesting push notification auth: " + error);
      }
    });

    firebase._userNotificationCenterDelegate = UNUserNotificationCenterDelegateImpl.new().initWithCallback(function (unnotification) {
      // if the app is in the foreground then this method will receive the notification
      // if the app is in the background, applicationDidReceiveRemoteNotificationFetchCompletionHandler will receive it
      var userInfo = unnotification.request.content.userInfo;
      var userInfoJSON = firebase.toJsObject(userInfo);
      userInfoJSON.foreground = true;
      firebase._pendingNotifications.push(userInfoJSON);
      if (firebase._receivedNotificationCallback !== null) {
        firebase._processPendingNotifications();
      }
    });
    curNotCenter.delegate = firebase._userNotificationCenterDelegate;

    firebase._firebaseRemoteMessageDelegate = FIRMessagingDelegateImpl.new().initWithCallback(function (appDataDictionary) {
      var userInfoJSON = firebase.toJsObject(appDataDictionary);
      firebase._pendingNotifications.push(userInfoJSON);

      var asJs = firebase.toJsObject(appDataDictionary.objectForKey("notification"));
      if (asJs) {
        userInfoJSON.title = asJs.title;
        userInfoJSON.body = asJs.body;
      }

      var app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
      if (app.applicationState === UIApplicationState.UIApplicationStateActive) {
        userInfoJSON.foreground = true;
        if (firebase._receivedNotificationCallback !== null) {
          firebase._processPendingNotifications();
        }
      } else {
        userInfoJSON.foreground = false;
      }
    });
    FIRMessaging.messaging().remoteMessageDelegate = firebase._firebaseRemoteMessageDelegate;

  } else {
    var notificationTypes = UIUserNotificationTypeAlert | UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationActivationModeBackground;
    var notificationSettings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
    app.registerForRemoteNotifications(); // prompts the user to accept notifications
    app.registerUserNotificationSettings(notificationSettings);
  }
};

function getAppDelegate() {
  // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
  if (application.ios.delegate === undefined) {
    var __extends = this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

      function __() {
        this.constructor = d;
      }

      __.prototype = b.prototype;
      d.prototype = new __();
    };

    var appDelegate = (function (_super) {
      __extends(appDelegate, _super);

      function appDelegate() {
        _super.apply(this, arguments);
      }

      appDelegate.ObjCProtocols = [UIApplicationDelegate];
      return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
  }
  return application.ios.delegate;
}

// rather than hijacking the appDelegate for these we'll be a good citizen and listen to the notifications
function prepAppDelegate() {
  if (typeof(FIRMessaging) !== "undefined") {
    // see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/178 for why we're not using a constant here
    firebase._addObserver("com.firebase.iid.notif.refresh-token", firebase._onTokenRefreshNotification);

    firebase._addObserver(UIApplicationDidFinishLaunchingNotification, function (appNotification) {
      // guarded this with a preference so the popup "this app wants to send notifications"
      // is not shown until the dev intentionally wired a listener (see other usages of _registerForRemoteNotifications())
      if (applicationSettings.getBoolean("registered", false)) {
        firebase._registerForRemoteNotifications();
      }
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
        FIRMessaging.messaging().connectWithCompletion(function (error) {
          if (!error) {
            firebase._messagingConnected = true;
          }
        });
      }
    });
  }
  firebase.addAppDelegateMethods(getAppDelegate());
}

prepAppDelegate();

firebase.toJsObject = function (objCObj) {
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
        case 'NSArray':
        case 'NSMutableArray':
          node[key] = firebase.toJsObject(val);
          break;
        case 'NSDictionary':
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
        case 'NSDecimalNumber':
          node[key] = Number(String(val));
          break;
        default:
          console.log("Please report this at https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues: iOS toJsObject is missing a converter for class '" + types.getClass(val) + "'. Casting to String as a fallback.");
          node[key] = String(val);
      }
    }
  }
  return node;
};

firebase.getCallbackData = function (type, snapshot) {
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
        reject("You already ran init");
        return;
      }

      firebase.ServerValue = {
        TIMESTAMP: FIRServerValue.timestamp()
      };

      function runInit() {
        arg = arg || {};

        // if deeplinks are used, then for this scheme to work the use must have added the bundle as a scheme to their plist (this is in our docs)
        if (FIROptions.defaultOptions() !== null) {
          FIROptions.defaultOptions().deepLinkURLScheme = utils.ios.getter(NSBundle, NSBundle.mainBundle).bundleIdentifier;
        }
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
            FIRAuth.auth().signOut();
          } catch (signOutErr) {
            console.log('Sign out of Firebase error: ' + signOutErr);
          }
        }

        if (arg.onAuthStateChanged) {
          firebase.authStateListener = function (auth, user) {
            arg.onAuthStateChanged({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          };
          FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
        }

        // Listen to auth state changes
        if (!firebase.authStateListener) {
          firebase.authStateListener = function (auth, user) {
            firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          };
          FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
        }

        // Firebase DynamicLink
        if (arg.onDynamicLinkCallback !== undefined) {
          firebase.addOnDynamicLinkReceivedCallback(arg.onDynamicLinkCallback);
        }

        // Facebook Auth
        if (typeof(FBSDKAppEvents) !== "undefined") {
          FBSDKAppEvents.activateApp();
        }

        // Firebase notifications (FCM)
        if (typeof(FIRMessaging) !== "undefined") {
          if (arg.onMessageReceivedCallback !== undefined || arg.onPushTokenReceivedCallback !== undefined) {
            if (arg.onMessageReceivedCallback !== undefined) {
              firebase.addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
            }
            if (arg.onPushTokenReceivedCallback !== undefined) {
              firebase.addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
            }
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
      }

      runInit();
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
      console.log("Error in firebase.analytics.logEvent: " + ex);
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
      console.log("Error in firebase.analytics.setUserProperty: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.setScreenName = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (arg.screenName === undefined) {
        reject("Argument 'screenName' is missing");
        return;
      }

      FIRAnalytics.setScreenNameScreenClass(arg.screenName, null);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setScreenName: " + ex);
      reject(ex);
    }
  });
};

firebase.admob.showBanner = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(GADRequest) === "undefined") {
        reject("Uncomment AdMob in the plugin's Podfile first");
        return;
      }

      if (firebase.admob.adView !== null && firebase.admob.adView !== undefined) {
        firebase.admob.adView.removeFromSuperview();
        firebase.admob.adView = null;
      }

      firebase.admob.defaults.view = utils.ios.getter(UIApplication, UIApplication.sharedApplication).keyWindow.rootViewController.view;
      var settings = firebase.merge(arg, firebase.admob.defaults);
      var view = settings.view;
      var bannerType = firebase.admob._getBannerType(settings.size);

      var adWidth = bannerType.size.width === 0 ? view.frame.size.width : bannerType.size.width;
      var adHeight = bannerType.size.smartHeight ? bannerType.size.smartHeight : bannerType.size.height;

      var originX = (view.frame.size.width - adWidth) / 2;
      var originY = settings.margins.top > -1 ? settings.margins.top : (settings.margins.bottom > -1 ? view.frame.size.height - adHeight - settings.margins.bottom : 0.0);
      var origin = CGPointMake(originX, originY);
      firebase.admob.adView = GADBannerView.alloc().initWithAdSizeOrigin(bannerType, origin);

      firebase.admob.adView.adUnitID = settings.iosBannerId;

      var adRequest = GADRequest.request();

      if (settings.testing) {
        var testDevices = [];
        try {
          testDevices.push(kGADSimulatorID);
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      firebase.admob.adView.rootViewController = utils.ios.getter(UIApplication, UIApplication.sharedApplication).keyWindow.rootViewController;
      //var statusbarFrame = utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarFrame;

      firebase.admob.adView.loadRequest(adRequest);

      // TODO consider listening to delegate features like 'ad loaded'
      //adView.delegate = self;

      view.addSubview(firebase.admob.adView);

      // support rotation events
      application.on(application.orientationChangedEvent, function (data) {
        if (firebase.admob.adView !== null) {
          firebase.admob.hideBanner().then(function (res) {
            firebase.admob.createBanner(arg);
          });
        }
      });

      resolve();
    } catch (ex) {
      console.log("Error in firebase.admob.showBanner: " + ex);
      reject(ex);
    }
  });
};

firebase.admob.showInterstitial = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(GADRequest) === "undefined") {
        reject("Uncomment AdMob in the plugin's Podfile first");
        return;
      }

      var settings = firebase.merge(arg, firebase.admob.defaults);
      firebase.admob.interstitialView = GADInterstitial.alloc().initWithAdUnitID(settings.iosInterstitialId);

      // with interstitials you MUST wait for the ad to load before showing it, so requiring this delegate
      var delegate = GADBannerViewDelegateImpl.new().initWithCallback(function (ad, error) {
        if (error) {
          reject(error);
        } else {
          // now we can safely show it
          firebase.admob.interstitialView.presentFromRootViewController(utils.ios.getter(UIApplication, UIApplication.sharedApplication).keyWindow.rootViewController);
          resolve();
        }
        CFRelease(delegate);
        delegate = undefined;
      });
      // we're leaving the app to switch to Google's OAuth screen, so making sure this is retained
      CFRetain(delegate);
      firebase.admob.interstitialView.delegate = delegate;

      var adRequest = GADRequest.request();

      if (settings.testing) {
        var testDevices = [];
        try {
          testDevices.push(kGADSimulatorID);
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      firebase.admob.interstitialView.loadRequest(adRequest);
    } catch (ex) {
      console.log("Error in firebase.admob.showInterstitial: " + ex);
      reject(ex);
    }
  });
};

firebase.admob.hideBanner = function () {
  return new Promise(function (resolve, reject) {
    try {
      if (firebase.admob.adView !== null) {
        //adView.delegate = null;
        firebase.admob.adView.removeFromSuperview();
        firebase.admob.adView = null;
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.admob.hideBanner: " + ex);
      reject(ex);
    }
  });
};

firebase.admob._getBannerType = function (size) {
  // see nativescript-admob's iOS sourcecode for why we're not using SDK-provided constants here
  if (size == firebase.admob.AD_SIZE.BANNER) {
    // return kGADAdSizeBanner;
    return {"size": {"width": 320, "height": 50}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.LARGE_BANNER) {
    // return kGADAdSizeLargeBanner;
    return {"size": {"width": 320, "height": 100}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.MEDIUM_RECTANGLE) {
    // return kGADAdSizeMediumRectangle;
    return {"size": {"width": 300, "height": 250}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.FULL_BANNER) {
    // return kGADAdSizeFullBanner;
    return {"size": {"width": 468, "height": 60}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.LEADERBOARD) {
    // return kGADAdSizeLeaderboard;
    return {"size": {"width": 728, "height": 90}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.SKYSCRAPER) {
    // return kGADAdSizeSkyscraper;
    return {"size": {"width": 120, "height": 600}, "flags": 0};
  } else if (size == firebase.admob.AD_SIZE.SMART_BANNER || size == firebase.admob.AD_SIZE.FLUID) {
    var orientation = utils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
    var isIPad = platform.device.deviceType === DeviceType.Tablet;
    if (orientation == UIDeviceOrientation.UIDeviceOrientationPortrait || orientation == UIDeviceOrientation.UIDeviceOrientationPortraitUpsideDown) {
      // return kGADAdSizeSmartBannerPortrait;
      return {"size": {"width": 0, "height": 0, "smartHeight": isIPad ? 90 : 50}, "flags": 18};
    } else {
      // return kGADAdSizeSmartBannerLandscape;
      return {"size": {"width": 0, "height": 0, "smartHeight": isIPad ? 90 : 32}, "flags": 26};
    }
  } else {
    // return kGADAdSizeInvalid;
    return {"size": {"width": -1, "height": -1}, "flags": 0};
  }
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

      var onCompletion = function (remoteConfigFetchStatus, error) {

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
      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      var user = fAuth.currentUser;
      if (user) {
        var onCompletion = function (error) {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve(true);
          }
        };
        user.sendEmailVerificationWithCompletion(onCompletion);
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
      FIRAuth.auth().signOut(null);

      // also disconnect from Google otherwise ppl can't connect with a different account
      if (typeof(GIDSignIn) !== "undefined") {
        GIDSignIn.sharedInstance().disconnect();
      }

      if (typeof(FBSDKLoginManager) !== "undefined") {
        FBSDKLoginManager.alloc().logOut();
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

function toLoginResult(user) {
  if (!user) {
    return false;
  }

  var providers = [];
  for (var i = 0, l = user.providerData.count; i < l; i++) {
    var firUserInfo = user.providerData.objectAtIndex(i);
    var pid = firUserInfo.valueForKey("providerID");
    if (pid === 'facebook.com') { // FIRFacebookAuthProviderID
      var fbCurrentAccessToken = FBSDKAccessToken.currentAccessToken();
      providers.push({id: pid, token: fbCurrentAccessToken ? fbCurrentAccessToken.tokenString : null});
    } else {
      providers.push({id: pid});
    }
  }

  return {
    uid: user.uid,
    anonymous: user.anonymous,
    // provider: user.providerID, // always 'Firebase'
    providers: providers,
    profileImageURL: user.photoURL ? user.photoURL.absoluteString : null,
    email: user.email,
    emailVerified: user.emailVerified,
    name: user.displayName,
    phoneNumber: user.phoneNumber,
    refreshToken: user.refreshToken
  };
}

firebase.getAuthToken = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      var user = fAuth.currentUser;
      if (user) {
        var onCompletion = function (token, error) {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve(token);
          }
        };
        user.getTokenForcingRefreshCompletion(arg.forceRefresh, onCompletion);
      } else {
        reject("Log in first");
      }
    } catch (ex) {
      console.log("Error in firebase.getAuthToken: " + ex);
      reject(ex);
    }
  });
};

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {

    try {
      var onCompletion = function (user, error) {
        if (error) {
          // also disconnect from Google otherwise ppl can't connect with a different account
          if (typeof(GIDSignIn) !== "undefined") {
            GIDSignIn.sharedInstance().disconnect();
          }
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

      firebase.moveLoginOptionsToObjects(arg);

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        fAuth.signInAnonymouslyWithCompletion(onCompletion);

      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.passwordOptions || !arg.passwordOptions.email || !arg.passwordOptions.password) {
          reject("Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument");
          return;
        }

        var fIRAuthCredential = FIREmailAuthProvider.credentialWithEmailPassword(arg.passwordOptions.email, arg.passwordOptions.password)
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
          fAuth.signInWithEmailPasswordCompletion(arg.passwordOptions.email, arg.passwordOptions.password, onCompletion);
        }

      } else if (arg.type === firebase.LoginType.PHONE) {
        // https://firebase.google.com/docs/auth/ios/phone-auth
        if (!arg.phoneOptions || !arg.phoneOptions.phoneNumber) {
          reject("Auth type PHONE requires a 'phoneOptions.phoneNumber' argument");
          return;
        }

        FIRPhoneAuthProvider.provider().verifyPhoneNumberCompletion(arg.phoneOptions.phoneNumber, function (verificationID, error) {
          if (error) {
            reject(error.localizedDescription);
            return;
          }
          firebase.requestPhoneAuthVerificationCode(function (userResponse) {
            var fIRAuthCredential = FIRPhoneAuthProvider.provider().credentialWithVerificationIDVerificationCode(verificationID, userResponse);
            if (fAuth.currentUser) {
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
          }, arg.phoneOptions.verificationPrompt);
        });

      } else if (arg.type === firebase.LoginType.CUSTOM) {
        if (!arg.customOptions || (!arg.customOptions.token && !arg.customOptions.tokenProviderFn)) {
          reject("Auth type CUSTOM requires a 'customOptions.token' or 'customOptions.tokenProviderFn' argument");
          return;
        }

        if (arg.customOptions.token) {
          fAuth.signInWithCustomTokenCompletion(arg.customOptions.token, onCompletion);
        } else if (arg.customOptions.tokenProviderFn) {
          arg.customOptions.tokenProviderFn()
              .then(
                  function (token) {
                    fAuth.signInWithCustomTokenCompletion(token, onCompletion);
                  },
                  function (error) {
                    reject(error);
                  }
              );
        }

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (typeof (FBSDKLoginManager) === "undefined") {
          reject("Facebook SDK not installed - see Podfile");
          return;
        }

        var onFacebookCompletion = function (fbSDKLoginManagerLoginResult, error) {
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

        if (arg.facebookOptions && arg.facebookOptions.scope) {
          scope = arg.facebookOptions.scope;
        }

        fbSDKLoginManager.logInWithReadPermissionsFromViewControllerHandler(
            scope,
            null, // the viewcontroller param can be null since by default topmost is taken
            onFacebookCompletion);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (typeof (GIDSignIn) === "undefined") {
          reject("Google Sign In not installed - see Podfile");
          return;
        }

        var sIn = GIDSignIn.sharedInstance();
        sIn.uiDelegate = application.ios.rootController;
        sIn.clientID = FIRApp.defaultApp().options.clientID;

        if (arg.googleOptions && arg.googleOptions.hostedDomain) {
          sIn.hostedDomain = arg.googleOptions.hostedDomain;
        }

        var delegate = GIDSignInDelegateImpl.new().initWithCallback(function (user, error) {
          if (error === null) {
            // Get a Google ID token and Google access token from the GIDAuthentication object and exchange them for a Firebase credential
            firebase._gIDAuthentication = user.authentication;
            var fIRAuthCredential = FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(firebase._gIDAuthentication.idToken, firebase._gIDAuthentication.accessToken);

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
          CFRelease(delegate);
          delegate = undefined;
        });

        CFRetain(delegate);
        sIn.delegate = delegate;
        sIn.signIn();
      } else {
        reject("Unsupported auth type: " + arg.type);
      }
    } catch (ex) {
      console.log("Error in firebase.login: " + ex);
      reject(ex);
    }
  });
};

firebase.reauthenticate = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      var user = fAuth.currentUser;
      if (user === null) {
        reject("no current user");
        return;
      }

      firebase.moveLoginOptionsToObjects(arg);

      var authCredential = null;
      if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.passwordOptions || !arg.passwordOptions.email || !arg.passwordOptions.password) {
          reject("Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument");
          return;
        }
        authCredential = FIREmailAuthProvider.credentialWithEmailPassword(arg.passwordOptions.email, arg.passwordOptions.password);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (!firebase._gIDAuthentication) {
          reject("Not currently logged in with Google");
          return;
        }
        authCredential = FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(firebase._gIDAuthentication.idToken, firebase._gIDAuthentication.accessToken);

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        var currentAccessToken = FBSDKAccessToken.currentAccessToken();
        if (!currentAccessToken) {
          reject("Not currently logged in with Facebook");
          return;
        }
        authCredential = FIRFacebookAuthProvider.credentialWithAccessToken(currentAccessToken.tokenString);
      }

      if (authCredential === null) {
        reject("arg.type should be one of LoginType.PASSWORD | LoginType.GOOGLE | LoginType.FACEBOOK");
        return;
      }

      var onCompletion = function (error) {
        if (error) {
          reject(error.localizedDescription);

        } else {
          resolve();
        }
      };
      user.reauthenticateWithCredentialCompletion(authCredential, onCompletion);

    } catch (ex) {
      console.log("Error in firebase.reauthenticate: " + ex);
      reject(ex);
    }
  });
};

firebase.resetPassword = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var onCompletion = function (error) {
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
      var onCompletion = function (error) {
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
      var onCompletion = function (user, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            key: user.uid
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

      var onCompletion = function (user, error) {
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

firebase.updateProfile = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var onCompletion = function (error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      var fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      if (!arg.displayName && !arg.photoURL) {
        reject("Updating a profile requires a displayName and / or a photoURL argument");
      } else {
        var user = fAuth.currentUser;
        if (user) {
          var changeRequest = user.profileChangeRequest();
          changeRequest.displayName = arg.displayName;
          changeRequest.photoURL = NSURL.URLWithString(arg.photoURL);
          changeRequest.commitChangesWithCompletion(onCompletion);
        } else {
          reject();
        }
      }
    } catch (ex) {
      console.log("Error in firebase.updateProfile: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = function (to, updateCallback) {
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
      for (var i = 0; i < listeners.length; i++) {
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
      if (typeof firebase.ServerValue === "undefined") {
        reject("Run init() first!");
        return;
      }

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
      if (typeof firebase.ServerValue === "undefined") {
        reject("Run init() first!");
        return;
      }

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
      if (typeof firebase.ServerValue === "undefined") {
        reject("Run init() first!");
        return;
      }

      if (typeof val == "object") {
        firebase.instance.childByAppendingPath(path).updateChildValues(val);
      } else {
        var lastPartOfPath = path.lastIndexOf("/");
        var pathPrefix = path.substring(0, lastPartOfPath);
        var pathSuffix = path.substring(lastPartOfPath + 1);
        var updateObject = '{"' + pathSuffix + '" : "' + val + '"}';
        firebase.instance.childByAppendingPath(pathPrefix).updateChildValues(JSON.parse(updateObject));
      }

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
      if (typeof firebase.ServerValue === "undefined") {
        reject("Run init() first!");
        return;
      }

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
        if (options.orderBy.value === undefined || options.orderBy.value === null) {
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
        // https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/319
        // if (options.range.value === undefined || options.range.value === null) {
        //   reject("Please set range.value");
        //   return;
        // }
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
        for (var i = 0; i < options.ranges.length; i++) {
          var range = options.ranges[i];
          if (range.value === undefined || range.value === null) {
            reject("Please set ranges[" + i + "].value");
            return;
          }
          if (range.type === firebase.QueryRangeType.START_AT) {
            query = query.queryStartingAtValue(range.value);
          } else if (range.type === firebase.QueryRangeType.END_AT) {
            query = query.queryEndingAtValue(range.value);
          } else if (range.type === firebase.QueryRangeType.EQUAL_TO) {
            query = query.queryEqualToValue(range.value);
          } else {
            reject("Invalid ranges[" + i + "].type, use constants like firebase.QueryRangeType.START_AT");
            return;
          }
        }
      }

      // limit
      if (options.limit && options.limit.type) {
        if (options.limit.value === undefined || options.limit.value === null) {
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

      var onCompletion = function (metadata, error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            name: metadata.name,
            url: metadata.downloadURL() ? metadata.downloadURL().absoluteString : null,
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
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        // using 'putFile' (not 'putData') so Firebase can infer the mimetype
        fIRStorageUploadTask = fIRStorageReference.putFileMetadataCompletion(NSURL.fileURLWithPath(arg.localFile.path), null, onCompletion);

      } else if (arg.localFullPath) {
        fIRStorageUploadTask = fIRStorageReference.putFileMetadataCompletion(NSURL.fileURLWithPath(arg.localFullPath), null, onCompletion);

      } else {
        reject("One of localFile or localFullPath is required");
        return;
      }

      if (fIRStorageUploadTask !== null) {
        // Add a progress observer to an upload task
        var fIRStorageHandle = fIRStorageUploadTask.observeStatusHandler(FIRStorageTaskStatusProgress, function (snapshot) {
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

      var onCompletion = function (url, error) {
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

      var onCompletion = function (url, error) {
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

      var onCompletion = function (error) {
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

firebase.subscribeToTopic = function (topicName) {
  return new Promise(function (resolve, reject) {
    try {

      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }

      if (topicName.indexOf("/topics/") === -1) {
        topicName = "/topics/" + topicName;
      }
      FIRMessaging.messaging().subscribeToTopic(topicName);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.subscribeToTopic: " + ex);
      reject(ex);
    }
  });
};

firebase.unsubscribeFromTopic = function (topicName) {
  return new Promise(function (resolve, reject) {
    try {

      if (typeof(FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }

      if (topicName.indexOf("/topics/") === -1) {
        topicName = "/topics/" + topicName;
      }
      FIRMessaging.messaging().unsubscribeFromTopic(topicName);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.unsubscribeFromTopic: " + ex);
      reject(ex);
    }
  });
};

firebase.sendCrashLog = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRCrashLog) === "undefined") {
        reject("Make sure 'Firebase/Crash' is in the plugin's Podfile - and if it is there's currently a problem with this Pod which is outside out span of control :(");
        return;
      }

      if (!arg.message) {
        reject("The mandatory 'message' argument is missing");
        return;
      }

      if (arg.showInConsole) {
        FIRCrashNSLog(arg.message);
      } else {
        FIRCrashLog(arg.message);
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.sendCrashLog: " + ex);
      reject(ex);
    }
  });
};

firebase.invites.sendInvitation = function (arg) {
  return new Promise(function (resolve, reject) {
    try {

      if (typeof(FIRInvites) === "undefined") {
        reject("Make sure 'Firebase/Invites' is in the plugin's Podfile");
        return;
      }

      if (!arg.message || !arg.title) {
        reject("The mandatory 'message' or 'title' argument is missing");
        return;
      }

      // note that this returns the wrong type, so need to use 'performSelector' below
      var inviteDialog = FIRInvites.inviteDialog();

      // A message hint for the dialog. Note this manifests differently depending on the
      // received invitation type. For example, in an email invite this appears as the subject.
      // inviteDialog.setMessage(arg.message);
      inviteDialog.performSelectorWithObject("setMessage:", arg.message);

      // Title for the dialog, this is what the user sees before sending the invites.
      // inviteDialog.setTitle(arg.title);
      inviteDialog.performSelectorWithObject("setTitle:", arg.title);

      if (arg.deepLink) {
        // inviteDialog.setDeepLink(arg.deeplink);
        inviteDialog.performSelectorWithObject("setDeepLink:", arg.deeplink);
      }

      if (arg.callToActionText) {
        // inviteDialog.setCallToActionText(arg.callToActionText);
        inviteDialog.performSelectorWithObject("setCallToActionText:", arg.callToActionText);
      }

      if (arg.customImage) {
        // inviteDialog.setCustomImage(arg.customImage);
        inviteDialog.performSelectorWithObject("setCustomImage:", arg.customImage);
      }

      if (arg.androidClientID) {
        var targetApplication = FIRInvitesTargetApplication.new();
        targetApplication.androidClientID = arg.androidClientID;
        // inviteDialog.setOtherPlatformsTargetApplication(targetApplication);
        inviteDialog.performSelectorWithObject("setOtherPlatformsTargetApplication:", targetApplication);
      }

      var delegate = FIRInviteDelegateImpl.new().initWithCallback(function (ids, error) {
        if (error === null) {
          var invitationIds = firebase.toJsObject(ids);
          resolve({
            count: ids.count,
            invitationIds: invitationIds
          });
        } else {
          reject(error.localizedDescription);
        }
        CFRelease(delegate);
        delegate = undefined;
      });
      // This opens the contact picker UI, so making sure this is retained
      CFRetain(delegate);
      // inviteDialog.setInviteDelegate(delegate);
      inviteDialog.performSelectorWithObject("setInviteDelegate:", delegate);

      // inviteDialog.open();
      inviteDialog.performSelector("open");

    } catch (ex) {
      console.log("Error in firebase.sendInvitation: " + ex);
      reject(ex);
    }
  });
};

firebase.invites.getInvitation = function () {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof(FIRInvites) === "undefined") {
        reject("Make sure 'Firebase/Invites' is in the plugin's Podfile");
        return;
      }

      if (firebase._cachedInvitation !== null) {
        resolve(firebase._cachedInvitation);
        firebase.cachedInvitation = null;
      } else {
        reject("Not launched by invitation");
      }

    } catch (ex) {
      console.log("Error in firebase.getInvitation: " + ex);
      reject(ex);
    }
  });
};


var GADBannerViewDelegateImpl = (function (_super) {
  __extends(GADBannerViewDelegateImpl, _super);

  function GADBannerViewDelegateImpl() {
    _super.apply(this, arguments);
  }

  GADBannerViewDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  GADBannerViewDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };
  GADBannerViewDelegateImpl.prototype.interstitialDidReceiveAd = function (ad) {
    this._callback(ad);
  };
  GADBannerViewDelegateImpl.prototype.interstitialDidFailToReceiveAdWithError = function (ad, error) {
    this._callback(ad, error);
  };
  if (typeof(GADInterstitialDelegate) !== "undefined") {
    GADBannerViewDelegateImpl.ObjCProtocols = [GADInterstitialDelegate];
  }
  return GADBannerViewDelegateImpl;
})(NSObject);


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


// see https://developer.apple.com/reference/usernotifications/unusernotificationcenterdelegate?language=objc
var UNUserNotificationCenterDelegateImpl = (function (_super) {
  __extends(UNUserNotificationCenterDelegateImpl, _super);

  function UNUserNotificationCenterDelegateImpl() {
    _super.apply(this, arguments);
  }

  UNUserNotificationCenterDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  UNUserNotificationCenterDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };
  UNUserNotificationCenterDelegateImpl.prototype.userNotificationCenterWillPresentNotificationWithCompletionHandler = function (unCenter, notification, completionHandler) {
    this._callback(notification);
  };
  if (typeof(UNUserNotificationCenterDelegate) !== "undefined") {
    UNUserNotificationCenterDelegateImpl.ObjCProtocols = [UNUserNotificationCenterDelegate];
  }
  return UNUserNotificationCenterDelegateImpl;
})(NSObject);


var FIRInviteDelegateImpl = (function (_super) {
  __extends(FIRInviteDelegateImpl, _super);

  function FIRInviteDelegateImpl() {
    _super.apply(this, arguments);
  }

  FIRInviteDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  FIRInviteDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };
  FIRInviteDelegateImpl.prototype.inviteFinishedWithInvitationsError = function (invitationIds, error) {
    this._callback(invitationIds, error);
  };
  if (typeof(FIRInviteDelegate) !== "undefined") {
    FIRInviteDelegateImpl.ObjCProtocols = [FIRInviteDelegate];
  }
  return FIRInviteDelegateImpl;
})(NSObject);

// see https://firebase.google.com/docs/reference/ios/firebasemessaging/api/reference/Protocols/FIRMessagingDelegate
var FIRMessagingDelegateImpl = (function (_super) {
  __extends(FIRMessagingDelegateImpl, _super);

  function FIRMessagingDelegateImpl() {
    _super.apply(this, arguments);
  }

  FIRMessagingDelegateImpl.new = function () {
    return _super.new.call(this);
  };
  FIRMessagingDelegateImpl.prototype.initWithCallback = function (callback) {
    this._callback = callback;
    return this;
  };

  // optional
  FIRMessagingDelegateImpl.prototype.applicationReceivedRemoteMessage = function (firMessagingRemoteMessage) {
    this._callback(firMessagingRemoteMessage.appData);
  };

  // optional
  FIRMessagingDelegateImpl.prototype.messagingDidReceiveMessage = function (firMessaging, firMessagingRemoteMessage) {
    // assuming the same as the one above
    this._callback(firMessagingRemoteMessage.appData);
  };

  // required
  FIRMessagingDelegateImpl.prototype.messagingDidRefreshRegistrationToken = function (firMessaging, fcmToken) {
    console.log(">> fcmToken refreshed: " + fcmToken);
    firebase._onTokenRefreshNotification(fcmToken);
  };

  if (typeof(FIRMessagingDelegate) !== "undefined") {
    FIRMessagingDelegateImpl.ObjCProtocols = [FIRMessagingDelegate];
  }
  return FIRMessagingDelegateImpl;
})(NSObject);

module.exports = firebase;
