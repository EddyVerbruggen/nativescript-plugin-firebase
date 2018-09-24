import {HttpsCallable} from './functions';


export function httpsCallable< I = {}, O = {} >( functionName: string ): HttpsCallable<I, O> {

    const functions = FIRFunctions.functions();

    return (data: I ) => new Promise((resolve, reject) => {
        functions.HTTPSCallableWithName(functionName).callWithObjectCompletion(data, (result: FIRHTTPSCallableResult, err: NSError) => {
            if ( err ) {
                if ( err.domain === FIRFunctionsErrorDomain ) {
                    const message = err.localizedDescription;
                    reject( message );
                }
            }
            resolve(result.data as O);
        });
    });
}