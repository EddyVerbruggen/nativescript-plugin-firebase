import { alert, File, isAndroid, isIOS, knownFolders, Observable, prompt } from "@nativescript/core";
import { firebase } from "@nativescript/firebase";
import { admob as firebaseAdmob } from "@nativescript/firebase/admob";
import { RewardedVideoAdReward } from "@nativescript/firebase/admob/admob";
import { analytics as firebaseAnalytics } from "@nativescript/firebase/analytics";
import { crashlytics as firebaseCrashlytics } from "@nativescript/firebase/crashlytics";
import { firebaseFunctions } from "@nativescript/firebase/functions";
import { performance as firebasePerformance } from "@nativescript/firebase/performance";
import { FirebaseTrace } from "@nativescript/firebase/performance/performance";
import { storage as firebaseStorage } from "@nativescript/firebase/storage";
import { UploadMetadata } from "@nativescript/firebase/storage/storage";
import { MessagingViewModel } from "./messaging-view-model";

const firebaseWebApi = require("@nativescript/firebase/app");

export class HelloWorldModel extends Observable {
  public messaging = new MessagingViewModel();
  public userEmailOrPhone: string;
  private userListenerWrapper: firebase.AddEventListenerResult;
  private companiesListenerWrapper: firebase.AddEventListenerResult;
  private onAuthStateChangedHandlerSet = false;
  private firebaseTrace: FirebaseTrace;

  /***********************************************
   * Web API usage examples
   ***********************************************/

  private ensureWebOnAuthChangedHandler(): void {
    if (!this.onAuthStateChangedHandlerSet) {
      this.onAuthStateChangedHandlerSet = true;
      firebaseWebApi.auth().onAuthStateChanged((user?: firebase.User) => {
        console.log(">> auth state changed: " + user);
        if (user) {
          this.set("userEmailOrPhone", user.email ? user.email : (user.phoneNumber ? user.phoneNumber : "N/A"));
          alert({
            title: "User signed in",
            message: JSON.stringify(user),
            okButtonText: "Nice!"
          });
        } else {
          alert({
            title: "User signed out",
            okButtonText: "Bye!"
          });
        }
      });
    }
  }

  public doWebInit(): void {
    firebaseWebApi.initializeApp();
  }

  public doWebLoginAnonymously(): void {
    this.ensureWebOnAuthChangedHandler();
    firebaseWebApi.auth().signInAnonymously()
        .then(() => console.log("User logged in"))
        .catch(err => {
              alert({
                title: "Login error",
                message: JSON.stringify(err),
                okButtonText: "OK, pity"
              });
            }
        );
  }

  public doWebLoginByPassword(): void {
    this.ensureWebOnAuthChangedHandler();
    firebaseWebApi.auth().signInWithEmailAndPassword('eddyverbruggen+firebase@gmail.com', 'pwd123LOL')
        .then(() => {
          console.log("User logged in");

          // now retrieve an auth token we can use to access Firebase from our server
          firebaseWebApi.auth().currentUser.getIdToken(false)
              .then((token: string) => console.log("Auth token retrieved: " + token))
              .catch(errorMessage => console.log("Auth token retrieval error: " + errorMessage));
        })
        .catch(err => {
              alert({
                title: "Login error",
                message: JSON.stringify(err),
                okButtonText: "OK, pity"
              });
            }
        );
  }

  public doWebFetchSignInMethodsForEmail(): void {
    const user = firebaseWebApi.auth().currentUser;
    if (!user || !user.email) {
      alert({
        title: "Can't fetch providers",
        message: "No user with an emailaddress logged in.",
        okButtonText: "OK, makes sense.."
      });
      return;
    }

    firebaseWebApi.auth().fetchSignInMethodsForEmail(user.email).then(
        result => {
          alert({
            title: `Sign-in methods for ${user.email}`,
            message: JSON.stringify(result), //  ["password"], ["emailLink"], or ["password", "emailLink']
            okButtonText: "Thanks!"
          });
        },
        errorMessage => {
          alert({
            title: "Sign-in methods for Email error",
            message: errorMessage,
            okButtonText: "OK, pity.."
          });
        }
    );
  }

  public doWebLogout(): void {
    firebaseWebApi.auth().signOut()
        .then(() => {
          this.set("userEmailOrPhone", null);
          alert({
            title: "Logout OK",
            okButtonText: "OK, bye!"
          });
        })
        .catch(error => {
              alert({
                title: "Logout error",
                message: JSON.stringify(error),
                okButtonText: "Hmmkay"
              });
            }
        );
  }

  public doWebCreateUser(): void {
    firebaseWebApi.auth().createUserWithEmailAndPassword('eddyverbruggen+firebasewebapi@gmail.com', 'firebase')
        .then((user: firebase.User) => {
          console.log("User created: " + JSON.stringify(user));
          this.set("userEmailOrPhone", user.email);
          alert({
            title: "User created",
            message: JSON.stringify(user),
            okButtonText: "Nice!"
          });
        })
        .catch(
            error => {
              console.log("Error creating user: " + error);
              alert({
                title: "No user created",
                message: JSON.stringify(error),
                okButtonText: "OK, got it"
              });
            }
        );
  }

  public doWebGetCurrentUser(): void {
    const user = firebaseWebApi.auth().currentUser;
    if (user) {
      console.log("Current user: " + JSON.stringify(user));
      this.set("userEmailOrPhone", user.email);
      alert({
        title: "Current user",
        message: JSON.stringify(user),
        okButtonText: "Nice!"
      });
    } else {
      console.log("No current user");
      alert({
        title: "No current user",
        okButtonText: "OK, thanks"
      });
    }
  }

  public doWebCallableFunction(): void {
    // see the implementation of this function @ https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/ff95c77c7b09acf66654f53c52e8ae0c8d7b1c78/demo/firebasefunctions/functions/src/index.ts#L15-L19
    const fn = firebaseFunctions.httpsCallable("helloName");

    fn("Nativescript-Plugin-Firebase!")
        .then((dataCue: any) => {
          alert({
            title: "Callable Function Result",
            message: dataCue.message,
            okButtonText: "Nice!"
          });
        })
        .catch((errorMessage: string) => {
          alert({
            title: "An Error Occurred",
            message: errorMessage,
            okButtonText: "OK, thanks"
          });
        });
  }

  public doWebAddValueEventListenerForCompanies(): void {
    const path = "/companies";
    const onValueEvent = result => {
      if (result.error) {
        alert({
          title: "Listener error",
          message: result.error,
          okButtonText: "Darn!"
        });
      } else {
        console.log("key exists? " + result.exists());
        this.set("path", path);
        this.set("key", result.key);
        this.set("value", JSON.stringify(result.val()));
      }
    };

    firebaseWebApi.database().ref(path).on("value", onValueEvent);
  }

  public doWebRemoveValueEventListenersForCompanies(): void {
    const path = "/companies";
    firebaseWebApi.database().ref(path).off("value");
  }

  public doWebGetServerInfo(): void {
    const path = ".info";
    firebaseWebApi.database().ref(path)
        .once("value")
        .then(result => {
          console.log("key exists? " + result.exists());
          this.set("path", path);
          this.set("key", result.key);
          this.set("value", JSON.stringify(result.val()));
        })
        .catch(error => console.log("doWebGetServerTime error: " + error));
  }

  public doWebGetValueForCompanies(): void {
    const path = "/companies";
    firebaseWebApi.database().ref(path)
        .once("value")
        .then(result => {
          console.log("key exists? " + result.exists());
          this.set("path", path);
          this.set("key", result.key);
          this.set("value", JSON.stringify(result.val()));
        })
        .catch(error => console.log("doWebGetValueForCompanies error: " + error));
  }

  public doWebStoreCompaniesBySetValue(): void {
    firebaseWebApi.database().ref("/companies")
        .set([
              {
                name: 'Telerik (web)',
                country: 'Bulgaria',
                since: 2000,
                updateTs: firebase.ServerValue.TIMESTAMP
              },
              {
                name: 'Google (web)',
                country: 'USA',
                since: 1900,
                updateTs: firebase.ServerValue.TIMESTAMP
              }
            ]
        )
        .then(() => console.log("firebase.setValue done"))
        .catch(error => console.log("firebase.setValue error: " + error));
  }

  public doWebRemoveCompanies(): void {
    firebaseWebApi.database().ref("/companies").remove()
        .then(() => console.log("firebase.remove done"))
        .catch((err) => console.log("firebase.remove error: " + err));
  }

  public doWebQueryBulgarianCompanies(): void {
    const path = "/companies";
    const child = "name";
    firebaseWebApi.database().ref(path).orderByChild(child)
        .once("value")
        .then(result => {
          console.log("key exists? " + result.exists());
          this.set("path", path);
          this.set("key", result.key);
          this.set("value", JSON.stringify(result.val()));
        })
        .catch(error => console.log("doWebQueryBulgarianCompanies error: " + error));
  }

  public doWebStoreCompanyByFirstCreatingKey(): void {
    const path = "companies",
        companyRef = firebaseWebApi.database().ref(path),
        newCompanyKey = companyRef.push().key,
        storeAtPath = `/${path}/${newCompanyKey}`,
        value = {
          name: `Company with key ${newCompanyKey}`,
          updateTs: firebase.ServerValue.TIMESTAMP
        };

    firebaseWebApi.database().ref(storeAtPath).set(value).then(() => {
      this.set("path", storeAtPath);
      this.set("key", newCompanyKey);
      this.set("value", JSON.stringify(value));
    });
  }

  public doWebUploadFile(): void {
    // let's first create a File object using the tns file module
    const appPath = knownFolders.currentApp().path;
    const logoPath = appPath + "/images/telerik-logo.png";

    const storageRef = firebaseWebApi.storage().ref();
    const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

    const metadata: UploadMetadata = {
      contentType: "demo/test",
      contentLanguage: "fr",
      customMetadata: {
        "foo": "bar",
        "foo2": "bar2"
      }
    };

    childRef.put(File.fromPath(logoPath), metadata).then(
        uploadedFile => {
          console.log("Uploaded! " + JSON.stringify(uploadedFile));
          this.set("storageFeedback", "Uploaded!");
        },
        error => {
          console.log("firebase.doWebUploadFile error: " + error);
          this.set("storageFeedback", "Error: " + error);
        }
    );
  }

  public doWebDownloadFile(): void {
    const storageRef = firebaseWebApi.storage().ref();
    const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

    // let's first determine where we'll create the file using the 'file-system' module
    const documents = knownFolders.documents();
    const logoPath = documents.path + "/telerik-logo-downloaded.png";

    childRef.download(logoPath)
        .then(() => {
          console.log("The file has been downloaded");
          this.set("storageFeedback", "The file has been downloaded");
        })
        .catch(error => {
          console.log("Download error: " + error);
          this.set("storageFeedback", "Error: " + error);
        });
  }

  public doWebGetDownloadUrl(): void {
    const storageRef = firebaseWebApi.storage().ref();
    const childRef = storageRef.child("uploads/images/telerik-logo-uploaded.png");

    childRef.getDownloadURL()
        .then(theUrl => {
          console.log("Download url: " + theUrl);
          this.set("storageFeedback", "Download URL logged to the console");
        })
        .catch(error => {
          console.log("Download error: " + error);
          this.set("storageFeedback", "Error: " + error);
        });
  }

  public doWebDeleteFile(): void {
    firebaseWebApi.storage().ref()
        .child("uploads/images/telerik-logo-uploaded.png")
        .delete()
        .then(() => {
          console.log("Deleted file");
          this.set("storageFeedback", "File deleted");
        })
        .catch(error => {
          console.log("Error deleting file: " + error);
          this.set("storageFeedback", "Error deleting file: " + error);
        });
  }

  public doWebListAll(): void {
    firebaseWebApi.storage().ref()
        .child("uploads/images")
        .listAll()
        .then(result => {
          console.log(JSON.stringify(result));

          // dump all items
          result.items.forEach(item => {
            item.listAll()
                .then(result2 => console.log(`Inner result for ITEM ${item.name}: ${JSON.stringify(result2)}`))
                .catch(err => console.log(err));
          });

          // dump all prefixes
          result.prefixes.forEach(prefix => {
            prefix.listAll()
                .then(result2 => console.log(`Inner result for PREFIX ${prefix.name}: ${JSON.stringify(result2)}`))
                .catch(err => console.log(err));
          });
        })
        .catch(err => console.log(err));
  }

  /***********************************************
   * Native API usage examples
   ***********************************************/

  public doInit(): void {
    firebase.init({
      crashlyticsCollectionEnabled: true,
      // storageBucket: 'gs://n-plugin-test.appspot.com',
      persist: true, // optional, default false
      analyticsCollectionEnabled: false, // default true
      onAuthStateChanged: data => { // optional
        console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
        console.log(JSON.stringify(data));
        if (data.loggedIn) {
          this.set("userEmailOrPhone", data.user.email ? data.user.email : (data.user.phoneNumber ? data.user.phoneNumber : "N/A"));
        }
      },
      // uncomment in order to test push wiring during 'init' (instead of adding these callbacks later):
      /*
      onPushTokenReceivedCallback: token => {
        // you can use this token to send to your own backend server,
        // so you can send notifications to this specific device
        console.log("Firebase plugin received a push token: " + token);
        // this is for iOS, to copy the token onto the clipboard
        if (isIOS) {
          UIPasteboard.generalPasteboard.setValueForPasteboardType("[Firebase demo app] Last push token received: " + token, kUTTypePlainText);
        }
      },
      onMessageReceivedCallback: message => {
        console.log("Push message received");
        setTimeout(() => {
          alert({
            title: "Push message!",
            message: (message.title !== undefined ? message.title : ""),
            okButtonText: "Sw33t"
          });
        }, 500);
      },
      */
      onDynamicLinkCallback: result => {
        console.log("dynamic link callback invoked with: " + result);
        setTimeout(() => {
          alert({
            title: "Dynamic Link!",
            message: JSON.stringify(result),
            okButtonText: "Awesome!"
          });
        }, 500);
      }
    }).then(
        () => {
          console.log("Firebase is ready");
        },
        error => {
          console.log("firebase.init error: " + error);
        }
    );
  }

  public doEnableAnalytics(): void {
    firebaseAnalytics.setAnalyticsCollectionEnabled(true);
    alert({
      title: "Analytics collection",
      message: "ENABLED",
      okButtonText: "OK"
    });
  }

  public doDisableAnalytics(): void {
    firebaseAnalytics.setAnalyticsCollectionEnabled(false);
    alert({
      title: "Analytics collection",
      message: "DISABLED",
      okButtonText: "OK"
    });
  }

  public doLogAnalyticsEvents(): void {
    firebaseAnalytics.logEvent({
      // see https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event.html
      key: "add_to_cart",
      parameters: [
        { // optional
          key: "item_id",
          value: "p7655"
        },
        {
          key: "item_name",
          value: "abcd"
        }]
    }).then(
        () => {
          console.log("Analytics event logged");
          alert({
            title: "Analytics event pushed",
            okButtonText: "Awesome :)"
          });
        }, errorMessage => {
          alert({
            title: "Analytics error",
            message: errorMessage,
            okButtonText: "Ehh, OK"
          });
        }
    );

    /**
     * Same thing as logEvent but can add an array or specific types not just string (LogComplexEventTypeParameter.BOOLEAN, LogComplexEventTypeParameter.STRING,
     * LogComplexEventTypeParameter.DOUBLE, LogComplexEventTypeParameter.FLOAT, LogComplexEventTypeParameter.INT, LogComplexEventTypeParameter.ARRAY)
     */
    firebaseAnalytics.logComplexEvent({
      key: "view_item_list",
      parameters: [{
        key: "item1",
        type: "array",
        value: [
          {
            parameters: [
              {key: "item_id", value: "id of item", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_name", value: "name of item", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_category", value: "category", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_variant", value: "variant", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_brand", value: "name of item brand", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "price", value: 1, type: firebase.LogComplexEventTypeParameter.DOUBLE},
              {key: "item_list", value: "name of list", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "index", value: 1, type: firebase.LogComplexEventTypeParameter.INT}
            ]
          },
          {
            parameters: [
              {key: "item_id", value: "id of item", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_name", value: "name of item", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_category", value: "category", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_variant", value: "variant", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "item_brand", value: "name of item brand", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "price", value: 1, type: firebase.LogComplexEventTypeParameter.DOUBLE},
              {key: "item_list", value: "name of list", type: firebase.LogComplexEventTypeParameter.STRING},
              {key: "index", value: 2, type: firebase.LogComplexEventTypeParameter.INT}
            ]
          }
        ]
      }]
    });

  }

  public doSetAnalyticsUserProperty(): void {
    firebaseAnalytics.setUserProperty({
      key: "origin", // note that this needs to be preregistered, see https://support.google.com/firebase/answer/6317519?hl=en&ref_topic=6317489#create-property
      value: "demoapp"
    }).then(
        () => {
          alert({
            title: "Analytics user property set",
            okButtonText: "Great :P"
          });
        },
        errorMessage => {
          alert({
            title: "Analytics error",
            message: errorMessage,
            okButtonText: "Ehhmmm, OK"
          });
        }
    );
  }

  public doSetScreenNameA(): void {
    this.setScreenName("Screen A");
  }

  public doSetScreenNameB(): void {
    this.setScreenName("Screen B");
  }

  private setScreenName(screenName): void {
    firebaseAnalytics.setScreenName({
      screenName
    }).then(
        () => {
          alert({
            title: "Analytics screen name set to: " + name,
            okButtonText: "Great!"
          });
        },
        errorMessage => {
          alert({
            title: "Analytics error",
            message: errorMessage,
            okButtonText: "Ehhmmm, OK"
          });
        }
    );
  }

  public doShowAdMobBanner(): void {
    firebaseAdmob.showBanner({
      size: firebaseAdmob.AD_SIZE.SMART_BANNER,
      margins: {
        bottom: isIOS ? 50 : 0
      },
      androidBannerId: "ca-app-pub-9517346003011652/7749101329",
      iosBannerId: "ca-app-pub-9517346003011652/3985369721",
      testing: true,
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: [
        "fee4cf319a242eab4701543e4c16db89c722731f",  // Eddy's iPad Pro
        "a4cbb499e279054b55c206528f8510ff7fbf20c8",  // Eddy's iPhone X
      ],
      keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
      onClicked: () => console.log("Ad clicked"),
      onLeftApplication: () => console.log("Ad left application (opened a browser, likely)"),
      onOpened: () => console.log("Ad opened"),
      onClosed: () => console.log("Ad closed")
    }).then(
        () => {
          alert({
            title: "Ad loaded successfully",
            message: "Should now be showing..",
            okButtonText: "Hmmkay"
          });
        },
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doShowAdMobInterstitial(): void {
    firebaseAdmob.showInterstitial({
      iosInterstitialId: "ca-app-pub-9517346003011652/6938836122",
      androidInterstitialId: "ca-app-pub-9517346003011652/9225834529",
      testing: true,
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: [
        "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
        "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
      ]
    }).then(
        () => {
          console.log("AdMob interstitial showing");
        },
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doPreloadAdMobInterstitial(): void {
    firebaseAdmob.preloadInterstitial({
      iosInterstitialId: "ca-app-pub-9517346003011652/6938836122",
      androidInterstitialId: "ca-app-pub-9517346003011652/9225834529",
      testing: true,
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: [
        "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
        "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
      ],
      onClosed: () => console.log("Interstitial closed"),
      onClicked: () => console.log("Interstitial clicked"),
      onLeftApplication: () => console.log("Interstitial left application (opened a browser, likely)"),
      onOpened: () => console.log("Interstitial opened")
    }).then(
        () => console.log("AdMob interstitial preloaded"),
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doShowPreloadedAdMobInterstitial(): void {
    firebaseAdmob.showInterstitial().then(
        () => console.log("AdMob interstitial showing"),
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doPreloadRewardedVideoAd(): void {
    firebaseAdmob.preloadRewardedVideoAd({
      iosAdPlacementId: "ca-app-pub-9517346003011652/8586553377",
      androidAdPlacementId: "ca-app-pub-9517346003011652/2819097664",
      testing: true,
      // Android automatically adds the connected device as test device with testing:true, iOS does not
      iosTestDeviceIds: [
        "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
        "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
      ],
      keywords: [
        "foo",
        "bar"
      ]
    }).then(
        () => console.log("AdMob rewarded video ad preloaded"),
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doShowPreloadedRewardedVideoAd(): void {
    let reward: RewardedVideoAdReward;
    firebaseAdmob.showRewardedVideoAd({
      onRewarded: receivedReward => {
        reward = receivedReward;
        console.log("Rewarded video ad: rewarded. Details: " + JSON.stringify(reward));
      },
      onLoaded: () => console.log("Rewarded video ad: loaded"),
      onFailedToLoad: () => console.log("Rewarded video ad: failed to load"),
      onOpened: () => console.log("Rewarded video ad: opened"),
      onStarted: () => console.log("Rewarded video ad: started"),
      onCompleted: () => console.log("Rewarded video ad: completed"),
      onClosed: () => {
        console.log("Rewarded video ad: closed");
        if (reward) {
          setTimeout(() => {
            alert({
              title: "You were rewarded!",
              message: `${reward.amount} ${reward.type}`,
              okButtonText: "Thanks!"
            });
          }, 500);
        }
      },
      onLeftApplication: () => console.log("Rewarded video ad: left application")
    }).then(
        () => console.log("AdMob rewarded video ad showing"),
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  /**
   * Note that an interstitial is supposed to be hidden by clicking the close button,
   * so there's no function to do it programmatically.
   */
  public doHideAdMobBanner(): void {
    firebaseAdmob.hideBanner().then(
        () => {
          console.log("AdMob banner hidden");
        },
        errorMessage => {
          alert({
            title: "AdMob error",
            message: errorMessage,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doGetRemoteConfig(): void {
    // TODO downgrade to 3.4 and see if we get logging and alerts.. do this before publishing (the otherwise finished) 5.3.0 version
    // .. hmm doesn't look like it... and neither is disabling crash reporting
    console.log(">>> doGetRemoteConfig");
    firebase.getRemoteConfig({
      developerMode: true,
      cacheExpirationSeconds: 600, // 10 minutes, default is 12 hours
      properties: [
        {
          "key": "holiday_promo_enabled",
          "default": false
        },
        {
          "key": "default_only_prop",
          "default": 77
        },
        {
          "key": "coupons_left",
          "default": 100
        },
        {
          "key": "origin",
          "default": "client"
        },
        {
          "key": "double_test",
          "default": 9.99
        },
        {
          "key": "int_test",
          "default": 11
        }]
    }).then(
        (result: firebase.GetRemoteConfigResult) => {
          console.log("remote config fetched: " + JSON.stringify(result.properties));
          alert({
            title: `Fetched at ${result.lastFetch} ${result.throttled ? '(throttled)' : ''}`,
            message: JSON.stringify(result.properties),
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "Remote Config error",
            message: errorMessage,
            okButtonText: "OK, thanks"
          });
        }
    );
  }

  public doGetCurrentUser(): void {
    firebase.getCurrentUser().then(
        user => {
          this.set("userEmailOrPhone", user.email);
          alert({
            title: "Current user",
            message: JSON.stringify(user),
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "No current user",
            message: errorMessage,
            okButtonText: "OK, thanks"
          });
        }
    );
  }

  public doUpdateProfile(): void {
    firebase.updateProfile({
      displayName: `Name UpdateTS ${new Date().getTime()}`,
      photoURL: 'https://avatars2.githubusercontent.com/u/1426370?v=3&u=9661f01efde3c412e19650c9b632297970cbe6ed&s=400'
    }).then(
        () => {
          alert({
            title: "Profile updated",
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "Profile update error",
            message: errorMessage,
            okButtonText: "OK.."
          });
        }
    );
  }

  public doLoginAnonymously(): void {
    firebase.login({
      type: firebase.LoginType.ANONYMOUS
    }).then(
        result => {
          console.log("Anonymous login OK: " + JSON.stringify(result));
          alert({
            title: "Login OK",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doFetchSignInMethodsForEmail(): void {
    firebase.getCurrentUser().then(
        user => {
          if (!user || !user.email) {
            alert({
              title: "Can't fetch providers",
              message: "No user with emailaddress logged in.",
              okButtonText: "OK, makes sense.."
            });
            return;
          }

          firebase.fetchSignInMethodsForEmail(user.email).then(
              result => {
                alert({
                  title: `Sign-in methods for ${user.email}`,
                  message: JSON.stringify(result), //  ["password"], ["emailLink"], or ["password", "emailLink']
                  okButtonText: "Thanks!"
                });
              },
              errorMessage => {
                alert({
                  title: "Fetch Sign-in methods for Email error",
                  message: errorMessage,
                  okButtonText: "OK, pity.."
                });
              }
          );
        });
  }

  public doCreateUser(): void {
    firebase.createUser({
      email: 'eddyverbruggen+firebasetest@gmail.com',
      password: 'firebase'
    }).then(
        (user: firebase.User) => {
          console.log("User created: " + JSON.stringify(user));
          this.set("userEmailOrPhone", user.email);
          alert({
            title: "User created",
            message: JSON.stringify(user),
            okButtonText: "Nice!"
          });
        },
        error => {
          console.log("Error creating user: " + error);
          alert({
            title: "No user created",
            message: error,
            okButtonText: "OK, got it"
          });
        }
    );
  }

  public doDeleteUser(): void {
    firebase.deleteUser().then(
        () => {
          alert({
            title: "User deleted",
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "User not deleted",
            message: errorMessage,
            okButtonText: "OK, got it"
          });
        }
    );
  }

  public doLoginByPassword(): void {
    firebase.login({
      // note that you need to enable email-password login in your firebase instance
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        // note that these credentials have been pre-configured in our demo firebase instance
        email: 'eddyverbruggen+firebase@gmail.com',
        password: 'pwd123LOL'
      }
    }).then(
        result => {
          console.log("Password login OK: " + JSON.stringify(result));
          alert({
            title: "Login OK",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });

          // now retrieve an auth token we can use to access Firebase from our server
          firebase.getAuthToken(
              {
                forceRefresh: false
              })
              .then((result: firebase.IdTokenResult) => console.log("Auth token retrieved: " + JSON.stringify(result)))
              .catch(errorMessage => console.log("Auth token retrieval error: " + errorMessage));
        },
        errorMessage => {
          console.log("Login error: " + errorMessage);
          this.set("userEmailOrPhone", errorMessage);
          alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doLoginByPhone(): void {
    prompt(
        "Your phone number",
        "+31612345678"
    ).then(promptResult => {
      if (!promptResult.result) {
        return;
      }

      console.log(">> using promptResult.text: " + promptResult.text);
      firebase.login({
        // note that you need to enable phone login in your firebase instance
        type: firebase.LoginType.PHONE,
        phoneOptions: {
          phoneNumber: promptResult.text,
          verificationPrompt: "The received verification code" // default "Verification code"
        }
      }).then(
          result => {
            console.log("Phone login OK: " + JSON.stringify(result));
            alert({
              title: "Phone login OK",
              message: JSON.stringify(result),
              okButtonText: "Cool"
            });
          },
          errorMessage => {
            alert({
              title: "Phone login error",
              message: errorMessage,
              okButtonText: "OK, damn shame"
            });
          }
      );
    });
  }

  public doLoginByEmailLink(): void {
    prompt({
      title: "The email address to send the link to",
      defaultText: "",
      inputType: "email",
      capitalizationType: "none",
      okButtonText: "OK",
      cancelButtonText: "Cancel"
    }).then(promptResult => {
      if (!promptResult.result) {
        return;
      }

      console.log(">> using promptResult.text: " + promptResult.text);
      firebase.login({
        // note that you need to enable phone login in your firebase instance
        type: firebase.LoginType.EMAIL_LINK,
        emailLinkOptions: {
          email: promptResult.text.trim(),
          url: "https://combidesk.com?foo=bar"
        }
      }).then(
          result => {
            console.log("Email link sent");
            alert({
              title: "Email link sent",
              message: "Check your email :)",
              okButtonText: "Cool"
            });
          },
          errorMessage => {
            alert({
              title: "Email link login error",
              message: errorMessage,
              okButtonText: "OK, damn shame"
            });
          }
      );
    });
  }

  public doLoginByFacebook(): void {
    firebase.login({
      // note that you need to enable Facebook auth in your firebase instance
      type: firebase.LoginType.FACEBOOK
    }).then(
        result => {
          console.log("Facebook login OK: " + JSON.stringify(result));
          alert({
            title: "Login OK",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doSignInWithApple(): void {
    firebase.login({
      // note that you need to enable "Sign in with Apple" in your firebase instance
      type: firebase.LoginType.APPLE,
      appleOptions: {
        locale: "nl",
        scopes: ["email"]
      }
    }).then(
        result => console.log("Apple login OK: " + JSON.stringify(result)),
        errorMessage => {
          alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doLoginByGoogle(): void {
    firebase.login({
      // note that you need to enable Google auth in your firebase instance
      type: firebase.LoginType.GOOGLE,
      googleOptions: {
        scopes: [
          "https://www.googleapis.com/auth/contacts.readonly",
          "https://www.googleapis.com/auth/user.birthday.read"
        ]
      }
    }).then(
        result => {
          console.log("Google login OK: " + JSON.stringify(result.additionalUserInfo));
          console.log("Google login OK, photoURL: " + result.photoURL);
          alert({
            title: "Login OK",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        errorMessage => {
          alert({
            title: "Login error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doReloadUser(): void {
    firebase.reloadUser().then(
        () => {
          alert({
            title: "User reloaded",
            message: "You can use 'get current user' to inspect the reloaded data",
            okButtonText: "OK"
          });
        },
        errorMessage => {
          alert({
            title: "Reload error",
            message: errorMessage,
            okButtonText: "OK, shame"
          });
        }
    );
  }

  public doResetPassword(): void {
    firebase.sendPasswordResetEmail("eddyverbruggen+firebase@gmail.com").then(
        () => {
          console.log("Password reset. Check your email.");
          this.set("userEmailOrPhone", "Password reset mail sent to eddyverbruggen@gmail.com.");
          alert({
            title: "Password reset. Check your email.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Password reset error: " + error);
          alert({
            title: "Password reset error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doWebResetPassword(): void {
    firebaseWebApi.auth().sendPasswordResetEmail("eddyverbruggen+firebase@gmail.com").then(
        () => {
          console.log("Password reset. Check your email.");
          this.set("userEmailOrPhone", "Password reset mail sent to eddyverbruggen@gmail.com.");
          alert({
            title: "Password reset. Check your email.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Password reset error: " + error);
          alert({
            title: "Password reset error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doUpdateEmail(): void {
    firebase.updateEmail("eddyverbruggen+firebase@gmail.com").then(
        () => {
          console.log("Email updated.");
          this.set("userEmailOrPhone", "Email updated to eddyverbruggen+firebase@gmail.com");
          alert({
            title: "Email updated.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Email update error: " + error);
          alert({
            title: "Email update error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doWebUpdateEmail(): void {
    firebaseWebApi.auth().updateEmail("eddyverbruggen+firebase@gmail.com").then(
        () => {
          console.log("Email updated.");
          this.set("userEmailOrPhone", "Email updated to eddyverbruggen+firebase@gmail.com");
          alert({
            title: "Email updated.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Email update error: " + error);
          alert({
            title: "Email update error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doUpdatePassword(): void {
    firebase.updatePassword("pwd123LOL").then(
        () => {
          console.log("Password updated.");
          this.set("userEmailOrPhone", "Password updated to pwd123LOL");
          alert({
            title: "Password updated.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Password update error: " + error);
          alert({
            title: "Password update error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doWebUpdatePassword(): void {
    firebaseWebApi.auth().updatePassword("pwd123LOL").then(
        () => {
          console.log("Password updated.");
          this.set("userEmailOrPhone", "Password updated to pwd123LOL");
          alert({
            title: "Password updated.",
            okButtonText: "OK, nice!"
          });
        },
        error => {
          console.log("Password update error: " + error);
          alert({
            title: "Password update error",
            message: error,
            okButtonText: "Hmmkay :("
          });
        }
    );
  }

  public doSendEmailVerification(): void {
    firebase.sendEmailVerification().then(
        () => {
          alert({
            title: "Email sent!",
            okButtonText: "Okay"
          });
        },
        error => {
          alert({
            title: "Error sending email verification",
            message: error,
            okButtonText: "Hmmmkay"
          });
        }
    );
  }

  public doLogout(): void {
    firebase.logout().then(
        () => {
          this.set("userEmailOrPhone", null);
          console.log("Logout OK");
          alert({
            title: "Logout OK",
            okButtonText: "OK, bye!"
          });
        },
        error => {
          console.log("Logout error: " + error);
          alert({
            title: "Logout error",
            message: error,
            okButtonText: "Hmmkay"
          });
        }
    );
  }

  public doKeepUsersInSyncOn(): void {
    firebase.keepInSync("/users", true).then(
        () => {
          console.log("firebase.keepInSync ON");
        },
        error => {
          console.log("firebase.keepInSync error: " + error);
        }
    );
  }

  public doKeepUsersInSyncOff(): void {
    firebase.keepInSync("/users", false).then(
        () => {
          console.log("firebase.keepInSync OFF");
        },
        error => {
          console.log("firebase.keepInSync error: " + error);
        }
    );
  }

  public doAddChildEventListenerForUsers(): void {
    const onChildEvent = result => {
      this.set("path", '/users');
      this.set("type", result.type);
      this.set("key", result.key);
      this.set("value", JSON.stringify(result.value));
    };

    firebase.addChildEventListener(onChildEvent, "/users").then(
        result => {
          this.userListenerWrapper = result;
          console.log("firebase.addChildEventListener added");
        },
        error => {
          console.log("firebase.addChildEventListener error: " + error);
        }
    );
  }

  public doRemoveChildEventListenerForUsers(): void {
    if (!this.userListenerWrapper) {
      return;
    }

    firebase.removeEventListeners(this.userListenerWrapper.listeners, this.userListenerWrapper.path).then(
        () => {
          console.log("firebase.doRemoveChildEventListenerForUsers success");
          alert({
            title: "Listener removed",
            okButtonText: "OK"
          });
        },
        error => {
          console.log("firebase.removeEventListeners error: " + error);
        }
    );
  }

  public doAddValueEventListenerForCompanies(): void {
    const path = "/companies";
    const onValueEvent = result => {
      if (result.error) {
        alert({
          title: "Listener error",
          message: result.error,
          okButtonText: "Darn!"
        });
      } else {
        this.set("path", path);
        this.set("type", result.type);
        this.set("key", result.key);
        this.set("value", JSON.stringify(result.value));
      }
    };

    firebase.addValueEventListener(onValueEvent, path).then(
        result => {
          this.companiesListenerWrapper = result;
          console.log("firebase.addValueEventListener added");
        },
        error => {
          console.log("firebase.addValueEventListener error: " + error);
        }
    );
  }

  public doRemoveValueEventListenersForCompanies(): void {
    if (!this.companiesListenerWrapper) {
      return;
    }

    firebase.removeEventListeners(this.companiesListenerWrapper.listeners, this.companiesListenerWrapper.path).then(
        () => {
          console.log("firebase.doRemoveValueEventListenersForCompanies success");
          alert({
            title: "Listener removed",
            okButtonText: "OK"
          });
        },
        error => {
          console.log("firebase.removeEventListeners error.");
        }
    );
  }

  public doGetValueForCompanies(): void {
    firebase.getValue('/companies').then(
        result => {
          alert({
            title: "Value retrieved",
            message: JSON.stringify(result),
            okButtonText: "OK"
          });
        },
        error => {
          console.log("doGetValueForCompanies error: " + error);
        }
    );
  }

  public doUserStoreByPush(): void {
    firebase.push(
        '/users',
        {
          'first': 'Eddy',
          'last': 'Verbruggen',
          'birthYear': 1977,
          'isMale': true,
          'address': {
            'street': 'foostreet',
            'number': 123
          }
        }
    ).then(
        result => {
          console.log("firebase.push done, created key: " + result.key);
        },
        error => {
          console.log("firebase.push error: " + error);
        }
    );
  }

  public doStoreCompaniesBySetValue(): void {
    firebase.setValue(
        '/companies',

        // you can store a JSON object
        // {'foo':'bar'}

        // or even an array of JSON objects
        [
          {
            name: 'Telerik',
            country: 'Bulgaria',
            since: 2000,
            updateTs: firebase.ServerValue.TIMESTAMP
          },
          {
            name: 'Google',
            country: 'USA',
            since: 1900,
            updateTs: firebase.ServerValue.TIMESTAMP
          }
        ]
    ).then(
        () => console.log("firebase.setValue done"),
        error => console.log("firebase.setValue error: " + error)
    );
  }

  public doRemoveUsers(): void {
    firebase.remove("/users").then(
        () => console.log("firebase.remove done"),
        error => console.log("firebase.remove error: " + error)
    );
  }

  public doRemoveCompanies(): void {
    firebase.remove("/companies").then(
        () => console.log("firebase.remove done"),
        error => console.log("firebase.remove error: " + error)
    );
  }

  public doQueryBulgarianCompanies(): void {
    const path = "/companies";
    const onValueEvent = result => {
      // note that the query returns 1 match at a time,
      // in the order specified in the query
      console.log("Query result: " + JSON.stringify(result));
      if (result.error) {
        alert({
          title: "Listener error",
          message: result.error,
          okButtonText: "Darn!"
        });
      } else {
        this.set("path", path);
        this.set("type", result.type);
        this.set("key", result.key);
        this.set("value", JSON.stringify(result.value));
      }
    };
    firebase.query(
        onValueEvent,
        path,
        {
          // order by company.country
          orderBy: {
            type: firebase.QueryOrderByType.CHILD,
            value: 'since' // mandatory when type is 'child'
          },
          // but only companies 'since' a certain year (Telerik's value is 2000, which is imaginary btw)
          // .. we're using 'ranges', but you could also use 'range' with type firebase.QueryRangeType.EQUAL_TO and value 2000
          ranges: [
            {
              type: firebase.QueryRangeType.START_AT,
              value: 1999
            },
            {
              type: firebase.QueryRangeType.END_AT,
              value: 2000
            }
          ],
          // range: {
          //   type: firebase.QueryRangeType.EQUAL_TO,
          //   value: null
          // },
          // only the first 2 matches (not that there's only 1 in this case anyway)
          limit: {
            type: firebase.QueryLimitType.LAST,
            value: 2
          },
          singleEvent: true
        }
    ).then(
        result => console.log("firebase.doQueryBulgarianCompanies done; added a listener, result: " + JSON.stringify(result)),
        errorMessage => {
          alert({
            title: "Query error",
            message: errorMessage,
            okButtonText: "OK, pity"
          });
        }
    );
  }

  public doQueryUsers(): void {
    const path = "/users";
    const onValueEvent = result => {
      // note that the query returns 1 match at a time,
      // in the order specified in the query
      console.log("Query result: " + JSON.stringify(result));
      if (result.error) {
        alert({
          title: "Listener error",
          message: result.error,
          okButtonText: "Darn!!"
        });
      } else {
        this.set("path", path);
        this.set("type", result.type);
        this.set("key", result.key);
        this.set("value", JSON.stringify(result.value));
      }
    };
    firebase.query(
        onValueEvent,
        path,
        {
          singleEvent: true,
          orderBy: {
            type: firebase.QueryOrderByType.CHILD,
            value: "first"
          }
        }
    ).then(
        result => {
          console.log("This 'result' should be available since singleEvent is true: " + JSON.stringify(result));
        },
        errorMessage => {
          alert({
            title: "Query error",
            message: errorMessage,
            okButtonText: "OK, pity!"
          });
        }
    );
  }

  public doListAll(): void {
    firebaseStorage.listAll(
        {
          remoteFullPath: "uploads/images"
        })
        .then(result => {
          console.log(JSON.stringify(result));

          // dump all items
          result.items.forEach(item => {
            item.listAll()
                .then(result2 => console.log(`Inner result for ITEM ${item.name}: ${JSON.stringify(result2)}`))
                .catch(err => console.log(err));
          });

          // dump all prefixes
          result.prefixes.forEach(prefix => {
            prefix.listAll()
                .then(result2 => console.log(`Inner result for PREFIX ${prefix.name}: ${JSON.stringify(result2)}`))
                .catch(err => console.log(err));
          });
        })
        .catch(err => console.log(err));
  }

  public doUploadFile(): void {
    // let's first create a File object using the tns file module
    const appPath = knownFolders.currentApp().path;
    const logoPath = appPath + "/images/telerik-logo.png";

    const metadata: UploadMetadata = {
      contentType: "demo/test2",
      contentLanguage: "de",
      customMetadata: {
        "first": "first!",
        "second": "second!"
      }
    };

    firebaseStorage.uploadFile({
      remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
      localFile: File.fromPath(logoPath), // use this (a file-system module File object)
      // localFullPath: logoPath, // or this, a full file path
      onProgress: status => {
        console.log("Uploaded fraction: " + status.fractionCompleted + " (" + status.percentageCompleted + "%)");
      },
      metadata
    }).then(
        uploadedFile => {
          alert({
            title: "File upload successful!",
            message: JSON.stringify(uploadedFile),
            okButtonText: "Cool!"
          });
        },
        error => {
          console.log("firebase.doUploadFile error: " + error);
        }
    );
  }

  public doDownloadFile(): void {
    // let's first determine where we'll create the file using the 'file-system' module
    const documents = knownFolders.documents();
    const logoPath = documents.path + "/telerik-logo-downloaded.png";

    // this will create or overwrite a local file in the app's documents folder
    const localLogoFile = documents.getFile("telerik-logo-downloaded.png");

    firebaseStorage.downloadFile({
      remoteFullPath: 'uploads/images/telerik-logo-uploaded.png',
      // localFile: localLogoFile // use this (a file-system module File object)
      localFullPath: logoPath // or this, a full file path
    }).then(
        () => {
          alert({
            title: "File download successful!",
            message: "The file has been downloaded to the requested location",
            okButtonText: "OK"
          });
        },
        error => {
          alert({
            title: "File download error",
            message: error,
            okButtonText: "Mmkay!"
          });
        }
    );
  }

  public doGetDownloadUrl(): void {
    firebaseStorage.getDownloadUrl({
      remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
    }).then(
        theUrl => {
          console.log("Download url: " + theUrl);
          alert({
            title: "File download URL determined",
            message: "You can download the file at: " + theUrl,
            okButtonText: "OK!"
          });
        },
        error => {
          alert({
            title: "File download URL error",
            message: error,
            okButtonText: "Mmkay"
          });
        }
    );
  }

  public doDeleteFile(): void {
    firebaseStorage.deleteFile({
      remoteFullPath: 'uploads/images/telerik-logo-uploaded.png'
    }).then(
        theUrl => {
          alert({
            title: "File deleted",
            message: "Enjoy your day!",
            okButtonText: "Thanks ;)"
          });
        },
        error => {
          alert({
            title: "File deletion error",
            message: error,
            okButtonText: "OK"
          });
        }
    );
  }

  public doReauthenticatePwdUser(): void {
    firebase.reauthenticate({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: 'eddyverbruggen@gmail.com',
        password: 'firebase'
      }
    }).then(
        () => {
          alert({
            title: "Re-authenticated password user",
            okButtonText: "OK"
          });
        },
        error => {
          alert({
            title: "Re-authenticate error",
            message: error,
            okButtonText: "OK"
          });
        }
    );
  }

  public doReauthenticateGoogleUser(): void {
    firebase.reauthenticate({
      type: firebase.LoginType.GOOGLE
    }).then(
        result => {
          console.log("Google login OK: " + JSON.stringify(result));
          alert({
            title: "Reauthenticated with Google",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        error => {
          alert({
            title: "Re-authenticate error",
            message: error,
            okButtonText: "OK"
          });
        }
    );
  }

  public doReauthenticateFacebookUser(): void {
    firebase.reauthenticate({
      type: firebase.LoginType.FACEBOOK
    }).then(
        result => {
          console.log("Facebook login OK: " + JSON.stringify(result));
          alert({
            title: "Reauthenticated with Facebook",
            message: JSON.stringify(result),
            okButtonText: "Nice!"
          });
        },
        error => {
          alert({
            title: "Re-authenticate error",
            message: error,
            okButtonText: "OK"
          });
        }
    );
  }

  public startPerformanceMonitoringTrace(): void {
    this.firebaseTrace = firebasePerformance.startTrace("myTrace");
    console.log(">> trace started");
  }

  public stopPerformanceMonitoringTrace(): void {
    if (this.firebaseTrace) {
      this.firebaseTrace.stop();
      this.firebaseTrace = undefined;
      console.log(">> trace stopped");
    }
  }

  public setValuePerformanceMonitoring(): void {
    if (this.firebaseTrace) {
      this.firebaseTrace.setValue("foo", "bar");
      console.log(">> value set");
    }
  }

  public getValuePerformanceMonitoring(): void {
    if (this.firebaseTrace) {
      console.log(">> value: " + this.firebaseTrace.getValue("foo"));
    }
  }

  public getAttributesPerformanceMonitoring(): void {
    if (this.firebaseTrace) {
      console.log(">> attributes: " + JSON.stringify(this.firebaseTrace.getAttributes()));
    }
  }

  public removeAttributePerformanceMonitoring(): void {
    if (this.firebaseTrace) {
      this.firebaseTrace.removeAttribute("foo");
      console.log(">> attribute removed");
    }
  }

  public incrementMetricPerformanceMonitoring(): void {
    if (this.firebaseTrace) {
      this.firebaseTrace.incrementMetric("foo_metric", 1);
      console.log(">> metric incremented");
    }
  }

  public doCrash(): void {
    console.log("Gonna crash on demand");
    firebaseCrashlytics.crash();
  }

  public doLogMessageCrashlytics(): void {
    firebaseCrashlytics.log("Tag message", "TAG", 1);
    if (isAndroid) {
      firebaseCrashlytics.sendCrashLog(new java.lang.Exception("test Exception"));
    } else if (isIOS) {
      firebaseCrashlytics.sendCrashLog(new NSError({
        domain: 'ShiploopHttpResponseErrorDomain',
        code: 42,
        userInfo: null
      }));
    }

    alert({
      title: "Message logged",
      message: "Check the Firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetCrashlyticString(): void {
    firebaseCrashlytics.setString("test_key", "test_value");

    alert({
      title: "String created",
      message: "New string key created, log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetCrashlyticBool(): void {
    firebaseCrashlytics.setBool("test_key_bool", true);

    alert({
      title: "Bool created",
      message: "New string key created, log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetCrashlyticInt(): void {
    firebaseCrashlytics.setInt("test_key_int", 2);

    alert({
      title: "Int created",
      message: "New string key created, log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetCrashlyticDouble(): void {
    firebaseCrashlytics.setDouble("test_key_double", 56615.55548465);

    alert({
      title: "Double created",
      message: "New string key created, log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetCrashlyticFloat(): void {
    firebaseCrashlytics.setFloat("test_key", 54646.45);

    alert({
      title: "Float created",
      message: "New string key created, log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }

  public doSetUserId(): void {
    // just for fun: showing usage of 'firebase.crashlytics' instead of 'firebaseCrashlytics'
    firebaseCrashlytics.setUserId("user#42");

    alert({
      title: "User id changed",
      message: "Log a new message and check firebase console",
      okButtonText: "Okay"
    });
  }
}
