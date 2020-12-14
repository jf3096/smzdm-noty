import hash from "object-hash";

/**
 * 哈希对象, 生成唯一哈希值
 * e.g.: hashObject({foo: 'bar'}) // => '67b69634f9880a282c14a0f0cb7ba20cf5d677e9'
 * @param {object} obj - plain object
 */
export const hashObject = (plainObject: object): string => {
  return hash(plainObject);
};
