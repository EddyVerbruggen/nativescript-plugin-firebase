import { File } from "tns-core-modules/file-system"
import * as firebaseStorage from "../../storage/storage";
import { ListResult, UploadFileResult } from "../../storage/storage";

export module storage {

  export interface UploadTaskSnapshot {
    downloadURL: string | null;
    totalBytes: number;
  }

  export class Reference {

    private path: string;

    parent: Reference | null; // TODO set this every time we navigate..
    root: Reference;
    fullPath = this.path;

    constructor(path?: string) {
      this.path = path;
      if (path && path.length > 0) {
        this.root = new Reference();
      } else {
        this.root = this;
      }
    }

    child(path: string): storage.Reference {
      // TODO also set this.parent
      return new Reference(this.path ? `${this.path}/${path}` : path);
    }

    delete(): Promise<void> {
      return firebaseStorage.deleteFile({
        remoteFullPath: this.path
      });
    }

    getDownloadURL(): Promise<string> {
      return firebaseStorage.getDownloadUrl({
        remoteFullPath: this.path
      });
    }

    listAll(): Promise<ListResult> {
      return firebaseStorage.listAll({
        remoteFullPath: this.path
      });
    }

    public put(data: File | string /* path */, metadata?: any /* ignored */): Promise<UploadTaskSnapshot> {
      return new Promise((resolve, reject) => {
        firebaseStorage.uploadFile({
          localFile: data instanceof File ? data : undefined,
          localFullPath: !(data instanceof File) ? data : undefined,
          remoteFullPath: this.path,
          onProgress: progress => console.log(`Upload progress: ${progress.percentageCompleted}% completed`)
        }).then((result: UploadFileResult) => {
          this.getDownloadURL()
              .then(url => {
                resolve({
                  downloadURL: url,
                  totalBytes: result.size
                });
              })
        }).catch(err => reject(err));
      });
    }

    // Note that this is not part of the web API, but prolly super convenient ;)
    public download(downloadToPath: string): Promise<any> {
      return firebaseStorage.downloadFile({
        localFullPath: downloadToPath,
        remoteFullPath: this.path
      });
    }
  }

  export class Storage {
    public ref(/*path: string*/): Reference {
      return new Reference();
    }
  }
}
