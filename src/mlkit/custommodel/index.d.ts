import { MLKitCameraView, MLKitOptions, MLKitResult } from "../index";

export interface MLKitCustomModelResult extends MLKitResult {
  result: any;
}

export interface MLKitCustomModelOptions extends MLKitOptions {
}

export declare function useCustomModel(options: MLKitCustomModelOptions): Promise<MLKitCustomModelResult>;

export declare class MLKitCustomModel extends MLKitCameraView {}
