
declare class FIRAnalyticsConfiguration extends NSObject {

	static alloc(): FIRAnalyticsConfiguration; // inherited from NSObject

	static new(): FIRAnalyticsConfiguration; // inherited from NSObject

	static sharedInstance(): FIRAnalyticsConfiguration;

	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;

	setMinimumSessionInterval(minimumSessionInterval: number): void;

	setSessionTimeoutInterval(sessionTimeoutInterval: number): void;
}

declare class FIRApp extends NSObject {

	static alloc(): FIRApp; // inherited from NSObject

	static appNamed(name: string): FIRApp;

	static configure(): void;

	static configureWithNameOptions(name: string, options: FIROptions): void;

	static configureWithOptions(options: FIROptions): void;

	static defaultApp(): FIRApp;

	static new(): FIRApp; // inherited from NSObject

	readonly name: string;

	readonly options: FIROptions;

	static readonly allApps: NSDictionary<string, FIRApp>;

	deleteApp(completion: (p1: boolean) => void): void;
}

declare class FIRConfiguration extends NSObject {

	static alloc(): FIRConfiguration; // inherited from NSObject

	static new(): FIRConfiguration; // inherited from NSObject

	analyticsConfiguration: FIRAnalyticsConfiguration;

	logLevel: FIRLogLevel;

	static readonly sharedInstance: FIRConfiguration;

	setLoggerLevel(loggerLevel: FIRLoggerLevel): void;
}

declare const enum FIRLogLevel {

	kFIRLogLevelError = 0,

	kFIRLogLevelWarning = 1,

	kFIRLogLevelInfo = 2,

	kFIRLogLevelDebug = 3,

	kFIRLogLevelAssert = 4,

	kFIRLogLevelMax = 4
}

declare const enum FIRLoggerLevel {

	Error = 3,

	Warning = 4,

	Notice = 5,

	Info = 6,

	Debug = 7,

	Min = 3,

	Max = 7
}

declare class FIROptions extends NSObject implements NSCopying {

	static alloc(): FIROptions; // inherited from NSObject

	static defaultOptions(): FIROptions;

	static new(): FIROptions; // inherited from NSObject

	APIKey: string;

	GCMSenderID: string;

	androidClientID: string;

	bundleID: string;

	clientID: string;

	databaseURL: string;

	deepLinkURLScheme: string;

	googleAppID: string;

	projectID: string;

	storageBucket: string;

	trackingID: string;

	constructor(o: { contentsOfFile: string; });

	constructor(o: { googleAppID: string; bundleID: string; GCMSenderID: string; APIKey: string; clientID: string; trackingID: string; androidClientID: string; databaseURL: string; storageBucket: string; deepLinkURLScheme: string; });

	constructor(o: { googleAppID: string; GCMSenderID: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithContentsOfFile(plistPath: string): this;

	initWithGoogleAppIDBundleIDGCMSenderIDAPIKeyClientIDTrackingIDAndroidClientIDDatabaseURLStorageBucketDeepLinkURLScheme(googleAppID: string, bundleID: string, GCMSenderID: string, APIKey: string, clientID: string, trackingID: string, androidClientID: string, databaseURL: string, storageBucket: string, deepLinkURLScheme: string): this;

	initWithGoogleAppIDGCMSenderID(googleAppID: string, GCMSenderID: string): this;
}
