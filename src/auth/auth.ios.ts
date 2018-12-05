export namespace auth {
  export function addAuthStateListener(
    nextOrObserver:
      | import('firebase').Observer<any>
      | ((a: import('firebase').User | null) => any),
    error?: ((a: import('firebase').auth.Error) => any),
  ): NSObjectProtocol | undefined {
    try {
      const auth = FIRAuth.auth();

      return auth.addAuthStateDidChangeListener((auth, user: FIRUser | null) => {
        let fbUser: import('firebase').User | undefined;

        if (user) {
          // TODO: We probably can't satisfy all of a (Web SDK) user object, so figure out what methods are possible.
          fbUser = <import('firebase').User>{
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            isAnonymous: user.anonymous,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL && user.photoURL.absoluteString,
            providerId: user.providerID,
            refreshToken: user.refreshToken,
            uid: user.uid,
            metadata: {
              creationTime: user.metadata.creationDate && user.metadata.creationDate.toUTCString(),
              lastSignInTime: user.metadata.lastSignInDate && user.metadata.lastSignInDate.toUTCString(),
            },
            providerData: convertUserInfo(user.providerData),
            delete: () => {
              return new Promise((resolve, reject) => {
                user.deleteWithCompletion((error?: NSError) => {
                  if (error) {
                    return reject(error); // TODO: What type of error should this be to satisfy the Web SDK?
                  }

                  resolve();
                });
              });
            }
          };
        }

        if (typeof (nextOrObserver) === 'function') {
          nextOrObserver(fbUser || null);
        } else {
          nextOrObserver.next(fbUser || null);
        }
      });
    } catch (e) {
      const err: any = new Error(e.message);
      err.code = e.code;
      error(err);
      return undefined;
    }
  }

  export function removeAuthStateListener(listener: NSObjectProtocol) {
    const auth = FIRAuth.auth();
    auth.removeAuthStateDidChangeListener(listener);
  }

  export function convertUserInfo(data: NSArray<FIRUserInfo>): import('firebase').UserInfo[] {
    const providers: import('firebase').UserInfo[] = [];
    for (let i = 0, l = data.count; i < l; i++) {
      const firUserInfo: any = data.objectAtIndex(i); // FIXME: valueForKey not available on type
      providers.push({
        displayName: firUserInfo.valueForKey('displayName'),
        email: firUserInfo.valueForKey('email'),
        phoneNumber: firUserInfo.valueForKey('phoneNumber'),
        photoURL: firUserInfo.valueForKey('photoURL') && firUserInfo.valueForKey('photoURL').absoluteString,
        providerId: firUserInfo.valueForKey('providerID'),
        uid: firUserInfo.valueForKey('uid'),
      });
    }

    return providers;
  }
}