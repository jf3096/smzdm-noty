import mongoose, { Schema } from "mongoose";

/**
 * 记录, 当发送过"提醒"后, db 将进行一次记录
 * 有记录的说明已发送过 "提醒"
 */
export const recordSchema = new Schema({ hash: String });

/**
 * 获取[记录]模型
 */
export const getRecordModel = () => {
  return mongoose.model("record", recordSchema);
};
