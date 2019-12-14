import "./bundle-config";
import * as application from "tns-core-modules/application";

// added this here so we can do some wiring -- without this, you won're receive a push token on iOS
require("nativescript-plugin-firebase");

application.run({ moduleName: "main-page" });
