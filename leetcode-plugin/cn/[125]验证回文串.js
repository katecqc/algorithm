//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
//
// 输入: "A man, a plan, a canal: Panama"
//输出: true
//
//
// 示例 2:
//
// 输入: "race a car"
//输出: false
//
//

/**
 * @param {string} s
 * @return {boolean}
 */

/*
  双指针：镜像对称
  时间复杂度：O(n)，一个循环
  空间复杂度：O(1)，存储的常量变量
 */


var isPalindrome = function(s) {
  const n = s.length
  if (n <= 1) return true
  let [left, right] = [0, n - 1]
  const reg = /^[A-Za-z0-9]+$/
  s = s.toLowerCase()
  while (left < right) { // 镜像对称原理，左右部分相等
    if (!s[left] || !s[left].match(reg)) {
      left += 1
      continue
    }
    if (!s[right] || !s[right].match(reg)) {
      right -= 1
      continue
    }
    if (s[left] !== s[right]) return false
    left += 1
    right -= 1
  }
  return true
};


const s = "race a car"
console.log(isPalindrome(s));
