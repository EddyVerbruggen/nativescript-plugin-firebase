For more sophisticated handling of Firebase Messaging we need to implement 2 services.
Those services must be configured in `AndroidManifest.xml` and we need to ship 2 additional classes.
 
To make it as easy as possible for consumers of this plugin we bundle those bith in an `.aar` file.

Steps to update the `.aar` file:

* Clone this repo
* Start Android Studio and pick 'import project' > `{this repo}/platforms/android/libraryproject`
* Update `.java` classes and/or `firebase/src/main/AndroidManifest.xml` as needed
* Open the Gradle toolwindow
* Run `firebase > Tasks > build > build`
* The (release) `.aar` will be generated in `firebase/build/outputs/aar`
* Copy that to the `platforms/android` folder, replacing the old `.aar`
* Commit and push the changes as usual