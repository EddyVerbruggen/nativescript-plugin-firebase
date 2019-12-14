/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.database.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ChildEventListener {
					public static class: java.lang.Class<com.google.firebase.database.ChildEventListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ChildEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
						onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
						onChildRemoved(param0: com.google.firebase.database.DataSnapshot): void;
						onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
						onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					});
					public constructor();
					public onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
					public onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					public onChildRemoved(param0: com.google.firebase.database.DataSnapshot): void;
					public onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
					public onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DataSnapshot {
					public static class: java.lang.Class<com.google.firebase.database.DataSnapshot>;
					public getValue(): any;
					public child(param0: string): com.google.firebase.database.DataSnapshot;
					public getRef(): com.google.firebase.database.DatabaseReference;
					public getChildrenCount(): number;
					public getValue(param0: java.lang.Class): any;
					public getValue(param0: com.google.firebase.database.GenericTypeIndicator<any>): any;
					public exists(): boolean;
					public getKey(): string;
					public getPriority(): any;
					public hasChild(param0: string): boolean;
					public toString(): string;
					public getChildren(): java.lang.Iterable<com.google.firebase.database.DataSnapshot>;
					public getValue(param0: boolean): any;
					public hasChildren(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseError {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseError>;
					public static DATA_STALE: number;
					public static OPERATION_FAILED: number;
					public static PERMISSION_DENIED: number;
					public static DISCONNECTED: number;
					public static EXPIRED_TOKEN: number;
					public static INVALID_TOKEN: number;
					public static MAX_RETRIES: number;
					public static OVERRIDDEN_BY_SET: number;
					public static UNAVAILABLE: number;
					public static USER_CODE_EXCEPTION: number;
					public static NETWORK_ERROR: number;
					public static WRITE_CANCELED: number;
					public static UNKNOWN_ERROR: number;
					public static fromStatus(param0: string): com.google.firebase.database.DatabaseError;
					public toString(): string;
					public static fromStatus(param0: string, param1: string, param2: string): com.google.firebase.database.DatabaseError;
					public static fromCode(param0: number): com.google.firebase.database.DatabaseError;
					public static fromException(param0: java.lang.Throwable): com.google.firebase.database.DatabaseError;
					public getMessage(): string;
					public toException(): com.google.firebase.database.DatabaseException;
					public static fromStatus(param0: string, param1: string): com.google.firebase.database.DatabaseError;
					public getDetails(): string;
					public getCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseException {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseReference extends com.google.firebase.database.Query {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseReference>;
					public runTransaction(param0: com.google.firebase.database.Transaction.Handler, param1: boolean): void;
					public getDatabase(): com.google.firebase.database.FirebaseDatabase;
					public static goOffline(): void;
					public getRoot(): com.google.firebase.database.DatabaseReference;
					public setPriority(param0: any, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public updateChildren(param0: java.util.Map<string,any>, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(param0: any, param1: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getKey(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public getParent(): com.google.firebase.database.DatabaseReference;
					public removeValue(param0: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public onDisconnect(): com.google.firebase.database.OnDisconnect;
					public setValue(param0: any, param1: any, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setPriority(param0: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public removeValue(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public static goOnline(): void;
					public setValue(param0: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updateChildren(param0: java.util.Map<string,any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public runTransaction(param0: com.google.firebase.database.Transaction.Handler): void;
					public hashCode(): number;
					public child(param0: string): com.google.firebase.database.DatabaseReference;
					public push(): com.google.firebase.database.DatabaseReference;
					public setValue(param0: any, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
				}
				export module DatabaseReference {
					export class CompletionListener {
						public static class: java.lang.Class<com.google.firebase.database.DatabaseReference.CompletionListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.DatabaseReference$CompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.google.firebase.database.DatabaseError, param1: com.google.firebase.database.DatabaseReference): void;
						});
						public constructor();
						public onComplete(param0: com.google.firebase.database.DatabaseError, param1: com.google.firebase.database.DatabaseReference): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseRegistrar {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Exclude {
					public static class: java.lang.Class<com.google.firebase.database.Exclude>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.Exclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class FirebaseDatabase {
					public static class: java.lang.Class<com.google.firebase.database.FirebaseDatabase>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.database.FirebaseDatabase;
					public setLogLevel(param0: com.google.firebase.database.Logger.Level): void;
					public getReferenceFromUrl(param0: string): com.google.firebase.database.DatabaseReference;
					public getReference(): com.google.firebase.database.DatabaseReference;
					public purgeOutstandingWrites(): void;
					public goOffline(): void;
					public static getInstance(): com.google.firebase.database.FirebaseDatabase;
					public getReference(param0: string): com.google.firebase.database.DatabaseReference;
					public static getInstance(param0: string): com.google.firebase.database.FirebaseDatabase;
					public getApp(): com.google.firebase.FirebaseApp;
					public static getInstance(param0: com.google.firebase.FirebaseApp, param1: string): com.google.firebase.database.FirebaseDatabase;
					public goOnline(): void;
					public setPersistenceCacheSizeBytes(param0: number): void;
					public static getSdkVersion(): string;
					public setPersistenceEnabled(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class FirebaseDatabaseComponent {
					public static class: java.lang.Class<com.google.firebase.database.FirebaseDatabaseComponent>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export abstract class GenericTypeIndicator<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.database.GenericTypeIndicator<any>>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class IgnoreExtraProperties {
					public static class: java.lang.Class<com.google.firebase.database.IgnoreExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.IgnoreExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class InternalHelpers {
					public static class: java.lang.Class<com.google.firebase.database.InternalHelpers>;
					public constructor();
					public static createDatabaseForTests(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.database.core.RepoInfo, param2: com.google.firebase.database.core.DatabaseConfig): com.google.firebase.database.FirebaseDatabase;
					public static createDataSnapshot(param0: com.google.firebase.database.DatabaseReference, param1: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.DataSnapshot;
					public static createReference(param0: com.google.firebase.database.core.Repo, param1: com.google.firebase.database.core.Path): com.google.firebase.database.DatabaseReference;
					public static createMutableData(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.MutableData;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Logger {
					public static class: java.lang.Class<com.google.firebase.database.Logger>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module Logger {
					export class Level {
						public static class: java.lang.Class<com.google.firebase.database.Logger.Level>;
						public static DEBUG: com.google.firebase.database.Logger.Level;
						public static INFO: com.google.firebase.database.Logger.Level;
						public static WARN: com.google.firebase.database.Logger.Level;
						public static ERROR: com.google.firebase.database.Logger.Level;
						public static NONE: com.google.firebase.database.Logger.Level;
						public static valueOf(param0: string): com.google.firebase.database.Logger.Level;
						public static values(): native.Array<com.google.firebase.database.Logger.Level>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class MutableData {
					public static class: java.lang.Class<com.google.firebase.database.MutableData>;
					public getValue(): any;
					public getChildren(): java.lang.Iterable<com.google.firebase.database.MutableData>;
					public setValue(param0: any): void;
					public getChildrenCount(): number;
					public getValue(param0: java.lang.Class): any;
					public setPriority(param0: any): void;
					public getValue(param0: com.google.firebase.database.GenericTypeIndicator<any>): any;
					public child(param0: string): com.google.firebase.database.MutableData;
					public getKey(): string;
					public getPriority(): any;
					public equals(param0: any): boolean;
					public hasChild(param0: string): boolean;
					public toString(): string;
					public hasChildren(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class OnDisconnect {
					public static class: java.lang.Class<com.google.firebase.database.OnDisconnect>;
					public setValue(param0: any, param1: number, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public updateChildren(param0: java.util.Map<string,any>, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(param0: any, param1: java.util.Map, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public cancel(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public removeValue(param0: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public removeValue(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(param0: any, param1: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(param0: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(param0: any, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updateChildren(param0: java.util.Map<string,any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public cancel(param0: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(param0: any, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(param0: any, param1: string, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class PropertyName {
					public static class: java.lang.Class<com.google.firebase.database.PropertyName>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.PropertyName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Query {
					public static class: java.lang.Class<com.google.firebase.database.Query>;
					public repo: com.google.firebase.database.core.Repo;
					public path: com.google.firebase.database.core.Path;
					public params: com.google.firebase.database.core.view.QueryParams;
					public removeEventListener(param0: com.google.firebase.database.ValueEventListener): void;
					public endAt(param0: number, param1: string): com.google.firebase.database.Query;
					public keepSynced(param0: boolean): void;
					public equalTo(param0: boolean, param1: string): com.google.firebase.database.Query;
					public endAt(param0: string): com.google.firebase.database.Query;
					public startAt(param0: string, param1: string): com.google.firebase.database.Query;
					public endAt(param0: boolean): com.google.firebase.database.Query;
					public startAt(param0: number, param1: string): com.google.firebase.database.Query;
					public startAt(param0: number): com.google.firebase.database.Query;
					public limitToFirst(param0: number): com.google.firebase.database.Query;
					public startAt(param0: string): com.google.firebase.database.Query;
					public equalTo(param0: number, param1: string): com.google.firebase.database.Query;
					public orderByChild(param0: string): com.google.firebase.database.Query;
					public equalTo(param0: number): com.google.firebase.database.Query;
					public getPath(): com.google.firebase.database.core.Path;
					public equalTo(param0: string): com.google.firebase.database.Query;
					public endAt(param0: string, param1: string): com.google.firebase.database.Query;
					public orderByPriority(): com.google.firebase.database.Query;
					public endAt(param0: boolean, param1: string): com.google.firebase.database.Query;
					public getRef(): com.google.firebase.database.DatabaseReference;
					public limitToLast(param0: number): com.google.firebase.database.Query;
					public addListenerForSingleValueEvent(param0: com.google.firebase.database.ValueEventListener): void;
					public equalTo(param0: string, param1: string): com.google.firebase.database.Query;
					public getRepo(): com.google.firebase.database.core.Repo;
					public addChildEventListener(param0: com.google.firebase.database.ChildEventListener): com.google.firebase.database.ChildEventListener;
					public equalTo(param0: boolean): com.google.firebase.database.Query;
					public addValueEventListener(param0: com.google.firebase.database.ValueEventListener): com.google.firebase.database.ValueEventListener;
					public startAt(param0: boolean): com.google.firebase.database.Query;
					public removeEventListener(param0: com.google.firebase.database.ChildEventListener): void;
					public orderByValue(): com.google.firebase.database.Query;
					public endAt(param0: number): com.google.firebase.database.Query;
					public orderByKey(): com.google.firebase.database.Query;
					public getSpec(): com.google.firebase.database.core.view.QuerySpec;
					public startAt(param0: boolean, param1: string): com.google.firebase.database.Query;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ServerValue {
					public static class: java.lang.Class<com.google.firebase.database.ServerValue>;
					public static TIMESTAMP: java.util.Map<string,string>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ThrowOnExtraProperties {
					public static class: java.lang.Class<com.google.firebase.database.ThrowOnExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ThrowOnExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Transaction {
					public static class: java.lang.Class<com.google.firebase.database.Transaction>;
					public constructor();
					public static success(param0: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result;
					public static abort(): com.google.firebase.database.Transaction.Result;
				}
				export module Transaction {
					export class Handler {
						public static class: java.lang.Class<com.google.firebase.database.Transaction.Handler>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.Transaction$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							doTransaction(param0: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result;
							onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void;
						});
						public constructor();
						public onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void;
						public doTransaction(param0: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result;
					}
					export class Result {
						public static class: java.lang.Class<com.google.firebase.database.Transaction.Result>;
						public isSuccess(): boolean;
						public getNode(): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ValueEventListener {
					public static class: java.lang.Class<com.google.firebase.database.ValueEventListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ValueEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDataChange(param0: com.google.firebase.database.DataSnapshot): void;
						onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					});
					public constructor();
					public onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					public onDataChange(param0: com.google.firebase.database.DataSnapshot): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export abstract class AndroidAuthTokenProvider extends com.google.firebase.database.core.AuthTokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidAuthTokenProvider>;
						public static forUnauthenticatedAccess(): com.google.firebase.database.core.AuthTokenProvider;
						public constructor();
						public static forAuthenticatedAccess(param0: com.google.firebase.auth.internal.InternalAuthProvider): com.google.firebase.database.core.AuthTokenProvider;
						public removeTokenChangeListener(param0: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
						public getToken(param0: boolean, param1: com.google.firebase.database.core.AuthTokenProvider.GetTokenCompletionListener): void;
						public addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidEventTarget extends com.google.firebase.database.core.EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidEventTarget>;
						public constructor();
						public shutdown(): void;
						public postEvent(param0: java.lang.Runnable): void;
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidPlatform extends com.google.firebase.database.core.Platform {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidPlatform>;
						public newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
						public getUserAgent(param0: com.google.firebase.database.core.Context): string;
						public createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
						public newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
						public newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class SqlPersistenceStorageEngine extends com.google.firebase.database.core.persistence.PersistenceStorageEngine {
						public static class: java.lang.Class<com.google.firebase.database.android.SqlPersistenceStorageEngine>;
						public updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						public close(): void;
						public loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
						public loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
						public serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public beginTransaction(): void;
						public serverCacheEstimatedSizeInBytes(): number;
						public deleteTrackedQuery(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.database.core.Context, param2: string);
						public setTransactionSuccessful(): void;
						public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
						public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
						public overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						public removeAllUserWrites(): void;
						public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
						public resetPreviouslyActiveTrackedQueries(param0: number): void;
						public purgeCache(): void;
						public endTransaction(): void;
						public loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
						public removeUserWrite(param0: number): void;
						public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
					}
					export module SqlPersistenceStorageEngine {
						export class PersistentCacheOpenHelper {
							public static class: java.lang.Class<com.google.firebase.database.android.SqlPersistenceStorageEngine.PersistentCacheOpenHelper>;
							public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
							public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module annotations {
					export class NotNull {
						public static class: java.lang.Class<com.google.firebase.database.annotations.NotNull>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.annotations.NotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module annotations {
					export class Nullable {
						public static class: java.lang.Class<com.google.firebase.database.annotations.Nullable>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class CompoundHash {
						public static class: java.lang.Class<com.google.firebase.database.connection.CompoundHash>;
						public getPosts(): java.util.List<java.util.List<string>>;
						public constructor(param0: java.util.List<java.util.List<string>>, param1: java.util.List<string>);
						public getHashes(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class Connection extends com.google.firebase.database.connection.WebsocketConnection.Delegate {
						public static class: java.lang.Class<com.google.firebase.database.connection.Connection>;
						public close(): void;
						public sendRequest(param0: java.util.Map<string,any>, param1: boolean): void;
						public open(): void;
						public onMessage(param0: java.util.Map<string,any>): void;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: com.google.firebase.database.connection.HostInfo, param2: string, param3: com.google.firebase.database.connection.Connection.Delegate, param4: string);
						public onDisconnect(param0: boolean): void;
						public injectConnectionFailure(): void;
						public close(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
					}
					export module Connection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.Connection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCacheHost(param0: string): void;
								onReady(param0: number, param1: string): void;
								onDataMessage(param0: java.util.Map<string,any>): void;
								onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
								onKill(param0: string): void;
							});
							public constructor();
							public onReady(param0: number, param1: string): void;
							public onKill(param0: string): void;
							public onCacheHost(param0: string): void;
							public onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
							public onDataMessage(param0: java.util.Map<string,any>): void;
						}
						export class DisconnectReason {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.DisconnectReason>;
							public static SERVER_RESET: com.google.firebase.database.connection.Connection.DisconnectReason;
							public static OTHER: com.google.firebase.database.connection.Connection.DisconnectReason;
							public static valueOf(param0: string): com.google.firebase.database.connection.Connection.DisconnectReason;
							public static values(): native.Array<com.google.firebase.database.connection.Connection.DisconnectReason>;
						}
						export class State {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.State>;
							public static REALTIME_CONNECTING: com.google.firebase.database.connection.Connection.State;
							public static REALTIME_CONNECTED: com.google.firebase.database.connection.Connection.State;
							public static REALTIME_DISCONNECTED: com.google.firebase.database.connection.Connection.State;
							public static values(): native.Array<com.google.firebase.database.connection.Connection.State>;
							public static valueOf(param0: string): com.google.firebase.database.connection.Connection.State;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ConnectionAuthTokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionAuthTokenProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.ConnectionAuthTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getToken(param0: boolean, param1: com.google.firebase.database.connection.ConnectionAuthTokenProvider.GetTokenCallback): void;
						});
						public constructor();
						public getToken(param0: boolean, param1: com.google.firebase.database.connection.ConnectionAuthTokenProvider.GetTokenCallback): void;
					}
					export module ConnectionAuthTokenProvider {
						export class GetTokenCallback {
							public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionAuthTokenProvider.GetTokenCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.ConnectionAuthTokenProvider$GetTokenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: string): void;
								onError(param0: string): void;
							});
							public constructor();
							public onError(param0: string): void;
							public onSuccess(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ConnectionContext {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionContext>;
						public constructor(param0: com.google.firebase.database.logging.Logger, param1: com.google.firebase.database.connection.ConnectionAuthTokenProvider, param2: java.util.concurrent.ScheduledExecutorService, param3: boolean, param4: string, param5: string, param6: string);
						public isPersistenceEnabled(): boolean;
						public getAuthTokenProvider(): com.google.firebase.database.connection.ConnectionAuthTokenProvider;
						public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
						public getUserAgent(): string;
						public getLogger(): com.google.firebase.database.logging.Logger;
						public getClientSdkVersion(): string;
						public getSslCacheDirectory(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ConnectionUtils {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionUtils>;
						public constructor();
						public static pathToString(param0: java.util.List<string>): string;
						public static hardAssert(param0: boolean): void;
						public static longFromObject(param0: any): java.lang.Long;
						public static stringToPath(param0: string): java.util.List<string>;
						public static hardAssert(param0: boolean, param1: string, param2: native.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class Constants {
						public static class: java.lang.Class<com.google.firebase.database.connection.Constants>;
						public static DOT_INFO_SERVERTIME_OFFSET: string;
						public static WIRE_PROTOCOL_VERSION: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class HostInfo {
						public static class: java.lang.Class<com.google.firebase.database.connection.HostInfo>;
						public static getConnectionUrl(param0: string, param1: boolean, param2: string, param3: string): java.net.URI;
						public isSecure(): boolean;
						public getHost(): string;
						public constructor(param0: string, param1: string, param2: boolean);
						public toString(): string;
						public getNamespace(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ListenHashProvider {
						public static class: java.lang.Class<com.google.firebase.database.connection.ListenHashProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.ListenHashProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSimpleHash(): string;
							shouldIncludeCompoundHash(): boolean;
							getCompoundHash(): com.google.firebase.database.connection.CompoundHash;
						});
						public constructor();
						public shouldIncludeCompoundHash(): boolean;
						public getSimpleHash(): string;
						public getCompoundHash(): com.google.firebase.database.connection.CompoundHash;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class PersistentConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnection>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(): void;
							shutdown(): void;
							refreshAuthToken(): void;
							refreshAuthToken(param0: string): void;
							listen(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
							unlisten(param0: java.util.List<string>, param1: java.util.Map<string,any>): void;
							purgeOutstandingWrites(): void;
							put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
							merge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
							interrupt(param0: string): void;
							resume(param0: string): void;
							isInterrupted(param0: string): boolean;
						});
						public constructor();
						public onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
						public put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public unlisten(param0: java.util.List<string>, param1: java.util.Map<string,any>): void;
						public isInterrupted(param0: string): boolean;
						public refreshAuthToken(): void;
						public onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public listen(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
						public shutdown(): void;
						public purgeOutstandingWrites(): void;
						public resume(param0: string): void;
						public refreshAuthToken(param0: string): void;
						public interrupt(param0: string): void;
						public initialize(): void;
						public compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
						public onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public merge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
					}
					export module PersistentConnection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void;
								onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void;
								onConnect(): void;
								onDisconnect(): void;
								onAuthStatus(param0: boolean): void;
								onServerInfoUpdate(param0: java.util.Map<string,any>): void;
							});
							public constructor();
							public onServerInfoUpdate(param0: java.util.Map<string,any>): void;
							public onAuthStatus(param0: boolean): void;
							public onConnect(): void;
							public onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void;
							public onDisconnect(): void;
							public onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class PersistentConnectionImpl implements com.google.firebase.database.connection.Connection.Delegate, com.google.firebase.database.connection.PersistentConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl>;
						public onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
						public onReady(param0: number, param1: string): void;
						public put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public unlisten(param0: java.util.List<string>, param1: java.util.Map<string,any>): void;
						public isInterrupted(param0: string): boolean;
						public onDataMessage(param0: java.util.Map<string,any>): void;
						public refreshAuthToken(): void;
						public onKill(param0: string): void;
						public onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public onCacheHost(param0: string): void;
						public listen(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
						public openNetworkConnection(param0: string): void;
						public injectConnectionFailure(): void;
						public shutdown(): void;
						public purgeOutstandingWrites(): void;
						public resume(param0: string): void;
						public onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
						public interrupt(param0: string): void;
						public refreshAuthToken(param0: string): void;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: com.google.firebase.database.connection.HostInfo, param2: com.google.firebase.database.connection.PersistentConnection.Delegate);
						public initialize(): void;
						public compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
						public onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public merge(param0: java.util.List<string>, param1: java.util.Map<string,any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
					}
					export module PersistentConnectionImpl {
						export class ConnectionRequestCallback {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionRequestCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnectionImpl$ConnectionRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResponse(param0: java.util.Map<string,any>): void;
							});
							public constructor();
							public onResponse(param0: java.util.Map<string,any>): void;
						}
						export class ConnectionState {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState>;
							public static Disconnected: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static GettingToken: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Connecting: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Authenticating: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Connected: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static values(): native.Array<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState>;
							public static valueOf(param0: string): com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
						}
						export class ListenQuerySpec {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.ListenQuerySpec>;
							public constructor(param0: java.util.List<string>, param1: java.util.Map<string,any>);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OutstandingDisconnect {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingDisconnect>;
							public getPath(): java.util.List<string>;
							public getOnComplete(): com.google.firebase.database.connection.RequestResultCallback;
							public getAction(): string;
							public getData(): any;
						}
						export class OutstandingListen {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingListen>;
							public getHashFunction(): com.google.firebase.database.connection.ListenHashProvider;
							public toString(): string;
							public getQuery(): com.google.firebase.database.connection.PersistentConnectionImpl.ListenQuerySpec;
							public getTag(): java.lang.Long;
						}
						export class OutstandingPut {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingPut>;
							public wasSent(): boolean;
							public getOnComplete(): com.google.firebase.database.connection.RequestResultCallback;
							public getAction(): string;
							public markSent(): void;
							public getRequest(): java.util.Map<string,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class RangeMerge {
						public static class: java.lang.Class<com.google.firebase.database.connection.RangeMerge>;
						public getOptExclusiveStart(): java.util.List<string>;
						public getOptInclusiveEnd(): java.util.List<string>;
						public getSnap(): any;
						public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class RequestResultCallback {
						public static class: java.lang.Class<com.google.firebase.database.connection.RequestResultCallback>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.RequestResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRequestResult(param0: string, param1: string): void;
						});
						public constructor();
						public onRequestResult(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class WebsocketConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection>;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: com.google.firebase.database.connection.HostInfo, param2: string, param3: com.google.firebase.database.connection.WebsocketConnection.Delegate, param4: string);
						public send(param0: java.util.Map<string,any>): void;
						public start(): void;
						public close(): void;
						public open(): void;
					}
					export module WebsocketConnection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.WebsocketConnection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMessage(param0: java.util.Map<string,any>): void;
								onDisconnect(param0: boolean): void;
							});
							public constructor();
							public onMessage(param0: java.util.Map<string,any>): void;
							public onDisconnect(param0: boolean): void;
						}
						export class WSClient {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.WSClient>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.WebsocketConnection$WSClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								connect(): void;
								close(): void;
								send(param0: string): void;
							});
							public constructor();
							public close(): void;
							public send(param0: string): void;
							public connect(): void;
						}
						export class WSClientTubesock implements com.google.firebase.database.connection.WebsocketConnection.WSClient, com.google.firebase.database.tubesock.WebSocketEventHandler {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.WSClientTubesock>;
							public onClose(): void;
							public send(param0: string): void;
							public close(): void;
							public onLogMessage(param0: string): void;
							public onOpen(): void;
							public connect(): void;
							public onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void;
							public onError(param0: com.google.firebase.database.tubesock.WebSocketException): void;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export module util {
						export class RetryHelper {
							public static class: java.lang.Class<com.google.firebase.database.connection.util.RetryHelper>;
							public setMaxDelay(): void;
							public cancel(): void;
							public retry(param0: java.lang.Runnable): void;
							public signalSuccess(): void;
						}
						export module RetryHelper {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.database.connection.util.RetryHelper.Builder>;
								public withRetryExponent(param0: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public build(): com.google.firebase.database.connection.util.RetryHelper;
								public constructor(param0: java.util.concurrent.ScheduledExecutorService, param1: com.google.firebase.database.logging.Logger, param2: string);
								public withJitterFactor(param0: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public withMaxDelay(param0: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public withMinDelayAfterFailure(param0: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export module util {
						export class StringListReader {
							public static class: java.lang.Class<com.google.firebase.database.connection.util.StringListReader>;
							public constructor();
							public skip(param0: number): number;
							public close(): void;
							public read(): number;
							public toString(): string;
							public reset(): void;
							public mark(param0: number): void;
							public markSupported(): boolean;
							public read(param0: native.Array<string>, param1: number, param2: number): number;
							public freeze(): void;
							public ready(): boolean;
							public addString(param0: string): void;
							public read(param0: java.nio.CharBuffer): number;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class AuthTokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.core.AuthTokenProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.AuthTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getToken(param0: boolean, param1: com.google.firebase.database.core.AuthTokenProvider.GetTokenCompletionListener): void;
							addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
							removeTokenChangeListener(param0: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
						});
						public constructor();
						public removeTokenChangeListener(param0: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
						public getToken(param0: boolean, param1: com.google.firebase.database.core.AuthTokenProvider.GetTokenCompletionListener): void;
						public addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener): void;
					}
					export module AuthTokenProvider {
						export class GetTokenCompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.AuthTokenProvider.GetTokenCompletionListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.AuthTokenProvider$GetTokenCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: string): void;
								onError(param0: string): void;
							});
							public constructor();
							public onError(param0: string): void;
							public onSuccess(param0: string): void;
						}
						export class TokenChangeListener {
							public static class: java.lang.Class<com.google.firebase.database.core.AuthTokenProvider.TokenChangeListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.AuthTokenProvider$TokenChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTokenChange(param0: string): void;
								onTokenChange(): void;
							});
							public constructor();
							public onTokenChange(param0: string): void;
							public onTokenChange(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ChildEventRegistration extends com.google.firebase.database.core.EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.ChildEventRegistration>;
						public constructor(param0: com.google.firebase.database.core.Repo, param1: com.google.firebase.database.ChildEventListener, param2: com.google.firebase.database.core.view.QuerySpec);
						public respondsTo(param0: com.google.firebase.database.core.view.Event.EventType): boolean;
						public fireEvent(param0: com.google.firebase.database.core.view.DataEvent): void;
						public constructor();
						public isSameListener(param0: com.google.firebase.database.core.EventRegistration): boolean;
						public createEvent(param0: com.google.firebase.database.core.view.Change, param1: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public clone(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public fireCancelEvent(param0: com.google.firebase.database.DatabaseError): void;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class CompoundWrite extends java.lang.Iterable<java.util.Map.Entry<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>> {
						public static class: java.lang.Class<com.google.firebase.database.core.CompoundWrite>;
						public static fromPathMerge(param0: java.util.Map<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>): com.google.firebase.database.core.CompoundWrite;
						public childCompoundWrites(): java.util.Map<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.core.CompoundWrite>;
						public hasCompleteWrite(param0: com.google.firebase.database.core.Path): boolean;
						public rootWrite(): com.google.firebase.database.snapshot.Node;
						public childCompoundWrite(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.CompoundWrite;
						public addWrite(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.CompoundWrite;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public iterator(): java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>>;
						public removeWrite(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.CompoundWrite;
						public static fromValue(param0: java.util.Map<string,any>): com.google.firebase.database.core.CompoundWrite;
						public getValue(param0: boolean): java.util.Map<string,any>;
						public toString(): string;
						public addWrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.CompoundWrite;
						public static fromChildMerge(param0: java.util.Map<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.snapshot.Node>): com.google.firebase.database.core.CompoundWrite;
						public static emptyWrite(): com.google.firebase.database.core.CompoundWrite;
						public getCompleteNode(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getCompleteChildren(): java.util.List<com.google.firebase.database.snapshot.NamedNode>;
						public apply(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public addWrites(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): com.google.firebase.database.core.CompoundWrite;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Constants {
						public static class: java.lang.Class<com.google.firebase.database.core.Constants>;
						public static DOT_INFO: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_SERVERTIME_OFFSET: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_AUTHENTICATED: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_CONNECTED: com.google.firebase.database.snapshot.ChildKey;
						public static WIRE_PROTOCOL_VERSION: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Context {
						public static class: java.lang.Class<com.google.firebase.database.core.Context>;
						public logger: com.google.firebase.database.logging.Logger;
						public eventTarget: com.google.firebase.database.core.EventTarget;
						public authTokenProvider: com.google.firebase.database.core.AuthTokenProvider;
						public runLoop: com.google.firebase.database.core.RunLoop;
						public persistenceKey: string;
						public loggedComponents: java.util.List<string>;
						public userAgent: string;
						public logLevel: com.google.firebase.database.logging.Logger.Level;
						public persistenceEnabled: boolean;
						public cacheSize: number;
						public firebaseApp: com.google.firebase.FirebaseApp;
						public getOptDebugLogComponents(): java.util.List<string>;
						public getLogger(param0: string): com.google.firebase.database.logging.LogWrapper;
						public getPersistenceCacheSizeBytes(): number;
						public getRunLoop(): com.google.firebase.database.core.RunLoop;
						public constructor();
						public isPersistenceEnabled(): boolean;
						public isStopped(): boolean;
						public getAuthTokenProvider(): com.google.firebase.database.core.AuthTokenProvider;
						public getUserAgent(): string;
						public getConnectionContext(): com.google.firebase.database.connection.ConnectionContext;
						public getLogger(): com.google.firebase.database.logging.Logger;
						public getSessionPersistenceKey(): string;
						public requireStarted(): void;
						public newPersistentConnection(param0: com.google.firebase.database.connection.HostInfo, param1: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public getEventTarget(): com.google.firebase.database.core.EventTarget;
						public assertUnfrozen(): void;
						public getLogger(param0: string, param1: string): com.google.firebase.database.logging.LogWrapper;
						public isFrozen(): boolean;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class DatabaseConfig extends com.google.firebase.database.core.Context {
						public static class: java.lang.Class<com.google.firebase.database.core.DatabaseConfig>;
						public constructor();
						public setLogger(param0: com.google.firebase.database.logging.Logger): void;
						public setSessionPersistenceKey(param0: string): void;
						public setPersistenceCacheSizeBytes(param0: number): void;
						public setFirebaseApp(param0: com.google.firebase.FirebaseApp): void;
						public setAuthTokenProvider(param0: com.google.firebase.database.core.AuthTokenProvider): void;
						public setPersistenceEnabled(param0: boolean): void;
						public setDebugLogComponents(param0: java.util.List<string>): void;
						public setLogLevel(param0: com.google.firebase.database.Logger.Level): void;
						public setEventTarget(param0: com.google.firebase.database.core.EventTarget): void;
						public setRunLoop(param0: com.google.firebase.database.core.RunLoop): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export abstract class EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.EventRegistration>;
						public respondsTo(param0: com.google.firebase.database.core.view.Event.EventType): boolean;
						public constructor();
						public isSameListener(param0: com.google.firebase.database.core.EventRegistration): boolean;
						public createEvent(param0: com.google.firebase.database.core.view.Change, param1: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public clone(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public setOnZombied(param0: com.google.firebase.database.core.EventRegistrationZombieListener): void;
						public isUserInitiated(): boolean;
						public fireCancelEvent(param0: com.google.firebase.database.DatabaseError): void;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public fireEvent(param0: com.google.firebase.database.core.view.DataEvent): void;
						public isZombied(): boolean;
						public setIsUserInitiated(param0: boolean): void;
						public zombify(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class EventRegistrationZombieListener {
						public static class: java.lang.Class<com.google.firebase.database.core.EventRegistrationZombieListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.EventRegistrationZombieListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onZombied(param0: com.google.firebase.database.core.EventRegistration): void;
						});
						public constructor();
						public onZombied(param0: com.google.firebase.database.core.EventRegistration): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.core.EventTarget>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.EventTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							postEvent(param0: java.lang.Runnable): void;
							shutdown(): void;
							restart(): void;
						});
						public constructor();
						public shutdown(): void;
						public postEvent(param0: java.lang.Runnable): void;
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Path extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.database.core.Path>;
						public child(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.Path;
						public wireFormat(): string;
						public static getRelative(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: native.Array<com.google.firebase.database.snapshot.ChildKey>);
						public toString(): string;
						public getParent(): com.google.firebase.database.core.Path;
						public getFront(): com.google.firebase.database.snapshot.ChildKey;
						public popFront(): com.google.firebase.database.core.Path;
						public isEmpty(): boolean;
						public contains(param0: com.google.firebase.database.core.Path): boolean;
						public static getEmptyPath(): com.google.firebase.database.core.Path;
						public constructor(param0: java.util.List<string>);
						public size(): number;
						public compareTo(param0: com.google.firebase.database.core.Path): number;
						public child(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
						public getBack(): com.google.firebase.database.snapshot.ChildKey;
						public asList(): java.util.List<string>;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.ChildKey>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Platform {
						public static class: java.lang.Class<com.google.firebase.database.core.Platform>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.Platform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
							newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
							newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
							newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
							getUserAgent(param0: com.google.firebase.database.core.Context): string;
							getPlatformVersion(): string;
							createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
							getSSLCacheDirectory(): java.io.File;
						});
						public constructor();
						public newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
						public getUserAgent(param0: com.google.firebase.database.core.Context): string;
						public createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
						public newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
						public newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Repo extends com.google.firebase.database.connection.PersistentConnection.Delegate {
						public static class: java.lang.Class<com.google.firebase.database.core.Repo>;
						public dataUpdateCount: number;
						public getDatabase(): com.google.firebase.database.FirebaseDatabase;
						public onServerInfoUpdate(param0: com.google.firebase.database.snapshot.ChildKey, param1: any): void;
						public onDisconnectCancel(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.DatabaseReference.CompletionListener): void;
						public onServerInfoUpdate(param0: java.util.Map<string,any>): void;
						public postEvent(param0: java.lang.Runnable): void;
						public onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void;
						public getRepoInfo(): com.google.firebase.database.core.RepoInfo;
						public getServerTime(): number;
						public toString(): string;
						public keepSynced(param0: com.google.firebase.database.core.view.QuerySpec, param1: boolean): void;
						public onDisconnect(): void;
						public addEventCallback(param0: com.google.firebase.database.core.EventRegistration): void;
						public setHijackHash(param0: boolean): void;
						public updateChildren(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: com.google.firebase.database.DatabaseReference.CompletionListener, param3: java.util.Map<string,any>): void;
						public purgeOutstandingWrites(): void;
						public onAuthStatus(param0: boolean): void;
						public startTransaction(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.Transaction.Handler, param2: boolean): void;
						public onDisconnectSetValue(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
						public onDisconnectUpdate(param0: com.google.firebase.database.core.Path, param1: java.util.Map<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>, param2: com.google.firebase.database.DatabaseReference.CompletionListener, param3: java.util.Map<string,any>): void;
						public onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void;
						public scheduleNow(param0: java.lang.Runnable): void;
						public onConnect(): void;
						public removeEventCallback(param0: com.google.firebase.database.core.EventRegistration): void;
						public setValue(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					}
					export module Repo {
						export class TransactionData extends java.lang.Comparable<com.google.firebase.database.core.Repo.TransactionData> {
							public static class: java.lang.Class<com.google.firebase.database.core.Repo.TransactionData>;
							public compareTo(param0: com.google.firebase.database.core.Repo.TransactionData): number;
						}
						export class TransactionStatus {
							public static class: java.lang.Class<com.google.firebase.database.core.Repo.TransactionStatus>;
							public static INITIALIZING: com.google.firebase.database.core.Repo.TransactionStatus;
							public static RUN: com.google.firebase.database.core.Repo.TransactionStatus;
							public static SENT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static COMPLETED: com.google.firebase.database.core.Repo.TransactionStatus;
							public static SENT_NEEDS_ABORT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static NEEDS_ABORT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static values(): native.Array<com.google.firebase.database.core.Repo.TransactionStatus>;
							public static valueOf(param0: string): com.google.firebase.database.core.Repo.TransactionStatus;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class RepoInfo {
						public static class: java.lang.Class<com.google.firebase.database.core.RepoInfo>;
						public host: string;
						public secure: boolean;
						public namespace: string;
						public internalHost: string;
						public constructor();
						public toDebugString(): string;
						public isSecure(): boolean;
						public isDemoHost(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public isCustomHost(): boolean;
						public toString(): string;
						public getConnectionURL(param0: string): java.net.URI;
						public isCacheableHost(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class RepoManager {
						public static class: java.lang.Class<com.google.firebase.database.core.RepoManager>;
						public static interrupt(param0: com.google.firebase.database.core.Context): void;
						public static resume(param0: com.google.firebase.database.core.Context): void;
						public constructor();
						public static resume(param0: com.google.firebase.database.core.Repo): void;
						public static interrupt(param0: com.google.firebase.database.core.Repo): void;
						public static getRepo(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.core.RepoInfo): com.google.firebase.database.core.Repo;
						public static createRepo(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.core.RepoInfo, param2: com.google.firebase.database.FirebaseDatabase): com.google.firebase.database.core.Repo;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class RunLoop {
						public static class: java.lang.Class<com.google.firebase.database.core.RunLoop>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.RunLoop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							scheduleNow(param0: java.lang.Runnable): void;
							schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture;
							shutdown(): void;
							restart(): void;
						});
						public constructor();
						public shutdown(): void;
						public scheduleNow(param0: java.lang.Runnable): void;
						public restart(): void;
						public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ServerValues {
						public static class: java.lang.Class<com.google.firebase.database.core.ServerValues>;
						public static NAME_SUBKEY_SERVERVALUE: string;
						public static generateServerValues(param0: com.google.firebase.database.core.utilities.Clock): java.util.Map<string,any>;
						public static resolveDeferredValueSnapshot(param0: com.google.firebase.database.snapshot.Node, param1: java.util.Map<string,any>): com.google.firebase.database.snapshot.Node;
						public constructor();
						public static resolveDeferredValueMerge(param0: com.google.firebase.database.core.CompoundWrite, param1: java.util.Map<string,any>): com.google.firebase.database.core.CompoundWrite;
						public static resolveDeferredValue(param0: any, param1: java.util.Map<string,any>): any;
						public static resolveDeferredValueTree(param0: com.google.firebase.database.core.SparseSnapshotTree, param1: java.util.Map<string,any>): com.google.firebase.database.core.SparseSnapshotTree;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SnapshotHolder {
						public static class: java.lang.Class<com.google.firebase.database.core.SnapshotHolder>;
						public getRootNode(): com.google.firebase.database.snapshot.Node;
						public constructor(param0: com.google.firebase.database.snapshot.Node);
						public getNode(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public update(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SparseSnapshotTree {
						public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree>;
						public constructor();
						public remember(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						public forget(param0: com.google.firebase.database.core.Path): boolean;
						public forEachChild(param0: com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotChildVisitor): void;
						public forEachTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotTreeVisitor): void;
					}
					export module SparseSnapshotTree {
						export class SparseSnapshotChildVisitor {
							public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotChildVisitor>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SparseSnapshotTree$SparseSnapshotChildVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.SparseSnapshotTree): void;
							});
							public constructor();
							public visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.SparseSnapshotTree): void;
						}
						export class SparseSnapshotTreeVisitor {
							public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotTreeVisitor>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SparseSnapshotTree$SparseSnapshotTreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								visitTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							});
							public constructor();
							public visitTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SyncPoint {
						public static class: java.lang.Class<com.google.firebase.database.core.SyncPoint>;
						public hasCompleteView(): boolean;
						public viewForQuery(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.View;
						public viewExistsForQuery(param0: com.google.firebase.database.core.view.QuerySpec): boolean;
						public addEventRegistration(param0: com.google.firebase.database.core.EventRegistration, param1: com.google.firebase.database.core.WriteTreeRef, param2: com.google.firebase.database.core.view.CacheNode): java.util.List<com.google.firebase.database.core.view.DataEvent>;
						public getCompleteView(): com.google.firebase.database.core.view.View;
						public removeEventRegistration(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.EventRegistration, param2: com.google.firebase.database.DatabaseError): com.google.firebase.database.core.utilities.Pair<java.util.List<com.google.firebase.database.core.view.QuerySpec>,java.util.List<com.google.firebase.database.core.view.Event>>;
						public constructor(param0: com.google.firebase.database.core.persistence.PersistenceManager);
						public isEmpty(): boolean;
						public applyOperation(param0: com.google.firebase.database.core.operation.Operation, param1: com.google.firebase.database.core.WriteTreeRef, param2: com.google.firebase.database.snapshot.Node): java.util.List<com.google.firebase.database.core.view.DataEvent>;
						public getCompleteServerCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public getQueryViews(): java.util.List<com.google.firebase.database.core.view.View>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SyncTree {
						public static class: java.lang.Class<com.google.firebase.database.core.SyncTree>;
						public applyTaggedQueryMerge(param0: com.google.firebase.database.core.Path, param1: java.util.Map<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>, param2: com.google.firebase.database.core.Tag): java.util.List<any>;
						public addEventRegistration(param0: com.google.firebase.database.core.EventRegistration): java.util.List<any>;
						public calcCompleteEventCache(param0: com.google.firebase.database.core.Path, param1: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public applyTaggedQueryOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.core.Tag): java.util.List<any>;
						public applyServerOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): java.util.List<any>;
						public applyUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: com.google.firebase.database.core.CompoundWrite, param3: number, param4: boolean): java.util.List<any>;
						public removeEventRegistration(param0: com.google.firebase.database.core.EventRegistration): java.util.List<com.google.firebase.database.core.view.Event>;
						public constructor(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.core.persistence.PersistenceManager, param2: com.google.firebase.database.core.SyncTree.ListenProvider);
						public applyListenComplete(param0: com.google.firebase.database.core.Path): java.util.List<any>;
						public keepSynced(param0: com.google.firebase.database.core.view.QuerySpec, param1: boolean): void;
						public applyUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.Node, param3: number, param4: boolean, param5: boolean): java.util.List<any>;
						public ackUserWrite(param0: number, param1: boolean, param2: boolean, param3: com.google.firebase.database.core.utilities.Clock): java.util.List<any>;
						public applyTaggedRangeMerges(param0: com.google.firebase.database.core.Path, param1: java.util.List<com.google.firebase.database.snapshot.RangeMerge>, param2: com.google.firebase.database.core.Tag): java.util.List<any>;
						public isEmpty(): boolean;
						public removeAllWrites(): java.util.List<any>;
						public applyServerMerge(param0: com.google.firebase.database.core.Path, param1: java.util.Map<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>): java.util.List<any>;
						public applyServerRangeMerges(param0: com.google.firebase.database.core.Path, param1: java.util.List<com.google.firebase.database.snapshot.RangeMerge>): java.util.List<any>;
						public removeAllEventRegistrations(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.DatabaseError): java.util.List<com.google.firebase.database.core.view.Event>;
						public applyTaggedListenComplete(param0: com.google.firebase.database.core.Tag): java.util.List<any>;
					}
					export module SyncTree {
						export class CompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.CompletionListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SyncTree$CompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any>;
							});
							public constructor();
							public onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any>;
						}
						export class KeepSyncedEventRegistration extends com.google.firebase.database.core.EventRegistration {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.KeepSyncedEventRegistration>;
							public constructor();
							public fireCancelEvent(param0: com.google.firebase.database.DatabaseError): void;
							public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
							public createEvent(param0: com.google.firebase.database.core.view.Change, param1: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
							public hashCode(): number;
							public fireEvent(param0: com.google.firebase.database.core.view.DataEvent): void;
							public isSameListener(param0: com.google.firebase.database.core.EventRegistration): boolean;
							public constructor(param0: com.google.firebase.database.core.view.QuerySpec);
							public clone(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
							public equals(param0: any): boolean;
							public respondsTo(param0: com.google.firebase.database.core.view.Event.EventType): boolean;
						}
						export class ListenContainer implements com.google.firebase.database.connection.ListenHashProvider, com.google.firebase.database.core.SyncTree.CompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.ListenContainer>;
							public onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any>;
							public constructor(param0: com.google.firebase.database.core.SyncTree, param1: com.google.firebase.database.core.view.View);
							public getSimpleHash(): string;
							public getCompoundHash(): com.google.firebase.database.connection.CompoundHash;
							public shouldIncludeCompoundHash(): boolean;
						}
						export class ListenProvider {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.ListenProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SyncTree$ListenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								startListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag, param2: com.google.firebase.database.connection.ListenHashProvider, param3: com.google.firebase.database.core.SyncTree.CompletionListener): void;
								stopListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag): void;
							});
							public constructor();
							public stopListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag): void;
							public startListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag, param2: com.google.firebase.database.connection.ListenHashProvider, param3: com.google.firebase.database.core.SyncTree.CompletionListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Tag {
						public static class: java.lang.Class<com.google.firebase.database.core.Tag>;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTagNumber(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ThreadBackgroundExecutor {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadBackgroundExecutor>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ThreadInitializer {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadInitializer>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.ThreadInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setName(param0: java.lang.Thread, param1: string): void;
							setDaemon(param0: java.lang.Thread, param1: boolean): void;
							setUncaughtExceptionHandler(param0: java.lang.Thread, param1: java.lang.Thread.UncaughtExceptionHandler): void;
							<clinit>(): void;
						});
						public constructor();
						public static defaultInstance: com.google.firebase.database.core.ThreadInitializer;
						public setName(param0: java.lang.Thread, param1: string): void;
						public setUncaughtExceptionHandler(param0: java.lang.Thread, param1: java.lang.Thread.UncaughtExceptionHandler): void;
						public setDaemon(param0: java.lang.Thread, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ThreadPoolEventTarget extends com.google.firebase.database.core.EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadPoolEventTarget>;
						public shutdown(): void;
						public constructor(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.database.core.ThreadInitializer);
						public postEvent(param0: java.lang.Runnable): void;
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class UserWriteRecord {
						public static class: java.lang.Class<com.google.firebase.database.core.UserWriteRecord>;
						public constructor(param0: number, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.snapshot.Node, param3: boolean);
						public isMerge(): boolean;
						public constructor(param0: number, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.core.CompoundWrite);
						public isVisible(): boolean;
						public getMerge(): com.google.firebase.database.core.CompoundWrite;
						public isOverwrite(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPath(): com.google.firebase.database.core.Path;
						public getOverwrite(): com.google.firebase.database.snapshot.Node;
						public getWriteId(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ValidationPath {
						public static class: java.lang.Class<com.google.firebase.database.core.ValidationPath>;
						public static MAX_PATH_LENGTH_BYTES: number;
						public static MAX_PATH_DEPTH: number;
						public static validateWithObject(param0: com.google.firebase.database.core.Path, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ValueEventRegistration extends com.google.firebase.database.core.EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.ValueEventRegistration>;
						public respondsTo(param0: com.google.firebase.database.core.view.Event.EventType): boolean;
						public fireEvent(param0: com.google.firebase.database.core.view.DataEvent): void;
						public constructor();
						public constructor(param0: com.google.firebase.database.core.Repo, param1: com.google.firebase.database.ValueEventListener, param2: com.google.firebase.database.core.view.QuerySpec);
						public isSameListener(param0: com.google.firebase.database.core.EventRegistration): boolean;
						public createEvent(param0: com.google.firebase.database.core.view.Change, param1: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public clone(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public fireCancelEvent(param0: com.google.firebase.database.DatabaseError): void;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class WriteTree {
						public static class: java.lang.Class<com.google.firebase.database.core.WriteTree>;
						public childWrites(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.WriteTreeRef;
						public constructor();
						public removeWrite(param0: number): boolean;
						public getCompleteWriteData(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public calcEventCacheAfterServerOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcCompleteChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.core.view.CacheNode): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: java.util.List<java.lang.Long>, param3: boolean): com.google.firebase.database.snapshot.Node;
						public calcNextNodeAfterPost(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.NamedNode, param3: boolean, param4: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.NamedNode;
						public calcCompleteEventCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public purgeAllWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
						public calcCompleteEventCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public getWrite(param0: number): com.google.firebase.database.core.UserWriteRecord;
						public addMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: java.lang.Long): void;
						public shadowingWrite(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventChildren(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public addOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: java.lang.Long, param3: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class WriteTreeRef {
						public static class: java.lang.Class<com.google.firebase.database.core.WriteTreeRef>;
						public calcNextNodeAfterPost(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean, param3: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.NamedNode;
						public calcCompleteEventCache(param0: com.google.firebase.database.snapshot.Node, param1: java.util.List<java.lang.Long>, param2: boolean): com.google.firebase.database.snapshot.Node;
						public constructor(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.WriteTree);
						public calcCompleteEventChildren(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcEventCacheAfterServerOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public shadowingWrite(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(param0: com.google.firebase.database.snapshot.Node, param1: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public child(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.WriteTreeRef;
						public calcCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.view.CacheNode): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ZombieEventManager extends com.google.firebase.database.core.EventRegistrationZombieListener {
						public static class: java.lang.Class<com.google.firebase.database.core.ZombieEventManager>;
						public recordEventRegistration(param0: com.google.firebase.database.core.EventRegistration): void;
						public static getInstance(): com.google.firebase.database.core.ZombieEventManager;
						public zombifyForRemove(param0: com.google.firebase.database.core.EventRegistration): void;
						public onZombied(param0: com.google.firebase.database.core.EventRegistration): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class AckUserWrite extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.AckUserWrite>;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public constructor(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.utilities.ImmutableTree<java.lang.Boolean>, param2: boolean);
							public isRevert(): boolean;
							public toString(): string;
							public constructor(param0: com.google.firebase.database.core.operation.Operation.OperationType, param1: com.google.firebase.database.core.operation.OperationSource, param2: com.google.firebase.database.core.Path);
							public getAffectedTree(): com.google.firebase.database.core.utilities.ImmutableTree<java.lang.Boolean>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class ListenComplete extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.ListenComplete>;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public toString(): string;
							public constructor(param0: com.google.firebase.database.core.operation.Operation.OperationType, param1: com.google.firebase.database.core.operation.OperationSource, param2: com.google.firebase.database.core.Path);
							public constructor(param0: com.google.firebase.database.core.operation.OperationSource, param1: com.google.firebase.database.core.Path);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class Merge extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Merge>;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public toString(): string;
							public constructor(param0: com.google.firebase.database.core.operation.OperationSource, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.core.CompoundWrite);
							public constructor(param0: com.google.firebase.database.core.operation.Operation.OperationType, param1: com.google.firebase.database.core.operation.OperationSource, param2: com.google.firebase.database.core.Path);
							public getChildren(): com.google.firebase.database.core.CompoundWrite;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export abstract class Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Operation>;
							public type: com.google.firebase.database.core.operation.Operation.OperationType;
							public source: com.google.firebase.database.core.operation.OperationSource;
							public path: com.google.firebase.database.core.Path;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public getPath(): com.google.firebase.database.core.Path;
							public constructor(param0: com.google.firebase.database.core.operation.Operation.OperationType, param1: com.google.firebase.database.core.operation.OperationSource, param2: com.google.firebase.database.core.Path);
							public getSource(): com.google.firebase.database.core.operation.OperationSource;
							public getType(): com.google.firebase.database.core.operation.Operation.OperationType;
						}
						export module Operation {
							export class OperationType {
								public static class: java.lang.Class<com.google.firebase.database.core.operation.Operation.OperationType>;
								public static Overwrite: com.google.firebase.database.core.operation.Operation.OperationType;
								public static Merge: com.google.firebase.database.core.operation.Operation.OperationType;
								public static AckUserWrite: com.google.firebase.database.core.operation.Operation.OperationType;
								public static ListenComplete: com.google.firebase.database.core.operation.Operation.OperationType;
								public static values(): native.Array<com.google.firebase.database.core.operation.Operation.OperationType>;
								public static valueOf(param0: string): com.google.firebase.database.core.operation.Operation.OperationType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class OperationSource {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.OperationSource>;
							public static USER: com.google.firebase.database.core.operation.OperationSource;
							public static SERVER: com.google.firebase.database.core.operation.OperationSource;
							public constructor(param0: com.google.firebase.database.core.operation.OperationSource.Source, param1: com.google.firebase.database.core.view.QueryParams, param2: boolean);
							public isFromUser(): boolean;
							public getQueryParams(): com.google.firebase.database.core.view.QueryParams;
							public toString(): string;
							public static forServerTaggedQuery(param0: com.google.firebase.database.core.view.QueryParams): com.google.firebase.database.core.operation.OperationSource;
							public isTagged(): boolean;
							public isFromServer(): boolean;
						}
						export module OperationSource {
							export class Source {
								public static class: java.lang.Class<com.google.firebase.database.core.operation.OperationSource.Source>;
								public static User: com.google.firebase.database.core.operation.OperationSource.Source;
								public static Server: com.google.firebase.database.core.operation.OperationSource.Source;
								public static values(): native.Array<com.google.firebase.database.core.operation.OperationSource.Source>;
								public static valueOf(param0: string): com.google.firebase.database.core.operation.OperationSource.Source;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class Overwrite extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Overwrite>;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public constructor(param0: com.google.firebase.database.core.operation.OperationSource, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.snapshot.Node);
							public toString(): string;
							public getSnapshot(): com.google.firebase.database.snapshot.Node;
							public constructor(param0: com.google.firebase.database.core.operation.Operation.OperationType, param1: com.google.firebase.database.core.operation.OperationSource, param2: com.google.firebase.database.core.Path);
						}
					}
				}
			}
		}
	}
}



declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class CachePolicy {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.CachePolicy>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.CachePolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								shouldPrune(param0: number, param1: number): boolean;
								shouldCheckCacheSize(param0: number): boolean;
								getPercentOfQueriesToPruneAtOnce(): number;
								getMaxNumberOfQueriesToKeep(): number;
								<clinit>(): void;
							});
							public constructor();
							public static NONE: com.google.firebase.database.core.persistence.CachePolicy;
							public shouldCheckCacheSize(param0: number): boolean;
							public shouldPrune(param0: number, param1: number): boolean;
							public getMaxNumberOfQueriesToKeep(): number;
							public getPercentOfQueriesToPruneAtOnce(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class DefaultPersistenceManager extends com.google.firebase.database.core.persistence.PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.DefaultPersistenceManager>;
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public constructor(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.core.persistence.PersistenceStorageEngine, param2: com.google.firebase.database.core.persistence.CachePolicy);
							public runInTransaction(param0: java.util.concurrent.Callable): any;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public constructor(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.core.persistence.PersistenceStorageEngine, param2: com.google.firebase.database.core.persistence.CachePolicy, param3: com.google.firebase.database.core.utilities.Clock);
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class LRUCachePolicy extends com.google.firebase.database.core.persistence.CachePolicy {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.LRUCachePolicy>;
							public maxSizeBytes: number;
							public shouldCheckCacheSize(param0: number): boolean;
							public shouldPrune(param0: number, param1: number): boolean;
							public getMaxNumberOfQueriesToKeep(): number;
							public getPercentOfQueriesToPruneAtOnce(): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class NoopPersistenceManager extends com.google.firebase.database.core.persistence.PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.NoopPersistenceManager>;
							public constructor();
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public runInTransaction(param0: java.util.concurrent.Callable): any;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PersistenceManager>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.PersistenceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
								saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
								removeUserWrite(param0: number): void;
								removeAllUserWrites(): void;
								applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
								serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
								updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
								updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								runInTransaction(param0: java.util.concurrent.Callable): any;
							});
							public constructor();
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public runInTransaction(param0: java.util.concurrent.Callable): any;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class PersistenceStorageEngine {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PersistenceStorageEngine>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.PersistenceStorageEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
								saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
								removeUserWrite(param0: number): void;
								loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
								removeAllUserWrites(): void;
								serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
								overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								serverCacheEstimatedSizeInBytes(): number;
								saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
								deleteTrackedQuery(param0: number): void;
								loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
								resetPreviouslyActiveTrackedQueries(param0: number): void;
								saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
								loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
								pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
								beginTransaction(): void;
								endTransaction(): void;
								setTransactionSuccessful(): void;
								close(): void;
							});
							public constructor();
							public close(): void;
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
							public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public resetPreviouslyActiveTrackedQueries(param0: number): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public endTransaction(): void;
							public removeAllUserWrites(): void;
							public beginTransaction(): void;
							public overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
							public loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public deleteTrackedQuery(param0: number): void;
							public removeUserWrite(param0: number): void;
							public serverCacheEstimatedSizeInBytes(): number;
							public saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
							public setTransactionSuccessful(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class PruneForest {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PruneForest>;
							public constructor();
							public hashCode(): number;
							public child(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
							public prunesAnything(): boolean;
							public shouldPruneUnkeptDescendants(param0: com.google.firebase.database.core.Path): boolean;
							public child(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.persistence.PruneForest;
							public keepAll(param0: com.google.firebase.database.core.Path, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): com.google.firebase.database.core.persistence.PruneForest;
							public toString(): string;
							public affectsPath(param0: com.google.firebase.database.core.Path): boolean;
							public foldKeptNodes(param0: any, param1: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any,any>): any;
							public prune(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
							public shouldKeep(param0: com.google.firebase.database.core.Path): boolean;
							public pruneAll(param0: com.google.firebase.database.core.Path, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): com.google.firebase.database.core.persistence.PruneForest;
							public equals(param0: any): boolean;
							public keep(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class TrackedQuery {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.TrackedQuery>;
							public id: number;
							public querySpec: com.google.firebase.database.core.view.QuerySpec;
							public lastUse: number;
							public complete: boolean;
							public active: boolean;
							public setComplete(): com.google.firebase.database.core.persistence.TrackedQuery;
							public setActiveState(param0: boolean): com.google.firebase.database.core.persistence.TrackedQuery;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: number, param1: com.google.firebase.database.core.view.QuerySpec, param2: number, param3: boolean, param4: boolean);
							public updateLastUse(param0: number): com.google.firebase.database.core.persistence.TrackedQuery;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module persistence {
						export class TrackedQueryManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.TrackedQueryManager>;
							public ensureCompleteTrackedQuery(param0: com.google.firebase.database.core.Path): void;
							public constructor(param0: com.google.firebase.database.core.persistence.PersistenceStorageEngine, param1: com.google.firebase.database.logging.LogWrapper, param2: com.google.firebase.database.core.utilities.Clock);
							public setQueryCompleteIfExists(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public setQueriesComplete(param0: com.google.firebase.database.core.Path): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public getKnownCompleteChildren(param0: com.google.firebase.database.core.Path): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public hasActiveDefaultQuery(param0: com.google.firebase.database.core.Path): boolean;
							public isQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): boolean;
							public countOfPrunableQueries(): number;
							public pruneOldQueries(param0: com.google.firebase.database.core.persistence.CachePolicy): com.google.firebase.database.core.persistence.PruneForest;
							public removeTrackedQuery(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public findTrackedQuery(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.persistence.TrackedQuery;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.utilities.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								millis(): number;
							});
							public constructor();
							public millis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class DefaultClock extends com.google.firebase.database.core.utilities.Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultClock>;
							public constructor();
							public millis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export abstract class DefaultRunLoop extends com.google.firebase.database.core.RunLoop {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultRunLoop>;
							public constructor();
							public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture;
							public getThreadFactory(): java.util.concurrent.ThreadFactory;
							public getThreadInitializer(): com.google.firebase.database.core.ThreadInitializer;
							public static messageForException(param0: java.lang.Throwable): string;
							public scheduleNow(param0: java.lang.Runnable): void;
							public handleException(param0: java.lang.Throwable): void;
							public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
							public restart(): void;
							public shutdown(): void;
						}
						export module DefaultRunLoop {
							export class FirebaseThreadFactory {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultRunLoop.FirebaseThreadFactory>;
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class ImmutableTree<T>  extends java.lang.Iterable<java.util.Map.Entry<com.google.firebase.database.core.Path,any>> {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.ImmutableTree<any>>;
							public getValue(): any;
							public findRootMostPathWithValue(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
							public hashCode(): number;
							public leafMostValue(param0: com.google.firebase.database.core.Path): any;
							public toString(): string;
							public getChildren(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.core.utilities.ImmutableTree<any>>;
							public fold(param0: any, param1: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any,any>): any;
							public values(): java.util.Collection<any>;
							public static emptyInstance(): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public foreach(param0: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any,java.lang.Void>): void;
							public findRootMostMatchingPath(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.utilities.Predicate<any>): com.google.firebase.database.core.Path;
							public constructor(param0: any, param1: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.core.utilities.ImmutableTree<any>>);
							public get(param0: com.google.firebase.database.core.Path): any;
							public getChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.core.Path,any>>;
							public containsMatchingValue(param0: com.google.firebase.database.core.utilities.Predicate<any>): boolean;
							public leafMostValueMatching(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.utilities.Predicate<any>): any;
							public remove(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public set(param0: com.google.firebase.database.core.Path, param1: any): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public subtree(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public setTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.utilities.ImmutableTree<any>): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public rootMostValue(param0: com.google.firebase.database.core.Path): any;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public constructor(param0: any);
							public rootMostValueMatching(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.utilities.Predicate<any>): any;
						}
						export module ImmutableTree {
							export class TreeVisitor<T, R>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any,any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.ImmutableTree$TreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onNodeValue(param0: com.google.firebase.database.core.Path, param1: T, param2: R): R;
								});
								public constructor();
								public onNodeValue(param0: com.google.firebase.database.core.Path, param1: T, param2: R): R;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class NodeSizeEstimator {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.NodeSizeEstimator>;
							public constructor();
							public static estimateSerializedNodeSize(param0: com.google.firebase.database.snapshot.Node): number;
							public static nodeCount(param0: com.google.firebase.database.snapshot.Node): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class OffsetClock extends com.google.firebase.database.core.utilities.Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.OffsetClock>;
							public setOffset(param0: number): void;
							public constructor(param0: com.google.firebase.database.core.utilities.Clock, param1: number);
							public millis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Pair<T, U>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Pair<any,any>>;
							public constructor(param0: T, param1: U);
							public hashCode(): number;
							public toString(): string;
							public getSecond(): U;
							public equals(param0: any): boolean;
							public getFirst(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class ParsedUrl {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.ParsedUrl>;
							public repoInfo: com.google.firebase.database.core.RepoInfo;
							public path: com.google.firebase.database.core.Path;
							public constructor();
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.utilities.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								evaluate(param0: T): boolean;
								<clinit>(): void;
							});
							public constructor();
							public static TRUE: com.google.firebase.database.core.utilities.Predicate<any>;
							public evaluate(param0: T): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class PushIdGenerator {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.PushIdGenerator>;
							public constructor();
							public static generatePushChildName(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Tree<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree<any>>;
							public constructor();
							public setValue(param0: T): void;
							public constructor(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.utilities.Tree<T>, param2: com.google.firebase.database.core.utilities.TreeNode<T>);
							public toString(): string;
							public forEachDescendant(param0: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>): void;
							public forEachAncestor(param0: com.google.firebase.database.core.utilities.Tree.TreeFilter<T>, param1: boolean): boolean;
							public lastNodeOnPath(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.TreeNode<T>;
							public getParent(): com.google.firebase.database.core.utilities.Tree<T>;
							public forEachDescendant(param0: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>, param1: boolean, param2: boolean): void;
							public subTree(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.Tree<T>;
							public getValue(): T;
							public getPath(): com.google.firebase.database.core.Path;
							public forEachDescendant(param0: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>, param1: boolean): void;
							public getName(): com.google.firebase.database.snapshot.ChildKey;
							public hasChildren(): boolean;
							public isEmpty(): boolean;
							public forEachAncestor(param0: com.google.firebase.database.core.utilities.Tree.TreeFilter<T>): boolean;
							public forEachChild(param0: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>): void;
						}
						export module Tree {
							export class TreeFilter<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree.TreeFilter<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.Tree$TreeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									filterTreeNode(param0: com.google.firebase.database.core.utilities.Tree<T>): boolean;
								});
								public constructor();
								public filterTreeNode(param0: com.google.firebase.database.core.utilities.Tree<T>): boolean;
							}
							export class TreeVisitor<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree.TreeVisitor<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.Tree$TreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									visitTree(param0: com.google.firebase.database.core.utilities.Tree<T>): void;
								});
								public constructor();
								public visitTree(param0: com.google.firebase.database.core.utilities.Tree<T>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class TreeNode<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.TreeNode<any>>;
							public children: java.util.Map<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.core.utilities.TreeNode<T>>;
							public value: T;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Utilities {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Utilities>;
							public constructor();
							public static hardAssert(param0: boolean): void;
							public static wrapOnComplete(param0: com.google.firebase.database.DatabaseReference.CompletionListener): com.google.firebase.database.core.utilities.Pair<com.google.android.gms.tasks.Task<java.lang.Void>,com.google.firebase.database.DatabaseReference.CompletionListener>;
							public static castOrNull(param0: any, param1: java.lang.Class): any;
							public static sha1HexDigest(param0: string): string;
							public static tryParseInt(param0: string): java.lang.Integer;
							public static hardAssert(param0: boolean, param1: string): void;
							public static stringHashV2Representation(param0: string): string;
							public static doubleToHashString(param0: number): string;
							public static compareInts(param0: number, param1: number): number;
							public static compareLongs(param0: number, param1: number): number;
							public static parseUrl(param0: string): com.google.firebase.database.core.utilities.ParsedUrl;
							public static getOrNull(param0: any, param1: string, param2: java.lang.Class): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export class Validation {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Validation>;
							public constructor();
							public static validateWritablePath(param0: com.google.firebase.database.core.Path): void;
							public static validateNullableKey(param0: string): void;
							public static validateWritableObject(param0: any): void;
							public static validatePathString(param0: string): void;
							public static validateWritableKey(param0: string): void;
							public static parseAndValidateUpdate(param0: com.google.firebase.database.core.Path, param1: java.util.Map<string,any>): java.util.Map<com.google.firebase.database.core.Path,com.google.firebase.database.snapshot.Node>;
							public static validateRootPathString(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export module encoding {
							export class CustomClassMapper {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.encoding.CustomClassMapper>;
								public static convertToPlainJavaTypes(param0: java.util.Map<string,any>): java.util.Map<string,any>;
								public static convertToCustomClass(param0: any, param1: com.google.firebase.database.GenericTypeIndicator<any>): any;
								public constructor();
								public static convertToCustomClass(param0: any, param1: java.lang.Class): any;
								public static convertToPlainJavaTypes(param0: any): any;
							}
							export module CustomClassMapper {
								export class BeanMapper<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.database.core.utilities.encoding.CustomClassMapper.BeanMapper<any>>;
									public deserialize(param0: java.util.Map<string,any>, param1: java.util.Map<java.lang.reflect.TypeVariable<java.lang.Class<T>>,java.lang.reflect.Type>): T;
									public constructor(param0: java.lang.Class<T>);
									public serialize(param0: T): java.util.Map<string,any>;
									public deserialize(param0: java.util.Map<string,any>): T;
								}
							}
						}
					}
				}
			}
		}
	}
}



declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class NameAndPriority extends java.lang.Comparable<com.google.firebase.database.core.utilities.tuple.NameAndPriority> {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.NameAndPriority>;
								public getPriority(): com.google.firebase.database.snapshot.Node;
								public compareTo(param0: com.google.firebase.database.core.utilities.tuple.NameAndPriority): number;
								public constructor(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node);
								public getName(): com.google.firebase.database.snapshot.ChildKey;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class NodeAndPath {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.NodeAndPath>;
								public constructor(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.core.Path);
								public getNode(): com.google.firebase.database.snapshot.Node;
								public setNode(param0: com.google.firebase.database.snapshot.Node): void;
								public getPath(): com.google.firebase.database.core.Path;
								public setPath(param0: com.google.firebase.database.core.Path): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class PathAndId {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.PathAndId>;
								public getId(): number;
								public constructor(param0: com.google.firebase.database.core.Path, param1: number);
								public getPath(): com.google.firebase.database.core.Path;
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class CacheNode {
							public static class: java.lang.Class<com.google.firebase.database.core.view.CacheNode>;
							public isCompleteForPath(param0: com.google.firebase.database.core.Path): boolean;
							public isCompleteForChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
							public isFullyInitialized(): boolean;
							public isFiltered(): boolean;
							public constructor(param0: com.google.firebase.database.snapshot.IndexedNode, param1: boolean, param2: boolean);
							public getIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public getNode(): com.google.firebase.database.snapshot.Node;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class CancelEvent extends com.google.firebase.database.core.view.Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.CancelEvent>;
							public getPath(): com.google.firebase.database.core.Path;
							public constructor(param0: com.google.firebase.database.core.EventRegistration, param1: com.google.firebase.database.DatabaseError, param2: com.google.firebase.database.core.Path);
							public toString(): string;
							public fire(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class Change {
							public static class: java.lang.Class<com.google.firebase.database.core.view.Change>;
							public static childRemovedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public getOldIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public getEventType(): com.google.firebase.database.core.view.Event.EventType;
							public static childAddedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public static childRemovedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public changeWithPrevName(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.Change;
							public static childChangedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public getIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public static childAddedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public toString(): string;
							public getPrevName(): com.google.firebase.database.snapshot.ChildKey;
							public static childMovedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public static valueChange(param0: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public static childChangedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public getChildKey(): com.google.firebase.database.snapshot.ChildKey;
							public static childMovedChange(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class DataEvent extends com.google.firebase.database.core.view.Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.DataEvent>;
							public getPreviousName(): string;
							public getEventType(): com.google.firebase.database.core.view.Event.EventType;
							public getPath(): com.google.firebase.database.core.Path;
							public getSnapshot(): com.google.firebase.database.DataSnapshot;
							public toString(): string;
							public constructor(param0: com.google.firebase.database.core.view.Event.EventType, param1: com.google.firebase.database.core.EventRegistration, param2: com.google.firebase.database.DataSnapshot, param3: string);
							public fire(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.Event>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.view.Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPath(): com.google.firebase.database.core.Path;
								fire(): void;
								toString(): string;
							});
							public constructor();
							public getPath(): com.google.firebase.database.core.Path;
							public toString(): string;
							public fire(): void;
						}
						export module Event {
							export class EventType {
								public static class: java.lang.Class<com.google.firebase.database.core.view.Event.EventType>;
								public static CHILD_REMOVED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_ADDED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_MOVED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_CHANGED: com.google.firebase.database.core.view.Event.EventType;
								public static VALUE: com.google.firebase.database.core.view.Event.EventType;
								public static values(): native.Array<com.google.firebase.database.core.view.Event.EventType>;
								public static valueOf(param0: string): com.google.firebase.database.core.view.Event.EventType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class EventGenerator {
							public static class: java.lang.Class<com.google.firebase.database.core.view.EventGenerator>;
							public constructor(param0: com.google.firebase.database.core.view.QuerySpec);
							public generateEventsForChanges(param0: java.util.List<com.google.firebase.database.core.view.Change>, param1: com.google.firebase.database.snapshot.IndexedNode, param2: java.util.List<com.google.firebase.database.core.EventRegistration>): java.util.List<com.google.firebase.database.core.view.DataEvent>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class EventRaiser {
							public static class: java.lang.Class<com.google.firebase.database.core.view.EventRaiser>;
							public raiseEvents(param0: java.util.List<any>): void;
							public constructor(param0: com.google.firebase.database.core.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class QueryParams {
							public static class: java.lang.Class<com.google.firebase.database.core.view.QueryParams>;
							public static DEFAULT_PARAMS: com.google.firebase.database.core.view.QueryParams;
							public limitToFirst(param0: number): com.google.firebase.database.core.view.QueryParams;
							public hashCode(): number;
							public getIndexEndName(): com.google.firebase.database.snapshot.ChildKey;
							public getIndex(): com.google.firebase.database.snapshot.Index;
							public hasEnd(): boolean;
							public toString(): string;
							public getIndexStartValue(): com.google.firebase.database.snapshot.Node;
							public isValid(): boolean;
							public endAt(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.QueryParams;
							public hasAnchoredLimit(): boolean;
							public constructor();
							public getIndexStartName(): com.google.firebase.database.snapshot.ChildKey;
							public isDefault(): boolean;
							public getIndexEndValue(): com.google.firebase.database.snapshot.Node;
							public orderBy(param0: com.google.firebase.database.snapshot.Index): com.google.firebase.database.core.view.QueryParams;
							public hasLimit(): boolean;
							public limitToLast(param0: number): com.google.firebase.database.core.view.QueryParams;
							public isViewFromLeft(): boolean;
							public hasStart(): boolean;
							public loadsAllData(): boolean;
							public getNodeFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
							public getWireProtocolParams(): java.util.Map<string,any>;
							public startAt(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.QueryParams;
							public toJSON(): string;
							public static fromQueryObject(param0: java.util.Map<string,any>): com.google.firebase.database.core.view.QueryParams;
							public equals(param0: any): boolean;
							public getLimit(): number;
						}
						export module QueryParams {
							export class ViewFrom {
								public static class: java.lang.Class<com.google.firebase.database.core.view.QueryParams.ViewFrom>;
								public static LEFT: com.google.firebase.database.core.view.QueryParams.ViewFrom;
								public static RIGHT: com.google.firebase.database.core.view.QueryParams.ViewFrom;
								public static values(): native.Array<com.google.firebase.database.core.view.QueryParams.ViewFrom>;
								public static valueOf(param0: string): com.google.firebase.database.core.view.QueryParams.ViewFrom;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class QuerySpec {
							public static class: java.lang.Class<com.google.firebase.database.core.view.QuerySpec>;
							public isDefault(): boolean;
							public loadsAllData(): boolean;
							public constructor(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.view.QueryParams);
							public getPath(): com.google.firebase.database.core.Path;
							public hashCode(): number;
							public getParams(): com.google.firebase.database.core.view.QueryParams;
							public static fromPathAndQueryObject(param0: com.google.firebase.database.core.Path, param1: java.util.Map<string,any>): com.google.firebase.database.core.view.QuerySpec;
							public getIndex(): com.google.firebase.database.snapshot.Index;
							public toString(): string;
							public static defaultQueryAtPath(param0: com.google.firebase.database.core.Path): com.google.firebase.database.core.view.QuerySpec;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class View {
							public static class: java.lang.Class<com.google.firebase.database.core.view.View>;
							public addEventRegistration(param0: com.google.firebase.database.core.EventRegistration): void;
							public removeEventRegistration(param0: com.google.firebase.database.core.EventRegistration, param1: com.google.firebase.database.DatabaseError): java.util.List<com.google.firebase.database.core.view.Event>;
							public getCompleteNode(): com.google.firebase.database.snapshot.Node;
							public applyOperation(param0: com.google.firebase.database.core.operation.Operation, param1: com.google.firebase.database.core.WriteTreeRef, param2: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.View.OperationResult;
							public getQuery(): com.google.firebase.database.core.view.QuerySpec;
							public constructor(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.view.ViewCache);
							public getCompleteServerCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							public isEmpty(): boolean;
							public getInitialEvents(param0: com.google.firebase.database.core.EventRegistration): java.util.List<com.google.firebase.database.core.view.DataEvent>;
							public getServerCache(): com.google.firebase.database.snapshot.Node;
							public getEventCache(): com.google.firebase.database.snapshot.Node;
						}
						export module View {
							export class OperationResult {
								public static class: java.lang.Class<com.google.firebase.database.core.view.View.OperationResult>;
								public events: java.util.List<com.google.firebase.database.core.view.DataEvent>;
								public changes: java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor(param0: java.util.List<com.google.firebase.database.core.view.DataEvent>, param1: java.util.List<com.google.firebase.database.core.view.Change>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class ViewCache {
							public static class: java.lang.Class<com.google.firebase.database.core.view.ViewCache>;
							public getEventCache(): com.google.firebase.database.core.view.CacheNode;
							public updateEventSnap(param0: com.google.firebase.database.snapshot.IndexedNode, param1: boolean, param2: boolean): com.google.firebase.database.core.view.ViewCache;
							public getCompleteServerSnap(): com.google.firebase.database.snapshot.Node;
							public getCompleteEventSnap(): com.google.firebase.database.snapshot.Node;
							public getServerCache(): com.google.firebase.database.core.view.CacheNode;
							public constructor(param0: com.google.firebase.database.core.view.CacheNode, param1: com.google.firebase.database.core.view.CacheNode);
							public updateServerSnap(param0: com.google.firebase.database.snapshot.IndexedNode, param1: boolean, param2: boolean): com.google.firebase.database.core.view.ViewCache;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export class ViewProcessor {
							public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor>;
							public constructor(param0: com.google.firebase.database.core.view.filter.NodeFilter);
							public revertUserWrite(param0: com.google.firebase.database.core.view.ViewCache, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.core.WriteTreeRef, param3: com.google.firebase.database.snapshot.Node, param4: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.core.view.ViewCache;
							public applyOperation(param0: com.google.firebase.database.core.view.ViewCache, param1: com.google.firebase.database.core.operation.Operation, param2: com.google.firebase.database.core.WriteTreeRef, param3: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.ViewProcessor.ProcessorResult;
						}
						export module ViewProcessor {
							export class ProcessorResult {
								public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor.ProcessorResult>;
								public viewCache: com.google.firebase.database.core.view.ViewCache;
								public changes: java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor(param0: com.google.firebase.database.core.view.ViewCache, param1: java.util.List<com.google.firebase.database.core.view.Change>);
							}
							export class WriteTreeCompleteChildSource extends com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource {
								public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor.WriteTreeCompleteChildSource>;
								public constructor(param0: com.google.firebase.database.core.WriteTreeRef, param1: com.google.firebase.database.core.view.ViewCache, param2: com.google.firebase.database.snapshot.Node);
								public getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
								public getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export module filter {
							export class ChildChangeAccumulator {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.ChildChangeAccumulator>;
								public getChanges(): java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor();
								public trackChildChange(param0: com.google.firebase.database.core.view.Change): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export module filter {
							export class IndexedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.IndexedFilter>;
								public constructor(param0: com.google.firebase.database.snapshot.Index);
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export module filter {
							export class LimitedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.LimitedFilter>;
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public constructor(param0: com.google.firebase.database.core.view.QueryParams);
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export module filter {
							export class NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.NodeFilter>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.view.filter.NodeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
									updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
									updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
									filtersNodes(): boolean;
									getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
									getIndex(): com.google.firebase.database.snapshot.Index;
								});
								public constructor();
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
							}
							export module NodeFilter {
								export class CompleteChildSource {
									public static class: java.lang.Class<com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource>;
									/**
									 * Constructs a new instance of the com.google.firebase.database.core.view.filter.NodeFilter$CompleteChildSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
										getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode;
									});
									public constructor();
									public getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode;
									public getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module view {
						export module filter {
							export class RangedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.RangedFilter>;
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getEndPost(): com.google.firebase.database.snapshot.NamedNode;
								public matches(param0: com.google.firebase.database.snapshot.NamedNode): boolean;
								public getStartPost(): com.google.firebase.database.snapshot.NamedNode;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public constructor(param0: com.google.firebase.database.core.view.QueryParams);
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
							}
						}
					}
				}
			}
		}
	}
}



declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class AndroidLogger extends com.google.firebase.database.logging.DefaultLogger {
						public static class: java.lang.Class<com.google.firebase.database.logging.AndroidLogger>;
						public warn(param0: string, param1: string): void;
						public buildLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): string;
						public info(param0: string, param1: string): void;
						public constructor(param0: com.google.firebase.database.logging.Logger.Level, param1: java.util.List<string>);
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public error(param0: string, param1: string): void;
						public debug(param0: string, param1: string): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class DefaultLogger extends com.google.firebase.database.logging.Logger {
						public static class: java.lang.Class<com.google.firebase.database.logging.DefaultLogger>;
						public warn(param0: string, param1: string): void;
						public buildLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): string;
						public shouldLog(param0: com.google.firebase.database.logging.Logger.Level, param1: string): boolean;
						public info(param0: string, param1: string): void;
						public constructor(param0: com.google.firebase.database.logging.Logger.Level, param1: java.util.List<string>);
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public error(param0: string, param1: string): void;
						public debug(param0: string, param1: string): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class LogWrapper {
						public static class: java.lang.Class<com.google.firebase.database.logging.LogWrapper>;
						public constructor(param0: com.google.firebase.database.logging.Logger, param1: string);
						public debug(param0: string, param1: native.Array<any>): void;
						public debug(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
						public warn(param0: string): void;
						public info(param0: string): void;
						public logsDebug(): boolean;
						public warn(param0: string, param1: java.lang.Throwable): void;
						public constructor(param0: com.google.firebase.database.logging.Logger, param1: string, param2: string);
						public error(param0: string, param1: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class Logger {
						public static class: java.lang.Class<com.google.firebase.database.logging.Logger>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.logging.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
							getLogLevel(): com.google.firebase.database.logging.Logger.Level;
						});
						public constructor();
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
					}
					export module Logger {
						export class Level {
							public static class: java.lang.Class<com.google.firebase.database.logging.Logger.Level>;
							public static DEBUG: com.google.firebase.database.logging.Logger.Level;
							public static INFO: com.google.firebase.database.logging.Logger.Level;
							public static WARN: com.google.firebase.database.logging.Logger.Level;
							public static ERROR: com.google.firebase.database.logging.Logger.Level;
							public static NONE: com.google.firebase.database.logging.Logger.Level;
							public static valueOf(param0: string): com.google.firebase.database.logging.Logger.Level;
							public static values(): native.Array<com.google.firebase.database.logging.Logger.Level>;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class BooleanNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.BooleanNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.BooleanNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.BooleanNode;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public compareLeafValues(param0: com.google.firebase.database.snapshot.BooleanNode): number;
						public constructor(param0: java.lang.Boolean, param1: com.google.firebase.database.snapshot.Node);
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class ChildKey extends java.lang.Comparable<com.google.firebase.database.snapshot.ChildKey> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildKey>;
						public static getMaxName(): com.google.firebase.database.snapshot.ChildKey;
						public static getPriorityKey(): com.google.firebase.database.snapshot.ChildKey;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public intValue(): number;
						public toString(): string;
						public isPriorityChildName(): boolean;
						public static getInfoKey(): com.google.firebase.database.snapshot.ChildKey;
						public asString(): string;
						public static fromString(param0: string): com.google.firebase.database.snapshot.ChildKey;
						public isInt(): boolean;
						public static getMinName(): com.google.firebase.database.snapshot.ChildKey;
						public compareTo(param0: com.google.firebase.database.snapshot.ChildKey): number;
					}
					export module ChildKey {
						export class IntegerChildKey extends com.google.firebase.database.snapshot.ChildKey {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildKey.IntegerChildKey>;
							public isInt(): boolean;
							public intValue(): number;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class ChildrenNode extends com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode>;
						public static NAME_ONLY_COMPARATOR: java.util.Comparator<com.google.firebase.database.snapshot.ChildKey>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public getValue(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getValue(param0: boolean): any;
						public constructor(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.snapshot.Node>, param1: com.google.firebase.database.snapshot.Node);
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public isEmpty(): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getLastChildKey(): com.google.firebase.database.snapshot.ChildKey;
						public forEachChild(param0: com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor): void;
						public getHash(): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor();
						public forEachChild(param0: com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor, param1: boolean): void;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareTo(param0: com.google.firebase.database.snapshot.Node): number;
						public getFirstChildKey(): com.google.firebase.database.snapshot.ChildKey;
						public toString(): string;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
					}
					export module ChildrenNode {
						export abstract class ChildVisitor extends com.google.firebase.database.collection.LLRBNode.NodeVisitor<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.snapshot.Node> {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor>;
							public constructor();
							public visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): void;
							public visitEntry(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): void;
						}
						export class NamedNodeIterator extends java.util.Iterator<com.google.firebase.database.snapshot.NamedNode> {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode.NamedNodeIterator>;
							public constructor(param0: java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.snapshot.ChildKey,com.google.firebase.database.snapshot.Node>>);
							public hasNext(): boolean;
							public remove(): void;
							public next(): com.google.firebase.database.snapshot.NamedNode;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class CompoundHash {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash>;
						public getPosts(): java.util.List<com.google.firebase.database.core.Path>;
						public static fromNode(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.CompoundHash.SplitStrategy): com.google.firebase.database.snapshot.CompoundHash;
						public static fromNode(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.CompoundHash;
						public getHashes(): java.util.List<string>;
					}
					export module CompoundHash {
						export class CompoundHashBuilder {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder>;
							public currentPath(): com.google.firebase.database.core.Path;
							public constructor(param0: com.google.firebase.database.snapshot.CompoundHash.SplitStrategy);
							public currentHashLength(): number;
							public buildingRange(): boolean;
						}
						export class SimpleSizeSplitStrategy extends com.google.firebase.database.snapshot.CompoundHash.SplitStrategy {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.SimpleSizeSplitStrategy>;
							public shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
							public constructor(param0: com.google.firebase.database.snapshot.Node);
						}
						export class SplitStrategy {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.SplitStrategy>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.snapshot.CompoundHash$SplitStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
							});
							public constructor();
							public shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class DeferredValueNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.DeferredValueNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.DeferredValueNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public constructor(param0: java.util.Map<any,any>, param1: com.google.firebase.database.snapshot.Node);
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.DeferredValueNode;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public compareLeafValues(param0: com.google.firebase.database.snapshot.DeferredValueNode): number;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class DoubleNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.DoubleNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.DoubleNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.DoubleNode;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor(param0: java.lang.Double, param1: com.google.firebase.database.snapshot.Node);
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public compareLeafValues(param0: com.google.firebase.database.snapshot.DoubleNode): number;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class EmptyNode extends com.google.firebase.database.snapshot.ChildrenNode implements com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.EmptyNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public static Empty(): com.google.firebase.database.snapshot.EmptyNode;
						public compareTo(param0: com.google.firebase.database.snapshot.Node): number;
						public getValue(param0: boolean): any;
						public toString(): string;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.EmptyNode;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export abstract class Index extends java.util.Comparator<com.google.firebase.database.snapshot.NamedNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.Index>;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): number;
						public constructor();
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public static fromQueryDefinition(param0: string): com.google.firebase.database.snapshot.Index;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public minPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public indexedValueChanged(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.Node): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class IndexedNode extends java.lang.Iterable<com.google.firebase.database.snapshot.NamedNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.IndexedNode>;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
						public hasIndex(param0: com.google.firebase.database.snapshot.Index): boolean;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public updateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
						public static from(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
						public static from(param0: com.google.firebase.database.snapshot.Node, param1: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.IndexedNode;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getLastChild(): com.google.firebase.database.snapshot.NamedNode;
						public getNode(): com.google.firebase.database.snapshot.Node;
						public getFirstChild(): com.google.firebase.database.snapshot.NamedNode;
						public getPredecessorChildName(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.ChildKey;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class KeyIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.KeyIndex>;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): number;
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static getInstance(): com.google.firebase.database.snapshot.KeyIndex;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export abstract class LeafNode<T>  extends com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.LeafNode<any>>;
						public priority: com.google.firebase.database.snapshot.Node;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public getValue(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPriorityHash(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public compareLeafValues(param0: any): number;
						public leafCompare(param0: com.google.firebase.database.snapshot.LeafNode<any>): number;
						public getValue(param0: boolean): any;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHash(): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareTo(param0: com.google.firebase.database.snapshot.Node): number;
						public toString(): string;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
					export module LeafNode {
						export class LeafType {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.LeafNode.LeafType>;
							public static DeferredValue: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static Boolean: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static Number: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static String: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static valueOf(param0: string): com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static values(): native.Array<com.google.firebase.database.snapshot.LeafNode.LeafType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class LongNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.LongNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.LongNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public constructor(param0: java.lang.Long, param1: com.google.firebase.database.snapshot.Node);
						public compareLeafValues(param0: com.google.firebase.database.snapshot.LongNode): number;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.LongNode;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class NamedNode {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.NamedNode>;
						public static getMaxNode(): com.google.firebase.database.snapshot.NamedNode;
						public getName(): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static getMinNode(): com.google.firebase.database.snapshot.NamedNode;
						public constructor(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node);
						public getNode(): com.google.firebase.database.snapshot.Node;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class Node extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.Node>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.snapshot.Node interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isLeafNode(): boolean;
							getPriority(): com.google.firebase.database.snapshot.Node;
							getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
							updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
							getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
							updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
							isEmpty(): boolean;
							getChildCount(): number;
							getValue(): any;
							getValue(param0: boolean): any;
							getHash(): string;
							getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
							reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
							<clinit>(): void;
						});
						public constructor();
						public static MAX_NODE: com.google.firebase.database.snapshot.ChildrenNode;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
					}
					export module Node {
						export class HashVersion {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.Node.HashVersion>;
							public static V1: com.google.firebase.database.snapshot.Node.HashVersion;
							public static V2: com.google.firebase.database.snapshot.Node.HashVersion;
							public static values(): native.Array<com.google.firebase.database.snapshot.Node.HashVersion>;
							public static valueOf(param0: string): com.google.firebase.database.snapshot.Node.HashVersion;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class NodeUtilities {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.NodeUtilities>;
						public constructor();
						public static NodeFromJSON(param0: any): com.google.firebase.database.snapshot.Node;
						public static NodeFromJSON(param0: any, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public static nameAndPriorityCompare(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node, param2: com.google.firebase.database.snapshot.ChildKey, param3: com.google.firebase.database.snapshot.Node): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PathIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PathIndex>;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): number;
						public constructor();
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public constructor(param0: com.google.firebase.database.core.Path);
						public getQueryDefinition(): string;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PriorityIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PriorityIndex>;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): number;
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public static getInstance(): com.google.firebase.database.snapshot.PriorityIndex;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PriorityUtilities {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PriorityUtilities>;
						public static NullPriority(): com.google.firebase.database.snapshot.Node;
						public constructor();
						public static parsePriority(param0: any): com.google.firebase.database.snapshot.Node;
						public static isValidPriority(param0: com.google.firebase.database.snapshot.Node): boolean;
						public static parsePriority(param0: com.google.firebase.database.core.Path, param1: any): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class RangeMerge {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.RangeMerge>;
						public constructor(param0: com.google.firebase.database.connection.RangeMerge);
						public applyTo(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.Path, param2: com.google.firebase.database.snapshot.Node);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class StringNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.StringNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.StringNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public compareLeafValues(param0: com.google.firebase.database.snapshot.StringNode): number;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.StringNode;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor(param0: string, param1: com.google.firebase.database.snapshot.Node);
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class ValueIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ValueIndex>;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): number;
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public compare(param0: com.google.firebase.database.snapshot.NamedNode, param1: com.google.firebase.database.snapshot.NamedNode): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public static getInstance(): com.google.firebase.database.snapshot.ValueIndex;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class MessageBuilderFactory {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory>;
					}
					export module MessageBuilderFactory {
						export class BinaryBuilder extends com.google.firebase.database.tubesock.MessageBuilderFactory.Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.BinaryBuilder>;
							public appendBytes(param0: native.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
						}
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.tubesock.MessageBuilderFactory$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								appendBytes(param0: native.Array<number>): boolean;
								toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
							});
							public constructor();
							public appendBytes(param0: native.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
						}
						export class TextBuilder extends com.google.firebase.database.tubesock.MessageBuilderFactory.Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.TextBuilder>;
							public appendBytes(param0: native.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class ThreadInitializer {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.ThreadInitializer>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.tubesock.ThreadInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setName(param0: java.lang.Thread, param1: string): void;
						});
						public constructor();
						public setName(param0: java.lang.Thread, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocket {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocket>;
						public static setThreadFactory(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.database.tubesock.ThreadInitializer): void;
						public blockClose(): void;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: java.net.URI);
						public close(): void;
						public setEventHandler(param0: com.google.firebase.database.tubesock.WebSocketEventHandler): void;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: java.net.URI, param2: string, param3: java.util.Map<string,string>);
						public connect(): void;
						public constructor(param0: com.google.firebase.database.connection.ConnectionContext, param1: java.net.URI, param2: string);
						public send(param0: string): void;
						public send(param0: native.Array<number>): void;
					}
					export module WebSocket {
						export class State {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocket.State>;
							public static NONE: com.google.firebase.database.tubesock.WebSocket.State;
							public static CONNECTING: com.google.firebase.database.tubesock.WebSocket.State;
							public static CONNECTED: com.google.firebase.database.tubesock.WebSocket.State;
							public static DISCONNECTING: com.google.firebase.database.tubesock.WebSocket.State;
							public static DISCONNECTED: com.google.firebase.database.tubesock.WebSocket.State;
							public static values(): native.Array<com.google.firebase.database.tubesock.WebSocket.State>;
							public static valueOf(param0: string): com.google.firebase.database.tubesock.WebSocket.State;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketEventHandler {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketEventHandler>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.tubesock.WebSocketEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOpen(): void;
							onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void;
							onClose(): void;
							onError(param0: com.google.firebase.database.tubesock.WebSocketException): void;
							onLogMessage(param0: string): void;
						});
						public constructor();
						public onOpen(): void;
						public onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void;
						public onError(param0: com.google.firebase.database.tubesock.WebSocketException): void;
						public onLogMessage(param0: string): void;
						public onClose(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketException {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketException>;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketHandshake {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketHandshake>;
						public constructor(param0: java.net.URI, param1: string, param2: java.util.Map<string,string>);
						public verifyServerHandshakeHeaders(param0: java.util.HashMap<string,string>): void;
						public getHandshake(): native.Array<number>;
						public verifyServerStatusLine(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketMessage {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketMessage>;
						public constructor(param0: native.Array<number>);
						public isBinary(): boolean;
						public getBytes(): native.Array<number>;
						public isText(): boolean;
						public getText(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketReceiver {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketReceiver>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketWriter {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketWriter>;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module database {
				export module util {
					export class GAuthToken {
						public static class: java.lang.Class<com.google.firebase.database.util.GAuthToken>;
						public static tryParseFromString(param0: string): com.google.firebase.database.util.GAuthToken;
						public serializeToString(): string;
						public constructor(param0: string, param1: java.util.Map<string,any>);
						public getAuth(): java.util.Map<string,any>;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module util {
					export class JsonMapper {
						public static class: java.lang.Class<com.google.firebase.database.util.JsonMapper>;
						public static serializeJson(param0: java.util.Map<string,any>): string;
						public constructor();
						public static serializeJsonValue(param0: any): string;
						public static parseJson(param0: string): java.util.Map<string,any>;
						public static parseJsonValue(param0: string): any;
					}
				}
			}
		}
	}
}


//Generics information:
//com.google.firebase.database.GenericTypeIndicator:1
//com.google.firebase.database.core.utilities.ImmutableTree:1
//com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor:2
//com.google.firebase.database.core.utilities.Pair:2
//com.google.firebase.database.core.utilities.Predicate:1
//com.google.firebase.database.core.utilities.Tree:1
//com.google.firebase.database.core.utilities.Tree.TreeFilter:1
//com.google.firebase.database.core.utilities.Tree.TreeVisitor:1
//com.google.firebase.database.core.utilities.TreeNode:1
//com.google.firebase.database.core.utilities.encoding.CustomClassMapper.BeanMapper:1
//com.google.firebase.database.snapshot.LeafNode:1

