//给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
//
// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
//
// 示例 1:
//
// 输入: 1->2->3->4->5->NULL
//输出: 1->3->5->2->4->NULL
//
//
// 示例 2:
//
// 输入: 2->1->3->5->6->4->7->NULL
//输出: 2->3->6->7->1->5->4->NULL
//
// 说明:
//
//
// 应当保持奇数节点和偶数节点的相对顺序。
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
//
// Related Topics 链表



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
  分别记录奇数链表、偶数链表，然后将偶数链表接在奇数链表后面
  时间复杂度： O(n) 。总共有 n 个节点，我们每个遍历一次。
  空间复杂度： O(1) 。我们只需要 4 个指针。
 */
var oddEvenList = function(head) {
  if (head === null) return null
  // 4个指针
  let [odd, even] = [head, head.next]
  let evenHead = even
  while (even !== null && even.next !== null) {
    // 指针循环
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  // 将偶数链表接在奇数链表后面
  odd.next = evenHead
  return head
};
//leetcode submit region end(Prohibit modification and deletion)
