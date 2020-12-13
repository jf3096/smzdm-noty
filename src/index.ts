import "./logger";
import { DB } from "./db";
import { fetchList, generateGoodHash } from "./fetch-list";
import { getEnvConfig } from "./get-env-config";
import _ from "lodash";
import { getRecordModel } from "./db-models/record.modal";
import { MessengerManager } from "./messenger/manager";
import { name as appName } from "../package.json";

(async () => {
  console.log(`${appName} starting...`);

  const envConfig = getEnvConfig();
  const db = new DB({
    connectionString: envConfig.mongoConnectionString,
  });
  const mongoose = await db.connect();

  const list = await fetchList("电视");

  const RecordModel = getRecordModel();

  const existList = await Promise.all(
    list.map(async (item) => {
      const hash = generateGoodHash(item);
      const exist = await RecordModel.countDocuments({ hash });
      if (exist) {
        return hash;
      }
      return null;
    })
  );

  const reminderList = list.filter((item, index) => {
    return !existList[index];
  });

  const messengerManager = new MessengerManager();

  await Promise.all(
    reminderList.map(async (item) => {
      const voteTotal = item.zhi + item.buZhi;
      const content = [
        `${item.name} (${item.platform})`,
        `${item.priceText} (${item.lastUpdateTime})`,
        `值: ${item.zhi}, 不值: ${item.buZhi}, 值率: ${
          voteTotal ? ((item.zhi / voteTotal) * 100).toFixed(2) : 0
        }%`,
      ].join("\n");
      const url = item.link;
      await messengerManager.send({ content, url });
      await new RecordModel({ hash: generateGoodHash(item) }).save();
    })
  );

  await mongoose.disconnect();

  console.log(`${appName} finished`);
})();
