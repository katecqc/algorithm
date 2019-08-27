//给定一个二叉树，返回它的中序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [1,3,2]
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


/*
  递归：
  时间复杂度：O(n)，递归函数：T(n) = 2*T(n/2)+1
  空间复杂度：最坏情况下O(n)，平均情况为O(logn)
 */

var inorderTraversal2 = function(root) {
  let res = []
  dfs(root, res)
  return res

  function dfs(cur, result) {
    if (!cur) return
    if (cur.left) {
      dfs(cur.left, result)
    }
    result.push(cur.val)
    if (cur.right) {
      dfs(cur.right, result)
    }
  }
};


/*
  迭代法：
  时间复杂度：O(n)
  空间复杂度：O(n)
 */

var inorderTraversal = function(root) {
  let [stack, res, cur] = [[], [], root]
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}
