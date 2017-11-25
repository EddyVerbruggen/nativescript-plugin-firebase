/// <reference path="./_helpers.d.ts" />
/// <reference path="./com.google.firebase.messaging.RemoteMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FirebaseMessaging {
					public static INSTANCE_ID_SCOPE: string;
					public unsubscribeFromTopic(param0: string): void;
					public send(param0: com.google.firebase.messaging.RemoteMessage): void;
					public static getInstance(): com.google.firebase.messaging.FirebaseMessaging;
					public subscribeToTopic(param0: string): void;
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.google.firebase.messaging.RemoteMessage.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FirebaseMessagingService {
					public handleIntent(param0: androidcontentIntent): void;
					public zzn(param0: androidcontentIntent): androidcontentIntent;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
					public onDeletedMessages(): void;
					public zzo(param0: androidcontentIntent): boolean;
					public onSendError(param0: string, param1: javalangException): void;
					public onMessageSent(param0: string): void;
				}
			}
		}
	}
}

import androidosParcel = android.os.Parcel;
import javautilMap = java.util.Map;
import androidosParcelableCreator = android.os.Parcelable.Creator;
import androidnetUri = android.net.Uri;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.google.firebase.messaging.RemoteMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class RemoteMessage {
					public static CREATOR: androidosParcelableCreator;
					public getMessageId(): string;
					public getMessageType(): string;
					public getCollapseKey(): string;
					public getFrom(): string;
					public getTo(): string;
					public getSentTime(): number;
					public getTtl(): number;
					public getNotification(): com.google.firebase.messaging.RemoteMessage.Notification;
					public writeToParcel(param0: androidosParcel, param1: number): void;
					public getData(): javautilMap;
				}
				export module RemoteMessage {
					export class Builder {
						public setMessageType(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public build(): com.google.firebase.messaging.RemoteMessage;
						public setData(param0: javautilMap): com.google.firebase.messaging.RemoteMessage.Builder;
						public setCollapseKey(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public setTtl(param0: number): com.google.firebase.messaging.RemoteMessage.Builder;
						public addData(param0: string, param1: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public clearData(): com.google.firebase.messaging.RemoteMessage.Builder;
						public setMessageId(param0: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public constructor(param0: string);
					}
					export class Notification {
						public getBody(): string;
						public getBodyLocalizationArgs(): native.Array<string>;
						public getIcon(): string;
						public getColor(): string;
						public getClickAction(): string;
						public getTitleLocalizationArgs(): native.Array<string>;
						public getLink(): androidnetUri;
						public getTag(): string;
						public getTitleLocalizationKey(): string;
						public getBodyLocalizationKey(): string;
						public getSound(): string;
						public getTitle(): string;
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
					public zzboa(): string;
					public zzbob(): string;
					public constructor();
					public zzboe(): string;
					public zzboc(): string;
					public zzbod(): string;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.firebase.messaging.zzb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzc {
					public static zza(param0: androidcontentContext, param1: string, param2: native.Array<number>, param3: com.google.firebase.messaging.zzb, param4: number): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class zzd {
					public static zzj(param0: androidcontentContext, param1: androidcontentIntent): void;
					public static zzh(param0: androidcontentContext, param1: androidcontentIntent): void;
					public static zzi(param0: androidcontentContext, param1: androidcontentIntent): void;
					public static zzg(param0: androidcontentContext, param1: androidcontentIntent): void;
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
					public constructor();
				}
			}
		}
	}
}

