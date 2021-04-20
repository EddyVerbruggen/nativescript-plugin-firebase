
declare function TFL_DeleteInterpreter(interpreter: interop.Pointer | interop.Reference<any>): void;

declare function TFL_DeleteInterpreterOptions(options: interop.Pointer | interop.Reference<any>): void;

declare function TFL_DeleteModel(model: interop.Pointer | interop.Reference<any>): void;

declare function TFL_InterpreterAllocateTensors(interpreter: interop.Pointer | interop.Reference<any>): TfLiteStatus;

declare function TFL_InterpreterGetInputTensorCount(interpreter: interop.Pointer | interop.Reference<any>): number;

declare function TFL_InterpreterGetOutputTensorCount(interpreter: interop.Pointer | interop.Reference<any>): number;

declare function TFL_InterpreterInvoke(interpreter: interop.Pointer | interop.Reference<any>): TfLiteStatus;

declare function TFL_InterpreterOptionsSetNumThreads(options: interop.Pointer | interop.Reference<any>, num_threads: number): void;

declare function TFL_InterpreterResizeInputTensor(interpreter: interop.Pointer | interop.Reference<any>, input_index: number, input_dims: interop.Pointer | interop.Reference<number>, input_dims_size: number): TfLiteStatus;

declare function TFL_NewInterpreter(model: interop.Pointer | interop.Reference<any>, optional_options: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TFL_NewInterpreterOptions(): interop.Pointer | interop.Reference<any>;

declare function TFL_NewModel(model_data: interop.Pointer | interop.Reference<any>, model_size: number): interop.Pointer | interop.Reference<any>;

declare function TFL_NewModelFromFile(model_path: string): interop.Pointer | interop.Reference<any>;

declare function TFL_Version(): string;

interface TfLiteAffineQuantization {
	scale: interop.Pointer | interop.Reference<TfLiteFloatArray>;
	zero_point: interop.Pointer | interop.Reference<TfLiteIntArray>;
	quantized_dimension: number;
}
declare var TfLiteAffineQuantization: interop.StructType<TfLiteAffineQuantization>;

declare const enum TfLiteAllocationType {

	kTfLiteMemNone = 0,

	kTfLiteMmapRo = 1,

	kTfLiteArenaRw = 2,

	kTfLiteArenaRwPersistent = 3,

	kTfLiteDynamic = 4
}

interface TfLiteComplex64 {
	re: number;
	im: number;
}
declare var TfLiteComplex64: interop.StructType<TfLiteComplex64>;

declare const enum TfLiteDelegateFlags {

	kTfLiteDelegateFlagsNone = 0,

	kTfLiteDelegateFlagsAllowDynamicTensors = 1
}

declare const enum TfLiteExternalContextType {

	kTfLiteEigenContext = 0,

	kTfLiteGemmLowpContext = 1,

	kTfLiteEdgeTpuContext = 2,

	kTfLiteCpuBackendContext = 3,

	kTfLiteMaxExternalContexts = 4
}

interface TfLiteFloat16 {
	data: number;
}
declare var TfLiteFloat16: interop.StructType<TfLiteFloat16>;

interface TfLiteFloatArray {
	size: number;
	data: interop.Reference<number>;
}
declare var TfLiteFloatArray: interop.StructType<TfLiteFloatArray>;

declare function TfLiteFloatArrayCreate(size: number): interop.Pointer | interop.Reference<TfLiteFloatArray>;

declare function TfLiteFloatArrayFree(a: interop.Pointer | interop.Reference<TfLiteFloatArray>): void;

declare function TfLiteFloatArrayGetSizeInBytes(size: number): number;

interface TfLiteIntArray {
	size: number;
	data: interop.Reference<number>;
}
declare var TfLiteIntArray: interop.StructType<TfLiteIntArray>;

declare function TfLiteIntArrayCopy(src: interop.Pointer | interop.Reference<TfLiteIntArray>): interop.Pointer | interop.Reference<TfLiteIntArray>;

declare function TfLiteIntArrayCreate(size: number): interop.Pointer | interop.Reference<TfLiteIntArray>;

declare function TfLiteIntArrayEqual(a: interop.Pointer | interop.Reference<TfLiteIntArray>, b: interop.Pointer | interop.Reference<TfLiteIntArray>): number;

declare function TfLiteIntArrayEqualsArray(a: interop.Pointer | interop.Reference<TfLiteIntArray>, b_size: number, b_data: interop.Reference<number>): number;

declare function TfLiteIntArrayFree(a: interop.Pointer | interop.Reference<TfLiteIntArray>): void;

declare function TfLiteIntArrayGetSizeInBytes(size: number): number;

interface TfLiteQuantization {
	type: TfLiteQuantizationType;
	params: interop.Pointer | interop.Reference<any>;
}
declare var TfLiteQuantization: interop.StructType<TfLiteQuantization>;

declare function TfLiteQuantizationFree(quantization: interop.Pointer | interop.Reference<TfLiteQuantization>): void;

interface TfLiteQuantizationParams {
	scale: number;
	zero_point: number;
}
declare var TfLiteQuantizationParams: interop.StructType<TfLiteQuantizationParams>;

declare const enum TfLiteQuantizationType {

	kTfLiteNoQuantization = 0,

	kTfLiteAffineQuantization = 1
}

declare const enum TfLiteStatus {

	kTfLiteOk = 0,

	kTfLiteError = 1
}

declare const enum TfLiteType {

	kTfLiteNoType = 0,

	kTfLiteFloat32 = 1,

	kTfLiteInt32 = 2,

	kTfLiteUInt8 = 3,

	kTfLiteInt64 = 4,

	kTfLiteString = 5,

	kTfLiteBool = 6,

	kTfLiteInt16 = 7,

	kTfLiteComplex64 = 8,

	kTfLiteInt8 = 9,

	kTfLiteFloat16 = 10
}

declare function TfLiteTypeGetName(type: TfLiteType): string;

declare const kTfLiteNullBufferHandle: number;
