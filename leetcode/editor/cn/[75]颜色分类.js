//给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
//
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
//
// 注意:
//不能使用代码库中的排序函数来解决这道题。
//
// 示例:
//
// 输入: [2,0,2,1,1,0]
//输出: [0,0,1,1,2,2]
//
// 进阶：
//
//
// 一个直观的解决方案是使用计数排序的两趟扫描算法。
// 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
// 你能想出一个仅使用常数空间的一趟扫描算法吗？
//
//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n = nums.length
  if (n <= 1) return
  let max = nums[0]
  // 计算出元素值的范围
  for (let i = 1; i < n; i++) {
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  // 申请范围为 0 至 max 的数组c
  let c = new Array(max + 1).fill(0)
  // 更新数组c的值，统计 nums 每个元素的出现次数
  for (let i = 0; i < n; i++) {
    c[nums[i]]++
  }
  // 更新数组c的值，依次累加每一个元素之前的所有元素（包括自己）出现的次数
  for (let i = 1; i <= max; i++) {
    c[i] = c[i] + c[i - 1]
  }
  // 临时数组r，存储排序之后的结果
  let r = []
  for (let i = n - 1; i >= 0; i--) {
    let index = c[nums[i]] - 1
    r[index] = nums[i]
    c[nums[i]]--
  }
  for (let i = 0; i < n; i++) {
     nums[i] = r[i]
  }
  console.log(nums);
};

const nums = [2,0,2,1,1,0]
sortColors(nums)
