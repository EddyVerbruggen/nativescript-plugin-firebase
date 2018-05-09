var fs = require('fs');
var path = require('path');

function patchPluginsFile(pluginsFile) {
  if (fs.existsSync(pluginsFile)) {
    var xcconfigContent = fs.readFileSync(pluginsFile).toString();
    xcconfigContent = xcconfigContent.replace('$(inherited) ${SRCROOT}/Pods/TensorFlowLite/Frameworks/tensorflow_lite.framework -L ', '$(inherited) -L ${SRCROOT}/Pods/TensorFlowLite/Frameworks/tensorflow_lite.framework ');
    fs.writeFileSync(pluginsFile, xcconfigContent);
  }
}

module.exports = function (logger, platformsData, projectData, hookArgs) {
  var platform = hookArgs.platform.toLowerCase(),
      appResourcesDirectoryPath = projectData.appResourcesDirectoryPath,
      entitlementsFile = path.join(appResourcesDirectoryPath, "iOS", projectData.projectName + ".entitlements"),
      projectRoot = path.join(projectData.platformsDir, "ios"),
      project = path.join(projectRoot, projectData.projectName);

  // TensorFlowLite needs a little patch that currently can't be done in any other way than with this hook
  patchPluginsFile(path.join(projectRoot, "plugins-debug.xcconfig"));
  patchPluginsFile(path.join(projectRoot, "plugins-release.xcconfig"));

  // look for both <projectname.entitlements and app.entitlements
  if (!fs.existsSync(entitlementsFile)) {
    entitlementsFile = path.join(appResourcesDirectoryPath, "iOS", "app.entitlements");
  }

  return new Promise(function (resolve, reject) {
    if (platform === 'ios' && fs.existsSync(entitlementsFile)) {
      var dest = path.join(project, projectData.projectName + ".entitlements");
      fs.createReadStream(entitlementsFile).pipe(fs.createWriteStream(dest));
    }
    resolve();
  });
};
