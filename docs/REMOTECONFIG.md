<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/config.png" height="85px" alt="Remote Config"/>


## Enabling Remote Config
Since plugin version 3.2.0 you can retrieve _Remote Config_ properties.
This feature lets you configure parameters in your Firebase instance like these:

<img src="images/remote-config.png" width="500px" height="482px" alt="Remote Config"/>

If you didn't choose this feature during installation you can manually uncomment
the relevant lines to add the SDK's to your app in
[Podfile](../platforms/ios/Podfile) and [include.gradle](../platforms/android/include.gradle).

## Functions

### getRemoteConfig
Using this function you can retrieve the current values of the remote properties so you can change app behavior on the fly easily (feature toggles for instance).

```js
  firebase.getRemoteConfig({
    developerMode: false, // play with this boolean to get more frequent updates during development
    cacheExpirationSeconds: 600, // 10 minutes, default is 12 hours.. set to a lower value during dev
    properties: [{
      key: "holiday_promo_enabled",
      default: false
    },
    {
      key: "coupons_left",
      default: 100
    },
    {
      key: "double_or_nothing",
      default: 9.99
    }]
  }).then(
      function (result) {
        console.log("Remote Config last fetched at " + result.lastFetch);
        console.log("Remote Config: " + JSON.stringify(result.properties));
        console.log("Remote Config property 'coupons_left': " + result.properties.coupons_left);
      }
  );
```
