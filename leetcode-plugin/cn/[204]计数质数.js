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
  质数：大于1的自然数中，除了1和它本身，不能有其他因数（没法被其他自然数整除）的数
  方法：
  1. 验证某个数是否为质数时，将其对每一个比其小的数进行取余运算，并对取余为零的情况进行计数
  2. 对正整数 n ，如果用 2 到 √n 之间(包含边界)的所有整数去除，均无法整除，则 n 为质数
  时间复杂度：O(nlogN)
  空间复杂度： O(1)
 */

var countPrimes2 = function(n) {
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


/*
  厄拉多塞筛法：i从2开始递增到n，每次将i的倍数先去掉，剩下的就是质数
  时间复杂度：O(nlogN)
  空间复杂度： O(n)
 */

var countPrimes = function(n) {
  if (n < 3) return 0
  let count = 0
  let sign = Array.from({length: n}, () => false)
  for (let i = 2; i < n; i++) {
    if (!sign[i]) { // 跳过前面已判断为非质数的数
      count++
      for (let j = i + i; j < n; j+=i) { // 按倍数取值，肯定不为质数
        sign[j] = true
      }
    }
  }
  return count
};

const n = 10
console.log(countPrimes(n));
