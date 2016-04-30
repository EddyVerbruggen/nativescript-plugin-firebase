/// <reference path="firebase-common.d.ts"/>
declare module "nativescript-plugin-firebase" {

    /**
     * The options object passed into the init function.
     */
    export interface InitOptions {
      /**
       * The endpoint of your firebase instance.
       */
      url: string;
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

    export function init(options: InitOptions): Promise<any>;
    export function login(options: LoginOptions): Promise<LoginResult>;
    export function createUser(options: CreateUserOptions): Promise<CreateUserResult>;
    export function resetPassword(options: ResetPasswordOptions): Promise<any>;
    export function changePassword(options: ChangePasswordOptions): Promise<any>;
    export function push(path: string, value: any): Promise<PushResult>;
    export function setValue(path: string, value: any): Promise<any>;
    export function update(path: string, value: any): Promise<any>;
    export function remove(path: string): Promise<any>;
    export function query(onValueEvent: (data: FBData) => void, path: string, options: QueryOptions): Promise<any>;
    export function addChildEventListener(onChildEvent: (data: FBData) => void, path: string): Promise<any>;
    export function addValueEventListener(onValueEvent: (data: FBData) => void, path: string): Promise<any>;
}