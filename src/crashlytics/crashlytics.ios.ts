import { ENABLE_CRASHLYTICS_HINT } from "./crashlytics-common";

export function sendCrashLog(exception: any /* NSError */): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().recordError(exception);
  }
}

export function log(msg: string, tag?: string, priority?: number): void {
  if (isCrashlyticsAvailable()) {
    if (tag) {
      FIRCrashlytics.crashlytics().log(tag + " - " + msg);
    } else {
      FIRCrashlytics.crashlytics().log(msg);
    }
  }
}

export function setString(key: string, value: string): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCustomValueForKey(value, key);
  }
}

export function setBool(key: string, value: boolean): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCustomValueForKey(value, key);
  }
}

export function setFloat(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCustomValueForKey(value, key);
  }
}

export function setInt(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCustomValueForKey(value, key);
  }
}

export function setDouble(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCustomValueForKey(value, key);
  }
}

export function setUserId(id: string): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setUserID(id);
  }
}

export function crash(): void {
  if (isCrashlyticsAvailable()) {
    // TODO: manually force crash - https://firebase.google.com/docs/crashlytics/test-implementation?authuser=0&platform=ios#force_a_crash_to_test_your_implementation
    console.log('currently manual crashing not implemented');
  }
}

export function setCrashlyticsCollectionEnabled(enabled: boolean): void {
  if (isCrashlyticsAvailable()) {
    FIRCrashlytics.crashlytics().setCrashlyticsCollectionEnabled(enabled);
  }
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (FIRCrashlytics) === "undefined") {
    console.log(ENABLE_CRASHLYTICS_HINT);
    return false;
  }
  return true;
}