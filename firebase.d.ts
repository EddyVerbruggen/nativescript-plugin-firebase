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
     * The options object passed into the createUser function.
     */
    export interface CreateUserOptions {
      email: string;
      password: string;
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

    export function init(options : InitOptions): Promise<any>;
    export function login(options : LoginOptions): Promise<LoginResult>;
    export function createUser(options : CreateUserOptions): string;
    export function push(path: string, value: any): void;
    export function setValue(path: string, value: any): void;
    export function remove(path: string): void;
    export function query(onValueEvent: (data: FBData) => void, path: string, options: QueryOptions): void;
    export function addChildEventListener(onChildEvent: (data: FBData) => void, path: string): void;
    export function addValueEventListener(onValueEvent: (data: FBData) => void, path: string): void;
}