"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fundebug = require('fundebug-nodejs');
/**
 * 日志记录
 */
class Logger {
    /**
     * 初始化
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            fundebug.apikey =
                '05145fa503aa0efe2c9b7304ba19b60bb1c7142f4a9cdd7453ad2a2b15f27b28';
        });
    }
    /**
     * 记录, 级别为: log (低)
     * @param {string} title - 标题
     * @param {string} message - 日志记录主体信息
     */
    log(title, message) {
        fundebug.notify(title, message);
    }
}
exports.Logger = Logger;
