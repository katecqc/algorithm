//给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,1]
//输出: 1
//
//
// 示例 2:
//
// 输入: [4,1,2,1,2]
//输出: 4
//

/**
 * @param {number[]} nums
 * @return {number}
 */

// 异或（XOR）运算特性：
// 非零数与0进行异或运算，得到自身
// 非零数与自身进行异或运算，得到0
// 异或运算满足 交换律 和 结合律，a XOR b XOR a = (a XOR a) XOR b = 0 XOR b = b
// 如：a = 10，二进制是 1010；b 为 7, 二进制0111； 1010 XOR 1010 XOR 0111 = 0000 XOR 0111 = 0111

// 时间复杂度：O(n)
// 空间复杂度：O(1)
var singleNumber = function(nums) {
  let result = 0
  for (let item of nums) {
    result ^= item
  }
  return result
};

const nums = [4,1,2,1,2]
console.log(singleNumber(nums));
