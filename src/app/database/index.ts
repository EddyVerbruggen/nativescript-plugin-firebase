import * as firebase from "../../firebase";
import { AddEventListenerResult, FBData } from "../../firebase";

export module database {
  export interface DataSnapshot {
    // child(path: string): DataSnapshot;
    // exists(): boolean;
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
          callback(result.error);
        } else {
          callback({
            key: result.key,
            val: () => {
              return result.value;
            }
          });
        }
      };

      firebase.addValueEventListener(onValueEvent, this.path).then(
          (result: AddEventListenerResult) => {
            if (!Query.registeredListeners.has(this.path)) {
              Query.registeredListeners.set(this.path, []);
            }
            Query.registeredListeners.get(this.path).push(result.listeners);
          },
          error => {
            console.log("firebase.database().on error: " + error);
          }
      );

      // remember the callbacks as wel may need them for 'query' events
      if (!Query.registeredCallbacks.has(this.path)) {
        Query.registeredCallbacks.set(this.path, []);
      }
      Query.registeredCallbacks.get(this.path).push(callback);

      return null;
    }

    public off(eventType? /* TODO use */: string, callback?: (a: DataSnapshot, b?: string | null) => any, context?: Object | null): any {
      console.log("firebase.database().off: " + eventType);
      console.log("firebase.database().off this.registeredListeners: " + Query.registeredListeners);
      console.log("firebase.database().off this.path: " + this.path);
      if (Query.registeredListeners.has(this.path)) {
        console.log("firebase.database().off !has");
        firebase.removeEventListeners(Query.registeredListeners.get(this.path), this.path).then(
            result => {
              Query.registeredListeners.delete(this.path);
              console.log("firebase.database().off success");
            },
            error => {
              console.log("firebase.database().off error: " + error);
            }
        );
      }
      Query.registeredCallbacks.delete(this.path);
      return null;
    }

    public once(eventType: string, successCallback?: (a: DataSnapshot, b?: string) => any, failureCallbackOrContext?: Object | null, context?: Object | null): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.getValue(this.path).then(result => {
          resolve({
            key: result.key,
            val: () => {
              return result.value;
            }
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
            val: () => {
              return result.value;
            }
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
