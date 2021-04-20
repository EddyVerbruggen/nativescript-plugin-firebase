<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit.png" height="84px" alt="ML Kit"/>

Make sure to check out [this demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/tree/master/demo-ng) because it has almost all ML Kit features this plugin currently supports! Steps:

> Supported on Android, and iOS 10+

```bash
git clone https://github.com/EddyVerbruggen/nativescript-plugin-firebase
cd nativescript-plugin-firebase/src
npm run setupandinstall (just skip through the plugin y/n prompts you'll get as those are ignored in this case)
npm run demo-ng.ios (or .android)
```

## Enabling ML Kit
During plugin installation you'll be asked whether or not you want to use ML Kit, and which of its features.

In case you're upgrading and you have the `firebase.nativescript.json` file in your project root, it's safest to rename it (so you can see what your old configuration was),
then clean your platforms folder (`rm -rf platforms`) and build your app again. You will be prompted which Firebase features you'll want to use.

## Required Android permissions
In case you want to detect images from the camera, add these to your app resources `AndroidManifest.xml`:

```xml
  <uses-permission android:name="android.permission.CAMERA"/>
  <uses-feature android:name="android.hardware.camera" android:required="false" />
  <uses-feature android:name="android.hardware.camera.autofocus" android:required="false" />
```

## Required iOS permission
In case you're using the camera on iOS, open `iOS/Info.plist` in your app resources folder,
and add this somewhere in the file (if it's not already there):

```xml
  <key>NSCameraUsageDescription</key>
  <string>Your reason here</string> <!-- better change this 😎 -->
```
In order to compile, the default version on ios must be >= 9.0. 
Edit the file build.xconfig and check that you have the following line (Without this line the default version will be 8.0 and the compilation will failed (`targeted OS version does not support use of thread local variables ...`)
```
IPHONEOS_DEPLOYMENT_TARGET = 9.0;
```

## ML Kit Features
There are two ways of using ML Kit: 

- **On-device**. These features have been enhanced to not only interpret still images, but you can also run ML against a live camera feed. Why? Because it's fr***ing cool! 
- **Cloud**. The cloud has much larger and always up to date models, so results will be more accurate. Since this is a remote service reconition speed depends heavily on the size of the images you send to the cloud.

### On-device configuration
Optionally (but recommended) for Android, you can have the device automatically download the relevant ML model(s) to the device
after your app is installed from the Play Store. Add this to your `<resources>/Android/AndroidManifest.xml`:

```xml
<meta-data
    android:name="com.google.firebase.ml.vision.DEPENDENCIES"
    android:value="ocr,face,.." />
```

Replace `ocr,label,..` by whichever features you need. So if you only need Text recognitions, use `"ocr"`, but if you want
to perform Text recognition, Face detection, Barcode scanning, and Image labeling on-device, use `"ocr,face,barcode,label"`.

Note that (because of how iOS works) we bundle the models you've picked during plugin configuration with your app.
So if you have a change of heart, re-run the configuration as explained at the top of this document. 

### Cloud configuration
To be able to use Cloud features you need to do two things:

1) Enable the Cloud Vision API:

- Open the [Cloud Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com/) in the Cloud Console API library.
- Ensure that your Firebase project is selected in the menu at the top of the page.
- If the API is not already enabled, click _Enable_.

2) Upgrade to a Blaze plan.

- Open the [Firebase console](https://console.firebase.google.com/).
- Select your project.
- In the bottom left, make sure you're on the _Blaze_ plan, or hit the 'Upgrade' button.

### Features

|Feature|On-device|Cloud
|---|---|---
|[Text recognition](#text-recognition)|✅|✅
|[Face detection](#face-detection)|✅|
|[Object detection and tracking](#object-detection-and-tracking)|✅|
|[Barcode scanning](#barcode-scanning)|✅|
|[Image labeling](#image-labeling)|✅|✅
|[Landmark recognition](#landmark-recognition)||✅
|[Natural language identification](#natural-language-identification)|✅|
|[Translate text](#translate-text)|✅|
|[Smart reply](#smart-reply)|✅|
|[AutoML Vision Edge](#automl-vision-edge)|✅|✅
|[Custom model inference](#custom-model-inference)|✅|✅

### Text recognition
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_recognition.png" height="153px" alt="ML Kit - Text recognition"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/recognize-text)

#### Still image (on-device)

##### TypeScript

```typescript
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextOnDevice({
  image: imageSource // a NativeScript Image or ImageSource, see the demo for examples
}).then((result: MLKitRecognizeTextResult) => { // just look at this type to see what else is returned
  console.log(result.text ? result.text : "");
}).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

##### JavaScript

```js
var firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextOnDevice({
  image: imageSource // a NativeScript Image or ImageSource, see the demo for examples
}).then(function(result) {
  console.log(result.text ? result.text : "");
}).catch(function (errorMessage) { return console.log("ML Kit error: " + errorMessage); });
```

#### Still image (cloud)

##### TypeScript

```typescript
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextCloud({
  image: imageSource, // a NativeScript Image or ImageSource, see the demo for examples
})
.then((result: MLKitRecognizeTextResult) => console.log(result.text ? result.text : ""))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

##### JavaScript

```js
var firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextCloud({
  image: imageSource // a NativeScript Image or ImageSource, see the demo for examples
}).then(function(result) {
  console.log(result.text ? result.text : "");
}).catch(function (errorMessage) { return console.log("ML Kit error: " + errorMessage); });
```

#### Live camera feed
The exact details of using the live camera view depend on whether or not you're using Angular / Vue.

You can use any view-related property you like as we're extending `ContentView`.
So things like `class`, `row`, `width`, `horizontalAlignment`, `style` are all valid properties.

Plugin-specific are the optional properties `processEveryNthFrame`, `preferFrontCamera` (default `false`), `torchOn`, and `pause`, as well as the optional `scanResult` event.

You can set `processEveryNthFrame` set to a lower value than the default (5) to put less strain on the device.
Especially 'Face detection' seems a bit more CPU intensive, but for 'Text recognition' the default is fine.

If you don't destroy the scanner page/modal but instead briefly want to hide it (but keep it alive),
you can pause the scanner with the `pause` property.

> Look at [the demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/tree/master/demo-ng) to see how to wire up that `onTextRecognitionResult` function, and how to wire `torchOn` to a `Switch`. 

##### Angular
Register a custom element like so in the component/module:

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);
```

Now you're able to use the registered element in the view:

```html
<MLKitTextRecognition
    class="my-class"
    width="260"
    height="380"
    processEveryNthFrame="10"
    preferFrontCamera="false"
    [pause]="pause"
    [torchOn]="torchOn"
    (scanResult)="onTextRecognitionResult($event)">
</MLKitTextRecognition>
```

##### Vue
Register a custom element like so in `main.js`:

```typescript
Vue.registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);
```

Now you're able to use the registered element in your `.Vue` file:

```vue
  <MLKitTextRecognition
    width="260"
    height="340"
    processEveryNthFrame="5"
    :torchOn="torchOn"
    @scanResult="onTextRecognitionResult">
  </MLKitTextRecognition>
```

##### XML 
Declare a namespace at the top of the embedding page, and use it anywhere on the page:

```xml
<Page xmlns:FirebaseMLKitTextRecognition="nativescript-plugin-firebase/mlkit/textrecognition">

  <OtherTags/>

  <FirebaseMLKitTextRecognition:MLKitTextRecognition
      class="my-class"
      width="260"
      height="380"
      processEveryNthFrame="3"
      preferFrontCamera="false"
      pause="{{ pause }}"
      scanResult="onTextRecognitionResult" />

</Page>
```

> Note that since NativeScript 4 the `Page` tag may actually be a `TabView`, but adding the namespace declaration to the TabView works just as well.

### Face detection
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_face_detection.png" height="153px" alt="ML Kit - Face detection"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/detect-faces)

#### Still image (on-device)

```typescript
import { MLKitDetectFacesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/facedetection";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.facedetection.detectFacesOnDevice({
  image: imageSource, // a NativeScript Image or ImageSource, see the demo for examples
  detectionMode: "accurate", // default "fast"
  enableFaceTracking: true, // default false
  minimumFaceSize: 0.25 // default 0.1 (which means the face must be at least 10% of the image)
})
.then((result: MLKitDetectFacesOnDeviceResult) => console.log(JSON.stringify(result.faces)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition', so we're only showing the differences here.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitFaceDetection", () => require("nativescript-plugin-firebase/mlkit/facedetection").MLKitFaceDetection);
```

```html
<MLKitFaceDetection
    width="260"
    height="380"
    detectionMode="accurate"
    enableFaceTracking="true"
    minimumFaceSize="0.2"
    preferFrontCamera="true"
    [torchOn]="torchOn"
    (scanResult)="onFaceDetectionResult($event)">
</MLKitFaceDetection>
```

### Object detection and tracking
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_object_detection.png" height="124px" alt="ML Kit - Object detection and tracking"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/object-detection)

#### Still image

```typescript
import { MLKitObjectDetectionResult } from "nativescript-plugin-firebase/mlkit/objectdetection";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.objectdetection.detectObjects({
  image: imageSource, // a NativeScript Image or ImageSource, see the demo for examples
  classify: true, // default false, attempts to classify the object(s) if true
  multiple: true // default false, attempts to detect multiple objects (instead of only the most prominent one) when true
})
.then((result: MLKitObjectDetectionResult) => console.log(JSON.stringify(result.objects)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition', so we're only showing the differences here.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitObjectDetection", () => require("nativescript-plugin-firebase/mlkit/objectdetection").MLKitObjectDetection);
```

```html
<MLKitObjectDetection
    width="260"
    height="380"
    classify="true"
    multiple="false"
    processEveryNthFrame="20"
    [torchOn]="torchOn"
    (scanResult)="onObjectDetectionResult($event)">
</MLKitObjectDetection>
```

### Barcode scanning
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_barcode_scanning.png" height="153px" alt="ML Kit - Barcode scanning"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/read-barcodes)

#### Still image (on-device)

```typescript
import { BarcodeFormat, MLKitScanBarcodesOnDeviceResult } from "nativescript-plugin-firebase/mlkit/barcodescanning";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.barcodescanning.scanBarcodesOnDevice({
  image: imageSource,
  supportInverseBarcodes: true, // only set to true if you need this as it's degrades performance slightly
  formats: [BarcodeFormat.QR_CODE, BarcodeFormat.CODABAR] // limit recognition to certain formats (faster), or leave out entirely for all formats (default)
})
.then((result: MLKitScanBarcodesOnDeviceResult) => console.log(JSON.stringify(result.barcodes)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition', so we're only showing the differences here.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitBarcodeScanner", () => require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);
```

```html
<MLKitBarcodeScanner
    width="260"
    height="380"
    beepOnScan="true"
    formats="QR_CODE, EAN_8, EAN_13"
    preferFrontCamera="false"
    supportInverseBarcodes="false"
    [torchOn]="torchOn"
    (scanResult)="onBarcodeScanningResult($event)">
</MLKitBarcodeScanner>
```

Note that `formats` is optional but recommended for better recognition performance. Supported types:
`CODE_128`, `CODE_39`, `CODE_93`, `CODABAR`, `DATA_MATRIX`, `EAN_13`, `EAN_8`, `ITF`, `QR_CODE`, `UPC_A`, `UPC_E`, `PDF417`, `AZTEC`.

Also note that `beepOnScan` is optional and (since version 8.1.0) default `true`.

### Image labeling
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_image_labeling.png" height="153px" alt="ML Kit - Image labeling"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/label-images)

#### Still image (on-device)

```typescript
import { MLKitImageLabelingOnDeviceResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.imagelabeling.labelImageOnDevice({
  image: imageSource,
  confidenceThreshold: 0.6 // this will only return labels with at least 0.6 (60%) confidence. Default 0.5.
})
.then((result: MLKitImageLabelingOnDeviceResult) => console.log(JSON.stringify(result.labels)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Still image (cloud)

```typescript
import { MLKitImageLabelingCloudResult } from "nativescript-plugin-firebase/mlkit/imagelabeling";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.imagelabeling.labelImageCloud({
  image: imageSource,
  modelType: "stable", // either "latest" or "stable" (default "stable")
  maxResults: 5 // default 10
})
.then((result: MLKitImageLabelingCloudResult) => console.log(JSON.stringify(result.labels)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition', so we're only showing the differences here.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitImageLabeling", () => require("nativescript-plugin-firebase/mlkit/imagelabeling").MLKitImageLabeling);
```

```html
<MLKitImageLabeling
    width="260"
    height="380"
    confidenceThreshold="0.6"
    preferFrontCamera="false"
    [torchOn]="torchOn"
    (scanResult)="onImageLabelingResult($event)">
</MLKitImageLabeling>
```

### Landmark recognition
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_landmark_recognition.png" height="153px" alt="ML Kit - Landmark recognition"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/recognize-landmarks)

#### Still image (cloud)

```typescript
import { MLKitLandmarkRecognitionCloudResult } from "nativescript-plugin-firebase/mlkit/landmarkrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.landmarkrecognition.recognizeLandmarksCloud({
  image: imageSource,
  modelType: "latest", // either "latest" or "stable" (default "stable")
  maxResults: 8 // default 10
})
.then((result: MLKitLandmarkRecognitionCloudResult) => console.log(JSON.stringify(result.landmarks)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

### Natural language identification
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_language_detection.png" height="153px" alt="ML Kit - Landmark detection"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/identify-languages)

#### Still image
Note that you could hook this up to text recognition running from a live camera stream, to get realtime results.
Check [demo-ng](demo-ng) if you're interested in such a solution.

```typescript
import { MLKitNaturalLanguageIdentificationResult } from "nativescript-plugin-firebase/mlkit/naturallanguageidentification";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.naturallanguageidentification.identifyNaturalLanguage({
  text: "Some text to detect the language for"
})
.then((languageIdResult: MLKitNaturalLanguageIdentificationResult) => console.log(`Language code: ${languageIdResult.languageCode}`))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

### Translate text
> ⚠️ Because of a model-download bug on iOS this feature currently only works on Android.

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_translation.png" height="153px" alt="ML Kit - Translate text"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/translation)

#### Still image
You could use MLKit to perform OCR, then identify the language, and then translate it to another language.
Check [demo-ng](demo-ng) if you're interested in such an approach.

```typescript
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.translation.ensureTranslationModelDownloaded({
  from: "nl",
  to: "en"
}).then(() => {
    firebase.mlkit.translation.translateText({
      from: "nl",
      to: "en",
      text: "De kat krabt de krullen van de trap" // some Dutch text
    })
    .then(result => console.log(`Translated to English: ${result}`))
    .catch(console.error)
}).catch(console.error);
```

### Smart reply
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_smart_reply.png" height="153px" alt="ML Kit - Smart reply"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/generate-smart-replies)

#### Still image

```typescript
import { MLKitSmartReplyConversationMessage } from "nativescript-plugin-firebase/mlkit/smartreply";
const firebase = require("nativescript-plugin-firebase");

// build a converstation history MLKit can create suggestions for, in chronological order
const conversation: Array<MLKitSmartReplyConversationMessage> = [];
conversation.push({
  text: "some text",
  userId: "abc",
  localUser: false,
  timestamp: new Date().getTime()
});

conversation.push({
  text: "some other text",
  userId: "def",
  localUser: true,
  timestamp: new Date().getTime()
});

firebase.mlkit.smartreply.suggestReplies({
  conversation
}).then((suggestions: Array<string>) => console.log(JSON.stringify(suggestions)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

### AutoML Vision Edge
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_automl.png" height="153px" alt="ML Kit - AutoML Vision Edge"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/automl-image-labeling)

> NOTE: currently only local models are supported (not cloud models), but it's fairly easy to add those so open an issue if you need it. See the demo-ng folder for an example.

#### Still image (on-device)

```typescript
import { MLKitAutoMLResult } from "nativescript-plugin-firebase/mlkit/automl";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.automl.labelImage({
  localModelResourceFolder: "leftright", 
  image: imageSource,
  confidenceThreshold: 0.6 // this will only return labels with at least 0.6 (60%) confidence. Default 0.5.
})
.then((result: MLKitAutoMLResult) => console.log(JSON.stringify(result.labels)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition', so we're only showing the differences here.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitAutoML", () => require("nativescript-plugin-firebase/mlkit/automl").MLKitAutoML);
```

```html
<MLKitAutoML
    width="260"
    height="380"
    localModelResourceFolder="leftright"
    confidenceThreshold="0.6"
    (scanResult)="onAutoMLResult($event)">
</MLKitImageLabeling>
```

### Custom model inference
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_custom_model_tflite.png" height="153px" alt="ML Kit - Custom Model (TensorFlow Lite)"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/use-custom-models)

⚠️ **Please take note of the following:**

- Currently only models bundled with your app can be used (not ones hosted on Firebase). That may change in the future.
- Prefix the `localModelFile` and `labelsFile` below with `~/` so they point to your `app/` folder. This is for future compatibility, because I'd like to support loading models from the native bundle as well.
- On Android, make sure the model is not compressed by adding [your model's file extension to app.gradle](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/57969d0a62d761bffb98b19db85af88bfae858dd/demo-ng/app/App_Resources/Android/app.gradle#L22).
- Only "Quantized" models can be used. Not "Float" models, so `modelInput.type` below must be set to `QUANT`.
- The `modelInput.shape` parameter below must specify your model's dimensions. If you're not sure, use the script in the paragraph "Specify the model's input and output" at [the Firebase docs](https://firebase.google.com/docs/ml-kit/ios/use-custom-models).
- If you're using Webpack, make sure to have it copy the model and labels files to the bundled app as well. [Here's an example.](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/816a529be7f19bad1bbd572b77835ab8e557f32d/demo-ng/webpack.config.js#L275)

#### Still image (on-device)

```typescript
import { MLKitCustomModelResult } from "nativescript-plugin-firebase/mlkit/custommodel";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.custommodel.useCustomModel({
  image: imageSource, // a NativeScript Image or ImageSource, see the demo for examples
  maxResults: 10, // default 5 (limit numbers to this amount of results)
  localModelFile: "~/custommodel/inception/inception_v3_quant.tflite", // see the demo, where the model lives in app/custommodel/etc..
  labelsFile: "~/custommodel/inception/inception_labels.txt",
  modelInput: [{ // Array<TNSCustomModelInput>
    shape: [1, 299, 299, 3], // see the tips above
    type: "QUANT" // for now, must be "QUANT" (and you should use a 'quantized' model (not 'float'))
  }]
})
.then((result: MLKitCustomModelResult) => console.log(JSON.stringify(result.result)))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The basics are explained above for 'Text recognition'.

```typescript
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitCustomModel", () => require("nativescript-plugin-firebase/mlkit/custommodel").MLKitCustomModel);
```

```html
<MLKitCustomModel
    width="100%"
    height="100%"
    localModelFile="~/custommodel/inception/inception_v3_quant.tflite"
    labelsFile="~/custommodel/inception/inception_labels.txt"
    modelInputShape="1, 299, 299, 3"
    modelInputType="QUANT"
    processEveryNthFrame="30"
    maxResults="5"
    [torchOn]="torchOn"
    (scanResult)="onCustomModelResult($event)">
</MLKitCustomModel>
```

> ⚠️ Make sure to specify `modelInputShape` without the `[` and `]` characters. Spaces are allowed.
