var appModule = require("application");
var firebase = require("./firebase-common");

firebase.toHashMap = function(obj) {
  var node = new java.util.HashMap();
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (obj[property] !== null) {
        switch (typeof obj[property]) {
          case 'object':
            node.put(property, firebase.toHashMap(obj[property], node));
            break;
          case 'boolean':
            node.put(property, java.lang.Boolean.valueOf(String(obj[property])));
            break;
          case 'number':
            if (Number(obj[property]) === obj[property] && obj[property] % 1 === 0)
              node.put(property, java.lang.Long.valueOf(String(obj[property])));
            else
              node.put(property, java.lang.Double.valueOf(String(obj[property])));
            break;
          case 'string':
            node.put(property, String(obj[property]));
            break;
        }
      }
    }
  }
  return node;
};

firebase.toJsObject = function(javaObj) {
  if (javaObj === null || typeof javaObj != "object") {
    return javaObj;
  }

  var node;
  switch (javaObj.getClass().getName()) {
    case 'java.lang.Boolean':
      return Boolean(String(javaObj));
    case 'java.lang.Long':
    case 'java.lang.Double':
      return Number(String(javaObj));
    case 'java.util.ArrayList':
      node = [];
      for (var i = 0; i < javaObj.size(); i++) {
        node[i] = firebase.toJsObject(javaObj.get(i));
      }
      break;
    default:
      node = {};
      var iterator = javaObj.entrySet().iterator();
      while (iterator.hasNext()) {
        var item = iterator.next();
        switch (item.getClass().getName()) {
          case 'java.util.HashMap$HashMapEntry':
            node[item.getKey()] = firebase.toJsObject(item.getValue());
            break;
          case 'java.lang.String':
            node[item.getKey()] = String(item.getValue());
            break;
          case 'java.lang.Boolean':
            node[item.getKey()] = Boolean(String(item.getValue()));
            break;
          case 'java.lang.Long':
          case 'java.lang.Double':
            node[item.getKey()] = Number(String(item.getValue()));
            break;
          default:
            node[item.getKey()] = item.getValue();
        }
      }
  }
  return node;
};

firebase.getCallbackData = function(type, snapshot) {
  return {
    type: type,
    key: snapshot.getKey(),
    value: firebase.toJsObject(snapshot.getValue())
  };
};

firebase.init = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var Firebase = com.firebase.client.Firebase;
      Firebase.setAndroidContext(appModule.android.context);
      instance = new Firebase(arg.url);
      resolve(instance);
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var authorizer = new com.firebase.client.Firebase.AuthResultHandler({
        onAuthenticated: function (authData) {
          resolve({
            uid: authData.getUid(),
            provider: authData.getProvider(),
            expiresAtUnixEpochSeconds: authData.getExpires(),
            profileImageURL: authData.getProviderData().get("profileImageURL"),
            token: authData.getToken()
          });
        },
        onAuthenticationError: function (firebaseError) {
          reject(firebaseError.getMessage());
        }
      });

      var type = arg.type;

      if (type === firebase.LoginType.ANONYMOUS) {
        instance.authAnonymously(authorizer);
      } else if (type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          instance.authWithPassword(arg.email, arg.password, authorizer);          
        }
      } else {
        reject ("Unsupported auth type: " + type);
      }
    } catch (ex) {
      console.log("Error in firebase.login: " + ex);
      reject(ex);
    }
  });
};

firebase.resetPassword = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var resultHandler = new com.firebase.client.Firebase.ResultHandler({
        onSuccess: function () {
          resolve();
        },
        onError: function (firebaseError) {
          reject(firebaseError.getMessage());
        }
      });

      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        instance.resetPassword(arg.email, resultHandler);
      }
    } catch (ex) {
      console.log("Error in firebase.resetPassword: " + ex);
      reject(ex);
    }
  });
};

firebase.createUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var valueResultHandler = new com.firebase.client.Firebase.ValueResultHandler({
        onSuccess: function (authData) {
          console.log("--- created: " + authData);
          resolve({
            key: firebase.toJsObject(authData).uid
          });
        },
        onError: function (firebaseError) {
          reject(firebaseError.getMessage());
        }
      });

      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        instance.createUser(arg.email, arg.password, valueResultHandler);
      }
    } catch (ex) {
      console.log("Error in firebase.createUser: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = function(to, updateCallback) {
  var listener = new com.firebase.client.ChildEventListener({
    onChildAdded: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildAdded', snapshot));
    },
    onChildRemoved: function (snapshot) {
      updateCallback(firebase.getCallbackData('ChildRemoved', snapshot));
    },
    onChildChanged: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildChanged', snapshot));
    },
    onChildMoved: function (snapshot, previousChildKey) {
      updateCallback(firebase.getCallbackData('ChildMoved', snapshot));
    }
  });
  to.addChildEventListener(listener);
};

firebase.addChildEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      firebase._addObservers(instance.child(path), updateCallback);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addChildEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.addValueEventListener = function (updateCallback, path) {
  return new Promise(function (resolve, reject) {
    try {
      var listener = new com.firebase.client.ValueEventListener({
        onDataChange: function (snapshot) {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
        },
        onCancelled: function (firebaseError) {
          updateCallback({
            error: firebaseError.getMessage()
          });
        }
      });
      instance.child(path).addValueEventListener(listener);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.addValueEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.removeEventListener = function (listener, path) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("Removing at path " + path + ": " + listener);
      instance.child(path).removeEventListener(listener);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.removeEventListener: " + ex);
      reject(ex);
    }
  });
};

firebase.push = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      var pushInstance = instance.child(path).push();
      pushInstance.setValue(firebase.toHashMap(val));
      resolve({
        key: pushInstance.getKey()
      });
    } catch (ex) {
      console.log("Error in firebase.push: " + ex);
      reject(ex);
    }
  });
};

firebase.setValue = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      instance.child(path).setValue(firebase.toHashMap(val));
      resolve();
    } catch (ex) {
      console.log("Error in firebase.setValue: " + ex);
      reject(ex);
    }
  });
};

firebase.update = function (path, val) {
  return new Promise(function (resolve, reject) {
    try {
      instance.child(path).updateChildren(firebase.toHashMap(val));
      resolve();
    } catch (ex) {
      console.log("Error in firebase.update: " + ex);
      reject(ex);
    }
  });
};

firebase.query = function (updateCallback, path, options) {
  return new Promise(function (resolve, reject) {
    try {
      var query;
      
      // orderBy
      if (options.orderBy.type === firebase.QueryOrderByType.KEY) {
        query = instance.child(path).orderByKey();
      } else if (options.orderBy.type === firebase.QueryOrderByType.VALUE) {
        query = instance.child(path).orderByValue();
      } else if (options.orderBy.type === firebase.QueryOrderByType.PRIORITY) {
        query = instance.child(path).orderByPriority();
      } else if (options.orderBy.type === firebase.QueryOrderByType.CHILD) {
        if (!options.orderBy.value) {
          reject("When orderBy.type is 'child' you must set orderBy.value as well.");
          return;
        }
        query = instance.child(path).orderByChild(options.orderBy.value);
      } else {
        reject("Invalid orderBy.type, use constants like firebase.QueryOrderByType.VALUE");
        return;
      }

      // range
      if (options.range && options.range.type) {
        if (!options.range.value) {
          reject("Please set range.value");
          return;
        }
        if (options.range.type === firebase.QueryRangeType.START_AT) {
          query = query.startAt(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.END_AT) {
          query = query.endAt(options.range.value);
        } else if (options.range.type === firebase.QueryRangeType.EQUAL_TO) {
          query = query.equalTo(options.range.value);
        } else {
          reject("Invalid range.type, use constants like firebase.QueryRangeType.START_AT");
          return;
        }
      }

      // limit
      if (options.limit && options.limit.type) {
        if (!options.limit.value) {
          reject("Please set limit.value");
          return;
        }
        if (options.limit.type === firebase.QueryLimitType.FIRST) {
          query = query.limitToFirst(options.limit.value);
        } else if (options.limit.type === firebase.QueryLimitType.LAST) {
          query = query.limitToLast(options.limit.value);
        } else {
          reject("Invalid limit.type, use constants like firebase.QueryLimitType.FIRST");
          return;
        }
      }
      
      if (options.singleEvent) {
        var listener = new com.firebase.client.ValueEventListener({
          onDataChange: function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          onCancelled: function (firebaseError) {
            updateCallback({
              error: firebaseError.getMessage()
            });
          }
        });
        query.addListenerForSingleValueEvent(listener);
      } else {
        firebase._addObservers(query, updateCallback);
      }
      resolve();
    } catch (ex) {
      console.log("Error in firebase.query: " + ex);
      reject(ex);
    }
  });
};

firebase.remove = function (path) {
  return new Promise(function (resolve, reject) {
    try {
      instance.child(path).setValue(null);
      resolve();
    } catch (ex) {
      console.log("Error in firebase.remove: " + ex);
      reject(ex);
    }
  });
};

module.exports = firebase;