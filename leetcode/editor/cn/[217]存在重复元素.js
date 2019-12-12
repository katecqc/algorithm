//给定一个整数数组，判断是否存在重复元素。
//
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
//
// 示例 1:
//
// 输入: [1,2,3,1]
//输出: true
//
// 示例 2:
//
// 输入: [1,2,3,4]
//输出: false
//
// 示例 3:
//
// 输入: [1,1,1,3,3,4,3,2,4,2]
//输出: true
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  哈希表：
  时间复杂度：O(n)
  空间复杂度：O(n)
 */

var containsDuplicate = function(nums) {
  let hash = new Set()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i])) return true
    hash.add(nums[i])
  }
  return false
};

/*
  比较不重复Set数据结构的长度：
  时间复杂度：O(n)
  空间复杂度：O(n)
 */

var containsDuplicate2 = function(nums) {
  let hash = new Set()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    hash.add(nums[i])
  }
  if (hash.size < n) return true
  return false
};

const nums = [1,2,3,1]
console.log(containsDuplicate(nums));
