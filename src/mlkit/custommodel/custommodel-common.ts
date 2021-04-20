import { knownFolders, File, Property } from "@nativescript/core";
import { MLKitCameraView } from "../mlkit-cameraview";
import { MLKitCustomModelType } from "./index";

export const localModelFileProperty = new Property<MLKitCustomModel, string>({
  name: "localModelFile",
  defaultValue: null,
});

export const labelsFileProperty = new Property<MLKitCustomModel, string>({
  name: "labelsFile",
  defaultValue: null,
});

export const modelInputShapeProperty = new Property<MLKitCustomModel, string>({
  name: "modelInputShape",
  defaultValue: null,
});

export const modelInputTypeProperty = new Property<MLKitCustomModel, string>({
  name: "modelInputType",
  defaultValue: null,
});

// TODO could combine this with 'confidenceThreshold'
export const maxResultsProperty = new Property<MLKitCustomModel, number>({
  name: "maxResults",
  defaultValue: 5
});

export abstract class MLKitCustomModel extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";
  protected localModelFile: string;
  protected labelsFile: string;
  protected maxResults: number;
  protected modelInputShape: Array<number>;
  protected modelInputType: MLKitCustomModelType;

  protected onSuccessListener;
  protected detectorBusy: boolean;

  protected labels: Array<string>;

  [localModelFileProperty.setNative](value: string) {
    this.localModelFile = value;
  }

  [labelsFileProperty.setNative](value: string) {
    this.labelsFile = value;
    if (value.indexOf("~/") === 0) {
      this.labels = getLabelsFromAppFolder(value);
    } else {
      // no dice loading from assets yet, let's advice users to use ~/ for now
      console.log("For the 'labelsFile' property, use the ~/ prefix for now..");
      return;
    }
  }

  [maxResultsProperty.setNative](value: any) {
    this.maxResults = parseInt(value);
  }

  [modelInputShapeProperty.setNative](value: string) {
    if ((typeof value) === "string") {
      this.modelInputShape = value.split(",").map(v => parseInt(v.trim()));
    }
  }

  [modelInputTypeProperty.setNative](value: MLKitCustomModelType) {
    this.modelInputType = value;
  }
}

localModelFileProperty.register(MLKitCustomModel);
labelsFileProperty.register(MLKitCustomModel);
maxResultsProperty.register(MLKitCustomModel);
modelInputShapeProperty.register(MLKitCustomModel);
modelInputTypeProperty.register(MLKitCustomModel);

export function getLabelsFromAppFolder(labelsFile: string): Array<string> {
  const labelsPath = knownFolders.currentApp().path + labelsFile.substring(1);
  return getLabelsFromFile(labelsPath);
}

export function getLabelsFromFile(labelsFile: string): Array<string> {
  const fileContents = File.fromPath(labelsFile).readTextSync();
  const lines: Array<string> = fileContents.split("\n");
  // remove possibly empty trailing lines
  while (lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  return lines;
}
