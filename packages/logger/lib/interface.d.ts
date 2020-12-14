export interface ILogger {
    /**
     * 初始化
     */
    init(): Promise<any>;
    /**
     * 记录, 级别为: log (低)
     * @param {string} title - 标题
     * @param {string} message - 日志记录主体信息
     */
    log(title: string, message: string): any;
}
