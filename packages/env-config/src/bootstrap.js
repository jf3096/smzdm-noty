"use strict";
exports.__esModule = true;
var env = require("dotenv-flow");
var path = require("path");
var envConfigDirectory = path.resolve(__dirname, '../');
env.config({
    node_env: 'development',
    path: envConfigDirectory
});
