"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringFormat = void 0;
/**
 * 格式化字符串
 * @example
 * String.format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
 */
const stringFormat = (...args) => {
    const format = args[0];
    args = Array.prototype.slice.call(args, 1);
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};
exports.stringFormat = stringFormat;
