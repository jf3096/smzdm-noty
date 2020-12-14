import { envConfig } from '@smzdm/env-config';
import axios from 'axios';
import _ from 'lodash';
import logger from '../../logger';
import { IMessenger, ISendParams } from '../interface/i-messenger';

export class WxPusherMessenger implements IMessenger {
  /**
   * 获取关注 app 的用户
   */
  private getAppFollowUsers() {
    return axios
      .get('http://wxpusher.zjiecode.com/api/fun/wxuser', {
        params: {
          appToken: envConfig.wxPusherAppToken,
          page: 1,
          pageSize: 50,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.code === 1000 /* 成功 */) {
          return (response.data.data.records || []).map(
            (record: { uid: string }) => record.uid,
          );
        } else {
          logger.log(
            '无法获取用户 UID',
            JSON.stringify(
              _.pick(response, [
                'config',
                'data',
                'headers',
                'status',
                'statusText',
              ]),
            ),
          );
          return [];
        }
      });
  }

  /**
   * 发送
   */
  public async send({ content, url }: ISendParams): Promise<void> {
    const uids = await this.getAppFollowUsers();
    if (uids.length) {
      await axios.post('https://wxpusher.zjiecode.com/api/send/message', {
        appToken: envConfig.wxPusherAppToken,
        topicIds: [],
        uids,
        content,
        url,
      });
    }
  }
}
