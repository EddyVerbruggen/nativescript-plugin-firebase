var fs = require('fs');
var prompt = require('prompt');

// Default settings for using ios and android with Firebase
var usingiOS = false, usingAndroid = false;

// The directories where the Podfile and include.gradle are stored
var directories = {
    ios: './platforms/ios',
    android: './platforms/android'
};

console.log('NativeScript Firebase Plugin Installation');
prompt.start();
askiOSPrompt();

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
        if (isSelected(result.using_ios)) {
            usingiOS = true;
        }
        askAndroidPrompt();
    });
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
        if (isSelected(result.using_android)) {
            usingAndroid = true;
        }
        if(usingiOS || usingAndroid) {
            promptQuestions();
        }
    });
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
    }], function (err, result) {
        if (err) {
            return console.log(err);
        }
        if(usingiOS) {
            writePodFile(result);
        }
        if(usingAndroid) {
            writeGradleFile(result);
        }
        console.log('Firebase post install completed. To re-run this script, navigate to the root directory of `nativescript-plugin-firebase` in your `node_modules` folder and run: `npm run postinstall`.');
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
    fs.writeFile(directories.ios + '/Podfile',
    `pod 'Firebase', '~> 3.4.0'
    pod 'Firebase/Database'
    pod 'Firebase/Auth'
    pod 'Firebase/Crash'

    # Uncomment if you want to enable Remote Config
    ` + (isSelected(result.remote_config) ? `` : `#`) + `pod 'Firebase/RemoteConfig'

    # Uncomment if you want to enable FCM (Firebase Cloud Messaging)
    ` + (isSelected(result.messaging) ? `` : `#`) + `pod 'Firebase/Messaging'

    # Uncomment if you want to enable Firebase Storage
    ` + (isSelected(result.storage) ? `` : `#`) + `pod 'Firebase/Storage'

    # Uncomment if you want to enable Facebook Authentication
    ` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKCoreKit'
    ` + (isSelected(result.facebook_auth) ? `` : `#`) + `pod 'FBSDKLoginKit'

    # Uncomment if you want to enable Google Authentication
    ` + (isSelected(result.google_auth) ? `` : `#`) + `pod 'GoogleSignIn'`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('Successfully created iOS (Pod) file.');
    });
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
    fs.writeFile(directories.android + '/include.gradle',
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
    }

    dependencies {
        // make sure you have these versions by updating your local Android SDK's (Android Support repo and Google repo)
        compile "com.google.firebase:firebase-core:9.4.0"
        compile "com.google.firebase:firebase-database:9.4.0"
        compile "com.google.firebase:firebase-auth:9.4.0"
        compile "com.google.firebase:firebase-crash:9.4.0"

        // for reading google-services.json and configuration
        compile "com.google.android.gms:play-services-base:9.4.0"

        // Uncomment if you want to use 'Remote Config'
        ` + (isSelected(result.remote_config) ? `` : `//`) + ` compile "com.google.firebase:firebase-config:9.4.0"

        // Uncomment if you want FCM (Firebase Cloud Messaging)
        ` + (isSelected(result.messaging) ? `` : `//`) + ` compile "com.google.firebase:firebase-messaging:9.4.0"

        // Uncomment if you want Google Cloud Storage
        ` + (isSelected(result.storage) ? `` : `//`) + ` compile 'com.google.firebase:firebase-storage:9.4.0'

        // Uncomment if you need Facebook Authentication
        ` + (isSelected(result.facebook_auth) ? `` : `//`) + ` compile "com.facebook.android:facebook-android-sdk:4.+"

        // Uncomment if you need Google Sign-In Authentication
        ` + (isSelected(result.google_auth) ? `` : `//`) + ` compile "com.google.android.gms:play-services-auth:9.4.0"

    }
    `, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('Successfully created Android (include.gradle) file.');
    });
}

/**
 * Determines if the answer validates as selected
 *
 * @param {any} value The user input for a prompt
 * @returns {boolean} The answer is yes, {false} The answer is no
 */
function isSelected(value) {
    return (value && value.toLowerCase() === 'y')
}
