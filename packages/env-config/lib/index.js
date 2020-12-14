"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
require("./bootstrap");
const tiny_invariant_1 = require("tiny-invariant");
const string_format_1 = require("./utils/string-format");
const ERROR_MESSAGE = {
    NOT_FOUND_VALID_VALUE: '无法通过 {0} 找到有效值',
};
/**
 * 获取环境配置
 */
exports.envConfig = {
    mongoConnectionString: process.env.MONGODB_CONNECTION_STRING || '',
    wxPusherAppToken: process.env.WX_PUSHER_APP_TOKEN || '',
};
tiny_invariant_1.default(exports.envConfig.mongoConnectionString, string_format_1.stringFormat(ERROR_MESSAGE.NOT_FOUND_VALID_VALUE, 'process.env.MONGODB_CONNECTION_STRING'));
tiny_invariant_1.default(exports.envConfig.wxPusherAppToken, string_format_1.stringFormat(ERROR_MESSAGE.NOT_FOUND_VALID_VALUE, 'process.env.WX_PUSHER_APP_TOKEN'));
