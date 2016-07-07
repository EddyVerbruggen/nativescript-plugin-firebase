/// <reference path="firebase-common.d.ts"/>
declare module "nativescript-plugin-firebase" {

    /**
     * The options object passed into the init function.
     */
    export interface InitOptions {
      /**
       * Allow disk persistence. Default false.
       */
      persist?: boolean;
      /**
       * Get notified when the user is logged in.
       */
      onAuthStateChanged?: (data: AuthStateData) => void;
      /**
       * Attempt to sign out before initializing, useful in case previous
       * project token is cached which leads to following type of error:
       *   "[FirebaseDatabase] Authentication failed: invalid_token ..."
       */
      iOSEmulatorFlush?: boolean;
    }

    /**
     * The options object passed into the query function.
     */
    export interface QueryOptions {
      /**
       * How you'd like to sort the query result.
       */
      orderBy: {
        type: QueryOrderByType;
        /**
         * mandatory when type is QueryOrderByType.CHILD
         */
        value?: string;
      };

      /**
       * You can further restrict the returned results by specifying restrictions.
       */
      range?: {
        type: QueryRangeType;
        value: string;
      }

      /**
       * You can limit the number of returned rows if you want to.
       */
      limit?: {
        type: QueryLimitType;
        value: number;
      };

      /**
       * Set this to true if you don't want to listen for any future updates,
       * but just want to retrieve the current value.
       * You can also use this to check if certain data is in the database.
       * Default false.
       */
      singleEvent?: boolean;
    }

    /**
     * The options object passed into the login function.
     */
    export interface LoginOptions {
      type: LoginType;
      email?: string;
      password?: string;
      /**
       * The JSON Web Token (JWT) to use for authentication.
       * Use with LoginType.CUSTOM
       * See: https://firebase.google.com/docs/auth/server
       */
      token?: string;
      /**
       * A function that returns a promise with the  JSON Web Token (JWT) to use for authentication.
       * Use with LoginType.CUSTOM
       * See: https://firebase.google.com/docs/auth/server
       */
      tokenProviderFn?: () => Promise<String>;
    }

    /**
     * The returned object from the login function.
     */
    export interface LoginResult {
      uid: string;
      provider: LoginType;
      expiresAtUnixEpochSeconds: number;
      profileImageURL?: string;
      token: string;
    }

    /**
     * The returned object from the push function.
     */
    export interface PushResult {
      key: string;
    }

    /**
     * The returned object from the createUser function.
     */
    export interface CreateUserResult {
      key: string;
    }

    /**
     * The options object passed into the createUser function.
     */
    export interface CreateUserOptions {
      email: string;
      password: string;
    }

    /**
     * The options object passed into the resetPassword function.
     */
    export interface ResetPasswordOptions {
      email: string;
    }

    /**
     * The returned object in the callback handlers
     * of the addChildEventListener and addValueEventListener functions.
     */
    export interface FBData {
      type: string;
      key: string;
      value: any;
    }

    /**
     * The options object passed into the changePassword function.
     */
    export interface ChangePasswordOptions {
      email: string;
      oldPassword: string;
      newPassword: string
    }

    export interface AuthStateData {
      loggedIn?: boolean;
      user?: LoginResult;
    }

    export interface AuthStateChangeListener {
      onAuthStateChanged: (data: AuthStateData) => void;
      thisArg?: any;
    }

    export interface RemoteConfigProperty {
      key: string;
      default: any;
    }

    export interface GetRemoteConfigOptions {
      /**
       * Fetch new results from the server more often.
       * Default false.
       */
      developerMode?: boolean;
      /**
       * The number of seconds before retrieving fresh state from the server.
       * Default 12 hours.
       */
      cacheExpirationSeconds?: number;
      /**
       * The configuration properties to retrieve for your app. Specify as:
       *  properties: [{
       *    key: "holiday_promo_enabled",
       *    default: false
       *  }, ..]
       */
      keys: Array<string>;
      properties: Array<RemoteConfigProperty>
    }

    /**
     * The returned object from the getRemoteConfig function.
     */
    export interface GetRemoteConfigResult {
      /**
       * The date the data was last refreshed from the server.
       * Should honor the 'cacheExpirationSeconds' you passed in previously.
       */
      lastFetch: Date;
      /**
       * The result may be throttled when retrieved from the server.
       * Even when the cache has expired. And it's just FYI really.
       */
      throttled: boolean;
      /**
       * A JS Object with properties and values.
       * If you previously requested keys ["foo", "is_enabled"] then this will be like:
       *   properties: {
       *     foo: "bar",
       *     is_enabled: true
       *   }
       */
      properties: Object;
    }

    /**
     * The returned object in the callback handler of the addOnMessageReceivedCallback function.
     * 
     * Note that any custom data you send from your server will be available as
     * key/value properties on the Message object.
     */
    export interface Message {
      /**
       * Indicated whether or not the notification was received while the app was in the foreground.
       */
      foreground: boolean;
      /**
       * The main text shown in the notificiation.
       * Not available on Android when the notification was received in the background.
       */
      body?: string;
      /**
       * Optional title, shown above the body in the notification.
       * Not available on Android when the notification was received in the background.
       */
      title?: string;
      /**
       * iOS badge count, as sent from the server.
       */
      badge?: number;
    }

    export function init(options: InitOptions): Promise<any>;
    export function login(options: LoginOptions): Promise<LoginResult>;
    export function logout(): Promise<any>;
    export function getRemoteConfig(options: GetRemoteConfigOptions): Promise<GetRemoteConfigResult>;
    export function addOnMessageReceivedCallback(onMessageReceived: (data: Message) => void): Promise<any>;
    export function addOnPushTokenReceivedCallback(onPushTokenReceived: (data: string) => void): Promise<any>;
    export function createUser(options: CreateUserOptions): Promise<CreateUserResult>;
    export function deleteUser(): Promise<any>;
    export function resetPassword(options: ResetPasswordOptions): Promise<any>;
    export function changePassword(options: ChangePasswordOptions): Promise<any>;
    export function push(path: string, value: any): Promise<PushResult>;
    export function setValue(path: string, value: any): Promise<any>;
    export function update(path: string, value: any): Promise<any>;
    export function remove(path: string): Promise<any>;
    export function query(onValueEvent: (data: FBData) => void, path: string, options: QueryOptions): Promise<any>;
    export function addChildEventListener(onChildEvent: (data: FBData) => void, path: string): Promise<any>;
    export function addValueEventListener(onValueEvent: (data: FBData) => void, path: string): Promise<any>;
    export function addAuthStateListener(listener: AuthStateChangeListener): boolean;
    export function removeAuthStateListener(listener: AuthStateChangeListener): boolean;
    export function hasAuthStateListener(listener: AuthStateChangeListener): boolean;
}