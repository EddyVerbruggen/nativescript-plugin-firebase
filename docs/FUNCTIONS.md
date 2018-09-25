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


## Functions
You can use either the Web API syntax (easy for interoperability with a web version of your app), or our custom native syntax.
Use whichever syntax you like most - the underlying implementation is the same.

### httpsCallable
This example uses the Cloud Function as [implemented here](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/ff95c77c7b09acf66654f53c52e8ae0c8d7b1c78/demo/firebasefunctions/functions/src/index.ts#L15-L19).

<details>
 <summary>Native API</summary>

```typescript
import * as firebase from "nativescript-plugin-firebase";

const fn = firebase.functions.httpsCallable("helloName");

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

fn("Nativescript-Plugin-Firebase!")
    .then((dataCue: any) => console.log("Callable Function Result: " + dataCue.message))
    .catch((errorMessage: string) => console.log("Callable Function Error: " + errorMessage));
```
</details>

### downloadFile
As with `uploadFile` you can either pass in a full local path to a file, or (as a convenience) use the `file-system` module that comes shipped with {N} as standard.

In this example we'll download the previously uploaded file to a certain path on the local filesystem.

<details>
 <summary>Native API</summary>

```js
  // init the file-system module
  var fs = require("tns-core-modules/file-system");

  // let's first determine where we'll create the file using the 'file-system' module
  var documents = fs.knownFolders.documents();
  var logoPath = documents.path + "/telerik-logo-downloaded.png";

  // this will create or overwrite a local file in the app's documents folder
  var localLogoFile = documents.getFile("telerik-logo-downloaded.png");

  // now download the file with either of the options below:
  firebase.storage.downloadFile({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
    // option 1: a file-system module File object
    localFile: fs.File.fromPath(logoPath),
    // option 2: a full file path (ignored if 'localFile' is set)
    localFullPath: logoPath
  }).then(
      function (uploadedFile) {
        console.log("File downloaded to the requested location");
      },
      function (error) {
        console.log("File download error: " + error);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

#### TypeScript

```typescript
  import * as fs from "tns-core-modules/file-system";

  const storageRef = firebaseWebApi.storage().ref();
  const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

  // let's first determine where we'll create the file using the 'file-system' module
  const documents = fs.knownFolders.documents();
  const logoPath = documents.path + "/telerik-logo-downloaded.png";

  childRef.download(logoPath)
      .then(() => console.log("The file has been downloaded"))
      .catch(error => console.log("Download error: " + error));
```
</details>

### getDownloadUrl
If you just want to know the remote URL of a file in remote storage so you can either share it or download the file by any other means than `downloadFile` then use this method.

In this example we'll determine the remote URL of the previously uploaded file.

<details>
 <summary>Native API</summary>

```js
  firebase.storage.getDownloadUrl({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
  }).then(
      function (url) {
        console.log("Remote URL: " + url);
      },
      function (error) {
        console.log("Error: " + error);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

#### TypeScript

```typescript
  const storageRef = firebaseWebApi.storage().ref();
  const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

  childRef.getDownloadURL()
      .then(theUrl => console.log("Download url: " + theUrl))
      .catch(error => console.log("Download error: " + error));
```
</details>

### deleteFile
You can pass in remote file path to delete it.

<details>
 <summary>Native API</summary>

```js
  firebase.storage.deleteFile({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
  }).then(
      function () {
        console.log("File deleted.");
      },
      function (error) {
        console.log("File deletion Error: " + error);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

#### TypeScript

```typescript
  firebaseWebApi.storage().ref()
      .child("uploads/images/telerik-logo-uploaded.png")
      .delete()
      .then(() => console.log("Deleted file"))
      .catch(error => console.log("Error deleting file: " + error));
```
</details>
