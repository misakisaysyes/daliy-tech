


// const total = 10
// const scores = [1, 2, 5]
// const amount = [1, 2, 2]

// const questions = [
//     {
//         id: 1,
//         name: 'q1',
//         score: 1,
//     },
//     {
//         id: 2,
//         name: 'q2',
//         score: 2,
//     },
//     {
//         id: 3,
//         name: 'q3',
//         score: 2,
//     },
//     {
//         id: 4,
//         name: 'q4',
//         score: 5,
//     },
//     {
//         id: 5,
//         name: 'q5',
//         score: 5,
//     },
// ]

// const genCombinations = (total, scores, amount) => {
//     let dp = new Array(total + 1).fill([])
//     dp[0] = [new Array(scores.length).fill(0)]

//     for (let i = 0; i < scores.length; i++) {
//         for (let j = total; j >= scores[i]; j--) { 
//             for (let k = 1; k <= amount[i] && j >= k * scores[i]; k++) {
//                 let prevDp = dp[j - k * scores[i]].map(vector => vector.map((num, idx) => num + k * (idx === i)))
//                 dp[j] = [ ...dp[j], ...prevDp ]
//             }
//         }
//     }

//     return dp[total]
// }

// const combinations = genCombinations(total, scores, amount)
// console.log(' --- 得到组合 --- ', combinations)

// const combination = combinations[Math.floor(Math.random() * combinations.length)]
// console.log(' --- 随机得到其中一个组合 --- ', combination)

// // 生成问题
// let paper = []
// combination.forEach((num, i) => {
//     const targetScore = scores[i]
//     const buff = questions.filter(ques => ques.score === targetScore)
    
//     // 10道题里面随机选3道题，我又发现了一个有趣的地方，这3道题总不能重复吧
//     // 所以这是个组合问题 => 
//     // 剪枝爆搜，可以动态规划


//     // while (num--) {
//     //     paper.push(buff[buff.length * Math.floor(buff.length * Math.random())])
//     // }
    
//     let dp = new Array(num + 1).fill()
//     dp.map(arr => new Array(buff.length + 1).fill(0))

// })

// console.log(' --- 生成试卷 --- ')
// console.log(paper)

// for(let i = 0; i < 20; i++) {
//     console.log(Math.random())
// }


// 求组合生成

const arr = [0, 1, 2, 3, 4, 5]

// const genCombinations = (arr, target) => {
//     let dp = new Array(arr.length + 1).fill()
//     dp = dp.map((d, i) => {
//         let arr = new Array(target + 1).fill(0)
//         arr[0] = 1
//         return arr
//     })

//     for (let i = 1; i <= arr.length; i++) {
//         for (let j = 1; j<= target; j++) {
//             dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
//         }
//     }

//     return dp[arr.length][target]
// }


// 生成所有组合数 初始值优化前
const genCombinations = (arr, target) => {
    let dp = new Array(arr.length + 1).fill()
    dp = dp.map((d, i) => {
        let arr = new Array(target + 1).fill([[]])
        return arr
    })

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 1; j <= target && j <= i; j++) {
            const prevDp1 = dp[i - 1][j - 1].map(d => [ ...d, arr[i - 1] ])
            const prevDp2 = dp[i - 1][j].filter(d => d[0] !== undefined )
            dp[i][j] = [ ...prevDp1, ...prevDp2 ]
        }
    }

    return dp[arr.length][target]
}

console.log(genCombinations(arr, 3))
