/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class ReplyContextElement {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.ReplyContextElement>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.ReplyContextElement>;
						public getTimeDeltaMs(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getText(): string;
						public getUserId(): number;
					}
					export module ReplyContextElement {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.ReplyContextElement.zza>;
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
				export module predictondevice {
					export class ReplyParams {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.ReplyParams>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.ReplyParams>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: number, param1: number);
					}
					export module ReplyParams {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.ReplyParams.zza>;
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
				export module predictondevice {
					export class SmartReply {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.SmartReply>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReply>;
						public getResponse(): string;
						public constructor(param0: string, param1: number, param2: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class SmartReplyOptions {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.SmartReplyOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReplyOptions>;
						public getLocaleObjs(): java.util.List<java.util.Locale>;
						public constructor(param0: java.util.List<java.util.Locale>, param1: string);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module SmartReplyOptions {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.SmartReplyOptions.zza>;
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
				export module predictondevice {
					export class SmartReplyResult {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.SmartReplyResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReplyResult>;
						public static STATUS_SUCCESS: number;
						public static STATUS_SENSITIVE_TOPIC: number;
						public static STATUS_QUALITY_THRESHOLDED: number;
						public static STATUS_ERROR: number;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: number, param1: native.Array<com.google.android.gms.predictondevice.SmartReply>);
						public getResponses(): native.Array<com.google.android.gms.predictondevice.SmartReply>;
						public getStatus(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export class IPredictOnDeviceCallbacks {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
								onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
								onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
							});
							public constructor();
							public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
							public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
							public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
						}
						export module IPredictOnDeviceCallbacks {
							export abstract class zza implements com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks {
								public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks.zza>;
								public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
								public constructor();
								public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
								public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
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
				export module predictondevice {
					export module internal {
						export class PredictOnDeviceOptions {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.predictondevice.SmartReplyOptions);
							public getSmartReplyOptions(): com.google.android.gms.predictondevice.SmartReplyOptions;
							public getApi(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export class zza implements com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zza>;
							public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
							public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
							public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zzb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.predictondevice.internal.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								loadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
								smartReply(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param2: com.google.android.gms.predictondevice.ReplyParams, param3: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
								unloadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
								reportUserReply(param0: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param1: com.google.android.gms.predictondevice.ReplyContextElement, param2: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							});
							public constructor();
							public loadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public reportUserReply(param0: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param1: com.google.android.gms.predictondevice.ReplyContextElement, param2: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public unloadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public smartReply(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param2: com.google.android.gms.predictondevice.ReplyParams, param3: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export abstract class zzc implements com.google.android.gms.predictondevice.internal.zzb {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zzc>;
							public constructor();
							public loadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public reportUserReply(param0: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param1: com.google.android.gms.predictondevice.ReplyContextElement, param2: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public unloadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public smartReply(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param2: com.google.android.gms.predictondevice.ReplyParams, param3: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
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
				export module predictondevice {
					export module internal {
						export class zzd implements com.google.android.gms.predictondevice.internal.zzb {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zzd>;
							public loadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public reportUserReply(param0: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param1: com.google.android.gms.predictondevice.ReplyContextElement, param2: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public unloadModel(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
							public smartReply(param0: com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks, param1: java.util.List<com.google.android.gms.predictondevice.ReplyContextElement>, param2: com.google.android.gms.predictondevice.ReplyParams, param3: com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export class zze extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.predictondevice.internal.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zze>;
							public getLocalStartServiceAction(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public getStartServicePackage(): string;
							public getStartServiceAction(): string;
							public getMinApkVersion(): number;
							public requiresGooglePlayServices(): boolean;
							public getServiceDescriptor(): string;
							public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export module internal {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.internal.PredictOnDeviceOptions> {
							public static class: java.lang.Class<com.google.android.gms.predictondevice.internal.zzf>;
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
				export module predictondevice {
					export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.ReplyContextElement> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zza>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.ReplyParams> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzc {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzd extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.predictondevice.SmartReplyOptions> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zze extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.predictondevice.internal.zze,com.google.android.gms.predictondevice.SmartReplyOptions> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzf extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.predictondevice.internal.zze,java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzg extends com.google.android.gms.predictondevice.zzl {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzg>;
						public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
						public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
						public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzh extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.predictondevice.internal.zze,com.google.android.gms.predictondevice.SmartReplyResult> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzi extends com.google.android.gms.predictondevice.zzl {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzi>;
						public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
						public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
						public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzj extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.predictondevice.internal.zze,java.lang.Void> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzk extends com.google.android.gms.predictondevice.zzl {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzk>;
						public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
						public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
						public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzl extends com.google.android.gms.predictondevice.internal.IPredictOnDeviceCallbacks.zza {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzl>;
						public onModelUnloaded(param0: com.google.android.gms.common.api.Status): void;
						public onModelLoaded(param0: com.google.android.gms.common.api.Status): void;
						public onSmartReplied(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.predictondevice.SmartReplyResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzm extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReply> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzm>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReplyOptions> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzn>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module predictondevice {
					export class zzo extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.predictondevice.SmartReplyResult> {
						public static class: java.lang.Class<com.google.android.gms.predictondevice.zzo>;
						public constructor();
					}
				}
			}
		}
	}
}

//Generics information:

