<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/performancemonitoring.png" height="85px" alt="Performance Monitoring"/>

> Added in plugin version 7.3.0

## Performance Monitoring?
With Firebase Performance Monitoring you get insights into how your app performs from your users' point of view, with automatic and customized performance tracing.
                                                                                          
[Learn more here..](https://firebase.google.com/products/performance/)

## Enabling Performance Monitoring
To add this feature to your project, either:

* Remove `firebase.nativescript.json` from the root of the project and run `npm i`, or
* Edit that file and add `"performance_monitoring": true`.

In both cases, remove the `/platforms` folder afterwards so the required native library will be added upon the next build. 

> ⚠️ It may take up to 12 hours before results pop up in your Firebase console, so be patient.

> ℹ️ Per Firebase's documentation, by enabling this feature, Remote Config will be enabled as well. So you may be interested in [what Remote Config can do for your app](../REMOTECONFIG.md).

## API

### `startTrace`
To be able to interact with a started trace, you can remember it in a property (in this case `firebaseTrace`):

```typescript
import { performance as firebasePerformance } from "nativescript-plugin-firebase";
import { FirebaseTrace } from "nativescript-plugin-firebase/performance/performance";

const firebaseTrace: FirebaseTrace = firebasePerformance.startTrace("myTrace");
```

Now you can call several functions on the remembered trace object, read on below. And don't forget to use `trace.stop` afterwards.

### `trace.setValue`

```typescript
if (firebaseTrace) {
  firebaseTrace.setValue("foo", "bar");
}
```

### `trace.getValue`

```typescript
if (firebaseTrace) {
  firebaseTrace.getValue("foo");
}
```

### `trace.getAttributes`

```typescript
if (firebaseTrace) {
  const attributes = firebaseTrace.getAttributes();
  console.log(`trace attributes: ${attributes}`);
}
```

### `trace.removeAttribute`

```typescript
if (firebaseTrace) {
  const attributes = firebaseTrace.removeAttribute("foo");
}
```

### `trace.incrementMetric`

```typescript
if (firebaseTrace) {
  const incrementBy = 1;
  const attributes = firebaseTrace.incrementMetric("foo_metric", incrementBy);
}
```

### `trace.stop`
To stop the trace, call `stop` on the remembered trace object:

```typescript
if (firebaseTrace) {
  firebaseTrace.stop();
  firebaseTrace = undefined;
}
```

### `startHttpMetric`
To be able to interact with a started HTTP metric, you can remember it in a property (in this case `firebaseHttpMetric`):

```typescript
import { performance as firebasePerformance } from "nativescript-plugin-firebase";
import { FirebaseHttpMetric } from "nativescript-plugin-firebase/performance/performance";

const firebaseHttpMetric: FirebaseHttpMetric = firebasePerformance.startHttpMetric("https://postman-echo.com/get", "GET");
```

Now you can call several functions on the remembered metric object, read on below. And don't forget to use `metric.stop` afterwards.

### `metric.setRequestPayloadSize`

```typescript
if (firebaseHttpMetric) {
  firebaseHttpMetric.setRequestPayloadSize(42);
}
```

### `metric.setHttpResponseCode`

```typescript
if (firebaseHttpMetric) {
  firebaseHttpMetric.setHttpResponseCode(200);
}
```

### `metric.stop`
To stop the metric, call `stop` on the remembered metric object:

```typescript
if (firebaseHttpMetric) {
  firebaseHttpMetric.stop();
  firebaseHttpMetric = undefined;
}
```