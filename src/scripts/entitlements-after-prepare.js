var fs = require('fs');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
  var platform = hookArgs.platform.toLowerCase(),
      appResourcesDirectoryPath = projectData.appResourcesDirectoryPath,
      entitlementsFile = path.join(appResourcesDirectoryPath, "iOS", projectData.projectName + ".entitlements"),
      projectRoot = path.join(projectData.platformsDir, "ios"),
      project = path.join(projectRoot, projectData.projectName);

  return new Promise(function (resolve, reject) {
    if (platform === 'ios' && fs.existsSync(entitlementsFile)) {
      var dest = path.join(project, projectData.projectName + ".entitlements");
      fs.createReadStream(entitlementsFile).pipe(fs.createWriteStream(dest));
    }
    resolve();
  });
};