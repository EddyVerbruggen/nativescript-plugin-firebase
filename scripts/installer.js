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
    }
    if (usingAndroid) {
        writeGradleFile(result);
        writeGoogleServiceCopyHook();
        writeGoogleServiceGradleHook();
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
`pod 'Firebase', '~> 4.1.1'
pod 'Firebase/Database'
pod 'Firebase/Auth'

# Uncomment if you want to enable Remote Config
` + (isSelected(result.remote_config) ? `` : `#`) + `pod 'Firebase/RemoteConfig'

# Uncomment if you want to enable Crash Reporting
` + (isSelected(result.crash_reporting) ? `` : `#`) + `pod 'Firebase/Crash'

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

    def firebaseVersion = "11.2.2"

    // make sure you have these versions by updating your local Android SDK's (Android Support repo and Google repo)
    compile "com.google.firebase:firebase-core:$firebaseVersion"
    compile "com.google.firebase:firebase-database:$firebaseVersion"
    compile "com.google.firebase:firebase-auth:$firebaseVersion"

    // for converting Java objects to JS
    compile "com.google.code.gson:gson:2.8.+"

    // for reading google-services.json and configuration
    def googlePlayServicesVersion = project.hasProperty('googlePlayServicesVersion') ? project.googlePlayServicesVersion : firebaseVersion
    compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"

    // Uncomment if you want to use 'Remote Config'
    ` + (isSelected(result.remote_config) ? `` : `//`) + ` compile "com.google.firebase:firebase-config:$firebaseVersion"

    // Uncomment if you want to use 'Crash Reporting'
    ` + (isSelected(result.crash_reporting) ? `` : `//`) + ` compile "com.google.firebase:firebase-crash:$firebaseVersion"

    // Uncomment if you want FCM (Firebase Cloud Messaging)
    ` + (isSelected(result.messaging) ? `` : `//`) + ` compile "com.google.firebase:firebase-messaging:$firebaseVersion"

    // Uncomment if you want Google Cloud Storage
    ` + (isSelected(result.storage) ? `` : `//`) + ` compile "com.google.firebase:firebase-storage:$firebaseVersion"

    // Uncomment if you want AdMob
    ` + (isSelected(result.admob) ? `` : `//`) + ` compile "com.google.firebase:firebase-ads:$firebaseVersion"

    // Uncomment if you need Facebook Authentication
    ` + (isSelected(result.facebook_auth) ? `` : `//`) + ` compile "com.facebook.android:facebook-android-sdk:4.+"

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

function writeGoogleServiceGradleHook() {
    console.log("Install firebase-build-gradle hook.");
    try {
        var scriptContent =
`
var path = require("path");
var fs = require("fs");

module.exports = function() {

    console.log("Configure firebase");
    var buildGradlePath = path.join(__dirname, "..", "..", "platforms", "android", "build.gradle");
    if (fs.existsSync(buildGradlePath)) {
        var buildGradleContent = fs.readFileSync(buildGradlePath).toString();

        // already at 3.1.0?
        if (buildGradleContent.indexOf('classpath "com.google.gms:google-services:3.1.0"') != -1) {
            return;
        }

        // upgrade 3.0.0 to 3.1.0?
        if (buildGradleContent.indexOf('classpath "com.google.gms:google-services:3.0.0"') != -1) {
            buildGradleContent = buildGradleContent.replace('classpath "com.google.gms:google-services:3.0.0"', 'classpath "com.google.gms:google-services:3.1.0"');
            fs.writeFileSync(buildGradlePath, buildGradleContent);
            return;
        }

        var search = -1;

        search = buildGradleContent.indexOf("repositories", 0);
        if (search == -1) {
            return;
        }

        search = buildGradleContent.indexOf("dependencies", search);
        if (search == -1) {
            return;
        }

        search = buildGradleContent.indexOf("}", search);
        if (search == -1) {
            return;
        }

        buildGradleContent = buildGradleContent.substr(0, search - 1) + '    classpath "com.google.gms:google-services:3.0.0"\\n    ' + buildGradleContent.substr(search - 1);

        fs.writeFileSync(buildGradlePath, buildGradleContent);
    }
};
`;
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