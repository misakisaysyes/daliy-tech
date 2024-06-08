// 解题思路
// 常见的背包问题有1、组合问题。2、True、False问题。3、最大最小问题。
// 以下题目整理来自大神CyC，github地址：
// github
// 我在大神整理的基础上，又做了细分的整理。分为三类。
// 1、组合问题：
// 377. 组合总和 Ⅳ
// 494. 目标和
// 518. 零钱兑换 II
// 2、True、False问题：
// 139. 单词拆分
// 416. 分割等和子集
// 3、最大最小问题：
// 474. 一和零
// 322. 零钱兑换

// 组合问题公式


// dp[i] += dp[i-num]
// True、False问题公式


// dp[i] = dp[i] or dp[i-num]
// 最大最小问题公式


// dp[i] = min(dp[i], dp[i-num]+1)或者dp[i] = max(dp[i], dp[i-num]+1)
// 以上三组公式是解决对应问题的核心公式。

// 当然拿到问题后，需要做到以下几个步骤：
// 1.分析是否为背包问题。
// 2.是以上三种背包问题中的哪一种。===> 确定状态转移方程形式 是累加 还是bool
// 3.是0-1背包问题还是完全背包问题。也就是题目给的nums数组中的元素是否可以重复使用。 ===> 确定循环形式
// 4.如果是组合问题，是否需要考虑元素之间的顺序。需要考虑顺序有顺序的解法，不需要考虑顺序又有对应的解法。

// 接下来讲一下背包问题的判定
// 背包问题具备的特征：给定一个target，target可以是数字也可以是字符串，再给定一个数组nums，nums中装的可能是数字，也可能是字符串，问：能否使用nums中的元素做各种排列组合得到target。

// 背包问题技巧：
// 1.如果是0-1背包，即数组中的元素不可重复使用，nums放在外循环，target在内循环，且内循环倒序；

 // 2.如果是完全背包，即数组中的元素可重复使用，nums放在外循环，target在内循环。且内循环正序。


// for num in nums:
//     for i in range(nums, target+1):
// 3.如果组合问题需考虑元素之间的顺序（nums中元素的排序对target有影响），需将target放在外循环，将nums放在内循环。


// for i in range(1, target+1):
//     for num in nums: