//给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
//
// 示例 1:
//
// 输入: [3,0,1]
//输出: 2
//
//
// 示例 2:
//
// 输入: [9,6,4,2,3,5,7,0,1]
//输出: 8
//
//
// 说明:
//你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
//

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  位运算：异或 XOR
  时间复杂度：O(n)
  空间复杂度：O(1)
 */

var missingNumber = function(nums) {
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }
  return missing
};


function f() {
  let obj = {
    key1: {
      a: 1,
      b: 2,
    },
    key2: {
      c: 3,
      d: 4,
    }
  }
  console.log(Object.entries(obj));
  for (let i of Object.entries(obj)) {
    console.log(i[0]);
  }
}
f()
