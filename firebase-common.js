var firebase = {};

firebase.LoginType = {
  ANONYMOUS: "anonymous",
  PASSWORD: "password"
};

firebase.QueryOrderByType = {
  KEY: "key",
  VALUE: "value",
  CHILD: "child",
  PRIORITY: "priority"    
};

firebase.QueryLimitType = {
  FIRST: "first",
  LAST: "last"
};
  
firebase.QueryRangeType = {
  START_AT: "startAt",
  END_AT: "endAt",
  EQUAL_TO: "equalTo"
};

firebase.instance = null;

// this implementation is actually the same for both platforms, woohoo :)
firebase.logout = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      instance.unauth();
      resolve();
    } catch (ex) {
      console.log("Error in firebase.logout: " + ex);
      reject(ex);
    }
  });
};

module.exports = firebase;