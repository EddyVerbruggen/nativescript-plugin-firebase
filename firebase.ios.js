var Firebase = require("./firebase-common");

Firebase.show = function (arg) {
  return new Promise(function (resolve, reject) {
    try {
      resolve("Done");
    } catch (ex) {
      console.log("Error in Firebase.show: " + ex);
      reject(ex);
    }
  });
};

module.exports = Firebase;