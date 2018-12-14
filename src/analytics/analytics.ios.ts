import {
  LogEventOptions,
  SetScreenNameOptions,
  SetUserPropertyOptions,
  LogComplexEventOptions
} from "./analytics";

export function logEvent(options: LogEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
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

/*
function getArrayList(array: Array<LogComplexEventOptions>): Array<NSMutableDictionary<string, any>> {
  let returnArray:  Array<NSMutableDictionary<string, any>> = new Array();
  for (const p in array) {
    const param = array[p];
    if (param.parameters !== undefined) {
      let bundle: NSMutableDictionary<string, any> = buildBundle(param.parameters);
      returnArray.push(bundle);
    } else {
      console.log("BE CARREFUL, no parameters into your complex event");
    }
  }
  return returnArray;
}

function buildBundle(params: Array<LogComplexEventParameter>): NSMutableDictionary<string, any> {
  const bundle: NSMutableDictionary<string, any> = NSMutableDictionary.new();
  for (const p in params) {
    const param = params[p];
    if (param.value !== undefined) {
      let nsString = NSMutableString.new();
      nsString.setString(param.key);
      if (param.type === "string" || param.type === "double" || param.type === "float" || param.type === "int" || param.type === "long" || param.type === "boolean") {
          bundle.setObjectForKey(param.value, param.key);
      }
      else if (param.type === "array") {
        let arrayList = getArrayList(param.value);
        bundle.setObjectForKey(arrayList, param.key);
      }
      // bundle.putString(param.key, param.value);
    }
  }
  return bundle;
}*/

/*export function logComplexEvent(options: LogComplexEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      const dic: any = NSMutableDictionary.new();
      if (options.parameters !== undefined) {
        for (let p in options.parameters) {
          const param = options.parameters[p];
          if (param.value !== undefined) {
            let dic1: NSMutableDictionary<string, any> = buildBundle(options.parameters);
            dic.setObjectForKey(dic1, param.key);
          }
        }
      }
      FIRAnalytics.logEventWithNameParameters(options.key, dic);
      resolve();
    }
    catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
}*/

/*
export function logComplexEvent(options: LogComplexEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      const dic: any = NSMutableDictionary.new();
      if (options.parameters !== undefined) {
        for (let p in options.parameters) {
          const param = options.parameters[p];
          if (param.value !== undefined) {
            const dic1: any = NSMutableDictionary.new();
            dic1.setObjectForKey("value56", "testval");
            dic.setObjectForKey(new Array(dic1), param.key);
          }
        }
      }
      FIRAnalytics.logEventWithNameParameters(options.key, dic);
      resolve();
    }
    catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
}*/


export function logComplexEvent(options: LogComplexEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      const dic: any = NSMutableDictionary.new();
      if (options.parameters !== undefined) {
        for (let p in options.parameters) {
          const param = options.parameters[p];
          if (param.type === "array" && param.value !== undefined) {
            const listArray = new Array();
            for (let val in param.value) {
              const value = param.value[val];
              if (value.parameters !== undefined) {
                const dicTemp: any = NSMutableDictionary.new();
                for (let i in value.parameters) {
                  const item = value.parameters[i];
                  if (item.type !== "array" && item.value !== undefined && item.key !== undefined) {
                    dicTemp.setObjectForKey(item.value, item.key);
                  }
                }
                listArray.push(dicTemp);
              }
            }
            dic.setObjectForKey(listArray, param.key);
          } else if (param.type === "string" || param.type === "double" || param.type === "float" || param.type === "int" || param.type === "long" || param.type === "boolean") {
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


export function setUserId(arg): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      if (arg.userId === undefined) {
        reject("Argument 'userId' is missing");
        return;
      }

      FIRAnalytics.setUserID(arg.userId);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setUserId: " + ex);
      reject(ex);
    }
  });
}

export function setUserProperty(options: SetUserPropertyOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
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

export function setScreenName(options: SetScreenNameOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
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

export function setAnalyticsCollectionEnabled(enabled: boolean): void {
  FIRAnalyticsConfiguration.sharedInstance().setAnalyticsCollectionEnabled(enabled);
}
