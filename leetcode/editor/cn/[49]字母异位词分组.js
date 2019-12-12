//给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
//
// 示例:
//
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
//输出:
//[
//  ["ate","eat","tea"],
//  ["nat","tan"],
//  ["bat"]
//]
//
// 说明：
//
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//
//

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = {}
  let result = []
  let index = 0
  for (let i = 0; i < strs.length; i++) {
    // 每个字符串需重新声明，否则会累计
    let arr = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
      arr[strs[i].charCodeAt(j) - 97]++
    }
    let key = ''
    for (let z = 0; z < 26; z++) {
      key = key + '#' + arr[z]
    }
    // 需在不存在key的时候声明数组，否则：
    // 1. push方法不可用
    // 2. 未加完所有用例被重置
    if (!hash[key]) {
      hash[key] = []
    }
    hash[key].push(strs[i])
  }
  // 格式化输出内容
  for (let key in hash) {
    result[index++] = hash[key]
  }
  return result
};
