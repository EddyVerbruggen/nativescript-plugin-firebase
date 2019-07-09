import { device } from "tns-core-modules/platform/platform";
import { DeviceType } from "tns-core-modules/ui/enums/enums";
import { firebase } from "../firebase-common";
import { BannerOptions, InterstitialOptions, PreloadRewardedVideoAdOptions, ShowRewardedVideoAdOptions } from "./admob";
import { AD_SIZE, BANNER_DEFAULTS, rewardedVideoCallbacks } from "./admob-common";

export { AD_SIZE };

// helps global app behavior (ie: orientation handling)
let _bannerOptions = undefined;

// these are needed in multiple functions
let _rewardBasedVideoAdDelegate = undefined;

export function showBanner(arg: BannerOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (GADRequest) === "undefined") {
        reject("Uncomment AdMob in the plugin's Podfile first");
        return;
      }

      if (firebase.admob.adView !== null && firebase.admob.adView !== undefined) {
        firebase.admob.adView.removeFromSuperview();
        firebase.admob.adView = null;
      }

      BANNER_DEFAULTS.view = UIApplication.sharedApplication.keyWindow.rootViewController.view;
      const settings = firebase.merge(arg, BANNER_DEFAULTS);
      _bannerOptions = settings;
      const view = settings.view;
      const bannerType = _getBannerType(settings.size);

      const adWidth = bannerType.size.width === 0 ? view.frame.size.width : bannerType.size.width;
      const adHeight = bannerType.size.smartHeight ? bannerType.size.smartHeight : bannerType.size.height;

      const originX = (view.frame.size.width - adWidth) / 2;
      const originY = settings.margins.top > -1 ? settings.margins.top : (settings.margins.bottom > -1 ? view.frame.size.height - adHeight - settings.margins.bottom : 0.0);
      const origin = CGPointMake(originX, originY);
      firebase.admob.adView = GADBannerView.alloc().initWithAdSizeOrigin(bannerType, origin);

      firebase.admob.adView.adUnitID = settings.iosBannerId;

      const adRequest = GADRequest.request();

      if (settings.testing) {
        let testDevices: any = [];
        try {
          testDevices.push("Simulator");
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      if (settings.keywords !== undefined) {
        adRequest.keywords = settings.keywords;
      }

      firebase.admob.adView.rootViewController = UIApplication.sharedApplication.keyWindow.rootViewController;
      // var statusbarFrame = UIApplication.sharedApplication.statusBarFrame;

      firebase.admob.adView.loadRequest(adRequest);

      // TODO consider listening to delegate features like 'ad loaded' (Android resolves when the banner is actually showing)
      // adView.delegate = self;

      view.addSubview(firebase.admob.adView);

      resolve();
    } catch (ex) {
      console.log("Error in firebase.admob.showBanner: " + ex);
      reject(ex);
    }
  });
}

export function preloadInterstitial(arg: InterstitialOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (GADRequest) === "undefined") {
        reject("Uncomment AdMob in the plugin's Podfile first");
        return;
      }

      const settings = firebase.merge(arg, BANNER_DEFAULTS);
      firebase.admob.interstitialView = GADInterstitial.alloc().initWithAdUnitID(settings.iosInterstitialId);

      // with interstitials you MUST wait for the ad to load before showing it, so requiring this delegate
      let delegate = GADInterstitialDelegateImpl.new().initWithCallback(
          (ad: GADInterstitial, error: GADRequestError) => {
            if (error) {
              reject(error.localizedDescription);
            } else {
              resolve();
            }
          }, () => {
            arg.onAdClosed && arg.onAdClosed();
            CFRelease(delegate);
            delegate = undefined;
          });

      CFRetain(delegate);
      firebase.admob.interstitialView.delegate = delegate;

      const adRequest = GADRequest.request();

      if (settings.testing) {
        let testDevices: any = [];
        try {
          testDevices.push("Simulator");
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      firebase.admob.interstitialView.loadRequest(adRequest);
    } catch (ex) {
      console.log("Error in firebase.admob.preloadInterstitial: " + ex);
      reject(ex);
    }
  });
}

export function showInterstitial(arg?: InterstitialOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (GADRequest) === "undefined") {
        reject("Uncomment AdMob in the plugin's Podfile first");
        return;
      }

      // if no arg is passed, the interstitial has probably been preloaded
      if (!arg) {
        if (firebase.admob.interstitialView) {
          firebase.admob.interstitialView.presentFromRootViewController(UIApplication.sharedApplication.keyWindow.rootViewController);
          resolve();
        } else {
          reject("Please call 'preloadInterstitial' first");
        }
        return;
      }

      const settings = firebase.merge(arg, BANNER_DEFAULTS);
      firebase.admob.interstitialView = GADInterstitial.alloc().initWithAdUnitID(settings.iosInterstitialId);

      // with interstitials you MUST wait for the ad to load before showing it, so requiring this delegate
      let delegate = GADInterstitialDelegateImpl.new().initWithCallback((ad: GADInterstitial, error: GADRequestError) => {
        if (error) {
          reject(error.localizedDescription);
        } else {
          // now we can safely show it
          firebase.admob.interstitialView.presentFromRootViewController(UIApplication.sharedApplication.keyWindow.rootViewController);
          resolve();
        }
        CFRelease(delegate);
        delegate = undefined;
      });
      // we're leaving the app to switch to Google's OAuth screen, so making sure this is retained
      CFRetain(delegate);
      firebase.admob.interstitialView.delegate = delegate;

      const adRequest = GADRequest.request();

      if (settings.testing) {
        let testDevices: any = [];
        try {
          testDevices.push("Simulator");
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      firebase.admob.interstitialView.loadRequest(adRequest);
    } catch (ex) {
      console.log("Error in firebase.admob.showInterstitial: " + ex);
      reject(ex);
    }
  });
}

export function preloadRewardedVideoAd(arg: PreloadRewardedVideoAdOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (GADRequest) === "undefined") {
        reject("Enable AdMob first - see the plugin documentation");
        return;
      }

      const onLoaded = () => resolve();
      const onError = err => reject(err);
      _rewardBasedVideoAdDelegate = GADRewardBasedVideoAdDelegateImpl.new().initWithCallback(onLoaded, onError);
      CFRetain(_rewardBasedVideoAdDelegate);

      firebase.admob.rewardedAdVideoView = GADRewardBasedVideoAd.sharedInstance();
      firebase.admob.rewardedAdVideoView.delegate = _rewardBasedVideoAdDelegate;

      const settings = firebase.merge(arg, BANNER_DEFAULTS);
      const adRequest = GADRequest.request();

      if (settings.testing) {
        let testDevices: any = [];
        try {
          testDevices.push("Simulator");
        } catch (ignore) {
          // can happen on a real device
        }
        if (settings.iosTestDeviceIds) {
          testDevices = testDevices.concat(settings.iosTestDeviceIds);
        }
        adRequest.testDevices = testDevices;
      }

      firebase.admob.rewardedAdVideoView.loadRequestWithAdUnitID(adRequest, settings.iosAdPlacementId);
    } catch (ex) {
      console.log("Error in firebase.admob.preloadRewardedVideoAd: " + ex);
      reject(ex);
    }
  });
}

export function showRewardedVideoAd(arg?: ShowRewardedVideoAdOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof (GADRequest) === "undefined") {
        reject("Enable AdMob first - see the plugin documentation");
        return;
      }

      if (!firebase.admob.rewardedAdVideoView) {
        reject("Please call 'preloadRewardedVideoAd' first");
        return;
      }

      if (arg.onRewarded) {
        rewardedVideoCallbacks.onRewarded = arg.onRewarded;
      }

      if (arg.onLeftApplication) {
        rewardedVideoCallbacks.onLeftApplication = arg.onLeftApplication;
      }

      if (arg.onClosed) {
        rewardedVideoCallbacks.onClosed = arg.onClosed;
      }

      if (arg.onOpened) {
        rewardedVideoCallbacks.onOpened = arg.onOpened;
      }

      if (arg.onStarted) {
        rewardedVideoCallbacks.onStarted = arg.onStarted;
      }

      if (arg.onCompleted) {
        rewardedVideoCallbacks.onCompleted = arg.onCompleted;
      }

      firebase.admob.rewardedAdVideoView.presentFromRootViewController(UIApplication.sharedApplication.keyWindow.rootViewController);
      resolve();

    } catch (ex) {
      console.log("Error in firebase.admob.showRewardedVideoAd: " + ex);
      reject(ex);
    }
  });
}

export function hideBanner(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (firebase.admob.adView !== null) {
        // adView.delegate = null;
        firebase.admob.adView.removeFromSuperview();
        firebase.admob.adView = null;
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.admob.hideBanner: " + ex);
      reject(ex);
    }
  });
}

function _getBannerType(size): any {
  // see nativescript-admob's iOS sourcecode for why we're not using SDK-provided constants here
  if (size === AD_SIZE.BANNER) {
    // return kGADAdSizeBanner;
    return {"size": {"width": 320, "height": 50}, "flags": 0};
  } else if (size === AD_SIZE.LARGE_BANNER) {
    // return kGADAdSizeLargeBanner;
    return {"size": {"width": 320, "height": 100}, "flags": 0};
  } else if (size === AD_SIZE.MEDIUM_RECTANGLE) {
    // return kGADAdSizeMediumRectangle;
    return {"size": {"width": 300, "height": 250}, "flags": 0};
  } else if (size === AD_SIZE.FULL_BANNER) {
    // return kGADAdSizeFullBanner;
    return {"size": {"width": 468, "height": 60}, "flags": 0};
  } else if (size === AD_SIZE.LEADERBOARD) {
    // return kGADAdSizeLeaderboard;
    return {"size": {"width": 728, "height": 90}, "flags": 0};
  } else if (size === AD_SIZE.SKYSCRAPER) {
    // return kGADAdSizeSkyscraper;
    return {"size": {"width": 120, "height": 600}, "flags": 0};
  } else if (size === AD_SIZE.SMART_BANNER || size === AD_SIZE.FLUID) {
    const orientation = UIDevice.currentDevice.orientation;
    const isIPad = device.deviceType === DeviceType.Tablet;
    if (orientation === UIDeviceOrientation.Portrait || orientation === UIDeviceOrientation.PortraitUpsideDown) {
      // return kGADAdSizeSmartBannerPortrait;
      return {"size": {"width": 0, "height": 0, "smartHeight": isIPad ? 90 : 50}, "flags": 18};
    } else {
      // return kGADAdSizeSmartBannerLandscape;
      return {"size": {"width": 0, "height": 0, "smartHeight": isIPad ? 90 : 32}, "flags": 26};
    }
  } else {
    // return kGADAdSizeInvalid;
    return {"size": {"width": -1, "height": -1}, "flags": 0};
  }
}

class GADInterstitialDelegateImpl extends NSObject implements GADInterstitialDelegate {
  public static ObjCProtocols = [];
  onAdCloseCallback: () => void;

  static new(): GADInterstitialDelegateImpl {
    if (GADInterstitialDelegateImpl.ObjCProtocols.length === 0 && typeof (GADInterstitialDelegate) !== "undefined") {
      GADInterstitialDelegateImpl.ObjCProtocols.push(GADInterstitialDelegate);
    }
    return <GADInterstitialDelegateImpl>super.new();
  }

  private callback: (ad: GADInterstitial, error?: GADRequestError) => void;

  public initWithCallback(callback: (ad: GADInterstitial, error?: GADRequestError) => void, onAdCloseCallback: () => void = null): GADInterstitialDelegateImpl {
    this.callback = callback;
    this.onAdCloseCallback = onAdCloseCallback;
    return this;
  }

  public interstitialDidReceiveAd(ad: GADInterstitial): void {
    this.callback(ad);
  }

  public interstitialDidDismissScreen(ad: GADInterstitial): void {
    this.onAdCloseCallback();
  }

  public interstitialDidFailToReceiveAdWithError(ad: GADInterstitial, error: GADRequestError): void {
    this.callback(ad, error);
  }
}

class GADRewardBasedVideoAdDelegateImpl extends NSObject implements GADRewardBasedVideoAdDelegate {
  public static ObjCProtocols = [];
  _loaded: () => void;
  _error: (err) => void;

  static new(): GADRewardBasedVideoAdDelegateImpl {
    if (GADRewardBasedVideoAdDelegateImpl.ObjCProtocols.length === 0 && typeof (GADRewardBasedVideoAdDelegate) !== "undefined") {
      GADRewardBasedVideoAdDelegateImpl.ObjCProtocols.push(GADRewardBasedVideoAdDelegate);
    }
    return <GADRewardBasedVideoAdDelegateImpl>super.new();
  }

  public initWithCallback(loaded: () => void, error: (err) => void): GADRewardBasedVideoAdDelegateImpl {
    this._loaded = loaded;
    this._error = error;
    return this;
  }

  rewardBasedVideoAdDidClose(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    firebase.admob.rewardedAdVideoView = undefined;
    rewardedVideoCallbacks.onClosed();
    setTimeout(function () {
      CFRelease(_rewardBasedVideoAdDelegate);
      _rewardBasedVideoAdDelegate = undefined;
    });
  }

  rewardBasedVideoAdDidCompletePlaying(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    rewardedVideoCallbacks.onCompleted();
  }

  rewardBasedVideoAdDidFailToLoadWithError(rewardBasedVideoAd: GADRewardBasedVideoAd, error: NSError): void {
    this._error(error.localizedDescription);
  }

  rewardBasedVideoAdDidOpen(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    rewardedVideoCallbacks.onOpened();
  }

  rewardBasedVideoAdDidReceiveAd(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    this._loaded();
  }

  rewardBasedVideoAdDidRewardUserWithReward(rewardBasedVideoAd: GADRewardBasedVideoAd, reward: GADAdReward): void {
    rewardedVideoCallbacks.onRewarded({
      amount: reward.amount ? reward.amount.doubleValue : undefined,
      type: reward.type
    });
  }

  rewardBasedVideoAdDidStartPlaying(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    rewardedVideoCallbacks.onStarted();
  }

  rewardBasedVideoAdWillLeaveApplication(rewardBasedVideoAd: GADRewardBasedVideoAd): void {
    rewardedVideoCallbacks.onLeftApplication();
  }
}
