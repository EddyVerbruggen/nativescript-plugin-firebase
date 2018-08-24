import { firebase } from "../firebase-common";
import * as application from "tns-core-modules/application/application";
import { ios as iOSUtils } from "tns-core-modules/utils/utils";
import { device } from "tns-core-modules/platform/platform";
import { firebaseUtils } from "../utils";

let _notificationActionTakenCallback: Function;
let _pendingNotifications: Array<any> = [];
let _pushToken: any;
let _receivedPushTokenCallback: Function;
let _receivedNotificationCallback: Function = null;
let _registerForRemoteNotificationsRanThisSession = false;
let _userNotificationCenterDelegate: UNUserNotificationCenterDelegateImpl;
let _messagingConnected: boolean = null;
let _firebaseRemoteMessageDelegate: FIRMessagingDelegateImpl;

export function init(arg) {
  if (arg.onMessageReceivedCallback !== undefined || arg.onPushTokenReceivedCallback !== undefined) {
    if (arg.onMessageReceivedCallback !== undefined) {
      addOnMessageReceivedCallback(arg.onMessageReceivedCallback);
    }
    if (arg.onPushTokenReceivedCallback !== undefined) {
      addOnPushTokenReceivedCallback(arg.onPushTokenReceivedCallback);
    }
  }
}

export function addOnMessageReceivedCallback(callback: Function) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }
      _receivedNotificationCallback = callback;
      _registerForRemoteNotifications();
      _processPendingNotifications();

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnMessageReceivedCallback: " + ex);
      reject(ex);
    }
  });
}

export function getCurrentPushToken() {
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

export function unregisterForPushNotifications() {
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

export function handleRemoteNotification(app, userInfo) {
  const userInfoJSON = firebaseUtils.toJsObject(userInfo);
  const aps = userInfo.objectForKey("aps");
  if (aps !== null) {
    const alrt = aps.objectForKey("alert");
    if (alrt !== null && alrt.objectForKey) {
      userInfoJSON.title = alrt.objectForKey("title");
      userInfoJSON.body = alrt.objectForKey("body");
    }
  }

  _pendingNotifications.push(userInfoJSON);

  userInfoJSON.foreground = app.applicationState === UIApplicationState.Active;
  if (_receivedNotificationCallback !== null) {
    _processPendingNotifications();
  }
}

export function addOnPushTokenReceivedCallback(callback) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }
      _receivedPushTokenCallback = callback;

      // may already be present
      if (_pushToken) {
        callback(_pushToken);
      }

      _registerForRemoteNotifications();
      _processPendingNotifications();

      resolve();
    } catch (ex) {
      console.log("Error in firebase.addOnPushTokenReceivedCallback: " + ex);
      reject(ex);
    }
  });
}

export function addBackgroundRemoteNotificationHandler(appDelegate) {
  // appDelegate.prototype.app
  appDelegate.prototype.applicationDidReceiveRemoteNotificationFetchCompletionHandler = (app, notification, completionHandler) => {
    // Pass notification to auth and check if they can handle it (in case phone auth is being used), see https://firebase.google.com/docs/auth/ios/phone-auth
    if (firebase._configured && FIRAuth.auth().canHandleNotification(notification)) {
      completionHandler(UIBackgroundFetchResult.NoData);
      return;
    }

    completionHandler(UIBackgroundFetchResult.NewData);
    handleRemoteNotification(app, notification);
  };
}

export function registerForInteractivePush(model?: any) {
  let nativeActions: Array<UNNotificationAction> = [];

  model.iosSettings.interactiveSettings.actions.forEach(action => {
    let nativeAction = UNNotificationAction.actionWithIdentifierTitleOptions(action.identifier, action.title, action.options);

    nativeActions.push(nativeAction);
  });

  let actions: NSArray<UNNotificationAction> = <NSArray<UNNotificationAction>>NSArray.arrayWithArray(<any>nativeActions);
  let nativeCategories: Array<UNNotificationCategory> = [];

  model.iosSettings.interactiveSettings.categories.forEach(category => {
    let nativeCategory = UNNotificationCategory.categoryWithIdentifierActionsIntentIdentifiersOptions(category.identifier, actions, null, null);

    nativeCategories.push(nativeCategory);
  });

  const center = iOSUtils.getter(UNUserNotificationCenter, UNUserNotificationCenter.currentNotificationCenter);
  const nsSetCategories = <NSSet<UNNotificationCategory>>new NSSet(<any>nativeCategories);
  center.setNotificationCategories(nsSetCategories);

  if (model.onNotificationActionTakenCallback) {
    _addOnNotificationActionTakenCallback(model.onNotificationActionTakenCallback);
  }
}

export function prepAppDelegate() {
  // see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/178 for why we're not using a constant here
  _addObserver("com.firebase.iid.notif.refresh-token", notification => onTokenRefreshNotification(notification.object));

  _addObserver(UIApplicationDidFinishLaunchingNotification, appNotification => {
    _registerForRemoteNotifications();
  });

  _addObserver(UIApplicationDidBecomeActiveNotification, appNotification => {
    _processPendingNotifications();

    if (!_messagingConnected) {
      _messagingConnectWithCompletion();
    }
  });

  _addObserver(UIApplicationDidEnterBackgroundNotification, appNotification => {
    // Firebase notifications (FCM)
    if (_messagingConnected) {
      FIRMessaging.messaging().disconnect();
    }
  });

  _addObserver(UIApplicationWillEnterForegroundNotification, appNotification => {
    // Firebase notifications (FCM)
    if (_messagingConnected !== null) {
      FIRMessaging.messaging().connectWithCompletion(error => {
        if (!error) {
          _messagingConnected = true;
        }
      });
    }
  });
}

export function subscribeToTopic(topicName) {
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

export function unsubscribeFromTopic(topicName) {
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

export const onTokenRefreshNotification = token => {
  _pushToken = token;

  if (_receivedPushTokenCallback) {
    _receivedPushTokenCallback(token);
  }

  _messagingConnectWithCompletion();
};

export class IosInteractivePushSettings {
  actions: Array<IosInteractiveNotificationAction>;
  categories: Array<IosInteractiveNotificationCategory>;

  constructor() {

  }
}

export enum IosInteractiveNotificationActionOptions {
  authenticationRequired = 1,
  destructive = 2,
  foreground = 4,
}

export interface IosInteractiveNotificationAction {
  identifier: string;
  title: string;
  // activationMode?: string;
  // destructive?: boolean;
  // authenticationRequired?: boolean;
  options?: IosInteractiveNotificationActionOptions;
  behavior?: string;
}

export interface IosInteractiveNotificationCategory {
  identifier: string;
  actionsForDefaultContext?: string[];
  actionsForMinimalContext?: string[];
}

export class IOSPushSettings {
  badge: boolean;
  sound: boolean;
  alert: boolean;
  notificationCallback: Function;
  interactiveSettings: IosInteractivePushSettings;

  constructor() {

  }
}

export class PushNotificationModel {
  androidSettings: any;
  iosSettings: IOSPushSettings;
  onNotificationActionTakenCallback: Function;
}

export function areNotificationsEnabled() {
  let app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);

  // to check if also the app is registered use app.registeredForRemoteNotifications,
  // this below checks if user has enabled notifications for the app
  return app.currentUserNotificationSettings.types > 0;
}

function _registerForRemoteNotifications() {
  let app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
  if (!app) {
    application.on("launch", () => {
      _registerForRemoteNotifications();
    });
    return;
  }
  if (_registerForRemoteNotificationsRanThisSession) {
    // ignore
    // return;
  }
  _registerForRemoteNotificationsRanThisSession = true;

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

    _userNotificationCenterDelegate = UNUserNotificationCenterDelegateImpl.new().initWithCallback((unnotification, actionIdentifier?) => {
      // if the app is in the foreground then this method will receive the notification
      // if the app is in the background, and user has responded to interactive notification, then this method will receive the notification
      // if the app is in the background, and user views a notification, applicationDidReceiveRemoteNotificationFetchCompletionHandler will receive it
      const userInfo = unnotification.request.content.userInfo;
      const userInfoJSON = firebaseUtils.toJsObject(userInfo);

      if (actionIdentifier && _notificationActionTakenCallback) {
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

        _notificationActionTakenCallback(actionIdentifier, userInfoJSON);
      }

      userInfoJSON.foreground = true;
      _pendingNotifications.push(userInfoJSON);
      if (_receivedNotificationCallback !== null) {
        _processPendingNotifications();
      }
    });

    curNotCenter.delegate = _userNotificationCenterDelegate;

    _firebaseRemoteMessageDelegate = FIRMessagingDelegateImpl.new().initWithCallback((appDataDictionary: NSDictionary<any, any>) => {
      const userInfoJSON = firebaseUtils.toJsObject(appDataDictionary);
      _pendingNotifications.push(userInfoJSON);

      const asJs = firebaseUtils.toJsObject(appDataDictionary.objectForKey("notification"));
      if (asJs) {
        userInfoJSON.title = asJs.title;
        userInfoJSON.body = asJs.body;
      }

      const app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
      if (app.applicationState === UIApplicationState.Active) {
        userInfoJSON.foreground = true;
        if (_receivedNotificationCallback !== null) {
          _processPendingNotifications();
        }
      } else {
        userInfoJSON.foreground = false;
      }
    });
    FIRMessaging.messaging().delegate = _firebaseRemoteMessageDelegate;

  } else {
    const notificationTypes = UIUserNotificationType.Alert | UIUserNotificationType.Badge | UIUserNotificationType.Sound | UIUserNotificationActivationMode.Background;
    const notificationSettings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
    firebaseUtils.invokeOnRunLoop(() => {
      app.registerForRemoteNotifications(); // prompts the user to accept notifications
    });
    app.registerUserNotificationSettings(notificationSettings);
  }
}

function _messagingConnectWithCompletion() {
  return new Promise((resolve, reject) => {

    FIRMessaging.messaging().connectWithCompletion(error => {
      if (error) {
        // this is not fatal and it scares the hell out of ppl so not logging it
        // console.log("Firebase was unable to connect to FCM. Error: " + error);
        return reject(error);
      }

      _messagingConnected = true;
      resolve();
    });

  });
}

function _addOnNotificationActionTakenCallback(callback: Function) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (FIRMessaging) === "undefined") {
        reject("Enable FIRMessaging in Podfile first");
        return;
      }
      _notificationActionTakenCallback = callback;
      resolve();
    } catch (ex) {
      console.log("Error in firebase._addOnNotificationActionTakenCallback: " + ex);
      reject(ex);
    }
  });
}

function _processPendingNotifications() {
  const app = iOSUtils.getter(UIApplication, UIApplication.sharedApplication);
  if (!app) {
    application.on("launch", () => {
      _processPendingNotifications();
    });
    return;
  }
  if (_receivedNotificationCallback !== null) {
    for (let p in _pendingNotifications) {
      const userInfoJSON = _pendingNotifications[p];
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
      _receivedNotificationCallback(userInfoJSON);
    }
    _pendingNotifications = [];

    if (app.applicationState === UIApplicationState.Active) {
      app.applicationIconBadgeNumber = 0;
    }
  }
}

function _addObserver(eventName, callback) {
  const queue = iOSUtils.getter(NSOperationQueue, NSOperationQueue.mainQueue);
  return iOSUtils.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).addObserverForNameObjectQueueUsingBlock(eventName, null, queue, callback);
}

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
    onTokenRefreshNotification(fcmToken);
  }
}

