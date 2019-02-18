#import "TNSCrashlyticsLoggerWrapper.h"
#import <Crashlytics/Crashlytics.h>

@implementation TNSCrashlyticsLoggerWrapper

+ (void)log:(NSString *)string {
    CLSLog(@"%@", string);
}

@end
