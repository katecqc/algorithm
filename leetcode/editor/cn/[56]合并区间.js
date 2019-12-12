//给出一个区间的集合，请合并所有重叠的区间。
//
// 示例 1:
//
// 输入: [[1,3],[2,6],[8,10],[15,18]]
//输出: [[1,6],[8,10],[15,18]]
//解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//
//
// 示例 2:
//
// 输入: [[1,4],[4,5]]
//输出: [[1,5]]
//解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
//

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 时间复杂度：排序、遍历花费的时间 O(nlogN + n)，n 是数组的长度，两者相加取大的值，即为 O(nlogN)
// 空间复杂度：O(n)，结果集

var merge = function(intervals) {
  let n = intervals.length
  if (!n) return []
  // 先对区间进行排序
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let res = [prev]
  for (let curr of intervals) {
    console.log(curr[0], prev[1]);
    // 当前区间与前区间重合，更新前区间的结束值，取两者的最大值
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1])
    } else {
      // 当前区间没有重合，直接将数组 push 到结果中，并更新相对的 prev 值
      res.push(curr)
      prev = curr
    }
  }
  return res
};


const intervals = [[12,13],[8,14],[6,9]]
console.log(merge(intervals));
