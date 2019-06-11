/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzpn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpn>;
							public constructor(param0: com.google.firebase.ml.custom.FirebaseModelInputs, param1: com.google.firebase.ml.custom.FirebaseModelInputOutputOptions);
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
					export module firebase_ml {
						export class zzpo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpo>;
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
					export module firebase_ml {
						export class zzpp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpp>;
							public constructor(param0: number, param1: native.Array<number>);
							public getType(): number;
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
					export module firebase_ml {
						export class zzpq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpq>;
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
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzpr extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpr>;
							public getOutputIndex(param0: string): number;
							public getInputIndex(param0: string): number;
							public release(): void;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.ml.common.modeldownload.FirebaseLocalModel, param2: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel, param3: boolean);
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
					export module firebase_ml {
						export class zzps {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzps>;
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
					export module firebase_ml {
						export class zzpt extends com.google.android.gms.internal.firebase_ml.zzpx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpt>;
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
					export module firebase_ml {
						export class zzpu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpu>;
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
					export module firebase_ml {
						export class zzpv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpv>;
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
					export module firebase_ml {
						export class zzpw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpw>;
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
					export module firebase_ml {
						export class zzpx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: java.nio.MappedByteBuffer): any /* com.google.android.gms.internal.firebase_ml.zzpz*/;
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
					export module firebase_ml {
						export class zzpy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpy>;
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
					export module firebase_ml {
						export class zzpz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpz>;
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
			export module ml {
				export module custom {
					export class FirebaseModelDataType {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelDataType>;
						public static FLOAT32: number;
						public static INT32: number;
						public static BYTE: number;
						public static LONG: number;
						public constructor();
					}
					export module FirebaseModelDataType {
						export class DataType {
							public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelDataType.DataType>;
							/**
							 * Constructs a new instance of the com.google.firebase.ml.custom.FirebaseModelDataType$DataType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
		export module firebase {
			export module ml {
				export module custom {
					export class FirebaseModelInputOutputOptions {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelInputOutputOptions>;
					}
					export module FirebaseModelInputOutputOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder>;
							public constructor();
							public build(): com.google.firebase.ml.custom.FirebaseModelInputOutputOptions;
							public setOutputFormat(param0: number, param1: number, param2: native.Array<number>): com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder;
							public constructor(param0: com.google.firebase.ml.custom.FirebaseModelInputOutputOptions);
							public setInputFormat(param0: number, param1: number, param2: native.Array<number>): com.google.firebase.ml.custom.FirebaseModelInputOutputOptions.Builder;
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
			export module ml {
				export module custom {
					export class FirebaseModelInputs {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelInputs>;
					}
					export module FirebaseModelInputs {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelInputs.Builder>;
							public constructor();
							public add(param0: any): com.google.firebase.ml.custom.FirebaseModelInputs.Builder;
							public build(): com.google.firebase.ml.custom.FirebaseModelInputs;
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
			export module ml {
				export module custom {
					export class FirebaseModelInterpreter {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelInterpreter>;
						public isStatsCollectionEnabled(): boolean;
						public run(param0: com.google.firebase.ml.custom.FirebaseModelInputs, param1: com.google.firebase.ml.custom.FirebaseModelInputOutputOptions): com.google.android.gms.tasks.Task<com.google.firebase.ml.custom.FirebaseModelOutputs>;
						public close(): void;
						public static getInstance(param0: com.google.firebase.ml.custom.FirebaseModelOptions): com.google.firebase.ml.custom.FirebaseModelInterpreter;
						public getOutputIndex(param0: string): com.google.android.gms.tasks.Task<java.lang.Integer>;
						public getInputIndex(param0: string): com.google.android.gms.tasks.Task<java.lang.Integer>;
						public setStatsCollectionEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class FirebaseModelOptions {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelOptions>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module FirebaseModelOptions {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelOptions.Builder>;
							public constructor();
							public setLocalModelName(param0: string): com.google.firebase.ml.custom.FirebaseModelOptions.Builder;
							public build(): com.google.firebase.ml.custom.FirebaseModelOptions;
							public setRemoteModelName(param0: string): com.google.firebase.ml.custom.FirebaseModelOptions.Builder;
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
			export module ml {
				export module custom {
					export class FirebaseModelOutputs {
						public static class: java.lang.Class<com.google.firebase.ml.custom.FirebaseModelOutputs>;
						public getOutput(param0: number): any;
						public constructor(param0: java.util.Map<java.lang.Integer,any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.ml.custom.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class zzb {
						public static class: java.lang.Class<com.google.firebase.ml.custom.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class zzc {
						public static class: java.lang.Class<com.google.firebase.ml.custom.zzc>;
						public call(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class zzd {
						public static class: java.lang.Class<com.google.firebase.ml.custom.zzd>;
						public call(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module custom {
					export class zze {
						public static class: java.lang.Class<com.google.firebase.ml.custom.zze>;
					}
				}
			}
		}
	}
}

//Generics information:

