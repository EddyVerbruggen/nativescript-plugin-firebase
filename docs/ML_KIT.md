Just dumping a few things I should not forget to add to the doc:

- see step 3 @ https://firebase.google.com/docs/ml-kit/android/recognize-text
- For Cloud processing, enable the Vision API and upgrade your Firebase project to "Blaze" (pay as you go)


<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit.png" height="84px" alt="ML Kit"/>

Make sure to check out [this demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/tree/master/demo-ng) because it has almost all ML Kit features this plugin currently supports! Steps:

```bash
git clone https://github.com/EddyVerbruggen/nativescript-plugin-firebase
cd nativescript-plugin-firebase/src
npm i
npm run demo-ng.ios (or .android)
```

## Enabling ML Kit
During plugin installation you'll be asked whether or not you use ML Kit and which of its features.

In case you're upgrading and you have the `firebase.nativescript.json` file in your project root, it's safest to rename it (so you can see what your old configuration was),
then clean your platforms folder (`rm -rf platforms`) and build your app again. You will be prompted which Firebase features you'll want to use.

## ML Kit Features
There are two ways of using ML Kit: On-device or in the cloud. Depending on the 

- *On-device*. These features have been enhanced to not only interpret still images, but you can also run ML against a live camera feed. Why? Because it's fr***ing cool! 
- *Cloud*. The cloud has much larger and always up to date models, so results will be more accurate. Since this is a remote service reconition speed depends heavily on the size of the images you send to the cloud.


### Cloud configuration
To nbe able to use Cloud features you need to do two things:

1) Enable the Cloud Vision API:

- Open the [Cloud Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com/) in the Cloud Console API library.
- Ensure that your Firebase project is selected in the menu at the top of the page.
- If the API is not already enabled, click _Enable_.

2) Upgrade to a Blaze plan.

- Open the [Firebase console](https://console.firebase.google.com/).
- Select your project.
- In the bottom left, make sure you're on the _Blaze_ plan, or hit the 'Upgrade' button.

### Feature table

|Feature|On-device|Cloud
|---|---|---
|[Text recognition](#text-recognition)|✅|✅
|[Face detection](face-detection)|✅*|
|[Barcode scanning](barcode-scanning)|✅|
|[Image labeling](image-labeling)|✅|✅
|[Landmark recognition](landmark-recognition)||✅
|[Custom model inference](custom-model-inference)|✅|

*) _Currently detecting faces from still images doesn't work on iOS (detection from the camera stream works fine though)._

### [Text recognition](https://firebase.google.com/docs/ml-kit/recognize-text)
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_recognition.png" height="153px" alt="ML Kit - Text recognition"/>

#### Still image (on-device)

```typescript
import { MLKitRecognizeTextOnDeviceResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextOnDevice({
  image: imageSource // a NativeScript Image or ImageSource, see the demo for examples
}).then((result: MLKitRecognizeTextOnDeviceResult) => { // just look at this type to see what else is returned
  console.log(result.features.map(feature => feature.text).join(""));
}).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Still image (cloud)

```typescript
import { MLKitRecognizeTextCloudResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextOnDevice({
  image: imageSource,  // a NativeScript Image or ImageSource, see the demo for examples
  modelType: "latest", // either "latest" or "stable" (default "stable")
  maxResults: 15       // default 10
}).then((result: MLKitRecognizeTextCloudResult) => {
  console.log(result.text);
}).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```
#### Live camera feed

### [Face detection](https://firebase.google.com/docs/ml-kit/detect-faces)
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_face_detection.png" height="153px" alt="ML Kit - Face detection"/>

### [Barcode scanning](https://firebase.google.com/docs/ml-kit/read-barcodes)
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_barcode_scanning.png" height="153px" alt="ML Kit - Barcode scanning"/>

### [Image labeling](https://firebase.google.com/docs/ml-kit/label-images)
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_image_labeling.png" height="153px" alt="ML Kit - Image labeling"/>

### [Landmark recognition](https://firebase.google.com/docs/ml-kit/recognize-landmarks)
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_landmark_recognition.png" height="153px" alt="ML Kit - Landmark recognition"/>

### [Custom model inference](https://firebase.google.com/docs/ml-kit/use-custom-models)
Coming soon
