#import "TNSCrashlyticsLoggerWrapper.h"
@import FirebaseCrashlytics;

@implementation TNSCrashlyticsLoggerWrapper

+ (void)log:(NSString *)string {
    [[FIRCrashlytics crashlytics] logWithFormat:@"%@", string];
}

@end
