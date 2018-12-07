import * as firebase from "../../firebase";
import { FirebaseEmailLinkActionCodeSettings, LoginType, User } from "../../firebase";

export module auth {
  export class Auth {
    private authStateChangedHandler;
    public currentUser: User;

    public onAuthStateChanged(handler: (user: User) => void): void {
      this.authStateChangedHandler = handler;
      console.log(">> added onAuthStateChanged handler");
    };

    public signOut(): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.logout()
            .then(() => {
              this.currentUser = undefined;
              this.authStateChangedHandler && this.authStateChangedHandler();
              resolve();
            })
            .catch(err => {
              let code = 'auth/exception';
              let message = err.toString();
              if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidCredentialsException')) {
                code = 'auth/wrong-password';
              } else if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidUserException')) {
                code = 'auth/user-not-found';
              } else if (message.includes('com.google.firebase.auth.FirebaseAuthInvalidUserException')) {
                code = 'auth/invalid-email'
              }
               // Note that auth/user-disabled cannot be identified here because FirebaseAuthInvalidUserException is thrown for both
               // auth/user-disabled and auth/user-not-found
              reject({
                code: code,
                message: message,
              });
            });
      });
    }

    public signInWithEmailAndPassword(email: string, password: string): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.login({
          type: LoginType.PASSWORD,
          passwordOptions: {
            email: email,
            password: password
          }
        }).then((user: User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve({
            additionalUserInfo: user.additionalUserInfo,
            credential: null,
            operationType: "SignIn",
            user: user,
          });
        }, (err => {
          reject({
            // code: "",
            message: err
          });
        }));
      });
    }

    public sendSignInLinkToEmail(email: string, actionCodeSettings: FirebaseEmailLinkActionCodeSettings): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.login({
          type: LoginType.EMAIL_LINK,
          emailLinkOptions: {
            email: email,
            url: actionCodeSettings.url,
          }
        }).then((user: User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve();
        }, (err => {
          reject({
            // code: "",
            message: err
          });
        }));
      });
    }

    public createUserWithEmailAndPassword(email: string, password: string): Promise<User> {
      return new Promise((resolve, reject) => {
        firebase.createUser({
          email: email,
          password: password
        }).then((user: User) => {
          this.currentUser = user;
          resolve(user);
        }).catch(err => reject(err));
      })
    }

    public signInAnonymously(): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.login({
          type: LoginType.ANONYMOUS
        }).then((user: User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve();
        }, (err => {
          reject({
            // code: "",
            message: err
          });
        }));
      });
    }

    public fetchProvidersForEmail(email: string): Promise<any> {
      return firebase.fetchProvidersForEmail(email);
    }

    public fetchSignInMethodsForEmail(email: string): Promise<any> {
      return firebase.fetchSignInMethodsForEmail(email);
    }
  }
}
