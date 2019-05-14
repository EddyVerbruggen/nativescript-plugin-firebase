export interface LogComplexEventParameter {
  key: string;
  value: any;
  /**
   * Default "string".
   */
  type?: "string" | "array" | "double" | "float" | "int" | "long" | "number" | "boolean";
}

export interface LogEventParameter {
  key: string;
  value: string;
}

export interface LogEventOptions {
  /**
   * The name of the event. You can use any name, but it's recommended to use one of
   * the predefined constants. These values are the same for both iOS and Android, so
   * for the complete list see https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event.html
   */
  key: string;
  /**
   * Each (predefined) event has its own set of optional parameters, see
   * https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param
   * Example:
   *
   *  parameters: [{
   *    key: "item_name",
   *    value: "abc"
   *  }, ..]
   */
  parameters?: Array<LogEventParameter>;
}

export interface LogComplexEventOptions {
  /**
   * The name of the event. You can use any name, but it's recommended to use one of
   * the predefined constants. These values are the same for both iOS and Android, so
   * for the complete list see https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event.html
   */
  key: string;
  /**
   * Each (predefined) event has its own set of optional parameters, see
   * https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param
   * Example:
   *
   *  parameters: [{
   *    key: "item_name",
   *    value: "abc",
   *    type: "double"
   *  }, ..]
   */
  parameters?: Array<LogComplexEventParameter>;
}

export interface SetUserIdOptions {
  userId: string;
}

export interface SetUserPropertyOptions {
  key: string;
  value: string;
}

export interface SetScreenNameOptions {
  screenName: string;
}

export declare function logEvent(options: LogEventOptions): Promise<void>;

export declare function logComplexEvent(options: LogComplexEventOptions): Promise<void>;

export declare function setUserId(options: SetUserIdOptions): Promise<void>;

export declare function setUserProperty(options: SetUserPropertyOptions): Promise<void>;

export declare function setScreenName(options: SetScreenNameOptions): Promise<void>;

export declare function setAnalyticsCollectionEnabled(enabled: boolean): void;

export declare function setSessionTimeoutDuration(seconds: number): void;

export declare function iOSHandleOpenURL(url: any /* NSURL */): void;
