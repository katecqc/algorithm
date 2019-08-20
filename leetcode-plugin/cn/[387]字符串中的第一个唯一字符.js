//给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
// 案例:
//
//
//s = "leetcode"
//返回 0.
//
//s = "loveleetcode",
//返回 2.
//
//
//
//
// 注意事项：您可以假定该字符串只包含小写字母。
//

/**
 * @param {string} s
 * @return {number}
 */


/*
  哈希表：记录数据重复的次数
  时间复杂度：O(n)
  空间复杂度：O(n)
 */


var firstUniqChar = function(s) {
  const n = s.length
  if (n <= 1) return n - 1
  let hash = new Map()
  for (let i = 0; i < n; i++) {
    hash.set(s[i], hash.get(s[i]) ? hash.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < n; i++) {
    if (hash.get(s[i]) === 1) return i
  }
  return -1
};

const s = "lllol"
console.log(firstUniqChar(s));
