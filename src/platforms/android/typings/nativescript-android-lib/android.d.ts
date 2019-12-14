/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.plugins.firebase.BuildConfig>;
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

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class FirebasePlugin {
					public static class: java.lang.Class<org.nativescript.plugins.firebase.FirebasePlugin>;
					public static unregisterForPushNotifications(param0: string): void;
					public static setOnPushTokenReceivedCallback(param0: org.nativescript.plugins.firebase.FirebasePluginListener): void;
					public static executeOnPushTokenReceivedCallback(param0: string): void;
					public constructor();
					public static registerForPushNotifications(param0: string): void;
					public static setOnNotificationReceivedCallback(param0: org.nativescript.plugins.firebase.FirebasePluginListener): void;
					public static executeOnNotificationReceivedCallback(param0: string): void;
					public static getCurrentPushToken(param0: string, param1: org.nativescript.plugins.firebase.FirebasePluginListener): void;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class FirebasePluginLifecycleCallbacks {
					public static class: java.lang.Class<org.nativescript.plugins.firebase.FirebasePluginLifecycleCallbacks>;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public static registerCallbacks(param0: globalAndroid.app.Application): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public constructor();
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class FirebasePluginListener {
					public static class: java.lang.Class<org.nativescript.plugins.firebase.FirebasePluginListener>;
					/**
					 * Constructs a new instance of the org.nativescript.plugins.firebase.FirebasePluginListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						success(param0: any): void;
						error(param0: any): void;
					});
					public constructor();
					public success(param0: any): void;
					public error(param0: any): void;
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
					public static class: java.lang.Class<org.nativescript.plugins.firebase.MyFirebaseInstanceIDService>;
					public onTokenRefresh(): void;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export class MyFirebaseMessagingService {
					public static class: java.lang.Class<org.nativescript.plugins.firebase.MyFirebaseMessagingService>;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
				}
			}
		}
	}
}

//Generics information:

