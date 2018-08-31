<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit.png" height="84px" alt="ML Kit"/>

Make sure to check out [this demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/tree/master/demo-ng) because it has almost all ML Kit features this plugin currently supports! Steps:

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
|[Face detection](#face-detection)|✅*|
|[Barcode scanning](#barcode-scanning)|✅|
|[Image labeling](#image-labeling)|✅|✅
|[Landmark recognition](#landmark-recognition)||✅
|[Custom model inference](#custom-model-inference)||

*) _Currently detecting faces from still images doesn't work on iOS (from the camera stream works fine tho)._

### Text recognition
<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/mlkit_text_recognition.png" height="153px" alt="ML Kit - Text recognition"/>

[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/recognize-text)

#### Still image (on-device)

```typescript
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextOnDevice({
  image: imageSource // a NativeScript Image or ImageSource, see the demo for examples
}).then((result: MLKitRecognizeTextResult) => { // just look at this type to see what else is returned
  console.log(result.text ? result.text : "");
}).catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Still image (cloud)

```typescript
import { MLKitRecognizeTextResult } from "nativescript-plugin-firebase/mlkit/textrecognition";
const firebase = require("nativescript-plugin-firebase");

firebase.mlkit.textrecognition.recognizeTextCloud({
  image: imageSource, // a NativeScript Image or ImageSource, see the demo for examples
})
.then((result: MLKitRecognizeTextResult) => console.log(result.text ? result.text : ""))
.catch(errorMessage => console.log("ML Kit error: " + errorMessage));
```

#### Live camera feed
The exact details of using the live camera view depend on whether or not you're using Angular / Vue.

You can use any view-related property you like as we're extending `ContentView`.
So things like `class`, `row`, `width`, `horizontalAlignment`, `style` are all valid properties.

Plugin-specific are the optional properties `processEveryNthFrame` and `torchOn`, and optional event `scanResult`.
You can `processEveryNthFrame` set to a lower value than the default (5) to put less strain on the device.
Especially 'Face detection' seems a bit more CPU intensive, but for 'Text recognition' the default is fine.

> Look at [the demo app](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/tree/master/demo-ng) to see how to wire up that `onTextRecognitionResult` function, and how to wire `torchOn` to a `Switch`. 

##### Angular / Vue
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
    [torchOn]="torchOn"
    (scanResult)="onTextRecognitionResult($event)">
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
      scanResult="onTextRecognitionResult" />

</Page>
```

> Note that with NativeScript 4 the `Page` tag may actually be a `TabView`, but adding the namespace declaration to the TabView works just as well.

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
    [torchOn]="torchOn"
    (scanResult)="onFaceDetectionResult($event)">
</MLKitFaceDetection>
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
    formats="QR_CODE, EAN_8, EAN_13"
    [torchOn]="torchOn"
    (scanResult)="onBarcodeScanningResult($event)">
</MLKitBarcodeScanner>
```

Note that `formats` is optional but recommended for better recognition performance. Supported types:
`CODE_128`, `CODE_39`, `CODE_93`, `CODABAR`, `DATA_MATRIX`, `EAN_13`, `EAN_8`, `ITF`, `QR_CODE`, `UPC_A`, `UPC_E`, `PDF417`, `AZTEC`.

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

### Custom model inference
[Firebase documentation 🌎](https://firebase.google.com/docs/ml-kit/use-custom-models)

Coming soon. See issue #702.
