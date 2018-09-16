import { firebase } from "./firebase-common";
import { getClass } from "tns-core-modules/utils/types";

export class Utils {
    public invokeOnRunLoop = (() => {
        const runloop = CFRunLoopGetMain();
        return func => {
            CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
            CFRunLoopWakeUp(runloop);
        };
    })();

    public toJsObject(objCObj) {
        if (objCObj === null || typeof objCObj !== "object") {
            return objCObj;
        }
        let node, key, i, l,
            oKeyArr = objCObj.allKeys;

        if (oKeyArr === undefined) {
            // array
            node = [];
            for (i = 0, l = objCObj.count; i < l; i++) {
                key = objCObj.objectAtIndex(i);
                node.push(this.toJsObject(key));
            }
        } else {
            // object
            node = {};
            for (i = 0, l = oKeyArr.count; i < l; i++) {
                key = oKeyArr.objectAtIndex(i);
                const val = objCObj.valueForKey(key);

                // Firestore can store nulls
                if (val === null) {
                    node[key] = null;
                    continue;
                }

                switch (getClass(val)) {
                    case 'NSArray':
                    case 'NSMutableArray':
                        node[key] = this.toJsObject(val);
                        break;
                    case 'NSDictionary':
                    case 'NSMutableDictionary':
                        node[key] = this.toJsObject(val);
                        break;
                    case 'String':
                        node[key] = String(val);
                        break;
                    case 'Boolean':
                        node[key] = val;
                        break;
                    case 'Number':
                    case 'NSDecimalNumber':
                        node[key] = Number(String(val));
                        break;
                    case 'Date':
                        node[key] = new Date(val);
                        break;
                    case 'FIRTimestamp':
                        node[key] = val.dateValue();
                        break;
                    case 'FIRDocumentReference':
                        const path = (<FIRDocumentReference>val).path;
                        const lastSlashIndex = path.lastIndexOf("/");
                        node[key] = firebase.firestore._getDocumentReference(val, path.substring(0, lastSlashIndex), path.substring(lastSlashIndex + 1));
                        break;
                    case 'FIRGeoPoint':
                        node[key] = firebase.firestore.GeoPoint(
                            (<FIRGeoPoint>val).latitude,
                            (<FIRGeoPoint>val).longitude
                        );
                        break;
                    default:
                        console.log("Please report this at https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues: iOS toJsObject is missing a converter for class '" + getClass(val) + "'. Casting to String as a fallback.");
                        node[key] = String(val);
                }
            }
        }
        return node;
    }
}

export const firebaseUtils = new Utils();