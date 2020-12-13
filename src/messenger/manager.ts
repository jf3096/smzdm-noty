import { WxPusherMessenger } from "./wx-pusher-messenger/index";
import { IMessenger, ISendParams } from "./interface/i-messenger";

/**
 * 信息器管理
 */
export class MessengerManager {
  private readonly messenger: IMessenger;

  public constructor() {
    this.messenger = new WxPusherMessenger();
  }

  /**
   * 发送
   */
  public send({ content, url }: ISendParams): Promise<void> {
    return this.messenger.send({ content, url });
  }
}
