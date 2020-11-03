/**
 * iOS Utils file
 */

import { firebase } from "./firebase-common";
import { Utils as coreUtils } from "@nativescript/core";

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

    if (oKeyArr === undefined && objCObj.count !== undefined) {
      // array
      node = [];
      for (i = 0, l = objCObj.count; i < l; i++) {
        key = objCObj.objectAtIndex(i);
        node.push(this.toJsObject(key));
      }

    } else if (oKeyArr !== undefined) {
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
        node[key] = this.getValueForClass(val);
      }

    } else {
      node = this.getValueForClass(objCObj);
    }

    return node;
  }

  private getValueForClass(val) {
    switch (coreUtils.getClass(val)) {
      case 'NSArray':
      case 'NSMutableArray':
        return this.toJsObject(val);
      case 'NSDictionary':
      case 'NSMutableDictionary':
        return this.toJsObject(val);
      case 'String':
        return String(val);
      case 'Boolean':
        return val;
      case 'Number':
      case 'NSDecimalNumber':
        return Number(String(val));
      case 'Date':
        return new Date(val);
      case 'FIRTimestamp':
        return val.dateValue();
      case 'FIRDocumentReference':
        const path = (<FIRDocumentReference>val).path;
        const lastSlashIndex = path.lastIndexOf("/");
        return firebase.firestore._getDocumentReference(val, path.substring(0, lastSlashIndex), path.substring(lastSlashIndex + 1));
      case 'FIRGeoPoint':
        return firebase.firestore.GeoPoint(
            (<FIRGeoPoint>val).latitude,
            (<FIRGeoPoint>val).longitude
        );
      default:
        console.log("Please report this at https://github.com/EddyVerbruggen/nativescript-plugin-firebase/issues: iOS toJsObject is missing a converter for class '" + coreUtils.getClass(val) + "'. Casting to String as a fallback.");
        return String(val);
    }
  }
}

export const firebaseUtils = new Utils();