/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
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
					export module config {
						export class zzaa extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaa>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzab {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzab>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzab>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: number, param2: com.google.android.gms.common.data.DataHolder, param3: string, param4: string, param5: string, param6: java.util.List<string>, param7: number, param8: any /* java.util.List<com.google.android.gms.internal.config.zzl>*/, param9: number, param10: number);
						}
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
					export module config {
						export class zzac extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzab>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzac>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzad>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzad>*/;
							public getStatusCode(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getThrottleEndTimeMillis(): number;
							public constructor(param0: number, param1: com.google.android.gms.common.data.DataHolder, param2: number, param3: com.google.android.gms.common.data.DataHolder);
						}
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
					export module config {
						export class zzae extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzad>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzae>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzaf {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.common.api.Status, param1: native.Array<number>): void;
								zza(param0: com.google.android.gms.common.api.Status, param1: java.util.Map): void;
								zza(param0: com.google.android.gms.common.api.Status): void;
								zza(param0: com.google.android.gms.common.api.Status, param1: any /* com.google.android.gms.internal.config.zzad*/): void;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export abstract class zzag extends com.google.android.gms.internal.config.zzb implements com.google.android.gms.internal.config.zzaf {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzag>;
							public constructor();
							public constructor(param0: string);
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
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
					export module config {
						export class zzah {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzah>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.config.zzaf*/, param1: any /* com.google.android.gms.internal.config.zzab*/): void;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzai extends com.google.android.gms.internal.config.zza implements com.google.android.gms.internal.config.zzah {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzai>;
						}
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
					export module config {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzaj>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Bundle);
						}
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
					export module config {
						export class zzak extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzaj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzak>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzal>;
							public constructor(param0: number, param1: number);
							public getResourceId(): number;
						}
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
					export module config {
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzam>;
							public constructor(param0: com.google.firebase.abt.FirebaseABTesting, param1: java.util.List<native.Array<number>>);
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzan>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.config.zzao*/, param2: any /* com.google.android.gms.internal.config.zzao*/, param3: any /* com.google.android.gms.internal.config.zzao*/, param4: any /* com.google.android.gms.internal.config.zzar*/);
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzao {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzao>;
							public constructor(param0: java.util.Map<string,java.util.Map<string,native.Array<number>>>, param1: number, param2: java.util.List<native.Array<number>>);
							public getTimestamp(): number;
							public setTimestamp(param0: number): void;
						}
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
					export module config {
						export class zzap extends com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzap>;
							public constructor();
							public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
							public getLastFetchStatus(): number;
							public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
							public getFetchTimeMillis(): number;
						}
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
					export module config {
						export class zzaq extends com.google.firebase.remoteconfig.FirebaseRemoteConfigValue {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaq>;
							public static UTF_8: java.nio.charset.Charset;
							public asLong(): number;
							public asDouble(): number;
							public asBoolean(): boolean;
							public asString(): string;
							public asByteArray(): native.Array<number>;
							public constructor(param0: native.Array<number>, param1: number);
							public getSource(): number;
						}
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
					export module config {
						export class zzar {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzar>;
							public constructor();
							public getLastFetchStatus(): number;
							public isDeveloperModeEnabled(): boolean;
						}
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
					export module config {
						export class zzas extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzas>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzas>;
							public timestamp: number;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzat extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzat>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzat>;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzau extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzau>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzau>;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzav extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzav>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzav>;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzaw extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzaw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaw>;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzax extends java.lang.Object /* com.google.android.gms.internal.config.zzbc<com.google.android.gms.internal.config.zzax>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzax>;
							public resourceId: number;
							public constructor();
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzay {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzay>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzaz {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzaz>;
							public readString(): string;
							public getPosition(): number;
							public readBytes(): native.Array<number>;
						}
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
					export module config {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
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
					export module config {
						export class zzba {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzba>;
						}
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
					export module config {
						export class zzbb {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbb>;
						}
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
					export module config {
						export abstract class zzbc<M>  extends java.lang.Object /* com.google.android.gms.internal.config.zzbi*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbc<any>>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbd<M, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbd<any,any>>;
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbe>;
							public hashCode(): number;
							public isEmpty(): boolean;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbf {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbf>;
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbg {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbg>;
							public static UTF_8: java.nio.charset.Charset;
							public static equals(param0: native.Array<any>, param1: native.Array<any>): boolean;
							public static hashCode(param0: native.Array<any>): number;
						}
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
					export module config {
						export class zzbh {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbh>;
							public constructor(param0: string);
						}
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
					export module config {
						export abstract class zzbi {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbi>;
							public constructor();
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbj {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbj>;
						}
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
					export module config {
						export class zzbk {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbk>;
							public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzbl {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzbl>;
						}
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
					export module config {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzc>;
						}
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
					export module config {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zze>;
							public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
						}
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
					export module config {
						export class zzf extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.internal.config.zzw,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzf>;
						}
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
					export module config {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.common.api.GoogleApiClient, param1: any /* com.google.android.gms.internal.config.zzi*/): any /* com.google.android.gms.common.api.PendingResult<com.google.android.gms.internal.config.zzk>*/;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzh {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzh>;
						}
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
					export module config {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzi>;
							public getGmpAppId(): string;
						}
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
					export module config {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzj>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.config.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getThrottleEndTimeMillis(): number;
								zzh(): java.util.List<native.Array<number>>;
								getStatus(): com.google.android.gms.common.api.Status;
								zza(param0: string, param1: native.Array<number>, param2: string): native.Array<number>;
								zzi(): java.util.Map<string,java.util.Set<string>>;
							});
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
							public getThrottleEndTimeMillis(): number;
						}
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
					export module config {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzl>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzl>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
						}
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
					export module config {
						export class zzm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzm>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzn {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzn>;
						}
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
					export module config {
						export class zzo extends com.google.android.gms.internal.config.zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzo>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzp extends com.google.android.gms.internal.config.zzs {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzp>;
						}
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
					export module config {
						export class zzq extends com.google.android.gms.internal.config.zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzq>;
						}
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
					export module config {
						export abstract class zzr<R>  extends java.lang.Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.config.zzw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzr<any>>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
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
					export module config {
						export abstract class zzs extends java.lang.Object /* com.google.android.gms.internal.config.zzr<com.google.android.gms.internal.config.zzk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzs>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						}
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
					export module config {
						export class zzt extends com.google.android.gms.internal.config.zzq {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzt>;
						}
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
					export module config {
						export class zzu extends com.google.android.gms.internal.config.zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzu>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: java.util.Map<string,java.util.TreeMap<string,native.Array<number>>>, param2: number, param3: java.util.List<native.Array<number>>);
							public getStatus(): com.google.android.gms.common.api.Status;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: java.util.Map<string,java.util.TreeMap<string,native.Array<number>>>);
							public constructor(param0: com.google.android.gms.common.api.Status, param1: java.util.Map<string,java.util.TreeMap<string,native.Array<number>>>, param2: java.util.List<native.Array<number>>);
							public getThrottleEndTimeMillis(): number;
						}
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
					export module config {
						export class zzv extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzv>;
							public constructor(param0: globalAndroid.content.Context);
						}
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
					export module config {
						export class zzw extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.config.zzah>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzw>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public getServiceDescriptor(): string;
						}
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
					export module config {
						export class zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzx>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzx>*/;
							public constructor(param0: native.Array<number>);
							public getPayload(): native.Array<number>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
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
					export module config {
						export class zzy extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzy>;
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
		export module android {
			export module gms {
				export module internal {
					export module config {
						export class zzz {
							public static class: java.lang.Class<com.google.android.gms.internal.config.zzz>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.config.zzz>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
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
			export module remoteconfig {
				export class FirebaseRemoteConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfig>;
					public static DEFAULT_VALUE_FOR_STRING: string;
					public static DEFAULT_VALUE_FOR_LONG: number;
					public static DEFAULT_VALUE_FOR_DOUBLE: number;
					public static DEFAULT_VALUE_FOR_BOOLEAN: boolean;
					public static DEFAULT_VALUE_FOR_BYTE_ARRAY: native.Array<number>;
					public static VALUE_SOURCE_STATIC: number;
					public static VALUE_SOURCE_DEFAULT: number;
					public static VALUE_SOURCE_REMOTE: number;
					public static LAST_FETCH_STATUS_SUCCESS: number;
					public static LAST_FETCH_STATUS_NO_FETCH_YET: number;
					public static LAST_FETCH_STATUS_FAILURE: number;
					public static LAST_FETCH_STATUS_THROTTLED: number;
					public setDefaults(param0: java.util.Map<string,any>): void;
					public setDefaults(param0: java.util.Map<string,any>, param1: string): void;
					public getKeysByPrefix(param0: string, param1: string): java.util.Set<string>;
					public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
					public static getInstance(): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public getString(param0: string, param1: string): string;
					public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
					public getBoolean(param0: string): boolean;
					public getValue(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
					public fetch(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getBoolean(param0: string, param1: string): boolean;
					public activateFetched(): boolean;
					public getLong(param0: string): number;
					public activateFetched(param0: string): boolean;
					public getLong(param0: string, param1: string): number;
					public getString(param0: string): string;
					public getByteArray(param0: string, param1: string): native.Array<number>;
					public getKeysByPrefix(param0: string): java.util.Set<string>;
					public getDouble(param0: string, param1: string): number;
					public fetch(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setDefaults(param0: number, param1: string): void;
					public getByteArray(param0: string): native.Array<number>;
					public getDouble(param0: string): number;
					public setDefaults(param0: number): void;
					public getValue(param0: string, param1: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigFetchException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigFetchThrottledException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException>;
					public getThrottleEndTimeMillis(): number;
					public constructor();
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigInfo {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFetchTimeMillis(): number;
						getLastFetchStatus(): number;
						getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					});
					public constructor();
					public getFetchTimeMillis(): number;
					public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					public getLastFetchStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigSettings {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings>;
					public isDeveloperModeEnabled(): boolean;
				}
				export module FirebaseRemoteConfigSettings {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder>;
						public constructor();
						public setDeveloperModeEnabled(param0: boolean): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public build(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigValue {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						asLong(): number;
						asDouble(): number;
						asString(): string;
						asByteArray(): native.Array<number>;
						asBoolean(): boolean;
						getSource(): number;
					});
					public constructor();
					public asLong(): number;
					public asBoolean(): boolean;
					public getSource(): number;
					public asByteArray(): native.Array<number>;
					public asString(): string;
					public asDouble(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class zza extends java.lang.Object /* com.google.android.gms.common.api.ResultCallback<com.google.android.gms.internal.config.zzk>*/ {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.zza>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class zzb {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.zzb>;
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.config.zzbc:1
//com.google.android.gms.internal.config.zzbd:2
//com.google.android.gms.internal.config.zzr:1

