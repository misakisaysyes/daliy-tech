// 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false


// const func = (word, dist) => {
//     let dp = new Array(word.length + 1).fill(false)
//     dp[0] = true
//     for(let i = 1; i < dp.length; i++) {
//         for(let s of dist) {
//             if(i >= s.length) {
//                 let curBool = word.slice(i - s.length, i) === s
//                 dp[i] = dp[i] || ( curBool && dp[i - s.length])
//             }
//         }
//     }
//     return dp[word.length]
// }

var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(0)
    dp[0] = true

    for(let i = 1; i < dp.length; i++) {
        for(let word of wordDict) {
            if(i >= word.length) {
                let hasWord = s.slice(i - word.length, i) === word
                dp[i] = dp[i] || (hasWord && dp[i - s.length])
            }
        }
    }

    return dp[s.length]
};

const word = "catsandog"
const dist = ["cats", "dog", "sand", "and", "cat"]

console.log(wordBreak(word, dist))