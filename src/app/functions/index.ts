import * as firebase from "../../firebase";

export namespace functions {
  // tslint:disable-next-line:class-name
  export class Functions {
    httpsCallable<I, O>(functionName: string, region?: firebase.functions.SupportedRegions) {
      return firebase.functions.httpsCallable<I, O>(functionName, region);
    }
  }
}