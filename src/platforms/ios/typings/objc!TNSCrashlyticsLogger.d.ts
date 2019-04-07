
declare var TNSCrashlyticsLoggerVersionNumber: number;

declare var TNSCrashlyticsLoggerVersionString: interop.Reference<number>;

declare class TNSCrashlyticsLoggerWrapper extends NSObject {

	static alloc(): TNSCrashlyticsLoggerWrapper; // inherited from NSObject

	static log(string: string): void;

	static new(): TNSCrashlyticsLoggerWrapper; // inherited from NSObject
}
