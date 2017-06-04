<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/crash.png" height="85px" alt="Crash Reporting"/>

## Enabling Crash Reporting
With plugin version 3.9.0+ you will be prompted during installation of the plugin to enable Crash Reporting (it's off by default).

In older versions it was on by default but it may slow down app startup a bit so now it's disabled by default.

## Making sense of the stacktraces
Please read [the official docs](https://firebase.google.com/docs/crash/)
on what Crash reporting is and what you can do to have a better experience.

## Future work
There's an option to send logs to Firebase along with the crash in order
to add some context. This is however currently problematic on iOS but we'll keep an eye out.