//写一个程序，输出从 1 到 n 数字的字符串表示。
//
// 1. 如果 n 是3的倍数，输出“Fizz”；
//
// 2. 如果 n 是5的倍数，输出“Buzz”；
//
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
//
// 示例：
//
// n = 15,
//
//返回:
//[
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
//]
//
//

/**
 * @param {number} n
 * @return {string[]}
 */

/*
  时间复杂度：O(n)
  空间复杂度：O(1)
 */

var fizzBuzz = function(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    let item = ''
    if (i % 3 && i % 5) {
      result.push(i.toString())
      continue
    }
    if (i % 3 === 0) {
      item = 'Fizz'
    }
    if (i % 5 === 0) {
      item = item + 'Buzz'
    }
    result.push(item)
  }
  return result
};
const n = 15
console.log(fizzBuzz(n));
