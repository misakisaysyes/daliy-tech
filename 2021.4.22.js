// 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
//  

// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//  

// 进阶：

// 你可以设计时间复杂度为 O(n2) 的解决方案吗？
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?

const lengthOfLIS = nums => {
    let dp = new Array(nums.length + 1).fill(1)
    let maxDp = 1
    for(let i = 2; i <= nums.length; i++) {
        for(j = i - 1; j > 0; j--) {
            if(nums[i - 1] > nums[j - 1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxDp = Math.max(maxDp, dp[i])
    }
    return maxDp
}


// 一组整数对能构成最长链

// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

//  

// 示例：

// 输入：[[1,2], [2,3], [3,4]]
// 输出：2
// 解释：最长的数对链是 [1,2] -> [3,4]
//  

// 提示：

// 给出数对的个数在 [1, 1000] 范围内。

const findLongestChain = pairs => {
    pairs.sort((a, b) => a[0] - b[0])
    let dp = new Array(pairs.length + 1).fill(1)
    for(let i = 2; i <= pairs.length; i++) {
        for(let j = i - 1; j > 0; j--) {
            const curPair = pairs[i - 1]
            const prevPair = pairs[j - 1]
            if(prevPair[1] < curPair[0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp.reduce((prev, cur) => Math.max(prev, cur), 0)
}


// 最长摆动子序列

// 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。第一个差（如果存在的话）可能是正数或负数。少于两个元素的序列也是摆动序列。

// 例如， [1,7,4,9,2,5] 是一个摆动序列，因为差值 (6,-3,5,-7,3) 是正负交替出现的。相反, [1,4,7,2,5] 和 [1,7,4,5,5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。

// 给定一个整数序列，返回作为摆动序列的最长子序列的长度。 通过从原始序列中删除一些（也可以不删除）元素来获得子序列，剩下的元素保持其原始顺序。

// 示例 1:

// 输入: [1,7,4,9,2,5]
// 输出: 6 
// 解释: 整个序列均为摆动序列。
// 示例 2:

// 输入: [1,17,5,10,13,15,10,5,16,8]
// 输出: 7
// 解释: 这个序列包含几个长度为 7 摆动序列，其中一个可为[1,17,10,13,10,16,8]。
// 示例 3:

// 输入: [1,2,3,4,5,6,7,8,9]
// 输出: 2
// 进阶:
// 你能否用 O(n) 时间复杂度完成此题?

const wiggleMaxLength = nums => {
    let down = new Array(nums.length + 1).fill(0)
    let up = new Array(nums.length + 1).fill(0)

    down[1] = 1
    up[1] = 1
    for(let i = 2; i <= nums.length; i++) {
        if(nums[i - 1] - nums[i - 2] > 0) {
            up[i] = 1 + down[i - 1]
            down[i] = down[i - 1]
            continue
        }

        if(nums[i - 1] - nums[i - 2] < 0) {
            down[i] = 1 + up[i - 1]
            up[i] = up[i - 1]
            continue
        }

        down[i] = down[i - 1]
        up[i] = up[i - 1]
    }

    return Math.max(down[nums.length], up[nums.length])
}



// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。


// 示例 1：

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：

// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

const canPartition = nums => {
    let sum = nums.reduce((prev, cur) => prev + cur, 0)
    if(sum % 2) {
        return false
    }

    sum /= 2

    let dp = new Array(sum + 1).fill(false)
    dp[0] = true
    for(let num of nums) {
        for(let i = sum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num]
        }
    }

    return dp[sum]
}



// 474. 一和零
// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

 

// 示例 1：

// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
// 示例 2：

// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
 

// 提示：

// 1 <= strs.length <= 600
// 1 <= strs[i].length <= 100
// strs[i] 仅由 '0' 和 '1' 组成
// 1 <= m, n <= 100

const findMaxForm = (strs, m, n) => {
    let dp = new Array(m + 1).fill([])
    dp = dp.map(item => new Array(n + 1).fill(0))
    for(str of strs) {
        let _m = 0
        let _n = 0
        for(let i = 0; i < str.length; i++) {
            if(str[i] === '0') { _m++ }
            if(str[i] === '1') { _n++ }
        }

        for(let i = m; i >= _m; i--) {
            for(let j = n; j >= _n; j--) {   
                dp[i][j] = Math.max(dp[i][j], dp[i - _m][j - _n] + 1)
            }
        }
    }
    return dp[m][n]
}


// 最长公共子序列
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

//  

// 示例 1：

// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 示例 2：

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。
// 示例 3：

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 。
//  

// 提示：

// 1 <= text1.length, text2.length <= 1000
// text1 和 text2 仅由小写英文字符组成。


const longestCommonSubsequence = (text1, text2) => {
    let dp = new Array(text1.length + 1).fill([])
    dp = dp.map(item => new Array(text2.length + 1).fill(0))

    for(let i = 1; i <= text1.length; i++) {
        for(let j = 1; j <= text2.length; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
            } else {
                dp[i][j] = Math.max(dp[i][j], dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1])
            }
        }
    }

    return dp[text1.length][text2.length]
}


// 最佳买卖股票时期含冷冻期
// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 示例:

// 输入: [1,2,3,0,2]
// 输出: 3 
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]


// const maxProfit = prices => {
//     if(!prices || prices.length === 1) {
//         return 0
//     }

//     let hold = new Array(prices.length + 1).fill(0)
//     let unhold = new Array(prices.length + 1).fill(0)
//     hold[0] = -prices[0]
//     unhold[0] = 0
//     for(let i = 1; i <= prices.length; i++) {
//         // 关于冷冻期的处理
//         if(i === 1) {
//             hold[i] = Math.max(hold[i - 1], - prices[0])
//         } else {
//             hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i - 1])
//         }
//         unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i - 1])
//     }

//     return unhold[prices.length]
// }

const maxProfit = prices => {
    if(!prices || prices.length === 1) {
        return 0
    }

    let hold = new Array(prices.length + 1).fill(0)
    let canBuy = new Array(prices.length + 1).fill(0)
    let freeze = new Array(prices.length + 1).fill(0)

    hold[1] = -prices[0]
    // 初始化边界值，在这里可以省略
    // canBuy[1] = 0 
    // freeze[1] = 0

    for(let i = 2; i <= prices.length; i++) {
        hold[i] = Math.max(hold[i - 1], canBuy[i - 1] - prices[i - 1])
        canBuy[i] = Math.max(canBuy[i - 1], freeze[i - 1])
        freeze[i] = hold[i - 1] + prices[i - 1]
    }

    return Math.max(canBuy[prices.length], freeze[prices.length])
}


const maxProfit = prices => {
    if(!prices || prices.length === 1) {
        return 0
    }

    let hold = -prices[0]
    let canBuy = 0
    let freeze = 0
    
    for(let i = 1; i < prices.length; i++) {
        let prevHold = hold
        let prevCanBuy = canBuy
        let prevFreeze = freeze
        hold = Math.max(prevHold, prevCanBuy - prices[i])
        canBuy = Math.max(prevCanBuy, prevFreeze)
        freeze = prevHold + prices[i]
    }

    return Math.max(canBuy, freeze)
}

const maxProfit = prices => {
    if(!prices || prices.length === 1) {
        return 0
    }

    let hold = -prices[0]
    let canBuy = 0
    let freeze = 0

    for(let i = 1; i < prices.length; i++) {
        let prevHold = hold
        hold = Math.max(hold, canBuy - prices[i])
        canBuy = Math.max(canBuy, freeze)
        freeze = prevHold + prices[i]
    }

    return Math.max(canBuy, freeze)
}

const maxProfit = prices => {
    if(!prices || !prices.length) {
        return 0
    }

    let hold = new Array(prices.length + 1).fill(0)
    let unhold = new Array(prices.length + 1).fill(0)
    hold[1] = -prices[0]

    for(let i = 2; i <= prices.length; i++) {
        hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i - 1])
        unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i - 1])
    }

    return unhold[prices.length]
}

console.log(maxProfit([2,1]))


