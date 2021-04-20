import { Application } from "@nativescript/core";
import { LogComplexEventOptions, LogComplexEventParameter, LogEventOptions, SetScreenNameOptions, SetUserPropertyOptions } from "./analytics";
import { ENABLE_ANALYTICS_HINT, validateAnalyticsKey, validateAnalyticsParam } from "./analytics-common";

declare const com: any;

export function logEvent(options: LogEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (!isAnalyticsAvailable()) {
      reject(ENABLE_ANALYTICS_HINT);
      return;
    }

    try {
      const validationError = validateAnalyticsKey(options.key);
      if (validationError !== undefined) {
        reject(validationError);
        return;
      }

      const bundle = new android.os.Bundle();
      if (options.parameters !== undefined) {
        for (const p in options.parameters) {
          const param = options.parameters[p];
          const validationParamError = validateAnalyticsParam(param);
          if (validationParamError !== undefined) {
            reject(validationParamError);
            return;
          }

          if (param.value !== undefined) {
            bundle.putString(param.key, param.value);
          }
        }
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          Application.android.context || Application.getNativeApplication()
      ).logEvent(options.key, bundle);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.logEvent: " + ex);
      reject(ex);
    }
  });
}

export function logComplexEvent(options: LogComplexEventOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (!isAnalyticsAvailable()) {
      reject(ENABLE_ANALYTICS_HINT);
      return;
    }

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
          Application.android.context || Application.getNativeApplication()
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
    if (!isAnalyticsAvailable()) {
      reject(ENABLE_ANALYTICS_HINT);
      return;
    }

    try {
      if (arg.userId === undefined) {
        reject("Argument 'userId' is missing");
        return;
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          Application.android.context || Application.getNativeApplication()).setUserId(arg.userId);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setUserId: " + ex);
      reject(ex);
    }
  });
}

export function setUserProperty(options: SetUserPropertyOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (!isAnalyticsAvailable()) {
      reject(ENABLE_ANALYTICS_HINT);
      return;
    }

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
          Application.android.context || Application.getNativeApplication()
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
    if (!isAnalyticsAvailable()) {
      reject(ENABLE_ANALYTICS_HINT);
      return;
    }

    try {
      if (options.screenName === undefined) {
        reject("Argument 'screenName' is missing");
        return;
      }

      com.google.firebase.analytics.FirebaseAnalytics.getInstance(
          Application.android.context || Application.getNativeApplication()
      ).setCurrentScreen(Application.android.foregroundActivity, options.screenName, null);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.analytics.setScreenName: " + ex);
      reject(ex);
    }
  });
}

export function setAnalyticsCollectionEnabled(enabled: boolean): void {
  if (isAnalyticsAvailable()) {
    com.google.firebase.analytics.FirebaseAnalytics.getInstance(
        Application.android.context || Application.getNativeApplication()
    ).setAnalyticsCollectionEnabled(enabled);
  }
}

export function setSessionTimeoutDuration(seconds: number): void {
  if (isAnalyticsAvailable()) {
    com.google.firebase.analytics.FirebaseAnalytics.getInstance(
        Application.android.context || Application.getNativeApplication()
    ).setSessionTimeoutDuration(seconds * 1000); // Android expects ms
  }
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

function isAnalyticsAvailable(): boolean {
  if (typeof (com.google.firebase.analytics) === "undefined" || typeof (com.google.firebase.analytics.FirebaseAnalytics) === "undefined") {
    console.log(ENABLE_ANALYTICS_HINT);
    return false;
  }
  return true;
}
