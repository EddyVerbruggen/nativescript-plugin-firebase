export interface ProgressStatus {
  fractionCompleted: Number;
  percentageCompleted: Number;
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
  onProgress: (data: ProgressStatus) => void;
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

export declare function uploadFile(options: UploadFileOptions): Promise<UploadFileResult>;

export declare function downloadFile(options: DownloadFileOptions): Promise<string>;

export declare function getDownloadUrl(options: GetDownloadUrlOptions): Promise<string>;

export declare function deleteFile(options: DeleteFileOptions): Promise<void>;
