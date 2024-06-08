// 资料
// https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md#0-1-%E8%83%8C%E5%8C%85
// https://leetcode-cn.com/problems/combination-sum-iv/solution/xi-wang-yong-yi-chong-gui-lu-gao-ding-bei-bao-wen-/


// 目标和

// 示例：

// 输入：nums: [1, 1, 1, 1, 1], S: 3
// 输出：5
// 解释：

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// 一共有5种方法让最终目标和为3。 

// 提示：

// 数组非空，且长度不会超过 20 。
// 初始的数组的和不会超过 1000 。
// 保证返回的最终结果能被 32 位整数存下。

// const findTargetSumWays = (nums, target) => {
//     let sum = nums.reduce((prev, cur) => prev + cur, 0)
//     if(sum < target || (sum + target) % 2) {
//         return 0
//     }

//     let newTarget = (sum + target) / 2
//     let dp = new Array(newTarget + 1).fill(0)
//     dp[0] = 1
//     for(num of nums) {
//         for(let j = newTarget; j >= num; j--) {
//             dp[j] += num
//         }
//     }

//     return dp[newTarget]
// }

// const nums = [1,0]
// const target = 1

// console.log('this is a test', findTargetSumWays(nums, target))

// 零钱兑换
// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

// 示例 1:

// 输入: amount = 5, coins = [1, 2, 5]
// 输出: 4
// 解释: 有四种方式可以凑成总金额:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// 示例 2:

// 输入: amount = 3, coins = [2]
// 输出: 0
// 解释: 只用面额2的硬币不能凑成总金额3。
// 示例 3:

// 输入: amount = 10, coins = [10] 
// 输出: 1
//  

// 注意:

// 你可以假设：

// 0 <= amount (总金额) <= 5000
// 1 <= coin (硬币面额) <= 5000
// 硬币种类不超过 500 种
// 结果符合 32 位符号整数

// const func = (coins, amount) => {
//     if(coins.reduce((prev, cur)=> prev + cur, 0) < amount) {
//         return 0
//     }

//     let dp = new Array(amount + 1).fill(0)
//     dp[0] = 1

//     for(coin of coins) {
//         for(let i = coin; i <= amount; i++) {
//             dp[i] += dp[i - coin]
//         }
//     }

//     return dp[amount]
// }

// const change = (amount, coins) => {
//     let dp = new Array(amount + 1).fill(0)
//     dp[0] = 1
//     for(let coin of coins) {
//         for(let i = coin; i <= amount; i++) {
//             dp[i] += dp[i - coin]
//         }
//     }
//     return dp[amount]
// }
 

// console.log('res', change(5, [1, 2, 5]))
// console.log('there is a test')

// const wordBreak = (s, wordDict) => {
//     let dp = new Array(s.length + 1).fill(false)
//     dp[0] = true
//     for(let word of wordDict) {
//         const wordLen = word.length
//         console.log('--', wordLen)
//         for(let i = wordLen; i <= s.length; i++) {
//             const wordSlice = s.slice(i - wordLen, i)
//             console.log('---', wordSlice)
//             if(wordSlice === word) {
//                 dp[i] = dp[i] || dp[i - wordLen]
//             }
//         }   
//         console.log('-----', dp)
//     }
//     console.log('-----', dp)
//     return dp[s.length]
// }

const wordBreak = (s, wordDict) => {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for(let i = 1; i < dp.length; i++) {
        for(let word of wordDict) {
            const wordLen = word.length
            if(i >= wordLen) {
                const wordSlice = s.slice(i - wordLen , i)
                if(word === wordSlice) {
                    dp[i] = dp[i] || dp[i - wordLen]
                }
            }
        }
    }
    return dp[s.length]
}

console.log(wordBreak( "leetcode", ["leet", "code"]))