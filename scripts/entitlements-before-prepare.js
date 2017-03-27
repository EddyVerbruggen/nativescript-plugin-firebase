var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
  var platform = hookArgs.platform.toLowerCase(),
      appResourcesDirectoryPath = projectData.appResourcesDirectoryPath,
      entitlementsFile = path.join(appResourcesDirectoryPath, "iOS", projectData.projectName + ".entitlements"),
      platformResourcesDirectory = path.join(appResourcesDirectoryPath, 'iOS');

  return new Promise(function (resolve, reject) {
    if (platform === 'ios') {
      fs.exists(entitlementsFile, function (exists) {
        if (!exists) {
          // no need to make noise, this is a totally valid case
          resolve();
        } else {
          var target = path.join(platformResourcesDirectory, 'build.xcconfig');
          try {
            var buildData = fs.readFileSync(target).toString();
            if(!buildData.toString().match(/^\s*CODE_SIGN_ENTITLEMENTS/mg)){
              fs.appendFileSync(target, '\nCODE_SIGN_ENTITLEMENTS = ' + path.join(projectData.projectName, projectData.projectName + '.entitlements'));
            }
          } catch (error) {
            reject();
          }
        }
      });
    }

    resolve();
  });
};