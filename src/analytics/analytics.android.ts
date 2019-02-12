import * as appModule from "tns-core-modules/application";
import {
  LogEventOptions,
  SetScreenNameOptions,
  SetUserPropertyOptions,
  LogComplexEventOptions,
  LogComplexEventParameter
} from "./analytics";

declare const com: any;

export function logEvent(options: LogEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      if (options.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      const bundle = new android.os.Bundle();
      if (options.parameters !== undefined) {
        for (const p in options.parameters) {
          const param = options.parameters[p];
          if (param.value !== undefined) {
            bundle.putString(param.key, param.value);
          }
        }
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()
      ).logEvent(options.key, bundle);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
}

function getArrayList(array: Array<LogComplexEventOptions>): java.util.ArrayList<android.os.Bundle> {
  let returnArray = new java.util.ArrayList<android.os.Bundle>();
  for (const p in array) {
    const param = array[p];
    if (param.parameters !== undefined) {
      let bundle: android.os.Bundle = buildBundle(param.parameters);
      returnArray.add(bundle);
    } else {
      console.log("BE CARREFUL, no parameters into your complex event");
    }
  }
  return returnArray;
}

function buildBundle(params: Array<LogComplexEventParameter>): android.os.Bundle {
  const bundle = new android.os.Bundle();
  for (const p in params) {
    const param = params[p];
    if (param.value !== undefined) {
      if (param.type === "string") {
        bundle.putString(param.key, param.value);
      } else if (param.type === "double") {
        bundle.putDouble(param.key, param.value);
      } else if (param.type === "float") {
        bundle.putFloat(param.key, param.value);
      } else if (param.type === "int") {
        bundle.putInt(param.key, param.value);
      } else if (param.type === "long") {
        bundle.putLong(param.key, param.value);
      } else if (param.type === "boolean") {
        bundle.putBoolean(param.key, param.value);
      } else if (param.type === "array") {
        bundle.putParcelableArrayList(param.key, getArrayList(param.value));
      }
      // bundle.putString(param.key, param.value);
    }
  }
  return bundle;
}

export function logComplexEvent(options: LogComplexEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      if (options.key === undefined) {
        reject("Argument 'key' is missing");
        return;
      }

      let bundle = new android.os.Bundle();
      if (options.parameters !== undefined) {
        bundle = buildBundle(options.parameters);
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()
      ).logEvent(options.key, bundle);

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

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()).setUserId(arg.userId);

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

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()
      ).setUserProperty(options.key, options.value);

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

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()
      ).setCurrentScreen(appModule.android.foregroundActivity, options.screenName, null);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setScreenName: " + ex);
      reject(ex);
    }
  });
}

export function setAnalyticsCollectionEnabled(enabled: boolean): void {
  com.google.firebase.analytics.FirebaseAnalytics.getInstance(
      appModule.android.currentContext || com.tns.NativeScriptApplication.getInstance()
  ).setAnalyticsCollectionEnabled(enabled);
}
