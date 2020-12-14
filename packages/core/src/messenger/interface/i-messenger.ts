export interface ISendParams {
  content: string;
  url: string;
}

/**
 * 发送标准接口
 */
export interface IMessenger {
  /**
   * 发送
   * @param {string} content - 内容
   */
  send({ content, url }: ISendParams): Promise<void>;
}
