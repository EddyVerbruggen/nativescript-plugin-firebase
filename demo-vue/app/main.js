import Vue from "nativescript-vue";
import App from "./components/App";

const firebase = require("nativescript-plugin-firebase");

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === "production");

firebase.init({
  // can be used to catch in-app-messaging dynamic links, but it's not mandatory
  onDynamicLinkCallback: result => {
    console.log("Dynamic Link received: " + result);
    console.log("Dynamic Link received, url: " + result.url);
    if (result.url.indexOf("/shit") > -1) {
      // note that you could deeplink/route the user now, but let's just show an alert
    }
  }
})
    .then(() => console.log("Firebase initialized"))
    .catch(error => console.log("Error initializing Firebase: " + error));

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
