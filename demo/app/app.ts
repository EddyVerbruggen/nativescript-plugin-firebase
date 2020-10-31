import { Application, UnhandledErrorEventData } from "@nativescript/core";

// added this here so we can do some wiring
require("@nativescript/firebase");

// testing this.. we may be able to hook that up to Crashlytics. Either via docs, or automatically.
Application.on(Application.uncaughtErrorEvent, (args: UnhandledErrorEventData) => {
  console.log("[app.js]: Uncaught NativeScript Error: " + args.error);
});

Application.run({ moduleName: "main-page" });
