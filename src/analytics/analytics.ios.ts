import { LogEventOptions, SetScreenNameOptions, SetUserPropertyOptions } from "./analytics";

export function logEvent(options: LogEventOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (options.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      const dic: any = NSMutableDictionary.new();
      if (options.parameters !== undefined) {
        for (let p in options.parameters) {
          const param = options.parameters[p];
          if (param.value !== undefined) {
            dic.setObjectForKey(param.value, param.key);
          }
        }
      }

      FIRAnalytics.logEventWithNameParameters(options.key, dic);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
}

export function setUserProperty(options: SetUserPropertyOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (options.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }
      if (options.value === undefined) {
        reject("Argument 'value' is missing");
        return;
      }

      FIRAnalytics.setUserPropertyStringForName(options.value, options.key);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setUserProperty: " + ex);
      reject(ex);
    }
  });
}

export function setScreenName(options: SetScreenNameOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (options.screenName === undefined) {
        reject("Argument 'screenName' is missing");
        return;
      }

      FIRAnalytics.setScreenNameScreenClass(options.screenName, null);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setScreenName: " + ex);
      reject(ex);
    }
  });
}
