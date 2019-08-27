import { LogEventParameter } from "./analytics";

export function validateAnalyticsKey(key: string): string | undefined {
  if (key === undefined) {
    return "Argument 'key' is missing";
  }

  if (key.length > 40) {
    return "Argument 'key' must be 40 characters or fewer";
  }

  if (!key.match(/^[a-zA-Z0-9][a-zA-Z0-9_]+$/)) {
    return "Argument 'key' can only contain alphanumeric characters and underscores and must start with an alphanumeric character";
  }

  if (key.startsWith("firebase_")) {
    return "Argument 'key' must not start with 'firebase_'";
  }

  if (key.startsWith("google_")) {
    return "Argument 'key' must not start with 'google_'";
  }

  if (key.startsWith("ga_")) {
    return "Argument 'key' must not start with 'ga_'";
  }

  if ([
    "ad_activeview",
    "ad_click",
    "ad_exposure",
    "ad_impression",
    "ad_query",
    "adunit_exposure",
    "app_clear_data",
    "app_uninstall",
    "app_update",
    "error",
    "first_open",
    "first_visit",
    "in_app_purchase",
    "notification_dismiss",
    "notification_foreground",
    "notification_open",
    "notification_receive",
    "os_update",
    "screen_view",
    "session_start",
    "user_engagement"
  ].indexOf(key) > -1) {
    return "Avoid using a reserved event name as the 'key' argument. Full list at: https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event";
  }

  return undefined;
}

export function validateAnalyticsParam(param: LogEventParameter): string | undefined {
  return validateAnalyticsParamKey(param.key) || validateAnalyticsParamValue(param.value);
}

function validateAnalyticsParamKey(key: string): string | undefined {
  if (key === undefined) {
    return "Param 'key' is missing";
  }

  if (key.length > 40) {
    return "Param 'key' must be 40 characters or fewer";
  }

  if (!key.match(/^[a-zA-Z0-9][a-zA-Z0-9_]+$/)) {
    return "Param 'key' can only contain alphanumeric characters and underscores and must start with an alphanumeric character";
  }

  return undefined;
}

function validateAnalyticsParamValue(value: string): string | undefined {
  if (value === undefined) {
    return "Param 'value' is missing";
  }

  if (value.length > 100) {
    return "Param 'value' must be 100 characters or fewer";
  }

  if (value.startsWith("firebase_")) {
    return "Param 'value' must not start with 'firebase_'";
  }

  if (value.startsWith("google_")) {
    return "Param 'value' must not start with 'google_'";
  }

  if (value.startsWith("ga_")) {
    return "Param 'value' must not start with 'ga_'";
  }

  return undefined;
}