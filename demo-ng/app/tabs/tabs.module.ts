import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FirestoreComponent } from "./firestore/firestore.component";
import { MLKitComponent } from "./mlkit/mlkit.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

import { TextRecognitionComponent } from "~/tabs/mlkit/textrecognition/textrecognition.component";
import { BarcodeScanningComponent } from "~/tabs/mlkit/barcodescanning/barcodescanning.component";
import { FaceDetectionComponent } from "~/tabs/mlkit/facedetection/facedetection.component";
import { ObjectDetectionComponent } from "~/tabs/mlkit/objectdetection/objectdetection.component";
import { ImageLabelingComponent } from "~/tabs/mlkit/imagelabeling/imagelabeling.component";
import { CustomModelComponent } from "~/tabs/mlkit/custommodel/custommodel.component";
import { AutoMLComponent } from "~/tabs/mlkit/automl/automl.component";
import { LanguageIdentificationComponent } from "~/tabs/mlkit/languageidentification/languageidentification.component";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitBarcodeScanner", () => require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);
registerElement("MLKitFaceDetection", () => require("nativescript-plugin-firebase/mlkit/facedetection").MLKitFaceDetection);
registerElement("MLKitObjectDetection", () => require("nativescript-plugin-firebase/mlkit/objectdetection").MLKitObjectDetection);
registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);
registerElement("MLKitImageLabeling", () => require("nativescript-plugin-firebase/mlkit/imagelabeling").MLKitImageLabeling);
registerElement("MLKitCustomModel", () => require("nativescript-plugin-firebase/mlkit/custommodel").MLKitCustomModel);
registerElement("MLKitAutoML", () => require("nativescript-plugin-firebase/mlkit/automl").MLKitAutoML);

@NgModule({
  imports: [
    NativeScriptCommonModule,
    TabsRoutingModule
  ],
  declarations: [
    BarcodeScanningComponent,
    FaceDetectionComponent,
    ObjectDetectionComponent,
    FirestoreComponent,
    ImageLabelingComponent,
    MLKitComponent,
    TabsComponent,
    TextRecognitionComponent,
    CustomModelComponent,
    AutoMLComponent,
    LanguageIdentificationComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TabsModule {
}
