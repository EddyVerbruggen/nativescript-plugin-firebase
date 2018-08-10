import { firebase } from "../firebase-common";
import * as application from "tns-core-modules/application/application";
import { ios as iOSUtils } from "tns-core-modules/utils/utils";
import { device } from "tns-core-modules/platform/platform";
import { firebaseUtils } from "../utils";

// see https://developer.apple.com/reference/usernotifications/unusernotificationcenterdelegate?language=objc
class UNUserNotificationCenterDelegateImpl extends NSObject implements UNUserNotificationCenterDelegate {
  public static ObjCProtocols = [];

  static new(): UNUserNotificationCenterDelegateImpl {
    if (UNUserNotificationCenterDelegateImpl.ObjCProtocols.length === 0 && typeof (UNUserNotificationCenterDelegate) !== "undefined") {
      UNUserNotificationCenterDelegateImpl.ObjCProtocols.push(UNUserNotificationCenterDelegate);
    }
    return <UNUserNotificationCenterDelegateImpl>super.new();
  }

  private callback: (unnotification: UNNotification, actionIdentifier?: string) => void;

  public initWithCallback(callback: (unnotification: UNNotification, actionIdentifier?: string) => void): UNUserNotificationCenterDelegateImpl {
    this.callback = callback;
    return this;
  }

  public userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void {
    this.callback(notification);
  }

  public userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void {
    console.log(">>>>>>>>>>>Handle push from background or closed ???");
    console.log(response);
    this.callback(response.notification, response.actionIdentifier);
    completionHandler();
  }
}

class FIRMessagingDelegateImpl extends NSObject implements FIRMessagingDelegate {
  public static ObjCProtocols = [];

  static new(): FIRMessagingDelegateImpl {
    if (FIRMessagingDelegateImpl.ObjCProtocols.length === 0 && typeof (FIRMessagingDelegate) !== "undefined") {
      FIRMessagingDelegateImpl.ObjCProtocols.push(FIRMessagingDelegate);
    }
    return <FIRMessagingDelegateImpl>super.new();
  }

  private callback: (appData: NSDictionary<any, any>) => void;

  public initWithCallback(callback: (appData: NSDictionary<any, any>) => void): FIRMessagingDelegateImpl {
    this.callback = callback;
    return this;
  }

  public messagingDidReceiveMessage(messaging: FIRMessaging, remoteMessage: FIRMessagingRemoteMessage): void {
    console.log(">> fcm message received");
    this.callback(remoteMessage.appData);
  }

  public messagingDidReceiveRegistrationToken(messaging: FIRMessaging, fcmToken: string): void {
    console.log(">> fcmToken received: " + fcmToken);
    firebaseMessaging.onTokenRefreshNotification(fcmToken);
  }
}

export class FirebaseMessagingModule {
  private _pendingNotifications: Array<any> = [];
  private _pushToken: any;
  private _receivedPushTokenCallback: Function;
  private _receivedNotificationCallback: Function;
  private _notificationActionTakenCallback: Function;
  private _registerForRemoteNotificationsRanThisSession = false;
  private _userNotificationCenterDelegate: UNUserNotificationCenterDelegateImpl;
  private _messagingConnected: boolean = null;
  private _firebaseRemoteMessageDelegate: FIRMessagingDelegateImpl;

  public init(arg) {
    if (arg.onMessageReceivedCallback !== undefined || arg.onPushTokenReceivedCallback !== undefined) {
      if (arg.onMessageReceivedCallback !== undefined) {
        firebaseMessaging.addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
      }
      if (arg.onPushTokenReceivedCallback !== undefined) {
        this.addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
      }
    }
  }

  public getCurrentPushToken() {
    return new Promise((resolve, reject) => {
      try {
        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }

        resolve(FIRMessaging.messaging().FCMToken);
      } catch (ex) {
        console.log("Error in firebase.getCurrentPushToken: " + ex);
        reject(ex);
      }
    });
  }

  public unregisterForPushNotifications() {
    return new Promise((resolve, reject) => {
      try {
        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }
        iOSUtils.getter(UIApplication, UIApplication.sharedApplication).unregisterForRemoteNotifications();
        resolve();
      } catch (ex) {
        console.log("Error in firebase.unregisterForPushNotifications: " + ex);
        reject(ex);
      }
    });
  }

  public handleRemoteNotification(app, userInfo) {
    const userInfoJSON = firebaseUtils.toJsObject(userInfo);
    const aps = userInfo.objectForKey("aps");
    if (aps !== null) {
      const alrt = aps.objectForKey("alert");
      if (alrt !== null && alrt.objectForKey) {
        userInfoJSON.title = alrt.objectForKey("title");
        userInfoJSON.body = alrt.objectForKey("body");
      }
    }

    this._pendingNotifications.push(userInfoJSON);

    userInfoJSON.foreground = app.applicationState === UIApplicationState.Active;
    if (this._receivedNotificationCallback !== null) {
      this._processPendingNotifications();
    }
  }

  public addOnMessageReceivedCallback(callback: Function) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }
        this._receivedNotificationCallback = callback;
        this.registerForRemoteNotifications();
        this._processPendingNotifications();

        resolve();
      } catch (ex) {
        console.log("Error in firebase.addOnMessageReceivedCallback: " + ex);
        reject(ex);
      }
    });
  }

  public addOnPushTokenReceivedCallback(callback) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }
        this._receivedPushTokenCallback = callback;

        // may already be present
        if (this._pushToken) {
          callback(this._pushToken);
        }

        this.registerForRemoteNotifications();
        this._processPendingNotifications();

        resolve();
      } catch (ex) {
        console.log("Error in firebase.addOnPushTokenReceivedCallback: " + ex);
        reject(ex);
      }
    });
  }

  public addBackgroundRemoteNotificationHandler(appDelegate) {
    // appDelegate.prototype.app
    appDelegate.prototype.applicationDidReceiveRemoteNotificationFetchCompletionHandler = (app, notification, completionHandler) => {
      // Pass notification to auth and check if they can handle it (in case phone auth is being used), see https://firebase.google.com/docs/auth/ios/phone-auth
      if (firebase._configured && FIRAuth.auth().canHandleNotification(notification)) {
        completionHandler(UIBackgroundFetchResult.NoData);
        return;
      }

      completionHandler(UIBackgroundFetchResult.NewData);
      this.handleRemoteNotification(app, notification);
    };
  }

  public registerForRemoteNotifications() {
    let app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
    if (!app) {
      application.on("launch", () => {
        this.registerForRemoteNotifications();
      });
      return;
    }
    if (this._registerForRemoteNotificationsRanThisSession) {
      // ignore
      // return;
    }
    this._registerForRemoteNotificationsRanThisSession = true;

    if (parseInt(device.osVersion) >= 10) {
      const authorizationOptions = UNAuthorizationOptions.Alert | UNAuthorizationOptions.Sound | UNAuthorizationOptions.Badge;
      const curNotCenter = iOSUtils.getter(UNUserNotificationCenter, UNUserNotificationCenter.currentNotificationCenter);
      curNotCenter.requestAuthorizationWithOptionsCompletionHandler(authorizationOptions, (granted, error) => {
        if (!error) {
          if (app === null) {
            app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
          }
          if (app !== null) {
            firebaseUtils.invokeOnRunLoop(() => {
              app.registerForRemoteNotifications();
            });
          }
        } else {
          console.log("Error requesting push notification auth: " + error);
        }
      });

      this._userNotificationCenterDelegate = UNUserNotificationCenterDelegateImpl.new().initWithCallback((unnotification, actionIdentifier?) => {
        // if the app is in the foreground then this method will receive the notification
        // if the app is in the background, and user has responded to interactive notification, then this method will receive the notification
        // if the app is in the background, and user views a notification, applicationDidReceiveRemoteNotificationFetchCompletionHandler will receive it
        const userInfo = unnotification.request.content.userInfo;
        const userInfoJSON = firebaseUtils.toJsObject(userInfo);

        console.log(actionIdentifier ? ">>>>>" + actionIdentifier : ">>>>>> NO actionIdentifier");
        if (actionIdentifier && this._notificationActionTakenCallback) {
          // TODO: THIS CODE DOWN IS DUPLICATE, REFACTOR!!!!
          // move the most relevant properties (if set) so it's according to the TS definition and aligned with Android
          if (userInfoJSON.aps && userInfoJSON.aps.alert) {
            userInfoJSON.title = userInfoJSON.aps.alert.title;
            userInfoJSON.body = userInfoJSON.aps.alert.body;
          }
          // also, to make the ts.d happy copy all properties to a data element
          if (!userInfoJSON.hasOwnProperty('data')) {
            userInfoJSON.data = {};
          }
          Object.keys(userInfoJSON).forEach((key) => {
            if (key !== 'data') userInfoJSON.data[key] = userInfoJSON[key];
          });

          // cleanup
          userInfoJSON.aps = undefined;
          // TODO: THIS CODE UP IS DUPLICATE, REFACTOR!!!!

          this._notificationActionTakenCallback(actionIdentifier, userInfoJSON);
        }

        userInfoJSON.foreground = true;
        this._pendingNotifications.push(userInfoJSON);
        if (this._receivedNotificationCallback !== null) {
          this._processPendingNotifications();
        }
      });

      curNotCenter.delegate = this._userNotificationCenterDelegate;

      this._firebaseRemoteMessageDelegate = FIRMessagingDelegateImpl.new().initWithCallback((appDataDictionary: NSDictionary<any, any>) => {
        const userInfoJSON = firebaseUtils.toJsObject(appDataDictionary);
        this._pendingNotifications.push(userInfoJSON);

        const asJs = firebaseUtils.toJsObject(appDataDictionary.objectForKey("notification"));
        if (asJs) {
          userInfoJSON.title = asJs.title;
          userInfoJSON.body = asJs.body;
        }

        const app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
        if (app.applicationState === UIApplicationState.Active) {
          userInfoJSON.foreground = true;
          if (this._receivedNotificationCallback !== null) {
            this._processPendingNotifications();
          }
        } else {
          userInfoJSON.foreground = false;
        }
      });
      FIRMessaging.messaging().delegate = this._firebaseRemoteMessageDelegate;

    } else {
      const notificationTypes = UIUserNotificationType.Alert | UIUserNotificationType.Badge | UIUserNotificationType.Sound | UIUserNotificationActivationMode.Background;
      const notificationSettings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
      firebaseUtils.invokeOnRunLoop(() => {
        app.registerForRemoteNotifications(); // prompts the user to accept notifications
      });
      app.registerUserNotificationSettings(notificationSettings);
    }
  }

  public registerForInteractivePush(model?: any) {
    let nativeActions: Array<UNNotificationAction> = [];
    console.log(">>>>>>> model is:");
    console.log(model);
    model.iosSettings.interactiveSettings.actions.forEach(action => {
      let nativeAction = UNNotificationAction.actionWithIdentifierTitleOptions(action.identifier, action.title, action.options);

      nativeActions.push(nativeAction);
    });

    let actions: NSArray<UNNotificationAction> = NSArray.arrayWithArray(<any>nativeActions);

    let intentIdentifiers: NSArray<string> = NSArray.arrayWithArray(<any>["intent1"]);
    let nativeCategories: Array<UNNotificationCategory> = [];

    model.iosSettings.interactiveSettings.categories.forEach(category => {
      let nativeCategory = UNNotificationCategory.categoryWithIdentifierActionsIntentIdentifiersOptions(category.identifier, actions, intentIdentifiers, null);

      nativeCategories.push(nativeCategory);
    });

    const center = iOSUtils.getter(UNUserNotificationCenter, UNUserNotificationCenter.currentNotificationCenter);
    center.setNotificationCategories(new NSSet(<any>nativeCategories));

    if (model.onNotificationActionTakenCallback) {
      this._addOnNotificationActionTakenCallback(model.onNotificationActionTakenCallback);
    }
  }

  public prepAppDelegate() {
    // see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/178 for why we're not using a constant here
    this._addObserver("com.firebase.iid.notif.refresh-token", notification => this.onTokenRefreshNotification(notification.object));

    this._addObserver(UIApplicationDidFinishLaunchingNotification, appNotification => {
      this.registerForRemoteNotifications();
    });

    this._addObserver(UIApplicationDidBecomeActiveNotification, appNotification => {
      this._processPendingNotifications();

      if (!this._messagingConnected) {
        this._messagingConnectWithCompletion();
      }
    });

    this._addObserver(UIApplicationDidEnterBackgroundNotification, appNotification => {
      // Firebase notifications (FCM)
      if (this._messagingConnected) {
        FIRMessaging.messaging().disconnect();
      }
    });

    this._addObserver(UIApplicationWillEnterForegroundNotification, appNotification => {
      // Firebase notifications (FCM)
      if (this._messagingConnected !== null) {
        FIRMessaging.messaging().connectWithCompletion(error => {
          if (!error) {
            this._messagingConnected = true;
          }
        });
      }
    });
  }

  public onTokenRefreshNotification = token => {
    this._pushToken = token;

    if (this._receivedPushTokenCallback) {
      this._receivedPushTokenCallback(token);
    }

    this._messagingConnectWithCompletion();
  }

  public subscribeToTopic(topicName) {
    return new Promise((resolve, reject) => {
      try {

        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }

        if (topicName.indexOf("/topics/") === -1) {
          topicName = "/topics/" + topicName;
        }

        // TODO there's also (un)subscribeToTopicCompletion (resolve when completed).. perhaps this has been added to Android as well
        FIRMessaging.messaging().subscribeToTopic(topicName);
        resolve();
      } catch (ex) {
        console.log("Error in firebase.subscribeToTopic: " + ex);
        reject(ex);
      }
    });
  }

  public unsubscribeFromTopic(topicName) {
    return new Promise((resolve, reject) => {
      try {

        if (typeof (FIRMessaging) === "undefined") {
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
  }

  private _messagingConnectWithCompletion() {
    return new Promise((resolve, reject) => {

      FIRMessaging.messaging().connectWithCompletion(error => {
        if (error) {
          // this is not fatal and it scares the hell out of ppl so not logging it
          // console.log("Firebase was unable to connect to FCM. Error: " + error);
          return reject(error);
        }

        this._messagingConnected = true;
        resolve();
      });

    });
  }

  private _addOnNotificationActionTakenCallback(callback: Function) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof (FIRMessaging) === "undefined") {
          reject("Enable FIRMessaging in Podfile first");
          return;
        }
        this._notificationActionTakenCallback = callback;
        resolve();
      } catch (ex) {
        console.log("Error in firebase._addOnNotificationActionTakenCallback: " + ex);
        reject(ex);
      }
    });
  }

  private _processPendingNotifications() {
    const app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
    if (!app) {
      application.on("launch", () => {
        this._processPendingNotifications();
      });
      return;
    }
    if (this._receivedNotificationCallback !== null) {
      for (let p in this._pendingNotifications) {
        const userInfoJSON = this._pendingNotifications[p];
        // move the most relevant properties (if set) so it's according to the TS definition and aligned with Android
        if (userInfoJSON.aps && userInfoJSON.aps.alert) {
          userInfoJSON.title = userInfoJSON.aps.alert.title;
          userInfoJSON.body = userInfoJSON.aps.alert.body;
        }
        // also, to make the ts.d happy copy all properties to a data element
        if (!userInfoJSON.hasOwnProperty('data')) {
          userInfoJSON.data = {};
        }
        Object.keys(userInfoJSON).forEach((key) => {
          if (key !== 'data') userInfoJSON.data[key] = userInfoJSON[key];
        });

        // cleanup
        userInfoJSON.aps = undefined;
        this._receivedNotificationCallback(userInfoJSON);
      }
      this._pendingNotifications = [];
      app.applicationIconBadgeNumber = 0;
    }
  }

  private _addObserver(eventName, callback) {
    const queue = iOSUtils.getter(NSOperationQueue, NSOperationQueue.mainQueue);
    return iOSUtils.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).addObserverForNameObjectQueueUsingBlock(eventName, null, queue, callback);
  }
}

export const firebaseMessaging = new FirebaseMessagingModule();
// export const firebaseMessaging: any = {
//   handleRemoteNotification: handleRemoteNotification
// };



