export declare type HttpsCallable<I, O> = ( callableData: I ) => Promise<O>;
export declare function httpsCallable<I = {}, O = {}>(functionName: string): HttpsCallable<I, O>;