/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.functions.BuildConfig>;
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

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class ContextProvider {
					public static class: java.lang.Class<com.google.firebase.functions.ContextProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.functions.ContextProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getContext(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
					});
					public constructor();
					public getContext(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseContextProvider extends com.google.firebase.functions.ContextProvider {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseContextProvider>;
					public getContext(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseFunctions {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctions>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.functions.FirebaseFunctions;
					public getHttpsCallable(param0: string): com.google.firebase.functions.HttpsCallableReference;
					public static getInstance(param0: string): com.google.firebase.functions.FirebaseFunctions;
					public useFunctionsEmulator(param0: string): void;
					public static getInstance(param0: com.google.firebase.FirebaseApp, param1: string): com.google.firebase.functions.FirebaseFunctions;
					public static getInstance(): com.google.firebase.functions.FirebaseFunctions;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseFunctionsException {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException>;
					public getCode(): com.google.firebase.functions.FirebaseFunctionsException.Code;
					public getDetails(): any;
				}
				export module FirebaseFunctionsException {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException.Code>;
						public static OK: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static CANCELLED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNKNOWN: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static INVALID_ARGUMENT: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static DEADLINE_EXCEEDED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static NOT_FOUND: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static ALREADY_EXISTS: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static PERMISSION_DENIED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static RESOURCE_EXHAUSTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static FAILED_PRECONDITION: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static ABORTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static OUT_OF_RANGE: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNIMPLEMENTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static INTERNAL: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNAVAILABLE: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static DATA_LOSS: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNAUTHENTICATED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static values(): native.Array<com.google.firebase.functions.FirebaseFunctionsException.Code>;
						public static valueOf(param0: string): com.google.firebase.functions.FirebaseFunctionsException.Code;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsMultiResourceComponent {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsMultiResourceComponent>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsRegistrar {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsRegistrar>;
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
			export module functions {
				export class HttpsCallOptions {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallOptions>;
					public getTimeout(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableContext {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableContext>;
					public getAuthToken(): string;
					public getInstanceIdToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableReference {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableReference>;
					public getTimeout(): number;
					public call(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public withTimeout(param0: number, param1: java.util.concurrent.TimeUnit): com.google.firebase.functions.HttpsCallableReference;
					public call(param0: any): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public setTimeout(param0: number, param1: java.util.concurrent.TimeUnit): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableResult {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableResult>;
					public getData(): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class Serializer {
					public static class: java.lang.Class<com.google.firebase.functions.Serializer>;
					public encode(param0: any): any;
					public constructor();
					public decode(param0: any): any;
				}
			}
		}
	}
}

//Generics information:

