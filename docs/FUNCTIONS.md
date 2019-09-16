<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/functions.png" height="85px" alt="Cloud Functions"/>

> Added in plugin version 7.1.0, by [breningham](https://github.com/breningham)

## Cloud Functions?
Cloud Functions for Firebase lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.
Your code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.

[Learn more here..](https://firebase.google.com/docs/functions/)

> Note that you don't need to enable this feature in the plugin unless you want to [call those Cloud Functions from your app](https://firebase.google.com/docs/functions/callable).

## Enabling Cloud Functions
To add this feature to your project, either:

* Remove `firebase.nativescript.json` from the root of the project and run `npm i`, or
* Edit that file and add `"functions": true`.

In both cases, remove the `/platforms` folder afterwards so the required native library will be added upon the next build. 


## API
You can use either the Web API syntax (easy for interoperability with a web version of your app), or our custom native syntax.
Use whichever syntax you like most - the underlying implementation is the same.

Both API supports Cloud Functions locations/regions as [described here](https://firebase.google.com/docs/functions/locations).
To set a function's region, pass the region string as the second parameter of `httpsCallable`. 
If the region parameter is not supplied, the function will use Cloud Function's default region, which as of this doc is written is `us-central1`.

### `httpsCallable`
This example uses the Cloud Function as [implemented here](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/ff95c77c7b09acf66654f53c52e8ae0c8d7b1c78/demo/firebasefunctions/functions/src/index.ts#L15-L19).

<details>
 <summary>Native API</summary>

```typescript
import * as firebase from "nativescript-plugin-firebase";

const fn = firebase.functions.httpsCallable("helloName");

// example of specifying the function's region
// defaults to `us-central1` if not specified
// const fn = firebase.functions.httpsCallable("helloName", "us-central1");

fn("Nativescript-Plugin-Firebase!")
    .then((dataCue: any) => console.log("Callable Function Result: " + dataCue.message))
    .catch((errorMessage: string) => console.log("Callable Function Error: " + errorMessage));
```
</details>

<details>
 <summary>Web API</summary>

```typescript
const firebaseWebApi = require("nativescript-plugin-firebase/app"); // mind the /app!

const fn = firebaseWebApi.functions().httpsCallable("helloName");

// example of specifying the function's region
// defaults to `us-central1` if not specified
// const fn = firebaseWebApi.functions().httpsCallable("helloName", "us-central1");

fn("Nativescript-Plugin-Firebase!")
    .then((dataCue: any) => console.log("Callable Function Result: " + dataCue.message))
    .catch((errorMessage: string) => console.log("Callable Function Error: " + errorMessage));
```
</details>
