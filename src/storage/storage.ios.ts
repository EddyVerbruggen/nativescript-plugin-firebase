import { firebase } from "../firebase-common";
import {
  DeleteFileOptions,
  DownloadFileOptions,
  GetDownloadUrlOptions,
  UploadFileOptions,
  UploadFileResult
} from "./storage";

function getStorageRef(reject, arg): FIRStorageReference {
  if (typeof(FIRStorage) === "undefined") {
    reject("Uncomment Storage in the plugin's Podfile first");
    return undefined;
  }

  if (!arg.remoteFullPath) {
    reject("remoteFullPath is mandatory");
    return undefined;
  }

  if (arg.bucket) {
    return FIRStorage.storage().referenceForURL(arg.bucket);
  } else if (firebase.storageBucket) {
    return firebase.storageBucket;
  } else {
    return FIRStorage.storage().reference();
  }
}

export function uploadFile(arg: UploadFileOptions): Promise<UploadFileResult> {
  return new Promise((resolve, reject) => {
    try {

      const onCompletion = (metadata: FIRStorageMetadata, error: NSError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            name: metadata.name,
            // url: metadata.downloadURL() ? metadata.downloadURL().absoluteString : null,
            contentType: metadata.contentType,
            created: metadata.timeCreated,
            updated: metadata.updated,
            bucket: metadata.bucket,
            size: metadata.size
          });
        }
      };

      const storageRef: FIRStorageReference = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const fIRStorageReference = storageRef.child(arg.remoteFullPath);
      let fIRStorageUploadTask = null;

      if (arg.localFile) {
        if (typeof(arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        // using 'putFile' (not 'putData') so Firebase can infer the mime-type
        fIRStorageUploadTask = fIRStorageReference.putFileMetadataCompletion(NSURL.fileURLWithPath(arg.localFile.path), null, onCompletion);

      } else if (arg.localFullPath) {
        fIRStorageUploadTask = fIRStorageReference.putFileMetadataCompletion(NSURL.fileURLWithPath(arg.localFullPath), null, onCompletion);

      } else {
        reject("One of localFile or localFullPath is required");
        return;
      }

      if (fIRStorageUploadTask !== null) {
        // Add a progress observer to an upload task
        fIRStorageUploadTask.observeStatusHandler(FIRStorageTaskStatus.Progress, snapshot => {
          if (!snapshot.error && typeof(arg.onProgress) === "function") {
            arg.onProgress({
              fractionCompleted: snapshot.progress.fractionCompleted,
              percentageCompleted: Math.round(snapshot.progress.fractionCompleted * 100)
            });
          }
        });
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

      const onCompletion = (url, error) => {
        console.log(">>> download complete, error: " + error);
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(url.absoluteString);
        }
      };

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const fIRStorageReference = storageRef.child(arg.remoteFullPath);

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

      // Create local filesystem URL
      const localFileUrl = NSURL.fileURLWithPath(localFilePath);

      fIRStorageReference.writeToFileCompletion(localFileUrl, onCompletion);
    } catch (ex) {
      console.log("Error in firebase.downloadFile: " + ex);
      reject(ex);
    }
  });
}

export function getDownloadUrl(arg: GetDownloadUrlOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const onCompletion = (url, error) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve(url.absoluteString);
        }
      };

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const fIRStorageReference = storageRef.child(arg.remoteFullPath);

      fIRStorageReference.downloadURLWithCompletion(onCompletion);
    } catch (ex) {
      console.log("Error in firebase.getDownloadUrl: " + ex);
      reject(ex);
    }
  });
}

export function deleteFile(arg: DeleteFileOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    try {

      const onCompletion = error => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const fIRStorageFileRef = storageRef.child(arg.remoteFullPath);

      fIRStorageFileRef.deleteWithCompletion(onCompletion);

    } catch (ex) {
      console.log("Error in firebase.deleteFile: " + ex);
      reject(ex);
    }
  });
}
