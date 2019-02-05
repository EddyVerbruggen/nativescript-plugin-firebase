export function sendCrashLog(exception: any /* NSError */): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().recordError(exception);
  }
}

export function log(priority: number, tag: string, msg: string): void {
  if (isCrashlyticsAvailable()) {
    // TODO this seems deprecated, see https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues/1134
    Crashlytics.sharedInstance().logEvent(tag + " - " + msg);
    // Answers.logCustomEventWithNameCustomAttributes(tag + " - " + msg, null);
  }
}

export function setString(key: string, value: string): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setObjectValueForKey(value, key);
  }
}

export function setBool(key: string, value: boolean): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setBoolValueForKey(value, key);
  }
}

export function setFloat(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setFloatValueForKey(value, key);
  }
}

export function setInt(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setIntValueForKey(value, key);
  }
}

export function setDouble(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setFloatValueForKey(value, key);
  }
}

export function setUserId(id: string): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().setUserIdentifier(id);
  }
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (Crashlytics) === "undefined") {
    console.log("Add 'crashlytics: true' to firebase.nativescript.json and remove the platforms folder");
    return false;
  }
  return true;
}