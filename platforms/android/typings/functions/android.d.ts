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
				export class HttpsCallableReference {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableReference>;
					public call(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public call(param0: any): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
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
				export class a {
					public static class: java.lang.Class<com.google.firebase.functions.a>;
					/**
					 * Constructs a new instance of the com.google.firebase.functions.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(): com.google.android.gms.tasks.Task<com.google.firebase.functions.c>;
					});
					public constructor();
					public a(): com.google.android.gms.tasks.Task<com.google.firebase.functions.c>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export module a {
					export class a {
						public static class: java.lang.Class<com.google.firebase.functions.a.a>;
						public static a(param0: any): any;
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
				export class b extends com.google.firebase.functions.a {
					public static class: java.lang.Class<com.google.firebase.functions.b>;
					public a(): com.google.android.gms.tasks.Task<com.google.firebase.functions.c>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class c {
					public static class: java.lang.Class<com.google.firebase.functions.c>;
					public b(): string;
					public a(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class d {
					public static class: java.lang.Class<com.google.firebase.functions.d>;
					public b(param0: any): any;
					public constructor();
					public a(param0: any): any;
				}
			}
		}
	}
}

//Generics information:

