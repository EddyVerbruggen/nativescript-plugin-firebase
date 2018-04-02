import { DocumentSnapshot, firebase, QuerySnapshot } from "./firebase-common";
import * as appModule from "tns-core-modules/application";
import { AndroidActivityResultEventData } from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import lazy from "tns-core-modules/utils/lazy";
import * as frame from "tns-core-modules/ui/frame";
import * as fs from "tns-core-modules/file-system";
import { firestore } from "./firebase";

declare const com, org: any;

firebase._launchNotification = null;
firebase._cachedDynamicLink = null;

// we need to cache and restore the context, otherwise the next invocation is broken
firebase._googleSignInIdToken = null;
firebase._facebookAccessToken = null;

let fbCallbackManager = null;
const GOOGLE_SIGNIN_INTENT_ID = 123;
const REQUEST_INVITE_INTENT_ID = 48;

// const gson = lazy(() => typeof(com.google.gson) === "undefined" ? null : new com.google.gson.Gson());
const messagingEnabled = lazy(() => typeof(com.google.firebase.messaging) !== "undefined");
const dynamicLinksEnabled = lazy(() => typeof(com.google.android.gms.appinvite) !== "undefined");

(() => {
  // note that this means we need to require the plugin before the app is loaded
  appModule.on(appModule.launchEvent, args => {
    if (messagingEnabled()) {
      org.nativescript.plugins.firebase.FirebasePluginLifecycleCallbacks.registerCallbacks(appModule.android.nativeApp);
    }

    const intent = args.android;
    const isLaunchIntent = "android.intent.action.VIEW" === intent.getAction();

    if (!isLaunchIntent && messagingEnabled()) {
      const extras = intent.getExtras();
      // filter out any rubbish that doesn't have a 'from' key
      if (extras !== null && extras.keySet().contains("from")) {
        let result = {
          foreground: false,
          data: {}
        };

        const iterator = extras.keySet().iterator();
        while (iterator.hasNext()) {
          const key = iterator.next();
          if (key !== "from" && key !== "collapse_key") {
            result[key] = extras.get(key);
            result.data[key] = extras.get(key);
          }
        }

        if (firebase._receivedNotificationCallback === null) {
          firebase._launchNotification = result;
        } else {
          // add a little delay just to make sure clients alerting this message will see it as the UI needs to settle
          setTimeout(() => {
            firebase._receivedNotificationCallback(result);
          });
        }
      }

    } else if (isLaunchIntent && dynamicLinksEnabled()) {
      const getDynamicLinksCallback = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (task.isSuccessful() && task.getResult() !== null) {
            const result = task.getResult();
            if (firebase._dynamicLinkCallback === null) {
              firebase._cachedDynamicLink = {
                url: result.getLink().toString(),
                matchConfidence: 1,
                minimumAppVersion: result.getMinimumAppVersion()
              };
            } else {
              setTimeout(() => {
                firebase._dynamicLinkCallback({
                  url: result.getLink().toString(),
                  matchConfidence: 1,
                  minimumAppVersion: result.getMinimumAppVersion()
                });
              });
            }
          }
        }
      });
      const firebaseDynamicLinks = com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance();
      firebaseDynamicLinks.getDynamicLink(intent).addOnCompleteListener(getDynamicLinksCallback);
    }
  });
})();

firebase.toHashMap = obj => {
  const node = new java.util.HashMap();
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (obj[property] === null) {
        node.put(property, null);
      } else {
        if (obj[property] instanceof Date) {
          node.put(property, new java.util.Date(obj[property].getTime()));
        } else if (Array.isArray(obj[property])) {
          node.put(property, firebase.toJavaArray(obj[property]));
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
  }
  return node;
};

firebase.toJavaArray = val => {
  const javaArray = new java.util.ArrayList();
  for (let i = 0; i < val.length; i++) {
    javaArray.add(firebase.toValue(val[i]));
  }
  return javaArray;
};

firebase.toValue = val => {
  let returnVal = null;
  if (val !== null) {

    if (val instanceof Date) {
      return new java.util.Date(val.getTime());
    }
    if (Array.isArray(val)) {
      return firebase.toJavaArray(val);
    }

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

// no longer using Gson as fi Firestore's DocumentReference isn't serialized (also removed it from the dependencies)
firebase.toJsObject = javaObj => {
  // if (gson() !== null) {
  //   try {
  //     return JSON.parse(gson().toJson(javaObj)); // this may fail if fi a DocumentReference is encountered
  //   } catch (ignore) {
  //     return firebase.toJsObjectLegacy(javaObj);
  //   }
  // } else {
  // fallback for folks not having fetched gson yet in their build for some reason
  return firebase.toJsObjectLegacy(javaObj);
  // }
};

firebase.toJsObjectLegacy = javaObj => {
  if (javaObj === null || typeof javaObj !== "object") {
    return javaObj;
  }

  let node;
  switch (javaObj.getClass().getName()) {
    case 'java.lang.Boolean':
      const str = String(javaObj);
      return Boolean(!!(str === "True" || str === "true"));
    case 'java.lang.String':
      return String(javaObj);
    case 'java.lang.Long':
    case 'java.lang.Double':
      return Number(String(javaObj));
    case 'java.util.Date':
      return new Date(javaObj);
    case 'com.google.firebase.firestore.GeoPoint':
      return {
        "latitude": javaObj.getLatitude(),
        "longitude": javaObj.getLongitude()
      };
    case 'com.google.firebase.firestore.DocumentReference':
      const path: string = javaObj.getPath();
      const lastSlashIndex = path.lastIndexOf("/");
      return firebase.firestore._getDocumentReference(javaObj, path.substring(0, lastSlashIndex), path.substring(lastSlashIndex + 1));
    case 'java.util.ArrayList':
      node = [];
      for (let i = 0; i < javaObj.size(); i++) {
        node[i] = firebase.toJsObjectLegacy(javaObj.get(i));
      }
      break;
    default:
      try {
        node = {};
        const iterator = javaObj.entrySet().iterator();
        while (iterator.hasNext()) {
          const item = iterator.next();
          node[item.getKey()] = firebase.toJsObjectLegacy(item.getValue());
        }
      } catch (e) {
        console.log("PLEASE REPORT THIS AT https://github.com/NativeScript/NativeScript/issues: Tried to serialize an unsupported type: javaObj.getClass().getName(), error: " + e);
      }
  }
  return node;
};

firebase.getCallbackData = (type, snapshot) => {
  return {
    type: type,
    key: snapshot.getKey(),
    value: firebase.toJsObject(snapshot.getValue())
  };
};

firebase.authStateListener = null;

firebase.init = arg => {
  return new Promise((resolve, reject) => {
    if (firebase.initialized) {
      reject("Firebase already initialized");
    }
    firebase.initialized = true;

    const runInit = () => {
      arg = arg || {};

      if (typeof(com.google.firebase.database) !== "undefined") {
        firebase.ServerValue = {
          TIMESTAMP: firebase.toJsObject(com.google.firebase.database.ServerValue.TIMESTAMP)
        };

        const fDatabase = com.google.firebase.database.FirebaseDatabase;
        if (arg.persist) {
          try {
            fDatabase.getInstance().setPersistenceEnabled(true);
          } catch (ignore) {
          }
        }
        firebase.instance = fDatabase.getInstance().getReference();
      }

      if (typeof(com.google.firebase.firestore) !== "undefined") {
        // Firestore has offline persistence enabled by default
        if (!arg.persist) {
          try {
            com.google.firebase.firestore.FirebaseFirestore.getInstance().setFirestoreSettings(
                new com.google.firebase.firestore.FirebaseFirestoreSettings.Builder()
                    .setPersistenceEnabled(false)
                    .build());
          } catch (ignore) {
          }
        }
      }

      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

      if (arg.onAuthStateChanged) {
        firebase.authStateListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
          onAuthStateChanged: fbAuth => {
            const user = fbAuth.getCurrentUser();
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
          onAuthStateChanged: fbAuth => {
            const user = fbAuth.getCurrentUser();
            firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          }
        });
        firebaseAuth.addAuthStateListener(firebase.authStateListener);
      }

      // Firebase notifications (FCM)
      if (messagingEnabled()) {
        if (arg.onMessageReceivedCallback !== undefined) {
          firebase.addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
        }
        if (arg.onPushTokenReceivedCallback !== undefined) {
          firebase.addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
        }
      }

      // Firebase DynamicLink
      if (arg.onDynamicLinkCallback !== undefined) {
        firebase.addOnDynamicLinkReceivedCallback(arg.onDynamicLinkCallback);
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
        appModule.android.on(appModule.AndroidApplication.activityResultEvent, (eventData: AndroidActivityResultEventData) => {
          if (eventData.requestCode !== GOOGLE_SIGNIN_INTENT_ID) {
            fbCallbackManager.onActivityResult(eventData.requestCode, eventData.resultCode, eventData.intent);
          }
        });
      }

      // Firebase AdMob
      if (typeof(com.google.android.gms.ads) !== "undefined" && typeof(com.google.android.gms.ads.MobileAds) !== "undefined") {
        // init admob
        com.google.android.gms.ads.MobileAds.initialize(appModule.android.context);
      }

      resolve(firebase.instance);
    };

    try {
      if (appModule.android.startActivity) {
        runInit();
      } else {
        // if this is called before application.start() wait for the event to fire
        appModule.on(appModule.launchEvent, runInit);
      }
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.fetchProvidersForEmail = email => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(email) !== "string") {
        reject("A parameter representing an email address is required.");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task /* <ProviderQueryResult> */ => {
          if (!task.isSuccessful()) {
            reject((task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
          } else {
            const providerList = task.getResult().getProviders();
            resolve(firebase.toJsObject(providerList));
          }
        }
      });

      com.google.firebase.auth.FirebaseAuth.getInstance().fetchProvidersForEmail(email).addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      console.log("Error in firebase.fetchProvidersForEmail: " + ex);
      reject(ex);
    }
  });
};

firebase.fetchSignInMethodsForEmail = email => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(email) !== "string") {
        reject("A parameter representing an email address is required.");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task /* <SignInMethodQueryResult> */ => {
          if (!task.isSuccessful()) {
            reject((task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
          } else {
            const signInMethods = task.getResult().getSignInMethods();
            resolve(firebase.toJsObject(signInMethods));
          }
        }
      });

      com.google.firebase.auth.FirebaseAuth.getInstance().fetchSignInMethodsForEmail(email).addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      console.log("Error in firebase.fetchSignInMethodsForEmail: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentPushToken = () => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(com.google.firebase.messaging || com.google.firebase.iid) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      resolve(com.google.firebase.iid.FirebaseInstanceId.getInstance().getToken());
    } catch (ex) {
      console.log("Error in firebase.getCurrentPushToken: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnMessageReceivedCallback = callback => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      firebase._receivedNotificationCallback = callback;

      org.nativescript.plugins.firebase.FirebasePlugin.setOnNotificationReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: notification => {
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

firebase.addOnDynamicLinkReceivedCallback = callback => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(com.google.android.gms.appinvite) === "undefined") {
        reject("Uncomment invites in the plugin's include.gradle first");
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

firebase.addOnPushTokenReceivedCallback = callback => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      org.nativescript.plugins.firebase.FirebasePlugin.setOnPushTokenReceivedCallback(
          new org.nativescript.plugins.firebase.FirebasePluginListener({
            success: token => {
              callback(token);
            },
            error: err => {
              console.log("addOnPushTokenReceivedCallback error: " + err);
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

firebase.unregisterForPushNotifications = () => {
  return Promise.reject("Not supported on Android");
};

firebase.getRemoteConfigDefaults = properties => {
  let defaults = {};
  for (const p in properties) {
    const prop = properties[p];
    if (prop.default !== undefined) {
      defaults[prop.key] = prop.default;
    }
  }
  return defaults;
};

firebase._isGooglePlayServicesAvailable = () => {
  const activity = appModule.android.foregroundActivity || appModule.android.startActivity;
  const googleApiAvailability = com.google.android.gms.common.GoogleApiAvailability.getInstance();
  const playServiceStatusSuccess = com.google.android.gms.common.ConnectionResult.SUCCESS; // 0
  const playServicesStatus = googleApiAvailability.isGooglePlayServicesAvailable(activity);
  const available = playServicesStatus === playServiceStatusSuccess;
  if (!available && googleApiAvailability.isUserResolvableError(playServicesStatus)) {
    // show a dialog offering the user to update (no need to wait for it to finish)
    googleApiAvailability.showErrorDialogFragment(activity, playServicesStatus, 1, new android.content.DialogInterface.OnCancelListener({
      onCancel: dialogInterface => {
        console.log("Canceled");
      }
    }));
  }
  return available;
};

firebase.analytics.logEvent = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (arg.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      const bundle = new android.os.Bundle();
      if (arg.parameters !== undefined) {
        for (const p in arg.parameters) {
          const param = arg.parameters[p];
          if (param.value !== undefined) {
            bundle.putString(param.key, param.value);
          }
        }
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).logEvent(arg.key, bundle);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.setUserId = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (arg.userId === undefined) {
        reject("Argument 'userId' is missing");
        return;
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).setUserId(arg.userId);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setUserId: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.setUserProperty = arg => {
  return new Promise((resolve, reject) => {
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
      console.log("Error in firebase.analytics.setUserProperty: " + ex);
      reject(ex);
    }
  });
};

firebase.analytics.setScreenName = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (arg.screenName === undefined) {
        reject("Argument 'screenName' is missing");
        return;
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).setCurrentScreen(appModule.android.foregroundActivity, arg.screenName, null);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setScreenName: " + ex);
      reject(ex);
    }
  });
};

// see https://firebase.google.com/docs/admob/android/quick-start
firebase.admob.showBanner = arg => {
  return new Promise((resolve, reject) => {
    try {
      const settings = firebase.merge(arg, firebase.admob.defaults);

      // always close a previously opened banner
      if (firebase.admob.adView !== null && firebase.admob.adView !== undefined) {
        const parent = firebase.admob.adView.getParent();
        if (parent !== null) {
          parent.removeView(firebase.admob.adView);
        }
      }

      firebase.admob.adView = new com.google.android.gms.ads.AdView(appModule.android.foregroundActivity);
      firebase.admob.adView.setAdUnitId(settings.androidBannerId);
      const bannerType = firebase.admob._getBannerType(settings.size);
      firebase.admob.adView.setAdSize(bannerType);

      // need these to support showing a banner more than once
      this.resolve = resolve;
      this.reject = reject;

      const BannerAdListener = com.google.android.gms.ads.AdListener.extend({
        resolve: null,
        reject: null,
        onAdLoaded: () => {
          // firebase.admob.interstitialView.show();
          this.resolve();
        },
        onAdFailedToLoad: errorCode => {
          // console.log('ad error: ' + errorCode);
          this.reject(errorCode);
        }
      });
      firebase.admob.adView.setAdListener(new BannerAdListener());

      const ad = firebase.admob._buildAdRequest(settings);
      firebase.admob.adView.loadAd(ad);

      const density = utils.layout.getDisplayDensity(),
          top = settings.margins.top * density,
          bottom = settings.margins.bottom * density;

      const relativeLayoutParams = new android.widget.RelativeLayout.LayoutParams(
          android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
          android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

      if (bottom > -1) {
        relativeLayoutParams.bottomMargin = bottom;
        relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
      } else {
        if (top > -1) {
          relativeLayoutParams.topMargin = top;
        }
        relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
      }

      const adViewLayout = new android.widget.RelativeLayout(appModule.android.foregroundActivity);
      adViewLayout.addView(firebase.admob.adView, relativeLayoutParams);

      const relativeLayoutParamsOuter = new android.widget.RelativeLayout.LayoutParams(
          android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
          android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);

      // wrapping it in a timeout makes sure that when this function is loaded from
      // a Page.loaded event 'frame.topmost()' doesn't resolve to 'undefined'
      setTimeout(() => {
        frame.topmost().currentPage.android.getParent().addView(adViewLayout, relativeLayoutParamsOuter);
      }, 0);
    } catch (ex) {
      console.log("Error in firebase.admob.showBanner: " + ex);
      reject(ex);
    }
  });
};

firebase.admob.showInterstitial = arg => {
  return new Promise((resolve, reject) => {
    try {
      const settings = firebase.merge(arg, firebase.admob.defaults);
      const activity = appModule.android.foregroundActivity || appModule.android.startActivity;
      firebase.admob.interstitialView = new com.google.android.gms.ads.InterstitialAd(activity);
      firebase.admob.interstitialView.setAdUnitId(settings.androidInterstitialId);

      // Interstitial ads must be loaded before they can be shown, so adding a listener
      const InterstitialAdListener = com.google.android.gms.ads.AdListener.extend({
        onAdLoaded: () => {
          firebase.admob.interstitialView.show();
          resolve();
        },
        onAdFailedToLoad: errorCode => {
          reject(errorCode);
        },
        onAdClosed: () => {
          firebase.admob.interstitialView.setAdListener(null);
          firebase.admob.interstitialView = null;
        }
      });
      firebase.admob.interstitialView.setAdListener(new InterstitialAdListener());

      const ad = firebase.admob._buildAdRequest(settings);
      firebase.admob.interstitialView.loadAd(ad);
    } catch (ex) {
      console.log("Error in firebase.admob.showInterstitial: " + ex);
      reject(ex);
    }
  });
};

firebase.admob.hideBanner = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.admob.adView !== null) {
        const parent = firebase.admob.adView.getParent();
        if (parent !== null) {
          parent.removeView(firebase.admob.adView);
        }
        firebase.admob.adView = null;
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.admob.hideBanner: " + ex);
      reject(ex);
    }
  });
};

firebase.admob._getBannerType = size => {
  if (size === firebase.admob.AD_SIZE.BANNER) {
    return com.google.android.gms.ads.AdSize.BANNER;
  } else if (size === firebase.admob.AD_SIZE.LARGE_BANNER) {
    return com.google.android.gms.ads.AdSize.LARGE_BANNER;
  } else if (size === firebase.admob.AD_SIZE.MEDIUM_RECTANGLE) {
    return com.google.android.gms.ads.AdSize.MEDIUM_RECTANGLE;
  } else if (size === firebase.admob.AD_SIZE.FULL_BANNER) {
    return com.google.android.gms.ads.AdSize.FULL_BANNER;
  } else if (size === firebase.admob.AD_SIZE.LEADERBOARD) {
    return com.google.android.gms.ads.AdSize.LEADERBOARD;
  } else if (size === firebase.admob.AD_SIZE.SMART_BANNER) {
    return com.google.android.gms.ads.AdSize.SMART_BANNER;
  } else {
    return null;
  }
};

firebase.admob._buildAdRequest = settings => {
  const builder = new com.google.android.gms.ads.AdRequest.Builder();
  if (settings.testing) {
    builder.addTestDevice(com.google.android.gms.ads.AdRequest.DEVICE_ID_EMULATOR);
    // This will request test ads on the emulator and device by passing this hashed device ID.
    const activity = appModule.android.foregroundActivity || appModule.android.startActivity;
    const ANDROID_ID = android.provider.Settings.Secure.getString(activity.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
    let deviceId = firebase.admob._md5(ANDROID_ID);
    if (deviceId !== null) {
      deviceId = deviceId.toUpperCase();
      console.log("Treating this deviceId as testdevice: " + deviceId);
      builder.addTestDevice(deviceId);
    }
  }

  if (settings.keywords !== undefined && settings.keywords.length > 0) {
    for (let i = 0; i < settings.keywords.length; i++) {
      builder.addKeyword(settings.keywords[i]);
    }
  }

  const bundle = new android.os.Bundle();
  bundle.putInt("nativescript", 1);
  const adextras = new com.google.android.gms.ads.mediation.admob.AdMobExtras(bundle);
  // builder = builder.addNetworkExtras(adextras);
  return builder.build();
};

firebase.admob._md5 = input => {
  try {
    const digest = java.security.MessageDigest.getInstance("MD5");
    const bytes = [];
    for (let j = 0; j < input.length; ++j) {
      bytes.push(input.charCodeAt(j));
    }

    const s = new java.lang.String(input);
    digest.update(s.getBytes());
    const messageDigest = digest.digest();
    let hexString = "";
    for (let i = 0; i < messageDigest.length; i++) {
      let h = java.lang.Integer.toHexString(0xFF & messageDigest[i]);
      while (h.length < 2)
        h = "0" + h;
      hexString += h;
    }
    return hexString;

  } catch (noSuchAlgorithmException) {
    console.log("error generating md5: " + noSuchAlgorithmException);
    return null;
  }
};

firebase.getRemoteConfig = arg => {
  return new Promise((resolve, reject) => {

    if (typeof(com.google.firebase.remoteconfig) === "undefined") {
      reject("Uncomment firebase-config in the plugin's include.gradle first");
      return;
    }

    if (arg.properties === undefined) {
      reject("Argument 'properties' is missing");
      return;
    }

    const runGetRemoteConfig = () => {
      if (!firebase._isGooglePlayServicesAvailable()) {
        reject("Google Play services is required for this feature, but not available on this device");
        return;
      }

      // Get a Remote Config object instance
      const firebaseRemoteConfig = com.google.firebase.remoteconfig.FirebaseRemoteConfig.getInstance();

      // Enable developer mode to allow for frequent refreshes of the cache
      const remoteConfigSettings = new com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder()
          .setDeveloperModeEnabled(arg.developerMode || false)
          .build();
      firebaseRemoteConfig.setConfigSettings(remoteConfigSettings);

      const defaults = firebase.getRemoteConfigDefaults(arg.properties);
      firebaseRemoteConfig.setDefaults(firebase.toHashMap(defaults));

      const returnMethod = throttled => {
        firebaseRemoteConfig.activateFetched();

        const lastFetchTime = firebaseRemoteConfig.getInfo().getFetchTimeMillis();
        const lastFetch = new Date(lastFetchTime);

        const result = {
          lastFetch: lastFetch,
          throttled: throttled,
          properties: {}
        };

        for (const p in arg.properties) {
          const prop = arg.properties[p];
          const key = prop.key;
          const value = firebaseRemoteConfig.getString(key);
          // we could have the user pass in the type but this seems easier to use
          result.properties[key] = firebase.strongTypeify(value);
        }

        resolve(result);
      };

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => {
          returnMethod(false);
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          if (exception.getMessage() === "com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException") {
            returnMethod(true);
          } else {
            reject("Retrieving remote config data failed. " + exception);
          }
        }
      });

      // default 12 hours, just like the SDK does
      const expirationDuration = arg.cacheExpirationSeconds || 43200;

      firebaseRemoteConfig.fetch(expirationDuration)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);
    };

    try {
      if (appModule.android.foregroundActivity) {
        runGetRemoteConfig();
      } else {
        // if this is called before application.start() wait for the event to fire
        appModule.on(appModule.launchEvent, runGetRemoteConfig);
      }
    } catch (ex) {
      console.log("Error in firebase.getRemoteConfig: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const user = firebaseAuth.getCurrentUser();
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

firebase.sendEmailVerification = () => {
  return new Promise((resolve, reject) => {
    try {
      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const user = firebaseAuth.getCurrentUser();
      if (user !== null) {
        const addOnCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: task => {
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

firebase.logout = arg => {
  return new Promise((resolve, reject) => {
    try {
      com.google.firebase.auth.FirebaseAuth.getInstance().signOut();

      // also disconnect from Google otherwise ppl can't connect with a different account
      if (firebase._mGoogleApiClient) {
        com.google.android.gms.auth.api.Auth.GoogleSignInApi.revokeAccess(firebase._mGoogleApiClient);
      }

      if (typeof(com.facebook) !== "undefined" && typeof(com.facebook.login) !== "undefined") {
        com.facebook.login.LoginManager.getInstance().logOut();
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

firebase.getAuthToken = arg => {
  return new Promise((resolve, reject) => {
    try {
      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const user = firebaseAuth.getCurrentUser();
      if (user !== null) {
        const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
          onSuccess: getTokenResult => {
            resolve(getTokenResult.getToken());
          }
        });

        const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
          onFailure: exception => {
            reject(exception);
          }
        });

        user.getIdToken(arg.forceRefresh)
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
  const providers = [];
  const providerData = user.getProviderData();
  for (let i = 0; i < providerData.size(); i++) {
    const pid = providerData.get(i).getProviderId();
    if (pid === 'facebook.com') {
      providers.push({id: pid, token: firebase._facebookAccessToken});
    }
    else {
      providers.push({id: pid});
    }
  }

  return {
    uid: user.getUid(),
    name: user.getDisplayName(),
    email: user.getEmail(),
    emailVerified: user.isEmailVerified(),
    // provider: user.getProviderId(), // always 'firebase'
    providers: providers,
    anonymous: user.isAnonymous(),
    isAnonymous: user.isAnonymous(),
    phoneNumber: user.getPhoneNumber(),
    profileImageURL: user.getPhotoUrl() ? user.getPhotoUrl().toString() : null
  };
}

firebase.login = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (!firebase._isGooglePlayServicesAvailable()) {
        reject("Google Play services is required for this feature, but not available on this device");
        return;
      }

      firebase.moveLoginOptionsToObjects(arg);

      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (!task.isSuccessful()) {
            console.log("Logging in the user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            // also disconnect from Google otherwise ppl can't connect with a different account
            if (firebase._mGoogleApiClient) {
              com.google.android.gms.auth.api.Auth.GoogleSignInApi.revokeAccess(firebase._mGoogleApiClient);
            }
            reject("Logging in the user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
          } else {
            const user = task.getResult().getUser();
            resolve(toLoginResult(user));
          }
        }
      });

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        firebaseAuth.signInAnonymously().addOnCompleteListener(onCompleteListener);

      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.passwordOptions || !arg.passwordOptions.email || !arg.passwordOptions.password) {
          reject("Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument");
          return;
        }

        const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
        if (user) {
          if (firebase._alreadyLinkedToAuthProvider(user, "password")) {
            firebaseAuth.signInWithEmailAndPassword(arg.passwordOptions.email, arg.passwordOptions.password).addOnCompleteListener(onCompleteListener);
          } else {
            const authCredential = com.google.firebase.auth.EmailAuthProvider.getCredential(arg.passwordOptions.email, arg.passwordOptions.password);
            user.linkWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
          }
        } else {
          firebaseAuth.signInWithEmailAndPassword(arg.passwordOptions.email, arg.passwordOptions.password).addOnCompleteListener(onCompleteListener);
        }

      } else if (arg.type === firebase.LoginType.PHONE) {
        // https://firebase.google.com/docs/auth/android/phone-auth
        if (!arg.phoneOptions || !arg.phoneOptions.phoneNumber) {
          reject("Auth type PHONE requires a 'phoneOptions.phoneNumber' argument");
          return;
        }

        const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();

        if (user && firebase._alreadyLinkedToAuthProvider(user, "phone")) {
          // skip sending an SMS if user is already linked to the phone-provider
          resolve(toLoginResult(user));
          return;
        }

        // need these to support using phone auth more than once
        this.resolve = resolve;
        this.reject = reject;

        const OnVerificationStateChangedCallbacks = com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks.extend({
          onVerificationCompleted: phoneAuthCredential => {
            firebase._verifyPhoneNumberInProgress = false;
            const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();

            if (!user || firebase._alreadyLinkedToAuthProvider(user, "phone")) {
              // the user previously authenticated with phone (or no prompt was required), so sign in and complete
              firebaseAuth.signInWithCredential(phoneAuthCredential).addOnCompleteListener(onCompleteListener);
            } else {
              user.linkWithCredential(phoneAuthCredential).addOnCompleteListener(onCompleteListener);
            }
          },
          onVerificationFailed: firebaseException => {
            firebase._verifyPhoneNumberInProgress = false;
            const errorMessage = firebaseException.getMessage();
            if (errorMessage.indexOf("INVALID_APP_CREDENTIAL") > -1) {
              this.reject("Please upload the SHA1 fingerprint of your debug and release keystores to the Firebase console, see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/AUTHENTICATION.md#phone-verification");
            } else {
              this.reject(errorMessage);
            }
          },
          onCodeSent: (verificationId, forceResendingToken) => {
            // If the device has a SIM card auto-verification may occur in the background (eventually calling onVerificationCompleted)
            // .. so the prompt would be redundant, but it's recommended by Google not to wait to long before showing the prompt
            setTimeout(() => {
              if (firebase._verifyPhoneNumberInProgress) {
                firebase._verifyPhoneNumberInProgress = false;
                firebase.requestPhoneAuthVerificationCode(userResponse => {
                  const authCredential = com.google.firebase.auth.PhoneAuthProvider.getCredential(verificationId, userResponse);
                  const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();

                  if (!user || firebase._alreadyLinkedToAuthProvider(user, "phone")) {
                    firebaseAuth.signInWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                  } else {
                    user.linkWithCredential(authCredential).addOnCompleteListener(onCompleteListener);
                  }
                }, arg.phoneOptions.verificationPrompt);
              }
            }, 3000);
          }
        });

        firebase._verifyPhoneNumberInProgress = true;

        com.google.firebase.auth.PhoneAuthProvider.getInstance().verifyPhoneNumber(
            arg.phoneOptions.phoneNumber,
            60, // timeout (in seconds, because of the next argument)
            java.util.concurrent.TimeUnit.SECONDS,
            appModule.android.foregroundActivity, // or utils.ad.getApplicationContext()
            new OnVerificationStateChangedCallbacks());

      } else if (arg.type === firebase.LoginType.CUSTOM) {
        if (!arg.customOptions || (!arg.customOptions.token && !arg.customOptions.tokenProviderFn)) {
          reject("Auth type CUSTOM requires a 'customOptions.token' or 'customOptions.tokenProviderFn' argument");
          return;
        }

        if (arg.customOptions.token) {
          firebaseAuth.signInWithCustomToken(arg.customOptions.token).addOnCompleteListener(onCompleteListener);
        } else if (arg.customOptions.tokenProviderFn) {
          arg.customOptions.tokenProviderFn()
              .then(
                  token => {
                    firebaseAuth.signInWithCustomToken(token).addOnCompleteListener(onCompleteListener);
                  },
                  error => {
                    reject(error);
                  }
              );
        }

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (typeof(com.facebook) === "undefined") {
          reject("Facebook SDK not installed - see gradle config");
          return;
        }

        const fbLoginManager = com.facebook.login.LoginManager.getInstance();
        fbLoginManager.registerCallback(
            fbCallbackManager,
            new com.facebook.FacebookCallback({
              onSuccess: loginResult => {
                firebase._facebookAccessToken = loginResult.getAccessToken().getToken();
                const authCredential = com.google.firebase.auth.FacebookAuthProvider.getCredential(firebase._facebookAccessToken);

                const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
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
              onCancel: () => {
                reject("Facebook Login canceled");
              },
              onError: ex => {
                reject("Error while trying to login with Fb " + ex);
              }
            })
        );

        let scope = ["public_profile", "email"];
        if (arg.facebookOptions && arg.facebookOptions.scope) {
          scope = arg.facebookOptions.scope;
        }
        const permissions = utils.ad.collections.stringArrayToStringSet(scope);

        const activity = appModule.android.foregroundActivity;
        fbLoginManager.logInWithReadPermissions(activity, permissions);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (typeof(com.google.android.gms.auth.api.Auth) === "undefined") {
          reject("Google Sign In not installed - see gradle config");
          return;
        }

        const clientStringId = utils.ad.resources.getStringId("default_web_client_id");
        const clientId = utils.ad.getApplicationContext().getResources().getString(clientStringId);

        // Configure Google Sign In
        const googleSignInOptionsBuilder = new com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder(com.google.android.gms.auth.api.signin.GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(clientId)
            .requestEmail();

        if (arg.googleOptions && arg.googleOptions.hostedDomain) {
          googleSignInOptionsBuilder.setHostedDomain(arg.googleOptions.hostedDomain);
        }

        const googleSignInOptions = googleSignInOptionsBuilder.build();

        const onConnectionFailedListener = new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener({
          onConnectionFailed: connectionResult => {
            reject(connectionResult.getErrorMessage());
          }
        });

        firebase._mGoogleApiClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(com.tns.NativeScriptApplication.getInstance())
            .addOnConnectionFailedListener(onConnectionFailedListener)
            .addApi(com.google.android.gms.auth.api.Auth.GOOGLE_SIGN_IN_API, googleSignInOptions)
            .build();

        const signInIntent = com.google.android.gms.auth.api.Auth.GoogleSignInApi.getSignInIntent(firebase._mGoogleApiClient);

        appModule.android.currentContext.startActivityForResult(signInIntent, GOOGLE_SIGNIN_INTENT_ID);

        appModule.android.on(appModule.AndroidApplication.activityResultEvent, (eventData: AndroidActivityResultEventData) => {
          if (eventData.requestCode === GOOGLE_SIGNIN_INTENT_ID) {
            const googleSignInResult = com.google.android.gms.auth.api.Auth.GoogleSignInApi.getSignInResultFromIntent(eventData.intent);
            const success = googleSignInResult.isSuccess();
            if (success) {
              const googleSignInAccount = googleSignInResult.getSignInAccount();
              firebase._googleSignInIdToken = googleSignInAccount.getIdToken();
              const accessToken = null;
              const authCredential = com.google.firebase.auth.GoogleAuthProvider.getCredential(firebase._googleSignInIdToken, accessToken);

              firebase._mGoogleApiClient.connect();

              const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
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
              console.log("Make sure you've uploaded your SHA1 fingerprint(s) to the Firebase console");
              reject("Has the SHA1 fingerprint been uploaded? Sign-in status: " + googleSignInResult.getStatus());
            }
          }
        });

      } else {
        reject("Unsupported auth type: " + arg.type);
      }
    } catch (ex) {
      console.log("Error in firebase.login: " + ex);
      reject(ex);
    }
  });
};

firebase._alreadyLinkedToAuthProvider = (user, providerId) => {
  const providerData = user.getProviderData();
  for (let i = 0; i < providerData.size(); i++) {
    const profile = providerData.get(i);
    if (profile.getProviderId() === providerId) {
      return true;
    }
  }
  return false;
};

firebase.reauthenticate = arg => {
  return new Promise((resolve, reject) => {
    try {
      const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
      if (user === null) {
        reject("no current user");
        return;
      }

      firebase.moveLoginOptionsToObjects(arg);

      let authCredential = null;
      if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.passwordOptions || !arg.passwordOptions.email || !arg.passwordOptions.password) {
          reject("Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument");
          return;
        }
        authCredential = com.google.firebase.auth.EmailAuthProvider.getCredential(arg.passwordOptions.email, arg.passwordOptions.password);

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

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
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

firebase.reloadUser = () => {
  return new Promise((resolve, reject) => {
    try {
      const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
      if (user === null) {
        reject("no current user");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (task.isSuccessful()) {
            resolve();
          } else {
            reject("Reload failed " + task.getException());
          }
        }
      });

      user.reload().addOnCompleteListener(onCompleteListener);
    } catch (ex) {
      reject(ex);
    }
  });
};

firebase.resetPassword = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: task => {
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Sending password reset email failed");
            }
          }
        });

        const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        firebaseAuth.sendPasswordResetEmail(arg.email).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.resetPassword: " + ex);
      reject(ex);
    }
  });
};

firebase.changePassword = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: task => {
            console.log("--- changed pwd: " + task);
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Updating password failed");
            }
          }
        });

        const user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();

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

firebase.createUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

        const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: task => {
            // see https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth#public-methods
            if (!task.isSuccessful()) {
              reject("Creating a user failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            } else {
              const user = task.getResult().getUser();
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

firebase.deleteUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const user = firebaseAuth.getCurrentUser();

      if (user === null) {
        reject("no current user");
        return;
      }

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
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

firebase.updateProfile = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (!arg.displayName && !arg.photoURL) {
        reject("Updating a profile requires a displayName and / or a photoURL argument");
      } else {
        const firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        const user = firebaseAuth.getCurrentUser();

        if (user === null) {
          reject("No current user");
          return;
        }

        const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: task => {
            if (task.isSuccessful()) {
              resolve();
            } else {
              reject("Updating a profile failed. " + (task.getException() && task.getException().getReason ? task.getException().getReason() : task.getException()));
            }
          }
        });

        const profileUpdateBuilder = new com.google.firebase.auth.UserProfileChangeRequest.Builder();

        if (arg.displayName)
          profileUpdateBuilder.setDisplayName(arg.displayName);

        if (arg.photoURL)
          profileUpdateBuilder.setPhotoUri(android.net.Uri.parse(arg.photoURL));

        const profileUpdate = profileUpdateBuilder.build();
        user.updateProfile(profileUpdate).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.updateProfile: " + ex);
      reject(ex);
    }
  });
};

firebase.keepInSync = (path, switchOn) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      const where = firebase.instance.child(path);
      where.keepSynced(switchOn);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.keepInSync: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = (to, updateCallback) => {
  const listener = new com.google.firebase.database.ChildEventListener({
    onCancelled: error => {
      updateCallback({
        type: 'Cancelled'
      });
    },
    onChildAdded: (snapshot, previousChildKey) => {
      updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
    },
    onChildRemoved: snapshot => {
      updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
    },
    onChildChanged: (snapshot, previousChildKey) => {
      updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
    },
    onChildMoved: (snapshot, previousChildKey) => {
      updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
    }
  });
  to.addChildEventListener(listener);
  return listener;
};

firebase.addChildEventListener = (updateCallback, path) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

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

firebase.addValueEventListener = (updateCallback, path) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      const listener = new com.google.firebase.database.ValueEventListener({
        onDataChange: snapshot => {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
        },
        onCancelled: databaseError => {
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

firebase.getValue = path => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      const listener = new com.google.firebase.database.ValueEventListener({
        onDataChange: snapshot => {
          resolve(firebase.getCallbackData('ValueChanged', snapshot));
        },
        onCancelled: databaseError => {
          reject(databaseError.getMessage());
        }
      });
      firebase.instance.child(path).addListenerForSingleValueEvent(listener);
    } catch (ex) {
      console.log("Error in firebase.getValue: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListeners = (listeners, path) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      const ref = firebase.instance.child(path);
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
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

firebase.push = (path, val) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      const pushInstance = firebase.instance.child(path).push();
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

firebase.setValue = (path, val) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      firebase.instance.child(path).setValue(firebase.toValue(val));
      resolve();
    } catch (ex) {
      console.log("Error in firebase.setValue: " + ex);
      reject(ex);
    }
  });
};

firebase.update = (path, val) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      if (typeof val === "object") {
        firebase.instance.child(path).updateChildren(firebase.toHashMap(val));
      } else {
        const lastPartOfPath = path.lastIndexOf("/");
        const pathPrefix = path.substring(0, lastPartOfPath);
        const pathSuffix = path.substring(lastPartOfPath + 1);
        const updateObject = '{"' + pathSuffix + '" : "' + val + '"}';
        firebase.instance.child(pathPrefix).updateChildren(firebase.toHashMap(JSON.parse(updateObject)));
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.update: " + ex);
      reject(ex);
    }
  });
};

firebase.query = (updateCallback, path, options) => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }

      let query;

      // orderBy
      if (options.orderBy.type === firebase.QueryOrderByType.KEY) {
        query = firebase.instance.child(path).orderByKey();
      } else if (options.orderBy.type === firebase.QueryOrderByType.VALUE) {
        query = firebase.instance.child(path).orderByValue();
      } else if (options.orderBy.type === firebase.QueryOrderByType.PRIORITY) {
        query = firebase.instance.child(path).orderByPriority();
      } else if (options.orderBy.type === firebase.QueryOrderByType.CHILD) {
        if (options.orderBy.value === undefined || options.orderBy.value === null) {
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
        // https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/319
        // if (options.range.value === undefined || options.range.value === null) {
        //   reject("Please set range.value");
        //   return;
        // }
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
        for (let i = 0; i < options.ranges.length; i++) {
          const range = options.ranges[i];
          if (range.value === undefined || range.value === null) {
            reject("Please set ranges[" + i + "].value");
            return;
          }
          if (range.type === firebase.QueryRangeType.START_AT) {
            query = query.startAt(range.value);
          } else if (range.type === firebase.QueryRangeType.END_AT) {
            query = query.endAt(range.value);
          } else if (range.type === firebase.QueryRangeType.EQUAL_TO) {
            query = query.equalTo(range.value);
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
          query = query.limitToFirst(options.limit.value);
        } else if (options.limit.type === firebase.QueryLimitType.LAST) {
          query = query.limitToLast(options.limit.value);
        } else {
          reject("Invalid limit.type, use constants like firebase.QueryLimitType.FIRST");
          return;
        }
      }

      if (options.singleEvent) {
        const listener = new com.google.firebase.database.ValueEventListener({
          onDataChange: snapshot => {
            const data = firebase.getCallbackData('ValueChanged', snapshot);
            if (updateCallback) updateCallback(data);
            // resolve promise with data in case of single event, see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/126
            resolve(data);
          },
          onCancelled: databaseError => {
            if (updateCallback) updateCallback({
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

firebase.remove = path => {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.instance === null) {
        reject("Run init() first!");
        return;
      }
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

  return arg.bucket ? com.google.firebase.storage.FirebaseStorage.getInstance().getReferenceFromUrl(arg.bucket) : firebase.storage;
}

firebase.uploadFile = arg => {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: uploadTaskSnapshot => {
          const metadata = uploadTaskSnapshot.getMetadata();
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

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject("Upload failed. " + exception);
        }
      });

      const onProgressListener = new com.google.firebase.storage.OnProgressListener({
        onProgress: snapshot => {
          if (typeof(arg.onProgress) === "function") {
            const fractionCompleted = snapshot.getBytesTransferred() / snapshot.getTotalByteCount();
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
        const localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFile.path));
        const uploadFileTask = storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);

        /*
        var error;
        var contents = arg.localFile.readSync(e => { error = e; });

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

        const localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFullPath));
        const uploadFileTask = storageReference.putFile(localFileUrl)
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

firebase.downloadFile = arg => {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: downloadTaskSnapshot => resolve()
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject("Download failed. " + exception)
      });

      let localFilePath;

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

      const file = new java.io.File(localFilePath);

      storageReference.getFile(file)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.downloadFile: " + ex);
      reject(ex);
    }
  });
};

firebase.getDownloadUrl = arg => {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: uri => {
          resolve(uri.toString());
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
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

firebase.deleteFile = arg => {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => {
          resolve();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
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

firebase.subscribeToTopic = topicName => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      com.google.firebase.messaging.FirebaseMessaging.getInstance().subscribeToTopic(topicName);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.subscribeToTopic: " + ex);
      reject(ex);
    }
  });
};

firebase.unsubscribeFromTopic = topicName => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.messaging) === "undefined") {
        reject("Uncomment firebase-messaging in the plugin's include.gradle first");
        return;
      }

      com.google.firebase.messaging.FirebaseMessaging.getInstance().unsubscribeFromTopic(topicName);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.unsubscribeFromTopic: " + ex);
      reject(ex);
    }
  });
};

firebase.sendCrashLog = arg => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.crash) === "undefined") {
        reject("Make sure firebase-crash is in the plugin's include.gradle");
        return;
      }

      if (!arg.message) {
        reject("The mandatory 'message' argument is missing");
        return;
      }

      com.google.firebase.crash.FirebaseCrash.log(arg.message);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.sendCrashLog: " + ex);
      reject(ex);
    }
  });
};

firebase.invites.sendInvitation = arg => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.android.gms.appinvite) === "undefined") {
        reject("Make sure firebase-invites is in the plugin's include.gradle");
        return;
      }

      if (!arg.message || !arg.title) {
        reject("The mandatory 'message' or 'title' argument is missing");
        return;
      }

      const builder = new com.google.android.gms.appinvite.AppInviteInvitation.IntentBuilder(arg.title).setMessage(arg.message);

      if (arg.deepLink) {
        builder.setDeepLink(android.net.Uri.parse(arg.deepLink));
      }

      if (arg.callToActionText) {
        builder.setCallToActionText(arg.callToActionText);
      }

      if (arg.customImage) {
        builder.setCustomImage(android.net.Uri.parse(arg.customImage));
      }

      if (arg.iosClientID) {
        builder.setOtherPlatformsTargetApplication(com.google.android.gms.appinvite.AppInviteInvitation.IntentBuilder.PlatformMode.PROJECT_PLATFORM_IOS, arg.iosClientID);
      }

      const firebaseInviteIntent = builder.build();

      appModule.android.foregroundActivity.startActivityForResult(firebaseInviteIntent, REQUEST_INVITE_INTENT_ID);

      appModule.android.on(appModule.AndroidApplication.activityResultEvent, (eventData: AndroidActivityResultEventData) => {
        if (eventData.requestCode === REQUEST_INVITE_INTENT_ID) {
          if (eventData.resultCode === android.app.Activity.RESULT_OK) {
            // Get the invitation IDs of all sent messages
            const ids = com.google.android.gms.appinvite.AppInviteInvitation.getInvitationIds(eventData.resultCode, eventData.intent);

            try {
              resolve({
                count: ids.length,
                invitationIds: firebase.toJsObject(ids)
              });
            } catch (e) {
              reject(e);
            }

          } else {
            if (eventData.resultCode === 3) {
              reject("Resultcode 3, see http://stackoverflow.com/questions/37883664/result-code-3-when-implementing-appinvites");
            } else {
              reject("Resultcode: " + eventData.resultCode);
            }
          }
        }
      });

    } catch (ex) {
      console.log("Error in firebase.sendInvitation: " + ex);
      reject(ex);
    }
  });
};

firebase.invites.getInvitation = () => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.android.gms.appinvite) === "undefined") {
        reject("Make sure firebase-invites is in the plugin's include.gradle");
        return;
      }

      const onConnectionFailedListener = new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener({
        onConnectionFailed: connectionResult => {
          // we shouldn't reject on connection failure as the invitation link may still be available locally
          // reject(connectionResult.getErrorMessage());
        }
      });

      firebase._mGoogleInviteApiClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(com.tns.NativeScriptApplication.getInstance())
          .addOnConnectionFailedListener(onConnectionFailedListener)
          .addApi(com.google.android.gms.appinvite.AppInvite.API)
          .build();

      firebase._mGoogleInviteApiClient.connect();

      const firebaseDynamicLinks = com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: pendingDynamicLinkData => {
          if (pendingDynamicLinkData === null) {
            reject("Not launched by invitation");
            return;
          }

          // get the deeplink
          const deepLinkUri = pendingDynamicLinkData.getLink();

          // extract invite
          const firebaseAppInvite = com.google.firebase.appinvite.FirebaseAppInvite.getInvitation(pendingDynamicLinkData);

          resolve({
            deepLink: deepLinkUri === null ? null : deepLinkUri.toString(),
            matchType: deepLinkUri === null ? null : 1,
            invitationId: firebaseAppInvite.getInvitationId() // string | null
          });
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject(exception.getMessage());
        }
      });

      firebaseDynamicLinks.getDynamicLink(appModule.android.startActivity.getIntent())
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.getInvitation: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.collection = (collectionPath: string): firestore.CollectionReference => {
  try {

    if (typeof(com.google.firebase.firestore) === "undefined") {
      console.log("Make sure firebase-firestore is in the plugin's include.gradle");
      return null;
    }

    const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();
    const collectionRef: com.google.firebase.firestore.CollectionReference = db.collection(collectionPath);

    return {
      id: collectionRef.getId(),
      doc: (documentPath?: string) => firebase.firestore.doc(collectionPath, documentPath),
      add: document => firebase.firestore.add(collectionPath, document),
      get: () => firebase.firestore.get(collectionPath),
      where: (fieldPath: string, opStr: firestore.WhereFilterOp, value: any) => firebase.firestore.where(collectionPath, fieldPath, opStr, value),
      orderBy: (fieldPath: string, directionStr: firestore.OrderByDirection): firestore.Query => firebase.firestore.orderBy(collectionPath, fieldPath, directionStr, collectionRef),
      limit: (limit: number): firestore.Query => firebase.firestore.limit(collectionPath, limit, collectionRef),
      onSnapshot: (callback: (snapshot: QuerySnapshot) => void) => firebase.firestore.onCollectionSnapshot(collectionRef, callback)
    };

  } catch (ex) {
    console.log("Error in firebase.firestore.collection: " + ex);
    return null;
  }
};

firebase.firestore.onDocumentSnapshot = (docRef: com.google.firebase.firestore.DocumentReference, callback: (doc: DocumentSnapshot) => void): () => void => {
  const listener = docRef.addSnapshotListener(new com.google.firebase.firestore.EventListener({
        onEvent: ((snapshot: com.google.firebase.firestore.DocumentSnapshot, exception) => {
          if (exception === null) {
            callback(new DocumentSnapshot(snapshot ? snapshot.getId() : null, snapshot.exists(), firebase.toJsObject(snapshot.getData())));
          }
        })
      })
  );

  return () => listener.remove();
};

firebase.firestore.onCollectionSnapshot = (colRef: com.google.firebase.firestore.CollectionReference, callback: (snapshot: QuerySnapshot) => void): () => void => {
  const listener = colRef.addSnapshotListener(new com.google.firebase.firestore.EventListener({
        onEvent: ((snapshot: com.google.firebase.firestore.QuerySnapshot, exception) => {
          if (exception !== null) {
            return;
          }

          const docSnapshots: Array<firestore.DocumentSnapshot> = [];
          for (let i = 0; i < snapshot.size(); i++) {
            const documentSnapshot: com.google.firebase.firestore.DocumentSnapshot = snapshot.getDocuments().get(i);
            docSnapshots.push(new DocumentSnapshot(documentSnapshot.getId(), true, firebase.toJsObject(documentSnapshot.getData())));
          }
          const snap = new QuerySnapshot();
          snap.docSnapshots = docSnapshots;
          callback(snap);
        })
      })
  );

  return () => listener.remove();
};

firebase.firestore._getDocumentReference = (javaObj, collectionPath, documentPath): firestore.DocumentReference => {
  return {
    id: javaObj.getId(),
    collection: cp => firebase.firestore.collection(`${collectionPath}/${documentPath}/${cp}`),
    set: (data: any, options?: firestore.SetOptions) => firebase.firestore.set(collectionPath, javaObj.getId(), data, options),
    get: () => firebase.firestore.getDocument(collectionPath, javaObj.getId()),
    update: (data: any) => firebase.firestore.update(collectionPath, javaObj.getId(), data),
    delete: () => firebase.firestore.delete(collectionPath, javaObj.getId()),
    onSnapshot: (callback: (doc: DocumentSnapshot) => void) => firebase.firestore.onDocumentSnapshot(javaObj, callback),
    android: javaObj
  };
};

firebase.firestore.doc = (collectionPath: string, documentPath?: string): firestore.DocumentReference => {
  try {
    if (typeof(com.google.firebase.firestore) === "undefined") {
      console.log("Make sure firebase-firestore is in the plugin's include.gradle");
      return null;
    }

    const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();
    const colRef: com.google.firebase.firestore.CollectionReference = db.collection(collectionPath);
    const docRef: com.google.firebase.firestore.DocumentReference = documentPath ? colRef.document(documentPath) : colRef.document();
    return firebase.firestore._getDocumentReference(docRef, collectionPath, documentPath);
  } catch (ex) {
    console.log("Error in firebase.firestore.doc: " + ex);
    return null;
  }
};

firebase.firestore.add = (collectionPath: string, document: any): Promise<firestore.DocumentReference> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: (docRef: com.google.firebase.firestore.DocumentReference) => {
          resolve({
            id: docRef.getId(),
            collection: cp => firebase.firestore.collection(cp),
            set: (data: any, options?: firestore.SetOptions) => firebase.firestore.set(collectionPath, docRef.getId(), data, options),
            get: () => firebase.firestore.getDocument(collectionPath, docRef.getId()),
            update: (data: any) => firebase.firestore.update(collectionPath, docRef.getId(), data),
            delete: () => firebase.firestore.delete(collectionPath, docRef.getId()),
            onSnapshot: (callback: (doc: DocumentSnapshot) => void) => firebase.firestore.onDocumentSnapshot(docRef, callback)
          });
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      db.collection(collectionPath)
          .add(firebase.toValue(document))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.firestore.add: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.set = (collectionPath: string, documentPath: string, document: any, options?: firestore.SetOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => resolve()
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      const docRef: com.google.firebase.firestore.DocumentReference = db.collection(collectionPath).document(documentPath);
      if (options && options.merge) {
        docRef
            .set(firebase.toValue(document), com.google.firebase.firestore.SetOptions.merge())
            .addOnSuccessListener(onSuccessListener)
            .addOnFailureListener(onFailureListener);
      } else {
        docRef
            .set(firebase.toValue(document))
            .addOnSuccessListener(onSuccessListener)
            .addOnFailureListener(onFailureListener);
      }

    } catch (ex) {
      console.log("Error in firebase.firestore.set: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.update = (collectionPath: string, documentPath: string, document: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => resolve()
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      const docRef: com.google.firebase.firestore.DocumentReference = db.collection(collectionPath).document(documentPath);
      docRef
          .update(firebase.toValue(document))
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.firestore.update: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.delete = (collectionPath: string, documentPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => resolve()
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject(exception.getMessage())
      });

      const docRef: com.google.firebase.firestore.DocumentReference = db.collection(collectionPath).document(documentPath);
      docRef
          .delete()
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.firestore.delete: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.getCollection = (collectionPath: string): Promise<firestore.QuerySnapshot> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (!task.isSuccessful()) {
            const ex = task.getException();
            reject(ex && ex.getReason ? ex.getReason() : ex);
          } else {
            const result: com.google.firebase.firestore.QuerySnapshot = task.getResult();
            const docSnapshots: Array<firestore.DocumentSnapshot> = [];
            for (let i = 0; i < result.size(); i++) {
              const documentSnapshot: com.google.firebase.firestore.DocumentSnapshot = result.getDocuments().get(i);
              docSnapshots.push(new DocumentSnapshot(documentSnapshot.getId(), true, firebase.toJsObject(documentSnapshot.getData())));
            }
            const snap = new QuerySnapshot();
            snap.docSnapshots = docSnapshots;
            resolve(snap);
          }
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject(exception.getMessage());
        }
      });

      db.collection(collectionPath)
          .get()
          .addOnCompleteListener(onCompleteListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.firestore.getCollection: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.get = (collectionPath: string): Promise<firestore.QuerySnapshot> => {
  return firebase.firestore.getCollection(collectionPath);
};

firebase.firestore.getDocument = (collectionPath: string, documentPath: string): Promise<firestore.DocumentSnapshot> => {
  return new Promise((resolve, reject) => {
    try {

      if (typeof(com.google.firebase.firestore) === "undefined") {
        reject("Make sure firebase-firestore is in the plugin's include.gradle");
        return;
      }

      const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();

      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (!task.isSuccessful()) {
            const ex = task.getException();
            reject(ex && ex.getReason ? ex.getReason() : ex);
          } else {
            const result: com.google.firebase.firestore.DocumentSnapshot = task.getResult();
            const exists = result.exists();
            resolve(new DocumentSnapshot(exists ? result.getId() : null, exists, firebase.toJsObject(result.getData())));
          }
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject(exception.getMessage());
        }
      });

      db.collection(collectionPath)
          .document(documentPath)
          .get()
          .addOnCompleteListener(onCompleteListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.firestore.getDocument: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore._getQuery = (collectionPath: string, query: com.google.firebase.firestore.Query): firestore.Query => {
  return {
    get: () => new Promise((resolve, reject) => {
      const onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
        onComplete: task => {
          if (!task.isSuccessful()) {
            const ex = task.getException();
            reject(ex && ex.getReason ? ex.getReason() : ex);
          } else {
            const result: com.google.firebase.firestore.QuerySnapshot = task.getResult();
            const docSnapshots: Array<firestore.DocumentSnapshot> = [];
            for (let i = 0; i < result.size(); i++) {
              const documentSnapshot: com.google.firebase.firestore.DocumentSnapshot = result.getDocuments().get(i);
              docSnapshots.push(new DocumentSnapshot(documentSnapshot.getId(), true, firebase.toJsObject(documentSnapshot.getData())));
            }
            const snap = new QuerySnapshot();
            snap.docSnapshots = docSnapshots;
            resolve(snap);
          }
        }
      });
      query.get().addOnCompleteListener(onCompleteListener);
    }),
    where: (fp: string, os: firestore.WhereFilterOp, v: any): firestore.Query => firebase.firestore.where(collectionPath, fp, os, v, query),
    orderBy: (fp: string, directionStr: firestore.OrderByDirection): firestore.Query => firebase.firestore.orderBy(collectionPath, fp, directionStr, query),
    limit: (limit: number): firestore.Query => firebase.firestore.limit(collectionPath, limit, query),
    onSnapshot: (callback: (snapshot: QuerySnapshot) => void) => firebase.firestore.onCollectionSnapshot(query, callback)
  };
};

firebase.firestore.where = (collectionPath: string, fieldPath: string, opStr: firestore.WhereFilterOp, value: any, query?: com.google.firebase.firestore.Query): firestore.Query => {
  try {
    if (typeof(com.google.firebase.firestore) === "undefined") {
      console.log("Make sure firebase-firestore is in the plugin's include.gradle");
      return null;
    }

    const db = com.google.firebase.firestore.FirebaseFirestore.getInstance();
    query = query || db.collection(collectionPath);

    if (opStr === "<") {
      query = query.whereLessThan(fieldPath, firebase.toValue(value));
    } else if (opStr === "<=") {
      query = query.whereLessThanOrEqualTo(fieldPath, firebase.toValue(value));
    } else if (opStr === "==") {
      query = query.whereEqualTo(fieldPath, firebase.toValue(value));
    } else if (opStr === ">=") {
      query = query.whereGreaterThanOrEqualTo(fieldPath, firebase.toValue(value));
    } else if (opStr === ">") {
      query = query.whereGreaterThan(fieldPath, firebase.toValue(value));
    } else {
      console.log("Illegal argument for opStr: " + opStr);
      return null;
    }

    return firebase.firestore._getQuery(collectionPath, query);

  } catch (ex) {
    console.log("Error in firebase.firestore.where: " + ex);
    return null;
  }
};

firebase.firestore.orderBy = (collectionPath: string, fieldPath: string, direction: firestore.OrderByDirection, query: com.google.firebase.firestore.Query): firestore.Query => {
  query = query.orderBy(fieldPath, direction === "desc" ? com.google.firebase.firestore.Query.Direction.DESCENDING : com.google.firebase.firestore.Query.Direction.ASCENDING);
  return firebase.firestore._getQuery(collectionPath, query);
};

firebase.firestore.limit = (collectionPath: string, limit: number, query: com.google.firebase.firestore.Query): firestore.Query => {
  query = query.limit(limit);
  return firebase.firestore._getQuery(collectionPath, query);
};

module.exports = firebase;
