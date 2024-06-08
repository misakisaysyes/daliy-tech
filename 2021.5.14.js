// 给定一个二叉树，检查它是否是镜像对称的。

//  

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const constructTree = arr => {
    if (!arr || !arr.length || (arr.length === 1 && arr[0] === null)) {
        return null
    }

    const root = new TreeNode(arr.shift())
    if (!arr.length) {
        return root
    }

    let arr_ = [root]
    while(arr_.length) {
        let node = arr_.shift()
        let lc = arr.shift()
        if(lc) {
            node.left = new TreeNode(lc)
            arr_.push(node.left)
        }
        let rc = arr.shift()
        if(rc) {
            node.right = new TreeNode(rc)
            arr_.push(node.right)
        }
    }

    return root
}

console.log('构建树', constructTree([1,2,2,3,4,4,3]))

// const isSymmetric = root => {
//     if(!root) {
//         return true
//     }
// }

let leftInOrderStr = []
let rightInOrderStr = []

const leftInOrder = root => {
    if (!root) {
        return
    }
    leftInOrder(root.left)
    leftInOrderStr.push(root.val)
    leftInOrder(root.right)
}

const rightInOrder = root => {
    if (!root) {
        return
    }
    rightInOrder(root.right)
    rightInOrderStr.push(root.val)
    rightInOrder(root.left)
}

const isSymmetric = root => {
    leftInOrder(root)
    rightInOrder(root)
    return leftInOrderStr.join('') === rightInOrderStr.join('')
}




const _isSymmetric = (r1, r2) => {
    if (!r1 && !r2) {
        return true
    }

    if (!r1 && r2) {
        return false
    }

    if (r1 && !r2) {
        return false
    }

    if (r1.val !== r2.val) {
        return false
    }

    return _isSymmetric(r1.left, r2.right) && _isSymmetric(r1.right, r2.left)
}   
