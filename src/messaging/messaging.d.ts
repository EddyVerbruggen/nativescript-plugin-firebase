import { Message, MessagingOptions } from "../firebase";

export declare function initFirebaseMessaging(options?: MessagingOptions): void;

export declare function addOnMessageReceivedCallback(callback: (message: Message) => void): Promise<{}>;

export declare function getCurrentPushToken(): Promise<string>;

export declare function registerForPushNotifications(options?: MessagingOptions): Promise<void>;

export declare function unregisterForPushNotifications(): Promise<void>;

export declare function handleRemoteNotification(app: any, userInfo: any): void;

export declare function addOnPushTokenReceivedCallback(callback: (token: string) => void): Promise<{}>;

export declare function addBackgroundRemoteNotificationHandler(appDelegate: any): void;

export declare function registerForInteractivePush(model?: any): void;

export declare function prepAppDelegate(): void;

export declare function subscribeToTopic(topicName: any): Promise<{}>;

export declare function unsubscribeFromTopic(topicName: any): Promise<{}>;

export declare function areNotificationsEnabled(): boolean;

export declare const onTokenRefreshNotification: (token: string) => void;

// android. ...
export declare function onAppModuleLaunchEvent(intent: any): void;
export declare function onAppModuleResumeEvent(intent: any): void;

export declare class IosInteractivePushSettings {
  actions: Array<IosInteractiveNotificationAction>;
  categories: Array<IosInteractiveNotificationCategory>;
}

export declare enum IosInteractiveNotificationActionOptions {
  authenticationRequired = 1,
  destructive = 2,
  foreground = 4,
}

export type IosInteractiveNotificationType = "button" | "input";

export interface IosInteractiveNotificationAction {
  /**
   * Either "button" or "input", default "button".
   */
  type?: IosInteractiveNotificationType;
  identifier: string;
  title: string;
  submitLabel?: string;
  placeholder?: string;
  options?: IosInteractiveNotificationActionOptions;
}

export interface IosInteractiveNotificationCategory {
  identifier: string;
  // actionsForDefaultContext?: string[];
  // actionsForMinimalContext?: string[];
}

export declare class IosPushSettings {
  badge: boolean;
  sound: boolean;
  alert: boolean;
  notificationCallback: Function;
  interactiveSettings: IosInteractivePushSettings;
}

export declare class PushNotificationModel {
  androidSettings: any;
  iosSettings: IosPushSettings;
  onNotificationActionTakenCallback: Function;
}
