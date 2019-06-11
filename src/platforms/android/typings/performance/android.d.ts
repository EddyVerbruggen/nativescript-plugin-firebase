/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export module descriptors {
						export module com {
							export module google {
								export module firebase {
									export module perf {
										export class ModuleDescriptor {
											public static class: java.lang.Class<com.google.android.gms.dynamite.descriptors.com.google.firebase.perf.ModuleDescriptor>;
											public static MODULE_ID: string;
											public static MODULE_VERSION: number;
											public constructor();
										}
									}
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
			export module perf {
				export class FirebasePerfRegistrar {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerfRegistrar>;
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
			export module perf {
				export class FirebasePerformance {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance>;
					public static MAX_TRACE_NAME_LENGTH: number;
					public setPerformanceCollectionEnabled(param0: boolean): void;
					public newHttpMetric(param0: string, param1: string): com.google.firebase.perf.metrics.HttpMetric;
					public newHttpMetric(param0: java.net.URL, param1: string): com.google.firebase.perf.metrics.HttpMetric;
					public static getInstance(): com.google.firebase.perf.FirebasePerformance;
					public isPerformanceCollectionEnabled(): boolean;
					public getAttributes(): java.util.Map<string,string>;
					public newTrace(param0: string): com.google.firebase.perf.metrics.Trace;
					public static startTrace(param0: string): com.google.firebase.perf.metrics.Trace;
				}
				export module FirebasePerformance {
					export class HttpMethod {
						public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance.HttpMethod>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.FirebasePerformance$HttpMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static HEAD: string;
						public static TRACE: string;
						public static DELETE: string;
						public static POST: string;
						public static GET: string;
						public static CONNECT: string;
						public static OPTIONS: string;
						public static PUT: string;
						public static PATCH: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class FeatureControl {
						public static class: java.lang.Class<com.google.firebase.perf.internal.FeatureControl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class GaugeManager {
						public static class: java.lang.Class<com.google.firebase.perf.internal.GaugeManager>;
					}
					export module GaugeManager {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.perf.internal.GaugeManager.zza>;
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
			export module perf {
				export module internal {
					export class RemoteConfigManager {
						public static class: java.lang.Class<com.google.firebase.perf.internal.RemoteConfigManager>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class SessionManager extends com.google.firebase.perf.internal.zzb {
						public static class: java.lang.Class<com.google.firebase.perf.internal.SessionManager>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zza>;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
					export module zza {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.perf.internal.zza.zza>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.internal.zza$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase-perf.zzbt*/): void;
							});
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
			export module perf {
				export module internal {
					export class zzb extends com.google.firebase.perf.internal.zza.zza {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzb>;
						public constructor();
						public constructor(param0: any /* com.google.firebase.perf.internal.zza*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzc {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzd extends com.google.firebase.perf.internal.zzr {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zze {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zze>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzf {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzf>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzg {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzg>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzh {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzh>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzi extends com.google.firebase.perf.internal.zzr {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzj {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzj>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzk extends com.google.firebase.perf.internal.zzr {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzk>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzl extends com.google.firebase.perf.internal.zzr {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzm {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzm>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzn {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzo {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzo>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzp {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzp>;
						public getProcessName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzq {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzq>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.internal.zzq>*/;
						public isExpired(): boolean;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export abstract class zzr {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzr>;
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
			export module perf {
				export module internal {
					export class zzs {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzs>;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzt extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.internal.zzq>*/ {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzu {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzv {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzv>;
						public static values(): any /* native.Array<com.google.firebase.perf.internal.zzv>*/;
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
			export module perf {
				export module internal {
					export class zzx {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzx>;
						public onFailure(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzy {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzy>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module internal {
					export class zzz {
						public static class: java.lang.Class<com.google.firebase.perf.internal.zzz>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.firebase.perf.internal.zzq*/): void;
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
			export module perf {
				export module metrics {
					export class AddTrace {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AddTrace>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.metrics.AddTrace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							name(): string;
							enabled(): boolean;
						});
						public constructor();
						public name(): string;
						public enabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class AppStartTrace {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public static setLauncherActivityOnCreateTime(param0: string): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public static setLauncherActivityOnResumeTime(param0: string): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public static setLauncherActivityOnStartTime(param0: string): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
					export module AppStartTrace {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace.zza>;
							public constructor(param0: com.google.firebase.perf.metrics.AppStartTrace);
							public run(): void;
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
			export module perf {
				export module metrics {
					export class HttpMetric {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.HttpMetric>;
						public setResponseContentType(param0: string): void;
						public start(): void;
						public getAttributes(): java.util.Map<string,string>;
						public putAttribute(param0: string, param1: string): void;
						public removeAttribute(param0: string): void;
						public constructor(param0: java.net.URL, param1: string, param2: any /* com.google.firebase.perf.internal.zzc*/, param3: any /* com.google.android.gms.internal.firebase-perf.zzbg*/);
						public setRequestPayloadSize(param0: number): void;
						public setHttpResponseCode(param0: number): void;
						public stop(): void;
						public constructor(param0: string, param1: string, param2: any /* com.google.firebase.perf.internal.zzc*/, param3: any /* com.google.android.gms.internal.firebase-perf.zzbg*/);
						public getAttribute(param0: string): string;
						public setResponsePayloadSize(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class Trace extends com.google.firebase.perf.internal.zzb implements com.google.firebase.perf.internal.zzz {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.Trace>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.Trace>;
						public constructor();
						public incrementMetric(param0: string, param1: number): void;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public removeAttribute(param0: string): void;
						public constructor(param0: string, param1: any /* com.google.firebase.perf.internal.zzc*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzax*/, param3: any /* com.google.firebase.perf.internal.zza*/);
						public stop(): void;
						public finalize(): void;
						public constructor(param0: any /* com.google.firebase.perf.internal.zza*/);
						public start(): void;
						public getAttributes(): java.util.Map<string,string>;
						public putAttribute(param0: string, param1: string): void;
						public getLongMetric(param0: string): number;
						public putMetric(param0: string, param1: number): void;
						public getAttribute(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.zza>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.zza>*/;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
			export module perf {
				export module metrics {
					export class zzb extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.zza>*/ {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.Trace> {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class zzd {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class zze extends globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.Trace> {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfHttpClient {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfHttpClient>;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler, param4: org.apache.http.protocol.HttpContext): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler, param3: org.apache.http.protocol.HttpContext): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfOkHttpClient {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfOkHttpClient>;
						public static execute(param0: okhttp3.Call): okhttp3.Response;
						public static enqueue(param0: okhttp3.Call, param1: okhttp3.Callback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfUrlConnection {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfUrlConnection>;
						public static getContent(param0: java.net.URL): any;
						public static instrument(param0: any): any;
						public static getContent(param0: java.net.URL, param1: native.Array<java.lang.Class>): any;
						public static openStream(param0: java.net.URL): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.perf.network.zza>;
						public constructor(param0: java.io.InputStream, param1: any /* com.google.android.gms.internal.firebase-perf.zzau*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzbg*/);
						public read(): number;
						public skip(param0: number): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
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
			export module perf {
				export module network {
					export class zzb {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzb>;
						public getContentLength(): number;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zzc {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzc>;
						public constructor(param0: java.io.OutputStream, param1: any /* com.google.android.gms.internal.firebase-perf.zzau*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzbg*/);
						public close(): void;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public write(param0: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zzd {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzd>;
						public getContentLength(): number;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public constructor(param0: java.net.HttpURLConnection, param1: any /* com.google.android.gms.internal.firebase-perf.zzbg*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzau*/);
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zze {
						public static class: java.lang.Class<com.google.firebase.perf.network.zze>;
						public getContentLength(): number;
						public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getServerCertificates(): native.Array<java.security.cert.Certificate>;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getPeerPrincipal(): java.security.Principal;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getCipherSuite(): string;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getLocalPrincipal(): java.security.Principal;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zzf {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzf>;
						public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
						public constructor(param0: okhttp3.Callback, param1: any /* com.google.firebase.perf.internal.zzc*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzbg*/, param3: number);
						public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zzg<T>  extends org.apache.http.client.ResponseHandler<any> {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzg<any>>;
						public constructor(param0: org.apache.http.client.ResponseHandler<any>, param1: any /* com.google.android.gms.internal.firebase-perf.zzbg*/, param2: any /* com.google.android.gms.internal.firebase-perf.zzau*/);
						public handleResponse(param0: org.apache.http.HttpResponse): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class zzh {
						public static class: java.lang.Class<com.google.firebase.perf.network.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module provider {
					export class FirebasePerfProvider {
						public static class: java.lang.Class<com.google.firebase.perf.provider.FirebasePerfProvider>;
						public constructor();
						public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
						public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
						public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						public onCreate(): boolean;
						public getType(param0: globalAndroid.net.Uri): string;
						public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class zza {
					public static class: java.lang.Class<com.google.firebase.perf.zza>;
					public create(param0: com.google.firebase.components.ComponentContainer): any;
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.firebase-perf.zzaa:1
//com.google.android.gms.internal.firebase-perf.zzac:2
//com.google.android.gms.internal.firebase-perf.zzae:1
//com.google.android.gms.internal.firebase-perf.zzaf:1
//com.google.android.gms.internal.firebase-perf.zzai:1
//com.google.android.gms.internal.firebase-perf.zzdg:2
//com.google.android.gms.internal.firebase-perf.zzdh:1
//com.google.android.gms.internal.firebase-perf.zzdi:2
//com.google.android.gms.internal.firebase-perf.zzdk:1
//com.google.android.gms.internal.firebase-perf.zzef:1
//com.google.android.gms.internal.firebase-perf.zzek:1
//com.google.android.gms.internal.firebase-perf.zzem:1
//com.google.android.gms.internal.firebase-perf.zzep:2
//com.google.android.gms.internal.firebase-perf.zzep.zza:1
//com.google.android.gms.internal.firebase-perf.zzep.zzb:2
//com.google.android.gms.internal.firebase-perf.zzep.zzd:2
//com.google.android.gms.internal.firebase-perf.zzet:1
//com.google.android.gms.internal.firebase-perf.zzex:1
//com.google.android.gms.internal.firebase-perf.zzey:2
//com.google.android.gms.internal.firebase-perf.zzfd:1
//com.google.android.gms.internal.firebase-perf.zzfg:1
//com.google.android.gms.internal.firebase-perf.zzfr:2
//com.google.android.gms.internal.firebase-perf.zzfs:2
//com.google.android.gms.internal.firebase-perf.zzfu:2
//com.google.android.gms.internal.firebase-perf.zzgd:1
//com.google.android.gms.internal.firebase-perf.zzge:1
//com.google.android.gms.internal.firebase-perf.zzgk:1
//com.google.android.gms.internal.firebase-perf.zzgl:1
//com.google.android.gms.internal.firebase-perf.zzgn:1
//com.google.android.gms.internal.firebase-perf.zzgs:2
//com.google.android.gms.internal.firebase-perf.zzh:1
//com.google.android.gms.internal.firebase-perf.zzhf:2
//com.google.android.gms.internal.firebase-perf.zzj:1
//com.google.android.gms.internal.firebase-perf.zzl:1
//com.google.android.gms.internal.firebase-perf.zzm:1
//com.google.android.gms.internal.firebase-perf.zzp:1
//com.google.android.gms.internal.firebase-perf.zzq:1
//com.google.android.gms.internal.firebase-perf.zzr:1
//com.google.android.gms.internal.firebase-perf.zzs:1
//com.google.android.gms.internal.firebase-perf.zzt:1
//com.google.android.gms.internal.firebase-perf.zzu:1
//com.google.android.gms.internal.firebase-perf.zzv:2
//com.google.android.gms.internal.firebase-perf.zzx:1
//com.google.android.gms.internal.firebase-perf.zzy:2
//com.google.android.gms.internal.firebase-perf.zzz:2
//com.google.firebase.perf.network.zzg:1

