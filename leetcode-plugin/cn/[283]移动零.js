//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 示例:
//
// 输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]
//
// 说明:
//
//
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
//
//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/*
  快慢指针：
  时间复杂度：O(n)
  空间复杂度：O(1)
 */

var moveZeroes = function(nums) {
  let fast = 0
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      swap(nums, cur, fast++)
    }
  }
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
};
const nums = [1,1,0,3,12]
moveZeroes(nums)
