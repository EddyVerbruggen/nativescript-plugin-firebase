/// <reference path="./_helpers.d.ts" />
import androidappActivity = android.app.Activity;
import javalangObject = java.lang.Object;
import javalangRunnable = java.lang.Runnable;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzemo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemn {
						public zzce(param0: javalangObject): void;
						public zza(param0: androidappActivity, param1: javalangObject, param2: javalangRunnable): void;
						public static zzcin(): com.google.android.gms.internal.zzemn;
					}
					export module zzemn {
						export class zza {
							public onStop(): void;
							public static zzt(param0: androidappActivity): com.google.android.gms.internal.zzemn.zza;
							public zza(param0: com.google.android.gms.internal.zzemo): void;
							public zzb(param0: com.google.android.gms.internal.zzemo): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemo {
						public equals(param0: javalangObject): boolean;
						public constructor(param0: androidappActivity, param1: javalangRunnable, param2: javalangObject);
						public hashCode(): number;
						public zzcio(): javalangObject;
						public getActivity(): androidappActivity;
						public zzbje(): javalangRunnable;
					}
				}
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemp {
						public zzhs(param0: number): number;
						public close(): void;
						public zzhr(param0: number): number;
						public constructor(param0: javaioInputStream, param1: number);
						public zzcip(): native.Array<number>;
						public isFinished(): boolean;
						public available(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzenb.d.ts" />
/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemq {
						public static zzhu(param0: number): boolean;
						public zza(param0: com.google.android.gms.internal.zzenb, param1: boolean): void;
						public cancel(): void;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: number);
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzems {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzems interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzhv(param0: number): void;
						});
						public zzhv(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemt {
						public constructor();
						public zzhv(param0: number): void;
					}
				}
			}
		}
	}
}

import javautilconcurrentExecutor = java.util.concurrent.Executor;
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemu {
						public constructor(param0: javautilconcurrentExecutor);
						public zzu(param0: javalangRunnable): void;
					}
				}
			}
		}
	}
}

import androidnetUri = android.net.Uri;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzemv {
						public static zzg(param0: com.google.firebase.FirebaseApp): string;
						public static zzsa(param0: string): number;
						public static zzf(param0: com.google.firebase.FirebaseApp, param1: string): androidnetUri;
					}
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzenb.d.ts" />
/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzena {
						public zza(param0: androidnetUri, param1: string, param2: native.Array<number>, param3: number, param4: number, param5: boolean): com.google.android.gms.internal.zzenb;
						public zza(param0: androidnetUri, param1: orgjsonJSONObject, param2: string): com.google.android.gms.internal.zzenb;
						public static zzh(param0: com.google.firebase.FirebaseApp): com.google.android.gms.internal.zzena;
						public zza(param0: androidnetUri, param1: number): com.google.android.gms.internal.zzenb;
						public zzcix(): string;
						public zza(param0: androidnetUri, param1: orgjsonJSONObject): com.google.android.gms.internal.zzenb;
						public zzu(param0: androidnetUri): string;
						public zzv(param0: androidnetUri): com.google.android.gms.internal.zzenb;
						public zza(param0: androidnetUri, param1: string): com.google.android.gms.internal.zzenb;
						public zzw(param0: androidnetUri): com.google.android.gms.internal.zzenb;
						public zzb(param0: androidnetUri, param1: string): com.google.android.gms.internal.zzenb;
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzemw.d.ts" />
/// <reference path="./com.google.android.gms.tasks.TaskCompletionSource.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenb {
						public zzciv(): boolean;
						public zzsd(param0: string): string;
						public zzsc(param0: string): void;
						public zze(param0: string, param1: androidcontentContext): void;
						public constructor(param0: com.google.android.gms.internal.zzemw);
						public getStream(): javaioInputStream;
						public zzcit(): string;
						public zzciq(): void;
						public zzciy(): orgjsonJSONObject;
						public getException(): javalangException;
						public zzciw(): number;
						public getResultCode(): number;
						public reset(): void;
						public zzbp(param0: string, param1: string): void;
						public zza(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.firebase.storage.OnProgressListener.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class CancellableTask {
					public cancel(): boolean;
					public isInProgress(): boolean;
					public addOnProgressListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public constructor();
					public addOnProgressListener(param0: androidappActivity, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.firebase.storage.OnPausedListener.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class ControllableTask extends com.google.firebase.storage.CancellableTask {
					public pause(): boolean;
					public resume(): boolean;
					public constructor();
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
					public isPaused(): boolean;
					public addOnPausedListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
					public addOnPausedListener(param0: androidappActivity, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FileDownloadTask extends com.google.firebase.storage.StorageTask {
					public onCanceled(): void;
					public schedule(): void;
				}
				export module FileDownloadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public getTotalByteCount(): number;
						public getBytesTransferred(): number;
						public getError(): javalangException;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorage {
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

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnPausedListener {
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnPausedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onPaused(param0: javalangObject): void;
					});
					public onPaused(param0: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnProgressListener {
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnProgressListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onProgress(param0: javalangObject): void;
					});
					public onProgress(param0: javalangObject): void;
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.google.android.gms.common.api.Status.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageException {
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
					public getIsRecoverableException(): boolean;
					public getErrorCode(): number;
					public getMessage(): string;
					public static fromException(param0: javalangThrowable): com.google.firebase.storage.StorageException;
					public static fromExceptionAndHttpCode(param0: javalangThrowable, param1: number): com.google.firebase.storage.StorageException;
					public getCause(): javalangThrowable;
					public getHttpResultCode(): number;
					public static fromErrorStatus(param0: com.google.android.gms.common.api.Status): com.google.firebase.storage.StorageException;
				}
				export module StorageException {
					export class ErrorCode {
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageException$ErrorCode interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
import javautilList = java.util.List;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageMetadata.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageMetadata {
					public getMd5Hash(): string;
					public getCreationTimeMillis(): number;
					public getBucket(): string;
					public getContentType(): string;
					public getCustomMetadataKeys(): javautilSet;
					public getCustomMetadata(param0: string): string;
					public getMetadataGeneration(): string;
					public getUpdatedTimeMillis(): number;
					public getCacheControl(): string;
					public getContentLanguage(): string;
					public getPath(): string;
					public getDownloadUrl(): androidnetUri;
					public getDownloadUrls(): javautilList;
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
					export class zza {
					}
				}
			}
		}
	}
}

import javaioFile = java.io.File;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.storage.FileDownloadTask.d.ts" />
/// <reference path="./com.google.firebase.storage.FirebaseStorage.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageMetadata.d.ts" />
/// <reference path="./com.google.firebase.storage.StreamDownloadTask.d.ts" />
/// <reference path="./com.google.firebase.storage.UploadTask.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageReference {
					public putStream(param0: javaioInputStream): com.google.firebase.storage.UploadTask;
					public putFile(param0: androidnetUri, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public getMetadata(): com.google.android.gms.tasks.Task;
					public getBucket(): string;
					public getStream(param0: com.google.firebase.storage.StreamDownloadTask.StreamProcessor): com.google.firebase.storage.StreamDownloadTask;
					public putFile(param0: androidnetUri, param1: com.google.firebase.storage.StorageMetadata, param2: androidnetUri): com.google.firebase.storage.UploadTask;
					public getParent(): com.google.firebase.storage.StorageReference;
					public getStorage(): com.google.firebase.storage.FirebaseStorage;
					public getStream(): com.google.firebase.storage.StreamDownloadTask;
					public toString(): string;
					public putBytes(param0: native.Array<number>, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public putFile(param0: androidnetUri): com.google.firebase.storage.UploadTask;
					public getBytes(param0: number): com.google.android.gms.tasks.Task;
					public getFile(param0: javaioFile): com.google.firebase.storage.FileDownloadTask;
					public hashCode(): number;
					public putStream(param0: javaioInputStream, param1: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public getDownloadUrl(): com.google.android.gms.tasks.Task;
					public getRoot(): com.google.firebase.storage.StorageReference;
					public getActiveDownloadTasks(): javautilList;
					public delete(): com.google.android.gms.tasks.Task;
					public equals(param0: javalangObject): boolean;
					public getFile(param0: androidnetUri): com.google.firebase.storage.FileDownloadTask;
					public child(param0: string): com.google.firebase.storage.StorageReference;
					public getPath(): string;
					public putBytes(param0: native.Array<number>): com.google.firebase.storage.UploadTask;
					public getName(): string;
					public getActiveUploadTasks(): javautilList;
					public updateMetadata(param0: com.google.firebase.storage.StorageMetadata): com.google.android.gms.tasks.Task;
				}
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Continuation.d.ts" />
/// <reference path="./com.google.android.gms.tasks.OnCompleteListener.d.ts" />
/// <reference path="./com.google.android.gms.tasks.OnFailureListener.d.ts" />
/// <reference path="./com.google.android.gms.tasks.OnSuccessListener.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.storage.CancellableTask.d.ts" />
/// <reference path="./com.google.firebase.storage.ControllableTask.d.ts" />
/// <reference path="./com.google.firebase.storage.OnPausedListener.d.ts" />
/// <reference path="./com.google.firebase.storage.OnProgressListener.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageTask.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class StorageTask extends com.google.firebase.storage.ControllableTask {
					public mSyncObject: javalangObject;
					public removeOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask;
					public pause(): boolean;
					public getResult(): com.google.firebase.storage.StorageTask.ProvideError;
					public addOnProgressListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public getResult(param0: javalangClass): com.google.firebase.storage.StorageTask.ProvideError;
					public onSuccess(): void;
					public onPaused(): void;
					public isCanceled(): boolean;
					public onQueued(): void;
					public onFailure(): void;
					public onCanceled(): void;
					public constructor();
					public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask;
					public isSuccessful(): boolean;
					public addOnCompleteListener(param0: androidappActivity, param1: com.google.android.gms.tasks.OnCompleteListener): com.google.firebase.storage.StorageTask;
					public continueWith(param0: javautilconcurrentExecutor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public getException(): javalangException;
					public addOnPausedListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
					public addOnProgressListener(param0: androidappActivity, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.StorageTask;
					public addOnSuccessListener(param0: javautilconcurrentExecutor, param1: com.google.android.gms.tasks.OnSuccessListener): com.google.firebase.storage.StorageTask;
					public addOnSuccessListener(param0: androidappActivity, param1: com.google.android.gms.tasks.OnSuccessListener): com.google.firebase.storage.StorageTask;
					public addOnCompleteListener(param0: javautilconcurrentExecutor, param1: com.google.android.gms.tasks.OnCompleteListener): com.google.firebase.storage.StorageTask;
					public continueWithTask(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnPausedListener(param0: androidappActivity, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
					public cancel(): boolean;
					public isInProgress(): boolean;
					public resume(): boolean;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public removeOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener): com.google.firebase.storage.StorageTask;
					public onProgress(): void;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener): com.google.firebase.storage.StorageTask;
					public continueWithTask(param0: javautilconcurrentExecutor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.StorageTask;
					public removeOnPausedListener(param0: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.StorageTask;
					public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener): com.google.firebase.storage.StorageTask;
					public getSnapshot(): com.google.firebase.storage.StorageTask.ProvideError;
					public addOnProgressListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.StorageTask;
					public removeOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener): com.google.firebase.storage.StorageTask;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.ControllableTask;
					public addOnFailureListener(param0: javautilconcurrentExecutor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask;
					public continueWith(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnProgressListener(param0: androidappActivity, param1: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.CancellableTask;
					public addOnPausedListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.StorageTask;
					public removeOnProgressListener(param0: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.StorageTask;
					public addOnFailureListener(param0: androidappActivity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener): com.google.firebase.storage.StorageTask;
					public addOnPausedListener(param0: androidappActivity, param1: com.google.firebase.storage.OnPausedListener): com.google.firebase.storage.StorageTask;
				}
				export module StorageTask {
					export class ProvideError {
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageTask$ProvideError interface with the provided implementation.
						 */
						public constructor(implementation: {
							getError(): javalangException;
						});
						public getError(): javalangException;
					}
					export class SnapshotBase {
						public constructor(param0: com.google.firebase.storage.StorageTask, param1: javalangException);
						public getTask(): com.google.firebase.storage.StorageTask;
						public getStorage(): com.google.firebase.storage.StorageReference;
						public getError(): javalangException;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StreamDownloadTask extends com.google.firebase.storage.StorageTask {
					public onProgress(): void;
					public pause(): boolean;
					public onCanceled(): void;
					public resume(): boolean;
					public schedule(): void;
				}
				export module StreamDownloadTask {
					export class StreamProcessor {
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StreamDownloadTask$StreamProcessor interface with the provided implementation.
						 */
						public constructor(implementation: {
							doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: javaioInputStream): void;
						});
						public doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: javaioInputStream): void;
					}
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public getTotalByteCount(): number;
						public getBytesTransferred(): number;
						public getStream(): javaioInputStream;
						public getError(): javalangException;
					}
					export class zza {
						public read(): number;
						public skip(param0: number): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public available(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageMetadata.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class UploadTask extends com.google.firebase.storage.StorageTask {
					public onCanceled(): void;
					public resetState(): void;
					public schedule(): void;
				}
				export module UploadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public getTotalByteCount(): number;
						public getDownloadUrl(): androidnetUri;
						public getMetadata(): com.google.firebase.storage.StorageMetadata;
						public getBytesTransferred(): number;
						public getUploadSessionUri(): androidnetUri;
						public getError(): javalangException;
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
				export class zza {
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzaa {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzab {
					/**
					 * Constructs a new instance of the com.google.firebase.storage.zzab interface with the provided implementation.
					 */
					public constructor(implementation: {
						zzi(param0: javalangObject, param1: javalangObject): void;
					});
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.TaskCompletionSource.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageMetadata.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzac {
					public constructor(param0: com.google.firebase.storage.StorageReference, param1: com.google.android.gms.tasks.TaskCompletionSource, param2: com.google.firebase.storage.StorageMetadata);
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
				export class zzad {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.TaskCompletionSource.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzb {
					public run(): void;
					public constructor(param0: com.google.firebase.storage.StorageReference, param1: com.google.android.gms.tasks.TaskCompletionSource);
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.TaskCompletionSource.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzc {
					public run(): void;
					public constructor(param0: com.google.firebase.storage.StorageReference, param1: com.google.android.gms.tasks.TaskCompletionSource);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzd {
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zze {
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzf {
					public onFailure(param0: javalangException): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzg {
					public onFailure(param0: javalangException): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzh {
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzi {
					public doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: javaioInputStream): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzj {
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzk {
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzl {
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzm {
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzn {
					public zzi(param0: javalangObject, param1: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzo {
					public onComplete(param0: com.google.android.gms.tasks.Task): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzp {
					public onComplete(param0: com.google.android.gms.tasks.Task): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzq {
					public onSuccess(param0: javalangObject): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzr {
					public onFailure(param0: javalangException): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzs {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.storage.StorageReference.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageTask.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzt {
					public zzb(param0: com.google.firebase.storage.StorageTask): void;
					public zza(param0: com.google.firebase.storage.StorageReference): javautilList;
					public zzb(param0: com.google.firebase.storage.StorageReference): javautilList;
					public zzc(param0: com.google.firebase.storage.StorageTask): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzu {
					public static zzt(param0: javalangRunnable): void;
					public static zzs(param0: javalangRunnable): void;
					public constructor();
					public static zzr(param0: javalangRunnable): void;
					public static zzq(param0: javalangRunnable): void;
				}
			}
		}
	}
}

import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzv {
					public newThread(param0: javalangRunnable): javalangThread;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzw {
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.firebase.storage.StorageTask.d.ts" />
/// <reference path="./com.google.firebase.storage.zzab.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzx {
					public zza(param0: androidappActivity, param1: javautilconcurrentExecutor, param2: javalangObject): void;
					public zzcd(param0: javalangObject): void;
					public zzcik(): void;
					public constructor(param0: com.google.firebase.storage.StorageTask, param1: number, param2: com.google.firebase.storage.zzab);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class zzy {
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
				export class zzz {
					public run(): void;
				}
			}
		}
	}
}

