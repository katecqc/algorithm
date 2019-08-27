//给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
//
// 例如，给出 n = 3，生成结果为：
//
// [
//  "((()))",
//  "(()())",
//  "(())()",
//  "()(())",
//  "()()()"
//]
//
//

/**
 * @param {number} n
 * @return {string[]}
 */


/*
  回溯算法
 */

var generateParenthesis = function(n) {
  let result = []
  backtrack(result, '', 0, 0, n)
  return result

  function backtrack(result, cur, leftNum, rightNum, max) {
    console.log(cur, leftNum, rightNum);
    if (cur.length === 2 * max) {
      result.push(cur)
      return
    }
    if (leftNum < max) {
      backtrack(result, cur + '(', leftNum + 1, rightNum, max) // 这一层返回则往下继续执行，判断下方的条件，如true则继续递归
    }
    if (rightNum < leftNum) {
      backtrack(result, cur + ')', leftNum, rightNum + 1, max) // 这是最后一步，当满足一个cur之后，则一直回到rightNum = 0
    }
  }
};

const n = 3
console.log(generateParenthesis(n));
