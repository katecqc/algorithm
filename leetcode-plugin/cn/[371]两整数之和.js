//不使用运算符 + 和 - ，计算两整数 a 、b 之和。
//
// 示例 1:
//
// 输入: a = 1, b = 2
//输出: 3
//
//
// 示例 2:
//
// 输入: a = -2, b = 3
//输出: 1
//

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let and = a & b
  let eot = a ^ b
  and = and << 1
  while (and & eot) { // 获得进位结果
    const newAnd = and & eot
    eot = and ^ eot
    and = newAnd << 1
  }
  return and ^ eot // 获得不进位结果
};

const [a, b] = [30, 40]
console.log(getSum(a, b));
