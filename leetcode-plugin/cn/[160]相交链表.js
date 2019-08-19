//编写一个程序，找到两个单链表相交的起始节点。
//
// 如下面的两个链表：
//
//
//
// 在节点 c1 开始相交。
//
//
//
// 示例 1：
//
//
//
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
//输出：Reference of the node with value = 8
//输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
//
//
//
//
// 示例 2：
//
//
//
// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
//输出：Reference of the node with value = 2
//输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
//
//
//
//
// 示例 3：
//
//
//
// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
//输出：null
//输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
//解释：这两个链表不相交，因此返回 null。
//
//
//
//
// 注意：
//
//
// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
//
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
  双指针：
  1. 用快慢指针先消除两个链表的长度差，最终同时到达相同长度的位置
  方法：
  a. 同时创建两个指针在两个链表前进（A链短B链长）；
  b. A的指针结束后接着从B的Head开始（B指针仍照常进行）；
  c. B的指针结束后接着从A的Head开始（A指针仍照常进行）；
  2. 在1的过程中会找到一个两链相等的长度位，继续一起往前进，找到首个值相等的位置，即从该位置到达结束的值都是相等的

  时间复杂度：O(m + n)
  空间复杂度：O(1)
 */

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  let currentA = headA
  let currentB = headB
  while (currentA !== currentB) {
    currentA = currentA ? currentA.next : headB
    currentB = currentB ? currentB.next : headA
  }
  return currentA
};


/*
  哈希表：
  时间复杂度：O(m + n)
  空间复杂度：O(m)  或 O(n)
 */

var getIntersectionNode2 = function(headA, headB) {
  if (!headA || !headB) return null
  let hash = new Set()
  let currentA = headA
  let currentB = headB
  while (currentA) {
    hash.add(currentA)
    currentA = currentA.next
  }
  while (currentB)  {
    if (hash.has(currentB)) return currentB
    currentB = currentB.next
  }
  return null
};
