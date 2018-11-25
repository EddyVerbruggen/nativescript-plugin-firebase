/**
 * The allowed values for AD_SIZE.
 */
export enum AD_SIZE {
  SMART_BANNER,
  LARGE_BANNER,
  BANNER,
  MEDIUM_RECTANGLE,
  FULL_BANNER,
  LEADERBOARD,
  SKYSCRAPER,
  FLUID
}

/**
 * The possible error codes (see https://developers.google.com/android/reference/com/google/android/gms/ads/AdRequest#ERROR_CODE_INTERNAL_ERROR).
 * TODO seems like we're not using these at the moment.
 */
export enum ERROR_CODES {
  ERROR_CODE_INTERNAL_ERROR,
  ERROR_CODE_INVALID_REQUEST,
  ERROR_CODE_NETWORK_ERROR,
  ERROR_CODE_NO_FILL
}

export interface BannerOptions {
  /**
   * The layout of the banner.
   * Default AD_SIZE.SMART_BANNER
   */
  size?: AD_SIZE;

  /**
   * When false (default) you'll get real banners.
   */
  testing?: boolean;

  /**
   * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
   */
  androidBannerId?: string;

  /**
   * Something like "ca-app-pub-XXXXXX/YYYYYY".
   */
  iosBannerId?: string;

  /**
   * If testing is true, the simulator is allowed to receive test banners.
   * Android automatically add the connceted device as test device, but iOS does not.
   * If you also want to test on real devices, add it here like this:
   *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
   */
  iosTestDeviceIds?: string[];

  /**
   * The number of pixels from the top/bottom of the view.
   * The plugin corrects for display density, so don't worry about that.
   *
   * If both are set, top wins.
   */
  margins?: {
    /**
     * Default: -1 (ignored).
     */
    top?: number;

    /**
     * Default: -1 (ignored).
     */
    bottom?: number;
  };

  /**
   * Specify keywords for ad targeting
   */
  keywords?: string[];
}

export interface InterstitialOptions {
  /**
   * When false (default) you'll get real banners.
   */
  testing?: boolean;

  /**
   * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
   */
  androidInterstitialId?: string;

  /**
   * Something like "ca-app-pub-XXXXXX/YYYYYY".
   */
  iosInterstitialId?: string;

  /**
   * If testing is true, the simulator is allowed to receive test banners.
   * Android automatically add the connceted device as test device, but iOS does not.
   * If you also want to test on real devices, add it here like this:
   *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
   */
  iosTestDeviceIds?: string[];

  /**
   * Invoked when the user closes the interstitial.
   */
  onAdClosed?: () => void;
}

export declare function showBanner(options: BannerOptions): Promise<any>;

export declare function hideBanner(): Promise<any>;

/**
 * To show a fullscreen banner you can use this function.
 * Note that Interstitial banners need to be loaded before they can be shown,
 * so use this function, and when the promise resolves you can call 'showInterstitial'.
 * If you don't want to use 2 steps, use showInterstitial (with the same arguments) instead,
 * but there will be a (preloading) delay which is not recommended.
 */
export declare function preloadInterstitial(options: InterstitialOptions): Promise<any>;

/**
 * There's two ways how you can use this:
 * 1) RECOMMENDED: without arguments, and after the Promise of 'preloadInterstitial' resolves. This will show the interstitial immediately.
 * 2) DEPRECATED: with arguments (same as 'preloadInterstitial'). This will preload and _then_ show the interstitial, so a delay will be noticable by the user, which is against Google's policies.
 */
export declare function showInterstitial(options?: InterstitialOptions): Promise<any>;
