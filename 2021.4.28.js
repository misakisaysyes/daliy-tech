

// [力扣](https://leetcode-cn.com/problems/diameter-of-binary-tree/description/)



// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

//  

// 示例 :
// 给定二叉树

// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

let maxDiameter = 0
const getDepth = root => {
    if(!root) { return 0 }
    let lc = getDepth(root.left)
    let rc = getDepth(root.right)
    maxDiameter = Math.max(maxDiameter, lc + rc)
    return Math.max(lc, rc) + 1
}
const diameterOfBinaryTree = root => {
    getDepth(root)
    return maxDiameter
}


// 反转树
// [力扣](https://leetcode-cn.com/problems/invert-binary-tree/description/)

// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// 备注:
// 这个问题是受到 Max Howell 的 原问题 启发的 ：

// 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

const invertTree = root => {
    if(!root) { return root }

    let lc = invertTree(root.left)
    let rc = invertTree(root.right)
    root.left = rc
    root.right = lc

    return root
}



// [力扣](https://leetcode-cn.com/problems/merge-two-binary-trees/description/)

// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

// 示例 1:

// 输入: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// 输出: 
// 合并后的树:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
// 注意: 合并必须从两个树的根节点开始。

const mergeTrees = (root1, root2) => {
    if(!root1 && !root2) {
        return null
    } 

    let lr1,lr2,rr1,rr2
    let val = 0
    if(root1 && root2) {
        lr1 = root1.left
        rr1 = root1.right
        lr2 = root2.left
        rr2 = root2.right
        val = root1.val + root2.val
    }

    if(root1 && !root2) {
        lr1 = root1.left
        rr1 = root1.right
        lr2 = rr2 = null
        val = root1.val
    }

    if(!root1 && root2) {
        lr1 = rr1 = null
        lr2 = root2.left
        rr2 = root2.right
        val = root2.val
    }
    
    return new TreeNode(val, mergeTrees(lr1, lr2), mergeTrees(rr1, rr2))
};

const mergeTrees = (root1, root2) => {
    if(!root1 && !root2) {
        return null
    }

    if(!root1) {
        return root2
    } 

    if(!root2) {
        return root1
    }

    let root = new TreeNode(root1.val + root2.val, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right))

    return root
}


// [力扣](https://leetcode-cn.com/problems/path-sum/description/)

const hasPathSum = (root, targetSum) => {
    if(!root) {
        return false
    }

    if(!root.left && !root.right && root.val === targetSum) {
        return true
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

