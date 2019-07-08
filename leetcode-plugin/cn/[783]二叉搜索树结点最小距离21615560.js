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
let ans = Infinity
let prev = Infinity
var minDiffInBST = function(root) {
    recurse(root)
    return ans
};

function recurse(root) {
    if (!root) return
    recurse(root.left)
    if (prev != Infinity) {
        ans = Math.min(ans, root.val - prev)
    }
    prev = root.val
    recurse(root.right)
}
//total_testcases:45
//total_correct:1
//input_formatted:[1,0,48,null,null,12,49,null,null,null,null]
//expected_output:1
//code_output:-6
