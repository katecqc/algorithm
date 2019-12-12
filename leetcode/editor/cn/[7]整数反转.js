//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
//
// 示例 1:
//
// 输入: 123
//输出: 321
//
//
// 示例 2:
//
// 输入: -123
//输出: -321
//
//
// 示例 3:
//
// 输入: 120
//输出: 21
//
//
// 注意:
//
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
//

/**
 * @param {number} x
 * @return {number}
 */


/*
  重点是范围溢出：当范围已经溢出，再进行溢出的判断是会报错的。因此要把范围的判断放到循环内，逐渐增大值的时候判断。
  整数翻转：从个位数开始到最后位数，每次将上一个的结果 *10 并把余数加上，就能够将值翻转。
  时间复杂度：O(log(x))，x 中大约有log10 (x)位数字
  空间复杂度：O(1)
 */

var reverse = function(x) {
  let result = 0
  while (x != 0) {
    let pop = x % 10
    // if (result > Integer.MAX_VALUE / 10 || result === Integer.MAX_VALUE / 10 && pop > 7) return 0
    // if (result < Integer.MIN_VALUE / 10 || result === Integer.MIN_VALUE / 10 && pop < -8) return 0
    if (result > 214748364 || (result === 214748364 && pop > 7)) return 0
    if (result < -214748364 || (result === 214748364 && pop < -8)) return 0
    result = result * 10 + pop
    x = parseInt(x / 10)
  }
  return result
};

const x = -123
console.log(reverse(x));
