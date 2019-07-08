//给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
//
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
//
//
//
//
//
// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
//
//
//
//
//
// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
//
//
//
// 示例:
//
// 输入: [2,1,5,6,2,3]
//输出: 10
//

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []
  stack.push(-1)
  let maxArea = 0
  // 全部元素遍历
  for (let i = 0; i < heights.length; i++) {
    // 如果栈内有元素，则比较是否比要插入的元素大
    // 若大，则求出栈顶元素本身的面积
    // 一直往左循环，在被弹出的范围内：左边（小）加上右边元素（大）的和就是宽
    // 然后把最小的元素下标压入栈
    while (stack.peek() != -1 && heights[stack.peek()] >= heights[i]) {
      maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack.peek() - 1))
    }
    stack.push(i)
  }
  // 全部元素执行完后如果栈里还有元素则需要继续求面积并比较面积
  while (stack.peek() != -1) {
    maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - stack.peek() - 1))
  }
  return maxArea
};
// 拓展查找栈顶元素方法
Array.prototype.peek = function () {
  return this[this.length - 1]
}
