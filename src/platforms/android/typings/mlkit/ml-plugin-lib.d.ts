/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module nativescript {
		export module plugins {
			export module firebase {
				export module mlkit {
					export class BitmapUtil {
						public static class: java.lang.Class<org.nativescript.plugins.firebase.mlkit.BitmapUtil>;
						public static bitmapToByteBuffer(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean): java.nio.ByteBuffer;
						public constructor();
						public static yuvImageToByteBuffer(param0: globalAndroid.graphics.YuvImage, param1: number, param2: number, param3: boolean): java.nio.ByteBuffer;
						public static byteBufferToByteBuffer(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: boolean): java.nio.ByteBuffer;
						public static bitmapToInputArray(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): native.Array<native.Array<native.Array<native.Array<number>>>>;
						public static yuvImageToByteBufferDirectly(param0: globalAndroid.graphics.YuvImage, param1: number, param2: number, param3: boolean): java.nio.ByteBuffer;
                        public static byteArrayBitwiseNotHelper(param0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

//Generics information:

