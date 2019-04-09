export interface OnMessageCallbackData {
  campaignName: string;
}

export declare function onMessageClicked(callback: (data: OnMessageCallbackData) => void): void;

export declare function onMessageImpression(callback: (data: OnMessageCallbackData) => void): void;