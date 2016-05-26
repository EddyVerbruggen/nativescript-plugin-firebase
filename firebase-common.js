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

module.exports = firebase;