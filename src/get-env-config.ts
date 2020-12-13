import invariant from "tiny-invariant";
import { stringFormat } from "./utils/string-format";

require("dotenv-flow").config();

const ERROR_MESSAGE = {
  NOT_FOUND_VALID_VALUE: "无法通过 {0} 找到有效值",
};

export interface IEnvConfig {
  /**
   * mongo 连接字符串
   */
  mongoConnectionString: string;
  /**
   * wx pusher app token
   */
  wxPusherAppToken: string;
}

/**
 * 获取环境配置
 */
export const getEnvConfig = (): IEnvConfig => {
  const envConfig: IEnvConfig = {
    mongoConnectionString: process.env.MONGODB_CONNECTION_STRING || "",
    wxPusherAppToken: process.env.WX_PUSHER_APP_TOKEN || "",
  };

  invariant(
    envConfig.mongoConnectionString,
    stringFormat(
      ERROR_MESSAGE.NOT_FOUND_VALID_VALUE,
      "process.env.MONGODB_CONNECTION_STRING"
    )
  );

  invariant(
    envConfig.wxPusherAppToken,
    stringFormat(
      ERROR_MESSAGE.NOT_FOUND_VALID_VALUE,
      "process.env.WX_PUSHER_APP_TOKEN"
    )
  );

  return envConfig;
};
