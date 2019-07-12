/*
  回溯算法：先选一条路走，走不通再回来走另一条路
  实现：采用递归
*/

// 八皇后
// 全局或成员变量，下标表示行，值表示 queen 存储在哪一列
let result = new Array(8)
function cal8queen(row) {
  if (row == 8) { // 8行棋子都放置好了，输出结果
    printQueens(result)
    return // 退出递归
  }
  for (let column = 0; column < 8; column++) { // 每一行都有8种放法
    if (isOk(row, column)) { // 当放法满足要求
      result[row] = column // 第 row 行的棋子放到了 column 列
      cal8queen(row + 1) // 考察下一行
    }
  }
}
function isOk(row, column) { // 判断 row 行 column 列放置是否合适
  let leftup = column - 1
  let rightup = column + 1
  for (let i = row + 1; i >= 0; i--) { // 逐行往上考察每一行
    if (result[i] == column) return false // 第 i 行的 column 列有棋子了吗？
    if (leftup >= 0) { // 考察左上对角线：第i行 leftup 列有棋子吗？
      if (result[i] == leftup) return false
    }
    if (rightup < 8) { // 考察右上对角线：第 i 行 rightup 列有棋子吗？
      if (result[i] == rightup) return false
    }
    leftup--
    rightup++
  }
  return true
}
function printQueens(result) { // 打印出一个二维矩阵
  let formatResult = []
  for (let row = 0; row < 8; row++) {
    formatResult[row] = ''
    for (let column = 0; column < 8; column++) {
      if (result[row] == column) {
        formatResult[row] += 'Q '
      } else {
        formatResult[row] += '* '
      }
    }
    console.log(formatResult[row]);
  }
  console.log('\n')
}

cal8queen(0)
