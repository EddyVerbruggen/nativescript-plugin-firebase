/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public obtainAndWriteInterfaceToken(): globalAndroid.os.Parcel;
							public transactOneway(param0: number, param1: globalAndroid.os.Parcel): void;
							public transactAndReadExceptionReturnVoid(param0: number, param1: globalAndroid.os.Parcel): void;
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
					export module firebase_auth {
						export class zzaa extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaa>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential, param1: string);
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
					export module firebase_auth {
						export class zzab extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzab,com.google.android.gms.internal.firebase_auth.zzg.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzab>;
							public constructor();
							public isNewUser(): boolean;
							public getIdToken(): string;
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
					export module firebase_auth {
						export class zzac {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzac>;
							public constructor();
							public getErrorMessage(): string;
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
					export module firebase_auth {
						export class zzad {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzad>;
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
					export module firebase_auth {
						export class zzae {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzae>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzae>*/;
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
					export module firebase_auth {
						export class zzaf extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzgz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaf>;
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
					export module firebase_auth {
						export class zzag extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzag>;
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
					export module firebase_auth {
						export class zzah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzah,com.google.android.gms.internal.firebase_auth.zzg.zzc>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzah>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzah>*/;
							public constructor();
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
					export module firebase_auth {
						export class zzai extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzah>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzai>;
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
					export module firebase_auth {
						export class zzaj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzaj>*/;
							public constructor();
							public getLastSignInTimestamp(): number;
							public isNewUser(): boolean;
							public constructor(param0: string, param1: string, param2: boolean, param3: string, param4: string, param5: any /* com.google.android.gms.internal.firebase_auth.zzas*/, param6: string, param7: string, param8: number, param9: number, param10: boolean, param11: any /* com.google.firebase.auth.zzd*/);
							public getPhotoUri(): globalAndroid.net.Uri;
							public getCreationTimestamp(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getEmail(): string;
							public getPhoneNumber(): string;
							public isEmailVerified(): boolean;
							public getDisplayName(): string;
							public getLocalId(): string;
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
					export module firebase_auth {
						export class zzak extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzaj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzak>;
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
					export module firebase_auth {
						export class zzal {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzal>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzal>*/;
							public constructor();
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
					export module firebase_auth {
						export class zzam extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzal>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzam>;
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
					export module firebase_auth {
						export class zzan extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzan>;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzao extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzao,com.google.android.gms.internal.firebase_auth.zzgy.zza>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzao>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzao>*/;
							public constructor();
							public constructor(param0: string, param1: string, param2: java.lang.Long, param3: string);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toJson(): string;
							public isValid(): boolean;
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
					export module firebase_auth {
						export class zzap extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzap>;
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
					export module firebase_auth {
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaq>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzaq>*/;
							public constructor();
							public getPhotoUri(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getEmail(): string;
							public getProviderId(): string;
							public getPhoneNumber(): string;
							public getDisplayName(): string;
							public getRawUserInfo(): string;
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
					export module firebase_auth {
						export class zzar extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzaq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzar>;
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
					export module firebase_auth {
						export class zzas {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzas>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzas>*/;
							public constructor();
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
					export module firebase_auth {
						export class zzat extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzas>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzat>;
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
					export module firebase_auth {
						export class zzau extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzau>;
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
					export module firebase_auth {
						export class zzav extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzav,com.google.android.gms.internal.firebase_auth.zzg.zzd>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzav>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzav>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getEmail(): string;
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
					export module firebase_auth {
						export class zzaw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzav>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaw>;
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
					export module firebase_auth {
						export class zzax extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzn>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzax>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzax>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: number, param2: boolean, param3: string);
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
					export module firebase_auth {
						export class zzay extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzax>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzay>;
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
					export module firebase_auth {
						export class zzaz extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzaz>;
							public constructor();
							public getEmail(): string;
							public getPassword(): string;
							public getDisplayName(): string;
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
					export module firebase_auth {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzb>;
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
					export module firebase_auth {
						export class zzba extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzba,com.google.android.gms.internal.firebase_auth.zzg.zze>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzba>;
							public constructor();
							public getEmail(): string;
							public getIdToken(): string;
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
					export module firebase_auth {
						export class zzbb extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbb>;
							public constructor();
							public constructor(param0: string, param1: string, param2: string);
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
					export module firebase_auth {
						export class zzbc extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzbc,com.google.android.gms.internal.firebase_auth.zzg.zzf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbc>;
							public constructor();
							public getIdToken(): string;
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
					export module firebase_auth {
						export class zzbd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbd>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbd>*/;
							public constructor();
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
					export module firebase_auth {
						export class zzbe extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbe>;
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
					export module firebase_auth {
						export class zzbf extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzq>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbf>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbf>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
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
					export module firebase_auth {
						export class zzbg extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbg>;
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
					export module firebase_auth {
						export class zzbh extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzbh,com.google.android.gms.internal.firebase_auth.zzg.zzg>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbh>;
							public constructor();
							public isNewUser(): boolean;
							public getProviderId(): string;
							public getIdToken(): string;
							public getRawUserInfo(): string;
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
					export module firebase_auth {
						export class zzbi extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbi>;
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
					export module firebase_auth {
						export class zzbj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzbj,com.google.android.gms.internal.firebase_auth.zzg.zzh>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbj>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbj>*/;
							public constructor();
							public isNewUser(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getIdToken(): string;
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
					export module firebase_auth {
						export class zzbk extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzbj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbk>;
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
					export module firebase_auth {
						export class zzbl extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzs>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbl>;
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
					export module firebase_auth {
						export class zzbm extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzbm,com.google.android.gms.internal.firebase_auth.zzg.zzi>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbm>;
							public constructor();
							public getIdToken(): string;
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
					export module firebase_auth {
						export abstract class zzbn<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzeh*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbn<any,any>>;
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export abstract class zzbo<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzei*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbo<any,any>>;
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export abstract class zzbp<MessageType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzer<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbp<any>>;
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
					export module firebase_auth {
						export abstract class zzbq<E>  extends java.util.AbstractList<any> implements any /* com.google.android.gms.internal.firebase_auth.zzdg<any>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbq<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public clear(): void;
							public equals(param0: any): boolean;
							public addAll(param0: java.util.Collection<any>): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export class zzbr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbr>;
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
					export module firebase_auth {
						export class zzbs extends com.google.android.gms.internal.firebase_auth.zzbq<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbs>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public addBoolean(param0: boolean): void;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export abstract class zzbt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbt>;
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
					export module firebase_auth {
						export abstract class zzbu extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbu>;
							public size(): number;
							public hashCode(): number;
							public toString(): string;
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
					export module firebase_auth {
						export class zzbv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbv>;
							public hasNext(): boolean;
							public remove(): void;
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
					export module firebase_auth {
						export class zzbw extends com.google.android.gms.internal.firebase_auth.zzby {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbw>;
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
					export module firebase_auth {
						export class zzbx extends com.google.android.gms.internal.firebase_auth.zzcb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbx>;
							public size(): number;
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
					export module firebase_auth {
						export class zzby {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzby>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzby interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
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
					export module firebase_auth {
						export class zzbz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzbz>;
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
					export module firebase_auth {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzc>;
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
					export module firebase_auth {
						export abstract class zzca extends com.google.android.gms.internal.firebase_auth.zzbu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzca>;
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
					export module firebase_auth {
						export class zzcb extends com.google.android.gms.internal.firebase_auth.zzca {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcb>;
							public size(): number;
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
					export module firebase_auth {
						export class zzcc extends com.google.android.gms.internal.firebase_auth.zzby {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcc>;
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
					export module firebase_auth {
						export abstract class zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcd>;
							public readFloat(): number;
							public readDouble(): number;
							public readString(): string;
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
					export module firebase_auth {
						export class zzce {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzce>;
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
					export module firebase_auth {
						export class zzcf extends com.google.android.gms.internal.firebase_auth.zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcf>;
							public readFloat(): number;
							public readDouble(): number;
							public readString(): string;
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
					export module firebase_auth {
						export class zzcg extends com.google.android.gms.internal.firebase_auth.zzeu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcg>;
							public readFloat(): number;
							public getTag(): number;
							public readDouble(): number;
							public readString(): string;
							public readStringList(param0: java.util.List<string>): void;
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
					export module firebase_auth {
						export class zzch {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzch>;
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
					export module firebase_auth {
						export abstract class zzci extends com.google.android.gms.internal.firebase_auth.zzbt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci>;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public flush(): void;
						}
						export module zzci {
							export class zza extends com.google.android.gms.internal.firebase_auth.zzci {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci.zza>;
								public flush(): void;
								public write(param0: native.Array<number>, param1: number, param2: number): void;
							}
							export class zzb extends com.google.android.gms.internal.firebase_auth.zzci.zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci.zzb>;
								public flush(): void;
							}
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci.zzc>;
							}
							export class zzd extends com.google.android.gms.internal.firebase_auth.zzci {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci.zzd>;
								public flush(): void;
								public write(param0: native.Array<number>, param1: number, param2: number): void;
							}
							export class zze extends com.google.android.gms.internal.firebase_auth.zzci {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzci.zze>;
								public flush(): void;
								public write(param0: native.Array<number>, param1: number, param2: number): void;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzcj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcj>;
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
					export module firebase_auth {
						export class zzck extends com.google.android.gms.internal.firebase_auth.zzgj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzck>;
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
					export module firebase_auth {
						export class zzcl extends com.google.android.gms.internal.firebase_auth.zzbq<java.lang.Double> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcl>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export class zzcm<ContainingType, Type>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcm<any,any>>;
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
					export module firebase_auth {
						export class zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcn>;
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
					export module firebase_auth {
						export class zzco {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzco>;
						}
						export module zzco {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzco.zza>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export abstract class zzcp<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcp<any>>;
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
					export module firebase_auth {
						export class zzcq extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzcp<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcq>;
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
					export module firebase_auth {
						export class zzcr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcr>;
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
					export module firebase_auth {
						export class zzcs<FieldDescriptorType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcs<any>>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<FieldDescriptorType,any>>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
							public isImmutable(): boolean;
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
					export module firebase_auth {
						export class zzct {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzct>;
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
					export module firebase_auth {
						export class zzcu<T>  extends java.lang.Comparable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcu<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzcu<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzds(): number;
								zzdt(): any /* com.google.android.gms.internal.firebase_auth.zzgd*/;
								zzdu(): any /* com.google.android.gms.internal.firebase_auth.zzgi*/;
								zzdv(): boolean;
								zzdw(): boolean;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzei*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzeh*/): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzen*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzen*/): any /* com.google.android.gms.internal.firebase_auth.zzen*/;
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
					export module firebase_auth {
						export class zzcv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcv>;
							public id(): number;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzcv>*/;
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
					export module firebase_auth {
						export class zzcw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcw>;
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
					export module firebase_auth {
						export class zzcx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcx>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzcx>*/;
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
					export module firebase_auth {
						export class zzcy extends com.google.android.gms.internal.firebase_auth.zzbq<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcy>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export abstract class zzcz<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzcz<any>>;
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
					export module firebase_auth {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_auth {
						export class zzda extends com.google.android.gms.internal.firebase_auth.zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzda>;
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
					export module firebase_auth {
						export abstract class zzdb<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzbn<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb<any,any>>;
							public constructor();
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
						}
						export module zzdb {
							export class zza<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzbo<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb.zza<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzb<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzbp<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb.zzb<any>>;
								public constructor(param0: any);
								public constructor();
							}
							export abstract class zzc<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzdb<any,any>*/ implements any /* com.google.android.gms.internal.firebase_auth.zzej*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb.zzc<any,any>>;
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzd<ContainingType, Type>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzcm<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb.zzd<any,any>>;
							}
							export class zze extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdb.zze>;
								public static values$50KLMJ33DTMIUPRFDTJMOP9FE1P6UT3FC9QMCBQ7CLN6ASJ1EHIM8JB5EDPM2PR59HKN8P949LIN8Q3FCHA6UIBEEPNMMP9R0(): native.Array<number>;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzdc extends com.google.android.gms.internal.firebase_auth.zzbq<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdc>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getInt(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export class zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdd>;
							public static EMPTY_BYTE_ARRAY: native.Array<number>;
							public static hashCode(param0: native.Array<number>): number;
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
					export module firebase_auth {
						export class zzde {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzde>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzde interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzds(): number;
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
					export module firebase_auth {
						export class zzdf<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdf<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzdf<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzam(param0: number): T;
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
					export module firebase_auth {
						export class zzdg<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdg<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzdg<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzbs(): void;
								zzbr(): boolean;
								zzj(param0: number): any /* com.google.android.gms.internal.firebase_auth.zzdg<E>*/;
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
					export module firebase_auth {
						export class zzdh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdh>;
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
					export module firebase_auth {
						export class zzdi extends com.google.android.gms.internal.firebase_auth.zzdh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdi>;
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
					export module firebase_auth {
						export class zzdj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdj>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzdj>*/;
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
					export module firebase_auth {
						export class zzdk extends com.google.android.gms.internal.firebase_auth.zzdo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdk>;
							public hashCode(): number;
							public toString(): string;
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
					export module firebase_auth {
						export class zzdl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdl>;
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
					export module firebase_auth {
						export class zzdm<K>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdm<any>>;
							public getValue(): any;
							public getKey(): any;
							public setValue(param0: any): any;
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
					export module firebase_auth {
						export class zzdn<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdn<any>>;
							public constructor(param0: java.util.Iterator<java.util.Map.Entry<any,any>>);
							public hasNext(): boolean;
							public remove(): void;
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
					export module firebase_auth {
						export class zzdo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdo>;
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
					export module firebase_auth {
						export class zzdp extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzbq<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdp>;
							public constructor();
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public size(): number;
							public getRaw(param0: number): any;
							public clear(): void;
							public constructor(param0: number);
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export class zzdq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzdq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getRaw(param0: number): any;
								zzc(param0: any /* com.google.android.gms.internal.firebase_auth.zzbu*/): void;
								zzeo(): java.util.List<any>;
								zzep(): any /* com.google.android.gms.internal.firebase_auth.zzdq*/;
							});
							public constructor();
							public getRaw(param0: number): any;
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
					export module firebase_auth {
						export abstract class zzdr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdr>;
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
					export module firebase_auth {
						export class zzds {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzds>;
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
					export module firebase_auth {
						export class zzdt extends com.google.android.gms.internal.firebase_auth.zzdr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdt>;
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
					export module firebase_auth {
						export class zzdu extends com.google.android.gms.internal.firebase_auth.zzdr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdu>;
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
					export module firebase_auth {
						export class zzdv extends com.google.android.gms.internal.firebase_auth.zzbq<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdv>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getLong(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
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
					export module firebase_auth {
						export class zzdw extends com.google.android.gms.internal.firebase_auth.zzew {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdw>;
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
					export module firebase_auth {
						export class zzdx extends com.google.android.gms.internal.firebase_auth.zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdx>;
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
					export module firebase_auth {
						export class zzdy extends com.google.android.gms.internal.firebase_auth.zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdy>;
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
					export module firebase_auth {
						export class zzdz<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzdz<any,any>>;
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
					export module firebase_auth {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zze>;
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
					export module firebase_auth {
						export class zzea<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzea<any,any>>;
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
					export module firebase_auth {
						export class zzeb<K, V>  extends java.util.LinkedHashMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeb<any,any>>;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public hashCode(): number;
							public remove(param0: any): any;
							public clear(): void;
							public isMutable(): boolean;
							public put(param0: any, param1: any): any;
							public equals(param0: any): boolean;
							public putAll(param0: java.util.Map<any,any>): void;
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
					export module firebase_auth {
						export class zzec {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzec>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzi(param0: any): java.util.Map<any,any>;
								zzj(param0: any): java.util.Map<any,any>;
								zzk(param0: any): boolean;
								zzl(param0: any): any;
								zzm(param0: any): any;
								zzn(param0: any): any /* com.google.android.gms.internal.firebase_auth.zzea<any,any>*/;
								zzb(param0: any, param1: any): any;
								zzb(param0: number, param1: any, param2: any): number;
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
					export module firebase_auth {
						export class zzed extends com.google.android.gms.internal.firebase_auth.zzec {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzed>;
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
					export module firebase_auth {
						export class zzee {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzee>;
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
					export module firebase_auth {
						export class zzef {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzef>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzez(): number;
								zzfa(): boolean;
								zzfb(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
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
					export module firebase_auth {
						export class zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzeg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: java.lang.Class<any>): boolean;
								zzc(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.firebase_auth.zzef*/;
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
					export module firebase_auth {
						export class zzeh extends com.google.android.gms.internal.firebase_auth.zzej {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzeh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_auth.zzci*/): void;
								zzdq(): number;
								zzbo(): any /* com.google.android.gms.internal.firebase_auth.zzbu*/;
								zzea(): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zzdz(): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zzeb(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export class zzei extends com.google.android.gms.internal.firebase_auth.zzej {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzei>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzei interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzed(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								zzec(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzeh*/): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zzeb(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export class zzej {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzej>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzej interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzeb(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export class zzek {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzek>;
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
					export module firebase_auth {
						export class zzel<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzev<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzel<any>>;
							public hashCode(param0: any): number;
							public newInstance(): any;
							public equals(param0: any, param1: any): boolean;
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
					export module firebase_auth {
						export class zzem<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzev<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzem<any>>;
							public hashCode(param0: any): number;
							public newInstance(): any;
							public equals(param0: any, param1: any): boolean;
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
					export module firebase_auth {
						export class zzen extends com.google.android.gms.internal.firebase_auth.zzeh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzen>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzen interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzfc(): any /* com.google.android.gms.internal.firebase_auth.zzen*/;
								zzb(param0: any /* com.google.android.gms.internal.firebase_auth.zzci*/): void;
								zzdq(): number;
								zzbo(): any /* com.google.android.gms.internal.firebase_auth.zzbu*/;
								zzea(): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zzdz(): any /* com.google.android.gms.internal.firebase_auth.zzei*/;
								zzeb(): any /* com.google.android.gms.internal.firebase_auth.zzeh*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
					export module firebase_auth {
						export class zzeo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzeo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newInstance(param0: any): any;
							});
							public constructor();
							public newInstance(param0: any): any;
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
					export module firebase_auth {
						export class zzep extends com.google.android.gms.internal.firebase_auth.zzeo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzep>;
							public newInstance(param0: any): any;
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
					export module firebase_auth {
						export class zzeq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeq>;
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
					export module firebase_auth {
						export class zzer<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzcd*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzco*/): MessageType;
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
					export module firebase_auth {
						export class zzes {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzes>;
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
					export module firebase_auth {
						export class zzet extends com.google.android.gms.internal.firebase_auth.zzef {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzet>;
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
					export module firebase_auth {
						export class zzeu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzeu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzeu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzda(): number;
								getTag(): number;
								zzdb(): boolean;
								readDouble(): number;
								readFloat(): number;
								zzcd(): number;
								zzce(): number;
								zzcf(): number;
								zzcg(): number;
								zzch(): number;
								zzci(): boolean;
								readString(): string;
								zzcj(): string;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzco*/): any;
								zzb(param0: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzco*/): any;
								zzck(): any /* com.google.android.gms.internal.firebase_auth.zzbu*/;
								zzcl(): number;
								zzcm(): number;
								zzcn(): number;
								zzco(): number;
								zzcp(): number;
								zzcq(): number;
								zzc(param0: java.util.List<java.lang.Double>): void;
								zzd(param0: java.util.List<java.lang.Float>): void;
								zze(param0: java.util.List<java.lang.Long>): void;
								zzf(param0: java.util.List<java.lang.Long>): void;
								zzg(param0: java.util.List<java.lang.Integer>): void;
								zzh(param0: java.util.List<java.lang.Long>): void;
								zzi(param0: java.util.List<java.lang.Integer>): void;
								zzj(param0: java.util.List<java.lang.Boolean>): void;
								readStringList(param0: java.util.List<string>): void;
								zzk(param0: java.util.List<string>): void;
								zza(param0: java.util.List, param1: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/, param2: any /* com.google.android.gms.internal.firebase_auth.zzco*/): void;
								zzb(param0: java.util.List, param1: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/, param2: any /* com.google.android.gms.internal.firebase_auth.zzco*/): void;
								zzl(param0: any /* java.util.List<com.google.android.gms.internal.firebase_auth.zzbu>*/): void;
								zzm(param0: java.util.List<java.lang.Integer>): void;
								zzn(param0: java.util.List<java.lang.Integer>): void;
								zzo(param0: java.util.List<java.lang.Integer>): void;
								zzp(param0: java.util.List<java.lang.Long>): void;
								zzq(param0: java.util.List<java.lang.Integer>): void;
								zzr(param0: java.util.List<java.lang.Long>): void;
								zza(param0: java.util.Map, param1: any /* com.google.android.gms.internal.firebase_auth.zzea<any,any>*/, param2: any /* com.google.android.gms.internal.firebase_auth.zzco*/): void;
							});
							public constructor();
							public readFloat(): number;
							public getTag(): number;
							public readDouble(): number;
							public readString(): string;
							public readStringList(param0: java.util.List<string>): void;
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
					export module firebase_auth {
						export class zzev<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzev<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzev<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T, param1: any /* com.google.android.gms.internal.firebase_auth.zzgj*/): void;
								zza(param0: T, param1: any /* com.google.android.gms.internal.firebase_auth.zzeu*/, param2: any /* com.google.android.gms.internal.firebase_auth.zzco*/): void;
								zze(param0: T): void;
								zzp(param0: T): boolean;
								newInstance(): T;
								equals(param0: T, param1: T): boolean;
								hashCode(param0: T): number;
								zzc(param0: T, param1: T): void;
								zzo(param0: T): number;
							});
							public constructor();
							public equals(param0: T, param1: T): boolean;
							public newInstance(): T;
							public hashCode(param0: T): number;
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
					export module firebase_auth {
						export class zzew {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzew>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzew interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(param0: java.lang.Class): any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/;
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
					export module firebase_auth {
						export class zzex {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzex>;
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
					export module firebase_auth {
						export class zzey<K, V>  extends java.util.AbstractMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzey<any,any>>;
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public equals(param0: any): boolean;
							public isImmutable(): boolean;
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
					export module firebase_auth {
						export class zzez extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzey<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzez>;
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
					export module firebase_auth {
						export class zzf extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzf>;
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
					export module firebase_auth {
						export class zzfa extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfa>;
							public hasNext(): boolean;
							public remove(): void;
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
					export module firebase_auth {
						export class zzfb extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzfh*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfb>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
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
					export module firebase_auth {
						export class zzfc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfc>;
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
					export module firebase_auth {
						export class zzfd extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfd>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
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
					export module firebase_auth {
						export class zzfe extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfe>;
							public iterator(): java.util.Iterator<any>;
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
					export module firebase_auth {
						export class zzff extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzff>;
							public getValue(): any;
							public hashCode(): number;
							public toString(): string;
							public setValue(param0: any): any;
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
					export module firebase_auth {
						export class zzfg extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfg>;
							public hasNext(): boolean;
							public remove(): void;
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
					export module firebase_auth {
						export class zzfh extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfh>;
							public contains(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public clear(): void;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
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
					export module firebase_auth {
						export class zzfi extends com.google.android.gms.internal.firebase_auth.zzef {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfi>;
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
					export module firebase_auth {
						export class zzfj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfj>;
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
					export module firebase_auth {
						export class zzfk extends com.google.android.gms.internal.firebase_auth.zzfl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfk>;
							public size(): number;
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
					export module firebase_auth {
						export class zzfl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzfl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								size(): number;
								zzk(param0: number): number;
							});
							public constructor();
							public size(): number;
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
					export module firebase_auth {
						export class zzfm extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzdb<com.google.android.gms.internal.firebase_auth.zzfm,com.google.android.gms.internal.firebase_auth.zzfm.zza>*/ implements any /* com.google.android.gms.internal.firebase_auth.zzej*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfm>;
							public isInitialized(): boolean;
						}
						export module zzfm {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzdb.zza<com.google.android.gms.internal.firebase_auth.zzfm,com.google.android.gms.internal.firebase_auth.zzfm.zza>*/ implements any /* com.google.android.gms.internal.firebase_auth.zzej*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfm.zza>;
								public isInitialized(): boolean;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzfn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfn>;
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
					export module firebase_auth {
						export class zzfo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfo>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzeh*/);
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
					export module firebase_auth {
						export abstract class zzfp<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfp<any,any>>;
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
					export module firebase_auth {
						export class zzfq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfq>;
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
					export module firebase_auth {
						export class zzfr extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzfp<com.google.android.gms.internal.firebase_auth.zzfq,com.google.android.gms.internal.firebase_auth.zzfq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfr>;
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
					export module firebase_auth {
						export class zzfs extends java.util.AbstractList<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfs>;
							public listIterator(param0: number): java.util.ListIterator<string>;
							public iterator(): java.util.Iterator<string>;
							public size(): number;
							public getRaw(param0: number): any;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzdq*/);
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
					export module firebase_auth {
						export class zzft extends java.util.ListIterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzft>;
							public previousIndex(): number;
							public nextIndex(): number;
							public hasNext(): boolean;
							public remove(): void;
							public hasPrevious(): boolean;
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
					export module firebase_auth {
						export class zzfu extends java.util.Iterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfu>;
							public hasNext(): boolean;
							public remove(): void;
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
					export module firebase_auth {
						export class zzfv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfv>;
						}
						export module zzfv {
							export class zza extends com.google.android.gms.internal.firebase_auth.zzfv.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfv.zza>;
							}
							export class zzb extends com.google.android.gms.internal.firebase_auth.zzfv.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfv.zzb>;
							}
							export class zzc extends com.google.android.gms.internal.firebase_auth.zzfv.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfv.zzc>;
							}
							export abstract class zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfv.zzd>;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzfw extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfw>;
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
					export module firebase_auth {
						export class zzfx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfx>;
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
					export module firebase_auth {
						export abstract class zzfy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfy>;
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
					export module firebase_auth {
						export class zzfz extends com.google.android.gms.internal.firebase_auth.zzfy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzfz>;
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
					export module firebase_auth {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg>;
						}
						export module zzg {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zza>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zza>;
								public constructor();
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzb>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzb>;
								public constructor();
							}
							export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzc>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzc>;
								public constructor();
							}
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzd>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzd>;
								public constructor();
							}
							export class zze extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zze>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zze>;
								public constructor();
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzf>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzf>;
								public constructor();
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzg>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzg>;
								public constructor();
							}
							export class zzh extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzh>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzh>;
								public constructor();
							}
							export class zzi extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzg.zzi>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzg.zzi>;
								public constructor();
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzga {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzga>;
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
					export module firebase_auth {
						export class zzgb extends com.google.android.gms.internal.firebase_auth.zzfy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgb>;
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
					export module firebase_auth {
						export class zzgc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgc>;
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
					export module firebase_auth {
						export class zzgd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgd>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzgd>*/;
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
					export module firebase_auth {
						export class zzge extends com.google.android.gms.internal.firebase_auth.zzgd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzge>;
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
					export module firebase_auth {
						export class zzgf extends com.google.android.gms.internal.firebase_auth.zzgd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgf>;
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
					export module firebase_auth {
						export class zzgg extends com.google.android.gms.internal.firebase_auth.zzgd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgg>;
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
					export module firebase_auth {
						export class zzgh extends com.google.android.gms.internal.firebase_auth.zzgd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgh>;
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
					export module firebase_auth {
						export class zzgi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgi>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_auth.zzgi>*/;
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
					export module firebase_auth {
						export class zzgj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_auth.zzgj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzdf(): number;
								zzm(param0: number, param1: number): void;
								zzi(param0: number, param1: number): void;
								zzj(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzn(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzf(param0: number, param1: number): void;
								zzb(param0: number, param1: boolean): void;
								zza(param0: number, param1: string): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_auth.zzbu*/): void;
								zzd(param0: number, param1: number): void;
								zze(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zza(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/): void;
								zzb(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/): void;
								zzaj(param0: number): void;
								zzak(param0: number): void;
								zza(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzb(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzc(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzd(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zze(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzf(param0: number, param1: java.util.List<java.lang.Float>, param2: boolean): void;
								zzg(param0: number, param1: java.util.List<java.lang.Double>, param2: boolean): void;
								zzh(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzi(param0: number, param1: java.util.List<java.lang.Boolean>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<string>): void;
								zzb(param0: number, param1: any /* java.util.List<com.google.android.gms.internal.firebase_auth.zzbu>*/): void;
								zzj(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzk(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzl(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzm(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzn(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/): void;
								zzb(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_auth.zzev<any>*/): void;
								zza(param0: number, param1: any): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_auth.zzea<any,any>*/, param2: java.util.Map): void;
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
					export module firebase_auth {
						export class zzgk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgk>;
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
					export module firebase_auth {
						export class zzgl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgl>;
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
					export module firebase_auth {
						export class zzgm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgm>;
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
					export module firebase_auth {
						export abstract class zzgn<M>  extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgt*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgn<any>>;
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
					export module firebase_auth {
						export class zzgo<M, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgo<any,any>>;
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
					export module firebase_auth {
						export class zzgp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgp>;
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
					export module firebase_auth {
						export class zzgq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgq>;
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
					export module firebase_auth {
						export class zzgr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgr>;
							public static UTF_8: java.nio.charset.Charset;
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
					export module firebase_auth {
						export class zzgs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgs>;
							public constructor(param0: string, param1: java.lang.Exception);
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
					export module firebase_auth {
						export abstract class zzgt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgt>;
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
					export module firebase_auth {
						export class zzgu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgu>;
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
					export module firebase_auth {
						export class zzgv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgv>;
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
					export module firebase_auth {
						export class zzgw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgw>;
							public static EMPTY_STRING_ARRAY: native.Array<string>;
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
					export module firebase_auth {
						export class zzgx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgx>;
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
					export module firebase_auth {
						export class zzgy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgy>;
						}
						export module zzgy {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzgy.zza>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgy.zza>;
								public constructor();
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_auth {
						export class zzgz extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzgz>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzgz>;
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
					export module firebase_auth {
						export class zzh extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzh>;
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
					export module firebase_auth {
						export class zzi extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzi>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzi>;
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
					export module firebase_auth {
						export class zzj extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzj>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzj>;
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
					export module firebase_auth {
						export class zzk extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzk>;
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
					export module firebase_auth {
						export class zzl extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzl>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzl>;
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
					export module firebase_auth {
						export class zzm extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzm>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzm>;
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
					export module firebase_auth {
						export class zzn extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzn>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzn>;
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
					export module firebase_auth {
						export class zzo extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzo>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzo>;
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
					export module firebase_auth {
						export class zzp extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzp>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzp>;
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
					export module firebase_auth {
						export class zzq extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzq>;
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
					export module firebase_auth {
						export class zzr extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzr>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzr>;
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
					export module firebase_auth {
						export class zzs extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzs>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzs>;
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
					export module firebase_auth {
						export class zzt extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzt>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzt>;
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
					export module firebase_auth {
						export class zzu extends java.lang.Object /* com.google.android.gms.internal.firebase_auth.zzgn<com.google.android.gms.internal.firebase_auth.zzu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzu>;
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
					export module firebase_auth {
						export class zzv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzv>;
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzad*/);
							public getErrorMessage(): string;
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
					export module firebase_auth {
						export class zzw extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzh>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzw>;
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
					export module firebase_auth {
						export class zzx extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements any /* com.google.firebase.auth.api.internal.zzcg<com.google.android.gms.internal.firebase_auth.zzx,com.google.android.gms.internal.firebase_auth.zzg.zza>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzx>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzx>*/;
							public constructor();
							public getSignInMethods(): java.util.List<string>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: boolean, param2: string, param3: boolean, param4: any /* com.google.android.gms.internal.firebase_auth.zzbd*/, param5: java.util.List<string>);
							public getAllProviders(): java.util.List<string>;
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
					export module firebase_auth {
						export class zzy extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.firebase_auth.zzx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzy>;
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
					export module firebase_auth {
						export class zzz extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdp<com.google.android.gms.internal.firebase_auth.zzi>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_auth.zzz>;
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
		export module firebase {
			export module auth {
				export class ActionCodeResult {
					public static class: java.lang.Class<com.google.firebase.auth.ActionCodeResult>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.ActionCodeResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOperation(): number;
						getData(param0: number): string;
					});
					public constructor();
					public static RECOVER_EMAIL: number;
					public static ERROR: number;
					public static EMAIL: number;
					public static FROM_EMAIL: number;
					public static SIGN_IN_WITH_EMAIL_LINK: number;
					public static VERIFY_EMAIL: number;
					public static PASSWORD_RESET: number;
					public getOperation(): number;
					public getData(param0: number): string;
				}
				export module ActionCodeResult {
					export class ActionDataKey {
						public static class: java.lang.Class<com.google.firebase.auth.ActionCodeResult.ActionDataKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.ActionCodeResult$ActionDataKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class Operation {
						public static class: java.lang.Class<com.google.firebase.auth.ActionCodeResult.Operation>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.ActionCodeResult$Operation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module auth {
				export class ActionCodeSettings {
					public static class: java.lang.Class<com.google.firebase.auth.ActionCodeSettings>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.ActionCodeSettings>;
					public getRequestType(): number;
					public getUrl(): string;
					public static newBuilder(): com.google.firebase.auth.ActionCodeSettings.Builder;
					public getAndroidMinimumVersion(): string;
					public getAndroidPackageName(): string;
					public getAndroidInstallApp(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public canHandleCodeInApp(): boolean;
					public getIOSBundle(): string;
				}
				export module ActionCodeSettings {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.auth.ActionCodeSettings.Builder>;
						public setHandleCodeInApp(param0: boolean): com.google.firebase.auth.ActionCodeSettings.Builder;
						public setUrl(param0: string): com.google.firebase.auth.ActionCodeSettings.Builder;
						public setAndroidPackageName(param0: string, param1: boolean, param2: string): com.google.firebase.auth.ActionCodeSettings.Builder;
						public build(): com.google.firebase.auth.ActionCodeSettings;
						public setIOSBundleId(param0: string): com.google.firebase.auth.ActionCodeSettings.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class AdditionalUserInfo {
					public static class: java.lang.Class<com.google.firebase.auth.AdditionalUserInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.AdditionalUserInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getProviderId(): string;
						getProfile(): java.util.Map<string,any>;
						getUsername(): string;
						isNewUser(): boolean;
					});
					public constructor();
					public getUsername(): string;
					public getProviderId(): string;
					public getProfile(): java.util.Map<string,any>;
					public isNewUser(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export abstract class AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.AuthCredential>;
					public getSignInMethod(): string;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class AuthResult {
					public static class: java.lang.Class<com.google.firebase.auth.AuthResult>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.AuthResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUser(): com.google.firebase.auth.FirebaseUser;
						getAdditionalUserInfo(): com.google.firebase.auth.AdditionalUserInfo;
					});
					public constructor();
					public getAdditionalUserInfo(): com.google.firebase.auth.AdditionalUserInfo;
					public getUser(): com.google.firebase.auth.FirebaseUser;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class EmailAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.EmailAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.EmailAuthCredential>;
					public getPassword(): string;
					public getSignInMethod(): string;
					public static isSignInWithEmailLink(param0: string): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class EmailAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.EmailAuthProvider>;
					public static PROVIDER_ID: string;
					public static EMAIL_LINK_SIGN_IN_METHOD: string;
					public static EMAIL_PASSWORD_SIGN_IN_METHOD: string;
					public static getCredentialWithLink(param0: string, param1: string): com.google.firebase.auth.AuthCredential;
					public static getCredential(param0: string, param1: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FacebookAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.FacebookAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.FacebookAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FacebookAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.FacebookAuthProvider>;
					public static PROVIDER_ID: string;
					public static FACEBOOK_SIGN_IN_METHOD: string;
					public static getCredential(param0: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuth {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth>;
					public getLanguageCode(): string;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.auth.FirebaseAuth;
					public getCurrentUser(): com.google.firebase.auth.FirebaseUser;
					public signInWithCredential(param0: com.google.firebase.auth.AuthCredential): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getUid(): string;
					public useAppLanguage(): void;
					public getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
					public applyActionCode(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public isSignInWithEmailLink(param0: string): boolean;
					public sendPasswordResetEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public fetchProvidersForEmail(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.ProviderQueryResult>;
					public confirmPasswordReset(param0: string, param1: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setLanguageCode(param0: string): void;
					public addIdTokenListener(param0: com.google.firebase.auth.FirebaseAuth.IdTokenListener): void;
					public addIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
					public sendPasswordResetEmail(param0: string, param1: com.google.firebase.auth.ActionCodeSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
					public sendSignInLinkToEmail(param0: string, param1: com.google.firebase.auth.ActionCodeSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
					public checkActionCode(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.ActionCodeResult>;
					public getFirebaseAuthSettings(): com.google.firebase.auth.FirebaseAuthSettings;
					public removeAuthStateListener(param0: com.google.firebase.auth.FirebaseAuth.AuthStateListener): void;
					public verifyPasswordResetCode(param0: string): com.google.android.gms.tasks.Task<string>;
					public signInWithCustomToken(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public removeIdTokenListener(param0: com.google.firebase.auth.FirebaseAuth.IdTokenListener): void;
					public signInWithEmailLink(param0: string, param1: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public updateCurrentUser(param0: com.google.firebase.auth.FirebaseUser): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setFirebaseUIVersion(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public createUserWithEmailAndPassword(param0: string, param1: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public signInAnonymously(): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public fetchSignInMethodsForEmail(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.SignInMethodQueryResult>;
					public signInWithEmailAndPassword(param0: string, param1: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getApp(): com.google.firebase.FirebaseApp;
					public addAuthStateListener(param0: com.google.firebase.auth.FirebaseAuth.AuthStateListener): void;
					public signOut(): void;
					public static getInstance(): com.google.firebase.auth.FirebaseAuth;
					public constructor(param0: com.google.firebase.FirebaseApp);
					public removeIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
				}
				export module FirebaseAuth {
					export class AuthStateListener {
						public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth.AuthStateListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.FirebaseAuth$AuthStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAuthStateChanged(param0: com.google.firebase.auth.FirebaseAuth): void;
						});
						public constructor();
						public onAuthStateChanged(param0: com.google.firebase.auth.FirebaseAuth): void;
					}
					export class IdTokenListener {
						public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth.IdTokenListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.FirebaseAuth$IdTokenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onIdTokenChanged(param0: com.google.firebase.auth.FirebaseAuth): void;
						});
						public constructor();
						public onIdTokenChanged(param0: com.google.firebase.auth.FirebaseAuth): void;
					}
					export class zza extends com.google.firebase.auth.internal.zza {
						public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth.zza>;
					}
					export class zzb extends com.google.firebase.auth.FirebaseAuth.zza implements com.google.firebase.auth.internal.zza, com.google.firebase.auth.internal.zzw {
						public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth.zzb>;
					}
					export class zzc extends com.google.firebase.auth.FirebaseAuth.zza implements com.google.firebase.auth.internal.zza, com.google.firebase.auth.internal.zzw {
						public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuth.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthActionCodeException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthActionCodeException>;
					public constructor(param0: string, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthEmailException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthEmailException>;
					public constructor(param0: string, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthInvalidCredentialsException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthInvalidCredentialsException>;
					public constructor(param0: string, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthInvalidUserException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthInvalidUserException>;
					public constructor(param0: string, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.FirebaseAuthProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static PROVIDER_ID: string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthRecentLoginRequiredException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthRecentLoginRequiredException>;
					public constructor(param0: string, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthRegistrar {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthRegistrar>;
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
			export module auth {
				export abstract class FirebaseAuthSettings {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthSettings>;
					public constructor();
					public setAutoRetrievedSmsCodeForPhoneNumber(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthUserCollisionException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthUserCollisionException>;
					public constructor(param0: string, param1: string);
					public getUpdatedCredential(): com.google.firebase.auth.AuthCredential;
					public constructor(param0: string, param1: string, param2: com.google.firebase.auth.AuthCredential);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthWeakPasswordException extends com.google.firebase.auth.FirebaseAuthInvalidCredentialsException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthWeakPasswordException>;
					public constructor(param0: string, param1: string);
					public getReason(): string;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export abstract class FirebaseUser implements com.google.firebase.auth.UserInfo {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseUser>;
					public getProviderData(): java.util.List<any>;
					public linkWithCredential(param0: com.google.firebase.auth.AuthCredential): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getUid(): string;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updateProfile(param0: com.google.firebase.auth.UserProfileChangeRequest): com.google.android.gms.tasks.Task<java.lang.Void>;
					public isAnonymous(): boolean;
					public constructor();
					public reauthenticateAndRetrieveData(param0: com.google.firebase.auth.AuthCredential): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getProviderId(): string;
					public getIdToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
					public reauthenticate(param0: com.google.firebase.auth.AuthCredential): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getEmail(): string;
					public updateEmail(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getPhotoUrl(): globalAndroid.net.Uri;
					public sendEmailVerification(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public isEmailVerified(): boolean;
					public getDisplayName(): string;
					public unlink(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getProviders(): java.util.List<string>;
					public updatePhoneNumber(param0: com.google.firebase.auth.PhoneAuthCredential): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updatePassword(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getMetadata(): com.google.firebase.auth.FirebaseUserMetadata;
					public sendEmailVerification(param0: com.google.firebase.auth.ActionCodeSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getPhoneNumber(): string;
					public reload(): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseUserMetadata {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseUserMetadata>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.FirebaseUserMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLastSignInTimestamp(): number;
						getCreationTimestamp(): number;
					});
					public constructor();
					public getLastSignInTimestamp(): number;
					public getCreationTimestamp(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class GithubAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.GithubAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.GithubAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class GithubAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.GithubAuthProvider>;
					public static PROVIDER_ID: string;
					public static GITHUB_SIGN_IN_METHOD: string;
					public static getCredential(param0: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class GoogleAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.GoogleAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.GoogleAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class GoogleAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.GoogleAuthProvider>;
					public static PROVIDER_ID: string;
					public static GOOGLE_SIGN_IN_METHOD: string;
					public static getCredential(param0: string, param1: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class OAuthProvider extends com.google.firebase.auth.zzh {
					public static class: java.lang.Class<com.google.firebase.auth.OAuthProvider>;
					public static getCredential(param0: string, param1: string, param2: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class PhoneAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.PhoneAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PhoneAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
					public getSmsCode(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class PhoneAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.PhoneAuthProvider>;
					public static PROVIDER_ID: string;
					public static PHONE_SIGN_IN_METHOD: string;
					public verifyPhoneNumber(param0: string, param1: number, param2: java.util.concurrent.TimeUnit, param3: globalAndroid.app.Activity, param4: com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks): void;
					public static getInstance(): com.google.firebase.auth.PhoneAuthProvider;
					public static getCredential(param0: string, param1: string): com.google.firebase.auth.PhoneAuthCredential;
					public static getInstance(param0: com.google.firebase.auth.FirebaseAuth): com.google.firebase.auth.PhoneAuthProvider;
					public verifyPhoneNumber(param0: string, param1: number, param2: java.util.concurrent.TimeUnit, param3: java.util.concurrent.Executor, param4: com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks): void;
					public verifyPhoneNumber(param0: string, param1: number, param2: java.util.concurrent.TimeUnit, param3: globalAndroid.app.Activity, param4: com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks, param5: com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken): void;
					public verifyPhoneNumber(param0: string, param1: number, param2: java.util.concurrent.TimeUnit, param3: java.util.concurrent.Executor, param4: com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks, param5: com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken): void;
				}
				export module PhoneAuthProvider {
					export class ForceResendingToken {
						public static class: java.lang.Class<com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export abstract class OnVerificationStateChangedCallbacks {
						public static class: java.lang.Class<com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks>;
						public onVerificationFailed(param0: com.google.firebase.FirebaseException): void;
						public constructor();
						public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
						public onCodeSent(param0: string, param1: com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken): void;
						public onCodeAutoRetrievalTimeOut(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class PlayGamesAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.PlayGamesAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PlayGamesAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class PlayGamesAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.PlayGamesAuthProvider>;
					public static PROVIDER_ID: string;
					public static PLAY_GAMES_SIGN_IN_METHOD: string;
					public static getCredential(param0: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class ProviderQueryResult {
					public static class: java.lang.Class<com.google.firebase.auth.ProviderQueryResult>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.ProviderQueryResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getProviders(): java.util.List<string>;
					});
					public constructor();
					public getProviders(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class SignInMethodQueryResult {
					public static class: java.lang.Class<com.google.firebase.auth.SignInMethodQueryResult>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.SignInMethodQueryResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSignInMethods(): java.util.List<string>;
					});
					public constructor();
					public getSignInMethods(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class TwitterAuthCredential extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.TwitterAuthCredential>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.TwitterAuthCredential>;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class TwitterAuthProvider {
					public static class: java.lang.Class<com.google.firebase.auth.TwitterAuthProvider>;
					public static PROVIDER_ID: string;
					public static TWITTER_SIGN_IN_METHOD: string;
					public static getCredential(param0: string, param1: string): com.google.firebase.auth.AuthCredential;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class UserInfo {
					public static class: java.lang.Class<com.google.firebase.auth.UserInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.auth.UserInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUid(): string;
						getProviderId(): string;
						getDisplayName(): string;
						getPhotoUrl(): globalAndroid.net.Uri;
						getEmail(): string;
						getPhoneNumber(): string;
						isEmailVerified(): boolean;
					});
					public constructor();
					public getDisplayName(): string;
					public getUid(): string;
					public getProviderId(): string;
					public getPhoneNumber(): string;
					public getEmail(): string;
					public getPhotoUrl(): globalAndroid.net.Uri;
					public isEmailVerified(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class UserProfileChangeRequest {
					public static class: java.lang.Class<com.google.firebase.auth.UserProfileChangeRequest>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.UserProfileChangeRequest>;
					public getDisplayName(): string;
					public getPhotoUri(): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module UserProfileChangeRequest {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.auth.UserProfileChangeRequest.Builder>;
						public setDisplayName(param0: string): com.google.firebase.auth.UserProfileChangeRequest.Builder;
						public setPhotoUri(param0: globalAndroid.net.Uri): com.google.firebase.auth.UserProfileChangeRequest.Builder;
						public constructor();
						public build(): com.google.firebase.auth.UserProfileChangeRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module api {
					export module internal {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zza>;
							public constructor(param0: any /* com.google.firebase.auth.api.internal.zzdi*/);
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
			export module auth {
				export module api {
					export module internal {
						export class zzaa extends com.google.firebase.auth.api.internal.zzdk<java.lang.Void> {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaa>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzab extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbc>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzab>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzac extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzac>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzad extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzad>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzae extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzae>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzaf extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzba>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaf>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzag extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzag>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzah {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzah>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzai<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzai<any>>;
							public constructor(param0: com.google.android.gms.common.api.GoogleApi<O>, param1: com.google.android.gms.common.api.GoogleApi<O>, param2: any /* com.google.firebase.auth.api.internal.zzan*/);
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzaj {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaj>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzak extends com.google.firebase.auth.api.internal.zzan {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzak>;
							public constructor(param0: number, param1: number, param2: java.util.Map<string,java.lang.Integer>, param3: boolean);
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
			export module auth {
				export module api {
					export module internal {
						export class zzal<O>  extends com.google.android.gms.common.api.GoogleApi<any> {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzal<any>>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: com.google.android.gms.common.api.internal.StatusExceptionMapper);
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzam<A, TResult>  extends com.google.android.gms.common.api.internal.TaskApiCall<any,any> {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzam<any,any>>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzan {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzan>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: any /* com.google.firebase.auth.api.internal.zzam<any,any>*/): boolean;
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
			export module auth {
				export module api {
					export module internal {
						export class zzao extends com.google.firebase.auth.api.internal.zzah {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzao>;
							public setFirebaseUIVersion(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzap extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzap>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzaq extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.ActionCodeResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaq>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzar extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzar>;
							public constructor(param0: string, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzas extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzas>;
							public constructor(param0: string, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzat extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zzv>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzat>;
							public constructor();
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
			export module auth {
				export module api {
					export module internal {
						export class zzau extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.ProviderQueryResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzau>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzav extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.SignInMethodQueryResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzav>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzaw extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.GetTokenResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaw>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzax extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzax>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzay extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzay>;
							public constructor(param0: number);
							public constructor(param0: com.google.firebase.auth.AuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzaz extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ implements any /* com.google.firebase.auth.api.internal.zzda*/  {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzaz>;
							public constructor(param0: com.google.firebase.auth.PhoneAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzb extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzb>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzba extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzba>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbb<ResultT, CallbackT>  extends java.lang.Object /* com.google.firebase.auth.api.internal.zzam<com.google.firebase.auth.api.internal.zzcc,any>*/ implements any /* com.google.firebase.auth.api.internal.zzcx<any>*/  {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbb<any,any>>;
							public constructor();
							public constructor(param0: any /* com.google.firebase.auth.api.internal.zzcy<any,any>*/, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbc extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbc>;
							public constructor(param0: number);
							public constructor(param0: com.google.firebase.auth.AuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbd extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbd>;
							public constructor(param0: number);
							public constructor(param0: com.google.firebase.auth.AuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbe extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbe>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbf extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbf>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbg extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbg>;
							public constructor(param0: string, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbh extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbh>;
							public constructor(param0: string, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbi extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbi>;
							public constructor(param0: com.google.firebase.auth.PhoneAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbj extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbj>;
							public constructor();
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
			export module auth {
				export module api {
					export module internal {
						export class zzbk extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbk>;
							public constructor(param0: string, param1: com.google.firebase.auth.ActionCodeSettings);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbl extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbl>;
							public constructor(param0: string, param1: com.google.firebase.auth.ActionCodeSettings);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbm extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbm>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbn extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbn>;
							public constructor();
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
			export module auth {
				export module api {
					export module internal {
						export class zzbo extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbo>;
							public constructor(param0: number);
							public constructor(param0: com.google.firebase.auth.AuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbp extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbp>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbq extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbq>;
							public constructor(param0: string, param1: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbr extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbr>;
							public constructor(param0: com.google.firebase.auth.EmailAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbs extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbs>;
							public constructor(param0: com.google.firebase.auth.PhoneAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbt extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbt>;
							public constructor();
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
			export module auth {
				export module api {
					export module internal {
						export class zzbu extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<com.google.firebase.auth.AuthResult,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbu>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbv extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbv>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbw extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbw>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbx extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbx>;
							public constructor(param0: com.google.firebase.auth.PhoneAuthCredential);
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
			export module auth {
				export module api {
					export module internal {
						export class zzby extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzby>;
							public constructor(param0: com.google.firebase.auth.UserProfileChangeRequest);
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
			export module auth {
				export module api {
					export module internal {
						export class zzbz extends java.lang.Object /* com.google.firebase.auth.api.internal.zzcy<string,com.google.firebase.auth.internal.zza>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzbz>;
							public constructor(param0: string);
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
			export module auth {
				export module api {
					export module internal {
						export class zzc extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbc>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzc>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzca extends com.google.firebase.auth.api.internal.zzcy<java.lang.Void,com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks> {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzca>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzax*/);
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
			export module auth {
				export module api {
					export module internal {
						export class zzcb {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcb>;
							public constructor(param0: any /* com.google.firebase.auth.api.internal.zzch*/, param1: com.google.android.gms.common.logging.Logger);
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcc {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcc>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzcc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzaf(): any /* com.google.firebase.auth.api.internal.zzck*/;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcd extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.firebase.auth.api.internal.zzck>*/ implements any /* com.google.firebase.auth.api.internal.zzcc*/  {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcd>;
							public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: any /* com.google.firebase.auth.api.internal.zzcp*/, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getStartServicePackage(): string;
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public requiresGooglePlayServices(): boolean;
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
		export module firebase {
			export module auth {
				export module api {
					export module internal {
						export class zzce {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzce>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcg<Wrapper, Proto>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcg<any,any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzcg<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: Proto): Wrapper;
								zzag(): java.lang.Class<Proto>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzch {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzch>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_auth.zzao*/): void;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzao*/, param1: any /* com.google.android.gms.internal.firebase_auth.zzaj*/): void;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzx*/): void;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzav*/): void;
								onFailure(param0: com.google.android.gms.common.api.Status): void;
								zzac(): void;
								zzad(): void;
								zzd(param0: string): void;
								zze(param0: string): void;
								onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
								zzf(param0: string): void;
								zza(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.auth.PhoneAuthCredential): void;
								zzae(): void;
							});
							public constructor();
							public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzci extends com.google.android.gms.internal.firebase_auth.zzb implements com.google.firebase.auth.api.internal.zzch {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzci>;
							public constructor();
							public constructor(param0: string);
							public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
							public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcj extends com.google.android.gms.internal.firebase_auth.zza implements com.google.firebase.auth.api.internal.zzch {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcj>;
							public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzck {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzck>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzck interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzb(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzbf*/, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: com.google.firebase.auth.UserProfileChangeRequest, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzb(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzc(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzd(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzc(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzd(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: string, param2: string, param3: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: any /* com.google.android.gms.internal.firebase_auth.zzbf*/, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zze(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zze(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzf(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzg(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzh(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzi(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzj(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzf(param0: string, param1: string, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzax*/, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: com.google.firebase.auth.PhoneAuthCredential, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: com.google.firebase.auth.PhoneAuthCredential, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: string, param1: com.google.firebase.auth.ActionCodeSettings, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzb(param0: string, param1: com.google.firebase.auth.ActionCodeSettings, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzk(param0: string, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zzc(param0: string, param1: com.google.firebase.auth.ActionCodeSettings, param2: any /* com.google.firebase.auth.api.internal.zzch*/): void;
								zza(param0: com.google.firebase.auth.EmailAuthCredential, param1: any /* com.google.firebase.auth.api.internal.zzch*/): void;
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzcl extends com.google.android.gms.internal.firebase_auth.zzb implements com.google.firebase.auth.api.internal.zzck {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcl>;
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
		export module firebase {
			export module auth {
				export module api {
					export module internal {
						export class zzcm extends com.google.android.gms.internal.firebase_auth.zza implements com.google.firebase.auth.api.internal.zzck {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcm>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcn {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcn>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzco extends java.lang.Object /* com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.firebase.auth.api.internal.zzcc,com.google.firebase.auth.api.internal.zzcp>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzco>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcp extends com.google.firebase.auth.api.internal.zzaj {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcp>;
							public getApiKey(): string;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcq {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcq>;
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
		export module firebase {
			export module auth {
				export module api {
					export module internal {
						export class zzcw {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcw>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcx<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcx<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzcx<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: ResultT, param1: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzcy<SuccessT, CallbackT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcy<any,any>>;
							public constructor(param0: number);
						}
						export module zzcy {
							export class zza {
								public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcy.zza>;
								public onStop(): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzcz {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzcz>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzd extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbm>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzd>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzda {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzda>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzda interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.auth.PhoneAuthCredential): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdb extends com.google.firebase.auth.api.internal.zzci {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdb>;
							public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdc extends com.google.firebase.auth.api.internal.zzdh {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdc>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdd extends com.google.firebase.auth.api.internal.zzdh {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdd>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzde extends com.google.firebase.auth.api.internal.zzdh {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzde>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdf extends com.google.firebase.auth.api.internal.zzdh {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdf>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdg {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdg>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdh {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdh>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzdh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks, param1: native.Array<any>): void;
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
			export module auth {
				export module api {
					export module internal {
						export abstract class zzdi {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdi>;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdj {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdj>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzdj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: string): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdk<T>  extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdj*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdk<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzdk<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: any): void;
								zzc(param0: string): void;
							});
							public constructor();
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdl {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdl>;
							public getPackageName(): string;
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
		export module firebase {
			export module auth {
				export module api {
					export module internal {
						export class zzdo {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdo>;
							public static getProperty(param0: string): string;
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
			export module auth {
				export module api {
					export module internal {
						export class zzdp<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzdp<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.auth.api.internal.zzdp<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzao(): T;
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
			export module auth {
				export module api {
					export module internal {
						export class zze extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zze>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzf extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzab>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzf>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzg extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzah>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzg>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzh extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzba>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzh>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzi extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzah>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzi>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzj extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzx>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzj>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzk extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<any>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzk>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzl extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<any>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzl>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzm extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbj>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzm>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzn extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzav>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzn>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzo extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzav>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzo>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzp extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzp>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzq extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzq>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzr extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbh>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzr>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzs extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzs>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzt extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzt>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzu extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzah>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzu>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzv extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzv>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzw extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzah>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzw>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzx extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzbh>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzx>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzy extends java.lang.Object /* com.google.firebase.auth.api.internal.zzdk<com.google.android.gms.internal.firebase_auth.zzao>*/ {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzy>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module api {
					export module internal {
						export class zzz extends com.google.firebase.auth.api.internal.zzdk<java.lang.Void> {
							public static class: java.lang.Class<com.google.firebase.auth.api.internal.zzz>;
							public onSuccess(param0: any): void;
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
			export module auth {
				export module internal {
					export class FederatedSignInActivity {
						public static class: java.lang.Class<com.google.firebase.auth.internal.FederatedSignInActivity>;
						public constructor();
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onNewIntent(param0: globalAndroid.content.Intent): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zza>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzao*/, param1: com.google.firebase.auth.FirebaseUser): void;
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
			export module auth {
				export module internal {
					export class zzaa {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzaa>;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public clear(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzab {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzab>;
						public cancel(): void;
						public onListenerCountChanged(param0: number): void;
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
			export module auth {
				export module internal {
					export class zzac {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzac>;
						public onBackgroundStateChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzad {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzad>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzae implements com.google.firebase.auth.internal.zza, com.google.firebase.auth.internal.zzw {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzae>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.zzae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.firebase_auth.zzao*/, param1: com.google.firebase.auth.FirebaseUser): void;
							zza(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module internal {
					export class zzaf {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzaf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzb {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzc extends com.google.firebase.auth.ActionCodeResult {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzc>;
						public getOperation(): number;
						public getData(param0: number): string;
						public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzav*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzd extends com.google.firebase.auth.AdditionalUserInfo {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzd>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzd>*/;
						public describeContents(): number;
						public getProviderId(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: boolean);
						public getUsername(): string;
						public isNewUser(): boolean;
						public constructor(param0: string, param1: string, param2: boolean);
						public getProfile(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zze extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzd>*/ {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zze>;
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
			export module auth {
				export module internal {
					export class zzf extends com.google.firebase.auth.AuthResult {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzf>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzf>*/;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getUser(): com.google.firebase.auth.FirebaseUser;
						public getAdditionalUserInfo(): com.google.firebase.auth.AdditionalUserInfo;
						public constructor(param0: any /* com.google.firebase.auth.internal.zzl*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzg extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzf>*/ {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzg>;
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
			export module auth {
				export module internal {
					export class zzh implements com.google.firebase.auth.UserInfo {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzh>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzh>*/;
						public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzaj*/, param1: string);
						public getUid(): string;
						public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzaq*/);
						public getEmail(): string;
						public getProviderId(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public toJson(): string;
						public getPhotoUrl(): globalAndroid.net.Uri;
						public getDisplayName(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string);
						public getPhoneNumber(): string;
						public getRawUserInfo(): string;
						public isEmailVerified(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzi extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzh>*/ {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzi>;
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
			export module auth {
				export module internal {
					export class zzj extends com.google.firebase.auth.FirebaseAuth {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzj>;
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
			export module auth {
				export module internal {
					export class zzk extends com.google.firebase.auth.FirebaseAuthSettings {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzk>;
						public constructor();
						public getSmsCode(): string;
						public getPhoneNumber(): string;
						public setAutoRetrievedSmsCodeForPhoneNumber(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzl extends com.google.firebase.auth.FirebaseUser {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzl>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzl>*/;
						public constructor();
						public getUid(): string;
						public getEmail(): string;
						public getProviderId(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public isNewUser(): boolean;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: java.util.List<any>);
						public getPhotoUrl(): globalAndroid.net.Uri;
						public isAnonymous(): boolean;
						public getDisplayName(): string;
						public getMetadata(): com.google.firebase.auth.FirebaseUserMetadata;
						public getPhoneNumber(): string;
						public getProviderData(): java.util.List<any>;
						public getProviders(): java.util.List<string>;
						public isEmailVerified(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzl>*/ {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzm>;
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
			export module auth {
				export module internal {
					export class zzn extends com.google.firebase.auth.FirebaseUserMetadata {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzn>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzn>*/;
						public describeContents(): number;
						public getLastSignInTimestamp(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getCreationTimestamp(): number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzo extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.internal.zzn>*/ {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzo>;
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
			export module auth {
				export module internal {
					export class zzp extends com.google.firebase.auth.ProviderQueryResult {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzp>;
						public constructor(param0: any /* com.google.android.gms.internal.firebase_auth.zzx*/);
						public getProviders(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzq {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzr extends com.google.firebase.auth.SignInMethodQueryResult {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzr>;
						public constructor(param0: java.util.List<string>);
						public getSignInMethods(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzs {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzs>;
						public cancel(): void;
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
			export module auth {
				export module internal {
					export class zzt {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzt>;
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
			export module auth {
				export module internal {
					export class zzu {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzu>;
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
			export module auth {
				export module internal {
					export class zzv extends com.google.firebase.auth.internal.zzw {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzv>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.zzv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzm(): void;
							zza(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module internal {
					export class zzw {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzw>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.zzw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.common.api.Status): void;
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
			export module auth {
				export module internal {
					export class zzx {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzx>;
						public static initialize(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzy {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzy>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class zzz {
						public static class: java.lang.Class<com.google.firebase.auth.internal.zzz>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zza {
					public static class: java.lang.Class<com.google.firebase.auth.zza>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.ActionCodeSettings> {
					public static class: java.lang.Class<com.google.firebase.auth.zzb>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken> {
					public static class: java.lang.Class<com.google.firebase.auth.zzc>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzd extends com.google.firebase.auth.zzu {
					public static class: java.lang.Class<com.google.firebase.auth.zzd>;
					public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.zzd>*/;
					public getSignInMethod(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zze extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.zzd>*/ {
					public static class: java.lang.Class<com.google.firebase.auth.zze>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.EmailAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzf>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzg extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.FacebookAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzg>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzh {
					public static class: java.lang.Class<com.google.firebase.auth.zzh>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzi {
					public static class: java.lang.Class<com.google.firebase.auth.zzi>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzj {
					public static class: java.lang.Class<com.google.firebase.auth.zzj>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzk {
					public static class: java.lang.Class<com.google.firebase.auth.zzk>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzl {
					public static class: java.lang.Class<com.google.firebase.auth.zzl>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzm implements com.google.firebase.auth.internal.zza, com.google.firebase.auth.internal.zzw {
					public static class: java.lang.Class<com.google.firebase.auth.zzm>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzn extends com.google.firebase.auth.PhoneAuthProvider.OnVerificationStateChangedCallbacks {
					public static class: java.lang.Class<com.google.firebase.auth.zzn>;
					public onCodeAutoRetrievalTimeOut(param0: string): void;
					public onCodeSent(param0: string, param1: com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken): void;
					public onVerificationFailed(param0: com.google.firebase.FirebaseException): void;
					public onVerificationCompleted(param0: com.google.firebase.auth.PhoneAuthCredential): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzo extends com.google.firebase.auth.internal.zzv {
					public static class: java.lang.Class<com.google.firebase.auth.zzo>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzp {
					public static class: java.lang.Class<com.google.firebase.auth.zzp>;
					public create(param0: com.google.firebase.components.ComponentContainer): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzq extends com.google.android.gms.tasks.Continuation<com.google.firebase.auth.GetTokenResult,com.google.android.gms.tasks.Task<java.lang.Void>> {
					public static class: java.lang.Class<com.google.firebase.auth.zzq>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzr extends com.google.android.gms.tasks.Continuation<com.google.firebase.auth.GetTokenResult,com.google.android.gms.tasks.Task<java.lang.Void>> {
					public static class: java.lang.Class<com.google.firebase.auth.zzr>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzs extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.GithubAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzs>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzt extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.GoogleAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzt>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export abstract class zzu extends com.google.firebase.auth.AuthCredential {
					public static class: java.lang.Class<com.google.firebase.auth.zzu>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzv extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PhoneAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzv>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzw extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.PlayGamesAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzw>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzx extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.TwitterAuthCredential> {
					public static class: java.lang.Class<com.google.firebase.auth.zzx>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class zzy extends globalAndroid.os.Parcelable.Creator<com.google.firebase.auth.UserProfileChangeRequest> {
					public static class: java.lang.Class<com.google.firebase.auth.zzy>;
					public constructor();
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.firebase_auth.zzbn:2
//com.google.android.gms.internal.firebase_auth.zzbo:2
//com.google.android.gms.internal.firebase_auth.zzbp:1
//com.google.android.gms.internal.firebase_auth.zzbq:1
//com.google.android.gms.internal.firebase_auth.zzcm:2
//com.google.android.gms.internal.firebase_auth.zzcp:1
//com.google.android.gms.internal.firebase_auth.zzcs:1
//com.google.android.gms.internal.firebase_auth.zzcu:1
//com.google.android.gms.internal.firebase_auth.zzcz:1
//com.google.android.gms.internal.firebase_auth.zzdb:2
//com.google.android.gms.internal.firebase_auth.zzdb.zza:2
//com.google.android.gms.internal.firebase_auth.zzdb.zzb:1
//com.google.android.gms.internal.firebase_auth.zzdb.zzc:2
//com.google.android.gms.internal.firebase_auth.zzdb.zzd:2
//com.google.android.gms.internal.firebase_auth.zzdf:1
//com.google.android.gms.internal.firebase_auth.zzdg:1
//com.google.android.gms.internal.firebase_auth.zzdm:1
//com.google.android.gms.internal.firebase_auth.zzdn:1
//com.google.android.gms.internal.firebase_auth.zzdz:2
//com.google.android.gms.internal.firebase_auth.zzea:2
//com.google.android.gms.internal.firebase_auth.zzeb:2
//com.google.android.gms.internal.firebase_auth.zzel:1
//com.google.android.gms.internal.firebase_auth.zzem:1
//com.google.android.gms.internal.firebase_auth.zzer:1
//com.google.android.gms.internal.firebase_auth.zzev:1
//com.google.android.gms.internal.firebase_auth.zzey:2
//com.google.android.gms.internal.firebase_auth.zzfp:2
//com.google.android.gms.internal.firebase_auth.zzgn:1
//com.google.android.gms.internal.firebase_auth.zzgo:2
//com.google.firebase.auth.api.internal.zzai:1
//com.google.firebase.auth.api.internal.zzal:1
//com.google.firebase.auth.api.internal.zzam:2
//com.google.firebase.auth.api.internal.zzbb:2
//com.google.firebase.auth.api.internal.zzcg:2
//com.google.firebase.auth.api.internal.zzcx:1
//com.google.firebase.auth.api.internal.zzcy:2
//com.google.firebase.auth.api.internal.zzdk:1
//com.google.firebase.auth.api.internal.zzdp:1

