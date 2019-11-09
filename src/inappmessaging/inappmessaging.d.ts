export interface OnMessageImpressionCallbackData {
  campaignName: string;
}

export interface OnMessageClickedCallbackData {
  campaignName: string;
  actionText?: string;
  actionURL?: string;
}

export declare function onMessageImpression(callback: (data: OnMessageImpressionCallbackData) => void): void;

export declare function onMessageClicked(callback: (data: OnMessageClickedCallbackData) => void): void;

export declare function triggerEvent(eventName: string): void;