import {
  DocumentSnapshot as DocumentSnapshotBase,
  FieldValue,
  firebase,
  GeoPoint,
  isDocumentReference
} from "./firebase-common";
import * as firebaseMessaging from "./messaging/messaging";
import * as application from "tns-core-modules/application/application";
import { ios as iOSUtils } from "tns-core-modules/utils/utils";
import * as firebaseFunctions from './functions/functions';
import { firestore, User, OnDisconnect as OnDisconnectBase } from "./firebase";
import { firebaseUtils } from "./utils";

firebase._gIDAuthentication = null;
firebase._cachedInvitation = null;
firebase._cachedDynamicLink = null;
firebase._configured = false;

const useExternalPushProvider = NSBundle.mainBundle.infoDictionary.objectForKey("UseExternalPushProvider") === true;

class DocumentSnapshot extends DocumentSnapshotBase {
  ios: FIRDocumentSnapshot;

  constructor(snapshot: FIRDocumentSnapshot) {
    super(snapshot.documentID, snapshot.exists, firebaseUtils.toJsObject(snapshot.data()), convertDocRef(snapshot.reference));
    this.ios = snapshot;
  }
}

// Note that FIRApp.configure must be called only once, but not here (see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/564)

firebase.authStateListener = null;
firebase.addOnMessageReceivedCallback = firebaseMessaging.addOnMessageReceivedCallback;
firebase.addOnPushTokenReceivedCallback = firebaseMessaging.addOnPushTokenReceivedCallback;
firebase.registerForPushNotifications = firebaseMessaging.registerForPushNotifications;
firebase.unregisterForPushNotifications = firebaseMessaging.unregisterForPushNotifications;
firebase.getCurrentPushToken = firebaseMessaging.getCurrentPushToken;
firebase.registerForInteractivePush = firebaseMessaging.registerForInteractivePush;
firebase.subscribeToTopic = firebaseMessaging.subscribeToTopic;
firebase.unsubscribeFromTopic = firebaseMessaging.unsubscribeFromTopic;
firebase.areNotificationsEnabled = firebaseMessaging.areNotificationsEnabled;

firebase.functions = firebaseFunctions;

firebase.addAppDelegateMethods = appDelegate => {
  // we need the launchOptions for this one so it's a bit hard to use the UIApplicationDidFinishLaunchingNotification pattern we're using for other things
  appDelegate.prototype.applicationDidFinishLaunchingWithOptions = (application, launchOptions) => {
    if (!firebase._configured) {
      firebase._configured = true;
      if (typeof (FIRApp) !== "undefined") {
        FIRApp.configure();
      }
    }
    // If the app was terminated and the iOS is launching it in result of push notification tapped by the user, this will hold the notification data.
    if (launchOptions) {
      const remoteNotification = launchOptions.objectForKey(UIApplicationLaunchOptionsRemoteNotificationKey);
      if (remoteNotification) {
        firebaseMessaging.handleRemoteNotification(application, remoteNotification);
      }
    }
    // Firebase Facebook authentication
    if (typeof (FBSDKApplicationDelegate) !== "undefined") {
      FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
    }
    return true;
  };

  // there's no notification event to hook into for this one, so using the appDelegate
  if (typeof (FBSDKApplicationDelegate) !== "undefined" || typeof (GIDSignIn) !== "undefined" || typeof (FIRInvites) !== "undefined" || typeof (FIRDynamicLink) !== "undefined") {
    appDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = (application, url, sourceApplication, annotation) => {
      let result = false;
      if (typeof (FBSDKApplicationDelegate) !== "undefined") {
        result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
      }

      if (typeof (GIDSignIn) !== "undefined") {
        result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
      }

      if (typeof (FIRInvites) !== "undefined") {
        const receivedInvite: FIRReceivedInvite = FIRInvites.handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
        if (receivedInvite) {
          console.log("Deep link from " + sourceApplication + ", Invite ID: " + receivedInvite.inviteId + ", App URL: " + receivedInvite.deepLink);
          firebase._cachedInvitation = {
            deepLink: receivedInvite.deepLink,
            matchType: receivedInvite.matchType,
            invitationId: receivedInvite.inviteId
          };
          result = true;
        }
      }

      if (typeof (FIRDynamicLink) !== "undefined") {
        const dynamicLink = FIRDynamicLinks.dynamicLinks().dynamicLinkFromCustomSchemeURL(url);
        if (dynamicLink) {
          console.log(">>> dynamicLink.url.absoluteString: " + dynamicLink.url.absoluteString);
          firebase._cachedDynamicLink = {
            url: dynamicLink.url.absoluteString,
            // matchConfidence: dynamicLink.matchConfidence,
            minimumAppVersion: dynamicLink.minimumAppVersion
          };
          result = true;
        }
      }

      return result;
    };
  }

  if (typeof (FBSDKApplicationDelegate) !== "undefined" || typeof (GIDSignIn) !== "undefined" || typeof (FIRDynamicLink) !== "undefined") {
    appDelegate.prototype.applicationOpenURLOptions = (application, url, options) => {
      let result = false;
      if (typeof (FBSDKApplicationDelegate) !== "undefined") {
        result = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(
            application,
            url,
            options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
            options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      }

      if (typeof (GIDSignIn) !== "undefined") {
        result = result || GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(
            url,
            options.valueForKey(UIApplicationOpenURLOptionsSourceApplicationKey),
            options.valueForKey(UIApplicationOpenURLOptionsAnnotationKey));
      }

      if (typeof (FIRDynamicLink) !== "undefined") {
        const dynamicLinks: FIRDynamicLinks = FIRDynamicLinks.dynamicLinks();
        const dynamicLink: FIRDynamicLink = dynamicLinks.dynamicLinkFromCustomSchemeURL(url);
        if (dynamicLink) {
          if (dynamicLink.url !== null) {
            console.log(">>> dynamicLink.url.absoluteString: " + dynamicLink.url.absoluteString);
            if (firebase._dynamicLinkCallback) {
              firebase._dynamicLinkCallback({
                url: dynamicLink.url.absoluteString,
                // matchConfidence: dynamicLink.matchConfidence,
                minimumAppVersion: dynamicLink.minimumAppVersion
              });
            } else {
              firebase._cachedDynamicLink = {
                url: dynamicLink.url.absoluteString,
                // matchConfidence: dynamicLink.matchConfidence,
                minimumAppVersion: dynamicLink.minimumAppVersion
              };
            }
            result = true;
          }
        }
      }
      return result;
    };
  }

  if (typeof (FIRDynamicLink) !== "undefined") {
    appDelegate.prototype.applicationContinueUserActivityRestorationHandler = (application, userActivity, restorationHandler) => {
      let result = false;

      if (userActivity.webpageURL) {
        // check for an email-link-login flow

        const fAuth = (typeof (FIRAuth) !== "undefined") ? FIRAuth.auth() : undefined;
        if (fAuth && fAuth.isSignInWithEmailLink(userActivity.webpageURL.absoluteString)) {
          const rememberedEmail = firebase.getRememberedEmailForEmailLinkLogin();
          if (rememberedEmail !== undefined) {

            if (fAuth.currentUser) {
              const onCompletionLink = (result: FIRAuthDataResult, error: NSError) => {
                if (error) {
                  // ignore, and complete the email link sign in flow
                  fAuth.signInWithEmailLinkCompletion(rememberedEmail, userActivity.webpageURL.absoluteString, (authData: FIRAuthDataResult, error: NSError) => {
                    if (!error) {
                      firebase.notifyAuthStateListeners({
                        loggedIn: true,
                        user: toLoginResult(authData.user)
                      });
                    }
                  });
                } else {
                  // linking successful, so the user can now log in with either their email address, or however he logged in previously
                  firebase.notifyAuthStateListeners({
                    loggedIn: true,
                    user: toLoginResult(result.user)
                  });
                }
              };
              const fIRAuthCredential = FIREmailAuthProvider.credentialWithEmailLink(rememberedEmail, userActivity.webpageURL.absoluteString);
              fAuth.currentUser.linkAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

            } else {
              fAuth.signInWithEmailLinkCompletion(rememberedEmail, userActivity.webpageURL.absoluteString, (authData: FIRAuthDataResult, error: NSError) => {
                if (error) {
                  console.log(error.localizedDescription);
                } else {
                  firebase.notifyAuthStateListeners({
                    loggedIn: true,
                    user: toLoginResult(authData.user)
                  });
                }
              });
            }
          }
          result = true;

        } else {
          result = FIRDynamicLinks.dynamicLinks().handleUniversalLinkCompletion(userActivity.webpageURL, (dynamicLink, error) => {
            if (dynamicLink.url !== null) {
              if (firebase._dynamicLinkCallback) {
                firebase._dynamicLinkCallback({
                  url: dynamicLink.url.absoluteString,
                  // matchConfidence: dynamicLink.matchConfidence,
                  minimumAppVersion: dynamicLink.minimumAppVersion
                });
              } else {
                firebase._cachedDynamicLink = {
                  url: dynamicLink.url.absoluteString,
                  // matchConfidence: dynamicLink.matchConfidence,
                  minimumAppVersion: dynamicLink.minimumAppVersion
                };
              }
            }
          });
        }
      }
      return result;
    };
  }

  // only add the push notification delegate methods if either FIRMessaging is enabled, or an external push provider is being used
  if (typeof (FIRMessaging) !== "undefined" || useExternalPushProvider) {
    firebaseMessaging.addBackgroundRemoteNotificationHandler(appDelegate);
  }
};

firebase.fetchProvidersForEmail = email => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (email) !== "string") {
        reject("A parameter representing an email address is required.");
        return;
      }

      FIRAuth.auth().fetchProvidersForEmailCompletion(email, (providerNSArray, error) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(firebaseUtils.toJsObject(providerNSArray));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.fetchProvidersForEmail: " + ex);
      reject(ex);
    }
  });
};

firebase.fetchSignInMethodsForEmail = email => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (email) !== "string") {
        reject("A parameter representing an email address is required.");
        return;
      }

      FIRAuth.auth().fetchSignInMethodsForEmailCompletion(email, (methodsNSArray, error) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(firebaseUtils.toJsObject(methodsNSArray));
        }
      });
    } catch (ex) {
      console.log("Error in firebase.fetchSignInMethodsForEmail: " + ex);
      reject(ex);
    }
  });
};

firebase.addOnDynamicLinkReceivedCallback = callback => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRDynamicLink) === "undefined") {
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

if (typeof (FIRMessaging) !== "undefined" || useExternalPushProvider) {
  firebaseMessaging.prepAppDelegate();
}

function getAppDelegate() {
  // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
  if (application.ios.delegate === undefined) {

    @ObjCClass(UIApplicationDelegate)
    class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
    }

    application.ios.delegate = UIApplicationDelegateImpl;
  }
  return application.ios.delegate;
}

firebase.addAppDelegateMethods(getAppDelegate());

firebase.getCallbackData = (type, snapshot: FIRDataSnapshot) => {
  return {
    type: type,
    key: snapshot.key,
    value: firebaseUtils.toJsObject(snapshot.value)
  };
};

firebase.init = arg => {
  return new Promise((resolve, reject) => {
    if (firebase.initialized) {
      reject("Firebase already initialized");
      return;
    }

    firebase.initialized = true;

    try {
      try {
        // this is only available when the Realtime DB Pod is loaded
        if (typeof (FIRServerValue) !== "undefined") {
          firebase.ServerValue = {
            TIMESTAMP: FIRServerValue.timestamp()
          };
        }
      } catch (ignore) {
      }

      arg = arg || {};

      // if deeplinks are used, then for this scheme to work the use must have added the bundle as a scheme to their plist (this is in our docs)
      if (FIROptions.defaultOptions() !== null) {
        FIROptions.defaultOptions().deepLinkURLScheme = iOSUtils.getter(NSBundle, NSBundle.mainBundle).bundleIdentifier;
      }

      FIRAnalyticsConfiguration.sharedInstance().setAnalyticsCollectionEnabled(arg.analyticsCollectionEnabled !== false);

      if (!firebase._configured) {
        firebase._configured = true;
        if (typeof (FIRApp) !== "undefined") {
          FIRApp.configure();
        }
      }

      if (typeof (FIRDatabase) !== "undefined") {
        if (arg.persist) {
          FIRDatabase.database().persistenceEnabled = true;
        }
      }

      if (typeof (FIRFirestore) !== "undefined") {
        // fix a deprecation warning
        const fIRFirestoreSettings = FIRFirestoreSettings.new();
        fIRFirestoreSettings.timestampsInSnapshotsEnabled = true;

        // Firestore has offline persistence enabled by default
        if (arg.persist === false) {
          fIRFirestoreSettings.persistenceEnabled = false;
        }

        FIRFirestore.firestore().settings = fIRFirestoreSettings;
      }

      if (typeof (FIRAuth) !== "undefined") {
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
          firebase.authStateListener = (auth, user) => {
            arg.onAuthStateChanged({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          };
          FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
        }

        // Listen to auth state changes
        if (!firebase.authStateListener) {
          firebase.authStateListener = (auth, user) => {
            firebase.notifyAuthStateListeners({
              loggedIn: user !== null,
              user: toLoginResult(user)
            });
          };
          FIRAuth.auth().addAuthStateDidChangeListener(firebase.authStateListener);
        }
      }

      // Firebase DynamicLink
      if (arg.onDynamicLinkCallback !== undefined) {
        firebase.addOnDynamicLinkReceivedCallback(arg.onDynamicLinkCallback);
      }

      // Facebook Auth
      if (typeof (FBSDKAppEvents) !== "undefined") {
        FBSDKAppEvents.activateApp();
      }

      // Firebase notifications (FCM)
      if (typeof (FIRMessaging) !== "undefined") {
        firebaseMessaging.initFirebaseMessaging(arg);
      }

      // Firebase storage
      if (arg.storageBucket) {
        if (typeof (FIRStorage) === "undefined") {
          reject("Uncomment Storage in the plugin's Podfile first");
          return;
        }
        firebase.storageBucket = FIRStorage.storage().referenceForURL(arg.storageBucket);
      }

      resolve(typeof (FIRDatabase) !== "undefined" ? FIRDatabase.database().reference() : undefined);
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.getRemoteConfig = arg => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRRemoteConfig) === "undefined") {
        reject("Uncomment RemoteConfig in the plugin's Podfile first");
        return;
      }

      if (arg.properties === undefined) {
        reject("Argument 'properties' is missing");
        return;
      }

      // Get a Remote Config object instance
      const firebaseRemoteConfig = FIRRemoteConfig.remoteConfig();

      // Enable developer mode to allow for frequent refreshes of the cache
      firebaseRemoteConfig.configSettings = new FIRRemoteConfigSettings({developerModeEnabled: arg.developerMode || false});

      const dic: any = NSMutableDictionary.new();
      for (let p in arg.properties) {
        const prop = arg.properties[p];
        if (prop.default !== undefined) {
          dic.setObjectForKey(prop.default, prop.key);
        }
      }
      firebaseRemoteConfig.setDefaults(dic);

      const onCompletion = (remoteConfigFetchStatus, error) => {
        if (remoteConfigFetchStatus === FIRRemoteConfigFetchStatus.Success ||
            remoteConfigFetchStatus === FIRRemoteConfigFetchStatus.Throttled) {

          const activated = firebaseRemoteConfig.activateFetched();

          const result = {
            lastFetch: firebaseRemoteConfig.lastFetchTime,
            throttled: remoteConfigFetchStatus === FIRRemoteConfigFetchStatus.Throttled,
            properties: {}
          };

          for (let p in arg.properties) {
            const prop = arg.properties[p];
            const key = prop.key;
            const value = firebaseRemoteConfig.configValueForKey(key).stringValue;
            // we could have the user pass in the type but this seems easier to use
            result.properties[key] = firebase.strongTypeify(value);
          }
          resolve(result);

        } else {
          reject(error.localizedDescription);
        }
      };

      // default 12 hours, just like the SDK does
      const expirationDuration = arg.cacheExpirationSeconds || 43200;

      firebaseRemoteConfig.fetchWithExpirationDurationCompletionHandler(expirationDuration, onCompletion);
    } catch (ex) {
      console.log("Error in firebase.getRemoteConfig: " + ex);
      reject(ex);
    }
  });
};

firebase.getCurrentUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      const user = fAuth.currentUser;
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

firebase.sendEmailVerification = () => {
  return new Promise((resolve, reject) => {
    try {
      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      const user = fAuth.currentUser;
      if (user) {
        const onCompletion = error => {
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

firebase.logout = arg => {
  return new Promise((resolve, reject) => {
    try {
      FIRAuth.auth().signOut();

      // reset additional user info
      firebase.currentAdditionalUserInfo = null;

      // also disconnect from Google otherwise ppl can't connect with a different account
      if (typeof (GIDSignIn) !== "undefined") {
        GIDSignIn.sharedInstance().disconnect();
      }

      if (typeof (FBSDKLoginManager) !== "undefined") {
        FBSDKLoginManager.alloc().logOut();
      }

      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

firebase.unlink = providerId => {
  return new Promise((resolve, reject) => {
    try {
      const user = FIRAuth.auth().currentUser;
      if (!user) {
        reject("Not logged in");
        return;
      }

      user.unlinkFromProviderCompletion(providerId, (user, error) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(user);
        }
      });

    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

function toLoginResult(user, additionalUserInfo?: FIRAdditionalUserInfo): User {
  if (!user) {
    return null;
  }

  if (additionalUserInfo) {
    firebase.currentAdditionalUserInfo = additionalUserInfo;
  }

  const providers = [];
  if (user.providerData) {
    for (let i = 0, l = user.providerData.count; i < l; i++) {
      const firUserInfo = user.providerData.objectAtIndex(i);
      const pid = firUserInfo.valueForKey("providerID");
      // the app may have dropped Facebook support, so check if the native class is still there
      if (pid === 'facebook.com' && typeof (FBSDKAccessToken) !== "undefined") { // FIRFacebookAuthProviderID
        const fbCurrentAccessToken = FBSDKAccessToken.currentAccessToken();
        providers.push({id: pid, token: fbCurrentAccessToken ? fbCurrentAccessToken.tokenString : null});
      } else {
        providers.push({id: pid});
      }
    }
  }

  const loginResult: User = {
    uid: user.uid,
    anonymous: user.anonymous,
    isAnonymous: user.anonymous,
    // provider: user.providerID, // always 'Firebase'
    providers: providers,
    profileImageURL: user.photoURL ? user.photoURL.absoluteString : null,
    email: user.email,
    emailVerified: user.emailVerified,
    name: user.displayName,
    phoneNumber: user.phoneNumber,
    refreshToken: user.refreshToken,
    metadata: {
      creationTimestamp: user.metadata.creationDate as Date,
      lastSignInTimestamp: user.metadata.lastSignInDate as Date
    }
  };

  if (firebase.currentAdditionalUserInfo) {
    loginResult.additionalUserInfo = {
      providerId: firebase.currentAdditionalUserInfo.providerID,
      username: firebase.currentAdditionalUserInfo.username,
      isNewUser: firebase.currentAdditionalUserInfo.newUser,
      profile: firebaseUtils.toJsObject(firebase.currentAdditionalUserInfo.profile)
    };
  }

  return loginResult;
}

firebase.getAuthToken = arg => {
  return new Promise((resolve, reject) => {
    try {
      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      const user = fAuth.currentUser;
      if (user) {
        const onCompletion = (token, error) => {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve(token);
          }
        };
        user.getIDTokenForcingRefreshCompletion(arg.forceRefresh, onCompletion);
      } else {
        reject("Log in first");
      }
    } catch (ex) {
      console.log("Error in firebase.getAuthToken: " + ex);
      reject(ex);
    }
  });
};

firebase.login = arg => {
  return new Promise((resolve, reject) => {
    try {
      const onCompletionWithAuthResult = (authResult: FIRAuthDataResult, error?: NSError) => {
        if (error) {
          // also disconnect from Google otherwise ppl can't connect with a different account
          if (typeof (GIDSignIn) !== "undefined") {
            GIDSignIn.sharedInstance().disconnect();
          }
          reject(error.localizedDescription);
        } else {
          resolve(toLoginResult(authResult && authResult.user, authResult && authResult.additionalUserInfo));

          firebase.notifyAuthStateListeners({
            loggedIn: true,
            user: toLoginResult(authResult.user)
          });
        }
      };

      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      firebase.moveLoginOptionsToObjects(arg);

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        fAuth.signInAnonymouslyWithCompletion(onCompletionWithAuthResult);

      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.passwordOptions || !arg.passwordOptions.email || !arg.passwordOptions.password) {
          reject("Auth type PASSWORD requires an 'passwordOptions.email' and 'passwordOptions.password' argument");
          return;
        }

        const fIRAuthCredential = FIREmailAuthProvider.credentialWithEmailPassword(arg.passwordOptions.email, arg.passwordOptions.password);
        if (fAuth.currentUser) {
          // link credential, note that you only want to do this if this user doesn't already use fb as an auth provider
          const onCompletionLink = (authData: FIRAuthDataResult, error: NSError) => {
            if (error) {
              // ignore, as this one was probably already linked, so just return the user
              log("--- linking error: " + error.localizedDescription);
              fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
            } else {
              onCompletionWithAuthResult(authData, error);
            }
          };
          fAuth.currentUser.linkAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

        } else {
          fAuth.signInWithEmailPasswordCompletion(arg.passwordOptions.email, arg.passwordOptions.password, onCompletionWithAuthResult);
        }

      } else if (arg.type === firebase.LoginType.EMAIL_LINK) {
        if (!arg.emailLinkOptions || !arg.emailLinkOptions.email) {
          reject("Auth type EMAIL_LINK requires an 'emailLinkOptions.email' argument");
          return;
        }

        if (!arg.emailLinkOptions.url) {
          reject("Auth type EMAIL_LINK requires an 'emailLinkOptions.url' argument");
          return;
        }

        const firActionCodeSettings = FIRActionCodeSettings.new();
        // This 'continue URL' is what's emailed to the receiver, and the domain must be whitelisted in the Firebase console
        firActionCodeSettings.URL = NSURL.URLWithString(arg.emailLinkOptions.url);
        // The sign-in operation has to always be completed in the app.
        firActionCodeSettings.handleCodeInApp = true;
        firActionCodeSettings.setIOSBundleID(arg.emailLinkOptions.iOS ? arg.emailLinkOptions.iOS.bundleId : NSBundle.mainBundle.bundleIdentifier);
        firActionCodeSettings.setAndroidPackageNameInstallIfNotAvailableMinimumVersion(
            arg.emailLinkOptions.android ? arg.emailLinkOptions.android.packageName : NSBundle.mainBundle.bundleIdentifier,
            arg.emailLinkOptions.android ? arg.emailLinkOptions.android.installApp || false : false,
            arg.emailLinkOptions.android ? arg.emailLinkOptions.android.minimumVersion || "1" : "1");
        fAuth.sendSignInLinkToEmailActionCodeSettingsCompletion(
            arg.emailLinkOptions.email,
            firActionCodeSettings,
            (error: NSError) => {
              if (error) {
                reject(error.localizedDescription);
                return;
              }
              // The link was successfully sent.
              // Save the email locally so you don't need to ask the user for it again if they open the link on the same device.
              firebase.rememberEmailForEmailLinkLogin(arg.emailLinkOptions.email);
              resolve();
            }
        );

      } else if (arg.type === firebase.LoginType.PHONE) {
        // https://firebase.google.com/docs/auth/ios/phone-auth
        if (!arg.phoneOptions || !arg.phoneOptions.phoneNumber) {
          reject("Auth type PHONE requires a 'phoneOptions.phoneNumber' argument");
          return;
        }

        FIRPhoneAuthProvider.provider().verifyPhoneNumberUIDelegateCompletion(arg.phoneOptions.phoneNumber, null, (verificationID: string, error: NSError) => {
          if (error) {
            reject(error.localizedDescription);
            return;
          }

          firebase.requestPhoneAuthVerificationCode(userResponse => {
            if (userResponse === undefined) {
              reject("Prompt was canceled");
              return;
            }
            const fIRAuthCredential = FIRPhoneAuthProvider.provider().credentialWithVerificationIDVerificationCode(verificationID, userResponse);
            if (fAuth.currentUser) {
              const onCompletionLink = (authData: FIRAuthDataResult, error: NSError) => {
                if (error) {
                  // ignore, as this one was probably already linked, so just return the user
                  fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
                } else {
                  onCompletionWithAuthResult(authData, error);
                }
              };
              fAuth.currentUser.linkAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionLink);
            } else {
              fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
            }
          }, arg.phoneOptions.verificationPrompt);
        });

      } else if (arg.type === firebase.LoginType.CUSTOM) {
        if (!arg.customOptions || (!arg.customOptions.token && !arg.customOptions.tokenProviderFn)) {
          reject("Auth type CUSTOM requires a 'customOptions.token' or 'customOptions.tokenProviderFn' argument");
          return;
        }

        if (arg.customOptions.token) {
          fAuth.signInAndRetrieveDataWithCustomTokenCompletion(arg.customOptions.token, onCompletionWithAuthResult);
        } else if (arg.customOptions.tokenProviderFn) {
          arg.customOptions.tokenProviderFn()
              .then(
                  token => {
                    fAuth.signInAndRetrieveDataWithCustomTokenCompletion(token, onCompletionWithAuthResult);
                  },
                  error => {
                    reject(error);
                  }
              );
        }

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        if (typeof (FBSDKLoginManager) === "undefined") {
          reject("Facebook SDK not installed - see Podfile");
          return;
        }

        const onFacebookCompletion = (fbSDKLoginManagerLoginResult: FBSDKLoginManagerLoginResult, error: NSError) => {
          if (error) {
            console.log("Facebook login error " + error);
            reject(error.localizedDescription);
          } else if (fbSDKLoginManagerLoginResult.isCancelled) {
            reject("login cancelled");
          } else {
            // headless facebook auth
            // var fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(fbSDKLoginManagerLoginResult.token.tokenString);
            const fIRAuthCredential = FIRFacebookAuthProvider.credentialWithAccessToken(FBSDKAccessToken.currentAccessToken().tokenString);
            if (fAuth.currentUser) {
              // link credential, note that you only want to do this if this user doesn't already use fb as an auth provider
              const onCompletionLink = (authData: FIRAuthDataResult, error: NSError) => {
                if (error) {
                  // ignore, as this one was probably already linked, so just return the user
                  log("--- linking error: " + error.localizedDescription);
                  fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
                } else {
                  onCompletionWithAuthResult(authData);
                }
              };
              fAuth.currentUser.linkAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

            } else {
              fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
            }
          }
        };

        // this requires you to set the appid and customurlscheme in app_resources/.plist
        const fbSDKLoginManager = FBSDKLoginManager.new();
        // fbSDKLoginManager.loginBehavior = FBSDKLoginBehavior.Web;
        let scope: any = ["public_profile", "email"];

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

        const sIn = GIDSignIn.sharedInstance();
        // allow custom controller for variety of use cases
        sIn.uiDelegate = arg.ios && arg.ios.controller ? arg.ios.controller : application.ios.rootController;
        sIn.clientID = FIRApp.defaultApp().options.clientID;

        if (arg.googleOptions && arg.googleOptions.hostedDomain) {
          sIn.hostedDomain = arg.googleOptions.hostedDomain;
        }

        let delegate = GIDSignInDelegateImpl.new().initWithCallback((user: GIDGoogleUser, error: NSError) => {
          if (error === null) {
            // Get a Google ID token and Google access token from the GIDAuthentication object and exchange them for a Firebase credential
            firebase._gIDAuthentication = user.authentication;
            const fIRAuthCredential = FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(firebase._gIDAuthentication.idToken, firebase._gIDAuthentication.accessToken);

            // Finally, authenticate with Firebase using the credential
            if (fAuth.currentUser) {
              // link credential, note that you only want to do this if this user doesn't already use Google as an auth provider
              const onCompletionLink = (user, error) => {
                if (error) {
                  // ignore, as this one was probably already linked, so just return the user
                  fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
                } else {
                  onCompletionWithAuthResult(user);
                }
              };
              fAuth.currentUser.linkAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionLink);

            } else {
              fAuth.signInAndRetrieveDataWithCredentialCompletion(fIRAuthCredential, onCompletionWithAuthResult);
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

firebase.reauthenticate = arg => {
  return new Promise((resolve, reject) => {
    try {
      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      const user = fAuth.currentUser;
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
        authCredential = FIREmailAuthProvider.credentialWithEmailPassword(arg.passwordOptions.email, arg.passwordOptions.password);

      } else if (arg.type === firebase.LoginType.GOOGLE) {
        if (!firebase._gIDAuthentication) {
          reject("Not currently logged in with Google");
          return;
        }
        authCredential = FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(firebase._gIDAuthentication.idToken, firebase._gIDAuthentication.accessToken);

      } else if (arg.type === firebase.LoginType.FACEBOOK) {
        const currentAccessToken = FBSDKAccessToken.currentAccessToken();
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

      const onCompletion = error => {
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

firebase.reloadUser = () => {
  return new Promise((resolve, reject) => {
    try {
      const user = FIRAuth.auth().currentUser;

      if (user === null) {
        reject("no current user");
        return;
      }

      const onCompletion = error => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      user.reloadWithCompletion(onCompletion);
    } catch (ex) {
      console.log("Error in firebase.reloadUser: " + ex);
      reject(ex);
    }
  });
};

firebase.resetPassword = arg => {
  return new Promise((resolve, reject) => {
    try {
      const onCompletion = error => {
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

firebase.changePassword = arg => {
  return new Promise((resolve, reject) => {
    try {
      const onCompletion = error => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        const user = FIRAuth.auth().currentUser;
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

firebase.createUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      const onCompletion = (authResult: FIRAuthDataResult, error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(toLoginResult(authResult.user, authResult.additionalUserInfo));
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

firebase.deleteUser = arg => {
  return new Promise((resolve, reject) => {
    try {
      const user = FIRAuth.auth().currentUser;
      if (user === null) {
        reject("no current user");
        return;
      }

      const onCompletion = error => {
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

firebase.updateProfile = arg => {
  return new Promise((resolve, reject) => {
    try {
      const onCompletion = error => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      const fAuth = FIRAuth.auth();
      if (fAuth === null) {
        reject("Run init() first!");
        return;
      }

      if (!arg.displayName && !arg.photoURL) {
        reject("Updating a profile requires a displayName and / or a photoURL argument");
      } else {
        const user = fAuth.currentUser;
        if (user) {
          const changeRequest = user.profileChangeRequest();
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

firebase._addObservers = (to, updateCallback) => {
  const listeners = [];
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.ChildAdded, snapshot => {
    updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.ChildRemoved, snapshot => {
    updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.ChildChanged, snapshot => {
    updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
  }));
  listeners.push(to.observeEventTypeWithBlock(FIRDataEventType.ChildMoved, snapshot => {
    updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
  }));
  return listeners;
};

firebase.keepInSync = (path, switchOn) => {
  return new Promise((resolve, reject) => {
    try {
      const where = FIRDatabase.database().reference().childByAppendingPath(path);
      where.keepSynced(switchOn);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.keepInSync: " + ex);
      reject(ex);
    }
  });
};

firebase.addChildEventListener = (updateCallback, path) => {
  return new Promise((resolve, reject) => {
    try {
      const where = path === undefined ? FIRDatabase.database().reference() : FIRDatabase.database().reference().childByAppendingPath(path);
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

firebase.addValueEventListener = (updateCallback, path) => {
  return new Promise((resolve, reject) => {
    try {
      const where = path === undefined ? FIRDatabase.database().reference() : FIRDatabase.database().reference().childByAppendingPath(path);
      const listener = where.observeEventTypeWithBlockWithCancelBlock(
          FIRDataEventType.Value,
          snapshot => {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          firebaseError => {
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

firebase.getValue = path => {
  return new Promise((resolve, reject) => {
    try {
      const where = path === undefined ? FIRDatabase.database().reference() : FIRDatabase.database().reference().childByAppendingPath(path);
      where.observeSingleEventOfTypeWithBlockWithCancelBlock(
          FIRDataEventType.Value,
          snapshot => {
            resolve(firebase.getCallbackData('ValueChanged', snapshot));
          },
          firebaseError => {
            reject(firebaseError.localizedDescription);
          });
    } catch (ex) {
      console.log("Error in firebase.getValue: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListeners = (listeners, path) => {
  return new Promise((resolve, reject) => {
    try {
      const where = path === undefined ? FIRDatabase.database().reference() : FIRDatabase.database().reference().childByAppendingPath(path);
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        where.removeObserverWithHandle(listener);
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
      const ref = FIRDatabase.database().reference().childByAppendingPath(path).childByAutoId();
      ref.setValueWithCompletionBlock(val, (error: NSError, dbRef: FIRDatabaseReference) => {
        error ? reject(error.localizedDescription) : resolve({key: ref.key});
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
      FIRDatabase.database().reference().childByAppendingPath(path).setValueWithCompletionBlock(val, (error: NSError, dbRef: FIRDatabaseReference) => {
        error ? reject(error.localizedDescription) : resolve();
      });
    } catch (ex) {
      console.log("Error in firebase.setValue: " + ex);
      reject(ex);
    }
  });
};

firebase.update = (path, val) => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof val === "object") {
        FIRDatabase.database().reference().childByAppendingPath(path).updateChildValuesWithCompletionBlock(val, (error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      } else {
        const lastPartOfPath = path.lastIndexOf("/");
        const pathPrefix = path.substring(0, lastPartOfPath);
        const pathSuffix = path.substring(lastPartOfPath + 1);
        const updateObject = '{"' + pathSuffix + '" : "' + val + '"}';
        FIRDatabase.database().reference().childByAppendingPath(pathPrefix).updateChildValuesWithCompletionBlock(JSON.parse(updateObject), (error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      }
    } catch (ex) {
      console.log("Error in firebase.update: " + ex);
      reject(ex);
    }
  });
};

firebase.query = (updateCallback, path, options) => {
  return new Promise((resolve, reject) => {
    try {
      const where = path === undefined ? FIRDatabase.database().reference() : FIRDatabase.database().reference().childByAppendingPath(path);
      let query;

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
        for (let i = 0; i < options.ranges.length; i++) {
          const range = options.ranges[i];
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
        query.observeSingleEventOfTypeWithBlock(FIRDataEventType.Value, snapshot => {
          if (updateCallback) updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
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

firebase.remove = path => {
  return new Promise((resolve, reject) => {
    try {
      FIRDatabase.database().reference().childByAppendingPath(path).setValueWithCompletionBlock(null, (error: NSError, dbRef: FIRDatabaseReference) => {
        error ? reject(error.localizedDescription) : resolve();
      });
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

class OnDisconnect implements OnDisconnectBase {
  constructor(private dbRef: FIRDatabaseReference, private path: string) {
  }
  cancel(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbRef.cancelDisconnectOperationsWithCompletionBlock((error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      } catch (ex) {
        console.log("Error in firebase.onDisconnect.cancel: " + ex);
        reject(ex);
      }
    });
  }

  remove(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbRef.onDisconnectRemoveValueWithCompletionBlock((error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      } catch (ex) {
        console.log("Error in firebase.onDisconnect.remove: " + ex);
        reject(ex);
      }
    });
  }

  set(value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbRef.onDisconnectSetValueWithCompletionBlock(value, (error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      } catch (ex) {
        console.log("Error in firebase.onDisconnect.set: " + ex);
        reject(ex);
      }
    });
  }

  setWithPriority(value: any, priority: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbRef.onDisconnectSetValueAndPriorityWithCompletionBlock(value, priority, (error: NSError, dbRef: FIRDatabaseReference) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      } catch (ex) {
        console.log("Error in firebase.onDisconnect.setWithPriority: " + ex);
        reject(ex);
      }
    });
  }

  update(values: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (typeof values === "object") {
          this.dbRef.onDisconnectUpdateChildValuesWithCompletionBlock(values, (error: NSError, dbRef: FIRDatabaseReference) => {
            error ? reject(error.localizedDescription) : resolve();
          });
        } else {
          const lastPartOfPath = this.path.lastIndexOf("/");
          const pathPrefix = this.path.substring(0, lastPartOfPath);
          const pathSuffix = this.path.substring(lastPartOfPath + 1);
          const updateObject = '{"' + pathSuffix + '" : "' + values + '"}';
          FIRDatabase.database().reference().childByAppendingPath(pathPrefix).updateChildValuesWithCompletionBlock(JSON.parse(updateObject), (error: NSError, dbRef: FIRDatabaseReference) => {
            error ? reject(error.localizedDescription) : resolve();
          });
        }
      } catch (ex) {
        console.log("Error in firebase.onDisconnect.update: " + ex);
        reject(ex);
      }
    });
  }
}

firebase.onDisconnect = (path: string): OnDisconnect => {
  if (!firebase.initialized) {
    console.error("Please run firebase.init() before firebase.onDisconnect()");
    throw new Error("FirebaseApp is not initialized. Make sure you run firebase.init() first");
  }
  const dbRef: FIRDatabaseReference = FIRDatabase.database().reference().child(path);
  return new OnDisconnect(dbRef, path);
};

firebase.sendCrashLog = arg => {
  return new Promise((resolve, reject) => {
    try {
      // TODO generate typings again and see if 'FIRCrashLog' is available
      /*
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
      */

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

      if (typeof (FIRInvites) === "undefined") {
        reject("Make sure 'Firebase/Invites' is in the plugin's Podfile");
        return;
      }

      if (!arg.message || !arg.title) {
        reject("The mandatory 'message' or 'title' argument is missing");
        return;
      }

      // note that this returns the wrong type, so need to use 'performSelector' below
      const inviteDialog = FIRInvites.inviteDialog();

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
        const targetApplication = FIRInvitesTargetApplication.new();
        targetApplication.androidClientID = arg.androidClientID;
        // inviteDialog.setOtherPlatformsTargetApplication(targetApplication);
        inviteDialog.performSelectorWithObject("setOtherPlatformsTargetApplication:", targetApplication);
      }

      let delegate = FIRInviteDelegateImpl.new().initWithCallback((invitationIds: NSArray<string>, error: NSError) => {
        if (error === null) {
          const ids = firebaseUtils.toJsObject(invitationIds);
          resolve({
            count: invitationIds.count,
            invitationIds: ids
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

firebase.invites.getInvitation = () => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRInvites) === "undefined") {
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

firebase.firestore.WriteBatch = (nativeWriteBatch: FIRWriteBatch): firestore.WriteBatch => {
  class FirestoreWriteBatch implements firestore.WriteBatch {
    constructor() {
    }

    public set = (documentRef: firestore.DocumentReference, data: firestore.DocumentData, options?: firestore.SetOptions): firestore.WriteBatch => {
      fixSpecialFields(data);
      nativeWriteBatch.setDataForDocumentMerge(<any>data, documentRef.ios, options && options.merge);
      return this;
    }

    public update = (documentRef: firestore.DocumentReference, data: firestore.UpdateData): firestore.WriteBatch => {
      fixSpecialFields(data);
      nativeWriteBatch.updateDataForDocument(<any>data, documentRef.ios);
      return this;
    }

    public delete = (documentRef: firestore.DocumentReference): firestore.WriteBatch => {
      nativeWriteBatch.deleteDocument(documentRef.ios);
      return this;
    }

    commit(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        nativeWriteBatch.commitWithCompletion((error: NSError) => {
          error ? reject(error.localizedDescription) : resolve();
        });
      });
    }
  }

  return new FirestoreWriteBatch();
};

firebase.firestore.batch = (): firestore.WriteBatch => {
  return new firebase.firestore.WriteBatch(FIRFirestore.firestore().batch());
};

firebase.firestore.Transaction = (nativeTransaction: FIRTransaction): firestore.Transaction => {
  class FirestoreTransaction implements firestore.Transaction {
    constructor() {
    }

    public get = (documentRef: firestore.DocumentReference): DocumentSnapshot => {
      const docSnapshot: FIRDocumentSnapshot = nativeTransaction.getDocumentError(documentRef.ios);
      return new DocumentSnapshot(docSnapshot);
    }

    public set = (documentRef: firestore.DocumentReference, data: firestore.DocumentData, options?: firestore.SetOptions): firestore.Transaction => {
      fixSpecialFields(data);
      nativeTransaction.setDataForDocumentMerge(<any>data, documentRef.ios, options && options.merge);
      return this;
    }

    public update = (documentRef: firestore.DocumentReference, data: firestore.UpdateData): firestore.Transaction => {
      fixSpecialFields(data);
      nativeTransaction.updateDataForDocument(<any>data, documentRef.ios);
      return this;
    }

    public delete = (documentRef: firestore.DocumentReference): firestore.Transaction => {
      nativeTransaction.deleteDocument(documentRef.ios);
      return this;
    }
  }

  return new FirestoreTransaction();
};

firebase.firestore.runTransaction = (updateFunction: (transaction: firestore.Transaction) => Promise<any>): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    FIRFirestore.firestore().runTransactionWithBlockCompletion(
        (nativeTransaction: FIRTransaction, err: any) => {
          const tx = new firebase.firestore.Transaction(nativeTransaction);
          return updateFunction(tx);
        },
        (result, error: NSError) => error ? reject(error.localizedDescription) : resolve());
  });
};


firebase.firestore.collection = (collectionPath: string): firestore.CollectionReference => {
  try {
    if (typeof(FIRFirestore) === "undefined") {
      console.log("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
      return null;
    }

    if (!firebase.initialized) {
      console.log("Please run firebase.init() before firebase.firestore.collection()");
      return null;
    }

    const fIRCollectionReference = FIRFirestore.firestore().collectionWithPath(collectionPath);

    return {
      id: fIRCollectionReference.collectionID,
      doc: (documentPath?: string) => firebase.firestore.doc(collectionPath, documentPath),
      add: document => firebase.firestore.add(collectionPath, document),
      get: () => firebase.firestore.get(collectionPath),
      where: (fieldPath: string, opStr: firestore.WhereFilterOp, value: any) => firebase.firestore.where(collectionPath, fieldPath, opStr, value),
      orderBy: (fieldPath: string, directionStr: firestore.OrderByDirection): firestore.Query => firebase.firestore.orderBy(collectionPath, fieldPath, directionStr, fIRCollectionReference),
      limit: (limit: number): firestore.Query => firebase.firestore.limit(collectionPath, limit, fIRCollectionReference),
      onSnapshot: (callback: (snapshot: QuerySnapshot) => void) => firebase.firestore.onCollectionSnapshot(fIRCollectionReference, callback),
      startAfter: (document: DocumentSnapshot) => firebase.firestore.startAfter(collectionPath, document, fIRCollectionReference),
      startAt: (document: DocumentSnapshot) => firebase.firestore.startAt(collectionPath, document, fIRCollectionReference),
      endAt: (document: DocumentSnapshot) => firebase.firestore.endAt(collectionPath, document, fIRCollectionReference),
      endBefore: (document: DocumentSnapshot) => firebase.firestore.endBefore(collectionPath, document, fIRCollectionReference),
    };

  } catch (ex) {
    console.log("Error in firebase.firestore.collection: " + ex);
    return null;
  }
};

firebase.firestore.onDocumentSnapshot = (docRef: FIRDocumentReference, callback: (doc: DocumentSnapshot) => void): () => void => {
  const listener = docRef.addSnapshotListener((snapshot: FIRDocumentSnapshot, error: NSError) => {
    if (!error && snapshot) {
      callback(new DocumentSnapshot(snapshot));
    }
  });

  // There's a bug resulting this function to be undefined..
  if (listener.remove === undefined) {
    return () => {
      // .. so we're just ignoring anything received from the server (until the callback is set again when 'onSnapshot' is invoked).
      callback = () => {
      };
    };
  } else {
    return () => listener.remove();
  }
};

firebase.firestore.onCollectionSnapshot = (colRef: FIRCollectionReference, callback: (snapshot: QuerySnapshot) => void): () => void => {
  const listener = colRef.addSnapshotListener((snapshot: FIRQuerySnapshot, error: NSError) => {
    if (error || !snapshot) {
      return;
    }

    callback(new QuerySnapshot(snapshot));
  });

  // There's a bug resulting in this function to be undefined..
  if (listener.remove === undefined) {
    return () => {
      // .. so we're just ignoring anything received from the server (until the callback is set again when 'onSnapshot' is invoked).
      callback = () => {
      };
    };
  } else {
    return () => listener.remove();
  }
};

firebase.firestore._getDocumentReference = (fIRDocumentReference: FIRDocumentReference, collectionPath: string, documentPath: string): firestore.DocumentReference => {
  return {
    discriminator: "docRef",
    id: fIRDocumentReference.documentID,
    path: fIRDocumentReference.path,
    collection: cp => firebase.firestore.collection(`${collectionPath}/${documentPath}/${cp}`),
    set: (data: any, options?: firestore.SetOptions) => firebase.firestore.set(collectionPath, fIRDocumentReference.documentID, data, options),
    get: () => firebase.firestore.getDocument(collectionPath, fIRDocumentReference.documentID),
    update: (data: any) => firebase.firestore.update(collectionPath, fIRDocumentReference.documentID, data),
    delete: () => firebase.firestore.delete(collectionPath, fIRDocumentReference.documentID),
    onSnapshot: (callback: (doc: DocumentSnapshot) => void) => firebase.firestore.onDocumentSnapshot(fIRDocumentReference, callback),
    ios: fIRDocumentReference
  };
};

firebase.firestore.doc = (collectionPath: string, documentPath?: string): firestore.DocumentReference => {
  try {
    if (typeof(FIRFirestore) === "undefined") {
      console.log("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
      return null;
    }

    if (!firebase.initialized) {
      console.log("Please run firebase.init() before firebase.firestore.doc()");
      return null;
    }

    const fIRCollectionReference = FIRFirestore.firestore().collectionWithPath(collectionPath);
    const fIRDocumentReference = documentPath ? fIRCollectionReference.documentWithPath(documentPath) : fIRCollectionReference.documentWithAutoID();
    return firebase.firestore._getDocumentReference(fIRDocumentReference, collectionPath, documentPath);
  } catch (ex) {
    console.log("Error in firebase.firestore.doc: " + ex);
    return null;
  }
};

firebase.firestore.docRef = (documentPath: string): firestore.DocumentReference => {
  if (typeof (FIRFirestore) === "undefined") {
    console.log("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
    return null;
  }

  return convertDocRef(FIRFirestore.firestore().documentWithPath(documentPath));
};

firebase.firestore.add = (collectionPath: string, document: any): Promise<firestore.DocumentReference> => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }
      fixSpecialFields(document);
      const defaultFirestore = FIRFirestore.firestore();
      const fIRDocumentReference = defaultFirestore
          .collectionWithPath(collectionPath)
          .addDocumentWithDataCompletion(document, (error: NSError) => {
            if (error) {
              reject(error.localizedDescription);
            } else {
              resolve({
                discriminator: "docRef",
                id: fIRDocumentReference.documentID,
                path: fIRDocumentReference.path,
                collection: cp => firebase.firestore.collection(cp),
                set: (data: any, options?: firestore.SetOptions) => firebase.firestore.set(collectionPath, fIRDocumentReference.documentID, data, options),
                get: () => firebase.firestore.getDocument(collectionPath, fIRDocumentReference.documentID),
                update: (data: any) => firebase.firestore.update(collectionPath, fIRDocumentReference.documentID, data),
                delete: () => firebase.firestore.delete(collectionPath, fIRDocumentReference.documentID),
                onSnapshot: (callback: (doc: DocumentSnapshot) => void) => firebase.firestore.onDocumentSnapshot(fIRDocumentReference, callback)
              });
            }
          });

    } catch (ex) {
      console.log("Error in firebase.firestore.add: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.set = (collectionPath: string, documentPath: string, document: any, options?: firestore.SetOptions): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }

      fixSpecialFields(document);

      const docRef: FIRDocumentReference = FIRFirestore.firestore()
          .collectionWithPath(collectionPath)
          .documentWithPath(documentPath);

      if (options && options.merge) {
        docRef.setDataMergeCompletion(document, true, (error: NSError) => {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve();
          }
        });

      } else {
        docRef.setDataCompletion(document, (error: NSError) => {
          if (error) {
            reject(error.localizedDescription);
          } else {
            resolve();
          }
        });
      }

    } catch (ex) {
      console.log("Error in firebase.firestore.set: " + ex);
      reject(ex);
    }
  });
};

function fixSpecialFields(item) {
  for (let k in item) {
    if (item.hasOwnProperty(k)) {
      item[k] = fixSpecialField(item[k]);
    }
  }
  return item;
}

function fixSpecialField(item): any {
  if (item === null) {
    return null;
  } else if (item === "SERVER_TIMESTAMP") {
    return FIRFieldValue.fieldValueForServerTimestamp();
  } else if (item === "DELETE_FIELD") {
    return FIRFieldValue.fieldValueForDelete();
  } else if (item instanceof FieldValue) {
    const fieldValue: FieldValue = item;
    if (fieldValue.type === "ARRAY_UNION") {
      // nested arrays are not allowed, so harden against wrong usage: arrayUnion(["foo", "bar"]) vs arrayUnion("foo", "bar")
      return FIRFieldValue.fieldValueForArrayUnion(Array.isArray(fieldValue.value[0]) ? fieldValue.value[0] : fieldValue.value);
    } else if (fieldValue.type === "ARRAY_REMOVE") {
      return FIRFieldValue.fieldValueForArrayRemove(Array.isArray(fieldValue.value[0]) ? fieldValue.value[0] : fieldValue.value);
    } else {
      console.log("You found a bug! Please report an issue at https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues, mention fieldValue.type = '" + fieldValue.type + "'. Thanks!");
    }
  } else if (item instanceof GeoPoint) {
    const geo = <GeoPoint>item;
    return new FIRGeoPoint({
      latitude: geo.latitude,
      longitude: geo.longitude
    });
  } else if (isDocumentReference(item)) {
    return item.ios;
  } else if (typeof item === "object" && item.constructor === Object) {
    return fixSpecialFields(item);
  } else {
    return item;
  }
}

firebase.firestore.update = (collectionPath: string, documentPath: string, document: any): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }

      fixSpecialFields(document);

      const docRef: FIRDocumentReference = FIRFirestore.firestore()
          .collectionWithPath(collectionPath)
          .documentWithPath(documentPath);

      docRef.updateDataCompletion(document, (error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      });
    } catch (ex) {
      console.log("Error in firebase.firestore.update: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.delete = (collectionPath: string, documentPath: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }

      const docRef: FIRDocumentReference = FIRFirestore.firestore()
          .collectionWithPath(collectionPath)
          .documentWithPath(documentPath);

      docRef.deleteDocumentWithCompletion((error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      });

    } catch (ex) {
      console.log("Error in firebase.firestore.delete: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore.getCollection = (collectionPath: string): Promise<firestore.QuerySnapshot> => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }

      const defaultFirestore = FIRFirestore.firestore();
      defaultFirestore
          .collectionWithPath(collectionPath)
          .getDocumentsWithCompletion((snapshot: FIRQuerySnapshot, error: NSError) => {
            if (error) {
              reject(error.localizedDescription);
            } else {
              resolve(new QuerySnapshot(snapshot));
            }
          });

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
      if (typeof(FIRFirestore) === "undefined") {
        reject("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
        return;
      }

      FIRFirestore.firestore()
          .collectionWithPath(collectionPath)
          .documentWithPath(documentPath)
          .getDocumentWithCompletion((snapshot: FIRDocumentSnapshot, error: NSError) => {
            if (error) {
              reject(error.localizedDescription);
            } else {
              resolve(new DocumentSnapshot(snapshot));
            }
          });

    } catch (ex) {
      console.log("Error in firebase.firestore.getDocument: " + ex);
      reject(ex);
    }
  });
};

firebase.firestore._getQuery = (collectionPath: string, query: FIRQuery): firestore.Query => {
  return {
    get: () => new Promise((resolve, reject) => {
      query.getDocumentsWithCompletion((snapshot: FIRQuerySnapshot, error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(new QuerySnapshot(snapshot));
        }
      });
    }),
    where: (fp: string, os: firestore.WhereFilterOp, v: any): firestore.Query => firebase.firestore.where(collectionPath, fp, os, v, query),
    orderBy: (fp: string, directionStr: firestore.OrderByDirection): firestore.Query => firebase.firestore.orderBy(collectionPath, fp, directionStr, query),
    limit: (limit: number): firestore.Query => firebase.firestore.limit(collectionPath, limit, query),
    onSnapshot: (callback: (snapshot: QuerySnapshot) => void) => firebase.firestore.onCollectionSnapshot(query, callback),
    startAfter: (document: DocumentSnapshot) => firebase.firestore.startAfter(collectionPath, document, query),
    startAt: (document: DocumentSnapshot) => firebase.firestore.startAt(collectionPath, document, query),
    endAt: (document: DocumentSnapshot) => firebase.firestore.endAt(collectionPath, document, query),
    endBefore: (document: DocumentSnapshot) => firebase.firestore.endBefore(collectionPath, document, query),
  };
};

firebase.firestore.where = (collectionPath: string, fieldPath: string, opStr: firestore.WhereFilterOp, value: any, query?: FIRQuery): firestore.Query => {
  try {
    if (typeof(FIRFirestore) === "undefined") {
      console.log("Make sure 'Firebase/Firestore' is in the plugin's Podfile");
      return null;
    }

    query = query || FIRFirestore.firestore().collectionWithPath(collectionPath);
    value = fixSpecialField(value);

    if (opStr === "<") {
      query = query.queryWhereFieldIsLessThan(fieldPath, value);
    } else if (opStr === "<=") {
      query = query.queryWhereFieldIsLessThanOrEqualTo(fieldPath, value);
    } else if (opStr === "==") {
      query = query.queryWhereFieldIsEqualTo(fieldPath, value);
    } else if (opStr === ">=") {
      query = query.queryWhereFieldIsGreaterThanOrEqualTo(fieldPath, value);
    } else if (opStr === ">") {
      query = query.queryWhereFieldIsGreaterThan(fieldPath, value);
    } else if (opStr === "array-contains") {
      query = query.queryWhereFieldArrayContains(fieldPath, value);
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

firebase.firestore.orderBy = (collectionPath: string, fieldPath: string, direction: firestore.OrderByDirection, query: FIRQuery): firestore.Query => {
  query = query.queryOrderedByFieldDescending(fieldPath, direction === "desc");
  return firebase.firestore._getQuery(collectionPath, query);
};

firebase.firestore.limit = (collectionPath: string, limit: number, query: FIRQuery): firestore.Query => {
  query = query.queryLimitedTo(limit);
  return firebase.firestore._getQuery(collectionPath, query);
};

firebase.firestore.startAt = (collectionPath: string, document: DocumentSnapshot, query: FIRQuery) => {
  return firebase.firestore._getQuery(collectionPath, query.queryStartingAtDocument(document.ios));
};

firebase.firestore.startAfter = (collectionPath: string, document: DocumentSnapshot, query: FIRQuery) => {
  return firebase.firestore._getQuery(collectionPath, query.queryStartingAfterDocument(document.ios));
};

firebase.firestore.endAt = (collectionPath: string, document: DocumentSnapshot, query: FIRQuery) => {
  return firebase.firestore._getQuery(collectionPath, query.queryEndingAtDocument(document.ios));
};

firebase.firestore.endBefore = (collectionPath: string, document: DocumentSnapshot, query: FIRQuery) => {
  return firebase.firestore._getQuery(collectionPath, query.queryEndingBeforeDocument(document.ios));
};

class FIRInviteDelegateImpl extends NSObject implements FIRInviteDelegate {
  public static ObjCProtocols = [];

  static new(): FIRInviteDelegateImpl {
    if (FIRInviteDelegateImpl.ObjCProtocols.length === 0 && typeof(FIRInviteDelegate) !== "undefined") {
      FIRInviteDelegateImpl.ObjCProtocols.push(FIRInviteDelegate);
    }
    return <FIRInviteDelegateImpl>super.new();
  }

  private callback: (invitationIds: NSArray<string>, error: NSError) => void;

  public initWithCallback(callback: (invitationIds: NSArray<string>, error: NSError) => void): FIRInviteDelegateImpl {
    this.callback = callback;
    return this;
  }

  public inviteFinishedWithInvitationsError(invitationIds: NSArray<string>, error: NSError): void {
    this.callback(invitationIds, error);
  }
}

class GIDSignInDelegateImpl extends NSObject implements GIDSignInDelegate {
  public static ObjCProtocols = [];

  static new(): GIDSignInDelegateImpl {
    if (GIDSignInDelegateImpl.ObjCProtocols.length === 0 && typeof (GIDSignInDelegate) !== "undefined") {
      GIDSignInDelegateImpl.ObjCProtocols.push(GIDSignInDelegate);
    }
    return <GIDSignInDelegateImpl>super.new();
  }

  private callback: (user: GIDGoogleUser, error: NSError) => void;

  public initWithCallback(callback: (user: GIDGoogleUser, error: NSError) => void): GIDSignInDelegateImpl {
    this.callback = callback;
    return this;
  }

  public signInDidSignInForUserWithError(signIn: GIDSignIn, user: GIDGoogleUser, error: NSError): void {
    this.callback(user, error);
  }
}

function convertDocRef(docRef: FIRDocumentReference): firestore.DocumentReference {
  const collectionPath = docRef.parent.path;

  return {
    discriminator: "docRef",
    id: docRef.documentID,
    path: docRef.path,
    collection: cp => firebase.firestore.collection(`${collectionPath}/${docRef.documentID}/${cp}`),
    set: (data: any, options?: firestore.SetOptions) => firebase.firestore.set(collectionPath, docRef.documentID, data, options),
    get: () => firebase.firestore.getDocument(collectionPath, docRef.documentID),
    update: (data: any) => firebase.firestore.update(collectionPath, docRef.documentID, data),
    delete: () => firebase.firestore.delete(collectionPath, docRef.documentID),
    onSnapshot: (callback: (doc: DocumentSnapshot) => void) => firebase.firestore.onDocumentSnapshot(docRef, callback),
    ios: docRef
  };
}

function convertDocChangeType(type: FIRDocumentChangeType) {
  switch (type) {
    case FIRDocumentChangeType.Added:
      return 'added';
    case FIRDocumentChangeType.Modified:
      return 'modified';
    case FIRDocumentChangeType.Removed:
      return 'removed';
    default:
      throw new Error('Unknown DocumentChangeType');
  }
}

function convertDocument(qDoc: FIRQueryDocumentSnapshot): firestore.QueryDocumentSnapshot {
  return new DocumentSnapshot(qDoc);
}

export class QuerySnapshot implements firestore.QuerySnapshot {
  private _docSnapshots: firestore.QueryDocumentSnapshot[];

  constructor(private snapshot: FIRQuerySnapshot) {
  }

  get docs(): firestore.QueryDocumentSnapshot[] {
    const getSnapshots = () => {
      const docSnapshots: firestore.QueryDocumentSnapshot[] = [];
      for (let i = 0, l = this.snapshot.documents.count; i < l; i++) {
        const document = this.snapshot.documents.objectAtIndex(i);
        docSnapshots.push(new DocumentSnapshot(document));
      }
      this._docSnapshots = docSnapshots;

      return docSnapshots;
    };

    // The operation is lazy loaded
    return this._docSnapshots || getSnapshots();
  }

  /**
   * @deprecated use the "docs" property instead
   */
  docSnapshots = this.docs as firestore.DocumentSnapshot[]; // It's safe to cast, as our document snapshot already has the data() method

  docChanges(options?: firestore.SnapshotListenOptions): firestore.DocumentChange[] {
    if (options) {
      console.info('No options support yet, for docChanges()');
    }
    const docChanges: firestore.DocumentChange[] = [];
    const jChanges: NSArray<FIRDocumentChange> = this.snapshot.documentChanges;
    for (let i = 0; i < jChanges.count; i++) {
      const chg = jChanges[i];
      const type = convertDocChangeType(chg.type);
      const doc = convertDocument(chg.document);

      docChanges.push({
        doc,
        newIndex: chg.newIndex,
        oldIndex: chg.oldIndex,
        type,
      });
    }

    return docChanges;
  }

  forEach(callback: (result: firestore.DocumentSnapshot) => void, thisArg?: any): void {
    this.docSnapshots.map(snapshot => callback(snapshot));
  }
}

module.exports = firebase;
