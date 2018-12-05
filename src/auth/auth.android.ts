type JAuthStateListener = com.google.firebase.auth.FirebaseAuth.AuthStateListener;
type JFirebaseAuth = com.google.firebase.auth.FirebaseAuth;
type JUserInfo = com.google.firebase.auth.UserInfo;
type JFirebaseUser = com.google.firebase.auth.FirebaseUser;
type JFirebaseAuthInvalidUserException = com.google.firebase.auth.FirebaseAuthInvalidUserException;
type JFirebaseAuthRecentLoginRequiredException = com.google.firebase.auth.FirebaseAuthRecentLoginRequiredException;

export namespace auth {
  export function addAuthStateListener(
    nextOrObserver:
      | import('firebase').Observer<any>
      | ((a: import('firebase').User | null) => any),
    error?: ((a: import('firebase').auth.Error) => any),
  ) {
    try {
      const auth: JFirebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
      const listener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
        onAuthStateChanged: fbAuth => {
          const user: JFirebaseUser | null = fbAuth.getCurrentUser();
          let fbUser: import('firebase').User | undefined;

          if (user) {
            const meta = (<any>user).getMetadata(); // FIXME: Missing type
            // TODO: We probably can't satisfy all of a (Web SDK) user object, so figure out what methods are possible.
            fbUser = <import('firebase').User>{
              displayName: user.getDisplayName(),
              email: user.getEmail(),
              emailVerified: user.isEmailVerified(),
              isAnonymous: user.isAnonymous(),
              phoneNumber: user.getPhoneNumber(),
              photoURL: user.getPhotoUrl().toString(),
              providerId: user.getProviderId(),
              refreshToken: '',
              uid: user.getUid(),
              metadata: {
                creationTime: (new Date(meta.getCreationTimestamp())).toUTCString(),
                lastSignInTime: (new Date(meta.getLastSignInTimestamp())).toUTCString(),
              },
              providerData: convertUserInfo(user.getProviderData()),
              delete: () => {
                return new Promise((resolve, reject) => {
                  try {
                    user.delete();
                    resolve();
                  } catch (e) {
                    reject(e); // TODO: What type of error should this be to satisfy the Web SDK?
                  }
                });
              }
            };
          }

          if (typeof (nextOrObserver) === 'function') {
            nextOrObserver(fbUser || null);
          } else {
            nextOrObserver.next(fbUser || null);
          }
        }
      });

      auth.addAuthStateListener(listener);

      return listener;
    } catch (e) {
      const err: any = new Error(e.message);
      err.code = e.code;
      error(err);
      return undefined;
    }
  }

  export function removeAuthStateListener(listener: JAuthStateListener) {
    const auth: JFirebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
    auth.removeAuthStateListener(listener);
  }

  export function convertUserInfo(data: java.util.List<JUserInfo>): import('firebase').UserInfo[] {
    const providers: import('firebase').UserInfo[] = [];
    for (let i = 0; i < data.size(); i++) {
      const user: JUserInfo = data.get(i);
      providers.push({
        displayName: user.getDisplayName(),
        email: user.getEmail(),
        phoneNumber: user.getPhoneNumber(),
        photoURL: user.getPhotoUrl().toString(),
        providerId: user.getProviderId(),
        uid: user.getUid(),
      });
    }

    return providers;
  }
}