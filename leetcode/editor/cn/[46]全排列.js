//给定一个没有重复数字的序列，返回其所有可能的全排列。
//
// 示例:
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]
//

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 时间复杂度：O(N!) <= O <= O(N * N!)
// 空间复杂度：O(N!)

var permute = function(nums) {
  let res = new Set()
  backtracking([], nums)
  return [...res]

  function backtracking(current, remaining) {
    if (remaining.length <= 0) {
      res.add([...current])
      return
    }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i])
      backtracking(current.slice(), remaining.slice(0, i).concat(remaining.slice(i + 1))) // Recurse with inserted element removed
      current.pop()
    }
  }
};

const nums = [1, 2, 3]
console.log(permute(nums));
