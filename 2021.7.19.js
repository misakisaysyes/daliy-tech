const combinationSum = (totel, scores, amount) => {
    
}

// 优化前，数组向量
const combinations2 = (total, scores, amount) => {
    let dp = new Array(total + 1).fill([])
    dp[0] = [new Array(scores.length).fill(0)]

    for (let i = 0; i < scores.length; i++) {
        for (let j = total; j >= scores[i]; j--) { 
            for (let k = 1; k <= amount[i] && j >= k * scores[i]; k++) {
                let prevDp = dp[j - k * scores[i]].map(vector => vector.map((num, idx) => num + k * (idx === i)))
                dp[j] = [ ...dp[j], ...prevDp ]
            }
        }
    }
    return dp[total]
}

const binarySplit = (scores, amount) => {
    let newScores = []
    amount.forEach((num, i) => {
        let factor = 1
        while(num >= factor) {
            num -= factor
            newScores.push([factor * scores[i], i])
            factor *= 2
        }
        if (num) {
            newScores.push([num * scores[i], i])
        }
    })
    return newScores
}

// // 二进制拆分后
// const combinations3 = (total, scores, amount) => {
//     const _scores = binarySplit(scores, amount)
//     let dp = new Array(total + 1).fill([])
//     dp[0] = [new Array(scores.length).fill(0)]

//     for (let i = 0; i < _scores.length; i++) {
//         const score = _scores[i][0]
//         const idx = _scores[i][1]
//         for (let j = total; j >= score; j--) {
//             let prevDp = dp[j - score].map(vector => vector.map((num, _i) => num + (idx === _i)))
//             dp[j] = [ ...dp[j], ...prevDp ] 
//         }
//     }

//     console.log(dp)

//     return dp[total]
// }

// // 二进制拆分的单调队列
const combination3 = (total, scores, amount) => {
    
}

// 这样得到的组合会有重复

// 测试数据
const total = 10
const scores = [1, 2, 5]
const amount = [1, 2, 2]

console.log('\n --- combination2 --- ')
console.log(combinations2(total, scores, amount))

console.log('\n --- combination3 --- ')
console.log(combinations3(total, scores, amount))




