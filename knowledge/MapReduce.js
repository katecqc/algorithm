// 分治算法

let num = 0
function count(a, n) {
  num = 0
  mergeSortCounting(a, 0, n - 1)
  return num
}

function mergeSortCounting(a, p, r) {
  console.log(p, r);
  if (p >= r) return
  // 中间值向下取整
  let q = Math.floor((p + r) / 2)
  mergeSortCounting(a, p, q)
  mergeSortCounting(a, q + 1, r)
  merge(a, p, q, r)
}

function merge(a, p, q, r) {
  let i = p
  let j = q + 1
  let k = 0
  // tmp 是正在对比的数组
  let tmp = new Array(parseInt(r - p + 1))
  while (i <= q && j <= r) {
    if (a[i] <= a[j]) {
      tmp[k++] = a[i++]
    } else {
      // 逆序对：数组中前元素与后面的元素对比，前>后的2个元素组成1个逆序对
      // 逆序对数量就是归并排序中子数组的左数组元素a[i]比右数组元素a[j]大的个数
      // 因 a[j] > a[i]，则 p-q 之间的元素都比 a[j] 大，p-q 之间的元素个数即为答案
      num += (q - i + 1)
      tmp[k++] = a[j++]
    }
  }
  while (i <= q) { // 处理剩下的
    tmp[k++] = a[i++]
  }
  while (j <= r) { // 处理剩下的
    tmp[k++] = a[j++]
  }
  for (i = 0; i <= r - p; i++) { // 从 tmp 拷贝回 a
    a[p + i] = tmp[i]
  }
  // console.log(tmp, a);
}

let a = [2, 4, 3, 1, 5, 6]
let n = a.length
console.log(count(a, n));
