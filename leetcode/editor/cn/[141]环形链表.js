//给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
//
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
//输出：true
//解释：链表中有一个环，其尾部连接到第二个节点。
//
//
//
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
//输出：true
//解释：链表中有一个环，其尾部连接到第一个节点。
//
//
//
//
// 示例 3：
//
// 输入：head = [1], pos = -1
//输出：false
//解释：链表中没有环。
//
//
//
//
//
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？
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
  双指针之快慢指针
  慢指针一次只走1步，快指针一次走2步：
  1. 有环的话会相遇（快慢指针指向的链表相等）
  2. 没环的话快指针会先走到 null
  时间复杂度：O(N)，分析如下：
  假设2种情况：
  不存在环：快指针走到了尾部，取决列表的长度，为O(n)
  存在环：O(K + N)，即O(n)，分析如下：
  慢指针分为2部分：
  a. 非环形部分为n，为列表长度
  b. 两个指针都在环形区域中：考虑两个在环形赛道上的运动员 - 快跑者每次移动两步而慢跑者每次只移动一步。
    其速度的差值为 1，因此需要经过 二者之间距离 / 速度差值 次循环后，快跑者可以追上慢跑者。
    这个距离几乎就是 环形部分长度 K 且速度差值为 1，我们得出这样的结论 迭代次数 = 近似于环形部分长度K

  空间复杂度：只有快慢指针，为O(1)
 */

var hasCycle = function(head) {
  if (!head || !head.next) return false
  let [slow, fast] = [head, head.next]
  while (slow !== fast) {
    if (!fast || !fast.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
};
