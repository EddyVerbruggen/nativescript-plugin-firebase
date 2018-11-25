import { HttpsCallable } from "./functions";
import { firebase } from "../firebase-common";

export function httpsCallable<I = {}, O = {}>(functionName: string): HttpsCallable<I, O> {
  const instance = com.google.firebase.functions.FirebaseFunctions.getInstance();

  return (data: I) => new Promise<O>((resolve, reject) => {

    const actData = firebase.toValue(data);

    return instance.getHttpsCallable(functionName)
        .call(actData)
        .continueWith(new (<any>com.google.android.gms).tasks.Continuation({
          then: (task) => {

            try {
              const result = task.getResult() as com.google.firebase.functions.HttpsCallableResult;
              const resultData = result.getData();

              resolve(firebase.toJsObject(resultData) as O);
            } catch (e) {
              console.log('Error Caught:', e);
              reject(e.message);
            }

          }
        }));
  });
}