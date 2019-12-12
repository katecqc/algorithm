//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
//
//
// 示例 2:
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
//
//
// 说明:
//
// 所有输入只包含小写字母 a-z 。
//

/**
 * @param {string[]} strs
 * @return {string}
 */

/*
  水平遍历：
  时间复杂度：O(S)，S = m * n
  空间复杂度：O(1)
 */

var longestCommonPrefix = function(strs) {
  const sLen = strs.length
  let result = sLen ? strs[0] : ''
  for (let i = 1; i < sLen; i++) {
    const rLen = result.length
    if (!rLen) return ''
    for (let j = 0; j < rLen; j++) {
      if (result[j] !== strs[i][j]) {
        result = result.substring(0, j)
        break
      }
    }
  }
  return result
};

var longestCommonPrefix2 = function(strs) {
  const n = strs.length
  if (!n) return ''
  let result = strs[0].split('')
  const m = result.length
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (result[j] !== strs[i][j]) {
        result.splice(j, m - j)
      }
    }
  }
  return result.join('')
};

const strs = ["caca","cba", "csd"]
console.log(longestCommonPrefix(strs));
