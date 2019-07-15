/*
  动态规划：一个模型三个特征
  1. 一个模型：多阶段决策最优解模型，我们一般是用动态规划来解决最优问题。而解决问题的过程，需要经历多个决策阶段。
  每个决策阶段都对应着一组状态。然后我们寻找一组决策序列，经过这组决策序列，能够产生最终期望求解的最优值。
  2. 三个特征：
    最优子结构：原问题的最优解包括了子问题的最优解。反过来即通过子问题的最优解求得原问题的最优解
    无后效性：
      a. 推导第 i 阶段的解只考虑怎么第 i-1 阶段的状态，不考虑第 i-2 及其之前的状态；
      b. 第 i 阶段的状态确定后，不受第 i+1 及其之后的状态影响
    重复子问题：不同的决策序列，到达某个相同的阶段，可能会产生重复的状态
  两种解题思路总结：
  1. 状态转移表法
  2. 状态转移方程
 */


// 状态转移表法
// 时间复杂度： O(n * n)
// 空间复杂度：O(n * n)
function minDistDP1(matrix, n) {
  let state = Array.from({length: n}, () => [])
  let sum = 0
  for (let j = 0; j < n; j++) { // 初始化第一行数据
    sum += matrix[0][j]
    state[0][j] = sum
  }
  sum = 0
  for (let i = 0; i < n; i++) { // 初始化第一列数据
    sum += matrix[i][0]
    state[i][0] = sum
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      state[i][j] = matrix[i][j] + Math.min(state[i - 1][j], state[i][j - 1])
    }
  }
  return state[n - 1][n - 1]
}



// 状态转移方程法
// 时间复杂度： O(n * n)
// 空间复杂度：O(n * n)
function minDistDP2(matrix, n) {
  let state = Array.from({length: n}, () => [])
  return minDist(n - 1, n - 1)

  function minDist(i, j) {
    if (!i && !j) {
      state[i][j] = matrix[0][0]
      return matrix[0][0]
    }
    if (state[i][j] > 0) return state[i][j]
    let minLeft = Infinity
    if (j - 1 >= 0) {
      minLeft = minDist(i, j - 1)
    }
    let minUp = Infinity
    if (i - 1 >= 0) {
      minUp = minDist(i - 1, j)
    }
    let currMinDist = matrix[i][j] + Math.min(minLeft, minUp)
    state[i][j] = currMinDist
    return currMinDist
  }
}



let matrix = [[1, 3, 5, 9], [2, 1, 3, 4], [5, 2, 6, 7], [6, 8, 4, 3]]
console.log(minDistDP2(matrix, 4));



// 经典应用：
// 单词纠错功能（字符串编辑距离）
function lwstDP(a, n, b, m) {
  let minDist = Array.from({length: n}, () => [])
  for (let j = 0; j < m; j++) { // 初始化第  0 行：a[0..0] 与 b[0..j] 的编辑距离
    if (a[0] == b[j]) minDist[0][j] = j
    else if (j != 0) minDist[0][j] = minDist[0][j - 1] + 1
    else minDist[0][j] = 1
  }
  for (let i = 0; i < n; i++) { // 初始化第 0 列：a[0..i] 与 b[0..0] 的编辑距离
    if (a[i] == b[0]) minDist[i][0] = i
    else if (i > 0) minDist[i][0] = minDist[i - 1][0] + 1
    else minDist[i][0] = 1
  }
  for (let i = 1; i < n; i++) { // 按行填表
    for (let j = 1; j < m; j++) {
      if (a[i] != b[j]) {
        minDist[i][j] = Math.min(minDist[i - 1][j] + 1,
          minDist[i][j - 1] + 1,
          minDist[i - 1][j - 1] + 1)
      } else {
        minDist[i][j] = Math.min(
          minDist[i - 1][j] + 1,
          minDist[i][j - 1] + 1,
          minDist[i - 1][j - 1])
      }
    }
    return minDist[n - 1][m - 1]
  }
}



