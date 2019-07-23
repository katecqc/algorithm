/*
  归并排序：分治思想，由下到上，先处理子问题，然后再合并。
  实现方式：递归
  时间复杂度：O(nlogN)
  空间复杂度：O(n)。因为合并的过程是一个非原地排序的、稳定的排序算法，但合并的过程中每合并完两个数组就会释放当前内存。
  因此单次最多有一个合并操作，最多占用O(n)的额外空间。
 */

function mergeSort(arr) {
  // 当任意数组分解到只有一个元素时返回
  if (arr.length <= 1) return arr
  // 找到中间值
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle) // 分割数组
  const right = arr.slice(middle)
  // 递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right))
}

function mergeArr(left, right) {
  let temp = []
  let leftIndex = 0
  let rightIndex = 0
  // 判断2个数组中元素大小，依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  // 合并多余数组
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 100))
  i++
}
const res = mergeSort(testArr)
console.log(res);
