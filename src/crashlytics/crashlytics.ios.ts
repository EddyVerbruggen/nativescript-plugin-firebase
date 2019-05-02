export function sendCrashLog(exception: any /* NSError */): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().recordError(exception);
  }
}

export function log(msg: string, tag?: string, priority?: number): void {
  if (isCrashlyticsAvailable()) {
    if (tag) {
      TNSCrashlyticsLoggerWrapper.log(tag + " - " + msg);
    } else {
      TNSCrashlyticsLoggerWrapper.log(msg);
    }
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

export function crash(): void {
  if (isCrashlyticsAvailable()) {
    Crashlytics.sharedInstance().crash();
  }
  Fabric.with(NSArray.arrayWithObject(Crashlytics.class()));
}

export function setCrashlyticsCollectionEnabled(enabled: boolean): void {
  if (isCrashlyticsAvailable()) {
    Fabric.with(NSArray.arrayWithObject(Crashlytics.class()));
  }
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (Crashlytics) === "undefined") {
    console.log("Add 'crashlytics: true' to firebase.nativescript.json and remove the platforms folder");
    return false;
  }
  return true;
}