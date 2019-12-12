//在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
//
// 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
//
// 示例 1:
//
// 输入: [3,2,3,null,3,null,1]
//
//     3
//    / \
//   2   3
//    \   \
//     3   1
//
//输出: 7
//解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
//
// 示例 2:
//
// 输入: [3,4,5,1,3,null,1]
//
//     3
//    / \
//   4   5
//  / \   \
// 1   3   1
//
//输出: 9
//解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
//
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
 * @return {number}
 */

// 时间复杂度：O(n)。只遍历一遍所有节点
// 空间复杂度：O(n)。递归栈的调用，如果树极度不平衡，空间复杂度为O(n)；如果树平衡，为O(logN)。

var rob = function(root) {
  let res = doRob(root)
  return Math.max(res[0], res[1])

  function doRob(root) {
    let res = [0, 0]
    if (!root) return res
    let left = doRob(root.left)
    let right = doRob(root.right)
    // 不包含根节点，取左右子树的最大值相加
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 包含根节点，取两个子树不包含根节点的最大值与根节点相加
    res[1] = left[0] + right[0] + root.val
    return res
  }
};

const root = [3,2,3,null,3,null,1]
console.log(rob(root));
