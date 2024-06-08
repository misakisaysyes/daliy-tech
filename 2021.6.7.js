function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

const constructTree = rawArr => {
    if (!rawArr || !rawArr.length) {
        return null
    }

    const root = new TreeNode(rawArr.shift())
    let queue = [root]
    while(rawArr.length) {
        const node = queue.shift()
        const lcv = rawArr.shift()
        const rcv = rawArr.shift()

        if (lcv !== null && lcv !== undefined) {
            node.left = new TreeNode(lcv)
            queue.push(node.left)
        }

        if (rcv !== null && rcv !== undefined) {
            node.right = new TreeNode(rcv)
            queue.push(node.right)
        }
    }
    
    return root
}

// const testArr = [1,2,3,null,5,6,7]
// console.log(constructTree(testArr))

// 判断子树

// const t1 = [3,4,5,1,2,null,null,null,null,0]
// const t2 = [4,1,2]

const t1 = [1,1]
const t2 = [1]

const isSubtree = (root1, root2) => {
    if (!root1 && !root2) {
        return true
    }
    
    if (!root1 && root2 || root1 && !root2) {
        return false
    }

    if (root1 && root2) {
        return (
            root1.val === root2.val ? 
            isSubtree(root1.left, root2.left) && isSubtree(root1.right, root2.right) :
            isSubtree(root1.left, root2) || isSubtree(root1.right, root2)
        )
    }
}

console.log('🌲')

const tree1 = constructTree(t1)
const tree2 = constructTree(t2)

console.log(tree1, tree2)

console.log(isSubtree(tree1, tree2))