"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("dotenv-flow");
const path = require("path");
const envConfigDirectory = path.resolve(__dirname, '../');
env.config({
    node_env: 'development',
    path: envConfigDirectory,
});
