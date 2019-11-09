/**
 * send Crashlytics Log -> native Android or iOS exception
 * @param exception
 */
export declare function sendCrashLog(exception: any): void;

export declare function log(msg: string, tag?: string,  priority?: number): void;

export declare function setString(key: string, value: string): void;

export declare function setBool(key: string, value: boolean): void;

export declare function setFloat(key: string, value: number): void;

export declare function setInt(key: string, value: number): void;

export declare function setDouble(key: string, value: number): void;

export declare function setUserId(userId: string): void;

export declare function crash(): void;

export declare function setCrashlyticsCollectionEnabled(enabled: boolean): void;