//给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。
//
// 示例 1:
//
// 输入: [[0, 30],[5, 10],[15, 20]]
//输出: 2
//
// 示例 2:
//
// 输入: [[7,10],[2,4]]
//输出: 1
//

/**
 * @param {number[][]} intervals
 * @return {number}
 */

// 时间复杂度：O(nlogN)，排序花费时间
// 空间复杂度：O(n)，开始、结束2个数组

var minMeetingRooms = function(intervals) {
  let n = intervals.length
  if (!n) return 0
  let start = []
  let end = []
  for (let i = 0; i < n; i++) {
    start[i] = intervals[i][0]
    end[i] = intervals[i][1]
  }
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)
  let startPointer = 0
  let endPointer = 0
  let usedRooms = 0
  while (startPointer < n) {
    if (start[startPointer] >= end[endPointer]) {
      usedRooms -= 1
      endPointer += 1
    }
    usedRooms += 1
    startPointer += 1
  }
  return usedRooms
};

const intervals = [[12,13],[8,14],[6,9]]
console.log(minMeetingRooms(intervals));
