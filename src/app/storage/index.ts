import * as firebase from "../../firebase";
import { UploadFileResult } from "../../firebase";
import { File } from "tns-core-modules/file-system"

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
      return firebase.deleteFile({
        remoteFullPath: this.path
      });
    }

    getDownloadURL(): Promise<string> {
      return firebase.getDownloadUrl({
        remoteFullPath: this.path
      });
    }

    public put(data: File | string /* path */, metadata?: any /* ignored */): Promise<UploadTaskSnapshot> {
      return new Promise((resolve, reject) => {
        firebase.uploadFile({
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
      return firebase.downloadFile({
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
