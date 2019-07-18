//给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。
//
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
//
//
// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
//
//
// 示例:
//
// 输入: [1,2,3,0,2]
//输出: 3
//解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
//

/**
 * @param {number[]} prices
 * @return {number}
 */

// 时间复杂度：O(n)，n是天数
// 空间复杂度：O(n)

var maxProfit1 = function(prices) {
  const n = prices.length
  if (!n) return 0
  let dp = Array.from({length: n}, () => [0, 0, 0])
  dp[0][0] = -prices[0]
  for (let i = 1; i < n; i++) {
    // 买入
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    // 冷冻
    dp[i][1] = Math.max(dp[i - 1][1], Math.max(dp[i - 1][0], dp[i - 1][2]))
    // 卖出
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] + prices[i])
  }
  return dp[n - 1][2]
};



var maxProfit2 = function(prices) {
  const n = prices.length
  if (!n) return 0;
  let mr = [-prices[0]] // mr[i]表示最后一次操作为买入的最大收益
  let mc = [0] // 卖出
  let ld = [0] // 冷冻
  for (let i = 1;i < prices.length; i++){
    mr[i] = Math.max(mr[i - 1], ld[i - 1] - prices[i]); // 前一次冷冻，本次买入或本次不操作，维持之前的买入
    mc[i] = Math.max(mc[i - 1], mr[i - 1] + prices[i]); // 前一次的最后操作是卖出或本次卖出
    ld[i] = mc[i - 1];
  }
  return Math.max(mr[n - 1], mc[n - 1], ld[n - 1]);
};


// 每次 sell 之后要等一天才能继续交易。
// 只要把这个买入的时候不是 i - 1 而是 i - 2 的特点融入状态转移方程即可
// 时间复杂度：O(n)
// 空间复杂度：O(1)
var maxProfit3 = function(prices) {
  let n = prices.length
  if (!n) return 0
  let dp_i_0 = 0
  let dp_i_1 = -prices[0]
  let dp_pre_0 = 0 // 代表 dp[i-2][0]
  for (let i = 1; i < prices.length; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }
  return dp_i_0
};


const prices = [1,3,10,1,12]
console.log(maxProfit3(prices));
