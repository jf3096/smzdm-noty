/**
 * 格式化字符串
 * @example
 * String.format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
 */
export const stringFormat = (...args: any[]) => {
  const format: string = args[0];
  var args = Array.prototype.slice.call(args, 1);
  return format.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};
