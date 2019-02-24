import Vue from "nativescript-vue";
import App from "./components/App";

require("nativescript-plugin-firebase");
Vue.registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === "production");

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
