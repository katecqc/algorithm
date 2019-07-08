//设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
//
// 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。
//
// 示例:
//
//
//int k = 3;
//int[] arr = [4,5,8,2];
//KthLargest kthLargest = new KthLargest(3, arr);
//kthLargest.add(3);   // returns 4
//kthLargest.add(5);   // returns 5
//kthLargest.add(10);  // returns 5
//kthLargest.add(9);   // returns 8
//kthLargest.add(4);   // returns 8
//
//
// 说明:
//你可以假设 nums 的长度≥ k-1 且k ≥ 1。
//

// js无优先队列
// 引用 https://github.com/jeantimex/javascript-problems-and-solutions/blob/master/src/common/priority-queue.js
class PriorityQueue {
  constructor({ comparator = (a, b) => a - b, initialValues = [] } = {}) {
    this.comparator = comparator;
    this.data = initialValues;
    this.heapify();
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  clear() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toArray() {
    return this.data.slice(0).sort(this.comparator);
  }

  heapify() {
    if (this.data.length > 0) {
      for (let i = 1; i < this.data.length; i++) {
        this.bubbleUp(i);
      }
    }
  }

  bubbleUp(pos) {
    while (pos > 0) {
      let parent = (pos - 1) >>> 1;
      if (this.comparator(this.data[pos], this.data[parent]) < 0) {
        const temp = this.data[parent];
        this.data[parent] = this.data[pos];
        this.data[pos] = temp;
        pos = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(pos) {
    const last = this.data.length - 1;
    while (true) {
      let left = (pos << 1) + 1;
      let right = left + 1;
      let minIndex = pos;
      if (left <= last && this.comparator(this.data[left], this.data[minIndex]) < 0) {
        minIndex = left;
      }
      if (right <= last && this.comparator(this.data[right], this.data[minIndex]) < 0) {
        minIndex = right;
      }
      if (minIndex !== pos) {
        const temp = this.data[minIndex];
        this.data[minIndex] = this.data[pos];
        this.data[pos] = temp;
        pos = minIndex;
      } else {
        break;
      }
    }
  }
}

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.pq = new PriorityQueue({ initialValues: nums });
    this.k = k;
    // 一直删除队头元素，直到剩下k个元素，则第k大元素即队头元素
    while (this.pq.size() > this.k) {
      this.pq.poll();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    // 容错，如果出了边界，则插入元素进行排列，最后直接输出队头元素
    if (this.pq.size() < this.k) {
      this.pq.offer(val);
    } else if (val > this.pq.peek()) {
      // 1. 如果val大于队头元素，则将队头元素出列，再插入该元素进行排列
      // 2. 如果val小于队头元素，则k大元素还是队头元素
      // 上述两种最后都是输出队头元素（即第k大元素）
      this.pq.poll();
      this.pq.offer(val);
    }
    return this.pq.peek();
  }
}

let k = 3;
let arr = [4,5,8,2];
let kthLargest = new KthLargest(2, arr);
console.log(kthLargest.add(3), kthLargest.add(5), kthLargest.add(10), kthLargest.add(9), kthLargest.add(4));   // returns 4 5 5 8 8

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
