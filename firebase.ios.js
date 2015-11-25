var firebase = require("./firebase-common");
var types = require("utils/types");

firebase.toJsObject = function(objCObj) {
  if (objCObj == null || typeof objCObj != "object") {
    return objCObj;
  }
  var node, key, i, l,
      oKeyArr = objCObj.allKeys;

  if (oKeyArr === undefined) {
    // array
    node = [];
    for (i = 0, l = objCObj.count; i < l; i++) {
      key = objCObj.objectAtIndex(i);
      node.push(firebase.toJsObject(key));
    }
  } else {
    // object
    node = {};
    for (i = 0, l = oKeyArr.count; i < l; i++) {
      key = oKeyArr.objectAtIndex(i);
      var val = objCObj.valueForKey(key);

      switch (types.getClass(val)) {
        case 'NSMutableDictionary':
          node[key] = firebase.toJsObject(val);
          break;
        case 'String':
          node[key] = String(val);
          break;
        case 'Boolean':
          node[key] = Boolean(String(val));
          break;
        case 'Number':
          node[key] = Number(String(val));
          break;
      }
    }
  }
  return node;
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var where = instance;
      if (path !== undefined) {
        where = instance.childByAppendingPath(path);
      }
      where.observeEventTypeWithBlock(FEventType.FEventTypeChildAdded, function (snapshot) {
        updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
      });
      where.observeEventTypeWithBlock(FEventType.FEventTypeChildRemoved, function (snapshot) {
        updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
      });
      where.observeEventTypeWithBlock(FEventType.FEventTypeChildChanged, function (snapshot) {
        updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
      });
      where.observeEventTypeWithBlock(FEventType.FEventTypeChildMoved, function (snapshot) {
        updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
      });
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.getCallbackData = function(type, snapshot) {
  return {
    type: type,
    key: snapshot.key,
    value: firebase.toJsObject(snapshot.value)
  }
};

firebase.init = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      instance = new Firebase(arg.url);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.addValueEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var where = instance;
      if (path !== undefined) {
        where = instance.childByAppendingPath(path);
      }
      where.observeEventTypeWithBlockWithCancelBlock(
          FEventType.FEventTypeValue,
          function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          function (firebaseError) {
            updateCallback({
              error: firebaseError,
              errorMessage: firebaseError.localizedDescription
            });
          });
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.push = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      instance.childByAppendingPath(path).childByAutoId().setValue(val);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.push: " + ex);
      reject(ex);
    }
  });
};

firebase.setValue = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      instance.childByAppendingPath(path).setValue(val);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.setValue: " + ex);
      reject(ex);
    }
  });
};

firebase.remove = function (path) {
  return new Promise(function (resolve, reject) {
    try {
      instance.childByAppendingPath(path).setValue(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

module.exports = firebase;