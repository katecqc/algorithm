//在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
//
// 示例 1:
//
// 输入: 4->2->1->3
//输出: 1->2->3->4
//
//
// 示例 2:
//
// 输入: -1->5->3->4->0
//输出: -1->0->3->4->5
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
 * @return {ListNode}
 */

// 归并排序

var sortList = function(head) {
  if (!head || !head.next) return head
  // step1: 将链表分成2半
  let [prev, slow, fast] = [null, head, head]
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null
  // step2: 左右部分分别排序
  let l1 = sortList(head)
  let l2 = sortList(slow)
  // step3: 合并子结果
  return merge(l1, l2)

  function merge(l1, l2) {
    let l = new ListNode(0)
    let p = l
    // 左右链表分别排序
    while (l1 && l2) {
      if (l1.val < l2.val) {
        p.next = l1
        l1 = l1.next
      } else {
        p.next = l2
        l2 = l2.next
      }
      p = p.next
    }
    // 剩下的部分加到尾部
    if (l1) {
      p.next = l1
    }
    if (l2) {
      p.next = l2
    }
    return l.next
  }
};
