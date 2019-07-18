//给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
//
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
//
// 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//
// 示例 1:
//
// 输入: [2,4,1], k = 2
//输出: 2
//解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
//
//
// 示例 2:
//
// 输入: [3,2,6,5,0,3], k = 2
//输出: 7
//解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
//
//

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let n = prices.length
  if (n <= 1 || !k) return 0
  if (k > n / 2) return kInfinty(prices)
  return kAny(k, prices)

  function kInfinty(prices) {
    let dp_i_0 = 0
    let dp_i_1 = -prices[0]
    for (let i = 1; i < n; i++) {
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
      dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
    }
    return dp_i_0
  }

  function kAny(max_k, prices) {
    let dp = Array.from({length: n}, () => {
      return Array.from({length: max_k + 1}, () => {
        return Array.from({length: 2}, () => 0)
      })
    })
    for (let i = 1; i <= max_k; i++) {
      dp[0][i][1] = -prices[0] //第一天只要持有股票不管交易多少次（k从1开始）
    }
    for (let i = 1; i < n; i++) {
      for (let j = max_k; j >= 1; j--) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
      }
    }
    return dp[n - 1][max_k][0]
  }
};

const prices = [1,2]
const k = 1
console.log(maxProfit(k, prices));
