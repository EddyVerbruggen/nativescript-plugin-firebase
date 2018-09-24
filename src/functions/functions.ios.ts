export function httpsCallable< D = {}, T = {} >( functionName: string ) {

    const functions = FIRFunctions.functions();

    return (data: D) => new Promise((resolve, reject) => {
        functions.HTTPSCallableWithName(functionName).callWithObjectCompletion(data, (result, err: NSError) => {
            if ( err ) {
                if ( err.domain === FIRFunctionsErrorDomain ) {
                    const message = err.localizedDescription;
                    reject( message );
                }
            }
            resolve(result.data);
        });
    });
}