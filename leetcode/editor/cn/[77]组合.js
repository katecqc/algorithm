//给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
//
// 示例:
//
// 输入: n = 4, k = 2
//输出:
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//]
//

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// 时间复杂度：O(kC℅)，其中 C℅ = N! / (N - k)!k! 是要构成的组合数。 add/pop 操作使用常数时间，唯一耗费时间的是将长度为 k 的组合添加到输出中。
// 空间复杂度：O(C℅)，用于保存全部组合数以输出。

// 一个 for 循环，添加，递归，删除，很经典的回溯框架了。在这里发现了一个优化方法。for 循环里 i 从 start 到 n，其实没必要到 n。
// 比如，n = 5，k = 4，temp.size( ) == 1，此时代表我们还需要（4 - 1 = 3）个数字，
// 如果 i = 4 的话，以后最多把 4 和 5 加入到 temp 中，而此时 temp.size() 才等于 1 + 2 = 3，不够 4 个，所以 i 没必要等于 4，i 循环到 3 就足够了。
// 所以 for 循环的结束条件可以改成， i <= n - ( k - temp.size ( ) ) + 1，k - temp.size ( ) 代表我们还需要的数字个数。因为我们最后取到了 n，所以还要加 1。

var combine = function(n, k) {
  let res = new Set()
  dfs(1, new Set()) // 不能传 [] 过去，因为是传址，更改任何一个值都会把res的所有数组同步更改
  return [...res]

  function dfs(first, [...current]) {
    if (current.length == k) {
      res.add(current)
      return
    }
    for (let i = first; i <= n - (k - current.length) + 1; i++) {
      current.push(i)
      dfs(i + 1, current)
      current.pop()
    }
  }
};

const n = 4
const k = 2
console.log(combine(n, k));
