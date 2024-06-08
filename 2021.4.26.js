// 给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。

// 这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。

// 返回一个符合上述规则的链表的列表。

// 举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

// 示例 1：

// 输入: 
// root = [1, 2, 3], k = 5
// 输出: [[1],[2],[3],[],[]]
// 解释:
// 输入输出各部分都应该是链表，而不是数组。
// 例如, 输入的结点 root 的 val= 1, root.next.val = 2, \root.next.next.val = 3, 且 root.next.next.next = null。
// 第一个输出 output[0] 是 output[0].val = 1, output[0].next = null。
// 最后一个元素 output[4] 为 null, 它代表了最后一个部分为空链表。
// 示例 2：

// 输入: 
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// 输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
// 解释:
// 输入被分成了几个连续的部分，并且每部分的长度相差不超过1.前面部分的长度大于等于后面部分的长度。
//  

// 提示:

// root 的长度范围： [0, 1000].
// 输入的每个节点的大小范围：[0, 999].
// k 的取值范围： [1, 50].

const splitListToParts = (root, k) => {

}


// 回文链表
// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// const isPalindrome = head => {
//     if(!head || !head.next) {
//         return head
//     }

//     let stack = []
//     while(head) {
//         stack.push(head.val)
//         head = head.next
//     }   

//     return stack.join('') === stack.reverse().join('')
// }

const isPalindrome = head => {
    if(!head || !head.next) {
        return head
    }

    const { list1, list2 } = cutList(head)
    
    console.log('list 1', list1)
    
    console.log('list 2', list2)

    

    // 比较链表

}

const cutList = head => {
    if(!head || !head.next) {
        return null
    }
    let fast = head.next.next
    while(fast) {
        fast = fast.next
        if(!fast) {
            break
        }
        slow = slow.next
    }
    fast = slow.next
    slow.next = null
    return { list1: head, list2: fast }
}

const reverseList = head => {
    if(!head || !head.next) {
        return head
    }

    let newHead = new ListNode(-1)
    let temp
    while(head) {
        temp = head.next
        head.next = newHead.next
        newHead.next = head
        head = temp
    }

    return newHead.next
}

const compareList = (l1, l2) => {
    if(!l1 && !l2) {
        return true
    }
}

