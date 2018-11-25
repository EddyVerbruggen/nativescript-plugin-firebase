#import <UIKit/UIKit.h>

@interface UIImage (TNSMLKitCamera)

- (NSArray * _Nullable)scaleImageDataWith:(CGSize)size componentsCount:(NSInteger)newComponentsCount batchSize:(NSInteger)batchSize isQuantized:(BOOL)isQuantized;

@end
