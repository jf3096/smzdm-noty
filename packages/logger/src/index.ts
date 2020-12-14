import { ILogger } from './interface';

const fundebug = require('fundebug-nodejs');

/**
 * 日志记录
 */
export class Logger implements ILogger {
  /**
   * 初始化
   */
  async init(): Promise<any> {
    fundebug.apikey =
      '05145fa503aa0efe2c9b7304ba19b60bb1c7142f4a9cdd7453ad2a2b15f27b28';
  }
  /**
   * 记录, 级别为: log (低)
   * @param {string} title - 标题
   * @param {string} message - 日志记录主体信息
   */
  log(title: string, message: string) {
    fundebug.notify(title, message);
  }
}
