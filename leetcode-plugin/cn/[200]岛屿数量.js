//给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
//
// 示例 1:
//
// 输入:
//11110
//11010
//11000
//00000
//
//输出: 1
//
//
// 示例 2:
//
// 输入:
//11000
//11000
//00100
//00011
//
//输出: 3
//
//

/**
 * @param {character[][]} grid
 * @return {number}
 */

// 思路：
// 双层嵌套遍历表格
// 深度遍历4个角（上下左右）：
  // 1. 遇到0退出，count加1
  // 2. 遇到1变为0（避免重复遍历）并继续深度遍历
// 返回count

// 时间复杂度：O(h*n*m)，h是dfs高度，n是网格的width/height，去掉常数为O(n*n)
// 空间复杂度：O(h*n*m)，去掉常数为O(n*n)
var numIslands = function(grid) {
  let count = 0
  let n = grid.length
  if (!n) return 0
  let m = grid[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        dfsIsland(grid, i, j)
        count++
      }
    }
  }
  return count

  function dfsIsland(grid, i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return
    grid[i][j] = '0'
    dfsIsland(grid, i + 1, j)
    dfsIsland(grid,  i - 1, j)
    dfsIsland(grid, i, j + 1)
    dfsIsland(grid, i, j - 1)
  }
};
