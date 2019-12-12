//给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
// 输入: nums = [1,2,3]
//输出:
//[
//  [3],
//  [1],
//  [2],
//  [1,2,3],
//  [1,3],
//  [2,3],
//  [1,2],
//  []
//]
//

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 时间复杂度：n * 2 ^ n
// 空间复杂度：n * 2 ^ n

var subsets = function(nums) {
  let res = new Set()
  backtracking(0, nums, res, [])
  return [...res]

  function backtracking(i, nums, res, subSet) {
    res.add([...subSet])
    for (let j = i; j < nums.length; j++) {
      subSet.push(nums[j])
      backtracking(j + 1, nums, res, subSet)
      subSet.pop()
    }
  }
};

const nums = [1, 2, 3]
console.log(subsets(nums));
