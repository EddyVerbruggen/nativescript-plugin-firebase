/// <reference path="android-declarations.d.ts"/>

declare module analytics_collection {
	export class GmpMeasurement {
		public static class: java.lang.Class<analytics_collection.GmpMeasurement>;
		public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
	}
	export module GmpMeasurement {
		export class AudienceLeafFilterResult extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.AudienceLeafFilterResult,analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder> implements analytics_collection.GmpMeasurement.AudienceLeafFilterResultOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
			public static AUDIENCE_ID_FIELD_NUMBER: number;
			public static CURRENT_DATA_FIELD_NUMBER: number;
			public static PREVIOUS_DATA_FIELD_NUMBER: number;
			public static NEW_AUDIENCE_FIELD_NUMBER: number;
			public getCurrentData(): analytics_collection.GmpMeasurement.ResultData;
			public getNewAudience(): boolean;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public hasAudienceId(): boolean;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.AudienceLeafFilterResult): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
			public hasPreviousData(): boolean;
			public getSerializedSize(): number;
			public static newBuilder(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
			public hasCurrentData(): boolean;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public getAudienceId(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public hasNewAudience(): boolean;
			public getPreviousData(): analytics_collection.GmpMeasurement.ResultData;
		}
		export module AudienceLeafFilterResult {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.AudienceLeafFilterResult,analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder> implements analytics_collection.GmpMeasurement.AudienceLeafFilterResultOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder>;
				public clearNewAudience(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public clearAudienceId(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public hasCurrentData(): boolean;
				public getNewAudience(): boolean;
				public setNewAudience(param0: boolean): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public clearCurrentData(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public mergeCurrentData(param0: analytics_collection.GmpMeasurement.ResultData): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public hasNewAudience(): boolean;
				public setCurrentData(param0: analytics_collection.GmpMeasurement.ResultData.Builder): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public setAudienceId(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public getPreviousData(): analytics_collection.GmpMeasurement.ResultData;
				public clearPreviousData(): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public setPreviousData(param0: analytics_collection.GmpMeasurement.ResultData): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public setCurrentData(param0: analytics_collection.GmpMeasurement.ResultData): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public mergePreviousData(param0: analytics_collection.GmpMeasurement.ResultData): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public setPreviousData(param0: analytics_collection.GmpMeasurement.ResultData.Builder): analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder;
				public hasAudienceId(): boolean;
				public hasPreviousData(): boolean;
				public getAudienceId(): number;
				public getCurrentData(): analytics_collection.GmpMeasurement.ResultData;
			}
		}
		export class AudienceLeafFilterResultOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.AudienceLeafFilterResultOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$AudienceLeafFilterResultOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasAudienceId(): boolean;
				getAudienceId(): number;
				hasCurrentData(): boolean;
				getCurrentData(): analytics_collection.GmpMeasurement.ResultData;
				hasPreviousData(): boolean;
				getPreviousData(): analytics_collection.GmpMeasurement.ResultData;
				hasNewAudience(): boolean;
				getNewAudience(): boolean;
			});
			public constructor();
			public getCurrentData(): analytics_collection.GmpMeasurement.ResultData;
			public getNewAudience(): boolean;
			public getAudienceId(): number;
			public hasCurrentData(): boolean;
			public hasAudienceId(): boolean;
			public hasPreviousData(): boolean;
			public hasNewAudience(): boolean;
			public getPreviousData(): analytics_collection.GmpMeasurement.ResultData;
		}
		export class DynamicFilterResultTimestamp extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp,analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder> implements analytics_collection.GmpMeasurement.DynamicFilterResultTimestampOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
			public static INDEX_FIELD_NUMBER: number;
			public static EVAL_TIMESTAMP_FIELD_NUMBER: number;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public getIndex(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public hasEvalTimestamp(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public hasIndex(): boolean;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
			public getEvalTimestamp(): number;
			public static newBuilder(): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public getSerializedSize(): number;
		}
		export module DynamicFilterResultTimestamp {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp,analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder> implements analytics_collection.GmpMeasurement.DynamicFilterResultTimestampOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder>;
				public clearEvalTimestamp(): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
				public setIndex(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
				public getEvalTimestamp(): number;
				public hasEvalTimestamp(): boolean;
				public getIndex(): number;
				public hasIndex(): boolean;
				public clearIndex(): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
				public setEvalTimestamp(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder;
			}
		}
		export class DynamicFilterResultTimestampOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.DynamicFilterResultTimestampOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$DynamicFilterResultTimestampOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasIndex(): boolean;
				getIndex(): number;
				hasEvalTimestamp(): boolean;
				getEvalTimestamp(): number;
			});
			public constructor();
			public getIndex(): number;
			public hasIndex(): boolean;
			public hasEvalTimestamp(): boolean;
			public getEvalTimestamp(): number;
		}
		export class Event extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.Event,analytics_collection.GmpMeasurement.Event.Builder> implements analytics_collection.GmpMeasurement.EventOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.Event>;
			public static PARAMS_FIELD_NUMBER: number;
			public static NAME_FIELD_NUMBER: number;
			public static TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static PREVIOUS_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static COUNT_FIELD_NUMBER: number;
			public getNameBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.Event;
			public getParamsOrBuilder(param0: number): analytics_collection.GmpMeasurement.EventParamOrBuilder;
			public hasPreviousTimestampMillis(): boolean;
			public getTimestampMillis(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.Event;
			public hasTimestampMillis(): boolean;
			public getParamsOrBuilderList(): java.util.List<any>;
			public getCount(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.Event;
			public getSerializedSize(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.Event;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.Event;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.Event;
			public hasCount(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.Event;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.Event;
			public hasName(): boolean;
			public getParams(param0: number): analytics_collection.GmpMeasurement.EventParam;
			public getPreviousTimestampMillis(): number;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static newBuilder(): analytics_collection.GmpMeasurement.Event.Builder;
			public getParamsList(): java.util.List<analytics_collection.GmpMeasurement.EventParam>;
			public getName(): string;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.Event;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.Event): analytics_collection.GmpMeasurement.Event.Builder;
			public getParamsCount(): number;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.Event;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.Event>;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.Event;
		}
		export module Event {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.Event,analytics_collection.GmpMeasurement.Event.Builder> implements analytics_collection.GmpMeasurement.EventOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.Event.Builder>;
				public getNameBytes(): com.google.protobuf.ByteString;
				public addAllParams(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.Event.Builder;
				public clearCount(): analytics_collection.GmpMeasurement.Event.Builder;
				public hasPreviousTimestampMillis(): boolean;
				public addParams(param0: analytics_collection.GmpMeasurement.EventParam.Builder): analytics_collection.GmpMeasurement.Event.Builder;
				public setTimestampMillis(param0: number): analytics_collection.GmpMeasurement.Event.Builder;
				public getParamsCount(): number;
				public addParams(param0: analytics_collection.GmpMeasurement.EventParam): analytics_collection.GmpMeasurement.Event.Builder;
				public hasCount(): boolean;
				public clearPreviousTimestampMillis(): analytics_collection.GmpMeasurement.Event.Builder;
				public setParams(param0: number, param1: analytics_collection.GmpMeasurement.EventParam): analytics_collection.GmpMeasurement.Event.Builder;
				public setCount(param0: number): analytics_collection.GmpMeasurement.Event.Builder;
				public setPreviousTimestampMillis(param0: number): analytics_collection.GmpMeasurement.Event.Builder;
				public addParams(param0: number, param1: analytics_collection.GmpMeasurement.EventParam): analytics_collection.GmpMeasurement.Event.Builder;
				public setParams(param0: number, param1: analytics_collection.GmpMeasurement.EventParam.Builder): analytics_collection.GmpMeasurement.Event.Builder;
				public getPreviousTimestampMillis(): number;
				public removeParams(param0: number): analytics_collection.GmpMeasurement.Event.Builder;
				public hasTimestampMillis(): boolean;
				public addParams(param0: number, param1: analytics_collection.GmpMeasurement.EventParam.Builder): analytics_collection.GmpMeasurement.Event.Builder;
				public getName(): string;
				public getCount(): number;
				public hasName(): boolean;
				public clearTimestampMillis(): analytics_collection.GmpMeasurement.Event.Builder;
				public getParams(param0: number): analytics_collection.GmpMeasurement.EventParam;
				public setName(param0: string): analytics_collection.GmpMeasurement.Event.Builder;
				public getTimestampMillis(): number;
				public getParamsList(): java.util.List<analytics_collection.GmpMeasurement.EventParam>;
				public clearName(): analytics_collection.GmpMeasurement.Event.Builder;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.Event.Builder;
				public clearParams(): analytics_collection.GmpMeasurement.Event.Builder;
			}
		}
		export class EventOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.EventOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$EventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getParamsList(): java.util.List<analytics_collection.GmpMeasurement.EventParam>;
				getParams(param0: number): analytics_collection.GmpMeasurement.EventParam;
				getParamsCount(): number;
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasTimestampMillis(): boolean;
				getTimestampMillis(): number;
				hasPreviousTimestampMillis(): boolean;
				getPreviousTimestampMillis(): number;
				hasCount(): boolean;
				getCount(): number;
			});
			public constructor();
			public getNameBytes(): com.google.protobuf.ByteString;
			public hasPreviousTimestampMillis(): boolean;
			public getTimestampMillis(): number;
			public hasCount(): boolean;
			public hasName(): boolean;
			public getParamsList(): java.util.List<analytics_collection.GmpMeasurement.EventParam>;
			public getName(): string;
			public getParamsCount(): number;
			public hasTimestampMillis(): boolean;
			public getCount(): number;
			public getParams(param0: number): analytics_collection.GmpMeasurement.EventParam;
			public getPreviousTimestampMillis(): number;
		}
		export class EventParam extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.EventParam,analytics_collection.GmpMeasurement.EventParam.Builder> implements analytics_collection.GmpMeasurement.EventParamOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.EventParam>;
			public static NAME_FIELD_NUMBER: number;
			public static STRING_VALUE_FIELD_NUMBER: number;
			public static INT_VALUE_FIELD_NUMBER: number;
			public static FLOAT_VALUE_FIELD_NUMBER: number;
			public static DOUBLE_VALUE_FIELD_NUMBER: number;
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.EventParam;
			public static newBuilder(): analytics_collection.GmpMeasurement.EventParam.Builder;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.EventParam>;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.EventParam;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.EventParam;
			public getFloatValue(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.EventParam;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.EventParam;
			public hasDoubleValue(): boolean;
			public getSerializedSize(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.EventParam;
			public hasStringValue(): boolean;
			public hasName(): boolean;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.EventParam;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.EventParam;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.EventParam): analytics_collection.GmpMeasurement.EventParam.Builder;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.EventParam;
			public getName(): string;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.EventParam;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.EventParam;
			public hasFloatValue(): boolean;
			public getStringValue(): string;
		}
		export module EventParam {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.EventParam,analytics_collection.GmpMeasurement.EventParam.Builder> implements analytics_collection.GmpMeasurement.EventParamOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.EventParam.Builder>;
				public getNameBytes(): com.google.protobuf.ByteString;
				public hasStringValue(): boolean;
				public hasDoubleValue(): boolean;
				public getIntValue(): number;
				public setName(param0: string): analytics_collection.GmpMeasurement.EventParam.Builder;
				public getDoubleValue(): number;
				public hasIntValue(): boolean;
				public getName(): string;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.EventParam.Builder;
				public clearStringValue(): analytics_collection.GmpMeasurement.EventParam.Builder;
				public hasName(): boolean;
				public clearName(): analytics_collection.GmpMeasurement.EventParam.Builder;
				public getStringValue(): string;
				public getFloatValue(): number;
				public clearIntValue(): analytics_collection.GmpMeasurement.EventParam.Builder;
				public getStringValueBytes(): com.google.protobuf.ByteString;
				public hasFloatValue(): boolean;
				public clearFloatValue(): analytics_collection.GmpMeasurement.EventParam.Builder;
				public setStringValue(param0: string): analytics_collection.GmpMeasurement.EventParam.Builder;
				public clearDoubleValue(): analytics_collection.GmpMeasurement.EventParam.Builder;
				public setStringValueBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.EventParam.Builder;
				public setIntValue(param0: number): analytics_collection.GmpMeasurement.EventParam.Builder;
				public setFloatValue(param0: number): analytics_collection.GmpMeasurement.EventParam.Builder;
				public setDoubleValue(param0: number): analytics_collection.GmpMeasurement.EventParam.Builder;
			}
		}
		export class EventParamOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.EventParamOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$EventParamOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasStringValue(): boolean;
				getStringValue(): string;
				getStringValueBytes(): com.google.protobuf.ByteString;
				hasIntValue(): boolean;
				getIntValue(): number;
				hasFloatValue(): boolean;
				getFloatValue(): number;
				hasDoubleValue(): boolean;
				getDoubleValue(): number;
			});
			public constructor();
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public hasStringValue(): boolean;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public hasName(): boolean;
			public getName(): string;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public getFloatValue(): number;
			public hasFloatValue(): boolean;
			public hasDoubleValue(): boolean;
			public getStringValue(): string;
		}
		export class GaiaInfo extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.GaiaInfo,analytics_collection.GmpMeasurement.GaiaInfo.Builder> implements analytics_collection.GmpMeasurement.GaiaInfoOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfo>;
			public static ENCRYPTED_GAIA_ID_REQUIRES_PRIVACY_REVIEW_FIELD_NUMBER: number;
			public static PRIVACY_MODIFIERS_REQUIRES_PRIVACY_REVIEW_FIELD_NUMBER: number;
			public static PUBLISHER_PRIVACY_MODIFIERS_REQUIRES_PRIVACY_REVIEW_FIELD_NUMBER: number;
			public static LOW_LEVEL_INFO_REQUIRES_PRIVACY_REVIEW_FIELD_NUMBER: number;
			public getPrivacyModifiersRequiresPrivacyReview(): number;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.GaiaInfo): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
			public hasPublisherPrivacyModifiersRequiresPrivacyReview(): boolean;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.GaiaInfo;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.GaiaInfo;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.GaiaInfo;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.GaiaInfo;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.GaiaInfo;
			public hasEncryptedGaiaIdRequiresPrivacyReview(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo;
			public static newBuilder(): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo;
			public getSerializedSize(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo;
			public hasLowLevelInfoRequiresPrivacyReview(): boolean;
			public getEncryptedGaiaIdRequiresPrivacyReview(): string;
			public getEncryptedGaiaIdRequiresPrivacyReviewBytes(): com.google.protobuf.ByteString;
			public getPublisherPrivacyModifiersRequiresPrivacyReview(): number;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public hasPrivacyModifiersRequiresPrivacyReview(): boolean;
			public getLowLevelInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.GaiaInfo>;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.GaiaInfo;
		}
		export module GaiaInfo {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.GaiaInfo,analytics_collection.GmpMeasurement.GaiaInfo.Builder> implements analytics_collection.GmpMeasurement.GaiaInfoOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfo.Builder>;
				public hasLowLevelInfoRequiresPrivacyReview(): boolean;
				public clearLowLevelInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public getPrivacyModifiersRequiresPrivacyReview(): number;
				public setEncryptedGaiaIdRequiresPrivacyReview(param0: string): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public setEncryptedGaiaIdRequiresPrivacyReviewBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public getLowLevelInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public clearPrivacyModifiersRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public mergeLowLevelInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public hasPublisherPrivacyModifiersRequiresPrivacyReview(): boolean;
				public clearEncryptedGaiaIdRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public hasEncryptedGaiaIdRequiresPrivacyReview(): boolean;
				public clearPublisherPrivacyModifiersRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public setLowLevelInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public setLowLevelInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public setPrivacyModifiersRequiresPrivacyReview(param0: number): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
				public getEncryptedGaiaIdRequiresPrivacyReview(): string;
				public getEncryptedGaiaIdRequiresPrivacyReviewBytes(): com.google.protobuf.ByteString;
				public hasPrivacyModifiersRequiresPrivacyReview(): boolean;
				public getPublisherPrivacyModifiersRequiresPrivacyReview(): number;
				public setPublisherPrivacyModifiersRequiresPrivacyReview(param0: number): analytics_collection.GmpMeasurement.GaiaInfo.Builder;
			}
			export class LoggedLowLevelPrivacyInfo extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo,analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfoOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo>;
				public static USER_CONTROLS_FIELD_NUMBER: number;
				public static PARTICIPATION_LEVEL_FIELD_NUMBER: number;
				public hasUserControls(): boolean;
				public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static getDefaultInstance(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public hasParticipationLevel(): boolean;
				public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
				public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static newBuilder(param0: analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
				public getSerializedSize(): number;
				public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public getParticipationLevel(): number;
				public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static newBuilder(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo>;
				public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public getUserControls(): number;
				public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
				public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			}
			export module LoggedLowLevelPrivacyInfo {
				export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo,analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfoOrBuilder  {
					public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder>;
					public hasUserControls(): boolean;
					public setParticipationLevel(param0: number): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
					public hasParticipationLevel(): boolean;
					public setUserControls(param0: number): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
					public getUserControls(): number;
					public getParticipationLevel(): number;
					public clearParticipationLevel(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
					public clearUserControls(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo.Builder;
				}
			}
			export class LoggedLowLevelPrivacyInfoOrBuilder {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfoOrBuilder>;
				/**
				 * Constructs a new instance of the analytics_collection.GmpMeasurement$GaiaInfo$LoggedLowLevelPrivacyInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					hasUserControls(): boolean;
					getUserControls(): number;
					hasParticipationLevel(): boolean;
					getParticipationLevel(): number;
				});
				public constructor();
				public hasUserControls(): boolean;
				public getParticipationLevel(): number;
				public hasParticipationLevel(): boolean;
				public getUserControls(): number;
			}
		}
		export class GaiaInfoOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.GaiaInfoOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$GaiaInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasEncryptedGaiaIdRequiresPrivacyReview(): boolean;
				getEncryptedGaiaIdRequiresPrivacyReview(): string;
				getEncryptedGaiaIdRequiresPrivacyReviewBytes(): com.google.protobuf.ByteString;
				hasPrivacyModifiersRequiresPrivacyReview(): boolean;
				getPrivacyModifiersRequiresPrivacyReview(): number;
				hasPublisherPrivacyModifiersRequiresPrivacyReview(): boolean;
				getPublisherPrivacyModifiersRequiresPrivacyReview(): number;
				hasLowLevelInfoRequiresPrivacyReview(): boolean;
				getLowLevelInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
			});
			public constructor();
			public hasEncryptedGaiaIdRequiresPrivacyReview(): boolean;
			public hasPrivacyModifiersRequiresPrivacyReview(): boolean;
			public getPrivacyModifiersRequiresPrivacyReview(): number;
			public getLowLevelInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.GaiaInfo.LoggedLowLevelPrivacyInfo;
			public hasLowLevelInfoRequiresPrivacyReview(): boolean;
			public hasPublisherPrivacyModifiersRequiresPrivacyReview(): boolean;
			public getEncryptedGaiaIdRequiresPrivacyReview(): string;
			public getEncryptedGaiaIdRequiresPrivacyReviewBytes(): com.google.protobuf.ByteString;
			public getPublisherPrivacyModifiersRequiresPrivacyReview(): number;
		}
		export class MeasurementBatch extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.MeasurementBatch,analytics_collection.GmpMeasurement.MeasurementBatch.Builder> implements analytics_collection.GmpMeasurement.MeasurementBatchOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBatch>;
			public static BUNDLES_FIELD_NUMBER: number;
			public static API_REQUESTS_FIELD_NUMBER: number;
			public getApiRequestsOrBuilderList(): java.util.List<any>;
			public getBundlesOrBuilder(param0: number): analytics_collection.GmpMeasurement.MeasurementBundleOrBuilder;
			public getBundlesCount(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.MeasurementBatch): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
			public getBundlesOrBuilderList(): java.util.List<any>;
			public getApiRequestsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBatch;
			public getApiRequestsCount(): number;
			public getApiRequestsOrBuilder(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequestOrBuilder;
			public getSerializedSize(): number;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.MeasurementBatch>;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.MeasurementBatch;
			public getApiRequests(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBatch;
			public getBundles(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBatch;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public getBundlesList(): java.util.List<analytics_collection.GmpMeasurement.MeasurementBundle>;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static newBuilder(): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.MeasurementBatch;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBatch;
		}
		export module MeasurementBatch {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.MeasurementBatch,analytics_collection.GmpMeasurement.MeasurementBatch.Builder> implements analytics_collection.GmpMeasurement.MeasurementBatchOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBatch.Builder>;
				public setApiRequests(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public getApiRequestsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
				public getBundles(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle;
				public setBundles(param0: number, param1: analytics_collection.GmpMeasurement.MeasurementBundle.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public removeBundles(param0: number): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public removeApiRequests(param0: number): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addBundles(param0: analytics_collection.GmpMeasurement.MeasurementBundle.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public getBundlesCount(): number;
				public getApiRequests(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
				public addBundles(param0: number, param1: analytics_collection.GmpMeasurement.MeasurementBundle.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addAllApiRequests(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addAllBundles(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public getBundlesList(): java.util.List<analytics_collection.GmpMeasurement.MeasurementBundle>;
				public setBundles(param0: number, param1: analytics_collection.GmpMeasurement.MeasurementBundle): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addApiRequests(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addApiRequests(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public setApiRequests(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addBundles(param0: number, param1: analytics_collection.GmpMeasurement.MeasurementBundle): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public clearApiRequests(): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public getApiRequestsCount(): number;
				public addApiRequests(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public clearBundles(): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addApiRequests(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
				public addBundles(param0: analytics_collection.GmpMeasurement.MeasurementBundle): analytics_collection.GmpMeasurement.MeasurementBatch.Builder;
			}
		}
		export class MeasurementBatchOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBatchOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$MeasurementBatchOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getBundlesList(): java.util.List<analytics_collection.GmpMeasurement.MeasurementBundle>;
				getBundles(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle;
				getBundlesCount(): number;
				getApiRequestsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
				getApiRequests(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
				getApiRequestsCount(): number;
			});
			public constructor();
			public getBundlesList(): java.util.List<analytics_collection.GmpMeasurement.MeasurementBundle>;
			public getApiRequestsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
			public getApiRequests(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getBundles(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getBundlesCount(): number;
			public getApiRequestsCount(): number;
		}
		export class MeasurementBundle extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.MeasurementBundle,analytics_collection.GmpMeasurement.MeasurementBundle.Builder> implements analytics_collection.GmpMeasurement.MeasurementBundleOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBundle>;
			public static PROTOCOL_VERSION_FIELD_NUMBER: number;
			public static EVENTS_FIELD_NUMBER: number;
			public static USER_ATTRIBUTES_FIELD_NUMBER: number;
			public static UPLOAD_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static START_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static END_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static PREVIOUS_BUNDLE_START_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static PREVIOUS_BUNDLE_END_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static PLATFORM_FIELD_NUMBER: number;
			public static OS_VERSION_FIELD_NUMBER: number;
			public static DEVICE_MODEL_FIELD_NUMBER: number;
			public static USER_DEFAULT_LANGUAGE_FIELD_NUMBER: number;
			public static TIME_ZONE_OFFSET_MINUTES_FIELD_NUMBER: number;
			public static APP_STORE_FIELD_NUMBER: number;
			public static APP_ID_FIELD_NUMBER: number;
			public static APP_ID_NUMERIC_FIELD_NUMBER: number;
			public static APP_VERSION_FIELD_NUMBER: number;
			public static GMP_VERSION_FIELD_NUMBER: number;
			public static UPLOADING_GMP_VERSION_FIELD_NUMBER: number;
			public static RESETTABLE_DEVICE_ID_FIELD_NUMBER: number;
			public static VENDOR_DEVICE_ID_FIELD_NUMBER: number;
			public static LIMITED_AD_TRACKING_FIELD_NUMBER: number;
			public static APP_INSTANCE_ID_FIELD_NUMBER: number;
			public static DEV_CERT_HASH_FIELD_NUMBER: number;
			public static BUNDLE_SEQUENTIAL_INDEX_FIELD_NUMBER: number;
			public static HEALTH_MONITOR_FIELD_NUMBER: number;
			public static GMP_APP_ID_FIELD_NUMBER: number;
			public static SERVICE_UPLOAD_FIELD_NUMBER: number;
			public static AUDIENCE_EVALUATION_RESULTS_FIELD_NUMBER: number;
			public static FIREBASE_INSTANCE_ID_FIELD_NUMBER: number;
			public static APP_VERSION_MAJOR_FIELD_NUMBER: number;
			public static APP_VERSION_MINOR_FIELD_NUMBER: number;
			public static APP_VERSION_RELEASE_FIELD_NUMBER: number;
			public static SSAID_FIELD_NUMBER: number;
			public static CONFIG_VERSION_FIELD_NUMBER: number;
			public static DSID_FIELD_NUMBER: number;
			public static EXTERNAL_STREAM_ID_FIELD_NUMBER: number;
			public static RETRY_COUNTER_FIELD_NUMBER: number;
			public static GAIA_INFO_FIELD_NUMBER: number;
			public static ADMOB_APP_ID_FIELD_NUMBER: number;
			public static BUNDLE_ALSO_LOGGED_IN_GAIA_FIELD_NUMBER: number;
			public static PSEUDONYMOUS_PRIVACY_INFO_REQUIRES_PRIVACY_REVIEW_FIELD_NUMBER: number;
			public getUploadingGmpVersion(): number;
			public hasHealthMonitor(): boolean;
			public getAppId(): string;
			public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
			public hasProtocolVersion(): boolean;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBundle;
			public hasVendorDeviceId(): boolean;
			public getGmpVersion(): number;
			public getSsaid(): string;
			public hasSsaid(): boolean;
			public hasBundleAlsoLoggedInGaia(): boolean;
			public getHealthMonitor(): string;
			public hasGmpAppId(): boolean;
			public getAppVersion(): string;
			public hasAppVersionRelease(): boolean;
			public getSerializedSize(): number;
			public hasLimitedAdTracking(): boolean;
			public getAppIdBytes(): com.google.protobuf.ByteString;
			public getDevCertHash(): number;
			public getAppVersionMinor(): number;
			public getUserDefaultLanguage(): string;
			public getEventsCount(): number;
			public getFirebaseInstanceId(): string;
			public hasTimeZoneOffsetMinutes(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getGaiaInfo(): analytics_collection.GmpMeasurement.GaiaInfo;
			public hasPreviousBundleEndTimestampMillis(): boolean;
			public getExternalStreamIdBytes(): com.google.protobuf.ByteString;
			public hasEndTimestampMillis(): boolean;
			public getEventsList(): java.util.List<analytics_collection.GmpMeasurement.Event>;
			public hasServiceUpload(): boolean;
			public hasDsid(): boolean;
			public hasGaiaInfo(): boolean;
			public getPlatform(): string;
			public getExternalStreamId(): string;
			public getPseudonymousPrivacyInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public getGmpAppIdBytes(): com.google.protobuf.ByteString;
			public static newBuilder(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
			public getDeviceModelBytes(): com.google.protobuf.ByteString;
			public getPreviousBundleEndTimestampMillis(): number;
			public hasAppInstanceId(): boolean;
			public getAudienceEvaluationResultsList(): java.util.List<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
			public getServiceUpload(): boolean;
			public hasExternalStreamId(): boolean;
			public getAudienceEvaluationResultsOrBuilderList(): java.util.List<any>;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getEventsOrBuilder(param0: number): analytics_collection.GmpMeasurement.EventOrBuilder;
			public getPreviousBundleStartTimestampMillis(): number;
			public getUploadTimestampMillis(): number;
			public getDeviceModel(): string;
			public getVendorDeviceId(): string;
			public getOsVersion(): string;
			public getBundleSequentialIndex(): number;
			public getRetryCounter(): number;
			public getUserAttributesList(): java.util.List<analytics_collection.GmpMeasurement.UserAttribute>;
			public getUserAttributesOrBuilderList(): java.util.List<any>;
			public hasUploadTimestampMillis(): boolean;
			public hasAppVersion(): boolean;
			public hasBundleSequentialIndex(): boolean;
			public getOsVersionBytes(): com.google.protobuf.ByteString;
			public getAppVersionRelease(): number;
			public getBundleAlsoLoggedInGaia(): boolean;
			public hasFirebaseInstanceId(): boolean;
			public getAppIdNumeric(): number;
			public getHealthMonitorBytes(): com.google.protobuf.ByteString;
			public getUserAttributesCount(): number;
			public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.MeasurementBundle;
			public hasOsVersion(): boolean;
			public hasStartTimestampMillis(): boolean;
			public getAdmobAppIdBytes(): com.google.protobuf.ByteString;
			public hasGmpVersion(): boolean;
			public hasConfigVersion(): boolean;
			public getAppVersionBytes(): com.google.protobuf.ByteString;
			public getAdmobAppId(): string;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBundle;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getAppStore(): string;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBundle;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public getAppInstanceId(): string;
			public getAudienceEvaluationResults(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public hasUploadingGmpVersion(): boolean;
			public getResettableDeviceId(): string;
			public getAudienceEvaluationResultsOrBuilder(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResultOrBuilder;
			public hasPreviousBundleStartTimestampMillis(): boolean;
			public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getEventsOrBuilderList(): java.util.List<any>;
			public hasAppStore(): boolean;
			public getEvents(param0: number): analytics_collection.GmpMeasurement.Event;
			public getSsaidBytes(): com.google.protobuf.ByteString;
			public getTimeZoneOffsetMinutes(): number;
			public getEndTimestampMillis(): number;
			public hasRetryCounter(): boolean;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getGmpAppId(): string;
			public hasDevCertHash(): boolean;
			public getUserAttributesOrBuilder(param0: number): analytics_collection.GmpMeasurement.UserAttributeOrBuilder;
			public getDsidBytes(): com.google.protobuf.ByteString;
			public getPlatformBytes(): com.google.protobuf.ByteString;
			public hasAppIdNumeric(): boolean;
			public getAppStoreBytes(): com.google.protobuf.ByteString;
			public hasAppId(): boolean;
			public getProtocolVersion(): number;
			public hasDeviceModel(): boolean;
			public getUserAttributes(param0: number): analytics_collection.GmpMeasurement.UserAttribute;
			public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
			public hasAppVersionMajor(): boolean;
			public hasPlatform(): boolean;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getStartTimestampMillis(): number;
			public getAudienceEvaluationResultsCount(): number;
			public hasUserDefaultLanguage(): boolean;
			public getConfigVersion(): number;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.MeasurementBundle;
			public getAppVersionMajor(): number;
			public hasAdmobAppId(): boolean;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.MeasurementBundle>;
			public hasResettableDeviceId(): boolean;
			public hasPseudonymousPrivacyInfoRequiresPrivacyReview(): boolean;
			public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
			public getLimitedAdTracking(): boolean;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.MeasurementBundle): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
			public getDsid(): string;
			public hasAppVersionMinor(): boolean;
		}
		export module MeasurementBundle {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.MeasurementBundle,analytics_collection.GmpMeasurement.MeasurementBundle.Builder> implements analytics_collection.GmpMeasurement.MeasurementBundleOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBundle.Builder>;
				public clearFirebaseInstanceId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasGmpAppId(): boolean;
				public addEvents(param0: analytics_collection.GmpMeasurement.Event.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearEvents(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppVersionBytes(): com.google.protobuf.ByteString;
				public getServiceUpload(): boolean;
				public getAppVersionRelease(): number;
				public getUploadingGmpVersion(): number;
				public setHealthMonitorBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAudienceEvaluationResults(param0: number, param1: analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasSsaid(): boolean;
				public setGmpAppId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setTimeZoneOffsetMinutes(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getExternalStreamId(): string;
				public setStartTimestampMillis(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getGmpVersion(): number;
				public addAllUserAttributes(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setPseudonymousPrivacyInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addAudienceEvaluationResults(param0: number, param1: analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getResettableDeviceId(): string;
				public setEvents(param0: number, param1: analytics_collection.GmpMeasurement.Event.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addEvents(param0: number, param1: analytics_collection.GmpMeasurement.Event.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getProtocolVersion(): number;
				public setAudienceEvaluationResults(param0: number, param1: analytics_collection.GmpMeasurement.AudienceLeafFilterResult): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addEvents(param0: analytics_collection.GmpMeasurement.Event): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAppIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppIdNumeric(): number;
				public addAudienceEvaluationResults(param0: number, param1: analytics_collection.GmpMeasurement.AudienceLeafFilterResult): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAppIdNumeric(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setPseudonymousPrivacyInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasPlatform(): boolean;
				public getUserAttributesList(): java.util.List<analytics_collection.GmpMeasurement.UserAttribute>;
				public hasHealthMonitor(): boolean;
				public setGmpVersion(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearExternalStreamId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasDeviceModel(): boolean;
				public getEventsCount(): number;
				public clearPreviousBundleStartTimestampMillis(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setFirebaseInstanceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getOsVersionBytes(): com.google.protobuf.ByteString;
				public setResettableDeviceId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearBundleSequentialIndex(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppVersionRelease(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAdmobAppId(): boolean;
				public setAppInstanceId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppVersionMinor(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
				public hasProtocolVersion(): boolean;
				public setAppVersionMinor(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setPlatform(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addUserAttributes(param0: analytics_collection.GmpMeasurement.UserAttribute.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setEndTimestampMillis(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getDsidBytes(): com.google.protobuf.ByteString;
				public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
				public setOsVersion(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setUserAttributes(param0: number, param1: analytics_collection.GmpMeasurement.UserAttribute.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
				public setHealthMonitor(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getDeviceModelBytes(): com.google.protobuf.ByteString;
				public hasAppIdNumeric(): boolean;
				public addAudienceEvaluationResults(param0: analytics_collection.GmpMeasurement.AudienceLeafFilterResult): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearLimitedAdTracking(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setDeviceModel(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasBundleSequentialIndex(): boolean;
				public hasUploadTimestampMillis(): boolean;
				public clearPlatform(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasFirebaseInstanceId(): boolean;
				public getGaiaInfo(): analytics_collection.GmpMeasurement.GaiaInfo;
				public setAdmobAppIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setConfigVersion(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setServiceUpload(param0: boolean): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getEvents(param0: number): analytics_collection.GmpMeasurement.Event;
				public hasResettableDeviceId(): boolean;
				public getAppInstanceId(): string;
				public setAppVersionMajor(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setVendorDeviceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getHealthMonitor(): string;
				public hasAppVersion(): boolean;
				public clearUserAttributes(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setSsaid(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearStartTimestampMillis(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearUploadTimestampMillis(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasOsVersion(): boolean;
				public getSsaid(): string;
				public getBundleSequentialIndex(): number;
				public getEventsList(): java.util.List<analytics_collection.GmpMeasurement.Event>;
				public addAudienceEvaluationResults(param0: analytics_collection.GmpMeasurement.AudienceLeafFilterResult.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
				public hasAppVersionRelease(): boolean;
				public hasPreviousBundleStartTimestampMillis(): boolean;
				public hasDevCertHash(): boolean;
				public addAllAudienceEvaluationResults(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setBundleAlsoLoggedInGaia(param0: boolean): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAppInstanceId(): boolean;
				public addEvents(param0: number, param1: analytics_collection.GmpMeasurement.Event): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasDsid(): boolean;
				public addUserAttributes(param0: number, param1: analytics_collection.GmpMeasurement.UserAttribute.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppStoreBytes(): com.google.protobuf.ByteString;
				public hasTimeZoneOffsetMinutes(): boolean;
				public hasEndTimestampMillis(): boolean;
				public clearAudienceEvaluationResults(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getEndTimestampMillis(): number;
				public setAdmobAppId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasVendorDeviceId(): boolean;
				public getStartTimestampMillis(): number;
				public clearGaiaInfo(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasStartTimestampMillis(): boolean;
				public getPlatformBytes(): com.google.protobuf.ByteString;
				public hasConfigVersion(): boolean;
				public setProtocolVersion(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasUploadingGmpVersion(): boolean;
				public setEvents(param0: number, param1: analytics_collection.GmpMeasurement.Event): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppStore(): string;
				public clearDevCertHash(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
				public getAppVersion(): string;
				public clearConfigVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getUserAttributesCount(): number;
				public getExternalStreamIdBytes(): com.google.protobuf.ByteString;
				public setAppId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAppVersionBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getDevCertHash(): number;
				public getLimitedAdTracking(): boolean;
				public clearServiceUpload(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAppVersionMinor(): boolean;
				public addUserAttributes(param0: number, param1: analytics_collection.GmpMeasurement.UserAttribute): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addUserAttributes(param0: analytics_collection.GmpMeasurement.UserAttribute): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getUploadTimestampMillis(): number;
				public clearEndTimestampMillis(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setDeviceModelBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAppVersionMajor(): boolean;
				public setAppStore(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public removeEvents(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setExternalStreamIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppVersionMajor(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public removeUserAttributes(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getPreviousBundleEndTimestampMillis(): number;
				public getAdmobAppIdBytes(): com.google.protobuf.ByteString;
				public getGmpAppId(): string;
				public getAppVersionMinor(): number;
				public clearBundleAlsoLoggedInGaia(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setPreviousBundleStartTimestampMillis(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearDeviceModel(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public mergeGaiaInfo(param0: analytics_collection.GmpMeasurement.GaiaInfo): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setResettableDeviceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getVendorDeviceId(): string;
				public clearProtocolVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppIdNumeric(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasGaiaInfo(): boolean;
				public setVendorDeviceId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getPseudonymousPrivacyInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
				public mergePseudonymousPrivacyInfoRequiresPrivacyReview(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAudienceEvaluationResults(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
				public clearAppInstanceId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearDsid(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAppId(): boolean;
				public getGmpAppIdBytes(): com.google.protobuf.ByteString;
				public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setUserDefaultLanguage(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setPlatformBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setUploadingGmpVersion(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAppIdBytes(): com.google.protobuf.ByteString;
				public setDsidBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public addAllEvents(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public removeAudienceEvaluationResults(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setDsid(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setExternalStreamId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getConfigVersion(): number;
				public setUploadTimestampMillis(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasPseudonymousPrivacyInfoRequiresPrivacyReview(): boolean;
				public clearVendorDeviceId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setBundleSequentialIndex(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearTimeZoneOffsetMinutes(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearHealthMonitor(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearGmpAppId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getPreviousBundleStartTimestampMillis(): number;
				public hasPreviousBundleEndTimestampMillis(): boolean;
				public getRetryCounter(): number;
				public hasGmpVersion(): boolean;
				public setPreviousBundleEndTimestampMillis(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAppStore(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearAdmobAppId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAppVersion(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAudienceEvaluationResultsList(): java.util.List<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
				public hasRetryCounter(): boolean;
				public getAudienceEvaluationResultsCount(): number;
				public setGaiaInfo(param0: analytics_collection.GmpMeasurement.GaiaInfo.Builder): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearOsVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearGmpVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setGaiaInfo(param0: analytics_collection.GmpMeasurement.GaiaInfo): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setUserDefaultLanguageBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearRetryCounter(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getUserAttributes(param0: number): analytics_collection.GmpMeasurement.UserAttribute;
				public clearUploadingGmpVersion(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasServiceUpload(): boolean;
				public hasLimitedAdTracking(): boolean;
				public getDsid(): string;
				public setOsVersionBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setLimitedAdTracking(param0: boolean): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getTimeZoneOffsetMinutes(): number;
				public getOsVersion(): string;
				public setAppVersionRelease(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearSsaid(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasAppStore(): boolean;
				public getAppId(): string;
				public setDevCertHash(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getAdmobAppId(): string;
				public getHealthMonitorBytes(): com.google.protobuf.ByteString;
				public hasUserDefaultLanguage(): boolean;
				public hasExternalStreamId(): boolean;
				public getDeviceModel(): string;
				public getAppVersionMajor(): number;
				public clearPseudonymousPrivacyInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getFirebaseInstanceId(): string;
				public setGmpAppIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setRetryCounter(param0: number): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setAppStoreBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getSsaidBytes(): com.google.protobuf.ByteString;
				public setUserAttributes(param0: number, param1: analytics_collection.GmpMeasurement.UserAttribute): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public hasBundleAlsoLoggedInGaia(): boolean;
				public clearPreviousBundleEndTimestampMillis(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearUserDefaultLanguage(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public clearResettableDeviceId(): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setSsaidBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public setFirebaseInstanceId(param0: string): analytics_collection.GmpMeasurement.MeasurementBundle.Builder;
				public getBundleAlsoLoggedInGaia(): boolean;
				public getPlatform(): string;
				public getUserDefaultLanguage(): string;
			}
		}
		export class MeasurementBundleOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.MeasurementBundleOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$MeasurementBundleOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasProtocolVersion(): boolean;
				getProtocolVersion(): number;
				getEventsList(): java.util.List<analytics_collection.GmpMeasurement.Event>;
				getEvents(param0: number): analytics_collection.GmpMeasurement.Event;
				getEventsCount(): number;
				getUserAttributesList(): java.util.List<analytics_collection.GmpMeasurement.UserAttribute>;
				getUserAttributes(param0: number): analytics_collection.GmpMeasurement.UserAttribute;
				getUserAttributesCount(): number;
				hasUploadTimestampMillis(): boolean;
				getUploadTimestampMillis(): number;
				hasStartTimestampMillis(): boolean;
				getStartTimestampMillis(): number;
				hasEndTimestampMillis(): boolean;
				getEndTimestampMillis(): number;
				hasPreviousBundleStartTimestampMillis(): boolean;
				getPreviousBundleStartTimestampMillis(): number;
				hasPreviousBundleEndTimestampMillis(): boolean;
				getPreviousBundleEndTimestampMillis(): number;
				hasPlatform(): boolean;
				getPlatform(): string;
				getPlatformBytes(): com.google.protobuf.ByteString;
				hasOsVersion(): boolean;
				getOsVersion(): string;
				getOsVersionBytes(): com.google.protobuf.ByteString;
				hasDeviceModel(): boolean;
				getDeviceModel(): string;
				getDeviceModelBytes(): com.google.protobuf.ByteString;
				hasUserDefaultLanguage(): boolean;
				getUserDefaultLanguage(): string;
				getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
				hasTimeZoneOffsetMinutes(): boolean;
				getTimeZoneOffsetMinutes(): number;
				hasAppStore(): boolean;
				getAppStore(): string;
				getAppStoreBytes(): com.google.protobuf.ByteString;
				hasAppId(): boolean;
				getAppId(): string;
				getAppIdBytes(): com.google.protobuf.ByteString;
				hasAppIdNumeric(): boolean;
				getAppIdNumeric(): number;
				hasAppVersion(): boolean;
				getAppVersion(): string;
				getAppVersionBytes(): com.google.protobuf.ByteString;
				hasGmpVersion(): boolean;
				getGmpVersion(): number;
				hasUploadingGmpVersion(): boolean;
				getUploadingGmpVersion(): number;
				hasResettableDeviceId(): boolean;
				getResettableDeviceId(): string;
				getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
				hasVendorDeviceId(): boolean;
				getVendorDeviceId(): string;
				getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
				hasLimitedAdTracking(): boolean;
				getLimitedAdTracking(): boolean;
				hasAppInstanceId(): boolean;
				getAppInstanceId(): string;
				getAppInstanceIdBytes(): com.google.protobuf.ByteString;
				hasDevCertHash(): boolean;
				getDevCertHash(): number;
				hasBundleSequentialIndex(): boolean;
				getBundleSequentialIndex(): number;
				hasHealthMonitor(): boolean;
				getHealthMonitor(): string;
				getHealthMonitorBytes(): com.google.protobuf.ByteString;
				hasGmpAppId(): boolean;
				getGmpAppId(): string;
				getGmpAppIdBytes(): com.google.protobuf.ByteString;
				hasServiceUpload(): boolean;
				getServiceUpload(): boolean;
				getAudienceEvaluationResultsList(): java.util.List<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
				getAudienceEvaluationResults(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
				getAudienceEvaluationResultsCount(): number;
				hasFirebaseInstanceId(): boolean;
				getFirebaseInstanceId(): string;
				getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
				hasAppVersionMajor(): boolean;
				getAppVersionMajor(): number;
				hasAppVersionMinor(): boolean;
				getAppVersionMinor(): number;
				hasAppVersionRelease(): boolean;
				getAppVersionRelease(): number;
				hasSsaid(): boolean;
				getSsaid(): string;
				getSsaidBytes(): com.google.protobuf.ByteString;
				hasConfigVersion(): boolean;
				getConfigVersion(): number;
				hasDsid(): boolean;
				getDsid(): string;
				getDsidBytes(): com.google.protobuf.ByteString;
				hasExternalStreamId(): boolean;
				getExternalStreamId(): string;
				getExternalStreamIdBytes(): com.google.protobuf.ByteString;
				hasRetryCounter(): boolean;
				getRetryCounter(): number;
				hasGaiaInfo(): boolean;
				getGaiaInfo(): analytics_collection.GmpMeasurement.GaiaInfo;
				hasAdmobAppId(): boolean;
				getAdmobAppId(): string;
				getAdmobAppIdBytes(): com.google.protobuf.ByteString;
				hasBundleAlsoLoggedInGaia(): boolean;
				getBundleAlsoLoggedInGaia(): boolean;
				hasPseudonymousPrivacyInfoRequiresPrivacyReview(): boolean;
				getPseudonymousPrivacyInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			});
			public constructor();
			public getUploadingGmpVersion(): number;
			public hasHealthMonitor(): boolean;
			public getAppId(): string;
			public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
			public hasProtocolVersion(): boolean;
			public hasVendorDeviceId(): boolean;
			public getGmpVersion(): number;
			public getSsaid(): string;
			public hasSsaid(): boolean;
			public hasBundleAlsoLoggedInGaia(): boolean;
			public getHealthMonitor(): string;
			public hasGmpAppId(): boolean;
			public getAppVersion(): string;
			public hasAppVersionRelease(): boolean;
			public hasLimitedAdTracking(): boolean;
			public getAppIdBytes(): com.google.protobuf.ByteString;
			public getDevCertHash(): number;
			public getAppVersionMinor(): number;
			public getUserDefaultLanguage(): string;
			public getEventsCount(): number;
			public getFirebaseInstanceId(): string;
			public hasTimeZoneOffsetMinutes(): boolean;
			public getGaiaInfo(): analytics_collection.GmpMeasurement.GaiaInfo;
			public hasPreviousBundleEndTimestampMillis(): boolean;
			public getExternalStreamIdBytes(): com.google.protobuf.ByteString;
			public hasEndTimestampMillis(): boolean;
			public getEventsList(): java.util.List<analytics_collection.GmpMeasurement.Event>;
			public hasServiceUpload(): boolean;
			public hasDsid(): boolean;
			public hasGaiaInfo(): boolean;
			public getPlatform(): string;
			public getExternalStreamId(): string;
			public getPseudonymousPrivacyInfoRequiresPrivacyReview(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public getGmpAppIdBytes(): com.google.protobuf.ByteString;
			public getDeviceModelBytes(): com.google.protobuf.ByteString;
			public getPreviousBundleEndTimestampMillis(): number;
			public hasAppInstanceId(): boolean;
			public getAudienceEvaluationResultsList(): java.util.List<analytics_collection.GmpMeasurement.AudienceLeafFilterResult>;
			public getServiceUpload(): boolean;
			public hasExternalStreamId(): boolean;
			public getPreviousBundleStartTimestampMillis(): number;
			public getUploadTimestampMillis(): number;
			public getDeviceModel(): string;
			public getVendorDeviceId(): string;
			public getOsVersion(): string;
			public getBundleSequentialIndex(): number;
			public getRetryCounter(): number;
			public getUserAttributesList(): java.util.List<analytics_collection.GmpMeasurement.UserAttribute>;
			public hasUploadTimestampMillis(): boolean;
			public hasAppVersion(): boolean;
			public hasBundleSequentialIndex(): boolean;
			public getOsVersionBytes(): com.google.protobuf.ByteString;
			public getAppVersionRelease(): number;
			public getBundleAlsoLoggedInGaia(): boolean;
			public hasFirebaseInstanceId(): boolean;
			public getAppIdNumeric(): number;
			public getHealthMonitorBytes(): com.google.protobuf.ByteString;
			public getUserAttributesCount(): number;
			public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
			public hasOsVersion(): boolean;
			public hasStartTimestampMillis(): boolean;
			public getAdmobAppIdBytes(): com.google.protobuf.ByteString;
			public hasGmpVersion(): boolean;
			public hasConfigVersion(): boolean;
			public getAppVersionBytes(): com.google.protobuf.ByteString;
			public getAdmobAppId(): string;
			public getAppStore(): string;
			public getAppInstanceId(): string;
			public getAudienceEvaluationResults(param0: number): analytics_collection.GmpMeasurement.AudienceLeafFilterResult;
			public hasUploadingGmpVersion(): boolean;
			public getResettableDeviceId(): string;
			public hasPreviousBundleStartTimestampMillis(): boolean;
			public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
			public hasAppStore(): boolean;
			public getEvents(param0: number): analytics_collection.GmpMeasurement.Event;
			public getSsaidBytes(): com.google.protobuf.ByteString;
			public getTimeZoneOffsetMinutes(): number;
			public getEndTimestampMillis(): number;
			public hasRetryCounter(): boolean;
			public getGmpAppId(): string;
			public hasDevCertHash(): boolean;
			public getDsidBytes(): com.google.protobuf.ByteString;
			public getPlatformBytes(): com.google.protobuf.ByteString;
			public hasAppIdNumeric(): boolean;
			public getAppStoreBytes(): com.google.protobuf.ByteString;
			public hasAppId(): boolean;
			public getProtocolVersion(): number;
			public hasDeviceModel(): boolean;
			public getUserAttributes(param0: number): analytics_collection.GmpMeasurement.UserAttribute;
			public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
			public hasAppVersionMajor(): boolean;
			public hasPlatform(): boolean;
			public getStartTimestampMillis(): number;
			public getAudienceEvaluationResultsCount(): number;
			public hasUserDefaultLanguage(): boolean;
			public getConfigVersion(): number;
			public getAppVersionMajor(): number;
			public hasAdmobAppId(): boolean;
			public hasResettableDeviceId(): boolean;
			public hasPseudonymousPrivacyInfoRequiresPrivacyReview(): boolean;
			public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
			public getLimitedAdTracking(): boolean;
			public getDsid(): string;
			public hasAppVersionMinor(): boolean;
		}
		export class PseudonymousPrivacyInfo extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo,analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.PseudonymousPrivacyInfoOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo>;
			public static PRIVACY_MODIFIERS_FIELD_NUMBER: number;
			public static LOW_LEVEL_INFO_FIELD_NUMBER: number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static newBuilder(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo>;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public hasPrivacyModifiers(): boolean;
			public hasLowLevelInfo(): boolean;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public getLowLevelInfo(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
			public getPrivacyModifiers(): number;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo;
			public getSerializedSize(): number;
		}
		export module PseudonymousPrivacyInfo {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo,analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.PseudonymousPrivacyInfoOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder>;
				public getPrivacyModifiers(): number;
				public setLowLevelInfo(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
				public clearPrivacyModifiers(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
				public getLowLevelInfo(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public hasLowLevelInfo(): boolean;
				public setPrivacyModifiers(param0: number): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
				public hasPrivacyModifiers(): boolean;
				public setLowLevelInfo(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
				public mergeLowLevelInfo(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
				public clearLowLevelInfo(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.Builder;
			}
			export class LoggedLowLevelPrivacyInfo extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo,analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfoOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo>;
				public static USER_CONTROLS_FIELD_NUMBER: number;
				public hasUserControls(): boolean;
				public static newBuilder(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder;
				public static newBuilder(param0: analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder;
				public static getDefaultInstance(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo>;
				public getSerializedSize(): number;
				public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public getUserControls(): number;
				public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
				public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			}
			export module LoggedLowLevelPrivacyInfo {
				export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo,analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder> implements analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfoOrBuilder  {
					public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder>;
					public hasUserControls(): boolean;
					public clearUserControls(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder;
					public setUserControls(param0: number): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo.Builder;
					public getUserControls(): number;
				}
			}
			export class LoggedLowLevelPrivacyInfoOrBuilder {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfoOrBuilder>;
				/**
				 * Constructs a new instance of the analytics_collection.GmpMeasurement$PseudonymousPrivacyInfo$LoggedLowLevelPrivacyInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					hasUserControls(): boolean;
					getUserControls(): number;
				});
				public constructor();
				public hasUserControls(): boolean;
				public getUserControls(): number;
			}
		}
		export class PseudonymousPrivacyInfoOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.PseudonymousPrivacyInfoOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$PseudonymousPrivacyInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasPrivacyModifiers(): boolean;
				getPrivacyModifiers(): number;
				hasLowLevelInfo(): boolean;
				getLowLevelInfo(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
			});
			public constructor();
			public hasPrivacyModifiers(): boolean;
			public hasLowLevelInfo(): boolean;
			public getLowLevelInfo(): analytics_collection.GmpMeasurement.PseudonymousPrivacyInfo.LoggedLowLevelPrivacyInfo;
			public getPrivacyModifiers(): number;
		}
		export class ResultData extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.ResultData,analytics_collection.GmpMeasurement.ResultData.Builder> implements analytics_collection.GmpMeasurement.ResultDataOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.ResultData>;
			public static STATUS_FIELD_NUMBER: number;
			public static RESULTS_FIELD_NUMBER: number;
			public static DYNAMIC_FILTER_TIMESTAMPS_FIELD_NUMBER: number;
			public static SEQUENCE_FILTER_TIMESTAMPS_FIELD_NUMBER: number;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.ResultData): analytics_collection.GmpMeasurement.ResultData.Builder;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.ResultData;
			public getResultsCount(): number;
			public getSequenceFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
			public getResultsList(): java.util.List<java.lang.Long>;
			public getSequenceFilterTimestampsCount(): number;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.ResultData;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.ResultData;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.ResultData;
			public getDynamicFilterTimestampsOrBuilderList(): java.util.List<any>;
			public getDynamicFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
			public getDynamicFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public getDynamicFilterTimestampsOrBuilder(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestampOrBuilder;
			public getSequenceFilterTimestampsOrBuilderList(): java.util.List<any>;
			public getStatusList(): java.util.List<java.lang.Long>;
			public getStatus(param0: number): number;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.ResultData;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.ResultData>;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.ResultData;
			public getSequenceFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public getSerializedSize(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.ResultData;
			public getStatusCount(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.ResultData;
			public getResults(param0: number): number;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.ResultData;
			public getDynamicFilterTimestampsCount(): number;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static newBuilder(): analytics_collection.GmpMeasurement.ResultData.Builder;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.ResultData;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.ResultData;
			public getSequenceFilterTimestampsOrBuilder(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestampOrBuilder;
		}
		export module ResultData {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.ResultData,analytics_collection.GmpMeasurement.ResultData.Builder> implements analytics_collection.GmpMeasurement.ResultDataOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.ResultData.Builder>;
				public getStatusCount(): number;
				public addSequenceFilterTimestamps(param0: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addSequenceFilterTimestamps(param0: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public setDynamicFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public setResults(param0: number, param1: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public removeDynamicFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addAllSequenceFilterTimestamps(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addAllDynamicFilterTimestamps(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getStatus(param0: number): number;
				public addAllStatus(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addDynamicFilterTimestamps(param0: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addResults(param0: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public clearSequenceFilterTimestamps(): analytics_collection.GmpMeasurement.ResultData.Builder;
				public setDynamicFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addAllResults(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.ResultData.Builder;
				public setSequenceFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getDynamicFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
				public getDynamicFilterTimestampsCount(): number;
				public addSequenceFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getSequenceFilterTimestampsCount(): number;
				public addDynamicFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getStatusList(): java.util.List<java.lang.Long>;
				public getDynamicFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
				public getResultsList(): java.util.List<java.lang.Long>;
				public addDynamicFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addStatus(param0: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public setSequenceFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp): analytics_collection.GmpMeasurement.ResultData.Builder;
				public removeSequenceFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public clearStatus(): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getSequenceFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
				public addDynamicFilterTimestamps(param0: analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public clearResults(): analytics_collection.GmpMeasurement.ResultData.Builder;
				public addSequenceFilterTimestamps(param0: number, param1: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getResults(param0: number): number;
				public setStatus(param0: number, param1: number): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getResultsCount(): number;
				public clearDynamicFilterTimestamps(): analytics_collection.GmpMeasurement.ResultData.Builder;
				public getSequenceFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			}
		}
		export class ResultDataOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.ResultDataOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$ResultDataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getStatusList(): java.util.List<java.lang.Long>;
				getStatusCount(): number;
				getStatus(param0: number): number;
				getResultsList(): java.util.List<java.lang.Long>;
				getResultsCount(): number;
				getResults(param0: number): number;
				getDynamicFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
				getDynamicFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
				getDynamicFilterTimestampsCount(): number;
				getSequenceFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
				getSequenceFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
				getSequenceFilterTimestampsCount(): number;
			});
			public constructor();
			public getDynamicFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp>;
			public getResultsCount(): number;
			public getSequenceFilterTimestampsList(): java.util.List<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
			public getStatusCount(): number;
			public getResultsList(): java.util.List<java.lang.Long>;
			public getDynamicFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.DynamicFilterResultTimestamp;
			public getSequenceFilterTimestampsCount(): number;
			public getStatusList(): java.util.List<java.lang.Long>;
			public getResults(param0: number): number;
			public getStatus(param0: number): number;
			public getDynamicFilterTimestampsCount(): number;
			public getSequenceFilterTimestamps(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
		}
		export class SequenceFilterResultTimestamp extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp,analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder> implements analytics_collection.GmpMeasurement.SequenceFilterResultTimestampOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
			public static INDEX_FIELD_NUMBER: number;
			public static EVAL_TIMESTAMPS_FIELD_NUMBER: number;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public getIndex(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public getEvalTimestampsList(): java.util.List<java.lang.Long>;
			public getEvalTimestampsCount(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp>;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public hasIndex(): boolean;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp;
			public static newBuilder(): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
			public getEvalTimestamps(param0: number): number;
			public getSerializedSize(): number;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
		}
		export module SequenceFilterResultTimestamp {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp,analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder> implements analytics_collection.GmpMeasurement.SequenceFilterResultTimestampOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder>;
				public setIndex(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
				public clearEvalTimestamps(): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
				public addAllEvalTimestamps(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
				public getEvalTimestamps(param0: number): number;
				public getIndex(): number;
				public hasIndex(): boolean;
				public getEvalTimestampsList(): java.util.List<java.lang.Long>;
				public getEvalTimestampsCount(): number;
				public setEvalTimestamps(param0: number, param1: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
				public addEvalTimestamps(param0: number): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
				public clearIndex(): analytics_collection.GmpMeasurement.SequenceFilterResultTimestamp.Builder;
			}
		}
		export class SequenceFilterResultTimestampOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.SequenceFilterResultTimestampOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$SequenceFilterResultTimestampOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasIndex(): boolean;
				getIndex(): number;
				getEvalTimestampsList(): java.util.List<java.lang.Long>;
				getEvalTimestampsCount(): number;
				getEvalTimestamps(param0: number): number;
			});
			public constructor();
			public getIndex(): number;
			public getEvalTimestampsList(): java.util.List<java.lang.Long>;
			public getEvalTimestampsCount(): number;
			public hasIndex(): boolean;
			public getEvalTimestamps(param0: number): number;
		}
		export class UserAttribute extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurement.UserAttribute,analytics_collection.GmpMeasurement.UserAttribute.Builder> implements analytics_collection.GmpMeasurement.UserAttributeOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.UserAttribute>;
			public static SET_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static NAME_FIELD_NUMBER: number;
			public static STRING_VALUE_FIELD_NUMBER: number;
			public static INT_VALUE_FIELD_NUMBER: number;
			public static FLOAT_VALUE_FIELD_NUMBER: number;
			public static DOUBLE_VALUE_FIELD_NUMBER: number;
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public static newBuilder(param0: analytics_collection.GmpMeasurement.UserAttribute): analytics_collection.GmpMeasurement.UserAttribute.Builder;
			public static getDefaultInstance(): analytics_collection.GmpMeasurement.UserAttribute;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.UserAttribute;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.UserAttribute;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.UserAttribute;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurement.UserAttribute;
			public getFloatValue(): number;
			public hasSetTimestampMillis(): boolean;
			public static newBuilder(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
			public hasDoubleValue(): boolean;
			public getSerializedSize(): number;
			public hasStringValue(): boolean;
			public hasName(): boolean;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.UserAttribute;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.UserAttribute;
			public getSetTimestampMillis(): number;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.UserAttribute;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurement.UserAttribute;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public getName(): string;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurement.UserAttribute;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurement.UserAttribute>;
			public hasFloatValue(): boolean;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurement.UserAttribute;
			public getStringValue(): string;
		}
		export module UserAttribute {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurement.UserAttribute,analytics_collection.GmpMeasurement.UserAttribute.Builder> implements analytics_collection.GmpMeasurement.UserAttributeOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurement.UserAttribute.Builder>;
				public setFloatValue(param0: number): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public getNameBytes(): com.google.protobuf.ByteString;
				public hasStringValue(): boolean;
				public getIntValue(): number;
				public setStringValueBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public setIntValue(param0: number): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public clearSetTimestampMillis(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public hasIntValue(): boolean;
				public setDoubleValue(param0: number): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public getStringValue(): string;
				public clearFloatValue(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public getStringValueBytes(): com.google.protobuf.ByteString;
				public hasFloatValue(): boolean;
				public clearName(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public setSetTimestampMillis(param0: number): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public hasDoubleValue(): boolean;
				public getSetTimestampMillis(): number;
				public clearStringValue(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public getDoubleValue(): number;
				public clearIntValue(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public getName(): string;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public hasName(): boolean;
				public getFloatValue(): number;
				public setName(param0: string): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public setStringValue(param0: string): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public clearDoubleValue(): analytics_collection.GmpMeasurement.UserAttribute.Builder;
				public hasSetTimestampMillis(): boolean;
			}
		}
		export class UserAttributeOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurement.UserAttributeOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurement$UserAttributeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasSetTimestampMillis(): boolean;
				getSetTimestampMillis(): number;
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasStringValue(): boolean;
				getStringValue(): string;
				getStringValueBytes(): com.google.protobuf.ByteString;
				hasIntValue(): boolean;
				getIntValue(): number;
				hasFloatValue(): boolean;
				getFloatValue(): number;
				hasDoubleValue(): boolean;
				getDoubleValue(): number;
			});
			public constructor();
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public hasStringValue(): boolean;
			public hasName(): boolean;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public getSetTimestampMillis(): number;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public getName(): string;
			public getFloatValue(): number;
			public hasSetTimestampMillis(): boolean;
			public hasFloatValue(): boolean;
			public hasDoubleValue(): boolean;
			public getStringValue(): string;
		}
	}
}

declare module analytics_collection {
	export class GmpMeasurementPublic {
		public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic>;
		public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
	}
	export module GmpMeasurementPublic {
		export class FirebaseAnalyticsApiRequest extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequestOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
			public static APP_ID_FIELD_NUMBER: number;
			public static PACKAGE_NAME_FIELD_NUMBER: number;
			public static APP_VERSION_MAJOR_FIELD_NUMBER: number;
			public static APP_VERSION_MINOR_FIELD_NUMBER: number;
			public static APP_VERSION_RELEASE_FIELD_NUMBER: number;
			public static APP_INSTANCE_ID_FIELD_NUMBER: number;
			public static RESETTABLE_DEVICE_ID_FIELD_NUMBER: number;
			public static VENDOR_DEVICE_ID_FIELD_NUMBER: number;
			public static LIMITED_AD_TRACKING_FIELD_NUMBER: number;
			public static PLATFORM_FIELD_NUMBER: number;
			public static OS_VERSION_FIELD_NUMBER: number;
			public static DEVICE_MODEL_FIELD_NUMBER: number;
			public static USER_DEFAULT_LANGUAGE_FIELD_NUMBER: number;
			public static UPLOAD_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public static APP_STORE_FIELD_NUMBER: number;
			public static EVENT_FIELD_NUMBER: number;
			public static USER_PROPERTY_FIELD_NUMBER: number;
			public static API_KEY_FIELD_NUMBER: number;
			public static IP_ADDRESS_FIELD_NUMBER: number;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest>;
			public getAppId(): string;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
			public getPackageName(): string;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getOsVersionBytes(): com.google.protobuf.ByteString;
			public getAppVersionRelease(): number;
			public hasVendorDeviceId(): boolean;
			public getEventCount(): number;
			public getIpAddressBytes(): com.google.protobuf.ByteString;
			public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
			public hasOsVersion(): boolean;
			public getUserPropertyCount(): number;
			public hasAppVersionRelease(): boolean;
			public getSerializedSize(): number;
			public hasLimitedAdTracking(): boolean;
			public getAppIdBytes(): com.google.protobuf.ByteString;
			public getAppVersionMinor(): number;
			public getUserDefaultLanguage(): string;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getAppStore(): string;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public getAppInstanceId(): string;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public static newBuilder(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getResettableDeviceId(): string;
			public hasApiKey(): boolean;
			public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
			public getEventList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
			public static getDefaultInstance(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public hasAppStore(): boolean;
			public getEvent(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public hasPackageName(): boolean;
			public getPlatform(): string;
			public getUserPropertyList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getIpAddress(): string;
			public getApiKey(): string;
			public getUserPropertyOrBuilderList(): java.util.List<any>;
			public getDeviceModelBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getUserProperty(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public hasAppInstanceId(): boolean;
			public getPlatformBytes(): com.google.protobuf.ByteString;
			public hasAppId(): boolean;
			public getAppStoreBytes(): com.google.protobuf.ByteString;
			public getPackageNameBytes(): com.google.protobuf.ByteString;
			public static newBuilder(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
			public hasDeviceModel(): boolean;
			public hasAppVersionMajor(): boolean;
			public getEventOrBuilderList(): java.util.List<any>;
			public getUserPropertyOrBuilder(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttributeOrBuilder;
			public hasPlatform(): boolean;
			public getUploadTimestampMillis(): number;
			public getDeviceModel(): string;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest;
			public getVendorDeviceId(): string;
			public hasUserDefaultLanguage(): boolean;
			public getAppVersionMajor(): number;
			public getOsVersion(): string;
			public hasResettableDeviceId(): boolean;
			public getApiKeyBytes(): com.google.protobuf.ByteString;
			public hasIpAddress(): boolean;
			public getEventOrBuilder(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventOrBuilder;
			public getLimitedAdTracking(): boolean;
			public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
			public hasAppVersionMinor(): boolean;
			public hasUploadTimestampMillis(): boolean;
		}
		export module FirebaseAnalyticsApiRequest {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequestOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder>;
				public getApiKeyBytes(): com.google.protobuf.ByteString;
				public getLimitedAdTracking(): boolean;
				public hasAppVersionMinor(): boolean;
				public getUploadTimestampMillis(): number;
				public hasApiKey(): boolean;
				public getAppVersionRelease(): number;
				public setApiKey(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasAppVersionMajor(): boolean;
				public clearAppInstanceId(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearUserDefaultLanguage(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasPackageName(): boolean;
				public getPackageNameBytes(): com.google.protobuf.ByteString;
				public addEvent(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getPackageName(): string;
				public setResettableDeviceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public addEvent(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setAppStore(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getResettableDeviceId(): string;
				public getAppVersionMinor(): number;
				public setEvent(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getEventList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
				public addEvent(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setApiKeyBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearDeviceModel(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearUploadTimestampMillis(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearLimitedAdTracking(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getUserProperty(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
				public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setPackageName(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getVendorDeviceId(): string;
				public setLimitedAdTracking(param0: boolean): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasPlatform(): boolean;
				public setUserProperty(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public addAllEvent(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getIpAddress(): string;
				public clearAppVersionRelease(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasDeviceModel(): boolean;
				public setPackageNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasAppId(): boolean;
				public addEvent(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getApiKey(): string;
				public setAppId(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public addUserProperty(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setUserProperty(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public removeUserProperty(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setIpAddressBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getAppIdBytes(): com.google.protobuf.ByteString;
				public getOsVersionBytes(): com.google.protobuf.ByteString;
				public setAppVersionRelease(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setVendorDeviceId(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setUserDefaultLanguageBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearAppId(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
				public addUserProperty(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setOsVersion(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public addUserProperty(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
				public getDeviceModelBytes(): com.google.protobuf.ByteString;
				public clearResettableDeviceId(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setDeviceModel(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearAppVersionMinor(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearEvent(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setPlatformBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearAppStore(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setAppIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasUploadTimestampMillis(): boolean;
				public addUserProperty(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getEvent(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
				public removeEvent(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasResettableDeviceId(): boolean;
				public getAppInstanceId(): string;
				public setAppStoreBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasLimitedAdTracking(): boolean;
				public getUserPropertyList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
				public getOsVersion(): string;
				public setEvent(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasOsVersion(): boolean;
				public setAppVersionMajor(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getIpAddressBytes(): com.google.protobuf.ByteString;
				public hasAppVersionRelease(): boolean;
				public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
				public getAppId(): string;
				public hasAppStore(): boolean;
				public hasAppInstanceId(): boolean;
				public clearPackageName(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasUserDefaultLanguage(): boolean;
				public getDeviceModel(): string;
				public getAppStoreBytes(): com.google.protobuf.ByteString;
				public getAppVersionMajor(): number;
				public clearOsVersion(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getEventCount(): number;
				public setOsVersionBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setIpAddress(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearUserProperty(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setAppInstanceId(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearApiKey(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasVendorDeviceId(): boolean;
				public setPlatform(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setResettableDeviceId(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setUploadTimestampMillis(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearAppVersionMajor(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getPlatformBytes(): com.google.protobuf.ByteString;
				public setUserDefaultLanguage(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setDeviceModelBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public setVendorDeviceIdBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public addAllUserProperty(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public hasIpAddress(): boolean;
				public clearIpAddress(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getAppStore(): string;
				public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
				public getPlatform(): string;
				public clearPlatform(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public getUserPropertyCount(): number;
				public getUserDefaultLanguage(): string;
				public setAppVersionMinor(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
				public clearVendorDeviceId(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequest.Builder;
			}
		}
		export class FirebaseAnalyticsApiRequestOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsApiRequestOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurementPublic$FirebaseAnalyticsApiRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasAppId(): boolean;
				getAppId(): string;
				getAppIdBytes(): com.google.protobuf.ByteString;
				hasPackageName(): boolean;
				getPackageName(): string;
				getPackageNameBytes(): com.google.protobuf.ByteString;
				hasAppVersionMajor(): boolean;
				getAppVersionMajor(): number;
				hasAppVersionMinor(): boolean;
				getAppVersionMinor(): number;
				hasAppVersionRelease(): boolean;
				getAppVersionRelease(): number;
				hasAppInstanceId(): boolean;
				getAppInstanceId(): string;
				getAppInstanceIdBytes(): com.google.protobuf.ByteString;
				hasResettableDeviceId(): boolean;
				getResettableDeviceId(): string;
				getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
				hasVendorDeviceId(): boolean;
				getVendorDeviceId(): string;
				getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
				hasLimitedAdTracking(): boolean;
				getLimitedAdTracking(): boolean;
				hasPlatform(): boolean;
				getPlatform(): string;
				getPlatformBytes(): com.google.protobuf.ByteString;
				hasOsVersion(): boolean;
				getOsVersion(): string;
				getOsVersionBytes(): com.google.protobuf.ByteString;
				hasDeviceModel(): boolean;
				getDeviceModel(): string;
				getDeviceModelBytes(): com.google.protobuf.ByteString;
				hasUserDefaultLanguage(): boolean;
				getUserDefaultLanguage(): string;
				getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
				hasUploadTimestampMillis(): boolean;
				getUploadTimestampMillis(): number;
				hasAppStore(): boolean;
				getAppStore(): string;
				getAppStoreBytes(): com.google.protobuf.ByteString;
				getEventList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
				getEvent(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
				getEventCount(): number;
				getUserPropertyList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
				getUserProperty(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
				getUserPropertyCount(): number;
				hasApiKey(): boolean;
				getApiKey(): string;
				getApiKeyBytes(): com.google.protobuf.ByteString;
				hasIpAddress(): boolean;
				getIpAddress(): string;
				getIpAddressBytes(): com.google.protobuf.ByteString;
			});
			public constructor();
			public getAppId(): string;
			public getVendorDeviceIdBytes(): com.google.protobuf.ByteString;
			public getPackageName(): string;
			public getOsVersionBytes(): com.google.protobuf.ByteString;
			public getAppVersionRelease(): number;
			public hasVendorDeviceId(): boolean;
			public getEventCount(): number;
			public getIpAddressBytes(): com.google.protobuf.ByteString;
			public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
			public hasOsVersion(): boolean;
			public getUserPropertyCount(): number;
			public hasAppVersionRelease(): boolean;
			public hasLimitedAdTracking(): boolean;
			public getAppIdBytes(): com.google.protobuf.ByteString;
			public getAppVersionMinor(): number;
			public getUserDefaultLanguage(): string;
			public getAppStore(): string;
			public getAppInstanceId(): string;
			public getResettableDeviceId(): string;
			public hasApiKey(): boolean;
			public getResettableDeviceIdBytes(): com.google.protobuf.ByteString;
			public getEventList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
			public hasAppStore(): boolean;
			public getEvent(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public hasPackageName(): boolean;
			public getPlatform(): string;
			public getUserPropertyList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
			public getIpAddress(): string;
			public getApiKey(): string;
			public getDeviceModelBytes(): com.google.protobuf.ByteString;
			public getUserProperty(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public hasAppInstanceId(): boolean;
			public getPlatformBytes(): com.google.protobuf.ByteString;
			public hasAppId(): boolean;
			public getAppStoreBytes(): com.google.protobuf.ByteString;
			public getPackageNameBytes(): com.google.protobuf.ByteString;
			public hasDeviceModel(): boolean;
			public hasAppVersionMajor(): boolean;
			public hasPlatform(): boolean;
			public getUploadTimestampMillis(): number;
			public getDeviceModel(): string;
			public getVendorDeviceId(): string;
			public hasUserDefaultLanguage(): boolean;
			public getAppVersionMajor(): number;
			public getOsVersion(): string;
			public hasResettableDeviceId(): boolean;
			public getApiKeyBytes(): com.google.protobuf.ByteString;
			public hasIpAddress(): boolean;
			public getLimitedAdTracking(): boolean;
			public getUserDefaultLanguageBytes(): com.google.protobuf.ByteString;
			public hasAppVersionMinor(): boolean;
			public hasUploadTimestampMillis(): boolean;
		}
		export class FirebaseAnalyticsEvent extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
			public static PARAMS_FIELD_NUMBER: number;
			public static NAME_FIELD_NUMBER: number;
			public static TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public getParams(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public getNameBytes(): com.google.protobuf.ByteString;
			public static getDefaultInstance(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static newBuilder(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
			public static newBuilder(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public getTimestampMillis(): number;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public hasTimestampMillis(): boolean;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent>;
			public getParamsOrBuilderList(): java.util.List<any>;
			public getSerializedSize(): number;
			public hasName(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public getParamsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public getName(): string;
			public getParamsCount(): number;
			public getParamsOrBuilder(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParamOrBuilder;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent;
		}
		export module FirebaseAnalyticsEvent {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder>;
				public addParams(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public getNameBytes(): com.google.protobuf.ByteString;
				public addParams(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public hasTimestampMillis(): boolean;
				public addParams(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public getParamsCount(): number;
				public getName(): string;
				public getParamsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
				public hasName(): boolean;
				public addParams(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public removeParams(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public addAllParams(param0: java.lang.Iterable<any>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public getParams(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public setParams(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public setParams(param0: number, param1: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public clearParams(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public getTimestampMillis(): number;
				public setName(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public setTimestampMillis(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public clearName(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
				public clearTimestampMillis(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEvent.Builder;
			}
		}
		export class FirebaseAnalyticsEventOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurementPublic$FirebaseAnalyticsEventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getParamsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
				getParams(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
				getParamsCount(): number;
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasTimestampMillis(): boolean;
				getTimestampMillis(): number;
			});
			public constructor();
			public getParams(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public getNameBytes(): com.google.protobuf.ByteString;
			public getTimestampMillis(): number;
			public hasName(): boolean;
			public getName(): string;
			public getParamsCount(): number;
			public hasTimestampMillis(): boolean;
			public getParamsList(): java.util.List<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
		}
		export class FirebaseAnalyticsEventParam extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParamOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
			public static NAME_FIELD_NUMBER: number;
			public static STRING_VALUE_FIELD_NUMBER: number;
			public static INT_VALUE_FIELD_NUMBER: number;
			public static DOUBLE_VALUE_FIELD_NUMBER: number;
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static getDefaultInstance(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static newBuilder(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
			public hasDoubleValue(): boolean;
			public getSerializedSize(): number;
			public getParamValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
			public hasStringValue(): boolean;
			public hasName(): boolean;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static newBuilder(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam>;
			public getName(): string;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam;
			public getStringValue(): string;
		}
		export module FirebaseAnalyticsEventParam {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParamOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder>;
				public getNameBytes(): com.google.protobuf.ByteString;
				public setName(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public hasStringValue(): boolean;
				public hasDoubleValue(): boolean;
				public getIntValue(): number;
				public setStringValue(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public setIntValue(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public clearStringValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public clearIntValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public getDoubleValue(): number;
				public hasIntValue(): boolean;
				public getName(): string;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public hasName(): boolean;
				public clearDoubleValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public clearName(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public getStringValue(): string;
				public getStringValueBytes(): com.google.protobuf.ByteString;
				public getParamValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public setStringValueBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public setDoubleValue(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
				public clearParamValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.Builder;
			}
			export class ParamValueCase extends com.google.protobuf.Internal.EnumLite {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase>;
				public static STRING_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static INT_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static DOUBLE_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static PARAMVALUE_NOT_SET: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static forNumber(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static valueOf(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static valueOf(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
				public static values(): native.Array<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase>;
				public getNumber(): number;
			}
		}
		export class FirebaseAnalyticsEventParamOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParamOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurementPublic$FirebaseAnalyticsEventParamOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasStringValue(): boolean;
				getStringValue(): string;
				getStringValueBytes(): com.google.protobuf.ByteString;
				hasIntValue(): boolean;
				getIntValue(): number;
				hasDoubleValue(): boolean;
				getDoubleValue(): number;
				getParamValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
			});
			public constructor();
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public hasStringValue(): boolean;
			public getParamValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsEventParam.ParamValueCase;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public hasName(): boolean;
			public getName(): string;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public hasDoubleValue(): boolean;
			public getStringValue(): string;
		}
		export class FirebaseAnalyticsUserAttribute extends com.google.protobuf.GeneratedMessageLite<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttributeOrBuilder  {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
			public static NAME_FIELD_NUMBER: number;
			public static STRING_VALUE_FIELD_NUMBER: number;
			public static INT_VALUE_FIELD_NUMBER: number;
			public static DOUBLE_VALUE_FIELD_NUMBER: number;
			public static TIMESTAMP_MILLIS_FIELD_NUMBER: number;
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public static parseFrom(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public getTimestampMillis(): number;
			public hasTimestampMillis(): boolean;
			public static getDefaultInstance(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public static parser(): com.google.protobuf.Parser<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute>;
			public hasDoubleValue(): boolean;
			public getSerializedSize(): number;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public hasStringValue(): boolean;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public hasName(): boolean;
			public static newBuilder(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
			public static newBuilder(param0: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static parseFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public getName(): string;
			public static parseDelimitedFrom(param0: java.io.InputStream): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public getAttributeValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
			public static parseFrom(param0: native.Array<number>): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute;
			public getStringValue(): string;
		}
		export module FirebaseAnalyticsUserAttribute {
			export class AttributeValueCase extends com.google.protobuf.Internal.EnumLite {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase>;
				public static STRING_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static INT_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static DOUBLE_VALUE: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static ATTRIBUTEVALUE_NOT_SET: analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static values(): native.Array<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase>;
				public static forNumber(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static valueOf(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public static valueOf(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public getNumber(): number;
			}
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute,analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder> implements analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttributeOrBuilder  {
				public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder>;
				public getNameBytes(): com.google.protobuf.ByteString;
				public hasStringValue(): boolean;
				public getIntValue(): number;
				public hasIntValue(): boolean;
				public clearStringValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public setDoubleValue(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public clearAttributeValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public setIntValue(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public getStringValue(): string;
				public setNameBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public getStringValueBytes(): com.google.protobuf.ByteString;
				public setName(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public hasDoubleValue(): boolean;
				public clearTimestampMillis(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public getDoubleValue(): number;
				public hasTimestampMillis(): boolean;
				public getName(): string;
				public setStringValue(param0: string): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public hasName(): boolean;
				public setStringValueBytes(param0: com.google.protobuf.ByteString): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public setTimestampMillis(param0: number): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public clearDoubleValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public getAttributeValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
				public getTimestampMillis(): number;
				public clearIntValue(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
				public clearName(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.Builder;
			}
		}
		export class FirebaseAnalyticsUserAttributeOrBuilder {
			public static class: java.lang.Class<analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttributeOrBuilder>;
			/**
			 * Constructs a new instance of the analytics_collection.GmpMeasurementPublic$FirebaseAnalyticsUserAttributeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				hasName(): boolean;
				getName(): string;
				getNameBytes(): com.google.protobuf.ByteString;
				hasStringValue(): boolean;
				getStringValue(): string;
				getStringValueBytes(): com.google.protobuf.ByteString;
				hasIntValue(): boolean;
				getIntValue(): number;
				hasDoubleValue(): boolean;
				getDoubleValue(): number;
				hasTimestampMillis(): boolean;
				getTimestampMillis(): number;
				getAttributeValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
			});
			public constructor();
			public getNameBytes(): com.google.protobuf.ByteString;
			public getDoubleValue(): number;
			public hasStringValue(): boolean;
			public hasName(): boolean;
			public getStringValueBytes(): com.google.protobuf.ByteString;
			public getTimestampMillis(): number;
			public hasIntValue(): boolean;
			public getIntValue(): number;
			public getName(): string;
			public hasTimestampMillis(): boolean;
			public getAttributeValueCase(): analytics_collection.GmpMeasurementPublic.FirebaseAnalyticsUserAttribute.AttributeValueCase;
			public hasDoubleValue(): boolean;
			public getStringValue(): string;
		}
	}
}

declare module com {
	export module google {
		export module developers {
			export module mobile {
				export module targeting {
					export module proto {
						export class ClientSignalsProto {
							public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module ClientSignalsProto {
							export class AppInstanceClaim extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim,com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_TOKEN_FIELD_NUMBER: number;
								public static GMP_APP_ID_FIELD_NUMBER: number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getAppInstanceId(): string;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public getAppInstanceToken(): string;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public getSerializedSize(): number;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getGmpAppId(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
							}
							export module AppInstanceClaim {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim,com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder>;
									public setAppInstanceId(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceTokenBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public clearGmpAppId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppId(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceToken(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public clearAppInstanceToken(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									public getAppInstanceToken(): string;
									public getAppInstanceId(): string;
									public getGmpAppId(): string;
								}
							}
							export class AppInstanceClaimOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.ClientSignalsProto$AppInstanceClaimOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAppInstanceId(): string;
									getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceToken(): string;
									getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
									getGmpAppId(): string;
									getGmpAppIdBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppInstanceToken(): string;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceId(): string;
								public getGmpAppId(): string;
							}
							export class ClientSignals extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals,com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public static APP_VERSION_FIELD_NUMBER: number;
								public static PLATFORM_VERSION_FIELD_NUMBER: number;
								public static LANGUAGE_CODE_FIELD_NUMBER: number;
								public static TIME_ZONE_FIELD_NUMBER: number;
								public getAppVersion(): string;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getTimeZone(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getLanguageCodeBytes(): com.google.protobuf.ByteString;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getLanguageCode(): string;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public getSerializedSize(): number;
								public getPlatformVersionBytes(): com.google.protobuf.ByteString;
								public getPlatformVersion(): string;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
							}
							export module ClientSignals {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals,com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder>;
									public clearPlatformVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersionBytes(): com.google.protobuf.ByteString;
									public setLanguageCodeBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getTimeZone(): string;
									public setPlatformVersionBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setLanguageCode(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setAppVersionBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getLanguageCode(): string;
									public clearLanguageCode(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public clearTimeZone(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setPlatformVersion(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZone(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZoneBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getPlatformVersion(): string;
									public getPlatformVersionBytes(): com.google.protobuf.ByteString;
									public getLanguageCodeBytes(): com.google.protobuf.ByteString;
									public getTimeZoneBytes(): com.google.protobuf.ByteString;
									public clearAppVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setAppVersion(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersion(): string;
								}
							}
							export class ClientSignalsOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.ClientSignalsProto$ClientSignalsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAppVersion(): string;
									getAppVersionBytes(): com.google.protobuf.ByteString;
									getPlatformVersion(): string;
									getPlatformVersionBytes(): com.google.protobuf.ByteString;
									getLanguageCode(): string;
									getLanguageCodeBytes(): com.google.protobuf.ByteString;
									getTimeZone(): string;
									getTimeZoneBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppVersion(): string;
								public getLanguageCode(): string;
								public getPlatformVersionBytes(): com.google.protobuf.ByteString;
								public getPlatformVersion(): string;
								public getTimeZone(): string;
								public getLanguageCodeBytes(): com.google.protobuf.ByteString;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
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
		export module developers {
			export module mobile {
				export module targeting {
					export module proto {
						export class Conditions {
							public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module Conditions {
							export class AbtExperimentCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition,com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition>;
								public static EXPERIMENT_ID_FIELD_NUMBER: number;
								public getExperimentIdCount(): number;
								public getExperimentIdList(): java.util.List<string>;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public getExperimentId(param0: number): string;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public getExperimentIdBytes(param0: number): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition>;
							}
							export module AbtExperimentCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition,com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder>;
									public getExperimentId(param0: number): string;
									public getExperimentIdCount(): number;
									public addExperimentId(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
									public getExperimentIdList(): java.util.List<string>;
									public addExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
									public getExperimentIdBytes(param0: number): com.google.protobuf.ByteString;
									public setExperimentId(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
									public clearExperimentId(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
									public addAllExperimentId(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder;
								}
							}
							export class AbtExperimentConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$AbtExperimentConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExperimentIdList(): java.util.List<string>;
									getExperimentIdCount(): number;
									getExperimentId(param0: number): string;
									getExperimentIdBytes(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getExperimentIdCount(): number;
								public getExperimentIdList(): java.util.List<string>;
								public getExperimentId(param0: number): string;
								public getExperimentIdBytes(param0: number): com.google.protobuf.ByteString;
							}
							export class AnalyticsAudienceCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition,com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static TARGET_AUDIENCE_NAMES_FIELD_NUMBER: number;
								public static TARGET_AUDIENCE_ENTITY_ID_FIELD_NUMBER: number;
								public getTargetAudienceNamesList(): java.util.List<string>;
								public getOperatorValue(): number;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
								public getTargetAudienceEntityId(param0: number): number;
								public getTargetAudienceEntityIdList(): java.util.List<java.lang.Long>;
								public getTargetAudienceNames(param0: number): string;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition>;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
								public getTargetAudienceNamesCount(): number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getTargetAudienceEntityIdCount(): number;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public getTargetAudienceNamesBytes(param0: number): com.google.protobuf.ByteString;
							}
							export module AnalyticsAudienceCondition {
								export class AnalyticsAudienceOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static IN_AT_LEAST_ONE: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static NOT_IN_AT_LEAST_ONE: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static IN_ALL: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static IN_NONE: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static UNKNOWN_VALUE: number;
									public static IN_AT_LEAST_ONE_VALUE: number;
									public static NOT_IN_AT_LEAST_ONE_VALUE: number;
									public static IN_ALL_VALUE: number;
									public static IN_NONE_VALUE: number;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator>;
									public getNumber(): number;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator>;
								}
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition,com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder>;
									public getTargetAudienceEntityIdCount(): number;
									public addTargetAudienceNamesBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public addTargetAudienceEntityId(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public clearTargetAudienceEntityId(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public clearTargetAudienceNames(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public getTargetAudienceNamesCount(): number;
									public getTargetAudienceEntityIdList(): java.util.List<java.lang.Long>;
									public getTargetAudienceNamesList(): java.util.List<string>;
									public getOperatorValue(): number;
									public addAllTargetAudienceEntityId(param0: java.lang.Iterable<any>): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public addAllTargetAudienceNames(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public getTargetAudienceNamesBytes(param0: number): com.google.protobuf.ByteString;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public addTargetAudienceNames(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public getTargetAudienceEntityId(param0: number): number;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									public getTargetAudienceNames(param0: number): string;
									public setTargetAudienceNames(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
									public setTargetAudienceEntityId(param0: number, param1: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder;
								}
							}
							export class AnalyticsAudienceConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$AnalyticsAudienceConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
									getTargetAudienceNamesList(): java.util.List<string>;
									getTargetAudienceNamesCount(): number;
									getTargetAudienceNames(param0: number): string;
									getTargetAudienceNamesBytes(param0: number): com.google.protobuf.ByteString;
									getTargetAudienceEntityIdList(): java.util.List<java.lang.Long>;
									getTargetAudienceEntityIdCount(): number;
									getTargetAudienceEntityId(param0: number): number;
								});
								public constructor();
								public getTargetAudienceNamesList(): java.util.List<string>;
								public getOperatorValue(): number;
								public getTargetAudienceNamesCount(): number;
								public getTargetAudienceEntityId(param0: number): number;
								public getTargetAudienceEntityIdList(): java.util.List<java.lang.Long>;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.AnalyticsAudienceOperator;
								public getTargetAudienceNames(param0: number): string;
								public getTargetAudienceNamesBytes(param0: number): com.google.protobuf.ByteString;
								public getTargetAudienceEntityIdCount(): number;
							}
							export class AnalyticsUserPropertyCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition,com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static TARGET_USER_PROPERTY_NAME_FIELD_NUMBER: number;
								public static TARGET_USER_PROPERTY_ENTITY_ID_FIELD_NUMBER: number;
								public static TARGET_USER_PROPERTY_VALUE_FIELD_NUMBER: number;
								public static TARGET_USER_PROPERTY_VALUES_FIELD_NUMBER: number;
								public getOperatorValue(): number;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getTargetUserPropertyName(): string;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition>;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getTargetUserPropertyValue(): string;
								public getTargetUserPropertyValuesList(): java.util.List<string>;
								public getTargetUserPropertyValues(param0: number): string;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
								public getTargetUserPropertyValuesBytes(param0: number): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getTargetUserPropertyNameBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getTargetUserPropertyValueBytes(): com.google.protobuf.ByteString;
								public getTargetUserPropertyValuesCount(): number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getSerializedSize(): number;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getTargetUserPropertyEntityId(): number;
							}
							export module AnalyticsUserPropertyCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition,com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder>;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public addAllTargetUserPropertyValues(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public setTargetUserPropertyValue(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public clearTargetUserPropertyValues(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public setTargetUserPropertyValues(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public setTargetUserPropertyName(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public getTargetUserPropertyValuesBytes(param0: number): com.google.protobuf.ByteString;
									public getOperatorValue(): number;
									public setTargetUserPropertyNameBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public setTargetUserPropertyValueBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public clearTargetUserPropertyEntityId(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public clearTargetUserPropertyValue(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public addTargetUserPropertyValues(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public clearTargetUserPropertyName(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public getTargetUserPropertyValueBytes(): com.google.protobuf.ByteString;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public getTargetUserPropertyValue(): string;
									public getTargetUserPropertyValues(param0: number): string;
									public getTargetUserPropertyValuesList(): java.util.List<string>;
									public getTargetUserPropertyNameBytes(): com.google.protobuf.ByteString;
									public addTargetUserPropertyValuesBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public setTargetUserPropertyEntityId(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public getTargetUserPropertyValuesCount(): number;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder;
									public getTargetUserPropertyName(): string;
									public getTargetUserPropertyEntityId(): number;
								}
								export class UserPropertyOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_LESS_THAN: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_LESS_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_NOT_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_GREATER_THAN: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static NUMERIC_GREATER_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static STRING_CONTAINS: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static STRING_DOES_NOT_CONTAIN: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static STRING_EXACTLY_MATCHES: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static STRING_CONTAINS_REGEX: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static UNKNOWN_VALUE: number;
									public static NUMERIC_LESS_THAN_VALUE: number;
									public static NUMERIC_LESS_EQUAL_VALUE: number;
									public static NUMERIC_EQUAL_VALUE: number;
									public static NUMERIC_NOT_EQUAL_VALUE: number;
									public static NUMERIC_GREATER_THAN_VALUE: number;
									public static NUMERIC_GREATER_EQUAL_VALUE: number;
									public static STRING_CONTAINS_VALUE: number;
									public static STRING_DOES_NOT_CONTAIN_VALUE: number;
									public static STRING_EXACTLY_MATCHES_VALUE: number;
									public static STRING_CONTAINS_REGEX_VALUE: number;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator>;
									public getNumber(): number;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator>;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
								}
							}
							export class AnalyticsUserPropertyConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$AnalyticsUserPropertyConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
									getTargetUserPropertyName(): string;
									getTargetUserPropertyNameBytes(): com.google.protobuf.ByteString;
									getTargetUserPropertyEntityId(): number;
									getTargetUserPropertyValue(): string;
									getTargetUserPropertyValueBytes(): com.google.protobuf.ByteString;
									getTargetUserPropertyValuesList(): java.util.List<string>;
									getTargetUserPropertyValuesCount(): number;
									getTargetUserPropertyValues(param0: number): string;
									getTargetUserPropertyValuesBytes(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.UserPropertyOperator;
								public getTargetUserPropertyValuesCount(): number;
								public getTargetUserPropertyValuesBytes(param0: number): com.google.protobuf.ByteString;
								public getOperatorValue(): number;
								public getTargetUserPropertyNameBytes(): com.google.protobuf.ByteString;
								public getTargetUserPropertyValue(): string;
								public getTargetUserPropertyValuesList(): java.util.List<string>;
								public getTargetUserPropertyValues(param0: number): string;
								public getTargetUserPropertyName(): string;
								public getTargetUserPropertyEntityId(): number;
								public getTargetUserPropertyValueBytes(): com.google.protobuf.ByteString;
							}
							export class AndCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.AndCondition,com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AndConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AndCondition>;
								public static CONDITIONS_FIELD_NUMBER: number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.AndCondition>;
								public getConditionsCount(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public getSerializedSize(): number;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public getConditionsOrBuilderList(): java.util.List<any>;
								public getConditionsOrBuilder(param0: number): com.google.developers.mobile.targeting.proto.Conditions.ConditionOrBuilder;
								public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.AndCondition): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
							}
							export module AndCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.AndCondition,com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AndConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder>;
									public setConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public removeConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public addConditions(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public addConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public addConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
									public addConditions(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public clearConditions(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public setConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
									public getConditionsCount(): number;
									public addAllConditions(param0: java.lang.Iterable<any>): com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder;
								}
							}
							export class AndConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AndConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$AndConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
									getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									getConditionsCount(): number;
								});
								public constructor();
								public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getConditionsCount(): number;
							}
							export class AppVersionCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition,com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AppVersionConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static TARGET_VALUE_FIELD_NUMBER: number;
								public static TARGET_APP_VERSIONS_FIELD_NUMBER: number;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public getOperatorValue(): number;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
								public getTargetValue(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public getTargetValueBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getTargetAppVersionsCount(): number;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition>;
								public getTargetAppVersionsList(): java.util.List<string>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getTargetAppVersions(param0: number): string;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public getTargetAppVersionsBytes(param0: number): com.google.protobuf.ByteString;
								public getSerializedSize(): number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
							}
							export module AppVersionCondition {
								export class AppVersionOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static CONTAINS: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static DOES_NOT_CONTAIN: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static EXACTLY_MATCHES: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static CONTAINS_REGEX: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static UNKNOWN_VALUE: number;
									public static CONTAINS_VALUE: number;
									public static DOES_NOT_CONTAIN_VALUE: number;
									public static EXACTLY_MATCHES_VALUE: number;
									public static CONTAINS_REGEX_VALUE: number;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator>;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator>;
								}
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition,com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.AppVersionConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder>;
									public getTargetValue(): string;
									public getTargetAppVersionsList(): java.util.List<string>;
									public setTargetValueBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public setTargetAppVersions(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public addTargetAppVersionsBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public getTargetAppVersionsCount(): number;
									public addTargetAppVersions(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public clearTargetValue(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public clearTargetAppVersions(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public getTargetAppVersions(param0: number): string;
									public getOperatorValue(): number;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public getTargetValueBytes(): com.google.protobuf.ByteString;
									public addAllTargetAppVersions(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public getTargetAppVersionsBytes(param0: number): com.google.protobuf.ByteString;
									public setTargetValue(param0: string): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder;
								}
							}
							export class AppVersionConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.AppVersionConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$AppVersionConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
									getTargetValue(): string;
									getTargetValueBytes(): com.google.protobuf.ByteString;
									getTargetAppVersionsList(): java.util.List<string>;
									getTargetAppVersionsCount(): number;
									getTargetAppVersions(param0: number): string;
									getTargetAppVersionsBytes(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTargetAppVersions(param0: number): string;
								public getOperatorValue(): number;
								public getTargetAppVersionsList(): java.util.List<string>;
								public getTargetAppVersionsCount(): number;
								public getTargetAppVersionsBytes(param0: number): com.google.protobuf.ByteString;
								public getTargetValue(): string;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.AppVersionOperator;
								public getTargetValueBytes(): com.google.protobuf.ByteString;
							}
							export class Condition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.Condition,com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.ConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public static AND_FIELD_NUMBER: number;
								public static OR_FIELD_NUMBER: number;
								public static NOT_FIELD_NUMBER: number;
								public static ALWAYS_TRUE_FIELD_NUMBER: number;
								public static ALWAYS_FALSE_FIELD_NUMBER: number;
								public static TIME_FIELD_NUMBER: number;
								public static APP_VERSION_FIELD_NUMBER: number;
								public static APP_ID_FIELD_NUMBER: number;
								public static ANALYTICS_AUDIENCES_FIELD_NUMBER: number;
								public static LANGUAGES_FIELD_NUMBER: number;
								public static COUNTRIES_FIELD_NUMBER: number;
								public static OS_TYPE_FIELD_NUMBER: number;
								public static ANALYTICS_USER_PROPERTY_FIELD_NUMBER: number;
								public static TOPIC_FIELD_NUMBER: number;
								public static PERCENT_FIELD_NUMBER: number;
								public static PREDICTIONS_FIELD_NUMBER: number;
								public static ABT_EXPERIMENT_FIELD_NUMBER: number;
								public static FIREBASE_FUNCTION_FIELD_NUMBER: number;
								public getLanguages(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getAnalyticsAudiences(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public getOr(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public getAlwaysTrue(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public getAlwaysFalse(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public getFirebaseFunction(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public getTopic(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public getAnalyticsUserProperty(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getAppVersion(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getPredictions(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public getAppId(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getNot(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
								public getPercent(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public getConditionCase(): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
								public getAnd(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getTime(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getCountries(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public getAbtExperiment(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							}
							export module Condition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.Condition,com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.ConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder>;
									public getAnalyticsUserProperty(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
									public setAlwaysFalse(param0: com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAlwaysTrue(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setCountries(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getOr(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
									public clearCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setPercent(param0: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAnalyticsAudiences(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAppVersion(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
									public getOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
									public getCountries(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
									public mergePredictions(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAnalyticsAudiences(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAnalyticsUserProperty(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAbtExperiment(param0: com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAbtExperiment(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
									public setAnd(param0: com.google.developers.mobile.targeting.proto.Conditions.AndCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAnd(param0: com.google.developers.mobile.targeting.proto.Conditions.AndCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearPercent(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergePercent(param0: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAbtExperiment(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAppId(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setFirebaseFunction(param0: com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setFirebaseFunction(param0: com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeFirebaseFunction(param0: com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getLanguages(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
									public getPredictions(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
									public mergeAlwaysFalse(param0: com.google.developers.mobile.targeting.proto.Conditions.FalseCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setNot(param0: com.google.developers.mobile.targeting.proto.Conditions.NotCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setTime(param0: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setTopic(param0: com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAnalyticsAudiences(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
									public clearAnalyticsAudiences(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearOsType(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeOsType(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAnalyticsUserProperty(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAlwaysFalse(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
									public getFirebaseFunction(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
									public clearTime(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setOsType(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAnd(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
									public mergeLanguages(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeOr(param0: com.google.developers.mobile.targeting.proto.Conditions.OrCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAppId(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
									public getPercent(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
									public setAppId(param0: com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAnalyticsUserProperty(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setPercent(param0: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearCountries(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getTopic(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
									public mergeTime(param0: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAppVersion(param0: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAppId(param0: com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAppVersion(param0: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeTopic(param0: com.google.developers.mobile.targeting.proto.Conditions.TopicCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setPredictions(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAnd(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAlwaysTrue(param0: com.google.developers.mobile.targeting.proto.Conditions.TrueCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getTime(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
									public mergeNot(param0: com.google.developers.mobile.targeting.proto.Conditions.NotCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAlwaysTrue(param0: com.google.developers.mobile.targeting.proto.Conditions.TrueCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearFirebaseFunction(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getConditionCase(): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public setLanguages(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearLanguages(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeAbtExperiment(param0: com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAlwaysFalse(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAnd(param0: com.google.developers.mobile.targeting.proto.Conditions.AndCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAlwaysTrue(param0: com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAppId(param0: com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setOr(param0: com.google.developers.mobile.targeting.proto.Conditions.OrCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getAlwaysTrue(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
									public setOsType(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setPredictions(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearPredictions(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearTopic(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearOr(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setLanguages(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public mergeCountries(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAnalyticsUserProperty(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setTopic(param0: com.google.developers.mobile.targeting.proto.Conditions.TopicCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setOr(param0: com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public getNot(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
									public setAlwaysFalse(param0: com.google.developers.mobile.targeting.proto.Conditions.FalseCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setCountries(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAppVersion(param0: com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setTime(param0: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAbtExperiment(param0: com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setNot(param0: com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public setAnalyticsAudiences(param0: com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearNot(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
									public clearAppVersion(): com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder;
								}
								export class ConditionCase extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase>;
									public static AND: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static OR: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static NOT: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static ALWAYS_TRUE: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static ALWAYS_FALSE: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static TIME: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static APP_VERSION: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static APP_ID: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static ANALYTICS_AUDIENCES: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static LANGUAGES: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static COUNTRIES: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static OS_TYPE: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static ANALYTICS_USER_PROPERTY: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static TOPIC: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static PERCENT: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static PREDICTIONS: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static ABT_EXPERIMENT: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static FIREBASE_FUNCTION: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static CONDITION_NOT_SET: com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase>;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public getNumber(): number;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
								}
							}
							export class ConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.ConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$ConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAnd(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
									getOr(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
									getNot(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
									getAlwaysTrue(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
									getAlwaysFalse(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
									getTime(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
									getAppVersion(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
									getAppId(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
									getAnalyticsAudiences(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
									getLanguages(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
									getCountries(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
									getOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
									getAnalyticsUserProperty(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
									getTopic(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
									getPercent(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
									getPredictions(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
									getAbtExperiment(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
									getFirebaseFunction(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
									getConditionCase(): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
								});
								public constructor();
								public getNot(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public getLanguages(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public getAnalyticsAudiences(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsAudienceCondition;
								public getOr(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public getAlwaysTrue(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public getAlwaysFalse(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public getPercent(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public getFirebaseFunction(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public getOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public getAnd(): com.google.developers.mobile.targeting.proto.Conditions.AndCondition;
								public getTopic(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public getConditionCase(): com.google.developers.mobile.targeting.proto.Conditions.Condition.ConditionCase;
								public getTime(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public getCountries(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public getAbtExperiment(): com.google.developers.mobile.targeting.proto.Conditions.AbtExperimentCondition;
								public getAnalyticsUserProperty(): com.google.developers.mobile.targeting.proto.Conditions.AnalyticsUserPropertyCondition;
								public getAppVersion(): com.google.developers.mobile.targeting.proto.Conditions.AppVersionCondition;
								public getPredictions(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public getAppId(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
							}
							export class ConditionUseCase extends com.google.protobuf.Internal.EnumLite {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase>;
								public static USE_CASE_NOT_SPECIFIED: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static UNIVERSAL: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static REMOTE_CONFIG_ABT_EXPERIMENT: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static NOTIFICATIONS_ABT_EXPERIMENT: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static DIGITAL_GOODS: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static IN_APP_MESSAGING: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static REMOTE_CONFIG: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static USE_CASE_NOT_SPECIFIED_VALUE: number;
								public static UNIVERSAL_VALUE: number;
								public static REMOTE_CONFIG_ABT_EXPERIMENT_VALUE: number;
								public static NOTIFICATIONS_ABT_EXPERIMENT_VALUE: number;
								public static DIGITAL_GOODS_VALUE: number;
								public static IN_APP_MESSAGING_VALUE: number;
								public static REMOTE_CONFIG_VALUE: number;
								public getNumber(): number;
								public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase>;
								public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase>;
								public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
								public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.ConditionUseCase;
							}
							export class DateTimeCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition,com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DateTimeConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static TARGET_DATE_TIME_ZONE_FIELD_NUMBER: number;
								public hasTargetDateTimeZone(): boolean;
								public getOperatorValue(): number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition>;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getTargetDateTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
							}
							export module DateTimeCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition,com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DateTimeConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder>;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public hasTargetDateTimeZone(): boolean;
									public mergeTargetDateTimeZone(param0: com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public setTargetDateTimeZone(param0: com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public getOperatorValue(): number;
									public clearTargetDateTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
									public getTargetDateTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
									public setTargetDateTimeZone(param0: com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.Builder;
								}
								export class TimeOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public static BEFORE: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public static AFTER_OR_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public static UNKNOWN_VALUE: number;
									public static BEFORE_VALUE: number;
									public static AFTER_OR_EQUAL_VALUE: number;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator>;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public getNumber(): number;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator>;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
								}
							}
							export class DateTimeConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DateTimeConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$DateTimeConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
									hasTargetDateTimeZone(): boolean;
									getTargetDateTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								});
								public constructor();
								public hasTargetDateTimeZone(): boolean;
								public getOperatorValue(): number;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.DateTimeCondition.TimeOperator;
								public getTargetDateTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
							}
							export class DeviceCountryCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition,com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition>;
								public static TARGET_COUNTRY_CODES_FIELD_NUMBER: number;
								public getTargetCountryCodesBytes(param0: number): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
								public getTargetCountryCodesList(): java.util.List<string>;
								public getTargetCountryCodes(param0: number): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition>;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public getTargetCountryCodesCount(): number;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition;
							}
							export module DeviceCountryCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition,com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder>;
									public getTargetCountryCodesCount(): number;
									public getTargetCountryCodesBytes(param0: number): com.google.protobuf.ByteString;
									public addTargetCountryCodes(param0: string): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
									public setTargetCountryCodes(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
									public addAllTargetCountryCodes(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
									public addTargetCountryCodesBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
									public clearTargetCountryCodes(): com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryCondition.Builder;
									public getTargetCountryCodesList(): java.util.List<string>;
									public getTargetCountryCodes(param0: number): string;
								}
							}
							export class DeviceCountryConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceCountryConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$DeviceCountryConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTargetCountryCodesList(): java.util.List<string>;
									getTargetCountryCodesCount(): number;
									getTargetCountryCodes(param0: number): string;
									getTargetCountryCodesBytes(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTargetCountryCodesBytes(param0: number): com.google.protobuf.ByteString;
								public getTargetCountryCodesList(): java.util.List<string>;
								public getTargetCountryCodes(param0: number): string;
								public getTargetCountryCodesCount(): number;
							}
							export class DeviceLanguageCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition,com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition>;
								public static TARGET_LANGUAGE_CODES_FIELD_NUMBER: number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
								public getTargetLanguageCodesBytes(param0: number): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public getTargetLanguageCodes(param0: number): string;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition>;
								public getTargetLanguageCodesList(): java.util.List<string>;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
								public getTargetLanguageCodesCount(): number;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition;
							}
							export module DeviceLanguageCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition,com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder>;
									public setTargetLanguageCodes(param0: number, param1: string): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
									public getTargetLanguageCodesList(): java.util.List<string>;
									public addAllTargetLanguageCodes(param0: java.lang.Iterable<string>): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
									public getTargetLanguageCodesBytes(param0: number): com.google.protobuf.ByteString;
									public addTargetLanguageCodesBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
									public getTargetLanguageCodes(param0: number): string;
									public addTargetLanguageCodes(param0: string): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
									public getTargetLanguageCodesCount(): number;
									public clearTargetLanguageCodes(): com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageCondition.Builder;
								}
							}
							export class DeviceLanguageConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.DeviceLanguageConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$DeviceLanguageConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTargetLanguageCodesList(): java.util.List<string>;
									getTargetLanguageCodesCount(): number;
									getTargetLanguageCodes(param0: number): string;
									getTargetLanguageCodesBytes(param0: number): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTargetLanguageCodes(param0: number): string;
								public getTargetLanguageCodesBytes(param0: number): com.google.protobuf.ByteString;
								public getTargetLanguageCodesList(): java.util.List<string>;
								public getTargetLanguageCodesCount(): number;
							}
							export class FalseCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.FalseCondition,com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FalseConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FalseCondition>;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.FalseCondition): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.FalseCondition>;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FalseCondition;
							}
							export module FalseCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.FalseCondition,com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FalseConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FalseCondition.Builder>;
								}
							}
							export class FalseConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FalseConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$FalseConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class FirebaseAppIdCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition,com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition>;
								public static TARGET_GMP_APP_ID_FIELD_NUMBER: number;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public getTargetGmpAppId(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public getTargetGmpAppIdBytes(): com.google.protobuf.ByteString;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition;
							}
							export module FirebaseAppIdCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition,com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder>;
									public setTargetGmpAppIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder;
									public clearTargetGmpAppId(): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder;
									public getTargetGmpAppId(): string;
									public setTargetGmpAppId(param0: string): com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdCondition.Builder;
									public getTargetGmpAppIdBytes(): com.google.protobuf.ByteString;
								}
							}
							export class FirebaseAppIdConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FirebaseAppIdConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$FirebaseAppIdConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTargetGmpAppId(): string;
									getTargetGmpAppIdBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTargetGmpAppId(): string;
								public getTargetGmpAppIdBytes(): com.google.protobuf.ByteString;
							}
							export class FunctionCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition,com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FunctionConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition>;
								public static FUNCTION_URL_FIELD_NUMBER: number;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public getFunctionUrl(): string;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public getFunctionUrlBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition>;
							}
							export module FunctionCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition,com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.FunctionConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder>;
									public setFunctionUrl(param0: string): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder;
									public clearFunctionUrl(): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder;
									public setFunctionUrlBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.FunctionCondition.Builder;
									public getFunctionUrlBytes(): com.google.protobuf.ByteString;
									public getFunctionUrl(): string;
								}
							}
							export class FunctionConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.FunctionConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$FunctionConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getFunctionUrl(): string;
									getFunctionUrlBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getFunctionUrlBytes(): com.google.protobuf.ByteString;
								public getFunctionUrl(): string;
							}
							export class NotCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.NotCondition,com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.NotConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.NotCondition>;
								public static CONDITION_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public hasCondition(): boolean;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.NotCondition): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.NotCondition>;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public getSerializedSize(): number;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.NotCondition;
								public getCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							}
							export module NotCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.NotCondition,com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.NotConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder>;
									public setCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
									public mergeCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
									public setCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
									public clearCondition(): com.google.developers.mobile.targeting.proto.Conditions.NotCondition.Builder;
									public hasCondition(): boolean;
									public getCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								}
							}
							export class NotConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.NotConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$NotConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasCondition(): boolean;
									getCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								});
								public constructor();
								public hasCondition(): boolean;
								public getCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							}
							export class OrCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.OrCondition,com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.OrConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OrCondition>;
								public static CONDITIONS_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public getConditionsCount(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.OrCondition>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
								public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public getSerializedSize(): number;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public getConditionsOrBuilderList(): java.util.List<any>;
								public getConditionsOrBuilder(param0: number): com.google.developers.mobile.targeting.proto.Conditions.ConditionOrBuilder;
								public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.OrCondition): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OrCondition;
							}
							export module OrCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.OrCondition,com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.OrConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder>;
									public addConditions(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public clearConditions(): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public setConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
									public addConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public addAllConditions(param0: java.lang.Iterable<any>): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public addConditions(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public addConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public getConditionsCount(): number;
									public removeConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
									public setConditions(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.developers.mobile.targeting.proto.Conditions.OrCondition.Builder;
								}
							}
							export class OrConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OrConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$OrConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
									getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									getConditionsCount(): number;
								});
								public constructor();
								public getConditionsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.Condition>;
								public getConditions(param0: number): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getConditionsCount(): number;
							}
							export class OsTypeCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition,com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.OsTypeConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static TARGET_OS_TYPE_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public getOperatorValue(): number;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getTargetOsTypeValue(): number;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getTargetOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
								public getSerializedSize(): number;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition;
							}
							export module OsTypeCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition,com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.OsTypeConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder>;
									public getTargetOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public setTargetOsType(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
									public getTargetOsTypeValue(): number;
									public clearTargetOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
									public setTargetOsTypeValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
									public getOperatorValue(): number;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.Builder;
								}
								export class OsType extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType>;
									public static UNKNOWN_OS_TYPE: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static ANDROID: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static IOS: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static UNKNOWN_OS_TYPE_VALUE: number;
									public static ANDROID_VALUE: number;
									public static IOS_VALUE: number;
									public getNumber(): number;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType>;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType>;
								}
								export class OsTypeOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator>;
									public static UNKNOWN_OPERATOR: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static EQUALS: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static NOT_EQUALS: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static UNKNOWN_OPERATOR_VALUE: number;
									public static EQUALS_VALUE: number;
									public static NOT_EQUALS_VALUE: number;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator>;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator>;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
								}
							}
							export class OsTypeConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.OsTypeConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$OsTypeConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
									getTargetOsTypeValue(): number;
									getTargetOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
								});
								public constructor();
								public getTargetOsTypeValue(): number;
								public getOperatorValue(): number;
								public getTargetOsType(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsType;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.OsTypeCondition.OsTypeOperator;
							}
							export class PercentCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition,com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PercentConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static MICRO_PERCENT_FIELD_NUMBER: number;
								public static SEED_FIELD_NUMBER: number;
								public getSeed(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public getOperatorValue(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public getMicroPercent(): number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public getSeedBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition>;
							}
							export module PercentCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition,com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PercentConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder>;
									public clearMicroPercent(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public clearSeed(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public setSeedBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public getOperatorValue(): number;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public setMicroPercent(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public getSeedBytes(): com.google.protobuf.ByteString;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
									public getMicroPercent(): number;
									public getSeed(): string;
									public setSeed(param0: string): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.Builder;
								}
								export class PercentOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static LESS_OR_EQUAL: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static GREATER_THAN: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static UNKNOWN_VALUE: number;
									public static LESS_OR_EQUAL_VALUE: number;
									public static GREATER_THAN_VALUE: number;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator>;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator>;
								}
							}
							export class PercentConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PercentConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$PercentConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
									getMicroPercent(): number;
									getSeed(): string;
									getSeedBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getSeed(): string;
								public getOperatorValue(): number;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PercentCondition.PercentOperator;
								public getSeedBytes(): com.google.protobuf.ByteString;
								public getMicroPercent(): number;
							}
							export class PredictionsCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition,com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PredictionsConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition>;
								public static OPERATOR_FIELD_NUMBER: number;
								public static PREDICTION_TARGETS_FIELD_NUMBER: number;
								public getOperatorValue(): number;
								public getPredictionTargets(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public getPredictionTargetsOrBuilder(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTargetOrBuilder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public getPredictionTargetsCount(): number;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getPredictionTargetsOrBuilderList(): java.util.List<any>;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public getPredictionTargetsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition>;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition;
							}
							export module PredictionsCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition,com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PredictionsConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder>;
									public addPredictionTargets(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public clearPredictionTargets(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public addAllPredictionTargets(param0: java.lang.Iterable<any>): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public getPredictionTargets(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public getOperatorValue(): number;
									public clearOperator(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public setOperatorValue(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public getPredictionTargetsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
									public setOperator(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public addPredictionTargets(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public addPredictionTargets(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public addPredictionTargets(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public setPredictionTargets(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public setPredictionTargets(param0: number, param1: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
									public getPredictionTargetsCount(): number;
									public removePredictionTargets(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.Builder;
								}
								export class PredictionsOperator extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator>;
									public static UNKNOWN: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static IN_AT_LEAST_ONE: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static IN_ALL: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static UNRECOGNIZED: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static UNKNOWN_VALUE: number;
									public static IN_AT_LEAST_ONE_VALUE: number;
									public static IN_ALL_VALUE: number;
									public static values(): native.Array<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator>;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static valueOf(param0: string): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static valueOf(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator>;
								}
								export class PredictionsTarget extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget,com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTargetOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
									public static PREDICTION_RISK_PROFILE_ID_FIELD_NUMBER: number;
									public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
									public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
									public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public getPredictionRiskProfileId(): string;
									public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
									public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder;
									public getSerializedSize(): number;
									public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder;
									public getPredictionRiskProfileIdBytes(): com.google.protobuf.ByteString;
								}
								export module PredictionsTarget {
									export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget,com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTargetOrBuilder  {
										public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder>;
										public clearPredictionRiskProfileId(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder;
										public getPredictionRiskProfileId(): string;
										public setPredictionRiskProfileIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder;
										public getPredictionRiskProfileIdBytes(): com.google.protobuf.ByteString;
										public setPredictionRiskProfileId(param0: string): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget.Builder;
									}
								}
								export class PredictionsTargetOrBuilder {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTargetOrBuilder>;
									/**
									 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$PredictionsCondition$PredictionsTargetOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getPredictionRiskProfileId(): string;
										getPredictionRiskProfileIdBytes(): com.google.protobuf.ByteString;
									});
									public constructor();
									public getPredictionRiskProfileId(): string;
									public getPredictionRiskProfileIdBytes(): com.google.protobuf.ByteString;
								}
							}
							export class PredictionsConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.PredictionsConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$PredictionsConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOperatorValue(): number;
									getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
									getPredictionTargetsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
									getPredictionTargets(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
									getPredictionTargetsCount(): number;
								});
								public constructor();
								public getPredictionTargetsList(): java.util.List<com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget>;
								public getOperatorValue(): number;
								public getPredictionTargets(param0: number): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsTarget;
								public getPredictionTargetsCount(): number;
								public getOperator(): com.google.developers.mobile.targeting.proto.Conditions.PredictionsCondition.PredictionsOperator;
							}
							export class TargetDateTimeZone extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone,com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZoneOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone>;
								public static DATE_TIME_FIELD_NUMBER: number;
								public static TIME_ZONE_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
								public getDateTimeBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public getSerializedSize(): number;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone>;
								public getTimeZone(): string;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone;
								public getDateTime(): string;
							}
							export module TargetDateTimeZone {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone,com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZoneOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder>;
									public setDateTime(param0: string): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public clearDateTime(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public clearTimeZone(): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public getTimeZoneBytes(): com.google.protobuf.ByteString;
									public getTimeZone(): string;
									public setTimeZone(param0: string): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public setDateTimeBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public setTimeZoneBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZone.Builder;
									public getDateTime(): string;
									public getDateTimeBytes(): com.google.protobuf.ByteString;
								}
							}
							export class TargetDateTimeZoneOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TargetDateTimeZoneOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$TargetDateTimeZoneOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getDateTime(): string;
									getDateTimeBytes(): com.google.protobuf.ByteString;
									getTimeZone(): string;
									getTimeZoneBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTimeZone(): string;
								public getDateTimeBytes(): com.google.protobuf.ByteString;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getDateTime(): string;
							}
							export class TopicCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.TopicCondition,com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TopicConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TopicCondition>;
								public static TOPIC_NAME_FIELD_NUMBER: number;
								public getTopicNameBytes(): com.google.protobuf.ByteString;
								public getTopicName(): string;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.TopicCondition>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.TopicCondition): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition;
							}
							export module TopicCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.TopicCondition,com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TopicConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder>;
									public getTopicName(): string;
									public setTopicNameBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder;
									public getTopicNameBytes(): com.google.protobuf.ByteString;
									public setTopicName(param0: string): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder;
									public clearTopicName(): com.google.developers.mobile.targeting.proto.Conditions.TopicCondition.Builder;
								}
							}
							export class TopicConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TopicConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$TopicConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTopicName(): string;
									getTopicNameBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getTopicNameBytes(): com.google.protobuf.ByteString;
								public getTopicName(): string;
							}
							export class TrueCondition extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.Conditions.TrueCondition,com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TrueConditionOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TrueCondition>;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.Conditions.TrueCondition): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.Conditions.TrueCondition>;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.Conditions.TrueCondition;
							}
							export module TrueCondition {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.Conditions.TrueCondition,com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder> implements com.google.developers.mobile.targeting.proto.Conditions.TrueConditionOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TrueCondition.Builder>;
								}
							}
							export class TrueConditionOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.Conditions.TrueConditionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.Conditions$TrueConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.BuildConfig>;
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
			export module inappmessaging {
				export class CampaignAnalytics extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CampaignAnalytics,com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder  {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public static PROJECT_NUMBER_FIELD_NUMBER: number;
					public static CAMPAIGN_ID_FIELD_NUMBER: number;
					public static CLIENT_APP_FIELD_NUMBER: number;
					public static CLIENT_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
					public static EVENT_TYPE_FIELD_NUMBER: number;
					public static DISMISS_TYPE_FIELD_NUMBER: number;
					public static RENDER_ERROR_REASON_FIELD_NUMBER: number;
					public static FETCH_ERROR_REASON_FIELD_NUMBER: number;
					public static FIAM_SDK_VERSION_FIELD_NUMBER: number;
					public static CLEARCUT_DELIVERY_RETRY_COUNT_FIELD_NUMBER: number;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public getCampaignIdBytes(): com.google.protobuf.ByteString;
					public hasClientTimestampMillis(): boolean;
					public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
					public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
					public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static newBuilder(param0: com.google.firebase.inappmessaging.CampaignAnalytics): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public getCampaignId(): string;
					public hasProjectNumber(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getProjectNumberBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					public hasEventType(): boolean;
					public getEventType(): com.google.firebase.inappmessaging.EventType;
					public hasClientApp(): boolean;
					public static newBuilder(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public hasRenderErrorReason(): boolean;
					public getSerializedSize(): number;
					public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasDismissType(): boolean;
					public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getClientTimestampMillis(): number;
					public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
					public hasCampaignId(): boolean;
					public getDismissType(): com.google.firebase.inappmessaging.DismissType;
					public getClearcutDeliveryRetryCount(): number;
					public hasFiamSdkVersion(): boolean;
					public hasClearcutDeliveryRetryCount(): boolean;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasFetchErrorReason(): boolean;
					public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
					public getFiamSdkVersion(): string;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getProjectNumber(): string;
				}
				export module CampaignAnalytics {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CampaignAnalytics,com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.Builder>;
						public hasRenderErrorReason(): boolean;
						public getDismissType(): com.google.firebase.inappmessaging.DismissType;
						public getClientTimestampMillis(): number;
						public clearEvent(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClientTimestampMillis(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasDismissType(): boolean;
						public clearRenderErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setProjectNumber(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getCampaignId(): string;
						public hasCampaignId(): boolean;
						public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
						public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
						public clearFiamSdkVersion(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClearcutDeliveryRetryCount(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public setDismissType(param0: com.google.firebase.inappmessaging.DismissType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasClearcutDeliveryRetryCount(): boolean;
						public setClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearEventType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setEventType(param0: com.google.firebase.inappmessaging.EventType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasProjectNumber(): boolean;
						public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFiamSdkVersionBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getFiamSdkVersion(): string;
						public hasClientApp(): boolean;
						public setCampaignId(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasEventType(): boolean;
						public getEventType(): com.google.firebase.inappmessaging.EventType;
						public clearClearcutDeliveryRetryCount(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearCampaignId(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFetchErrorReason(param0: com.google.firebase.inappmessaging.FetchErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo.Builder): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
						public clearClientApp(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasClientTimestampMillis(): boolean;
						public hasFetchErrorReason(): boolean;
						public setFiamSdkVersion(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearFetchErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasFiamSdkVersion(): boolean;
						public getProjectNumberBytes(): com.google.protobuf.ByteString;
						public clearClientTimestampMillis(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getProjectNumber(): string;
						public getClearcutDeliveryRetryCount(): number;
						public setRenderErrorReason(param0: com.google.firebase.inappmessaging.RenderErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getCampaignIdBytes(): com.google.protobuf.ByteString;
						public clearDismissType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearProjectNumber(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public mergeClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					}
					export class EventCase extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public static EVENT_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static DISMISS_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static RENDER_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static FETCH_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static EVENT_NOT_SET: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static values(): native.Array<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public getNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class CampaignAnalyticsOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasProjectNumber(): boolean;
						getProjectNumber(): string;
						getProjectNumberBytes(): com.google.protobuf.ByteString;
						hasCampaignId(): boolean;
						getCampaignId(): string;
						getCampaignIdBytes(): com.google.protobuf.ByteString;
						hasClientApp(): boolean;
						getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
						hasClientTimestampMillis(): boolean;
						getClientTimestampMillis(): number;
						hasEventType(): boolean;
						getEventType(): com.google.firebase.inappmessaging.EventType;
						hasDismissType(): boolean;
						getDismissType(): com.google.firebase.inappmessaging.DismissType;
						hasRenderErrorReason(): boolean;
						getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
						hasFetchErrorReason(): boolean;
						getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
						hasFiamSdkVersion(): boolean;
						getFiamSdkVersion(): string;
						getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
						hasClearcutDeliveryRetryCount(): boolean;
						getClearcutDeliveryRetryCount(): number;
						getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					});
					public constructor();
					public hasClientApp(): boolean;
					public hasRenderErrorReason(): boolean;
					public getCampaignIdBytes(): com.google.protobuf.ByteString;
					public hasClientTimestampMillis(): boolean;
					public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
					public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
					public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					public hasDismissType(): boolean;
					public getCampaignId(): string;
					public getClientTimestampMillis(): number;
					public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
					public hasProjectNumber(): boolean;
					public hasCampaignId(): boolean;
					public getProjectNumberBytes(): com.google.protobuf.ByteString;
					public getDismissType(): com.google.firebase.inappmessaging.DismissType;
					public getClearcutDeliveryRetryCount(): number;
					public hasFiamSdkVersion(): boolean;
					public hasClearcutDeliveryRetryCount(): boolean;
					public hasFetchErrorReason(): boolean;
					public getFiamSdkVersion(): string;
					public getProjectNumber(): string;
					public hasEventType(): boolean;
					public getEventType(): com.google.firebase.inappmessaging.EventType;
					public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ClientAppInfo,com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder  {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static GOOGLE_APP_ID_FIELD_NUMBER: number;
					public static FIREBASE_INSTANCE_ID_FIELD_NUMBER: number;
					public static newBuilder(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public getSerializedSize(): number;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public getGoogleAppId(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public getFirebaseInstanceId(): string;
					public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasFirebaseInstanceId(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
					public static newBuilder(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public hasGoogleAppId(): boolean;
					public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
				}
				export module ClientAppInfo {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ClientAppInfo,com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo.Builder>;
						public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
						public hasGoogleAppId(): boolean;
						public setGoogleAppId(param0: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public getGoogleAppId(): string;
						public setFirebaseInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public getFirebaseInstanceId(): string;
						public setGoogleAppIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public setFirebaseInstanceId(param0: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public clearGoogleAppId(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public hasFirebaseInstanceId(): boolean;
						public clearFirebaseInstanceId(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class ClientAppInfoOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfoOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.ClientAppInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasGoogleAppId(): boolean;
						getGoogleAppId(): string;
						getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						hasFirebaseInstanceId(): boolean;
						getFirebaseInstanceId(): string;
						getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getFirebaseInstanceId(): string;
					public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					public hasFirebaseInstanceId(): boolean;
					public getGoogleAppId(): string;
					public hasGoogleAppId(): boolean;
					public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class CommonTypesProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module CommonTypesProto {
					export class CampaignState extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static UNKNOWN_CAMPAIGN_STATE: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static DRAFT: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static PUBLISHED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static STOPPED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static DELETED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static UNKNOWN_CAMPAIGN_STATE_VALUE: number;
						public static DRAFT_VALUE: number;
						public static PUBLISHED_VALUE: number;
						public static STOPPED_VALUE: number;
						public static DELETED_VALUE: number;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public getNumber(): number;
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
					}
					export class CampaignTime extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime,com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static DATE_FIELD_NUMBER: number;
						public static TIME_FIELD_NUMBER: number;
						public static TIME_ZONE_FIELD_NUMBER: number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getDate(): com.google.type.Date;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public hasTime(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public hasDate(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTime(): com.google.type.TimeOfDay;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTimeZone(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
					}
					export module CampaignTime {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime,com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder>;
							public clearDate(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZone(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public mergeDate(param0: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZoneBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasDate(): boolean;
							public setTime(param0: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setDate(param0: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasTime(): boolean;
							public mergeTime(param0: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public clearTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public clearTimeZone(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZone(): string;
							public setTime(param0: com.google.type.TimeOfDay.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTime(): com.google.type.TimeOfDay;
							public getDate(): com.google.type.Date;
							public setDate(param0: com.google.type.Date.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZoneBytes(): com.google.protobuf.ByteString;
						}
					}
					export class CampaignTimeOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$CampaignTimeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasDate(): boolean;
							getDate(): com.google.type.Date;
							hasTime(): boolean;
							getTime(): com.google.type.TimeOfDay;
							getTimeZone(): string;
							getTimeZoneBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public getDate(): com.google.type.Date;
						public hasTime(): boolean;
						public getTimeZone(): string;
						public hasDate(): boolean;
						public getTime(): com.google.type.TimeOfDay;
					}
					export class DailyAnalyticsSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number;
						public static IMPRESSIONS_FIELD_NUMBER: number;
						public static CLICKS_FIELD_NUMBER: number;
						public static ERRORS_FIELD_NUMBER: number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getErrors(): number;
						public getImpressions(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getSerializedSize(): number;
						public getStartOfDayMillis(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getClicks(): number;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
					}
					export module DailyAnalyticsSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder>;
							public getClicks(): number;
							public setStartOfDayMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getErrors(): number;
							public clearStartOfDayMillis(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearClicks(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setClicks(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearErrors(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setErrors(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getStartOfDayMillis(): number;
							public getImpressions(): number;
							public clearImpressions(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setImpressions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						}
					}
					export class DailyAnalyticsSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$DailyAnalyticsSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStartOfDayMillis(): number;
							getImpressions(): number;
							getClicks(): number;
							getErrors(): number;
						});
						public constructor();
						public getStartOfDayMillis(): number;
						public getErrors(): number;
						public getImpressions(): number;
						public getClicks(): number;
					}
					export class DailyConversionSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number;
						public static CONVERSIONS_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public getSerializedSize(): number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public getStartOfDayMillis(): number;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public getConversions(): number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
					}
					export module DailyConversionSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder>;
							public setStartOfDayMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public setConversions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public getConversions(): number;
							public getStartOfDayMillis(): number;
							public clearStartOfDayMillis(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public clearConversions(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						}
					}
					export class DailyConversionSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$DailyConversionSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStartOfDayMillis(): number;
							getConversions(): number;
						});
						public constructor();
						public getStartOfDayMillis(): number;
						public getConversions(): number;
					}
					export class ExperimentVariant extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant,com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static INDEX_FIELD_NUMBER: number;
						public static CONTENT_FIELD_NUMBER: number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getIndex(): number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public hasContent(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
					}
					export module ExperimentVariant {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant,com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder>;
							public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public clearIndex(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
							public getIndex(): number;
							public hasContent(): boolean;
							public mergeContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public setIndex(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public clearContent(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						}
					}
					export class ExperimentVariantOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ExperimentVariantOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getIndex(): number;
							hasContent(): boolean;
							getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						});
						public constructor();
						public hasContent(): boolean;
						public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getIndex(): number;
					}
					export class ExperimentalCampaignState extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public static UNKNOWN_EXPERIMENTAL_CAMPAIGN_STATE: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_DRAFT: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_RUNNING: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_STOPPED: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_ROLLED_OUT: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static UNKNOWN_EXPERIMENTAL_CAMPAIGN_STATE_VALUE: number;
						public static EXPERIMENT_DRAFT_VALUE: number;
						public static EXPERIMENT_RUNNING_VALUE: number;
						public static EXPERIMENT_STOPPED_VALUE: number;
						public static EXPERIMENT_ROLLED_OUT_VALUE: number;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
					}
					export class Priority extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.Priority,com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static VALUE_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public getSerializedSize(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public getValue(): number;
					}
					export module Priority {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.Priority,com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder>;
							public setValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
							public getValue(): number;
							public clearValue(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						}
					}
					export class PriorityOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$PriorityOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getValue(): number;
						});
						public constructor();
						public getValue(): number;
					}
					export class ScionConversionEvent extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent,com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static NAME_FIELD_NUMBER: number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public getSerializedSize(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
					}
					export module ScionConversionEvent {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent,com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder>;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getName(): string;
							public setName(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
						}
					}
					export class ScionConversionEventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ScionConversionEventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getNameBytes(): com.google.protobuf.ByteString;
						public getName(): string;
					}
					export class Trigger extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static UNKNOWN_TRIGGER: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static APP_LAUNCH: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static ON_FOREGROUND: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static UNKNOWN_TRIGGER_VALUE: number;
						public static APP_LAUNCH_VALUE: number;
						public static ON_FOREGROUND_VALUE: number;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
					}
					export class TriggeringCondition extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition,com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static FIAM_TRIGGER_FIELD_NUMBER: number;
						public static EVENT_FIELD_NUMBER: number;
						public getFiamTriggerValue(): number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public getSerializedSize(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public getEvent(): analytics_collection.GmpMeasurement.Event;
					}
					export module TriggeringCondition {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition,com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder>;
							public setEvent(param0: analytics_collection.GmpMeasurement.Event.Builder): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public setFiamTriggerValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setEvent(param0: analytics_collection.GmpMeasurement.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public mergeEvent(param0: analytics_collection.GmpMeasurement.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearCondition(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getEvent(): analytics_collection.GmpMeasurement.Event;
							public getFiamTriggerValue(): number;
							public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
							public setFiamTrigger(param0: com.google.firebase.inappmessaging.CommonTypesProto.Trigger): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearEvent(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						}
						export class ConditionCase extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
							public static FIAM_TRIGGER: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static EVENT: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static CONDITION_NOT_SET: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public getNumber(): number;
							public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
							public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						}
					}
					export class TriggeringConditionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$TriggeringConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFiamTriggerValue(): number;
							getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
							getEvent(): analytics_collection.GmpMeasurement.Event;
							getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						});
						public constructor();
						public getFiamTriggerValue(): number;
						public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						public getEvent(): analytics_collection.GmpMeasurement.Event;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class DismissType extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.DismissType>;
					public static UNKNOWN_DISMISS_TYPE: com.google.firebase.inappmessaging.DismissType;
					public static AUTO: com.google.firebase.inappmessaging.DismissType;
					public static CLICK: com.google.firebase.inappmessaging.DismissType;
					public static SWIPE: com.google.firebase.inappmessaging.DismissType;
					public static UNKNOWN_DISMISS_TYPE_VALUE: number;
					public static AUTO_VALUE: number;
					public static CLICK_VALUE: number;
					public static SWIPE_VALUE: number;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.DismissType;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.DismissType>;
					public static valueOf(param0: number): com.google.firebase.inappmessaging.DismissType;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.DismissType>;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.DismissType;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class EventType extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.EventType>;
					public static UNKNOWN_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static IMPRESSION_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static CLICK_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static UNKNOWN_EVENT_TYPE_VALUE: number;
					public static IMPRESSION_EVENT_TYPE_VALUE: number;
					public static CLICK_EVENT_TYPE_VALUE: number;
					public static valueOf(param0: number): com.google.firebase.inappmessaging.EventType;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.EventType;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.EventType>;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.EventType;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.EventType>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FetchErrorReason extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static UNSPECIFIED_FETCH_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static SERVER_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static CLIENT_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static NETWORK_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static UNSPECIFIED_FETCH_ERROR_VALUE: number;
					public static SERVER_ERROR_VALUE: number;
					public static CLIENT_ERROR_VALUE: number;
					public static NETWORK_ERROR_VALUE: number;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static valueOf(param0: number): com.google.firebase.inappmessaging.FetchErrorReason;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.FetchErrorReason;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.FetchErrorReason;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessaging {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessaging>;
					public setMessageDisplayComponent(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay): void;
					public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public triggerEvent(param0: string): void;
					public removeClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public removeImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public areMessagesSuppressed(): boolean;
					public clearDisplayListener(): void;
					public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param1: java.util.concurrent.Executor): void;
					public isAutomaticDataCollectionEnabled(): boolean;
					public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param1: java.util.concurrent.Executor): void;
					public removeDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public setMessagesSuppressed(param0: java.lang.Boolean): void;
					public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public setAutomaticDataCollectionEnabled(param0: boolean): void;
					public static getInstance(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param1: java.util.concurrent.Executor): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingCampaignAnalyticsProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingCampaignAnalyticsProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingClickListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
					});
					public constructor();
					public messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingContextualTrigger {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingContextualTrigger>;
					public constructor(param0: string);
					public getTriggerName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplay {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
					});
					public constructor();
					public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplayCallbacks {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
						messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
						messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					});
					public constructor();
					public messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
					public displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					public impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
				export module FirebaseInAppMessagingDisplayCallbacks {
					export class InAppMessagingDismissType {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType>;
						public static UNKNOWN_DISMISS_TYPE: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static AUTO: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static CLICK: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static SWIPE: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static values(): native.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType>;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
					}
					export class InAppMessagingErrorReason {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
						public static UNSPECIFIED_RENDER_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_FETCH_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_DISPLAY_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_UNSUPPORTED_FORMAT: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static values(): native.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplayErrorListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
					});
					public constructor();
					public displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingImpressionListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
					});
					public constructor();
					public impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingRegistrar {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar>;
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
			export module inappmessaging {
				export class FirebaseInAppMessaging_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.FirebaseInAppMessaging> {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessaging_Factory>;
					public static newFirebaseInAppMessaging(param0: com.google.firebase.inappmessaging.internal.InAppMessageStreamManager, param1: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers, param2: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param3: com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory, param4: com.google.firebase.inappmessaging.internal.DeveloperListenerManager): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>): dagger.internal.Factory<com.google.firebase.inappmessaging.FirebaseInAppMessaging>;
					public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>);
					public get(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class MessagesProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module MessagesProto {
					export class Action extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Action,com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static ACTION_URL_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getActionUrl(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getSerializedSize(): number;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module Action {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Action,com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action.Builder>;
							public getActionUrlBytes(): com.google.protobuf.ByteString;
							public getActionUrl(): string;
							public setActionUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public clearActionUrl(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public setActionUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						}
					}
					export class ActionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ActionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getActionUrl(): string;
							getActionUrlBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public getActionUrl(): string;
					}
					export class BannerMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.BannerMessage,com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public hasTitle(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasBody(): boolean;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getSerializedSize(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module BannerMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.BannerMessage,com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder>;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public hasAction(): boolean;
							public getBackgroundHexColor(): string;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasTitle(): boolean;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasBody(): boolean;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						}
					}
					export class BannerMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$BannerMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasAction(): boolean;
						public hasTitle(): boolean;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class Button extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Button,com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button>;
						public static TEXT_FIELD_NUMBER: number;
						public static BUTTON_HEX_COLOR_FIELD_NUMBER: number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getButtonHexColor(): string;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public hasText(): boolean;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Button>;
					}
					export module Button {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Button,com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button.Builder>;
							public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public mergeText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setButtonHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public getButtonHexColorBytes(): com.google.protobuf.ByteString;
							public hasText(): boolean;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setButtonHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public clearText(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public getButtonHexColor(): string;
							public clearButtonHexColor(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						}
					}
					export class ButtonOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ButtonOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasText(): boolean;
							getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getButtonHexColor(): string;
							getButtonHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getButtonHexColor(): string;
						public hasText(): boolean;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
					}
					export class CardMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.CardMessage,com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static PORTRAIT_IMAGE_URL_FIELD_NUMBER: number;
						public static LANDSCAPE_IMAGE_URL_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public static PRIMARY_ACTION_BUTTON_FIELD_NUMBER: number;
						public static PRIMARY_ACTION_FIELD_NUMBER: number;
						public static SECONDARY_ACTION_BUTTON_FIELD_NUMBER: number;
						public static SECONDARY_ACTION_FIELD_NUMBER: number;
						public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public hasTitle(): boolean;
						public hasPrimaryActionButton(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryAction(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public hasBody(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getBackgroundHexColor(): string;
						public getPortraitImageUrl(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
						public hasSecondaryAction(): boolean;
						public hasSecondaryActionButton(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getLandscapeImageUrl(): string;
					}
					export module CardMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.CardMessage,com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder>;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public setPrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setPrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setPortraitImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPortraitImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasSecondaryAction(): boolean;
							public clearPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public clearPortraitImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasBody(): boolean;
							public hasPrimaryActionButton(): boolean;
							public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public hasPrimaryAction(): boolean;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBackgroundHexColor(): string;
							public setSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasTitle(): boolean;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrl(): string;
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setLandscapeImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
							public setLandscapeImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public hasSecondaryActionButton(): boolean;
							public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
							public clearPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPortraitImageUrl(): string;
							public mergePrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearLandscapeImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergePrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						}
					}
					export class CardMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$CardMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getPortraitImageUrl(): string;
							getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
							getLandscapeImageUrl(): string;
							getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							hasPrimaryActionButton(): boolean;
							getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasPrimaryAction(): boolean;
							getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							hasSecondaryActionButton(): boolean;
							getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasSecondaryAction(): boolean;
							getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						});
						public constructor();
						public hasBody(): boolean;
						public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getBackgroundHexColor(): string;
						public getPortraitImageUrl(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasTitle(): boolean;
						public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryActionButton(): boolean;
						public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public hasSecondaryAction(): boolean;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public hasSecondaryActionButton(): boolean;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryAction(): boolean;
						public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getLandscapeImageUrl(): string;
					}
					export class Content extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Content,com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public static BANNER_FIELD_NUMBER: number;
						public static MODAL_FIELD_NUMBER: number;
						public static IMAGE_ONLY_FIELD_NUMBER: number;
						public static CARD_FIELD_NUMBER: number;
						public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getSerializedSize(): number;
						public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
					}
					export module Content {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Content,com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.Builder>;
							public clearCard(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
							public setImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearMessageDetails(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearBanner(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
							public mergeModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
							public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
							public mergeBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearImageOnly(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearModal(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public setModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						}
						export class MessageDetailsCase extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
							public static BANNER: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MODAL: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static IMAGE_ONLY: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static CARD: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MESSAGEDETAILS_NOT_SET: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static valueOf(param0: string): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public getNumber(): number;
							public static valueOf(param0: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static forNumber(param0: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static values(): native.Array<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
						}
					}
					export class ContentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ContentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
							getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
							getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
							getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
							getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						});
						public constructor();
						public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
					}
					export class ImageOnlyMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage,com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public getSerializedSize(): number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
					}
					export module ImageOnlyMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage,com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public hasAction(): boolean;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						}
					}
					export class ImageOnlyMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ImageOnlyMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						});
						public constructor();
						public hasAction(): boolean;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class ModalMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ModalMessage,com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_BUTTON_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public hasActionButton(): boolean;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public hasTitle(): boolean;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public getSerializedSize(): number;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module ModalMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ModalMessage,com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasAction(): boolean;
							public setActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBackgroundHexColor(): string;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public hasTitle(): boolean;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasActionButton(): boolean;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearActionButton(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasBody(): boolean;
						}
					}
					export class ModalMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ModalMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasActionButton(): boolean;
							getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public hasBody(): boolean;
						public hasActionButton(): boolean;
						public getBackgroundHexColor(): string;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasAction(): boolean;
						public hasTitle(): boolean;
						public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class Text extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Text,com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public static TEXT_FIELD_NUMBER: number;
						public static HEX_COLOR_FIELD_NUMBER: number;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColor(): string;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColorBytes(): com.google.protobuf.ByteString;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getText(): string;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						public getSerializedSize(): number;
						public getTextBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Text;
					}
					export module Text {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Text,com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text.Builder>;
							public clearHexColor(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public clearText(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getText(): string;
							public setHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public setHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getHexColorBytes(): com.google.protobuf.ByteString;
							public getTextBytes(): com.google.protobuf.ByteString;
							public setTextBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getHexColor(): string;
							public setText(param0: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						}
					}
					export class TextOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$TextOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
							getTextBytes(): com.google.protobuf.ByteString;
							getHexColor(): string;
							getHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getTextBytes(): com.google.protobuf.ByteString;
						public getHexColor(): string;
						public getHexColorBytes(): com.google.protobuf.ByteString;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class RenderErrorReason extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.RenderErrorReason>;
					public static UNSPECIFIED_RENDER_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_FETCH_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_DISPLAY_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_UNSUPPORTED_FORMAT: com.google.firebase.inappmessaging.RenderErrorReason;
					public static UNSPECIFIED_RENDER_ERROR_VALUE: number;
					public static IMAGE_FETCH_ERROR_VALUE: number;
					public static IMAGE_DISPLAY_ERROR_VALUE: number;
					public static IMAGE_UNSUPPORTED_FORMAT_VALUE: number;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.RenderErrorReason;
					public getNumber(): number;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.RenderErrorReason;
					public static valueOf(param0: number): com.google.firebase.inappmessaging.RenderErrorReason;
					public static values(): native.Array<com.google.firebase.inappmessaging.RenderErrorReason>;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.RenderErrorReason>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsConnectorHandleManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager>;
						public updateContextualTriggers(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsConnectorHandleManager_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle>);
						public static create(param0: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager>;
						public get(): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsConstants {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsConstants>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsEventsManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>;
						public updateContextualTriggers(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector);
						public getAnalyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
						public getHandle(): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
					}
					export module AnalyticsEventsManager {
						export class AnalyticsFlowableSubscriber extends io.reactivex.FlowableOnSubscribe<string> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager.AnalyticsFlowableSubscriber>;
							public subscribe(param0: io.reactivex.FlowableEmitter<string>): void;
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
			export module inappmessaging {
				export module internal {
					export class ApiClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ApiClient>;
						public constructor(param0: dagger.Lazy<com.google.firebase.inappmessaging.internal.GrpcClient>, param1: com.google.firebase.FirebaseApp, param2: globalAndroid.app.Application, param3: com.google.firebase.iid.FirebaseInstanceId, param4: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param5: com.google.firebase.inappmessaging.internal.vendored.Clock, param6: com.google.firebase.inappmessaging.internal.ProviderInstaller);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class CampaignCacheClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.CampaignCacheClient>;
						public get(): io.reactivex.Maybe<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
						public put(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): io.reactivex.Completable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class CampaignCacheClient_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.CampaignCacheClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.CampaignCacheClient_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>);
						public static newCampaignCacheClient(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient, param1: globalAndroid.app.Application, param2: com.google.firebase.inappmessaging.internal.vendored.Clock): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.CampaignCacheClient>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DataCollectionHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DataCollectionHelper>;
						public setAutomaticDataCollectionEnabled(param0: boolean): void;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, param2: com.google.firebase.iid.FirebaseInstanceId, param3: com.google.firebase.events.Subscriber);
						public isAutomaticDataCollectionEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DataCollectionHelper_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DataCollectionHelper_Factory>;
						public get(): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
						public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.iid.FirebaseInstanceId>, param3: javax.inject.Provider<com.google.firebase.events.Subscriber>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.iid.FirebaseInstanceId>, param3: javax.inject.Provider<com.google.firebase.events.Subscriber>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DeveloperListenerManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>;
						public static instance: com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
						public constructor();
						public messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
						public removeClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
						public removeImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param1: java.util.concurrent.Executor): void;
						public displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
						public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param1: java.util.concurrent.Executor): void;
						public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param1: java.util.concurrent.Executor): void;
						public removeDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
						public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					}
					export module DeveloperListenerManager {
						export class ClicksExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ClicksExecutorAndListener>;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param2: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener);
							public getListener(): any;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: java.util.concurrent.Executor);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener;
						}
						export class ErrorsExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ErrorsExecutorAndListener>;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param2: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener);
							public getListener(): any;
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: java.util.concurrent.Executor);
						}
						export abstract class ExecutorAndListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<any>>;
							public getListener(): T;
							public withExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: java.util.concurrent.Executor);
						}
						export class FIAMThreadFactory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.FIAMThreadFactory>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
						export class ImpressionExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ImpressionExecutorAndListener>;
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param2: java.util.concurrent.Executor);
							public getListener(): any;
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener);
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
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksFactory {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>;
						public generateDisplayCallback(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks;
						public constructor(param0: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param1: com.google.firebase.inappmessaging.internal.vendored.Clock, param2: com.google.firebase.inappmessaging.internal.Schedulers, param3: com.google.firebase.inappmessaging.internal.RateLimiterClient, param4: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param5: com.google.firebase.inappmessaging.model.RateLimit, param6: com.google.firebase.inappmessaging.internal.MetricsLoggerClient, param7: com.google.firebase.inappmessaging.internal.DataCollectionHelper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksFactory_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory_Factory>;
						public get(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksImpl extends com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksImpl>;
						public messageClicked(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
						public displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class FiamAnalyticsConnectorListener {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.FiamAnalyticsConnectorListener>;
						public onMessageTriggered(param0: number, param1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ForegroundNotifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ForegroundNotifier>;
						public static DELAY_MILLIS: number;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public constructor();
						public setListener(param0: com.google.firebase.inappmessaging.internal.ForegroundNotifier.Listener): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public removeListener(param0: com.google.firebase.inappmessaging.internal.ForegroundNotifier.Listener): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
					export module ForegroundNotifier {
						export class Listener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ForegroundNotifier.Listener>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.ForegroundNotifier$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onForeground(): void;
							});
							public constructor();
							public onForeground(): void;
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
			export module inappmessaging {
				export module internal {
					export class GrpcClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.GrpcClient>;
						public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class GrpcClient_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.GrpcClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.GrpcClient_Factory>;
						public static newGrpcClient(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub): com.google.firebase.inappmessaging.internal.GrpcClient;
						public get(): com.google.firebase.inappmessaging.internal.GrpcClient;
						public constructor(param0: javax.inject.Provider<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>);
						public static create(param0: javax.inject.Provider<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.GrpcClient>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ImpressionStorageClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>;
						public storeImpression(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): io.reactivex.Completable;
						public isImpressed(param0: string): io.reactivex.Single<java.lang.Boolean>;
						public getAllImpressions(): io.reactivex.Maybe<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ImpressionStorageClient_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ImpressionStorageClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ImpressionStorageClient_Factory>;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>);
						public static newImpressionStorageClient(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
						public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class InAppMessageStreamManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>;
						public static ON_FOREGROUND: string;
						public static isAppForegroundEvent(param0: string): boolean;
						public constructor(param0: io.reactivex.flowables.ConnectableFlowable<string>, param1: io.reactivex.flowables.ConnectableFlowable<string>, param2: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param3: com.google.firebase.inappmessaging.internal.vendored.Clock, param4: com.google.firebase.inappmessaging.internal.ApiClient, param5: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager, param6: com.google.firebase.inappmessaging.internal.Schedulers, param7: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param8: com.google.firebase.inappmessaging.internal.RateLimiterClient, param9: com.google.firebase.inappmessaging.model.RateLimit, param10: com.google.firebase.inappmessaging.internal.TestDeviceHelper);
						public static isAppForegroundEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): boolean;
						public createFirebaseInAppMessageStream(): io.reactivex.Flowable<com.google.firebase.inappmessaging.model.TriggeredInAppMessage>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class InAppMessageStreamManager_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager_Factory>;
						public constructor(param0: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param1: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ApiClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param9: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param10: javax.inject.Provider<com.google.firebase.inappmessaging.internal.TestDeviceHelper>);
						public static create(param0: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param1: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ApiClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param9: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param10: javax.inject.Provider<com.google.firebase.inappmessaging.internal.TestDeviceHelper>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>;
						public get(): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Logging {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Logging>;
						public static TAG: string;
						public constructor();
						public static logi(param0: string): void;
						public static loge(param0: string): void;
						public static logd(param0: string): void;
						public static logw(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class MetricsLoggerClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>;
						public constructor(param0: com.google.firebase.inappmessaging.internal.MetricsLoggerClient.ClearcutLoggerInterface, param1: com.google.firebase.analytics.connector.AnalyticsConnector, param2: com.google.firebase.FirebaseApp, param3: com.google.firebase.iid.FirebaseInstanceId, param4: com.google.firebase.inappmessaging.internal.vendored.Clock, param5: com.google.firebase.inappmessaging.internal.DeveloperListenerManager);
						public logMessageClick(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
						public logDismiss(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): void;
						public logImpression(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
						public logRenderError(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
					}
					export module MetricsLoggerClient {
						export class ClearcutLoggerInterface {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.MetricsLoggerClient.ClearcutLoggerInterface>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.MetricsLoggerClient$ClearcutLoggerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								logEvent(param0: native.Array<number>): void;
							});
							public constructor();
							public logEvent(param0: native.Array<number>): void;
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
			export module inappmessaging {
				export module internal {
					export class ProgramaticContextualTriggers {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>;
						public constructor();
						public triggerEvent(param0: string): void;
						public setListener(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
						public removeListener(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
					}
					export module ProgramaticContextualTriggers {
						export class Listener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEventTrigger(param0: string): void;
							});
							public constructor();
							public onEventTrigger(param0: string): void;
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
			export module inappmessaging {
				export module internal {
					export class ProtoStorageClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProtoStorageClient>;
						public write(param0: com.google.protobuf.AbstractMessageLite): io.reactivex.Completable;
						public read(param0: com.google.protobuf.Parser): io.reactivex.Maybe;
						public constructor(param0: globalAndroid.app.Application, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ProviderInstaller {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProviderInstaller>;
						public install(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ProviderInstaller_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProviderInstaller> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProviderInstaller_Factory>;
						public constructor(param0: javax.inject.Provider<globalAndroid.app.Application>);
						public static newProviderInstaller(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProviderInstaller;
						public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
						public static create(param0: javax.inject.Provider<globalAndroid.app.Application>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProviderInstaller>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class RateLimitProto {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto>;
						public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
					}
					export module RateLimitProto {
						export class Counter extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static VALUE_FIELD_NUMBER: number;
							public static START_TIME_EPOCH_FIELD_NUMBER: number;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static newBuilder(param0: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getStartTimeEpoch(): number;
							public getSerializedSize(): number;
							public getValue(): number;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
						}
						export module Counter {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder>;
								public getValue(): number;
								public setValue(param0: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public setStartTimeEpoch(param0: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public clearValue(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public clearStartTimeEpoch(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public getStartTimeEpoch(): number;
							}
						}
						export class CounterOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.RateLimitProto$CounterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getValue(): number;
								getStartTimeEpoch(): number;
							});
							public constructor();
							public getStartTimeEpoch(): number;
							public getValue(): number;
						}
						export class RateLimit extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit,com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static LIMITS_FIELD_NUMBER: number;
							public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static newBuilder(param0: com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsCount(): number;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getSerializedSize(): number;
							public containsLimits(param0: string): boolean;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
						}
						export module RateLimit {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit,com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder>;
								public removeLimits(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public getLimitsCount(): number;
								public putLimits(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public clearLimits(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public putAllLimits(param0: java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public containsLimits(param0: string): boolean;
							}
							export class LimitsDefaultEntryHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.LimitsDefaultEntryHolder>;
							}
						}
						export class RateLimitOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.RateLimitProto$RateLimitOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLimitsCount(): number;
								containsLimits(param0: string): boolean;
								getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							});
							public constructor();
							public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getLimitsCount(): number;
							public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public containsLimits(param0: string): boolean;
							public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
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
			export module inappmessaging {
				export module internal {
					export class RateLimiterClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimiterClient>;
						public isRateLimited(param0: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Single<java.lang.Boolean>;
						public increment(param0: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Completable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class RateLimiterClient_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.RateLimiterClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimiterClient_Factory>;
						public static newRateLimiterClient(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient, param1: com.google.firebase.inappmessaging.internal.vendored.Clock): com.google.firebase.inappmessaging.internal.RateLimiterClient;
						public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.RateLimiterClient>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Schedulers {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Schedulers>;
						public io(): io.reactivex.Scheduler;
						public mainThread(): io.reactivex.Scheduler;
						public computation(): io.reactivex.Scheduler;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Schedulers_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.Schedulers> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Schedulers_Factory>;
						public constructor(param0: javax.inject.Provider<io.reactivex.Scheduler>, param1: javax.inject.Provider<io.reactivex.Scheduler>, param2: javax.inject.Provider<io.reactivex.Scheduler>);
						public static create(param0: javax.inject.Provider<io.reactivex.Scheduler>, param1: javax.inject.Provider<io.reactivex.Scheduler>, param2: javax.inject.Provider<io.reactivex.Scheduler>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.Schedulers>;
						public get(): com.google.firebase.inappmessaging.internal.Schedulers;
						public static newSchedulers(param0: io.reactivex.Scheduler, param1: io.reactivex.Scheduler, param2: io.reactivex.Scheduler): com.google.firebase.inappmessaging.internal.Schedulers;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class SharedPreferencesUtils {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>;
						public getBooleanManifestValue(param0: string, param1: boolean): boolean;
						public isPreferenceSet(param0: string): boolean;
						public getBooleanPreference(param0: string, param1: boolean): boolean;
						public setBooleanPreference(param0: string, param1: boolean): void;
						public getAndSetBooleanPreference(param0: string, param1: boolean): boolean;
						public constructor(param0: com.google.firebase.FirebaseApp);
						public isManifestSet(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class SharedPreferencesUtils_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils_Factory>;
						public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
						public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class TestDeviceHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.TestDeviceHelper>;
						public processCampaignFetch(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(param0: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils);
						public isAppInstallFresh(): boolean;
						public isDeviceInTestMode(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class TestDeviceHelper_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.TestDeviceHelper_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>);
						public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class AppComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.AppComponent>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.AppComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
									displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
								});
								public constructor();
								public providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
								public displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
							}
							export module AppComponent {
								export class Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.AppComponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									});
									public constructor();
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
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
		export module firebase {
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class DaggerAppComponent extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent>;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
								public providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
								public displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
							}
							export module DaggerAppComponent {
								export class Builder extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder>;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsConnector extends javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsConnector>;
									public get(): com.google.firebase.analytics.connector.AnalyticsConnector;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsEventsManager extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsEventsManager>;
									public get(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundEventFlowable extends javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundEventFlowable>;
									public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundRateLimit extends javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundRateLimit>;
									public get(): com.google.firebase.inappmessaging.model.RateLimit;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_application extends javax.inject.Provider<globalAndroid.app.Application> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_application>;
									public get(): globalAndroid.app.Application;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_campaignCacheClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_campaignCacheClient>;
									public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_clock extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_clock>;
									public get(): com.google.firebase.inappmessaging.internal.vendored.Clock;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_developerListenerManager extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_developerListenerManager>;
									public get(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_firebaseEventsSubscriber extends javax.inject.Provider<com.google.firebase.events.Subscriber> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_firebaseEventsSubscriber>;
									public get(): com.google.firebase.events.Subscriber;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_gRPCChannel extends javax.inject.Provider<io.grpc.Channel> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_gRPCChannel>;
									public get(): io.grpc.Channel;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_impressionStorageClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_impressionStorageClient>;
									public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_probiderInstaller extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_probiderInstaller>;
									public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggerFlowable extends javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggerFlowable>;
									public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggers extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggers>;
									public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_rateLimiterClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_rateLimiterClient>;
									public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_schedulers extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_schedulers>;
									public get(): com.google.firebase.inappmessaging.internal.Schedulers;
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
		export module firebase {
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class DaggerUniversalComponent extends com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent>;
								public probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								public schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
								public analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								public analyticsConnectorHandleManager(): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
								public impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								public application(): globalAndroid.app.Application;
								public programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
								public clock(): com.google.firebase.inappmessaging.internal.vendored.Clock;
								public rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								public campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
								public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
								public gRPCChannel(): io.grpc.Channel;
								public programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
							}
							export module DaggerUniversalComponent {
								export class Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder>;
									public protoStorageClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public systemClockModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public appMeasurementModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent;
									public foregroundNotifierModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundNotifierModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public foregroundFlowableModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public schedulerModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public applicationModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public programmaticContextualTriggerFlowableModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public analyticsEventsModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public rateLimitModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public grpcChannelModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
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
		export module firebase {
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class UniversalComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
									gRPCChannel(): io.grpc.Channel;
									schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
									appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
									analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
									analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
									firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
									analyticsConnectorHandleManager(): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
									campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
									impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
									clock(): com.google.firebase.inappmessaging.internal.vendored.Clock;
									protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
									rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
									application(): globalAndroid.app.Application;
									appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
									developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								});
								public constructor();
								public probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								public schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
								public analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								public analyticsConnectorHandleManager(): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
								public impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								public application(): globalAndroid.app.Application;
								public programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
								public clock(): com.google.firebase.inappmessaging.internal.vendored.Clock;
								public rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								public campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
								public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
								public gRPCChannel(): io.grpc.Channel;
								public programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule>;
								public providesAnalyticsConnectorHandle(param0: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
								public providesAnalyticsConnectorEvents(param0: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor();
								public providesAnalyticsEventsManager(param0: com.google.firebase.analytics.connector.AnalyticsConnector): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory extends dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory>;
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>): dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule_ProvidesAnalyticsConnectorHandleFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsConnectorHandleFactory>;
								public get(): com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsConnectorHandleManager>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
								public get(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule>;
								public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.iid.FirebaseInstanceId, param2: com.google.firebase.inappmessaging.internal.vendored.Clock);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesApiClientFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ApiClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesApiClientFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: javax.inject.Provider<globalAndroid.app.Application>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller>);
								public static proxyProvidesApiClient(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: dagger.Lazy<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: globalAndroid.app.Application, param3: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param4: com.google.firebase.inappmessaging.internal.ProviderInstaller): com.google.firebase.inappmessaging.internal.ApiClient;
								public get(): com.google.firebase.inappmessaging.internal.ApiClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: javax.inject.Provider<globalAndroid.app.Application>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ApiClient>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesDataCollectionHelperFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesDataCollectionHelperFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper>;
								public static proxyProvidesDataCollectionHelper(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, param2: com.google.firebase.events.Subscriber): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>);
								public get(): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesFirebaseAppFactory extends dagger.internal.Factory<com.google.firebase.FirebaseApp> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseAppFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
								public static proxyProvidesFirebaseApp(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.FirebaseApp;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): dagger.internal.Factory<com.google.firebase.FirebaseApp>;
								public get(): com.google.firebase.FirebaseApp;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesFirebaseInstanceIdFactory extends dagger.internal.Factory<com.google.firebase.iid.FirebaseInstanceId> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseInstanceIdFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
								public get(): com.google.firebase.iid.FirebaseInstanceId;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): dagger.internal.Factory<com.google.firebase.iid.FirebaseInstanceId>;
								public static proxyProvidesFirebaseInstanceId(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.iid.FirebaseInstanceId;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesSharedPreferencesUtilsFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesSharedPreferencesUtilsFactory>;
								public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
								public static proxyProvidesSharedPreferencesUtils(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesTestDeviceHelperFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesTestDeviceHelperFactory>;
								public static proxyProvidesTestDeviceHelper(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>);
								public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule>;
								public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector, param1: com.google.firebase.events.Subscriber);
								public providesSubsriber(): com.google.firebase.events.Subscriber;
								public providesAnalyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule_ProvidesAnalyticsConnectorFactory extends dagger.internal.Factory<com.google.firebase.analytics.connector.AnalyticsConnector> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesAnalyticsConnectorFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): dagger.internal.Factory<com.google.firebase.analytics.connector.AnalyticsConnector>;
								public get(): com.google.firebase.analytics.connector.AnalyticsConnector;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule_ProvidesSubsriberFactory extends dagger.internal.Factory<com.google.firebase.events.Subscriber> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesSubsriberFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): dagger.internal.Factory<com.google.firebase.events.Subscriber>;
								public get(): com.google.firebase.events.Subscriber;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule>;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public providesApplication(): globalAndroid.app.Application;
								public constructor(param0: globalAndroid.app.Application);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule_DeveloperListenerManagerFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DeveloperListenerManager> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_DeveloperListenerManagerFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>;
								public get(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule_ProvidesApplicationFactory extends dagger.internal.Factory<globalAndroid.app.Application> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): dagger.internal.Factory<globalAndroid.app.Application>;
								public get(): globalAndroid.app.Application;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundFlowableModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule>;
								public providesAppForegroundEventStream(param0: globalAndroid.app.Application, param1: com.google.firebase.inappmessaging.internal.ForegroundNotifier): io.reactivex.flowables.ConnectableFlowable<string>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory extends dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory>;
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ForegroundNotifier>): dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ForegroundNotifier>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundNotifierModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundNotifierModule>;
								public providesForeground(): com.google.firebase.inappmessaging.internal.ForegroundNotifier;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundNotifierModule_ProvidesForegroundFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ForegroundNotifier> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundNotifierModule_ProvidesForegroundFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundNotifierModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundNotifierModule): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ForegroundNotifier>;
								public get(): com.google.firebase.inappmessaging.internal.ForegroundNotifier;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule>;
								public providesServiceHost(): string;
								public constructor();
								public providesGrpcChannel(param0: string): io.grpc.Channel;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule_ProvidesGrpcChannelFactory extends dagger.internal.Factory<io.grpc.Channel> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesGrpcChannelFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, param1: javax.inject.Provider<string>): dagger.internal.Factory<io.grpc.Channel>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, param1: javax.inject.Provider<string>);
								public get(): io.grpc.Channel;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule_ProvidesServiceHostFactory extends dagger.internal.Factory<string> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesServiceHostFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): dagger.internal.Factory<string>;
								public get(): string;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule>;
								public constructor(param0: com.google.firebase.FirebaseApp);
								public providesApiKeyHeaders(): io.grpc.Metadata;
								public static getSignature(param0: globalAndroid.content.pm.PackageManager, param1: string): string;
								public providesInAppMessagingSdkServingStub(param0: io.grpc.Channel, param1: io.grpc.Metadata): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule_ProvidesApiKeyHeadersFactory extends dagger.internal.Factory<io.grpc.Metadata> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesApiKeyHeadersFactory>;
								public get(): io.grpc.Metadata;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): dagger.internal.Factory<io.grpc.Metadata>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory extends dagger.internal.Factory<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, param1: javax.inject.Provider<io.grpc.Channel>, param2: javax.inject.Provider<io.grpc.Metadata>): dagger.internal.Factory<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, param1: javax.inject.Provider<io.grpc.Channel>, param2: javax.inject.Provider<io.grpc.Metadata>);
								public get(): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule>;
								public providesProgramaticContextualTriggerStream(): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers);
								public providesProgramaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory extends dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule);
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>;
								public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule>;
								public static CAMPAIGN_CACHE_FILE: string;
								public static IMPRESSIONS_STORE_FILE: string;
								public static RATE_LIMIT_STORE_FILE: string;
								public providesProtoStorageClientForCampaign(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public providesProtoStorageClientForImpressionStore(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public constructor();
								public providesProtoStorageClientForLimiterStore(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory>;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory>;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory>;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class RateLimitModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule>;
								public constructor();
								public providesAppForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class RateLimitModule_ProvidesAppForegroundRateLimitFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.model.RateLimit> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule_ProvidesAppForegroundRateLimitFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): dagger.internal.Factory<com.google.firebase.inappmessaging.model.RateLimit>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule);
								public get(): com.google.firebase.inappmessaging.model.RateLimit;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule>;
								public providesComputeScheduler(): io.reactivex.Scheduler;
								public providesMainThreadScheduler(): io.reactivex.Scheduler;
								public constructor();
								public providesIOScheduler(): io.reactivex.Scheduler;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesComputeSchedulerFactory extends dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesComputeSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): dagger.internal.Factory<io.reactivex.Scheduler>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesIOSchedulerFactory extends dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesIOSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): dagger.internal.Factory<io.reactivex.Scheduler>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesMainThreadSchedulerFactory extends dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesMainThreadSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): dagger.internal.Factory<io.reactivex.Scheduler>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SystemClockModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule>;
								public providesSystemClockModule(): com.google.firebase.inappmessaging.internal.vendored.Clock;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SystemClockModule_ProvidesSystemClockModuleFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.vendored.Clock> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule_ProvidesSystemClockModuleFactory>;
								public get(): com.google.firebase.inappmessaging.internal.vendored.Clock;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.vendored.Clock>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class TransportClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class TransportClientModule_ProvidesApiClientFactory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.MetricsLoggerClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule_ProvidesApiClientFactory>;
								public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.android.datatransport.TransportFactory>, param2: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param3: javax.inject.Provider<com.google.firebase.iid.FirebaseInstanceId>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>;
								public static proxyProvidesApiClient(param0: com.google.firebase.FirebaseApp, param1: com.google.android.datatransport.TransportFactory, param2: com.google.firebase.analytics.connector.AnalyticsConnector, param3: com.google.firebase.iid.FirebaseInstanceId, param4: com.google.firebase.inappmessaging.internal.vendored.Clock, param5: com.google.firebase.inappmessaging.internal.DeveloperListenerManager): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
								public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.android.datatransport.TransportFactory>, param2: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param3: javax.inject.Provider<com.google.firebase.iid.FirebaseInstanceId>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.vendored.Clock>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>);
								public get(): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class Analytics {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.Analytics>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.Analytics interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class AnalyticsListener {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.AnalyticsListener>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class AppForeground {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.AppForeground>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.AppForeground interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class CampaignCache {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.CampaignCache>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.CampaignCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class ImpressionStore {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.ImpressionStore>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.ImpressionStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class ProgrammaticTrigger {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.ProgrammaticTrigger>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.ProgrammaticTrigger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class RateLimit {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.RateLimit>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.RateLimit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module scopes {
							export class FirebaseAppScope {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.scopes.FirebaseAppScope>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.scopes.FirebaseAppScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module inappmessaging {
				export module internal {
					export module vendored {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.vendored.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.vendored.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								now(): number;
							});
							public constructor();
							public now(): number;
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
			export module inappmessaging {
				export module internal {
					export module vendored {
						export class SystemClock extends com.google.firebase.inappmessaging.internal.vendored.Clock {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.vendored.SystemClock>;
							public constructor();
							public now(): number;
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
			export module inappmessaging {
				export module internal {
					export module vendored {
						export class SystemClock_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.internal.vendored.SystemClock> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.vendored.SystemClock_Factory>;
							public constructor();
							public static create(): dagger.internal.Factory<com.google.firebase.inappmessaging.internal.vendored.SystemClock>;
							public get(): com.google.firebase.inappmessaging.internal.vendored.SystemClock;
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
			export module inappmessaging {
				export module model {
					export class Action {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action>;
						public getActionUrl(): string;
						public getButton(): com.google.firebase.inappmessaging.model.Button;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.google.firebase.inappmessaging.model.Action.Builder;
					}
					export module Action {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action.Builder>;
							public constructor();
							public setActionUrl(param0: string): com.google.firebase.inappmessaging.model.Action.Builder;
							public setButton(param0: com.google.firebase.inappmessaging.model.Button): com.google.firebase.inappmessaging.model.Action.Builder;
							public build(): com.google.firebase.inappmessaging.model.Action;
							public setButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.model.Action.Builder;
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
			export module inappmessaging {
				export module model {
					export class AutoValue_RateLimit extends com.google.firebase.inappmessaging.model.RateLimit {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.AutoValue_RateLimit>;
						public limiterKey(): string;
						public limit(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public timeToLiveMillis(): number;
						public toString(): string;
					}
					export module AutoValue_RateLimit {
						export class Builder extends com.google.firebase.inappmessaging.model.RateLimit.Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.AutoValue_RateLimit.Builder>;
							public setLimit(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setTimeToLiveMillis(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public build(): com.google.firebase.inappmessaging.model.RateLimit;
							public setLimiterKey(param0: string): com.google.firebase.inappmessaging.model.RateLimit.Builder;
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
			export module inappmessaging {
				export module model {
					export class BannerMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.BannerMessage>;
						public getBackgroundHexColor(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public static builder(): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module BannerMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.BannerMessage.Builder>;
							public constructor();
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata): com.google.firebase.inappmessaging.model.BannerMessage;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
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
			export module inappmessaging {
				export module model {
					export class Button {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Button>;
						public getButtonHexColor(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.google.firebase.inappmessaging.model.Button.Builder;
						public getText(): com.google.firebase.inappmessaging.model.Text;
					}
					export module Button {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Button.Builder>;
							public constructor();
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Button.Builder;
							public setText(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.Button.Builder;
							public setButtonHexColor(param0: string): com.google.firebase.inappmessaging.model.Button.Builder;
							public build(): com.google.firebase.inappmessaging.model.Button;
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
			export module inappmessaging {
				export module model {
					export class CampaignMetadata {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CampaignMetadata>;
						public getCampaignName(): string;
						public getIsTestMessage(): boolean;
						public constructor(param0: string, param1: string, param2: boolean);
						public getCampaignId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class CardMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CardMessage>;
						public getBackgroundHexColor(): string;
						public static builder(): com.google.firebase.inappmessaging.model.CardMessage.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSecondaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getPortraitImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getPrimaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getLandscapeImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module CardMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CardMessage.Builder>;
							public constructor();
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPortraitImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata): com.google.firebase.inappmessaging.model.CardMessage;
							public setLandscapeImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
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
			export module inappmessaging {
				export module model {
					export class ImageData {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageData>;
						public constructor(param0: string, param1: globalAndroid.graphics.Bitmap);
						public getBitmapData(): globalAndroid.graphics.Bitmap;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageUrl(): string;
						public static builder(): com.google.firebase.inappmessaging.model.ImageData.Builder;
					}
					export module ImageData {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageData.Builder>;
							public constructor();
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.model.ImageData.Builder;
							public setBitmapData(param0: globalAndroid.graphics.Bitmap): com.google.firebase.inappmessaging.model.ImageData.Builder;
							public build(): com.google.firebase.inappmessaging.model.ImageData;
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
			export module inappmessaging {
				export module model {
					export class ImageOnlyMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageOnlyMessage>;
						public static builder(): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ImageOnlyMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder>;
							public constructor();
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata): com.google.firebase.inappmessaging.model.ImageOnlyMessage;
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
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
			export module inappmessaging {
				export module model {
					export abstract class InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.InAppMessage>;
						public getBackgroundHexColor(): string;
						public constructor(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: com.google.firebase.inappmessaging.model.MessageType);
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getActionButton(): com.google.firebase.inappmessaging.model.Button;
						public getCampaignName(): string;
						public getIsTestMessage(): java.lang.Boolean;
						public getCampaignMetadata(): com.google.firebase.inappmessaging.model.CampaignMetadata;
						public getMessageType(): com.google.firebase.inappmessaging.model.MessageType;
						public constructor(param0: com.google.firebase.inappmessaging.model.Text, param1: com.google.firebase.inappmessaging.model.Text, param2: string, param3: com.google.firebase.inappmessaging.model.ImageData, param4: com.google.firebase.inappmessaging.model.Button, param5: com.google.firebase.inappmessaging.model.Action, param6: string, param7: string, param8: string, param9: java.lang.Boolean, param10: com.google.firebase.inappmessaging.model.MessageType);
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						public getCampaignId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class MessageType {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.MessageType>;
						public static UNSUPPORTED: com.google.firebase.inappmessaging.model.MessageType;
						public static MODAL: com.google.firebase.inappmessaging.model.MessageType;
						public static IMAGE_ONLY: com.google.firebase.inappmessaging.model.MessageType;
						public static BANNER: com.google.firebase.inappmessaging.model.MessageType;
						public static CARD: com.google.firebase.inappmessaging.model.MessageType;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.model.MessageType;
						public static values(): native.Array<com.google.firebase.inappmessaging.model.MessageType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class ModalMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ModalMessage>;
						public getBackgroundHexColor(): string;
						public static builder(): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ModalMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ModalMessage.Builder>;
							public constructor();
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata): com.google.firebase.inappmessaging.model.ModalMessage;
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
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
			export module inappmessaging {
				export module model {
					export class ProtoMarshallerClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ProtoMarshallerClient>;
						public static decode(param0: com.google.firebase.inappmessaging.MessagesProto.Content, param1: string, param2: string, param3: boolean): com.google.firebase.inappmessaging.model.InAppMessage;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class ProtoMarshallerClient_Factory extends dagger.internal.Factory<com.google.firebase.inappmessaging.model.ProtoMarshallerClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ProtoMarshallerClient_Factory>;
						public constructor();
						public get(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
						public static create(): dagger.internal.Factory<com.google.firebase.inappmessaging.model.ProtoMarshallerClient>;
						public static newProtoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export abstract class RateLimit {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.RateLimit>;
						public limiterKey(): string;
						public constructor();
						public limit(): number;
						public static builder(): com.google.firebase.inappmessaging.model.RateLimit.Builder;
						public timeToLiveMillis(): number;
					}
					export module RateLimit {
						export abstract class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.RateLimit.Builder>;
							public constructor();
							public setLimit(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setTimeToLiveMillis(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public build(): com.google.firebase.inappmessaging.model.RateLimit;
							public setLimiterKey(param0: string): com.google.firebase.inappmessaging.model.RateLimit.Builder;
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
			export module inappmessaging {
				export module model {
					export class Text {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Text>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getHexColor(): string;
						public static builder(): com.google.firebase.inappmessaging.model.Text.Builder;
						public getText(): string;
					}
					export module Text {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Text.Builder>;
							public constructor();
							public setHexColor(param0: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public build(): com.google.firebase.inappmessaging.model.Text;
							public setText(param0: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Text.Builder;
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
			export module inappmessaging {
				export module model {
					export class TriggeredInAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.TriggeredInAppMessage>;
						public getInAppMessage(): com.google.firebase.inappmessaging.model.InAppMessage;
						public constructor(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: string);
						public getTriggeringEvent(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CampaignAnalyticsSummary extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary,com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummaryOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
							public static CAMPAIGN_ID_FIELD_NUMBER: number;
							public static DATE_RANGE_FIELD_NUMBER: number;
							public static TOTAL_IMPRESSIONS_FIELD_NUMBER: number;
							public static TOTAL_CLICKS_FIELD_NUMBER: number;
							public static DAILY_ANALYTICS_SUMMARY_FIELD_NUMBER: number;
							public static TOTAL_CONVERSIONS_FIELD_NUMBER: number;
							public static DAILY_CONVERSION_SUMMARY_FIELD_NUMBER: number;
							public getDailyConversionSummaryOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder;
							public getDailyConversionSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public getTotalImpressions(): number;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
							public getDailyAnalyticsSummaryOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder;
							public getDailyAnalyticsSummaryCount(): number;
							public getTotalClicks(): number;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public getSerializedSize(): number;
							public hasDateRange(): boolean;
							public getDailyAnalyticsSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
							public getCampaignId(): string;
							public getDailyAnalyticsSummaryOrBuilderList(): java.util.List<any>;
							public getDateRange(): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public getDailyAnalyticsSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public getDailyConversionSummaryOrBuilderList(): java.util.List<any>;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
							public getDailyConversionSummaryCount(): number;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public getDailyConversionSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
							public getTotalConversions(): number;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
						}
						export module CampaignAnalyticsSummary {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary,com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummaryOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder>;
								public addAllDailyAnalyticsSummary(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public clearTotalConversions(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDailyAnalyticsSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
								public setDateRange(param0: com.google.internal.firebase.inappmessaging.v1.DateRange): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyAnalyticsSummary(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDailyAnalyticsSummaryCount(): number;
								public addDailyAnalyticsSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyConversionSummary(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDailyAnalyticsSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
								public clearDailyAnalyticsSummary(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyConversionSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyAnalyticsSummary(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public setDailyConversionSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyConversionSummary(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getCampaignId(): string;
								public getTotalConversions(): number;
								public setDailyAnalyticsSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDailyConversionSummaryCount(): number;
								public setDateRange(param0: com.google.internal.firebase.inappmessaging.v1.DateRange.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getTotalImpressions(): number;
								public clearDailyConversionSummary(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public setTotalConversions(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addDailyConversionSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public clearDateRange(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public hasDateRange(): boolean;
								public addDailyAnalyticsSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public mergeDateRange(param0: com.google.internal.firebase.inappmessaging.v1.DateRange): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public removeDailyAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public clearTotalImpressions(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public addAllDailyConversionSummary(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public setDailyAnalyticsSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDailyConversionSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
								public getDailyConversionSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
								public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getDateRange(): com.google.internal.firebase.inappmessaging.v1.DateRange;
								public clearTotalClicks(): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public removeDailyConversionSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public setTotalImpressions(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public setTotalClicks(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public setDailyConversionSummary(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
								public getTotalClicks(): number;
								public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CampaignAnalyticsSummaryOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummaryOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCampaignId(): string;
								getCampaignIdBytes(): com.google.protobuf.ByteString;
								hasDateRange(): boolean;
								getDateRange(): com.google.internal.firebase.inappmessaging.v1.DateRange;
								getTotalImpressions(): number;
								getTotalClicks(): number;
								getDailyAnalyticsSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
								getDailyAnalyticsSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
								getDailyAnalyticsSummaryCount(): number;
								getTotalConversions(): number;
								getDailyConversionSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
								getDailyConversionSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
								getDailyConversionSummaryCount(): number;
							});
							public constructor();
							public getDailyConversionSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
							public getDateRange(): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public getDailyAnalyticsSummary(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
							public getDailyConversionSummaryCount(): number;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
							public getTotalImpressions(): number;
							public getDailyAnalyticsSummaryCount(): number;
							public getTotalClicks(): number;
							public hasDateRange(): boolean;
							public getDailyConversionSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
							public getDailyAnalyticsSummaryList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
							public getCampaignId(): string;
							public getTotalConversions(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CampaignProto {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module CampaignProto {
							export class Campaign extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.CampaignOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public static PROJECT_NUMBER_FIELD_NUMBER: number;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static STATE_FIELD_NUMBER: number;
								public static DISPLAY_NAME_FIELD_NUMBER: number;
								public static DESCRIPTION_FIELD_NUMBER: number;
								public static SCHEDULED_START_TIME_FIELD_NUMBER: number;
								public static SCHEDULED_END_TIME_FIELD_NUMBER: number;
								public static TARGETING_CONDITION_FIELD_NUMBER: number;
								public static TRIGGERING_CONDITIONS_FIELD_NUMBER: number;
								public static PRIORITY_FIELD_NUMBER: number;
								public static CONTENT_FIELD_NUMBER: number;
								public static CONVERSION_EVENT_FIELD_NUMBER: number;
								public static SCHEDULED_START_TIMESTAMP_FIELD_NUMBER: number;
								public static SCHEDULED_END_TIMESTAMP_FIELD_NUMBER: number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getConversionEventCount(): number;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
								public getCampaignId(): string;
								public getConversionEventOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder;
								public hasContent(): boolean;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getScheduledStartTimestamp(): com.google.protobuf.Timestamp;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public hasPriority(): boolean;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public hasTargetingCondition(): boolean;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getScheduledEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public getScheduledStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasScheduledEndTime(): boolean;
								public getProjectNumber(): string;
								public getSerializedSize(): number;
								public getTriggeringConditionsOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder;
								public getConversionEvent(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getConversionEventList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
								public hasScheduledStartTimestamp(): boolean;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getScheduledEndTimestamp(): com.google.protobuf.Timestamp;
								public getTriggeringConditionsCount(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getDescriptionBytes(): com.google.protobuf.ByteString;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public hasScheduledStartTime(): boolean;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getStateValue(): number;
								public getDisplayName(): string;
								public getTriggeringConditionsOrBuilderList(): java.util.List<any>;
								public hasScheduledEndTimestamp(): boolean;
								public getConversionEventOrBuilderList(): java.util.List<any>;
								public getDisplayNameBytes(): com.google.protobuf.ByteString;
								public getState(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
								public getDescription(): string;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							}
							export module Campaign {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.CampaignOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder>;
									public getScheduledStartTimestamp(): com.google.protobuf.Timestamp;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public getDisplayNameBytes(): com.google.protobuf.ByteString;
									public clearDescription(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearConversionEvent(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getDescriptionBytes(): com.google.protobuf.ByteString;
									public clearScheduledEndTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearTargetingCondition(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getStateValue(): number;
									public removeConversionEvent(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearScheduledStartTimestamp(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public hasScheduledEndTime(): boolean;
									public addConversionEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergePriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getDescription(): string;
									public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									public hasScheduledStartTimestamp(): boolean;
									public setScheduledEndTimestamp(param0: com.google.protobuf.Timestamp.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getScheduledEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public clearTriggeringConditions(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public removeTriggeringConditions(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledStartTimestamp(param0: com.google.protobuf.Timestamp.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setStateValue(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledStartTimestamp(param0: com.google.protobuf.Timestamp): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getScheduledStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public getState(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
									public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearScheduledEndTimestamp(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public hasScheduledStartTime(): boolean;
									public setScheduledEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getScheduledEndTimestamp(): com.google.protobuf.Timestamp;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public addAllConversionEvent(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getConversionEvent(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
									public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearState(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getDisplayName(): string;
									public setDisplayNameBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeScheduledEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getProjectNumber(): string;
									public getProjectNumberBytes(): com.google.protobuf.ByteString;
									public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									public setConversionEvent(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearScheduledStartTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public hasContent(): boolean;
									public addConversionEvent(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public addAllTriggeringConditions(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setState(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public hasTargetingCondition(): boolean;
									public addConversionEvent(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getCampaignId(): string;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setDescriptionBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearDisplayName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public clearContent(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getConversionEventList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
									public hasPriority(): boolean;
									public setDisplayName(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getConversionEventCount(): number;
									public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeScheduledStartTimestamp(param0: com.google.protobuf.Timestamp): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setScheduledEndTimestamp(param0: com.google.protobuf.Timestamp): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									public getTriggeringConditionsCount(): number;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public addConversionEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeScheduledEndTimestamp(param0: com.google.protobuf.Timestamp): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setDescription(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public mergeScheduledStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setConversionEvent(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public setTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder;
									public hasScheduledEndTimestamp(): boolean;
								}
							}
							export class CampaignOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.CampaignOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$CampaignOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getProjectNumber(): string;
									getProjectNumberBytes(): com.google.protobuf.ByteString;
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									getStateValue(): number;
									getState(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
									getDisplayName(): string;
									getDisplayNameBytes(): com.google.protobuf.ByteString;
									getDescription(): string;
									getDescriptionBytes(): com.google.protobuf.ByteString;
									hasScheduledStartTime(): boolean;
									getScheduledStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									hasScheduledEndTime(): boolean;
									getScheduledEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									hasTargetingCondition(): boolean;
									getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
									getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									getTriggeringConditionsCount(): number;
									hasPriority(): boolean;
									getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									hasContent(): boolean;
									getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									getConversionEventList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
									getConversionEvent(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
									getConversionEventCount(): number;
									hasScheduledStartTimestamp(): boolean;
									getScheduledStartTimestamp(): com.google.protobuf.Timestamp;
									hasScheduledEndTimestamp(): boolean;
									getScheduledEndTimestamp(): com.google.protobuf.Timestamp;
								});
								public constructor();
								public hasScheduledStartTimestamp(): boolean;
								public getConversionEventCount(): number;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getScheduledEndTimestamp(): com.google.protobuf.Timestamp;
								public getTriggeringConditionsCount(): number;
								public getCampaignId(): string;
								public getDescriptionBytes(): com.google.protobuf.ByteString;
								public hasContent(): boolean;
								public getScheduledStartTimestamp(): com.google.protobuf.Timestamp;
								public hasScheduledStartTime(): boolean;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public hasPriority(): boolean;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public getStateValue(): number;
								public getDisplayName(): string;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public hasTargetingCondition(): boolean;
								public hasScheduledEndTimestamp(): boolean;
								public getScheduledEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public getDisplayNameBytes(): com.google.protobuf.ByteString;
								public getScheduledStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasScheduledEndTime(): boolean;
								public getProjectNumber(): string;
								public getState(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
								public getDescription(): string;
								public getConversionEvent(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
								public getConversionEventList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
							}
							export class ExperimentalCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static EXPERIMENT_PAYLOAD_FIELD_NUMBER: number;
								public getExperimentPayload(): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignId(): string;
								public hasExperimentPayload(): boolean;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
							}
							export module ExperimentalCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder>;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getExperimentPayload(): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
									public setExperimentPayload(param0: developers.mobile.abt.FirebaseAbt.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignId(): string;
									public clearExperimentPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setExperimentPayload(param0: developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public hasExperimentPayload(): boolean;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public mergeExperimentPayload(param0: developers.mobile.abt.FirebaseAbt.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								}
							}
							export class ExperimentalCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ExperimentalCampaignPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									hasExperimentPayload(): boolean;
									getExperimentPayload(): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
								});
								public constructor();
								public getExperimentPayload(): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public hasExperimentPayload(): boolean;
							}
							export class ExperimentalCampaignRollout extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static EXPERIMENT_ID_FIELD_NUMBER: number;
								public static SELECTED_VARIANT_INDEX_FIELD_NUMBER: number;
								public static PRIORITY_FIELD_NUMBER: number;
								public static START_TIME_FIELD_NUMBER: number;
								public static END_TIME_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public getExperimentId(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public hasEndTime(): boolean;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public hasStartTime(): boolean;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public hasPriority(): boolean;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getSerializedSize(): number;
								public getSelectedVariantIndex(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
							}
							export module ExperimentalCampaignRollout {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder>;
									public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public setEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public hasEndTime(): boolean;
									public setEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getExperimentId(): string;
									public clearSelectedVariantIndex(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public clearExperimentId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setSelectedVariantIndex(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergePriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasPriority(): boolean;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getExperimentIdBytes(): com.google.protobuf.ByteString;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getSelectedVariantIndex(): number;
									public clearStartTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasStartTime(): boolean;
									public clearEndTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								}
							}
							export class ExperimentalCampaignRolloutOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ExperimentalCampaignRolloutOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExperimentId(): string;
									getExperimentIdBytes(): com.google.protobuf.ByteString;
									getSelectedVariantIndex(): number;
									hasPriority(): boolean;
									getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									hasStartTime(): boolean;
									getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									hasEndTime(): boolean;
									getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								});
								public constructor();
								public getExperimentId(): string;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasPriority(): boolean;
								public hasEndTime(): boolean;
								public getSelectedVariantIndex(): number;
								public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasStartTime(): boolean;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
							}
							export class ThickContent extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public static VANILLA_PAYLOAD_FIELD_NUMBER: number;
								public static EXPERIMENTAL_PAYLOAD_FIELD_NUMBER: number;
								public static CONTENT_FIELD_NUMBER: number;
								public static PRIORITY_FIELD_NUMBER: number;
								public static TRIGGERING_CONDITIONS_FIELD_NUMBER: number;
								public static IS_TEST_CAMPAIGN_FIELD_NUMBER: number;
								public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								public getIsTestCampaign(): boolean;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditionsCount(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public hasContent(): boolean;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public hasPriority(): boolean;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public getTriggeringConditionsOrBuilderList(): java.util.List<any>;
								public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getSerializedSize(): number;
								public getTriggeringConditionsOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
							}
							export module ThickContent {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder>;
									public mergeVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setIsTestCampaign(param0: boolean): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									public removeTriggeringConditions(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public hasContent(): boolean;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergePriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public hasPriority(): boolean;
									public setExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
									public clearContent(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getIsTestCampaign(): boolean;
									public addAllTriggeringConditions(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									public clearVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getTriggeringConditionsCount(): number;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearTriggeringConditions(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearIsTestCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								}
								export class PayloadCase extends com.google.protobuf.Internal.EnumLite {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
									public static VANILLA_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static EXPERIMENTAL_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static PAYLOAD_NOT_SET: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static valueOf(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public getNumber(): number;
									public static valueOf(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static forNumber(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static values(): native.Array<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
								}
							}
							export class ThickContentOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ThickContentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
									getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
									hasContent(): boolean;
									getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									hasPriority(): boolean;
									getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									getTriggeringConditionsCount(): number;
									getIsTestCampaign(): boolean;
									getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								});
								public constructor();
								public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public hasContent(): boolean;
								public hasPriority(): boolean;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								public getIsTestCampaign(): boolean;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getTriggeringConditionsCount(): number;
							}
							export class VanillaCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static EXPERIMENTAL_CAMPAIGN_ID_FIELD_NUMBER: number;
								public static CAMPAIGN_START_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_END_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_NAME_FIELD_NUMBER: number;
								public getCampaignEndTimeMillis(): number;
								public getCampaignName(): string;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getExperimentalCampaignId(): string;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								public getCampaignStartTimeMillis(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public getSerializedSize(): number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
							}
							export module VanillaCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder>;
									public setCampaignStartTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignStartTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignEndTimeMillis(): number;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignEndTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearExperimentalCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignNameBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignName(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignId(): string;
									public setExperimentalCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignNameBytes(): com.google.protobuf.ByteString;
									public setExperimentalCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
									public getCampaignName(): string;
									public getExperimentalCampaignId(): string;
									public getCampaignStartTimeMillis(): number;
									public clearCampaignEndTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								}
							}
							export class VanillaCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$VanillaCampaignPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									getExperimentalCampaignId(): string;
									getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
									getCampaignStartTimeMillis(): number;
									getCampaignEndTimeMillis(): number;
									getCampaignName(): string;
									getCampaignNameBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getCampaignEndTimeMillis(): number;
								public getCampaignStartTimeMillis(): number;
								public getCampaignName(): string;
								public getExperimentalCampaignId(): string;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CreateCampaignRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest>;
							public static CAMPAIGN_FIELD_NUMBER: number;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest>;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public getSerializedSize(): number;
							public hasCampaign(): boolean;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest;
						}
						export module CreateCampaignRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder>;
								public clearCampaign(): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
								public hasCampaign(): boolean;
								public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public setCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
								public mergeCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
								public setCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CreateCampaignRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasCampaign(): boolean;
								getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							});
							public constructor();
							public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public hasCampaign(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class DateRange extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.DateRange,com.google.internal.firebase.inappmessaging.v1.DateRange.Builder> implements com.google.internal.firebase.inappmessaging.v1.DateRangeOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DateRange>;
							public static START_DATE_MS_FIELD_NUMBER: number;
							public static END_DATE_MS_FIELD_NUMBER: number;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public getStartDateMs(): number;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public getEndDateMs(): number;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.DateRange>;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.DateRange): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public getSerializedSize(): number;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DateRange;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DateRange;
						}
						export module DateRange {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.DateRange,com.google.internal.firebase.inappmessaging.v1.DateRange.Builder> implements com.google.internal.firebase.inappmessaging.v1.DateRangeOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DateRange.Builder>;
								public setStartDateMs(param0: number): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
								public getEndDateMs(): number;
								public clearEndDateMs(): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
								public setEndDateMs(param0: number): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
								public getStartDateMs(): number;
								public clearStartDateMs(): com.google.internal.firebase.inappmessaging.v1.DateRange.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class DateRangeOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DateRangeOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.DateRangeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStartDateMs(): number;
								getEndDateMs(): number;
							});
							public constructor();
							public getStartDateMs(): number;
							public getEndDateMs(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class DeleteCampaignRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest,com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest>;
							public static PROJECT_NUMBER_FIELD_NUMBER: number;
							public static CAMPAIGN_ID_FIELD_NUMBER: number;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
							public getProjectNumber(): string;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest>;
							public getSerializedSize(): number;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
							public getCampaignId(): string;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest;
						}
						export module DeleteCampaignRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest,com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder>;
								public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public getProjectNumber(): string;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest.Builder;
								public getCampaignId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class DeleteCampaignRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProjectNumber(): string;
								getProjectNumberBytes(): com.google.protobuf.ByteString;
								getCampaignId(): string;
								getCampaignIdBytes(): com.google.protobuf.ByteString;
							});
							public constructor();
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getProjectNumber(): string;
							public getCampaignId(): string;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class FiamCampaignServiceProto {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.FiamCampaignServiceProto>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class GetConditionEstimationRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest>;
							public static PROJECT_NUMBER_FIELD_NUMBER: number;
							public static TARGETING_CONDITION_FIELD_NUMBER: number;
							public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest>;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public getProjectNumber(): string;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
							public getSerializedSize(): number;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
							public hasTargetingCondition(): boolean;
						}
						export module GetConditionEstimationRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder>;
								public clearTargetingCondition(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public getProjectNumber(): string;
								public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
								public setTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public setTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition.Builder): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public mergeTargetingCondition(param0: com.google.developers.mobile.targeting.proto.Conditions.Condition): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
								public hasTargetingCondition(): boolean;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class GetConditionEstimationRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProjectNumber(): string;
								getProjectNumberBytes(): com.google.protobuf.ByteString;
								hasTargetingCondition(): boolean;
								getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							});
							public constructor();
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getTargetingCondition(): com.google.developers.mobile.targeting.proto.Conditions.Condition;
							public getProjectNumber(): string;
							public hasTargetingCondition(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class GetConditionEstimationResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponseOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>;
							public static ESTIMATION_SIZE_FIELD_NUMBER: number;
							public static ESTIMATION_PERCENTAGE_FIELD_NUMBER: number;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>;
							public getEstimationPercentage(): number;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getSerializedSize(): number;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
							public getEstimationSize(): number;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
						}
						export module GetConditionEstimationResponse {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponseOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder>;
								public clearEstimationSize(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
								public getEstimationSize(): number;
								public setEstimationPercentage(param0: number): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
								public setEstimationSize(param0: number): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
								public clearEstimationPercentage(): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse.Builder;
								public getEstimationPercentage(): number;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class GetConditionEstimationResponseOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponseOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getEstimationSize(): number;
								getEstimationPercentage(): number;
							});
							public constructor();
							public getEstimationPercentage(): number;
							public getEstimationSize(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class InAppMessagingCampaignManagementGrpc {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc>;
							public static SERVICE_NAME: string;
							public static METHOD_CREATE_CAMPAIGN: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public static METHOD_UPDATE_CAMPAIGN: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public static METHOD_DELETE_CAMPAIGN: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest,com.google.protobuf.Empty>;
							public static METHOD_LIST_CAMPAIGNS: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>;
							public static METHOD_ROLLOUT_EXPERIMENTAL_CAMPAIGN: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>;
							public static METHOD_GET_CONDITION_ESTIMATION: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>;
							public static METHOD_TEST_CAMPAIGN_ON_DEVICE: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest,com.google.protobuf.Empty>;
							public static newStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementStub;
							public static getDeleteCampaignMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest,com.google.protobuf.Empty>;
							public static getTestCampaignOnDeviceMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest,com.google.protobuf.Empty>;
							public static getServiceDescriptor(): io.grpc.ServiceDescriptor;
							public static newBlockingStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementBlockingStub;
							public static getUpdateCampaignMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public static getRolloutExperimentalCampaignMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>;
							public static getListCampaignsMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>;
							public static getGetConditionEstimationMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest,com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>;
							public static newFutureStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementFutureStub;
							public static getCreateCampaignMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
						}
						export module InAppMessagingCampaignManagementGrpc {
							export class InAppMessagingCampaignManagementBlockingStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementBlockingStub> {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementBlockingStub>;
								public updateCampaign(param0: com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public rolloutExperimentalCampaign(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
								public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementBlockingStub;
								public testCampaignOnDevice(param0: com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest): com.google.protobuf.Empty;
								public createCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public getConditionEstimation(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest): com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse;
								public deleteCampaign(param0: com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest): com.google.protobuf.Empty;
								public listCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							}
							export class InAppMessagingCampaignManagementFutureStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementFutureStub> {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementFutureStub>;
								public updateCampaign(param0: com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public deleteCampaign(param0: com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest): com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty>;
								public getConditionEstimation(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>;
								public createCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public listCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>;
								public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementFutureStub;
								public rolloutExperimentalCampaign(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>;
								public testCampaignOnDevice(param0: com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest): com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty>;
							}
							export abstract class InAppMessagingCampaignManagementImplBase {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementImplBase>;
								public bindService(): io.grpc.ServerServiceDefinition;
								public getConditionEstimation(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>): void;
								public createCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>): void;
								public updateCampaign(param0: com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>): void;
								public listCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>): void;
								public constructor();
								public deleteCampaign(param0: com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
								public rolloutExperimentalCampaign(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>): void;
								public testCampaignOnDevice(param0: com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
							}
							export class InAppMessagingCampaignManagementStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementStub> {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementStub>;
								public getConditionEstimation(param0: com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.GetConditionEstimationResponse>): void;
								public createCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CreateCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>): void;
								public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.InAppMessagingCampaignManagementStub;
								public updateCampaign(param0: com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>): void;
								public listCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>): void;
								public deleteCampaign(param0: com.google.internal.firebase.inappmessaging.v1.DeleteCampaignRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
								public rolloutExperimentalCampaign(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>): void;
								public testCampaignOnDevice(param0: com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
							}
							export class MethodHandlers<Req, Resp>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.MethodHandlers<any,any>>;
								public invoke(param0: Req, param1: io.grpc.stub.StreamObserver<Resp>): void;
								public invoke(param0: io.grpc.stub.StreamObserver<Resp>): io.grpc.stub.StreamObserver<Req>;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class ListCampaignsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest>;
							public static PROJECT_NUMBER_FIELD_NUMBER: number;
							public static REQUESTED_STATES_FIELD_NUMBER: number;
							public getRequestedStatesValueList(): java.util.List<java.lang.Integer>;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public getRequestedStates(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
							public getProjectNumber(): string;
							public getRequestedStatesList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest>;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public getRequestedStatesCount(): number;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
							public getSerializedSize(): number;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
							public getRequestedStatesValue(param0: number): number;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest;
						}
						export module ListCampaignsRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder>;
								public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public getRequestedStatesCount(): number;
								public clearRequestedStates(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public getRequestedStates(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
								public getRequestedStatesValue(param0: number): number;
								public addRequestedStates(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public getRequestedStatesValueList(): java.util.List<java.lang.Integer>;
								public addAllRequestedStates(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public addAllRequestedStatesValue(param0: java.lang.Iterable<java.lang.Integer>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public addRequestedStatesValue(param0: number): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public getProjectNumber(): string;
								public setRequestedStates(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public setRequestedStatesValue(param0: number, param1: number): com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequest.Builder;
								public getRequestedStatesList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class ListCampaignsRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.ListCampaignsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProjectNumber(): string;
								getProjectNumberBytes(): com.google.protobuf.ByteString;
								getRequestedStatesList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
								getRequestedStatesCount(): number;
								getRequestedStates(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
								getRequestedStatesValueList(): java.util.List<java.lang.Integer>;
								getRequestedStatesValue(param0: number): number;
							});
							public constructor();
							public getRequestedStatesValueList(): java.util.List<java.lang.Integer>;
							public getRequestedStatesCount(): number;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getRequestedStates(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
							public getRequestedStatesValue(param0: number): number;
							public getProjectNumber(): string;
							public getRequestedStatesList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class ListCampaignsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponseOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>;
							public static CAMPAIGNS_FIELD_NUMBER: number;
							public static CAMPAIGN_ANALYTICS_SUMMARY_FIELD_NUMBER: number;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse>;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public getCampaignAnalyticsSummaryList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
							public getCampaignAnalyticsSummaryOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummaryOrBuilder;
							public getCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public getSerializedSize(): number;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public getCampaignAnalyticsSummaryOrBuilderList(): java.util.List<any>;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public getCampaignsOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.CampaignOrBuilder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public getCampaignAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public getCampaignsOrBuilderList(): java.util.List<any>;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
							public getCampaignsCount(): number;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
							public getCampaignAnalyticsSummaryCount(): number;
							public getCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse;
						}
						export module ListCampaignsResponse {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponseOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder>;
								public addCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public clearCampaigns(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addCampaignAnalyticsSummary(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addAllCampaignAnalyticsSummary(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public setCampaignAnalyticsSummary(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public getCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public getCampaignAnalyticsSummaryCount(): number;
								public addAllCampaigns(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public getCampaignAnalyticsSummaryList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
								public removeCampaignAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public getCampaignsCount(): number;
								public clearCampaignAnalyticsSummary(): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public setCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public setCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public getCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public addCampaignAnalyticsSummary(param0: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public addCampaignAnalyticsSummary(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public removeCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public setCampaignAnalyticsSummary(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
								public getCampaignAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
								public addCampaignAnalyticsSummary(param0: com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary.Builder): com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponse.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class ListCampaignsResponseOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponseOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.ListCampaignsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								getCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								getCampaignsCount(): number;
								getCampaignAnalyticsSummaryList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
								getCampaignAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
								getCampaignAnalyticsSummaryCount(): number;
							});
							public constructor();
							public getCampaignAnalyticsSummaryList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary>;
							public getCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public getCampaignsCount(): number;
							public getCampaignAnalyticsSummaryCount(): number;
							public getCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public getCampaignAnalyticsSummary(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignAnalyticsSummary;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class RolloutExperimentRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest>;
							public static PROJECT_NUMBER_FIELD_NUMBER: number;
							public static EXPERIMENT_ID_FIELD_NUMBER: number;
							public static ROLLOUT_DETAILS_FIELD_NUMBER: number;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
							public getProjectNumber(): string;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public hasRolloutDetails(): boolean;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getRolloutDetails(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
							public getExperimentId(): string;
							public getSerializedSize(): number;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest>;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest;
						}
						export module RolloutExperimentRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder>;
								public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public setRolloutDetails(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public getRolloutDetails(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public clearExperimentId(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public hasRolloutDetails(): boolean;
								public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public setExperimentId(param0: string): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public getExperimentId(): string;
								public setRolloutDetails(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public mergeRolloutDetails(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public getProjectNumber(): string;
								public clearRolloutDetails(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public setExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class RolloutExperimentRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.RolloutExperimentRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProjectNumber(): string;
								getProjectNumberBytes(): com.google.protobuf.ByteString;
								getExperimentId(): string;
								getExperimentIdBytes(): com.google.protobuf.ByteString;
								hasRolloutDetails(): boolean;
								getRolloutDetails(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
							});
							public constructor();
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getRolloutDetails(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
							public getExperimentId(): string;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public getProjectNumber(): string;
							public hasRolloutDetails(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class RolloutExperimentResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponseOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>;
							public static CAMPAIGN_FIELD_NUMBER: number;
							public getCampaignCount(): number;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public getCampaignOrBuilderList(): java.util.List<any>;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse>;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getCampaignList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
							public getCampaignOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.CampaignOrBuilder;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public getCampaign(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public getSerializedSize(): number;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse;
						}
						export module RolloutExperimentResponse {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse,com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponseOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder>;
								public addCampaign(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public removeCampaign(param0: number): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public addAllCampaign(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public getCampaignList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								public addCampaign(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public getCampaignCount(): number;
								public setCampaign(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public addCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public setCampaign(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public clearCampaign(): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public addCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponse.Builder;
								public getCampaign(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class RolloutExperimentResponseOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponseOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.RolloutExperimentResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCampaignList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
								getCampaign(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								getCampaignCount(): number;
							});
							public constructor();
							public getCampaignCount(): number;
							public getCampaign(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public getCampaignList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class TestCampaignOnDeviceRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest,com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest>;
							public static PROJECT_NUMBER_FIELD_NUMBER: number;
							public static CAMPAIGN_ID_FIELD_NUMBER: number;
							public static INSTANCE_IDS_FIELD_NUMBER: number;
							public getProjectNumber(): string;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getInstanceIdsList(): java.util.List<string>;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
							public getSerializedSize(): number;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
							public getCampaignId(): string;
							public getInstanceIds(param0: number): string;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
							public getInstanceIdsCount(): number;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public getInstanceIdsBytes(param0: number): com.google.protobuf.ByteString;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest>;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest;
						}
						export module TestCampaignOnDeviceRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest,com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder>;
								public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public getInstanceIds(param0: number): string;
								public getInstanceIdsBytes(param0: number): com.google.protobuf.ByteString;
								public getInstanceIdsCount(): number;
								public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public setInstanceIds(param0: number, param1: string): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public addInstanceIdsBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public getInstanceIdsList(): java.util.List<string>;
								public clearInstanceIds(): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public getCampaignId(): string;
								public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public addInstanceIds(param0: string): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public getProjectNumber(): string;
								public addAllInstanceIds(param0: java.lang.Iterable<string>): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class TestCampaignOnDeviceRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.TestCampaignOnDeviceRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getProjectNumber(): string;
								getProjectNumberBytes(): com.google.protobuf.ByteString;
								getCampaignId(): string;
								getCampaignIdBytes(): com.google.protobuf.ByteString;
								getInstanceIdsList(): java.util.List<string>;
								getInstanceIdsCount(): number;
								getInstanceIds(param0: number): string;
								getInstanceIdsBytes(param0: number): com.google.protobuf.ByteString;
							});
							public constructor();
							public getInstanceIdsBytes(param0: number): com.google.protobuf.ByteString;
							public getProjectNumberBytes(): com.google.protobuf.ByteString;
							public getInstanceIds(param0: number): string;
							public getProjectNumber(): string;
							public getCampaignId(): string;
							public getCampaignIdBytes(): com.google.protobuf.ByteString;
							public getInstanceIdsCount(): number;
							public getInstanceIdsList(): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class UpdateCampaignRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequestOrBuilder  {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest>;
							public static CAMPAIGN_FIELD_NUMBER: number;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest>;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
							public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
							public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public getSerializedSize(): number;
							public hasCampaign(): boolean;
							public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
							public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest;
						}
						export module UpdateCampaignRequest {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest,com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder>;
								public clearCampaign(): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
								public setCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign.Builder): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
								public hasCampaign(): boolean;
								public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
								public mergeCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
								public setCampaign(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign): com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class UpdateCampaignRequestOrBuilder {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequestOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.UpdateCampaignRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasCampaign(): boolean;
								getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							});
							public constructor();
							public getCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.Campaign;
							public hasCampaign(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpression extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static IMPRESSION_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getImpressionTimestampMillis(): number;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getCampaignId(): string;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
							}
							export module CampaignImpression {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder>;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getImpressionTimestampMillis(): number;
									public setImpressionTimestampMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getCampaignId(): string;
									public clearImpressionTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionList extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
							}
							export module CampaignImpressionList {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder>;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public removeAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAllAlreadySeenCampaigns(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionListOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									getAlreadySeenCampaignsCount(): number;
								});
								public constructor();
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									getImpressionTimestampMillis(): number;
								});
								public constructor();
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getImpressionTimestampMillis(): number;
								public getCampaignId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo,com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public static GMP_APP_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_TOKEN_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getAppInstanceId(): string;
								public getAppInstanceIdToken(): string;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public getSerializedSize(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getGmpAppId(): string;
							}
							export module ClientAppInfo {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo,com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder>;
									public clearGmpAppId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdToken(): string;
									public setAppInstanceIdTokenBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceIdToken(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public clearAppInstanceId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									public setAppInstanceIdToken(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getGmpAppId(): string;
									public getAppInstanceId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class ClientAppInfoOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getGmpAppId(): string;
									getGmpAppIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceId(): string;
									getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceIdToken(): string;
									getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceId(): string;
								public getAppInstanceIdToken(): string;
								public getGmpAppId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public static PROJECT_NUMBER_FIELD_NUMBER: number;
								public static REQUESTING_CLIENT_APP_FIELD_NUMBER: number;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number;
								public static CLIENT_SIGNALS_FIELD_NUMBER: number;
								public hasRequestingClientApp(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getProjectNumber(): string;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public hasClientSignals(): boolean;
							}
							export module FetchEligibleCampaignsRequest {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder>;
									public mergeRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumber(): string;
									public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumberBytes(): com.google.protobuf.ByteString;
									public removeAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
									public setClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public mergeClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasClientSignals(): boolean;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasRequestingClientApp(): boolean;
									public setRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public setRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAllAlreadySeenCampaigns(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearClientSignals(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public clearRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsRequestOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getProjectNumber(): string;
									getProjectNumberBytes(): com.google.protobuf.ByteString;
									hasRequestingClientApp(): boolean;
									getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
									getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									getAlreadySeenCampaignsCount(): number;
									hasClientSignals(): boolean;
									getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								});
								public constructor();
								public getAlreadySeenCampaignsCount(): number;
								public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getProjectNumber(): string;
								public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public hasRequestingClientApp(): boolean;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public hasClientSignals(): boolean;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static MESSAGES_FIELD_NUMBER: number;
								public static EXPIRATION_EPOCH_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilderList(): java.util.List<any>;
								public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public getSerializedSize(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesCount(): number;
								public getExpirationEpochTimestampMillis(): number;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
							}
							export module FetchEligibleCampaignsResponse {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder>;
									public clearMessages(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
									public clearExpirationEpochTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									public removeMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addAllMessages(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setExpirationEpochTimestampMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getExpirationEpochTimestampMillis(): number;
									public addMessages(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesCount(): number;
									public setMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsResponseOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
									getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									getMessagesCount(): number;
									getExpirationEpochTimestampMillis(): number;
								});
								public constructor();
								public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public getMessagesCount(): number;
								public getExpirationEpochTimestampMillis(): number;
								public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FiamFetchService {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FiamFetchService>;
								public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class InAppMessagingSdkServingGrpc {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc>;
								public static SERVICE_NAME: string;
								public static METHOD_FETCH_ELIGIBLE_CAMPAIGNS: io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static getServiceDescriptor(): io.grpc.ServiceDescriptor;
								public static getFetchEligibleCampaignsMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static newStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
								public static newFutureStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
								public static newBlockingStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
							}
							export module InAppMessagingSdkServingGrpc {
								export class InAppMessagingSdkServingBlockingStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
								}
								export class InAppMessagingSdkServingFutureStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub>;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								}
								export abstract class InAppMessagingSdkServingImplBase {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingImplBase>;
									public constructor();
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
									public bindService(): io.grpc.ServerServiceDefinition;
								}
								export class InAppMessagingSdkServingStub extends io.grpc.stub.AbstractStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub>;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
								}
								export class MethodHandlers<Req, Resp>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers<any,any>>;
									public invoke(param0: Req, param1: io.grpc.stub.StreamObserver<Resp>): void;
									public invoke(param0: io.grpc.stub.StreamObserver<Resp>): io.grpc.stub.StreamObserver<Req>;
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
		export module protos {
			export module datapol {
				export class RetentionAnnotations {
					public static class: java.lang.Class<com.google.protos.datapol.RetentionAnnotations>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module RetentionAnnotations {
					export class RetentionSpec extends com.google.protobuf.GeneratedMessageLite<com.google.protos.datapol.RetentionAnnotations.RetentionSpec,com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder> implements com.google.protos.datapol.RetentionAnnotations.RetentionSpecOrBuilder  {
						public static class: java.lang.Class<com.google.protos.datapol.RetentionAnnotations.RetentionSpec>;
						public static DESIRED_RETENTION_FIELD_NUMBER: number;
						public static CONTEXT_FIELD_NUMBER: number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public getDesiredRetention(): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public hasContext(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getContext(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static parser(): com.google.protobuf.Parser<com.google.protos.datapol.RetentionAnnotations.RetentionSpec>;
						public static parseFrom(param0: native.Array<number>): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static newBuilder(): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
						public getContextBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static newBuilder(param0: com.google.protos.datapol.RetentionAnnotations.RetentionSpec): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
						public static getDefaultInstance(): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public hasDesiredRetention(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.RetentionAnnotations.RetentionSpec;
					}
					export module RetentionSpec {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.protos.datapol.RetentionAnnotations.RetentionSpec,com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder> implements com.google.protos.datapol.RetentionAnnotations.RetentionSpecOrBuilder  {
							public static class: java.lang.Class<com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder>;
							public getDesiredRetention(): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
							public setDesiredRetention(param0: com.google.protos.datapol.RetentionAnnotations.RetentionTag): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
							public getContext(): string;
							public clearContext(): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
							public setContextBytes(param0: com.google.protobuf.ByteString): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
							public hasDesiredRetention(): boolean;
							public setContext(param0: string): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
							public clearDesiredRetention(): com.google.protos.datapol.RetentionAnnotations.RetentionSpec.Builder;
							public hasContext(): boolean;
							public getContextBytes(): com.google.protobuf.ByteString;
						}
					}
					export class RetentionSpecOrBuilder {
						public static class: java.lang.Class<com.google.protos.datapol.RetentionAnnotations.RetentionSpecOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.protos.datapol.RetentionAnnotations$RetentionSpecOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasDesiredRetention(): boolean;
							getDesiredRetention(): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
							hasContext(): boolean;
							getContext(): string;
							getContextBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getDesiredRetention(): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public hasContext(): boolean;
						public getContextBytes(): com.google.protobuf.ByteString;
						public getContext(): string;
						public hasDesiredRetention(): boolean;
					}
					export class RetentionTag extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.protos.datapol.RetentionAnnotations.RetentionTag>;
						public static RT_DEFAULT: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_OBSOLETE: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_WEEK: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_MONTH: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_5_WEEKS: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_QUARTER: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_HALF_A_YEAR: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_YEAR: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_16_MONTHS: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_YEAR_AND_A_HALF: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_2_YEARS: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_3_YEARS: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_ARCHIVAL: com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static RT_DEFAULT_VALUE: number;
						public static RT_OBSOLETE_VALUE: number;
						public static RT_WEEK_VALUE: number;
						public static RT_MONTH_VALUE: number;
						public static RT_5_WEEKS_VALUE: number;
						public static RT_QUARTER_VALUE: number;
						public static RT_HALF_A_YEAR_VALUE: number;
						public static RT_YEAR_VALUE: number;
						public static RT_16_MONTHS_VALUE: number;
						public static RT_YEAR_AND_A_HALF_VALUE: number;
						public static RT_2_YEARS_VALUE: number;
						public static RT_3_YEARS_VALUE: number;
						public static RT_ARCHIVAL_VALUE: number;
						public static valueOf(param0: string): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public getNumber(): number;
						public static valueOf(param0: number): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static forNumber(param0: number): com.google.protos.datapol.RetentionAnnotations.RetentionTag;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.protos.datapol.RetentionAnnotations.RetentionTag>;
						public static values(): native.Array<com.google.protos.datapol.RetentionAnnotations.RetentionTag>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module protos {
			export module datapol {
				export class SemanticAnnotations {
					public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations>;
					public static SEMANTIC_TYPE_FIELD_NUMBER: number;
					public static semanticType: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,com.google.protos.datapol.SemanticAnnotations.SemanticType>;
					public static QUALIFIER_FIELD_NUMBER: number;
					public static qualifier: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,com.google.protos.datapol.SemanticAnnotations.Qualifier>;
					public static LOCATION_QUALIFIER_FIELD_NUMBER: number;
					public static locationQualifier: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,com.google.protos.datapol.SemanticAnnotations.LocationQualifier>;
					public static FIELD_DETAILS_FIELD_NUMBER: number;
					public static fieldDetails: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,com.google.protos.datapol.SemanticAnnotations.FieldDetails>;
					public static DATA_FORMAT_FIELD_NUMBER: number;
					public static dataFormat: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,com.google.protos.datapol.SemanticAnnotations.DataFormat>;
					public static RETENTION_FIELD_NUMBER: number;
					public static retention: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.util.List<com.google.protos.datapol.RetentionAnnotations.RetentionSpec>>;
					public static MSG_SEMANTIC_TYPE_FIELD_NUMBER: number;
					public static msgSemanticType: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,com.google.protos.datapol.SemanticAnnotations.SemanticType>;
					public static MSG_QUALIFIER_FIELD_NUMBER: number;
					public static msgQualifier: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,com.google.protos.datapol.SemanticAnnotations.Qualifier>;
					public static MSG_LOCATION_QUALIFIER_FIELD_NUMBER: number;
					public static msgLocationQualifier: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,com.google.protos.datapol.SemanticAnnotations.LocationQualifier>;
					public static MSG_DETAILS_FIELD_NUMBER: number;
					public static msgDetails: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,com.google.protos.datapol.SemanticAnnotations.MessageDetails>;
					public static MSG_RETENTION_FIELD_NUMBER: number;
					public static msgRetention: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,java.util.List<com.google.protos.datapol.RetentionAnnotations.RetentionSpec>>;
					public static FILE_VETTED_FOR_DATAPOL_ANNOTATIONS_FIELD_NUMBER: number;
					public static fileVettedForDatapolAnnotations: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FileOptions,java.lang.Boolean>;
					public static FILE_VETTING_STATUS_FIELD_NUMBER: number;
					public static fileVettingStatus: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FileOptions,string>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module SemanticAnnotations {
					export class DataFormat extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.DataFormat>;
						public static DF_NONE: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_HTTPHEADER: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_COOKIE: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_URL: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_CGI_ARGS: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_HOST_ORDER: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_BYTE_SWAPPED: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_LOGGING_ELEMENT_TYPE_ID: com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static DF_NONE_VALUE: number;
						public static DF_HTTPHEADER_VALUE: number;
						public static DF_COOKIE_VALUE: number;
						public static DF_URL_VALUE: number;
						public static DF_CGI_ARGS_VALUE: number;
						public static DF_HOST_ORDER_VALUE: number;
						public static DF_BYTE_SWAPPED_VALUE: number;
						public static DF_LOGGING_ELEMENT_TYPE_ID_VALUE: number;
						public static valueOf(param0: number): com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.protos.datapol.SemanticAnnotations.DataFormat>;
						public static values(): native.Array<com.google.protos.datapol.SemanticAnnotations.DataFormat>;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.protos.datapol.SemanticAnnotations.DataFormat;
						public static valueOf(param0: string): com.google.protos.datapol.SemanticAnnotations.DataFormat;
					}
					export class FieldDetails extends com.google.protobuf.GeneratedMessageLite<com.google.protos.datapol.SemanticAnnotations.FieldDetails,com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder> implements com.google.protos.datapol.SemanticAnnotations.FieldDetailsOrBuilder  {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.FieldDetails>;
						public static SEMANTIC_TYPE_FIELD_NUMBER: number;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public getSemanticTypeCount(): number;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public getSerializedSize(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static newBuilder(param0: com.google.protos.datapol.SemanticAnnotations.FieldDetails): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static newBuilder(): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
						public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parseFrom(param0: native.Array<number>): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
						public static parser(): com.google.protobuf.Parser<com.google.protos.datapol.SemanticAnnotations.FieldDetails>;
						public static getDefaultInstance(): com.google.protos.datapol.SemanticAnnotations.FieldDetails;
					}
					export module FieldDetails {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.protos.datapol.SemanticAnnotations.FieldDetails,com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder> implements com.google.protos.datapol.SemanticAnnotations.FieldDetailsOrBuilder  {
							public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder>;
							public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
							public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
							public getSemanticTypeCount(): number;
							public setSemanticType(param0: number, param1: com.google.protos.datapol.SemanticAnnotations.SemanticType): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
							public clearSemanticType(): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
							public addAllSemanticType(param0: java.lang.Iterable<any>): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
							public addSemanticType(param0: com.google.protos.datapol.SemanticAnnotations.SemanticType): com.google.protos.datapol.SemanticAnnotations.FieldDetails.Builder;
						}
					}
					export class FieldDetailsOrBuilder {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.FieldDetailsOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.protos.datapol.SemanticAnnotations$FieldDetailsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
							getSemanticTypeCount(): number;
							getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						});
						public constructor();
						public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public getSemanticTypeCount(): number;
					}
					export class LocationQualifier extends com.google.protobuf.GeneratedMessageLite<com.google.protos.datapol.SemanticAnnotations.LocationQualifier,com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder> implements com.google.protos.datapol.SemanticAnnotations.LocationQualifierOrBuilder  {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.LocationQualifier>;
						public static NON_USER_LOCATION_FIELD_NUMBER: number;
						public static PRECISE_LOCATION_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public getNonUserLocation(): boolean;
						public hasPreciseLocation(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parser(): com.google.protobuf.Parser<com.google.protos.datapol.SemanticAnnotations.LocationQualifier>;
						public static parseFrom(param0: native.Array<number>): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static newBuilder(): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static newBuilder(param0: com.google.protos.datapol.SemanticAnnotations.LocationQualifier): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
						public static parseFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
						public hasNonUserLocation(): boolean;
						public getPreciseLocation(): boolean;
						public static getDefaultInstance(): com.google.protos.datapol.SemanticAnnotations.LocationQualifier;
					}
					export module LocationQualifier {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.protos.datapol.SemanticAnnotations.LocationQualifier,com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder> implements com.google.protos.datapol.SemanticAnnotations.LocationQualifierOrBuilder  {
							public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder>;
							public setPreciseLocation(param0: boolean): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
							public hasNonUserLocation(): boolean;
							public hasPreciseLocation(): boolean;
							public clearPreciseLocation(): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
							public setNonUserLocation(param0: boolean): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
							public getNonUserLocation(): boolean;
							public clearNonUserLocation(): com.google.protos.datapol.SemanticAnnotations.LocationQualifier.Builder;
							public getPreciseLocation(): boolean;
						}
					}
					export class LocationQualifierOrBuilder {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.LocationQualifierOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.protos.datapol.SemanticAnnotations$LocationQualifierOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasNonUserLocation(): boolean;
							getNonUserLocation(): boolean;
							hasPreciseLocation(): boolean;
							getPreciseLocation(): boolean;
						});
						public constructor();
						public hasNonUserLocation(): boolean;
						public getNonUserLocation(): boolean;
						public hasPreciseLocation(): boolean;
						public getPreciseLocation(): boolean;
					}
					export class MessageDetails extends com.google.protobuf.GeneratedMessageLite<com.google.protos.datapol.SemanticAnnotations.MessageDetails,com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder> implements com.google.protos.datapol.SemanticAnnotations.MessageDetailsOrBuilder  {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.MessageDetails>;
						public static SEMANTIC_TYPE_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static newBuilder(): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static parser(): com.google.protobuf.Parser<com.google.protos.datapol.SemanticAnnotations.MessageDetails>;
						public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public getSemanticTypeCount(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: native.Array<number>): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static newBuilder(param0: com.google.protos.datapol.SemanticAnnotations.MessageDetails): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
						public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static parseFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
						public static getDefaultInstance(): com.google.protos.datapol.SemanticAnnotations.MessageDetails;
					}
					export module MessageDetails {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.protos.datapol.SemanticAnnotations.MessageDetails,com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder> implements com.google.protos.datapol.SemanticAnnotations.MessageDetailsOrBuilder  {
							public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder>;
							public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
							public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
							public getSemanticTypeCount(): number;
							public clearSemanticType(): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
							public addSemanticType(param0: com.google.protos.datapol.SemanticAnnotations.SemanticType): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
							public addAllSemanticType(param0: java.lang.Iterable<any>): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
							public setSemanticType(param0: number, param1: com.google.protos.datapol.SemanticAnnotations.SemanticType): com.google.protos.datapol.SemanticAnnotations.MessageDetails.Builder;
						}
					}
					export class MessageDetailsOrBuilder {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.MessageDetailsOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.protos.datapol.SemanticAnnotations$MessageDetailsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
							getSemanticTypeCount(): number;
							getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						});
						public constructor();
						public getSemanticTypeList(): java.util.List<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public getSemanticType(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public getSemanticTypeCount(): number;
					}
					export class Qualifier extends com.google.protobuf.GeneratedMessageLite<com.google.protos.datapol.SemanticAnnotations.Qualifier,com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder> implements com.google.protos.datapol.SemanticAnnotations.QualifierOrBuilder  {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.Qualifier>;
						public static IS_PUBLIC_FIELD_NUMBER: number;
						public static IS_GOOGLE_FIELD_NUMBER: number;
						public static OTHER_USER_FIELD_NUMBER: number;
						public static IS_PARTNER_FIELD_NUMBER: number;
						public static IS_PUBLISHER_FIELD_NUMBER: number;
						public static HAS_EXPLICIT_CONSENT_FIELD_NUMBER: number;
						public static IS_ENCRYPTED_FIELD_NUMBER: number;
						public static RELATED_FIELD_FIELD_NUMBER: number;
						public static NON_USER_LOCATION_FIELD_NUMBER: number;
						public static LIMITED_ACCESS_FIELD_NUMBER: number;
						public static AUTO_DELETE_WITHIN_WIPEOUT_FIELD_NUMBER: number;
						public static AUTO_DELETE_WITHIN_180_DAYS_FIELD_NUMBER: number;
						public static IS_ACCESS_TARGET_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public hasOtherUser(): boolean;
						public hasAutoDeleteWithin180Days(): boolean;
						public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
						public hasIsAccessTarget(): boolean;
						public hasIsPublic(): boolean;
						public getOtherUser(): boolean;
						public getAutoDeleteWithin180Days(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static getDefaultInstance(): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getLimitedAccess(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getAutoDeleteWithinWipeout(): boolean;
						public getIsPublic(): boolean;
						public hasIsGoogle(): boolean;
						public static parser(): com.google.protobuf.Parser<com.google.protos.datapol.SemanticAnnotations.Qualifier>;
						public getIsPublisher(): boolean;
						public hasIsEncrypted(): boolean;
						public static parseFrom(param0: native.Array<number>): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public hasHasExplicitConsent(): boolean;
						public hasLimitedAccess(): boolean;
						public getIsPartner(): boolean;
						public hasRelatedField(): boolean;
						public hasAutoDeleteWithinWipeout(): boolean;
						public getHasExplicitConsent(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getIsGoogle(): boolean;
						public hasIsPublisher(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getIsEncrypted(): boolean;
						public static newBuilder(param0: com.google.protos.datapol.SemanticAnnotations.Qualifier): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getNonUserLocation(): boolean;
						public getRelatedField(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public hasIsPartner(): boolean;
						public getSerializedSize(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public getIsAccessTarget(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.protos.datapol.SemanticAnnotations.Qualifier;
						public hasNonUserLocation(): boolean;
						public static newBuilder(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
					}
					export module Qualifier {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.protos.datapol.SemanticAnnotations.Qualifier,com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder> implements com.google.protos.datapol.SemanticAnnotations.QualifierOrBuilder  {
							public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder>;
							public hasIsAccessTarget(): boolean;
							public getIsPublisher(): boolean;
							public hasAutoDeleteWithin180Days(): boolean;
							public hasIsGoogle(): boolean;
							public getIsAccessTarget(): boolean;
							public hasIsPartner(): boolean;
							public setAutoDeleteWithinWipeout(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setNonUserLocation(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public getLimitedAccess(): boolean;
							public clearNonUserLocation(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public getIsPartner(): boolean;
							public setHasExplicitConsent(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasAutoDeleteWithinWipeout(): boolean;
							public hasIsPublic(): boolean;
							public clearLimitedAccess(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearOtherUser(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setIsPublisher(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearRelatedField(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setIsPartner(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasLimitedAccess(): boolean;
							public setAutoDeleteWithin180Days(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setIsAccessTarget(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setRelatedField(param0: number): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearIsPartner(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasIsEncrypted(): boolean;
							public clearIsEncrypted(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearAutoDeleteWithin180Days(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearIsAccessTarget(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearIsPublisher(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearHasExplicitConsent(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasOtherUser(): boolean;
							public setIsGoogle(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasNonUserLocation(): boolean;
							public getAutoDeleteWithinWipeout(): boolean;
							public getAutoDeleteWithin180Days(): boolean;
							public hasIsPublisher(): boolean;
							public clearIsPublic(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearAutoDeleteWithinWipeout(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setIsPublic(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public clearIsGoogle(): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setLimitedAccess(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public setOtherUser(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasRelatedField(): boolean;
							public getIsPublic(): boolean;
							public getIsEncrypted(): boolean;
							public getNonUserLocation(): boolean;
							public getOtherUser(): boolean;
							public setIsEncrypted(param0: boolean): com.google.protos.datapol.SemanticAnnotations.Qualifier.Builder;
							public hasHasExplicitConsent(): boolean;
							public getRelatedField(): number;
							public getIsGoogle(): boolean;
							public getHasExplicitConsent(): boolean;
						}
					}
					export class QualifierOrBuilder {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.QualifierOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.protos.datapol.SemanticAnnotations$QualifierOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasIsPublic(): boolean;
							getIsPublic(): boolean;
							hasIsGoogle(): boolean;
							getIsGoogle(): boolean;
							hasOtherUser(): boolean;
							getOtherUser(): boolean;
							hasIsPartner(): boolean;
							getIsPartner(): boolean;
							hasIsPublisher(): boolean;
							getIsPublisher(): boolean;
							hasHasExplicitConsent(): boolean;
							getHasExplicitConsent(): boolean;
							hasIsEncrypted(): boolean;
							getIsEncrypted(): boolean;
							hasRelatedField(): boolean;
							getRelatedField(): number;
							hasNonUserLocation(): boolean;
							getNonUserLocation(): boolean;
							hasLimitedAccess(): boolean;
							getLimitedAccess(): boolean;
							hasAutoDeleteWithinWipeout(): boolean;
							getAutoDeleteWithinWipeout(): boolean;
							hasAutoDeleteWithin180Days(): boolean;
							getAutoDeleteWithin180Days(): boolean;
							hasIsAccessTarget(): boolean;
							getIsAccessTarget(): boolean;
						});
						public constructor();
						public hasOtherUser(): boolean;
						public hasAutoDeleteWithin180Days(): boolean;
						public hasIsAccessTarget(): boolean;
						public hasIsPublic(): boolean;
						public getOtherUser(): boolean;
						public getAutoDeleteWithin180Days(): boolean;
						public getLimitedAccess(): boolean;
						public getAutoDeleteWithinWipeout(): boolean;
						public getIsPublic(): boolean;
						public hasIsGoogle(): boolean;
						public getIsPublisher(): boolean;
						public hasIsEncrypted(): boolean;
						public hasHasExplicitConsent(): boolean;
						public hasLimitedAccess(): boolean;
						public getIsPartner(): boolean;
						public hasRelatedField(): boolean;
						public hasAutoDeleteWithinWipeout(): boolean;
						public getHasExplicitConsent(): boolean;
						public getIsGoogle(): boolean;
						public hasIsPublisher(): boolean;
						public getIsEncrypted(): boolean;
						public getNonUserLocation(): boolean;
						public getRelatedField(): number;
						public hasIsPartner(): boolean;
						public getIsAccessTarget(): boolean;
						public hasNonUserLocation(): boolean;
					}
					export class SemanticType extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public static ST_NOT_SPECIFIED: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_NOT_REQUIRED: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PSEUDONYMOUS_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ZWIEBACK_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PREF_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_BISCOTTI_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ANALYTICS_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_MANDELBREAD_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ANDROID_LOGGING_ID2: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ACSA_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_HERREVAD_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_IDENTIFYING_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_EMAIL_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_NAME: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PHONE_NUMBER: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_GAIA_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_USERNAME: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_GSERVICES_ANDROID_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ARES_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_MEDICAL_RECORD_NUMBER: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SPII_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_GOVERNMENT_ID_NUMBER: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_HEALTHCARE_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SENSITIVE_BACKGROUND_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CARDHOLDER_DATA: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CHD_PAN: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CHD_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PAYMENTS_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CRITICAL_PAYMENT_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PAYMENT_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_LIMITED_USE_PAYMENTS_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PAYMENTS_TRANSACTION_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_NETWORK_ENDPOINT: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_IP_ADDRESS: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_HARDWARE_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ANDROID_LOGGING_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SOFTWARE_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_USER_AGENT: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ANONYMOUS_DATA: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_DEMOGRAPHIC_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_LOCATION: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PRECISE_LOCATION: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_COARSE_LOCATION: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_GOOGLE_RELATIONSHIP_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CUSTOMER_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PARTNER_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PUBLISHER_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_USER_CONTENT: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_USER_QUERY: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_THIRD_PARTY_DATA: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_TIMESTAMP: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SENSITIVE_TIMESTAMP: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SESSION_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PERSONAL_DATA: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_AVOCADO_ID: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SECURITY_MATERIAL: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_SECURITY_KEY: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_ACCOUNT_CREDENTIAL: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_PAYMENTS_PCI_SAD: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_CONTENT_DEPENDENT: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_DEBUG_INFO: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_KEY_VALUE_PAIR: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_KEY: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_VALUE: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_REFERER_URL: com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static ST_NOT_SPECIFIED_VALUE: number;
						public static ST_NOT_REQUIRED_VALUE: number;
						public static ST_PSEUDONYMOUS_ID_VALUE: number;
						public static ST_ZWIEBACK_ID_VALUE: number;
						public static ST_PREF_ID_VALUE: number;
						public static ST_BISCOTTI_ID_VALUE: number;
						public static ST_ANALYTICS_ID_VALUE: number;
						public static ST_MANDELBREAD_ID_VALUE: number;
						public static ST_ANDROID_LOGGING_ID2_VALUE: number;
						public static ST_ACSA_ID_VALUE: number;
						public static ST_HERREVAD_ID_VALUE: number;
						public static ST_IDENTIFYING_ID_VALUE: number;
						public static ST_EMAIL_ID_VALUE: number;
						public static ST_NAME_VALUE: number;
						public static ST_PHONE_NUMBER_VALUE: number;
						public static ST_GAIA_ID_VALUE: number;
						public static ST_USERNAME_VALUE: number;
						public static ST_GSERVICES_ANDROID_ID_VALUE: number;
						public static ST_ARES_ID_VALUE: number;
						public static ST_MEDICAL_RECORD_NUMBER_VALUE: number;
						public static ST_SPII_ID_VALUE: number;
						public static ST_GOVERNMENT_ID_NUMBER_VALUE: number;
						public static ST_HEALTHCARE_INFO_VALUE: number;
						public static ST_SENSITIVE_BACKGROUND_INFO_VALUE: number;
						public static ST_CARDHOLDER_DATA_VALUE: number;
						public static ST_CHD_PAN_VALUE: number;
						public static ST_CHD_INFO_VALUE: number;
						public static ST_PAYMENTS_INFO_VALUE: number;
						public static ST_CRITICAL_PAYMENT_INFO_VALUE: number;
						public static ST_PAYMENT_ID_VALUE: number;
						public static ST_LIMITED_USE_PAYMENTS_INFO_VALUE: number;
						public static ST_PAYMENTS_TRANSACTION_INFO_VALUE: number;
						public static ST_NETWORK_ENDPOINT_VALUE: number;
						public static ST_IP_ADDRESS_VALUE: number;
						public static ST_HARDWARE_ID_VALUE: number;
						public static ST_ANDROID_LOGGING_ID_VALUE: number;
						public static ST_SOFTWARE_ID_VALUE: number;
						public static ST_USER_AGENT_VALUE: number;
						public static ST_ANONYMOUS_DATA_VALUE: number;
						public static ST_DEMOGRAPHIC_INFO_VALUE: number;
						public static ST_LOCATION_VALUE: number;
						public static ST_PRECISE_LOCATION_VALUE: number;
						public static ST_COARSE_LOCATION_VALUE: number;
						public static ST_GOOGLE_RELATIONSHIP_ID_VALUE: number;
						public static ST_CUSTOMER_ID_VALUE: number;
						public static ST_PARTNER_ID_VALUE: number;
						public static ST_PUBLISHER_ID_VALUE: number;
						public static ST_USER_CONTENT_VALUE: number;
						public static ST_USER_QUERY_VALUE: number;
						public static ST_THIRD_PARTY_DATA_VALUE: number;
						public static ST_TIMESTAMP_VALUE: number;
						public static ST_SENSITIVE_TIMESTAMP_VALUE: number;
						public static ST_SESSION_ID_VALUE: number;
						public static ST_PERSONAL_DATA_VALUE: number;
						public static ST_AVOCADO_ID_VALUE: number;
						public static ST_SECURITY_MATERIAL_VALUE: number;
						public static ST_SECURITY_KEY_VALUE: number;
						public static ST_ACCOUNT_CREDENTIAL_VALUE: number;
						public static ST_PAYMENTS_PCI_SAD_VALUE: number;
						public static ST_CONTENT_DEPENDENT_VALUE: number;
						public static ST_DEBUG_INFO_VALUE: number;
						public static ST_KEY_VALUE_PAIR_VALUE: number;
						public static ST_KEY_VALUE: number;
						public static ST_VALUE_VALUE: number;
						public static ST_REFERER_URL_VALUE: number;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public static valueOf(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static values(): native.Array<com.google.protos.datapol.SemanticAnnotations.SemanticType>;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.protos.datapol.SemanticAnnotations.SemanticType;
						public static valueOf(param0: string): com.google.protos.datapol.SemanticAnnotations.SemanticType;
					}
				}
			}
		}
	}
}

declare module developers {
	export module mobile {
		export module abt {
			export class FirebaseAbt {
				public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt>;
				public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
			}
			export module FirebaseAbt {
				export class ExperimentLite extends com.google.protobuf.GeneratedMessageLite<developers.mobile.abt.FirebaseAbt.ExperimentLite,developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder> implements developers.mobile.abt.FirebaseAbt.ExperimentLiteOrBuilder  {
					public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
					public static EXPERIMENT_ID_FIELD_NUMBER: number;
					public getExperimentIdBytes(): com.google.protobuf.ByteString;
					public getExperimentId(): string;
					public getSerializedSize(): number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parseDelimitedFrom(param0: java.io.InputStream): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static newBuilder(param0: developers.mobile.abt.FirebaseAbt.ExperimentLite): developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static newBuilder(): developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
					public static parseFrom(param0: native.Array<number>): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parser(): com.google.protobuf.Parser<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static getDefaultInstance(): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parseFrom(param0: java.io.InputStream): developers.mobile.abt.FirebaseAbt.ExperimentLite;
				}
				export module ExperimentLite {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<developers.mobile.abt.FirebaseAbt.ExperimentLite,developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder> implements developers.mobile.abt.FirebaseAbt.ExperimentLiteOrBuilder  {
						public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder>;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public clearExperimentId(): developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder;
						public setExperimentIdBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder;
						public setExperimentId(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder;
					}
				}
				export class ExperimentLiteOrBuilder {
					public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentLiteOrBuilder>;
					/**
					 * Constructs a new instance of the developers.mobile.abt.FirebaseAbt$ExperimentLiteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExperimentId(): string;
						getExperimentIdBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getExperimentIdBytes(): com.google.protobuf.ByteString;
					public getExperimentId(): string;
				}
				export class ExperimentPayload extends com.google.protobuf.GeneratedMessageLite<developers.mobile.abt.FirebaseAbt.ExperimentPayload,developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder> implements developers.mobile.abt.FirebaseAbt.ExperimentPayloadOrBuilder  {
					public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentPayload>;
					public static EXPERIMENT_ID_FIELD_NUMBER: number;
					public static VARIANT_ID_FIELD_NUMBER: number;
					public static EXPERIMENT_START_TIME_MILLIS_FIELD_NUMBER: number;
					public static TRIGGER_EVENT_FIELD_NUMBER: number;
					public static TRIGGER_TIMEOUT_MILLIS_FIELD_NUMBER: number;
					public static TIME_TO_LIVE_MILLIS_FIELD_NUMBER: number;
					public static SET_EVENT_TO_LOG_FIELD_NUMBER: number;
					public static ACTIVATE_EVENT_TO_LOG_FIELD_NUMBER: number;
					public static CLEAR_EVENT_TO_LOG_FIELD_NUMBER: number;
					public static TIMEOUT_EVENT_TO_LOG_FIELD_NUMBER: number;
					public static TTL_EXPIRY_EVENT_TO_LOG_FIELD_NUMBER: number;
					public static OVERFLOW_POLICY_FIELD_NUMBER: number;
					public static ONGOING_EXPERIMENTS_FIELD_NUMBER: number;
					public getClearEventToLogBytes(): com.google.protobuf.ByteString;
					public getExperimentIdBytes(): com.google.protobuf.ByteString;
					public getTriggerTimeoutMillis(): number;
					public getTtlExpiryEventToLog(): string;
					public getExperimentId(): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getTimeToLiveMillis(): number;
					public getTimeoutEventToLog(): string;
					public getOngoingExperiments(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getOverflowPolicyValue(): number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getVariantId(): string;
					public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getTriggerEventBytes(): com.google.protobuf.ByteString;
					public static newBuilder(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
					public getClearEventToLog(): string;
					public getOngoingExperimentsOrBuilderList(): java.util.List<any>;
					public getOngoingExperimentsOrBuilder(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentLiteOrBuilder;
					public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
					public getActivateEventToLog(): string;
					public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
					public getSerializedSize(): number;
					public static parseFrom(param0: java.io.InputStream): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public static getDefaultInstance(): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getOngoingExperimentsList(): java.util.List<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
					public static parseFrom(param0: native.Array<number>): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public static parseFrom(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getExperimentStartTimeMillis(): number;
					public getOverflowPolicy(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getVariantIdBytes(): com.google.protobuf.ByteString;
					public getSetEventToLogBytes(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream): developers.mobile.abt.FirebaseAbt.ExperimentPayload;
					public getSetEventToLog(): string;
					public getOngoingExperimentsCount(): number;
					public getTriggerEvent(): string;
					public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
					public static newBuilder(param0: developers.mobile.abt.FirebaseAbt.ExperimentPayload): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
					public static parser(): com.google.protobuf.Parser<developers.mobile.abt.FirebaseAbt.ExperimentPayload>;
				}
				export module ExperimentPayload {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<developers.mobile.abt.FirebaseAbt.ExperimentPayload,developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder> implements developers.mobile.abt.FirebaseAbt.ExperimentPayloadOrBuilder  {
						public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder>;
						public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
						public getExperimentId(): string;
						public getTriggerTimeoutMillis(): number;
						public getClearEventToLogBytes(): com.google.protobuf.ByteString;
						public clearSetEventToLog(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearTtlExpiryEventToLog(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setOngoingExperiments(param0: number, param1: developers.mobile.abt.FirebaseAbt.ExperimentLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setSetEventToLog(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setExperimentStartTimeMillis(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTimeoutEventToLog(): string;
						public getOverflowPolicyValue(): number;
						public setSetEventToLogBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getOngoingExperiments(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentLite;
						public addOngoingExperiments(param0: number, param1: developers.mobile.abt.FirebaseAbt.ExperimentLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getOngoingExperimentsCount(): number;
						public setTimeToLiveMillis(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getSetEventToLogBytes(): com.google.protobuf.ByteString;
						public clearTimeToLiveMillis(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setTtlExpiryEventToLog(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getVariantId(): string;
						public clearTimeoutEventToLog(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setClearEventToLog(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public addOngoingExperiments(param0: developers.mobile.abt.FirebaseAbt.ExperimentLite): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearExperimentStartTimeMillis(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
						public getOverflowPolicy(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public setTimeoutEventToLog(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
						public setTriggerTimeoutMillis(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getActivateEventToLog(): string;
						public clearExperimentId(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTriggerEvent(): string;
						public getSetEventToLog(): string;
						public clearActivateEventToLog(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setTriggerEvent(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public addAllOngoingExperiments(param0: java.lang.Iterable<any>): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getClearEventToLog(): string;
						public setOngoingExperiments(param0: number, param1: developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setExperimentIdBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public removeOngoingExperiments(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTimeToLiveMillis(): number;
						public clearOverflowPolicy(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getVariantIdBytes(): com.google.protobuf.ByteString;
						public getExperimentStartTimeMillis(): number;
						public clearClearEventToLog(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getOngoingExperimentsList(): java.util.List<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
						public setTimeoutEventToLogBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setOverflowPolicy(param0: developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setVariantId(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTriggerEventBytes(): com.google.protobuf.ByteString;
						public setActivateEventToLog(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearOngoingExperiments(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setExperimentId(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setOverflowPolicyValue(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearVariantId(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setClearEventToLogBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public addOngoingExperiments(param0: developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearTriggerEvent(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setTriggerEventBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public clearTriggerTimeoutMillis(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setTtlExpiryEventToLogBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public setVariantIdBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public addOngoingExperiments(param0: number, param1: developers.mobile.abt.FirebaseAbt.ExperimentLite.Builder): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
						public getTtlExpiryEventToLog(): string;
						public setActivateEventToLogBytes(param0: com.google.protobuf.ByteString): developers.mobile.abt.FirebaseAbt.ExperimentPayload.Builder;
					}
					export class ExperimentOverflowPolicy extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy>;
						public static POLICY_UNSPECIFIED: developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public static DISCARD_OLDEST: developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public static IGNORE_NEWEST: developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public static UNRECOGNIZED: developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public static POLICY_UNSPECIFIED_VALUE: number;
						public static DISCARD_OLDEST_VALUE: number;
						public static IGNORE_NEWEST_VALUE: number;
						public static values(): native.Array<developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy>;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy>;
						public static forNumber(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public static valueOf(param0: string): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						public getNumber(): number;
						public static valueOf(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
					}
				}
				export class ExperimentPayloadOrBuilder {
					public static class: java.lang.Class<developers.mobile.abt.FirebaseAbt.ExperimentPayloadOrBuilder>;
					/**
					 * Constructs a new instance of the developers.mobile.abt.FirebaseAbt$ExperimentPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExperimentId(): string;
						getExperimentIdBytes(): com.google.protobuf.ByteString;
						getVariantId(): string;
						getVariantIdBytes(): com.google.protobuf.ByteString;
						getExperimentStartTimeMillis(): number;
						getTriggerEvent(): string;
						getTriggerEventBytes(): com.google.protobuf.ByteString;
						getTriggerTimeoutMillis(): number;
						getTimeToLiveMillis(): number;
						getSetEventToLog(): string;
						getSetEventToLogBytes(): com.google.protobuf.ByteString;
						getActivateEventToLog(): string;
						getActivateEventToLogBytes(): com.google.protobuf.ByteString;
						getClearEventToLog(): string;
						getClearEventToLogBytes(): com.google.protobuf.ByteString;
						getTimeoutEventToLog(): string;
						getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
						getTtlExpiryEventToLog(): string;
						getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
						getOverflowPolicyValue(): number;
						getOverflowPolicy(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
						getOngoingExperimentsList(): java.util.List<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
						getOngoingExperiments(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentLite;
						getOngoingExperimentsCount(): number;
					});
					public constructor();
					public getClearEventToLog(): string;
					public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
					public getClearEventToLogBytes(): com.google.protobuf.ByteString;
					public getExperimentIdBytes(): com.google.protobuf.ByteString;
					public getTriggerTimeoutMillis(): number;
					public getActivateEventToLog(): string;
					public getTtlExpiryEventToLog(): string;
					public getExperimentId(): string;
					public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
					public getTimeToLiveMillis(): number;
					public getOngoingExperimentsList(): java.util.List<developers.mobile.abt.FirebaseAbt.ExperimentLite>;
					public getTimeoutEventToLog(): string;
					public getExperimentStartTimeMillis(): number;
					public getOverflowPolicy(): developers.mobile.abt.FirebaseAbt.ExperimentPayload.ExperimentOverflowPolicy;
					public getOngoingExperiments(param0: number): developers.mobile.abt.FirebaseAbt.ExperimentLite;
					public getOverflowPolicyValue(): number;
					public getVariantIdBytes(): com.google.protobuf.ByteString;
					public getSetEventToLogBytes(): com.google.protobuf.ByteString;
					public getVariantId(): string;
					public getSetEventToLog(): string;
					public getOngoingExperimentsCount(): number;
					public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
					public getTriggerEvent(): string;
					public getTriggerEventBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module logs_proto {
	export class LogsAnnotations {
		public static class: java.lang.Class<logs_proto.LogsAnnotations>;
		public static ID_TYPE_FIELD_NUMBER: number;
		public static idType: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,logs_proto.LogsAnnotations.IdentifierType>;
		public static TEMP_LOGS_ONLY_FIELD_NUMBER: number;
		public static tempLogsOnly: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.lang.Boolean>;
		public static IS_PRIVATE_LOG_FIELD_NUMBER: number;
		public static isPrivateLog: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.lang.Boolean>;
		public static NOT_LOGGED_IN_SAWMILL_FIELD_NUMBER: number;
		public static notLoggedInSawmill: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.lang.Boolean>;
		public static IS_ENCRYPTED_FIELD_NUMBER: number;
		public static isEncrypted: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.lang.Boolean>;
		public static MAX_RECURSION_DEPTH_FIELD_NUMBER: number;
		public static maxRecursionDepth: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,java.lang.Integer>;
		public static SAWMILL_FILTER_OVERRIDE_APPROVED_BY_LOGS_ACCESS_FIELD_NUMBER: number;
		public static sawmillFilterOverrideApprovedByLogsAccess: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FieldOptions,string>;
		public static MSG_ID_TYPE_FIELD_NUMBER: number;
		public static msgIdType: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,logs_proto.LogsAnnotations.IdentifierType>;
		public static MSG_TEMP_LOGS_ONLY_FIELD_NUMBER: number;
		public static msgTempLogsOnly: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,java.lang.Boolean>;
		public static MSG_NOT_LOGGED_IN_SAWMILL_FIELD_NUMBER: number;
		public static msgNotLoggedInSawmill: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,java.lang.Boolean>;
		public static MSG_DETAILS_FIELD_NUMBER: number;
		public static msgDetails: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,logs_proto.LogsAnnotations.MessageDetails>;
		public static FIELD_ENCRYPTION_KEY_NAME_FIELD_NUMBER: number;
		public static fieldEncryptionKeyName: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.MessageOptions,string>;
		public static FILE_NOT_USED_FOR_LOGGING_EXCEPT_ENUMS_FIELD_NUMBER: number;
		public static fileNotUsedForLoggingExceptEnums: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FileOptions,java.lang.Boolean>;
		public static FILE_VETTED_FOR_LOGS_ANNOTATIONS_FIELD_NUMBER: number;
		public static fileVettedForLogsAnnotations: com.google.protobuf.GeneratedMessageLite.GeneratedExtension<com.google.protobuf.DescriptorProtos.FileOptions,java.lang.Boolean>;
		public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
	}
	export module LogsAnnotations {
		export class IdentifierType extends com.google.protobuf.Internal.EnumLite {
			public static class: java.lang.Class<logs_proto.LogsAnnotations.IdentifierType>;
			public static LOGSID_NONE: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_IP_ADDRESS: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_IP_ADDRESS_INTERNAL: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_USER_AGENT: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_SENSITIVE_TIMESTAMP: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_SENSITIVE_LOCATION: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_APPROXIMATE_LOCATION: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_COARSE_LOCATION: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_LOCATION: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_VERSION_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_REFERER: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_THIRD_PARTY_PARAMETERS: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_PSEUDONYMOUS_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_PREF: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_ZWIEBACK: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_BISCOTTI: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_CUSTOM_SESSION_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_PERSONAL_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_GAIA_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_EMAIL: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_USERNAME: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_PHONE_NUMBER: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_GAIA_ID_PUBLIC: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_AUTHENTICATED_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_UNAUTHENTICATED_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_PARTNER_OR_CUSTOMER_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_PUBLISHER_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_DASHER_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_FOCUS_GROUP_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_MOBILE_DEVICE_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_GSERVICES_ANDROID_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_HARDWARE_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_MSISDN_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_BUILD_SERIAL_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_UDID_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_ANDROID_LOGGING_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_SECURE_SETTINGS_ANDROID_ID: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_OTHER_IDENTIFYING_USER_INFO: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_USER_INPUT: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_DEMOGRAPHIC_INFO: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_GENERIC_KEY: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_GENERIC_VALUE: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_COOKIE: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_URL: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_HTTPHEADER: logs_proto.LogsAnnotations.IdentifierType;
			public static LOGSID_NONE_VALUE: number;
			public static LOGSID_IP_ADDRESS_VALUE: number;
			public static LOGSID_IP_ADDRESS_INTERNAL_VALUE: number;
			public static LOGSID_USER_AGENT_VALUE: number;
			public static LOGSID_SENSITIVE_TIMESTAMP_VALUE: number;
			public static LOGSID_SENSITIVE_LOCATION_VALUE: number;
			public static LOGSID_APPROXIMATE_LOCATION_VALUE: number;
			public static LOGSID_COARSE_LOCATION_VALUE: number;
			public static LOGSID_OTHER_LOCATION_VALUE: number;
			public static LOGSID_OTHER_VERSION_ID_VALUE: number;
			public static LOGSID_REFERER_VALUE: number;
			public static LOGSID_THIRD_PARTY_PARAMETERS_VALUE: number;
			public static LOGSID_OTHER_PSEUDONYMOUS_ID_VALUE: number;
			public static LOGSID_PREF_VALUE: number;
			public static LOGSID_ZWIEBACK_VALUE: number;
			public static LOGSID_BISCOTTI_VALUE: number;
			public static LOGSID_CUSTOM_SESSION_ID_VALUE: number;
			public static LOGSID_OTHER_PERSONAL_ID_VALUE: number;
			public static LOGSID_GAIA_ID_VALUE: number;
			public static LOGSID_EMAIL_VALUE: number;
			public static LOGSID_USERNAME_VALUE: number;
			public static LOGSID_PHONE_NUMBER_VALUE: number;
			public static LOGSID_GAIA_ID_PUBLIC_VALUE: number;
			public static LOGSID_OTHER_AUTHENTICATED_ID_VALUE: number;
			public static LOGSID_OTHER_UNAUTHENTICATED_ID_VALUE: number;
			public static LOGSID_PARTNER_OR_CUSTOMER_ID_VALUE: number;
			public static LOGSID_PUBLISHER_ID_VALUE: number;
			public static LOGSID_DASHER_ID_VALUE: number;
			public static LOGSID_FOCUS_GROUP_ID_VALUE: number;
			public static LOGSID_OTHER_MOBILE_DEVICE_ID_VALUE: number;
			public static LOGSID_GSERVICES_ANDROID_ID_VALUE: number;
			public static LOGSID_HARDWARE_ID_VALUE: number;
			public static LOGSID_MSISDN_ID_VALUE: number;
			public static LOGSID_BUILD_SERIAL_ID_VALUE: number;
			public static LOGSID_UDID_ID_VALUE: number;
			public static LOGSID_ANDROID_LOGGING_ID_VALUE: number;
			public static LOGSID_SECURE_SETTINGS_ANDROID_ID_VALUE: number;
			public static LOGSID_OTHER_IDENTIFYING_USER_INFO_VALUE: number;
			public static LOGSID_USER_INPUT_VALUE: number;
			public static LOGSID_DEMOGRAPHIC_INFO_VALUE: number;
			public static LOGSID_GENERIC_KEY_VALUE: number;
			public static LOGSID_GENERIC_VALUE_VALUE: number;
			public static LOGSID_COOKIE_VALUE: number;
			public static LOGSID_URL_VALUE: number;
			public static LOGSID_HTTPHEADER_VALUE: number;
			public static forNumber(param0: number): logs_proto.LogsAnnotations.IdentifierType;
			public static valueOf(param0: string): logs_proto.LogsAnnotations.IdentifierType;
			public getNumber(): number;
			public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<logs_proto.LogsAnnotations.IdentifierType>;
			public static valueOf(param0: number): logs_proto.LogsAnnotations.IdentifierType;
			public static values(): native.Array<logs_proto.LogsAnnotations.IdentifierType>;
		}
		export class MessageDetails extends com.google.protobuf.GeneratedMessageLite<logs_proto.LogsAnnotations.MessageDetails,logs_proto.LogsAnnotations.MessageDetails.Builder> implements logs_proto.LogsAnnotations.MessageDetailsOrBuilder  {
			public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetails>;
			public static MAY_APPEAR_IN_FIELD_NUMBER: number;
			public static parseFrom(param0: com.google.protobuf.ByteString): logs_proto.LogsAnnotations.MessageDetails;
			public static parseFrom(param0: java.io.InputStream): logs_proto.LogsAnnotations.MessageDetails;
			public static parseFrom(param0: native.Array<number>): logs_proto.LogsAnnotations.MessageDetails;
			public static newBuilder(): logs_proto.LogsAnnotations.MessageDetails.Builder;
			public static parseDelimitedFrom(param0: java.io.InputStream): logs_proto.LogsAnnotations.MessageDetails;
			public static getDefaultInstance(): logs_proto.LogsAnnotations.MessageDetails;
			public getMayAppearInList(): java.util.List<logs_proto.LogsAnnotations.MessageDetails.Type>;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails;
			public static parser(): com.google.protobuf.Parser<logs_proto.LogsAnnotations.MessageDetails>;
			public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
			public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
			public static newBuilder(param0: logs_proto.LogsAnnotations.MessageDetails): logs_proto.LogsAnnotations.MessageDetails.Builder;
			public getMayAppearInOrBuilderList(): java.util.List<any>;
			public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails;
			public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails;
			public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails;
			public getMayAppearInCount(): number;
			public getMayAppearIn(param0: number): logs_proto.LogsAnnotations.MessageDetails.Type;
			public getMayAppearInOrBuilder(param0: number): logs_proto.LogsAnnotations.MessageDetails.TypeOrBuilder;
			public static parseFrom(param0: com.google.protobuf.CodedInputStream): logs_proto.LogsAnnotations.MessageDetails;
			public getSerializedSize(): number;
			public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails;
		}
		export module MessageDetails {
			export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<logs_proto.LogsAnnotations.MessageDetails,logs_proto.LogsAnnotations.MessageDetails.Builder> implements logs_proto.LogsAnnotations.MessageDetailsOrBuilder  {
				public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetails.Builder>;
				public addMayAppearIn(param0: number, param1: logs_proto.LogsAnnotations.MessageDetails.Type): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public addMayAppearIn(param0: number, param1: logs_proto.LogsAnnotations.MessageDetails.Type.Builder): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public clearMayAppearIn(): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public addMayAppearIn(param0: logs_proto.LogsAnnotations.MessageDetails.Type.Builder): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public getMayAppearInCount(): number;
				public setMayAppearIn(param0: number, param1: logs_proto.LogsAnnotations.MessageDetails.Type): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public getMayAppearInList(): java.util.List<logs_proto.LogsAnnotations.MessageDetails.Type>;
				public removeMayAppearIn(param0: number): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public setMayAppearIn(param0: number, param1: logs_proto.LogsAnnotations.MessageDetails.Type.Builder): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public addAllMayAppearIn(param0: java.lang.Iterable<any>): logs_proto.LogsAnnotations.MessageDetails.Builder;
				public getMayAppearIn(param0: number): logs_proto.LogsAnnotations.MessageDetails.Type;
				public addMayAppearIn(param0: logs_proto.LogsAnnotations.MessageDetails.Type): logs_proto.LogsAnnotations.MessageDetails.Builder;
			}
			export class Type extends com.google.protobuf.GeneratedMessageLite<logs_proto.LogsAnnotations.MessageDetails.Type,logs_proto.LogsAnnotations.MessageDetails.Type.Builder> implements logs_proto.LogsAnnotations.MessageDetails.TypeOrBuilder  {
				public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetails.Type>;
				public static SOURCE_TYPE_FIELD_NUMBER: number;
				public static LOG_TYPE_FIELD_NUMBER: number;
				public static parseFrom(param0: native.Array<number>): logs_proto.LogsAnnotations.MessageDetails.Type;
				public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails.Type;
				public hasLogType(): boolean;
				public static parser(): com.google.protobuf.Parser<logs_proto.LogsAnnotations.MessageDetails.Type>;
				public writeTo(param0: com.google.protobuf.CodedOutputStream): void;
				public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails.Type;
				public hasSourceType(): boolean;
				public static newBuilder(param0: logs_proto.LogsAnnotations.MessageDetails.Type): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
				public getSerializedSize(): number;
				public static parseFrom(param0: com.google.protobuf.ByteString): logs_proto.LogsAnnotations.MessageDetails.Type;
				public getLogType(): string;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream): logs_proto.LogsAnnotations.MessageDetails.Type;
				public getSourceType(): string;
				public static parseFrom(param0: java.io.InputStream): logs_proto.LogsAnnotations.MessageDetails.Type;
				public static getDefaultInstance(): logs_proto.LogsAnnotations.MessageDetails.Type;
				public static parseDelimitedFrom(param0: java.io.InputStream): logs_proto.LogsAnnotations.MessageDetails.Type;
				public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails.Type;
				public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
				public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails.Type;
				public getLogTypeBytes(): com.google.protobuf.ByteString;
				public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): logs_proto.LogsAnnotations.MessageDetails.Type;
				public static newBuilder(): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
				public getSourceTypeBytes(): com.google.protobuf.ByteString;
			}
			export module Type {
				export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<logs_proto.LogsAnnotations.MessageDetails.Type,logs_proto.LogsAnnotations.MessageDetails.Type.Builder> implements logs_proto.LogsAnnotations.MessageDetails.TypeOrBuilder  {
					public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetails.Type.Builder>;
					public setLogTypeBytes(param0: com.google.protobuf.ByteString): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
					public getSourceTypeBytes(): com.google.protobuf.ByteString;
					public getSourceType(): string;
					public clearLogType(): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
					public getLogType(): string;
					public getLogTypeBytes(): com.google.protobuf.ByteString;
					public clearSourceType(): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
					public hasLogType(): boolean;
					public hasSourceType(): boolean;
					public setSourceTypeBytes(param0: com.google.protobuf.ByteString): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
					public setSourceType(param0: string): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
					public setLogType(param0: string): logs_proto.LogsAnnotations.MessageDetails.Type.Builder;
				}
			}
			export class TypeOrBuilder {
				public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetails.TypeOrBuilder>;
				/**
				 * Constructs a new instance of the logs_proto.LogsAnnotations$MessageDetails$TypeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					hasSourceType(): boolean;
					getSourceType(): string;
					getSourceTypeBytes(): com.google.protobuf.ByteString;
					hasLogType(): boolean;
					getLogType(): string;
					getLogTypeBytes(): com.google.protobuf.ByteString;
				});
				public constructor();
				public getLogType(): string;
				public hasLogType(): boolean;
				public getSourceType(): string;
				public hasSourceType(): boolean;
				public getLogTypeBytes(): com.google.protobuf.ByteString;
				public getSourceTypeBytes(): com.google.protobuf.ByteString;
			}
		}
		export class MessageDetailsOrBuilder {
			public static class: java.lang.Class<logs_proto.LogsAnnotations.MessageDetailsOrBuilder>;
			/**
			 * Constructs a new instance of the logs_proto.LogsAnnotations$MessageDetailsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMayAppearInList(): java.util.List<logs_proto.LogsAnnotations.MessageDetails.Type>;
				getMayAppearIn(param0: number): logs_proto.LogsAnnotations.MessageDetails.Type;
				getMayAppearInCount(): number;
			});
			public constructor();
			public getMayAppearInList(): java.util.List<logs_proto.LogsAnnotations.MessageDetails.Type>;
			public getMayAppearIn(param0: number): logs_proto.LogsAnnotations.MessageDetails.Type;
			public getMayAppearInCount(): number;
		}
	}
}

//Generics information:
//com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener:1
//com.google.internal.firebase.inappmessaging.v1.InAppMessagingCampaignManagementGrpc.MethodHandlers:2
//com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers:2

