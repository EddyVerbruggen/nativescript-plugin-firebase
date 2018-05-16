#import <CoreMedia/CoreMedia.h>

@class TNSMLKitCameraViewDelegate;

@protocol TNSMLKitCameraViewDelegate <NSObject>

- (void)cameraDidOutputImage:(UIImage *)image;

@end
