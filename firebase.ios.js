var firebase = require("./firebase-common");
var types = require("utils/types");

firebase.toJsObject = function(objCObj) {
  if (objCObj === null || typeof objCObj != "object") {
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
        case 'NSMutableArray':
          node[key] = firebase.toJsObject(val);
          break;
        case 'NSMutableDictionary':
          node[key] = firebase.toJsObject(val);
          break;
        case 'String':
          node[key] = String(val);
          break;
        case 'Boolean':
          node[key] = val;
          break;
        case 'Number':
          node[key] = Number(String(val));
          break;
      }
    }
  }
  return node;
};

firebase.getCallbackData = function(type, snapshot) {
  return {
    type: type,
    key: snapshot.key,
    value: firebase.toJsObject(snapshot.value)
  };
};

firebase.init = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      if (arg.persist) {
                Firebase.defaultConfig().persistenceEnabled = true
            }           
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
      var onCompletion = function(error, authData) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            uid: authData.uid,
            provider: authData.provider,
            expiresAtUnixEpochSeconds: authData.expires,
            profileImageURL: authData.providerData.objectForKey("profileImageURL"),
            token: authData.token
          });
        }
      };

      var type = arg.type;
      if (type === firebase.LoginType.ANONYMOUS) {
        instance.authAnonymouslyWithCompletionBlock(onCompletion);
      } else if (type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          instance.authUserPasswordWithCompletionBlock(arg.email, arg.password, onCompletion);          
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
      var onCompletion = function(error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        instance.resetPasswordForUserWithCompletionBlock(arg.email, onCompletion);
      }
    } catch (ex) {
      console.log("Error in firebase.resetPassword: " + ex);
      reject(ex);
    }
  });
};

firebase.changePassword = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var onCompletion = function(error) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve();
        }
      };

      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        instance.changePasswordForUserFromOldToNewWithCompletionBlock(arg.email, arg.oldPassword, arg.newPassword, onCompletion);
      }
    } catch (ex) {
      console.log("Error in firebase.changePassword: " + ex);
      reject(ex);
    }
  });
};

firebase.createUser = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      var onCompletion = function(error, authData) {
        if (error) {
          reject(error.localizedDescription);
        } else {
          resolve({
            key: firebase.toJsObject(authData).uid
          });
        }
      };

      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        instance.createUserPasswordWithValueCompletionBlock(arg.email, arg.password, onCompletion);
      }
    } catch (ex) {
      console.log("Error in firebase.createUser: " + ex);
      reject(ex);
    }
  });
};
