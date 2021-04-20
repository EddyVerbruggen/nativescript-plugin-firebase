#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import "TNSMLKitCameraViewDelegate.h"

@interface TNSMLKitCameraView : UIViewController<AVCaptureVideoDataOutputSampleBufferDelegate>

@property (nonatomic, strong) id<TNSMLKitCameraViewDelegate> __nullable delegate;
@property (nonatomic) int processEveryXFrames;
@property (nonatomic) UIImageOrientation imageOrientation;

- (nonnull id)initWithCaptureSession:(nonnull AVCaptureSession *)captureSession;
+ (NSArray * _Nullable)resizeImage:(nonnull UIImage *)image;
+ (NSMutableData * _Nullable)getInputData:(nonnull UIImage *)img withRows:(int) rows andColumns:(int) columns andType:(NSString *) type;

+ (NSData *)scaledData:(nonnull UIImage *)img
              withSize:(CGSize)size
             byteCount:(int)byteCount
           isQuantized:(BOOL)isQuantized;

@end
