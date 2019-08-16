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

/*
  位运算：
  1. 异或（^）：不进位加法，两者中有且仅有一个1则为1；
  2. 与（&）：进位加法，两者中都为1才为1；
  3. 两个1相加向左移动1位
  4. 左移后再次将移动后的值和异或（^）的值进行与（&）运算
  5. 如果第4步再次得到1，则循环执行1、2、3、4的步骤，直到与（&）运算不再得到1
  6. 再将两者进行异或（^）运算将已进位位置的值改为0（获得不进位的结果）
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
