/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.storage.BuildConfig>;
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
			export module storage {
				export class CancelException {
					public static class: java.lang.Class<com.google.firebase.storage.CancelException>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class CancellableTask<StateT>  extends com.google.android.gms.tasks.Task<any> {
					public static class: java.lang.Class<com.google.firebase.storage.CancellableTask<any>>;
					public cancel(): boolean;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public isInProgress(): boolean;
					public constructor();
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class ControllableTask<StateT>  extends com.google.firebase.storage.CancellableTask<any> {
					public static class: java.lang.Class<com.google.firebase.storage.ControllableTask<any>>;
					public pause(): boolean;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public resume(): boolean;
					public constructor();
					public isPaused(): boolean;
					public addOnPausedListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public addOnPausedListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class DeleteStorageTask {
					public static class: java.lang.Class<com.google.firebase.storage.DeleteStorageTask>;
					public run(): void;
					public constructor(param0: com.google.firebase.storage.StorageReference, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FileDownloadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.FileDownloadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.FileDownloadTask>;
					public onCanceled(): void;
					public schedule(): void;
				}
				export module FileDownloadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.FileDownloadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getError(): java.lang.Exception;
						public getBytesTransferred(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorage {
					public static class: java.lang.Class<com.google.firebase.storage.FirebaseStorage>;
					public setMaxUploadRetryTimeMillis(param0: number): void;
					public static getInstance(param0: com.google.firebase.FirebaseApp, param1: string): com.google.firebase.storage.FirebaseStorage;
					public getReferenceFromUrl(param0: string): com.google.firebase.storage.StorageReference;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.storage.FirebaseStorage;
					public static getInstance(param0: string): com.google.firebase.storage.FirebaseStorage;
					public setMaxDownloadRetryTimeMillis(param0: number): void;
					public getApp(): com.google.firebase.FirebaseApp;
					public setMaxOperationRetryTimeMillis(param0: number): void;
					public static getInstance(): com.google.firebase.storage.FirebaseStorage;
					public getReference(): com.google.firebase.storage.StorageReference;
					public getMaxUploadRetryTimeMillis(): number;
					public getMaxDownloadRetryTimeMillis(): number;
					public getMaxOperationRetryTimeMillis(): number;
					public getReference(param0: string): com.google.firebase.storage.StorageReference;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorageComponent {
					public static class: java.lang.Class<com.google.firebase.storage.FirebaseStorageComponent>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class GetDownloadUrlTask {
					public static class: java.lang.Class<com.google.firebase.storage.GetDownloadUrlTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class GetMetadataTask {
					public static class: java.lang.Class<com.google.firebase.storage.GetMetadataTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class ListResult {
					public static class: java.lang.Class<com.google.firebase.storage.ListResult>;
					public getPrefixes(): java.util.List<com.google.firebase.storage.StorageReference>;
					public getPageToken(): string;
					public getItems(): java.util.List<com.google.firebase.storage.StorageReference>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class ListTask {
					public static class: java.lang.Class<com.google.firebase.storage.ListTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnPausedListener<ProgressT>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.OnPausedListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnPausedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaused(param0: ProgressT): void;
					});
					public constructor();
					public onPaused(param0: ProgressT): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnProgressListener<ProgressT>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.OnProgressListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnProgressListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: ProgressT): void;
					});
					public constructor();
					public onProgress(param0: ProgressT): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageException {
					public static class: java.lang.Class<com.google.firebase.storage.StorageException>;
					public static ERROR_UNKNOWN: number;
					public static ERROR_OBJECT_NOT_FOUND: number;
					public static ERROR_BUCKET_NOT_FOUND: number;
					public static ERROR_PROJECT_NOT_FOUND: number;
					public static ERROR_QUOTA_EXCEEDED: number;
					public static ERROR_NOT_AUTHENTICATED: number;
					public static ERROR_NOT_AUTHORIZED: number;
					public static ERROR_RETRY_LIMIT_EXCEEDED: number;
					public static ERROR_INVALID_CHECKSUM: number;
					public static ERROR_CANCELED: number;
					public static fromException(param0: java.lang.Throwable): com.google.firebase.storage.StorageException;
					public static fromExceptionAndHttpCode(param0: java.lang.Throwable, param1: number): com.google.firebase.storage.StorageException;
					public getIsRecoverableException(): boolean;
					public getErrorCode(): number;
					public getMessage(): string;
					public getCause(): java.lang.Throwable;
					public getHttpResultCode(): number;
					public static fromErrorStatus(param0: com.google.android.gms.common.api.Status): com.google.firebase.storage.StorageException;
				}
				export module StorageException {
					export class ErrorCode {
						public static class: java.lang.Class<com.google.firebase.storage.StorageException.ErrorCode>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageException$ErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module storage {
				export class StorageMetadata {
					public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata>;
					public getMd5Hash(): string;
					public getCreationTimeMillis(): number;
					public getCustomMetadataKeys(): java.util.Set<string>;
					public getBucket(): string;
					public getContentType(): string;
					public getCustomMetadata(param0: string): string;
					public getMetadataGeneration(): string;
					public getUpdatedTimeMillis(): number;
					public getCacheControl(): string;
					public getContentLanguage(): string;
					public getPath(): string;
					public getContentDisposition(): string;
					public getContentEncoding(): string;
					public constructor();
					public getName(): string;
					public getSizeBytes(): number;
					public getReference(): com.google.firebase.storage.StorageReference;
					public getGeneration(): string;
				}
				export module StorageMetadata {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata.Builder>;
						public constructor();
						public constructor(param0: com.google.firebase.storage.StorageMetadata);
						public setCacheControl(param0: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentLanguage(param0: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentDisposition(param0: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentEncoding(param0: string): com.google.firebase.storage.StorageMetadata.Builder;
						public build(): com.google.firebase.storage.StorageMetadata;
						public setCustomMetadata(param0: string, param1: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentType(param0: string): com.google.firebase.storage.StorageMetadata.Builder;
					}
					export class MetadataValue<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata.MetadataValue<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageReference extends java.lang.Comparable<com.google.firebase.storage.StorageReference> {
					public static class: java.lang.Class<com.google.firebase.storage.StorageReference>;
					public getActiveUploadTasks(): java.util.List<com.google.firebase.storage.UploadTask>;
					public getActiveDownloadTasks(): java.util.List<com.google.firebase.storage.FileDownloadTask>;
					public getBucket(): string;
					public getStream(param0: com.google.firebase.storage.StreamDownloadTask.StreamProcessor): com.google.firebase.storage.StreamDownloadTask;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getBytes(param0: number): com.google.android.gms.tasks.Task<native.Array<number>>;
					public getParent(): com.google.firebase.storage.StorageReference;
					public getStorage(): com.google.firebase.storage.FirebaseStorage;
					public getStream(): com.google.firebase.storage.StreamDownloadTask;
					public toString(): string;
					public putBytes(param0: native.Array<number>, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public updateMetadata(param0: com.google.firebase.storage.StorageMetadata): com.google.android.gms.tasks.Task<com.google.firebase.storage.StorageMetadata>;
					public putStream(param0: java.io.InputStream, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public list(param0: number): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public list(param0: number, param1: string): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public listAll(): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public putFile(param0: globalAndroid.net.Uri): com.google.firebase.storage.UploadTask;
					public hashCode(): number;
					public putFile(param0: globalAndroid.net.Uri, param1: com.google.firebase.storage.StorageMetadata, param2: globalAndroid.net.Uri): com.google.firebase.storage.UploadTask;
					public putStream(param0: java.io.InputStream): com.google.firebase.storage.UploadTask;
					public getRoot(): com.google.firebase.storage.StorageReference;
					public compareTo(param0: com.google.firebase.storage.StorageReference): number;
					public child(param0: string): com.google.firebase.storage.StorageReference;
					public getDownloadUrl(): com.google.android.gms.tasks.Task<globalAndroid.net.Uri>;
					public putFile(param0: globalAndroid.net.Uri, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public getPath(): string;
					public equals(param0: any): boolean;
					public putBytes(param0: native.Array<number>): com.google.firebase.storage.UploadTask;
					public getFile(param0: java.io.File): com.google.firebase.storage.FileDownloadTask;
					public getName(): string;
					public getMetadata(): com.google.android.gms.tasks.Task<com.google.firebase.storage.StorageMetadata>;
					public getFile(param0: globalAndroid.net.Uri): com.google.firebase.storage.FileDownloadTask;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageRegistrar {
					public static class: java.lang.Class<com.google.firebase.storage.StorageRegistrar>;
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
			export module storage {
				export abstract class StorageTask<ResultT>  extends com.google.firebase.storage.ControllableTask<any> {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTask<any>>;
					public syncObject: any;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public pause(): boolean;
					public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public onSuccess(): void;
					public onPaused(): void;
					public removeOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public isCanceled(): boolean;
					public onQueued(): void;
					public onFailure(): void;
					public onCanceled(): void;
					public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public constructor();
					public isSuccessful(): boolean;
					public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public removeOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public continueWithTask(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public removeOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public cancel(): boolean;
					public isInProgress(): boolean;
					public resume(): boolean;
					public addOnPausedListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public addOnPausedListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public onProgress(): void;
					public removeOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public removeOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public getException(): java.lang.Exception;
					public getResult(): any;
					public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public removeOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public continueWith(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnPausedListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public getSnapshot(): any;
					public getResult(param0: java.lang.Class): com.google.firebase.storage.StorageTask.ProvideError;
					public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
				}
				export module StorageTask {
					export class ProvideError {
						public static class: java.lang.Class<com.google.firebase.storage.StorageTask.ProvideError>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageTask$ProvideError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getError(): java.lang.Exception;
						});
						public constructor();
						public getError(): java.lang.Exception;
					}
					export class SnapshotBase extends com.google.firebase.storage.StorageTask.ProvideError {
						public static class: java.lang.Class<com.google.firebase.storage.StorageTask.SnapshotBase>;
						public getTask(): com.google.firebase.storage.StorageTask<any>;
						public getError(): java.lang.Exception;
						public constructor(param0: com.google.firebase.storage.StorageTask<any>, param1: java.lang.Exception);
						public getStorage(): com.google.firebase.storage.StorageReference;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageTaskManager {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTaskManager>;
					public unRegister(param0: com.google.firebase.storage.StorageTask<any>): void;
					public getDownloadTasksUnder(param0: com.google.firebase.storage.StorageReference): java.util.List<com.google.firebase.storage.FileDownloadTask>;
					public getUploadTasksUnder(param0: com.google.firebase.storage.StorageReference): java.util.List<com.google.firebase.storage.UploadTask>;
					public ensureRegistered(param0: com.google.firebase.storage.StorageTask<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageTaskScheduler {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTaskScheduler>;
					public static sInstance: com.google.firebase.storage.StorageTaskScheduler;
					public getCommandPoolExecutor(): java.util.concurrent.Executor;
					public scheduleCommand(param0: java.lang.Runnable): void;
					public constructor();
					public scheduleUpload(param0: java.lang.Runnable): void;
					public static getInstance(): com.google.firebase.storage.StorageTaskScheduler;
					public scheduleCallback(param0: java.lang.Runnable): void;
					public scheduleDownload(param0: java.lang.Runnable): void;
				}
				export module StorageTaskScheduler {
					export class StorageThreadFactory {
						public static class: java.lang.Class<com.google.firebase.storage.StorageTaskScheduler.StorageThreadFactory>;
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StreamDownloadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.StreamDownloadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask>;
					public onProgress(): void;
					public pause(): boolean;
					public onCanceled(): void;
					public resume(): boolean;
					public schedule(): void;
				}
				export module StreamDownloadTask {
					export class StreamProcessor {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.StreamProcessor>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StreamDownloadTask$StreamProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: java.io.InputStream): void;
						});
						public constructor();
						public doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: java.io.InputStream): void;
					}
					export class StreamProgressWrapper {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.StreamProgressWrapper>;
						public read(): number;
						public skip(param0: number): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public available(): number;
					}
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getError(): java.lang.Exception;
						public getBytesTransferred(): number;
						public getStream(): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class TaskListenerImpl<ListenerTypeT, ResultT>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.TaskListenerImpl<any,any>>;
					public onInternalStateChanged(): void;
					public constructor(param0: com.google.firebase.storage.StorageTask<ResultT>, param1: number, param2: com.google.firebase.storage.TaskListenerImpl.OnRaise<ListenerTypeT,ResultT>);
					public removeListener(param0: ListenerTypeT): void;
					public getListenerCount(): number;
					public addListener(param0: globalAndroid.app.Activity, param1: java.util.concurrent.Executor, param2: ListenerTypeT): void;
				}
				export module TaskListenerImpl {
					export class OnRaise<ListenerTypeT, ResultT>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.storage.TaskListenerImpl.OnRaise<any,any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.TaskListenerImpl$OnRaise interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							raise(param0: ListenerTypeT, param1: ResultT): void;
						});
						public constructor();
						public raise(param0: ListenerTypeT, param1: ResultT): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class UpdateMetadataTask {
					public static class: java.lang.Class<com.google.firebase.storage.UpdateMetadataTask>;
					public run(): void;
					public constructor(param0: com.google.firebase.storage.StorageReference, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.storage.StorageMetadata>, param2: com.google.firebase.storage.StorageMetadata);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class UploadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.UploadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.UploadTask>;
					public onCanceled(): void;
					public resetState(): void;
					public schedule(): void;
				}
				export module UploadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.UploadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getUploadSessionUri(): globalAndroid.net.Uri;
						public getError(): java.lang.Exception;
						public getMetadata(): com.google.firebase.storage.StorageMetadata;
						public getBytesTransferred(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class ActivityLifecycleListener {
						public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener>;
						public removeCookie(param0: any): void;
						public runOnActivityStopped(param0: globalAndroid.app.Activity, param1: any, param2: java.lang.Runnable): void;
						public static getInstance(): com.google.firebase.storage.internal.ActivityLifecycleListener;
					}
					export module ActivityLifecycleListener {
						export class LifecycleEntry {
							public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry>;
							public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Runnable, param2: any);
							public hashCode(): number;
							public equals(param0: any): boolean;
							public getRunnable(): java.lang.Runnable;
							public getCookie(): any;
							public getActivity(): globalAndroid.app.Activity;
						}
						export class OnStopCallback {
							public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener.OnStopCallback>;
							public static getInstance(param0: globalAndroid.app.Activity): com.google.firebase.storage.internal.ActivityLifecycleListener.OnStopCallback;
							public addEntry(param0: com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry): void;
							public onStop(): void;
							public removeEntry(param0: com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry): void;
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
			export module storage {
				export module internal {
					export class AdaptiveStreamBuffer {
						public static class: java.lang.Class<com.google.firebase.storage.internal.AdaptiveStreamBuffer>;
						public fill(param0: number): number;
						public close(): void;
						public get(): native.Array<number>;
						public constructor(param0: java.io.InputStream, param1: number);
						public advance(param0: number): number;
						public isFinished(): boolean;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class ExponentialBackoffSender {
						public static class: java.lang.Class<com.google.firebase.storage.internal.ExponentialBackoffSender>;
						public static RND_MAX: number;
						public sendWithExponentialBackoff(param0: com.google.firebase.storage.network.NetworkRequest): void;
						public cancel(): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.auth.internal.InternalAuthProvider, param2: number);
						public sendWithExponentialBackoff(param0: com.google.firebase.storage.network.NetworkRequest, param1: boolean): void;
						public isRetryableError(param0: number): boolean;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class Slashes {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Slashes>;
						public constructor();
						public static normalizeSlashes(param0: string): string;
						public static unSlashize(param0: string): string;
						public static slashize(param0: string): string;
						public static preserveSlashEncode(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class Sleeper {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Sleeper>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.internal.Sleeper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sleep(param0: number): void;
						});
						public constructor();
						public sleep(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class SleeperImpl extends com.google.firebase.storage.internal.Sleeper {
						public static class: java.lang.Class<com.google.firebase.storage.internal.SleeperImpl>;
						public constructor();
						public sleep(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class SmartHandler {
						public static class: java.lang.Class<com.google.firebase.storage.internal.SmartHandler>;
						public constructor(param0: java.util.concurrent.Executor);
						public callBack(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class Util {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Util>;
						public static NETWORK_UNAVAILABLE: number;
						public static ISO_8601_FORMAT: string;
						public constructor();
						public static equals(param0: any, param1: any): boolean;
						public static normalize(param0: com.google.firebase.FirebaseApp, param1: string): globalAndroid.net.Uri;
						public static parseDateTime(param0: string): number;
						public static getCurrentAuthToken(param0: com.google.firebase.auth.internal.InternalAuthProvider): string;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class DeleteNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.DeleteNetworkRequest>;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class GetMetadataNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.GetMetadataNetworkRequest>;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class GetNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.GetNetworkRequest>;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: number);
						public getQueryParameters(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ListNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ListNetworkRequest>;
						public getAction(): string;
						public getURL(): string;
						public getQueryParameters(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: java.lang.Integer, param3: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export abstract class NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.NetworkRequest>;
						public static INITIALIZATION_EXCEPTION: number;
						public static NETWORK_UNAVAILABLE: number;
						public static sNetworkRequestUrl: string;
						public static sUploadUrl: string;
						public mGsUri: globalAndroid.net.Uri;
						public mException: java.lang.Exception;
						public getAction(): string;
						public performRequest(param0: string, param1: globalAndroid.content.Context): void;
						public getResultString(param0: string): string;
						public performRequestEnd(): void;
						public getOutputJSON(): org.json.JSONObject;
						public setCustomHeader(param0: string, param1: string): void;
						public getResultBody(): org.json.JSONObject;
						public getRawResult(): string;
						public static getPathWithoutBucket(param0: globalAndroid.net.Uri): string;
						public parseErrorResponse(param0: java.io.InputStream): void;
						public parseSuccessulResponse(param0: java.io.InputStream): void;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
						public isResultSuccess(): boolean;
						public getOutputRaw(): native.Array<number>;
						public getResultHeaders(): java.util.Map<string,string>;
						public getResultHeadersImpl(): java.util.Map<string,java.util.List<string>>;
						public performRequestStart(param0: string): void;
						public static getDefaultURL(param0: globalAndroid.net.Uri): string;
						public getStream(): java.io.InputStream;
						public completeTask(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: any): void;
						public static getAuthority(): string;
						public getResultingContentLength(): number;
						public getOutputRawSize(): number;
						public getURL(): string;
						public getPathWithoutBucket(): string;
						public getQueryParameters(): string;
						public getException(): java.lang.Exception;
						public getResultCode(): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export abstract class ResumableNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableNetworkRequest>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadByteRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadByteRequest>;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: string, param3: native.Array<number>, param4: number, param5: number, param6: boolean);
						public getOutputRaw(): native.Array<number>;
						public getOutputRawSize(): number;
						public getURL(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadCancelRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadCancelRequest>;
						public static cancelCalled: boolean;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: string);
						public getURL(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadQueryRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadQueryRequest>;
						public getAction(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: string);
						public getURL(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadStartRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadStartRequest>;
						public getAction(): string;
						public getOutputJSON(): org.json.JSONObject;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: org.json.JSONObject, param3: string);
						public getURL(): string;
						public getQueryParameters(): string;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class UpdateMetadataNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.UpdateMetadataNetworkRequest>;
						public getAction(): string;
						public getOutputJSON(): org.json.JSONObject;
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp, param2: org.json.JSONObject);
						public constructor(param0: globalAndroid.net.Uri, param1: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export module connection {
						export class HttpURLConnectionFactory {
							public static class: java.lang.Class<com.google.firebase.storage.network.connection.HttpURLConnectionFactory>;
							/**
							 * Constructs a new instance of the com.google.firebase.storage.network.connection.HttpURLConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createInstance(param0: java.net.URL): java.net.HttpURLConnection;
							});
							public constructor();
							public createInstance(param0: java.net.URL): java.net.HttpURLConnection;
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
			export module storage {
				export module network {
					export module connection {
						export class HttpURLConnectionFactoryImpl extends com.google.firebase.storage.network.connection.HttpURLConnectionFactory {
							public static class: java.lang.Class<com.google.firebase.storage.network.connection.HttpURLConnectionFactoryImpl>;
							public constructor();
							public createInstance(param0: java.net.URL): java.net.HttpURLConnection;
						}
					}
				}
			}
		}
	}
}



//Generics information:
//com.google.firebase.storage.CancellableTask:1
//com.google.firebase.storage.ControllableTask:1
//com.google.firebase.storage.OnPausedListener:1
//com.google.firebase.storage.OnProgressListener:1
//com.google.firebase.storage.StorageMetadata.MetadataValue:1
//com.google.firebase.storage.StorageTask:1
//com.google.firebase.storage.TaskListenerImpl:2
//com.google.firebase.storage.TaskListenerImpl.OnRaise:2

