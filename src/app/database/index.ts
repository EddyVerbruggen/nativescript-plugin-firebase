import * as firebase from "../../firebase";
import { nextPushId } from "./util/NextPushId";

export namespace database {
  export type DataSnapshot = firebase.DataSnapshot;

  export class Query implements firebase.Query {
    protected path: string;
    private queryObject: firebase.Query;
    constructor(path: string) {
      this.path = path;
      this.queryObject = firebase.webQuery(this.path);
    }

    /**
     * Listens for data changes at a particular location
     * @param eventType One of the following strings: "value", "child_added", "child_changed", "child_removed", or "child_moved."
     * @param callback A callback that fires when the specified event occurs. The callback will be passed a DataSnapshot.
     * @param cancelCallbackOrContext A callback that fires when an error occurs. The callback will be passed an error object.
     * @returns The provided callback function is returned unmodified.
     */
    public on(eventType: string, callback: (a: DataSnapshot | null, b?: string) => any,
      cancelCallbackOrContext?: (a: Error | null) => any, context?: Object | null): (a: DataSnapshot | null, b?: string) => Function {

      this.queryObject.on(eventType, callback, cancelCallbackOrContext);

      return callback; // According to firebase doc we just return the callback given
    }

    /**
     * Remove all callbacks for given eventType. If not eventType is given this
     * detaches all callbacks previously attached with on().
     */
    public off(eventType?: string, callback?: (a: DataSnapshot, b?: string | null) => any, context?: Object | null): void {
      // TODO: use callback rather than remove ALL listeners for a given eventType
      this.queryObject.off(eventType);
    }

    /**
     * Listens for exactly one event of the specified event type, and then stops listening.
     * @param eventType One of the following strings: "value", "child_added", "child_changed", "child_removed", or "child_moved."
     */
    public once(eventType: string, successCallback?: (a: DataSnapshot, b?: string) => any,
      failureCallbackOrContext?: Object | null, context?: Object | null): Promise<DataSnapshot> {
      return this.queryObject.once(eventType);
    }

    /**
     * Generates a new Query object ordered by the specified child key. Queries can only order
     * by one key at a time. Calling orderByChild() multiple times on the same query is an error.
     * @param child child key to order the results by
     */
    public orderByChild(child: string): firebase.Query {
      return this.queryObject.orderByChild(child);
    }
    /**
     * Generates a new Query object ordered by key.
     * Sorts the results of a query by their (ascending) key values.
     */
    public orderByKey(): firebase.Query {
      return this.queryObject.orderByKey();
    }

    /**
     * Generates a new Query object ordered by priority
     */
    public orderByPriority(): firebase.Query {
      return this.queryObject.orderByPriority();
    }

    /**
     * Generates a new Query object ordered by value.If the children of a query are all scalar values
     * (string, number, or boolean), you can order the results by their (ascending) values.
     */
    public orderByValue(): firebase.Query {
      return this.queryObject.orderByValue();
    }

    /**
     * Creates a Query with the specified starting point. The value to start at should match the type
     * passed to orderBy(). If using orderByKey(), the value must be a string
     */
    public startAt(value: number | string | boolean): firebase.Query {
      return this.queryObject.startAt(value);
    }

    /**
     * Creates a Query with the specified ending point. The value to start at should match the type
     * passed to orderBy(). If using orderByKey(), the value must be a string.
     */
    public endAt(value: any, key?: string): firebase.Query {
      return this.queryObject.endAt(value, key);
    }

    /**
     * Generate a new Query limited to the first specific number of children.
     */
    public limitToFirst(value: number): firebase.Query {
      return this.queryObject.limitToFirst(value);
    }

    /**
     * Generate a new Query limited to the last specific number of children.
     */
    public limitToLast(value: number): firebase.Query {
      return this.queryObject.limitToLast(value);
    }

    /**
     * Creates a Query that includes children that match the specified value.
     */
    public equalTo(value: any, key?: string): firebase.Query {
      return this.queryObject.equalTo(value, key);
    }
  }

  export class Reference extends Query {
    public then: (a?: any) => Promise<any>;

    public catch: (a?: Error) => Promise<any>;

    getKey(): string | null {
      if (!this.path) {
        return null;
      } else {
        return this.path.lastIndexOf("/") === -1 ? this.path : this.path.substring(this.path.lastIndexOf("/") + 1);
      }
    }

    get key(): string | null {
      return this.getKey();
    }

    public set(value: any, onComplete?: (a: Error | null) => any): Promise<any> {
      // return firebase.setValue(this.path, value);
      return new Promise((resolve, reject) => {
        firebase.setValue(this.path, value).then(() => {
          onComplete && onComplete(null);
          resolve(null);
        }).catch(err => {
          onComplete && onComplete(err);
          // TODO we should extends the default Error object for better compatibility
          reject(err);
        });
      });
    }

    child(path: string): database.Reference {
      return new Reference(this.path ? `${this.path}/${path}` : path);
    }

    /*
    private getServerTime(): number {
      const offsetNode = this.infoData_.getNode(
          new Path('.info/serverTimeOffset')
      );
      const offset = (offsetNode.val() as number) || 0;
      return new Date().getTime() + offset;
    }
    */

    push(value?: any, onComplete?: (a: Error | null) => any): database.ThenableReference {
      // note that it would be better to use server time here, but no biggy
      // const now = this.getServerTime();
      const now = new Date().getTime();

      const name = nextPushId(now);

      // push() returns a ThennableReference whose promise is fulfilled with a regular Reference.
      // We use child() to create handles to two different references. The first is turned into a
      // ThennableReference below by adding then() and catch() methods and is used as the
      // return value of push(). The second remains a regular Reference and is used as the fulfilled
      // value of the first ThennableReference.
      const thennablePushRef = this.child(name);
      const pushRef = this.child(name);

      let promise;
      if (value != null) {
        promise = thennablePushRef.set(value, onComplete).then(() => pushRef);
      } else {
        promise = Promise.resolve(pushRef);
      }

      thennablePushRef.then = promise.then.bind(promise);
      thennablePushRef.catch = promise.then.bind(promise, undefined);

      if (typeof onComplete === 'function') {
        promise.catch(() => {
        });
      }

      return thennablePushRef;
    }

    public remove(onComplete?: (a: Error | null) => any): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.remove(this.path).then(() => {
          onComplete && onComplete(null);
          resolve(null);
        }).catch(err => {
          onComplete && onComplete(err);
          reject(err);
        });
      });
    }

    public onDisconnect(): firebase.OnDisconnect {
      return firebase.onDisconnect(this.path);
    }

    public transaction(
      transactionUpdate: (a: any) => any,
      onComplete?: (
        a: Error | null,
        b: boolean,
        c: firebase.DataSnapshot | null
      ) => any,
      applyLocally?: boolean): Promise<any> {
      return firebase.transaction(this.path, transactionUpdate, onComplete);
    }
  }

  export interface ThenableReference extends Reference /*, PromiseLike<any> */ {
  }

  export class Database {
    // private authStateChangedHandler;

    // public onAuthStateChanged(handler: (user: User) => void): void {
    //   this.authStateChangedHandler = handler;
    //   console.log(">> added onAuthStateChanged handler");
    // };

    public ref(path: string): Reference {
      return new Reference(path);
    }
  }
}
