var fs = require('fs');
var path = require('path');
var prompt = require('prompt-lite');

// Default settings for a few prompts
var usingiOS = false, usingAndroid = false, externalPushClientOnly = false;

// The directories where the Podfile and include.gradle are stored
var directories = {
  ios: './platforms/ios',
  android: './platforms/android'
};

console.log('NativeScript Firebase Plugin Installation');

var appRoot = "../../";
var pluginConfigFile = "firebase.nativescript.json";
var pluginConfigPath = path.join(appRoot, pluginConfigFile);
var config = {};

function mergeConfig(result) {
  for (var key in result) {
    config[key] = isSelected(result[key]);
  }
}

function saveConfig() {
  fs.writeFileSync(pluginConfigPath, JSON.stringify(config, null, 4));
}

function readConfig() {
  try {
    config = JSON.parse(fs.readFileSync(pluginConfigPath));
  } catch (e) {
    console.log("Failed reading " + pluginConfigFile);
    console.log(e);
    config = {};
  }
}

function isInteractive() {
  return process.stdin && process.stdin.isTTY && process.stdout && process.stdout.isTTY;
}

// note that for CI builds you want a pluginConfigFile, otherwise the build will fail
if (process.argv.indexOf("config") === -1 && fs.existsSync(pluginConfigPath)) {
  readConfig();
  console.log("Config file exists (" + pluginConfigFile + ")");
  askiOSPromptResult(config);
  askAndroidPromptResult(config);
  askExternalPushMessagingOnlyPromptResult(config);
  promptQuestionsResult(config);
} else if (!isInteractive()) {
  console.log("No existing " + pluginConfigFile + " config file found and terminal is not interactive! Default configuration will be used.");
} else {
  console.log("No existing " + pluginConfigFile + " config file found, so let's configure the Firebase plugin!");
  prompt.start();
  askExternalPushMessagingOnlyPrompt();
}

/**
 * Prompt the user if they are integrating Firebase with iOS
 */
function askExternalPushMessagingOnlyPrompt() {
  prompt.get({
    name: 'external_push_client_only',
    description: 'Are you using this plugin ONLY as a Push Notification client for an external (non-Firebase) Push service? (y/n)',
    default: 'n'
  }, function (err, result) {
    if (err) {
      return console.log(err);
    }
    mergeConfig(result);
    askExternalPushMessagingOnlyPromptResult(result);
    askiOSPrompt();
  });
}

/**
 * Prompt the user if they are integrating Firebase with iOS
 */
function askiOSPrompt() {
  prompt.get({
    name: 'using_ios',
    description: 'Are you using iOS (y/n)',
    default: 'y'
  }, function (err, result) {
    if (err) {
      return console.log(err);
    }
    mergeConfig(result);
    askiOSPromptResult(result);
    askAndroidPrompt();
  });
}

function askExternalPushMessagingOnlyPromptResult(result) {
  if (isSelected(result.external_push_client_only)) {
    externalPushClientOnly = true;
  }
}

function askiOSPromptResult(result) {
  if (isSelected(result.using_ios)) {
    usingiOS = true;
  }
}

/**
 * Prompt the user if they are integrating Firebase with Android
 */
function askAndroidPrompt() {
  prompt.get({
    name: 'using_android',
    description: 'Are you using Android (y/n)',
    default: 'y'
  }, function (err, result) {
    if (err) {
      return console.log(err);
    }
    mergeConfig(result);
    askAndroidPromptResult(result);
    if ((usingiOS || usingAndroid) && !externalPushClientOnly) {
      promptQuestions();
    } else if (externalPushClientOnly) {
      promptQuestionsResult(result);
      askSaveConfigPrompt();
    } else {
      askSaveConfigPrompt();
    }
  });
}

function askAndroidPromptResult(result) {
  if (isSelected(result.using_android)) {
    usingAndroid = true;
  }
}

/**
 * Prompt the user through the configurable Firebase add-on services
 */
function promptQuestions() {
  prompt.get([{
    name: 'firestore',
    description: 'Are you using Firestore? (y/n)',
    default: 'n'
  }, {
    name: 'realtimedb',
    description: 'Are you using Realtime DB? (y/n)',
    default: 'n'
  }, {
    name: 'authentication',
    description: 'Are you using Firebase Authentication (pretty likely if you use Firestore or Realtime DB)? (y/n)',
    default: 'y'
  }, {
    name: 'remote_config',
    description: 'Are you using Firebase RemoteConfig? (y/n)',
    default: 'n'
  }, {
    name: 'performance_monitoring',
    description: 'Are you using Performance Monitoring? (y/n)',
    default: 'n'
  }, {
    name: 'messaging',
    description: 'Are you using Firebase Messaging? (y/n)',
    default: 'n'
  }, {
    name: 'crashlytics',
    description: 'Are you using Firebase Crashlytics? (y/n)',
    default: 'n'
  }, {
    name: 'crash_reporting',
    description: 'Are you using Firebase Crash Reporting? (answer "n" if you want to use Crashlytics instead) (y/n)',
    default: 'n'
  }, {
    name: 'storage',
    description: 'Are you using Firebase Storage? (y/n)',
    default: 'n'
  }, {
    name: 'functions',
    description: 'Are you using Firebase Cloud Functions? (y/n)',
    default: 'n'
  }, {
    name: 'facebook_auth',
    description: 'Are you using Firebase Facebook Authentication? (y/n)',
    default: 'n'
  }, {
    name: 'google_auth',
    description: 'Are you using Firebase Google Authentication? (y/n)',
    default: 'n'
  }, {
    name: 'admob',
    description: 'Are you using AdMob? (y/n)',
    default: 'n'
  }, {
    name: 'invites',
    description: 'Are you using Firebase Invites? (y/n)',
    default: 'n'
  }, {
    name: 'dynamic_links',
    description: 'Are you using Firebase Dynamic Links? (y/n)',
    default: 'n'
  }, {
    name: 'ml_kit',
    description: 'Are you using ML Kit? (y/n)',
    default: 'n'
  }], function (err, result) {
    if (err) {
      return console.log(err);
    }
    if (!isSelected(result.ml_kit)) {
      mergeConfig(result);
      promptQuestionsResult(result);
      askSaveConfigPrompt();
    } else {
      prompt.get([{
        name: 'ml_kit_text_recognition',
        description: 'With Ml Kit, do you want to recognize text? (y/n)',
        default: 'n'
      }, {
        name: 'ml_kit_barcode_scanning',
        description: 'With Ml Kit, do you want to scan barcodes? (y/n)',
        default: 'n'
      }, {
        name: 'ml_kit_face_detection',
        description: 'With Ml Kit, do you want to detect faces? (y/n)',
        default: 'n'
      }, {
        name: 'ml_kit_image_labeling',
        description: 'With Ml Kit, do you want to label images? (y/n)',
        default: 'n'
      }, {
        name: 'ml_kit_custom_model',
        description: 'With Ml Kit, do you want to use a custom TensorFlow Lite model? (y/n)',
        default: 'n'
      }], function (mlkitErr, mlkitResult) {
        if (mlkitErr) {
          return console.log(mlkitErr);
        }
        for (var attrname in mlkitResult) {
          result[attrname] = mlkitResult[attrname];
        }
        mergeConfig(result);
        promptQuestionsResult(result);
        askSaveConfigPrompt();
      });
    }
  });
}

function promptQuestionsResult(result) {
  if (usingiOS) {
    if (!externalPushClientOnly) {
      writePodFile(result);
    }
    writeBuildscriptHookForCrashlytics(isSelected(result.crashlytics));
    writeBuildscriptHookForFirestore(isSelected(result.firestore));
  }

  if (usingAndroid) {
    writeGradleFile(result);
    writeGoogleServiceCopyHook();
    writeGoogleServiceGradleHook(result);
    echoAndroidManifestChanges(result);
    activateAndroidPushNotificationsLib(isSelected(result.messaging) || externalPushClientOnly);
    activateAndroidMLKitCustomModelLib(isSelected(result.ml_kit) && isSelected(result.ml_kit_custom_model));
  }

  console.log('Firebase post install completed. To re-run this script, navigate to the root directory of `nativescript-plugin-firebase` in your `node_modules` folder and run: `npm run config`.');
}

function echoAndroidManifestChanges(result) {
  if (isSelected(result.ml_kit)) {
    var selectedFeatures = [];
    if (isSelected(result.ml_kit_text_recognition)) {
      selectedFeatures.push("ocr");
    }
    if (isSelected(result.ml_kit_barcode_scanning)) {
      selectedFeatures.push("barcode");
    }
    if (isSelected(result.ml_kit_face_detection)) {
      selectedFeatures.push("face");
    }
    if (isSelected(result.ml_kit_image_labeling)) {
      selectedFeatures.push("label");
    }
    if (selectedFeatures.length > 0) {
      console.log('\n######################################################################################################');
      console.log('Open your app\'s resources/Android/AndroidManifest.xml file and add this (see the demo for an example):');
      console.log('<meta-data\n' +
          '    android:name="com.google.firebase.ml.vision.DEPENDENCIES"\n' +
          '    android:value="' + selectedFeatures.join(',') + '" />');
      console.log('######################################################################################################\n');
    }
  }
}

function activateAndroidPushNotificationsLib(enable) {
  if (enable && fs.existsSync(path.join(directories.android, 'firebase-release.aar-disabled'))) {
    fs.renameSync(path.join(directories.android, 'firebase-release.aar-disabled'), path.join(directories.android, 'firebase-release.aar'));
  } else if (!enable && fs.existsSync(path.join(directories.android, 'firebase-release.aar'))) {
    fs.renameSync(path.join(directories.android, 'firebase-release.aar'), path.join(directories.android, 'firebase-release.aar-disabled'));
  }
}

function activateAndroidMLKitCustomModelLib(enable) {
  if (enable && fs.existsSync(path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar-disabled'))) {
    fs.renameSync(path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar-disabled'), path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar'));
  } else if (!enable && fs.existsSync(path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar'))) {
    fs.renameSync(path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar'), path.join(directories.android, 'nativescript-firebase-mlkit-helper.jar-disabled'));
  }
}

function askSaveConfigPrompt() {
  prompt.get({
    name: 'save_config',
    description: 'Do you want to save the selected configuration. Reinstalling the dependency will reuse the setup from: ' + pluginConfigFile + '. CI will be easier. (y/n)',
    default: 'y'
  }, function (err, result) {
    if (err) {
      return console.log(err);
    }
    if (isSelected(result.save_config)) {
      saveConfig();
    }
  });
}

/**
 * Create the iOS PodFile for installing the Firebase iOS dependencies and service dependencies
 *
 * @param {any} result The answers to the micro-service prompts
 */
function writePodFile(result) {
  if (!fs.existsSync(directories.ios)) {
    fs.mkdirSync(directories.ios);
  }
  try {
    fs.writeFileSync(directories.ios + '/Podfile',
// The MLVision pod requires a minimum of iOS 9, otherwise the build will fail
(isPresent(result.ml_kit) ? `` : `#`) + `platform :ios, '9.0'

pod 'Firebase/Core', '~> 5.15.0'

# Authentication
` + (!isPresent(result.authentication) || isSelected(result.authentication) ? `` : `#`) + `pod 'Firebase/Auth'

# Realtime DB
` + (!isPresent(result.realtimedb) || isSelected(result.realtimedb) ? `` : `#`) + `pod 'Firebase/Database'

# Cloud Firestore (sticking to 0.14 for now because of build error - see https://github.com/firebase/firebase-ios-sdk/issues/2177)
` + (isSelected(result.firestore) ? `` : `#`) + `pod 'FirebaseFirestore', '~> 0.14.0'

# Remote Config
` + (isSelected(result.remote_config) ? `` : `#`) + `pod 'Firebase/RemoteConfig'

# Performance Monitoring
` + (isSelected(result.performance_monitoring) ? `` : `#`) + `pod 'Firebase/Performance'

# Crash Reporting
` + (isSelected(result.crash_reporting) && !isSelected(result.crashlytics) ? `` : `#`) + `pod 'Firebase/Crash'

# Crashlytics
` + (isSelected(result.crashlytics) ? `` : `#`) + `pod 'Fabric'
` + (isSelected(result.crashlytics) ? `` : `#`) + `pod 'Crashlytics'
` + (!isSelected(result.crashlytics) ? `` : `
# Crashlytics works best without bitcode
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES'] = "YES"
        end
    end
end`) + `

# Firebase Cloud Messaging (FCM)
` + (isSelected(result.messaging) ? `` : `#`) + `pod 'Firebase/Messaging'

# Firebase Cloud Storage
` + (isSelected(result.storage) ? `` : `#`) + `pod 'Firebase/Storage'

# Firebase Cloud Functions
` + (isSelected(result.functions) ? `` : `#`) + `pod 'Firebase/Functions'

# AdMob
` + (isSelected(result.admob) ? `` : `#`) + `pod 'Firebase/AdMob'

# Invites
` + (isSelected(result.invites) ? `` : `#`) + `pod 'Firebase/Invites'

# Dynamic Links
` + (isSelected(result.dynamic_links) ? `` : `#`) + `pod 'Firebase/DynamicLinks'

# ML Kit
` + (isSelected(result.ml_kit) ? `` : `#`) + `pod 'Firebase/MLVision'
` + (isSelected(result.ml_kit) && isSelected(result.ml_kit_text_recognition) ? `` : `#`) + `pod 'Firebase/MLVisionTextModel'
` + (isSelected(result.ml_kit) && isSelected(result.ml_kit_barcode_scanning) ? `` : `#`) + `pod 'Firebase/MLVisionBarcodeModel'
` + (isSelected(result.ml_kit) && isSelected(result.ml_kit_face_detection) ? `` : `#`) + `pod 'Firebase/MLVisionFaceModel'
` + (isSelected(result.ml_kit) && isSelected(result.ml_kit_image_labeling) ? `` : `#`) + `pod 'Firebase/MLVisionLabelModel'
` + (isSelected(result.ml_kit) && isSelected(result.ml_kit_custom_model) ? `` : `#`) + `pod 'Firebase/MLModelInterpreter'

# Facebook Authentication
` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKCoreKit', '~> 4.38.0'
` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKLoginKit', '~> 4.38.0'

# Google Authentication
` + (isSelected(result.google_auth) ? `` : `#`) + `pod 'GoogleSignIn'`);
    console.log('Successfully created iOS (Pod) file.');
  } catch (e) {
    console.log('Failed to create iOS (Pod) file.');
    console.log(e);
  }
}

/**
 * Create the iOS build script for uploading dSYM files to Crashlytics
 *
 * @param {any} enable Is Crashlytics enabled
 */
function writeBuildscriptHookForCrashlytics(enable) {
  var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-crashlytics-buildscript.js");

  if (!enable) {
    if (fs.existsSync(scriptPath)) {
      fs.unlinkSync(scriptPath);
    }
    return
  }

  console.log("Install Crashlytics buildscript hook.");
  try {
    var scriptContent =
        `const fs = require('fs-extra');
const path = require('path');
const xcode = require('xcode');

const pattern1 = /\\n\\s*\\/\\/Crashlytics 1 BEGIN[\\s\\S]*\\/\\/Crashlytics 1 END.*\\n/m;
const pattern2 = /\\n\\s*\\/\\/Crashlytics 2 BEGIN[\\s\\S]*\\/\\/Crashlytics 2 END.*\\n/m;
const pattern3 = /\\n\\s*\\/\\/Crashlytics 3 BEGIN[\\s\\S]*\\/\\/Crashlytics 3 END.*\\n/m;

const string1 = \`
//Crashlytics 1 BEGIN
#else
#import <Crashlytics/CLSLogging.h>
#endif
//Crashlytics 1 END
\`;

const string2 = \`
//Crashlytics 2 BEGIN
#if DEBUG
#else
static int redirect_cls(const char *prefix, const char *buffer, int size) {
  CLSLog(@"%s: %.*s", prefix, size, buffer);
  return size;
}

static int stderr_redirect(void *inFD, const char *buffer, int size) {
  return redirect_cls("stderr", buffer, size);
}

static int stdout_redirect(void *inFD, const char *buffer, int size) {
  return redirect_cls("stdout", buffer, size);
}
#endif
//Crashlytics 2 END
\`;

const string3 = \`
//Crashlytics 3 BEGIN
#if DEBUG
#else
  // Per https://docs.fabric.io/apple/crashlytics/enhanced-reports.html#custom-logs :
  // Crashlytics ensures that all log entries are recorded, even if the very next line of code crashes.
  // This means that logging must incur some IO. Be careful when logging in performance-critical areas.
  
  // As per the note above, enabling this can affect performance if too much logging is present.
  // stdout->_write = stdout_redirect;
  
  // stderr usually only occurs during critical failures;
  // so it is usually essential to identifying crashes, especially in JS
  stderr->_write = stderr_redirect;
#endif
//Crashlytics 3 END
\`;

module.exports = function($logger, $projectData, hookArgs) {
  const platform = hookArgs.platform.toLowerCase();
  return new Promise(function(resolve, reject) {
    const isNativeProjectPrepared = !hookArgs.nativePrepare || !hookArgs.nativePrepare.skipNativePrepare;
    if (isNativeProjectPrepared) {
      try {
        if (platform === 'ios') {
          const sanitizedAppName = path.basename($projectData.projectDir).split('').filter((c) => /[a-zA-Z0-9]/.test(c)).join('');

          // write buildscript for dSYM upload
          const xcodeProjectPath = path.join($projectData.platformsDir, 'ios', sanitizedAppName + '.xcodeproj', 'project.pbxproj');
          $logger.trace('Using Xcode project', xcodeProjectPath);
          if (fs.existsSync(xcodeProjectPath)) {
            var xcodeProject = xcode.project(xcodeProjectPath);
            xcodeProject.parseSync();
            var options = { shellPath: '/bin/sh', shellScript: '\${PODS_ROOT}/Fabric/run' };
            xcodeProject.addBuildPhase(
              [], 'PBXShellScriptBuildPhase', 'Configure Crashlytics', undefined, options
            ).buildPhase;
            fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());
            $logger.trace('Xcode project written');
          } else {
            $logger.error(xcodeProjectPath + ' is missing.');
            reject();
            return;
          }

          // Logging from stdout/stderr
          $logger.out('Add iOS crash logging');
          const mainmPath = path.join($projectData.platformsDir, 'ios', 'internal', 'main.m');
          if (fs.existsSync(mainmPath)) {
            let mainmContent = fs.readFileSync(mainmPath).toString();
            // string1
            mainmContent = pattern1.test(mainmContent)
              ? mainmContent.replace(pattern1, string1)
              : mainmContent.replace(/(\\n#endif\\n)/, string1);
            // string2
            mainmContent = pattern2.test(mainmContent)
              ? mainmContent.replace(pattern2, string2)
              : mainmContent.replace(/(\\nint main.*)/, string2 + '$1');
            // string3
            mainmContent = pattern3.test(mainmContent)
              ? mainmContent.replace(pattern3, string3)
              : mainmContent.replace(/(int main.*\\n)/, '$1' + string3 + '\\n');
            fs.writeFileSync(mainmPath, mainmContent);
          } else {
            $logger.error(mainmPath + ' is missing.');
            reject();
            return;
          }

          resolve();
        } else {
          resolve();
        }
      } catch (e) {
        $logger.error('Unknown error during prepare Crashlytics', e);
        reject();
      }
    } else {
      $logger.trace("Native project not prepared.");
      resolve();
    }
  });
};
`;
    var afterPrepareDirPath = path.dirname(scriptPath);
    var hooksDirPath = path.dirname(afterPrepareDirPath);
    if (!fs.existsSync(afterPrepareDirPath)) {
      if (!fs.existsSync(hooksDirPath)) {
        fs.mkdirSync(hooksDirPath);
      }
      fs.mkdirSync(afterPrepareDirPath);
    }
    fs.writeFileSync(scriptPath, scriptContent);
  } catch (e) {
    console.log("Failed to install Crashlytics buildscript hook.");
    console.log(e);
  }
}

/**
 * Create the iOS build script for setting the workspace to the legacy build system (for now).
 *
 * @param {any} enable is Firestore enabled
 */
function writeBuildscriptHookForFirestore(enable) {
  var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-firestore-buildscript.js");

  if (!enable) {
    if (fs.existsSync(scriptPath)) {
      fs.unlinkSync(scriptPath);
    }
    return
  }

  console.log("Install Firestore buildscript hook.");
  try {
    var scriptContent =
        `const fs = require('fs-extra');
const path = require('path');

module.exports = function($logger, $projectData, hookArgs) {
  const platform = hookArgs.platform.toLowerCase();
  return new Promise(function(resolve, reject) {
    const isNativeProjectPrepared = !hookArgs.nativePrepare || !hookArgs.nativePrepare.skipNativePrepare;
    if (isNativeProjectPrepared) {
      try {
        if (platform !== 'ios') {
          resolve();
          return;
        }

        const sanitizedAppName = path.basename($projectData.projectDir).split('').filter((c) => /[a-zA-Z0-9]/.test(c)).join('');

        const xcodeWorkspacePath = path.join($projectData.platformsDir, 'ios', sanitizedAppName + '.xcworkspace');
        if (!fs.existsSync(xcodeWorkspacePath)) {
          $logger.error(xcodeWorkspacePath + ' is missing.');
          reject();
          return;
        }

        const xcodeWorkspaceShareddataPath = path.join($projectData.platformsDir, 'ios', sanitizedAppName + '.xcworkspace', 'xcshareddata');
        $logger.trace('Using Xcode workspace settings path', xcodeWorkspaceShareddataPath);
        console.log('Using Xcode workspace settings path: ' + xcodeWorkspaceShareddataPath);

        if (!fs.existsSync(xcodeWorkspaceShareddataPath)) {
          fs.mkdirSync(xcodeWorkspaceShareddataPath);
        }

        const xcodeWorkspaceSettingsFile = path.join(xcodeWorkspaceShareddataPath, 'WorkspaceSettings.xcsettings');
        // for this temp fix we assume that if the file is there, it contains the correct config
        if (!fs.existsSync(xcodeWorkspaceSettingsFile)) {
          fs.writeFileSync(xcodeWorkspaceSettingsFile, \`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>BuildSystemType</key>
	<string>Original</string>
</dict>
</plist>
\`);
          $logger.trace('Xcode workspace file written');
        }
        resolve();

      } catch (e) {
        $logger.error('Unknown error during prepare Firestore', e);
        reject();
      }
    } else {
      $logger.trace("Native project not prepared.");
      resolve();
    }
  });
};
`;
    var afterPrepareDirPath = path.dirname(scriptPath);
    var hooksDirPath = path.dirname(afterPrepareDirPath);
    if (!fs.existsSync(afterPrepareDirPath)) {
      if (!fs.existsSync(hooksDirPath)) {
        fs.mkdirSync(hooksDirPath);
      }
      fs.mkdirSync(afterPrepareDirPath);
    }
    fs.writeFileSync(scriptPath, scriptContent);
  } catch (e) {
    console.log("Failed to install Firestore buildscript hook.");
    console.log(e);
  }
}

/**
 * Create the Android Gradle for installing the Firebase Android dependencies and service dependencies
 *
 * @param {any} result The answers to the micro-service prompts
 */
function writeGradleFile(result) {
  if (!fs.existsSync(directories.android)) {
    fs.mkdirSync(directories.android);
  }
  try {
    fs.writeFileSync(directories.android + '/include.gradle',
        `
android {
    productFlavors {
        "fireb" {
            dimension "fireb"
        }
    }

    // (possibly-temporary) workaround for https://stackoverflow.com/questions/52518378/more-than-one-file-was-found-with-os-independent-path-meta-inf-proguard-android
    packagingOptions {
        exclude 'META-INF/proguard/androidx-annotations.pro'
    }
}

repositories {
    mavenCentral()
    maven {
        url "https://maven.google.com"
    }
    jcenter()
}

def supportVersion = project.hasProperty("supportVersion") ? project.supportVersion : "26.1.0"
def googlePlayServicesVersion = project.hasProperty('googlePlayServicesVersion') ? project.googlePlayServicesVersion : "16.0.1"

if (googlePlayServicesVersion != '+' && VersionNumber.parse(googlePlayServicesVersion) < VersionNumber.parse('15.0.+')) {
    throw new GradleException(" googlePlayServicesVersion set too low, please update to at least 15.0.0 / 15.0.+ (currently set to $googlePlayServicesVersion)");
}

dependencies {
    compile "com.android.support:appcompat-v7:$supportVersion"
    compile "com.android.support:cardview-v7:$supportVersion"
    compile "com.android.support:customtabs:$supportVersion"
    compile "com.android.support:design:$supportVersion"
    compile "com.android.support:support-compat:$supportVersion"

    // make sure you have these versions by updating your local Android SDK's (Android Support repo and Google repo)
    compile "com.google.firebase:firebase-core:16.0.6"

    // compile "com.google.firebase:firebase-analytics:16.0.6"

    // for reading google-services.json and configuration
    compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"

    // Authentication
    ` + (!externalPushClientOnly && (!isPresent(result.authentication) || isSelected(result.authentication)) ? `` : `//`) + ` compile "com.google.firebase:firebase-auth:16.1.0"

    // Realtime DB
    ` + (!externalPushClientOnly && (!isPresent(result.realtimedb) || isSelected(result.realtimedb)) ? `` : `//`) + ` compile "com.google.firebase:firebase-database:16.0.5"

    // Cloud Firestore
    ` + (isSelected(result.firestore) ? `` : `//`) + ` compile "com.google.firebase:firebase-firestore:17.1.5"

    // Remote Config
    ` + (isSelected(result.remote_config) ? `` : `//`) + ` compile "com.google.firebase:firebase-config:16.1.2"

    // Performance Monitoring
    ` + (isSelected(result.performance_monitoring) ? `` : `//`) + ` compile "com.google.firebase:firebase-perf:16.2.3"

    // Crash Reporting
    ` + (isSelected(result.crash_reporting) && !isSelected(result.crashlytics) ? `` : `//`) + ` compile "com.google.firebase:firebase-crash:16.2.1"

    // Crashlytics
    ` + (isSelected(result.crashlytics) ? `` : `//`) + ` compile "com.crashlytics.sdk.android:crashlytics:2.9.7"

    // Cloud Messaging (FCM)
    ` + (isSelected(result.messaging) || externalPushClientOnly ? `` : `//`) + ` compile "com.google.firebase:firebase-messaging:17.3.4"

    // Cloud Storage
    ` + (isSelected(result.storage) ? `` : `//`) + ` compile "com.google.firebase:firebase-storage:16.0.5"

    // Cloud Functions
    ` + (isSelected(result.functions) ? `` : `//`) + ` compile "com.google.firebase:firebase-functions:16.1.3"

    // AdMob / Ads
    ` + (isSelected(result.admob) ? `` : `//`) + ` compile "com.google.firebase:firebase-ads:17.1.2"

    // ML Kit
    ` + (isSelected(result.ml_kit) ? `` : `//`) + ` compile "com.google.firebase:firebase-ml-vision:18.0.2"
    ` + (isSelected(result.ml_kit_image_labeling) ? `` : `//`) + ` compile "com.google.firebase:firebase-ml-vision-image-label-model:17.0.2"
    ` + (isSelected(result.ml_kit_custom_model) ? `` : `//`) + ` compile "com.google.firebase:firebase-ml-model-interpreter:16.2.4"

    // Facebook Authentication
    ` + (isSelected(result.facebook_auth) ? `` : `//`) + ` compile ("com.facebook.android:facebook-android-sdk:4.35.0"){ exclude group: 'com.google.zxing' }

    // Google Sign-In Authentication
    ` + (isSelected(result.google_auth) ? `` : `//`) + ` compile "com.google.android.gms:play-services-auth:16.0.0"

    // Invites
    ` + (isSelected(result.invites) ? `` : `//`) + ` compile "com.google.firebase:firebase-invites:16.0.6"

    // Dynamic Links
    ` + (isSelected(result.dynamic_links) ? `` : `//`) + ` compile "com.google.firebase:firebase-dynamic-links:16.1.5" // BEWARE: 16.1.2 is fine, but 16.1.3 results in a build error
}

apply plugin: "com.google.gms.google-services"

// Crashlytics
` + (isSelected(result.crashlytics) ? `` : `//`) + `apply plugin: "io.fabric"
`);
    console.log('Successfully created Android (include.gradle) file.');
  } catch (e) {
    console.log('Failed to create Android (include.gradle) file.');
    console.log(e);
  }
}

/**
 * Installs an after-prepare build hook to copy the app/App_Resources/Android/google-services.json to platform/android on build.
 * Installs before-checkForChange build hook to detect changes in environment and copy GoogleServices.plist on build.
 */
function writeGoogleServiceCopyHook() {
  // Install after-prepare hook
  console.log("Install google-service.json after-prepare copy hook.");
  try {
    var afterPrepareScriptContent =
        `
var path = require("path");
var fs = require("fs");

module.exports = function($logger, $projectData, hookArgs) {

return new Promise(function(resolve, reject) {

        /* Decide whether to prepare for dev or prod environment */

        var isReleaseBuild = (hookArgs.appFilesUpdaterOptions && hookArgs.appFilesUpdaterOptions.release) ? true : false;
        var validProdEnvs = ['prod','production'];
        var isProdEnv = false; // building with --env.prod or --env.production flag

        if (hookArgs.platformSpecificData.env) {
            Object.keys(hookArgs.platformSpecificData.env).forEach((key) => {
                if (validProdEnvs.indexOf(key)>-1) { isProdEnv=true; }
            });
        }

        var buildType = isReleaseBuild || isProdEnv ? 'production' : 'development';

        /* Create info file in platforms dir so we can detect changes in environment and force prepare if needed */

        var npfInfoPath = path.join($projectData.platformsDir, hookArgs.platform.toLowerCase(), ".pluginfirebaseinfo");
        var npfInfo = {
            buildType: buildType,
        };

        try { fs.writeFileSync(npfInfoPath, JSON.stringify(npfInfo)); }
        catch (err) {
            $logger.info('nativescript-plugin-firebase: unable to create '+npfInfoPath+', prepare will be forced next time!');
        }


        /* Handle preparing of Google Services files */

        if (hookArgs.platform.toLowerCase() === 'android') {
            var destinationGoogleJson = path.join($projectData.platformsDir, "android", "app", "google-services.json");
            var destinationGoogleJsonAlt = path.join($projectData.platformsDir, "android", "google-services.json");
            var sourceGoogleJson = path.join($projectData.appResourcesDirectoryPath, "Android", "google-services.json");
            var sourceGoogleJsonProd = path.join($projectData.appResourcesDirectoryPath, "Android", "google-services.json.prod");
            var sourceGoogleJsonDev = path.join($projectData.appResourcesDirectoryPath, "Android", "google-services.json.dev");

            // ensure we have both dev/prod versions so we never overwrite singlular google-services.json
            if (fs.existsSync(sourceGoogleJsonProd) && fs.existsSync(sourceGoogleJsonDev)) {
                if (buildType==='production') { sourceGoogleJson = sourceGoogleJsonProd; } // use prod version
                else { sourceGoogleJson = sourceGoogleJsonDev; } // use dev version
            }

            // copy correct version to destination
            if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJson))) {
                $logger.out("Copy " + sourceGoogleJson + " to " + destinationGoogleJson + ".");
                fs.writeFileSync(destinationGoogleJson, fs.readFileSync(sourceGoogleJson));
                resolve();
            } else if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJsonAlt))) {
                // NativeScript < 4 doesn't have the 'app' folder
                $logger.out("Copy " + sourceGoogleJson + " to " + destinationGoogleJsonAlt + ".");
                fs.writeFileSync(destinationGoogleJsonAlt, fs.readFileSync(sourceGoogleJson));
                resolve();
            } else {
                $logger.warn("Unable to copy google-services.json.");
                reject();
            }
        } else if (hookArgs.platform.toLowerCase() === 'ios') {
            // we have copied our GoogleService-Info.plist during before-checkForChanges hook, here we delete it to avoid changes in git
            var destinationGooglePlist = path.join($projectData.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist");
            var sourceGooglePlistProd = path.join($projectData.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist.prod");
            var sourceGooglePlistDev = path.join($projectData.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist.dev");

            // if we have both dev/prod versions, let's remove GoogleService-Info.plist in destination dir
            if (fs.existsSync(sourceGooglePlistProd) && fs.existsSync(sourceGooglePlistDev)) {
                if (fs.existsSync(destinationGooglePlist)) { fs.unlinkSync(destinationGooglePlist); }
                resolve();
            } else { // single GoogleService-Info.plist modus
                resolve();
            }
        } else {
            resolve();
        }
    });
};
`;
    var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-copy-google-services.js");
    var afterPrepareDirPath = path.dirname(scriptPath);
    var hooksDirPath = path.dirname(afterPrepareDirPath);
    if (!fs.existsSync(afterPrepareDirPath)) {
      if (!fs.existsSync(hooksDirPath)) {
        fs.mkdirSync(hooksDirPath);
      }
      fs.mkdirSync(afterPrepareDirPath);
    }
    fs.writeFileSync(scriptPath, afterPrepareScriptContent);
  } catch (e) {
    console.log("Failed to install google-service.json after-prepare copy hook.");
    console.log(e);
  }

  /*
     Install before-checkForChanges hook
  */

  console.log("Install google-service.json before-checkForChanges copy hook.");
  try {
    var beforeCheckForChangesContent =
        `
var path = require("path");
var fs = require("fs");

module.exports = function($logger, $projectData, hookArgs) {
    return new Promise(function(resolve, reject) {

        /* Decide whether to prepare for dev or prod environment */

        var isReleaseBuild = hookArgs['checkForChangesOpts']['projectData']['$options']['argv']['release'] || false;
        var validProdEnvs = ['prod','production'];
        var isProdEnv = false; // building with --env.prod or --env.production flag

        var env = hookArgs['checkForChangesOpts']['projectData']['$options']['argv']['env'];
        if (env) {
            Object.keys(env).forEach((key) => {
                if (validProdEnvs.indexOf(key)>-1) { isProdEnv=true; }
            });
        }

        var buildType = isReleaseBuild || isProdEnv ? 'production' : 'development';

        /*
            Detect if we have nativescript-plugin-firebase temp file created during after-prepare hook, so we know
            for which environment {development|prod} the project was prepared. If needed, we delete the NS .nsprepareinfo
            file so we force a new prepare
        */
        var platform = hookArgs['checkForChangesOpts']['platform'].toLowerCase(); // ios | android
        var platformsDir = hookArgs['checkForChangesOpts']['projectData']['platformsDir'];
        var appResourcesDirectoryPath = hookArgs['checkForChangesOpts']['projectData']['appResourcesDirectoryPath'];
        var forcePrepare = true; // whether to force NS to run prepare, defaults to true
        var npfInfoPath = path.join(platformsDir, platform, ".pluginfirebaseinfo");
        var nsPrepareInfoPath = path.join(platformsDir, platform, ".nsprepareinfo");
        var copyPlistOpts = { platform, appResourcesDirectoryPath, buildType, $logger }

        if (fs.existsSync(npfInfoPath)) {
            var npfInfo = undefined;
            try { npfInfo = JSON.parse(fs.readFileSync(npfInfoPath, 'utf8')); }
            catch (e) { $logger.info('nativescript-plugin-firebase: error reading '+npfInfoPath); }

            if (npfInfo && npfInfo.hasOwnProperty('buildType') && npfInfo.buildType===buildType) {
                $logger.info('nativescript-plugin-firebase: building for same environment, not forcing prepare.');
                forcePrepare=false;
            }
        } else { $logger.info('nativescript-plugin-firebase: '+npfInfoPath+' not found, forcing prepare!'); }

        if (forcePrepare && fs.existsSync(nsPrepareInfoPath)) {
            $logger.info('nativescript-plugin-firebase: running release build or change in environment detected, forcing prepare!');

            if (fs.existsSync(npfInfoPath)) { fs.unlinkSync(npfInfoPath); }
            if (fs.existsSync(nsPrepareInfoPath)) { fs.unlinkSync(nsPrepareInfoPath); }

            if (copyPlist(copyPlistOpts)) { resolve(); } else { reject(); }
        } else { resolve(); }
    });
};

/*
    Handle preparing of Google Services files for iOS
*/
var copyPlist = function(copyPlistOpts) {
    if (copyPlistOpts.platform === 'android') { return true; }
    else if (copyPlistOpts.platform === 'ios') {
        var sourceGooglePlistProd = path.join(copyPlistOpts.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist.prod");
        var sourceGooglePlistDev = path.join(copyPlistOpts.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist.dev");
        var destinationGooglePlist = path.join(copyPlistOpts.appResourcesDirectoryPath, "iOS", "GoogleService-Info.plist");

        // if we have both dev/prod versions, we copy (or overwrite) GoogleService-Info.plist in destination dir
        if (fs.existsSync(sourceGooglePlistProd) && fs.existsSync(sourceGooglePlistDev)) {
            if (copyPlistOpts.buildType==='production') { // use prod version
                copyPlistOpts.$logger.out("nativescript-plugin-firebase: copy " + sourceGooglePlistProd + " to " + destinationGooglePlist + ".");
                fs.writeFileSync(destinationGooglePlist, fs.readFileSync(sourceGooglePlistProd));
                return true;
            } else { // use dev version
                copyPlistOpts.$logger.out("nativescript-plugin-firebase: copy " + sourceGooglePlistDev + " to " + destinationGooglePlist + ".");
                fs.writeFileSync(destinationGooglePlist, fs.readFileSync(sourceGooglePlistDev));
                return true;
            }
        } else if (!fs.existsSync(destinationGooglePlist)) { // single GoogleService-Info.plist modus but missing`;
    if (externalPushClientOnly) {
      beforeCheckForChangesContent += `
            return true; // this is a push-only project, so this is allowed`;
    } else {
      beforeCheckForChangesContent += `
            copyPlistOpts.$logger.warn("nativescript-plugin-firebase: " + destinationGooglePlist + " does not exist. Please follow the installation instructions from the documentation");
            return false;`;
    }
    beforeCheckForChangesContent += `
        } else {
            return true; // single GoogleService-Info.plist modus
        }
    } else { return true; }
}
`;
    var scriptPath = path.join(appRoot, "hooks", "before-checkForChanges", "firebase-copy-google-services.js");
    var afterPrepareDirPath = path.dirname(scriptPath);
    var hooksDirPath = path.dirname(afterPrepareDirPath);
    if (!fs.existsSync(afterPrepareDirPath)) {
      if (!fs.existsSync(hooksDirPath)) {
        fs.mkdirSync(hooksDirPath);
      }
      fs.mkdirSync(afterPrepareDirPath);
    }
    fs.writeFileSync(scriptPath, beforeCheckForChangesContent);
  } catch (e) {
    console.log("Failed to install google-service.json before-checkForChanges copy hook.");
    console.log(e);
  }
}

function writeGoogleServiceGradleHook(result) {
  try {
    var scriptContent =
        `var path = require("path");
var fs = require("fs");

module.exports = function($logger, $projectData) {

    return new Promise(function(resolve, reject) {
        $logger.out("Configure firebase");
        let projectBuildGradlePath = path.join($projectData.platformsDir, "android", "build.gradle");
        if (fs.existsSync(projectBuildGradlePath)) {
            let buildGradleContent = fs.readFileSync(projectBuildGradlePath).toString();

            if (buildGradleContent.indexOf("fabric.io") === -1) {
                let repositoriesNode = buildGradleContent.indexOf("repositories", 0);
                if (repositoriesNode > -1) {
                    repositoriesNode = buildGradleContent.indexOf("}", repositoriesNode);
                    buildGradleContent = buildGradleContent.substr(0, repositoriesNode - 1) + '\\t\\tmaven { url "https://maven.fabric.io/public" }\\n\\t\\tmaven { url "https://dl.bintray.com/android/android-tools" }\\n' + buildGradleContent.substr(repositoriesNode - 1);
                }

                let dependenciesNode = buildGradleContent.indexOf("dependencies", 0);
                if (dependenciesNode > -1) {
                    dependenciesNode = buildGradleContent.indexOf("}", dependenciesNode);
                    // see https://docs.fabric.io/android/changelog.html
                    buildGradleContent = buildGradleContent.substr(0, dependenciesNode - 1) + '	    classpath "io.fabric.tools:gradle:1.26.1"\\n' + buildGradleContent.substr(dependenciesNode - 1);
                }

            } else if (buildGradleContent.indexOf("https://dl.bintray.com/android/android-tools") === -1) {
                let repositoriesNode = buildGradleContent.indexOf("repositories", 0);
                if (repositoriesNode > -1) {
                    repositoriesNode = buildGradleContent.indexOf("}", repositoriesNode);
                    buildGradleContent = buildGradleContent.substr(0, repositoriesNode - 1) + '\\t\\tmaven { url "https://dl.bintray.com/android/android-tools" }\\n' + buildGradleContent.substr(repositoriesNode - 1);
                }
            }

            let gradlePattern = /classpath ('|")com\\.android\\.tools\\.build:gradle:\\d+\\.\\d+\\.\\d+('|")/;
            let googleServicesPattern = /classpath ('|")com\\.google\\.gms:google-services:\\d+\\.\\d+\\.\\d+('|")/;
            let latestGoogleServicesPlugin = 'classpath "com.google.gms:google-services:4.2.0"';
            if (googleServicesPattern.test(buildGradleContent)) {
                buildGradleContent = buildGradleContent.replace(googleServicesPattern, latestGoogleServicesPlugin);
            } else {
                buildGradleContent = buildGradleContent.replace(gradlePattern, function (match) {
                    return match + '\\n        ' + latestGoogleServicesPlugin;
                });
            }

            buildGradleContent = buildGradleContent.replace("com.android.tools.build:gradle:3.2.0", "com.android.tools.build:gradle:3.2.1");

            fs.writeFileSync(projectBuildGradlePath, buildGradleContent);
        }

        let projectAppBuildGradlePath = path.join($projectData.platformsDir, "android", "app", "build.gradle");
        if (fs.existsSync(projectAppBuildGradlePath)) {
          let appBuildGradleContent = fs.readFileSync(projectAppBuildGradlePath).toString();
          if (appBuildGradleContent.indexOf("buildMetadata.finalizedBy(copyMetadata)") === -1) {
            appBuildGradleContent = appBuildGradleContent.replace("ensureMetadataOutDir.finalizedBy(buildMetadata)", "ensureMetadataOutDir.finalizedBy(buildMetadata)\\n\\t\\tbuildMetadata.finalizedBy(copyMetadata)");
            appBuildGradleContent += \`
task copyMetadata {
  doLast {
    copy {
        from "$projectDir/src/main/assets/metadata"
        def toDir = project.hasProperty("release") ? "release" : "debug"
        def toAssetsDir = "assets"

        if (new File("$projectDir/build/intermediates/merged_assets").listFiles() != null) {
          toAssetsDir = "merged_assets"
          toDir = new File("$projectDir/build/intermediates/merged_assets").listFiles()[0].name
          if (toDir == 'debug') {
            toDir += "/mergeDebugAssets"
          } else {
            toDir += "/mergeReleaseAssets"
          }
          toDir += "/out"
        } else if (new File("$projectDir/build/intermediates/assets").listFiles() != null) {
          toDir = new File("$projectDir/build/intermediates/assets").listFiles()[0].name
          if (toDir != 'debug' && toDir != 'release') {
            toDir += "/release"
          }
        }

        into "$projectDir/build/intermediates/" + toAssetsDir + "/" + toDir + "/metadata"
    }
  }
}\`;
            fs.writeFileSync(projectAppBuildGradlePath, appBuildGradleContent);
          }
        }

        resolve();
    });
};
`;
    var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-build-gradle.js");
    fs.writeFileSync(scriptPath, scriptContent);
  } catch (e) {
    console.log("Failed to install firebase-build-gradle hook.");
    console.log(e);
  }
}

/**
 * Determines if the answer validates as selected
 *
 * @param {any} value The user input for a prompt
 * @returns {boolean} The answer is yes, {false} The answer is no
 */
function isSelected(value) {
  return value === true || (typeof value === "string" && value.toLowerCase() === 'y');
}

function isPresent(value) {
  return value !== undefined;
}
