/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module naturallanguage {
					export class FirebaseNaturalLanguage {
						public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage>;
						public static getInstance(): com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage;
						public getSmartReply(): com.google.firebase.ml.naturallanguage.smartreply.FirebaseSmartReply;
						public getLanguageIdentification(param0: com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions): com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification;
						public getLanguageIdentification(): com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification;
						public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.ml.naturallanguage.FirebaseNaturalLanguage;
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
				export module naturallanguage {
					export module languageid {
						export class FirebaseLanguageIdentification {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification>;
							public static UNDETERMINED_LANGUAGE_CODE: string;
							public static DEFAULT_IDENTIFY_LANGUAGE_CONFIDENCE_THRESHOLD: number;
							public static DEFAULT_IDENTIFY_POSSIBLE_LANGUAGES_CONFIDENCE_THRESHOLD: number;
							public close(): void;
							public identifyPossibleLanguages(param0: string): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.ml.naturallanguage.languageid.IdentifiedLanguage>>;
							public identifyLanguage(param0: string): com.google.android.gms.tasks.Task<string>;
						}
						export module FirebaseLanguageIdentification {
							export class zza {
								public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentification.zza>;
								public release(): void;
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
				export module naturallanguage {
					export module languageid {
						export class FirebaseLanguageIdentificationOptions {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions>;
							public hashCode(): number;
							public getConfidenceThreshold(): java.lang.Float;
							public equals(param0: any): boolean;
						}
						export module FirebaseLanguageIdentificationOptions {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions.Builder>;
								public constructor();
								public build(): com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions;
								public setConfidenceThreshold(param0: number): com.google.firebase.ml.naturallanguage.languageid.FirebaseLanguageIdentificationOptions.Builder;
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
				export module naturallanguage {
					export module languageid {
						export class IdentifiedLanguage {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.IdentifiedLanguage>;
							public getConfidence(): number;
							public hashCode(): number;
							public toString(): string;
							public getLanguageCode(): string;
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
		export module firebase {
			export module ml {
				export module naturallanguage {
					export module languageid {
						export module internal {
							export class LanguageIdentificationJni {
								public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.internal.LanguageIdentificationJni>;
								public constructor(param0: globalAndroid.content.Context);
								public release(): void;
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
				export module naturallanguage {
					export module languageid {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zza>;
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
		export module firebase {
			export module ml {
				export module naturallanguage {
					export module languageid {
						export class zzb {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zzb>;
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
		export module firebase {
			export module ml {
				export module naturallanguage {
					export module languageid {
						export class zzc {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zzc>;
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
				export module naturallanguage {
					export module languageid {
						export class zzd {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zzd>;
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
				export module naturallanguage {
					export module languageid {
						export class zze {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zze>;
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
				export module naturallanguage {
					export module languageid {
						export class zzf {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.languageid.zzf>;
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
				export module naturallanguage {
					export module smartreply {
						export class FirebaseSmartReply {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.FirebaseSmartReply>;
							public close(): void;
							public suggestReplies(param0: java.util.List<com.google.firebase.ml.naturallanguage.smartreply.FirebaseTextMessage>): com.google.android.gms.tasks.Task<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult>;
						}
						export module FirebaseSmartReply {
							export class zza extends com.google.android.gms.tasks.SuccessContinuation<com.google.android.gms.predictondevice.SmartReplyResult,com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult> {
								public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.FirebaseSmartReply.zza>;
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
				export module naturallanguage {
					export module smartreply {
						export class FirebaseTextMessage {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.FirebaseTextMessage>;
							public static createForRemoteUser(param0: string, param1: number, param2: string): com.google.firebase.ml.naturallanguage.smartreply.FirebaseTextMessage;
							public static createForLocalUser(param0: string, param1: number): com.google.firebase.ml.naturallanguage.smartreply.FirebaseTextMessage;
							public getTimestampMillis(): number;
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
				export module naturallanguage {
					export module smartreply {
						export class SmartReplySuggestion {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestion>;
							public getConfidence(): number;
							public getText(): string;
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
		export module firebase {
			export module ml {
				export module naturallanguage {
					export module smartreply {
						export class SmartReplySuggestionResult {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult>;
							public static STATUS_SUCCESS: number;
							public static STATUS_NOT_SUPPORTED_LANGUAGE: number;
							public static STATUS_NO_REPLY: number;
							public getStatus(): number;
							public getSuggestions(): java.util.List<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestion>;
							public toString(): string;
							public getStatusCodeForDebugging(): number;
						}
						export module SmartReplySuggestionResult {
							export class Status {
								public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult.Status>;
								/**
								 * Constructs a new instance of the com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module naturallanguage {
					export module smartreply {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.zza>;
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
				export module naturallanguage {
					export module smartreply {
						export class zzb {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.zzb>;
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
				export module naturallanguage {
					export module smartreply {
						export class zzc extends com.google.android.gms.tasks.Continuation<string,com.google.android.gms.tasks.Task<com.google.firebase.ml.naturallanguage.smartreply.SmartReplySuggestionResult>> {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.zzc>;
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
				export module naturallanguage {
					export module smartreply {
						export class zzd {
							public static class: java.lang.Class<com.google.firebase.ml.naturallanguage.smartreply.zzd>;
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

