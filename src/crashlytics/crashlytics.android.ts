import { ENABLE_CRASHLYTICS_HINT } from "./crashlytics-common";

declare const com, java: any;

export function sendCrashLog(exception: any /* java.lang.Exception */): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().recordException(exception);
  }
}

export function log(msg: string, tag?: string, priority?: number): void {
  if (isCrashlyticsAvailable()) {
    if (tag && priority) {
      const fullMessage = priority + '/' + tag + ': ' + msg;
      com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().log(fullMessage);
    } else {
      com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().log(msg);
    }
  }
}

export function setString(key: string, value: string): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCustomKey(key, value);
  }
}

export function setBool(key: string, value: boolean): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCustomKey(key, value);
  }
}

export function setFloat(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCustomKey(key, value);
  }
}

export function setInt(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCustomKey(key, value);
  }
}

export function setDouble(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCustomKey(key, value);
  }
}

export function setUserId(id: string): void {
  if (isCrashlyticsAvailable()) {
    com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setUserId(id);
  }
}

export function crash(): void {
  if (isCrashlyticsAvailable()) {
    throw new java.lang.RuntimeException('Test Crash');
  }
}

export function setCrashlyticsCollectionEnabled(enabled: boolean): void {
  com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance().setCrashlyticsCollectionEnabled(new java.lang.Boolean(enabled));
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (com.google.firebase.crashlytics.FirebaseCrashlytics) === "undefined" || typeof (com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance()) === "undefined") {
    console.log(ENABLE_CRASHLYTICS_HINT);
    return false;
  }
  return true;
}
