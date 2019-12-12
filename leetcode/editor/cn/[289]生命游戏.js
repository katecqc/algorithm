//根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。
//
// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
//
//
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
//
//
// 根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
//
// 示例:
//
// 输入:
//[
//  [0,1,0],
//  [0,0,1],
//  [1,1,1],
//  [0,0,0]
//]
//输出:
//[
//  [0,0,0],
//  [1,0,1],
//  [0,1,1],
//  [0,1,0]
//]
//
// 进阶:
//
//
// 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
// 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
//
//

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


/*
  时间复杂度：O(m * n)
  空间复杂度：O(1)
 */

var gameOfLife = function(board) {
  if (!board || !board.length) return
  let [m, n] = [board.length, board[0].length]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let lives = liveNeighbors(board, m, n, i, j)
      // presume default value: every 2nd bit is 0. (dead unknown: 00, 01)
      // So we only need to care about when will the 2nd bit become 1
      if (board[i][j] === 1 && lives >= 2 && lives <= 3) {
        board[i][j] = 3 // Make the 2nd bit 1: 01 ---> 11
      }
      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 2 // Make the 2nd bit 1: 00 ---> 10
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1 // Get the 2nd state. 2 >> 1 = 1, 3 >> 1 = 1, 1 >> 1 = 0
    }
  }

  function liveNeighbors(board, m, n, i, j) {
    let lives = 0
    for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
      for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
        lives += board[x][y] & 1 // depend on 1st state : 2(00) & 1 = 0, 3(01) & 1 = 1, 1(unknown 1) & 1 = 1, 0(unknown 0) & 1 = 0 (odd = 1, even = 0)
      }
    }
    lives -= board[i][j] & 1 // remove myself
    return lives
  }
};


const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
console.log(gameOfLife(board));
