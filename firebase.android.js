var Firebase = require("./firebase-common");

Firebase.show = function(arg) {
  return new Promise(function (resolve, reject) {
    try {
      resolve();
    } catch (ex) {
      console.log("Error in Firebase.show: " + ex);
      reject(ex);
    }
  });
};

module.exports = Firebase;