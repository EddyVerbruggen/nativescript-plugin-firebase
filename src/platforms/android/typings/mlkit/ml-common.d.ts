/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zza>;
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
					export module firebase_ml {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzb>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public obtainAndWriteInterfaceToken(): globalAndroid.os.Parcel;
							public transactAndReadException(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public transactAndReadExceptionReturnVoid(param0: number, param1: globalAndroid.os.Parcel): void;
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzd>;
							public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
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
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zze>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
							public dispatchMessage(param0: globalAndroid.os.Message): void;
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
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export abstract class zzgi extends com.google.android.gms.internal.firebase_ml.zzgp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgi>;
							public getLength(): number;
							public constructor(param0: string);
							public writeTo(param0: java.io.OutputStream): void;
							public getType(): string;
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
						export class zzgk extends com.google.android.gms.internal.firebase_ml.zzgo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgk>;
							public constructor();
							public getName(): string;
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
						export class zzgl extends com.google.android.gms.internal.firebase_ml.zzgp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgl>;
							public constructor();
							public getLength(): number;
							public writeTo(param0: java.io.OutputStream): void;
							public getType(): string;
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
						export class zzgm extends com.google.android.gms.internal.firebase_ml.zziy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgm>;
							public constructor();
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zziy.zzc>*/);
							public constructor(param0: java.net.URL);
							public toString(): string;
							public equals(param0: any): boolean;
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
						export class zzgn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgn>;
							public close(): void;
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
						export class zzgo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzgo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getName(): string;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzjm*/, param1: java.io.OutputStream): void;
							});
							public constructor();
							public getName(): string;
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
						export class zzgp extends com.google.android.gms.internal.firebase_ml.zzjm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzgp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLength(): number;
								getType(): string;
								zzfp(): boolean;
								writeTo(param0: java.io.OutputStream): void;
							});
							public constructor();
							public getLength(): number;
							public writeTo(param0: java.io.OutputStream): void;
							public getType(): string;
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
						export class zzgq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzgq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zzgu*/): void;
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
						export class zzgr extends com.google.android.gms.internal.firebase_ml.zzjm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgr>;
							public writeTo(param0: java.io.OutputStream): void;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzjm*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzgo*/);
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
						export class zzgs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgs>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzgt*/, param1: java.lang.StringBuilder);
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
						export class zzgt extends com.google.android.gms.internal.firebase_ml.zziy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgt>;
							public constructor();
							public getUserAgent(): string;
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zziy.zzc>*/);
							public getContentType(): string;
							public getLocation(): string;
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
						export class zzgu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgu>;
							public getRequestMethod(): string;
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
						export class zzgv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgv>;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
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
						export class zzgw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzgw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzgu*/): void;
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
						export class zzgx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgx>;
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
						export class zzgy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgy>;
							public getStatusCode(): number;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzgz*/);
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzhb*/);
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
						export class zzgz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgz>;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public getContent(): java.io.InputStream;
							public disconnect(): void;
							public getContentType(): string;
							public ignore(): void;
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
						export class zzha {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzha>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzha interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzgz*/): void;
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
						export class zzhb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhb>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzgz*/);
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.firebase_ml.zzgt*/);
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
						export abstract class zzhc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhc>;
							public constructor();
							public setContentLength(param0: number): void;
							public setContentEncoding(param0: string): void;
							public addHeader(param0: string, param1: string): void;
							public getContentEncoding(): string;
							public setContentType(param0: string): void;
							public getContentType(): string;
							public getContentLength(): number;
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
						export abstract class zzhd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhd>;
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
						export class zzhe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhe>;
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
						export abstract class zzhf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhf>;
							public constructor();
							public getStatusCode(): number;
							public getContent(): java.io.InputStream;
							public disconnect(): void;
							public getContentEncoding(): string;
							public getContentType(): string;
							public getReasonPhrase(): string;
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
						export class zzhg extends com.google.android.gms.internal.firebase_ml.zzgi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhg>;
							public getLength(): number;
							public constructor(param0: string);
							public writeTo(param0: java.io.OutputStream): void;
							public constructor(param0: any);
							public getType(): string;
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
						export class zzhh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhh>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzhh>*/;
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
						export class zzhj extends com.google.android.gms.internal.firebase_ml.zzji {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhj>;
							public static MEDIA_TYPE: string;
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
						export class zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzif>;
							public static UTF_8: java.nio.charset.Charset;
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
						export abstract class zzih {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzih>;
							public constructor(param0: number, param1: number, param2: number, param3: number);
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
						export class zzii extends com.google.android.gms.internal.firebase_ml.zzih {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzii>;
							public constructor();
							public constructor(param0: number, param1: number, param2: number, param3: number);
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
						export class zzij {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzij>;
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
						export class zzik {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzik>;
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
					export module firebase_ml {
						export class zzil<K, V>  extends java.util.AbstractMap<any,any> implements java.lang.Cloneable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzil<any,any>>;
							public constructor();
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public set(param0: number, param1: any): any;
							public remove(param0: number): any;
							public size(): number;
							public remove(param0: any): any;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public put(param0: any, param1: any): any;
							public containsValue(param0: any): boolean;
						}
						export module zzil {
							export class zza extends java.util.Map.Entry<any,any> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzil.zza>;
								public setValue(param0: any): any;
								public getValue(): any;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getKey(): any;
							}
							export class zzb extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzil.zzb>;
								public size(): number;
								public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
							}
							export class zzc extends java.util.Iterator<java.util.Map.Entry<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzil.zzc>;
								public hasNext(): boolean;
								public remove(): void;
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
				export module internal {
					export module firebase_ml {
						export class zzim {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzim>;
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
						export class zzin {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzin>;
							public constructor(param0: any);
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
						export class zzio {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzio>;
							public static UTF_8: java.nio.charset.Charset;
							public static ISO_8859_1: java.nio.charset.Charset;
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
						export class zzip {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzip>;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
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
						export class zziq extends java.util.Comparator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziq>;
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
						export class zzir {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzir>;
							public isEnum(): boolean;
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
						export class zzis extends java.util.AbstractMap<string,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzis>;
							public get(param0: any): any;
							public containsKey(param0: any): boolean;
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
						export class zzit {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzit>;
							public static clone(param0: any): any;
							public static isNull(param0: any): boolean;
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
						export class zziu extends java.util.Iterator<java.util.Map.Entry<string,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziu>;
							public hasNext(): boolean;
							public remove(): void;
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
						export class zziv extends java.util.Map.Entry<string,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziv>;
							public getValue(): any;
							public hashCode(): number;
							public setValue(param0: any): any;
							public equals(param0: any): boolean;
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
						export class zziw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziw>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
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
						export class zzix extends java.util.AbstractSet<java.util.Map.Entry<string,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzix>;
							public size(): number;
							public clear(): void;
							public isEmpty(): boolean;
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
						export class zziy extends java.util.AbstractMap<string,any> implements java.lang.Cloneable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziy>;
							public constructor();
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
							public remove(param0: any): any;
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zziy.zzc>*/);
							public putAll(param0: java.util.Map<any,any>): void;
						}
						export module zziy {
							export class zza extends java.util.AbstractSet<java.util.Map.Entry<string,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziy.zza>;
								public clear(): void;
								public size(): number;
								public iterator(): java.util.Iterator<java.util.Map.Entry<string,any>>;
							}
							export class zzb extends java.util.Iterator<java.util.Map.Entry<string,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziy.zzb>;
								public hasNext(): boolean;
								public remove(): void;
							}
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziy.zzc>;
								public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zziy.zzc>*/;
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
				export module internal {
					export module firebase_ml {
						export class zziz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zziz>;
							public isPrimitive(): boolean;
							public getName(): string;
							public getGenericType(): java.lang.reflect.Type;
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
						export class zzja {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzja>;
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
						export class zzjb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjb>;
							public constructor(param0: java.util.logging.Logger, param1: java.util.logging.Level, param2: number);
							public close(): void;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
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
						export class zzjc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzjc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): string;
							});
							public constructor();
							public value(): string;
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
						export class zzjd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjd>;
							public close(): void;
							public write(param0: native.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
							public constructor(param0: java.io.OutputStream, param1: java.util.logging.Logger, param2: java.util.logging.Level, param3: number);
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
						export class zzje {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzje>;
							public close(): void;
							public constructor(param0: java.io.InputStream, param1: java.util.logging.Logger, param2: java.util.logging.Level, param3: number);
							public read(): number;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						export class zzjf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzjf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzjg extends com.google.android.gms.internal.firebase_ml.zzjm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjg>;
							public writeTo(param0: java.io.OutputStream): void;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzjm*/, param1: java.util.logging.Logger, param2: java.util.logging.Level, param3: number);
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
						export class zzjh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjh>;
							public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
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
						export class zzji {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzji>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzji interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.io.InputStream, param1: java.nio.charset.Charset, param2: java.lang.Class): any;
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
						export class zzjj extends com.google.android.gms.internal.firebase_ml.zzjk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjj>;
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
						export class zzjk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzjk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								<clinit>(): void;
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
						export class zzjl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjl>;
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
						export class zzjm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzjm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								writeTo(param0: java.io.OutputStream): void;
							});
							public constructor();
							public writeTo(param0: java.io.OutputStream): void;
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
						export class zzjn extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjn>;
							public iterator(): java.util.Iterator<any>;
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
						export class zzjo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjo>;
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
						export class zzjp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzjp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): string;
							});
							public constructor();
							public value(): string;
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
						export class zzjq extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjq>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
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
						export abstract class zzjr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjr>;
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
						export class zzjs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjs>;
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
						export class zzjt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjt>;
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
						export class zzju extends com.google.android.gms.internal.firebase_ml.zzjv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzju>;
							public constructor();
							public constructor(param0: string, param1: boolean);
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
						export abstract class zzjv extends com.google.android.gms.internal.firebase_ml.zzjr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjv>;
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
						export class zzjw extends java.lang.ThreadLocal<native.Array<string>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjw>;
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
						export abstract class zzll<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzll<any>>;
							public constructor();
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
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
						export class zzlm<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlz<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlm<any>>;
							public get(): any;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isPresent(): boolean;
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
						export class zzln extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzln>;
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
						export class zzlo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlo>;
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
						export abstract class zzlp extends com.google.android.gms.internal.firebase_ml.zzlq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlp>;
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
						export abstract class zzlq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlq>;
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
						export abstract class zzlr extends com.google.android.gms.internal.firebase_ml.zzlp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlr>;
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
					export module firebase_ml {
						export class zzls extends com.google.android.gms.internal.firebase_ml.zzlp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzls>;
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
					export module firebase_ml {
						export class zzlt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlt>;
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
						export class zzlu extends com.google.android.gms.internal.firebase_ml.zzlr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlu>;
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
						export class zzlv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlv>;
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
						export class zzlw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlw>;
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
						export class zzlx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlx>;
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
						export class zzly {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzly>;
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
					export module firebase_ml {
						export abstract class zzlz<T>  extends java.io.Serializable {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlz<any>>;
							public get(): any;
							public isPresent(): boolean;
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
						export class zzma extends com.google.android.gms.internal.firebase_ml.zzlt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzma>;
							public static equal(param0: any, param1: any): boolean;
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
						export class zzmb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmb>;
						}
						export module zzmb {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmb.zza>;
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
				export module internal {
					export module firebase_ml {
						export class zzmc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzmc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzmd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd>;
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
						export class zzme<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlz<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzme<any>>;
							public get(): any;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isPresent(): boolean;
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
						export class zzmf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmf>;
							public static checkArgument(param0: boolean): void;
							public static checkNotNull(param0: any): any;
							public static checkArgument(param0: boolean, param1: any): void;
							public static checkNotNull(param0: any, param1: any): any;
							public static checkState(param0: boolean): void;
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
						export class zzmg extends com.google.android.gms.internal.firebase_ml.zzml {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmg>;
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
						export class zzmh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmh>;
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
						export abstract class zzmi extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzll<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmi>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzmh*/, param1: string);
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
						export class zzmj extends com.google.android.gms.internal.firebase_ml.zzmi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmj>;
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
						export class zzmk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmk>;
							public toString(): string;
							public value(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmk>*/;
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
						export class zzml {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzml>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzml interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzmh*/, param1: string): java.util.Iterator<string>;
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
						export class zzmm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmm>;
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
						export class zzmn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmn>;
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
						export abstract class zzmo<E>  extends java.util.AbstractCollection<any> implements java.io.Serializable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmo<any>>;
							public add(param0: any): boolean;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public toArray(param0: native.Array<any>): native.Array<any>;
							public clear(): void;
							public toArray(): native.Array<any>;
							public addAll(param0: java.util.Collection<any>): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
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
						export abstract class zzmp<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmx<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmp<any>>;
							public constructor();
							public previousIndex(): number;
							public constructor(param0: number, param1: number);
							public previous(): any;
							public nextIndex(): number;
							public hasNext(): boolean;
							public get(param0: number): any;
							public hasPrevious(): boolean;
							public next(): any;
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
						export class zzmq<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmp<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmq<any>>;
							public get(param0: number): any;
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
						export abstract class zzmr<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmo<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmr<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public contains(param0: any): boolean;
							public set(param0: number, param1: any): any;
							public remove(param0: number): any;
							public add(param0: any): boolean;
							public lastIndexOf(param0: any): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public add(param0: number, param1: any): void;
							public indexOf(param0: any): number;
							public equals(param0: any): boolean;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzms {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzms>;
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
						export class zzmt extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmr<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmt>;
							public size(): number;
							public get(param0: number): any;
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
						export abstract class zzmu<E>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmu<any>>;
							public constructor();
							public remove(): void;
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
						export class zzmv<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmr<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmv<any>>;
							public size(): number;
							public get(param0: number): any;
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
						export abstract class zzmx<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzmu<any>*/ implements java.util.ListIterator<any>  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmx<any>>;
							public constructor();
							public set(param0: any): void;
							public add(param0: any): void;
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
						export abstract class zzmy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmy>;
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
						export class zzmz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmz>;
						}
						export module zzmz {
							export class zza extends com.google.android.gms.internal.firebase_ml.zzmy {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmz.zza>;
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
				export module internal {
					export module firebase_ml {
						export class zzna extends java.lang.ref.WeakReference<java.lang.Throwable> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzna>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: java.lang.Throwable, param1: java.lang.ref.ReferenceQueue<java.lang.Throwable>);
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
						export class zznb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznb>;
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
						export class zznc extends com.google.android.gms.internal.firebase_ml.zzmy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznc>;
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
						export class zzne extends com.google.android.gms.internal.firebase_ml.zzmy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzne>;
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
						export class zzng {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng>;
						}
						export module zzng {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zza,com.google.android.gms.internal.firebase_ml.zzng.zza.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zza.zza,com.google.android.gms.internal.firebase_ml.zzng.zza.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zza.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zza.zza,com.google.android.gms.internal.firebase_ml.zzng.zza.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zza.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zza,com.google.android.gms.internal.firebase_ml.zzng.zza.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zza.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzaa extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzaa,com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa>;
								public isInitialized(): boolean;
							}
							export module zzaa {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzaa,com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzb>;
									public isInitialized(): boolean;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzd>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzd>*/;
								}
								export class zze extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zze>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zze>*/;
									public toString(): string;
								}
							}
							export class zzab extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zze<com.google.android.gms.internal.firebase_ml.zzng.zzab,com.google.android.gms.internal.firebase_ml.zzng.zzab.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzab>;
								public isInitialized(): boolean;
							}
							export module zzab {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zzb<com.google.android.gms.internal.firebase_ml.zzng.zzab,com.google.android.gms.internal.firebase_ml.zzng.zzab.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzab.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzac extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzac,com.google.android.gms.internal.firebase_ml.zzng.zzac.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzac>;
								public isInitialized(): boolean;
							}
							export module zzac {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzac.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzac.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzac,com.google.android.gms.internal.firebase_ml.zzng.zzac.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzac.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzad extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzad,com.google.android.gms.internal.firebase_ml.zzng.zzad.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzad>;
								public isInitialized(): boolean;
							}
							export module zzad {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzad,com.google.android.gms.internal.firebase_ml.zzng.zzad.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzad.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzae extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzae,com.google.android.gms.internal.firebase_ml.zzng.zzae.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzae>;
								public isInitialized(): boolean;
							}
							export module zzae {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzae,com.google.android.gms.internal.firebase_ml.zzng.zzae.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzae.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaf extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzaf,com.google.android.gms.internal.firebase_ml.zzng.zzaf.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaf>;
								public isInitialized(): boolean;
							}
							export module zzaf {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzaf,com.google.android.gms.internal.firebase_ml.zzng.zzaf.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaf.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzag extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzag,com.google.android.gms.internal.firebase_ml.zzng.zzag.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzag>;
								public isInitialized(): boolean;
							}
							export module zzag {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzag,com.google.android.gms.internal.firebase_ml.zzng.zzag.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzag.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzag.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzag.zzb>*/;
								}
							}
							export class zzah extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzah,com.google.android.gms.internal.firebase_ml.zzng.zzah.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzah>;
								public isInitialized(): boolean;
							}
							export module zzah {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzah.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzah.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzah,com.google.android.gms.internal.firebase_ml.zzng.zzah.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzah.zzb>;
									public isInitialized(): boolean;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzah.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzah.zzc>*/;
									public toString(): string;
								}
							}
							export class zzai extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzai,com.google.android.gms.internal.firebase_ml.zzng.zzai.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzai>;
								public isInitialized(): boolean;
							}
							export module zzai {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzai.zza,com.google.android.gms.internal.firebase_ml.zzng.zzai.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzai.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzai.zza,com.google.android.gms.internal.firebase_ml.zzng.zzai.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzai.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzai,com.google.android.gms.internal.firebase_ml.zzng.zzai.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzai.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzaj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzaj,com.google.android.gms.internal.firebase_ml.zzng.zzaj.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaj>;
								public isInitialized(): boolean;
							}
							export module zzaj {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaj.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaj.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzaj,com.google.android.gms.internal.firebase_ml.zzng.zzaj.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaj.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzak extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzak,com.google.android.gms.internal.firebase_ml.zzng.zzak.zzc>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzak>;
								public isInitialized(): boolean;
							}
							export module zzak {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzak.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzak.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzak.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzak.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzak,com.google.android.gms.internal.firebase_ml.zzng.zzak.zzc>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzak.zzc>;
									public isInitialized(): boolean;
								}
							}
							export class zzal extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzal,com.google.android.gms.internal.firebase_ml.zzng.zzal.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzal>;
								public isInitialized(): boolean;
							}
							export module zzal {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzal,com.google.android.gms.internal.firebase_ml.zzng.zzal.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzal.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzam extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzam,com.google.android.gms.internal.firebase_ml.zzng.zzam.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzam>;
								public isInitialized(): boolean;
							}
							export module zzam {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzam,com.google.android.gms.internal.firebase_ml.zzng.zzam.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzam.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzan extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzan,com.google.android.gms.internal.firebase_ml.zzng.zzan.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzan>;
								public isInitialized(): boolean;
							}
							export module zzan {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzan,com.google.android.gms.internal.firebase_ml.zzng.zzan.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzan.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzao extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzao,com.google.android.gms.internal.firebase_ml.zzng.zzao.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao>;
								public isInitialized(): boolean;
							}
							export module zzao {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzao,com.google.android.gms.internal.firebase_ml.zzng.zzao.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb>;
									public isInitialized(): boolean;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzb.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc>;
									public isInitialized(): boolean;
								}
								export module zzc {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzc.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd>;
									public isInitialized(): boolean;
								}
								export module zzd {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd,com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzao.zzd.zza>;
										public isInitialized(): boolean;
									}
								}
							}
							export class zzap extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzap,com.google.android.gms.internal.firebase_ml.zzng.zzap.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzap>;
								public isInitialized(): boolean;
							}
							export module zzap {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzap,com.google.android.gms.internal.firebase_ml.zzng.zzap.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzap.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaq extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzaq,com.google.android.gms.internal.firebase_ml.zzng.zzaq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaq>;
								public isInitialized(): boolean;
							}
							export module zzaq {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzaq,com.google.android.gms.internal.firebase_ml.zzng.zzaq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaq.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaq.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzaq.zzb>*/;
									public toString(): string;
								}
							}
							export class zzar extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzar,com.google.android.gms.internal.firebase_ml.zzng.zzar.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzar>;
								public isInitialized(): boolean;
							}
							export module zzar {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzar,com.google.android.gms.internal.firebase_ml.zzng.zzar.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzar.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzas extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzas,com.google.android.gms.internal.firebase_ml.zzng.zzas.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzas>;
								public isInitialized(): boolean;
							}
							export module zzas {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzas,com.google.android.gms.internal.firebase_ml.zzng.zzas.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzas.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzat extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzat,com.google.android.gms.internal.firebase_ml.zzng.zzat.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzat>;
								public isInitialized(): boolean;
							}
							export module zzat {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzat.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzat.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzat,com.google.android.gms.internal.firebase_ml.zzng.zzat.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzat.zzb>;
									public isInitialized(): boolean;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc>;
									public isInitialized(): boolean;
								}
								export module zzc {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzat.zzc.zza>;
										public isInitialized(): boolean;
									}
								}
							}
							export class zzau extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzau,com.google.android.gms.internal.firebase_ml.zzng.zzau.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzau>;
								public isInitialized(): boolean;
							}
							export module zzau {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzau,com.google.android.gms.internal.firebase_ml.zzng.zzau.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzau.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzav extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzav,com.google.android.gms.internal.firebase_ml.zzng.zzav.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzav>;
								public isInitialized(): boolean;
							}
							export module zzav {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzav,com.google.android.gms.internal.firebase_ml.zzng.zzav.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzav.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzav.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzav.zzb>*/;
									public toString(): string;
								}
							}
							export class zzaw extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzaw,com.google.android.gms.internal.firebase_ml.zzng.zzaw.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaw>;
								public isInitialized(): boolean;
							}
							export module zzaw {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzaw,com.google.android.gms.internal.firebase_ml.zzng.zzaw.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzaw.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzax extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzax,com.google.android.gms.internal.firebase_ml.zzng.zzax.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzax>;
								public isInitialized(): boolean;
							}
							export module zzax {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzax,com.google.android.gms.internal.firebase_ml.zzng.zzax.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzax.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzb,com.google.android.gms.internal.firebase_ml.zzng.zzb.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzb.zza,com.google.android.gms.internal.firebase_ml.zzng.zzb.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzb.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzb.zza,com.google.android.gms.internal.firebase_ml.zzng.zzb.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzb.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzb,com.google.android.gms.internal.firebase_ml.zzng.zzb.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzb.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzc.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzc>;
								public isInitialized(): boolean;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzc.zza,com.google.android.gms.internal.firebase_ml.zzng.zzc.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzc.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzc.zza,com.google.android.gms.internal.firebase_ml.zzng.zzc.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzc.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzc,com.google.android.gms.internal.firebase_ml.zzng.zzc.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzc.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzd,com.google.android.gms.internal.firebase_ml.zzng.zzd.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzd>;
								public isInitialized(): boolean;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzd.zza,com.google.android.gms.internal.firebase_ml.zzng.zzd.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzd.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzd.zza,com.google.android.gms.internal.firebase_ml.zzng.zzd.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzd.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzd,com.google.android.gms.internal.firebase_ml.zzng.zzd.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzd.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zze,com.google.android.gms.internal.firebase_ml.zzng.zze.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zze>;
								public isInitialized(): boolean;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zze.zza,com.google.android.gms.internal.firebase_ml.zzng.zze.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zze.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zze.zza,com.google.android.gms.internal.firebase_ml.zzng.zze.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zze.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zze,com.google.android.gms.internal.firebase_ml.zzng.zze.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zze.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzf,com.google.android.gms.internal.firebase_ml.zzng.zzf.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzf>;
								public isInitialized(): boolean;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzf.zza,com.google.android.gms.internal.firebase_ml.zzng.zzf.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzf.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzf.zza,com.google.android.gms.internal.firebase_ml.zzng.zzf.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzf.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzf,com.google.android.gms.internal.firebase_ml.zzng.zzf.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzf.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzg,com.google.android.gms.internal.firebase_ml.zzng.zzg.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzg>;
								public isInitialized(): boolean;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzg.zza,com.google.android.gms.internal.firebase_ml.zzng.zzg.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzg.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzg.zza,com.google.android.gms.internal.firebase_ml.zzng.zzg.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzg.zza.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzg,com.google.android.gms.internal.firebase_ml.zzng.zzg.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzg.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzh,com.google.android.gms.internal.firebase_ml.zzng.zzh.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzh>;
								public isInitialized(): boolean;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzh,com.google.android.gms.internal.firebase_ml.zzng.zzh.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzh.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzi,com.google.android.gms.internal.firebase_ml.zzng.zzi.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzi>;
								public isInitialized(): boolean;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzi,com.google.android.gms.internal.firebase_ml.zzng.zzi.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzi.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzj,com.google.android.gms.internal.firebase_ml.zzng.zzj.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzj>;
								public isInitialized(): boolean;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzj,com.google.android.gms.internal.firebase_ml.zzng.zzj.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzj.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzk,com.google.android.gms.internal.firebase_ml.zzng.zzk.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzk>;
								public isInitialized(): boolean;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzk,com.google.android.gms.internal.firebase_ml.zzng.zzk.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzk.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzl,com.google.android.gms.internal.firebase_ml.zzng.zzl.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzl>;
								public isInitialized(): boolean;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzl,com.google.android.gms.internal.firebase_ml.zzng.zzl.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzl.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzl.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzl.zzb>*/;
									public toString(): string;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzm,com.google.android.gms.internal.firebase_ml.zzng.zzm.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzm>;
								public isInitialized(): boolean;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzm,com.google.android.gms.internal.firebase_ml.zzng.zzm.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzm.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzn extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzn,com.google.android.gms.internal.firebase_ml.zzng.zzn.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzn>;
								public isInitialized(): boolean;
							}
							export module zzn {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzn,com.google.android.gms.internal.firebase_ml.zzng.zzn.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzn.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzo,com.google.android.gms.internal.firebase_ml.zzng.zzo.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzo>;
								public isInitialized(): boolean;
							}
							export module zzo {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzo,com.google.android.gms.internal.firebase_ml.zzng.zzo.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzo.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzp extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzp,com.google.android.gms.internal.firebase_ml.zzng.zzp.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzp>;
								public isInitialized(): boolean;
							}
							export module zzp {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzp,com.google.android.gms.internal.firebase_ml.zzng.zzp.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzp.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzq extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzq,com.google.android.gms.internal.firebase_ml.zzng.zzq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzq>;
								public isInitialized(): boolean;
							}
							export module zzq {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzq,com.google.android.gms.internal.firebase_ml.zzng.zzq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzq.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzr extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzr,com.google.android.gms.internal.firebase_ml.zzng.zzr.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzr>;
								public isInitialized(): boolean;
							}
							export module zzr {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzr,com.google.android.gms.internal.firebase_ml.zzng.zzr.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzr.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzs extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzs,com.google.android.gms.internal.firebase_ml.zzng.zzs.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzs>;
								public isInitialized(): boolean;
							}
							export module zzs {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzs,com.google.android.gms.internal.firebase_ml.zzng.zzs.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzs.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzt extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzt,com.google.android.gms.internal.firebase_ml.zzng.zzt.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzt>;
								public isInitialized(): boolean;
							}
							export module zzt {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzt,com.google.android.gms.internal.firebase_ml.zzng.zzt.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzt.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzu,com.google.android.gms.internal.firebase_ml.zzng.zzu.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzu>;
								public isInitialized(): boolean;
							}
							export module zzu {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzu,com.google.android.gms.internal.firebase_ml.zzng.zzu.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzu.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzv extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzv,com.google.android.gms.internal.firebase_ml.zzng.zzv.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzv>;
								public isInitialized(): boolean;
							}
							export module zzv {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzv,com.google.android.gms.internal.firebase_ml.zzng.zzv.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzv.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzw extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzw,com.google.android.gms.internal.firebase_ml.zzng.zzw.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzw>;
								public isInitialized(): boolean;
							}
							export module zzw {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza,com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza>;
									public isInitialized(): boolean;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zza>;
										public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zza>*/;
										public toString(): string;
									}
									export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza,com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zzb>;
										public isInitialized(): boolean;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzw,com.google.android.gms.internal.firebase_ml.zzng.zzw.zzb>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzw.zzb>;
									public isInitialized(): boolean;
								}
							}
							export class zzx extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzx,com.google.android.gms.internal.firebase_ml.zzng.zzx.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzx>;
								public isInitialized(): boolean;
							}
							export module zzx {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzx,com.google.android.gms.internal.firebase_ml.zzng.zzx.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzx.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzy extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzy,com.google.android.gms.internal.firebase_ml.zzng.zzy.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzy>;
								public isInitialized(): boolean;
							}
							export module zzy {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzy,com.google.android.gms.internal.firebase_ml.zzng.zzy.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzy.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzz extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzng.zzz,com.google.android.gms.internal.firebase_ml.zzng.zzz.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzz>;
								public isInitialized(): boolean;
							}
							export module zzz {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzng.zzz,com.google.android.gms.internal.firebase_ml.zzng.zzz.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng.zzz.zza>;
									public isInitialized(): boolean;
								}
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
				export module internal {
					export module firebase_ml {
						export class zznh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznh>;
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
						export class zzni extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzng.zzak.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzni>;
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
						export class zznj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzng.zzak.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznj>;
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
						export class zznk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zznq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznk>;
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
						export class zznl extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzl.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznl>;
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
						export class zznm extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznm>;
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
						export class zznn extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznn>;
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
						export class zzno extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzw.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzno>;
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
						export class zznp extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zznq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznp>;
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
						export class zznq extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznq>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zznq>*/;
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
					export module firebase_ml {
						export class zznr extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznr>;
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
						export class zzns extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zznq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzns>;
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
						export class zznt extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zznu>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznt>;
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
						export class zznu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznu>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zznu>*/;
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
					export module firebase_ml {
						export class zznv extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznv>;
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
						export class zznw extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznw>;
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
						export class zznx extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznx>;
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
						export class zzny extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzny>;
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
						export class zznz extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznz>;
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
						export class zzoa extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoa>;
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
						export class zzob extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zzd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzob>;
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
						export class zzoc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaa.zze>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoc>;
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
						export class zzod extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzod>;
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
						export class zzoe extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoe>;
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
						export class zzof extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzac.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzof>;
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
						export class zzog extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzag.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzog>;
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
						export class zzoh extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoh>;
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
						export class zzoi extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoi>;
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
						export class zzoj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzah.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoj>;
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
						export class zzok extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzah.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzok>;
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
						export class zzol extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzol>;
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
						export class zzom extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzom>;
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
						export class zzon extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaj.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzon>;
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
						export class zzoo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzng.zzak.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoo>;
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
						export class zzop extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzng.zzak.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzop>;
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
						export class zzoq extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoq>;
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
						export class zzor extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzak.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzor>;
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
						export class zzos extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzak.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzos>;
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
						export class zzot extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzot>;
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
						export class zzou extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzaq.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzou>;
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
						export class zzov extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzov>;
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
						export class zzow extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzow>;
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
						export class zzox extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzat.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzox>;
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
						export class zzoy extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzng.zzav.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoy>;
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
						export class zzoz extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoz>;
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
						export abstract class zzpa<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpa<any,any>>;
							public constructor();
							public create(param0: K): V;
							public get(param0: K): V;
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
						export class zzpb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpb>;
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
						export class zzpc<T, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpc<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpc<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: S): T;
								zznl(): any /* com.google.android.gms.internal.firebase_ml.zzpx*/;
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
						export class zzpd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpd>;
							public getVersion(param0: string): string;
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
						export class zzpe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpe>;
							public run(): void;
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
						export class zzpf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpf>;
							public getHandler(): globalAndroid.os.Handler;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
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
						export class zzpg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzph extends java.util.concurrent.Executor {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzph>;
							public execute(param0: java.lang.Runnable): void;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzph>*/;
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
						export class zzpi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpi>;
							public call(): any;
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
						export class zzpj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpj>;
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
						export class zzpk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpk>;
							public create(param0: com.google.firebase.components.ComponentContainer): any;
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
						export class zzpl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpl>;
							public call(): any;
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
						export class zzpm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpm>;
							public create(param0: com.google.firebase.components.ComponentContainer): any;
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
						export class zzpn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpn>;
							public getPersistenceKey(): string;
							public getApplicationContext(): globalAndroid.content.Context;
							public get(param0: java.lang.Class): any;
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
						}
						export module zzpo {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzpa<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzpo>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpo.zza>;
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpo.zzb>;
								/**
								 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpo$zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzng.zzab*/): void;
								});
								public constructor();
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
				export module internal {
					export module firebase_ml {
						export class zzpp<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpp<any>>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
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
							public call(): any;
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
						export class zzpr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpr>;
							public call(): any;
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
							public create(param0: com.google.firebase.components.ComponentContainer): any;
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
						export class zzpt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpt>;
							public run(): void;
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
						export class zzpu<K>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpu<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpu<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zznt(): any /* com.google.android.gms.internal.firebase_ml.zzng.zzab.zza*/;
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
						export class zzpx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzpx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zznu(): void;
								release(): void;
							});
							public constructor();
							public release(): void;
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
							public onBackgroundStateChanged(param0: boolean): void;
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
						export module zzpz {
							export class zza extends java.util.concurrent.Callable<java.lang.Void> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzpz.zza>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
				export module internal {
					export module firebase_ml {
						export class zzqa {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqa>;
							public create(param0: com.google.firebase.components.ComponentContainer): any;
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
						export class zzqb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqb>;
							public create(param0: com.google.firebase.components.ComponentContainer): any;
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
						export class zzqc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqc>;
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
						export class zzqd extends com.google.android.gms.internal.firebase_ml.zzpo.zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqd>;
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
						export class zzsl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl>;
						}
						export module zzsl {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzsl.zza,com.google.android.gms.internal.firebase_ml.zzsl.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzsl.zza,com.google.android.gms.internal.firebase_ml.zzsl.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zza.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<com.google.android.gms.internal.firebase_ml.zzsl.zzb,com.google.android.gms.internal.firebase_ml.zzsl.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<com.google.android.gms.internal.firebase_ml.zzsl.zzb,com.google.android.gms.internal.firebase_ml.zzsl.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzc>*/;
									public toString(): string;
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzd>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzd>*/;
									public toString(): string;
								}
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
				export module internal {
					export module firebase_ml {
						export class zzsn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsn>;
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
						export class zzso extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzuf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzso>;
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
						export class zzsp extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsp>;
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
						export class zzsq extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsq>;
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
						export class zzsr extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsr>;
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
						export class zzss extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzss>;
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
						export class zzst extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzsl.zzb.zzd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzst>;
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
						export class zzsv extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsv>;
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
						export class zzue extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwa<com.google.android.gms.internal.firebase_ml.zzuf>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue>;
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
						export class zzuf extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwb*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuf>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzuf>*/;
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
						export abstract class zzug<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzxg*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzug<any,any>>;
							public constructor();
							public isInitialized(): boolean;
							public toByteArray(): native.Array<number>;
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
						export class zzuh extends com.google.android.gms.internal.firebase_ml.zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuh>;
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
						export abstract class zzui extends com.google.android.gms.internal.firebase_ml.zzxp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzui>;
							public constructor();
							public isInitialized(): boolean;
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
						export abstract class zzuj<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzxj*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuj<any,any>>;
							public constructor();
							public isInitialized(): boolean;
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
						export abstract class zzuk<E>  extends java.util.AbstractList<any> implements any /* com.google.android.gms.internal.firebase_ml.zzwh<any>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuk<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public clear(): void;
							public equals(param0: any): boolean;
							public addAll(param0: java.util.Collection<any>): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
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
						export class zzul<MessageType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzxt<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzul<any>>;
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
						export class zzum {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzum>;
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
						export class zzun {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzun>;
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
						export class zzuo extends com.google.android.gms.internal.firebase_ml.zzuk<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuo>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public addBoolean(param0: boolean): void;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzup {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzup>;
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
						export abstract class zzuq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuq>;
							public size(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
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
						export abstract class zzur {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzur>;
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
						export class zzus extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.firebase_ml.zzuq>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzus>;
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
						export class zzut extends com.google.android.gms.internal.firebase_ml.zzuv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzut>;
							public nextByte(): number;
							public hasNext(): boolean;
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
						export class zzuu extends com.google.android.gms.internal.firebase_ml.zzuw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuu>;
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
						export abstract class zzuv extends com.google.android.gms.internal.firebase_ml.zzuz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuv>;
							public nextByte(): number;
							public remove(): void;
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
						export class zzuw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzuw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
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
						export class zzux extends com.google.android.gms.internal.firebase_ml.zzva {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzux>;
							public size(): number;
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
						export class zzuy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuy>;
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
						export class zzuz extends java.util.Iterator<java.lang.Byte> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzuz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nextByte(): number;
							});
							public constructor();
							public nextByte(): number;
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
						export class zzva extends com.google.android.gms.internal.firebase_ml.zzvb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzva>;
							public bytes: native.Array<number>;
							public size(): number;
							public equals(param0: any): boolean;
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
						export abstract class zzvb extends com.google.android.gms.internal.firebase_ml.zzuq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvb>;
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
						export abstract class zzvc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvc>;
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
						export class zzvd extends com.google.android.gms.internal.firebase_ml.zzuw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvd>;
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
						export class zzve extends com.google.android.gms.internal.firebase_ml.zzvc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzve>;
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
						export class zzvf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvf>;
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
						export class zzvg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvg>;
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
						export abstract class zzvh extends com.google.android.gms.internal.firebase_ml.zzur {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvh>;
						}
						export module zzvh {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvh.zza>;
							}
							export class zzb extends com.google.android.gms.internal.firebase_ml.zzvh {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvh.zzb>;
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
				export module internal {
					export module firebase_ml {
						export class zzvi extends com.google.android.gms.internal.firebase_ml.zzuk<java.lang.Double> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvi>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzvj extends com.google.android.gms.internal.firebase_ml.zzzp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvj>;
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
						export class zzvk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvk>;
						}
						export module zzvk {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvk.zza>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
				export module internal {
					export module firebase_ml {
						export class zzvl<ContainingType, Type>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvl<any,any>>;
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
						export abstract class zzvm<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvm<any>>;
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
						export class zzvn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvn>;
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
						export class zzvo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvm<com.google.android.gms.internal.firebase_ml.zzvx.zzd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvo>;
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
						export class zzvp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvp>;
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
						export class zzvq<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvq<any>>;
							public hashCode(): number;
							public iterator(): java.util.Iterator<java.util.Map.Entry<T,any>>;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
							public isImmutable(): boolean;
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
						export class zzvr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvr>;
							public id(): number;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzvr>*/;
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
						export class zzvs<T>  extends java.lang.Comparable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvs<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvs<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): number;
								zztn(): any /* com.google.android.gms.internal.firebase_ml.zzzj*/;
								zzto(): any /* com.google.android.gms.internal.firebase_ml.zzzm*/;
								zztp(): boolean;
								zztq(): boolean;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzxj*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzxg*/): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzxp*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzxp*/): any /* com.google.android.gms.internal.firebase_ml.zzxp*/;
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
						export class zzvt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvt>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzvt>*/;
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
						export class zzvu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvu>;
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
						export class zzvv extends com.google.android.gms.internal.firebase_ml.zzxh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvv>;
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
						export class zzvw extends com.google.android.gms.internal.firebase_ml.zzuk<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvw>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export abstract class zzvx<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzug<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx<any,any>>;
							public constructor();
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
						}
						export module zzvx {
							export class zza<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuj<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zza<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzb<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx.zza<any,any>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zzb<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzc<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzul<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zzc<any>>;
								public constructor(param0: any);
								public constructor();
							}
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvs<com.google.android.gms.internal.firebase_ml.zzvx.zzd>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zzd>;
							}
							export abstract class zze<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvx<any,any>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzxi*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zze<any,any>>;
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzf extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zzf>;
								public static values$50KLMJ33DTMIUPRFDTJMOP9FE1P6UT3FC9QMCBQ7CLN6ASJ1EHIM8JB5EDPM2PR59HKN8P949LIN8Q3FCHA6UIBEEPNMMP9R0(): native.Array<number>;
							}
							export class zzg<ContainingType, Type>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvl<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx.zzg<any,any>>;
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
				export module internal {
					export module firebase_ml {
						export class zzvy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvy>;
							public static hashCode(param0: native.Array<number>): number;
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
						export class zzvz extends com.google.android.gms.internal.firebase_ml.zzuk<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvz>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getInt(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzwa<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwa<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwa<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzwb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): number;
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
						export class zzwc extends com.google.android.gms.internal.firebase_ml.zzwh<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzsp(): void;
								zzso(): boolean;
								zzcr(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzwh<any>*/;
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
						export class zzwd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: number): boolean;
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
						export class zzwe<F, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwe<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwe<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzwf extends com.google.android.gms.internal.firebase_ml.zzwh<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzdo(param0: number): void;
								zzdn(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzwf*/;
								zzsp(): void;
								zzso(): boolean;
								zzcr(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzwh<any>*/;
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
						export class zzwg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwg>;
							public constructor(param0: string);
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
						export class zzwh<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwh<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwh<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzsp(): void;
								zzso(): boolean;
								zzcr(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzwh<E>*/;
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
						export class zzwi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwi>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzwi>*/;
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
						export class zzwj extends com.google.android.gms.internal.firebase_ml.zzwg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwj>;
							public constructor(param0: string);
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
						export class zzwk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwk>;
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
						export class zzwl extends com.google.android.gms.internal.firebase_ml.zzwp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwl>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
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
						export class zzwm<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwm<any>>;
							public constructor(param0: java.util.Iterator<java.util.Map.Entry<any,any>>);
							public hasNext(): boolean;
							public remove(): void;
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
						export class zzwn<K>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwn<any>>;
							public getValue(): any;
							public getKey(): any;
							public setValue(param0: any): any;
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
						export class zzwo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuk<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwo>;
							public constructor();
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public size(): number;
							public getRaw(param0: number): any;
							public clear(): void;
							public constructor(param0: number);
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzwp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwp>;
							public constructor();
							public hashCode(): number;
							public equals(param0: any): boolean;
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
						export abstract class zzwq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwq>;
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
						export class zzwr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getRaw(param0: number): any;
								zze(param0: any /* com.google.android.gms.internal.firebase_ml.zzuq*/): void;
								zzur(): java.util.List<any>;
								zzus(): any /* com.google.android.gms.internal.firebase_ml.zzwr*/;
							});
							public constructor();
							public getRaw(param0: number): any;
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
						export class zzws extends com.google.android.gms.internal.firebase_ml.zzwq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzws>;
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
						export class zzwt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwt>;
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
						export class zzwu extends com.google.android.gms.internal.firebase_ml.zzuk<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwu>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
							public getLong(param0: number): number;
							public addAll(param0: java.util.Collection<any>): boolean;
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
						export class zzwv extends com.google.android.gms.internal.firebase_ml.zzwq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwv>;
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
						export class zzww extends com.google.android.gms.internal.firebase_ml.zzxh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzww>;
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
						export class zzwx extends com.google.android.gms.internal.firebase_ml.zzyd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwx>;
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
						export class zzwy<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwy<any,any>>;
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
						export class zzwz extends com.google.android.gms.internal.firebase_ml.zzxh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwz>;
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
						export class zzxa<K, V>  extends java.util.LinkedHashMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxa<any,any>>;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public hashCode(): number;
							public remove(param0: any): any;
							public clear(): void;
							public isMutable(): boolean;
							public put(param0: any, param1: any): any;
							public equals(param0: any): boolean;
							public putAll(param0: java.util.Map<any,any>): void;
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
						export class zzxb<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxb<any,any>>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzzj*/, param1: K, param2: any /* com.google.android.gms.internal.firebase_ml.zzzj*/, param3: V);
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
						export class zzxc extends com.google.android.gms.internal.firebase_ml.zzxd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc>;
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
						export class zzxd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzu(param0: any): java.util.Map<any,any>;
								zzw(param0: any): java.util.Map<any,any>;
								zzx(param0: any): boolean;
								zzy(param0: any): any;
								zzz(param0: any): any;
								zzv(param0: any): any /* com.google.android.gms.internal.firebase_ml.zzxb<any,any>*/;
								zzd(param0: any, param1: any): any;
								zzd(param0: number, param1: any, param2: any): number;
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
						export class zzxe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxe>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzva(): number;
								zzvb(): boolean;
								zzvc(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
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
						export class zzxf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxf>;
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
						export class zzxg extends com.google.android.gms.internal.firebase_ml.zzxi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zzvh*/): void;
								zzua(): number;
								zzsk(): any /* com.google.android.gms.internal.firebase_ml.zzuq*/;
								zzuf(): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zzue(): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zzty(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
						export class zzxh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzh(param0: java.lang.Class<any>): boolean;
								zzi(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.firebase_ml.zzxe*/;
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
						export class zzxi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzty(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
						export class zzxj extends com.google.android.gms.internal.firebase_ml.zzxi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zztx(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								zztw(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzxg*/): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zzty(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
						export class zzxk<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzya<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxk<any>>;
							public hashCode(param0: any): number;
							public newInstance(): any;
							public equals(param0: any, param1: any): boolean;
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
						export class zzxl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxl>;
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
						export class zzxm<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzya<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxm<any>>;
							public hashCode(param0: any): number;
							public newInstance(): any;
							public equals(param0: any, param1: any): boolean;
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
						export class zzxn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxn>;
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
						export class zzxo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								newInstance(param0: any): any;
							});
							public constructor();
							public newInstance(param0: any): any;
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
						export class zzxp extends com.google.android.gms.internal.firebase_ml.zzxg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzsm(): any /* com.google.android.gms.internal.firebase_ml.zzxp*/;
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zzvh*/): void;
								zzua(): number;
								zzsk(): any /* com.google.android.gms.internal.firebase_ml.zzuq*/;
								zzuf(): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zzue(): any /* com.google.android.gms.internal.firebase_ml.zzxj*/;
								zzty(): any /* com.google.android.gms.internal.firebase_ml.zzxg*/;
								isInitialized(): boolean;
							});
							public constructor();
							public isInitialized(): boolean;
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
						export class zzxq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxq>;
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
						export class zzxr extends com.google.android.gms.internal.firebase_ml.zzxo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxr>;
							public newInstance(param0: any): any;
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
						export class zzxs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxs>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzxt<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxt<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxt<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module firebase_ml {
						export class zzxu<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuk<any>*/ implements java.util.RandomAccess  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxu<any>>;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public add(param0: number, param1: any): void;
							public get(param0: number): any;
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
						export class zzxv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxv>;
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
						export class zzxw extends com.google.android.gms.internal.firebase_ml.zzuq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxw>;
							public size(): number;
							public equals(param0: any): boolean;
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
						export class zzxx extends com.google.android.gms.internal.firebase_ml.zzxe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxx>;
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
						export class zzxy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxy>;
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
						export class zzxz extends com.google.android.gms.internal.firebase_ml.zzuv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxz>;
							public nextByte(): number;
							public hasNext(): boolean;
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
						export class zzya<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzya<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzya<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T, param1: any /* com.google.android.gms.internal.firebase_ml.zzzp*/): void;
								zza(param0: T, param1: native.Array<number>, param2: number, param3: number, param4: any /* com.google.android.gms.internal.firebase_ml.zzup*/): void;
								zzq(param0: T): void;
								zzac(param0: T): boolean;
								newInstance(): T;
								equals(param0: T, param1: T): boolean;
								hashCode(param0: T): number;
								zze(param0: T, param1: T): void;
								zzaa(param0: T): number;
							});
							public constructor();
							public equals(param0: T, param1: T): boolean;
							public newInstance(): T;
							public hashCode(param0: T): number;
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
						export class zzyb extends java.lang.Object /* java.util.Iterator<com.google.android.gms.internal.firebase_ml.zzvb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyb>;
							public hasNext(): boolean;
							public remove(): void;
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
						export class zzyc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyc>;
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
						export class zzyd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzyd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzk(param0: java.lang.Class): any /* com.google.android.gms.internal.firebase_ml.zzya<any>*/;
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
						export class zzye extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzyf<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzye>;
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
						export class zzyf<K, V>  extends java.util.AbstractMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyf<any,any>>;
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public equals(param0: any): boolean;
							public isImmutable(): boolean;
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
						export class zzyg extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzym*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyg>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
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
						export class zzyh extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyh>;
							public hasNext(): boolean;
							public remove(): void;
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
						export class zzyi extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyi>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
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
						export class zzyj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyj>;
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
						export class zzyk extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyk>;
							public getValue(): any;
							public hashCode(): number;
							public toString(): string;
							public setValue(param0: any): any;
							public equals(param0: any): boolean;
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
						export class zzyl extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyl>;
							public iterator(): java.util.Iterator<any>;
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
						export class zzym extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzym>;
							public contains(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public clear(): void;
							public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
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
						export class zzyn extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyn>;
							public hasNext(): boolean;
							public remove(): void;
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
						export class zzyo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyo>;
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
						export class zzyp extends com.google.android.gms.internal.firebase_ml.zzxe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyp>;
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
						export class zzyq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzyq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								size(): number;
								zzcs(param0: number): number;
							});
							public constructor();
							public size(): number;
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
						export class zzyr extends com.google.android.gms.internal.firebase_ml.zzyq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyr>;
							public size(): number;
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
						export abstract class zzys<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzys<any,any>>;
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
						export class zzyt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyt>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzxg*/);
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
						export class zzyu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzys<com.google.android.gms.internal.firebase_ml.zzyv,com.google.android.gms.internal.firebase_ml.zzyv>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyu>;
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
						export class zzyv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyv>;
							public hashCode(): number;
							public equals(param0: any): boolean;
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
						export class zzyw extends java.util.ListIterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyw>;
							public previousIndex(): number;
							public nextIndex(): number;
							public hasNext(): boolean;
							public remove(): void;
							public hasPrevious(): boolean;
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
						export class zzyx extends java.util.AbstractList<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyx>;
							public listIterator(param0: number): java.util.ListIterator<string>;
							public iterator(): java.util.Iterator<string>;
							public size(): number;
							public getRaw(param0: number): any;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzwr*/);
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
						export class zzyy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyy>;
						}
						export module zzyy {
							export class zza extends com.google.android.gms.internal.firebase_ml.zzyy.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyy.zza>;
							}
							export class zzb extends com.google.android.gms.internal.firebase_ml.zzyy.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyy.zzb>;
							}
							export class zzc extends com.google.android.gms.internal.firebase_ml.zzyy.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyy.zzc>;
							}
							export abstract class zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyy.zzd>;
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
				export module internal {
					export module firebase_ml {
						export class zzyz extends java.util.Iterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzyz>;
							public hasNext(): boolean;
							public remove(): void;
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
						export class zzza extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzza>;
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
						export class zzzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzb>;
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
						export abstract class zzzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzc>;
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
						export class zzzd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzd>;
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
						export class zzze {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzze>;
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
						export class zzzf extends com.google.android.gms.internal.firebase_ml.zzzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzf>;
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
						export class zzzg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzg>;
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
						export class zzzh extends com.google.android.gms.internal.firebase_ml.zzzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzh>;
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
						export class zzzi extends com.google.android.gms.internal.firebase_ml.zzzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzi>;
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
						export class zzzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzj>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzzj>*/;
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
						export class zzzk extends com.google.android.gms.internal.firebase_ml.zzzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzk>;
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
						export class zzzl extends com.google.android.gms.internal.firebase_ml.zzzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzl>;
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
						export class zzzm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzm>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzzm>*/;
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
						export class zzzn extends com.google.android.gms.internal.firebase_ml.zzzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzn>;
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
						export class zzzp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzzp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zztg(): number;
								zzs(param0: number, param1: number): void;
								zzi(param0: number, param1: number): void;
								zzj(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzt(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzi(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzl(param0: number, param1: number): void;
								zza(param0: number, param1: boolean): void;
								zzb(param0: number, param1: string): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_ml.zzuq*/): void;
								zzj(param0: number, param1: number): void;
								zzk(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zza(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_ml.zzya<any>*/): void;
								zzb(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_ml.zzya<any>*/): void;
								zzdl(param0: number): void;
								zzdm(param0: number): void;
								zza(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzb(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzc(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzd(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zze(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzf(param0: number, param1: java.util.List<java.lang.Float>, param2: boolean): void;
								zzg(param0: number, param1: java.util.List<java.lang.Double>, param2: boolean): void;
								zzh(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzi(param0: number, param1: java.util.List<java.lang.Boolean>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<string>): void;
								zzb(param0: number, param1: any /* java.util.List<com.google.android.gms.internal.firebase_ml.zzuq>*/): void;
								zzj(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzk(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzl(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzm(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzn(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_ml.zzya<any>*/): void;
								zzb(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_ml.zzya<any>*/): void;
								zza(param0: number, param1: any): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_ml.zzxb<any,any>*/, param2: java.util.Map): void;
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
				export module common {
					export class CommonComponentRegistrar {
						public static class: java.lang.Class<com.google.firebase.ml.common.CommonComponentRegistrar>;
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
			export module ml {
				export module common {
					export class FirebaseMLException {
						public static class: java.lang.Class<com.google.firebase.ml.common.FirebaseMLException>;
						public static OK: number;
						public static CANCELLED: number;
						public static UNKNOWN: number;
						public static INVALID_ARGUMENT: number;
						public static DEADLINE_EXCEEDED: number;
						public static NOT_FOUND: number;
						public static ALREADY_EXISTS: number;
						public static PERMISSION_DENIED: number;
						public static RESOURCE_EXHAUSTED: number;
						public static FAILED_PRECONDITION: number;
						public static ABORTED: number;
						public static OUT_OF_RANGE: number;
						public static UNIMPLEMENTED: number;
						public static INTERNAL: number;
						public static UNAVAILABLE: number;
						public static DATA_LOSS: number;
						public static UNAUTHENTICATED: number;
						public static MODEL_INCOMPATIBLE_WITH_TFLITE: number;
						public static NOT_ENOUGH_SPACE: number;
						public static MODEL_HASH_MISMATCH: number;
						public constructor(param0: string, param1: number);
						public getCode(): number;
						public constructor(param0: string, param1: number, param2: java.lang.Throwable);
					}
					export module FirebaseMLException {
						export class Code {
							public static class: java.lang.Class<com.google.firebase.ml.common.FirebaseMLException.Code>;
							/**
							 * Constructs a new instance of the com.google.firebase.ml.common.FirebaseMLException$Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module common {
					export module internal {
						export module modeldownload {
							export class RemoteModelManagerInterface<TRemote>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.RemoteModelManagerInterface<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.RemoteModelManagerInterface<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									download(param0: TRemote, param1: com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions): com.google.android.gms.tasks.Task<java.lang.Void>;
									deleteDownloadedModel(param0: TRemote): com.google.android.gms.tasks.Task<java.lang.Void>;
									isModelDownloaded(param0: TRemote): com.google.android.gms.tasks.Task<java.lang.Boolean>;
									getDownloadedModels(): com.google.android.gms.tasks.Task<java.util.Set<TRemote>>;
								});
								public constructor();
								public download(param0: TRemote, param1: com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions): com.google.android.gms.tasks.Task<java.lang.Void>;
								public isModelDownloaded(param0: TRemote): com.google.android.gms.tasks.Task<java.lang.Boolean>;
								public getDownloadedModels(): com.google.android.gms.tasks.Task<java.util.Set<TRemote>>;
								public deleteDownloadedModel(param0: TRemote): com.google.android.gms.tasks.Task<java.lang.Void>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zza extends com.google.firebase.ml.common.internal.modeldownload.zzk {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zza>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzaa {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzaa>;
								public constructor(param0: string, param1: globalAndroid.net.Uri, param2: string, param3: any /* com.google.firebase.ml.common.internal.modeldownload.zzn*/);
								public getModelHash(): string;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzab extends com.google.firebase.ml.common.internal.modeldownload.zzk {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzab>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzac {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzac>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzad {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzad>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzae extends com.google.firebase.ml.common.internal.modeldownload.zzk {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzae>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzaf {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzaf>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzby(param0: string): java.nio.MappedByteBuffer;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzag {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzag>;
								public load(): java.nio.MappedByteBuffer;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzah {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzah>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzai {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzai>;
								public openConnection(): java.net.URLConnection;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzb extends com.google.firebase.ml.common.internal.modeldownload.zze {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzb>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzc extends com.google.firebase.ml.common.internal.modeldownload.zze {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzc>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzd {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzd>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zze {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zze>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: java.io.BufferedWriter): void;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzf {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzf>;
								public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.ml.common.modeldownload.FirebaseLocalModel);
								public load(): java.nio.MappedByteBuffer;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzg {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzg>;
								public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzpn*/);
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzh {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzh>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzi {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzi>;
								public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzpn*/);
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzj {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzj>;
								public constructor(param0: any /* com.google.firebase.ml.common.internal.modeldownload.zzag*/, param1: any /* com.google.firebase.ml.common.internal.modeldownload.zzf*/, param2: any /* com.google.firebase.ml.common.internal.modeldownload.zzl*/);
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzk {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzk>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: java.io.File): java.io.File;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzl {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzl>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zze(param0: any /* java.util.List<com.google.android.gms.internal.firebase_ml.zznq>*/): void;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzm {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzm>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: java.nio.MappedByteBuffer): void;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzn {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzn>;
								public static values(): any /* native.Array<com.google.firebase.ml.common.internal.modeldownload.zzn>*/;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzo extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzo>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzp {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzp>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.common.internal.modeldownload.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: java.io.File, param1: any /* com.google.firebase.ml.common.internal.modeldownload.zzw*/): any /* com.google.firebase.ml.common.internal.modeldownload.zzs*/;
								});
								public constructor();
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzq {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzq>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzr {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzr>;
								public static values(): any /* native.Array<com.google.firebase.ml.common.internal.modeldownload.zzr>*/;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzs {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzs>;
								public constructor(param0: any /* com.google.firebase.ml.common.internal.modeldownload.zzr*/, param1: string);
								public isValid(): boolean;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzt {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzt>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzu {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzu>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzv {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzv>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzw {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzw>;
								public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzpn*/, param1: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel);
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzx {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzx>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzy {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzy>;
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
		export module firebase {
			export module ml {
				export module common {
					export module internal {
						export module modeldownload {
							export class zzz {
								public static class: java.lang.Class<com.google.firebase.ml.common.internal.modeldownload.zzz>;
								public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzpn*/, param1: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel, param2: any /* com.google.firebase.ml.common.internal.modeldownload.zzp*/, param3: any /* com.google.firebase.ml.common.internal.modeldownload.zzn*/, param4: any /* com.google.firebase.ml.common.internal.modeldownload.zzi*/);
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
		export module firebase {
			export module ml {
				export module common {
					export module modeldownload {
						export class BaseModel {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.BaseModel>;
							public static TRANSLATE: com.google.firebase.ml.common.modeldownload.BaseModel;
							public static values(): native.Array<com.google.firebase.ml.common.modeldownload.BaseModel>;
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
				export module common {
					export module modeldownload {
						export class FirebaseLocalModel {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseLocalModel>;
							public hashCode(): number;
							public getFilePath(): string;
							public constructor(param0: string, param1: string, param2: string);
							public getAssetFilePath(): string;
							public equals(param0: any): boolean;
						}
						export module FirebaseLocalModel {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseLocalModel.Builder>;
								public setAssetFilePath(param0: string): com.google.firebase.ml.common.modeldownload.FirebaseLocalModel.Builder;
								public setFilePath(param0: string): com.google.firebase.ml.common.modeldownload.FirebaseLocalModel.Builder;
								public constructor(param0: string);
								public build(): com.google.firebase.ml.common.modeldownload.FirebaseLocalModel;
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
		export module firebase {
			export module ml {
				export module common {
					export module modeldownload {
						export class FirebaseModelDownloadConditions {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions>;
							public hashCode(): number;
							public isDeviceIdleRequired(): boolean;
							public isWifiRequired(): boolean;
							public equals(param0: any): boolean;
							public isChargingRequired(): boolean;
						}
						export module FirebaseModelDownloadConditions {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions.Builder>;
								public requireCharging(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions.Builder;
								public requireDeviceIdle(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions.Builder;
								public constructor();
								public requireWifi(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions.Builder;
								public build(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
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
		export module firebase {
			export module ml {
				export module common {
					export module modeldownload {
						export class FirebaseModelManager {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseModelManager>;
							public deleteDownloadedModel(param0: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getDownloadedModels(param0: java.lang.Class): com.google.android.gms.tasks.Task;
							public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.ml.common.modeldownload.FirebaseModelManager;
							public download(param0: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel, param1: com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions): com.google.android.gms.tasks.Task<java.lang.Void>;
							public isModelDownloaded(param0: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public static getInstance(): com.google.firebase.ml.common.modeldownload.FirebaseModelManager;
							public constructor(param0: java.util.Set<com.google.firebase.ml.common.modeldownload.FirebaseModelManager.RemoteModelManagerRegistration>);
						}
						export module FirebaseModelManager {
							export class RemoteModelManagerRegistration {
								public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseModelManager.RemoteModelManagerRegistration>;
								public constructor(param0: java.lang.Class, param1: com.google.firebase.inject.Provider);
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
		export module firebase {
			export module ml {
				export module common {
					export module modeldownload {
						export class FirebaseRemoteModel {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel>;
							public getUniqueModelNameForPersist(): string;
							public isBaseModel(): boolean;
							public baseModelHashMatches(param0: string): boolean;
							public getModelNameForBackend(): string;
							public hashCode(): number;
							public getModelHash(): string;
							public setModelHash(param0: string): void;
							public getModelName(): string;
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: com.google.firebase.ml.common.modeldownload.BaseModel);
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
				export module common {
					export module modeldownload {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.zza>;
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
				export module common {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.ml.common.zza>;
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
			export module ml {
				export module common {
					export class zzb {
						public static class: java.lang.Class<com.google.firebase.ml.common.zzb>;
						public create(param0: com.google.firebase.components.ComponentContainer): any;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.firebase_ml.zzil:2
//com.google.android.gms.internal.firebase_ml.zzll:1
//com.google.android.gms.internal.firebase_ml.zzlm:1
//com.google.android.gms.internal.firebase_ml.zzlz:1
//com.google.android.gms.internal.firebase_ml.zzme:1
//com.google.android.gms.internal.firebase_ml.zzmo:1
//com.google.android.gms.internal.firebase_ml.zzmp:1
//com.google.android.gms.internal.firebase_ml.zzmq:1
//com.google.android.gms.internal.firebase_ml.zzmr:1
//com.google.android.gms.internal.firebase_ml.zzmu:1
//com.google.android.gms.internal.firebase_ml.zzmv:1
//com.google.android.gms.internal.firebase_ml.zzmx:1
//com.google.android.gms.internal.firebase_ml.zzpa:2
//com.google.android.gms.internal.firebase_ml.zzpc:2
//com.google.android.gms.internal.firebase_ml.zzpp:1
//com.google.android.gms.internal.firebase_ml.zzpu:1
//com.google.android.gms.internal.firebase_ml.zzug:2
//com.google.android.gms.internal.firebase_ml.zzuj:2
//com.google.android.gms.internal.firebase_ml.zzuk:1
//com.google.android.gms.internal.firebase_ml.zzul:1
//com.google.android.gms.internal.firebase_ml.zzvl:2
//com.google.android.gms.internal.firebase_ml.zzvm:1
//com.google.android.gms.internal.firebase_ml.zzvq:1
//com.google.android.gms.internal.firebase_ml.zzvs:1
//com.google.android.gms.internal.firebase_ml.zzvx:2
//com.google.android.gms.internal.firebase_ml.zzvx.zza:2
//com.google.android.gms.internal.firebase_ml.zzvx.zzb:2
//com.google.android.gms.internal.firebase_ml.zzvx.zzc:1
//com.google.android.gms.internal.firebase_ml.zzvx.zze:2
//com.google.android.gms.internal.firebase_ml.zzvx.zzg:2
//com.google.android.gms.internal.firebase_ml.zzwa:1
//com.google.android.gms.internal.firebase_ml.zzwe:2
//com.google.android.gms.internal.firebase_ml.zzwh:1
//com.google.android.gms.internal.firebase_ml.zzwm:1
//com.google.android.gms.internal.firebase_ml.zzwn:1
//com.google.android.gms.internal.firebase_ml.zzwy:2
//com.google.android.gms.internal.firebase_ml.zzxa:2
//com.google.android.gms.internal.firebase_ml.zzxb:2
//com.google.android.gms.internal.firebase_ml.zzxk:1
//com.google.android.gms.internal.firebase_ml.zzxm:1
//com.google.android.gms.internal.firebase_ml.zzxt:1
//com.google.android.gms.internal.firebase_ml.zzxu:1
//com.google.android.gms.internal.firebase_ml.zzya:1
//com.google.android.gms.internal.firebase_ml.zzyf:2
//com.google.android.gms.internal.firebase_ml.zzys:2
//com.google.firebase.ml.common.internal.modeldownload.RemoteModelManagerInterface:1

