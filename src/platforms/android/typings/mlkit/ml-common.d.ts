/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zza>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public obtainAndWriteInterfaceToken(): globalAndroid.os.Parcel;
							public transactAndReadException(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
							public transactOneway(param0: number, param1: globalAndroid.os.Parcel): void;
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzb>;
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzc>;
						}
					}
				}
			}
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export abstract class zzev extends com.google.android.gms.internal.firebase_ml.zzfa {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzev>;
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
						export class zzew extends com.google.android.gms.internal.firebase_ml.zzfa {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzew>;
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
						export class zzex extends com.google.android.gms.internal.firebase_ml.zzfb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzex>;
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
						export class zzey {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzey>;
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
						export class zzez extends com.google.android.gms.internal.firebase_ml.zzhm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzez>;
							public constructor();
							public hashCode(): number;
							public constructor(param0: string);
							public constructor(param0: java.net.URL);
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zzhm.zzc>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfa extends com.google.android.gms.internal.firebase_ml.zzhy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfa>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzfa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLength(): number;
								getType(): string;
								zzev(): boolean;
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
						export class zzfb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzfb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getName(): string;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzhy*/, param1: java.io.OutputStream): void;
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
						export class zzfc extends com.google.android.gms.internal.firebase_ml.zzhy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfc>;
							public writeTo(param0: java.io.OutputStream): void;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzhy*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzfb*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzfd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zzfh*/): void;
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
						export class zzfe extends com.google.android.gms.internal.firebase_ml.zzhm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfe>;
							public constructor();
							public getContentType(): string;
							public getLocation(): string;
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zzhm.zzc>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzff {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzff>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzfe*/, param1: java.lang.StringBuilder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfg>;
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
						export class zzfh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfh>;
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
						export class zzfi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzfj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzfh*/): void;
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
						export class zzfk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfk>;
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
						export class zzfl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfl>;
							public getStatusCode(): number;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzfm*/);
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzfk*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfm>;
							public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.firebase_ml.zzfe*/);
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzfk*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzfn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zzfk*/): void;
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
						export abstract class zzfo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfo>;
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
						export abstract class zzfp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfp>;
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
						export abstract class zzfq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfq>;
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
						export class zzfr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzfs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfs>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzfs>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzft extends com.google.android.gms.internal.firebase_ml.zzev {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzft>;
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
						export class zzfu extends com.google.android.gms.internal.firebase_ml.zzhu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzfu>;
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
						export class zzgs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgs>;
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
						export class zzgt extends com.google.android.gms.internal.firebase_ml.zzgu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgt>;
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
						export abstract class zzgu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgu>;
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
						export class zzgv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgv>;
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
						export class zzgw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzgx<K, V>  extends java.util.AbstractMap<any,any> implements java.lang.Cloneable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgx<any,any>>;
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
						export module zzgx {
							export class zza extends java.util.Map.Entry<any,any> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgx.zza>;
								public setValue(param0: any): any;
								public getValue(): any;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getKey(): any;
							}
							export class zzb extends java.util.Iterator<java.util.Map.Entry<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgx.zzb>;
								public hasNext(): boolean;
								public remove(): void;
							}
							export class zzc extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgx.zzc>;
								public size(): number;
								public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
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
						export class zzgy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgy>;
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
						export class zzgz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzgz>;
						}
					}
				}
			}
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
						export class zzhb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhb>;
							public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzhc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhc>;
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
						export class zzhd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhd>;
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
						export class zzhe extends java.util.Comparator<string> {
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
						export class zzhf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhf>;
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
						export class zzhg extends java.util.AbstractMap<string,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhg>;
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
						export class zzhh extends java.util.Map.Entry<string,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhh>;
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
						export class zzhi extends java.util.Iterator<java.util.Map.Entry<string,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhi>;
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
						export class zzhj extends java.util.AbstractSet<java.util.Map.Entry<string,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhj>;
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
						export class zzhk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhk>;
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
						export class zzhl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhl>;
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
						export class zzhm extends java.util.AbstractMap<string,any> implements java.lang.Cloneable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhm>;
							public constructor();
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
							public remove(param0: any): any;
							public constructor(param0: any /* java.util.EnumSet<com.google.android.gms.internal.firebase_ml.zzhm.zzc>*/);
							public putAll(param0: java.util.Map<any,any>): void;
						}
						export module zzhm {
							export class zza extends java.util.Iterator<java.util.Map.Entry<string,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhm.zza>;
								public hasNext(): boolean;
								public remove(): void;
							}
							export class zzb extends java.util.AbstractSet<java.util.Map.Entry<string,any>> {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhm.zzb>;
								public clear(): void;
								public size(): number;
								public iterator(): java.util.Iterator<java.util.Map.Entry<string,any>>;
							}
							export class zzc {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhm.zzc>;
								public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzhm.zzc>*/;
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
						export class zzhn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzho {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzho>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzho interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzhp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhp>;
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
						export class zzhq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhq>;
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
						export class zzhr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhr>;
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
						export class zzhs extends com.google.android.gms.internal.firebase_ml.zzhy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhs>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzhy*/, param1: java.util.logging.Logger, param2: java.util.logging.Level, param3: number);
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
						export class zzht {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzht>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzht interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzhu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzhu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzhv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhv>;
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
						export class zzhw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzhw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzhx extends com.google.android.gms.internal.firebase_ml.zzhw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzhy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzhy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzhz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzhz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzi>;
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
						export class zzia {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzia>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzib extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzib>;
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
						export class zzic extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzic>;
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
						export class zzid {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzid>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzid interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzie {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzie>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzif>;
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
						export class zzig extends com.google.android.gms.internal.firebase_ml.zzij {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzig>;
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
						export class zzih {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzih>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzii extends java.lang.ThreadLocal<native.Array<string>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzii>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzij extends com.google.android.gms.internal.firebase_ml.zzif {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzij>;
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
						export class zzj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzjy<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzko<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjy<any>>;
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
						export abstract class zzjz<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzjz<any>>;
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
						export class zzka {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzka>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzkc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkc>;
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
						export abstract class zzkd extends com.google.android.gms.internal.firebase_ml.zzkc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzke extends com.google.android.gms.internal.firebase_ml.zzkd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzke>;
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
						export abstract class zzkf extends com.google.android.gms.internal.firebase_ml.zzkd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkf>;
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
						export class zzkg extends com.google.android.gms.internal.firebase_ml.zzkf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkh>;
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
						export class zzki {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzki>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkl>;
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
						export class zzkm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkn extends com.google.android.gms.internal.firebase_ml.zzki {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkn>;
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
						export abstract class zzko<T>  extends java.io.Serializable {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzko<any>>;
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
						export class zzkp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzkp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzkq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkq>;
						}
						export module zzkq {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkq.zza>;
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
						export class zzkr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzks {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzks>;
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
						export class zzkt<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzko<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkt<any>>;
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
						export class zzku {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzku>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkv extends com.google.android.gms.internal.firebase_ml.zzky {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzkw extends com.google.android.gms.internal.firebase_ml.zzkx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzkx extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzjz<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkx>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzku*/, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzky {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzky>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzky interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzku*/, param1: string): java.util.Iterator<string>;
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
						export class zzkz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzkz>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzkz>*/;
							public toString(): string;
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
						export class zzla {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzla>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzlb {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzlc<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlu<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlc<any>>;
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
						export class zzld {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzld>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzle {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzle>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzlf<E>  extends java.util.AbstractCollection<any> implements java.io.Serializable  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlf<any>>;
							public contains(param0: any): boolean;
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
						export abstract class zzlg<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlf<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlg<any>>;
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
						export class zzlh<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlc<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlh<any>>;
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
						export class zzli extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlg<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzli>;
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
						export abstract class zzlj<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlj<any,any>>;
							public getOrDefault(param0: any, param1: V): V;
							public get(param0: any): V;
							public hashCode(): number;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public put(param0: K, param1: V): V;
							public remove(param0: any): V;
							public toString(): string;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public containsValue(param0: any): boolean;
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
						export class zzlk<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlk<any,any>>;
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
						export abstract class zzll<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlf<any>*/ implements java.util.Set<any>  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzll<any>>;
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
						export class zzlm<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlg<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlm<any>>;
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
						export class zzln<K, V>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlj<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzln<any,any>>;
							public get(param0: any): any;
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
						export class zzlo<K, V>  extends com.google.android.gms.internal.firebase_ml.zzll<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlo<any,any>>;
							public contains(param0: any): boolean;
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
						export class zzlp extends com.google.android.gms.internal.firebase_ml.zzlg<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlp>;
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
						export class zzlq<K>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzll<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlq<any>>;
							public contains(param0: any): boolean;
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
						export class zzlr extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlg<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlr>;
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
						export class zzls {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzls>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzlt<E>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlt<any>>;
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
						export abstract class zzlu<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzlt<any>*/ implements java.util.ListIterator<any>  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlu<any>>;
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
						export class zzlv extends java.util.concurrent.Executor {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlv>;
							public execute(param0: java.lang.Runnable): void;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzlv>*/;
						}
					}
				}
			}
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
						export module zzlx {
							export class zza extends com.google.android.gms.internal.firebase_ml.zzly {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlx.zza>;
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
						export abstract class zzly {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzly>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzlz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzlz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzma extends java.lang.ref.WeakReference<java.lang.Throwable> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzma>;
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
						export class zzmb extends com.google.android.gms.internal.firebase_ml.zzly {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmc extends com.google.android.gms.internal.firebase_ml.zzly {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmc>;
						}
					}
				}
			}
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
						export module zzmd {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zza,com.google.android.gms.internal.firebase_ml.zzmd.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zza,com.google.android.gms.internal.firebase_ml.zzmd.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zza.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzaa extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzaa,com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzaa>;
								public isInitialized(): boolean;
							}
							export module zzaa {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzaa,com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc>;
									public isInitialized(): boolean;
								}
								export module zzc {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzc.zza>;
										public isInitialized(): boolean;
									}
								}
							}
							export class zzab extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzab,com.google.android.gms.internal.firebase_ml.zzmd.zzab.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzab>;
								public isInitialized(): boolean;
							}
							export module zzab {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzab,com.google.android.gms.internal.firebase_ml.zzmd.zzab.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzab.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzac extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzac,com.google.android.gms.internal.firebase_ml.zzmd.zzac.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzac>;
								public isInitialized(): boolean;
							}
							export module zzac {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzac,com.google.android.gms.internal.firebase_ml.zzmd.zzac.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzac.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzb.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzb.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzb.zzb>*/;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzc>;
								public isInitialized(): boolean;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzc.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzd,com.google.android.gms.internal.firebase_ml.zzmd.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzd>;
								public isInitialized(): boolean;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzd,com.google.android.gms.internal.firebase_ml.zzmd.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzd.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zze,com.google.android.gms.internal.firebase_ml.zzmd.zze.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zze>;
								public isInitialized(): boolean;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zze,com.google.android.gms.internal.firebase_ml.zzmd.zze.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zze.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzf,com.google.android.gms.internal.firebase_ml.zzmd.zzf.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzf>;
								public isInitialized(): boolean;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzf,com.google.android.gms.internal.firebase_ml.zzmd.zzf.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzf.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzg,com.google.android.gms.internal.firebase_ml.zzmd.zzg.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzg>;
								public isInitialized(): boolean;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzg,com.google.android.gms.internal.firebase_ml.zzmd.zzg.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzg.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzh,com.google.android.gms.internal.firebase_ml.zzmd.zzh.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzh>;
								public isInitialized(): boolean;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzh,com.google.android.gms.internal.firebase_ml.zzmd.zzh.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzh.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzi,com.google.android.gms.internal.firebase_ml.zzmd.zzi.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzi>;
								public isInitialized(): boolean;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzi,com.google.android.gms.internal.firebase_ml.zzmd.zzi.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzi.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzj,com.google.android.gms.internal.firebase_ml.zzmd.zzj.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzj>;
								public isInitialized(): boolean;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzj,com.google.android.gms.internal.firebase_ml.zzmd.zzj.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzj.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzk,com.google.android.gms.internal.firebase_ml.zzmd.zzk.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzk>;
								public isInitialized(): boolean;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzk,com.google.android.gms.internal.firebase_ml.zzmd.zzk.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzk.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzl,com.google.android.gms.internal.firebase_ml.zzmd.zzl.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzl>;
								public isInitialized(): boolean;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzl,com.google.android.gms.internal.firebase_ml.zzmd.zzl.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzl.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzm,com.google.android.gms.internal.firebase_ml.zzmd.zzm.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzm>;
								public isInitialized(): boolean;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzm,com.google.android.gms.internal.firebase_ml.zzmd.zzm.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb>;
									public isInitialized(): boolean;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zza>;
										public isInitialized(): boolean;
									}
									export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zzb>;
										public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zzb>*/;
									}
								}
							}
							export class zzn extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzn,com.google.android.gms.internal.firebase_ml.zzmd.zzn.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzn>;
								public isInitialized(): boolean;
							}
							export module zzn {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzn,com.google.android.gms.internal.firebase_ml.zzmd.zzn.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzn.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzo,com.google.android.gms.internal.firebase_ml.zzmd.zzo.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzo>;
								public isInitialized(): boolean;
							}
							export module zzo {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzo,com.google.android.gms.internal.firebase_ml.zzmd.zzo.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzo.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb>;
									public isInitialized(): boolean;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzo.zzb.zza>;
										public isInitialized(): boolean;
									}
								}
							}
							export class zzp extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzp,com.google.android.gms.internal.firebase_ml.zzmd.zzp.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp>;
								public isInitialized(): boolean;
							}
							export module zzp {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzp,com.google.android.gms.internal.firebase_ml.zzmd.zzp.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzd>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzd>*/;
								}
								export class zze extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zze>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zze>*/;
								}
							}
							export class zzq extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzq,com.google.android.gms.internal.firebase_ml.zzmd.zzq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzq>;
								public isInitialized(): boolean;
							}
							export module zzq {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzq,com.google.android.gms.internal.firebase_ml.zzmd.zzq.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzq.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzr extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzr,com.google.android.gms.internal.firebase_ml.zzmd.zzr.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzr>;
								public isInitialized(): boolean;
							}
							export module zzr {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzr,com.google.android.gms.internal.firebase_ml.zzmd.zzr.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzr.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzr.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzr.zzb>*/;
								}
							}
							export class zzs extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzs,com.google.android.gms.internal.firebase_ml.zzmd.zzs.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzs>;
								public isInitialized(): boolean;
							}
							export module zzs {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzs,com.google.android.gms.internal.firebase_ml.zzmd.zzs.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzs.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzt extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzt,com.google.android.gms.internal.firebase_ml.zzmd.zzt.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzt>;
								public isInitialized(): boolean;
							}
							export module zzt {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzt,com.google.android.gms.internal.firebase_ml.zzmd.zzt.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzt.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzu,com.google.android.gms.internal.firebase_ml.zzmd.zzu.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzu>;
								public isInitialized(): boolean;
							}
							export module zzu {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzu,com.google.android.gms.internal.firebase_ml.zzmd.zzu.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzu.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzu.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzu.zzb>*/;
								}
							}
							export class zzv extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzv,com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzc>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzv>;
								public isInitialized(): boolean;
							}
							export module zzv {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zza>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzv,com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzc>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzc>;
									public isInitialized(): boolean;
								}
							}
							export class zzw extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzw,com.google.android.gms.internal.firebase_ml.zzmd.zzw.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzw>;
								public isInitialized(): boolean;
							}
							export module zzw {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzw,com.google.android.gms.internal.firebase_ml.zzmd.zzw.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzw.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzx extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzx,com.google.android.gms.internal.firebase_ml.zzmd.zzx.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzx>;
								public isInitialized(): boolean;
							}
							export module zzx {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzx,com.google.android.gms.internal.firebase_ml.zzmd.zzx.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzx.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzy extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzy,com.google.android.gms.internal.firebase_ml.zzmd.zzy.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzy>;
								public isInitialized(): boolean;
							}
							export module zzy {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzy,com.google.android.gms.internal.firebase_ml.zzmd.zzy.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzy.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzz extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzz,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz>;
								public isInitialized(): boolean;
							}
							export module zzz {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzz,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb>;
									public isInitialized(): boolean;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzb.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc>;
									public isInitialized(): boolean;
								}
								export module zzc {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzc.zza>;
										public isInitialized(): boolean;
									}
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd>;
									public isInitialized(): boolean;
								}
								export module zzd {
									export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd,com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
										public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmd.zzz.zzd.zza>;
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
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzme {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzme>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmf extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzb.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmg extends com.google.android.gms.internal.firebase_ml.zzuj {
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
						export class zzmh extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzm.zzb.zzb>*/ {
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
						export class zzmi extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmj extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzum<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzmk>*/ {
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
						export class zzmk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmk>;
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
						export class zzml extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzml>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmm extends com.google.android.gms.internal.firebase_ml.zzuj {
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
						export class zzmn extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmn>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzmn>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmo extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmn>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmp extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmq extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmr extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzms extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzc>*/ {
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
						export class zzmt extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zzd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmv extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmw extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzp.zze>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmx extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzmy extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzr.zzb>*/ {
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
						export class zzmz extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzmz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzna extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzu.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzna>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zznb extends com.google.android.gms.internal.firebase_ml.zzuj {
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
						export class zznc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzum<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzmd.zzv.zza>*/ {
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
						export class zznd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzum<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzne extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zza>*/ {
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
						export class zznf extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzng extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzv.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzng>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zznh extends com.google.android.gms.internal.firebase_ml.zzuj {
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
						export class zzni extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzmd.zzaa.zzb>*/ {
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
						export class zznj extends com.google.android.gms.internal.firebase_ml.zzuj {
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
						export class zznk {
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
						export class zznl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznl>;
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
						export class zznm<T, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznm<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zznm<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: S): T;
								zzlm(): any /* com.google.android.gms.internal.firebase_ml.zznw*/;
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
						export class zznn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznn>;
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
						export class zzno {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzno>;
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
						export class zznp {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zznp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zznq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zznr extends java.util.concurrent.Callable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznr>;
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
						export class zzns extends java.util.concurrent.Callable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzns>;
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
						export class zznt<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznt<any>>;
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
						export class zznu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zznv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zznv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzm(): any /* com.google.android.gms.internal.firebase_ml.zzmd.zzq.zza*/;
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
						export class zznw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zznw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzlp(): void;
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
						export class zznx {
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
						export class zzny {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzny>;
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
						export class zznz extends java.util.concurrent.Callable<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zznz>;
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
						export class zzoa {
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
						export class zzob extends com.google.android.gms.internal.firebase_ml.zzoh {
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
						export class zzoc extends com.google.android.gms.internal.firebase_ml.zzoe {
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
						export class zzod extends com.google.android.gms.internal.firebase_ml.zzoe {
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
						export class zzoe {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoe>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzoe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzof {
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
						export class zzog {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzog>;
							public load(): java.nio.MappedByteBuffer;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.ml.common.modeldownload.FirebaseLocalModel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzoh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzoh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzlt(): void;
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

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzoi {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoi>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzov*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzog*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzoj<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoj<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzoj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: java.nio.MappedByteBuffer): T;
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
						export class zzok {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzok>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzok>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzol {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzol>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzol interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.io.File, param1: any /* com.google.android.gms.internal.firebase_ml.zzon*/): boolean;
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
						export class zzom {
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
						export class zzon {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzon>;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzoo {
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
						export class zzop {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzop>;
							public constructor(param0: string, param1: globalAndroid.net.Uri, param2: string, param3: any /* com.google.android.gms.internal.firebase_ml.zzok*/);
							public getModelName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzoq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoq>;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: string, param2: any /* com.google.android.gms.internal.firebase_ml.zzol*/, param3: any /* com.google.android.gms.internal.firebase_ml.zzok*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzor {
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
						export class zzos extends com.google.android.gms.internal.firebase_ml.zzoh {
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
						export class zzot extends com.google.android.gms.internal.firebase_ml.zzoh {
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
						export class zzou {
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
						export class zzov {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzov>;
							public load(): java.nio.MappedByteBuffer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzow {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzow>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzow interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzca(param0: string): java.nio.MappedByteBuffer;
								zzlu(): void;
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
						export class zzox {
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
						export class zzoy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzoy>;
							public openConnection(): java.net.URLConnection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqs {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs>;
						}
						export module zzqs {
							export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzqs.zza,com.google.android.gms.internal.firebase_ml.zzqs.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zza>;
								public isInitialized(): boolean;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzqs.zza,com.google.android.gms.internal.firebase_ml.zzqs.zza.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zza.zza>;
									public isInitialized(): boolean;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<com.google.android.gms.internal.firebase_ml.zzqs.zzb,com.google.android.gms.internal.firebase_ml.zzqs.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zzb>;
								public isInitialized(): boolean;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<com.google.android.gms.internal.firebase_ml.zzqs.zzb,com.google.android.gms.internal.firebase_ml.zzqs.zzb.zza>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zza>;
									public isInitialized(): boolean;
								}
								export class zzb extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzb>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzc>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
									public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzd>;
									public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzd>*/;
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
						export class zzqt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzum<java.lang.Integer,com.google.android.gms.internal.firebase_ml.zzsk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqv extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqw extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqx extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzc>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqy extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzqz extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzqs.zzb.zzd>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzqz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzra extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzra>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzsk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzuh*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsk>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzsk>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzsl extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzui<com.google.android.gms.internal.firebase_ml.zzsk>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzsm extends com.google.android.gms.internal.firebase_ml.zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzsn<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvo*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsn<any,any>>;
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
						export abstract class zzso<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvp*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzso<any,any>>;
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
						export class zzsp<MessageType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzvz<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsp<any>>;
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
						export abstract class zzsq<E>  extends java.util.AbstractList<any> implements any /* com.google.android.gms.internal.firebase_ml.zzun<any>*/  {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsq<any>>;
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
						export class zzsr {
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
						export class zzss {
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
						export class zzst {
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
						export class zzsu extends com.google.android.gms.internal.firebase_ml.zzsq<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsu>;
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
						export abstract class zzsv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsv>;
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
						export abstract class zzsw extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsw>;
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
						export class zzsx extends com.google.android.gms.internal.firebase_ml.zzsz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsx>;
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
						export class zzsy extends java.lang.Object /* java.util.Comparator<com.google.android.gms.internal.firebase_ml.zzsw>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzsz extends com.google.android.gms.internal.firebase_ml.zztd {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzsz>;
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
						export class zzta extends com.google.android.gms.internal.firebase_ml.zztc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzta>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztb extends com.google.android.gms.internal.firebase_ml.zztg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztb>;
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
						export class zztc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zztc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zztd extends java.util.Iterator<java.lang.Byte> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zztd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzte {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzte>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zztf extends com.google.android.gms.internal.firebase_ml.zzsw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztg extends com.google.android.gms.internal.firebase_ml.zztf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztg>;
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
						export class zzth extends com.google.android.gms.internal.firebase_ml.zztc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzth>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzti {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzti>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztk extends com.google.android.gms.internal.firebase_ml.zzti {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zztl extends com.google.android.gms.internal.firebase_ml.zzsv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztl>;
						}
						export module zztl {
							export class zza extends com.google.android.gms.internal.firebase_ml.zztl {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztl.zza>;
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztl.zzb>;
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
						export class zztm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztn extends com.google.android.gms.internal.firebase_ml.zzxr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzto extends com.google.android.gms.internal.firebase_ml.zzsq<java.lang.Double> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzto>;
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
						export class zztp<ContainingType, Type>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztp<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzts {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzts>;
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
						export abstract class zztt<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztt<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztu extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zztt<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zztw<FieldDescriptorType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztw<any>>;
							public iterator(): java.util.Iterator<java.util.Map.Entry<FieldDescriptorType,any>>;
							public hashCode(): number;
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
						export class zztx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzty<T>  extends java.lang.Comparable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzty<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzty<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzo(): number;
								zzqr(): any /* com.google.android.gms.internal.firebase_ml.zzxl*/;
								zzqs(): any /* com.google.android.gms.internal.firebase_ml.zzxq*/;
								zzqt(): boolean;
								zzqu(): boolean;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzvp*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzvo*/): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzvv*/, param1: any /* com.google.android.gms.internal.firebase_ml.zzvv*/): any /* com.google.android.gms.internal.firebase_ml.zzvv*/;
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
						export class zztz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zztz>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zztz>*/;
							public id(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzua {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzua>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzub {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzub>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzub>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzuc extends com.google.android.gms.internal.firebase_ml.zzsq<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuc>;
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
						export class zzud extends com.google.android.gms.internal.firebase_ml.zzvn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzud>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzue<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzsn<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue<any,any>>;
							public constructor();
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isInitialized(): boolean;
						}
						export module zzue {
							export class zza<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzso<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zza<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export class zzb<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzsp<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zzb<any>>;
								public constructor(param0: any);
								public constructor();
							}
							export class zzc<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue.zza<any,any>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zzc<any,any>>;
								public constructor(param0: any);
								public isInitialized(): boolean;
								public constructor();
							}
							export abstract class zzd<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzue<any,any>*/ implements any /* com.google.android.gms.internal.firebase_ml.zzvq*/  {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zzd<any,any>>;
								public isInitialized(): boolean;
								public constructor();
							}
							export class zze<ContainingType, Type>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zztp<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zze<any,any>>;
							}
							export class zzf extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzue.zzf>;
								public static values$50KLMJ33DTMIUPRFDTJMOP9FE1P6UT3FC9QMCBQ7CLN6ASJ1EHIM8JB5EDPM2PR59HKN8P949LIN8Q3FCHA6UIBEEPNMMP9R0(): native.Array<number>;
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
						export class zzuf extends com.google.android.gms.internal.firebase_ml.zzsq<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuf>;
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
						export class zzug {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzug>;
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
						export class zzuh {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzuh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzo(): number;
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
						export class zzui<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzui<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzui<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzuj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzuj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(param0: number): boolean;
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
						export class zzuk extends com.google.android.gms.internal.firebase_ml.zzun<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzuk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzpt(): void;
								zzps(): boolean;
								zzck(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzun<any>*/;
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
						export class zzul extends com.google.android.gms.internal.firebase_ml.zzun<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzul>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzul interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzdh(param0: number): void;
								zzdg(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzul*/;
								zzpt(): void;
								zzps(): boolean;
								zzck(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzun<any>*/;
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
						export class zzum<F, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzum<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzum<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzun<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzun<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzun<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzpt(): void;
								zzps(): boolean;
								zzck(param0: number): any /* com.google.android.gms.internal.firebase_ml.zzun<E>*/;
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
						export class zzuo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuo>;
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
						export class zzup extends com.google.android.gms.internal.firebase_ml.zzuo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzup>;
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
						export class zzuq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuq>;
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzuq>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzur extends com.google.android.gms.internal.firebase_ml.zzuv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzur>;
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
						export class zzus {
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
						export class zzut<K>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzut<any>>;
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
						export class zzuu<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuu<any>>;
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
						export class zzuv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuv>;
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
						export class zzuw extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzsq<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuw>;
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
						export class zzux {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzux>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzux interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getRaw(param0: number): any;
								zzc(param0: any /* com.google.android.gms.internal.firebase_ml.zzsw*/): void;
								zzrv(): java.util.List<any>;
								zzrw(): any /* com.google.android.gms.internal.firebase_ml.zzux*/;
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
						export abstract class zzuy {
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
						export class zzuz {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzuz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzva extends com.google.android.gms.internal.firebase_ml.zzuy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzva>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvb extends com.google.android.gms.internal.firebase_ml.zzuy {
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
						export class zzvc extends com.google.android.gms.internal.firebase_ml.zzsq<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvc>;
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
						export class zzvd extends com.google.android.gms.internal.firebase_ml.zzwf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvd>;
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
						export class zzve extends com.google.android.gms.internal.firebase_ml.zzvn {
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
						export class zzvf extends com.google.android.gms.internal.firebase_ml.zzvn {
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
						export class zzvg<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvg<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvh<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvh<any,any>>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzxl*/, param1: K, param2: any /* com.google.android.gms.internal.firebase_ml.zzxl*/, param3: V);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvi<K, V>  extends java.util.LinkedHashMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvi<any,any>>;
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
						export class zzvj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzu(param0: any): java.util.Map<any,any>;
								zzv(param0: any): java.util.Map<any,any>;
								zzw(param0: any): boolean;
								zzx(param0: any): any;
								zzy(param0: any): any;
								zzz(param0: any): any /* com.google.android.gms.internal.firebase_ml.zzvh<any,any>*/;
								zzf(param0: any, param1: any): any;
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
						export class zzvk extends com.google.android.gms.internal.firebase_ml.zzvj {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzsh(): number;
								zzsi(): boolean;
								zzsj(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
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
						export class zzvn {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzg(param0: java.lang.Class<any>): boolean;
								zzh(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.firebase_ml.zzvm*/;
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
						export class zzvo extends com.google.android.gms.internal.firebase_ml.zzvq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvo>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zztl*/): void;
								zzqy(): number;
								zzpp(): any /* com.google.android.gms.internal.firebase_ml.zzsw*/;
								zzrd(): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zzrc(): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zzre(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
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
						export class zzvp extends com.google.android.gms.internal.firebase_ml.zzvq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzrj(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
								zzri(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
								zza(param0: any /* com.google.android.gms.internal.firebase_ml.zzvo*/): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zzre(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
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
						export class zzvq {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzre(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
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
						export class zzvr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvs<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvs<any>>;
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
						export class zzvt {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvu<T>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvu<any>>;
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
						export class zzvv extends com.google.android.gms.internal.firebase_ml.zzvo {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzsk(): any /* com.google.android.gms.internal.firebase_ml.zzvv*/;
								zzb(param0: any /* com.google.android.gms.internal.firebase_ml.zztl*/): void;
								zzqy(): number;
								zzpp(): any /* com.google.android.gms.internal.firebase_ml.zzsw*/;
								zzrd(): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zzrc(): any /* com.google.android.gms.internal.firebase_ml.zzvp*/;
								zzre(): any /* com.google.android.gms.internal.firebase_ml.zzvo*/;
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
						export class zzvw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzvx extends com.google.android.gms.internal.firebase_ml.zzvw {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvx>;
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
						export class zzvy {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzvz<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzvz<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzvz<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzwa {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwa>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwc<E>  extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzsq<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwc<any>>;
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
						export class zzwd extends com.google.android.gms.internal.firebase_ml.zzvm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwe<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwe<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwe<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T, param1: any /* com.google.android.gms.internal.firebase_ml.zzxr*/): void;
								zza(param0: T, param1: native.Array<number>, param2: number, param3: number, param4: any /* com.google.android.gms.internal.firebase_ml.zzst*/): void;
								zzq(param0: T): void;
								zzac(param0: T): boolean;
								newInstance(): T;
								equals(param0: T, param1: T): boolean;
								hashCode(param0: T): number;
								zzg(param0: T, param1: T): void;
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
						export class zzwf {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzj(param0: java.lang.Class): any /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/;
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwh<K, V>  extends java.util.AbstractMap<any,any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwh<any,any>>;
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
						export class zzwi extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwh<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwj extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwj>;
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
						export class zzwk extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzwq*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwk>;
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
						export class zzwl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwm extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwm>;
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
						export class zzwn extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwn>;
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
						export class zzwo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwo>;
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
						export class zzwp extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwp>;
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
						export class zzwq extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwq>;
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
						export class zzwr extends com.google.android.gms.internal.firebase_ml.zzvm {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzws {
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
						export class zzwt extends com.google.android.gms.internal.firebase_ml.zzwu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwt>;
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
						export class zzwu {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwu>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzwu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								size(): number;
								zzcl(param0: number): number;
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
						export class zzwv {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwv>;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzvo*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export abstract class zzww<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzww<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwx {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwx>;
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
						export class zzwy extends java.lang.Object /* com.google.android.gms.internal.firebase_ml.zzww<com.google.android.gms.internal.firebase_ml.zzwx,com.google.android.gms.internal.firebase_ml.zzwx>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzwz extends java.util.AbstractList<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzwz>;
							public listIterator(param0: number): java.util.ListIterator<string>;
							public iterator(): java.util.Iterator<string>;
							public size(): number;
							public getRaw(param0: number): any;
							public constructor(param0: any /* com.google.android.gms.internal.firebase_ml.zzux*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxa extends java.util.ListIterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxa>;
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
						export class zzxb extends java.util.Iterator<string> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxb>;
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
						export class zzxc {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc>;
						}
						export module zzxc {
							export class zza extends com.google.android.gms.internal.firebase_ml.zzxc.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc.zza>;
							}
							export class zzb extends com.google.android.gms.internal.firebase_ml.zzxc.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc.zzb>;
							}
							export class zzc extends com.google.android.gms.internal.firebase_ml.zzxc.zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc.zzc>;
							}
							export abstract class zzd {
								public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxc.zzd>;
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
						export class zzxd extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxd>;
						}
					}
				}
			}
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
						}
					}
				}
			}
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
						export abstract class zzxg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxh extends com.google.android.gms.internal.firebase_ml.zzxg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxh>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxj extends com.google.android.gms.internal.firebase_ml.zzxg {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxk {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxk>;
						}
					}
				}
			}
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
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzxl>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxm extends com.google.android.gms.internal.firebase_ml.zzxl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxn extends com.google.android.gms.internal.firebase_ml.zzxl {
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
						export class zzxo extends com.google.android.gms.internal.firebase_ml.zzxl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxp extends com.google.android.gms.internal.firebase_ml.zzxl {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxp>;
						}
					}
				}
			}
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
							public static values(): any /* native.Array<com.google.android.gms.internal.firebase_ml.zzxq>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module firebase_ml {
						export class zzxr {
							public static class: java.lang.Class<com.google.android.gms.internal.firebase_ml.zzxr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.firebase_ml.zzxr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzqh(): number;
								zzr(param0: number, param1: number): void;
								zzi(param0: number, param1: number): void;
								zzj(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzs(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzh(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzk(param0: number, param1: number): void;
								zzb(param0: number, param1: boolean): void;
								zzb(param0: number, param1: string): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_ml.zzsw*/): void;
								zzi(param0: number, param1: number): void;
								zzj(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zza(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/): void;
								zzb(param0: number, param1: any, param2: any /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/): void;
								zzde(param0: number): void;
								zzdf(param0: number): void;
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
								zzb(param0: number, param1: any /* java.util.List<com.google.android.gms.internal.firebase_ml.zzsw>*/): void;
								zzj(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzk(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzl(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzm(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzn(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/): void;
								zzb(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.gms.internal.firebase_ml.zzwe<any>*/): void;
								zza(param0: number, param1: any): void;
								zza(param0: number, param1: any /* com.google.android.gms.internal.firebase_ml.zzvh<any,any>*/, param2: java.util.Map): void;
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
					export module modeldownload {
						export class FirebaseLocalModel {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseLocalModel>;
							public hashCode(): number;
							public getFilePath(): string;
							public getAssetFilePath(): string;
							public getModelName(): string;
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
							public static getInstance(): com.google.firebase.ml.common.modeldownload.FirebaseModelManager;
							public registerRemoteModel(param0: com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel): boolean;
							public registerLocalModel(param0: com.google.firebase.ml.common.modeldownload.FirebaseLocalModel): boolean;
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
							public hashCode(): number;
							public getUpdatesDownloadConditions(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
							public isModelUpdatesEnabled(): boolean;
							public getModelName(): string;
							public equals(param0: any): boolean;
							public getInitialDownloadConditions(): com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
						}
						export module FirebaseRemoteModel {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel.Builder>;
								public enableModelUpdates(param0: boolean): com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel.Builder;
								public setUpdatesDownloadConditions(param0: com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions): com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel.Builder;
								public setInitialDownloadConditions(param0: com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions): com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel.Builder;
								public constructor(param0: string);
								public build(): com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel;
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
						export class zza {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.zza>;
							public static values(): any /* native.Array<com.google.firebase.ml.common.modeldownload.zza>*/;
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
						export class zzb {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.zzb>;
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
						export class zzc {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.zzc>;
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
						export class zzd {
							public static class: java.lang.Class<com.google.firebase.ml.common.modeldownload.zzd>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.firebase_ml.zzgx:2
//com.google.android.gms.internal.firebase_ml.zzjy:1
//com.google.android.gms.internal.firebase_ml.zzjz:1
//com.google.android.gms.internal.firebase_ml.zzko:1
//com.google.android.gms.internal.firebase_ml.zzkt:1
//com.google.android.gms.internal.firebase_ml.zzlc:1
//com.google.android.gms.internal.firebase_ml.zzlf:1
//com.google.android.gms.internal.firebase_ml.zzlg:1
//com.google.android.gms.internal.firebase_ml.zzlh:1
//com.google.android.gms.internal.firebase_ml.zzlj:2
//com.google.android.gms.internal.firebase_ml.zzlk:2
//com.google.android.gms.internal.firebase_ml.zzll:1
//com.google.android.gms.internal.firebase_ml.zzlm:1
//com.google.android.gms.internal.firebase_ml.zzln:2
//com.google.android.gms.internal.firebase_ml.zzlo:2
//com.google.android.gms.internal.firebase_ml.zzlq:1
//com.google.android.gms.internal.firebase_ml.zzlt:1
//com.google.android.gms.internal.firebase_ml.zzlu:1
//com.google.android.gms.internal.firebase_ml.zznm:2
//com.google.android.gms.internal.firebase_ml.zznt:1
//com.google.android.gms.internal.firebase_ml.zzoj:1
//com.google.android.gms.internal.firebase_ml.zzsn:2
//com.google.android.gms.internal.firebase_ml.zzso:2
//com.google.android.gms.internal.firebase_ml.zzsp:1
//com.google.android.gms.internal.firebase_ml.zzsq:1
//com.google.android.gms.internal.firebase_ml.zztp:2
//com.google.android.gms.internal.firebase_ml.zztt:1
//com.google.android.gms.internal.firebase_ml.zztw:1
//com.google.android.gms.internal.firebase_ml.zzty:1
//com.google.android.gms.internal.firebase_ml.zzue:2
//com.google.android.gms.internal.firebase_ml.zzue.zza:2
//com.google.android.gms.internal.firebase_ml.zzue.zzb:1
//com.google.android.gms.internal.firebase_ml.zzue.zzc:2
//com.google.android.gms.internal.firebase_ml.zzue.zzd:2
//com.google.android.gms.internal.firebase_ml.zzue.zze:2
//com.google.android.gms.internal.firebase_ml.zzui:1
//com.google.android.gms.internal.firebase_ml.zzum:2
//com.google.android.gms.internal.firebase_ml.zzun:1
//com.google.android.gms.internal.firebase_ml.zzut:1
//com.google.android.gms.internal.firebase_ml.zzuu:1
//com.google.android.gms.internal.firebase_ml.zzvg:2
//com.google.android.gms.internal.firebase_ml.zzvh:2
//com.google.android.gms.internal.firebase_ml.zzvi:2
//com.google.android.gms.internal.firebase_ml.zzvs:1
//com.google.android.gms.internal.firebase_ml.zzvu:1
//com.google.android.gms.internal.firebase_ml.zzvz:1
//com.google.android.gms.internal.firebase_ml.zzwc:1
//com.google.android.gms.internal.firebase_ml.zzwe:1
//com.google.android.gms.internal.firebase_ml.zzwh:2
//com.google.android.gms.internal.firebase_ml.zzww:2

