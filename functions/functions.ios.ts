import { HttpsCallable } from './functions';
import { firebaseUtils } from '../utils';

export function httpsCallable<I = {}, O = {}>(functionName: string): HttpsCallable<I, O> {

  const functions = FIRFunctions.functions();

  return (data: I) => new Promise((resolve, reject) => {

    const callable = functions.HTTPSCallableWithName(functionName);

    const handleCompletion = (result: FIRHTTPSCallableResult, err: NSError) => {
      if (err) {
        if (err.domain === FIRFunctionsErrorDomain) {
          const message = err.localizedDescription;
          reject(message);
          return;
        }

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