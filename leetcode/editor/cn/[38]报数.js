//报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
//
// 1.     1
//2.     11
//3.     21
//4.     1211
//5.     111221
//
//
// 1 被读作 "one 1" ("一个一") , 即 11。
//11 被读作 "two 1s" ("两个一"）, 即 21。
//21 被读作 "one 2", "one 1" （"一个二" , "一个一") , 即 1211。
//
// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
//
// 注意：整数顺序将表示为一个字符串。
//
//
//
// 示例 1:
//
// 输入: 1
//输出: "1"
//
//
// 示例 2:
//
// 输入: 4
//输出: "1211"
//
//

/**
 * @param {number} n
 * @return {string}
 */

/*
  双循环：
  时间复杂度：O(n^2)
  空间复杂度：O(n)
 */


var countAndSay = function(n) {
  if (n <= 1) return '' + n
  let result = '1'
  for (let i = 1; i < n; i++) {
    result = countPreNum(result)
  }
  return result

  function countPreNum(preNum) {
    let [preResult, sum, len] = ['', 1, preNum.length]
    for (let i = 0; i < len; i++) {
      if (i + 1 < len && preNum[i + 1] === preNum[i]) {
        sum++
      } else {
        preResult = '' + preResult + sum + preNum[i]
        sum = 1
      }
    }
    return preResult
  }
};

console.log(countAndSay(8));
