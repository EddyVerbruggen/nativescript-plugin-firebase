var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
  var platform = hookArgs.platform.toLowerCase(),
      appResourcesDirectoryPath = projectData.appResourcesDirectoryPath,
      platformResourcesDirectory = path.join(appResourcesDirectoryPath, 'iOS');

  return new Promise(function (resolve, reject) {
    if (platform == 'ios') {
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

    resolve();
  });
};