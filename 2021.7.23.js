
// 动态规划的题目特征

// 重叠子问题，（怎么理解重叠子问题）

// 1 1 2 3 5 8

// 啥是重叠子问题呢

// 1 1 2 3 5 8

// 所以呢这类问题有个特征，就是我要解决它，在把它具体细化成多个小问题去求解时，它的这些小问题在求解过程中，其实是被重复问到的。

// 这种问题最朴素的解法其实是暴力递归，而动态规划其实本质上是对暴力递归的一种优化。

// 怎么优化呢？

// 其实它的本质就是枚举，把所有小问题的答案都记下来，当再次问到这个小问题时，就把答案从内存中拿出来，而不是像递归一样重新去算这个问题，这样来达到一种优化的目的。


// 这就是动态规划的基本思想



// 我们可以看一下这个需求中我们要解决的第二个问题，从m道题目中选n道。求个组合数好了。

// 首先我们来思考一下问题，

// 从m道题中随机选n道题，这n道题是不能重复的。所以呢这个问题其实是在求组合,C m, n

// C(4, 2) 
// C(3, 1)     C(3, 2)
// C(m, n) = C(m - 1, n - 1) + C(m - 1, n)

const arr = [0, 1, 2, 3]

const C = (arr, num) => {
    if (!arr.length) {
        return 0
    }

    if (!num) {
        return 1
    }

    if (arr.length < num) {
        return 0
    } 

    if (arr.length === num) {
        return 1
    }
    
    return C(arr.slice(1), num - 1) + C(arr.slice(1), num)
}


// 说明dp与m, n的关系。

const _C = (arr, num) => {
    let dp = new Array(arr.length + 1).fill()
    dp = dp.map(_ => {
        let arr = new Array(num + 1).fill(0)
        arr[0] = 1
        return arr
    })

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 1; j <= num; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
    }
    return dp[arr.length][num]
}

console.log(C(arr, 2))
console.log(_C(arr, 2))

