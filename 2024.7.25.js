function maxProfit(prices) {
    // write code here
    let dp = new Array(prices.length).fill(0).map(_ => new Array(2).fill(0));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    // dp[i][0] 第i天买入 dp[i][1]第i天卖出
    for(let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][1]);
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][0]);
    }

    console.log(dp);

    return dp[prices.length - 1][1];
}

console.log(maxProfit([8,9,2,5,4,7,1]));
function maxProfit(prices) {
    let res = 0
    for(let i = 0; i < prices.length; i++) {
        for(let j = i; j < prices.length; j++) {
            res = Math.max(res, prices[j] - prices[i]);
        }
    }
    return res;
}
console.log(maxProfit([8,9,2,5,4,7,1]));
console.log(maxProfit([2,4,1]));
