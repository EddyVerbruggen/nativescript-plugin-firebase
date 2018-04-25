<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/crash.png" height="85px" alt="Crash Reporting"/>

## Enabling Crash Reporting
Since version 5.3.0 you can choose either Crashlytics (recommended) or the older Firebase crash reporting (which doesn't really work on iOS).
You will be prompted during installation of the plugin to enable either Crashlytics or Crash Reporting (it's off by default).

If you want to use Crashlytics, make sure your `firebase.nativescript.json` file has `"crashlytics": true` and `"crash_reporting": false`,
then remove the `platforms` folder so these changes are picked up.
