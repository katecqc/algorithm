//你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
//
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
//
// 示例 1:
//
// 输入: [2,3,2]
//输出: 3
//解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
//
//
// 示例 2:
//
// 输入: [1,2,3,1]
//输出: 4
//解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//     偷窃到的最高金额 = 1 + 3 = 4 。
//

/**
 * @param {number[]} nums
 * @return {number}
 */

// 时间复杂度：O(2(n-1))，即O(n)
// 空间复杂度：O(1)

var rob = function(nums) {
  let n = nums.length
  if (n <= 1) return nums[0] ? nums[0] : 0
  return Math.max(dynamic(0, n - 1), dynamic(1, n))

  function dynamic(start, end) {
    let [dp_i_0, dp_i_1, dp_pre_0] = [0, nums[start], 0]
    for (let i = start + 1; i < end; i++) {
      let temp = dp_i_1
      dp_i_0 = Math.max(dp_i_0, dp_i_1 - nums[i])
      dp_i_1 = Math.max(dp_i_1, dp_pre_0 + nums[i])
      dp_pre_0 = temp
    }
    return dp_i_1
  }
};

const nums = [0]
console.log(rob(nums));
