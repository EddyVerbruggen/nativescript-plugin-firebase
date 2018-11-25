import * as appModule from "tns-core-modules/application";
import { LogEventOptions, SetScreenNameOptions, SetUserPropertyOptions } from "./analytics";

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
