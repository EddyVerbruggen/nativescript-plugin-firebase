import * as fs from "tns-core-modules/file-system";
import { MLKitCameraView } from "../mlkit-cameraview";

export abstract class MLKitCustomModel extends MLKitCameraView {
  static scanResultEvent: string = "scanResult";
}

export function getLabelsFromAppFolder(labelsFile: string): Array<string> {
  const labelsPath = fs.knownFolders.currentApp().path + labelsFile.substring(1);
  return getLabelsFromFile(labelsPath);
}

export function getLabelsFromFile(labelsFile: string): Array<string> {
  const fileContents = fs.File.fromPath(labelsFile).readTextSync();
  const lines: Array<string> = fileContents.split("\n");
  // remove possibly empty trailing lines
  while (lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  return lines;
}