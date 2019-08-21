//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
//输出: true
//
//
// 示例 2:
//
// 输入: "()[]{}"
//输出: true
//
//
// 示例 3:
//
// 输入: "(]"
//输出: false
//
//
// 示例 4:
//
// 输入: "([)]"
//输出: false
//
//
// 示例 5:
//
// 输入: "{[]}"
//输出: true
//

/**
 * @param {string} s
 * @return {boolean}
 */


/*
  栈：将左边的元素压入栈，将右边元素与栈顶元素比较，如果能配成一对则出栈，最后判断栈是否为空
  时间复杂度：O(n)，n是字符的长度
  空间复杂度：O(n)，额外占用了栈空间和固定长度的map
 */

// 暴力解法：不好拓展，重复代码太多
var isValid2 = function(s) {
  const targetList = ['(', ')', '{', '}', '[', ']']
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const stackPop = stack[stack.length - 1]
    if (stackPop === targetList[0] && s[i] === targetList[1]) {
      stack.pop()
      continue
    }
    if (stackPop === targetList[2] && s[i] === targetList[3]) {
      stack.pop()
      continue
    }
    if (stackPop === targetList[4] && s[i] === targetList[5]) {
      stack.pop()
      continue
    }
    stack.push(s[i])
  }
  return !stack.length
};


// map解法：好拓展，新增类型只需要增加map的值
var isValid = function(s) {
  const map = {')': '(', '}': '{', ']': '['}
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const stackPop = stack[stack.length - 1]
    if (stack.length && map[s[i]] === stackPop) {
      stack.pop()
      continue
    }
    stack.push(s[i])
  }
  return !stack.length
};

const s = "(]"
console.log(isValid(s));
