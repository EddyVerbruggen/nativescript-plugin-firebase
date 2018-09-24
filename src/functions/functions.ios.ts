import {HttpsCallable} from './functions';
import { firebaseUtils } from '../utils';


export function httpsCallable< I = {}, O = {} >( functionName: string ): HttpsCallable<I, O> {

    const functions = FIRFunctions.functions();

    return (data: I ) => new Promise((resolve, reject) => {

        const callable = functions.HTTPSCallableWithName(functionName);

        if ( data ) {
            callable.callWithObjectCompletion(data, (result: FIRHTTPSCallableResult, err: NSError) => {
                if ( err ) {
                    if ( err.domain === FIRFunctionsErrorDomain ) {
                        const message = err.localizedDescription;
                        reject( message );
                    }

                    reject( err.localizedDescription );
                }

                if ( result ) {
                    resolve( firebaseUtils.toJsObject(result.data as O) );
                }
            });
        } else {
            callable.callWithCompletion((result: FIRHTTPSCallableResult, err: NSError) => {
                if ( err ) {
                    if ( err.domain === FIRFunctionsErrorDomain ) {
                        const message = err.localizedDescription;
                        reject( message );
                    }
                    reject( err.localizedDescription );
                }
                if ( result ) {
                    resolve( firebaseUtils.toJsObject(result.data as O) );
                }
            });
        }
    });
}