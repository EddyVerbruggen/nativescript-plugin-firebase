import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

require("nativescript-plugin-firebase");

platformNativeScriptDynamic().bootstrapModule(AppModule);
