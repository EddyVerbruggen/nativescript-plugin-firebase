/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module config {
					export module proto {
						export class Config {
							public static class: java.lang.Class<com.google.android.gms.config.proto.Config>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module Config {
							export class AppConfigTable extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.AppConfigTable,com.google.android.gms.config.proto.Config.AppConfigTable.Builder> implements com.google.android.gms.config.proto.Config.AppConfigTableOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppConfigTable>;
								public static APP_NAME_FIELD_NUMBER: number;
								public static NAMESPACE_CONFIG_FIELD_NUMBER: number;
								public static EXPERIMENT_PAYLOAD_FIELD_NUMBER: number;
								public getNamespaceConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.AppConfigTable;
								public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
								public getExperimentPayloadCount(): number;
								public static newBuilder(): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
								public getAppNameBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.AppConfigTable): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppConfigTable;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppConfigTable;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppConfigTable;
								public hasAppName(): boolean;
								public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.AppConfigTable;
								public getAppName(): string;
								public getNamespaceConfigOrBuilderList(): java.util.List<any>;
								public getNamespaceConfigCount(): number;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.AppConfigTable;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppConfigTable;
								public getNamespaceConfigOrBuilder(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTableOrBuilder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.AppConfigTable;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.AppConfigTable>;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.AppConfigTable;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppConfigTable;
								public getSerializedSize(): number;
								public getNamespaceConfig(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppConfigTable;
							}
							export module AppConfigTable {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.AppConfigTable,com.google.android.gms.config.proto.Config.AppConfigTable.Builder> implements com.google.android.gms.config.proto.Config.AppConfigTableOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppConfigTable.Builder>;
									public addAllExperimentPayload(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getExperimentPayloadCount(): number;
									public setExperimentPayload(param0: number, param1: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getNamespaceConfigCount(): number;
									public clearExperimentPayload(): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getNamespaceConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
									public addExperimentPayload(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public setNamespaceConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public setAppNameBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public addNamespaceConfig(param0: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public hasAppName(): boolean;
									public getAppNameBytes(): com.google.protobuf.ByteString;
									public removeNamespaceConfig(param0: number): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public setNamespaceConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public addNamespaceConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getNamespaceConfig(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
									public setAppName(param0: string): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public clearAppName(): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getAppName(): string;
									public addNamespaceConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public addNamespaceConfig(param0: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
									public clearNamespaceConfig(): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
									public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
									public addAllNamespaceConfig(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.AppConfigTable.Builder;
								}
							}
							export class AppConfigTableOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppConfigTableOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$AppConfigTableOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasAppName(): boolean;
									getAppName(): string;
									getAppNameBytes(): com.google.protobuf.ByteString;
									getNamespaceConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
									getNamespaceConfig(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
									getNamespaceConfigCount(): number;
									getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
									getExperimentPayloadCount(): number;
									getExperimentPayload(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getNamespaceConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
								public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
								public getExperimentPayloadCount(): number;
								public hasAppName(): boolean;
								public getNamespaceConfig(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
								public getAppName(): string;
								public getNamespaceConfigCount(): number;
								public getAppNameBytes(): com.google.protobuf.ByteString;
							}
							export class AppNamespaceConfigTable extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable,com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder> implements com.google.android.gms.config.proto.Config.AppNamespaceConfigTableOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
								public static NAMESPACE_FIELD_NUMBER: number;
								public static DIGEST_FIELD_NUMBER: number;
								public static ENTRY_FIELD_NUMBER: number;
								public static STATUS_FIELD_NUMBER: number;
								public getNamespaceBytes(): com.google.protobuf.ByteString;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public getNamespace(): string;
								public getStatus(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
								public hasStatus(): boolean;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getEntryOrBuilderList(): java.util.List<any>;
								public getEntryCount(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public getDigestBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
								public hasNamespace(): boolean;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getDigest(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable;
								public static newBuilder(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
								public getSerializedSize(): number;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable>;
								public hasDigest(): boolean;
								public getEntryOrBuilder(param0: number): com.google.android.gms.config.proto.Config.KeyValueOrBuilder;
							}
							export module AppNamespaceConfigTable {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable,com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder> implements com.google.android.gms.config.proto.Config.AppNamespaceConfigTableOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder>;
									public getEntryCount(): number;
									public setDigest(param0: string): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public getNamespace(): string;
									public getDigestBytes(): com.google.protobuf.ByteString;
									public addEntry(param0: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public clearDigest(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public setStatus(param0: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public setEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public getNamespaceBytes(): com.google.protobuf.ByteString;
									public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									public getStatus(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public removeEntry(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public setNamespaceBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public hasStatus(): boolean;
									public setEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public addEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public clearEntry(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									public hasDigest(): boolean;
									public hasNamespace(): boolean;
									public addAllEntry(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public getDigest(): string;
									public clearNamespace(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public addEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public clearStatus(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public setNamespace(param0: string): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public addEntry(param0: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
									public setDigestBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.Builder;
								}
								export class NamespaceStatus extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus>;
									public static UPDATE: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static NO_TEMPLATE: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static NO_CHANGE: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static EMPTY_CONFIG: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static NOT_AUTHORIZED: com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static UPDATE_VALUE: number;
									public static NO_TEMPLATE_VALUE: number;
									public static NO_CHANGE_VALUE: number;
									public static EMPTY_CONFIG_VALUE: number;
									public static NOT_AUTHORIZED_VALUE: number;
									public static values(): native.Array<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus>;
									public getNumber(): number;
									public static valueOf(param0: string): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus>;
									public static valueOf(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
									public static forNumber(param0: number): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
								}
							}
							export class AppNamespaceConfigTableOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.AppNamespaceConfigTableOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$AppNamespaceConfigTableOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasNamespace(): boolean;
									getNamespace(): string;
									getNamespaceBytes(): com.google.protobuf.ByteString;
									hasDigest(): boolean;
									getDigest(): string;
									getDigestBytes(): com.google.protobuf.ByteString;
									getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									getEntryCount(): number;
									hasStatus(): boolean;
									getStatus(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
								});
								public constructor();
								public getNamespace(): string;
								public getDigestBytes(): com.google.protobuf.ByteString;
								public getStatus(): com.google.android.gms.config.proto.Config.AppNamespaceConfigTable.NamespaceStatus;
								public hasStatus(): boolean;
								public getNamespaceBytes(): com.google.protobuf.ByteString;
								public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public hasNamespace(): boolean;
								public getEntryCount(): number;
								public hasDigest(): boolean;
								public getDigest(): string;
							}
							export class ConfigFetchRequest extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.ConfigFetchRequest,com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder> implements com.google.android.gms.config.proto.Config.ConfigFetchRequestOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchRequest>;
								public static CONFIG_FIELD_NUMBER: number;
								public static ANDROID_ID_FIELD_NUMBER: number;
								public static PACKAGE_DATA_FIELD_NUMBER: number;
								public static DEVICE_DATA_VERSION_INFO_FIELD_NUMBER: number;
								public static SECURITY_TOKEN_FIELD_NUMBER: number;
								public static CLIENT_VERSION_FIELD_NUMBER: number;
								public static GMS_CORE_VERSION_FIELD_NUMBER: number;
								public static API_LEVEL_FIELD_NUMBER: number;
								public static DEVICE_COUNTRY_FIELD_NUMBER: number;
								public static DEVICE_LOCALE_FIELD_NUMBER: number;
								public static DEVICE_TYPE_FIELD_NUMBER: number;
								public static DEVICE_SUBTYPE_FIELD_NUMBER: number;
								public static OS_VERSION_FIELD_NUMBER: number;
								public static DEVICE_TIMEZONE_ID_FIELD_NUMBER: number;
								public static newBuilder(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
								public getPackageDataCount(): number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getPackageData(param0: number): com.google.android.gms.config.proto.Config.PackageData;
								public hasApiLevel(): boolean;
								public getDeviceLocaleBytes(): com.google.protobuf.ByteString;
								public getSecurityToken(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getPackageDataOrBuilderList(): java.util.List<any>;
								public getDeviceCountry(): string;
								public hasClientVersion(): boolean;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.ConfigFetchRequest>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getDeviceTimezoneId(): string;
								public getDeviceDataVersionInfo(): string;
								public getDeviceTimezoneIdBytes(): com.google.protobuf.ByteString;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public hasSecurityToken(): boolean;
								public hasDeviceSubtype(): boolean;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getSerializedSize(): number;
								public getOsVersionBytes(): com.google.protobuf.ByteString;
								public getConfig(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public hasOsVersion(): boolean;
								public getOsVersion(): string;
								public getDeviceCountryBytes(): com.google.protobuf.ByteString;
								public getDeviceType(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public hasDeviceLocale(): boolean;
								public getPackageDataList(): java.util.List<com.google.android.gms.config.proto.Config.PackageData>;
								public hasDeviceCountry(): boolean;
								public hasConfig(): boolean;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getClientVersion(): number;
								public hasDeviceType(): boolean;
								public hasAndroidId(): boolean;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.ConfigFetchRequest): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
								public getAndroidId(): number;
								public getPackageDataOrBuilder(param0: number): com.google.android.gms.config.proto.Config.PackageDataOrBuilder;
								public hasDeviceTimezoneId(): boolean;
								public getDeviceLocale(): string;
								public getDeviceDataVersionInfoBytes(): com.google.protobuf.ByteString;
								public hasGmsCoreVersion(): boolean;
								public getGmsCoreVersion(): number;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getDeviceSubtype(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public getApiLevel(): number;
								public hasDeviceDataVersionInfo(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchRequest;
							}
							export module ConfigFetchRequest {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.ConfigFetchRequest,com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder> implements com.google.android.gms.config.proto.Config.ConfigFetchRequestOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder>;
									public hasClientVersion(): boolean;
									public getOsVersion(): string;
									public clearPackageData(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasDeviceSubtype(): boolean;
									public setDeviceLocaleBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceLocale(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setGmsCoreVersion(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setConfig(param0: com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceType(): number;
									public getDeviceCountry(): string;
									public getDeviceCountryBytes(): com.google.protobuf.ByteString;
									public clearDeviceTimezoneId(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getGmsCoreVersion(): number;
									public setOsVersion(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearOsVersion(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasConfig(): boolean;
									public setDeviceType(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceTimezoneId(): string;
									public hasDeviceType(): boolean;
									public setConfig(param0: com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getAndroidId(): number;
									public getPackageDataCount(): number;
									public getDeviceLocale(): string;
									public clearDeviceType(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearDeviceDataVersionInfo(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceCountryBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearConfig(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceSubtype(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getSecurityToken(): number;
									public addPackageData(param0: com.google.android.gms.config.proto.Config.PackageData): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceTimezoneIdBytes(): com.google.protobuf.ByteString;
									public addPackageData(param0: number, param1: com.google.android.gms.config.proto.Config.PackageData.Builder): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceTimezoneIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public removePackageData(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setClientVersion(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceTimezoneId(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasAndroidId(): boolean;
									public clearDeviceSubtype(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasDeviceCountry(): boolean;
									public hasApiLevel(): boolean;
									public hasDeviceDataVersionInfo(): boolean;
									public clearClientVersion(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasGmsCoreVersion(): boolean;
									public hasSecurityToken(): boolean;
									public getPackageDataList(): java.util.List<com.google.android.gms.config.proto.Config.PackageData>;
									public addPackageData(param0: number, param1: com.google.android.gms.config.proto.Config.PackageData): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceLocaleBytes(): com.google.protobuf.ByteString;
									public clearAndroidId(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearGmsCoreVersion(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public hasDeviceLocale(): boolean;
									public clearDeviceCountry(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setAndroidId(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceDataVersionInfo(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setOsVersionBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public mergeConfig(param0: com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceCountry(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getConfig(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
									public clearApiLevel(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearDeviceLocale(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setDeviceDataVersionInfoBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public setApiLevel(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public addAllPackageData(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public clearSecurityToken(): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceSubtype(): number;
									public getOsVersionBytes(): com.google.protobuf.ByteString;
									public getDeviceDataVersionInfoBytes(): com.google.protobuf.ByteString;
									public setPackageData(param0: number, param1: com.google.android.gms.config.proto.Config.PackageData): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getClientVersion(): number;
									public hasOsVersion(): boolean;
									public addPackageData(param0: com.google.android.gms.config.proto.Config.PackageData.Builder): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getPackageData(param0: number): com.google.android.gms.config.proto.Config.PackageData;
									public getApiLevel(): number;
									public hasDeviceTimezoneId(): boolean;
									public setPackageData(param0: number, param1: com.google.android.gms.config.proto.Config.PackageData.Builder): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
									public getDeviceDataVersionInfo(): string;
									public setSecurityToken(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchRequest.Builder;
								}
							}
							export class ConfigFetchRequestOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchRequestOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$ConfigFetchRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasConfig(): boolean;
									getConfig(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
									hasAndroidId(): boolean;
									getAndroidId(): number;
									getPackageDataList(): java.util.List<com.google.android.gms.config.proto.Config.PackageData>;
									getPackageData(param0: number): com.google.android.gms.config.proto.Config.PackageData;
									getPackageDataCount(): number;
									hasDeviceDataVersionInfo(): boolean;
									getDeviceDataVersionInfo(): string;
									getDeviceDataVersionInfoBytes(): com.google.protobuf.ByteString;
									hasSecurityToken(): boolean;
									getSecurityToken(): number;
									hasClientVersion(): boolean;
									getClientVersion(): number;
									hasGmsCoreVersion(): boolean;
									getGmsCoreVersion(): number;
									hasApiLevel(): boolean;
									getApiLevel(): number;
									hasDeviceCountry(): boolean;
									getDeviceCountry(): string;
									getDeviceCountryBytes(): com.google.protobuf.ByteString;
									hasDeviceLocale(): boolean;
									getDeviceLocale(): string;
									getDeviceLocaleBytes(): com.google.protobuf.ByteString;
									hasDeviceType(): boolean;
									getDeviceType(): number;
									hasDeviceSubtype(): boolean;
									getDeviceSubtype(): number;
									hasOsVersion(): boolean;
									getOsVersion(): string;
									getOsVersionBytes(): com.google.protobuf.ByteString;
									hasDeviceTimezoneId(): boolean;
									getDeviceTimezoneId(): string;
									getDeviceTimezoneIdBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getConfig(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public getPackageDataCount(): number;
								public hasOsVersion(): boolean;
								public getOsVersion(): string;
								public getDeviceCountryBytes(): com.google.protobuf.ByteString;
								public getPackageData(param0: number): com.google.android.gms.config.proto.Config.PackageData;
								public hasApiLevel(): boolean;
								public getDeviceLocaleBytes(): com.google.protobuf.ByteString;
								public getDeviceType(): number;
								public getSecurityToken(): number;
								public hasDeviceLocale(): boolean;
								public getPackageDataList(): java.util.List<com.google.android.gms.config.proto.Config.PackageData>;
								public getDeviceCountry(): string;
								public hasClientVersion(): boolean;
								public hasDeviceCountry(): boolean;
								public hasConfig(): boolean;
								public getClientVersion(): number;
								public hasDeviceType(): boolean;
								public hasAndroidId(): boolean;
								public getDeviceTimezoneId(): string;
								public getAndroidId(): number;
								public hasDeviceTimezoneId(): boolean;
								public getDeviceDataVersionInfo(): string;
								public getDeviceLocale(): string;
								public getDeviceDataVersionInfoBytes(): com.google.protobuf.ByteString;
								public getDeviceTimezoneIdBytes(): com.google.protobuf.ByteString;
								public hasSecurityToken(): boolean;
								public hasGmsCoreVersion(): boolean;
								public hasDeviceSubtype(): boolean;
								public getGmsCoreVersion(): number;
								public getDeviceSubtype(): number;
								public getOsVersionBytes(): com.google.protobuf.ByteString;
								public getApiLevel(): number;
								public hasDeviceDataVersionInfo(): boolean;
							}
							export class ConfigFetchResponse extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.ConfigFetchResponse,com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder> implements com.google.android.gms.config.proto.Config.ConfigFetchResponseOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchResponse>;
								public static PACKAGE_TABLE_FIELD_NUMBER: number;
								public static STATUS_FIELD_NUMBER: number;
								public static INTERNAL_METADATA_FIELD_NUMBER: number;
								public static APP_CONFIG_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getInternalMetadataList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getInternalMetadataOrBuilder(param0: number): com.google.android.gms.config.proto.Config.KeyValueOrBuilder;
								public getAppConfigCount(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getPackageTableList(): java.util.List<com.google.android.gms.config.proto.Config.PackageTable>;
								public getAppConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppConfigTable>;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getAppConfigOrBuilderList(): java.util.List<any>;
								public hasStatus(): boolean;
								public getPackageTable(param0: number): com.google.android.gms.config.proto.Config.PackageTable;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getPackageTableCount(): number;
								public getInternalMetadataCount(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getAppConfig(param0: number): com.google.android.gms.config.proto.Config.AppConfigTable;
								public getPackageTableOrBuilder(param0: number): com.google.android.gms.config.proto.Config.PackageTableOrBuilder;
								public getStatus(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
								public getAppConfigOrBuilder(param0: number): com.google.android.gms.config.proto.Config.AppConfigTableOrBuilder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.ConfigFetchResponse>;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public getInternalMetadata(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public getSerializedSize(): number;
								public static newBuilder(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
								public getPackageTableOrBuilderList(): java.util.List<any>;
								public getInternalMetadataOrBuilderList(): java.util.List<any>;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.ConfigFetchResponse;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.ConfigFetchResponse): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
							}
							export module ConfigFetchResponse {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.ConfigFetchResponse,com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder> implements com.google.android.gms.config.proto.Config.ConfigFetchResponseOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder>;
									public getAppConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppConfigTable>;
									public getAppConfigCount(): number;
									public addAppConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppConfigTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addPackageTable(param0: com.google.android.gms.config.proto.Config.PackageTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addPackageTable(param0: com.google.android.gms.config.proto.Config.PackageTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getInternalMetadataCount(): number;
									public clearInternalMetadata(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getPackageTableCount(): number;
									public addAppConfig(param0: com.google.android.gms.config.proto.Config.AppConfigTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public clearPackageTable(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getAppConfig(param0: number): com.google.android.gms.config.proto.Config.AppConfigTable;
									public addAllAppConfig(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public setInternalMetadata(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addAllInternalMetadata(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addInternalMetadata(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public setStatus(param0: com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public hasStatus(): boolean;
									public getPackageTableList(): java.util.List<com.google.android.gms.config.proto.Config.PackageTable>;
									public setInternalMetadata(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addInternalMetadata(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public removePackageTable(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addInternalMetadata(param0: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getInternalMetadataList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									public removeInternalMetadata(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addAllPackageTable(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addPackageTable(param0: number, param1: com.google.android.gms.config.proto.Config.PackageTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public clearStatus(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public setPackageTable(param0: number, param1: com.google.android.gms.config.proto.Config.PackageTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getInternalMetadata(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									public setAppConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppConfigTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public clearAppConfig(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addAppConfig(param0: com.google.android.gms.config.proto.Config.AppConfigTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addAppConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppConfigTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public removeAppConfig(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getPackageTable(param0: number): com.google.android.gms.config.proto.Config.PackageTable;
									public setPackageTable(param0: number, param1: com.google.android.gms.config.proto.Config.PackageTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public addInternalMetadata(param0: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public setAppConfig(param0: number, param1: com.google.android.gms.config.proto.Config.AppConfigTable): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
									public getStatus(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									public addPackageTable(param0: number, param1: com.google.android.gms.config.proto.Config.PackageTable.Builder): com.google.android.gms.config.proto.Config.ConfigFetchResponse.Builder;
								}
								export class ResponseStatus extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus>;
									public static SUCCESS: com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									public static NO_PACKAGES_IN_REQUEST: com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									public static SUCCESS_VALUE: number;
									public static NO_PACKAGES_IN_REQUEST_VALUE: number;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus>;
									public static valueOf(param0: string): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									public static values(): native.Array<com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus>;
									public static valueOf(param0: number): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
								}
							}
							export class ConfigFetchResponseOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.ConfigFetchResponseOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$ConfigFetchResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getPackageTableList(): java.util.List<com.google.android.gms.config.proto.Config.PackageTable>;
									getPackageTable(param0: number): com.google.android.gms.config.proto.Config.PackageTable;
									getPackageTableCount(): number;
									hasStatus(): boolean;
									getStatus(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
									getInternalMetadataList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									getInternalMetadata(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									getInternalMetadataCount(): number;
									getAppConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppConfigTable>;
									getAppConfig(param0: number): com.google.android.gms.config.proto.Config.AppConfigTable;
									getAppConfigCount(): number;
								});
								public constructor();
								public getAppConfig(param0: number): com.google.android.gms.config.proto.Config.AppConfigTable;
								public hasStatus(): boolean;
								public getInternalMetadata(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public getPackageTable(param0: number): com.google.android.gms.config.proto.Config.PackageTable;
								public getInternalMetadataList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getAppConfigCount(): number;
								public getStatus(): com.google.android.gms.config.proto.Config.ConfigFetchResponse.ResponseStatus;
								public getPackageTableCount(): number;
								public getPackageTableList(): java.util.List<com.google.android.gms.config.proto.Config.PackageTable>;
								public getInternalMetadataCount(): number;
								public getAppConfigList(): java.util.List<com.google.android.gms.config.proto.Config.AppConfigTable>;
							}
							export class KeyValue extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.KeyValue,com.google.android.gms.config.proto.Config.KeyValue.Builder> implements com.google.android.gms.config.proto.Config.KeyValueOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.KeyValue>;
								public static KEY_FIELD_NUMBER: number;
								public static VALUE_FIELD_NUMBER: number;
								public static newBuilder(): com.google.android.gms.config.proto.Config.KeyValue.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.KeyValue;
								public getValue(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.KeyValue;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.KeyValue.Builder;
								public hasKey(): boolean;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.KeyValue;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.KeyValue;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.KeyValue>;
								public getKey(): string;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.KeyValue;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.KeyValue;
								public hasValue(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.KeyValue;
								public getKeyBytes(): com.google.protobuf.ByteString;
							}
							export module KeyValue {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.KeyValue,com.google.android.gms.config.proto.Config.KeyValue.Builder> implements com.google.android.gms.config.proto.Config.KeyValueOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.KeyValue.Builder>;
									public getKeyBytes(): com.google.protobuf.ByteString;
									public clearKey(): com.google.android.gms.config.proto.Config.KeyValue.Builder;
									public hasKey(): boolean;
									public setKeyBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.KeyValue.Builder;
									public getValue(): com.google.protobuf.ByteString;
									public setValue(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.KeyValue.Builder;
									public getKey(): string;
									public hasValue(): boolean;
									public clearValue(): com.google.android.gms.config.proto.Config.KeyValue.Builder;
									public setKey(param0: string): com.google.android.gms.config.proto.Config.KeyValue.Builder;
								}
							}
							export class KeyValueOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.KeyValueOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$KeyValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasKey(): boolean;
									getKey(): string;
									getKeyBytes(): com.google.protobuf.ByteString;
									hasValue(): boolean;
									getValue(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getValue(): com.google.protobuf.ByteString;
								public hasValue(): boolean;
								public hasKey(): boolean;
								public getKey(): string;
								public getKeyBytes(): com.google.protobuf.ByteString;
							}
							export class NamedValue extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.NamedValue,com.google.android.gms.config.proto.Config.NamedValue.Builder> implements com.google.android.gms.config.proto.Config.NamedValueOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.NamedValue>;
								public static NAME_FIELD_NUMBER: number;
								public static VALUE_FIELD_NUMBER: number;
								public getValueBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.NamedValue;
								public static newBuilder(): com.google.android.gms.config.proto.Config.NamedValue.Builder;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.NamedValue.Builder;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.NamedValue;
								public getName(): string;
								public getNameBytes(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.NamedValue;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public hasName(): boolean;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.NamedValue;
								public hasValue(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.NamedValue;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.NamedValue>;
								public getValue(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.NamedValue;
							}
							export module NamedValue {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.NamedValue,com.google.android.gms.config.proto.Config.NamedValue.Builder> implements com.google.android.gms.config.proto.Config.NamedValueOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.NamedValue.Builder>;
									public clearName(): com.google.android.gms.config.proto.Config.NamedValue.Builder;
									public clearValue(): com.google.android.gms.config.proto.Config.NamedValue.Builder;
									public setName(param0: string): com.google.android.gms.config.proto.Config.NamedValue.Builder;
									public getValue(): string;
									public setNameBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.NamedValue.Builder;
									public hasName(): boolean;
									public hasValue(): boolean;
									public getName(): string;
									public getNameBytes(): com.google.protobuf.ByteString;
									public setValueBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.NamedValue.Builder;
									public getValueBytes(): com.google.protobuf.ByteString;
									public setValue(param0: string): com.google.android.gms.config.proto.Config.NamedValue.Builder;
								}
							}
							export class NamedValueOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.NamedValueOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$NamedValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasName(): boolean;
									getName(): string;
									getNameBytes(): com.google.protobuf.ByteString;
									hasValue(): boolean;
									getValue(): string;
									getValueBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getValueBytes(): com.google.protobuf.ByteString;
								public hasName(): boolean;
								public getName(): string;
								public hasValue(): boolean;
								public getNameBytes(): com.google.protobuf.ByteString;
								public getValue(): string;
							}
							export class PackageData extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.PackageData,com.google.android.gms.config.proto.Config.PackageData.Builder> implements com.google.android.gms.config.proto.Config.PackageDataOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageData>;
								public static VERSION_CODE_FIELD_NUMBER: number;
								public static DIGEST_FIELD_NUMBER: number;
								public static CERT_HASH_FIELD_NUMBER: number;
								public static CONFIG_ID_FIELD_NUMBER: number;
								public static PACKAGE_NAME_FIELD_NUMBER: number;
								public static GMP_PROJECT_ID_FIELD_NUMBER: number;
								public static GAMES_PROJECT_ID_FIELD_NUMBER: number;
								public static NAMESPACE_DIGEST_FIELD_NUMBER: number;
								public static CUSTOM_VARIABLE_FIELD_NUMBER: number;
								public static APP_CERT_HASH_FIELD_NUMBER: number;
								public static APP_VERSION_CODE_FIELD_NUMBER: number;
								public static APP_VERSION_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_TOKEN_FIELD_NUMBER: number;
								public static REQUESTED_HIDDEN_NAMESPACE_FIELD_NUMBER: number;
								public static SDK_VERSION_FIELD_NUMBER: number;
								public static ANALYTICS_USER_PROPERTY_FIELD_NUMBER: number;
								public static REQUESTED_CACHE_EXPIRATION_SECONDS_FIELD_NUMBER: number;
								public static FETCHED_CONFIG_AGE_SECONDS_FIELD_NUMBER: number;
								public static ACTIVE_CONFIG_AGE_SECONDS_FIELD_NUMBER: number;
								public getGamesProjectId(): string;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageData;
								public getNamespaceDigestOrBuilder(param0: number): com.google.android.gms.config.proto.Config.NamedValueOrBuilder;
								public getAppInstanceIdToken(): string;
								public getPackageName(): string;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.PackageData;
								public hasAppVersion(): boolean;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.PackageData): com.google.android.gms.config.proto.Config.PackageData.Builder;
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public hasGamesProjectId(): boolean;
								public getAnalyticsUserPropertyList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData;
								public getVersionCode(): number;
								public getAnalyticsUserPropertyOrBuilder(param0: number): com.google.android.gms.config.proto.Config.NamedValueOrBuilder;
								public getFetchedConfigAgeSeconds(): number;
								public getRequestedHiddenNamespaceCount(): number;
								public getRequestedHiddenNamespace(param0: number): string;
								public getActiveConfigAgeSeconds(): number;
								public getGmpProjectId(): string;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.PackageData>;
								public getRequestedHiddenNamespaceBytes(param0: number): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageData;
								public hasConfigId(): boolean;
								public getAppInstanceId(): string;
								public getCustomVariableOrBuilderList(): java.util.List<any>;
								public getCustomVariable(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.PackageData;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getCustomVariableList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public hasAppCertHash(): boolean;
								public hasFetchedConfigAgeSeconds(): boolean;
								public getCertHash(): com.google.protobuf.ByteString;
								public getSerializedSize(): number;
								public hasSdkVersion(): boolean;
								public getNamespaceDigestOrBuilderList(): java.util.List<any>;
								public static newBuilder(): com.google.android.gms.config.proto.Config.PackageData.Builder;
								public hasDigest(): boolean;
								public hasRequestedCacheExpirationSeconds(): boolean;
								public getRequestedCacheExpirationSeconds(): number;
								public getCustomVariableOrBuilder(param0: number): com.google.android.gms.config.proto.Config.NamedValueOrBuilder;
								public getSdkVersion(): number;
								public getAppVersion(): string;
								public getCustomVariableCount(): number;
								public hasAppInstanceIdToken(): boolean;
								public getAppCertHash(): com.google.protobuf.ByteString;
								public getGamesProjectIdBytes(): com.google.protobuf.ByteString;
								public getAppVersionCode(): number;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.PackageData;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.PackageData;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getConfigIdBytes(): com.google.protobuf.ByteString;
								public getGmpProjectIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageData;
								public getConfigId(): string;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.PackageData;
								public getPackageNameBytes(): com.google.protobuf.ByteString;
								public getAnalyticsUserPropertyOrBuilderList(): java.util.List<any>;
								public getAnalyticsUserProperty(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageData;
								public getDigest(): com.google.protobuf.ByteString;
								public hasGmpProjectId(): boolean;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageData;
								public getNamespaceDigestCount(): number;
								public hasVersionCode(): boolean;
								public hasAppInstanceId(): boolean;
								public hasCertHash(): boolean;
								public getNamespaceDigestList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public hasAppVersionCode(): boolean;
								public getAnalyticsUserPropertyCount(): number;
								public hasPackageName(): boolean;
								public hasActiveConfigAgeSeconds(): boolean;
								public getNamespaceDigest(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public getRequestedHiddenNamespaceList(): java.util.List<string>;
							}
							export module PackageData {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.PackageData,com.google.android.gms.config.proto.Config.PackageData.Builder> implements com.google.android.gms.config.proto.Config.PackageDataOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageData.Builder>;
									public addAnalyticsUserProperty(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addCustomVariable(param0: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setGamesProjectIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAnalyticsUserPropertyCount(): number;
									public removeCustomVariable(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addAllRequestedHiddenNamespace(param0: java.lang.Iterable<string>): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public removeAnalyticsUserProperty(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getRequestedHiddenNamespaceBytes(param0: number): com.google.protobuf.ByteString;
									public setPackageNameBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setGamesProjectId(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasAppVersionCode(): boolean;
									public getNamespaceDigest(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
									public setAppVersion(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setGmpProjectId(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearAppVersion(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasAppInstanceIdToken(): boolean;
									public clearAnalyticsUserProperty(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getCustomVariableList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									public clearGamesProjectId(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addNamespaceDigest(param0: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasConfigId(): boolean;
									public getAppVersionBytes(): com.google.protobuf.ByteString;
									public setCustomVariable(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setRequestedHiddenNamespace(param0: number, param1: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addAllAnalyticsUserProperty(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setRequestedCacheExpirationSeconds(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasDigest(): boolean;
									public clearCertHash(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setNamespaceDigest(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
									public removeNamespaceDigest(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setConfigId(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setAnalyticsUserProperty(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setGmpProjectIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearPackageName(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setAppInstanceIdTokenBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addAllCustomVariable(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearAppInstanceId(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getVersionCode(): number;
									public clearAppVersionCode(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addNamespaceDigest(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearFetchedConfigAgeSeconds(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getConfigIdBytes(): com.google.protobuf.ByteString;
									public getAppVersionCode(): number;
									public hasAppInstanceId(): boolean;
									public getConfigId(): string;
									public getAnalyticsUserProperty(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
									public clearRequestedCacheExpirationSeconds(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearNamespaceDigest(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									public setActiveConfigAgeSeconds(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getDigest(): com.google.protobuf.ByteString;
									public getGamesProjectIdBytes(): com.google.protobuf.ByteString;
									public hasGmpProjectId(): boolean;
									public setAppVersionBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasSdkVersion(): boolean;
									public getRequestedHiddenNamespaceList(): java.util.List<string>;
									public setSdkVersion(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearAppInstanceIdToken(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getGmpProjectIdBytes(): com.google.protobuf.ByteString;
									public setAppCertHash(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasRequestedCacheExpirationSeconds(): boolean;
									public clearDigest(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getGmpProjectId(): string;
									public addAnalyticsUserProperty(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setAppInstanceIdToken(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setVersionCode(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearSdkVersion(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearVersionCode(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setDigest(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasActiveConfigAgeSeconds(): boolean;
									public getGamesProjectId(): string;
									public setAppInstanceId(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addRequestedHiddenNamespaceBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearActiveConfigAgeSeconds(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getRequestedHiddenNamespace(param0: number): string;
									public hasVersionCode(): boolean;
									public getRequestedHiddenNamespaceCount(): number;
									public addAllNamespaceDigest(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasPackageName(): boolean;
									public setNamespaceDigest(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAppCertHash(): com.google.protobuf.ByteString;
									public setCertHash(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getSdkVersion(): number;
									public addCustomVariable(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setCustomVariable(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearAppCertHash(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addNamespaceDigest(param0: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addCustomVariable(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getActiveConfigAgeSeconds(): number;
									public getNamespaceDigestList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									public hasGamesProjectId(): boolean;
									public hasFetchedConfigAgeSeconds(): boolean;
									public getCustomVariableCount(): number;
									public clearGmpProjectId(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setFetchedConfigAgeSeconds(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearCustomVariable(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAppVersion(): string;
									public getFetchedConfigAgeSeconds(): number;
									public addNamespaceDigest(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getRequestedCacheExpirationSeconds(): number;
									public getAppInstanceIdToken(): string;
									public getCertHash(): com.google.protobuf.ByteString;
									public setConfigIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getNamespaceDigestCount(): number;
									public addCustomVariable(param0: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public hasCertHash(): boolean;
									public addAnalyticsUserProperty(param0: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public addRequestedHiddenNamespace(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAppInstanceId(): string;
									public getPackageName(): string;
									public hasAppVersion(): boolean;
									public addAnalyticsUserProperty(param0: com.google.android.gms.config.proto.Config.NamedValue.Builder): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getPackageNameBytes(): com.google.protobuf.ByteString;
									public hasAppCertHash(): boolean;
									public setAppVersionCode(param0: number): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearRequestedHiddenNamespace(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public clearConfigId(): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public setPackageName(param0: string): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getAnalyticsUserPropertyList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									public setAnalyticsUserProperty(param0: number, param1: com.google.android.gms.config.proto.Config.NamedValue): com.google.android.gms.config.proto.Config.PackageData.Builder;
									public getCustomVariable(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								}
							}
							export class PackageDataOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageDataOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$PackageDataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasVersionCode(): boolean;
									getVersionCode(): number;
									hasDigest(): boolean;
									getDigest(): com.google.protobuf.ByteString;
									hasCertHash(): boolean;
									getCertHash(): com.google.protobuf.ByteString;
									hasConfigId(): boolean;
									getConfigId(): string;
									getConfigIdBytes(): com.google.protobuf.ByteString;
									hasPackageName(): boolean;
									getPackageName(): string;
									getPackageNameBytes(): com.google.protobuf.ByteString;
									hasGmpProjectId(): boolean;
									getGmpProjectId(): string;
									getGmpProjectIdBytes(): com.google.protobuf.ByteString;
									hasGamesProjectId(): boolean;
									getGamesProjectId(): string;
									getGamesProjectIdBytes(): com.google.protobuf.ByteString;
									getNamespaceDigestList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									getNamespaceDigest(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
									getNamespaceDigestCount(): number;
									getCustomVariableList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									getCustomVariable(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
									getCustomVariableCount(): number;
									hasAppCertHash(): boolean;
									getAppCertHash(): com.google.protobuf.ByteString;
									hasAppVersionCode(): boolean;
									getAppVersionCode(): number;
									hasAppVersion(): boolean;
									getAppVersion(): string;
									getAppVersionBytes(): com.google.protobuf.ByteString;
									hasAppInstanceId(): boolean;
									getAppInstanceId(): string;
									getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									hasAppInstanceIdToken(): boolean;
									getAppInstanceIdToken(): string;
									getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
									getRequestedHiddenNamespaceList(): java.util.List<string>;
									getRequestedHiddenNamespaceCount(): number;
									getRequestedHiddenNamespace(param0: number): string;
									getRequestedHiddenNamespaceBytes(param0: number): com.google.protobuf.ByteString;
									hasSdkVersion(): boolean;
									getSdkVersion(): number;
									getAnalyticsUserPropertyList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
									getAnalyticsUserProperty(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
									getAnalyticsUserPropertyCount(): number;
									hasRequestedCacheExpirationSeconds(): boolean;
									getRequestedCacheExpirationSeconds(): number;
									hasFetchedConfigAgeSeconds(): boolean;
									getFetchedConfigAgeSeconds(): number;
									hasActiveConfigAgeSeconds(): boolean;
									getActiveConfigAgeSeconds(): number;
								});
								public constructor();
								public getGamesProjectId(): string;
								public getAppInstanceIdToken(): string;
								public getPackageName(): string;
								public hasAppVersion(): boolean;
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public hasGamesProjectId(): boolean;
								public getAnalyticsUserPropertyList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public getVersionCode(): number;
								public getFetchedConfigAgeSeconds(): number;
								public getRequestedHiddenNamespaceCount(): number;
								public getRequestedHiddenNamespace(param0: number): string;
								public getActiveConfigAgeSeconds(): number;
								public getGmpProjectId(): string;
								public getRequestedHiddenNamespaceBytes(param0: number): com.google.protobuf.ByteString;
								public hasConfigId(): boolean;
								public getAppInstanceId(): string;
								public getCustomVariable(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public getCustomVariableList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public hasAppCertHash(): boolean;
								public hasFetchedConfigAgeSeconds(): boolean;
								public getCertHash(): com.google.protobuf.ByteString;
								public hasSdkVersion(): boolean;
								public hasDigest(): boolean;
								public hasRequestedCacheExpirationSeconds(): boolean;
								public getRequestedCacheExpirationSeconds(): number;
								public getSdkVersion(): number;
								public getAppVersion(): string;
								public getCustomVariableCount(): number;
								public hasAppInstanceIdToken(): boolean;
								public getAppCertHash(): com.google.protobuf.ByteString;
								public getGamesProjectIdBytes(): com.google.protobuf.ByteString;
								public getAppVersionCode(): number;
								public getConfigIdBytes(): com.google.protobuf.ByteString;
								public getGmpProjectIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getConfigId(): string;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
								public getPackageNameBytes(): com.google.protobuf.ByteString;
								public getAnalyticsUserProperty(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public getDigest(): com.google.protobuf.ByteString;
								public hasGmpProjectId(): boolean;
								public getNamespaceDigestCount(): number;
								public hasVersionCode(): boolean;
								public hasAppInstanceId(): boolean;
								public hasCertHash(): boolean;
								public getNamespaceDigestList(): java.util.List<com.google.android.gms.config.proto.Config.NamedValue>;
								public hasAppVersionCode(): boolean;
								public getAnalyticsUserPropertyCount(): number;
								public hasPackageName(): boolean;
								public hasActiveConfigAgeSeconds(): boolean;
								public getNamespaceDigest(param0: number): com.google.android.gms.config.proto.Config.NamedValue;
								public getRequestedHiddenNamespaceList(): java.util.List<string>;
							}
							export class PackageTable extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Config.PackageTable,com.google.android.gms.config.proto.Config.PackageTable.Builder> implements com.google.android.gms.config.proto.Config.PackageTableOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageTable>;
								public static PACKAGE_NAME_FIELD_NUMBER: number;
								public static ENTRY_FIELD_NUMBER: number;
								public static CONFIG_ID_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageTable;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageTable;
								public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Config.PackageTable;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.PackageTable;
								public getPackageName(): string;
								public static newBuilder(): com.google.android.gms.config.proto.Config.PackageTable.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Config.PackageTable;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Config.PackageTable;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getConfigIdBytes(): com.google.protobuf.ByteString;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Config.PackageTable;
								public getEntryOrBuilderList(): java.util.List<any>;
								public getConfigId(): string;
								public static newBuilder(param0: com.google.android.gms.config.proto.Config.PackageTable): com.google.android.gms.config.proto.Config.PackageTable.Builder;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageTable;
								public getEntryCount(): number;
								public getPackageNameBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageTable;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Config.PackageTable>;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Config.PackageTable;
								public hasConfigId(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageTable;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getSerializedSize(): number;
								public hasPackageName(): boolean;
								public getEntryOrBuilder(param0: number): com.google.android.gms.config.proto.Config.KeyValueOrBuilder;
							}
							export module PackageTable {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Config.PackageTable,com.google.android.gms.config.proto.Config.PackageTable.Builder> implements com.google.android.gms.config.proto.Config.PackageTableOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageTable.Builder>;
									public addEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public getPackageName(): string;
									public clearConfigId(): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public clearEntry(): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public setEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public addEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public getPackageNameBytes(): com.google.protobuf.ByteString;
									public getEntryCount(): number;
									public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									public clearPackageName(): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public setConfigIdBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public addEntry(param0: com.google.android.gms.config.proto.Config.KeyValue.Builder): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public getConfigIdBytes(): com.google.protobuf.ByteString;
									public setEntry(param0: number, param1: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public addEntry(param0: com.google.android.gms.config.proto.Config.KeyValue): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public hasPackageName(): boolean;
									public setPackageName(param0: string): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public setPackageNameBytes(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public getConfigId(): string;
									public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									public setConfigId(param0: string): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public addAllEntry(param0: java.lang.Iterable<any>): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public removeEntry(param0: number): com.google.android.gms.config.proto.Config.PackageTable.Builder;
									public hasConfigId(): boolean;
								}
							}
							export class PackageTableOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Config.PackageTableOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Config$PackageTableOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasPackageName(): boolean;
									getPackageName(): string;
									getPackageNameBytes(): com.google.protobuf.ByteString;
									getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
									getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
									getEntryCount(): number;
									hasConfigId(): boolean;
									getConfigId(): string;
									getConfigIdBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getEntryList(): java.util.List<com.google.android.gms.config.proto.Config.KeyValue>;
								public getEntry(param0: number): com.google.android.gms.config.proto.Config.KeyValue;
								public getConfigIdBytes(): com.google.protobuf.ByteString;
								public hasPackageName(): boolean;
								public hasConfigId(): boolean;
								public getConfigId(): string;
								public getPackageName(): string;
								public getEntryCount(): number;
								public getPackageNameBytes(): com.google.protobuf.ByteString;
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
				export module config {
					export module proto {
						export class Logs {
							public static class: java.lang.Class<com.google.android.gms.config.proto.Logs>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module Logs {
							export class AndroidConfigFetchProto extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto,com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder> implements com.google.android.gms.config.proto.Logs.AndroidConfigFetchProtoOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto>;
								public static REASON_FIELD_NUMBER: number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto>;
								public static newBuilder(param0: com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
								public static newBuilder(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public hasReason(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
								public getReason(): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto;
							}
							export module AndroidConfigFetchProto {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto,com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder> implements com.google.android.gms.config.proto.Logs.AndroidConfigFetchProtoOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder>;
									public setReason(param0: com.google.android.gms.config.proto.Logs.ConfigFetchReason): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
									public clearReason(): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
									public mergeReason(param0: com.google.android.gms.config.proto.Logs.ConfigFetchReason): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
									public hasReason(): boolean;
									public getReason(): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
									public setReason(param0: com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder): com.google.android.gms.config.proto.Logs.AndroidConfigFetchProto.Builder;
								}
							}
							export class AndroidConfigFetchProtoOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.AndroidConfigFetchProtoOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Logs$AndroidConfigFetchProtoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasReason(): boolean;
									getReason(): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								});
								public constructor();
								public hasReason(): boolean;
								public getReason(): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
							}
							export class ConfigFetchReason extends com.google.protobuf.GeneratedMessageLite<com.google.android.gms.config.proto.Logs.ConfigFetchReason,com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder> implements com.google.android.gms.config.proto.Logs.ConfigFetchReasonOrBuilder  {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.ConfigFetchReason>;
								public static TYPE_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public getSerializedSize(): number;
								public static getDefaultInstance(): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseFrom(param0: java.io.InputStream): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static newBuilder(param0: com.google.android.gms.config.proto.Logs.ConfigFetchReason): com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder;
								public getType(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
								public hasType(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static newBuilder(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder;
								public static parser(): com.google.protobuf.Parser<com.google.android.gms.config.proto.Logs.ConfigFetchReason>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.android.gms.config.proto.Logs.ConfigFetchReason;
							}
							export module ConfigFetchReason {
								export class AndroidConfigFetchType extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType>;
									public static UNKNOWN: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static SCHEDULED: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static BOOT_COMPLETED: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static PACKAGE_ADDED: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static PACKAGE_REMOVED: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static GMS_CORE_UPDATED: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static SECRET_CODE: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static UNKNOWN_VALUE: number;
									public static SCHEDULED_VALUE: number;
									public static BOOT_COMPLETED_VALUE: number;
									public static PACKAGE_ADDED_VALUE: number;
									public static PACKAGE_REMOVED_VALUE: number;
									public static GMS_CORE_UPDATED_VALUE: number;
									public static SECRET_CODE_VALUE: number;
									public static values(): native.Array<com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType>;
									public getNumber(): number;
									public static valueOf(param0: number): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static forNumber(param0: number): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static valueOf(param0: string): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType>;
								}
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.android.gms.config.proto.Logs.ConfigFetchReason,com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder> implements com.google.android.gms.config.proto.Logs.ConfigFetchReasonOrBuilder  {
									public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder>;
									public setType(param0: com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType): com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder;
									public clearType(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.Builder;
									public hasType(): boolean;
									public getType(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
								}
							}
							export class ConfigFetchReasonOrBuilder {
								public static class: java.lang.Class<com.google.android.gms.config.proto.Logs.ConfigFetchReasonOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.android.gms.config.proto.Logs$ConfigFetchReasonOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasType(): boolean;
									getType(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
								});
								public constructor();
								public getType(): com.google.android.gms.config.proto.Logs.ConfigFetchReason.AndroidConfigFetchType;
								public hasType(): boolean;
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
			export module remoteconfig {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.BuildConfig>;
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
			export module remoteconfig {
				export class FirebaseRemoteConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfig>;
					public static DEFAULT_VALUE_FOR_STRING: string;
					public static DEFAULT_VALUE_FOR_LONG: number;
					public static DEFAULT_VALUE_FOR_DOUBLE: number;
					public static DEFAULT_VALUE_FOR_BOOLEAN: boolean;
					public static DEFAULT_VALUE_FOR_BYTE_ARRAY: native.Array<number>;
					public static VALUE_SOURCE_STATIC: number;
					public static VALUE_SOURCE_DEFAULT: number;
					public static VALUE_SOURCE_REMOTE: number;
					public static LAST_FETCH_STATUS_SUCCESS: number;
					public static LAST_FETCH_STATUS_NO_FETCH_YET: number;
					public static LAST_FETCH_STATUS_FAILURE: number;
					public static LAST_FETCH_STATUS_THROTTLED: number;
					public static TAG: string;
					public setDefaults(param0: java.util.Map<string,any>): void;
					public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
					public static getInstance(): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public ensureInitialized(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					public getString(param0: string): string;
					public fetchAndActivate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public activate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public getKeysByPrefix(param0: string): java.util.Set<string>;
					public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
					public setConfigSettingsAsync(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getBoolean(param0: string): boolean;
					public fetch(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setDefaultsAsync(param0: java.util.Map<string,any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public fetch(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getValue(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
					public setDefaultsAsync(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getByteArray(param0: string): native.Array<number>;
					public activateFetched(): boolean;
					public getDouble(param0: string): number;
					public reset(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getLong(param0: string): number;
					public setDefaults(param0: number): void;
					public getAll(): java.util.Map<string,com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigClientException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigClientException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigFetchException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigFetchThrottledException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException>;
					public getThrottleEndTimeMillis(): number;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: string, param1: number);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigInfo {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFetchTimeMillis(): number;
						getLastFetchStatus(): number;
						getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					});
					public constructor();
					public getFetchTimeMillis(): number;
					public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					public getLastFetchStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigServerException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigServerException>;
					public getHttpStatusCode(): number;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: number, param1: string, param2: java.lang.Throwable);
					public constructor(param0: number, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigSettings {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings>;
					public isDeveloperModeEnabled(): boolean;
					public getMinimumFetchIntervalInSeconds(): number;
					public getFetchTimeoutInSeconds(): number;
					public toBuilder(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
				}
				export module FirebaseRemoteConfigSettings {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder>;
						public setMinimumFetchIntervalInSeconds(param0: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public constructor();
						public setFetchTimeoutInSeconds(param0: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public setDeveloperModeEnabled(param0: boolean): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public build(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigValue {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						asLong(): number;
						asDouble(): number;
						asString(): string;
						asByteArray(): native.Array<number>;
						asBoolean(): boolean;
						getSource(): number;
					});
					public constructor();
					public asLong(): number;
					public asBoolean(): boolean;
					public getSource(): number;
					public asByteArray(): native.Array<number>;
					public asString(): string;
					public asDouble(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigComponent {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigComponent>;
					public static ACTIVATE_FILE_NAME: string;
					public static FETCH_FILE_NAME: string;
					public static DEFAULTS_FILE_NAME: string;
					public static NETWORK_CONNECTION_TIMEOUT_IN_SECONDS: number;
					public static DEFAULT_NAMESPACE: string;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.ExecutorService, param2: com.google.firebase.FirebaseApp, param3: com.google.firebase.iid.FirebaseInstanceId, param4: com.google.firebase.abt.FirebaseABTesting, param5: com.google.firebase.analytics.connector.AnalyticsConnector, param6: com.google.firebase.remoteconfig.internal.LegacyConfigsHandler, param7: boolean);
					public setCustomHeaders(param0: java.util.Map<string,string>): void;
					public static getCacheClient(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): com.google.firebase.remoteconfig.internal.ConfigCacheClient;
					public get(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigConstants {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants>;
					public static FETCH_REGEX_URL: string;
				}
				export module RemoteConfigConstants {
					export class ExperimentDescriptionFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ExperimentDescriptionFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ExperimentDescriptionFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static VARIANT_ID: string;
						public static EXPERIMENT_ID: string;
					}
					export class RequestFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.RequestFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$RequestFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static APP_ID: string;
						public static TIME_ZONE: string;
						public static LANGUAGE_CODE: string;
						public static INSTANCE_ID_TOKEN: string;
						public static PLATFORM_VERSION: string;
						public static SDK_VERSION: string;
						public static ANALYTICS_USER_PROPERTIES: string;
						public static PACKAGE_NAME: string;
						public static APP_VERSION: string;
						public static INSTANCE_ID: string;
						public static COUNTRY_CODE: string;
					}
					export class ResponseFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ResponseFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ResponseFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static STATE: string;
						public static EXPERIMENT_DESCRIPTIONS: string;
						public static ENTRIES: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigRegistrar {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigRegistrar>;
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
			export module remoteconfig {
				export module internal {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.Code>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.internal.Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static DEADLINE_EXCEEDED: number;
						public static OUT_OF_RANGE: number;
						public static NOT_FOUND: number;
						public static UNAUTHENTICATED: number;
						public static RESOURCE_EXHAUSTED: number;
						public static FAILED_PRECONDITION: number;
						public static ALREADY_EXISTS: number;
						public static UNIMPLEMENTED: number;
						public static UNAVAILABLE: number;
						public static INTERNAL: number;
						public static UNKNOWN: number;
						public static ABORTED: number;
						public static OK: number;
						public static INVALID_ARGUMENT: number;
						public static PERMISSION_DENIED: number;
						public static CANCELLED: number;
						public static DATA_LOSS: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigCacheClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigCacheClient>;
						public putWithoutWaitingForDiskWrite(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public getBlocking(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						public static getInstance(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.remoteconfig.internal.ConfigStorageClient): com.google.firebase.remoteconfig.internal.ConfigCacheClient;
						public put(param0: com.google.firebase.remoteconfig.internal.ConfigContainer, param1: boolean): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public get(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public clear(): void;
						public put(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public static clearInstancesForTest(): void;
					}
					export module ConfigCacheClient {
						export class AwaitListener<TResult>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener<any>>;
							public onFailure(param0: java.lang.Exception): void;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public await(): void;
							public onSuccess(param0: TResult): void;
							public onCanceled(): void;
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
			export module remoteconfig {
				export module internal {
					export class ConfigContainer {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public getFetchTime(): java.util.Date;
						public static newBuilder(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public getAbtExperiments(): org.json.JSONArray;
						public getConfigs(): org.json.JSONObject;
						public static newBuilder(): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module ConfigContainer {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigContainer.Builder>;
							public constructor(param0: com.google.firebase.remoteconfig.internal.ConfigContainer);
							public withFetchTime(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public build(): com.google.firebase.remoteconfig.internal.ConfigContainer;
							public replaceConfigsWith(param0: org.json.JSONObject): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public withAbtExperiments(param0: org.json.JSONArray): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public replaceConfigsWith(param0: java.util.Map<string,string>): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
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
			export module remoteconfig {
				export module internal {
					export class ConfigFetchHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler>;
						public static DEFAULT_MINIMUM_FETCH_INTERVAL_IN_SECONDS: number;
						public constructor(param0: com.google.firebase.iid.FirebaseInstanceId, param1: com.google.firebase.analytics.connector.AnalyticsConnector, param2: java.util.concurrent.Executor, param3: com.google.android.gms.common.util.Clock, param4: java.util.Random, param5: com.google.firebase.remoteconfig.internal.ConfigCacheClient, param6: com.google.firebase.remoteconfig.internal.ConfigFetchHttpClient, param7: com.google.firebase.remoteconfig.internal.ConfigMetadataClient, param8: java.util.Map<string,string>);
						public getAnalyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
						public fetch(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
						public fetch(param0: number): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
					}
					export module ConfigFetchHandler {
						export class FetchResponse {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
							public static forBackendUpdatesFetched(param0: com.google.firebase.remoteconfig.internal.ConfigContainer, param1: string): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forBackendHasNoUpdates(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forLocalStorageUsed(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public getFetchedConfigs(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						}
						export module FetchResponse {
							export class Status {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse.Status>;
								/**
								 * Constructs a new instance of the com.google.firebase.remoteconfig.internal.ConfigFetchHandler$FetchResponse$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static BACKEND_HAS_NO_UPDATES: number;
								public static BACKEND_UPDATES_FETCHED: number;
								public static LOCAL_STORAGE_USED: number;
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
			export module remoteconfig {
				export module internal {
					export class ConfigFetchHttpClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHttpClient>;
						public getReadTimeoutInSeconds(): number;
						public getConnectTimeoutInSeconds(): number;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigGetParameterHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigGetParameterHandler>;
						public static FRC_BYTE_ARRAY_ENCODING: java.nio.charset.Charset;
						public getKeysByPrefix(param0: string): java.util.Set<string>;
						public getDouble(param0: string): number;
						public getValue(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
						public getByteArray(param0: string): native.Array<number>;
						public getLong(param0: string): number;
						public getAll(): java.util.Map<string,com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
						public constructor(param0: com.google.firebase.remoteconfig.internal.ConfigCacheClient, param1: com.google.firebase.remoteconfig.internal.ConfigCacheClient);
						public getString(param0: string): string;
						public getBoolean(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigMetadataClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigMetadataClient>;
						public static LAST_FETCH_TIME_IN_MILLIS_NO_FETCH_YET: number;
						public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
						public getFetchTimeoutInSeconds(): number;
						public getMinimumFetchIntervalInSeconds(): number;
						public setConfigSettingsWithoutWaitingOnDiskWrite(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
						public constructor(param0: globalAndroid.content.SharedPreferences);
						public clear(): void;
						public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
						public isDeveloperModeEnabled(): boolean;
					}
					export module ConfigMetadataClient {
						export class BackoffMetadata {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigMetadataClient.BackoffMetadata>;
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
			export module remoteconfig {
				export module internal {
					export class ConfigStorageClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigStorageClient>;
						public clear(): java.lang.Void;
						public read(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						public write(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): java.lang.Void;
						public static getInstance(param0: globalAndroid.content.Context, param1: string): com.google.firebase.remoteconfig.internal.ConfigStorageClient;
						public static clearInstancesForTest(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class DefaultsXmlParser {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.DefaultsXmlParser>;
						public constructor();
						public static getDefaultsFromXml(param0: globalAndroid.content.Context, param1: number): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class FirebaseRemoteConfigInfoImpl extends com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl>;
						public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
						public getLastFetchStatus(): number;
						public getFetchTimeMillis(): number;
					}
					export module FirebaseRemoteConfigInfoImpl {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl.Builder>;
							public withLastSuccessfulFetchTimeInMillis(param0: number): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl.Builder;
							public build(): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl;
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
			export module remoteconfig {
				export module internal {
					export class FirebaseRemoteConfigValueImpl extends com.google.firebase.remoteconfig.FirebaseRemoteConfigValue {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigValueImpl>;
						public asDouble(): number;
						public getSource(): number;
						public asLong(): number;
						public asByteArray(): native.Array<number>;
						public asString(): string;
						public asBoolean(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class LegacyConfigsHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.LegacyConfigsHandler>;
						public static EXPERIMENT_ID_KEY: string;
						public static EXPERIMENT_VARIANT_ID_KEY: string;
						public static EXPERIMENT_START_TIME_KEY: string;
						public static EXPERIMENT_TRIGGER_EVENT_KEY: string;
						public static EXPERIMENT_TRIGGER_TIMEOUT_KEY: string;
						public static EXPERIMENT_TIME_TO_LIVE_KEY: string;
						public saveLegacyConfigsIfNecessary(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: string);
					}
					export module LegacyConfigsHandler {
						export class NamespaceLegacyConfigs {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.LegacyConfigsHandler.NamespaceLegacyConfigs>;
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
			export module remoteconfig {
				export module proto {
					export class ConfigPersistence {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence>;
						public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
					}
					export module ConfigPersistence {
						export class ConfigHolder extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder,com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolderOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder>;
							public static NAMESPACE_KEY_VALUE_FIELD_NUMBER: number;
							public static TIMESTAMP_FIELD_NUMBER: number;
							public static EXPERIMENT_PAYLOAD_FIELD_NUMBER: number;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public getNamespaceKeyValueCount(): number;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getNamespaceKeyValueOrBuilderList(): java.util.List<any>;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder>;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public getSerializedSize(): number;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public hasTimestamp(): boolean;
							public getExperimentPayloadCount(): number;
							public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
							public getNamespaceKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public getNamespaceKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
							public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
							public getTimestamp(): number;
							public getNamespaceKeyValueOrBuilder(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValueOrBuilder;
						}
						export module ConfigHolder {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder,com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolderOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder>;
								public hasTimestamp(): boolean;
								public removeNamespaceKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public addAllExperimentPayload(param0: java.lang.Iterable<any>): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
								public addExperimentPayload(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public getExperimentPayloadCount(): number;
								public getNamespaceKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
								public addAllNamespaceKeyValue(param0: java.lang.Iterable<any>): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public getNamespaceKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
								public clearTimestamp(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public setExperimentPayload(param0: number, param1: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public setTimestamp(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public addNamespaceKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public setNamespaceKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public addNamespaceKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public setNamespaceKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public clearNamespaceKeyValue(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public addNamespaceKeyValue(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
								public getNamespaceKeyValueCount(): number;
								public getTimestamp(): number;
								public addNamespaceKeyValue(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
								public clearExperimentPayload(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder;
							}
						}
						export class ConfigHolderOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolderOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$ConfigHolderOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getNamespaceKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
								getNamespaceKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
								getNamespaceKeyValueCount(): number;
								hasTimestamp(): boolean;
								getTimestamp(): number;
								getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
								getExperimentPayloadCount(): number;
								getExperimentPayload(param0: number): com.google.protobuf.ByteString;
							});
							public constructor();
							public hasTimestamp(): boolean;
							public getExperimentPayloadCount(): number;
							public getNamespaceKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
							public getExperimentPayloadList(): java.util.List<com.google.protobuf.ByteString>;
							public getExperimentPayload(param0: number): com.google.protobuf.ByteString;
							public getNamespaceKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public getTimestamp(): number;
							public getNamespaceKeyValueCount(): number;
						}
						export class KeyValue extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue,com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValueOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
							public static KEY_FIELD_NUMBER: number;
							public static VALUE_FIELD_NUMBER: number;
							public getValue(): com.google.protobuf.ByteString;
							public hasValue(): boolean;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public getKeyBytes(): com.google.protobuf.ByteString;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
							public getKey(): string;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public hasKey(): boolean;
							public getSerializedSize(): number;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
						}
						export module KeyValue {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue,com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValueOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder>;
								public getValue(): com.google.protobuf.ByteString;
								public hasValue(): boolean;
								public hasKey(): boolean;
								public setValue(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
								public getKey(): string;
								public setKeyBytes(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
								public clearValue(): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
								public setKey(param0: string): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
								public getKeyBytes(): com.google.protobuf.ByteString;
								public clearKey(): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder;
							}
						}
						export class KeyValueOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValueOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$KeyValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasKey(): boolean;
								getKey(): string;
								getKeyBytes(): com.google.protobuf.ByteString;
								hasValue(): boolean;
								getValue(): com.google.protobuf.ByteString;
							});
							public constructor();
							public getValue(): com.google.protobuf.ByteString;
							public getKey(): string;
							public hasValue(): boolean;
							public hasKey(): boolean;
							public getKeyBytes(): com.google.protobuf.ByteString;
						}
						export class Metadata extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata,com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.MetadataOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata>;
							public static LAST_FETCH_STATUS_FIELD_NUMBER: number;
							public static DEVELOPER_MODE_ENABLED_FIELD_NUMBER: number;
							public static LAST_KNOWN_EXPERIMENT_START_TIME_FIELD_NUMBER: number;
							public hasLastKnownExperimentStartTime(): boolean;
							public getLastKnownExperimentStartTime(): number;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public hasLastFetchStatus(): boolean;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata>;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public getLastFetchStatus(): number;
							public getDeveloperModeEnabled(): boolean;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getSerializedSize(): number;
							public hasDeveloperModeEnabled(): boolean;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
						}
						export module Metadata {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata,com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.MetadataOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder>;
								public clearLastKnownExperimentStartTime(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
								public hasLastKnownExperimentStartTime(): boolean;
								public setLastFetchStatus(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
								public getLastKnownExperimentStartTime(): number;
								public getDeveloperModeEnabled(): boolean;
								public clearLastFetchStatus(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
								public clearDeveloperModeEnabled(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
								public hasLastFetchStatus(): boolean;
								public getLastFetchStatus(): number;
								public setDeveloperModeEnabled(param0: boolean): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
								public hasDeveloperModeEnabled(): boolean;
								public setLastKnownExperimentStartTime(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder;
							}
						}
						export class MetadataOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.MetadataOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$MetadataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasLastFetchStatus(): boolean;
								getLastFetchStatus(): number;
								hasDeveloperModeEnabled(): boolean;
								getDeveloperModeEnabled(): boolean;
								hasLastKnownExperimentStartTime(): boolean;
								getLastKnownExperimentStartTime(): number;
							});
							public constructor();
							public hasLastKnownExperimentStartTime(): boolean;
							public getLastKnownExperimentStartTime(): number;
							public getLastFetchStatus(): number;
							public getDeveloperModeEnabled(): boolean;
							public hasLastFetchStatus(): boolean;
							public hasDeveloperModeEnabled(): boolean;
						}
						export class NamespaceKeyValue extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue,com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValueOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
							public static NAMESPACE_FIELD_NUMBER: number;
							public static KEY_VALUE_FIELD_NUMBER: number;
							public getKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue>;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getNamespaceBytes(): com.google.protobuf.ByteString;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public getSerializedSize(): number;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public getNamespace(): string;
							public getKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public hasNamespace(): boolean;
							public getKeyValueOrBuilder(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValueOrBuilder;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getKeyValueOrBuilderList(): java.util.List<any>;
							public getKeyValueCount(): number;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
						}
						export module NamespaceKeyValue {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue,com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValueOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder>;
								public addKeyValue(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public removeKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public getNamespaceBytes(): com.google.protobuf.ByteString;
								public addKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public setKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public clearKeyValue(): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public setNamespaceBytes(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public hasNamespace(): boolean;
								public addKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public setKeyValue(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public getNamespace(): string;
								public getKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
								public clearNamespace(): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public addAllKeyValue(param0: java.lang.Iterable<any>): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public addKeyValue(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public setNamespace(param0: string): com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValue.Builder;
								public getKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
								public getKeyValueCount(): number;
							}
						}
						export class NamespaceKeyValueOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.NamespaceKeyValueOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$NamespaceKeyValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasNamespace(): boolean;
								getNamespace(): string;
								getNamespaceBytes(): com.google.protobuf.ByteString;
								getKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
								getKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
								getKeyValueCount(): number;
							});
							public constructor();
							public getKeyValueList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue>;
							public getKeyValue(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.KeyValue;
							public hasNamespace(): boolean;
							public getKeyValueCount(): number;
							public getNamespaceBytes(): com.google.protobuf.ByteString;
							public getNamespace(): string;
						}
						export class PersistedConfig extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig,com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfigOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig>;
							public static FETCHED_CONFIG_HOLDER_FIELD_NUMBER: number;
							public static ACTIVE_CONFIG_HOLDER_FIELD_NUMBER: number;
							public static DEFAULTS_CONFIG_HOLDER_FIELD_NUMBER: number;
							public static METADATA_FIELD_NUMBER: number;
							public static APPLIED_RESOURCE_FIELD_NUMBER: number;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getActiveConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getAppliedResourceOrBuilderList(): java.util.List<any>;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig>;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getSerializedSize(): number;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getFetchedConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public hasActiveConfigHolder(): boolean;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getDefaultsConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getMetadata(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public getAppliedResourceCount(): number;
							public getAppliedResourceOrBuilder(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.ResourceOrBuilder;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
							public hasFetchedConfigHolder(): boolean;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public hasDefaultsConfigHolder(): boolean;
							public getAppliedResource(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public getAppliedResourceList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig;
							public hasMetadata(): boolean;
						}
						export module PersistedConfig {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig,com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfigOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder>;
								public getAppliedResource(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
								public addAllAppliedResource(param0: java.lang.Iterable<any>): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public getActiveConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								public getAppliedResourceList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
								public setActiveConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public mergeMetadata(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public getFetchedConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								public clearFetchedConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public addAppliedResource(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setDefaultsConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public getMetadata(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
								public setMetadata(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public getDefaultsConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								public setAppliedResource(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public clearActiveConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public hasFetchedConfigHolder(): boolean;
								public addAppliedResource(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setFetchedConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setActiveConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public mergeActiveConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setDefaultsConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setFetchedConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public hasActiveConfigHolder(): boolean;
								public setMetadata(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public getAppliedResourceCount(): number;
								public addAppliedResource(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public clearMetadata(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public removeAppliedResource(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public hasDefaultsConfigHolder(): boolean;
								public mergeFetchedConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public mergeDefaultsConfigHolder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public clearDefaultsConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public addAppliedResource(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public clearAppliedResource(): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public setAppliedResource(param0: number, param1: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource): com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfig.Builder;
								public hasMetadata(): boolean;
							}
						}
						export class PersistedConfigOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.PersistedConfigOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$PersistedConfigOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasFetchedConfigHolder(): boolean;
								getFetchedConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								hasActiveConfigHolder(): boolean;
								getActiveConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								hasDefaultsConfigHolder(): boolean;
								getDefaultsConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
								hasMetadata(): boolean;
								getMetadata(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
								getAppliedResourceList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
								getAppliedResource(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
								getAppliedResourceCount(): number;
							});
							public constructor();
							public hasFetchedConfigHolder(): boolean;
							public getFetchedConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public hasActiveConfigHolder(): boolean;
							public hasDefaultsConfigHolder(): boolean;
							public getActiveConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public getAppliedResource(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public getDefaultsConfigHolder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.ConfigHolder;
							public getAppliedResourceList(): java.util.List<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
							public getMetadata(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Metadata;
							public hasMetadata(): boolean;
							public getAppliedResourceCount(): number;
						}
						export class Resource extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource,com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.ResourceOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
							public static RESOURCE_ID_FIELD_NUMBER: number;
							public static APP_UPDATE_TIME_FIELD_NUMBER: number;
							public static NAMESPACE_FIELD_NUMBER: number;
							public hasResourceId(): boolean;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public hasNamespace(): boolean;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static getDefaultInstance(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public getResourceId(): number;
							public static newBuilder(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getNamespaceBytes(): com.google.protobuf.ByteString;
							public hasAppUpdateTime(): boolean;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getAppUpdateTime(): number;
							public static newBuilder(param0: com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
							public getSerializedSize(): number;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource>;
							public getNamespace(): string;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource;
						}
						export module Resource {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource,com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder> implements com.google.firebase.remoteconfig.proto.ConfigPersistence.ResourceOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder>;
								public setAppUpdateTime(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public getNamespaceBytes(): com.google.protobuf.ByteString;
								public hasNamespace(): boolean;
								public setNamespace(param0: string): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public getAppUpdateTime(): number;
								public hasAppUpdateTime(): boolean;
								public clearResourceId(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public getNamespace(): string;
								public clearNamespace(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public clearAppUpdateTime(): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public getResourceId(): number;
								public hasResourceId(): boolean;
								public setResourceId(param0: number): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
								public setNamespaceBytes(param0: com.google.protobuf.ByteString): com.google.firebase.remoteconfig.proto.ConfigPersistence.Resource.Builder;
							}
						}
						export class ResourceOrBuilder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.proto.ConfigPersistence.ResourceOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.remoteconfig.proto.ConfigPersistence$ResourceOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasResourceId(): boolean;
								getResourceId(): number;
								hasAppUpdateTime(): boolean;
								getAppUpdateTime(): number;
								hasNamespace(): boolean;
								getNamespace(): string;
								getNamespaceBytes(): com.google.protobuf.ByteString;
							});
							public constructor();
							public hasAppUpdateTime(): boolean;
							public hasResourceId(): boolean;
							public hasNamespace(): boolean;
							public getAppUpdateTime(): number;
							public getResourceId(): number;
							public getNamespaceBytes(): com.google.protobuf.ByteString;
							public getNamespace(): string;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener:1

