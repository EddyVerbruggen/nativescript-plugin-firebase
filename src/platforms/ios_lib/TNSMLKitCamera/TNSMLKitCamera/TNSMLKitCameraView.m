#import "TNSMLKitCameraView.h"

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
