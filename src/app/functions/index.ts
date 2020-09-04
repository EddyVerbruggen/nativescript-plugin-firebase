import { functions as fNamepspace } from "../../firebase";

export namespace functions {
  // tslint:disable-next-line:class-name
  export class Functions {
    httpsCallable<I, O>(functionName: string, region?: fNamepspace.SupportedRegions) {
      return fNamepspace.httpsCallable<I, O>(functionName, region);
    }
  }
}