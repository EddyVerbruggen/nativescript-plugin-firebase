import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TabsComponent } from "./tabs.component";
import { TextRecognitionComponent } from "~/tabs/mlkit/textrecognition/textrecognition.component";
import { BarcodeScanningComponent } from "~/tabs/mlkit/barcodescanning/barcodescanning.component";
import { FaceDetectionComponent } from "~/tabs/mlkit/facedetection/facedetection.component";
import { ObjectDetectionComponent } from "~/tabs/mlkit/objectdetection/objectdetection.component";
import { ImageLabelingComponent } from "~/tabs/mlkit/imagelabeling/imagelabeling.component";
import { CustomModelComponent } from "~/tabs/mlkit/custommodel/custommodel.component";
import { LanguageIdentificationComponent } from "~/tabs/mlkit/languageidentification/languageidentification.component";

const routes: Routes = [
  { path: "", component: TabsComponent },
  { path: "mlkit/textrecognition", component: TextRecognitionComponent },
  { path: "mlkit/barcodescanning", component: BarcodeScanningComponent },
  { path: "mlkit/facedetection", component: FaceDetectionComponent },
  { path: "mlkit/objectdetection", component: ObjectDetectionComponent },
  { path: "mlkit/imagelabeling", component: ImageLabelingComponent },
  { path: "mlkit/custommodel", component: CustomModelComponent },
  { path: "mlkit/languageidentification", component: LanguageIdentificationComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
