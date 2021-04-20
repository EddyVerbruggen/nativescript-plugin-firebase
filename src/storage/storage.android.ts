import { File } from "@nativescript/core";
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
    listAll: (): Promise<ListResult> => listAll({remoteFullPath: nativeReference.getPath(), bucket: listOptions.bucket})
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

export function uploadFile(arg: UploadFileOptions): Promise<UploadFileResult> {
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
          reject("Upload failed. " + exception);
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

      let metadata: com.google.firebase.storage.StorageMetadata = null;
      if (arg.metadata) {
        const metadataBuilder = new com.google.firebase.storage.StorageMetadata.Builder();
        if (arg.metadata.cacheControl) {
          metadataBuilder.setCacheControl(arg.metadata.cacheControl);
        }
        if (arg.metadata.contentDisposition) {
          metadataBuilder.setContentDisposition(arg.metadata.contentDisposition);
        }
        if (arg.metadata.contentEncoding) {
          metadataBuilder.setContentEncoding(arg.metadata.contentEncoding);
        }
        if (arg.metadata.contentLanguage) {
          metadataBuilder.setContentLanguage(arg.metadata.contentLanguage);
        }
        if (arg.metadata.contentType) {
          metadataBuilder.setContentType(arg.metadata.contentType);
        }
        if (arg.metadata.customMetadata) {
          for (let p in arg.metadata.customMetadata) {
            metadataBuilder.setCustomMetadata(p, arg.metadata.customMetadata[p]);
          }
        }
        metadata = metadataBuilder.build();
      }

      if (arg.localFile) {
        if (typeof (arg.localFile) !== "object") {
          reject("localFile argument must be a File object; use file-system module to create one");
          return;
        }

        // using 'putFile' (not 'putBytes') so Firebase can infer the mimetype
        const localFileUrl = android.net.Uri.fromFile(new java.io.File(arg.localFile.path));
        storageReference.putFile(localFileUrl, metadata)
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
        storageReference.putFile(localFileUrl, metadata)
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

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: downloadTaskSnapshot => resolve()
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
        onFailure: exception => reject("Download failed. " + exception)
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

export function getDownloadUrl(arg: GetDownloadUrlOptions): Promise<string> {
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

      const onSuccessListener = new gmsTasks.OnSuccessListener({
        onSuccess: () => {
          resolve();
        }
      });

      const onFailureListener = new gmsTasks.OnFailureListener({
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

export function listAll(listOptions: ListOptions): Promise<ListResult> {
  return new Promise<ListResult>((resolve, reject) => {
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
          reject(exception.getCause() ? exception.getCause().getMessage() : exception.getMessage());
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