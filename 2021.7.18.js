
total = 10

scores = [1, 2, 5]

amount = [1,2,2]

// const testPaper = (total, scores, amount) => {
//     let dp = new Array(total + 1).fill(0);
//     let res = new Array(total + 1).fill([]);
//     res = res.map(r => new Array(amount.length).fill(0));

//     dp[0] = 1

//     for (let i = 0; i < scores.length; i++) {
//         for (let j = 1; j <= amount[i]; j++) {
//             let score = scores[i] * j
//             for (let _total = total; _total >= score; _total--) {
//                 dp[_total] += dp[_total - score]
//             }
//         }
//     }
//     console.log(dp)
//     return dp[total]
// }


// // 请实现一个凑十元函数
// const getTen = (total, coins, amount) => {}


// 1.已知手上有一张一元，两张两元，两张五元。请问有几种组合能凑出十元（不考虑顺序）

// // 输入
// total = 10
// coins = [1, 2, 5]
// amount = [1, 2, 2]

// // 输出
//  2

// 2.已知手上有一张一元，两张两元，两张五元，请给出所有能组成十元的组合（不考虑顺序）

// // 输入
// total = 10
// coins = [1, 2, 5]
// amount = [1, 2, 2]

// // 输出
// [
//     [1,2,2,5],
//     [5,5],
// ]


// // 输出
// [1, 2, 1]
// [0, 0, 2]


// 获取组卷总数 ----------------------------------
// const testPaper = (total, scores, amount) => {
//     let dp = new Array(total + 1).fill(0)

//     dp[0] = 1
//     for (let i = 0; i < scores.length; i++) {
//         for (let j = total; j >= scores[i]; j--) {
//             for (let k = 1; k <= amount[i] && j >= k*scores[i]; k++) {
//                 dp[j] += dp[j - k*scores[i]]
//             }
//         }
//     }

//     return dp[total]
// }


// dp 里面码一个☝️最原始的map

// 获取组卷所有组合 -------------------------------
// const testPaper = (total, scores, amount) => {
//     let dp = new Array(total + 1).fill([])
//     dp[0] = [[0,0,0]]

//     for (let i = 0; i < scores.length; i++) {
//         for (let j = total; j >= scores[i]; j--) { 
//             for (let k = 1; k <= amount[i] && j >= k * scores[i]; k++) {
//                 let  res =  dp[j - k * scores[i]].map(arr => {
//                         return arr.map((ar, idx) => {
//                             if (idx === i) {
//                                 return ar + k
//                             } else {
//                                 return ar
//                             }
//                         })
//                     })

//                     if(dp[j]) {
//                         dp[j] = [...dp[j], ...res]
//                     } else {
//                         dp[j] = [...res]
//                     }
                
//             }
//         }
//     }

//     return dp[total]
// }

// 一键组卷与动态规划


// // 智课历史上有过那么一个☝️需求：

// // 自动组卷

// // 假设现在知道试卷的总分是120

// // 现在有10分的题n道

// // 20分的题m道

// // 让我们实现一个自动组卷的功能
// // 老师按个一键组卷，自动从不同分值的题目中凑出一个120分的试卷

// // 虽然最后这个需求因为各种原因不了了之，但却成功引起了我的注意。



// // 今天我就想和大家分享一下我对这个需求的看法，以及解决需求背后所支持的算法思想。


// const a = testPaper(total, scores, amount)
// console.log(a)

// 二进制优化方法
// 1.先把一个数拆成2的几次方的和


console.log('this is a test')

// 生成一个二维数组，元素数组中第一个数字为 新分数，第二个数字为原分数

const genNewScores = (scores, amount) => {
    let newScores = []
    amount.forEach((a, i) => {
        let factor = 1
        do {
            a -= factor
            newScores.push([factor * scores[i], scores[i]])
            factor *= 2
        } while(a > factor)
        a && newScores.push([a * scores[i], scores[i]])
    })
    return newScores
}

// 获取组卷所有组合优化版本

const genPaper = (total, scores, amount) => {
    const newScores = genNewScores(scores, amount)
    let dp = new Array(total + 1).fill()

    // 初始化
    dp[0] = {}
    scores.forEach(s => dp[0][s] = 0)

    console.log(newScores)
    console.log(dp)

    for (let score of newScores) {
        const newS = score[0]
        const originS = score[1]
        for (let _total = total; _total >= newS; _total--) {
            let newRes = { ...dp[_total - newScores] }
            !newRes[originS] && (newRes[originS] = 0)
            newRes[originS] += 1
            dp[_total] = { ...dp[_total], ...newRes }
        }
    }

    return dp[total]
}


console.log(genPaper(total, scores, amount))


// 解决这个实际的需求
// 我们用到如下的算法

// 支持（泰勒公式）0-1背包 -> 多重背包 -> 二进制优化(底层数学原理 泰勒公式) | 单调队列优化 -> 得到组合 -> 随机数生成 -> 