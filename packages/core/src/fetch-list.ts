import axios from "axios";
import * as cheerio from "cheerio";
import { link } from "fs";
import _ from "lodash";
import { hashObject } from "./utils/hash-object";

export interface IGood {
  /**
   * 名称， e.g.: Hisense 海信 VIDAA 55V1F-R 55英寸 4K 液晶电视
   */
  name: string;
  /**
   * 价格文本， e.g.： 1699元包邮（需用券）
   */
  priceText: string;
  /**
   * 平台: 拼多多
   */
  platform: string;
  /**
   * 最后更新时间, e.g.: 09:01
   */
  lastUpdateTime: string;
  /**
   * 描述, e.g.: 支持HDR 2GB+16GB内存 58英寸大屏 这款电视尺寸58英寸，4K分辨率，支持HDR，2GB+16GB内存组合，支持语音操控，搭载安卓系统...
   */
  desc: string;
  /**
   * 值率, e.g.: 12
   */
  zhi: number;
  /**
   * 不值率, e.g.: 12
   */
  buZhi: number;
  /**
   * 链接
   */
  link: string;
}

/**
 * 获取什么值得买列表
 */
export const fetchList = async (keyword: string): Promise<IGood[]> => {
  const result = await axios.get("https://search.smzdm.com/", {
    params: {
      c: "faxian",
      v: "b",
      f_c: "zhi",
      order: "score",
      s: keyword,
    },
  });
  const $ = cheerio.load(result.data);
  const $cards = $(".feed-row-wide");
  const goods: IGood[] = $cards
    .map(function (this: any) {
      const $current = $(this);
      const name = $current.find(".feed-nowrap").text().trim();
      const priceText = $current.find(".z-highlight").text().trim();
      const platform = $current.find(".feed-block-extras > span").text().trim();
      const lastUpdateTime = $current
        .find(".feed-block-extras")
        .text()
        .replace(/[\r\n]/g, "")
        .replace(platform, "")
        .trim();
      const desc = $current
        .find(".feed-block-descripe")
        .text()
        .replace(/[\r\n]/g, "")
        .replace(/标签.+? +/g, "")
        .trim();

      const [zhi, buZhi] =
        $current.find(".unvoted-wrap").text().trim().match(/\d+/g) || [];

      const link =
        $current.find(".feed-block-title > .feed-nowrap").attr("href") || "";

      const good: IGood = {
        name,
        priceText,
        platform,
        lastUpdateTime,
        desc,
        zhi: Number(zhi),
        buZhi: Number(buZhi),
        link,
      };

      return good;
    })
    .toArray() as any[];

  return goods;
};

/**
 * 生成商品哈希值
 * @param {IGood} good - 商品
 */
export const generateGoodHash = (good: IGood) => {
  return good.link;
};
