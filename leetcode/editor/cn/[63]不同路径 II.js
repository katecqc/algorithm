//一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
//
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
//
//
//
// 网格中的障碍物和空位置分别用 1 和 0 来表示。
//
// 说明：m 和 n 的值均不超过 100。
//
// 示例 1:
//
// 输入:
//[
//  [0,0,0],
//  [0,1,0],
//  [0,0,0]
//]
//输出: 2
//解释:
//3x3 网格的正中间有一个障碍物。
//从左上角到右下角一共有 2 条不同的路径：
//1. 向右 -> 向右 -> 向下 -> 向下
//2. 向下 -> 向下 -> 向右 -> 向右
//
//

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */


// 时间复杂度：O(M * N) 。长方形网格的大小是 M * N，每个格点恰好访问一次。
// 空间复杂度：O(1)。利用 obstacleGrid 作为 DP 数组，因此不需要额外的空间。

var uniquePathsWithObstacles = function(obstacleGrid) {
  // 无元素或第一格被挡住则无路可走
  if (!obstacleGrid.length || obstacleGrid[0][0]) return 0
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  obstacleGrid[0][0] = 1
  for (let i = 1; i < m; i++) { // 第一行，判断障碍物和前面的路有没有被堵住（因为第一行只能从左到右）
    obstacleGrid[i][0] = (!obstacleGrid[i][0] && obstacleGrid[i - 1][0]) ? 1 : 0
  }
  for (let j = 1; j < n; j++) { // 第一列，判断障碍物和前面的路有没有被堵住（因为第一列只能从上到下）
    obstacleGrid[0][j] = (!obstacleGrid[0][j] && obstacleGrid[0][j - 1]) ? 1 : 0
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
  }
  return obstacleGrid[m - 1][n - 1]
};

const obstacleGrid = [[1, 0]]
console.log(uniquePathsWithObstacles(obstacleGrid));
