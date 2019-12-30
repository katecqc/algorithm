//给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
//
// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。
//
// 例如:
//
//
//输入:
//A = [ 1, 2]
//B = [-2,-1]
//C = [-1, 2]
//D = [ 0, 2]
//
//输出:
//2
//
//解释:
//两个元组如下:
//1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
//2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
//
// Related Topics 哈希表 二分查找



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
/*
  公式：A[i]+B[j]-C[k]-D[l] = 0
  分析：题目说0 <= N <= 500
  1.如果采用暴力解法O(n^4)
    500^4=62500000000 这样计算机承受不了
  2.利用查找表将D放入查找表中 遍历A、B、C在查找表中找是否存在-A、-B、-C
    这样的话时间复杂度为O(n^3)
    500^3=125000000还是太大了
  3.如果能将其化解为O(n^2)的算法
    500^2=250000这样是可以接受的
    故只需要将C+D的每一种可能放入查找表（map）
    这样我们只需要寻找这个表里面有没有-A-B就行了
  实现：
  将数组C，D 任意组合的和存入查找表中， key是和，value 是出现的次数。
  记录A，B 任意组合的和的负值，然后在查找表中查找是否有对应的值，时间复杂度：O(n^2)
 */
var fourSumCount = function(A, B, C, D) {
  let tmpMap = new Map()
  let sum = 0
  let count = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      sum = A[i] + B[j]
      if (tmpMap.has(sum)) {
        tmpMap.set(sum, tmpMap.get(sum) + 1)
      } else {
        tmpMap.set(sum, 1)
      }
    }
  }
  sum = 0
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      sum = -C[i] - D[j]
      if (tmpMap.has(sum)) {
        count += tmpMap.get(sum)
      }
    }
  }
  return count
};
//leetcode submit region end(Prohibit modification and deletion)
fourSumCount([1,2], [-2,-1], [-1,2], [0,2])
