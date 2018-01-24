var fs = require('fs');
var path = require('path');
var prompt = require('prompt-lite');

// Default settings for using ios and android with Firebase
var usingiOS = false, usingAndroid = false;

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
    } catch(e) {
        console.log("Failed reading " + pluginConfigFile);
        console.log(e);
        config = {};
    }
}
function isInteractive() {
    return process.stdin && process.stdin.isTTY && process.stdout && process.stdout.isTTY;
}

// workaround for https://github.com/NativeScript/nativescript-cli/issues/2521 (2.5.0 only)
var nativeScriptVersion = "";
try {
  nativeScriptVersion = __webpack_require__(/*! child_process */ 2).execSync('nativescript --version');
} catch (err) {
  // On some environments nativescript is not in the PATH
  // Ignore the error
}

var isNativeScriptCLI250 = nativeScriptVersion.indexOf("2.5.0") !== -1;

// note that for CI builds you want a pluginConfigFile, otherwise the build will fail
if (process.argv.indexOf("config") === -1 && fs.existsSync(pluginConfigPath)) {
    readConfig();
    console.log("Config file exists (" + pluginConfigFile + ")");
    askiOSPromptResult(config);
    askAndroidPromptResult(config);
    promptQuestionsResult(config);
} else if (isNativeScriptCLI250 && process.argv.indexOf("setup") === -1) {
    console.log("*******************************************************************");
    console.log("*******************************************************************");
    console.log("************************** IMPORTANT: *****************************");
    console.log("*******************  with nativescript 2.5.0  *********************");
    console.log("************** now execute 'npm run setup' manually ***************");
    console.log("***** in the node_modules/nativescript-plugin-firebase folder *****");
    console.log("*******************************************************************");
    console.log("*******************************************************************");
} else if (!isInteractive()) {
    console.log("No existing " + pluginConfigFile + " config file found and terminal is not interactive! Default configuration will be used.");
} else {
    console.log("No existing " + pluginConfigFile + " config file found, so let's configure the Firebase plugin!");
    prompt.start();
    askiOSPrompt();
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
        if (usingiOS || usingAndroid) {
            promptQuestions();
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
        description: 'Are you using Cloud Firestore (y/n)',
        default: 'n'
    }, {
        name: 'realtimedb',
        description: 'Are you using Realtime DB (y/n)',
        default: 'n'
    }, {
        name: 'remote_config',
        description: 'Are you using Firebase RemoteConfig (y/n)',
        default: 'n'
    }, {
        name: 'messaging',
        description: 'Are you using Firebase Messaging (y/n)',
        default: 'n'
    }, {
        name: 'crash_reporting',
        description: 'Are you using Firebase Crash Reporting (y/n)',
        default: 'n'
    }, {
        name: 'crashlytics',
        description: 'Are you using Firebase Crashlytics (y/n)',
        default: 'n'
    }, {
        name: 'storage',
        description: 'Are you using Firebase Storage (y/n)',
        default: 'n'
    }, {
        name: 'facebook_auth',
        description: 'Are you using Firebase Facebook Authentication (y/n)',
        default: 'n'
    }, {
        name: 'google_auth',
        description: 'Are you using Firebase Google Authentication (y/n)',
        default: 'n'
    }, {
      name: 'admob',
      description: 'Are you using AdMob (y/n)',
      default: 'n'
    }, {
        name: 'invites',
        description: 'Are you using Firebase Invites and/or Dynamic Links (y/n)',
        default: 'n'
    }], function (err, result) {
        if (err) {
            return console.log(err);
        }
        mergeConfig(result);
        promptQuestionsResult(result);
        askSaveConfigPrompt();
    });
}
function promptQuestionsResult(result) {
    if (usingiOS) {
        writePodFile(result);
        exposeAdMobSymbols(isSelected(result.admob));
        writeBuildscriptHook(isSelected(result.crashlytics));
    }
    if (usingAndroid) {
        writeGradleFile(result);
        writeGoogleServiceCopyHook();
        writeGoogleServiceGradleHook(result);
    }
    console.log('Firebase post install completed. To re-run this script, navigate to the root directory of `nativescript-plugin-firebase` in your `node_modules` folder and run: `npm run config`.');
}

function exposeAdMobSymbols(enable) {
    if (enable && fs.existsSync(directories.ios + '/build.xcconfig.admob')) {
        fs.renameSync(directories.ios + '/build.xcconfig.admob', directories.ios + '/build.xcconfig');
    } else if (!enable && fs.existsSync(directories.ios + '/build.xcconfig')) {
        fs.renameSync(directories.ios + '/build.xcconfig', directories.ios + '/build.xcconfig.admob');
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
    if(!fs.existsSync(directories.ios)) {
        fs.mkdirSync(directories.ios);
    }
    try {
        fs.writeFileSync(directories.ios + '/Podfile',
`pod 'Firebase', '~> 4.8.0'
pod 'Firebase/Auth'

# Uncomment if you want to enable Realtime DB
` + (!isPresent(result.realtimedb) || isSelected(result.realtimedb) ? `` : `#`) + `pod 'Firebase/Database'

# Uncomment if you want to enable Cloud Firestore
` + (isSelected(result.firestore) ? `` : `#`) + `pod 'Firebase/Firestore'

# Uncomment if you want to enable Remote Config
` + (isSelected(result.remote_config) ? `` : `#`) + `pod 'Firebase/RemoteConfig'

# Uncomment if you want to enable Crash Reporting
` + (isSelected(result.crash_reporting) && !isSelected(result.crashlytics) ? `` : `#`) + `pod 'Firebase/Crash'

# Uncomment if you want to enable Crashlytics
` + (isSelected(result.crashlytics) ? `` : `#`) + `pod 'Fabric'
` + (isSelected(result.crashlytics) ? `` : `#`) + `pod 'Crashlytics'
# Crashlytics works best without bitcode
` + (isSelected(result.crashlytics) ? `` : `#`) + `post_install do |installer|
` + (isSelected(result.crashlytics) ? `` : `#`) + `    installer.pods_project.targets.each do |target|
` + (isSelected(result.crashlytics) ? `` : `#`) + `        target.build_configurations.each do |config|
` + (isSelected(result.crashlytics) ? `` : `#`) + `            config.build_settings['ENABLE_BITCODE'] = "NO"
` + (isSelected(result.crashlytics) ? `` : `#`) + `        end
` + (isSelected(result.crashlytics) ? `` : `#`) + `    end
` + (isSelected(result.crashlytics) ? `` : `#`) + `end

# Uncomment if you want to enable FCM (Firebase Cloud Messaging)
` + (isSelected(result.messaging) ? `` : `#`) + `pod 'Firebase/Messaging'

# Uncomment if you want to enable Firebase Storage
` + (isSelected(result.storage) ? `` : `#`) + `pod 'Firebase/Storage'

# Uncomment if you want to enable AdMob
` + (isSelected(result.admob) ? `` : `#`) + `pod 'Firebase/AdMob'

# Uncomment if you want to enable Invites and/or Dynamic Links
` + (isSelected(result.invites) ? `` : `#`) + `pod 'Firebase/Invites'

# Uncomment if you want to enable Facebook Authentication
` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKCoreKit'
` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKLoginKit'

# Uncomment if you want to enable Google Authentication
` + (isSelected(result.google_auth) ? `` : `#`) + `pod 'GoogleSignIn'`);
        console.log('Successfully created iOS (Pod) file.');
    } catch(e) {
        console.log('Failed to create iOS (Pod) file.');
        console.log(e);
    }
}

/**
 * Create the iOS build script for uploading dSYM files to Crashlytics
 *
 * @param {any} enable Is Crashlytics enbled
 */
function writeBuildscriptHook(enable) {
    if (!enable) {
        return
    }
    console.log("Install Crashlytics buildscript hook.");
    try {
        var scriptContent =
`var fs = require('fs-extra');
var path = require('path');
var xcode = require('xcode');


module.exports = function($logger, $projectData, hookArgs) {
  var platform = hookArgs.platform.toLowerCase();
  return new Promise(function(resolve, reject) {
    var isNativeProjectPrepared = !hookArgs.nativePrepare || !hookArgs.nativePrepare.skipNativePrepare;
    if (isNativeProjectPrepared) {
      try {
        if (platform === 'ios') {
          var appName = path.basename($projectData.projectDir);
          var sanitizedName = appName.split('').filter(function(c) { return /[a-zA-Z0-9]/.test(c); }).join('');
          var projectPath = path.join($projectData.projectDir, 'platforms', 'ios', sanitizedName + '.xcodeproj', 'project.pbxproj');
          $logger.trace('Using Xcode project', projectPath);
          var xcodeProject = xcode.project(projectPath);
          xcodeProject.parseSync();
          var options = { shellPath: '/bin/sh', shellScript: '\${PODS_ROOT}/Fabric/run' };
          var buildPhase = xcodeProject.addBuildPhase([], 'PBXShellScriptBuildPhase', 'Configure Crashlytics', xcodeProject.getFirstTarget().uuid, options).buildPhase;
          fs.writeFileSync(projectPath, xcodeProject.writeSync());
          $logger.trace('Xcode project written');
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
        var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-crashlytics-buildscript.js");
        var afterPrepareDirPath = path.dirname(scriptPath);
        var hooksDirPath = path.dirname(afterPrepareDirPath);
        if (!fs.existsSync(afterPrepareDirPath)) {
            if (!fs.existsSync(hooksDirPath)) {
                fs.mkdirSync(hooksDirPath);
            }
            fs.mkdirSync(afterPrepareDirPath);
        }
        fs.writeFileSync(scriptPath, scriptContent);
    } catch(e) {
        console.log("Failed to install Crashlytics buildscript hook.");
        console.log(e);
    }
}

/**
 * Create the Android Gradle for installing the Firebase Android dependencies and service dependencies
 *
 * @param {any} result The answers to the micro-service prompts
 */
function writeGradleFile(result) {
     if(!fs.existsSync(directories.android)) {
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
}

repositories {
    jcenter()
    mavenCentral()
    maven {
        url "https://maven.google.com"
    }
}

def supportVersion = project.hasProperty("supportVersion") ? project.supportVersion : "26.0.0"

dependencies {
    compile "com.android.support:appcompat-v7:$supportVersion"
    compile "com.android.support:cardview-v7:$supportVersion"
    compile "com.android.support:customtabs:$supportVersion"
    compile "com.android.support:design:$supportVersion"
    compile "com.android.support:support-compat:$supportVersion"

    def firebaseVersion = "11.8.0"

    // make sure you have these versions by updating your local Android SDK's (Android Support repo and Google repo)
    compile "com.google.firebase:firebase-core:$firebaseVersion"
    compile "com.google.firebase:firebase-auth:$firebaseVersion"

    // for converting Java objects to JS
    compile "com.google.code.gson:gson:2.8.+"

    // for reading google-services.json and configuration
    def googlePlayServicesVersion = project.hasProperty('googlePlayServicesVersion') ? project.googlePlayServicesVersion : firebaseVersion
    compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"

    // Uncomment if you want to use the regular Database
    ` + (!isPresent(result.realtimedb) || isSelected(result.realtimedb) ? `` : `//`) + ` compile "com.google.firebase:firebase-database:$firebaseVersion"

    // Uncomment if you want to use 'Cloud Firestore'
    ` + (isSelected(result.firestore) ? `` : `//`) + ` compile "com.google.firebase:firebase-firestore:$firebaseVersion"

    // Uncomment if you want to use 'Remote Config'
    ` + (isSelected(result.remote_config) ? `` : `//`) + ` compile "com.google.firebase:firebase-config:$firebaseVersion"

    // Uncomment if you want to use 'Crash Reporting'
    ` + (isSelected(result.crash_reporting) && !isSelected(result.crashlytics) ? `` : `//`) + ` compile "com.google.firebase:firebase-crash:$firebaseVersion"
    
    // Uncomment if you want to use 'Crashlytics'
    ` + (isSelected(result.crashlytics) ? `` : `//`) + ` compile("com.crashlytics.sdk.android:crashlytics:2.7.1@aar") {
    ` + (isSelected(result.crashlytics) ? `` : `//`) + `    transitive = true
    ` + (isSelected(result.crashlytics) ? `` : `//`) + ` }

    // Uncomment if you want FCM (Firebase Cloud Messaging)
    ` + (isSelected(result.messaging) ? `` : `//`) + ` compile "com.google.firebase:firebase-messaging:$firebaseVersion"

    // Uncomment if you want Google Cloud Storage
    ` + (isSelected(result.storage) ? `` : `//`) + ` compile "com.google.firebase:firebase-storage:$firebaseVersion"

    // Uncomment if you want AdMob
    ` + (isSelected(result.admob) ? `` : `//`) + ` compile "com.google.firebase:firebase-ads:$firebaseVersion"

    // Uncomment if you need Facebook Authentication
    ` + (isSelected(result.facebook_auth) ? `` : `//`) + ` compile ("com.facebook.android:facebook-android-sdk:4.+"){ exclude group: 'com.google.zxing' }

    // Uncomment if you need Google Sign-In Authentication
    ` + (isSelected(result.google_auth) ? `` : `//`) + ` compile "com.google.android.gms:play-services-auth:$googlePlayServicesVersion"

    // Uncomment if you need Firebase Invites or Dynamic Links
    ` + (isSelected(result.invites) ? `` : `//`) + ` compile "com.google.firebase:firebase-invites:$firebaseVersion"
}

apply plugin: "com.google.gms.google-services"
`);
        console.log('Successfully created Android (include.gradle) file.');
    } catch(e) {
        console.log('Failed to create Android (include.gradle) file.');
        console.log(e);
    }
}

/**
 * Installs an after-prepare build hook to copy the app/App_Resources/Android/google-services.json to platform/android on build.
 */
function writeGoogleServiceCopyHook() {
    console.log("Install google-service.json copy hook.");
    try {
        var scriptContent =
`
var path = require("path");
var fs = require("fs");

module.exports = function() {

    var sourceGoogleJson = path.join(__dirname, "..", "..", "app", "App_Resources", "Android", "google-services.json");
    var destinationGoogleJson = path.join(__dirname, "..", "..", "platforms", "android", "google-services.json");
    if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJson))) {
        console.log("Copy " + sourceGoogleJson + " to " + destinationGoogleJson + ".");
        fs.writeFileSync(destinationGoogleJson, fs.readFileSync(sourceGoogleJson));
    }
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
        fs.writeFileSync(scriptPath, scriptContent);
    } catch(e) {
        console.log("Failed to install google-service.json copy hook.");
        console.log(e);
    }
}

function writeGoogleServiceGradleHook(result) {
    console.log("Install firebase-build-gradle hook.");
    try {
        var scriptContent =
`
var path = require("path");
var fs = require("fs");

module.exports = function() {

    console.log("Configure firebase");
    let projectBuildGradlePath = path.join(__dirname, "..", "..", "platforms", "android", "build.gradle");
    if (fs.existsSync(projectBuildGradlePath)) {
        let buildGradleContent = fs.readFileSync(projectBuildGradlePath).toString();
        
        // Crashlytics requires Firebase >= 11.8.0
        // Firebase 11.8.0 requires google-services plugin >= 3.1.2
        // google-services plugin 3.1.2 requires gradle-plugin >= 3.0.1
        // gradle-plugin 3.0.1 requires buildToolsVersion >=26.0.3
        let gradlePattern = /classpath ('|")com\\.android\\.tools\\.build:gradle:\\d+\\.\\d+\\.\\d+('|")/;
        let latestGradlePlugin = 'classpath "com.android.tools.build:gradle:3.0.1"';
        buildGradleContent = buildGradleContent.replace(gradlePattern, latestGradlePlugin);
        
        let latestGoogleServicesPlugin = 'classpath "com.google.gms:google-services:3.1.2"';
        let googleServicesPattern = /classpath ('|")com\\.google\\.gms:google-services:\\d+\\.\\d+\\.\\d+('|")/;
        if (googleServicesPattern.test(buildGradleContent)) {
            buildGradleContent = buildGradleContent.replace(googleServicesPattern, latestGoogleServicesPlugin);
        } else {
            buildGradleContent = buildGradleContent.replace(gradlePattern, function (match) {
                return match + '\\n        ' + latestGoogleServicesPlugin;
            });
        }

        // for Crashlytics
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let latestFabricPlugin = 'classpath "io.fabric.tools:gradle:1.24.4"';
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let fabricPattern = /classpath ('|")io\\.fabric\\.tools:gradle:\\d+\\.\\d+\\.\\d+('|")/;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `if (fabricPattern.test(buildGradleContent)) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    buildGradleContent = buildGradleContent.replace(fabricPattern, latestFabricPlugin);
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `} else {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    buildGradleContent = buildGradleContent.replace(googleServicesPattern, function (match) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `        return match + '\\n        ' + latestFabricPlugin;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    });
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `}
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let mavenFabricRepo = 'maven { url "https://maven.fabric.io/public" }';
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let mavenGoogleRepo = 'maven { url "https://maven.google.com/" }';
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `if (!RegExp(mavenFabricRepo).test(buildGradleContent) || !RegExp(mavenGoogleRepo).test(buildGradleContent)) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    let matchIndex = 0;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    buildGradleContent = buildGradleContent.replace(/jcenter\\(\\)/g, function (match) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `      if (matchIndex === 0) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `        matchIndex++;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `        return 'jcenter()\\n        ' + mavenFabricRepo;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `      } else {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `        matchIndex++;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `        return 'jcenter()\\n        ' + mavenGoogleRepo;
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `      }
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    });
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `}

        fs.writeFileSync(projectBuildGradlePath, buildGradleContent);
    }
    
    let appBuildGradlePath = path.join(__dirname, "..", "..", "platforms", "android", "app", "build.gradle");
    if (fs.existsSync(projectBuildGradlePath)) {
        let buildGradleContent = fs.readFileSync(appBuildGradlePath).toString();
        
        buildGradleContent = buildGradleContent.replace('buildToolsVersion : "26.0.1"', 'buildToolsVersion : "26.0.3"'); 
        
        // for Crashlytics
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let applyAppPluginPattern = 'apply plugin: "com.android.application"';
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `let applyFabricPluginPattern = 'apply plugin: "io.fabric"';
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `if (!RegExp(applyFabricPluginPattern).test(buildGradleContent)) {
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `    buildGradleContent = buildGradleContent.replace(applyAppPluginPattern, applyAppPluginPattern + '\\n' + applyFabricPluginPattern);
        ` + (isSelected(result.crashlytics) ? `` : `//`) + `}

        buildGradleContent = buildGradleContent.replace(/renameResultApks\\(variant\\)/, 'variant.outputs.all { output ->\\n\\t\\t\\tdef abiName = "";\\n\\t\\t\\tif (output.getFilter(com.android.build.OutputFile.ABI)) {\\n\\t\\t\\t\\tabiName = "-" + output.getFilter(com.android.build.OutputFile.ABI);\\n\\t\\t\\t}\\n\\t\\t\\toutputFileName = "../../\${rootProject.name + "-" + variant.buildType.name + abiName}.apk"\\n\\t\\t}');

        fs.writeFileSync(appBuildGradlePath, buildGradleContent);
    }
};
`;
        console.log("Writing 'firebase-build-gradle.js' to " + appRoot + "/hooks/after-prepare");
        var scriptPath = path.join(appRoot, "hooks", "after-prepare", "firebase-build-gradle.js");
        fs.writeFileSync(scriptPath, scriptContent);
    } catch(e) {
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
