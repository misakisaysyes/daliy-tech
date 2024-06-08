// 组合总和IV

// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

// 题目数据保证答案符合 32 位整数范围。

// 示例 1：

// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// 请注意，顺序不同的序列被视作不同的组合。
// 示例 2：

// 输入：nums = [9], target = 3
// 输出：0
//  

// 提示：

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// nums 中的所有元素 互不相同
// 1 <= target <= 1000
 

// 爆搜
// const combinationSum4 = (nums, target) => {
//     let count = 0
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === target) {
//             count += 1
//         } else if(nums[i] > target) {
//             continue
//         } else {
//             count += combinationSum4(nums, target - nums[i])
//         }
//     }
//     return count
// }

// 记忆爆搜
// let memo = {}
// const combinationSum4 = (nums, target) => {
//     if(memo[target]) {
//         return memo[target]
//     }
//     let count = 0
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === target) {
//             count += 1
//         } else if(nums[i] > target) {
//             continue
//         } else {
//             count += combinationSum4(nums, target - nums[i])
//         }
//     }
//     if(count) {
//         memo[target] = count
//     }
//     return count
// }

// 动态规划
// const combinationSum4 = (nums, target) => {
//     let dp = new Array(target + 1).fill(0)
//     dp[0] = 1
//     for (let i = 1; i <= target; i++) {
//         for(let j = 0; j < nums.length; ++j) {
//             if(i >= nums[j]) {
//                 dp[i] = dp[i] + dp[i - nums[j]]
//             }
//         }
//     }
//     return dp[target]
// }

const combinationSum4 = (nums, target) => {
    const dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= target; i++) {
        for(let num of nums) {
            if(i >= num) {
                dp[i] += dp[i - num]
            }
        }
    }
    return dp[target]
}

const nums = [1, 2, 3]
const target = 4

console.log('combinationSum4 ', combinationSum4(nums, target))
