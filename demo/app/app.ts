import "./bundle-config";
import * as application from "tns-core-modules/application";
import { UnhandledErrorEventData } from "tns-core-modules/application";

// added this here so we can do some wiring
require("nativescript-plugin-firebase");

// testing this.. we may be able to hook that up to Crashlytics. Either via docs, or automatically.
application.on(application.uncaughtErrorEvent, (args: UnhandledErrorEventData) => {
  console.log("[app.js]: Uncaught NativeScript Error: " + args.error);
});

application.run({ moduleName: "main-page" });
