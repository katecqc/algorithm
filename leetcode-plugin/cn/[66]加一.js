//给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
//
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
//
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//
// 示例 1:
//
// 输入: [1,2,3]
//输出: [1,2,4]
//解释: 输入数组表示数字 123。
//
//
// 示例 2:
//
// 输入: [4,3,2,1]
//输出: [4,3,2,2]
//解释: 输入数组表示数字 4321。
//
//

/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
  时间复杂度：O(n)，n是字符串长度
  空间复杂度：O(1)
 */
var plusOne = function(digits) {
  const n = digits.length
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i] += 1
      break
    } else {
      digits[i] = 0
      if (!i) digits.unshift(1)
    }
  }
  return digits
};

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits));
