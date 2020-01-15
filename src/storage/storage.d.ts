export interface ProgressStatus {
  fractionCompleted: Number;
  percentageCompleted: Number;
}

interface SettableMetadata {
  cacheControl?: string | null;
  contentDisposition?: string | null;
  contentEncoding?: string | null;
  contentLanguage?: string | null;
  contentType?: string | null;
  customMetadata?: { [key: string]: string; };
}

interface UploadMetadata extends SettableMetadata {
  // md5Hash?: string | null;
}

/**
 * Use either the 'localFile' or 'localFullPath' param to upload a file.
 */
export interface UploadFileOptions {
  /**
   * If you didn't pass 'storageBucket' during init() you will need to do it now.
   * Takes the form of 'gs://n-plugin-test.appspot.com' and can be found in the Firebase console.
   */
  bucket?: string;
  /**
   * The full path of the file in your Firebase storage (folders will be created)
   * Example: 'uploads/images/telerik-logo-uploaded.png'
   */
  remoteFullPath: string;
  /**
   * Option 1: a file-system module File object
   * Example:
   *   var fs = require("file-system");
   *   fs.File.fromPath("path-to-the-file")
   */
  localFile?: any;
  /**
   * Option 2: a full file path (ignored if 'localFile' is set)
   */
  localFullPath?: string;

  /**
   * You can get updates during upload by passing a function, example:
   *
   * onProgress: function(status) {
   *   console.log("Uploaded fraction: " + status.fractionCompleted);
   *   console.log("Percentage complete: " + status.percentageCompleted);
   * }
   */
  onProgress?: (data: ProgressStatus) => void;

  /**
   *
   */
  metadata?: UploadMetadata;
}

export interface UploadFileResult {
  name: string;
  contentType: string;
  created: Date;
  updated: Date;
  bucket: string;
  size: number;
}

export interface DownloadFileOptions {
  /**
   * If you didn't pass 'storageBucket' during init() you will need to do it now.
   * Takes the form of 'gs://n-plugin-test.appspot.com' and can be found in the Firebase console.
   */
  bucket?: string;
  /**
   * The full path of an existing file in your Firebase storage
   * Example: 'uploads/images/telerik-logo-uploaded.png'
   */
  remoteFullPath: string;
  /**
   * Option 1: a file-system module File object
   * Example:
   *   var fs = require("file-system");
   *   fs.File.fromPath("path-to-the-file")
   */
  localFile?: any;
  /**
   * Option 2: a full file path (ignored if 'localFile' is set)
   */
  localFullPath?: string;
}

export interface GetDownloadUrlOptions {
  /**
   * If you didn't pass 'storageBucket' during init() you will need to do it now.
   * Takes the form of 'gs://n-plugin-test.appspot.com' and can be found in the Firebase console.
   */
  bucket?: string;
  /**
   * The full path of an existing file in your Firebase storage
   * Example: 'uploads/images/telerik-logo-uploaded.png'
   */
  remoteFullPath: string;
}

export interface DeleteFileOptions {
  /**
   * If you didn't pass 'storageBucket' during init() you will need to do it now.
   * Takes the form of 'gs://n-plugin-test.appspot.com' and can be found in the Firebase console.
   */
  bucket?: string;
  /**
   * The full path of an existing file in your Firebase storage
   * Example: 'uploads/images/telerik-logo-uploaded.png'
   */
  remoteFullPath: string;
}

// TODO add properties/methods
export interface Reference {
  ios?: any;
  android?: any;

  bucket: string;
  name: string;
  fullPath: string;

  listAll: () => Promise<ListResult>;
}

export interface ListOptions {
  /**
   * If you didn't pass 'storageBucket' during init() you will need to do it now.
   * Takes the form of 'gs://n-plugin-test.appspot.com' and can be found in the Firebase console.
   */
  bucket?: string;
  /**
   * The path of an existing folder in Firebase storage.
   * Example: 'files/2019'
   */
  remoteFullPath: string;
}

export interface ListResult {
  ios?: any;
  android?: any;

  prefixes: Array<Reference>;
  items: Array<Reference>;
  nextPageToken?: string;
}

export declare function uploadFile(options: UploadFileOptions): Promise<UploadFileResult>;

export declare function downloadFile(options: DownloadFileOptions): Promise<string>;

export declare function getDownloadUrl(options: GetDownloadUrlOptions): Promise<string>;

export declare function deleteFile(options: DeleteFileOptions): Promise<void>;

export declare function listAll(options: ListOptions): Promise<ListResult>;
