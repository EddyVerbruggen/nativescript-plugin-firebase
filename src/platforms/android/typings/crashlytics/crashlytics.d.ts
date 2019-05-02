/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module crashlytics {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.crashlytics.android.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static ARTIFACT_ID: string;
				public static BUILD_NUMBER: string;
				public static GOOGLE_PLAY_SDK_VERSION_STRING: string;
				public static GROUP: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export class Crashlytics extends io.fabric.sdk.android.Kit<java.lang.Void> implements io.fabric.sdk.android.KitGroup  {
				public static class: java.lang.Class<com.crashlytics.android.Crashlytics>;
				public static TAG: string;
				public answers: com.crashlytics.android.answers.Answers;
				public beta: com.crashlytics.android.beta.Beta;
				public core: com.crashlytics.android.core.CrashlyticsCore;
				public kits: java.util.Collection<any>;
				public static getPinningInfoProvider(): com.crashlytics.android.core.PinningInfoProvider;
				public static setUserIdentifier(param0: string): void;
				public static setPinningInfoProvider(param0: com.crashlytics.android.core.PinningInfoProvider): void;
				public static setFloat(param0: string, param1: number): void;
				public constructor();
				public getDebugMode(): boolean;
				public static setInt(param0: string, param1: number): void;
				public getKits(): java.util.Collection<any>;
				public static log(param0: string): void;
				public static setUserEmail(param0: string): void;
				public setListener(param0: com.crashlytics.android.core.CrashlyticsListener): void;
				public setDebugMode(param0: boolean): void;
				public crash(): void;
				public static setUserName(param0: string): void;
				public static setDouble(param0: string, param1: number): void;
				public static setBool(param0: string, param1: boolean): void;
				public verifyPinning(param0: java.net.URL): boolean;
				public static getInstance(): com.crashlytics.android.Crashlytics;
				public getVersion(): string;
				public static setString(param0: string, param1: string): void;
				public static logException(param0: java.lang.Throwable): void;
				public doInBackground(): java.lang.Void;
				public getIdentifier(): string;
				public static setLong(param0: string, param1: number): void;
				public static log(param0: number, param1: string, param2: string): void;
			}
			export module Crashlytics {
				export class Builder {
					public static class: java.lang.Class<com.crashlytics.android.Crashlytics.Builder>;
					public constructor();
					public answers(param0: com.crashlytics.android.answers.Answers): com.crashlytics.android.Crashlytics.Builder;
					public build(): com.crashlytics.android.Crashlytics;
					public delay(param0: number): com.crashlytics.android.Crashlytics.Builder;
					public beta(param0: com.crashlytics.android.beta.Beta): com.crashlytics.android.Crashlytics.Builder;
					public listener(param0: com.crashlytics.android.core.CrashlyticsListener): com.crashlytics.android.Crashlytics.Builder;
					public core(param0: com.crashlytics.android.core.CrashlyticsCore): com.crashlytics.android.Crashlytics.Builder;
					public disabled(param0: boolean): com.crashlytics.android.Crashlytics.Builder;
					public pinningInfo(param0: com.crashlytics.android.core.PinningInfoProvider): com.crashlytics.android.Crashlytics.Builder;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export class CrashlyticsInitProvider {
				public static class: java.lang.Class<com.crashlytics.android.CrashlyticsInitProvider>;
				public getType(param0: globalAndroid.net.Uri): string;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
			export module CrashlyticsInitProvider {
				export class EnabledCheckStrategy {
					public static class: java.lang.Class<com.crashlytics.android.CrashlyticsInitProvider.EnabledCheckStrategy>;
					/**
					 * Constructs a new instance of the com.crashlytics.android.CrashlyticsInitProvider$EnabledCheckStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isCrashlyticsEnabled(param0: globalAndroid.content.Context): boolean;
					});
					public constructor();
					public isCrashlyticsEnabled(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module crashlytics {
		export module android {
			export class ManifestEnabledCheckStrategy extends com.crashlytics.android.CrashlyticsInitProvider.EnabledCheckStrategy {
				public static class: java.lang.Class<com.crashlytics.android.ManifestEnabledCheckStrategy>;
				public isCrashlyticsEnabled(param0: globalAndroid.content.Context): boolean;
			}
		}
	}
}

//Generics information:

