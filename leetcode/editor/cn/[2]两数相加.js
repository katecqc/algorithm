//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807
//
// Related Topics 链表 数学



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0) // 初始化哑节点
  let [p, q, curr] = [l1, l2, result]
  let carry = 0
  while (p !== null || q !== null) {
    // 长度不对等，短的一方补0
    let x = p !== null ? p.val : 0
    let y = q !== null ? q.val : 0
    let sum = x + y + carry
    // 向下取整得进位
    carry = Math.floor(sum / 10)
    // 取余得个位数
    curr.next = new ListNode(sum % 10)
    // 循环
    curr = curr.next
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }
  // 判断最终位(如：9+1)是否还需进位
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return result.next
};
//leetcode submit region end(Prohibit modification and deletion)
