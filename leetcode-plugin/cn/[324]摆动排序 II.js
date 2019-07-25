//给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
//
// 示例 1:
//
// 输入: nums = [1, 5, 1, 1, 6, 4]
//输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
//
// 示例 2:
//
// 输入: nums = [1, 3, 2, 2, 3, 1]
//输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
//
// 说明:
//你可以假设所有输入都会得到有效的结果。
//
// 进阶:
//你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
  The three-part partition algorithm will partition a list such as [1, 2, 3, 1, 2, 3] as [3, 3, 2, 2, 1, 1].
  The re-wiring just maps that partitioning so that the larger half appears at odd indices and the smaller half appears at even indices.
  So the partitioned list is mapped to indices [1, 3, 5, 0, 2, 4].
  Note that the index values at the middle are as far away from each other as possible - repeated medians can cause problems
  so it's best to put them as far apart as possible. For example, my solution to this problem failed on [4,5,5,6]
  because I picked values in the index order [0, 2, 1, 3] instead of [1, 3, 0, 2], which put the 2 repeated medians (5) next to each other.
  由三部分组成的分区算法将[1,2,3,1,2,3]这样的列表划分为[3,3,2,2,1,1]。
  重新连接只是映射分区，所以较大的一半出现在奇数索引，较小的一半出现在偶数索引（或者比中间值大的放在偶数，比中间值小的放在奇数）。
  因此，分区列表映射到索引[1,3,5,0,2,4]。请注意，中间的索引值之间的距离越远越好——重复的中间值可能会导致问题，所以最好将它们尽可能地分开。
  例如，我对这个问题的解决方案在[4,5,5,6]上失败了，因为我选择的值的索引顺序是[0,2,1,3]，而不是[1,3,0,2]，这使得两个重复的中值(5)相邻。
 */

var wiggleSort = function(nums) {
  let n = nums.length;
  const median = findNthEle(nums, Math.floor( (n + 1) / 2));
  console.log(nums);
  let i = 0;
  let left = 0; // 低指针，记录奇数位当前放置到哪个位置
  let right = n - 1; // 高指针，记录偶数位当前放置到哪个位置
  while (i <= right) {
    let curr = nums[newIndex(i, n)]
    if (curr > median) { // 比中间值大，放在奇数位
      swap(nums, newIndex(left++, n), newIndex(i++, n));
    } else if (curr < median) { // 比中间值小，放在偶数位
      // 中间的索引值之间的距离越远越好(重复的中间值可能会导致问题)，因此从数组最后往数组最前填充
      swap(nums, newIndex(right--, n), newIndex(i, n));
    } else {
      // 遇到中间值跳过
      i++;
    }
  }
  console.log(nums);
};

function findNthEle(nums, k){
  let n = nums.length
  return recurse(0, n - 1)

  function recurse(left, right) {
    if (left <= right) {
      let p = partition(left, right)
      if (p + 1 === k) {
        return nums[p]
      } else if (p + 1 > k) {
        return recurse(left, p - 1)
      } else if (p + 1 < k) {
        return recurse(p + 1, right)
      }
    }
  }

  function partition(left, right) {
    let i = left
    let pivotVal = nums[right]
    for (let j = left; j < right; j++) {
      if (nums[j] < pivotVal) {
        swap(nums, j, i)
        i++
      }
    }
    swap(nums, i, right)
    return i
  }
}

function swap(list, left, right){
  let temp = list[left];
  list[left] = list[right];
  list[right] = temp;
}

function newIndex(index, n){
  return (1 + 2 * index) % (n | 1);
}

const nums = [1,3,2,2,2,1,1,3,1,1,2]
wiggleSort(nums)
