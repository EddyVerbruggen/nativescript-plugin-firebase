import * as firebase from "../../firebase";
import { AddEventListenerResult, FBData } from "../../firebase";
import { nextPushId } from "./util/NextPushId";

export module database {
  export interface DataSnapshot {
    // child(path: string): DataSnapshot;
    exists(): boolean;
    // exportVal(): any;
    // forEach(action: (a: DataSnapshot) => boolean): boolean;
    // getPriority(): string | number | null;
    // hasChild(path: string): boolean;
    // hasChildren(): boolean;
    key: string | null;
    // numChildren(): number;
    // ref: Reference;
    // toJSON(): Object | null;
    val(): any;
  }

  export class Query {
    private static registeredListeners: Map<string, Array<any>> = new Map();
    private static registeredCallbacks: Map<string, Array<(a: DataSnapshot | null, b?: string) => any>> = new Map();

    protected path: string;

    constructor(path: string) {
      this.path = path;
    }

    public on(eventType /* TODO use */: string, callback: (a: DataSnapshot | null, b?: string) => any, cancelCallbackOrContext?: Object | null, context?: Object | null): (a: DataSnapshot | null, b?: string) => any {
      const onValueEvent = result => {
        if (result.error) {
          callback(result);
        } else {
          callback({
            key: result.key,
            val: () => result.value,
            exists: () => !!result.value
          });
        }
      };

      firebase.addValueEventListener(onValueEvent, this.path).then(
          (result: AddEventListenerResult) => {
            if (!Query.registeredListeners.has(this.path)) {
              Query.registeredListeners.set(this.path, []);
            }
            Query.registeredListeners.set(this.path, Query.registeredListeners.get(this.path).concat(result.listeners));
          },
          error => {
            console.log("firebase.database().on error: " + error);
          }
      );

      // remember the callbacks as we may need them for 'query' events
      if (!Query.registeredCallbacks.has(this.path)) {
        Query.registeredCallbacks.set(this.path, []);
      }
      Query.registeredCallbacks.get(this.path).push(callback);

      return null;
    }

    public off(eventType? /* TODO use */: string, callback?: (a: DataSnapshot, b?: string | null) => any, context?: Object | null): any {
      if (Query.registeredListeners.has(this.path)) {
        firebase.removeEventListeners(Query.registeredListeners.get(this.path), this.path).then(
            result => Query.registeredListeners.delete(this.path),
            error => console.log("firebase.database().off error: " + error)
        );
      }
      Query.registeredCallbacks.delete(this.path);
      return null;
    }

    public once(eventType: string, successCallback?: (a: DataSnapshot, b?: string) => any, failureCallbackOrContext?: Object | null, context?: Object | null): Promise<DataSnapshot> {
      return new Promise((resolve, reject) => {
        firebase.getValue(this.path).then(result => {
          resolve({
            key: result.key,
            val: () => result.value,
            exists: () => !!result.value
          });
        });
      });
    }

    private getOnValueEventHandler(): (data: FBData) => void {
      return result => {
        const callbacks = Query.registeredCallbacks.get(this.path);
        callbacks && callbacks.map(callback => {
          callback({
            key: result.key,
            val: () => result.value,
            exists: () => !!result.value
          });
        });
      };
    }

    public orderByChild(child: string): Query {
      firebase.query(
          this.getOnValueEventHandler(),
          this.path,
          {
            orderBy: {
              type: firebase.QueryOrderByType.CHILD,
              value: child
            }
          }
      );
      return this;
    }

    public orderByKey(): Query {
      firebase.query(
          this.getOnValueEventHandler(),
          this.path,
          {
            orderBy: {
              type: firebase.QueryOrderByType.KEY
            }
          }
      );
      return this;
    }

    public orderByPriority(): Query {
      firebase.query(
          this.getOnValueEventHandler(),
          this.path,
          {
            orderBy: {
              type: firebase.QueryOrderByType.PRIORITY
            }
          }
      );
      return this;
    }

    public orderByValue(): Query {
      firebase.query(
          this.getOnValueEventHandler(),
          this.path,
          {
            orderBy: {
              type: firebase.QueryOrderByType.VALUE
            }
          }
      );
      return this;
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
  }

  export interface ThenableReference extends Reference /*, PromiseLike<any> */
  {
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
