/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_messaging {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_messaging.zzg>;
							public static checkNotNull(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_messaging {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_messaging.zzi>;
							public write(param0: native.Array<number>): void;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
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
					export module firebase_messaging {
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_messaging.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_messaging {
						export class zzk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_messaging.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_messaging {
						export class zzl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_messaging.zzl>;
							public mark(param0: number): void;
							public skip(param0: number): number;
							public available(): number;
							public read(): number;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
							public reset(): void;
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
			export module messaging {
				export class FirebaseMessaging {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessaging>;
					public static INSTANCE_ID_SCOPE: string;
					public isAutoInitEnabled(): boolean;
					public subscribeToTopic(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public send(param0: com.google.firebase.messaging.RemoteMessage): void;
					public static getInstance(): com.google.firebase.messaging.FirebaseMessaging;
					public setAutoInitEnabled(param0: boolean): void;
					public unsubscribeFromTopic(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FirebaseMessagingService {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessagingService>;
					public onNewToken(param0: string): void;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
					public onDeletedMessages(): void;
					public onSendError(param0: string, param1: java.lang.Exception): void;
					public onMessageSent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class MessagingAnalytics {
					public static class: java.lang.Class<com.google.firebase.messaging.MessagingAnalytics>;
					public constructor();
					public static logNotificationDismiss(param0: globalAndroid.content.Intent): void;
					public static logNotificationReceived(param0: globalAndroid.content.Intent): void;
					public static logNotificationForeground(param0: globalAndroid.content.Intent): void;
					public static shouldUploadMetrics(param0: globalAndroid.content.Intent): boolean;
					public static logNotificationOpen(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class RemoteMessage {
					public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage>;
					public static PRIORITY_UNKNOWN: number;
					public static PRIORITY_HIGH: number;
					public static PRIORITY_NORMAL: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.messaging.RemoteMessage>;
					public getPriority(): number;
					public getMessageId(): string;
					public toIntent(): globalAndroid.content.Intent;
					public getFrom(): string;
					public getTo(): string;
					public getSentTime(): number;
					public getOriginalPriority(): number;
					public constructor(param0: globalAndroid.os.Bundle);
					public getNotification(): com.google.firebase.messaging.RemoteMessage.Notification;
					public getData(): java.util.Map<string,string>;
					public getMessageType(): string;
					public getCollapseKey(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getTtl(): number;
				}
				export module RemoteMessage {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.Builder>;
						public setMessageType(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public setData(param0: java.util.Map<string,string>): com.google.firebase.messaging.RemoteMessage.Builder;
						public build(): com.google.firebase.messaging.RemoteMessage;
						public setCollapseKey(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public setTtl(param0: number): com.google.firebase.messaging.RemoteMessage.Builder;
						public addData(param0: string, param1: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public clearData(): com.google.firebase.messaging.RemoteMessage.Builder;
						public setMessageId(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public constructor(param0: string);
					}
					export class MessagePriority {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.MessagePriority>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.RemoteMessage$MessagePriority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class Notification {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.Notification>;
						public getIcon(): string;
						public getLink(): globalAndroid.net.Uri;
						public getChannelId(): string;
						public getColor(): string;
						public getClickAction(): string;
						public getTitleLocalizationKey(): string;
						public getTitle(): string;
						public getBody(): string;
						public getBodyLocalizationArgs(): native.Array<string>;
						public getImageUrl(): globalAndroid.net.Uri;
						public getTitleLocalizationArgs(): native.Array<string>;
						public getTag(): string;
						public getBodyLocalizationKey(): string;
						public getSound(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class SendException {
					public static class: java.lang.Class<com.google.firebase.messaging.SendException>;
					public static ERROR_UNKNOWN: number;
					public static ERROR_INVALID_PARAMETERS: number;
					public static ERROR_SIZE: number;
					public static ERROR_TTL_EXCEEDED: number;
					public static ERROR_TOO_MANY_MESSAGES: number;
					public getErrorCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zza {
					public static class: java.lang.Class<com.google.firebase.messaging.zza>;
					public tag: string;
					public id: number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzb {
					public static class: java.lang.Class<com.google.firebase.messaging.zzb>;
					public constructor(param0: globalAndroid.content.Context, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzc {
					public static class: java.lang.Class<com.google.firebase.messaging.zzc>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: java.util.concurrent.Executor);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzd {
					public static class: java.lang.Class<com.google.firebase.messaging.zzd>;
					public close(): void;
					public getTask(): com.google.android.gms.tasks.Task<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zze {
					public static class: java.lang.Class<com.google.firebase.messaging.zze>;
					public call(): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzf {
					public static class: java.lang.Class<com.google.firebase.messaging.zzf>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzg extends globalAndroid.os.Parcelable.Creator<com.google.firebase.messaging.RemoteMessage> {
					public static class: java.lang.Class<com.google.firebase.messaging.zzg>;
					public constructor();
				}
			}
		}
	}
}

//Generics information:

