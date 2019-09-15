import * as firebase from "../firebase";
import { firebaseUtils } from '../utils';
import { HttpsCallable } from './functions';

export function httpsCallable<I = {}, O = {}>(functionName: string, region?: firebase.functions.SupportedRegions): HttpsCallable<I, O> {

  const functions = region ? FIRFunctions.functionsForRegion(region) : FIRFunctions.functions();

  return (data: I) => new Promise((resolve, reject) => {

    const callable = functions.HTTPSCallableWithName(functionName);

    const handleCompletion = (result: FIRHTTPSCallableResult, err: NSError) => {
      if (err) {
        reject(err.localizedDescription);
        return;
      }

      if (result) {
        resolve(firebaseUtils.toJsObject(result.data) as O);
      }
    };

    if (data) {
      callable.callWithObjectCompletion(data, handleCompletion);
    } else {
      callable.callWithCompletion(handleCompletion);
    }
  });
}