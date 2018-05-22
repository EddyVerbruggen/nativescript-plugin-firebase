#import "TNSMLKitCameraView.h"
#import "UIImage+TNSMLKitCamera.h"

@implementation TNSMLKitCameraView

int throttleCounter = 0;

- (id)initWithCaptureSession:(AVCaptureSession *)captureSession {
    AVCaptureVideoDataOutput *dataOutput = [AVCaptureVideoDataOutput new];
    dataOutput.videoSettings = @{ (NSString *)kCVPixelBufferPixelFormatTypeKey : @(kCVPixelFormatType_32BGRA) };
    dataOutput.alwaysDiscardsLateVideoFrames = true;

    if ([captureSession canAddOutput:dataOutput]) {
        [captureSession addOutput:dataOutput];
    }
    [captureSession commitConfiguration];

    dispatch_queue_t queue = dispatch_queue_create("captureQueue", NULL);
    [dataOutput setSampleBufferDelegate:self queue:queue];
    return self;
}

+ (NSArray * _Nullable)resizeImage:(nonnull UIImage *)image {
    int newComponentsCount = 3;
    int batchSize = 1;
    CGSize size = CGSizeMake(224, 224);
    BOOL isQuantized = YES;

    CGImageRef cgImage = [image CGImage];

    NSUInteger imageWidth = CGImageGetWidth(cgImage);

    if (imageWidth <= 0) {
        NSLog(@">>> imageWidth <= 0");
        return nil;
    }

    NSUInteger bytesPerRow = CGImageGetBytesPerRow(cgImage);
    NSUInteger oldComponentsCount = bytesPerRow / imageWidth;

    if (oldComponentsCount < newComponentsCount) {
        NSLog(@">>> oldComponentsCount < newComponentsCount");
        return nil;
    }

    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();

    int newWidth = (int)floor(size.width);
    NSLog(@">>> %d", newWidth);
    int newHeight = (int)floor(size.height);
    NSLog(@">>> %d", newHeight);

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
    NSLog(@">>> context");

    // TODO THIS line crashes because cgImage is probably not retained
    CGContextDrawImage(context, CGRectMake(0.0f, 0.0f, newWidth, newHeight), cgImage);

    NSLog(@">>> context drawn");
    CGContextRelease(context);

    NSMutableArray * scaledImageData = [NSMutableArray new];
    for (int yCoordinate = 0; yCoordinate < newHeight; yCoordinate++) {
        NSMutableArray * rowArray = [NSMutableArray new];
        for (int xCoordinate = 0; xCoordinate < newWidth; xCoordinate++) {
            NSMutableArray * pixelArray = [NSMutableArray new];
            for (int component = 0; component < newComponentsCount; component++) {
                int inputIndex = (yCoordinate * newWidth * oldComponentsCount) + (xCoordinate * oldComponentsCount + component);
                unsigned char pixel = imageData[inputIndex];
                if (isQuantized) {
                    NSLog(@"pixel %hhu", (unsigned char) pixel);
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

#pragma mark - AVCaptureVideoDataOutputSampleBufferDelegate

- (void)captureOutput:(AVCaptureOutput *)output didOutputSampleBuffer:(CMSampleBufferRef)sampleBuffer fromConnection:(AVCaptureConnection *)connection {

    if (self.processEveryXFrames < 1) {
        self.processEveryXFrames = 1;
    }

    if ((throttleCounter++ % self.processEveryXFrames) != 0) {
        return;
    }

    UIImage * image = [self imageFromSampleBuffer:sampleBuffer];
    dispatch_async(dispatch_get_main_queue(), ^{
        [self.delegate cameraDidOutputImage:image];
    });
}

#pragma mark - Helper functions

// Create a UIImage from sample buffer data
- (UIImage *) imageFromSampleBuffer:(CMSampleBufferRef) sampleBuffer
{
    CVImageBufferRef buf = CMSampleBufferGetImageBuffer(sampleBuffer);
    CIImage * ciImage = [CIImage imageWithCVPixelBuffer:buf];
    CIContext * context = [CIContext new];
    CGRect imageRect = CGRectMake(0, 0, CVPixelBufferGetWidth(buf), CVPixelBufferGetHeight(buf));
    struct CGImage * quartzImage = [context createCGImage:ciImage fromRect: imageRect];

    UIImage *image;
    if (self.imageOrientation && self.imageOrientation != UIImageOrientationUp) {
        image = [UIImage imageWithCGImage:quartzImage
                                    scale:1.0f
                              orientation:self.imageOrientation];
    } else {
        image = [UIImage imageWithCGImage:quartzImage];
    }
    CGImageRelease(quartzImage);
    return (image);
}

@end
