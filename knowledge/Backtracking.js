/*
  回溯算法：先选一条路走，走不通再回来走另一条路
  实现：采用递归
*/

/*
  八皇后问题：如何在一张国际象棋的棋盘上，摆放8个皇后，使其任意两个皇后互相不受攻击（避开对角线、横/纵向）。
  解决八皇后问题有两个层面：
  1、找出一种正确摆放方式，也就是深度优先遍历
  2、找出全部的正确摆放方式，也就是广度优先遍历
 */

// 八皇后全部的正确摆放方式：

// 全局或成员变量，下标表示行，值表示 queen 存储在哪一列
let n = 8
let solutionNum = 0
let result = new Array(n)
function cal8queen(row) {
  if (row == n) { // 8行棋子都放置好了，输出结果
    printQueens(result)
    return // 退出递归
  }
  for (let column = 0; column < n; column++) { // 每一行都有8种放法
    if (isOk(row, column)) { // 有些放法不满足要求
      result[row] = column // 第 row 行的棋子放到了 column 列
      cal8queen(row + 1) // 考察下一行
    }
  }
}
function isOk(row, column) { // 判断 row 行 column 列放置是否合适
  let leftup = column - 1
  let rightup = column + 1
  for (let i = row - 1; i >= 0; i--) { // 逐行往上考察每一行
    if (result[i] == column) return false // 第 i 行的 column 列有棋子了吗？
    if (leftup >= 0) { // 考察左上对角线：第i行 leftup 列有棋子吗？
      if (result[i] == leftup) return false
    }
    if (rightup < n) { // 考察右上对角线：第 i 行 rightup 列有棋子吗？
      if (result[i] == rightup) return false
    }
    leftup--
    rightup++
  }
  return true
}
function printQueens(result) { // 打印出一个二维矩阵
  let formatResult = []
  console.log('方案' + solutionNum++ + '：')
  for (let row = 0; row < n; row++) {
    formatResult[row] = ''
    for (let column = 0; column < n; column++) {
      if (result[row] == column) {
        formatResult[row] += 'Q '
      } else {
        formatResult[row] += '* '
      }
    }
    console.log(formatResult[row]);
  }
}

// cal8queen(0)




/*
  0-1背包问题：0-1 背包问题有很多变体，我这里介绍一种比较基础的。我们有一个背包，背包总的承载重量是 Wkg。
  现在我们有 n 个物品，每个物品的重量不等，并且不可分割。我们现在期望选择几件物品，装载到背包中。
  在不超过背包所能装载重量的前提下，如何让背包中物品的总重量最大？
 */
let maxW = 0 // 存储背包中物品总重量的最大值
// cw 表示当前已经装进去的物品的重量和
// i 表示考察到哪个物品了
// w 背包重量
// items 表示每个物品的重量
// n 表示物品个数
function knapsack(i, cw, items, n, w) {
  if (cw == w || i == n) { // 装满了或者已经考察完所有的物品退出
    if (cw > maxW) maxW = cw
    return
  }
  knapsack(i + 1, cw, items, n, w)
  if (cw + items[i] <= w) {
    knapsack(i + 1, cw + items[i], items, n, w)
  }
}

const weightList = [1, 13, 25, 7, 9, 11, 12, 35, 18, 20]
// knapsack(0, 0, weightList, 10, 100)
// console.log(maxW);



/*
  正则表达式：
  我们依次考察正则表达式中的每个字符，
  当是非通配符时，我们就直接跟文本的字符进行匹配，如果相同，则继续往下处理；如果不同，则回溯。
  如果遇到特殊字符的时候，我们就有多种处理方式了，也就是所谓的岔路口，
  比如“*”有多种匹配方案，可以匹配任意个文本串中的字符，我们就先随意的选择一种匹配方案，然后继续考察剩下的字符。
  如果中途发现无法继续匹配下去了，我们就回到这个岔路口，重新选择一种匹配方案，然后再继续匹配剩下的字符。
 */

class Pattern {
  constructor(pattern, plen) {
    this.matched = false
    this.pattern = pattern // 正则表达式
    this.plen = plen // 正则表达式长度
  }
  match(text, tlen) {
    rmatch(0, 0, text, tlen)
    return this.matched
  }
  rmatch(ti, pj, text, tlen) {
    if (this.matched) return // 如果已经匹配，就退出递归
    if (pj == this.plen) { // 正则表达是结尾了
      if (ti == tlen) this.matched = true
      return
    }
    if (this.pattern[pj] == '*') { // * 匹配任意个字符
      for (let k = 0; k < tlen - ti; k++) {
        this.rmatch(ti + k, pj + 1, text, tlen) // 跳过当前正则表达符匹配的任意个字符，到达下一个正则表达符
      }
    } else if (this.pattern[pj] == '?') { // ? 匹配 0 个或 1 个字符
      this.rmatch(ti, pj + 1, text, tlen) // 跳过当前正则表达符匹配的 0 个字符，到达下一个正则表达符
      this.rmatch(ti + 1, pj + 1, text, tlen) // 跳过当前正则表达符匹配的 1 个字符，到达下一个正则表达符
    } else if (ti < tlen && this.pattern[pj] == text[ti]) { // 纯字符匹配才行
      this.rmatch(ti + 1, pj + 1, text, tlen)
    }
  }
}
