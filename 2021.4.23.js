// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 示例 1:

// 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出: 8
// 解释: 能够达到的最大利润:  
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// 注意:

// 0 < prices.length <= 50000.
// 0 < prices[i] < 50000.
// 0 <= fee < 50000.

// const maxProfit = (prices, fee) => {
//     const hold = new Array(prices.length + 1).fill(0)
//     const unhold = new Array(prices.length + 1).fill(0)

//     hold[1] = -prices[0]
//     for(let i = 2; i <= prices.length; i++) {
//         hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i - 1])
//         unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i - 1] - fee)
//     }

//     return unhold[prices.length]
// }

// console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))



// 只能进行两次股票交易

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6
// 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
// 示例 2：

// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 示例 3：

// 输入：prices = [7,6,4,3,1] 
// 输出：0 
// 解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
// 示例 4：

// 输入：prices = [1]
// 输出：0
//  

// 提示：

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 105

// 多维状态的

// const maxProfit = prices => {
//     if(!prices || !prices.length || prices.length === 1) {
//         return 0
//     }

//     let hold1 = new Array(prices.length + 1).fill(0)
//     let canBuy1 = new Array(prices.length + 1).fill(0)
//     let hold2 = new Array(prices.length + 1).fill(0)
//     let canBuy2 = new Array(prices.length + 1).fill(0)

//     // 初始值
//     hold1[1] = -prices[0]
//     canBuy1[1] = 0
//     hold2[1] = -prices[0]
//     canBuy2[1] = 0
    
//     for(let i = 2; i <= prices.length; i++) {
//         hold1[i] = Math.max(hold1[i - 1], -prices[i - 1])
//         canBuy1[i] = Math.max(canBuy1[i - 1], hold1[i - 1] + prices[i - 1])
//         hold2[i] = Math.max(hold2[i - 1], canBuy1[i - 1] - prices[i - 1])
//         canBuy2[i] = Math.max(canBuy2[i - 1], hold2[i - 1] + prices[i - 1])
//     }

//     return canBuy2[prices.length]
// }

// const maxProfit = prices => {
//     if(!prices || !prices.length || prices.length === 1) {
//         return 0
//     }

//     let hold1 = -prices[0]
//     let canBuy1 = 0
//     let hold2 = -prices[0]
//     let canBuy2 = 0

//     for(let i = 1; i < prices.length; i++) {
//         let prevHold1 = hold1
//         let prevCanBuy1 = canBuy1
//         let prevHold2 = hold2
//         let prevCanBuy2 = canBuy2
//         hold1 = Math.max(prevHold1, - prices[i])
//         canBuy1 = Math.max(prevCanBuy1, prevHold1 + prices[i])
//         hold2 = Math.max(prevHold2, prevCanBuy1 - prices[i])
//         canBuy2 = Math.max(prevCanBuy2, prevHold2 + prices[i])
//     }

//     return canBuy2
// }


// const maxProfit = prices => {
//     if(!prices || !prices.length || prices.length === 1) {
//         return 0
//     }

//     let dp = new Array(prices.length + 1).fill([])
//     dp = dp.map(item => new Array(5).fill(0)) // 5 个状态

//     // 0 => idle
//     // 1 => hold1
//     // 2 => canBuy1
//     // 3 => hold2
//     // 4 => canBuy2

//     dp[1][1] = dp[1][3] = - prices[0]
//     for(let i = 2; i <= prices.length; i++) {
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i - 1])
//         dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i - 1])
//         dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i - 1])
//         dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i - 1])
//     }

//     return dp[prices.length][4]
// }

// console.log('maxProfit', maxProfit([3,3,5,0,0,3,1,4]))



// 进行k次股票交易
// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

//  

// 示例 1：

// 输入：k = 2, prices = [2,4,1]
// 输出：2
// 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
// 示例 2：

// 输入：k = 2, prices = [3,2,6,5,0,3]
// 输出：7
// 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
//      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

// const maxProfit = (k, prices) => {
//     if(!prices || !prices.length || prices.length === 1) {
//         return 0
//     }

//     let statusNum = 2 * k + 1
//     let dp = new Array(prices.length + 1).fill([])
//     dp = dp.map(item => new Array(statusNum).fill(0))

//     // 初始化
//     for(let i = 0; i < statusNum; i++) {
//         i % 2 && (dp[1][i] = -prices[0])
//     }

//     for(let i = 2; i <= prices.length; i++) {
//         for(let j = 1; j < statusNum; j++) {
//             if(j%2) {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i - 1])
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i - 1])
//             }
//         }
//     }

//     return dp[prices.length][statusNum - 1]
// }



// 删除字符串操作
// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

// 示例：

// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
//  

// 提示：

// 给定单词的长度不超过500。
// 给定单词中的字符只含有小写字母


// 转化成求最长公共子序列
// const minDistance = (word1, word2) => {
//     let w1Len = word1.length
//     let w2Len = word2.length

//     let dp = new Array(w1Len + 1).fill([])
//     dp = dp.map(item => new Array(w2Len + 1).fill(0))

//     for(let i = 1; i <= w1Len; i++) {
//         for(let j = 1; j <= w2Len; j++) {
//             if(word1[i - 1] === word2[j - 1]) {
//                 dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
//             }
//         }
//     }

//     return w1Len + w2Len - 2 * dp[w1Len][w2Len]
// }

// console.log('最小步数', minDistance("sea", "eat"))


// 字符串编辑

// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符
//  

// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
//  

// 提示：

// 0 <= word1.length, word2.length <= 500
// word1 和 word2 由小写英文字母组成

const minDistance = (word1, word2) => {
    let w1Len = word1.length
    let w2Len = word2.length

    let dp = new Array(w1Len + 1).fill([])
    dp = dp.map(item => new Array(w2Len + 1).fill(0))

    for(let i = 0; i <= w1Len; i++) {
        dp[i][0] = i
    }

    for(let j = 0; j <= w2Len; j++) {
        dp[0][j] = j
    }

    for(let i = 1; i <= w1Len; i++) {
        for(let j = 1;  j <= w2Len; j++) {
            if(word1[i - 1] === word2[j - 1]) {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1])
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
            }
        }
    }

    return dp[w1Len][w2Len]
}

// console.log('查看最小距离', minDistance("intention", "execution"))


// 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：

// Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
// Paste (粘贴) : 你可以粘贴你上一次复制的字符。
// 给定一个数字 n 。你需要使用最少的操作次数，在记事本中打印出恰好 n 个 'A'。输出能够打印出 n 个 'A' 的最少操作次数。

// 示例 1:

// 输入: 3
// 输出: 3
// 解释:
// 最初, 我们只有一个字符 'A'。
// 第 1 步, 我们使用 Copy All 操作。
// 第 2 步, 我们使用 Paste 操作来获得 'AA'。
// 第 3 步, 我们使用 Paste 操作来获得 'AAA'。
// 说明:

// n 的取值范围是 [1, 1000] 。

// 最少操作步骤
const minSteps = n => {
    if(!n || n === 1) {
        return 0
    }

    let dp = new Array(n + 1).fill(0)
    dp[1] = 0
    for(let i = 2; i <= n; i++) {
        dp[i] = i
        const boundray = Math.floor(Math.sqrt(i))
        for(let j = 2; j <= boundray; j++) {
            if(i%j === 0) {
                dp[i] = dp[j] + dp[i/j]
            }
        }
    }

    return dp[n]
}

console.log(minSteps(9))