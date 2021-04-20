import { firebase } from "../../firebase";

export namespace auth {
  export class Auth {
    private authStateChangedHandler;
    private authStateOnErrorHandler;
    public currentUser: firebase.User;
    public languageCode: string | null;

    private loginHelper(options: firebase.LoginOptions) {
      return new Promise((resolve, reject) => {
        firebase.login(options)
        .then((user: firebase.User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve({
            additionalUserInfo: user.additionalUserInfo,
            credential: null,
            operationType: "SignIn",
            user: user,
          });
        }).catch(err => {
          let code = 'auth/exception';
          let message = err.toString();
          // Identify code for android. Note that the IOS implementation doesn't return a code.
          if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidCredentialsException')) {
            code = 'auth/wrong-password';
          } else if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidUserException')) {
            code = 'auth/user-not-found';
            // Note that Android returns one exception for both user not found and invalid email whereas
            // the web api returns seperate codes. Therefore the conditional below can never be satisfied
            // for android.
            // } else if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidUserException')) {
            //   code = 'auth/invalid-email'
          }
          this.authStateOnErrorHandler && this.authStateOnErrorHandler(err.toString());
          reject({
            code: code,
            message: message
          });
        });
      });
    }

    // Completed will never be called, but it is here to closely follow the web api interface.
    // When called, the callback handler will be passed in the currentUser or undefined if not signed in
    public onAuthStateChanged(handler: (user: firebase.User) => void,  error?: (err) => any, completed?: firebase.Unsubscribe): firebase.Unsubscribe {
      this.authStateChangedHandler = handler;
      if (error) this.authStateOnErrorHandler = error;
      console.log(">> added onAuthStateChanged handler");
      handler(this.currentUser);
      return () => {
        this.authStateChangedHandler = undefined;
        this.authStateOnErrorHandler = undefined;
      };
    }

    public signOut(): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.logout()
            .then(() => {
              this.currentUser = undefined;
              this.authStateChangedHandler && this.authStateChangedHandler();
              resolve();
            })
            .catch(err => {
              this.authStateOnErrorHandler && this.authStateOnErrorHandler(err);
              reject({
                // code: "",
                message: err
              });
            });
      });
    }

    public unlink(providerId: string): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.unlink(providerId)
            .then(user => {
              this.currentUser = user;
              resolve(user);
            })
            .catch(err => {
              reject({
                // code: "",
                message: err
              });
            });
      });
    }

    public signInWithEmailAndPassword(email: string, password: string): Promise<any> {
      const emailOption: firebase.LoginOptions = {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: email,
          password: password
        }
      };
      return this.loginHelper(emailOption);
    }

    public signInWithCustomToken(token: string): Promise<any> {
      const customTokenOption: firebase.LoginOptions = {
        type: firebase.LoginType.CUSTOM,
        customOptions: {
          token: token
        }
      };
      return this.loginHelper(customTokenOption);
    }

    public signInAnonymously(): Promise<any> {
      const anonymousOption: firebase.LoginOptions = {
        type: firebase.LoginType.ANONYMOUS
      };
      return this.loginHelper(anonymousOption);
    }

    public sendSignInLinkToEmail(email: string, actionCodeSettings: firebase.FirebaseEmailLinkActionCodeSettings): Promise<any> {
      const sendSignInLinklOption: firebase.LoginOptions = {
        type: firebase.LoginType.EMAIL_LINK,
          emailLinkOptions: {
            email: email,
            url: actionCodeSettings.url,
          }
      };
      return this.loginHelper(sendSignInLinklOption);
    }

    public signInWithEmailLink(email: string, emailLink: string): Promise<any> {
      const signInWithEmailOption: firebase.LoginOptions = {
        type: firebase.LoginType.EMAIL_LINK,
        emailLinkOptions: {
          email: email,
          url: emailLink
        }
      };
      return this.loginHelper(signInWithEmailOption);
    }

    public createUserWithEmailAndPassword(email: string, password: string): Promise<firebase.User> {
      return new Promise((resolve, reject) => {
        firebase.createUser({
          email: email,
          password: password
        }).then((user: firebase.User) => {
          this.currentUser = user;
          resolve(user);
        }).catch(err => reject(err));
      });
    }

    public updateEmail(newEmail: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        firebase.updateEmail(newEmail)
            .then(() => resolve())
            .catch(err => reject(err));
      });
    }

    public updatePassword(newPassword: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        firebase.updatePassword(newPassword)
            .then(() => resolve())
            .catch(err => reject(err));
      });
    }

    public sendPasswordResetEmail(email: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        firebase.sendPasswordResetEmail(email)
            .then(() => resolve())
            .catch(err => reject(err));
      });
    }

    public fetchSignInMethodsForEmail(email: string): Promise<any> {
      return firebase.fetchSignInMethodsForEmail(email);
    }
  }
}
