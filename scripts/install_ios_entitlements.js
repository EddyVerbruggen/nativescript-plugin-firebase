var xcode = require('xcode'),
    fs = require('fs'),
    path = require('path'),
    appRoot = require('app-root-path').toString(),
    pjson = require(path.join(appRoot, 'package.json')),
    util = require('util'),
    iosFolder = path.join(appRoot, 'platforms', 'ios');

fs.readdir(iosFolder, function (err, data) {
  if (err) {
    throw err;
  }

  var projFolder;
  var projName;

  // Find the project folder by looking for *.xcodeproj
  if (data && data.length) {
    data.forEach(function (folder) {
      if (folder.match(/\.xcodeproj$/)) {
        projFolder = path.join(iosFolder, folder);
        projName = path.basename(folder, '.xcodeproj');
      }
    });
  }

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
    var sourceFile = path.join(appRoot, 'node_modules', 'nativescript-plugin-firebase', 'scripts', 'resources', 'KeychainSharing.entitlements');

    fs.readFile(sourceFile, 'utf8', function (err, data) {
      data = data.replace(/__KEYCHAIN_ACCESS_GROUP__/g, bundleID);

      fs.writeFileSync(destFile, data);

      var projectPath = path.join(projFolder, 'project.pbxproj'),
          pbxProject = xcode.project(projectPath);

      pbxProject.parseSync();
      pbxProject.addResourceFile(path.join("Firebase", "Resources", projName + ".entitlements"));

      var configGroups = pbxProject.hash.project.objects['XCBuildConfiguration'];
      for (var key in configGroups) {
        var config = configGroups[key];
        if (config.buildSettings !== undefined) {
          config.buildSettings.CODE_SIGN_ENTITLEMENTS = '"' + projName + '/Resources/' + projName + '.entitlements"';
        }
      }

      // write the updated project file
      fs.writeFileSync(projectPath, pbxProject.writeSync());
    });
  }
});
