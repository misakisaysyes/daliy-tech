

const longestPalindrome = str => {
    let dp = new Array(str.length + 1).fill('')
    dp = dp.map(el => new Array(str.length + 1).fill(false))

    for(let i = 0; i <= str.length; i++) {
        dp[i][i] = true
    }

    let res = str[0]
    for(let i = 1; i <= str.length; i++) {
        for(let j = i; j <= str.length; j++) {
            if(str[i - 1] === str[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] 
                if (j - i + 1 > res.length) {
                    res = str.slice(i - 1, j)
                }
            } else {
                dp[i][j] = false
            }
        }
    }

    console.log(dp)

    return res
}

console.log(longestPalindrome("aacabdkaca"))