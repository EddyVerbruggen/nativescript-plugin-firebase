var path = require("path");
var webpack = require("webpack");

module.exports = {
    target: "node",
    output: {
        //some debug info around module imports
        pathinfo: true
    },
    resolve: {
        alias: {
            //winston is inherently unpackable. replace with our mock
            "winston": path.join(__dirname, "winston-mock.js")
        }
    },
    externals: {
        //pkginfo is unpackable too, but we can replace it with a simple expression
        "pkginfo": "function(){}"
    }
};
