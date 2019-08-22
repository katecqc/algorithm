//统计所有小于非负整数 n 的质数的数量。
//
// 示例:
//
// 输入: 10
//输出: 4
//解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
//
//

/**
 * @param {number} n
 * @return {number}
 */


/*
  验证某个数是否为质数时，将其对每一个比其小的数进行取余运算，并对取余为零的情况进行计数。
  对正整数 n ，如果用 2 到 √n 之间(包含边界)的所有整数去除，均无法整除，则 n 为质数。
  时间复杂度：O(nlogN)
  空间复杂度： O(1)
 */

var countPrimes = function(n) {
  if (n < 3) return 0
  let count = 1
  for (let i = 3; i < n; i++) {
    if ((i & 1) === 0) continue // 排除偶数
    let sign = true
    for (let j = 3; j * j <= i; j+=2) { // 跳过偶数，并且验证 √n 是否能够整除，能够减掉一些无效判断
      if (i % j === 0) {
        sign = false
        break
      }
    }
    if (sign) {
      count++
    }
  }
  return count
};

const n = 10
console.log(countPrimes(n));
