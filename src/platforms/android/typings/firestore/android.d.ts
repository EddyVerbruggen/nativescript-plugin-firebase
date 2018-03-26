/// <reference path="./_helpers.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfo {
						public static zzi(param0: number, param1: number): number;
						public static zzf(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.CharSequence.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzdfp {
						public zzbjo(): com.google.android.gms.internal.zzdfp;
						public zza(param0: string): native.Array<number>;
						public static zzbjp(): com.google.android.gms.internal.zzdfp;
						public static zzbjq(): com.google.android.gms.internal.zzdfp;
						public zzj(param0: native.Array<number>): string;
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfq {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
						public zzb(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfr extends com.google.android.gms.internal.zzdfu {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfs extends com.google.android.gms.internal.zzdfu {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdft {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdfp.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfu extends com.google.android.gms.internal.zzdfp {
						public equals(param0: javalangObject): boolean;
						public zzbjo(): com.google.android.gms.internal.zzdfp;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
import javaioOutputStream = java.io.OutputStream;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfv {
						public static zza(param0: javaioInputStream, param1: javaioOutputStream): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfw {
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public write(param0: native.Array<number>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javamathRoundingMode = java.math.RoundingMode;
/// <reference path="./java.math.RoundingMode.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfx {
						public static zza(param0: number, param1: javamathRoundingMode): number;
						public static zza(param0: number, param1: number, param2: javamathRoundingMode): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfy {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdfz {
					}
				}
			}
		}
	}
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdga extends com.google.android.gms.internal.zzdgc {
						public constructor();
						public isDone(): boolean;
						public isCancelled(): boolean;
						public cancel(param0: boolean): boolean;
						public zzas(param0: javalangObject): boolean;
						public get(): javalangObject;
						public toString(): string;
						public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
					}
					export module zzdga {
						export abstract class zza {
						}
						export class zzb {
						}
						export class zzc {
						}
						export class zzd {
						}
						export class zze extends com.google.android.gms.internal.zzdga.zza {
						}
						export class zzf {
							public run(): void;
						}
						export class zzg extends com.google.android.gms.internal.zzdga.zza {
						}
						export class zzh extends com.google.android.gms.internal.zzdga {
							public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
							public get(): javalangObject;
						}
						export class zzi extends com.google.android.gms.internal.zzdga.zza {
						}
						export class zzj {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgb {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzdgb interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzdgc extends com.google.android.gms.internal.zzdgf {
					}
				}
			}
		}
	}
}

import javautilconcurrentFuture = java.util.concurrent.Future;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgd extends com.google.android.gms.internal.zzdgg {
						public static zza(param0: javautilconcurrentFuture): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdge {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzdgf {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgg {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgh {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzdgh interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

import javautilconcurrentExecutor = java.util.concurrent.Executor;
import javautilconcurrentThreadFactory = java.util.concurrent.ThreadFactory;
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgi {
						public static zzbjt(): javautilconcurrentExecutor;
						public static zzbju(): javautilconcurrentThreadFactory;
					}
				}
			}
		}
	}
}

import javalangRunnable = java.lang.Runnable;
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgj {
						public static zzlat: com.google.android.gms.internal.zzdgj;
						public execute(param0: javalangRunnable): void;
						public static values(): native.Array<com.google.android.gms.internal.zzdgj>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgk extends com.google.android.gms.internal.zzdga.zzh {
						public zzas(param0: javalangObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgl {
						public constructor();
						public zzbjw(): javautilconcurrentThreadFactory;
						public zza(param0: javautilconcurrentThreadFactory): com.google.android.gms.internal.zzdgl;
						public zzca(param0: boolean): com.google.android.gms.internal.zzdgl;
						public zzoe(param0: string): com.google.android.gms.internal.zzdgl;
					}
				}
			}
		}
	}
}

import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgm {
						public newThread(param0: javalangRunnable): javalangThread;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzdgn {
						public static zzb(param0: javautilconcurrentFuture): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzekj.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzebm {
						public constructor();
						public getToken(param0: boolean): com.google.android.gms.tasks.Task;
						public zza(param0: com.google.android.gms.internal.zzekj): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzekj.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebn extends com.google.android.gms.internal.zzebm {
						public constructor();
						public getToken(param0: boolean): com.google.android.gms.tasks.Task;
						public zza(param0: com.google.android.gms.internal.zzekj): void;
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzekv.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebo {
						public zzb(param0: com.google.android.gms.internal.zzekv): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebp {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebq {
						public static zzmpr: com.google.android.gms.internal.zzebq;
						public getUid(): string;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzbzc(): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebr {
						public constructor(param0: javautilList, param1: boolean);
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzbzf(): string;
						public zzbzd(): javautilList;
						public zza(param0: javautilList, param1: com.google.android.gms.internal.zzegc): boolean;
						public zzbze(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebs {
						public zzbnx(): string;
						public constructor(param0: com.google.android.gms.internal.zzegb, param1: string, param2: string, param3: boolean);
						public getHost(): string;
						public isSslEnabled(): boolean;
						public zzbyw(): com.google.android.gms.internal.zzegb;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzebu.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebt {
						public equals(param0: javalangObject): boolean;
						public zzbyr(): com.google.android.gms.internal.zzegc;
						public hashCode(): number;
						public static zza(param0: com.google.android.gms.internal.zzebu, param1: com.google.android.gms.internal.zzegc): com.google.android.gms.internal.zzebt;
						public toString(): string;
						public zzbzg(): com.google.android.gms.internal.zzebu;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebu {
						public static zzmpw: com.google.android.gms.internal.zzebu;
						public static zzmpx: com.google.android.gms.internal.zzebu;
						public static zzmpy: com.google.android.gms.internal.zzebu;
						public static zzmpz: com.google.android.gms.internal.zzebu;
						public static values(): native.Array<com.google.android.gms.internal.zzebu>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzebt.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebv {
						public constructor();
						public zza(param0: com.google.android.gms.internal.zzebt): void;
					}
				}
			}
		}
	}
}

import iogrpczzcq = io.grpc.zzcq;
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeir.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebw {
						public zzb(param0: com.google.android.gms.internal.zzecq): boolean;
						public zza(param0: com.google.android.gms.internal.zzeco, param1: iogrpczzcq): void;
						public zza(param0: com.google.android.gms.internal.zzecq): number;
						public zza(param0: com.google.android.gms.internal.zzeir): void;
						public constructor(param0: com.google.android.gms.internal.zzecv);
						public zzav(param0: javautilList): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebx {
						public zzmoi: boolean;
						public zzmoh: boolean;
						public zzmqf: boolean;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeby {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzebz {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzebz interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzbzh(): com.google.android.gms.internal.zzegj;
							zzb(param0: com.google.android.gms.internal.zzegc): boolean;
							zzbzi(): string;
						});
						public zzbzi(): string;
						public zzb(param0: com.google.android.gms.internal.zzegc): boolean;
						public zzbzh(): com.google.android.gms.internal.zzegj;
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.android.gms.common.util.zzk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebm.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebs.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeil.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejp.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.EventListener.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeca {
						public zzc(param0: com.google.android.gms.internal.zzecq): void;
						public zza(param0: number, param1: iogrpczzcq): void;
						public zzb(param0: number, param1: iogrpczzcq): void;
						public zza(param0: com.google.android.gms.common.util.zzk, param1: number): com.google.android.gms.tasks.Task;
						public zzaw(param0: javautilList): com.google.android.gms.tasks.Task;
						public zza(param0: com.google.android.gms.internal.zzeco, param1: com.google.android.gms.internal.zzebx, param2: com.google.firebase.firestore.EventListener): com.google.android.gms.internal.zzecq;
						public zza(param0: com.google.android.gms.internal.zzeil): void;
						public constructor(param0: androidcontentContext, param1: com.google.android.gms.internal.zzebs, param2: boolean, param3: com.google.android.gms.internal.zzebm, param4: com.google.android.gms.internal.zzejp);
						public zza(param0: com.google.android.gms.internal.zzegw): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecb {
						public zzbx(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecc {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecd {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzece {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecf {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecg {
						public call(): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzech {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzecj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeci {
						public zzbzj(): com.google.android.gms.internal.zzecj;
						public equals(param0: javalangObject): boolean;
						public constructor(param0: com.google.android.gms.internal.zzecj, param1: com.google.android.gms.internal.zzegf);
						public hashCode(): number;
						public zzbyq(): com.google.android.gms.internal.zzegf;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecj {
						public static zzmqy: com.google.android.gms.internal.zzecj;
						public static zzmqz: com.google.android.gms.internal.zzecj;
						public static values(): native.Array<com.google.android.gms.internal.zzecj>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeck {
						public constructor(param0: com.google.android.gms.internal.zzegj);
						public zzbzi(): string;
						public equals(param0: javalangObject): boolean;
						public zzb(param0: com.google.android.gms.internal.zzegc): boolean;
						public hashCode(): number;
						public zzbzh(): com.google.android.gms.internal.zzegj;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecl {
						public constructor(param0: com.google.android.gms.internal.zzegj);
						public zzbzi(): string;
						public equals(param0: javalangObject): boolean;
						public zzb(param0: com.google.android.gms.internal.zzegc): boolean;
						public hashCode(): number;
						public zzbzh(): com.google.android.gms.internal.zzegj;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzecn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecm {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public static zza(param0: com.google.android.gms.internal.zzecn, param1: com.google.android.gms.internal.zzegj): com.google.android.gms.internal.zzecm;
						public zzbzh(): com.google.android.gms.internal.zzegj;
						public zzbzk(): com.google.android.gms.internal.zzecn;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecn {
						public static zzmre: com.google.android.gms.internal.zzecn;
						public static zzmrf: com.google.android.gms.internal.zzecn;
						public zzbzl(): number;
						public static values(): native.Array<com.google.android.gms.internal.zzecn>;
					}
				}
			}
		}
	}
}

import javautilComparator = java.util.Comparator;
/// <reference path="./com.google.android.gms.internal.zzebr.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecm.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeco {
						public static zzmri: number;
						public static zza(param0: com.google.android.gms.internal.zzegm): com.google.android.gms.internal.zzeco;
						public zzbzn(): boolean;
						public zzbzs(): com.google.android.gms.internal.zzegj;
						public zza(param0: com.google.android.gms.internal.zzebz): com.google.android.gms.internal.zzeco;
						public zzbzv(): javautilList;
						public zzbzm(): com.google.android.gms.internal.zzegm;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzbzp(): number;
						public constructor(param0: com.google.android.gms.internal.zzegm, param1: javautilList, param2: javautilList, param3: number, param4: com.google.android.gms.internal.zzebr, param5: com.google.android.gms.internal.zzebr);
						public toString(): string;
						public zzbzt(): com.google.android.gms.internal.zzegj;
						public comparator(): javautilComparator;
						public zza(param0: com.google.android.gms.internal.zzebr): com.google.android.gms.internal.zzeco;
						public zzbzi(): string;
						public zzb(param0: com.google.android.gms.internal.zzegc): boolean;
						public zzb(param0: com.google.android.gms.internal.zzebr): com.google.android.gms.internal.zzeco;
						public zza(param0: com.google.android.gms.internal.zzecm): com.google.android.gms.internal.zzeco;
						public zzca(param0: number): com.google.android.gms.internal.zzeco;
						public zzbvo(): boolean;
						public zzbzq(): com.google.android.gms.internal.zzebr;
						public zzbzu(): javautilList;
						public zzbzr(): com.google.android.gms.internal.zzebr;
						public zzbzo(): javautilList;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecp {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzebx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeir.d.ts" />
/// <reference path="./com.google.firebase.firestore.EventListener.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecq {
						public constructor(param0: com.google.android.gms.internal.zzeco, param1: com.google.android.gms.internal.zzebx, param2: com.google.firebase.firestore.EventListener);
						public zzb(param0: com.google.android.gms.internal.zzeir): void;
						public zzbzw(): com.google.android.gms.internal.zzeco;
						public zza(param0: com.google.firebase.firestore.FirebaseFirestoreException): void;
						public zza(param0: com.google.android.gms.internal.zzedi): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedd.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecr {
						public zzbzw(): com.google.android.gms.internal.zzeco;
						public zzbzx(): number;
						public zzbzy(): com.google.android.gms.internal.zzedd;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzebz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecu.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecs {
						public static zza(param0: com.google.android.gms.internal.zzegj, param1: com.google.android.gms.internal.zzecu, param2: com.google.android.gms.internal.zzehg): com.google.android.gms.internal.zzebz;
						public zzcab(): boolean;
						public zzbzi(): string;
						public equals(param0: javalangObject): boolean;
						public zzb(param0: com.google.android.gms.internal.zzegc): boolean;
						public zzcaa(): com.google.android.gms.internal.zzehg;
						public hashCode(): number;
						public zzbzh(): com.google.android.gms.internal.zzegj;
						public toString(): string;
						public zzbzz(): com.google.android.gms.internal.zzecu;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzect {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecu {
						public static zzmsa: com.google.android.gms.internal.zzecu;
						public static zzmsb: com.google.android.gms.internal.zzecu;
						public static zzmsc: com.google.android.gms.internal.zzecu;
						public static zzmsd: com.google.android.gms.internal.zzecu;
						public static zzmse: com.google.android.gms.internal.zzecu;
						public static values(): native.Array<com.google.android.gms.internal.zzecu>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.common.util.zzk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedu.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeil.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeio.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejp.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.android.gms.tasks.TaskCompletionSource.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecv {
						public zza(param0: number, param1: iogrpczzcq): void;
						public zzb(param0: number, param1: iogrpczzcq): void;
						public zzb(param0: javautilList, param1: com.google.android.gms.tasks.TaskCompletionSource): void;
						public zza(param0: com.google.android.gms.internal.zzejp, param1: com.google.android.gms.common.util.zzk, param2: number): com.google.android.gms.tasks.Task;
						public zzb(param0: com.google.android.gms.internal.zzebq): void;
						public zza(param0: com.google.android.gms.internal.zzecv.zza): void;
						public zza(param0: com.google.android.gms.internal.zzeil): void;
						public constructor(param0: com.google.android.gms.internal.zzedu, param1: com.google.android.gms.internal.zzeio, param2: com.google.android.gms.internal.zzebq);
						public zza(param0: com.google.android.gms.internal.zzeco): number;
						public zza(param0: com.google.android.gms.internal.zzegw): void;
					}
					export module zzecv {
						export class zza {
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.zzecv$zza interface with the provided implementation.
							 */
							public constructor(implementation: {
								zzav(param0: javautilList): void;
								zza(param0: com.google.android.gms.internal.zzeco, param1: iogrpczzcq): void;
							});
							public zzav(param0: javautilList): void;
							public zza(param0: com.google.android.gms.internal.zzeco, param1: iogrpczzcq): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecw {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecx {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecy {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzecz {
						public static zzge(param0: number): com.google.android.gms.internal.zzecz;
						public zzcad(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeid.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.zzm.d.ts" />
/// <reference path="./com.google.firebase.firestore.zzn.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeda {
						public zzb(param0: com.google.android.gms.internal.zzegf): void;
						public static zzcae(): javautilconcurrentExecutor;
						public zzax(param0: javautilList): com.google.android.gms.tasks.Task;
						public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.firebase.firestore.zzm): void;
						public constructor(param0: com.google.android.gms.internal.zzeid);
						public commit(): com.google.android.gms.tasks.Task;
						public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.firebase.firestore.zzn): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedb {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedc {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeiw.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedd {
						public zza(param0: com.google.android.gms.internal.zzedg, param1: com.google.android.gms.internal.zzeiw): com.google.android.gms.internal.zzedh;
						public zza(param0: com.google.android.gms.internal.zzdos, param1: com.google.android.gms.internal.zzedg): com.google.android.gms.internal.zzedg;
						public constructor(param0: com.google.android.gms.internal.zzeco, param1: com.google.android.gms.internal.zzdox);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzede {
						public compare(param0: javalangObject, param1: javalangObject): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedf {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedg {
						public zzcag(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzedi.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedh {
						public zzcai(): javautilList;
						public constructor(param0: com.google.android.gms.internal.zzedi, param1: javautilList);
						public zzcah(): com.google.android.gms.internal.zzedi;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegh.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedi {
						public equals(param0: javalangObject): boolean;
						public zzbwf(): javautilList;
						public zzcal(): boolean;
						public hashCode(): number;
						public zzbzw(): com.google.android.gms.internal.zzeco;
						public zzcaj(): com.google.android.gms.internal.zzegh;
						public isFromCache(): boolean;
						public constructor(param0: com.google.android.gms.internal.zzeco, param1: com.google.android.gms.internal.zzegh, param2: com.google.android.gms.internal.zzegh, param3: javautilList, param4: boolean, param5: boolean, param6: boolean);
						public hasPendingWrites(): boolean;
						public zzcak(): com.google.android.gms.internal.zzegh;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedj {
						public static zzmtq: number;
						public static zzmtr: number;
						public static zzmts: number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedk {
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: number);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedl {
						public compare(param0: javalangObject, param1: javalangObject): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedm {
						public compare(param0: javalangObject, param1: javalangObject): number;
					}
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./com.google.android.gms.internal.zzedq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedn {
						public constructor();
						public zzcan(): javautilSet;
						public zza(param0: com.google.android.gms.internal.zzedq): void;
						public zzcam(): boolean;
						public zzb(param0: com.google.android.gms.internal.zzedq): void;
						public zzc(param0: com.google.android.gms.internal.zzegf): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedo {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzedq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedp {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzedp interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzcam(): boolean;
							zza(param0: com.google.android.gms.internal.zzedq): void;
							zzb(param0: com.google.android.gms.internal.zzedq): void;
							zzc(param0: com.google.android.gms.internal.zzegf): void;
							zzcan(): javautilSet;
						});
						public zzcan(): javautilSet;
						public zza(param0: com.google.android.gms.internal.zzedq): void;
						public zzcam(): boolean;
						public zzb(param0: com.google.android.gms.internal.zzedq): void;
						public zzc(param0: com.google.android.gms.internal.zzegf): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedq {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzedq interface with the provided implementation.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.internal.zzedp): void;
							zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						});
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedr {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeim.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeds {
						public constructor(param0: com.google.android.gms.internal.zzeim);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedt {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeei.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeep.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeil.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedu {
						public zzb(param0: com.google.android.gms.internal.zzeil): com.google.android.gms.internal.zzdos;
						public zze(param0: com.google.android.gms.internal.zzeco): void;
						public zzf(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						public zzgf(param0: number): com.google.android.gms.internal.zzdos;
						public zzcap(): com.google.android.gms.internal.zzeuk;
						public zzcar(): void;
						public zzgg(param0: number): com.google.android.gms.internal.zzegv;
						public constructor(param0: com.google.android.gms.internal.zzeep, param1: com.google.android.gms.internal.zzedp, param2: com.google.android.gms.internal.zzebq);
						public zzd(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzeer;
						public zzgh(param0: number): com.google.android.gms.internal.zzdox;
						public zzb(param0: com.google.android.gms.internal.zzegw): com.google.android.gms.internal.zzdos;
						public start(): void;
						public zzba(param0: javautilList): void;
						public zzcaq(): com.google.android.gms.internal.zzegn;
						public zzaz(param0: javautilList): com.google.android.gms.internal.zzeei;
						public zzc(param0: com.google.android.gms.internal.zzebq): com.google.android.gms.internal.zzdos;
						public zzac(param0: com.google.android.gms.internal.zzeuk): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedv {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedw {
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedx {
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedy {
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzedz {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeea {
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeb {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeec {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeed {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeee {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeef {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedi.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeg {
						public static zzd(param0: com.google.android.gms.internal.zzedi): com.google.android.gms.internal.zzeeg;
						public zzbzw(): com.google.android.gms.internal.zzeco;
						public zzcat(): com.google.android.gms.internal.zzdox;
						public zzcau(): com.google.android.gms.internal.zzdox;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeh {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeei {
						public zzcaw(): com.google.android.gms.internal.zzdos;
						public zzcav(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeej {
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgk(param0: number): com.google.android.gms.internal.zzegv;
						public zzb(param0: com.google.android.gms.internal.zzego, param1: javautilList): com.google.android.gms.internal.zzegv;
						public zzcap(): com.google.android.gms.internal.zzeuk;
						public zzcax(): number;
						public zzbc(param0: javautilList): void;
						public zzcaz(): void;
						public zzgj(param0: number): com.google.android.gms.internal.zzegv;
						public zzgl(param0: number): javautilList;
						public zzcay(): javautilList;
						public start(): void;
						public zzh(param0: com.google.android.gms.internal.zzeco): javautilList;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzegv, param1: com.google.android.gms.internal.zzeuk): void;
						public zzf(param0: com.google.android.gms.internal.zzegf): javautilList;
						public zzac(param0: com.google.android.gms.internal.zzeuk): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeek extends com.google.android.gms.internal.zzeep {
						public constructor();
						public start(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeel {
						public zzi(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzeer;
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgo(param0: number): void;
						public zzb(param0: com.google.android.gms.internal.zzeer): void;
						public zzgp(param0: number): com.google.android.gms.internal.zzdox;
						public zzb(param0: com.google.android.gms.internal.zzdox, param1: number): void;
						public zzcbc(): number;
						public zzc(param0: com.google.android.gms.internal.zzeer): void;
						public start(): void;
						public zzb(param0: com.google.android.gms.internal.zzegn): void;
						public zzcaq(): com.google.android.gms.internal.zzegn;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzdox, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeem {
						public zzg(param0: com.google.android.gms.internal.zzegf): void;
						public zzb(param0: com.google.android.gms.internal.zzegk): void;
						public zzj(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						public zzh(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegk;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeen {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeen interface with the provided implementation.
						 */
						public constructor(implementation: {
							start(): void;
							zzcax(): number;
							zza(param0: com.google.android.gms.internal.zzegv, param1: com.google.android.gms.internal.zzeuk): void;
							zzcap(): com.google.android.gms.internal.zzeuk;
							zzac(param0: com.google.android.gms.internal.zzeuk): void;
							zzb(param0: com.google.android.gms.internal.zzego, param1: javautilList): com.google.android.gms.internal.zzegv;
							zzgj(param0: number): com.google.android.gms.internal.zzegv;
							zzgk(param0: number): com.google.android.gms.internal.zzegv;
							zzcay(): javautilList;
							zzgl(param0: number): javautilList;
							zzf(param0: com.google.android.gms.internal.zzegf): javautilList;
							zzh(param0: com.google.android.gms.internal.zzeco): javautilList;
							zzbc(param0: javautilList): void;
							zzcaz(): void;
							zza(param0: com.google.android.gms.internal.zzedp): void;
							zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						});
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgk(param0: number): com.google.android.gms.internal.zzegv;
						public zzb(param0: com.google.android.gms.internal.zzego, param1: javautilList): com.google.android.gms.internal.zzegv;
						public zzcap(): com.google.android.gms.internal.zzeuk;
						public zzcax(): number;
						public zzbc(param0: javautilList): void;
						public zzcaz(): void;
						public zzgj(param0: number): com.google.android.gms.internal.zzegv;
						public zzgl(param0: number): javautilList;
						public zzcay(): javautilList;
						public start(): void;
						public zzh(param0: com.google.android.gms.internal.zzeco): javautilList;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzegv, param1: com.google.android.gms.internal.zzeuk): void;
						public zzf(param0: com.google.android.gms.internal.zzegf): javautilList;
						public zzac(param0: com.google.android.gms.internal.zzeuk): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzedq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeo {
						public constructor();
						public zzcan(): javautilSet;
						public zza(param0: com.google.android.gms.internal.zzedq): void;
						public zzcam(): boolean;
						public zzb(param0: com.google.android.gms.internal.zzedq): void;
						public zzc(param0: com.google.android.gms.internal.zzegf): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzeep {
						public start(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeq {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeeq interface with the provided implementation.
						 */
						public constructor(implementation: {
							start(): void;
							zzcbc(): number;
							zzcaq(): com.google.android.gms.internal.zzegn;
							zzb(param0: com.google.android.gms.internal.zzegn): void;
							zzb(param0: com.google.android.gms.internal.zzeer): void;
							zzc(param0: com.google.android.gms.internal.zzeer): void;
							zzi(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzeer;
							zza(param0: com.google.android.gms.internal.zzdox, param1: number): void;
							zzb(param0: com.google.android.gms.internal.zzdox, param1: number): void;
							zzgo(param0: number): void;
							zzgp(param0: number): com.google.android.gms.internal.zzdox;
							zza(param0: com.google.android.gms.internal.zzedp): void;
							zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						});
						public zzi(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzeer;
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgo(param0: number): void;
						public zzb(param0: com.google.android.gms.internal.zzeer): void;
						public zzgp(param0: number): com.google.android.gms.internal.zzdox;
						public zzb(param0: com.google.android.gms.internal.zzdox, param1: number): void;
						public zzcbc(): number;
						public zzc(param0: com.google.android.gms.internal.zzeer): void;
						public start(): void;
						public zzb(param0: com.google.android.gms.internal.zzegn): void;
						public zzcaq(): com.google.android.gms.internal.zzegn;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzdox, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeet.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeer {
						public constructor(param0: com.google.android.gms.internal.zzeco, param1: number, param2: com.google.android.gms.internal.zzeet);
						public constructor(param0: com.google.android.gms.internal.zzeco, param1: number, param2: com.google.android.gms.internal.zzeet, param3: com.google.android.gms.internal.zzegn, param4: com.google.android.gms.internal.zzeuk);
						public zzcbd(): com.google.android.gms.internal.zzeet;
						public equals(param0: javalangObject): boolean;
						public zzcbe(): com.google.android.gms.internal.zzegn;
						public hashCode(): number;
						public zzbzw(): com.google.android.gms.internal.zzeco;
						public zza(param0: com.google.android.gms.internal.zzegn, param1: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzeer;
						public zzcbf(): com.google.android.gms.internal.zzeuk;
						public zzbzx(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzees {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzees interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzc(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						});
						public zzc(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeet {
						public static zzmvq: com.google.android.gms.internal.zzeet;
						public static zzmvr: com.google.android.gms.internal.zzeet;
						public static zzmvs: com.google.android.gms.internal.zzeet;
						public static values(): native.Array<com.google.android.gms.internal.zzeet>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeeu {
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public constructor();
						public zzc(param0: com.google.android.gms.internal.zzdox, param1: number): void;
						public zzgq(param0: number): void;
						public zza(param0: com.google.android.gms.internal.zzegf, param1: number): void;
						public zzb(param0: com.google.android.gms.internal.zzegf, param1: number): void;
						public zzd(param0: com.google.android.gms.internal.zzdox, param1: number): void;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zzgr(param0: number): com.google.android.gms.internal.zzdox;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeev {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeev interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzb(param0: com.google.android.gms.internal.zzegk): void;
							zzg(param0: com.google.android.gms.internal.zzegf): void;
							zzh(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegk;
							zzj(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						});
						public zzg(param0: com.google.android.gms.internal.zzegf): void;
						public zzb(param0: com.google.android.gms.internal.zzegk): void;
						public zzj(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						public zzh(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegk;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeew {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeex {
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgk(param0: number): com.google.android.gms.internal.zzegv;
						public zzb(param0: com.google.android.gms.internal.zzego, param1: javautilList): com.google.android.gms.internal.zzegv;
						public zzcap(): com.google.android.gms.internal.zzeuk;
						public zzcax(): number;
						public zzbc(param0: javautilList): void;
						public zzcaz(): void;
						public zzgj(param0: number): com.google.android.gms.internal.zzegv;
						public zzgl(param0: number): javautilList;
						public zzcay(): javautilList;
						public start(): void;
						public zzh(param0: com.google.android.gms.internal.zzeco): javautilList;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzegv, param1: com.google.android.gms.internal.zzeuk): void;
						public zzf(param0: com.google.android.gms.internal.zzegf): javautilList;
						public zzac(param0: com.google.android.gms.internal.zzeuk): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeey {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeez {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefa {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefb {
						public apply(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefc {
						public apply(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefd {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefe {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeff {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefg {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefh {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeds.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefi extends com.google.android.gms.internal.zzeep {
						public constructor(param0: androidcontentContext, param1: string, param2: com.google.android.gms.internal.zzegb, param3: com.google.android.gms.internal.zzeds);
						public start(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefj {
					}
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefk {
						public onConfigure(param0: androiddatabasesqliteSQLiteDatabase): void;
						public onUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public onDowngrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public onOpen(param0: androiddatabasesqliteSQLiteDatabase): void;
						public onCreate(param0: androiddatabasesqliteSQLiteDatabase): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefl {
					}
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteCursorDriver = android.database.sqlite.SQLiteCursorDriver;
import androiddatabasesqliteSQLiteQuery = android.database.sqlite.SQLiteQuery;
import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefm {
						public newCursor(param0: androiddatabasesqliteSQLiteDatabase, param1: androiddatabasesqliteSQLiteCursorDriver, param2: string, param3: androiddatabasesqliteSQLiteQuery): androiddatabaseCursor;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefn {
						public zzi(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzeer;
						public zza(param0: com.google.android.gms.internal.zzedp): void;
						public zzgo(param0: number): void;
						public zzb(param0: com.google.android.gms.internal.zzeer): void;
						public zzgp(param0: number): com.google.android.gms.internal.zzdox;
						public zzb(param0: com.google.android.gms.internal.zzdox, param1: number): void;
						public zzcbc(): number;
						public zzc(param0: com.google.android.gms.internal.zzeer): void;
						public start(): void;
						public zzb(param0: com.google.android.gms.internal.zzegn): void;
						public zzcaq(): com.google.android.gms.internal.zzegn;
						public zzd(param0: com.google.android.gms.internal.zzegf): boolean;
						public zza(param0: com.google.android.gms.internal.zzdox, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefo {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefp {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefq {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefr {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefs {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeft {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefu {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefv {
						public zzg(param0: com.google.android.gms.internal.zzegf): void;
						public zzb(param0: com.google.android.gms.internal.zzegk): void;
						public zzj(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
						public zzh(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegk;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefw {
						public apply(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefx {
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefy {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedr.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzefz {
						public constructor(param0: com.google.android.gms.internal.zzedr);
						public zzc(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzdos;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzega {
						public zzc(param0: com.google.android.gms.internal.zzega): number;
						public equals(param0: javalangObject): boolean;
						public length(): number;
						public hashCode(): number;
						public zzbzf(): string;
						public zzd(param0: com.google.android.gms.internal.zzega): boolean;
						public zzcbn(): string;
						public toString(): string;
						public zzcbk(): com.google.android.gms.internal.zzega;
						public zzcbl(): com.google.android.gms.internal.zzega;
						public zzql(param0: string): com.google.android.gms.internal.zzega;
						public zzb(param0: com.google.android.gms.internal.zzega): com.google.android.gms.internal.zzega;
						public zzgu(param0: number): com.google.android.gms.internal.zzega;
						public isEmpty(): boolean;
						public zzgt(param0: number): string;
						public zzcbm(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegb {
						public zza(param0: com.google.android.gms.internal.zzegb): number;
						public static zzbj(param0: string, param1: string): com.google.android.gms.internal.zzegb;
						public zzcbo(): string;
						public equals(param0: javalangObject): boolean;
						public getProjectId(): string;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegc extends com.google.android.gms.internal.zzegk {
						public zzb(param0: com.google.android.gms.internal.zzegj): com.google.android.gms.internal.zzehg;
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegn, param2: com.google.android.gms.internal.zzehl, param3: boolean);
						public zzcbr(): boolean;
						public equals(param0: javalangObject): boolean;
						public static zzcbp(): javautilComparator;
						public zzcbq(): com.google.android.gms.internal.zzehl;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegd {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzege {
						public static zzcbs(): com.google.android.gms.internal.zzdos;
						public static zzcbt(): com.google.android.gms.internal.zzdos;
						public static zzcbu(): com.google.android.gms.internal.zzdos;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegf {
						public static zzb(param0: com.google.android.gms.internal.zzegm): com.google.android.gms.internal.zzegf;
						public static zzcbv(): com.google.android.gms.internal.zzdox;
						public zzbzm(): com.google.android.gms.internal.zzegm;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public static zzc(param0: com.google.android.gms.internal.zzegm): boolean;
						public zzi(param0: com.google.android.gms.internal.zzegf): number;
						public static comparator(): javautilComparator;
						public static zzcbw(): com.google.android.gms.internal.zzegf;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegg {
						public compare(param0: javalangObject, param1: javalangObject): number;
					}
				}
			}
		}
	}
}

import javautilIterator = java.util.Iterator;
/// <reference path="./com.google.android.gms.internal.zzegc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegh {
						public zzl(param0: com.google.android.gms.internal.zzegf): number;
						public iterator(): javautilIterator;
						public equals(param0: javalangObject): boolean;
						public static zzb(param0: javautilComparator): com.google.android.gms.internal.zzegh;
						public zzj(param0: com.google.android.gms.internal.zzegf): boolean;
						public zzc(param0: com.google.android.gms.internal.zzegc): com.google.android.gms.internal.zzegh;
						public zzcbx(): com.google.android.gms.internal.zzegc;
						public hashCode(): number;
						public toString(): string;
						public zzk(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegc;
						public zzm(param0: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzegh;
						public isEmpty(): boolean;
						public size(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegi {
						public compare(param0: javalangObject, param1: javalangObject): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegj extends com.google.android.gms.internal.zzega {
						public static zzmxg: com.google.android.gms.internal.zzegj;
						public static zzmxh: com.google.android.gms.internal.zzegj;
						public static zzqm(param0: string): com.google.android.gms.internal.zzegj;
						public zzbzf(): string;
						public static zzqn(param0: string): com.google.android.gms.internal.zzegj;
						public static zzbe(param0: javautilList): com.google.android.gms.internal.zzegj;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegk {
						public zzcby(): com.google.android.gms.internal.zzegn;
						public zzbyq(): com.google.android.gms.internal.zzegf;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegl extends com.google.android.gms.internal.zzegk {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegn);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegm extends com.google.android.gms.internal.zzega {
						public static zzmxj: com.google.android.gms.internal.zzegm;
						public static zzqp(param0: string): com.google.android.gms.internal.zzegm;
						public zzbzf(): string;
						public static zzbf(param0: javautilList): com.google.android.gms.internal.zzegm;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegn {
						public static zzmxk: com.google.android.gms.internal.zzegn;
						public equals(param0: javalangObject): boolean;
						public zzcbz(): com.google.android.gms.internal.zzego;
						public zzc(param0: com.google.android.gms.internal.zzegn): number;
						public constructor(param0: com.google.android.gms.internal.zzego);
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzego {
						public zzcca(): number;
						public zza(param0: com.google.android.gms.internal.zzego): number;
						public constructor(param0: javautilDate);
						public getNanos(): number;
						public equals(param0: javalangObject): boolean;
						public zzccb(): javautilDate;
						public hashCode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegp extends com.google.android.gms.internal.zzegu {
						public equals(param0: javalangObject): boolean;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzegk;
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegz);
						public hashCode(): number;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzegx): com.google.android.gms.internal.zzegk;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegq {
						public static zzr(param0: javautilCollection): com.google.android.gms.internal.zzegq;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzccc(): javautilCollection;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegs.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegr {
						public constructor(param0: com.google.android.gms.internal.zzegj, param1: com.google.android.gms.internal.zzegs);
						public zzccd(): com.google.android.gms.internal.zzegj;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzcce(): com.google.android.gms.internal.zzegs;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegs {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzegs interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegt {
						public static zzccf(): com.google.android.gms.internal.zzegt;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzegu {
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzegk;
						public zzccg(): com.google.android.gms.internal.zzegz;
						public zzbyq(): com.google.android.gms.internal.zzegf;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzegx): com.google.android.gms.internal.zzegk;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegw.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegv {
						public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegk): com.google.android.gms.internal.zzegk;
						public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegk, param2: com.google.android.gms.internal.zzegw): com.google.android.gms.internal.zzegk;
						public equals(param0: javalangObject): boolean;
						public zzccn(): javautilList;
						public zzcav(): number;
						public hashCode(): number;
						public constructor(param0: number, param1: com.google.android.gms.internal.zzego, param2: javautilList);
						public zzccj(): javautilSet;
						public zzccm(): com.google.android.gms.internal.zzegv;
						public toString(): string;
						public zzccl(): boolean;
						public zzcck(): com.google.android.gms.internal.zzego;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegw {
						public zzccr(): com.google.android.gms.internal.zzeuk;
						public zzccs(): com.google.android.gms.internal.zzdos;
						public zzccq(): javautilList;
						public zzcco(): com.google.android.gms.internal.zzegv;
						public static zza(param0: com.google.android.gms.internal.zzegv, param1: com.google.android.gms.internal.zzegn, param2: javautilList, param3: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzegw;
						public zzccp(): com.google.android.gms.internal.zzegn;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegx {
						public zzcby(): com.google.android.gms.internal.zzegn;
						public constructor(param0: com.google.android.gms.internal.zzegn, param1: javautilList);
						public zzcct(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegy extends com.google.android.gms.internal.zzegu {
						public equals(param0: javalangObject): boolean;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzegk;
						public zzccv(): com.google.android.gms.internal.zzegq;
						public hashCode(): number;
						public zzccu(): com.google.android.gms.internal.zzehl;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzegx): com.google.android.gms.internal.zzegk;
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzehl, param2: com.google.android.gms.internal.zzegq, param3: com.google.android.gms.internal.zzegz);
						public toString(): string;
					}
				}
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzegz {
						public static zzmyc: com.google.android.gms.internal.zzegz;
						public zzccx(): com.google.android.gms.internal.zzegn;
						public zzccy(): javalangBoolean;
						public static zzd(param0: com.google.android.gms.internal.zzegn): com.google.android.gms.internal.zzegz;
						public zzf(param0: com.google.android.gms.internal.zzegk): boolean;
						public equals(param0: javalangObject): boolean;
						public zzccw(): boolean;
						public hashCode(): number;
						public static zzcl(param0: boolean): com.google.android.gms.internal.zzegz;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeha extends com.google.android.gms.internal.zzegu {
						public equals(param0: javalangObject): boolean;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzegk;
						public hashCode(): number;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzegx): com.google.android.gms.internal.zzegk;
						public zzccu(): com.google.android.gms.internal.zzehl;
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzehl, param2: com.google.android.gms.internal.zzegz);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehb extends com.google.android.gms.internal.zzegu {
						public constructor(param0: com.google.android.gms.internal.zzegf, param1: javautilList);
						public equals(param0: javalangObject): boolean;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzegk;
						public hashCode(): number;
						public zzccz(): javautilList;
						public zza(param0: com.google.android.gms.internal.zzegk, param1: com.google.android.gms.internal.zzegx): com.google.android.gms.internal.zzegk;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehc extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzcdb(): javautilList;
						public static zzbg(param0: javautilList): com.google.android.gms.internal.zzehc;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./com.google.firebase.firestore.Blob.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehd extends com.google.android.gms.internal.zzehg {
						public static zza(param0: com.google.firebase.firestore.Blob): com.google.android.gms.internal.zzehd;
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehe extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzc(param0: com.google.android.gms.internal.zzehg): number;
						public static zzc(param0: javalangBoolean): com.google.android.gms.internal.zzehe;
					}
				}
			}
		}
	}
}

import javalangDouble = java.lang.Double;
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Double.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehf extends com.google.android.gms.internal.zzehk {
						public static zzmyk: com.google.android.gms.internal.zzehf;
						public equals(param0: javalangObject): boolean;
						public static zzb(param0: javalangDouble): com.google.android.gms.internal.zzehf;
						public zzcdc(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzehg {
						public constructor();
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzc(param0: com.google.android.gms.internal.zzehg): number;
						public zzbhp(): javalangObject;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./com.google.firebase.firestore.GeoPoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehh extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public static zza(param0: com.google.firebase.firestore.GeoPoint): com.google.android.gms.internal.zzehh;
					}
				}
			}
		}
	}
}

import javalangLong = java.lang.Long;
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehi extends com.google.android.gms.internal.zzehk {
						public equals(param0: javalangObject): boolean;
						public zzcdd(): number;
						public hashCode(): number;
						public static zzc(param0: javalangLong): com.google.android.gms.internal.zzehi;
						public zzc(param0: com.google.android.gms.internal.zzehg): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehj extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public static zzcde(): com.google.android.gms.internal.zzehj;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzbhp(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzehk extends com.google.android.gms.internal.zzehg {
						public constructor();
						public zzcda(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./com.google.android.gms.internal.zzdos.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehl extends com.google.android.gms.internal.zzehg {
						public zzc(param0: com.google.android.gms.internal.zzegj): com.google.android.gms.internal.zzehl;
						public equals(param0: javalangObject): boolean;
						public static zzaj(param0: javautilMap): com.google.android.gms.internal.zzehl;
						public static zzcdf(): com.google.android.gms.internal.zzehl;
						public zzcda(): number;
						public zzcdg(): com.google.android.gms.internal.zzdos;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzd(param0: com.google.android.gms.internal.zzegj): com.google.android.gms.internal.zzehg;
						public zza(param0: com.google.android.gms.internal.zzegj, param1: com.google.android.gms.internal.zzehg): com.google.android.gms.internal.zzehl;
						public zzc(param0: com.google.android.gms.internal.zzehg): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehm extends com.google.android.gms.internal.zzehg {
						public static zza(param0: com.google.android.gms.internal.zzegb, param1: com.google.android.gms.internal.zzegf): com.google.android.gms.internal.zzehm;
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public zzbyw(): com.google.android.gms.internal.zzegb;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehn extends com.google.android.gms.internal.zzehg {
						public constructor();
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public constructor(param0: com.google.android.gms.internal.zzego);
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeho extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public static zzqq(param0: string): com.google.android.gms.internal.zzeho;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehp extends com.google.android.gms.internal.zzehg {
						public equals(param0: javalangObject): boolean;
						public zzcda(): number;
						public zzcdh(): com.google.android.gms.internal.zzego;
						public hashCode(): number;
						public zzb(param0: com.google.android.gms.internal.zzehg): number;
						public static zzb(param0: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzehp;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzehs.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzenw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehq {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcdi(): com.google.android.gms.internal.zzehq.zzb;
						public zzcdj(): com.google.android.gms.internal.zzehs;
						public static zzcdl(): com.google.android.gms.internal.zzehq.zza;
						public zzcdk(): com.google.android.gms.internal.zzenw;
						public zzhi(): number;
						public static zzat(param0: native.Array<number>): com.google.android.gms.internal.zzehq;
					}
					export module zzehq {
						export class zza {
							public zzb(param0: com.google.android.gms.internal.zzenw): com.google.android.gms.internal.zzehq.zza;
							public zzb(param0: com.google.android.gms.internal.zzehs): com.google.android.gms.internal.zzehq.zza;
						}
						export class zzb {
							public static zzmyw: com.google.android.gms.internal.zzehq.zzb;
							public static zzmyx: com.google.android.gms.internal.zzehq.zzb;
							public static zzmyy: com.google.android.gms.internal.zzehq.zzb;
							public static zzgv(param0: number): com.google.android.gms.internal.zzehq.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzehq.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehr {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehs {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzcdo(): com.google.android.gms.internal.zzehs.zza;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcdn(): com.google.android.gms.internal.zzexi;
						public static zzcdp(): com.google.android.gms.internal.zzehs;
						public zzhi(): number;
						public getName(): string;
					}
					export module zzehs {
						export class zza {
							public zzqr(param0: string): com.google.android.gms.internal.zzehs.zza;
							public zzb(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzehs.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeht {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehu {
						public zzcdu(): com.google.android.gms.internal.zzepw.zzb;
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcdr(): com.google.android.gms.internal.zzehu.zzb;
						public static zzau(param0: native.Array<number>): com.google.android.gms.internal.zzehu;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcds(): com.google.android.gms.internal.zzexi;
						public zzcdt(): com.google.android.gms.internal.zzepw.zzc;
						public zzcbf(): com.google.android.gms.internal.zzeuk;
						public zzhi(): number;
						public static zzcdv(): com.google.android.gms.internal.zzehu.zza;
						public zzbzx(): number;
					}
					export module zzehu {
						export class zza {
							public zzb(param0: com.google.android.gms.internal.zzepw.zzb): com.google.android.gms.internal.zzehu.zza;
							public zzgx(param0: number): com.google.android.gms.internal.zzehu.zza;
							public zzd(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzehu.zza;
							public zzb(param0: com.google.android.gms.internal.zzepw.zzc): com.google.android.gms.internal.zzehu.zza;
							public zzaf(param0: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzehu.zza;
						}
						export class zzb {
							public static zzmzk: com.google.android.gms.internal.zzehu.zzb;
							public static zzmzl: com.google.android.gms.internal.zzehu.zzb;
							public static zzmzm: com.google.android.gms.internal.zzehu.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzehu.zzb>;
							public zzhk(): number;
							public static zzgy(param0: number): com.google.android.gms.internal.zzehu.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehv {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehw {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcdx(): number;
						public static zzav(param0: native.Array<number>): com.google.android.gms.internal.zzehw;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzha(param0: number): com.google.android.gms.internal.zzeqh;
						public zzcav(): number;
						public zzcdy(): com.google.android.gms.internal.zzexi;
						public zzhi(): number;
						public static zzcdz(): com.google.android.gms.internal.zzehw.zza;
					}
					export module zzehw {
						export class zza {
							public zzb(param0: com.google.android.gms.internal.zzeqh): com.google.android.gms.internal.zzehw.zza;
							public zzf(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzehw.zza;
							public zzhb(param0: number): com.google.android.gms.internal.zzehw.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehx {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeiv.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzehy {
						public zzbz(param0: javalangObject): void;
						public isStarted(): boolean;
						public zzby(param0: javalangObject): void;
						public zzceb(): void;
						public zza(param0: com.google.android.gms.internal.zzeiv): void;
						public isOpen(): boolean;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzehz {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeia {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeib {
						public run(): void;
					}
				}
			}
		}
	}
}

import iogrpczzbe = io.grpc.zzbe;
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeic {
						public zzbz(param0: javalangObject): void;
						public onHeaders(param0: iogrpczzbe): void;
						public zzb(param0: iogrpczzcq): void;
						public onReady(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzebm.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzebs.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejp.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeid {
						public static zznai: javautilSet;
						public zzax(param0: javautilList): com.google.android.gms.tasks.Task;
						public zzbh(param0: javautilList): com.google.android.gms.tasks.Task;
						public constructor(param0: com.google.android.gms.internal.zzebs, param1: com.google.android.gms.internal.zzejp, param2: com.google.android.gms.internal.zzebm);
						public static zzc(param0: iogrpczzcq): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeie {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeif {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeig {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeih {
						public constructor(param0: number);
						public getCount(): number;
					}
				}
			}
		}
	}
}

import iogrpczzbp = io.grpc.zzbp;
import iogrpczza = io.grpc.zza;
import iogrpczzg = io.grpc.zzg;
/// <reference path="./com.google.android.gms.internal.zzebm.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzg.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeii {
						public constructor(param0: com.google.android.gms.internal.zzebm);
						public zza(param0: iogrpczzbp, param1: iogrpczza, param2: javautilconcurrentExecutor, param3: iogrpczzg): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeij {
						public onSuccess(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeik {
						public onFailure(param0: javalangException): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeil {
						public zzcej(): javautilMap;
						public constructor(param0: com.google.android.gms.internal.zzegn, param1: javautilMap, param2: javautilMap);
						public zzcbe(): com.google.android.gms.internal.zzegn;
						public zzcei(): javautilMap;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeco.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzego.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegu.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegx.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzepe.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzepw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeqh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeqn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeim {
						public zzd(param0: com.google.android.gms.internal.zzeer): com.google.android.gms.internal.zzepw;
						public zzn(param0: com.google.android.gms.internal.zzegf): string;
						public zzqs(param0: string): com.google.android.gms.internal.zzegf;
						public zzak(param0: javautilMap): com.google.android.gms.internal.zzehl;
						public zzl(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzepw.zzc;
						public zzd(param0: com.google.android.gms.internal.zzehg): com.google.android.gms.internal.zzeqf;
						public zzcek(): string;
						public zzc(param0: com.google.android.gms.internal.zzepw.zzb): com.google.android.gms.internal.zzeco;
						public zzc(param0: com.google.android.gms.internal.zzepw.zzc): com.google.android.gms.internal.zzeco;
						public static zzc(param0: com.google.android.gms.internal.zzego): com.google.android.gms.internal.zzexi;
						public zzk(param0: com.google.android.gms.internal.zzeco): com.google.android.gms.internal.zzepw.zzb;
						public static zzg(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzego;
						public static zzh(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzegn;
						public zzb(param0: com.google.android.gms.internal.zzegu): com.google.android.gms.internal.zzeqh;
						public zza(param0: com.google.android.gms.internal.zzepe): com.google.android.gms.internal.zzejc;
						public zzc(param0: com.google.android.gms.internal.zzeqh): com.google.android.gms.internal.zzegu;
						public constructor(param0: com.google.android.gms.internal.zzegb);
						public zza(param0: com.google.android.gms.internal.zzeqn, param1: com.google.android.gms.internal.zzegn): com.google.android.gms.internal.zzegx;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzein {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeda.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzedu.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeid.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeis.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeit.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeio {
						public zzhd(param0: number): void;
						public zzcex(): com.google.android.gms.internal.zzeda;
						public zza(param0: com.google.android.gms.internal.zzeis): void;
						public zze(param0: com.google.android.gms.internal.zzeer): void;
						public zzcel(): void;
						public zzcem(): void;
						public constructor(param0: com.google.android.gms.internal.zzeit, param1: com.google.android.gms.internal.zzedu, param2: com.google.android.gms.internal.zzeid);
						public zzcet(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejc.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeip {
						public zzb(param0: com.google.android.gms.internal.zzegn, param1: com.google.android.gms.internal.zzejc): void;
						public zzb(param0: iogrpczzcq): void;
						public zzbsc(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeiq {
						public zzc(param0: com.google.android.gms.internal.zzegn, param1: javautilList): void;
						public zzcey(): void;
						public zzb(param0: iogrpczzcq): void;
						public zzbsc(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeir {
						public static zznbm: com.google.android.gms.internal.zzeir;
						public static zznbn: com.google.android.gms.internal.zzeir;
						public static zznbo: com.google.android.gms.internal.zzeir;
						public static values(): native.Array<com.google.android.gms.internal.zzeir>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeir.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeis {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeis interface with the provided implementation.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.internal.zzeir): void;
						});
						public zza(param0: com.google.android.gms.internal.zzeir): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeil.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeit {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeit interface with the provided implementation.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.internal.zzeil): void;
							zza(param0: number, param1: iogrpczzcq): void;
							zza(param0: com.google.android.gms.internal.zzegw): void;
							zzb(param0: number, param1: iogrpczzcq): void;
						});
						public zza(param0: number, param1: iogrpczzcq): void;
						public zzb(param0: number, param1: iogrpczzcq): void;
						public zza(param0: com.google.android.gms.internal.zzeil): void;
						public zza(param0: com.google.android.gms.internal.zzegw): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeiu {
						public static zznbq: com.google.android.gms.internal.zzeiu;
						public static zznbr: com.google.android.gms.internal.zzeiu;
						public static zznbs: com.google.android.gms.internal.zzeiu;
						public static zznbt: com.google.android.gms.internal.zzeiu;
						public static zznbu: com.google.android.gms.internal.zzeiu;
						public static zznbv: com.google.android.gms.internal.zzeiu;
						public static values(): native.Array<com.google.android.gms.internal.zzeiu>;
					}
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeiv {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeiv interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzbsc(): void;
							zzb(param0: iogrpczzcq): void;
						});
						public zzb(param0: iogrpczzcq): void;
						public zzbsc(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeix.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeiy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeiw {
						public zza(param0: com.google.android.gms.internal.zzeiy): void;
						public zzcez(): com.google.android.gms.internal.zzeix;
						public zzcbe(): com.google.android.gms.internal.zzegn;
						public constructor(param0: com.google.android.gms.internal.zzegn);
						public constructor(param0: com.google.android.gms.internal.zzeiy, param1: com.google.android.gms.internal.zzegn, param2: com.google.android.gms.internal.zzeix);
						public zza(param0: com.google.android.gms.internal.zzeix): void;
						public zzcfa(): com.google.android.gms.internal.zzeiy;
						public zzcbf(): com.google.android.gms.internal.zzeuk;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeix {
						public static zznbz: com.google.android.gms.internal.zzeix;
						public static zznca: com.google.android.gms.internal.zzeix;
						public static zzncb: com.google.android.gms.internal.zzeix;
						public static values(): native.Array<com.google.android.gms.internal.zzeix>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzeiy {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeiz {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeja extends com.google.android.gms.internal.zzeiy {
						public constructor();
						public zzcfb(): com.google.android.gms.internal.zzdox;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzdox.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejb extends com.google.android.gms.internal.zzeiy {
						public zzcfc(): com.google.android.gms.internal.zzdox;
						public zzcfd(): com.google.android.gms.internal.zzdox;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zza(param0: com.google.android.gms.internal.zzdox): com.google.android.gms.internal.zzdox;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejc {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejd {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeje extends com.google.android.gms.internal.zzejc {
						public zzcfg(): com.google.android.gms.internal.zzegk;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public constructor(param0: javautilList, param1: javautilList, param2: com.google.android.gms.internal.zzegf, param3: com.google.android.gms.internal.zzegk);
						public zzcff(): javautilList;
						public zzcfh(): com.google.android.gms.internal.zzegf;
						public zzcfe(): javautilList;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeih.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejf extends com.google.android.gms.internal.zzejc {
						public zzcfi(): com.google.android.gms.internal.zzeih;
						public constructor(param0: number, param1: com.google.android.gms.internal.zzeih);
						public zzbzx(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzejh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejg extends com.google.android.gms.internal.zzejc {
						public constructor(param0: com.google.android.gms.internal.zzejh, param1: javautilList, param2: com.google.android.gms.internal.zzeuk, param3: iogrpczzcq);
						public zzcfk(): iogrpczzcq;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzcfj(): com.google.android.gms.internal.zzejh;
						public zzcbf(): com.google.android.gms.internal.zzeuk;
						public getTargetIds(): javautilList;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejh {
						public static zznco: com.google.android.gms.internal.zzejh;
						public static zzncp: com.google.android.gms.internal.zzejh;
						public static zzncq: com.google.android.gms.internal.zzejh;
						public static zzncr: com.google.android.gms.internal.zzejh;
						public static zzncs: com.google.android.gms.internal.zzejh;
						public static values(): native.Array<com.google.android.gms.internal.zzejh>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeil.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeji {
						public constructor(param0: com.google.android.gms.internal.zzegn, param1: javautilSet, param2: javautilMap);
						public zzcfn(): com.google.android.gms.internal.zzeil;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejj {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeer.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejk extends com.google.android.gms.internal.zzehy {
						public static zzncx: com.google.android.gms.internal.zzeuk;
						public zzg(param0: com.google.android.gms.internal.zzeer): void;
						public zzhi(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejc.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejl {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzejl interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzb(param0: com.google.android.gms.internal.zzegn, param1: com.google.android.gms.internal.zzejc): void;
							zzbsc(): void;
							zzb(param0: iogrpczzcq): void;
						});
						public zzb(param0: com.google.android.gms.internal.zzegn, param1: com.google.android.gms.internal.zzejc): void;
						public zzb(param0: iogrpczzcq): void;
						public zzbsc(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeiv.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejm extends com.google.android.gms.internal.zzehy {
						public static zzncy: com.google.android.gms.internal.zzeuk;
						public zzncz: boolean;
						public zza(param0: com.google.android.gms.internal.zzeiv): void;
						public zza(param0: com.google.android.gms.internal.zzejn): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegn.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejn {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzejn interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzcey(): void;
							zzc(param0: com.google.android.gms.internal.zzegn, param1: javautilList): void;
							zzbsc(): void;
							zzb(param0: iogrpczzcq): void;
						});
						public zzc(param0: com.google.android.gms.internal.zzegn, param1: javautilList): void;
						public zzcey(): void;
						public zzb(param0: iogrpczzcq): void;
						public zzbsc(): void;
					}
				}
			}
		}
	}
}

import javalangAssertionError = java.lang.AssertionError;
import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.AssertionError.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejo {
						public static zzd(param0: javalangThrowable, param1: string, param2: native.Array<javalangObject>): javalangAssertionError;
						public static zzc(param0: boolean, param1: string, param2: native.Array<javalangObject>): void;
						public static zzk(param0: string, param1: native.Array<javalangObject>): javalangAssertionError;
					}
				}
			}
		}
	}
}

import javautilconcurrentCallable = java.util.concurrent.Callable;
import javautilconcurrentScheduledFuture = java.util.concurrent.ScheduledFuture;
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledFuture.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejp {
						public static zza(param0: javautilconcurrentExecutor, param1: javautilconcurrentCallable): com.google.android.gms.tasks.Task;
						public zzcfp(): javautilconcurrentExecutor;
						public constructor();
						public enqueue(param0: javalangRunnable): void;
						public zza(param0: javalangRunnable, param1: number): javautilconcurrentScheduledFuture;
						public zzcfq(): void;
						public zzi(param0: javalangThrowable): void;
					}
					export module zzejp {
						export class zza {
							public newThread(param0: javalangRunnable): javalangThread;
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
					export class zzejq {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejr {
						public uncaughtException(param0: javalangThread, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejs {
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejt {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeju {
						public afterExecute(param0: javalangRunnable, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejv {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzejv interface with the provided implementation.
						 */
						public constructor(implementation: {
							accept(param0: javalangObject): void;
						});
						public accept(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejw {
						public static zzbp(param0: javalangObject): javalangObject;
						public static zza(param0: javalangObject, param1: javalangClass): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzejy.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejx {
						public zza(param0: javautilMap, param1: javautilMap, param2: com.google.android.gms.internal.zzejy): javalangObject;
						public zze(param0: javalangObject, param1: com.google.android.gms.internal.zzejy): javautilMap;
						public constructor(param0: javalangClass);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejy {
						public zzqv(param0: string): com.google.android.gms.internal.zzejy;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.EventListener.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzejz {
						public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
						public constructor(param0: javautilconcurrentExecutor, param1: com.google.firebase.firestore.EventListener);
						public zznf(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeka {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekb {
						public static zzndq: javautilconcurrentExecutor;
						public static zzdfn: javautilconcurrentExecutor;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekc {
						public execute(param0: javalangRunnable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzejp.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekd {
						public zzo(param0: javalangRunnable): void;
						public zzcfr(): void;
						public constructor(param0: com.google.android.gms.internal.zzejp, param1: number, param2: number, param3: number);
						public reset(): void;
					}
				}
			}
		}
	}
}

import iogrpczzi = io.grpc.zzi;
import iogrpczzh = io.grpc.zzh;
import iogrpczzj = io.grpc.zzj;
/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeki.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeke {
						public constructor(param0: com.google.android.gms.internal.zzejp, param1: iogrpczzi, param2: iogrpczzh, param3: com.google.android.gms.internal.zzegb);
						public zza(param0: iogrpczzbp, param1: javalangObject): com.google.android.gms.tasks.Task;
						public zza(param0: iogrpczzbp, param1: com.google.android.gms.internal.zzeki): iogrpczzj;
						public zzb(param0: iogrpczzbp, param1: javalangObject): com.google.android.gms.tasks.Task;
					}
				}
			}
		}
	}
}

import iogrpczzk = io.grpc.zzk;
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekf extends iogrpczzk {
						public onMessage(param0: javalangObject): void;
						public onHeaders(param0: iogrpczzbe): void;
						public onClose(param0: iogrpczzcq, param1: iogrpczzbe): void;
						public onReady(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekg extends iogrpczzk {
						public onMessage(param0: javalangObject): void;
						public onClose(param0: iogrpczzcq, param1: iogrpczzbe): void;
					}
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekh extends iogrpczzk {
						public onMessage(param0: javalangObject): void;
						public onClose(param0: iogrpczzcq, param1: iogrpczzbe): void;
					}
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeki {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeki interface with the provided implementation.
						 */
						public constructor(implementation: {
							onHeaders(param0: iogrpczzbe): void;
							zzbz(param0: javalangObject): void;
							onReady(): void;
							zzb(param0: iogrpczzcq): void;
						});
						public zzbz(param0: javalangObject): void;
						public onHeaders(param0: iogrpczzbe): void;
						public zzb(param0: iogrpczzcq): void;
						public onReady(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekj {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzekj interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzbx(param0: javalangObject): void;
						});
						public zzbx(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeca.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzecq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzejz.d.ts" />
/// <reference path="./com.google.firebase.firestore.ListenerRegistration.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekk {
						public constructor(param0: com.google.android.gms.internal.zzeca, param1: com.google.android.gms.internal.zzecq, param2: androidappActivity, param3: com.google.android.gms.internal.zzejz);
						public remove(): void;
					}
					export module zzekk {
						export class zza {
							public static zzs(param0: androidappActivity): com.google.android.gms.internal.zzekk.zza;
							public zza(param0: com.google.firebase.firestore.ListenerRegistration): void;
							public onStop(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekl {
						public static zzhj(param0: number): void;
						public static isDebugEnabled(): boolean;
						public static zzb(param0: string, param1: string, param2: native.Array<javalangObject>): void;
						public static zzc(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekm {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekn {
						public static zznej: number;
						public static zznek: number;
						public static zznel: number;
						public static values$50KLMJ33DTMIUPRFDTJMOP9FCPKN4PB2C5PMABR6D5P6ASRKDTP6ABRLEHKMOBQCDTJMEPBI4H66ATJ5DGTG____0(): native.Array<number>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeko {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzeko interface with the provided implementation.
						 */
						public constructor(implementation: {
							get(): javalangObject;
						});
						public get(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Continuation.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekp {
						public static zzt(param0: number, param1: number): number;
						public static zzcfu(): com.google.android.gms.tasks.Continuation;
						public static zzi(param0: number, param1: number): number;
						public static zzf(param0: number, param1: number): number;
						public static zzag(param0: com.google.android.gms.internal.zzeuk): string;
						public static zza(param0: number, param1: number): number;
						public static zzf(param0: iogrpczzcq): com.google.firebase.firestore.FirebaseFirestoreException;
						public static zzca(param0: javalangObject): string;
						public static comparator(): javautilComparator;
						public static zza(param0: number, param1: javalangObject, param2: javalangObject, param3: native.Array<javalangObject>): javautilList;
						public static zzcft(): string;
						public static zze(param0: boolean, param1: boolean): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekq {
						public then(param0: com.google.android.gms.tasks.Task): javalangObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzekr {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenc {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzciz(): number;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhw(param0: number): com.google.android.gms.internal.zzeqf;
						public static zzcja(): com.google.android.gms.internal.zzenc.zza;
						public zzhi(): number;
						public static zzcjb(): com.google.android.gms.internal.zzenc;
					}
					export module zzenc {
						export class zza {
							public zzc(param0: com.google.android.gms.internal.zzeqf): com.google.android.gms.internal.zzenc.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzend {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzene {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzcje(): com.google.android.gms.internal.zzene;
						public static zzcjd(): com.google.android.gms.internal.zzene.zza;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
					}
					export module zzene {
						export class zza {
							public zzsh(param0: string): com.google.android.gms.internal.zzene.zza;
							public zzsg(param0: string): com.google.android.gms.internal.zzene.zza;
						}
						export class zzb {
							public static zznsd: com.google.android.gms.internal.zzene.zzb;
							public static zznse: com.google.android.gms.internal.zzene.zzb;
							public static zznsf: com.google.android.gms.internal.zzene.zzb;
							public static zznsg: com.google.android.gms.internal.zzene.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzene.zzb>;
							public static zzhx(param0: number): com.google.android.gms.internal.zzene.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenf {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzenw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeng {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcjg(): com.google.android.gms.internal.zzeng.zzb;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcdn(): com.google.android.gms.internal.zzexi;
						public zzcjh(): com.google.android.gms.internal.zzenw;
						public zzhi(): number;
						public static zzcjj(): com.google.android.gms.internal.zzeng;
						public zzcji(): string;
					}
					export module zzeng {
						export class zza {
						}
						export class zzb {
							public static zznsn: com.google.android.gms.internal.zzeng.zzb;
							public static zznso: com.google.android.gms.internal.zzeng.zzb;
							public static zznsp: com.google.android.gms.internal.zzeng.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzeng.zzb>;
							public zzhk(): number;
							public static zzhy(param0: number): com.google.android.gms.internal.zzeng.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenh {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeni {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcjl(): com.google.android.gms.internal.zzeni;
						public zzhi(): number;
					}
					export module zzeni {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenj {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenk {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcjn(): com.google.android.gms.internal.zzenk;
						public zzhi(): number;
					}
					export module zzenk {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenl {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenm {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcjq(): com.google.android.gms.internal.zzenm;
						public zzhi(): number;
						public static zzcjp(): com.google.android.gms.internal.zzenm.zza;
					}
					export module zzenm {
						export class zza {
							public zzsi(param0: string): com.google.android.gms.internal.zzenm.zza;
							public zzd(param0: com.google.android.gms.internal.zzeqh): com.google.android.gms.internal.zzenm.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenn {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeno {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcjs(): number;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcju(): com.google.android.gms.internal.zzeno;
						public zzcjt(): com.google.android.gms.internal.zzexi;
						public zzhi(): number;
						public zzhz(param0: number): com.google.android.gms.internal.zzeqn;
					}
					export module zzeno {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenp {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenq {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcjw(): com.google.android.gms.internal.zzenq;
						public zzhi(): number;
					}
					export module zzenq {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenr {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzens {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzciz(): number;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcka(): com.google.android.gms.internal.zzens;
						public zzhw(param0: number): com.google.android.gms.internal.zzeqf;
						public static zzcjz(): com.google.android.gms.internal.zzens.zza;
						public zzhi(): number;
						public zzcjy(): boolean;
					}
					export module zzens {
						export class zza {
							public zzcs(param0: boolean): com.google.android.gms.internal.zzens.zza;
							public zzd(param0: com.google.android.gms.internal.zzeqf): com.google.android.gms.internal.zzens.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzent {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenu {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzckc(): com.google.android.gms.internal.zzenu;
						public zzhi(): number;
					}
					export module zzenu {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenv {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenw {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcke(): javautilMap;
						public static zzcki(): com.google.android.gms.internal.zzenw;
						public zzckg(): com.google.android.gms.internal.zzexi;
						public static zzckh(): com.google.android.gms.internal.zzenw.zza;
						public zzhi(): number;
						public getName(): string;
					}
					export module zzenw {
						export class zza {
							public zzj(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzenw.zza;
							public zzsj(param0: string): com.google.android.gms.internal.zzenw.zza;
							public zza(param0: string, param1: com.google.android.gms.internal.zzeqf): com.google.android.gms.internal.zzenw.zza;
						}
						export class zzb {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenx {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzenw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeny {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzckl(): javautilList;
						public zzcdk(): com.google.android.gms.internal.zzenw;
						public zzhi(): number;
						public zzckk(): javautilList;
						public static zzckm(): com.google.android.gms.internal.zzeny;
					}
					export module zzeny {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzenz {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoa {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzckp(): com.google.android.gms.internal.zzeoa;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcdn(): com.google.android.gms.internal.zzexi;
						public zzcko(): string;
						public zzckl(): javautilList;
						public zzhi(): number;
					}
					export module zzeoa {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeob {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoc {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcks(): com.google.android.gms.internal.zzeoc.zza;
						public static zzckt(): com.google.android.gms.internal.zzeoc;
						public zzia(param0: number): string;
						public zzhi(): number;
						public zzckr(): number;
					}
					export module zzeoc {
						export class zza {
							public zzsl(param0: string): com.google.android.gms.internal.zzeoc.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeod {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoe {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcko(): string;
						public zzckl(): javautilList;
						public zzhi(): number;
						public static zzckv(): com.google.android.gms.internal.zzeoe;
					}
					export module zzeoe {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeof {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeog {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcko(): string;
						public zzckx(): javautilList;
						public zzhi(): number;
						public static zzckz(): com.google.android.gms.internal.zzeog;
						public static zzcky(): com.google.android.gms.internal.zzeog.zza;
					}
					export module zzeog {
						export class zza {
							public zzsn(param0: string): com.google.android.gms.internal.zzeog.zza;
							public zzb(param0: com.google.android.gms.internal.zzeog.zzb): com.google.android.gms.internal.zzeog.zza;
						}
						export class zzb {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public static zzcld(): com.google.android.gms.internal.zzeog.zzb.zza;
							public zzclc(): com.google.android.gms.internal.zzeog.zzb.zzb;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzclb(): string;
							public static zzcle(): com.google.android.gms.internal.zzeog.zzb;
						}
						export module zzb {
							export class zza {
								public zzb(param0: com.google.android.gms.internal.zzeog.zzb.zzb): com.google.android.gms.internal.zzeog.zzb.zza;
								public zzsp(param0: string): com.google.android.gms.internal.zzeog.zzb.zza;
							}
							export class zzb {
								public static zznud: com.google.android.gms.internal.zzeog.zzb.zzb;
								public static zznue: com.google.android.gms.internal.zzeog.zzb.zzb;
								public static zznuf: com.google.android.gms.internal.zzeog.zzb.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzeog.zzb.zzb>;
								public static zzib(param0: number): com.google.android.gms.internal.zzeog.zzb.zzb;
								public zzhk(): number;
							}
							export class zzc {
								public static zznuh: com.google.android.gms.internal.zzeog.zzb.zzc;
								public static zznui: com.google.android.gms.internal.zzeog.zzb.zzc;
								public static zznuj: com.google.android.gms.internal.zzeog.zzb.zzc;
								public static zznuk: com.google.android.gms.internal.zzeog.zzb.zzc;
								public static zznul: com.google.android.gms.internal.zzeog.zzb.zzc;
								public static values(): native.Array<com.google.android.gms.internal.zzeog.zzb.zzc>;
								public static zzic(param0: number): com.google.android.gms.internal.zzeog.zzb.zzc;
								public zzhk(): number;
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
					export class zzeoh {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoi {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoj {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzclg(): com.google.android.gms.internal.zzeoj;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public getCount(): number;
						public zzhi(): number;
						public zzbzx(): number;
					}
					export module zzeoj {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeok {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeon.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeol {
						public static zznuv: iogrpczzbp;
						public static zznux: iogrpczzbp;
						public static zznva: iogrpczzbp;
						public static zznvb: iogrpczzbp;
						public static zza(param0: iogrpczzi): com.google.android.gms.internal.zzeon;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeom {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeon extends com.google.android.gms.internal.zzfaw {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoo {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcli(): com.google.android.gms.internal.zzeoo;
						public zzhi(): number;
					}
					export module zzeoo {
						export class zza {
						}
						export class zzb {
							public static zznvf: com.google.android.gms.internal.zzeoo.zzb;
							public static zznvg: com.google.android.gms.internal.zzeoo.zzb;
							public static zznvh: com.google.android.gms.internal.zzeoo.zzb;
							public zzhk(): number;
							public static zzid(param0: number): com.google.android.gms.internal.zzeoo.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzeoo.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeop {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoq {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
						public static zzclk(): com.google.android.gms.internal.zzeoq;
					}
					export module zzeoq {
						export class zza {
						}
						export class zzb {
							public static zznvp: com.google.android.gms.internal.zzeoq.zzb;
							public static zznvq: com.google.android.gms.internal.zzeoq.zzb;
							public static zznvr: com.google.android.gms.internal.zzeoq.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzeoq.zzb>;
							public static zzie(param0: number): com.google.android.gms.internal.zzeoq.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeor {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeos {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzclm(): com.google.android.gms.internal.zzeos;
						public zzhi(): number;
					}
					export module zzeos {
						export class zza {
						}
						export class zzb {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeot {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeou {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzclo(): com.google.android.gms.internal.zzeou;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
					}
					export module zzeou {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeov {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeow {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzclq(): com.google.android.gms.internal.zzeow;
						public zzhi(): number;
					}
					export module zzeow {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeox {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoy {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
						public static zzcls(): com.google.android.gms.internal.zzeoy;
					}
					export module zzeoy {
						export class zza {
						}
						export class zzb {
							public static zznwa: com.google.android.gms.internal.zzeoy.zzb;
							public static zznwb: com.google.android.gms.internal.zzeoy.zzb;
							public static zznwc: com.google.android.gms.internal.zzeoy.zzb;
							public static zzif(param0: number): com.google.android.gms.internal.zzeoy.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzeoy.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeoz {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepa {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzclu(): com.google.android.gms.internal.zzepa;
						public zzhi(): number;
					}
					export module zzepa {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepb {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzepw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepc {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzcly(): com.google.android.gms.internal.zzepc;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
						public static zzclx(): com.google.android.gms.internal.zzepc.zza;
					}
					export module zzepc {
						export class zza {
							public zzam(param0: javautilMap): com.google.android.gms.internal.zzepc.zza;
							public zzsq(param0: string): com.google.android.gms.internal.zzepc.zza;
							public zzih(param0: number): com.google.android.gms.internal.zzepc.zza;
							public zzb(param0: com.google.android.gms.internal.zzepw): com.google.android.gms.internal.zzepc.zza;
						}
						export class zzb {
						}
						export class zzc {
							public static zznwk: com.google.android.gms.internal.zzepc.zzc;
							public static zznwl: com.google.android.gms.internal.zzepc.zzc;
							public static zznwm: com.google.android.gms.internal.zzepc.zzc;
							public static values(): native.Array<com.google.android.gms.internal.zzepc.zzc>;
							public zzhk(): number;
							public static zzii(param0: number): com.google.android.gms.internal.zzepc.zzc;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepd {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeny.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeoa.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeoe.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeoj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzepy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepe {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcmb(): com.google.android.gms.internal.zzepy;
						public zzcmc(): com.google.android.gms.internal.zzeny;
						public zzcmf(): com.google.android.gms.internal.zzeoj;
						public zzcme(): com.google.android.gms.internal.zzeoe;
						public zzcmd(): com.google.android.gms.internal.zzeoa;
						public zzcma(): com.google.android.gms.internal.zzepe.zzb;
						public static zzcmg(): com.google.android.gms.internal.zzepe;
						public zzhi(): number;
					}
					export module zzepe {
						export class zza {
						}
						export class zzb {
							public static zznwr: com.google.android.gms.internal.zzepe.zzb;
							public static zznws: com.google.android.gms.internal.zzepe.zzb;
							public static zznwt: com.google.android.gms.internal.zzepe.zzb;
							public static zznwu: com.google.android.gms.internal.zzepe.zzb;
							public static zznwv: com.google.android.gms.internal.zzepe.zzb;
							public static zznww: com.google.android.gms.internal.zzepe.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepe.zzb>;
							public static zzij(param0: number): com.google.android.gms.internal.zzepe.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepf {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepg {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcmj(): com.google.android.gms.internal.zzepg;
						public zzcke(): javautilMap;
						public static zzcmi(): com.google.android.gms.internal.zzepg.zza;
						public zzhi(): number;
					}
					export module zzepg {
						export class zza {
							public zzb(param0: string, param1: com.google.android.gms.internal.zzeqf): com.google.android.gms.internal.zzepg.zza;
						}
						export class zzb {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeph {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepi {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzcmo(): com.google.android.gms.internal.zzepi;
						public static zzcmn(): com.google.android.gms.internal.zzepi.zza;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzckg(): com.google.android.gms.internal.zzexi;
						public zzcmm(): boolean;
						public zzhi(): number;
						public zzcml(): com.google.android.gms.internal.zzepi.zzb;
					}
					export module zzepi {
						export class zza {
							public zzcu(param0: boolean): com.google.android.gms.internal.zzepi.zza;
							public zzk(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzepi.zza;
						}
						export class zzb {
							public static zznxc: com.google.android.gms.internal.zzepi.zzb;
							public static zznxd: com.google.android.gms.internal.zzepi.zzb;
							public static zznxe: com.google.android.gms.internal.zzepi.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzepi.zzb>;
							public zzhk(): number;
							public static zzik(param0: number): com.google.android.gms.internal.zzepi.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepj {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepk {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
						public static zzcmq(): com.google.android.gms.internal.zzepk;
					}
					export module zzepk {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepl {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepm {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
						public static zzcms(): com.google.android.gms.internal.zzepm;
					}
					export module zzepm {
						export class zza {
						}
						export class zzb {
							public static zznxm: com.google.android.gms.internal.zzepm.zzb;
							public static zznxn: com.google.android.gms.internal.zzepm.zzb;
							public static zznxo: com.google.android.gms.internal.zzepm.zzb;
							public static zznxp: com.google.android.gms.internal.zzepm.zzb;
							public static zzil(param0: number): com.google.android.gms.internal.zzepm.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepm.zzb>;
						}
						export class zzc {
							public static zznxr: com.google.android.gms.internal.zzepm.zzc;
							public static zznxs: com.google.android.gms.internal.zzepm.zzc;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepm.zzc>;
							public static zzim(param0: number): com.google.android.gms.internal.zzepm.zzc;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepn {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepo {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcmu(): com.google.android.gms.internal.zzepo;
						public zzhi(): number;
					}
					export module zzepo {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepp {
					}
				}
			}
		}
	}
}

import javalangIterable = java.lang.Iterable;
/// <reference path="./com.google.android.gms.internal.zzens.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzevr.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepq {
						public static zzcnf(): com.google.android.gms.internal.zzepq.zza;
						public zzcmw(): number;
						public zzhi(): number;
						public zzin(param0: number): com.google.android.gms.internal.zzepq.zzb;
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcne(): com.google.android.gms.internal.zzevr;
						public zzcnc(): boolean;
						public zzcmy(): com.google.android.gms.internal.zzepq.zzg;
						public zzio(param0: number): com.google.android.gms.internal.zzepq.zzh;
						public zzcnb(): com.google.android.gms.internal.zzens;
						public zzcmz(): number;
						public zzbvo(): boolean;
						public zzcmx(): boolean;
						public zzcna(): boolean;
						public static zzcng(): com.google.android.gms.internal.zzepq;
						public zzcnd(): com.google.android.gms.internal.zzens;
					}
					export module zzepq {
						export class zza {
							public zzb(param0: com.google.android.gms.internal.zzepq.zzh): com.google.android.gms.internal.zzepq.zza;
							public zze(param0: com.google.android.gms.internal.zzens): com.google.android.gms.internal.zzepq.zza;
							public zzb(param0: com.google.android.gms.internal.zzepq.zzb.zza): com.google.android.gms.internal.zzepq.zza;
							public zzb(param0: com.google.android.gms.internal.zzevr.zza): com.google.android.gms.internal.zzepq.zza;
							public zzb(param0: com.google.android.gms.internal.zzepq.zzg): com.google.android.gms.internal.zzepq.zza;
							public zzd(param0: com.google.android.gms.internal.zzens): com.google.android.gms.internal.zzepq.zza;
						}
						export class zzb {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public zzcni(): string;
							public static zzcnk(): com.google.android.gms.internal.zzepq.zzb;
							public static zzcnj(): com.google.android.gms.internal.zzepq.zzb.zza;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						}
						export module zzb {
							export class zza {
								public zzss(param0: string): com.google.android.gms.internal.zzepq.zzb.zza;
							}
						}
						export class zzc {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public static zzcno(): com.google.android.gms.internal.zzepq.zzc.zza;
							public zzhi(): number;
							public zzcnn(): javautilList;
							public static zzcnp(): com.google.android.gms.internal.zzepq.zzc;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzcnm(): com.google.android.gms.internal.zzepq.zzc.zzb;
						}
						export module zzc {
							export class zza {
								public zze(param0: javalangIterable): com.google.android.gms.internal.zzepq.zzc.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zzc.zzb): com.google.android.gms.internal.zzepq.zzc.zza;
							}
							export class zzb {
								public static zznyl: com.google.android.gms.internal.zzepq.zzc.zzb;
								public static zznym: com.google.android.gms.internal.zzepq.zzc.zzb;
								public static zznyn: com.google.android.gms.internal.zzepq.zzc.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzepq.zzc.zzb>;
								public static zzip(param0: number): com.google.android.gms.internal.zzepq.zzc.zzb;
								public zzhk(): number;
							}
						}
						export class zzd {
							public static zznyp: com.google.android.gms.internal.zzepq.zzd;
							public static zznyq: com.google.android.gms.internal.zzepq.zzd;
							public static zznyr: com.google.android.gms.internal.zzepq.zzd;
							public static zznys: com.google.android.gms.internal.zzepq.zzd;
							public zzhk(): number;
							public static zziq(param0: number): com.google.android.gms.internal.zzepq.zzd;
							public static values(): native.Array<com.google.android.gms.internal.zzepq.zzd>;
						}
						export class zze {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public static zzcnv(): com.google.android.gms.internal.zzepq.zze;
							public zzcnr(): com.google.android.gms.internal.zzepq.zzf;
							public zzhi(): number;
							public zzcnt(): com.google.android.gms.internal.zzeqf;
							public static zzcnu(): com.google.android.gms.internal.zzepq.zze.zza;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzcns(): com.google.android.gms.internal.zzepq.zze.zzb;
						}
						export module zze {
							export class zza {
								public zzf(param0: com.google.android.gms.internal.zzeqf): com.google.android.gms.internal.zzepq.zze.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zzf): com.google.android.gms.internal.zzepq.zze.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zze.zzb): com.google.android.gms.internal.zzepq.zze.zza;
							}
							export class zzb {
								public static zznyx: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznyy: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznyz: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznza: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznzb: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznzc: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zznzd: com.google.android.gms.internal.zzepq.zze.zzb;
								public static zzir(param0: number): com.google.android.gms.internal.zzepq.zze.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzepq.zze.zzb>;
								public zzhk(): number;
							}
						}
						export class zzf {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public static zzcnx(): com.google.android.gms.internal.zzepq.zzf.zza;
							public zzhi(): number;
							public static zzcny(): com.google.android.gms.internal.zzepq.zzf;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzclb(): string;
						}
						export module zzf {
							export class zza {
								public zzst(param0: string): com.google.android.gms.internal.zzepq.zzf.zza;
							}
						}
						export class zzg {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzcob(): com.google.android.gms.internal.zzepq.zzc;
							public zzcoc(): com.google.android.gms.internal.zzepq.zze;
							public zzhi(): number;
							public static zzcoe(): com.google.android.gms.internal.zzepq.zzg.zza;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzcoa(): com.google.android.gms.internal.zzepq.zzg.zzb;
							public zzcod(): com.google.android.gms.internal.zzepq.zzj;
							public static zzcof(): com.google.android.gms.internal.zzepq.zzg;
						}
						export module zzg {
							export class zza {
								public zzb(param0: com.google.android.gms.internal.zzepq.zzc.zza): com.google.android.gms.internal.zzepq.zzg.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zzj.zza): com.google.android.gms.internal.zzepq.zzg.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zze.zza): com.google.android.gms.internal.zzepq.zzg.zza;
							}
							export class zzb {
								public static zznzj: com.google.android.gms.internal.zzepq.zzg.zzb;
								public static zznzk: com.google.android.gms.internal.zzepq.zzg.zzb;
								public static zznzl: com.google.android.gms.internal.zzepq.zzg.zzb;
								public static zznzm: com.google.android.gms.internal.zzepq.zzg.zzb;
								public static zzis(param0: number): com.google.android.gms.internal.zzepq.zzg.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzepq.zzg.zzb>;
								public zzhk(): number;
							}
						}
						export class zzh {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public static zzcoj(): com.google.android.gms.internal.zzepq.zzh;
							public zzcnr(): com.google.android.gms.internal.zzepq.zzf;
							public zzhi(): number;
							public zzcoh(): com.google.android.gms.internal.zzepq.zzd;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public static zzcoi(): com.google.android.gms.internal.zzepq.zzh.zza;
						}
						export module zzh {
							export class zza {
								public zzc(param0: com.google.android.gms.internal.zzepq.zzf): com.google.android.gms.internal.zzepq.zzh.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zzd): com.google.android.gms.internal.zzepq.zzh.zza;
							}
						}
						export class zzi {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public static zzcol(): com.google.android.gms.internal.zzepq.zzi;
						}
						export module zzi {
							export class zza {
							}
						}
						export class zzj {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzcnr(): com.google.android.gms.internal.zzepq.zzf;
							public zzhi(): number;
							public zzcon(): com.google.android.gms.internal.zzepq.zzj.zzc;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public static zzcop(): com.google.android.gms.internal.zzepq.zzj;
							public static zzcoo(): com.google.android.gms.internal.zzepq.zzj.zza;
						}
						export module zzj {
							export class zza {
								public zzd(param0: com.google.android.gms.internal.zzepq.zzf): com.google.android.gms.internal.zzepq.zzj.zza;
								public zzb(param0: com.google.android.gms.internal.zzepq.zzj.zzc): com.google.android.gms.internal.zzepq.zzj.zza;
							}
							export class zzb {
								public static zznzv: com.google.android.gms.internal.zzepq.zzj.zzb;
								public static zznzw: com.google.android.gms.internal.zzepq.zzj.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzepq.zzj.zzb>;
								public static zzit(param0: number): com.google.android.gms.internal.zzepq.zzj.zzb;
								public zzhk(): number;
							}
							export class zzc {
								public static zznzy: com.google.android.gms.internal.zzepq.zzj.zzc;
								public static zznzz: com.google.android.gms.internal.zzepq.zzj.zzc;
								public static zzoaa: com.google.android.gms.internal.zzepq.zzj.zzc;
								public static zzoab: com.google.android.gms.internal.zzepq.zzj.zzc;
								public static values(): native.Array<com.google.android.gms.internal.zzepq.zzj.zzc>;
								public zzhk(): number;
								public static zziu(param0: number): com.google.android.gms.internal.zzepq.zzj.zzc;
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
					export class zzepr {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeps {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzept {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepu {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepv {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzepq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepw {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcor(): com.google.android.gms.internal.zzepw.zza;
						public zzhi(): number;
						public static zzcos(): com.google.android.gms.internal.zzepw;
					}
					export module zzepw {
						export class zza {
							public zzd(param0: com.google.android.gms.internal.zzepw.zzc): com.google.android.gms.internal.zzepw.zza;
							public zzah(param0: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzepw.zza;
							public zziv(param0: number): com.google.android.gms.internal.zzepw.zza;
							public zzd(param0: com.google.android.gms.internal.zzepw.zzb): com.google.android.gms.internal.zzepw.zza;
						}
						export class zzb {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public static zzcow(): com.google.android.gms.internal.zzepw.zzb;
							public static zzcov(): com.google.android.gms.internal.zzepw.zzb.zza;
							public zzcou(): number;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zziw(param0: number): string;
						}
						export module zzb {
							export class zza {
								public zzsu(param0: string): com.google.android.gms.internal.zzepw.zzb.zza;
							}
						}
						export class zzc {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public getParent(): string;
							public zzhi(): number;
							public static zzcoz(): com.google.android.gms.internal.zzepw.zzc.zza;
							public static zzcpa(): com.google.android.gms.internal.zzepw.zzc;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
							public zzcoy(): com.google.android.gms.internal.zzepq;
						}
						export module zzc {
							export class zza {
								public zzb(param0: com.google.android.gms.internal.zzepq.zza): com.google.android.gms.internal.zzepw.zzc.zza;
								public zzsw(param0: string): com.google.android.gms.internal.zzepw.zzc.zza;
							}
							export class zzb {
								public static zzoam: com.google.android.gms.internal.zzepw.zzc.zzb;
								public static zzoan: com.google.android.gms.internal.zzepw.zzc.zzb;
								public static zzix(param0: number): com.google.android.gms.internal.zzepw.zzc.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzepw.zzc.zzb>;
								public zzhk(): number;
							}
						}
						export class zzd {
							public static zzoap: com.google.android.gms.internal.zzepw.zzd;
							public static zzoaq: com.google.android.gms.internal.zzepw.zzd;
							public static zzoar: com.google.android.gms.internal.zzepw.zzd;
							public static zziy(param0: number): com.google.android.gms.internal.zzepw.zzd;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepw.zzd>;
						}
						export class zze {
							public static zzoat: com.google.android.gms.internal.zzepw.zze;
							public static zzoau: com.google.android.gms.internal.zzepw.zze;
							public static zzoav: com.google.android.gms.internal.zzepw.zze;
							public static zziz(param0: number): com.google.android.gms.internal.zzepw.zze;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepw.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepx {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzezb.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepy {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcpc(): com.google.android.gms.internal.zzepy.zzb;
						public static zzcpf(): com.google.android.gms.internal.zzepy;
						public zzcdn(): com.google.android.gms.internal.zzexi;
						public zzcpd(): number;
						public zzcpe(): com.google.android.gms.internal.zzezb;
						public zzcbf(): com.google.android.gms.internal.zzeuk;
						public zzhi(): number;
						public zzckk(): javautilList;
					}
					export module zzepy {
						export class zza {
						}
						export class zzb {
							public static zzoba: com.google.android.gms.internal.zzepy.zzb;
							public static zzobb: com.google.android.gms.internal.zzepy.zzb;
							public static zzobc: com.google.android.gms.internal.zzepy.zzb;
							public static zzobd: com.google.android.gms.internal.zzepy.zzb;
							public static zzobe: com.google.android.gms.internal.zzepy.zzb;
							public static zzobf: com.google.android.gms.internal.zzepy.zzb;
							public zzhk(): number;
							public static values(): native.Array<com.google.android.gms.internal.zzepy.zzb>;
							public static zzja(param0: number): com.google.android.gms.internal.zzepy.zzb;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzepz {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqa {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqb {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcph(): com.google.android.gms.internal.zzeqb;
						public zzhi(): number;
					}
					export module zzeqb {
						export class zza {
						}
						export class zzb {
							public static zzobm: com.google.android.gms.internal.zzeqb.zzb;
							public static zzobn: com.google.android.gms.internal.zzeqb.zzb;
							public static zzobo: com.google.android.gms.internal.zzeqb.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzeqb.zzb>;
							public zzhk(): number;
							public static zzjb(param0: number): com.google.android.gms.internal.zzeqb.zzb;
						}
						export class zzc {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public static zzcpj(): com.google.android.gms.internal.zzeqb.zzc;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						}
						export module zzc {
							export class zza {
							}
							export class zzb {
								public static zzobr: com.google.android.gms.internal.zzeqb.zzc.zzb;
								public static zzobs: com.google.android.gms.internal.zzeqb.zzc.zzb;
								public static values(): native.Array<com.google.android.gms.internal.zzeqb.zzc.zzb>;
								public static zzjc(param0: number): com.google.android.gms.internal.zzeqb.zzc.zzb;
								public zzhk(): number;
							}
						}
						export class zzd {
							public zza(param0: com.google.android.gms.internal.zzeuy): void;
							public zzhi(): number;
							public static zzcpl(): com.google.android.gms.internal.zzeqb.zzd;
							public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						}
						export module zzd {
							export class zza {
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
					export class zzeqc {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqd {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcpn(): com.google.android.gms.internal.zzeqd;
						public zzhi(): number;
					}
					export module zzeqd {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqe {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzenc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzepg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzezd.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqf {
						public zzcpp(): com.google.android.gms.internal.zzeqf.zzb;
						public static zzcpz(): com.google.android.gms.internal.zzeqf.zza;
						public zzcpt(): com.google.android.gms.internal.zzexi;
						public zzcps(): number;
						public zzhi(): number;
						public zzcpu(): com.google.android.gms.internal.zzeuk;
						public zzcpv(): string;
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcpq(): boolean;
						public zzcpx(): com.google.android.gms.internal.zzenc;
						public zzcpy(): com.google.android.gms.internal.zzepg;
						public zzcpr(): number;
						public getStringValue(): string;
						public static zzcqa(): com.google.android.gms.internal.zzeqf;
						public zzcpw(): com.google.android.gms.internal.zzezd;
					}
					export module zzeqf {
						export class zza {
							public zzaj(param0: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzeqf.zza;
							public zzje(param0: number): com.google.android.gms.internal.zzeqf.zza;
							public zzta(param0: string): com.google.android.gms.internal.zzeqf.zza;
							public zzc(param0: com.google.android.gms.internal.zzepg): com.google.android.gms.internal.zzeqf.zza;
							public zzcw(param0: boolean): com.google.android.gms.internal.zzeqf.zza;
							public zzsz(param0: string): com.google.android.gms.internal.zzeqf.zza;
							public zzb(param0: com.google.android.gms.internal.zzenc): com.google.android.gms.internal.zzeqf.zza;
							public zzb(param0: com.google.android.gms.internal.zzezd): com.google.android.gms.internal.zzeqf.zza;
							public zzcp(param0: number): com.google.android.gms.internal.zzeqf.zza;
							public zzm(param0: com.google.android.gms.internal.zzexi): com.google.android.gms.internal.zzeqf.zza;
							public zzl(param0: number): com.google.android.gms.internal.zzeqf.zza;
						}
						export class zzb {
							public static zzocb: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocc: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocd: com.google.android.gms.internal.zzeqf.zzb;
							public static zzoce: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocf: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocg: com.google.android.gms.internal.zzeqf.zzb;
							public static zzoch: com.google.android.gms.internal.zzeqf.zzb;
							public static zzoci: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocj: com.google.android.gms.internal.zzeqf.zzb;
							public static zzock: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocl: com.google.android.gms.internal.zzeqf.zzb;
							public static zzocm: com.google.android.gms.internal.zzeqf.zzb;
							public zzhk(): number;
							public static zzjf(param0: number): com.google.android.gms.internal.zzeqf.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzeqf.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqg {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzenw.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeoc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeog.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzepi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqh {
						public static zzcqk(): com.google.android.gms.internal.zzeqh.zza;
						public zzcqi(): boolean;
						public zzhi(): number;
						public zzcqf(): com.google.android.gms.internal.zzeog;
						public zzcqg(): boolean;
						public zzcqc(): com.google.android.gms.internal.zzeqh.zzb;
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcqh(): com.google.android.gms.internal.zzeoc;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcqe(): string;
						public static zzcql(): com.google.android.gms.internal.zzeqh;
						public zzcqj(): com.google.android.gms.internal.zzepi;
						public zzcqd(): com.google.android.gms.internal.zzenw;
					}
					export module zzeqh {
						export class zza {
							public zzc(param0: com.google.android.gms.internal.zzeoc): com.google.android.gms.internal.zzeqh.zza;
							public zze(param0: com.google.android.gms.internal.zzenw): com.google.android.gms.internal.zzeqh.zza;
							public zzb(param0: com.google.android.gms.internal.zzeog.zza): com.google.android.gms.internal.zzeqh.zza;
							public zztc(param0: string): com.google.android.gms.internal.zzeqh.zza;
							public zzb(param0: com.google.android.gms.internal.zzepi): com.google.android.gms.internal.zzeqh.zza;
						}
						export class zzb {
							public static zzocr: com.google.android.gms.internal.zzeqh.zzb;
							public static zzocs: com.google.android.gms.internal.zzeqh.zzb;
							public static zzoct: com.google.android.gms.internal.zzeqh.zzb;
							public static zzocu: com.google.android.gms.internal.zzeqh.zzb;
							public static zzocv: com.google.android.gms.internal.zzeqh.zzb;
							public static values(): native.Array<com.google.android.gms.internal.zzeqh.zzb>;
							public static zzjg(param0: number): com.google.android.gms.internal.zzeqh.zzb;
							public zzhk(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqi {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqh.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqj {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcqn(): com.google.android.gms.internal.zzeqj.zza;
						public zzhi(): number;
						public static zzcqo(): com.google.android.gms.internal.zzeqj;
					}
					export module zzeqj {
						export class zza {
							public zzal(param0: com.google.android.gms.internal.zzeuk): com.google.android.gms.internal.zzeqj.zza;
							public zze(param0: com.google.android.gms.internal.zzeqh): com.google.android.gms.internal.zzeqj.zza;
							public zztd(param0: string): com.google.android.gms.internal.zzeqj.zza;
						}
						export class zzb {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqk {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeql {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zzcjs(): number;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzccr(): com.google.android.gms.internal.zzeuk;
						public static zzcqq(): com.google.android.gms.internal.zzeql;
						public zzcjt(): com.google.android.gms.internal.zzexi;
						public zzhi(): number;
						public zzhz(param0: number): com.google.android.gms.internal.zzeqn;
					}
					export module zzeql {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqm {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeqf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzexi.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqn {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzcqs(): number;
						public static zzcqt(): com.google.android.gms.internal.zzeqn;
						public zzckg(): com.google.android.gms.internal.zzexi;
						public zzhi(): number;
						public zzjh(param0: number): com.google.android.gms.internal.zzeqf;
					}
					export module zzeqn {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqo {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqp {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public static zzf(param0: number, param1: number): com.google.android.gms.internal.zzeqp;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javalangClassLoader = java.lang.ClassLoader;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqq {
						public static zza(param0: javalangClass, param1: javalangClass): javalangObject;
						public static zzo(param0: string, param1: javalangObject): javalangObject;
						public constructor();
						public static zzh(param0: javalangClass): javalangClassLoader;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqr {
						public static sanitize(param0: string): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqs extends com.google.android.gms.internal.zzerc {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public zzcqv(): javautilList;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqt extends com.google.android.gms.internal.zzere {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeri.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerj.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzequ extends com.google.android.gms.internal.zzerg {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public getDescription(): string;
						public zzcqy(): com.google.android.gms.internal.zzeri;
						public toString(): string;
						public zzcqx(): com.google.android.gms.internal.zzerj;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqv extends com.google.android.gms.internal.zzeri {
						public zzcqz(): number;
						public equals(param0: javalangObject): boolean;
						public zzcrb(): javautilList;
						public zzcra(): javautilList;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqw extends com.google.android.gms.internal.zzerj {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public asString(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqx extends com.google.android.gms.internal.zzeru {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public asString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqy extends com.google.android.gms.internal.zzerv {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public asString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzere.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerz.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeqz extends com.google.android.gms.internal.zzerx {
						public zzcrd(): com.google.android.gms.internal.zzerg;
						public zzcrf(): com.google.android.gms.internal.zzere;
						public equals(param0: javalangObject): boolean;
						public zzcrc(): com.google.android.gms.internal.zzerz;
						public hashCode(): number;
						public zzcre(): javautilList;
						public getDescription(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerz.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzera extends com.google.android.gms.internal.zzery {
						public zzcrd(): com.google.android.gms.internal.zzerg;
						public zzcrg(): com.google.android.gms.internal.zzerf;
						public equals(param0: javalangObject): boolean;
						public zzcrc(): com.google.android.gms.internal.zzerz;
						public hashCode(): number;
						public zzcre(): javautilList;
						public getDescription(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerb extends com.google.android.gms.internal.zzerz {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public asString(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerc {
						public constructor();
						public zzcqv(): javautilList;
					}
				}
			}
		}
	}
}

import iogrpczzyzze = io.grpc.zzy.zze;
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerd {
						public static zzodq: iogrpczzyzze;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzere {
						public constructor();
						public static zzbl(param0: javautilList): com.google.android.gms.internal.zzere;
						public static zzcrh(): com.google.android.gms.internal.zzere;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerf {
						public static zzbm(param0: javautilList): com.google.android.gms.internal.zzerf;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeri.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerj.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerg {
						public static zza(param0: string, param1: string, param2: com.google.android.gms.internal.zzeri): com.google.android.gms.internal.zzerg;
						public getDescription(): string;
						public zzcqy(): com.google.android.gms.internal.zzeri;
						public zzcqx(): com.google.android.gms.internal.zzerj;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerh {
						public static zzodt: com.google.android.gms.internal.zzerh;
						public static zzodv: com.google.android.gms.internal.zzerh;
						public static zzodw: com.google.android.gms.internal.zzerh;
						public static values(): native.Array<com.google.android.gms.internal.zzerh>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzeri {
						public zzcqz(): number;
						public zzcrb(): javautilList;
						public zzcra(): javautilList;
						public static zzb(param0: number, param1: javautilList): com.google.android.gms.internal.zzeri;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerj {
						public asString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerm.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerk {
						public iterator(): javautilIterator;
						public static zzcri(): com.google.android.gms.internal.zzerm;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerl {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerk.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerm {
						public zza(param0: com.google.android.gms.internal.zzerg, param1: number): com.google.android.gms.internal.zzerm;
						public zzcrj(): com.google.android.gms.internal.zzerk;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzern {
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzero {
						public zzcrk(): com.google.android.gms.internal.zzerg;
						public static zzb(param0: com.google.android.gms.internal.zzerg, param1: number): com.google.android.gms.internal.zzero;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerp {
						public static zzoei: com.google.android.gms.internal.zzerg;
						public static zzoej: com.google.android.gms.internal.zzerg;
						public static zzoek: com.google.android.gms.internal.zzerg;
						public static zzoel: com.google.android.gms.internal.zzerg;
						public static zzoen: com.google.android.gms.internal.zzerg;
						public static zzoeo: com.google.android.gms.internal.zzerg;
						public static zzoet: com.google.android.gms.internal.zzerg;
						public static zzoeu: com.google.android.gms.internal.zzerg;
						public static zzoev: com.google.android.gms.internal.zzerg;
						public static zzoex: com.google.android.gms.internal.zzerg;
						public static zzoey: com.google.android.gms.internal.zzerg;
						public static zzoez: com.google.android.gms.internal.zzerg;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzers.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerq {
						public static zzcrl(): com.google.android.gms.internal.zzers;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzerr {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerr.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzers {
						public constructor();
						public zzk(param0: javaioInputStream): com.google.android.gms.internal.zzerr;
						public zzcrm(): com.google.android.gms.internal.zzerr;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzert {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzeru {
						public asString(): string;
						public static zzte(param0: string): com.google.android.gms.internal.zzeru;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerv {
						public static zztf(param0: string): com.google.android.gms.internal.zzerv;
						public asString(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerz.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerw {
						public zzcrd(): com.google.android.gms.internal.zzerg;
						public constructor();
						public zzcrc(): com.google.android.gms.internal.zzerz;
						public zzcre(): javautilList;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzere.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerx extends com.google.android.gms.internal.zzerw {
						public constructor();
						public zzcrf(): com.google.android.gms.internal.zzere;
						public static zza(param0: string, param1: string, param2: com.google.android.gms.internal.zzerg, param3: com.google.android.gms.internal.zzere, param4: javautilList): com.google.android.gms.internal.zzerx;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzerf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzerg.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzery extends com.google.android.gms.internal.zzerw {
						public zzcrg(): com.google.android.gms.internal.zzerf;
						public constructor();
						public static zza(param0: string, param1: string, param2: com.google.android.gms.internal.zzerg, param3: com.google.android.gms.internal.zzerf, param4: javautilList): com.google.android.gms.internal.zzery;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzerz {
						public static zztg(param0: string): com.google.android.gms.internal.zzerz;
						public asString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesr.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesa extends com.google.android.gms.internal.zzesi {
						public zzcrn(): com.google.android.gms.internal.zzesr;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesb {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesr.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesc extends com.google.android.gms.internal.zzesj {
						public zza(param0: com.google.android.gms.internal.zzesr): com.google.android.gms.internal.zzesj;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzesd {
						public constructor();
						public zza(param0: com.google.android.gms.internal.zzesn): native.Array<number>;
						public zzax(param0: native.Array<number>): com.google.android.gms.internal.zzesn;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzese {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesf extends com.google.android.gms.internal.zzesd {
						public zza(param0: com.google.android.gms.internal.zzesn): native.Array<number>;
						public zzax(param0: native.Array<number>): com.google.android.gms.internal.zzesn;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesi.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesg extends com.google.android.gms.internal.zzesl {
						public static zzogz: com.google.android.gms.internal.zzesg;
						public zza(param0: com.google.android.gms.internal.zzesi): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesh {
						public static zzoha: iogrpczzyzze;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesj.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesr.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzesi {
						public static zzcrp(): com.google.android.gms.internal.zzesj;
						public zzcrn(): com.google.android.gms.internal.zzesr;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesr.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzesj {
						public zza(param0: com.google.android.gms.internal.zzesr): com.google.android.gms.internal.zzesj;
						public zzcrq(): com.google.android.gms.internal.zzesi;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesk {
					}
				}
			}
		}
	}
}

import javautilEnumSet = java.util.EnumSet;
/// <reference path="./com.google.android.gms.internal.zzesi.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzesl {
						public zza(param0: com.google.android.gms.internal.zzesi): void;
						public zzcrr(): com.google.android.gms.internal.zzesn;
						public constructor(param0: com.google.android.gms.internal.zzesn, param1: javautilEnumSet);
					}
					export module zzesl {
						export class zza {
							public static zzohg: com.google.android.gms.internal.zzesl.zza;
							public static values(): native.Array<com.google.android.gms.internal.zzesl.zza>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesl.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesm {
						public zzcx(param0: boolean): com.google.android.gms.internal.zzesm;
						public zzcrs(): com.google.android.gms.internal.zzesl;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesw.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesn {
						public static zzohq: com.google.android.gms.internal.zzesn;
						public equals(param0: javalangObject): boolean;
						public zzcrt(): com.google.android.gms.internal.zzesw;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesl.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesq.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzeso {
						public zza(param0: com.google.android.gms.internal.zzesn, param1: string, param2: com.google.android.gms.internal.zzesq): com.google.android.gms.internal.zzesl;
						public constructor();
						public zza(param0: com.google.android.gms.internal.zzesl, param1: string, param2: com.google.android.gms.internal.zzesq): com.google.android.gms.internal.zzesl;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesp {
						public static zzohr: com.google.android.gms.internal.zzesp;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesq {
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesr {
						public static zzohw: com.google.android.gms.internal.zzesr;
						public static zzohx: com.google.android.gms.internal.zzesr;
						public static zzohy: com.google.android.gms.internal.zzesr;
						public static zzohz: com.google.android.gms.internal.zzesr;
						public static zzoia: com.google.android.gms.internal.zzesr;
						public static zzoib: com.google.android.gms.internal.zzesr;
						public static zzoic: com.google.android.gms.internal.zzesr;
						public static zzoid: com.google.android.gms.internal.zzesr;
						public static zzoie: com.google.android.gms.internal.zzesr;
						public static zzoif: com.google.android.gms.internal.zzesr;
						public static zzoig: com.google.android.gms.internal.zzesr;
						public static zzoih: com.google.android.gms.internal.zzesr;
						public static zzoii: com.google.android.gms.internal.zzesr;
						public static zzoij: com.google.android.gms.internal.zzesr;
						public static zzoik: com.google.android.gms.internal.zzesr;
						public static zzoil: com.google.android.gms.internal.zzesr;
						public static zzoim: com.google.android.gms.internal.zzesr;
						public equals(param0: javalangObject): boolean;
						public zzth(param0: string): com.google.android.gms.internal.zzesr;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzess {
						public static zzoio: com.google.android.gms.internal.zzess;
						public static zzoip: com.google.android.gms.internal.zzess;
						public static zzoiq: com.google.android.gms.internal.zzess;
						public static zzoir: com.google.android.gms.internal.zzess;
						public static zzois: com.google.android.gms.internal.zzess;
						public static zzoit: com.google.android.gms.internal.zzess;
						public static zzoiu: com.google.android.gms.internal.zzess;
						public static zzoiv: com.google.android.gms.internal.zzess;
						public static zzoiw: com.google.android.gms.internal.zzess;
						public static zzoix: com.google.android.gms.internal.zzess;
						public static zzoiy: com.google.android.gms.internal.zzess;
						public static zzoiz: com.google.android.gms.internal.zzess;
						public static zzoja: com.google.android.gms.internal.zzess;
						public static zzojb: com.google.android.gms.internal.zzess;
						public static zzojc: com.google.android.gms.internal.zzess;
						public static zzojd: com.google.android.gms.internal.zzess;
						public static zzoje: com.google.android.gms.internal.zzess;
						public value(): number;
						public static values(): native.Array<com.google.android.gms.internal.zzess>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesd.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesx.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzest {
						public zzcrv(): com.google.android.gms.internal.zzesx;
						public zzcrw(): com.google.android.gms.internal.zzesd;
					}
					export module zzest {
						export class zza extends com.google.android.gms.internal.zzest {
							public zzcrv(): com.google.android.gms.internal.zzesx;
							public zzcrw(): com.google.android.gms.internal.zzesd;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesu {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesv {
						public static zzojh: com.google.android.gms.internal.zzesv;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesw {
						public static zzoji: com.google.android.gms.internal.zzesw;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesl.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesm.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzeso.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesx {
						public zza(param0: com.google.android.gms.internal.zzesl, param1: string): com.google.android.gms.internal.zzesm;
						public constructor(param0: com.google.android.gms.internal.zzeso);
						public zza(param0: com.google.android.gms.internal.zzesn, param1: string): com.google.android.gms.internal.zzesm;
					}
					export module zzesx {
						export class zza extends com.google.android.gms.internal.zzesx {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesy {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesl.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesn.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesq.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzesz extends com.google.android.gms.internal.zzeso {
						public zza(param0: com.google.android.gms.internal.zzesn, param1: string, param2: com.google.android.gms.internal.zzesq): com.google.android.gms.internal.zzesl;
						public zza(param0: com.google.android.gms.internal.zzesl, param1: string, param2: com.google.android.gms.internal.zzesq): com.google.android.gms.internal.zzesl;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzesd.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzesx.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeta {
						public static zzcrv(): com.google.android.gms.internal.zzesx;
						public static zzcrw(): com.google.android.gms.internal.zzesd;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeva {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public static zzctp(): com.google.android.gms.internal.zzeva;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public zzhi(): number;
					}
					export module zzeva {
						export class zza {
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzevb {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezd {
						public zza(param0: com.google.android.gms.internal.zzeuy): void;
						public getLatitude(): number;
						public getLongitude(): number;
						public zza(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
						public static zzcwl(): com.google.android.gms.internal.zzezd.zza;
						public zzhi(): number;
						public static zzcwm(): com.google.android.gms.internal.zzezd;
					}
					export module zzezd {
						export class zza {
							public zzn(param0: number): com.google.android.gms.internal.zzezd.zza;
							public zzo(param0: number): com.google.android.gms.internal.zzezd.zza;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzeze {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezq {
						public static zzphp: com.google.android.gms.internal.zzezq;
						public static zzpil: com.google.android.gms.internal.zzezq;
						public static zzpim: com.google.android.gms.internal.zzezq;
						public static zzpin: com.google.android.gms.internal.zzezq;
						public static zzpip: com.google.android.gms.internal.zzezq;
						public static zzpir: com.google.android.gms.internal.zzezq;
						public static zzpjc: com.google.android.gms.internal.zzezq;
						public static zzpje: com.google.android.gms.internal.zzezq;
						public static zzpjt: com.google.android.gms.internal.zzezq;
						public static zzpju: com.google.android.gms.internal.zzezq;
						public static zzpkd: com.google.android.gms.internal.zzezq;
						public static zzpke: com.google.android.gms.internal.zzezq;
						public static zzpks: com.google.android.gms.internal.zzezq;
						public static zzpkw: com.google.android.gms.internal.zzezq;
						public static values(): native.Array<com.google.android.gms.internal.zzezq>;
						public static zztz(param0: string): com.google.android.gms.internal.zzezq;
						public static zzua(param0: string): com.google.android.gms.internal.zzezq;
					}
				}
			}
		}
	}
}

import javaxnetsslSSLSocket = javax.net.ssl.SSLSocket;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezr {
						public supportsTlsExtensions(): boolean;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public apply(param0: javaxnetsslSSLSocket, param1: boolean): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezs {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzezq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzezr.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzezz.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezt {
						public zza(param0: native.Array<com.google.android.gms.internal.zzezz>): com.google.android.gms.internal.zzezt;
						public zzh(param0: native.Array<string>): com.google.android.gms.internal.zzezt;
						public constructor(param0: com.google.android.gms.internal.zzezr);
						public zza(param0: native.Array<com.google.android.gms.internal.zzezq>): com.google.android.gms.internal.zzezt;
						public zzg(param0: native.Array<string>): com.google.android.gms.internal.zzezt;
						public zzdb(param0: boolean): com.google.android.gms.internal.zzezt;
						public constructor(param0: boolean);
						public zzdaa(): com.google.android.gms.internal.zzezr;
					}
				}
			}
		}
	}
}

import javaxsecurityauthx500X500Principal = javax.security.auth.x500.X500Principal;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezu {
						public constructor(param0: javaxsecurityauthx500X500Principal);
						public findMostSpecific(param0: string): string;
					}
				}
			}
		}
	}
}

import javaxnetsslSSLSession = javax.net.ssl.SSLSession;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezv {
						public static zzpli: com.google.android.gms.internal.zzezv;
						public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezw {
						public invokeOptionalWithoutCheckedException(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
						public isSupported(param0: javalangObject): boolean;
						public constructor(param0: javalangClass, param1: string, param2: native.Array<javalangClass>);
						public invokeWithoutCheckedException(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
					}
				}
			}
		}
	}
}

import javasecurityProvider = java.security.Provider;
import javautilloggingLogger = java.util.logging.Logger;
import javalangreflectMethod = java.lang.reflect.Method;
/// <reference path="./com.google.android.gms.internal.zzezw.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.logging.Logger.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezx {
						public static logger: javautilloggingLogger;
						public static zzdag(): com.google.android.gms.internal.zzezx;
						public constructor(param0: javasecurityProvider);
						public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
						public afterHandshake(param0: javaxnetsslSSLSocket): void;
						public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): void;
						public static concatLengthPrefixed(param0: javautilList): native.Array<number>;
						public getProvider(): javasecurityProvider;
					}
					export module zzezx {
						export class zza extends com.google.android.gms.internal.zzezx {
							public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): void;
							public constructor(param0: javasecurityProvider);
							public constructor(param0: com.google.android.gms.internal.zzezw, param1: com.google.android.gms.internal.zzezw, param2: javalangreflectMethod, param3: javalangreflectMethod, param4: com.google.android.gms.internal.zzezw, param5: com.google.android.gms.internal.zzezw, param6: javasecurityProvider);
							public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
						}
						export class zzb extends com.google.android.gms.internal.zzezx {
							public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): void;
							public constructor(param0: javasecurityProvider);
							public constructor(param0: javalangreflectMethod, param1: javalangreflectMethod, param2: javalangreflectMethod, param3: javalangClass, param4: javalangClass, param5: javasecurityProvider);
							public afterHandshake(param0: javaxnetsslSSLSocket): void;
							public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
						}
						export class zzc {
							public invoke(param0: javalangObject, param1: javalangreflectMethod, param2: native.Array<javalangObject>): javalangObject;
							public constructor(param0: javautilList);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezy {
						public static zzpma: com.google.android.gms.internal.zzezy;
						public static zzpmd: com.google.android.gms.internal.zzezy;
						public static zzpme: com.google.android.gms.internal.zzezy;
						public static zzub(param0: string): com.google.android.gms.internal.zzezy;
						public static values(): native.Array<com.google.android.gms.internal.zzezy>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzezz {
						public static zzpmg: com.google.android.gms.internal.zzezz;
						public static zzpmh: com.google.android.gms.internal.zzezz;
						public static zzpmi: com.google.android.gms.internal.zzezz;
						public static zzuc(param0: string): com.google.android.gms.internal.zzezz;
						public static values(): native.Array<com.google.android.gms.internal.zzezz>;
					}
				}
			}
		}
	}
}

import javaniocharsetCharset = java.nio.charset.Charset;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfaa {
						public static EMPTY_STRING_ARRAY: native.Array<string>;
						public static UTF_8: javaniocharsetCharset;
						public static immutableList(param0: native.Array<javalangObject>): javautilList;
						public static intersect(param0: javalangClass, param1: native.Array<javalangObject>, param2: native.Array<javalangObject>): native.Array<javalangObject>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfab {
						public static zzpml: com.google.android.gms.internal.zzfab;
						public static zzpmm: com.google.android.gms.internal.zzfab;
						public static zzpmn: com.google.android.gms.internal.zzfab;
						public static zzpmr: com.google.android.gms.internal.zzfab;
						public static zzpms: com.google.android.gms.internal.zzfab;
						public static zzpmt: com.google.android.gms.internal.zzfab;
						public static zzpmu: com.google.android.gms.internal.zzfab;
						public static zzpmv: com.google.android.gms.internal.zzfab;
						public static zzpmw: com.google.android.gms.internal.zzfab;
						public static zzpmx: com.google.android.gms.internal.zzfab;
						public static zzpmy: com.google.android.gms.internal.zzfab;
						public static zzpmz: com.google.android.gms.internal.zzfab;
						public static zzpna: com.google.android.gms.internal.zzfab;
						public httpCode: number;
						public static zzls(param0: number): com.google.android.gms.internal.zzfab;
						public static values(): native.Array<com.google.android.gms.internal.zzfab>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfad.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfac {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfac interface with the provided implementation.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.internal.zzfad): boolean;
						});
						public zza(param0: com.google.android.gms.internal.zzfad): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfab.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfaq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfad {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfad interface with the provided implementation.
						 */
						public constructor(implementation: {
							data(param0: boolean, param1: number, param2: com.google.android.gms.internal.zzfbc, param3: number): void;
							zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList, param5: number): void;
							zza(param0: number, param1: com.google.android.gms.internal.zzfab): void;
							zza(param0: boolean, param1: com.google.android.gms.internal.zzfaq): void;
							ping(param0: boolean, param1: number, param2: number): void;
							zza(param0: number, param1: com.google.android.gms.internal.zzfab, param2: com.google.android.gms.internal.zzfbd): void;
							windowUpdate(param0: number, param1: number): void;
							pushPromise(param0: number, param1: number, param2: javautilList): void;
						});
						public zza(param0: boolean, param1: com.google.android.gms.internal.zzfaq): void;
						public pushPromise(param0: number, param1: number, param2: javautilList): void;
						public data(param0: boolean, param1: number, param2: com.google.android.gms.internal.zzfbc, param3: number): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab, param2: com.google.android.gms.internal.zzfbd): void;
						public ping(param0: boolean, param1: number, param2: number): void;
						public windowUpdate(param0: number, param1: number): void;
						public zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList, param5: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfab.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfaq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfae {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfae interface with the provided implementation.
						 */
						public constructor(implementation: {
							connectionPreface(): void;
							zza(param0: com.google.android.gms.internal.zzfaq): void;
							flush(): void;
							zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList): void;
							zza(param0: number, param1: com.google.android.gms.internal.zzfab): void;
							maxDataLength(): number;
							data(param0: boolean, param1: number, param2: com.google.android.gms.internal.zzfba, param3: number): void;
							zzb(param0: com.google.android.gms.internal.zzfaq): void;
							ping(param0: boolean, param1: number, param2: number): void;
							zza(param0: number, param1: com.google.android.gms.internal.zzfab, param2: native.Array<number>): void;
							windowUpdate(param0: number, param1: number): void;
						});
						public connectionPreface(): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab, param2: native.Array<number>): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab): void;
						public zzb(param0: com.google.android.gms.internal.zzfaq): void;
						public flush(): void;
						public data(param0: boolean, param1: number, param2: com.google.android.gms.internal.zzfba, param3: number): void;
						public zza(param0: com.google.android.gms.internal.zzfaq): void;
						public ping(param0: boolean, param1: number, param2: number): void;
						public maxDataLength(): number;
						public windowUpdate(param0: number, param1: number): void;
						public zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfaf {
						public static RESPONSE_STATUS: com.google.android.gms.internal.zzfbd;
						public static TARGET_METHOD: com.google.android.gms.internal.zzfbd;
						public static TARGET_PATH: com.google.android.gms.internal.zzfbd;
						public static TARGET_SCHEME: com.google.android.gms.internal.zzfbd;
						public static TARGET_AUTHORITY: com.google.android.gms.internal.zzfbd;
						public name: com.google.android.gms.internal.zzfbd;
						public value: com.google.android.gms.internal.zzfbd;
						public equals(param0: javalangObject): boolean;
						public constructor(param0: com.google.android.gms.internal.zzfbd, param1: string);
						public hashCode(): number;
						public constructor(param0: string, param1: string);
						public toString(): string;
						public constructor(param0: com.google.android.gms.internal.zzfbd, param1: com.google.android.gms.internal.zzfbd);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfag {
						public static zzpnl: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfah {
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfai {
						public getAndResetHeaderList(): javautilList;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfaj {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfac.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfae.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfak {
						public zza(param0: com.google.android.gms.internal.zzfbb, param1: boolean): com.google.android.gms.internal.zzfae;
						public constructor();
						public zza(param0: com.google.android.gms.internal.zzfbc, param1: boolean): com.google.android.gms.internal.zzfac;
					}
					export module zzfak {
						export class zza {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfal {
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public close(): void;
						public constructor(param0: com.google.android.gms.internal.zzfbc);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfad.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfam {
						public close(): void;
						public zza(param0: com.google.android.gms.internal.zzfad): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfab.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfaq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfan {
						public connectionPreface(): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab, param2: native.Array<number>): void;
						public close(): void;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfab): void;
						public zzb(param0: com.google.android.gms.internal.zzfaq): void;
						public flush(): void;
						public data(param0: boolean, param1: number, param2: com.google.android.gms.internal.zzfba, param3: number): void;
						public zza(param0: com.google.android.gms.internal.zzfaq): void;
						public ping(param0: boolean, param1: number, param2: number): void;
						public maxDataLength(): number;
						public windowUpdate(param0: number, param1: number): void;
						public zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfao {
						public static zzdap(): com.google.android.gms.internal.zzfao;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfap {
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfaq {
						public zzj(param0: number, param1: number, param2: number): com.google.android.gms.internal.zzfaq;
						public constructor();
						public isSet(param0: number): boolean;
						public get(param0: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfac.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfae.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfar {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfar interface with the provided implementation.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.internal.zzfbc, param1: boolean): com.google.android.gms.internal.zzfac;
							zza(param0: com.google.android.gms.internal.zzfbb, param1: boolean): com.google.android.gms.internal.zzfae;
						});
						public zza(param0: com.google.android.gms.internal.zzfbb, param1: boolean): com.google.android.gms.internal.zzfae;
						public zza(param0: com.google.android.gms.internal.zzfbc, param1: boolean): com.google.android.gms.internal.zzfac;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzewl.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzewp.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfas {
						public constructor(param0: com.google.android.gms.internal.zzewl, param1: com.google.android.gms.internal.zzewp);
						public read(): number;
						public zzd(param0: javaioOutputStream): number;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public available(): number;
					}
				}
			}
		}
	}
}

import iogrpczzbs = io.grpc.zzbs;
/// <reference path="./com.google.android.gms.internal.zzewl.d.ts" />
/// <reference path="./io.grpc.zzbs.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfat {
						public static zzk(param0: com.google.android.gms.internal.zzewl): iogrpczzbs;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfau {
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfav {
						public zzp(param0: javaioInputStream): javalangObject;
						public zzcj(param0: javalangObject): javaioInputStream;
					}
				}
			}
		}
	}
}

import iogrpczzf = io.grpc.zzf;
/// <reference path="./io.grpc.zzf.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzfaw {
						public zza(param0: iogrpczzi, param1: iogrpczzh): com.google.android.gms.internal.zzfaw;
						public zzdav(): iogrpczzi;
						public getCallOptions(): iogrpczzh;
						public constructor(param0: iogrpczzi, param1: iogrpczzh);
						public constructor(param0: iogrpczzi);
						public zzb(param0: iogrpczzf): com.google.android.gms.internal.zzfaw;
					}
				}
			}
		}
	}
}

import javaioIOException = java.io.IOException;
/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfax extends com.google.android.gms.internal.zzfbr {
						public constructor();
						public enter(): void;
						public newTimeoutException(param0: javaioIOException): javaioIOException;
						public timedOut(): void;
					}
					export module zzfax {
						export class zza {
							public run(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfay {
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public close(): void;
						public flush(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfaz {
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public close(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfbb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfba {
						public zzdi(param0: number): void;
						public zzmb(param0: number): com.google.android.gms.internal.zzfbb;
						public zzdo(param0: number): native.Array<number>;
						public readInt(): number;
						public close(): void;
						public hashCode(): number;
						public zzlz(param0: number): com.google.android.gms.internal.zzfbb;
						public zzdp(param0: number): void;
						public readByte(): number;
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public zzdm(param0: number): string;
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public zzma(param0: number): com.google.android.gms.internal.zzfbb;
						public size(): number;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public zzbm(param0: native.Array<number>): com.google.android.gms.internal.zzfbb;
						public zzdj(param0: number): number;
						public flush(): void;
						public zzo(param0: native.Array<number>, param1: number, param2: number): com.google.android.gms.internal.zzfba;
						public zzdaz(): string;
						public zzdba(): native.Array<number>;
						public zzczs(): com.google.android.gms.internal.zzfba;
						public zzb(param0: javaioOutputStream, param1: number): com.google.android.gms.internal.zzfba;
						public toString(): string;
						public readShort(): number;
						public readByteString(): com.google.android.gms.internal.zzfbd;
						public zzdk(param0: number): com.google.android.gms.internal.zzfbd;
						public zzday(): boolean;
						public zzb(param0: com.google.android.gms.internal.zzfbd): com.google.android.gms.internal.zzfba;
						public zzud(param0: string): com.google.android.gms.internal.zzfbb;
						public clear(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbb {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfbb interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzbm(param0: native.Array<number>): com.google.android.gms.internal.zzfbb;
							zzud(param0: string): com.google.android.gms.internal.zzfbb;
							zzmb(param0: number): com.google.android.gms.internal.zzfbb;
							zzma(param0: number): com.google.android.gms.internal.zzfbb;
							zzlz(param0: number): com.google.android.gms.internal.zzfbb;
							flush(): void;
							write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
							flush(): void;
							close(): void;
						});
						public zzmb(param0: number): com.google.android.gms.internal.zzfbb;
						public zzbm(param0: native.Array<number>): com.google.android.gms.internal.zzfbb;
						public zzma(param0: number): com.google.android.gms.internal.zzfbb;
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public close(): void;
						public zzud(param0: string): com.google.android.gms.internal.zzfbb;
						public flush(): void;
						public zzlz(param0: number): com.google.android.gms.internal.zzfbb;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbc {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfbc interface with the provided implementation.
						 */
						public constructor(implementation: {
							zzczs(): com.google.android.gms.internal.zzfba;
							zzday(): boolean;
							zzdi(param0: number): void;
							readByte(): number;
							readShort(): number;
							readInt(): number;
							zzdp(param0: number): void;
							zzdk(param0: number): com.google.android.gms.internal.zzfbd;
							zzdo(param0: number): native.Array<number>;
							read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
							close(): void;
						});
						public zzdi(param0: number): void;
						public readByte(): number;
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public zzdk(param0: number): com.google.android.gms.internal.zzfbd;
						public zzdo(param0: number): native.Array<number>;
						public readInt(): number;
						public close(): void;
						public zzday(): boolean;
						public zzczs(): com.google.android.gms.internal.zzfba;
						public readShort(): number;
						public zzdp(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbd {
						public static zzpoy: com.google.android.gms.internal.zzfbd;
						public equals(param0: javalangObject): boolean;
						public zzdbb(): string;
						public static zzue(param0: string): com.google.android.gms.internal.zzfbd;
						public zzc(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
						public hashCode(): number;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfbd, param2: number, param3: number): boolean;
						public toByteArray(): native.Array<number>;
						public toString(): string;
						public zzak(param0: number, param1: number): com.google.android.gms.internal.zzfbd;
						public zzdbc(): string;
						public static zzbn(param0: native.Array<number>): com.google.android.gms.internal.zzfbd;
						public getByte(param0: number): number;
						public zzdbd(): com.google.android.gms.internal.zzfbd;
						public size(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbe {
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public close(): void;
						public flush(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbf {
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public close(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

import javanetSocket = java.net.Socket;
/// <reference path="./com.google.android.gms.internal.zzfbb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbp.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbq.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbg {
						public static zza(param0: javanetSocket): com.google.android.gms.internal.zzfbp;
						public static zzb(param0: com.google.android.gms.internal.zzfbq): com.google.android.gms.internal.zzfbc;
						public static zza(param0: com.google.android.gms.internal.zzfbp): com.google.android.gms.internal.zzfbb;
						public static zzb(param0: javanetSocket): com.google.android.gms.internal.zzfbq;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbh {
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public close(): void;
						public flush(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbi {
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public close(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbj extends com.google.android.gms.internal.zzfax {
						public newTimeoutException(param0: javaioIOException): javaioIOException;
						public timedOut(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbk {
						public zzmb(param0: number): com.google.android.gms.internal.zzfbb;
						public zzbm(param0: native.Array<number>): com.google.android.gms.internal.zzfbb;
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public zzma(param0: number): com.google.android.gms.internal.zzfbb;
						public close(): void;
						public zzud(param0: string): com.google.android.gms.internal.zzfbb;
						public flush(): void;
						public zzlz(param0: number): com.google.android.gms.internal.zzfbb;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbl {
						public zzdi(param0: number): void;
						public readByte(): number;
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public zzdk(param0: number): com.google.android.gms.internal.zzfbd;
						public zzdo(param0: number): native.Array<number>;
						public readInt(): number;
						public close(): void;
						public zzday(): boolean;
						public zzczs(): com.google.android.gms.internal.zzfba;
						public toString(): string;
						public readShort(): number;
						public zzdp(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbm {
						public zzdbf(): com.google.android.gms.internal.zzfbm;
						public zza(param0: com.google.android.gms.internal.zzfbm): com.google.android.gms.internal.zzfbm;
						public zza(param0: com.google.android.gms.internal.zzfbm, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbn {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbo extends com.google.android.gms.internal.zzfbd {
						public zzak(param0: number, param1: number): com.google.android.gms.internal.zzfbd;
						public equals(param0: javalangObject): boolean;
						public zzdbc(): string;
						public zzdbb(): string;
						public zzc(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
						public hashCode(): number;
						public getByte(param0: number): number;
						public zza(param0: number, param1: com.google.android.gms.internal.zzfbd, param2: number, param3: number): boolean;
						public zzdbd(): com.google.android.gms.internal.zzfbd;
						public size(): number;
						public toByteArray(): native.Array<number>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbp {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfbp interface with the provided implementation.
						 */
						public constructor(implementation: {
							write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
							flush(): void;
							close(): void;
						});
						public write(param0: com.google.android.gms.internal.zzfba, param1: number): void;
						public close(): void;
						public flush(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbq {
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfbq interface with the provided implementation.
						 */
						public constructor(implementation: {
							read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
							close(): void;
						});
						public read(param0: com.google.android.gms.internal.zzfba, param1: number): number;
						public close(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbr {
						public constructor();
						public zzdbi(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbs extends com.google.android.gms.internal.zzfbr {
						public zzdbi(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfbt {
						public static UTF_8: javaniocharsetCharset;
						public static zza(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
						public static zzn(param0: javalangThrowable): void;
						public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzeuk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Blob {
					public static fromBytes(param0: native.Array<number>): com.google.firebase.firestore.Blob;
					public toString(): string;
					public compareTo(param0: com.google.firebase.firestore.Blob): number;
					public equals(param0: javalangObject): boolean;
					public toByteString(): com.google.android.gms.internal.zzeuk;
					public hashCode(): number;
					public static zzab(param0: com.google.android.gms.internal.zzeuk): com.google.firebase.firestore.Blob;
					public toBytes(): native.Array<number>;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentReference.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class CollectionReference extends com.google.firebase.firestore.Query {
					public getPath(): string;
					public add(param0: javautilMap): com.google.android.gms.tasks.Task;
					public add(param0: javalangObject): com.google.android.gms.tasks.Task;
					public getId(): string;
					public document(): com.google.firebase.firestore.DocumentReference;
					public document(param0: string): com.google.firebase.firestore.DocumentReference;
					public getParent(): com.google.firebase.firestore.DocumentReference;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.DocumentSnapshot.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentChange {
					public getDocument(): com.google.firebase.firestore.DocumentSnapshot;
					public getNewIndex(): number;
					public getOldIndex(): number;
					public getType(): com.google.firebase.firestore.DocumentChange.Type;
				}
				export module DocumentChange {
					export class Type {
						public static ADDED: com.google.firebase.firestore.DocumentChange.Type;
						public static MODIFIED: com.google.firebase.firestore.DocumentChange.Type;
						public static REMOVED: com.google.firebase.firestore.DocumentChange.Type;
						public static valueOf(param0: string): com.google.firebase.firestore.DocumentChange.Type;
						public static values(): native.Array<com.google.firebase.firestore.DocumentChange.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentListenOptions {
					public constructor();
					public includeMetadataChanges(): com.google.firebase.firestore.DocumentListenOptions;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegm.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.CollectionReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentListenOptions.d.ts" />
/// <reference path="./com.google.firebase.firestore.EventListener.d.ts" />
/// <reference path="./com.google.firebase.firestore.FieldPath.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestore.d.ts" />
/// <reference path="./com.google.firebase.firestore.ListenerRegistration.d.ts" />
/// <reference path="./com.google.firebase.firestore.SetOptions.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentReference {
					public set(param0: javalangObject): com.google.android.gms.tasks.Task;
					public static zza(param0: com.google.android.gms.internal.zzegm, param1: com.google.firebase.firestore.FirebaseFirestore): com.google.firebase.firestore.DocumentReference;
					public getId(): string;
					public delete(): com.google.android.gms.tasks.Task;
					public addSnapshotListener(param0: com.google.firebase.firestore.DocumentListenOptions, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public get(): com.google.android.gms.tasks.Task;
					public collection(param0: string): com.google.firebase.firestore.CollectionReference;
					public set(param0: javalangObject, param1: com.google.firebase.firestore.SetOptions): com.google.android.gms.tasks.Task;
					public getPath(): string;
					public set(param0: javautilMap, param1: com.google.firebase.firestore.SetOptions): com.google.android.gms.tasks.Task;
					public addSnapshotListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public getParent(): com.google.firebase.firestore.CollectionReference;
					public update(param0: string, param1: javalangObject, param2: native.Array<javalangObject>): com.google.android.gms.tasks.Task;
					public update(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject, param2: native.Array<javalangObject>): com.google.android.gms.tasks.Task;
					public addSnapshotListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.firestore.DocumentListenOptions, param2: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public getFirestore(): com.google.firebase.firestore.FirebaseFirestore;
					public addSnapshotListener(param0: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: androidappActivity, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: androidappActivity, param1: com.google.firebase.firestore.DocumentListenOptions, param2: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public update(param0: javautilMap): com.google.android.gms.tasks.Task;
					public set(param0: javautilMap): com.google.android.gms.tasks.Task;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.Blob.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.FieldPath.d.ts" />
/// <reference path="./com.google.firebase.firestore.GeoPoint.d.ts" />
/// <reference path="./com.google.firebase.firestore.SnapshotMetadata.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Double.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentSnapshot {
					public getId(): string;
					public get(param0: string): javalangObject;
					public getDocumentReference(param0: string): com.google.firebase.firestore.DocumentReference;
					public getBlob(param0: string): com.google.firebase.firestore.Blob;
					public contains(param0: com.google.firebase.firestore.FieldPath): boolean;
					public getReference(): com.google.firebase.firestore.DocumentReference;
					public getDouble(param0: string): javalangDouble;
					public getString(param0: string): string;
					public exists(): boolean;
					public getData(): javautilMap;
					public getGeoPoint(param0: string): com.google.firebase.firestore.GeoPoint;
					public toObject(param0: javalangClass): javalangObject;
					public getBoolean(param0: string): javalangBoolean;
					public get(param0: com.google.firebase.firestore.FieldPath): javalangObject;
					public contains(param0: string): boolean;
					public getDate(param0: string): javautilDate;
					public getLong(param0: string): javalangLong;
					public getMetadata(): com.google.firebase.firestore.SnapshotMetadata;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class EventListener {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.EventListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
					});
					public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Exclude {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.Exclude interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FieldPath {
					public static of(param0: native.Array<string>): com.google.firebase.firestore.FieldPath;
					public toString(): string;
					public equals(param0: javalangObject): boolean;
					public static documentId(): com.google.firebase.firestore.FieldPath;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FieldValue {
					public static serverTimestamp(): com.google.firebase.firestore.FieldValue;
					public static delete(): com.google.firebase.firestore.FieldValue;
				}
				export module FieldValue {
					export class zza extends com.google.firebase.firestore.FieldValue {
					}
					export class zzb extends com.google.firebase.firestore.FieldValue {
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.FirebaseApp.d.ts" />
/// <reference path="./com.google.firebase.firestore.CollectionReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreSettings.d.ts" />
/// <reference path="./com.google.firebase.firestore.WriteBatch.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestore {
					public getApp(): com.google.firebase.FirebaseApp;
					public static setLoggingEnabled(param0: boolean): void;
					public document(param0: string): com.google.firebase.firestore.DocumentReference;
					public static getInstance(): com.google.firebase.firestore.FirebaseFirestore;
					public runTransaction(param0: com.google.firebase.firestore.Transaction.Function): com.google.android.gms.tasks.Task;
					public batch(): com.google.firebase.firestore.WriteBatch;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.firestore.FirebaseFirestore;
					public setFirestoreSettings(param0: com.google.firebase.firestore.FirebaseFirestoreSettings): void;
					public collection(param0: string): com.google.firebase.firestore.CollectionReference;
					public getFirestoreSettings(): com.google.firebase.firestore.FirebaseFirestoreSettings;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestoreException {
					public constructor(param0: string, param1: com.google.firebase.firestore.FirebaseFirestoreException.Code, param2: javalangThrowable);
					public constructor(param0: string, param1: com.google.firebase.firestore.FirebaseFirestoreException.Code);
					public getCode(): com.google.firebase.firestore.FirebaseFirestoreException.Code;
				}
				export module FirebaseFirestoreException {
					export class Code {
						public static OK: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static CANCELLED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNKNOWN: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static INVALID_ARGUMENT: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static DEADLINE_EXCEEDED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static NOT_FOUND: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static ALREADY_EXISTS: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static PERMISSION_DENIED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static RESOURCE_EXHAUSTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static FAILED_PRECONDITION: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static ABORTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static OUT_OF_RANGE: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNIMPLEMENTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static INTERNAL: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNAVAILABLE: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static DATA_LOSS: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNAUTHENTICATED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static fromValue(param0: number): com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public value(): number;
						public static valueOf(param0: string): com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static values(): native.Array<com.google.firebase.firestore.FirebaseFirestoreException.Code>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreSettings.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestoreSettings {
					public toString(): string;
					public equals(param0: javalangObject): boolean;
					public isSslEnabled(): boolean;
					public hashCode(): number;
					public isPersistenceEnabled(): boolean;
					public getHost(): string;
				}
				export module FirebaseFirestoreSettings {
					export class Builder {
						public constructor();
						public setPersistenceEnabled(param0: boolean): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public build(): com.google.firebase.firestore.FirebaseFirestoreSettings;
						public setHost(param0: string): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public setSslEnabled(param0: boolean): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public constructor(param0: com.google.firebase.firestore.FirebaseFirestoreSettings);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class GeoPoint {
					public compareTo(param0: com.google.firebase.firestore.GeoPoint): number;
					public toString(): string;
					public getLatitude(): number;
					public getLongitude(): number;
					public equals(param0: javalangObject): boolean;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class IgnoreExtraProperties {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.IgnoreExtraProperties interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ListenerRegistration {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ListenerRegistration interface with the provided implementation.
					 */
					public constructor(implementation: {
						remove(): void;
					});
					public remove(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class PropertyName {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.PropertyName interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public value(): string;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentSnapshot.d.ts" />
/// <reference path="./com.google.firebase.firestore.EventListener.d.ts" />
/// <reference path="./com.google.firebase.firestore.FieldPath.d.ts" />
/// <reference path="./com.google.firebase.firestore.FirebaseFirestore.d.ts" />
/// <reference path="./com.google.firebase.firestore.ListenerRegistration.d.ts" />
/// <reference path="./com.google.firebase.firestore.QueryListenOptions.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Query {
					public endBefore(param0: native.Array<javalangObject>): com.google.firebase.firestore.Query;
					public orderBy(param0: com.google.firebase.firestore.FieldPath, param1: com.google.firebase.firestore.Query.Direction): com.google.firebase.firestore.Query;
					public endBefore(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public whereLessThanOrEqualTo(param0: string, param1: javalangObject): com.google.firebase.firestore.Query;
					public orderBy(param0: string): com.google.firebase.firestore.Query;
					public whereLessThanOrEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject): com.google.firebase.firestore.Query;
					public startAfter(param0: native.Array<javalangObject>): com.google.firebase.firestore.Query;
					public getFirestore(): com.google.firebase.firestore.FirebaseFirestore;
					public whereGreaterThanOrEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.firestore.QueryListenOptions, param2: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public orderBy(param0: com.google.firebase.firestore.FieldPath): com.google.firebase.firestore.Query;
					public whereGreaterThan(param0: string, param1: javalangObject): com.google.firebase.firestore.Query;
					public limit(param0: number): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: com.google.firebase.firestore.QueryListenOptions, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public whereEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject): com.google.firebase.firestore.Query;
					public whereLessThan(param0: string, param1: javalangObject): com.google.firebase.firestore.Query;
					public whereGreaterThanOrEqualTo(param0: string, param1: javalangObject): com.google.firebase.firestore.Query;
					public startAt(param0: native.Array<javalangObject>): com.google.firebase.firestore.Query;
					public get(): com.google.android.gms.tasks.Task;
					public startAt(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public startAfter(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public endAt(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public endAt(param0: native.Array<javalangObject>): com.google.firebase.firestore.Query;
					public orderBy(param0: string, param1: com.google.firebase.firestore.Query.Direction): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: javautilconcurrentExecutor, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: androidappActivity, param1: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public whereLessThan(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject): com.google.firebase.firestore.Query;
					public whereEqualTo(param0: string, param1: javalangObject): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: androidappActivity, param1: com.google.firebase.firestore.QueryListenOptions, param2: com.google.firebase.firestore.EventListener): com.google.firebase.firestore.ListenerRegistration;
					public whereGreaterThan(param0: com.google.firebase.firestore.FieldPath, param1: javalangObject): com.google.firebase.firestore.Query;
				}
				export module Query {
					export class Direction {
						public static ASCENDING: com.google.firebase.firestore.Query.Direction;
						public static DESCENDING: com.google.firebase.firestore.Query.Direction;
						public static values(): native.Array<com.google.firebase.firestore.Query.Direction>;
						public static valueOf(param0: string): com.google.firebase.firestore.Query.Direction;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class QueryListenOptions {
					public constructor();
					public includeDocumentMetadataChanges(): com.google.firebase.firestore.QueryListenOptions;
					public includeQueryMetadataChanges(): com.google.firebase.firestore.QueryListenOptions;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.Query.d.ts" />
/// <reference path="./com.google.firebase.firestore.SnapshotMetadata.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class QuerySnapshot {
					public isEmpty(): boolean;
					public getDocuments(): javautilList;
					public getDocumentChanges(): javautilList;
					public iterator(): javautilIterator;
					public toObjects(param0: javalangClass): javautilList;
					public size(): number;
					public getQuery(): com.google.firebase.firestore.Query;
					public getMetadata(): com.google.firebase.firestore.SnapshotMetadata;
				}
				export module QuerySnapshot {
					export class zza {
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ServerTimestamp {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ServerTimestamp interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class SetOptions {
					public zzbyz(): com.google.android.gms.internal.zzegq;
					public zzbyy(): boolean;
					public static merge(): com.google.firebase.firestore.SetOptions;
					public equals(param0: javalangObject): boolean;
					public static mergeFieldPaths(param0: javautilList): com.google.firebase.firestore.SetOptions;
					public static mergeFields(param0: native.Array<string>): com.google.firebase.firestore.SetOptions;
					public hashCode(): number;
					public static mergeFields(param0: javautilList): com.google.firebase.firestore.SetOptions;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class SnapshotMetadata {
					public isFromCache(): boolean;
					public hasPendingWrites(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ThrowOnExtraProperties {
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ThrowOnExtraProperties interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.DocumentReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentSnapshot.d.ts" />
/// <reference path="./com.google.firebase.firestore.FieldPath.d.ts" />
/// <reference path="./com.google.firebase.firestore.SetOptions.d.ts" />
/// <reference path="./com.google.firebase.firestore.Transaction.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Transaction {
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap): com.google.firebase.firestore.Transaction;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javalangObject): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: javalangObject, param3: native.Array<javalangObject>): com.google.firebase.firestore.Transaction;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javalangObject, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.Transaction;
					public delete(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: javalangObject, param3: native.Array<javalangObject>): com.google.firebase.firestore.Transaction;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap): com.google.firebase.firestore.Transaction;
					public get(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.DocumentSnapshot;
				}
				export module Transaction {
					export class Function {
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.Transaction$Function interface with the provided implementation.
						 */
						public constructor(implementation: {
							apply(param0: com.google.firebase.firestore.Transaction): javalangObject;
						});
						public apply(param0: com.google.firebase.firestore.Transaction): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./com.google.firebase.firestore.DocumentReference.d.ts" />
/// <reference path="./com.google.firebase.firestore.FieldPath.d.ts" />
/// <reference path="./com.google.firebase.firestore.SetOptions.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class WriteBatch {
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap): com.google.firebase.firestore.WriteBatch;
					public commit(): com.google.android.gms.tasks.Task;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: javalangObject, param3: native.Array<javalangObject>): com.google.firebase.firestore.WriteBatch;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.WriteBatch;
					public delete(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.WriteBatch;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javalangObject, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.WriteBatch;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: javautilMap): com.google.firebase.firestore.WriteBatch;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: javalangObject): com.google.firebase.firestore.WriteBatch;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: javalangObject, param3: native.Array<javalangObject>): com.google.firebase.firestore.WriteBatch;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zza {
					public then(param0: com.google.android.gms.tasks.Task): javalangObject;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzb {
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzc {
					public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzd {
					public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zze {
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzf {
					public call(): javalangObject;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzg {
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzh {
					public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.firebase.firestore.FirebaseFirestoreException.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzi {
					public onEvent(param0: javalangObject, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.tasks.Task.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzj {
					public then(param0: com.google.android.gms.tasks.Task): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegb.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehg.d.ts" />
/// <reference path="./com.google.firebase.firestore.SetOptions.d.ts" />
/// <reference path="./com.google.firebase.firestore.zzm.d.ts" />
/// <reference path="./com.google.firebase.firestore.zzn.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzk {
					public constructor(param0: com.google.android.gms.internal.zzegb);
					public zzau(param0: javautilList): com.google.firebase.firestore.zzn;
					public static zzbw(param0: javalangObject): javautilMap;
					public zzai(param0: javautilMap): com.google.firebase.firestore.zzn;
					public zzbv(param0: javalangObject): com.google.android.gms.internal.zzehg;
					public zza(param0: javautilMap, param1: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.zzm;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzl {
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzm {
					public constructor(param0: com.google.android.gms.internal.zzehl, param1: com.google.android.gms.internal.zzegq, param2: javautilList);
					public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegz): javautilList;
				}
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzegf.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzegz.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzehl.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzn {
					public constructor(param0: com.google.android.gms.internal.zzehl, param1: com.google.android.gms.internal.zzegq, param2: javautilList);
					public zza(param0: com.google.android.gms.internal.zzegf, param1: com.google.android.gms.internal.zzegz): javautilList;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class zzo {
					public static zzmpe: number;
					public static zzmpf: number;
					public static zzmpg: number;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module io {
	export module grpc {
		export class InternalMetadata {
			public static US_ASCII: javaniocharsetCharset;
			public static zzb(param0: io.grpc.zzbe): number;
			public static zza(param0: string, param1: io.grpc.InternalMetadata.TrustedAsciiMarshaller): io.grpc.zzbm;
			public static zza(param0: io.grpc.zzbe): native.Array<native.Array<number>>;
			public static zze(param0: native.Array<native.Array<number>>): io.grpc.zzbe;
		}
		export module InternalMetadata {
			export class TrustedAsciiMarshaller {
				/**
				 * Constructs a new instance of the io.grpc.InternalMetadata$TrustedAsciiMarshaller interface with the provided implementation.
				 */
				public constructor(implementation: {
					toAsciiString(param0: javalangObject): native.Array<number>;
					parseAsciiString(param0: native.Array<number>): javalangObject;
				});
				public parseAsciiString(param0: native.Array<number>): javalangObject;
				public toAsciiString(param0: javalangObject): native.Array<number>;
			}
		}
	}
}

import javanetURL = java.net.URL;
import javautilEnumeration = java.util.Enumeration;
/// <reference path="./io.grpc.zzbc.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
declare module io {
	export module grpc {
		export abstract class ManagedChannelProvider {
			public zzaa(param0: string, param1: number): io.grpc.zzbc;
			public static zzcyc(): io.grpc.ManagedChannelProvider;
			public zztt(param0: string): io.grpc.zzbc;
			public constructor();
			public priority(): number;
			public static isAndroid(): boolean;
		}
		export module ManagedChannelProvider {
			export class zza {
				public constructor(param0: string);
			}
			export class zzb {
				public loadClass(param0: string): javalangClass;
				public findResource(param0: string): javanetURL;
				public findResources(param0: string): javautilEnumeration;
				public constructor(param0: javalangClassLoader);
			}
		}
	}
}

import javanetURI = java.net.URI;
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbu.d.ts" />
/// <reference path="./io.grpc.zzbv.d.ts" />
/// <reference path="./io.grpc.zzd.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export abstract class NameResolverProvider extends io.grpc.zzbv {
			public static PARAMS_DEFAULT_PORT: io.grpc.zzd;
			public static getCandidatesViaServiceLoader(param0: javalangClassLoader): javalangIterable;
			public static providers(): javautilList;
			public constructor();
			public static asFactory(): io.grpc.zzbv;
			public priority(): number;
			public static getCandidatesViaHardCoded(param0: javalangClassLoader): javalangIterable;
			public isAvailable(): boolean;
		}
		export module NameResolverProvider {
			export class zza extends io.grpc.zzbv {
				public getDefaultScheme(): string;
				public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.zzbu;
				public constructor(param0: javautilList);
				public constructor();
			}
			export class zzb {
				public loadClass(param0: string): javalangClass;
				public findResource(param0: string): javanetURL;
				public findResources(param0: string): javautilEnumeration;
				public constructor(param0: javalangClassLoader);
			}
		}
	}
}

/// <reference path="./io.grpc.zzci.d.ts" />
declare module io {
	export module grpc {
		export abstract class ServerProvider {
			public static zzcyr(): io.grpc.ServerProvider;
			public constructor();
			public priority(): number;
			public zzlj(param0: number): io.grpc.zzci;
			public isAvailable(): boolean;
		}
	}
}

/// <reference path="./io.grpc.internal.AbstractClientStream.d.ts" />
/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.internal.Framer.d.ts" />
/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.internal.StreamListener.d.ts" />
/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.WritableBufferAllocator.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractClientStream extends io.grpc.internal.AbstractStream implements io.grpc.internal.ClientStream, io.grpc.internal.MessageFramer.Sink {
				public writeMessage(param0: javaioInputStream): void;
				public deliverFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public abstractClientStreamSink(): io.grpc.internal.AbstractClientStream.Sink;
				public setMaxOutboundMessageSize(param0: number): void;
				public cancel(param0: io.grpc.zzcq): void;
				public constructor();
				public setAuthority(param0: string): void;
				public flush(): void;
				public halfClose(): void;
				public constructor(param0: io.grpc.internal.WritableBufferAllocator, param1: io.grpc.internal.StatsTraceContext, param2: io.grpc.zzbe, param3: boolean);
				public setDecompressor(param0: io.grpc.zzag): void;
				public setMaxInboundMessageSize(param0: number): void;
				public request(param0: number): void;
				public transportState(): io.grpc.internal.AbstractStream.TransportState;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public transportState(): io.grpc.internal.AbstractClientStream.TransportState;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
				public framer(): io.grpc.internal.Framer;
			}
			export module AbstractClientStream {
				export class GetFramer {
					public writePayload(param0: javaioInputStream): void;
					public close(): void;
					public dispose(): void;
					public flush(): void;
					public setMessageCompression(param0: boolean): io.grpc.internal.Framer;
					public setCompressor(param0: io.grpc.zzu): io.grpc.internal.Framer;
					public setMaxOutboundMessageSize(param0: number): void;
					public constructor(param0: io.grpc.internal.AbstractClientStream, param1: io.grpc.zzbe, param2: io.grpc.internal.StatsTraceContext);
					public isClosed(): boolean;
				}
				export class Sink {
					/**
					 * Constructs a new instance of the io.grpc.internal.AbstractClientStream$Sink interface with the provided implementation.
					 */
					public constructor(implementation: {
						writeHeaders(param0: io.grpc.zzbe, param1: native.Array<number>): void;
						writeFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
						request(param0: number): void;
						cancel(param0: io.grpc.zzcq): void;
					});
					public writeFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
					public writeHeaders(param0: io.grpc.zzbe, param1: native.Array<number>): void;
					public request(param0: number): void;
					public cancel(param0: io.grpc.zzcq): void;
				}
				export abstract class TransportState extends io.grpc.internal.AbstractStream.TransportState {
					public listener(): io.grpc.internal.ClientStreamListener;
					public transportReportStatus(param0: io.grpc.zzcq, param1: boolean, param2: io.grpc.zzbe): void;
					public inboundHeadersReceived(param0: io.grpc.zzbe): void;
					public constructor(param0: number, param1: io.grpc.internal.StatsTraceContext);
					public messageRead(param0: javaioInputStream): void;
					public endOfStream(): void;
					public inboundDataReceived(param0: io.grpc.internal.ReadableBuffer): void;
					public inboundTrailersReceived(param0: io.grpc.zzbe, param1: io.grpc.zzcq): void;
					public setListener(param0: io.grpc.internal.ClientStreamListener): void;
					public bytesRead(param0: number): void;
					public deliveryStalled(): void;
					public listener(): io.grpc.internal.StreamListener;
				}
			}
		}
	}
}

import javanetSocketAddress = java.net.SocketAddress;
import comgoogleandroidgmsinternalzzers = com.google.android.gms.internal.zzers;
/// <reference path="./com.google.android.gms.internal.zzers.d.ts" />
/// <reference path="./io.grpc.internal.ClientTransportFactory.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzah.d.ts" />
/// <reference path="./io.grpc.zzav.d.ts" />
/// <reference path="./io.grpc.zzbb.d.ts" />
/// <reference path="./io.grpc.zzbc.d.ts" />
/// <reference path="./io.grpc.zzbu.d.ts" />
/// <reference path="./io.grpc.zzbv.d.ts" />
/// <reference path="./io.grpc.zzl.d.ts" />
/// <reference path="./io.grpc.zzv.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractManagedChannelImplBuilder extends io.grpc.zzbc {
				public nameResolverFactory(param0: io.grpc.zzbv): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public intercept(param0: javautilList): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public userAgent(param0: string): io.grpc.zzbc;
				public compressorRegistry(param0: io.grpc.zzv): io.grpc.zzbc;
				public getNameResolverParams(): io.grpc.zza;
				public directExecutor(): io.grpc.zzbc;
				public decompressorRegistry(param0: io.grpc.zzah): io.grpc.zzbc;
				public constructor(param0: javanetSocketAddress, param1: string);
				public constructor(param0: string);
				public constructor();
				public executor(param0: javautilconcurrentExecutor): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public idleTimeout(param0: number, param1: javautilconcurrentTimeUnit): io.grpc.zzbc;
				public buildTransportFactory(): io.grpc.internal.ClientTransportFactory;
				public overrideAuthority(param0: string): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public intercept(param0: javautilList): io.grpc.zzbc;
				public decompressorRegistry(param0: io.grpc.zzah): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public setEnableStatsTagPropagation(param0: boolean): void;
				public compressorRegistry(param0: io.grpc.zzv): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public checkAuthority(param0: string): string;
				public idleTimeout(param0: number, param1: javautilconcurrentTimeUnit): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public intercept(param0: native.Array<io.grpc.zzl>): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public recordsStats(): boolean;
				public userAgent(param0: string): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public statsContextFactory(param0: comgoogleandroidgmsinternalzzers): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public executor(param0: javautilconcurrentExecutor): io.grpc.zzbc;
				public maxInboundMessageSize(param0: number): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public setEnableTracing(param0: boolean): void;
				public build(): io.grpc.zzbb;
				public maxInboundMessageSize(param0: number): io.grpc.zzbc;
				public maxInboundMessageSize(): number;
				public loadBalancerFactory(param0: io.grpc.zzav): io.grpc.zzbc;
				public loadBalancerFactory(param0: io.grpc.zzav): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public directExecutor(): io.grpc.internal.AbstractManagedChannelImplBuilder;
				public overrideAuthority(param0: string): io.grpc.zzbc;
				public intercept(param0: native.Array<io.grpc.zzl>): io.grpc.zzbc;
				public nameResolverFactory(param0: io.grpc.zzbv): io.grpc.zzbc;
			}
			export module AbstractManagedChannelImplBuilder {
				export class DirectAddressNameResolverFactory extends io.grpc.zzbv {
					public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.zzbu;
					public getDefaultScheme(): string;
				}
			}
		}
	}
}

import javanioByteBuffer = java.nio.ByteBuffer;
/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractReadableBuffer {
				public readUnsignedMedium(): number;
				public close(): void;
				public skipBytes(param0: number): void;
				public readInt(): number;
				public readableBytes(): number;
				public readUnsignedShort(): number;
				public readBytes(param0: javaioOutputStream, param1: number): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public constructor();
				public readUnsignedByte(): number;
				public checkReadable(param0: number): void;
				public arrayOffset(): number;
				public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
				public readBytes(param0: javanioByteBuffer): void;
				public hasArray(): boolean;
				public array(): native.Array<number>;
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzers.d.ts" />
/// <reference path="./io.grpc.internal.InternalServer.d.ts" />
/// <reference path="./io.grpc.zzah.d.ts" />
/// <reference path="./io.grpc.zzap.d.ts" />
/// <reference path="./io.grpc.zzch.d.ts" />
/// <reference path="./io.grpc.zzci.d.ts" />
/// <reference path="./io.grpc.zzcm.d.ts" />
/// <reference path="./io.grpc.zzco.d.ts" />
/// <reference path="./io.grpc.zzcp.d.ts" />
/// <reference path="./io.grpc.zze.d.ts" />
/// <reference path="./io.grpc.zzv.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractServerImplBuilder extends io.grpc.zzci {
				public addService(param0: io.grpc.zze): io.grpc.zzci;
				public statsContextFactory(param0: comgoogleandroidgmsinternalzzers): io.grpc.internal.AbstractServerImplBuilder;
				public directExecutor(): io.grpc.zzci;
				public executor(param0: javautilconcurrentExecutor): io.grpc.zzci;
				public decompressorRegistry(param0: io.grpc.zzah): io.grpc.zzci;
				public addService(param0: io.grpc.zze): io.grpc.internal.AbstractServerImplBuilder;
				public addTransportFilter(param0: io.grpc.zzcp): io.grpc.zzci;
				public addTransportFilter(param0: io.grpc.zzcp): io.grpc.internal.AbstractServerImplBuilder;
				public executor(param0: javautilconcurrentExecutor): io.grpc.internal.AbstractServerImplBuilder;
				public compressorRegistry(param0: io.grpc.zzv): io.grpc.internal.AbstractServerImplBuilder;
				public compressorRegistry(param0: io.grpc.zzv): io.grpc.zzci;
				public constructor();
				public directExecutor(): io.grpc.internal.AbstractServerImplBuilder;
				public addService(param0: io.grpc.zzcm): io.grpc.zzci;
				public addStreamTracerFactory(param0: io.grpc.zzco): io.grpc.zzci;
				public fallbackHandlerRegistry(param0: io.grpc.zzap): io.grpc.zzci;
				public fallbackHandlerRegistry(param0: io.grpc.zzap): io.grpc.internal.AbstractServerImplBuilder;
				public addStreamTracerFactory(param0: io.grpc.zzco): io.grpc.internal.AbstractServerImplBuilder;
				public decompressorRegistry(param0: io.grpc.zzah): io.grpc.internal.AbstractServerImplBuilder;
				public build(): io.grpc.zzch;
				public buildTransportServer(param0: javautilList): io.grpc.internal.InternalServer;
				public addService(param0: io.grpc.zzcm): io.grpc.internal.AbstractServerImplBuilder;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.Framer.d.ts" />
/// <reference path="./io.grpc.internal.MessageFramer.d.ts" />
/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.ServerStreamListener.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.internal.StreamListener.d.ts" />
/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.WritableBufferAllocator.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractServerStream extends io.grpc.internal.AbstractStream implements io.grpc.internal.MessageFramer.Sink, io.grpc.internal.ServerStream {
				public transportState(): io.grpc.internal.AbstractServerStream.TransportState;
				public writeHeaders(param0: io.grpc.zzbe): void;
				public writeMessage(param0: javaioInputStream): void;
				public deliverFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
				public isReady(): boolean;
				public getAuthority(): string;
				public getAttributes(): io.grpc.zza;
				public setListener(param0: io.grpc.internal.ServerStreamListener): void;
				public cancel(param0: io.grpc.zzcq): void;
				public constructor();
				public flush(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public abstractServerStreamSink(): io.grpc.internal.AbstractServerStream.Sink;
				public request(param0: number): void;
				public statsTraceContext(): io.grpc.internal.StatsTraceContext;
				public transportState(): io.grpc.internal.AbstractStream.TransportState;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public constructor(param0: io.grpc.internal.WritableBufferAllocator, param1: io.grpc.internal.StatsTraceContext);
				public framer(): io.grpc.internal.Framer;
				public close(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
				public framer(): io.grpc.internal.MessageFramer;
			}
			export module AbstractServerStream {
				export class Sink {
					/**
					 * Constructs a new instance of the io.grpc.internal.AbstractServerStream$Sink interface with the provided implementation.
					 */
					public constructor(implementation: {
						writeHeaders(param0: io.grpc.zzbe): void;
						writeFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean): void;
						writeTrailers(param0: io.grpc.zzbe, param1: boolean): void;
						request(param0: number): void;
						cancel(param0: io.grpc.zzcq): void;
					});
					public writeTrailers(param0: io.grpc.zzbe, param1: boolean): void;
					public writeHeaders(param0: io.grpc.zzbe): void;
					public request(param0: number): void;
					public cancel(param0: io.grpc.zzcq): void;
					public writeFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean): void;
				}
				export abstract class TransportState extends io.grpc.internal.AbstractStream.TransportState {
					public inboundDataReceived(param0: io.grpc.internal.ReadableBuffer, param1: boolean): void;
					public setListener(param0: io.grpc.internal.ServerStreamListener): void;
					public transportReportStatus(param0: io.grpc.zzcq): void;
					public constructor(param0: number, param1: io.grpc.internal.StatsTraceContext);
					public complete(): void;
					public messageRead(param0: javaioInputStream): void;
					public endOfStream(): void;
					public onStreamAllocated(): void;
					public bytesRead(param0: number): void;
					public deliveryStalled(): void;
					public listener(): io.grpc.internal.StreamListener;
					public listener(): io.grpc.internal.ServerStreamListener;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.Framer.d.ts" />
/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.internal.StreamListener.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class AbstractStream {
				public endOfMessages(): void;
				public writeMessage(param0: javaioInputStream): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public request(param0: number): void;
				public transportState(): io.grpc.internal.AbstractStream.TransportState;
				public setMessageCompression(param0: boolean): void;
				public setCompressor(param0: io.grpc.zzu): void;
				public isReady(): boolean;
				public onSendingBytes(param0: number): void;
				public framer(): io.grpc.internal.Framer;
				public constructor();
				public flush(): void;
			}
			export module AbstractStream {
				export abstract class TransportState {
					public static DEFAULT_ONREADY_THRESHOLD: number;
					public isDeframerStalled(): boolean;
					public onStreamDeallocated(): void;
					public deframe(param0: io.grpc.internal.ReadableBuffer, param1: boolean): void;
					public onSentBytes(param0: number): void;
					public onStreamAllocated(): void;
					public getStatsTraceContext(): io.grpc.internal.StatsTraceContext;
					public requestMessagesFromDeframer(param0: number): void;
					public deframeFailed(param0: javalangThrowable): void;
					public closeDeframer(): void;
					public constructor(param0: number, param1: io.grpc.internal.StatsTraceContext);
					public messageRead(param0: javaioInputStream): void;
					public endOfStream(): void;
					public bytesRead(param0: number): void;
					public listener(): io.grpc.internal.StreamListener;
					public deliveryStalled(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class AtomicBackoff {
				public getState(): io.grpc.internal.AtomicBackoff.State;
				public constructor(param0: string, param1: number);
			}
			export module AtomicBackoff {
				export class State {
					public get(): number;
					public backoff(): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.BackoffPolicy.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class BackoffPolicy {
				/**
				 * Constructs a new instance of the io.grpc.internal.BackoffPolicy interface with the provided implementation.
				 */
				public constructor(implementation: {
					nextBackoffNanos(): number;
				});
				public nextBackoffNanos(): number;
			}
			export module BackoffPolicy {
				export class Provider {
					/**
					 * Constructs a new instance of the io.grpc.internal.BackoffPolicy$Provider interface with the provided implementation.
					 */
					public constructor(implementation: {
						get(): io.grpc.internal.BackoffPolicy;
					});
					public get(): io.grpc.internal.BackoffPolicy;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.ConnectionClientTransport.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class CallCredentialsApplyingTransportFactory {
				public close(): void;
				public newClientTransport(param0: javanetSocketAddress, param1: string, param2: string): io.grpc.internal.ConnectionClientTransport;
			}
			export module CallCredentialsApplyingTransportFactory {
				export class CallCredentialsApplyingTransport extends io.grpc.internal.ForwardingConnectionClientTransport {
					public delegate(): io.grpc.internal.ConnectionClientTransport;
					public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
					public getAttributes(): io.grpc.zza;
					public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcn.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./io.grpc.zzp.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class CensusStatsModule {
			}
			export module CensusStatsModule {
				export class ClientCallTracer extends io.grpc.zzq {
					public newClientStreamTracer(param0: io.grpc.zzbe): io.grpc.zzp;
				}
				export class ClientTracer extends io.grpc.zzp {
					public outboundWireSize(param0: number): void;
					public inboundUncompressedSize(param0: number): void;
					public inboundWireSize(param0: number): void;
					public outboundUncompressedSize(param0: number): void;
				}
				export class ServerTracer extends io.grpc.zzcn {
					public outboundWireSize(param0: number): void;
					public inboundUncompressedSize(param0: number): void;
					public filterContext(param0: io.grpc.zzy): io.grpc.zzy;
					public inboundWireSize(param0: number): void;
					public streamClosed(param0: io.grpc.zzcq): void;
					public outboundUncompressedSize(param0: number): void;
				}
				export class ServerTracerFactory extends io.grpc.zzco {
					public newServerStreamTracer(param0: string, param1: io.grpc.zzbe): io.grpc.zzcn;
				}
				export class StatsClientInterceptor {
					public interceptCall(param0: io.grpc.zzbp, param1: io.grpc.zzh, param2: io.grpc.zzi): io.grpc.zzj;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcn.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./io.grpc.zzp.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class CensusTracingModule {
			}
			export module CensusTracingModule {
				export class ClientCallTracer extends io.grpc.zzq {
					public newClientStreamTracer(param0: io.grpc.zzbe): io.grpc.zzp;
				}
				export class ServerTracer extends io.grpc.zzcn {
					public filterContext(param0: io.grpc.zzy): io.grpc.zzy;
					public streamClosed(param0: io.grpc.zzcq): void;
				}
				export class ServerTracerFactory extends io.grpc.zzco {
					public newServerStreamTracer(param0: string, param1: io.grpc.zzbe): io.grpc.zzcn;
				}
				export class TracingClientInterceptor {
					public interceptCall(param0: io.grpc.zzbp, param1: io.grpc.zzh, param2: io.grpc.zzi): io.grpc.zzj;
				}
			}
		}
	}
}

declare module io {
	export module grpc {
		export module internal {
			export class ChannelExecutor {
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientCallImpl.d.ts" />
/// <reference path="./io.grpc.internal.ClientTransport.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzay.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzk.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ClientCallImpl extends io.grpc.zzj implements io.grpc.zzy.zzb {
				public halfClose(): void;
				public cancelled(param0: io.grpc.zzy): void;
				public request(param0: number): void;
				public setMessageCompression(param0: boolean): void;
				public start(param0: io.grpc.zzk, param1: io.grpc.zzbe): void;
				public isReady(): boolean;
				public cancel(param0: string, param1: javalangThrowable): void;
				public sendMessage(param0: javalangObject): void;
				public getAttributes(): io.grpc.zza;
			}
			export module ClientCallImpl {
				export class ClientStreamListenerImpl {
					public constructor(param0: io.grpc.internal.ClientCallImpl, param1: io.grpc.zzk);
					public closed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
					public headersRead(param0: io.grpc.zzbe): void;
					public onReady(): void;
					public messageRead(param0: javaioInputStream): void;
				}
				export class ClientTransportProvider {
					/**
					 * Constructs a new instance of the io.grpc.internal.ClientCallImpl$ClientTransportProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						get(param0: io.grpc.zzay): io.grpc.internal.ClientTransport;
					});
					public get(param0: io.grpc.zzay): io.grpc.internal.ClientTransport;
				}
				export class DeadlineTimer {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ClientStream {
				/**
				 * Constructs a new instance of the io.grpc.internal.ClientStream interface with the provided implementation.
				 */
				public constructor(implementation: {
					cancel(param0: io.grpc.zzcq): void;
					halfClose(): void;
					setAuthority(param0: string): void;
					start(param0: io.grpc.internal.ClientStreamListener): void;
					setMaxInboundMessageSize(param0: number): void;
					setMaxOutboundMessageSize(param0: number): void;
					getAttributes(): io.grpc.zza;
					request(param0: number): void;
					writeMessage(param0: javaioInputStream): void;
					flush(): void;
					isReady(): boolean;
					setCompressor(param0: io.grpc.zzu): void;
					setDecompressor(param0: io.grpc.zzag): void;
					setMessageCompression(param0: boolean): void;
				});
				public writeMessage(param0: javaioInputStream): void;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public cancel(param0: io.grpc.zzcq): void;
				public setMaxOutboundMessageSize(param0: number): void;
				public setAuthority(param0: string): void;
				public flush(): void;
				public halfClose(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public setMaxInboundMessageSize(param0: number): void;
				public request(param0: number): void;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ClientStreamListener {
				/**
				 * Constructs a new instance of the io.grpc.internal.ClientStreamListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					headersRead(param0: io.grpc.zzbe): void;
					closed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
					messageRead(param0: javaioInputStream): void;
					onReady(): void;
				});
				public messageRead(param0: javaioInputStream): void;
				public onReady(): void;
				public closed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
				public headersRead(param0: io.grpc.zzbe): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ClientTransport {
				/**
				 * Constructs a new instance of the io.grpc.internal.ClientTransport interface with the provided implementation.
				 */
				public constructor(implementation: {
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
					ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				});
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
			}
			export module ClientTransport {
				export class PingCallback {
					/**
					 * Constructs a new instance of the io.grpc.internal.ClientTransport$PingCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(param0: number): void;
						onFailure(param0: javalangThrowable): void;
					});
					public onSuccess(param0: number): void;
					public onFailure(param0: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ConnectionClientTransport.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ClientTransportFactory {
				/**
				 * Constructs a new instance of the io.grpc.internal.ClientTransportFactory interface with the provided implementation.
				 */
				public constructor(implementation: {
					newClientTransport(param0: javanetSocketAddress, param1: string, param2: string): io.grpc.internal.ConnectionClientTransport;
					close(): void;
				});
				public close(): void;
				public newClientTransport(param0: javanetSocketAddress, param1: string, param2: string): io.grpc.internal.ConnectionClientTransport;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class CompositeReadableBuffer extends io.grpc.internal.AbstractReadableBuffer {
				public readUnsignedMedium(): number;
				public close(): void;
				public skipBytes(param0: number): void;
				public readInt(): number;
				public readableBytes(): number;
				public readUnsignedShort(): number;
				public readBytes(param0: javaioOutputStream, param1: number): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public constructor();
				public readUnsignedByte(): number;
				public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
				public arrayOffset(): number;
				public addBuffer(param0: io.grpc.internal.ReadableBuffer): void;
				public readBytes(param0: javanioByteBuffer): void;
				public readBytes(param0: number): io.grpc.internal.CompositeReadableBuffer;
				public hasArray(): boolean;
				public array(): native.Array<number>;
			}
			export module CompositeReadableBuffer {
				export abstract class ReadOperation {
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ConnectionClientTransport {
				/**
				 * Constructs a new instance of the io.grpc.internal.ConnectionClientTransport interface with the provided implementation.
				 */
				public constructor(implementation: {
					getAttributes(): io.grpc.zza;
					start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
					shutdown(): void;
					shutdownNow(param0: io.grpc.zzcq): void;
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
					ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
					getLogId(): io.grpc.internal.LogId;
				});
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
				public start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
				public getAttributes(): io.grpc.zza;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module internal {
			export class ConnectivityStateManager {
			}
			export module ConnectivityStateManager {
				export class StateCallbackEntry {
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzy.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class ContextRunnable {
				public run(): void;
				public constructor(param0: io.grpc.zzy);
				public runInContext(): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class DelayedClientTransport {
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
				public start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
				public hasPendingStreams(): boolean;
			}
			export module DelayedClientTransport {
				export class PendingStream extends io.grpc.internal.DelayedStream {
					public setMaxInboundMessageSize(param0: number): void;
					public setAuthority(param0: string): void;
					public start(param0: io.grpc.internal.ClientStreamListener): void;
					public setMaxOutboundMessageSize(param0: number): void;
					public cancel(param0: io.grpc.zzcq): void;
					public halfClose(): void;
					public getAttributes(): io.grpc.zza;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class DelayedStream {
				public writeMessage(param0: javaioInputStream): void;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public setMaxOutboundMessageSize(param0: number): void;
				public cancel(param0: io.grpc.zzcq): void;
				public setAuthority(param0: string): void;
				public flush(): void;
				public halfClose(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public setMaxInboundMessageSize(param0: number): void;
				public request(param0: number): void;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
			}
			export module DelayedStream {
				export class DelayedStreamListener {
					public constructor(param0: io.grpc.internal.ClientStreamListener);
					public closed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
					public headersRead(param0: io.grpc.zzbe): void;
					public onReady(): void;
					public messageRead(param0: javaioInputStream): void;
					public drainPendingCallbacks(): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbw.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class DnsNameResolver extends io.grpc.zzbu {
				public shutdown(): void;
				public start(param0: io.grpc.zzbw): void;
				public refresh(): void;
				public getServiceAuthority(): string;
			}
			export module DnsNameResolver {
				export class CompositeResolver extends io.grpc.internal.DnsNameResolver.DelegateResolver {
				}
				export abstract class DelegateResolver {
				}
				export class JdkResolver extends io.grpc.internal.DnsNameResolver.DelegateResolver {
				}
				export class JndiResolver extends io.grpc.internal.DnsNameResolver.DelegateResolver {
				}
				export class ResolutionResults {
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.DnsNameResolver.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbu.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class DnsNameResolverProvider extends io.grpc.NameResolverProvider {
				public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.internal.DnsNameResolver;
				public isAvailable(): boolean;
				public getDefaultScheme(): string;
				public priority(): number;
				public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.zzbu;
				public constructor();
			}
		}
	}
}

/// <reference path="./io.grpc.internal.BackoffPolicy.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ExponentialBackoffPolicy {
				public nextBackoffNanos(): number;
			}
			export module ExponentialBackoffPolicy {
				export class Provider {
					public get(): io.grpc.internal.BackoffPolicy;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class FailingClientStream extends io.grpc.internal.NoopClientStream {
				public halfClose(): void;
				public setMaxInboundMessageSize(param0: number): void;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
				public constructor(param0: io.grpc.zzcq);
				public getAttributes(): io.grpc.zza;
				public cancel(param0: io.grpc.zzcq): void;
				public setMaxOutboundMessageSize(param0: number): void;
				public constructor();
				public setAuthority(param0: string): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class FailingClientTransport {
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class FixedObjectPool {
				public getObject(): javalangObject;
				public constructor(param0: javalangObject);
				public returnObject(param0: javalangObject): javalangObject;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.ConnectionClientTransport.d.ts" />
/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class ForwardingConnectionClientTransport {
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public shutdown(): void;
				public delegate(): io.grpc.internal.ConnectionClientTransport;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
				public start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
				public getAttributes(): io.grpc.zza;
				public toString(): string;
			}
		}
	}
}

/// <reference path="./io.grpc.zzbw.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ForwardingNameResolver extends io.grpc.zzbu {
				public shutdown(): void;
				public start(param0: io.grpc.zzbw): void;
				public refresh(): void;
				public getServiceAuthority(): string;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ForwardingReadableBuffer {
				public readUnsignedMedium(): number;
				public close(): void;
				public skipBytes(param0: number): void;
				public readInt(): number;
				public readableBytes(): number;
				public readUnsignedShort(): number;
				public readBytes(param0: javaioOutputStream, param1: number): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public readUnsignedByte(): number;
				public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
				public arrayOffset(): number;
				public readBytes(param0: javanioByteBuffer): void;
				public hasArray(): boolean;
				public constructor(param0: io.grpc.internal.ReadableBuffer);
				public array(): native.Array<number>;
			}
		}
	}
}

/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class Framer {
				/**
				 * Constructs a new instance of the io.grpc.internal.Framer interface with the provided implementation.
				 */
				public constructor(implementation: {
					writePayload(param0: javaioInputStream): void;
					flush(): void;
					isClosed(): boolean;
					close(): void;
					dispose(): void;
					setMessageCompression(param0: boolean): io.grpc.internal.Framer;
					setCompressor(param0: io.grpc.zzu): io.grpc.internal.Framer;
					setMaxOutboundMessageSize(param0: number): void;
				});
				public close(): void;
				public dispose(): void;
				public isClosed(): boolean;
				public setMessageCompression(param0: boolean): io.grpc.internal.Framer;
				public setCompressor(param0: io.grpc.zzu): io.grpc.internal.Framer;
				public setMaxOutboundMessageSize(param0: number): void;
				public writePayload(param0: javaioInputStream): void;
				public flush(): void;
			}
		}
	}
}

import comgooglecommonbaseSplitter = com.google.common.base.Splitter;
import comgooglecommonbaseSupplier = com.google.common.base.Supplier;
/// <reference path="./com.google.common.base.Splitter.d.ts" />
/// <reference path="./com.google.common.base.Supplier.d.ts" />
/// <reference path="./io.grpc.zzbm.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class GrpcUtil {
				public static US_ASCII: javaniocharsetCharset;
				public static IS_RESTRICTED_APPENGINE: boolean;
				public static TIMEOUT_KEY: io.grpc.zzbm;
				public static MESSAGE_ENCODING_KEY: io.grpc.zzbm;
				public static MESSAGE_ACCEPT_ENCODING_KEY: io.grpc.zzbm;
				public static CONTENT_TYPE_KEY: io.grpc.zzbm;
				public static USER_AGENT_KEY: io.grpc.zzbm;
				public static DEFAULT_PORT_PLAINTEXT: number;
				public static DEFAULT_PORT_SSL: number;
				public static CONTENT_TYPE_GRPC: string;
				public static HTTP_METHOD: string;
				public static TE_TRAILERS: string;
				public static TIMEOUT: string;
				public static MESSAGE_ENCODING: string;
				public static MESSAGE_ACCEPT_ENCODING: string;
				public static DEFAULT_MAX_MESSAGE_SIZE: number;
				public static DEFAULT_MAX_HEADER_LIST_SIZE: number;
				public static ACCEPT_ENCODING_SPLITTER: comgooglecommonbaseSplitter;
				public static DEFAULT_KEEPALIVE_TIME_NANOS: number;
				public static DEFAULT_KEEPALIVE_TIMEOUT_NANOS: number;
				public static KEEPALIVE_TIME_NANOS_DISABLED: number;
				public static DEFAULT_SERVER_KEEPALIVE_TIME_NANOS: number;
				public static DEFAULT_SERVER_KEEPALIVE_TIMEOUT_NANOS: number;
				public static SERVER_KEEPALIVE_TIME_NANOS_DISABLED: number;
				public static SHARED_CHANNEL_EXECUTOR: io.grpc.internal.SharedResourceHolder.Resource;
				public static TIMER_SERVICE: io.grpc.internal.SharedResourceHolder.Resource;
				public static STOPWATCH_SUPPLIER: comgooglecommonbaseSupplier;
				public static getGrpcUserAgent(param0: string, param1: string): string;
				public static authorityToUri(param0: string): javanetURI;
				public static getThreadFactory(param0: string, param1: boolean): javautilconcurrentThreadFactory;
				public static authorityFromHostAndPort(param0: string, param1: number): string;
				public static isGrpcContentType(param0: string): boolean;
				public static httpStatusToGrpcStatus(param0: number): io.grpc.zzcq;
				public static checkAuthority(param0: string): string;
			}
			export module GrpcUtil {
				export class AcceptEncodingMarshaller {
					public toAsciiString(param0: native.Array<number>): native.Array<number>;
					public parseAsciiString(param0: native.Array<number>): native.Array<number>;
					public toAsciiString(param0: javalangObject): native.Array<number>;
					public parseAsciiString(param0: native.Array<number>): javalangObject;
				}
				export class Http2Error {
					public static NO_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static PROTOCOL_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static INTERNAL_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static FLOW_CONTROL_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static SETTINGS_TIMEOUT: io.grpc.internal.GrpcUtil.Http2Error;
					public static STREAM_CLOSED: io.grpc.internal.GrpcUtil.Http2Error;
					public static FRAME_SIZE_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static REFUSED_STREAM: io.grpc.internal.GrpcUtil.Http2Error;
					public static CANCEL: io.grpc.internal.GrpcUtil.Http2Error;
					public static COMPRESSION_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static CONNECT_ERROR: io.grpc.internal.GrpcUtil.Http2Error;
					public static ENHANCE_YOUR_CALM: io.grpc.internal.GrpcUtil.Http2Error;
					public static INADEQUATE_SECURITY: io.grpc.internal.GrpcUtil.Http2Error;
					public static HTTP_1_1_REQUIRED: io.grpc.internal.GrpcUtil.Http2Error;
					public static valueOf(param0: string): io.grpc.internal.GrpcUtil.Http2Error;
					public static forCode(param0: number): io.grpc.internal.GrpcUtil.Http2Error;
					public static statusForCode(param0: number): io.grpc.zzcq;
					public status(): io.grpc.zzcq;
					public static values(): native.Array<io.grpc.internal.GrpcUtil.Http2Error>;
					public code(): number;
				}
				export class TimeoutMarshaller {
					public parseAsciiString(param0: string): javalangObject;
					public parseAsciiString(param0: string): javalangLong;
					public toAsciiString(param0: javalangLong): string;
					public toAsciiString(param0: javalangObject): string;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export abstract class Http2ClientStreamTransportState extends io.grpc.internal.AbstractClientStream.TransportState {
				public transportHeadersReceived(param0: io.grpc.zzbe): void;
				public endOfStream(): void;
				public messageRead(param0: javaioInputStream): void;
				public transportDataReceived(param0: io.grpc.internal.ReadableBuffer, param1: boolean): void;
				public bytesRead(param0: number): void;
				public transportTrailersReceived(param0: io.grpc.zzbe): void;
				public constructor(param0: number, param1: io.grpc.internal.StatsTraceContext);
				public http2ProcessingFailed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
				public deliveryStalled(): void;
			}
		}
	}
}

import comgooglecommonbaseStopwatch = com.google.common.base.Stopwatch;
/// <reference path="./com.google.common.base.Stopwatch.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class Http2Ping {
				public addCallback(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public failed(param0: javalangThrowable): void;
				public payload(): number;
				public complete(): boolean;
				public static notifyFailed(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor, param2: javalangThrowable): void;
				public constructor(param0: number, param1: comgooglecommonbaseStopwatch);
			}
		}
	}
}

declare module io {
	export module grpc {
		export module internal {
			export abstract class InUseStateAggregator {
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class InternalHandlerRegistry {
				public getServices(): javautilList;
			}
			export module InternalHandlerRegistry {
				export class Builder {
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ServerListener.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class InternalServer {
				/**
				 * Constructs a new instance of the io.grpc.internal.InternalServer interface with the provided implementation.
				 */
				public constructor(implementation: {
					start(param0: io.grpc.internal.ServerListener): void;
					shutdown(): void;
					getPort(): number;
				});
				public shutdown(): void;
				public getPort(): number;
				public start(param0: io.grpc.internal.ServerListener): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zzak.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class InternalSubchannel {
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public updateAddresses(param0: io.grpc.zzak): void;
			}
			export module InternalSubchannel {
				export class Callback {
				}
				export class TransportListener {
					public transportReady(): void;
					public transportInUse(param0: boolean): void;
					public transportShutdown(param0: io.grpc.zzcq): void;
					public transportTerminated(): void;
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class IoUtils {
				public static toByteArray(param0: javaioInputStream): native.Array<number>;
				public constructor();
			}
		}
	}
}

import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
/// <reference path="./io.grpc.internal.ConnectionClientTransport.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class KeepAliveManager {
				public onTransportActive(): void;
				public static clampKeepAliveTimeoutInNanos(param0: number): number;
				public onDataReceived(): void;
				public onTransportIdle(): void;
				public static clampKeepAliveTimeInNanos(param0: number): number;
				public onTransportTermination(): void;
				public constructor(param0: io.grpc.internal.KeepAliveManager.KeepAlivePinger, param1: javautilconcurrentScheduledExecutorService, param2: number, param3: number, param4: boolean);
				public onTransportStarted(): void;
			}
			export module KeepAliveManager {
				export class ClientKeepAlivePinger {
					public ping(): void;
					public constructor(param0: io.grpc.internal.ConnectionClientTransport);
					public onPingTimeout(): void;
				}
				export class KeepAlivePinger {
					/**
					 * Constructs a new instance of the io.grpc.internal.KeepAliveManager$KeepAlivePinger interface with the provided implementation.
					 */
					public constructor(implementation: {
						ping(): void;
						onPingTimeout(): void;
					});
					public ping(): void;
					public onPingTimeout(): void;
				}
				export class State {
					public static IDLE: io.grpc.internal.KeepAliveManager.State;
					public static PING_SCHEDULED: io.grpc.internal.KeepAliveManager.State;
					public static PING_DELAYED: io.grpc.internal.KeepAliveManager.State;
					public static PING_SENT: io.grpc.internal.KeepAliveManager.State;
					public static IDLE_AND_PING_SENT: io.grpc.internal.KeepAliveManager.State;
					public static DISCONNECTED: io.grpc.internal.KeepAliveManager.State;
					public static values(): native.Array<io.grpc.internal.KeepAliveManager.State>;
					public static valueOf(param0: string): io.grpc.internal.KeepAliveManager.State;
				}
				export class SystemTicker extends io.grpc.internal.KeepAliveManager.Ticker {
					public read(): number;
				}
				export abstract class Ticker {
					public read(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class LogExceptionRunnable {
				public run(): void;
				public constructor(param0: javalangRunnable);
				public toString(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class LogId {
				public getId(): number;
				public getTag(): string;
				public static allocate(param0: string): io.grpc.internal.LogId;
				public toString(): string;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.internal.SubchannelImpl.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzak.d.ts" />
/// <reference path="./io.grpc.zzaz.d.ts" />
/// <reference path="./io.grpc.zzba.d.ts" />
/// <reference path="./io.grpc.zzbb.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzbv.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ManagedChannelImpl extends io.grpc.zzbb implements io.grpc.internal.WithLogId {
				public shutdown(): io.grpc.internal.ManagedChannelImpl;
				public newCall(param0: io.grpc.zzbp, param1: io.grpc.zzh): io.grpc.zzj;
				public authority(): string;
				public getLogId(): io.grpc.internal.LogId;
				public isTerminated(): boolean;
				public shutdownNow(): io.grpc.zzbb;
				public isShutdown(): boolean;
				public awaitTermination(param0: number, param1: javautilconcurrentTimeUnit): boolean;
				public shutdown(): io.grpc.zzbb;
				public shutdownNow(): io.grpc.internal.ManagedChannelImpl;
			}
			export module ManagedChannelImpl {
				export class IdleModeTimer {
					public run(): void;
				}
				export class LbHelperImpl extends io.grpc.zzaw {
					public createSubchannel(param0: io.grpc.zzak, param1: io.grpc.zza): io.grpc.zzaz;
					public runSerialized(param0: javalangRunnable): void;
					public updateOobChannelAddresses(param0: io.grpc.zzbb, param1: io.grpc.zzak): void;
					public updatePicker(param0: io.grpc.zzba): void;
					public getNameResolverFactory(): io.grpc.zzbv;
					public createSubchannel(param0: io.grpc.zzak, param1: io.grpc.zza): io.grpc.internal.SubchannelImpl;
					public updateSubchannelAddresses(param0: io.grpc.zzaz, param1: io.grpc.zzak): void;
					public createOobChannel(param0: io.grpc.zzak, param1: string): io.grpc.zzbb;
					public getAuthority(): string;
				}
				export class NameResolverListenerImpl {
					public onAddresses(param0: javautilList, param1: io.grpc.zza): void;
					public onError(param0: io.grpc.zzcq): void;
					public onUpdate(param0: javautilList, param1: io.grpc.zza): void;
				}
				export class RealChannel extends io.grpc.zzi {
					public newCall(param0: io.grpc.zzbp, param1: io.grpc.zzh): io.grpc.zzj;
					public authority(): string;
				}
				export class SubchannelImplImpl extends io.grpc.internal.SubchannelImpl {
					public shutdown(): void;
					public requestConnection(): void;
					public getAttributes(): io.grpc.zza;
					public getAddresses(): io.grpc.zzak;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ManagedClientTransport {
				/**
				 * Constructs a new instance of the io.grpc.internal.ManagedClientTransport interface with the provided implementation.
				 */
				public constructor(implementation: {
					start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
					shutdown(): void;
					shutdownNow(param0: io.grpc.zzcq): void;
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
					newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
					ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
					getLogId(): io.grpc.internal.LogId;
				});
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
				public start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
			}
			export module ManagedClientTransport {
				export class Listener {
					/**
					 * Constructs a new instance of the io.grpc.internal.ManagedClientTransport$Listener interface with the provided implementation.
					 */
					public constructor(implementation: {
						transportShutdown(param0: io.grpc.zzcq): void;
						transportTerminated(): void;
						transportReady(): void;
						transportInUse(param0: boolean): void;
					});
					public transportReady(): void;
					public transportInUse(param0: boolean): void;
					public transportShutdown(param0: io.grpc.zzcq): void;
					public transportTerminated(): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class MessageDeframer {
				public setDecompressor(param0: io.grpc.zzag): void;
				public close(): void;
				public request(param0: number): void;
				public deframe(param0: io.grpc.internal.ReadableBuffer, param1: boolean): void;
				public isClosed(): boolean;
				public isStalled(): boolean;
				public constructor(param0: io.grpc.internal.MessageDeframer.Listener, param1: io.grpc.zzag, param2: number, param3: io.grpc.internal.StatsTraceContext, param4: string);
			}
			export module MessageDeframer {
				export class Listener {
					/**
					 * Constructs a new instance of the io.grpc.internal.MessageDeframer$Listener interface with the provided implementation.
					 */
					public constructor(implementation: {
						bytesRead(param0: number): void;
						messageRead(param0: javaioInputStream): void;
						deliveryStalled(): void;
						endOfStream(): void;
					});
					public messageRead(param0: javaioInputStream): void;
					public endOfStream(): void;
					public bytesRead(param0: number): void;
					public deliveryStalled(): void;
				}
				export class SizeEnforcingInputStream {
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public skip(param0: number): number;
					public mark(param0: number): void;
				}
				export class State {
					public static HEADER: io.grpc.internal.MessageDeframer.State;
					public static BODY: io.grpc.internal.MessageDeframer.State;
					public static valueOf(param0: string): io.grpc.internal.MessageDeframer.State;
					public static values(): native.Array<io.grpc.internal.MessageDeframer.State>;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.Framer.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
/// <reference path="./io.grpc.internal.WritableBufferAllocator.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class MessageFramer {
				public close(): void;
				public constructor(param0: io.grpc.internal.MessageFramer.Sink, param1: io.grpc.internal.WritableBufferAllocator, param2: io.grpc.internal.StatsTraceContext);
				public dispose(): void;
				public isClosed(): boolean;
				public setCompressor(param0: io.grpc.zzu): io.grpc.internal.MessageFramer;
				public setMessageCompression(param0: boolean): io.grpc.internal.Framer;
				public setMessageCompression(param0: boolean): io.grpc.internal.MessageFramer;
				public setCompressor(param0: io.grpc.zzu): io.grpc.internal.Framer;
				public setMaxOutboundMessageSize(param0: number): void;
				public writePayload(param0: javaioInputStream): void;
				public flush(): void;
			}
			export module MessageFramer {
				export class BufferChainOutputStream {
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: number): void;
				}
				export class OutputStreamAdapter {
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: number): void;
				}
				export class Sink {
					/**
					 * Constructs a new instance of the io.grpc.internal.MessageFramer$Sink interface with the provided implementation.
					 */
					public constructor(implementation: {
						deliverFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
					});
					public deliverFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class MetadataApplierImpl {
				public apply(param0: io.grpc.zzbe): void;
				public fail(param0: io.grpc.zzcq): void;
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class MoreThrowables {
				public static throwIfUnchecked(param0: javalangThrowable): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class NoopClientStream {
				public static INSTANCE: io.grpc.internal.NoopClientStream;
				public writeMessage(param0: javaioInputStream): void;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public cancel(param0: io.grpc.zzcq): void;
				public setMaxOutboundMessageSize(param0: number): void;
				public constructor();
				public setAuthority(param0: string): void;
				public flush(): void;
				public halfClose(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public request(param0: number): void;
				public setMaxInboundMessageSize(param0: number): void;
				public setMessageCompression(param0: boolean): void;
				public setCompressor(param0: io.grpc.zzu): void;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ObjectPool {
				/**
				 * Constructs a new instance of the io.grpc.internal.ObjectPool interface with the provided implementation.
				 */
				public constructor(implementation: {
					getObject(): javalangObject;
					returnObject(param0: javalangObject): javalangObject;
				});
				public getObject(): javalangObject;
				public returnObject(param0: javalangObject): javalangObject;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zzbb.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class OobChannel extends io.grpc.zzbb implements io.grpc.internal.WithLogId {
				public newCall(param0: io.grpc.zzbp, param1: io.grpc.zzh): io.grpc.zzj;
				public authority(): string;
				public getLogId(): io.grpc.internal.LogId;
				public isTerminated(): boolean;
				public shutdownNow(): io.grpc.zzbb;
				public awaitTermination(param0: number, param1: javautilconcurrentTimeUnit): boolean;
				public isShutdown(): boolean;
				public shutdown(): io.grpc.zzbb;
			}
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbu.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class OverrideAuthorityNameResolverFactory extends io.grpc.zzbv {
				public getDefaultScheme(): string;
				public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.zzbu;
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class PickSubchannelArgsImpl extends io.grpc.zzay {
				public getMethodDescriptor(): io.grpc.zzbp;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getHeaders(): io.grpc.zzbe;
				public toString(): string;
				public getCallOptions(): io.grpc.zzh;
			}
		}
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ReadableBuffer {
				/**
				 * Constructs a new instance of the io.grpc.internal.ReadableBuffer interface with the provided implementation.
				 */
				public constructor(implementation: {
					readableBytes(): number;
					readUnsignedByte(): number;
					readUnsignedMedium(): number;
					readUnsignedShort(): number;
					readInt(): number;
					skipBytes(param0: number): void;
					readBytes(param0: native.Array<number>, param1: number, param2: number): void;
					readBytes(param0: javanioByteBuffer): void;
					readBytes(param0: javaioOutputStream, param1: number): void;
					readBytes(param0: number): io.grpc.internal.ReadableBuffer;
					hasArray(): boolean;
					array(): native.Array<number>;
					arrayOffset(): number;
					close(): void;
				});
				public readUnsignedMedium(): number;
				public close(): void;
				public skipBytes(param0: number): void;
				public readInt(): number;
				public readableBytes(): number;
				public readUnsignedShort(): number;
				public readBytes(param0: javaioOutputStream, param1: number): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public readUnsignedByte(): number;
				public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
				public arrayOffset(): number;
				public readBytes(param0: javanioByteBuffer): void;
				public hasArray(): boolean;
				public array(): native.Array<number>;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ReadableBuffers {
				public static readAsStringUtf8(param0: io.grpc.internal.ReadableBuffer): string;
				public static readAsString(param0: io.grpc.internal.ReadableBuffer, param1: javaniocharsetCharset): string;
				public static empty(): io.grpc.internal.ReadableBuffer;
				public static readArray(param0: io.grpc.internal.ReadableBuffer): native.Array<number>;
				public static ignoreClose(param0: io.grpc.internal.ReadableBuffer): io.grpc.internal.ReadableBuffer;
				public static wrap(param0: native.Array<number>, param1: number, param2: number): io.grpc.internal.ReadableBuffer;
				public static wrap(param0: javanioByteBuffer): io.grpc.internal.ReadableBuffer;
				public static wrap(param0: native.Array<number>): io.grpc.internal.ReadableBuffer;
				public static openStream(param0: io.grpc.internal.ReadableBuffer, param1: boolean): javaioInputStream;
			}
			export module ReadableBuffers {
				export class BufferInputStream {
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor(param0: io.grpc.internal.ReadableBuffer);
				}
				export class ByteArrayWrapper extends io.grpc.internal.AbstractReadableBuffer {
					public readBytes(param0: javaioOutputStream, param1: number): void;
					public readableBytes(): number;
					public arrayOffset(): number;
					public readBytes(param0: javanioByteBuffer): void;
					public readUnsignedMedium(): number;
					public readUnsignedShort(): number;
					public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
					public array(): native.Array<number>;
					public close(): void;
					public readBytes(param0: number): io.grpc.internal.ReadableBuffers.ByteArrayWrapper;
					public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public skipBytes(param0: number): void;
					public readUnsignedByte(): number;
					public hasArray(): boolean;
					public readInt(): number;
				}
				export class ByteReadableBufferWrapper extends io.grpc.internal.AbstractReadableBuffer {
					public readBytes(param0: javaioOutputStream, param1: number): void;
					public readableBytes(): number;
					public arrayOffset(): number;
					public readBytes(param0: javanioByteBuffer): void;
					public readUnsignedMedium(): number;
					public readUnsignedShort(): number;
					public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
					public array(): native.Array<number>;
					public readBytes(param0: number): io.grpc.internal.ReadableBuffers.ByteReadableBufferWrapper;
					public close(): void;
					public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public readUnsignedByte(): number;
					public skipBytes(param0: number): void;
					public hasArray(): boolean;
					public readInt(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class SerializeReentrantCallsDirectExecutor {
				public execute(param0: javalangRunnable): void;
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class SerializingExecutor {
				public execute(param0: javalangRunnable): void;
				public run(): void;
				public constructor(param0: javautilconcurrentExecutor);
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ServerCallImpl.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzck.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerCallImpl extends io.grpc.zzcj {
				public request(param0: number): void;
				public setCompression(param0: string): void;
				public getMethodDescriptor(): io.grpc.zzbp;
				public setMessageCompression(param0: boolean): void;
				public isReady(): boolean;
				public getAuthority(): string;
				public sendHeaders(param0: io.grpc.zzbe): void;
				public sendMessage(param0: javalangObject): void;
				public close(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
				public getAttributes(): io.grpc.zza;
				public isCancelled(): boolean;
			}
			export module ServerCallImpl {
				export class ServerStreamListenerImpl {
					public halfClosed(): void;
					public onReady(): void;
					public messageRead(param0: javaioInputStream): void;
					public closed(param0: io.grpc.zzcq): void;
					public constructor(param0: io.grpc.internal.ServerCallImpl, param1: io.grpc.zzck, param2: io.grpc.zzy.zza);
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.internal.ServerImpl.d.ts" />
/// <reference path="./io.grpc.internal.ServerStream.d.ts" />
/// <reference path="./io.grpc.internal.ServerTransport.d.ts" />
/// <reference path="./io.grpc.internal.ServerTransportListener.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzch.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerImpl extends io.grpc.zzch implements io.grpc.internal.WithLogId {
				public start(): io.grpc.zzch;
				public start(): io.grpc.internal.ServerImpl;
				public shutdown(): io.grpc.internal.ServerImpl;
				public getLogId(): io.grpc.internal.LogId;
				public getPort(): number;
				public isTerminated(): boolean;
				public shutdownNow(): io.grpc.zzch;
				public shutdown(): io.grpc.zzch;
				public getMutableServices(): javautilList;
				public shutdownNow(): io.grpc.internal.ServerImpl;
				public getImmutableServices(): javautilList;
				public isShutdown(): boolean;
				public awaitTermination(): void;
				public awaitTermination(param0: number, param1: javautilconcurrentTimeUnit): boolean;
				public getServices(): javautilList;
			}
			export module ServerImpl {
				export class ContextCloser {
					public run(): void;
				}
				export class JumpToApplicationThreadServerStreamListener {
					public constructor(param0: javautilconcurrentExecutor, param1: javautilconcurrentExecutor, param2: io.grpc.internal.ServerStream, param3: io.grpc.zzy.zza);
					public halfClosed(): void;
					public onReady(): void;
					public messageRead(param0: javaioInputStream): void;
					public closed(param0: io.grpc.zzcq): void;
				}
				export class NoopListener {
					public halfClosed(): void;
					public onReady(): void;
					public messageRead(param0: javaioInputStream): void;
					public closed(param0: io.grpc.zzcq): void;
				}
				export class ServerListenerImpl {
					public transportCreated(param0: io.grpc.internal.ServerTransport): io.grpc.internal.ServerTransportListener;
					public serverShutdown(): void;
				}
				export class ServerTransportListenerImpl {
					public streamCreated(param0: io.grpc.internal.ServerStream, param1: string, param2: io.grpc.zzbe): void;
					public transportReady(param0: io.grpc.zza): io.grpc.zza;
					public constructor(param0: io.grpc.internal.ServerImpl, param1: io.grpc.internal.ServerTransport);
					public transportTerminated(): void;
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ServerTransport.d.ts" />
/// <reference path="./io.grpc.internal.ServerTransportListener.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerListener {
				/**
				 * Constructs a new instance of the io.grpc.internal.ServerListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					transportCreated(param0: io.grpc.internal.ServerTransport): io.grpc.internal.ServerTransportListener;
					serverShutdown(): void;
				});
				public serverShutdown(): void;
				public transportCreated(param0: io.grpc.internal.ServerTransport): io.grpc.internal.ServerTransportListener;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ServerStreamListener.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerStream {
				/**
				 * Constructs a new instance of the io.grpc.internal.ServerStream interface with the provided implementation.
				 */
				public constructor(implementation: {
					writeHeaders(param0: io.grpc.zzbe): void;
					close(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
					cancel(param0: io.grpc.zzcq): void;
					getAttributes(): io.grpc.zza;
					getAuthority(): string;
					setListener(param0: io.grpc.internal.ServerStreamListener): void;
					statsTraceContext(): io.grpc.internal.StatsTraceContext;
					request(param0: number): void;
					writeMessage(param0: javaioInputStream): void;
					flush(): void;
					isReady(): boolean;
					setCompressor(param0: io.grpc.zzu): void;
					setDecompressor(param0: io.grpc.zzag): void;
					setMessageCompression(param0: boolean): void;
				});
				public writeHeaders(param0: io.grpc.zzbe): void;
				public writeMessage(param0: javaioInputStream): void;
				public getAuthority(): string;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public setListener(param0: io.grpc.internal.ServerStreamListener): void;
				public cancel(param0: io.grpc.zzcq): void;
				public flush(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public request(param0: number): void;
				public statsTraceContext(): io.grpc.internal.StatsTraceContext;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public close(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
			}
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerStreamListener {
				/**
				 * Constructs a new instance of the io.grpc.internal.ServerStreamListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					halfClosed(): void;
					closed(param0: io.grpc.zzcq): void;
					messageRead(param0: javaioInputStream): void;
					onReady(): void;
				});
				public messageRead(param0: javaioInputStream): void;
				public onReady(): void;
				public closed(param0: io.grpc.zzcq): void;
				public halfClosed(): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerTransport {
				/**
				 * Constructs a new instance of the io.grpc.internal.ServerTransport interface with the provided implementation.
				 */
				public constructor(implementation: {
					shutdown(): void;
					shutdownNow(param0: io.grpc.zzcq): void;
					getLogId(): io.grpc.internal.LogId;
				});
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ServerStream.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class ServerTransportListener {
				/**
				 * Constructs a new instance of the io.grpc.internal.ServerTransportListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					streamCreated(param0: io.grpc.internal.ServerStream, param1: string, param2: io.grpc.zzbe): void;
					transportReady(param0: io.grpc.zza): io.grpc.zza;
					transportTerminated(): void;
				});
				public streamCreated(param0: io.grpc.internal.ServerStream, param1: string, param2: io.grpc.zzbe): void;
				public transportTerminated(): void;
				public transportReady(param0: io.grpc.zza): io.grpc.zza;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class SharedResourceHolder {
				public static release(param0: io.grpc.internal.SharedResourceHolder.Resource, param1: javalangObject): javalangObject;
				public static get(param0: io.grpc.internal.SharedResourceHolder.Resource): javalangObject;
			}
			export module SharedResourceHolder {
				export class Instance {
				}
				export class Resource {
					/**
					 * Constructs a new instance of the io.grpc.internal.SharedResourceHolder$Resource interface with the provided implementation.
					 */
					public constructor(implementation: {
						create(): javalangObject;
						close(param0: javalangObject): void;
					});
					public create(): javalangObject;
					public close(param0: javalangObject): void;
				}
				export class ScheduledExecutorFactory {
					/**
					 * Constructs a new instance of the io.grpc.internal.SharedResourceHolder$ScheduledExecutorFactory interface with the provided implementation.
					 */
					public constructor(implementation: {
						createScheduledExecutor(): javautilconcurrentScheduledExecutorService;
					});
					public createScheduledExecutor(): javautilconcurrentScheduledExecutorService;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class SharedResourcePool {
				public static forResource(param0: io.grpc.internal.SharedResourceHolder.Resource): io.grpc.internal.SharedResourcePool;
				public getObject(): javalangObject;
				public returnObject(param0: javalangObject): javalangObject;
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcj.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class StatsTraceContext {
				public static NOOP: io.grpc.internal.StatsTraceContext;
				public getTracersForTest(): javautilList;
				public outboundMessage(): void;
				public inboundWireSize(param0: number): void;
				public static newClientContext(param0: io.grpc.zzh, param1: io.grpc.zzbe): io.grpc.internal.StatsTraceContext;
				public streamClosed(param0: io.grpc.zzcq): void;
				public outboundWireSize(param0: number): void;
				public outboundUncompressedSize(param0: number): void;
				public serverCallStarted(param0: io.grpc.zzcj): void;
				public serverFilterContext(param0: io.grpc.zzy): io.grpc.zzy;
				public clientOutboundHeaders(): void;
				public clientInboundHeaders(): void;
				public static newServerContext(param0: javautilList, param1: string, param2: io.grpc.zzbe): io.grpc.internal.StatsTraceContext;
				public inboundMessage(): void;
				public inboundUncompressedSize(param0: number): void;
			}
		}
	}
}

/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class Stream {
				/**
				 * Constructs a new instance of the io.grpc.internal.Stream interface with the provided implementation.
				 */
				public constructor(implementation: {
					request(param0: number): void;
					writeMessage(param0: javaioInputStream): void;
					flush(): void;
					isReady(): boolean;
					setCompressor(param0: io.grpc.zzu): void;
					setDecompressor(param0: io.grpc.zzag): void;
					setMessageCompression(param0: boolean): void;
				});
				public writeMessage(param0: javaioInputStream): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public request(param0: number): void;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public isReady(): boolean;
				public flush(): void;
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class StreamListener {
				/**
				 * Constructs a new instance of the io.grpc.internal.StreamListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					messageRead(param0: javaioInputStream): void;
					onReady(): void;
				});
				public messageRead(param0: javaioInputStream): void;
				public onReady(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module internal {
			export abstract class SubchannelImpl extends io.grpc.zzaz {
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class TransportFrameUtil {
				public static toHttp2Headers(param0: io.grpc.zzbe): native.Array<native.Array<number>>;
				public static toRawSerializedHeaders(param0: native.Array<native.Array<number>>): native.Array<native.Array<number>>;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.LogId.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class WithLogId {
				/**
				 * Constructs a new instance of the io.grpc.internal.WithLogId interface with the provided implementation.
				 */
				public constructor(implementation: {
					getLogId(): io.grpc.internal.LogId;
				});
				public getLogId(): io.grpc.internal.LogId;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module internal {
			export class WritableBuffer {
				/**
				 * Constructs a new instance of the io.grpc.internal.WritableBuffer interface with the provided implementation.
				 */
				public constructor(implementation: {
					write(param0: native.Array<number>, param1: number, param2: number): void;
					write(param0: number): void;
					writableBytes(): number;
					readableBytes(): number;
					release(): void;
				});
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public release(): void;
				public write(param0: number): void;
				public readableBytes(): number;
				public writableBytes(): number;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
declare module io {
	export module grpc {
		export module internal {
			export class WritableBufferAllocator {
				/**
				 * Constructs a new instance of the io.grpc.internal.WritableBufferAllocator interface with the provided implementation.
				 */
				public constructor(implementation: {
					allocate(param0: number): io.grpc.internal.WritableBuffer;
				});
				public allocate(param0: number): io.grpc.internal.WritableBuffer;
			}
		}
	}
}


declare module io {
	export module grpc {
		export module okhttp {
			export class OkHttpChannelProvider extends io.grpc.ManagedChannelProvider {
				public priority(): number;
				public constructor();
			}
		}
	}
}

import comgoogleandroidgmsinternalzzfaq = com.google.android.gms.internal.zzfaq;
import comgoogleandroidgmsinternalzzfab = com.google.android.gms.internal.zzfab;
import comgoogleandroidgmsinternalzzfba = com.google.android.gms.internal.zzfba;
/// <reference path="./com.google.android.gms.internal.zzfab.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfaq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./io.grpc.internal.SerializingExecutor.d.ts" />
/// <reference path="./io.grpc.okhttp.zzy.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zza {
				public close(): void;
				public zza(param0: number, param1: comgoogleandroidgmsinternalzzfab): void;
				public ping(param0: boolean, param1: number, param2: number): void;
				public windowUpdate(param0: number, param1: number): void;
				public data(param0: boolean, param1: number, param2: comgoogleandroidgmsinternalzzfba, param3: number): void;
				public maxDataLength(): number;
				public flush(): void;
				public connectionPreface(): void;
				public zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList): void;
				public zzb(param0: comgoogleandroidgmsinternalzzfaq): void;
				public constructor(param0: io.grpc.okhttp.zzy, param1: io.grpc.internal.SerializingExecutor);
				public zza(param0: number, param1: comgoogleandroidgmsinternalzzfab, param2: native.Array<number>): void;
				public zza(param0: comgoogleandroidgmsinternalzzfaq): void;
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzaa {
				public close(): void;
				public read(param0: comgoogleandroidgmsinternalzzfba, param1: number): number;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzab {
				public static zzczq(): io.grpc.okhttp.zzab;
				public zza(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): string;
				public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): void;
				public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
			}
			export module zzab {
				export class zza extends io.grpc.okhttp.zzab {
					public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
					public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): void;
					public zza(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList): string;
				}
				export module zza {
					export class zza {
						public static zzpgr: io.grpc.okhttp.zzab.zza.zza;
						public static zzpgs: io.grpc.okhttp.zzab.zza.zza;
						public static values(): native.Array<io.grpc.okhttp.zzab.zza.zza>;
					}
				}
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ReadableBuffer.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzac extends io.grpc.internal.AbstractReadableBuffer {
				public readUnsignedMedium(): number;
				public close(): void;
				public skipBytes(param0: number): void;
				public readInt(): number;
				public readableBytes(): number;
				public readUnsignedShort(): number;
				public readBytes(param0: javaioOutputStream, param1: number): void;
				public readBytes(param0: native.Array<number>, param1: number, param2: number): void;
				public readUnsignedByte(): number;
				public readBytes(param0: number): io.grpc.internal.ReadableBuffer;
				public arrayOffset(): number;
				public readBytes(param0: javanioByteBuffer): void;
				public hasArray(): boolean;
				public array(): native.Array<number>;
			}
		}
	}
}

import javaxnetsslSSLSocketFactory = javax.net.ssl.SSLSocketFactory;
import comgoogleandroidgmsinternalzzezr = com.google.android.gms.internal.zzezr;
/// <reference path="./com.google.android.gms.internal.zzezr.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzad {
				public static zza(param0: javaxnetsslSSLSocketFactory, param1: javanetSocket, param2: string, param3: number, param4: comgoogleandroidgmsinternalzzezr): javaxnetsslSSLSocket;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzae {
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public release(): void;
				public write(param0: number): void;
				public readableBytes(): number;
				public writableBytes(): number;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzaf {
				public allocate(param0: number): io.grpc.internal.WritableBuffer;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzag {
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzah {
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzai {
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzaj {
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzak {
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzal {
				public static zzbp(param0: javautilList): io.grpc.zzbe;
				public static zzbo(param0: javautilList): io.grpc.zzbe;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzb extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzc extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzd extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zze extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzf extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzg {
				public run(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzh extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzi extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzj extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzk extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzl extends io.grpc.okhttp.zzm {
				public zzcyy(): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export abstract class zzm {
				public run(): void;
				public zzcyy(): void;
			}
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzn {
				public static zza(param0: io.grpc.zzbe, param1: string, param2: string, param3: string): javautilList;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzo {
				public static zzpec: io.grpc.okhttp.zzo;
				public static zzped: io.grpc.okhttp.zzo;
				public static values(): native.Array<io.grpc.okhttp.zzo>;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientTransportFactory.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzp extends io.grpc.internal.AbstractManagedChannelImplBuilder {
				public static zzty(param0: string): io.grpc.okhttp.zzp;
				public buildTransportFactory(): io.grpc.internal.ClientTransportFactory;
				public constructor(param0: string, param1: number);
				public getNameResolverParams(): io.grpc.zza;
				public constructor(param0: javanetSocketAddress, param1: string);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzq {
				public close(param0: javalangObject): void;
				public create(): javalangObject;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzr {
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ConnectionClientTransport.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzs {
				public close(): void;
				public newClientTransport(param0: javanetSocketAddress, param1: string, param2: string): io.grpc.internal.ConnectionClientTransport;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzt {
				public run(): void;
			}
		}
	}
}

/// <reference path="./io.grpc.internal.ClientStreamListener.d.ts" />
/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
/// <reference path="./io.grpc.okhttp.zzx.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./io.grpc.zzbt.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzu extends io.grpc.internal.AbstractClientStream {
				public writeMessage(param0: javaioInputStream): void;
				public deliverFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
				public zzczc(): number;
				public isReady(): boolean;
				public getAttributes(): io.grpc.zza;
				public cancel(param0: io.grpc.zzcq): void;
				public setMaxOutboundMessageSize(param0: number): void;
				public zzcyh(): io.grpc.zzbt;
				public setAuthority(param0: string): void;
				public flush(): void;
				public halfClose(): void;
				public setDecompressor(param0: io.grpc.zzag): void;
				public setMaxInboundMessageSize(param0: number): void;
				public request(param0: number): void;
				public zzczb(): io.grpc.okhttp.zzx;
				public setCompressor(param0: io.grpc.zzu): void;
				public setMessageCompression(param0: boolean): void;
				public start(param0: io.grpc.internal.ClientStreamListener): void;
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzv {
			}
		}
	}
}

/// <reference path="./io.grpc.internal.WritableBuffer.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzw {
				public writeFrame(param0: io.grpc.internal.WritableBuffer, param1: boolean, param2: boolean): void;
				public request(param0: number): void;
				public writeHeaders(param0: io.grpc.zzbe, param1: native.Array<number>): void;
				public cancel(param0: io.grpc.zzcq): void;
			}
		}
	}
}

/// <reference path="./com.google.android.gms.internal.zzfba.d.ts" />
/// <reference path="./io.grpc.internal.StatsTraceContext.d.ts" />
/// <reference path="./io.grpc.okhttp.zza.d.ts" />
/// <reference path="./io.grpc.okhttp.zzag.d.ts" />
/// <reference path="./io.grpc.okhttp.zzu.d.ts" />
/// <reference path="./io.grpc.okhttp.zzy.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzx extends io.grpc.internal.Http2ClientStreamTransportState {
				public endOfStream(): void;
				public constructor(param0: io.grpc.okhttp.zzu, param1: number, param2: io.grpc.internal.StatsTraceContext, param3: javalangObject, param4: io.grpc.okhttp.zza, param5: io.grpc.okhttp.zzag, param6: io.grpc.okhttp.zzy);
				public messageRead(param0: javaioInputStream): void;
				public deframeFailed(param0: javalangThrowable): void;
				public bytesRead(param0: number): void;
				public zza(param0: comgoogleandroidgmsinternalzzfba, param1: boolean): void;
				public onStreamAllocated(): void;
				public constructor(param0: number, param1: io.grpc.internal.StatsTraceContext);
				public zzll(param0: number): void;
				public http2ProcessingFailed(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
				public zza(param0: javautilList, param1: boolean): void;
				public deliveryStalled(): void;
			}
		}
	}
}

import comgoogleandroidgmsinternalzzfbc = com.google.android.gms.internal.zzfbc;
import comgoogleandroidgmsinternalzzfbd = com.google.android.gms.internal.zzfbd;
/// <reference path="./com.google.android.gms.internal.zzfab.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfaq.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbc.d.ts" />
/// <reference path="./com.google.android.gms.internal.zzfbd.d.ts" />
/// <reference path="./io.grpc.internal.ClientStream.d.ts" />
/// <reference path="./io.grpc.internal.LogId.d.ts" />
/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export module okhttp {
			export class zzy {
				public ping(param0: io.grpc.internal.ClientTransport.PingCallback, param1: javautilconcurrentExecutor): void;
				public shutdown(): void;
				public getLogId(): io.grpc.internal.LogId;
				public shutdownNow(param0: io.grpc.zzcq): void;
				public start(param0: io.grpc.internal.ManagedClientTransport.Listener): javalangRunnable;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe, param2: io.grpc.zzh): io.grpc.internal.ClientStream;
				public newStream(param0: io.grpc.zzbp, param1: io.grpc.zzbe): io.grpc.internal.ClientStream;
				public toString(): string;
				public getAttributes(): io.grpc.zza;
			}
			export module zzy {
				export class zza {
					public run(): void;
					public zza(param0: number, param1: comgoogleandroidgmsinternalzzfab): void;
					public pushPromise(param0: number, param1: number, param2: javautilList): void;
					public zza(param0: boolean, param1: comgoogleandroidgmsinternalzzfaq): void;
					public data(param0: boolean, param1: number, param2: comgoogleandroidgmsinternalzzfbc, param3: number): void;
					public zza(param0: number, param1: comgoogleandroidgmsinternalzzfab, param2: comgoogleandroidgmsinternalzzfbd): void;
					public windowUpdate(param0: number, param1: number): void;
					public zza(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList, param5: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module io {
	export module grpc {
		export module okhttp {
			export class zzz {
				public run(): void;
			}
		}
	}
}

/// <reference path="./io.grpc.zzc.d.ts" />
/// <reference path="./io.grpc.zzd.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zza {
			public static zzoyf: io.grpc.zza;
			public static zzcwy(): io.grpc.zzc;
			public toString(): string;
			public equals(param0: javalangObject): boolean;
			public zza(param0: io.grpc.zzd): javalangObject;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module grpc {
		export class zzaa {
			public run(): void;
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
declare module io {
	export module grpc {
		export class zzab {
			public static zzd(param0: io.grpc.zzy): io.grpc.zzcq;
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledFuture.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export class zzac {
			public zza(param0: javalangRunnable, param1: javautilconcurrentScheduledExecutorService): javautilconcurrentScheduledFuture;
			public static zzb(param0: number, param1: javautilconcurrentTimeUnit): io.grpc.zzac;
			public toString(): string;
			public zza(param0: io.grpc.zzac): boolean;
			public zzb(param0: io.grpc.zzac): io.grpc.zzac;
			public zzaad(): boolean;
			public zzb(param0: javautilconcurrentTimeUnit): number;
		}
	}
}

declare module io {
	export module grpc {
		export class zzad {
		}
	}
}

declare module io {
	export module grpc {
		export class zzae extends io.grpc.zzaf {
			public read(): number;
		}
	}
}

declare module io {
	export module grpc {
		export abstract class zzaf {
			public read(): number;
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzag {
			/**
			 * Constructs a new instance of the io.grpc.zzag interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzcxi(): string;
				zzm(param0: javaioInputStream): javaioInputStream;
			});
			public zzcxi(): string;
			public zzm(param0: javaioInputStream): javaioInputStream;
		}
	}
}

/// <reference path="./io.grpc.zzag.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzah {
			public zzts(param0: string): io.grpc.zzag;
			public static zzcxv(): io.grpc.zzah;
		}
	}
}

declare module io {
	export module grpc {
		export class zzai {
		}
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzaj {
			/**
			 * Constructs a new instance of the io.grpc.zzaj interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzd(param0: javaioOutputStream): number;
			});
			public zzd(param0: javaioOutputStream): number;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export class zzak {
			public constructor(param0: javanetSocketAddress);
			public constructor(param0: javautilList, param1: io.grpc.zza);
			public toString(): string;
			public zzcxy(): javautilList;
			public equals(param0: javalangObject): boolean;
			public constructor(param0: javautilList);
			public getAttributes(): io.grpc.zza;
			public hashCode(): number;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
/// <reference path="./io.grpc.zzk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzal extends io.grpc.zzj {
			public isReady(): boolean;
			public cancel(param0: string, param1: javalangThrowable): void;
			public setMessageCompression(param0: boolean): void;
			public halfClose(): void;
			public constructor();
			public request(param0: number): void;
			public sendMessage(param0: javalangObject): void;
			public delegate(): io.grpc.zzj;
			public start(param0: io.grpc.zzk, param1: io.grpc.zzbe): void;
			public getAttributes(): io.grpc.zza;
		}
	}
}

/// <reference path="./io.grpc.zzj.d.ts" />
declare module io {
	export module grpc {
		export class zzam extends io.grpc.zzal {
			public constructor(param0: io.grpc.zzj);
			public constructor();
			public delegate(): io.grpc.zzj;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzan extends io.grpc.zzk {
			public onMessage(param0: javalangObject): void;
			public onReady(): void;
			public onHeaders(param0: io.grpc.zzbe): void;
			public constructor();
			public delegate(): io.grpc.zzk;
			public onClose(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
		}
	}
}

/// <reference path="./io.grpc.zzk.d.ts" />
declare module io {
	export module grpc {
		export class zzao extends io.grpc.zzan {
			public constructor(param0: io.grpc.zzk);
			public constructor();
			public delegate(): io.grpc.zzk;
		}
	}
}

/// <reference path="./io.grpc.zzcl.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzap {
			public getServices(): javautilList;
			public lookupMethod(param0: string): io.grpc.zzcl;
			public constructor();
			public lookupMethod(param0: string, param1: string): io.grpc.zzcl;
		}
	}
}

/// <reference path="./io.grpc.zzah.d.ts" />
declare module io {
	export module grpc {
		export class zzaq {
			public static zza(param0: io.grpc.zzah): native.Array<number>;
		}
	}
}

declare module io {
	export module grpc {
		export class zzar {
			/**
			 * Constructs a new instance of the io.grpc.zzar interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

/// <reference path="./io.grpc.zzbm.d.ts" />
declare module io {
	export module grpc {
		export class zzas {
			public static zzpai: io.grpc.zzbm;
			public static zzpaj: io.grpc.zzbm;
		}
	}
}

declare module io {
	export module grpc {
		export class zzat {
			/**
			 * Constructs a new instance of the io.grpc.zzat interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzaz.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzx.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzau {
			public zza(param0: javautilList, param1: io.grpc.zza): void;
			public constructor();
			public shutdown(): void;
			public zzh(param0: io.grpc.zzcq): void;
			public zza(param0: io.grpc.zzaz, param1: io.grpc.zzx): void;
		}
	}
}

/// <reference path="./io.grpc.zzau.d.ts" />
/// <reference path="./io.grpc.zzaw.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzav {
			public constructor();
			public zza(param0: io.grpc.zzaw): io.grpc.zzau;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzak.d.ts" />
/// <reference path="./io.grpc.zzaz.d.ts" />
/// <reference path="./io.grpc.zzba.d.ts" />
/// <reference path="./io.grpc.zzbb.d.ts" />
/// <reference path="./io.grpc.zzbv.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzaw {
			public getAuthority(): string;
			public runSerialized(param0: javalangRunnable): void;
			public getNameResolverFactory(): io.grpc.zzbv;
			public createSubchannel(param0: io.grpc.zzak, param1: io.grpc.zza): io.grpc.zzaz;
			public updateSubchannelAddresses(param0: io.grpc.zzaz, param1: io.grpc.zzak): void;
			public updateOobChannelAddresses(param0: io.grpc.zzbb, param1: io.grpc.zzak): void;
			public constructor();
			public createOobChannel(param0: io.grpc.zzak, param1: string): io.grpc.zzbb;
			public updatePicker(param0: io.grpc.zzba): void;
		}
	}
}

/// <reference path="./io.grpc.zzaz.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzax {
			public static zzcxz(): io.grpc.zzax;
			public zzcxk(): io.grpc.zzcq;
			public toString(): string;
			public zzcyb(): io.grpc.zzq;
			public equals(param0: javalangObject): boolean;
			public static zza(param0: io.grpc.zzaz): io.grpc.zzax;
			public static zzi(param0: io.grpc.zzcq): io.grpc.zzax;
			public zzcya(): io.grpc.zzaz;
			public hashCode(): number;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzay {
			public getCallOptions(): io.grpc.zzh;
			public getMethodDescriptor(): io.grpc.zzbp;
			public constructor();
			public getHeaders(): io.grpc.zzbe;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzak.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzaz {
			public getAddresses(): io.grpc.zzak;
			public requestConnection(): void;
			public constructor();
			public shutdown(): void;
			public getAttributes(): io.grpc.zza;
		}
	}
}

declare module io {
	export module grpc {
		export class zzb {
		}
	}
}

/// <reference path="./io.grpc.zzax.d.ts" />
/// <reference path="./io.grpc.zzay.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzba {
			public pickSubchannel(param0: io.grpc.zzay): io.grpc.zzax;
			public constructor();
		}
	}
}

/// <reference path="./io.grpc.zzw.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzbb extends io.grpc.zzi {
			public shutdown(): io.grpc.zzbb;
			public shutdownNow(): io.grpc.zzbb;
			public isTerminated(): boolean;
			public notifyWhenStateChanged(param0: io.grpc.zzw, param1: javalangRunnable): void;
			public isShutdown(): boolean;
			public constructor();
			public getState(param0: boolean): io.grpc.zzw;
			public awaitTermination(param0: number, param1: javautilconcurrentTimeUnit): boolean;
		}
	}
}

/// <reference path="./io.grpc.zzah.d.ts" />
/// <reference path="./io.grpc.zzav.d.ts" />
/// <reference path="./io.grpc.zzbb.d.ts" />
/// <reference path="./io.grpc.zzbv.d.ts" />
/// <reference path="./io.grpc.zzl.d.ts" />
/// <reference path="./io.grpc.zzv.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzbc {
			public nameResolverFactory(param0: io.grpc.zzbv): io.grpc.zzbc;
			public directExecutor(): io.grpc.zzbc;
			public userAgent(param0: string): io.grpc.zzbc;
			public usePlaintext(param0: boolean): io.grpc.zzbc;
			public constructor();
			public overrideAuthority(param0: string): io.grpc.zzbc;
			public compressorRegistry(param0: io.grpc.zzv): io.grpc.zzbc;
			public decompressorRegistry(param0: io.grpc.zzah): io.grpc.zzbc;
			public maxInboundMessageSize(param0: number): io.grpc.zzbc;
			public loadBalancerFactory(param0: io.grpc.zzav): io.grpc.zzbc;
			public executor(param0: javautilconcurrentExecutor): io.grpc.zzbc;
			public idleTimeout(param0: number, param1: javautilconcurrentTimeUnit): io.grpc.zzbc;
			public static forTarget(param0: string): io.grpc.zzbc;
			public build(): io.grpc.zzbb;
			public intercept(param0: native.Array<io.grpc.zzl>): io.grpc.zzbc;
			public static forAddress(param0: string, param1: number): io.grpc.zzbc;
			public intercept(param0: javautilList): io.grpc.zzbc;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbd {
		}
	}
}

/// <reference path="./io.grpc.zzbj.d.ts" />
/// <reference path="./io.grpc.zzbm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module io {
	export module grpc {
		export class zzbe {
			public static zzpar: io.grpc.zzbj;
			public zza(param0: io.grpc.zzbm): boolean;
			public keys(): javautilSet;
			public zzb(param0: io.grpc.zzbm): javalangObject;
			public toString(): string;
			public zzc(param0: io.grpc.zzbe): void;
			public zzc(param0: io.grpc.zzbm): void;
			public constructor();
			public zza(param0: io.grpc.zzbm, param1: javalangObject): void;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzbf {
			public toBytes(param0: javalangObject): native.Array<number>;
			public parseBytes(param0: native.Array<number>): javalangObject;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzbg {
			public toAsciiString(param0: javalangObject): string;
			public parseAsciiString(param0: string): javalangObject;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzbh {
			public toAsciiString(param0: javalangObject): string;
			public parseAsciiString(param0: string): javalangObject;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbi extends io.grpc.zzbm {
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzbj {
			/**
			 * Constructs a new instance of the io.grpc.zzbj interface with the provided implementation.
			 */
			public constructor(implementation: {
				toAsciiString(param0: javalangObject): string;
				parseAsciiString(param0: string): javalangObject;
			});
			public toAsciiString(param0: javalangObject): string;
			public parseAsciiString(param0: string): javalangObject;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbk extends io.grpc.zzbm {
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzbl {
			/**
			 * Constructs a new instance of the io.grpc.zzbl interface with the provided implementation.
			 */
			public constructor(implementation: {
				toBytes(param0: javalangObject): native.Array<number>;
				parseBytes(param0: native.Array<number>): javalangObject;
			});
			public toBytes(param0: javalangObject): native.Array<number>;
			public parseBytes(param0: native.Array<number>): javalangObject;
		}
	}
}

/// <reference path="./io.grpc.zzbj.d.ts" />
/// <reference path="./io.grpc.zzbl.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzbm {
			public static zza(param0: string, param1: io.grpc.zzbl): io.grpc.zzbm;
			public toString(): string;
			public static zza(param0: string, param1: io.grpc.zzbj): io.grpc.zzbm;
			public name(): string;
			public equals(param0: javalangObject): boolean;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbn extends io.grpc.zzbm {
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzbo {
			/**
			 * Constructs a new instance of the io.grpc.zzbo interface with the provided implementation.
			 */
			public constructor(implementation: {
				toAsciiString(param0: javalangObject): native.Array<number>;
				parseAsciiString(param0: native.Array<number>): javalangObject;
			});
			public toAsciiString(param0: javalangObject): native.Array<number>;
			public parseAsciiString(param0: native.Array<number>): javalangObject;
		}
	}
}

/// <reference path="./io.grpc.zzbr.d.ts" />
/// <reference path="./io.grpc.zzbs.d.ts" />
/// <reference path="./io.grpc.zzbt.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzbp {
			public zzcyj(): boolean;
			public zzn(param0: javaioInputStream): javalangObject;
			public static zza(param0: io.grpc.zzbs, param1: io.grpc.zzbs): io.grpc.zzbr;
			public zzch(param0: javalangObject): javaioInputStream;
			public zzcyh(): io.grpc.zzbt;
			public zzcyi(): string;
			public zzo(param0: javaioInputStream): javalangObject;
			public zzci(param0: javalangObject): javaioInputStream;
			public static zzbq(param0: string, param1: string): string;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbq {
		}
	}
}

/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzbs.d.ts" />
/// <reference path="./io.grpc.zzbt.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzbr {
			public zza(param0: io.grpc.zzbs): io.grpc.zzbr;
			public zzb(param0: io.grpc.zzbs): io.grpc.zzbr;
			public zztv(param0: string): io.grpc.zzbr;
			public zzcyk(): io.grpc.zzbp;
			public zza(param0: io.grpc.zzbt): io.grpc.zzbr;
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzbs {
			/**
			 * Constructs a new instance of the io.grpc.zzbs interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzcj(param0: javalangObject): javaioInputStream;
				zzp(param0: javaioInputStream): javalangObject;
			});
			public zzp(param0: javaioInputStream): javalangObject;
			public zzcj(param0: javalangObject): javaioInputStream;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbt {
			public static zzpbg: io.grpc.zzbt;
			public static zzpbi: io.grpc.zzbt;
			public static zzpbj: io.grpc.zzbt;
			public static values(): native.Array<io.grpc.zzbt>;
			public zzcyl(): boolean;
		}
	}
}

/// <reference path="./io.grpc.zzbw.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzbu {
			public getServiceAuthority(): string;
			public refresh(): void;
			public start(param0: io.grpc.zzbw): void;
			public constructor();
			public shutdown(): void;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbu.d.ts" />
/// <reference path="./io.grpc.zzd.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzbv {
			public static PARAMS_DEFAULT_PORT: io.grpc.zzd;
			public newNameResolver(param0: javanetURI, param1: io.grpc.zza): io.grpc.zzbu;
			public constructor();
			public getDefaultScheme(): string;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export class zzbw {
			/**
			 * Constructs a new instance of the io.grpc.zzbw interface with the provided implementation.
			 */
			public constructor(implementation: {
				onAddresses(param0: javautilList, param1: io.grpc.zza): void;
				onError(param0: io.grpc.zzcq): void;
			});
			public onError(param0: io.grpc.zzcq): void;
			public onAddresses(param0: javautilList, param1: io.grpc.zza): void;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbx {
		}
	}
}

/// <reference path="./io.grpc.zzau.d.ts" />
/// <reference path="./io.grpc.zzaw.d.ts" />
declare module io {
	export module grpc {
		export class zzby extends io.grpc.zzav {
			public static zzcyn(): io.grpc.zzby;
			public zza(param0: io.grpc.zzaw): io.grpc.zzau;
		}
	}
}

declare module io {
	export module grpc {
		export class zzbz {
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzd.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzc {
			public zzb(param0: io.grpc.zza): io.grpc.zzc;
			public zza(param0: io.grpc.zzd, param1: javalangObject): io.grpc.zzc;
			public zzcwz(): io.grpc.zza;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzaz.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzx.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export class zzca extends io.grpc.zzau {
			public zza(param0: javautilList, param1: io.grpc.zza): void;
			public shutdown(): void;
			public zzh(param0: io.grpc.zzcq): void;
			public zza(param0: io.grpc.zzaz, param1: io.grpc.zzx): void;
		}
	}
}

/// <reference path="./io.grpc.zzax.d.ts" />
/// <reference path="./io.grpc.zzay.d.ts" />
declare module io {
	export module grpc {
		export class zzcb extends io.grpc.zzba {
			public pickSubchannel(param0: io.grpc.zzay): io.grpc.zzax;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
declare module io {
	export module grpc {
		export class zzcc {
			public constructor(param0: javanetSocketAddress);
			public toString(): string;
			public equals(param0: javalangObject): boolean;
			public zzcyo(): javanetSocketAddress;
			public hashCode(): number;
		}
	}
}

/// <reference path="./io.grpc.zzak.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzcd {
			public toString(): string;
			public equals(param0: javalangObject): boolean;
			public zzcyp(): io.grpc.zzak;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module grpc {
		export class zzce {
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzcc.d.ts" />
/// <reference path="./io.grpc.zzcd.d.ts" />
declare module io {
	export module grpc {
		export class zzcf {
			public zzcyq(): io.grpc.zzcd;
			public zza(param0: io.grpc.zzcc): io.grpc.zzcf;
			public constructor();
			public constructor(param0: io.grpc.zza);
		}
	}
}

declare module io {
	export module grpc {
		export class zzcg {
			public static zzpbp: io.grpc.zzcg;
			public static values(): native.Array<io.grpc.zzcg>;
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzch {
			public getServices(): javautilList;
			public getImmutableServices(): javautilList;
			public start(): io.grpc.zzch;
			public getMutableServices(): javautilList;
			public shutdownNow(): io.grpc.zzch;
			public isTerminated(): boolean;
			public shutdown(): io.grpc.zzch;
			public isShutdown(): boolean;
			public constructor();
			public getPort(): number;
			public awaitTermination(): void;
			public awaitTermination(param0: number, param1: javautilconcurrentTimeUnit): boolean;
		}
	}
}

import javaioFile = java.io.File;
/// <reference path="./io.grpc.zzah.d.ts" />
/// <reference path="./io.grpc.zzap.d.ts" />
/// <reference path="./io.grpc.zzch.d.ts" />
/// <reference path="./io.grpc.zzcm.d.ts" />
/// <reference path="./io.grpc.zzco.d.ts" />
/// <reference path="./io.grpc.zzcp.d.ts" />
/// <reference path="./io.grpc.zze.d.ts" />
/// <reference path="./io.grpc.zzv.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzci {
			public addStreamTracerFactory(param0: io.grpc.zzco): io.grpc.zzci;
			public executor(param0: javautilconcurrentExecutor): io.grpc.zzci;
			public constructor();
			public addService(param0: io.grpc.zze): io.grpc.zzci;
			public useTransportSecurity(param0: javaioFile, param1: javaioFile): io.grpc.zzci;
			public addService(param0: io.grpc.zzcm): io.grpc.zzci;
			public addTransportFilter(param0: io.grpc.zzcp): io.grpc.zzci;
			public decompressorRegistry(param0: io.grpc.zzah): io.grpc.zzci;
			public fallbackHandlerRegistry(param0: io.grpc.zzap): io.grpc.zzci;
			public compressorRegistry(param0: io.grpc.zzv): io.grpc.zzci;
			public static forPort(param0: number): io.grpc.zzci;
			public build(): io.grpc.zzch;
			public directExecutor(): io.grpc.zzci;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzcj {
			public getAuthority(): string;
			public isReady(): boolean;
			public close(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
			public setCompression(param0: string): void;
			public sendHeaders(param0: io.grpc.zzbe): void;
			public getMethodDescriptor(): io.grpc.zzbp;
			public setMessageCompression(param0: boolean): void;
			public isCancelled(): boolean;
			public constructor();
			public request(param0: number): void;
			public sendMessage(param0: javalangObject): void;
			public getAttributes(): io.grpc.zza;
		}
	}
}

declare module io {
	export module grpc {
		export class zzck {
			public constructor();
		}
	}
}

declare module io {
	export module grpc {
		export class zzcl {
		}
	}
}

declare module io {
	export module grpc {
		export class zzcm {
		}
	}
}

/// <reference path="./io.grpc.zzcj.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
declare module io {
	export module grpc {
		export class zzcn extends io.grpc.zzcx {
			public constructor();
			public filterContext(param0: io.grpc.zzy): io.grpc.zzy;
			public serverCallStarted(param0: io.grpc.zzcj): void;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcn.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzco {
			public newServerStreamTracer(param0: string, param1: io.grpc.zzbe): io.grpc.zzcn;
			public constructor();
		}
	}
}

declare module io {
	export module grpc {
		export class zzcp {
			public constructor();
		}
	}
}

/// <reference path="./io.grpc.zzcs.d.ts" />
/// <reference path="./io.grpc.zzcv.d.ts" />
/// <reference path="./io.grpc.zzcw.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export class zzcq {
			public static zzpbu: io.grpc.zzcq;
			public static zzpbv: io.grpc.zzcq;
			public static zzpbw: io.grpc.zzcq;
			public static zzpby: io.grpc.zzcq;
			public static zzpcb: io.grpc.zzcq;
			public static zzpcc: io.grpc.zzcq;
			public static zzpcd: io.grpc.zzcq;
			public static zzpch: io.grpc.zzcq;
			public static zzpci: io.grpc.zzcq;
			public static zzpcj: io.grpc.zzcq;
			public zzcys(): io.grpc.zzcs;
			public static zzk(param0: javalangThrowable): io.grpc.zzcq;
			public zzcyv(): io.grpc.zzcv;
			public toString(): string;
			public zztx(param0: string): io.grpc.zzcq;
			public zzcyt(): boolean;
			public zzcyu(): io.grpc.zzcw;
			public zztw(param0: string): io.grpc.zzcq;
			public getDescription(): string;
			public getCause(): javalangThrowable;
			public static zzlk(param0: number): io.grpc.zzcq;
			public zzl(param0: javalangThrowable): io.grpc.zzcq;
		}
	}
}

declare module io {
	export module grpc {
		export class zzcr {
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export class zzcs {
			public static zzpcn: io.grpc.zzcs;
			public static zzpco: io.grpc.zzcs;
			public static zzpcp: io.grpc.zzcs;
			public static zzpcq: io.grpc.zzcs;
			public static zzpcr: io.grpc.zzcs;
			public static zzpcs: io.grpc.zzcs;
			public static zzpct: io.grpc.zzcs;
			public static zzpcu: io.grpc.zzcs;
			public static zzpcv: io.grpc.zzcs;
			public static zzpcw: io.grpc.zzcs;
			public static zzpcx: io.grpc.zzcs;
			public static zzpcy: io.grpc.zzcs;
			public static zzpcz: io.grpc.zzcs;
			public static zzpda: io.grpc.zzcs;
			public static zzpdb: io.grpc.zzcs;
			public static zzpdc: io.grpc.zzcs;
			public static zzpdd: io.grpc.zzcs;
			public static values(): native.Array<io.grpc.zzcs>;
			public value(): number;
			public zzcyw(): io.grpc.zzcq;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzct {
			public toAsciiString(param0: javalangObject): native.Array<number>;
			public parseAsciiString(param0: native.Array<number>): javalangObject;
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzcu {
			public toAsciiString(param0: javalangObject): native.Array<number>;
			public parseAsciiString(param0: native.Array<number>): javalangObject;
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export class zzcv {
			public zzcxk(): io.grpc.zzcq;
			public constructor(param0: io.grpc.zzcq);
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export class zzcw {
			public zzcxk(): io.grpc.zzcq;
			public constructor(param0: io.grpc.zzcq);
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export class zzcx {
			public streamClosed(param0: io.grpc.zzcq): void;
			public inboundMessage(): void;
			public outboundUncompressedSize(param0: number): void;
			public outboundWireSize(param0: number): void;
			public constructor();
			public inboundWireSize(param0: number): void;
			public outboundMessage(): void;
			public inboundUncompressedSize(param0: number): void;
		}
	}
}

/// <reference path="./io.grpc.zzy.d.ts" />
declare module io {
	export module grpc {
		export class zzcy extends io.grpc.zzy.zzg {
			public zzcxm(): io.grpc.zzy;
			public zzc(param0: io.grpc.zzy): void;
			public zza(param0: io.grpc.zzy, param1: io.grpc.zzy): void;
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzd {
			public toString(): string;
			public static zztp(param0: string): io.grpc.zzd;
		}
	}
}

/// <reference path="./io.grpc.zzcm.d.ts" />
declare module io {
	export module grpc {
		export class zze {
			/**
			 * Constructs a new instance of the io.grpc.zze interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzcxa(): io.grpc.zzcm;
			});
			public zzcxa(): io.grpc.zzcm;
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzd.d.ts" />
/// <reference path="./io.grpc.zzg.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export class zzf {
			/**
			 * Constructs a new instance of the io.grpc.zzf interface with the provided implementation.
			 */
			public constructor(implementation: {
				zza(param0: io.grpc.zzbp, param1: io.grpc.zza, param2: javautilconcurrentExecutor, param3: io.grpc.zzg): void;
				<clinit>(): void;
			});
			public static zzoyh: io.grpc.zzd;
			public static zzoyi: io.grpc.zzd;
			public zza(param0: io.grpc.zzbp, param1: io.grpc.zza, param2: javautilconcurrentExecutor, param3: io.grpc.zzg): void;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
declare module io {
	export module grpc {
		export class zzg {
			/**
			 * Constructs a new instance of the io.grpc.zzg interface with the provided implementation.
			 */
			public constructor(implementation: {
				apply(param0: io.grpc.zzbe): void;
				fail(param0: io.grpc.zzcq): void;
			});
			public fail(param0: io.grpc.zzcq): void;
			public apply(param0: io.grpc.zzbe): void;
		}
	}
}

import javalangInteger = java.lang.Integer;
/// <reference path="./io.grpc.zzac.d.ts" />
/// <reference path="./io.grpc.zzf.d.ts" />
/// <reference path="./io.grpc.zzq.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module io {
	export module grpc {
		export class zzh {
			public static zzoyj: io.grpc.zzh;
			public getAuthority(): string;
			public toString(): string;
			public zzcxe(): javautilList;
			public zzcxc(): string;
			public zzcxh(): javalangInteger;
			public zza(param0: io.grpc.zzf): io.grpc.zzh;
			public zzcxd(): io.grpc.zzf;
			public zzcfp(): javautilconcurrentExecutor;
			public zzcxf(): boolean;
			public zza(param0: io.grpc.zzq): io.grpc.zzh;
			public zzcxg(): javalangInteger;
			public zzcxb(): io.grpc.zzac;
		}
	}
}

/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzi {
			public newCall(param0: io.grpc.zzbp, param1: io.grpc.zzh): io.grpc.zzj;
			public authority(): string;
			public constructor();
		}
	}
}

/// <reference path="./io.grpc.zza.d.ts" />
/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzj {
			public isReady(): boolean;
			public cancel(param0: string, param1: javalangThrowable): void;
			public setMessageCompression(param0: boolean): void;
			public halfClose(): void;
			public constructor();
			public request(param0: number): void;
			public sendMessage(param0: javalangObject): void;
			public start(param0: io.grpc.zzk, param1: io.grpc.zzbe): void;
			public getAttributes(): io.grpc.zza;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzk {
			public onMessage(param0: javalangObject): void;
			public onReady(): void;
			public onHeaders(param0: io.grpc.zzbe): void;
			public constructor();
			public onClose(param0: io.grpc.zzcq, param1: io.grpc.zzbe): void;
		}
	}
}

/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzi.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
declare module io {
	export module grpc {
		export class zzl {
			/**
			 * Constructs a new instance of the io.grpc.zzl interface with the provided implementation.
			 */
			public constructor(implementation: {
				interceptCall(param0: io.grpc.zzbp, param1: io.grpc.zzh, param2: io.grpc.zzi): io.grpc.zzj;
			});
			public interceptCall(param0: io.grpc.zzbp, param1: io.grpc.zzh, param2: io.grpc.zzi): io.grpc.zzj;
		}
	}
}

/// <reference path="./io.grpc.zzi.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
	export module grpc {
		export class zzm {
			public static zza(param0: io.grpc.zzi, param1: javautilList): io.grpc.zzi;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzk.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
	export module grpc {
		export class zzn extends io.grpc.zzj {
			public isReady(): boolean;
			public cancel(param0: string, param1: javalangThrowable): void;
			public halfClose(): void;
			public request(param0: number): void;
			public sendMessage(param0: javalangObject): void;
			public start(param0: io.grpc.zzk, param1: io.grpc.zzbe): void;
		}
	}
}

/// <reference path="./io.grpc.zzbp.d.ts" />
/// <reference path="./io.grpc.zzh.d.ts" />
/// <reference path="./io.grpc.zzj.d.ts" />
declare module io {
	export module grpc {
		export class zzo extends io.grpc.zzi {
			public newCall(param0: io.grpc.zzbp, param1: io.grpc.zzh): io.grpc.zzj;
			public authority(): string;
		}
	}
}

declare module io {
	export module grpc {
		export class zzp extends io.grpc.zzcx {
			public inboundHeaders(): void;
			public constructor();
			public outboundHeaders(): void;
		}
	}
}

/// <reference path="./io.grpc.zzbe.d.ts" />
/// <reference path="./io.grpc.zzp.d.ts" />
declare module io {
	export module grpc {
		export abstract class zzq {
			public newClientStreamTracer(param0: io.grpc.zzbe): io.grpc.zzp;
			public constructor();
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzr {
			/**
			 * Constructs a new instance of the io.grpc.zzr interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzcxi(): string;
				zzm(param0: javaioInputStream): javaioInputStream;
				zzcxi(): string;
				zzc(param0: javaioOutputStream): javaioOutputStream;
			});
			public zzc(param0: javaioOutputStream): javaioOutputStream;
			public zzcxi(): string;
			public zzm(param0: javaioInputStream): javaioInputStream;
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzs {
			public zzc(param0: javaioOutputStream): javaioOutputStream;
			public constructor();
			public zzcxi(): string;
			public zzm(param0: javaioInputStream): javaioInputStream;
		}
	}
}

/// <reference path="./io.grpc.zzr.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzt {
			public static zzoyt: io.grpc.zzr;
			public zzc(param0: javaioOutputStream): javaioOutputStream;
			public zzm(param0: javaioInputStream): javaioInputStream;
			public zzcxi(): string;
		}
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
declare module io {
	export module grpc {
		export class zzu {
			/**
			 * Constructs a new instance of the io.grpc.zzu interface with the provided implementation.
			 */
			public constructor(implementation: {
				zzcxi(): string;
				zzc(param0: javaioOutputStream): javaioOutputStream;
			});
			public zzc(param0: javaioOutputStream): javaioOutputStream;
			public zzcxi(): string;
		}
	}
}

/// <reference path="./io.grpc.zzu.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
	export module grpc {
		export class zzv {
			public static zzcxj(): io.grpc.zzv;
			public zztq(param0: string): io.grpc.zzu;
		}
	}
}

declare module io {
	export module grpc {
		export class zzw {
			public static zzoyw: io.grpc.zzw;
			public static zzoyx: io.grpc.zzw;
			public static zzoyy: io.grpc.zzw;
			public static zzoyz: io.grpc.zzw;
			public static zzoza: io.grpc.zzw;
			public static values(): native.Array<io.grpc.zzw>;
		}
	}
}

/// <reference path="./io.grpc.zzcq.d.ts" />
/// <reference path="./io.grpc.zzw.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module io {
	export module grpc {
		export class zzx {
			public static zza(param0: io.grpc.zzw): io.grpc.zzx;
			public zzcxk(): io.grpc.zzcq;
			public toString(): string;
			public getState(): io.grpc.zzw;
			public equals(param0: javalangObject): boolean;
			public static zzg(param0: io.grpc.zzcq): io.grpc.zzx;
			public hashCode(): number;
		}
	}
}

/// <reference path="./io.grpc.zzac.d.ts" />
/// <reference path="./io.grpc.zzy.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module io {
	export module grpc {
		export class zzy {
			public static zzoze: io.grpc.zzy;
			public zza(param0: number, param1: javautilconcurrentTimeUnit, param2: javautilconcurrentScheduledExecutorService): io.grpc.zzy.zza;
			public zzcxo(): io.grpc.zzy;
			public static zztr(param0: string): io.grpc.zzy.zze;
			public zzcxq(): javalangThrowable;
			public zza(param0: io.grpc.zzy): void;
			public isCancelled(): boolean;
			public zza(param0: io.grpc.zzy.zzb, param1: javautilconcurrentExecutor): void;
			public zza(param0: io.grpc.zzy.zzb): void;
			public zzcxb(): io.grpc.zzac;
			public static zzcxm(): io.grpc.zzy;
			public zzcxn(): io.grpc.zzy.zza;
			public zzcxp(): io.grpc.zzy;
			public zza(param0: io.grpc.zzy.zze, param1: javalangObject): io.grpc.zzy;
		}
		export module zzy {
			export class zza extends io.grpc.zzy {
				public zza(param0: number, param1: javautilconcurrentTimeUnit, param2: javautilconcurrentScheduledExecutorService): io.grpc.zzy.zza;
				public zza(param0: io.grpc.zzy): void;
				public zza(param0: io.grpc.zzy.zzb): void;
				public zza(param0: io.grpc.zzy.zze, param1: javalangObject): io.grpc.zzy;
				public zzcxq(): javalangThrowable;
				public zzj(param0: javalangThrowable): boolean;
				public isCancelled(): boolean;
				public zzcxp(): io.grpc.zzy;
				public zza(param0: io.grpc.zzy.zzb, param1: javautilconcurrentExecutor): void;
			}
			export class zzb {
				/**
				 * Constructs a new instance of the io.grpc.zzy$zzb interface with the provided implementation.
				 */
				public constructor(implementation: {
					cancelled(param0: io.grpc.zzy): void;
				});
				public cancelled(param0: io.grpc.zzy): void;
			}
			export class zzc {
				public static zzozs: io.grpc.zzy.zzc;
				public static values(): native.Array<io.grpc.zzy.zzc>;
				public execute(param0: javalangRunnable): void;
				public toString(): string;
			}
			export class zzd {
				public run(): void;
			}
			export class zze {
				public zzb(param0: io.grpc.zzy): javalangObject;
				public get(): javalangObject;
				public toString(): string;
			}
			export class zzf {
				public cancelled(param0: io.grpc.zzy): void;
			}
			export abstract class zzg {
				public zzc(param0: io.grpc.zzy): void;
				public zza(param0: io.grpc.zzy, param1: io.grpc.zzy): void;
				public constructor();
				public zzcxm(): io.grpc.zzy;
			}
		}
	}
}

declare module io {
	export module grpc {
		export class zzz {
			public run(): void;
		}
	}
}

