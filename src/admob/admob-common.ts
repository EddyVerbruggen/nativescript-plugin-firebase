import { RewardedVideoAdCallbacks, RewardedVideoAdReward } from "./admob";

export const AD_SIZE = {
  SMART_BANNER: "SMART",
  LARGE_BANNER: "LARGE",
  BANNER: "BANNER",
  MEDIUM_RECTANGLE: "MEDIUM",
  FULL_BANNER: "FULL",
  LEADERBOARD: "LEADERBOARD",
  SKYSCRAPER: "SKYSCRAPER",
  FLUID: "FLUID"
};

export const BANNER_DEFAULTS = {
  margins: {
    top: -1,
    bottom: -1
  },
  testing: false,
  size: "SMART",
  view: undefined
};

export const rewardedVideoCallbacks: RewardedVideoAdCallbacks = {
  onRewarded: (reward: RewardedVideoAdReward) => console.warn("onRewarded callback not set - the fallback implementation caught this reward: " + JSON.stringify(reward)),
  onLeftApplication: () => {
  },
  onClosed: () => {
  },
  onOpened: () => {
  },
  onStarted: () => {
  },
  onCompleted: () => {
  },
  onLoaded: () => {
  },
  onFailedToLoad: (err) => console.warn("onFailedToLoad not set - the fallback implementation caught this error: " + err),
};
