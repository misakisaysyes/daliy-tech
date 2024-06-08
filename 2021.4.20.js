// 1
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶


// 这几道题，我们知道最终结果是和之前某几个固定状态相关的

const climbStairs = n => {
    if(n === 0) {
        return 0
    }
    
    if(n === 1) {
        return 1
    }

    if(n === 2) {
        return 2
    }

    let n_1 = 2
    let n_2 = 1
    let n_
    for(let i = 3; i <= n; i++) {
        n_ = n_1 + n_2
        n_2 = n_1
        n_1 = n_
    }

    return n_
}

// 2
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
//  

// 提示：

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

// const rob = nums => {
//     let dp = new Array(nums.length + 1).fill(0)
//     dp[1] = nums[0]
//     for(let i = 2; i <= nums.length; i++) {
//         let temp = dp.slice(0, i - 1)
//         dp[i] = Math.max(dp[i], nums[i - 1] + temp.reduce((prev, cur) => Math.max(prev, cur), 0))
//     }
//     return dp.reduce((prev, cur) => Math.max(prev, cur), 0)
// }


const rob = nums => {
    if(nums.length === 1) {
        return nums[0]
    }

    if(nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    let cur
    let prev1 = nums[0]
    let prev2 = 0
    for(let i = 1; i < nums.length; i++) {
        cur = Math.max(prev1, prev2 + nums[i])
        prev2 = prev1
        prev1 = cur
    }
    return cur
}

// console.log(rob([2,7,9,3,1]))

// 3
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

//  

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [0]
// 输出：0
//  

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

// 环形。首尾取一个
const rob = nums => {
    if(nums.length === 1) {
        return nums[0]
    }

    if(nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)))
}

const helper = nums => {
   
    let cur
    let prev1 = nums[0]
    let prev2 = 0
    for(let i = 1; i < nums.length; i++) {
        cur = Math.max(prev1, prev2 + nums[i])
        prev2 = prev1
        prev1 = cur
    }
    return cur
}

// console.log(rob([2,3,2]))



// 4
// 题目描述：有 N 个 信 和 信封，它们被打乱，求错误装信方式的数量。

// 定义一个数组 dp 存储错误方式数量，dp[i] 表示前 i 个信和信封的错误方式数量。假设第 i 个信装到第 j 个信封里面，而第 j 个信装到第 k 个信封里面。根据 i 和 k 是否相等，有两种情况：

// i==k，交换 i 和 j 的信后，它们的信和信封在正确的位置，但是其余 i-2 封信有 dp[i-2] 种错误装信的方式。由于 j 有 i-1 种取值，因此共有 (i-1)*dp[i-2] 种错误装信方式。
// i != k，交换 i 和 j 的信后，第 i 个信和信封在正确的位置，其余 i-1 封信有 dp[i-1] 种错误装信方式。由于 j 有 i-1 种取值，因此共有 (i-1)*dp[i-1] 种错误装信方式。
// 综上所述，错误装信数量方式数量为：


// 5
// 题目描述：假设农场中成熟的母牛每年都会生 1 头小母牛，并且永远不会死。第一年有 1 只小母牛，从第二年开始，母牛开始生小母牛。每只小母牛 3 年之后成熟又可以生小母牛。给定整数 N，求 N 年后牛的数量。

// 第 i 年成熟的牛的数量为：


// grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7


const minPathSum = grid => {
    const m = grid.length
    const n = grid[0].length

    let dp = new Array(m + 1).fill([])
    dp = dp.map(item => new Array(n + 1).fill(0))

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            const i_1 = i - 1
            const j_1 = j - 1
            dp[i][j] = grid[i_1][j_1]
            if(i_1 && j_1) {
                dp[i][j] += Math.min(dp[i_1][j], dp[i][j_1])
                continue
            }

            if(!i_1 && j_1) {
                dp[i][j] += dp[i][j_1]
                continue
            }

            if(!j_1 && i_1) {
                dp[i][j] += dp[i_1][j]
                continue
            }
        }
    }

    return dp[m][n]
}

// console.log(minPathSum([[1,2,3],[4,5,6]]))

const uniquePaths = (m, n) => {
    let dp = new Array(m).fill([])
    dp = dp.map((item, idx) => {
        if(!idx) {
            return new Array(n).fill(1)
        } else {
            let arr = new Array(n).fill(0)
            arr[0] = 1
            return arr
        }
    })

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}

console.log(uniquePaths(3,2))

