
declare var FIRNamespaceGoogleMobilePlatform: string;

declare class FIRRemoteConfig extends NSObject implements NSFastEnumeration {

	static alloc(): FIRRemoteConfig; // inherited from NSObject

	static new(): FIRRemoteConfig; // inherited from NSObject

	static remoteConfig(): FIRRemoteConfig;

	configSettings: FIRRemoteConfigSettings;

	readonly lastFetchStatus: FIRRemoteConfigFetchStatus;

	readonly lastFetchTime: Date;
	[Symbol.iterator](): Iterator<any>;

	activateFetched(): boolean;

	allKeysFromSourceNamespace(source: FIRRemoteConfigSource, aNamespace: string): NSArray<string>;

	configValueForKey(key: string): FIRRemoteConfigValue;

	configValueForKeyNamespace(key: string, aNamespace: string): FIRRemoteConfigValue;

	configValueForKeyNamespaceSource(key: string, aNamespace: string, source: FIRRemoteConfigSource): FIRRemoteConfigValue;

	defaultValueForKeyNamespace(key: string, aNamespace: string): FIRRemoteConfigValue;

	fetchWithCompletionHandler(completionHandler: (p1: FIRRemoteConfigFetchStatus, p2: NSError) => void): void;

	fetchWithExpirationDurationCompletionHandler(expirationDuration: number, completionHandler: (p1: FIRRemoteConfigFetchStatus, p2: NSError) => void): void;

	keysWithPrefix(prefix: string): NSSet<string>;

	keysWithPrefixNamespace(prefix: string, aNamespace: string): NSSet<string>;

	objectForKeyedSubscript(key: string): FIRRemoteConfigValue;

	setDefaults(defaults: NSDictionary<string, NSObject>): void;

	setDefaultsFromPlistFileName(fileName: string): void;

	setDefaultsFromPlistFileNameNamespace(fileName: string, aNamespace: string): void;

	setDefaultsNamespace(defaults: NSDictionary<string, NSObject>, aNamespace: string): void;
}

declare const enum FIRRemoteConfigError {

	Unknown = 8001,

	Throttled = 8002,

	InternalError = 8003
}

declare var FIRRemoteConfigErrorDomain: string;

declare const enum FIRRemoteConfigFetchStatus {

	NoFetchYet = 0,

	Success = 1,

	Failure = 2,

	Throttled = 3
}

declare class FIRRemoteConfigSettings extends NSObject {

	static alloc(): FIRRemoteConfigSettings; // inherited from NSObject

	static new(): FIRRemoteConfigSettings; // inherited from NSObject

	readonly isDeveloperModeEnabled: boolean;

	constructor(o: { developerModeEnabled: boolean; });

	initWithDeveloperModeEnabled(developerModeEnabled: boolean): this;
}

declare const enum FIRRemoteConfigSource {

	Remote = 0,

	Default = 1,

	Static = 2
}

declare var FIRRemoteConfigThrottledEndTimeInSecondsKey: string;

declare class FIRRemoteConfigValue extends NSObject implements NSCopying {

	static alloc(): FIRRemoteConfigValue; // inherited from NSObject

	static new(): FIRRemoteConfigValue; // inherited from NSObject

	readonly boolValue: boolean;

	readonly dataValue: NSData;

	readonly numberValue: number;

	readonly source: FIRRemoteConfigSource;

	readonly stringValue: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}
