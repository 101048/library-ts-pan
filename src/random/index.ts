/**
 *
 * @description JS Common libraries (Random Articles) 
 *
 */
  /**
   * description： 生成指定范围的随机数
   * description： Generate Rrandom Numbers In The Specified Range
   * @param {Number} min
   * @param {Number} max
   */
  const randomNumber = (min:number, max:number):number => {
    return ~~ (min + Math.random() * (max - min))
  }
export {
  randomNumber
};
