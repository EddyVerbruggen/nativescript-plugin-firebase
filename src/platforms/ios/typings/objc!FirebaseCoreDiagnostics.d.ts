
declare var FirebaseCoreDiagnosticsVersionNumber: number;

declare var FirebaseCoreDiagnosticsVersionString: interop.Reference<number>;

interface logs_proto_mobilesdk_ios_ICoreConfiguration {
	has_configuration_type: boolean;
	configuration_type: logs_proto_mobilesdk_ios_ICoreConfiguration_ConfigurationType;
	sdk_service_installed_count: number;
	sdk_service_installed: interop.Pointer | interop.Reference<logs_proto_mobilesdk_ios_ICoreConfiguration_ServiceType>;
	device_model: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	app_id: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	bundle_id: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	has_pod_name: boolean;
	pod_name: logs_proto_mobilesdk_ios_ICoreConfiguration_PodName;
	icore_version: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	sdk_version: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	has_sdk_name: boolean;
	sdk_name: logs_proto_mobilesdk_ios_ICoreConfiguration_ServiceType;
	has_app_count: boolean;
	app_count: number;
	os_version: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	min_supported_ios_version: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	has_use_default_app: boolean;
	use_default_app: boolean;
	has_deployed_in_app_store: boolean;
	deployed_in_app_store: boolean;
	has_dynamic_framework_count: boolean;
	dynamic_framework_count: number;
	apple_framework_version: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	has_using_zip_file: boolean;
	using_zip_file: boolean;
	has_deployment_type: boolean;
	deployment_type: logs_proto_mobilesdk_ios_ICoreConfiguration_DeploymentType;
	platform_info: interop.Pointer | interop.Reference<pb_bytes_array_s>;
	has_swizzling_enabled: boolean;
	swizzling_enabled: boolean;
	has_using_gdt: boolean;
	using_gdt: boolean;
}
declare var logs_proto_mobilesdk_ios_ICoreConfiguration: interop.StructType<logs_proto_mobilesdk_ios_ICoreConfiguration>;

declare const enum logs_proto_mobilesdk_ios_ICoreConfiguration_BuildType {

	UNKNOWN_BUILD_TYPE = 0,

	INTERNAL = 1,

	EAP = 2,

	PROD = 3
}

declare const enum logs_proto_mobilesdk_ios_ICoreConfiguration_ConfigurationType {

	UNKNOWN_CONFIGURATION_TYPE = 0,

	CORE = 1,

	SDK = 2
}

declare const enum logs_proto_mobilesdk_ios_ICoreConfiguration_DeploymentType {

	UNKNOWN = 0,

	COCOAPODS = 1,

	ZIP_FILE = 2,

	CARTHAGE = 3,

	SPM = 4
}

declare const enum logs_proto_mobilesdk_ios_ICoreConfiguration_PodName {

	UNKNOWN_POD_NAME = 0,

	GOOGLE = 1,

	FIREBASE = 2
}

declare const enum logs_proto_mobilesdk_ios_ICoreConfiguration_ServiceType {

	UNKNOWN_SDK_SERVICE = 0,

	ICORE = 1,

	ADMOB = 2,

	APP_INVITE = 3,

	SIGN_IN = 5,

	GCM = 6,

	MAPS = 7,

	SCION = 8,

	ANALYTICS = 9,

	APP_INDEXING = 10,

	CONFIG = 11,

	DURABLE_DEEP_LINKS = 12,

	CRASH = 13,

	AUTH = 14,

	DATABASE = 15,

	STORAGE = 16,

	MESSAGING = 17,

	MEASUREMENT = 18,

	REMOTE_CONFIG = 19,

	DYNAMIC_LINKS = 20,

	INVITES = 21,

	AUTH_UI = 22,

	FIRESTORE = 23,

	PERFORMANCE = 24,

	ML_VISION_ON_DEVICE_FACE = 26,

	ML_VISION_ON_DEVICE_BARCODE = 27,

	ML_VISION_ON_DEVICE_TEXT = 28,

	ML_VISION_ON_DEVICE_LABEL = 29,

	ML_MODEL_INTERPRETER = 30,

	IN_APP_MESSAGING = 31,

	FUNCTIONS = 32,

	ML_NATURAL_LANGUAGE = 33,

	ML_VISION_ON_DEVICE_AUTOML = 34,

	ML_VISION_ON_DEVICE_OBJECT_DETECTION = 35
}

declare var logs_proto_mobilesdk_ios_ICoreConfiguration_fields: interop.Reference<pb_field_s>;
