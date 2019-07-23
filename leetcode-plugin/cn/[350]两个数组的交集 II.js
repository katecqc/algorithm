//给定两个数组，编写一个函数来计算它们的交集。
//
// 示例 1:
//
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
//输出: [2,2]
//
//
// 示例 2:
//
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出: [4,9]
//
// 说明：
//
//
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
//
//
// 进阶:
//
//
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
//
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Hash表：
// 时间复杂度：O(n + m)，n 是 数组1的长度，m是数组2的长度
// 空间复杂度：O(n + q)，q是结果数组的长度

var intersect = function(nums1, nums2) {
  let res = []
  let hasMap = new Map()
  for (let i = 0; i < nums1.length; i++) {
    let num = 1
    if (hasMap.has(nums1[i])) {
      num = hasMap.get(nums1[i]) + 1
    }
    hasMap.set(nums1[i], num)
  }
  for (let j = 0; j < nums2.length; j++) {
    let num = hasMap.get(nums2[j])
    if (num && num > 0) {
      res.push(nums2[j])
      hasMap.set(nums2[j], num - 1)
    }
  }
  return res
};



// 双指针
// 时间复杂度：O(nlongN) 或者 O(n ^ 3)，js 的 sort 使用的是插入排序和快速排序结合的排序算法：
// 1. 数组长度不超过10时，使用插入排序(n^2)。
// 2. 长度超过10使用快速排序(nlongN)。在数组较短时插入排序更有效率。
// 空间复杂度：O(m)，m是交集结果的长度

var intersect2 = function(nums1, nums2) {
  let res = []
  let left = 0
  let right = 0
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      res.push(nums1[left])
      left++
      right++
    } else if (nums1[left] < nums2[right]) {
      left++
    } else {
      right++
    }
  }
  return res
};


const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]
console.log(intersect2(nums1, nums2));
