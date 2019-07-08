/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let ans = 0
function lowestCommonAncestor (root, p, q) {
  recurseTree(root, p, q)
  return ans
}
function recurseTree (currentNode, p, q) {
  if (!currentNode) return false
  let left = recurseTree(currentNode.left, p, q) ? 1 : 0
  let right = recurseTree(currentNode.right, p, q) ? 1 : 0
  let mid = currentNode === p || currentNode === q ? 1 : 0
  if (mid + left + right >= 2) {
    ans = currentNode
  }
  return (mid + left + right > 0)
}
//runtime:124 ms
//memory:41.8 MB
