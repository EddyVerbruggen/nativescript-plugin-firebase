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
      var fDatabase = com.google.firebase.database.FirebaseDatabase;
      // console.log("fDatabase: " + fDatabase);
      if (arg.persist) {
        fDatabase.getInstance().setPersistenceEnabled(true);
      }
      // the URL is picked up from google-services.json, so you can use it like this:
      instance = fDatabase.getInstance().getReference();
      // it is however still possible to pass the URL programmatically (which we'll do for now):
      // instance = fDatabase.getInstance().getReferenceFromUrl(arg.url);

      resolve(instance);
    } catch (ex) {
      console.log("Error in firebase.init: " + ex);
      reject(ex);
    }
  });
};

firebase.logout = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      com.google.firebase.auth.FirebaseAuth.getInstance().signOut();
      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

firebase.authStateListener = null;

firebase.login = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      /*
      var authorizer = new com.google.firebase.database.DatabaseReference.AuthResultHandler({
        onAuthenticated: function (authData) {
          resolve({
            uid: authData.getUid(),
            provider: authData.getProvider(),
            expiresAtUnixEpochSeconds: authData.getExpires(),
            profileImageURL: authData.getProviderData().get("profileImageURL"),
            token: authData.getToken()
          });
        },
        onAuthenticationError: function (databaseError) {
          reject(databaseError.getMessage());
        }
      });
      */

      var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

      if (firebase.authStateListener !== null) {
        firebaseAuth.removeAuthStateListener(firebase.authStateListener);
      }

      firebase.authStateListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
        onAuthStateChanged: function (fbAuth) {
          console.log("--- auth state changed: " + fbAuth);
          var user = fbAuth.getCurrentUser();
          console.log("--- user: " + user);
          if (user !== null) {
            // signed in
            resolve({
              uid: user.getUid(),
              name: user.getDisplayName(),
              email: user.getEmail(),
              // TODO add these properties, see https://firebase.google.com/docs/auth/android/manage-users#get_a_users_profile
              // provider: authData.getProvider(),
              // expiresAtUnixEpochSeconds: authData.getExpires(),
              profileImageURL: user.getPhotoUrl()
              // token: user.getToken() // can be used to auth with a backend server
            });
          } else {
            // reject("Logging in the user failed");            
          }
        }
      });

      firebaseAuth.addAuthStateListener(firebase.authStateListener);

      if (arg.type === firebase.LoginType.ANONYMOUS) {
        var onFailureListener = new com.google.android.gms.tasks.OnFailureListener({
          onFailure: function (throwable) {
            reject("Anonymous login failed with message: " + throwable.getMessage());
          }
        });
        firebaseAuth.signInAnonymously().addOnFailureListener(onFailureListener);
      } else if (arg.type === firebase.LoginType.PASSWORD) {
        if (!arg.email || !arg.password) {
          reject("Auth type emailandpassword requires an email and password argument");
        } else {
          var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
            onComplete: function (task) {
              if (!task.isSuccessful()) {
                reject("Logging in the user failed");            
              } else {
                // the AuthStateListener.onAuthStateChanged callback will resolve the promise
              }
            }
          });
          firebaseAuth.signInWithEmailAndPassword(arg.email, arg.password).addOnCompleteListener(onCompleteListener);
        }
      } else {
        reject ("Unsupported auth type: " + arg.type);
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
      if (!arg.email) {
        reject("Resetting a password requires an email argument");
      } else {
        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            console.log("--- reset pwd: " + task);
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Sending password reset email failed");
            }
          }
        });

        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();
        firebaseAuth.sendPasswordResetEmail(arg.email).addOnCompleteListener(onCompleteListener);          
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
      if (!arg.email || !arg.oldPassword || !arg.newPassword) {
        reject("Changing a password requires an email and an oldPassword and a newPassword arguments");
      } else {
        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            console.log("--- changed pwd: " + task);
            if (task.isSuccessful()) {
              resolve();
            } else {
              // TODO extract error
              reject("Updating password failed");
            }
          }
        });

        var user = com.google.firebase.auth.FirebaseAuth.getInstance().getCurrentUser();
        
        if (user === null) {
          reject("Please log the user in first");
        } else {
          user.updatePassword(arg.newPassword).addOnCompleteListener(onCompleteListener);          
        }
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
      if (!arg.email || !arg.password) {
        reject("Creating a user requires an email and password argument");
      } else {
        var firebaseAuth = com.google.firebase.auth.FirebaseAuth.getInstance();

        var onCompleteListener = new com.google.android.gms.tasks.OnCompleteListener({
          onComplete: function (task) {
            if (!task.isSuccessful()) {
              reject("Creating a user failed");            
            } else {
              // the AuthStateListener.onAuthStateChanged callback will resolve the promise
            }
          }
        });

        if (firebase.authStateListener !== null) {
          firebaseAuth.removeAuthStateListener(firebase.authStateListener);
        }

        firebase.authStateListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
          onAuthStateChanged: function (fbAuth) {
            console.log("--- auth state changed: " + fbAuth);
            var user = fbAuth.getCurrentUser();
            if (user !== null) {
              // signed in
              resolve({
                key: user.getUid()
              });
            }
          }
        });

        firebaseAuth.addAuthStateListener(firebase.authStateListener);
        firebaseAuth.createUserWithEmailAndPassword(arg.email, arg.password).addOnCompleteListener(onCompleteListener);
      }
    } catch (ex) {
      console.log("Error in firebase.createUser: " + ex);
      reject(ex);
    }
  });
};

firebase._addObservers = function(to, updateCallback) {
  var listener = new com.google.firebase.database.ChildEventListener({
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
      var listener = new com.google.firebase.database.ValueEventListener({
        onDataChange: function (snapshot) {
          updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
        },
        onCancelled: function (databaseError) {
          updateCallback({
            error: databaseError.getMessage()
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
        var listener = new com.google.firebase.database.ValueEventListener({
          onDataChange: function (snapshot) {
            updateCallback(firebase.getCallbackData('ValueChanged', snapshot));
          },
          onCancelled: function (databaseError) {
            updateCallback({
              error: databaseError.getMessage()
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