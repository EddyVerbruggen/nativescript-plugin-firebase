/**
 * send Crashlytics Log -> android Exception or iOS Exception
 * @param exception
 */
export declare function sendCrashLog(exception: any): void;

export declare function log(priority: number, tag: string, msg: string): void;

export declare function setString(key: string, value: string): void;

export declare function setBool(key: string, value: boolean): void;

export declare function setFloat(key: string, value: number): void;

export declare function setInt(key: string, value: number): void;

export declare function setDouble(key: string, value: number): void;

export declare function setUserId(userId: string): void;
