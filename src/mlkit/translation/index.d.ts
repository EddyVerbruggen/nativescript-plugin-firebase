export interface MLKitTranslationModelDownloadOptions {
  from: string;
  to: string;
}

export interface MLKitTranslationOptions extends MLKitTranslationModelDownloadOptions {
  text: string;
}

export declare function ensureTranslationModelDownloaded(options: MLKitTranslationModelDownloadOptions): Promise<void>;

export declare function translateText(options: MLKitTranslationOptions): Promise<Array<string>>;
