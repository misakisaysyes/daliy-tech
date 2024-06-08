// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 注意:

// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
// 示例 1:

// 输入: [1, 5, 11, 5]

// 输出: true

// 解释: 数组可以分割成 [1, 5, 5] 和 [11].
//  

// 示例 2:

// 输入: [1, 2, 3, 5]

// 输出: false

// 解释: 数组不能分割成两个元素和相等的子集.

// const func = nums => {
//     let sum = nums.reduce((prev, cur) => prev + cur, 0)
//     if(sum % 2) {
//         return false
//     }
//     sum /= 2

//     let dp = new Array(sum + 1).fill(false)
//     dp[0] = true
//     for(let num of nums) {
//         for(let i = sum; i >= num; i-- ) {
//             dp[i] = dp[i] || dp[i - num]
//         }
//     }

//     return dp[sum]
// }

// const testArr = [1, 2, 3, 1]

// console.log('测试', func(testArr))


// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

//  

// 示例 1：

// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
// 示例 2：

// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
//  

// 提示：

// 1 <= strs.length <= 600
// 1 <= strs[i].length <= 100
// strs[i] 仅由 '0' 和 '1' 组成
// 1 <= m, n <= 100

// const func = (strs, m, n) => {
//     let dp = new Array(m + 1).fill([])
//     dp = dp.map(item => new Array(n + 1).fill(0))

//     for(let str of strs) {
//         let _m = 0
//         let _n = 0
//         for(let s of str) {
//             if(s === '0') {
//                 _m++
//             } else {
//                 _n++
//             }
//         } 
//         for(let i = m; i >=_m; i--) {
//             for(let j = n; j >=_n; j--) {
//                 dp[i][j] = Math.max(dp[i][j], dp[i - _m][j - _n] + 1)
//             }
//         }
//     }

//     return dp[m][n]
// }

// const strs = ["10", "0001", "111001", "1", "0"]
// const m = 5
// const n = 3

// console.log('字符串组合测试')
// console.log(func(strs, m, n))


// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

//  

// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1
// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0
// 示例 4：

// 输入：coins = [1], amount = 1
// 输出：1
// 示例 5：

// 输入：coins = [1], amount = 2
// 输出：2
//  

// 提示：

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

const func = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
    dp[0] = 0
    for(let coin of coins) {
        for(let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    if(dp[amount] === Number.MAX_VALUE) {
        return -1
    }
    return dp[amount]
}

const coins = [1, 2, 5]
const amount = 11
console.log(func(coins, amount))


