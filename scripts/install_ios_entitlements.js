var xcode = require('xcode'),
    fs = require('fs'),
    path = require('path'),
    pjson = eval('require(\'../../package.json\')'),
    iosFolder = path.join('platforms', 'ios'),
    data = fs.existsSync(iosFolder) && fs.readdirSync(iosFolder),
    projFolder,
    projName;

// Find the project folder by looking for *.xcodeproj
if (!(data && data.length)) {
  console.log("platforms/ios does not exist, skip copying entitlements.");
} else {
  data.forEach(function (folder) {
    if (folder.match(/\.xcodeproj$/)) {
      projFolder = path.join(iosFolder, folder);
      projName = path.basename(folder, '.xcodeproj');
    }
  });

  if (!projFolder || !projName) {
    throw new Error("Could not find an .xcodeproj folder in: " + iosFolder);
  }

  var destFolder = path.join(iosFolder, projName, 'Resources');
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
  }

  var destFile = path.join(destFolder, projName + '.entitlements');

  if (!fs.existsSync(destFile)) {
    var bundleID = pjson.nativescript.id;

    // create a new entitlements plist file
    var sourceFile = path.join('node_modules', 'nativescript-plugin-firebase', 'scripts', 'resources', 'KeychainSharing.entitlements');

    var fileData = fs.readFileSync(sourceFile).toString();
    fileData = fileData.replace(/__KEYCHAIN_ACCESS_GROUP__/g, bundleID);
    fs.writeFileSync(destFile, fileData);

    var projectPath = path.join(projFolder, 'project.pbxproj'),
        pbxProject = xcode.project(projectPath);

    pbxProject.parseSync();
    pbxProject.addResourceFile(path.join(projName, "Resources", projName + ".entitlements"));


    var configGroups = pbxProject.hash.project.objects['XCBuildConfiguration'];
    for (var key in configGroups) {
      var config = configGroups[key];
      if (config.buildSettings !== undefined) {
        config.buildSettings.CODE_SIGN_ENTITLEMENTS = '"' + projName + '/Resources/' + projName + '.entitlements"';
      }
    }

    // write the updated project file
    fs.writeFileSync(projectPath, pbxProject.writeSync());
  }
}
