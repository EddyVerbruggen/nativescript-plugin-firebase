<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/storage.png" height="85px" alt="Storage"/>

_Storage_ lets you upload and download files to/from Google Cloud Storage which is connected to your Firebase instance.

> NOTE: since plugin version 6.2.0 you have to use `firebase.storage.xxx` instead of `firebase.xxx`, because I've extracted storage-related functions into a separate module.

## Enabling Storage
During plugin installation you'll be asked whether or not you use "Firebase Storage".

In case you're upgrading and you have the `firebase.nativescript.json` file in your project root, edit it and add: `"storage": true`.
Then run `rm -rf platforms && rm -rf node_modules && npm i`.

### Setting the storage bucket (no longer required since plugin version 6.5.0)
If (in the odd situation) the storage bucket URL you want to use is different than the one in the downloaded config file,
you can tell Firebase what it should use instead.

In this case, you can either pass it to the `init()` function as shown below,
or pass it as a property any time you're using a storage feature.
In theory the former is a little more efficient because it's cached by the plugin.

> Should I use the *Native API* or the *Web API*? Whichever syntax you like most - the underlying implementation is the same.
 
<details>
 <summary>Native API</summary>

```js
  firebase.init({
    storageBucket: 'gs://n-plugin-test.appspot.com'
    // any other options
  });
```
</details>

<details>
 <summary>Web API</summary>

```js
  firebaseWebApi.initializeApp({
    storageBucket: 'gs://n-plugin-test.appspot.com'
  });
```
</details>

## Functions

### uploadFile
You can either pass in a full local path to a file, or (as a convenience) use the `file-system` module that comes shipped with {N} as standard.

<details>
 <summary>Native API</summary>

```js
  // init the file-system module
  var fs = require("tns-core-modules/file-system");

  // grab a reference to the app folder
  var appPath = fs.knownFolders.currentApp().path;

  // determine the path to a file in the app/res folder
  var logoPath = appPath + "/res/telerik-logo.png";

  // now upload the file with either of the options below:
  firebase.storage.uploadFile({
    // optional, can be omitted since 6.5.0, and also be passed during init() as 'storageBucket' param so we can cache it (find it in the Firebase console)
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of the file in your Firebase storage (folders will be created)
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
    // option 1: a file-system module File object
    localFile: fs.File.fromPath(logoPath),
    // option 2: a full file path (ignored if 'localFile' is set)
    localFullPath: logoPath,
    // get notified of file upload progress
    onProgress: function(status) {
      console.log("Uploaded fraction: " + status.fractionCompleted);
      console.log("Percentage complete: " + status.percentageCompleted);
    }
  }).then(
      function (uploadedFile) {
        console.log("File uploaded: " + JSON.stringify(uploadedFile));
      },
      function (error) {
        console.log("File upload error: " + error);
      }
  );
```
</details>

<details>
 <summary>Web API</summary>

#### TypeScript

```typescript
  import * as fs from "tns-core-modules/file-system";

  // let's first create a File object using the tns file module
  const appPath = fs.knownFolders.currentApp().path;
  const logoPath = appPath + "/images/telerik-logo.png";

  const storageRef = firebaseWebApi.storage().ref();
  const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

  childRef.put(fs.File.fromPath(logoPath)).then(
      uploadedFile => console.log("Uploaded! " + JSON.stringify(uploadedFile)),
      error => console.log("firebase.doWebUploadFile error: " + error)
  );
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
