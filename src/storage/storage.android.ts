import { File } from "tns-core-modules/file-system";
import { firebase } from "../firebase-common";
import { DeleteFileOptions, DownloadFileOptions, GetDownloadUrlOptions, ListOptions, Reference, UploadFileOptions, UploadFileResult } from "./storage";
import { ListResult as ListResultBase } from "./storage-common";

const gmsTasks = com.google.android.gms ? (<any>com.google.android.gms).tasks : undefined;

function getReference(nativeReference: com.google.firebase.storage.StorageReference, listOptions: ListOptions): Reference {
  return {
    android: nativeReference,
    bucket: nativeReference.getBucket(),
    name: nativeReference.getName(),
    fullPath: nativeReference.getPath(),
    listAll: (): Promise<ListResult> => listAll({ remoteFullPath: nativeReference.getPath(), bucket: listOptions.bucket })
  }
}

function getReferences(nativeReferences: java.util.List<com.google.firebase.storage.StorageReference>, listOptions: ListOptions): Array<Reference> {
  const references: Array<Reference> = [];
  for (let i = 0; i < nativeReferences.size(); i++) {
    const ref: com.google.firebase.storage.StorageReference = nativeReferences.get(i);
    references.push(getReference(ref, listOptions));
  }
  return references;
}

class ListResult extends ListResultBase {
  android: com.google.firebase.storage.ListResult;

  constructor(private listResult: com.google.firebase.storage.ListResult, private listOptions: ListOptions) {
    super(getReferences(listResult.getItems(), listOptions), getReferences(listResult.getPrefixes(), listOptions), listResult.getPageToken());
    this.android = listResult;
    // don't expose these
    delete this.listResult;
    delete this.listOptions;
  }
}

function getStorageRef(reject, arg) {
  if (typeof (com.google.firebase.storage) === "undefined") {
    reject("Uncomment firebase-storage in the plugin's include.gradle first");
    return;
  }

  if (!arg.remoteFullPath) {
    reject("remoteFullPath is mandatory");
    return;
  }

  if (arg.bucket) {
    return com.google.firebase.storage.FirebaseStorage.getInstance(arg.bucket).getReference();
  } else if (firebase.storageBucket) {
    return firebase.storageBucket;
  } else {
    return com.google.firebase.storage.FirebaseStorage.getInstance().getReference();
  }
}

export function uploadFile(arg: UploadFileOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new gmsTasks.OnSuccessListener({
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

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => {
          reject(exception);
        }
      });

      const onProgressListener = new com.google.firebase.storage.OnProgressListener({
        onProgress: (snapshot: any) => {
          if (typeof (arg.onProgress) === "function") {
            const fractionCompleted = snapshot.getBytesTransferred() / snapshot.getTotalByteCount();
            arg.onProgress({
              fractionCompleted: fractionCompleted,
              percentageCompleted: Math.round(fractionCompleted * 100)
            });
          }
        }
      });

      if (arg.localFile) {
        if (typeof (arg.localFile) !== "object") {
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

export function downloadFile(arg: DownloadFileOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: downloadTaskSnapshot => resolve()
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => reject(exception)
      });

      let localFilePath;

      if (arg.localFile) {
        if (typeof (arg.localFile) !== "object") {
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

export function getDownloadUrl(arg: GetDownloadUrlOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: uri => {
          resolve(uri.toString());
        }
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => {
          reject(exception);
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

export function deleteFile(arg: DeleteFileOptions): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    try {

      const storageRef = getStorageRef(reject, arg);

      if (!storageRef) {
        return;
      }

      const storageReference = storageRef.child(arg.remoteFullPath);

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: () => {
          resolve();
        }
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => {
          reject(exception);
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

export function listAll(listOptions: ListOptions): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    try {
      const storageRef = getStorageRef(reject, listOptions);

      if (!storageRef) {
        return;
      }

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: result => resolve(new ListResult(result, listOptions))
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => {
          reject(exception);
        }
      });

      const storageReference = storageRef.child(listOptions.remoteFullPath);

      storageReference.listAll()
        .addOnSuccessListener(onSuccessListener)
        .addOnFailureListener(onFailureListener);

    } catch (ex) {
      console.log("Error in firebase.listAll: " + ex);
      reject(ex);
    }
  });
}