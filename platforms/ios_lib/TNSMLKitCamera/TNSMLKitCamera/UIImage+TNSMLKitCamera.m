#import <UIKit/UIKit.h>
#import "UIImage+TNSMLKitCamera.h"

@implementation UIImage (TNSMLKitCamera)

- (NSArray * _Nullable)scaleImageDataWith:(CGSize)size componentsCount:(NSInteger)newComponentsCount batchSize:(NSInteger)batchSize isQuantized:(BOOL)isQuantized {

//    CGImageRef cgImage = CGImageRetain([self CGImage]);

    CGDataProviderRef imgDataProvider = CGDataProviderCreateWithCFData((CFDataRef)UIImageJPEGRepresentation(self, 1.0));
    
    CGImageRef cgImage = CGImageCreateWithJPEGDataProvider(imgDataProvider, NULL, true, kCGRenderingIntentDefault);

    NSUInteger imageWidth = CGImageGetWidth(cgImage);

    if (imageWidth <= 0) {
        return nil;
    }

    NSUInteger bytesPerRow = CGImageGetBytesPerRow(cgImage);
    NSUInteger oldComponentsCount = bytesPerRow / imageWidth;

    if (oldComponentsCount < newComponentsCount) {
        return nil;
    }

    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();

    int newWidth = (int)floor(size.width);
    int newHeight = (int)floor(size.height);

    int dataSize = newWidth * newHeight * (int)oldComponentsCount *(int)batchSize;

    size_t bitsPerComponent = CGImageGetBitsPerComponent(cgImage);
    size_t newBytesPerRow = oldComponentsCount * newWidth;

    unsigned char *imageData = (unsigned char*)calloc(dataSize, sizeof(unsigned char));

//    for (int ii = 0 ; ii < dataSize; ++ii)
//    {
//        imageData[ii] = 0;
//        dataSize[ii] = 0;
//    }
    
//    unsigned char *sourceData = (unsigned char*)calloc(sourceHeight * sourceWidth * 4, sizeof(unsigned char));

    CGContextRef context = CGBitmapContextCreate(NULL, newWidth, newHeight, bitsPerComponent, newBytesPerRow, colorSpace, kCGBitmapByteOrder32Big | kCGImageAlphaPremultipliedLast);

    CGContextDrawImage(context, CGRectMake(0.0f, 0.0f, newWidth, newHeight), cgImage);
    CGContextRelease(context);
//    CGImageRelease(cgImage);
//    NSLog(@">>> CGImageRelease");

    NSMutableArray * scaledImageData = [NSMutableArray new];
    for (int yCoordinate = 0; yCoordinate < newHeight; yCoordinate++) {
        NSMutableArray * rowArray = [NSMutableArray new];
        for (int xCoordinate = 0; xCoordinate < newWidth; xCoordinate++) {
            NSMutableArray * pixelArray = [NSMutableArray new];
            for (int component = 0; component < newComponentsCount; component++) {
                long inputIndex = (yCoordinate * newWidth * oldComponentsCount) + (xCoordinate * oldComponentsCount + component);
                unsigned char pixel = imageData[inputIndex];
                if (isQuantized) {
                    [pixelArray addObject: [NSNumber numberWithUnsignedChar:pixel]];
                } else {
                    // Convert pixel values from [0, 255] to [-1, 1].
                    unsigned char newPixel = (Float32)pixel - (255.0 / 2.0) / (255.0 / 2.0);
//                    pixelArray.append(pixel)
                    [pixelArray addObject: [NSNumber numberWithUnsignedChar:newPixel]];
                }
            }
            [rowArray addObject:pixelArray];
        }
        [scaledImageData addObject:rowArray];
    }

    return [NSArray arrayWithObject:scaledImageData];
}

@end
