export declare type HttpsCallable<I, O> = (callableData: I) => Promise<O>;

export declare type SUPPORTED_REGIONS = "us-central1" | "us-east1" | "us-east4" | "europe-west1" | "europe-west2" | "asia-east2" | "asia-northeast1";

export declare function httpsCallable<I = {}, O = {}>(functionName: string, region?: SUPPORTED_REGIONS): HttpsCallable<I, O>;