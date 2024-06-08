// const rob = nums => {
//     let dp = new Array(nums.length + 1).fill(0)
//     dp[0] = 0
//     dp[1] = nums[0]
//     for(let i = 2; i <= nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
//     }

//     return dp[nums.length]
// }


// const NumArray = nums => {
//     let preSum = new Array(nums.length + 1).fill(0)
//     for(let i = 1; i <= nums.length; i++) {
//         preSum[i] = nums[i - 1] + preSum[i - 1]
//     }
//     this.preSum = preSum
// }

// NumArray.prototype.sumRange = (i, j) => {
//     console.log('查看this.preSum', this.preSum)
//     return this.preSum[j + 1] - this.preSum[i]
// }


// class NumArray {
//     constructor(nums) {
//         let preSum = new Array(nums.length + 1).fill(0)
//         for(let i = 1; i <= nums.length; i++) {
//             preSum[i] = nums[i - 1] + preSum[i - 1]
//         }
//         this.preSum = preSum
//     }

//     sumRange(i, j) {
//         return this.preSum[j + 1] - this.preSum[i]
//     }
// }

// j = 2
// i = 1

// let a = new NumArray([-2, 0, 3, -5, 2, -1])
// console.log('res', a.sumRange(1, 2))




// 如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，以下数列为等差数列:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// 以下数列不是等差数列。

// 1, 1, 2, 5, 7

//  

// 数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

// 如果满足以下条件，则称子数组(P, Q)为等差数组：

// 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

// 函数要返回数组 A 中所有为等差数组的子数组个数。

//  

// 示例:

// A = [1, 2, 3, 4]

// 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。


// 等差数列划分

// 对于一个数列 所有等差子数组长度为从3 到 n -1


const numberOfArithmeticSlices = nums => {
    let dp = 0
    let sum = 0
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp++
            sum += dp
        } else {
            dp = 0
        }
    }
    return sum
}



const integerBreak = n => {
    if(n === 0) {
        return 0
    }

    if(n === 1 || n === 2) {
        return 1
    }

    let dp = new Array(n + 1).fill(0)
    dp[0] = dp[1] = dp[2] = 1

    for(let i = 3; i <= n; i++) {
        for(let j = 1; j <= Math.floor(i / 2); j++) {
            const f1 = j
            const f2 = i - j
            dp[i] = Math.max(dp[i], f1 * f2, f1 * dp[f2], dp[f1] * f2, dp[f1] * dp[f2])
        }
    }

    return dp[n]
}


// 定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

//  

// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9

var numSquares = function(n) {
    if(n === 0) {
        return 0
    }

    if(n === 1) {
        return 1
    }

    let factors = []
    for(let i = 0; i < Math.floor(n/2); i++) {
        factors[i] = (i + 1) * (i + 1)
    }

    let dp = new Array(n + 1).fill(Number.MAX_VALUE)
    dp[0] = 0
    dp[1] = 1
    for(let factor of factors) {
        for(let i = factor; i <= n; i++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - factor])
        }
    }
    return dp[n]
};


// 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

// "AAJF" ，将消息分组为 (1 1 10 6)
// "KJF" ，将消息分组为 (11 10 6)
// 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

// 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

// 题目数据保证答案肯定是一个 32 位 的整数。

//  

// 示例 1：

// 输入：s = "12"
// 输出：2
// 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
// 示例 2：

// 输入：s = "226"
// 输出：3
// 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
// 示例 3：

// 输入：s = "0"
// 输出：0
// 解释：没有字符映射到以 0 开头的数字。
// 含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
// 由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
// 示例 4：

// 输入：s = "06"
// 输出：0
// 解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。

var numDecodings = function(s) {
    let dict = []
    for(let i = 0; i < 26; i++) {
        dict.push(`${i + 1}`)
    }

    let dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= s.length; i++) {
        for(let d of dict) {
            const dLen = d.length
            if(i >= dLen) {
                const sSlice = s.slice(i - dLen , i)
                if(d === sSlice) {
                    dp[i] += dp[i - dLen]
                }
            }
        }
    }

    return dp[s.length]
}



console.log('查看结果', numDecodings("226"))

