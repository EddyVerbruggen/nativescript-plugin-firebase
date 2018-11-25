import { File } from "tns-core-modules/file-system";
import { firebase } from "../firebase-common";
import {
  DeleteFileOptions,
  DownloadFileOptions,
  GetDownloadUrlOptions,
  UploadFileOptions,
  UploadFileResult
} from "./storage";

declare const android, com: any;

function getStorageRef(reject, arg) {
  if (typeof(com.google.firebase.storage) === "undefined") {
    reject("Uncomment firebase-storage in the plugin's include.gradle first");
    return;
  }

  if (!arg.remoteFullPath) {
    reject("remoteFullPath is mandatory");
    return;
  }

  if (arg.bucket) {
    return com.google.firebase.storage.FirebaseStorage.getInstance().getReferenceFromUrl(arg.bucket);
  } else if (firebase.storageBucket) {
    return firebase.storageBucket;
  } else {
    return com.google.firebase.storage.FirebaseStorage.getInstance().getReference();
  }
}

export function uploadFile(arg: UploadFileOptions): Promise<UploadFileResult> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: uploadTaskSnapshot => {
          const metadata = uploadTaskSnapshot.getMetadata();
          resolve({
            name: metadata.getName(),
            contentType: metadata.getContentType(),
            created: new Date(metadata.getCreationTimeMillis()),
            updated: new Date(metadata.getUpdatedTimeMillis()),
            bucket: metadata.getBucket(),
            size: metadata.getSizeBytes(),
            // url: metadata.getDownloadUrl().toString()
          });
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject("Upload failed. " + exception);
        }
      });

      const onProgressListener = new com.google.firebase.storage.OnProgressListener({
        onProgress: snapshot => {
          if (typeof(arg.onProgress) === "function") {
            const fractionCompleted = snapshot.getBytesTransferred() / snapshot.getTotalByteCount();
            arg.onProgress({
              fractionCompleted: fractionCompleted,
              percentageCompleted: Math.round(fractionCompleted * 100)
            });
          }
        }
      });

      if (arg.localFile) {
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        // using 'putFile' (not 'putBytes') so Firebase can infer the mimetype
        const localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFile.path));
        storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);

        /*
        var error;
        var contents = arg.localFile.readSync(e => { error = e; });

        if (error) {
          reject("Error reading file " + arg.localFile + ": " + error);
          return;
        }

        var uploadDataTask = storageReference.putBytes(contents)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);
        */

      } else if (arg.localFullPath) {

        if (!File.exists(arg.localFullPath)) {
          reject("File does not exist: " + arg.localFullPath);
          return;
        }

        const localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFullPath));
        storageReference.putFile(localFileUrl)
            .addOnFailureListener(onFailureListener)
            .addOnSuccessListener(onSuccessListener)
            .addOnProgressListener(onProgressListener);

      } else {
        reject("One of localFile or localFullPath is required");
      }

    } catch (ex) {
      console.log("Error in firebase.uploadFile: " + ex);
      reject(ex);
    }
  });
}

export function downloadFile(arg: DownloadFileOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: downloadTaskSnapshot => resolve()
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => reject("Download failed. " + exception)
      });

      let localFilePath;

      if (arg.localFile) {
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }
        localFilePath = arg.localFile.path;

      } else if (arg.localFullPath) {
        localFilePath = arg.localFullPath;

      } else {
        reject("One of localFile or localFullPath is required");
        return;
      }

      const file = new java.io.File(localFilePath);

      storageReference.getFile(file)
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.downloadFile: " + ex);
      reject(ex);
    }
  });
}

export function getDownloadUrl(arg: GetDownloadUrlOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: uri => {
          resolve(uri.toString());
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject(exception.getMessage());
        }
      });

      storageReference.getDownloadUrl()
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.getDownloadUrl: " + ex);
      reject(ex);
    }
  });
}

export function deleteFile(arg: DeleteFileOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new com.google.android.gms.tasks.OnSuccessListener({
        onSuccess: () => {
          resolve();
        }
      });

      const onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
        onFailure: exception => {
          reject(exception.getMessage());
        }
      });

      storageReference.delete()
          .addOnSuccessListener(onSuccessListener)
          .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.deleteFile: " + ex);
      reject(ex);
    }
  });
}
