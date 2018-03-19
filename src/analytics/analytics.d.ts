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

export interface SetUserPropertyOptions {
  key: string;
  value: string;
}

export interface SetScreenNameOptions {
  screenName: string;
}

function logEvent(options: LogEventOptions): Promise<any>;

function setUserProperty(options: SetUserPropertyOptions): Promise<any>;

function setScreenName(options: SetScreenNameOptions): Promise<any>;
