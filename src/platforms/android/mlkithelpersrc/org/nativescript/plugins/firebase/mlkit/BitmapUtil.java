package org.nativescript.plugins.firebase.mlkit;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.ImageFormat;
import android.graphics.Rect;
import android.graphics.YuvImage;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class BitmapUtil {

  // TODO pass in
  private static final int DIM_BATCH_SIZE = 1;
  private static final int DIM_PIXEL_SIZE = 3;

  private static final int QUANT_NUM_OF_BYTES_PER_CHANNEL = 1;
  private static final int FLOAT_NUM_OF_BYTES_PER_CHANNEL = 4;

  // see https://firebase.google.com/docs/ml-kit/android/use-custom-models
  public static float[][][][] bitmapToInputArray(Bitmap bitmap, int width, int height) {
    bitmap = Bitmap.createScaledBitmap(bitmap, width, height, true);

    int batchNum = 0;
    float[][][][] input = new float[1][width][height][3];
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < height; y++) {
        int pixel = bitmap.getPixel(x, y);
        // Normalize channel values to [-1.0, 1.0]. This requirement varies by
        // model. For example, some models might require values to be normalized
        // to the range [0.0, 1.0] instead.
        input[batchNum][x][y][0] = (Color.red(pixel) - 127) / 128.0f;
        input[batchNum][x][y][1] = (Color.green(pixel) - 127) / 128.0f;
        input[batchNum][x][y][2] = (Color.blue(pixel) - 127) / 128.0f;
      }
    }

    return input;
  }

  public static ByteBuffer bitmapToByteBuffer(Bitmap bitmap, int width, int height, boolean quantized) {
    // preallocated buffers for storing image data in
    final int[] intValues = new int[width * height];

    int bytesPerChannel = quantized ? QUANT_NUM_OF_BYTES_PER_CHANNEL : FLOAT_NUM_OF_BYTES_PER_CHANNEL;
    ByteBuffer imgData = ByteBuffer.allocateDirect(bytesPerChannel * DIM_BATCH_SIZE * width * height * DIM_PIXEL_SIZE);
    imgData.order(ByteOrder.nativeOrder());
    bitmap = Bitmap.createScaledBitmap(bitmap, width, height, true);
    imgData.rewind();
    bitmap.getPixels(intValues, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
    // Convert the image to int points.
    int pixel = 0;
    for (int i = 0; i < width; ++i) {
      for (int j = 0; j < height; ++j) {
        final int val = intValues[pixel++];
        // Normalize the values according to the model used:
        // Quantized model expects a [0, 255] scale while a float model expects [0, 1].
        if (quantized) {
          imgData.put((byte) ((val >> 16) & 0xFF));
          imgData.put((byte) ((val >> 8) & 0xFF));
          imgData.put((byte) (val & 0xFF));
        } else {
          imgData.putFloat(((val >> 16) & 0xFF) / 255.0f);
          imgData.putFloat(((val >> 8) & 0xFF) / 255.0f);
          imgData.putFloat((val & 0xFF) / 255.0f);
        }
      }
    }
    return imgData;
  }

  public static ByteBuffer byteBufferToByteBuffer(ByteBuffer buffer, int inputWidth, int inputHeight, int modelWidth, int modelHeight, boolean quantized) {
    // preallocated buffers for storing image data in
    final int[] intValues = new int[modelWidth * modelHeight];

    int bytesPerChannel = quantized ? QUANT_NUM_OF_BYTES_PER_CHANNEL : FLOAT_NUM_OF_BYTES_PER_CHANNEL;
    ByteBuffer imgData = ByteBuffer.allocateDirect(bytesPerChannel * DIM_BATCH_SIZE * modelWidth * modelHeight * DIM_PIXEL_SIZE);
    imgData.order(ByteOrder.nativeOrder());
    Bitmap bitmap = createResizedBitmap(buffer, inputWidth, inputHeight, modelWidth, modelHeight);
    imgData.rewind();
    bitmap.getPixels(intValues, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
    // Convert the image to int points.
    int pixel = 0;
    for (int i = 0; i < modelWidth; ++i) {
      for (int j = 0; j < modelHeight; ++j) {
        final int val = intValues[pixel++];
        // Normalize the values according to the model used:
        // Quantized model expects a [0, 255] scale while a float model expects [0, 1].
        if (quantized) {
          imgData.put((byte) ((val >> 16) & 0xFF));
          imgData.put((byte) ((val >> 8) & 0xFF));
          imgData.put((byte) (val & 0xFF));
        } else {
          imgData.putFloat(((val >> 16) & 0xFF) / 255.0f);
          imgData.putFloat(((val >> 8) & 0xFF) / 255.0f);
          imgData.putFloat((val & 0xFF) / 255.0f);
        }
      }
    }
    return imgData;
  }

  public static byte[] byteArrayBitwiseNotHelper(byte[] data) {
    for(int i=0; i< data.length; ++i) {
      data[i] = (byte)~data[i];
    }
    return data;
  }

  private static Bitmap createResizedBitmap(ByteBuffer buffer, int width, int height, int modelWidth, int modelHeight) {
    YuvImage img = new YuvImage(buffer.array(), ImageFormat.NV21, width, height, null);
    ByteArrayOutputStream out = new ByteArrayOutputStream();
    img.compressToJpeg(new Rect(0, 0, img.getWidth(), img.getHeight()), 50, out);
    byte[] imageBytes = out.toByteArray();
    Bitmap bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.length);
    return Bitmap.createScaledBitmap(bitmap, modelWidth, modelHeight, true);
  }
}
