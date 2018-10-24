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

## API

### `startTrace`
To interact with a started trace, we're remembering it in the property `firebaseTrace`:

```typescript
import { performance as firebasePerformance } from "nativescript-plugin-firebase";
import { FirebaseTrace } from "nativescript-plugin-firebase/performance/performance";

const firebaseTrace: FirebaseTrace = firebasePerformance.startTrace("myTrace");
```

Now you can call several functions on the remembered trace object, read on below. And don't forget to use `trace.stop`.

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
