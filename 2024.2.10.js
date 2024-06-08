/* *
 * 大整数加法 
 * */
const sum = (a, b) => {
    a = a.split('')
    b = b.split('')
    let c = 0
    let res = ''
    while(a.length || b.length || c) {
        let temp = c
        a.length && (temp += a.pop() - 0)
        b.length && (temp += b.pop() - 0)
        res = temp % 10 + res
        c = Math.floor(temp / 10)
    }
    return res
}

// console.log(sum('9', '9'))


/* *
 * 构建一颗二叉树
 * */
function TreeNode(val, left = null, right = null) {
    this.left = left
    this.right = right
    this.val = val
}


const arr = [1, 2, 3, 4, 5, 7, null, 8]
const constructTree = arr => {
    if (!arr.length) {
        return null
    }

    let temp, rc, lc
    let root = new TreeNode(arr.shift())
    let queue = [root]
    while(arr.length) {
        temp = queue.shift()
        if (temp !== null) {
            if(arr.length) {
                lc = arr.shift()
                temp.left = lc == null ? lc : new TreeNode(lc)
            }
            if(arr.length) {
                rc = arr.shift()
                temp.right = rc == null ? rc :new TreeNode(rc)
            }
            queue.push(temp.left, temp.right)
        }
    }
    
    return root
}

let root = constructTree(arr)

// console.log(root)

/* *
 * 打印二叉树构建的路径
 * */

const traverse = (root, path) => {
    if (!root) {
        console.log(path)
        return true
    }
    traverse(root.left, path + root.val) || traverse(root.right, path + root.val)
    return false
}

// traverse(root, '')

/* *
 *  add(1)(2)(3)...(n)() // 打印出和来  
 * */

const add = function(n) {
    let sum = n
    return function inner(n) {
        if(n === undefined || n === null) {
            return sum
        } else {
            sum += n
            return inner
        }
    }
}

// console.log(add(1)(2)(3)())

/* *
 * 数组去重
 * */
const removeArrDuplicates = arr => {
    return arr.reduce((prev, cur) => {
        if(!prev.includes(cur)) {
            prev.push(cur)
        } 
        return prev
    }, [])
}
// console.log(removeArrDuplicates([1, 2, 3, 3, 4, 4, 5]))

/* *
 * 数组扁平化
 * */

const flatArray = arr => {
    while(arr.some(a => Array.isArray(a))) {
        arr = arr.reduce((prev, cur) => {
            if(Array.isArray(cur)) {
                prev.push(...cur)
            } else {
                prev.push(cur)
            }
            return prev
        }, [])
    }
    console.log(arr)
}

flatArray([1, 2, 3, [4, 5, [6, 7, 8]]])

/* *
 * 最长公共子串
 * */

const longestCommonSubsquence = (str1, str2) => {
    let dp = new Array(str1.length + 1).fill('')
    dp = dp.map(arr => new Array(str2.length + 1).fill(0))

    for(let i = 1; i <= str1.length; i++) {
        for(let j = 1; j <=str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
            } else {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
            }
        }
    }

    return dp[str1.length][str2.length]
}

console.log(longestCommonSubsquence('abc', 'def'))



