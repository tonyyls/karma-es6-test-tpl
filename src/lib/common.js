/**
 * 通用工具类
 * @class Common
 */
class Common {
  constructor() {}

  /**
   * 仅用于演示
   * @param {Number} num 数字
   */
  add(num) {
    if (num == 0) {
      return 0;
    } else {
      return num + 1;
    }
  }

  /**
   * url转换成对象
   * @param {String} 网址
   */
  parseUrlToObj(url) {
    if (url == "" || typeof url == undefined) return {};
    const reg = /(^http\w?):\/\/([\w.]+)([\w\/]+)\?([\w\=\&]+)#([\w]+)/;
    let regArr = reg.exec(url);
    let obj = {};
    obj.protocol = regArr[1];
    obj.host = regArr[2];
    obj.path = regArr[3];
    obj.hash = regArr[5];
    let queryArr = regArr[4].split(/[=&]/);
    let query = {};
    for (let i = 0; i < queryArr.length; i += 2) {
      query[queryArr[i]] = queryArr[i + 1];
    }
    obj.query = query;
    return obj;
  }
}
export default Common;
