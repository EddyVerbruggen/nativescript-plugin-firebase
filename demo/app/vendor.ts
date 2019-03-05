// Snapshot the ~/app.css and the theme
const application = require("tns-core-modules/application");
require("tns-core-modules/ui/styling/style-scope");
const appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

require("./vendor-platform");

require("bundle-entry-points");
