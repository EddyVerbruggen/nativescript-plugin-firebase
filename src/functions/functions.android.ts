export function httpsCallable<I = {}, O = {}>(functionName: string) {
    const instance = com.google.firebase.functions.FirebaseFunctions.getInstance();

    return (data: I) => new Promise<O>((resolve, reject) => {

        return instance.getHttpsCallable(functionName)
                .call(data)
                .continueWith(new (<any>com.google.android.gms).tasks.Continuation({
                    then: (task) => {

                        try {
                            const result = task.getResult() as com.google.firebase.functions.HttpsCallableResult;
                            const resultData = result.getData() as O;

                            resolve( resultData );
                        } catch (e) {
                            reject( e.message );
                        }

                    }
                }));

    });


}