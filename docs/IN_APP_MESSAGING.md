<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/inappmessaging.png" height="85px" alt="In-App Messaging"/>

> Added in plugin version 8.2.0

## In-App Messaging?
Engage active app users with contextual messages.

[Learn more here..](https://firebase.google.com/docs/in-app-messaging/)

## Want to see a demo?
Check out the (code of the) [Vue demo](demo-vue)!

## Enabling Cloud Functions
To add this feature to your project, either:

* Remove `firebase.nativescript.json` from the root of the project and run `npm i`, or
* Edit that file and add `"in_app_messaging": true`.

In both cases, remove the `/platforms` folder afterwards so the required native library will be added upon the next build. 

## API
There's nothing you have to do code-wise if you only want to display messages.
If you want to capture a 'button clicked' event however, read on.

### `onMessageClicked`

```typescript
import { inappmessaging } from "nativescript-plugin-firebase/inappmessaging";

inappmessaging.onMessageClicked(message => {
  console.log("Clicked a button for Campaign: " + message.campaignName);
});
```

### `onMessageImpression`
You can also get notified if a message is being shown to a user:

```typescript
import { inappmessaging } from "nativescript-plugin-firebase/inappmessaging";

inappmessaging.onMessageImpression(message => {
  console.log("A message belonging to this campaign is being shown: " + message.campaignName);
});
```
