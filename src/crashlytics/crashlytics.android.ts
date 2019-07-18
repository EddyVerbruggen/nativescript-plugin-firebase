declare const com: any;

export function sendCrashLog(exception: any /* java.lang.Exception */): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.logException(exception);
  }
}

export function log(msg: string, tag?: string, priority?: number): void {
  if (isCrashlyticsAvailable()) {
    if (tag && priority) {
      com.crashlytics.android.Crashlytics.log(priority, tag, msg);
    } else {
      com.crashlytics.android.Crashlytics.log(msg);
    }
  }
}

export function setString(key: string, value: string): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setString(key, value);
  }
}

export function setBool(key: string, value: boolean): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setBool(key, value);
  }
}

export function setFloat(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setFloat(key, value);
  }
}

export function setInt(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setInt(key, value);
  }
}

export function setDouble(key: string, value: number): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setDouble(key, value);
  }
}

export function setUserId(id: string): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.setUserIdentifier(id);
  }
}

export function crash(): void {
  if (isCrashlyticsAvailable()) {
    com.crashlytics.android.Crashlytics.getInstance().crash();
  }
}

export function setCrashlyticsCollectionEnabled(enabled: boolean): void {
  if (isCrashlyticsAvailable()) {
    io.fabric.sdk.android.Fabric.with(
        com.tns.NativeScriptApplication.getInstance(),
        [new com.crashlytics.android.Crashlytics()]);
  }
}

function isCrashlyticsAvailable(): boolean {
  if (typeof (com.crashlytics) === "undefined" || typeof (com.crashlytics.android.Crashlytics) === "undefined") {
    console.log("Add 'crashlytics: true' to firebase.nativescript.json and remove the platforms folder");
    return false;
  }
  return true;
}