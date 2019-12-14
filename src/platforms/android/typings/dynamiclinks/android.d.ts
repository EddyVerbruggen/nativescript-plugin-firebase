/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_dynamic_links {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_dynamic_links.zza>;
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
					export module firebase_dynamic_links {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_dynamic_links.zzb>;
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
					export module firebase_dynamic_links {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_dynamic_links.zzc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_dynamic_links.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_dynamic_links {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_dynamic_links.zzd>;
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
			export module dynamiclinks {
				export class DynamicLink {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink>;
					public getUri(): globalAndroid.net.Uri;
				}
				export module DynamicLink {
					export class AndroidParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters>;
					}
					export module AndroidParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder>;
							public constructor();
							public build(): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters;
							public setFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
							public constructor(param0: string);
							public setMinimumVersion(param0: number): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
						}
					}
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.Builder>;
						public setLongLink(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setIosParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.IosParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setNavigationInfoParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public buildShortDynamicLink(param0: number): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.ShortDynamicLink>;
						public setItunesConnectAnalyticsParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public buildShortDynamicLink(): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.ShortDynamicLink>;
						public setSocialMetaTagParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setAndroidParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setLink(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setGoogleAnalyticsParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setDomainUriPrefix(param0: string): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setDynamicLinkDomain(param0: string): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public constructor(param0: any /* com.google.firebase.dynamiclinks.internal.zze*/);
						public buildDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink;
					}
					export class GoogleAnalyticsParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters>;
					}
					export module GoogleAnalyticsParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder>;
							public constructor();
							public setSource(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public setMedium(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public setCampaign(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public setContent(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public constructor(param0: string, param1: string, param2: string);
							public build(): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters;
							public setTerm(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
						}
					}
					export class IosParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.IosParameters>;
					}
					export module IosParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder>;
							public setIpadFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public constructor(param0: string);
							public setIpadBundleId(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setAppStoreId(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setMinimumVersion(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setCustomScheme(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.IosParameters;
						}
					}
					export class ItunesConnectAnalyticsParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters>;
					}
					export module ItunesConnectAnalyticsParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder>;
							public constructor();
							public setCampaignToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public setAffiliateToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public setProviderToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters;
						}
					}
					export class NavigationInfoParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters>;
					}
					export module NavigationInfoParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder>;
							public constructor();
							public build(): com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters;
							public setForcedRedirectEnabled(param0: boolean): com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder;
						}
					}
					export class SocialMetaTagParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters>;
					}
					export module SocialMetaTagParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder>;
							public constructor();
							public setDescription(param0: string): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public setImageUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public setTitle(param0: string): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters;
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
			export module dynamiclinks {
				export abstract class FirebaseDynamicLinks {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.FirebaseDynamicLinks>;
					public static getInstance(): com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
					public createDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink.Builder;
					public constructor();
					public getDynamicLink(param0: globalAndroid.net.Uri): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					public getDynamicLink(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class PendingDynamicLinkData {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					public getMinimumAppVersion(): number;
					public getClickTimestamp(): number;
					public getUpdateAppIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public getExtensions(): globalAndroid.os.Bundle;
					public constructor(param0: com.google.firebase.dynamiclinks.internal.DynamicLinkData);
					public getLink(): globalAndroid.net.Uri;
					public constructor(param0: string, param1: number, param2: number, param3: globalAndroid.net.Uri);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class ShortDynamicLink {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink>;
					/**
					 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getShortLink(): globalAndroid.net.Uri;
						getPreviewLink(): globalAndroid.net.Uri;
						getWarnings(): java.util.List<any>;
					});
					public constructor();
					public getShortLink(): globalAndroid.net.Uri;
					public getWarnings(): java.util.List<any>;
					public getPreviewLink(): globalAndroid.net.Uri;
				}
				export module ShortDynamicLink {
					export class Suffix {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink.Suffix>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink$Suffix interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static SHORT: number;
						public static UNGUESSABLE: number;
					}
					export class Warning {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink.Warning>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink$Warning interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCode(): string;
							getMessage(): string;
						});
						public constructor();
						public getMessage(): string;
						public getCode(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinkData {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinkData>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.DynamicLinkData>;
						public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.os.Bundle, param5: globalAndroid.net.Uri);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getClickTimestamp(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class FirebaseDynamicLinkRegistrar {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinkRegistrar>;
						public constructor();
						public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zza extends globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.DynamicLinkData> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zza>;
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
			export module dynamiclinks {
				export module internal {
					export class zzb extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.firebase.dynamiclinks.internal.zzd,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzc extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzc>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzd extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.firebase.dynamiclinks.internal.zzm>*/ {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzd>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
						public getServiceDescriptor(): string;
						public getStartServiceAction(): string;
						public getMinApkVersion(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zze extends com.google.firebase.dynamiclinks.FirebaseDynamicLinks {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zze>;
						public constructor();
						public createDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.analytics.connector.AnalyticsConnector);
						public getDynamicLink(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
						public getDynamicLink(param0: globalAndroid.net.Uri): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzf {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzf>;
						public create(param0: com.google.firebase.components.ComponentContainer): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzg extends com.google.firebase.dynamiclinks.internal.zzh {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzh extends com.google.firebase.dynamiclinks.internal.zzn {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzi extends com.google.firebase.dynamiclinks.internal.zzh {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzi>;
						public constructor();
						public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.dynamiclinks.PendingDynamicLinkData>);
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
			export module dynamiclinks {
				export module internal {
					export class zzj extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.firebase.dynamiclinks.internal.zzd,com.google.firebase.dynamiclinks.ShortDynamicLink> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzk {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzk>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.internal.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							zza(param0: com.google.android.gms.common.api.Status, param1: any /* com.google.firebase.dynamiclinks.internal.zzo*/): void;
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
			export module dynamiclinks {
				export module internal {
					export class zzl extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.firebase.dynamiclinks.internal.zzd,com.google.firebase.dynamiclinks.PendingDynamicLinkData> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzm {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzm>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.internal.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.firebase.dynamiclinks.internal.zzk*/, param1: string): void;
							zza(param0: any /* com.google.firebase.dynamiclinks.internal.zzk*/, param1: globalAndroid.os.Bundle): void;
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
			export module dynamiclinks {
				export module internal {
					export abstract class zzn extends com.google.android.gms.internal.firebase_dynamic_links.zza implements com.google.firebase.dynamiclinks.internal.zzk {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzn>;
						public constructor();
						public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
			export module dynamiclinks {
				export module internal {
					export class zzo implements com.google.firebase.dynamiclinks.ShortDynamicLink {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzo>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.zzo>*/;
						public getPreviewLink(): globalAndroid.net.Uri;
						public constructor(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri, param2: any /* java.util.List<com.google.firebase.dynamiclinks.internal.zzr>*/);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getShortLink(): globalAndroid.net.Uri;
						public getWarnings(): any /* java.util.List<com.google.firebase.dynamiclinks.internal.zzr>*/;
						public getWarnings(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzp extends com.google.android.gms.internal.firebase_dynamic_links.zzb implements com.google.firebase.dynamiclinks.internal.zzm {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class zzq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.zzo>*/ {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzq>;
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
			export module dynamiclinks {
				export module internal {
					export class zzr implements com.google.firebase.dynamiclinks.ShortDynamicLink.Warning {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzr>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.zzr>*/;
						public getMessage(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getCode(): string;
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
			export module dynamiclinks {
				export module internal {
					export class zzs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.zzr>*/ {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.zzs>;
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
			export module dynamiclinks {
				export class zza {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.zza>;
				}
			}
		}
	}
}

//Generics information:

