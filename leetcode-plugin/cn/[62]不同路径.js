//一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
//
// 问总共有多少条不同的路径？
//
//
//
// 例如，上图是一个7 x 3 的网格。有多少可能的路径？
//
// 说明：m 和 n 的值均不超过 100。
//
// 示例 1:
//
// 输入: m = 3, n = 2
//输出: 3
//解释:
//从左上角开始，总共有 3 条路径可以到达右下角。
//1. 向右 -> 向右 -> 向下
//2. 向右 -> 向下 -> 向右
//3. 向下 -> 向右 -> 向右
//
//
// 示例 2:
//
// 输入: m = 7, n = 3
//输出: 28
//

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 时间复杂度：O(m * n)
// 空间复杂度：O(m * n)

var uniquePaths1 = function(m, n) { // m 行，n 列
  if (!m || !n) return 0
  let dp = Array.from({length: m}, () => Array.from({length: n}, () => 0))
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let j = 0; j < n; j++) dp[0][j] = 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};



// 时间复杂度：O(m * n)
// 空间复杂度：O(n)

var uniquePaths2 = function(m, n) { // m 行，n 列
  if (!m || !n) return 0
  let curr = new Array(n)
  curr.fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      curr[j] += curr[j - 1]
    }
  }
  return curr[n - 1]
};

const m = 6
const n = 4
console.log(uniquePaths1(m, n));
