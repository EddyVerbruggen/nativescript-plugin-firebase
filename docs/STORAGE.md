<img src="images/firebase-logo.png" width="116px" height="32px" alt="Firebase"/>

## Enabling Storage
Since plugin version 3.4.0 you can use Firebase _Storage_ features.

_Storage_ lets you upload and download files to/from Google Cloud Storage which is connected to your Firebase instance.

To enable support for Remote Config you need to manually adjust
[Podfile](../platforms/ios/Podfile) and [include.gradle](../platforms/android/include.gradle).

Just uncomment the relevant lines (one for each platform) to add the SDK's to your app.

### Setting the storage bucket
You need to tell Firebase what your storage bucket is. You can retrieve it
from the Firebase console by pressing 'Storage' in the menu.

You can either pass it to the `init()` function as shown below,
or pass it as a property any time you're using a storage feature.
In theory the former is a little more efficient because it's cached by the plugin.

```js
  firebase.init({
    storageBucket: 'gs://n-plugin-test.appspot.com'
    // any other options
  });
```

## Functions

### uploadFile
You can either pass in a full local path to a file, or (as a convenience) use the `file-system` module that comes shipped with {N} as standard.

```js
  // init the file-system module
  var fs = require("file-system");

  // grab a reference to the app folder
  var appPath = fs.knownFolders.currentApp().path;

  // determine the path to a file in the app/res folder
  var logoPath = appPath + "/res/telerik-logo.png";

  // now upload the file with either of the options below:
  firebase.uploadFile({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it (find it in the Firebase console)
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of the file in your Firebase storage (folders will be created)
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
    // option 1: a file-system module File object
    localFile: fs.File.fromPath(logoPath),
    // option 2: a full file path (ignored if 'localFile' is set)
    localFullPath: logoPath
  }).then(
      function (uploadedFile) 
        console.log("File uploaded: " + JSON.stringify(uploadedFile));
      },
      function (error) {
        console.log("File upload error: " + error);
      }
  );
```

### downloadFile
As with `uploadFile` you can either pass in a full local path to a file, or (as a convenience) use the `file-system` module that comes shipped with {N} as standard.

In this example we'll download the previously uploaded file to a certain path on the local filesystem.

```js
  // init the file-system module
  var fs = require("file-system");

  // let's first determine where we'll create the file using the 'file-system' module
  var documents = fs.knownFolders.documents();
  var logoPath = documents.path + "/telerik-logo-downloaded.png";

  // this will create or overwrite a local file in the app's documents folder
  var localLogoFile = documents.getFile("telerik-logo-downloaded.png");

  // now download the file with either of the options below:
  firebase.downloadFile({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
    // option 1: a file-system module File object
    localFile: fs.File.fromPath(logoPath),
    // option 2: a full file path (ignored if 'localFile' is set)
    localFullPath: logoPath
  }).then(
      function (uploadedFile) 
        console.log("File downloaded to the requested location");
      },
      function (error) {
        console.log("File download error: " + error);
      }
  );
```

### getDownloadUrl
If you just want to know the remote URL of a file in remote storage so you can either share it or download the file by any other means than `downloadFile` then use this method.

In this example we'll determine the remote URL of the previously uploaded file.

```js
  firebase.getDownloadUrl({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
  }).then(
      function (url) 
        console.log("Remote URL: " + url);
      },
      function (error) {
        console.log("Error: " + error);
      }
  );
```

### deleteFile
You can pass in remote file path to delete it.

```js
  firebase.deleteFile({
    // optional, can also be passed during init() as 'storageBucket' param so we can cache it
    bucket: 'gs://n-plugin-test.appspot.com',
    // the full path of an existing file in your Firebase storage
    remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
  }).then(
      function () 
        console.log("File deleted.");
      },
      function (error) {
        console.log("File deletion Error: " + error);
      }
  );
```
