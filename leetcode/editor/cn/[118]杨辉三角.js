//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
//
//
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
//
// 示例:
//
// 输入: 5
//输出:
//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//]
//

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 时间复杂度：O(n^2)
// 空间复杂度：O(n^2)

var generate = function(numRows) {
  if (!numRows) return []
  let result = Array.from({length: numRows}, () => [])
  result[0][0] = 1
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      if (i - 1 >= 0 && j - 1 >= 0 && result[i - 1][j]) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
      } else {
        result[i][j] = 1
      }
    }
  }
  return result
};

const numRows = 5
console.log(generate(numRows));
