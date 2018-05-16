var fs = require('fs');
var path = require('path');
var fsextra = require("fs-extra");

function patchPluginsFile(pluginsFile) {
  if (fs.existsSync(pluginsFile)) {
    var xcconfigContent = fs.readFileSync(pluginsFile).toString();
    xcconfigContent = xcconfigContent.replace('$(inherited) ${SRCROOT}/Pods/TensorFlowLite/Frameworks/tensorflow_lite.framework -L ', '$(inherited) -L ${SRCROOT}/Pods/TensorFlowLite/Frameworks/tensorflow_lite.framework ');
    fs.writeFileSync(pluginsFile, xcconfigContent);
  }
}

function patchPodsBundlesPlugins(podsFile) {
  if (fs.existsSync(podsFile)) {
    var content = fs.readFileSync(podsFile).toString();
    content = content.replace(
        '${PODS_CONFIGURATION_BUILD_DIR}/GoogleMobileVision/GoogleMVTextDetectorResources.bundle',
        '${PODS_ROOT}/GoogleMobileVision/TextDetector/Resources/GoogleMVTextDetectorResources.bundle');
    content = content.replace(
        '${PODS_CONFIGURATION_BUILD_DIR}/GoogleMobileVision/GoogleMVFaceDetectorResources.bundle',
        '${PODS_ROOT}/GoogleMobileVision/FaceDetector/Resources/GoogleMVFaceDetectorResources.bundle');
    fs.writeFileSync(podsFile, content);
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

  // These bundlse need a kick as well for the {N} CLI when building for a device
  patchPodsBundlesPlugins(path.join(projectRoot, "Pods", "Target Support Files", "Pods-" + projectData.projectName, "Pods-" + projectData.projectName + "-resources.sh"));
  patchPodsBundlesPlugins(path.join(projectRoot, "Pods", "Target Support Files", "Pods-" + projectData.projectName, "Pods-" + projectData.projectName + "-resources.sh"));

  var mobileVisionPod = path.join(projectRoot, "Pods", "GoogleMobileVision");
  if (fs.existsSync(mobileVisionPod)) {
    if (fs.existsSync(path.join(mobileVisionPod, "TextDetector", "Resources", "GoogleMVTextDetectorResources"))) {
      fsextra.copy(
          path.join(mobileVisionPod, "TextDetector", "Resources", "GoogleMVTextDetectorResources"),
          path.join(mobileVisionPod, "TextDetector", "Resources", "GoogleMVTextDetectorResources.bundle")
      );
    }
    if (fs.existsSync(path.join(mobileVisionPod, "FaceDetector", "Resources", "GoogleMVFaceDetectorResources"))) {
      fsextra.copy(
          path.join(mobileVisionPod, "FaceDetector", "Resources", "GoogleMVFaceDetectorResources"),
          path.join(mobileVisionPod, "FaceDetector", "Resources", "GoogleMVFaceDetectorResources.bundle")
      );
    }
  }

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
