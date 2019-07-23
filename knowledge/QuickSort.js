/*
  快速排序：分治、分区思想，由上到下。
  实现：递归
  时间复杂度：平均 O(nlogN)，最坏 O(n^2)
  空间复杂度：O(1)，因为应用了选择排序，所以是一个原地排序的、不稳定的排序算法。
 */

function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = right
    let partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

// 获取 pivot 交换完后的index
function partition(arr, pivot, left, right) {
  const pivotVal = arr[pivot]
  let startIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]
      startIndex++
    }
  }
  [arr[startIndex], arr[pivot]] = [arr[pivot], arr[startIndex]]
  return startIndex
}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 100))
  i++
}
console.log('unsort', testArr);
quickSort(testArr, 0, testArr.length - 1)
console.log('sort', testArr);



/*
  快排应用例题1：寻找数据流中第K大的数
 */
function kthNum(arr, k) {
  const len = arr.length
  if (k > len) return -1
  let p = partitionK(arr, 0, len - 1)
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partitionK(arr, 0, p - 1)
    } else {
      p = partitionK(arr, p + 1, len - 1)
    }
  }
  return arr[p]
}

function partitionK(arr, start, end) {
  let i = start
  let pivot = arr[end]
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i += 1
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]]
  return i
}

console.log(kthNum(testArr, 4));
