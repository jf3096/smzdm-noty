"use strict";
exports.__esModule = true;
var env = require("dotenv-flow");
var path = require("path");
var tiny_invariant_1 = require("tiny-invariant");
var glob = require("glob");
var envConfigDirectory = path.resolve(__dirname, '../');
var VALID_ENV_LIST = glob.sync('.env.*', { dot: true });
var NODE_ENV = process.env.NODE_ENV;
tiny_invariant_1["default"](VALID_ENV_LIST.indexOf(NODE_ENV) > -1, "\u4EC5\u652F\u6301\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF" + VALID_ENV_LIST + ". \u5F53\u524D\u73AF\u5883\u53D8\u91CF process.env.NODE_ENV = " + NODE_ENV + " \u4E0D\u5408\u6CD5");
env.config({
    node_env: NODE_ENV,
    path: envConfigDirectory
});
