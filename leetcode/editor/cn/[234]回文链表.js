//请判断一个链表是否为回文链表。
//
// 示例 1:
//
// 输入: 1->2
//输出: false
//
// 示例 2:
//
// 输入: 1->2->2->1
//输出: true
//
//
// 进阶：
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
  时间复杂度：O(n)，每次循环都走n/2，加起来就是O(n)
  空间复杂度：O(1)，变量都是常量
 */

var isPalindrome = function(head) {
  if (!head || !head.next) return true
  let [slow, fast, pre, prepre] = [head, head.next, null, null]
  while (fast && fast.next) { // fast是slow的2倍，当fast走到终点的时候就是中间位置
    pre = slow
    slow = slow.next
    fast = fast.next.next
    pre.next = prepre
    prepre = pre // 翻转前半部分链表
  }
  let p2 = slow.next
  slow.next = pre
  let p1 = !fast ? slow.next : slow
  while (p1) {
    if (p1.val !== p2.val) return false
    p1 = p1.next
    p2 = p2.next
  }
  return true
};
