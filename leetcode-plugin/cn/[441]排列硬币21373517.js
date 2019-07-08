/**
 * @param {number} n
 * @return {number}
 */
// 二分查找变体：查找最后一个小于等于给定值的元素
var arrangeCoins = function(n) {
    let low = 0
    let high = n
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (mid * (mid + 1) / 2 <= n) {
            if (mid == n || mid + 1 > n) return mid
            else {
              low = mid + 1
            }
        } else {
          high = mid - 1
        }
    }
    return high
};
//runtime:116 ms
//memory:36.1 MB
