import {HttpsCallable} from '.';

export function httpsCallable<I = {}, O = {}>(functionName: string): HttpsCallable<I, O> {
    const instance = com.google.firebase.functions.FirebaseFunctions.getInstance();

    return (data: I) => new Promise<O>((resolve, reject) => {

        let actData = convertToNative(data);

        return instance.getHttpsCallable(functionName)
                .call(actData)
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

function convertToNative(input: any) {

    if ( typeof input === "string" ) {
        return new java.lang.String(input);
    } else if (typeof input === "number") {
        if ( input % 1 === 0) {
            return new java.lang.Integer(input);
        } else {
            return new java.lang.Float(input);
        }
    } else if ( typeof input === "boolean" ) {
        return new java.lang.Boolean(input);
    } else if ( Array.isArray(input) ) {
        const hashset = new java.util.ArrayList();
        input.forEach( (currentItem) => hashset.add(convertToNative(currentItem)));
        return hashset;
    } else {
        const hashmap = new java.util.HashMap<string, any>();
        Object.keys(input).forEach((currentItem ) => hashmap.put( currentItem, convertToNative(input[currentItem])));
        return hashmap;
    }
}