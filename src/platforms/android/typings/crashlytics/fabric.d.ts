/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class ActivityLifecycleManager {
					public static class: java.lang.Class<io.fabric.sdk.android.ActivityLifecycleManager>;
					public constructor(param0: globalAndroid.content.Context);
					public registerCallbacks(param0: io.fabric.sdk.android.ActivityLifecycleManager.Callbacks): boolean;
					public resetCallbacks(): void;
				}
				export module ActivityLifecycleManager {
					export class ActivityLifecycleCallbacksWrapper {
						public static class: java.lang.Class<io.fabric.sdk.android.ActivityLifecycleManager.ActivityLifecycleCallbacksWrapper>;
					}
					export abstract class Callbacks {
						public static class: java.lang.Class<io.fabric.sdk.android.ActivityLifecycleManager.Callbacks>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public constructor();
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class BuildConfig {
					public static class: java.lang.Class<io.fabric.sdk.android.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static ARTIFACT_ID: string;
					public static BUILD_NUMBER: string;
					public static DEVELOPER_TOKEN: string;
					public static GROUP: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class DefaultLogger extends io.fabric.sdk.android.Logger {
					public static class: java.lang.Class<io.fabric.sdk.android.DefaultLogger>;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getLogLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public e(param0: string, param1: string): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public constructor(param0: number);
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Fabric {
					public static class: java.lang.Class<io.fabric.sdk.android.Fabric>;
					public static TAG: string;
					public getCurrentActivity(): globalAndroid.app.Activity;
					public getVersion(): string;
					public getExecutorService(): java.util.concurrent.ExecutorService;
					public getAppIdentifier(): string;
					public static getLogger(): io.fabric.sdk.android.Logger;
					public getIdentifier(): string;
					public static getKit(param0: java.lang.Class): io.fabric.sdk.android.Kit;
					public setCurrentActivity(param0: globalAndroid.app.Activity): io.fabric.sdk.android.Fabric;
					public getAppInstallIdentifier(): string;
					public getActivityLifecycleManager(): io.fabric.sdk.android.ActivityLifecycleManager;
					public getMainHandler(): globalAndroid.os.Handler;
					public static isDebuggable(): boolean;
					public static with(param0: globalAndroid.content.Context, param1: native.Array<io.fabric.sdk.android.Kit>): io.fabric.sdk.android.Fabric;
					public static with(param0: io.fabric.sdk.android.Fabric): io.fabric.sdk.android.Fabric;
					public static isInitialized(): boolean;
					public getKits(): java.util.Collection<io.fabric.sdk.android.Kit>;
				}
				export module Fabric {
					export class Builder {
						public static class: java.lang.Class<io.fabric.sdk.android.Fabric.Builder>;
						public logger(param0: io.fabric.sdk.android.Logger): io.fabric.sdk.android.Fabric.Builder;
						public constructor(param0: globalAndroid.content.Context);
						public threadPoolExecutor(param0: io.fabric.sdk.android.services.concurrency.PriorityThreadPoolExecutor): io.fabric.sdk.android.Fabric.Builder;
						public build(): io.fabric.sdk.android.Fabric;
						public executorService(param0: java.util.concurrent.ExecutorService): io.fabric.sdk.android.Fabric.Builder;
						public handler(param0: globalAndroid.os.Handler): io.fabric.sdk.android.Fabric.Builder;
						public appIdentifier(param0: string): io.fabric.sdk.android.Fabric.Builder;
						public kits(param0: native.Array<io.fabric.sdk.android.Kit>): io.fabric.sdk.android.Fabric.Builder;
						public appInstallIdentifier(param0: string): io.fabric.sdk.android.Fabric.Builder;
						public debuggable(param0: boolean): io.fabric.sdk.android.Fabric.Builder;
						public initializationCallback(param0: io.fabric.sdk.android.InitializationCallback<io.fabric.sdk.android.Fabric>): io.fabric.sdk.android.Fabric.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class FabricContext {
					public static class: java.lang.Class<io.fabric.sdk.android.FabricContext>;
					public getCacheDir(): java.io.File;
					public getDatabasePath(param0: string): java.io.File;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
					public getExternalCacheDir(): java.io.File;
					public getSharedPreferences(param0: string, param1: number): globalAndroid.content.SharedPreferences;
					public getExternalFilesDir(param0: string): java.io.File;
					public openOrCreateDatabase(param0: string, param1: number, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: globalAndroid.database.DatabaseErrorHandler): globalAndroid.database.sqlite.SQLiteDatabase;
					public openOrCreateDatabase(param0: string, param1: number, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory): globalAndroid.database.sqlite.SQLiteDatabase;
					public getFilesDir(): java.io.File;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class FabricKitsFinder extends java.util.concurrent.Callable<java.util.Map<string,io.fabric.sdk.android.KitInfo>> {
					public static class: java.lang.Class<io.fabric.sdk.android.FabricKitsFinder>;
					public call(): java.util.Map<string,io.fabric.sdk.android.KitInfo>;
					public loadApkFile(): java.util.zip.ZipFile;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.fabric.sdk.android.InitializationCallback>;
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.InitializationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						success(param0: T): void;
						failure(param0: java.lang.Exception): void;
						<clinit>(): void;
					});
					public constructor();
					public static EMPTY: io.fabric.sdk.android.InitializationCallback;
					public failure(param0: java.lang.Exception): void;
					public success(param0: T): void;
				}
				export module InitializationCallback {
					export class Empty extends io.fabric.sdk.android.InitializationCallback<any> {
						public static class: java.lang.Class<io.fabric.sdk.android.InitializationCallback.Empty>;
						public failure(param0: java.lang.Exception): void;
						public success(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationException {
					public static class: java.lang.Class<io.fabric.sdk.android.InitializationException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class InitializationTask<Result>  extends io.fabric.sdk.android.services.concurrency.PriorityAsyncTask<java.lang.Void,java.lang.Void,any> {
					public static class: java.lang.Class<io.fabric.sdk.android.InitializationTask>;
					public isFinished(): boolean;
					public constructor(param0: io.fabric.sdk.android.Kit<any>);
					public getDependencies(): java.util.Collection<io.fabric.sdk.android.services.concurrency.Task>;
					public onPreExecute(): void;
					public onCancelled(param0: any): void;
					public setFinished(param0: boolean): void;
					public getError(): java.lang.Throwable;
					public addDependency(param0: io.fabric.sdk.android.services.concurrency.Task): void;
					public getPriority(): io.fabric.sdk.android.services.concurrency.Priority;
					public areDependenciesMet(): boolean;
					public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
					public constructor();
					public doInBackground(param0: native.Array<java.lang.Void>): any;
					public onCancelled(): void;
					public getDependencies(): java.util.Collection<any>;
					public setError(param0: java.lang.Throwable): void;
					public doInBackground(param0: native.Array<any>): any;
					public onPostExecute(param0: any): void;
					public addDependency(param0: any): void;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export abstract class Kit<Result>  extends java.lang.Comparable<io.fabric.sdk.android.Kit> {
					public static class: java.lang.Class<io.fabric.sdk.android.Kit>;
					public getVersion(): string;
					public compareTo(param0: io.fabric.sdk.android.Kit): number;
					public getDependencies(): java.util.Collection<io.fabric.sdk.android.services.concurrency.Task>;
					public onCancelled(param0: any): void;
					public onPreExecute(): boolean;
					public getIdManager(): io.fabric.sdk.android.services.common.IdManager;
					public getIdentifier(): string;
					public getPath(): string;
					public constructor();
					public getContext(): globalAndroid.content.Context;
					public onPostExecute(param0: any): void;
					public getFabric(): io.fabric.sdk.android.Fabric;
					public doInBackground(): any;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class KitGroup {
					public static class: java.lang.Class<io.fabric.sdk.android.KitGroup>;
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.KitGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getKits(): java.util.Collection<any>;
					});
					public constructor();
					public getKits(): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class KitInfo {
					public static class: java.lang.Class<io.fabric.sdk.android.KitInfo>;
					public getVersion(): string;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: string);
					public getBuildType(): string;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Logger {
					public static class: java.lang.Class<io.fabric.sdk.android.Logger>;
					/**
					 * Constructs a new instance of the io.fabric.sdk.android.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isLoggable(param0: string, param1: number): boolean;
						getLogLevel(): number;
						setLogLevel(param0: number): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						v(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
						d(param0: string, param1: string): void;
						v(param0: string, param1: string): void;
						i(param0: string, param1: string): void;
						w(param0: string, param1: string): void;
						e(param0: string, param1: string): void;
						log(param0: number, param1: string, param2: string): void;
						log(param0: number, param1: string, param2: string, param3: boolean): void;
					});
					public constructor();
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getLogLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class Onboarding extends io.fabric.sdk.android.Kit<java.lang.Boolean> {
					public static class: java.lang.Class<io.fabric.sdk.android.Onboarding>;
					public getVersion(): string;
					public constructor();
					public constructor(param0: java.util.concurrent.Future<java.util.Map<string,io.fabric.sdk.android.KitInfo>>, param1: java.util.Collection<io.fabric.sdk.android.Kit>);
					public onPreExecute(): boolean;
					public getIdentifier(): string;
					public doInBackground(): java.lang.Boolean;
					public doInBackground(): any;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export class SilentLogger extends io.fabric.sdk.android.Logger {
					public static class: java.lang.Class<io.fabric.sdk.android.SilentLogger>;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getLogLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public isLoggable(param0: string, param1: number): boolean;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public setLogLevel(param0: number): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public log(param0: number, param1: string, param2: string, param3: boolean): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export abstract class AbstractValueCache<T>  extends io.fabric.sdk.android.services.cache.ValueCache<any> {
							public static class: java.lang.Class<io.fabric.sdk.android.services.cache.AbstractValueCache>;
							public constructor();
							public constructor(param0: io.fabric.sdk.android.services.cache.ValueCache<any>);
							public invalidate(param0: globalAndroid.content.Context): void;
							public doInvalidate(param0: globalAndroid.content.Context): void;
							public cacheValue(param0: globalAndroid.content.Context, param1: any): void;
							public getCached(param0: globalAndroid.content.Context): any;
							public get(param0: globalAndroid.content.Context, param1: io.fabric.sdk.android.services.cache.ValueLoader<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class MemoryValueCache<T>  extends io.fabric.sdk.android.services.cache.AbstractValueCache<any> {
							public static class: java.lang.Class<io.fabric.sdk.android.services.cache.MemoryValueCache>;
							public constructor();
							public constructor(param0: io.fabric.sdk.android.services.cache.ValueCache<any>);
							public doInvalidate(param0: globalAndroid.content.Context): void;
							public cacheValue(param0: globalAndroid.content.Context, param1: any): void;
							public invalidate(param0: globalAndroid.content.Context): void;
							public getCached(param0: globalAndroid.content.Context): any;
							public get(param0: globalAndroid.content.Context, param1: io.fabric.sdk.android.services.cache.ValueLoader<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class ValueCache<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.fabric.sdk.android.services.cache.ValueCache>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.cache.ValueCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: globalAndroid.content.Context, param1: io.fabric.sdk.android.services.cache.ValueLoader<T>): T;
								invalidate(param0: globalAndroid.content.Context): void;
							});
							public constructor();
							public get(param0: globalAndroid.content.Context, param1: io.fabric.sdk.android.services.cache.ValueLoader<T>): T;
							public invalidate(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module cache {
						export class ValueLoader<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.fabric.sdk.android.services.cache.ValueLoader>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.cache.ValueLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								load(param0: globalAndroid.content.Context): T;
							});
							public constructor();
							public load(param0: globalAndroid.content.Context): T;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class AbstractSpiCall {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AbstractSpiCall>;
							public static HEADER_API_KEY: string;
							public static HEADER_DEVELOPER_TOKEN: string;
							public static HEADER_CLIENT_TYPE: string;
							public static HEADER_CLIENT_VERSION: string;
							public static HEADER_REQUEST_ID: string;
							public static HEADER_USER_AGENT: string;
							public static HEADER_ACCEPT: string;
							public static CRASHLYTICS_USER_AGENT: string;
							public static ACCEPT_JSON_VALUE: string;
							public static CLS_ANDROID_SDK_DEVELOPER_TOKEN: string;
							public static DEFAULT_TIMEOUT: number;
							public static ANDROID_CLIENT_TYPE: string;
							public kit: io.fabric.sdk.android.Kit;
							public getUrl(): string;
							public getHttpRequest(): io.fabric.sdk.android.services.network.HttpRequest;
							public constructor(param0: io.fabric.sdk.android.Kit, param1: string, param2: string, param3: io.fabric.sdk.android.services.network.HttpRequestFactory, param4: io.fabric.sdk.android.services.network.HttpMethod);
							public getHttpRequest(param0: java.util.Map<string,string>): io.fabric.sdk.android.services.network.HttpRequest;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfo {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfo>;
							public advertisingId: string;
							public limitAdTrackingEnabled: boolean;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoProvider>;
							public getReflectionStrategy(): io.fabric.sdk.android.services.common.AdvertisingInfoStrategy;
							public getServiceStrategy(): io.fabric.sdk.android.services.common.AdvertisingInfoStrategy;
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							public getInfoFromPreferences(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoReflectionStrategy extends io.fabric.sdk.android.services.common.AdvertisingInfoStrategy {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoReflectionStrategy>;
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoServiceStrategy extends io.fabric.sdk.android.services.common.AdvertisingInfoStrategy {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoServiceStrategy>;
							public static GOOGLE_PLAY_SERVICES_INTENT: string;
							public static GOOGLE_PLAY_SERVICES_INTENT_PACKAGE_NAME: string;
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module AdvertisingInfoServiceStrategy {
							export class AdvertisingConnection {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoServiceStrategy.AdvertisingConnection>;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public getBinder(): globalAndroid.os.IBinder;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
							}
							export class AdvertisingInterface {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoServiceStrategy.AdvertisingInterface>;
								public static ADVERTISING_ID_SERVICE_INTERFACE_TOKEN: string;
								public isLimitAdTrackingEnabled(): boolean;
								public constructor(param0: globalAndroid.os.IBinder);
								public asBinder(): globalAndroid.os.IBinder;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class AdvertisingInfoStrategy {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.AdvertisingInfoStrategy>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.AdvertisingInfoStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
							});
							public constructor();
							public getAdvertisingInfo(): io.fabric.sdk.android.services.common.AdvertisingInfo;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ApiKey {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.ApiKey>;
							public constructor();
							public getApiKeyFromStrings(param0: globalAndroid.content.Context): string;
							public getApiKeyFromManifest(param0: globalAndroid.content.Context): string;
							public logErrorOrThrowException(param0: globalAndroid.content.Context): void;
							public static getApiKey(param0: globalAndroid.content.Context, param1: boolean): string;
							public buildApiKeyInstructions(): string;
							public getApiKeyFromFirebaseAppId(param0: globalAndroid.content.Context): string;
							public static getApiKey(param0: globalAndroid.content.Context): string;
							public getValue(param0: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class BackgroundPriorityRunnable {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.BackgroundPriorityRunnable>;
							public constructor();
							public onRun(): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class CommonUtils {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.CommonUtils>;
							public static SHA1_INSTANCE: string;
							public static SHA256_INSTANCE: string;
							public static GOOGLE_SDK: string;
							public static SDK: string;
							public static DEVICE_STATE_ISSIMULATOR: number;
							public static DEVICE_STATE_JAILBROKEN: number;
							public static DEVICE_STATE_DEBUGGERATTACHED: number;
							public static DEVICE_STATE_BETAOS: number;
							public static DEVICE_STATE_VENDORINTERNAL: number;
							public static DEVICE_STATE_COMPROMISEDLIBRARIES: number;
							public static FILE_MODIFIED_COMPARATOR: java.util.Comparator<java.io.File>;
							public static logControlledError(param0: globalAndroid.content.Context, param1: string, param2: java.lang.Throwable): void;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: native.Array<number>): void;
							public static getAppIconResourceId(param0: globalAndroid.content.Context): number;
							public static isRooted(param0: globalAndroid.content.Context): boolean;
							public static getBatteryVelocity(param0: globalAndroid.content.Context, param1: boolean): number;
							public static resolveUnityEditorVersion(param0: globalAndroid.content.Context): string;
							public static checkPermission(param0: globalAndroid.content.Context, param1: string): boolean;
							public static logOrThrowIllegalArgumentException(param0: string, param1: string): void;
							public static isClsTrace(param0: globalAndroid.content.Context): boolean;
							public static sha1(param0: java.io.InputStream): string;
							public static createInstanceIdFrom(param0: native.Array<string>): string;
							public static logPriorityToString(param0: number): string;
							public static dehexify(param0: string): native.Array<number>;
							public static closeOrLog(param0: java.io.Closeable, param1: string): void;
							public static resolveBuildId(param0: globalAndroid.content.Context): string;
							public static getBooleanResourceValue(param0: globalAndroid.content.Context, param1: string, param2: boolean): boolean;
							public static createCipher(param0: number, param1: string): javax.crypto.Cipher;
							public static calculateUsedDiskSpaceInBytes(param0: string): number;
							public static openKeyboard(param0: globalAndroid.content.Context, param1: globalAndroid.view.View): void;
							public static finishAffinity(param0: globalAndroid.app.Activity, param1: number): void;
							public static getAppIconHashOrNull(param0: globalAndroid.content.Context): string;
							public static streamToString(param0: java.io.InputStream): string;
							public static getStringsFileValue(param0: globalAndroid.content.Context, param1: string): string;
							public static flushOrLog(param0: java.io.Flushable, param1: string): void;
							public static extractFieldFromSystemFile(param0: java.io.File, param1: string): string;
							public static finishAffinity(param0: globalAndroid.content.Context, param1: number): void;
							public static isDebuggerAttached(): boolean;
							public static canTryConnection(param0: globalAndroid.content.Context): boolean;
							public static getProximitySensorEnabled(param0: globalAndroid.content.Context): boolean;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static hideKeyboard(param0: globalAndroid.content.Context, param1: globalAndroid.view.View): void;
							public static isEmulator(param0: globalAndroid.content.Context): boolean;
							public static calculateFreeRamInBytes(param0: globalAndroid.content.Context): number;
							public static getResourcesIdentifier(param0: globalAndroid.content.Context, param1: string, param2: string): number;
							public static logControlled(param0: globalAndroid.content.Context, param1: string): void;
							public static hexify(param0: native.Array<number>): string;
							public static sha1(param0: string): string;
							public static getResourcePackageName(param0: globalAndroid.content.Context): string;
							public static logOrThrowIllegalStateException(param0: string, param1: string): void;
							public static padWithZerosToMaxIntWidth(param0: number): string;
							public constructor();
							public static getAppProcessInfo(param0: string, param1: globalAndroid.content.Context): globalAndroid.app.ActivityManager.RunningAppProcessInfo;
							public static getBatteryLevel(param0: globalAndroid.content.Context): java.lang.Float;
							public static getSharedPrefs(param0: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
							public static getDeviceState(param0: globalAndroid.content.Context): number;
							public static isNullOrEmpty(param0: string): boolean;
							public static stringsEqualIncludingNull(param0: string, param1: string): boolean;
							public static isLoggingEnabled(param0: globalAndroid.content.Context): boolean;
							public static isAppDebuggable(param0: globalAndroid.content.Context): boolean;
							public static getTotalRamInBytes(): number;
							public static logControlled(param0: globalAndroid.content.Context, param1: number, param2: string, param3: string): void;
							public static getCpuArchitectureInt(): number;
							public static sha256(param0: string): string;
						}
						export module CommonUtils {
							export class Architecture {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.CommonUtils.Architecture>;
								public static X86_32: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static X86_64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARM_UNKNOWN: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static PPC: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static PPC64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV6: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV7: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static UNKNOWN: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARMV7S: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static ARM64: io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static valueOf(param0: string): io.fabric.sdk.android.services.common.CommonUtils.Architecture;
								public static values(): native.Array<io.fabric.sdk.android.services.common.CommonUtils.Architecture>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export abstract class Crash {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.Crash>;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getSessionId(): string;
							public getExceptionName(): string;
						}
						export module Crash {
							export class FatalException extends io.fabric.sdk.android.services.common.Crash {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.Crash.FatalException>;
								public constructor(param0: string, param1: string);
								public constructor(param0: string);
							}
							export class LoggedException extends io.fabric.sdk.android.services.common.Crash {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.Crash.LoggedException>;
								public constructor(param0: string, param1: string);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class CurrentTimeProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.CurrentTimeProvider>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.CurrentTimeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentTimeMillis(): number;
							});
							public constructor();
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class DataCollectionArbiter {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.DataCollectionArbiter>;
							public static getInstance(param0: globalAndroid.content.Context): io.fabric.sdk.android.services.common.DataCollectionArbiter;
							public shouldAutoInitialize(): boolean;
							public static resetForTesting(param0: globalAndroid.content.Context): void;
							public setCrashlyticsDataCollectionEnabled(param0: boolean): void;
							public isDataCollectionEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class DeliveryMechanism {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.DeliveryMechanism>;
							public static DEVELOPER: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static USER_SIDELOAD: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static TEST_DISTRIBUTION: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static APP_STORE: io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static BETA_APP_PACKAGE_NAME: string;
							public static valueOf(param0: string): io.fabric.sdk.android.services.common.DeliveryMechanism;
							public static determineFrom(param0: string): io.fabric.sdk.android.services.common.DeliveryMechanism;
							public getId(): number;
							public toString(): string;
							public static values(): native.Array<io.fabric.sdk.android.services.common.DeliveryMechanism>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class DeviceIdentifierProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.DeviceIdentifierProvider>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.DeviceIdentifierProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getDeviceIdentifiers(): java.util.Map<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType,string>;
							});
							public constructor();
							public getDeviceIdentifiers(): java.util.Map<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType,string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ExecutorUtils {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.ExecutorUtils>;
							public static getNamedThreadFactory(param0: string): java.util.concurrent.ThreadFactory;
							public static addDelayedShutdownHook(param0: string, param1: java.util.concurrent.ExecutorService, param2: number, param3: java.util.concurrent.TimeUnit): void;
							public static buildSingleThreadScheduledExecutorService(param0: string): java.util.concurrent.ScheduledExecutorService;
							public static buildRetryThreadPoolExecutor(param0: string, param1: number, param2: io.fabric.sdk.android.services.concurrency.internal.RetryPolicy, param3: io.fabric.sdk.android.services.concurrency.internal.Backoff): io.fabric.sdk.android.services.concurrency.internal.RetryThreadPoolExecutor;
							public static buildSingleThreadExecutorService(param0: string): java.util.concurrent.ExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class FirebaseApp {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.FirebaseApp>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.common.FirebaseApp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isDataCollectionDefaultEnabled(): boolean;
							});
							public constructor();
							public isDataCollectionDefaultEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class FirebaseAppImpl extends io.fabric.sdk.android.services.common.FirebaseApp {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.FirebaseAppImpl>;
							public isDataCollectionDefaultEnabled(): boolean;
							public static getInstance(param0: globalAndroid.content.Context): io.fabric.sdk.android.services.common.FirebaseApp;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class FirebaseInfo {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.FirebaseInfo>;
							public constructor();
							public isAutoInitializeFlagEnabled(param0: globalAndroid.content.Context): boolean;
							public isFirebaseCrashlyticsEnabled(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class IdManager {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.IdManager>;
							public static COLLECT_DEVICE_IDENTIFIERS: string;
							public static COLLECT_USER_IDENTIFIERS: string;
							public static DEFAULT_VERSION_NAME: string;
							public getWifiMacAddress(): string;
							public getTelephonyId(): string;
							public getOsVersionString(): string;
							public getDeviceIdentifiers(): java.util.Map<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType,string>;
							public getModelName(): string;
							public getAdvertisingId(): string;
							public getAndroidId(): string;
							public getAppIdentifier(): string;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.Collection<io.fabric.sdk.android.Kit>);
							public getBluetoothMacAddress(): string;
							public shouldCollectHardwareIds(): boolean;
							public getOsDisplayVersionString(): string;
							public canCollectUserIds(): boolean;
							public getOsBuildVersionString(): string;
							public getSerialNumber(): string;
							public createIdHeaderValue(param0: string, param1: string): string;
							public getAppInstallIdentifier(): string;
							public getInstallerPackageName(): string;
							public isLimitAdTrackingEnabled(): java.lang.Boolean;
						}
						export module IdManager {
							export class DeviceIdentifierType {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType>;
								public static WIFI_MAC_ADDRESS: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static BLUETOOTH_MAC_ADDRESS: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static FONT_TOKEN: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_DEVICE_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_SERIAL: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public static ANDROID_ADVERTISING_ID: io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
								public protobufIndex: number;
								public static values(): native.Array<io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType>;
								public static valueOf(param0: string): io.fabric.sdk.android.services.common.IdManager.DeviceIdentifierType;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class InstallerPackageNameProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.InstallerPackageNameProvider>;
							public constructor();
							public getInstallerPackageName(param0: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class QueueFile {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.QueueFile>;
							public peek(param0: io.fabric.sdk.android.services.common.QueueFile.ElementReader): void;
							public size(): number;
							public close(): void;
							public usedBytes(): number;
							public remove(): void;
							public clear(): void;
							public toString(): string;
							public peek(): native.Array<number>;
							public constructor(param0: java.io.File);
							public add(param0: native.Array<number>): void;
							public forEach(param0: io.fabric.sdk.android.services.common.QueueFile.ElementReader): void;
							public add(param0: native.Array<number>, param1: number, param2: number): void;
							public isEmpty(): boolean;
							public hasSpaceFor(param0: number, param1: number): boolean;
						}
						export module QueueFile {
							export class Element {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.QueueFile.Element>;
								public toString(): string;
							}
							export class ElementInputStream {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.QueueFile.ElementInputStream>;
								public read(param0: native.Array<number>, param1: number, param2: number): number;
								public read(): number;
							}
							export class ElementReader {
								public static class: java.lang.Class<io.fabric.sdk.android.services.common.QueueFile.ElementReader>;
								/**
								 * Constructs a new instance of the io.fabric.sdk.android.services.common.QueueFile$ElementReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									read(param0: java.io.InputStream, param1: number): void;
								});
								public constructor();
								public read(param0: java.io.InputStream, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class ResponseParser {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.ResponseParser>;
							public static ResponseActionDiscard: number;
							public static ResponseActionRetry: number;
							public constructor();
							public static parse(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class SafeToast {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.SafeToast>;
							public show(): void;
							public static makeText(param0: globalAndroid.content.Context, param1: string, param2: number): globalAndroid.widget.Toast;
							public constructor(param0: globalAndroid.content.Context);
							public static makeText(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.widget.Toast;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class SystemCurrentTimeProvider extends io.fabric.sdk.android.services.common.CurrentTimeProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.SystemCurrentTimeProvider>;
							public constructor();
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module common {
						export class TimingMetric {
							public static class: java.lang.Class<io.fabric.sdk.android.services.common.TimingMetric>;
							public stopMeasuring(): void;
							public constructor(param0: string, param1: string);
							public startMeasuring(): void;
							public getDuration(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export abstract class AsyncTask<Params, Progress, Result>  extends java.lang.Object {
							public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask>;
							public static THREAD_POOL_EXECUTOR: java.util.concurrent.Executor;
							public static SERIAL_EXECUTOR: java.util.concurrent.Executor;
							public constructor();
							public onPreExecute(): void;
							public onCancelled(): void;
							public cancel(param0: boolean): boolean;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): Result;
							public isCancelled(): boolean;
							public get(): Result;
							public execute(param0: native.Array<Params>): io.fabric.sdk.android.services.concurrency.AsyncTask<Params,Progress,Result>;
							public onPostExecute(param0: Result): void;
							public executeOnExecutor(param0: java.util.concurrent.Executor, param1: native.Array<Params>): io.fabric.sdk.android.services.concurrency.AsyncTask<Params,Progress,Result>;
							public getStatus(): io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
							public static setDefaultExecutor(param0: java.util.concurrent.Executor): void;
							public onCancelled(param0: Result): void;
							public static init(): void;
							public publishProgress(param0: native.Array<Progress>): void;
							public onProgressUpdate(param0: native.Array<Progress>): void;
							public static execute(param0: java.lang.Runnable): void;
							public doInBackground(param0: native.Array<Params>): Result;
						}
						export module AsyncTask {
							export class AsyncTaskResult<Data>  extends java.lang.Object {
								public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask.AsyncTaskResult>;
							}
							export class InternalHandler {
								public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask.InternalHandler>;
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor();
							}
							export class SerialExecutor {
								public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask.SerialExecutor>;
								public scheduleNext(): void;
								public execute(param0: java.lang.Runnable): void;
							}
							export class Status {
								public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask.Status>;
								public static PENDING: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static RUNNING: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static FINISHED: io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
								public static values(): native.Array<io.fabric.sdk.android.services.concurrency.AsyncTask.Status>;
								public static valueOf(param0: string): io.fabric.sdk.android.services.concurrency.AsyncTask.Status;
							}
							export abstract class WorkerRunnable<Params, Result>  extends java.util.concurrent.Callable<any> {
								public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.AsyncTask.WorkerRunnable>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class DelegateProvider {
							public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.DelegateProvider>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.DelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
							});
							public constructor();
							public getDelegate(): io.fabric.sdk.android.services.concurrency.Dependency;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module fabric {
		export module sdk {
			export module android {
				export module services {
					export module concurrency {
						export class Dependency<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.fabric.sdk.android.services.concurrency.Dependency>;
							/**
							 * Constructs a new instance of the io.fabric.sdk.android.services.concurrency.Dependency interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								addDependency(param0: T): void;
								getDependencies(): java.util.Collection<T>;
								areDependenciesMet(): boolean;
							});
							public constructor();
							public getDependencies(): java.util.Collection<T>;
							public addDependency(param0: T): void;
							public areDependenciesMet(): boolean;
						}
					}
				}
			}
		}
	}
}

