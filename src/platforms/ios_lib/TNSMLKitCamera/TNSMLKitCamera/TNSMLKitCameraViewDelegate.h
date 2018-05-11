#import <CoreMedia/CoreMedia.h>

@class TNSMLKitCameraViewDelegate;

@protocol TNSMLKitCameraViewDelegate <NSObject>

- (void)cameraDidOutputSampleBuffer:(UIImage *)sampleBuffer;

@end
