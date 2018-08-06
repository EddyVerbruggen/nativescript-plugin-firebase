
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

	dataCollectionDefaultEnabled: boolean;

	readonly name: string;

	readonly options: FIROptions;

	static readonly allApps: NSDictionary<string, FIRApp>;

	deleteApp(completion: (p1: boolean) => void): void;
}

declare class FIRConfiguration extends NSObject {

	static alloc(): FIRConfiguration; // inherited from NSObject

	static new(): FIRConfiguration; // inherited from NSObject

	analyticsConfiguration: FIRAnalyticsConfiguration;

	static readonly sharedInstance: FIRConfiguration;

	setLoggerLevel(loggerLevel: FIRLoggerLevel): void;
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

	constructor(o: { googleAppID: string; GCMSenderID: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithContentsOfFile(plistPath: string): this;

	initWithGoogleAppIDGCMSenderID(googleAppID: string, GCMSenderID: string): this;
}

declare var FirebaseCoreVersionNumber: number;

declare var FirebaseCoreVersionString: interop.Reference<number>;
