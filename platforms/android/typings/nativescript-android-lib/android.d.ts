/// <reference path="./_helpers.d.ts" />
declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class BuildConfig {
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

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.nativescript.plugins.firebase.FirebasePluginListener.d.ts" />
declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class FirebasePlugin {
					public static setOnPushTokenReceivedCallback(param0: org.nativescript.plugins.firebase.FirebasePluginListener): void;
					public static executeOnPushTokenReceivedCallback(param0: string): void;
					public constructor();
					public static setOnNotificationReceivedCallback(param0: org.nativescript.plugins.firebase.FirebasePluginListener): void;
					public static executeOnNotificationReceivedCallback(param0: string): void;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class FirebasePluginListener {
					/**
					 * Constructs a new instance of the org.nativescript.plugins.firebase.FirebasePluginListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						success(param0: javalangObject): void;
						error(param0: javalangObject): void;
					});
					public success(param0: javalangObject): void;
					public error(param0: javalangObject): void;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class MyFirebaseInstanceIDService {
					public onTokenRefresh(): void;
					public constructor();
				}
			}
		}
	}
}

import comgooglefirebasemessagingRemoteMessage = com.google.firebase.messaging.RemoteMessage;
/// <reference path="./com.google.firebase.messaging.RemoteMessage.d.ts" />
declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class MyFirebaseMessagingService {
					public constructor();
					public onMessageReceived(param0: comgooglefirebasemessagingRemoteMessage): void;
				}
			}
		}
	}
}

