const isPalindrome = head => {
    if(!head || !head.next) {
        return null
    }

    let l1 = head
    let l2 = reverseLink(cutLink(head))

    while(l1 && l2) {
        if(l1.val !== l2.val) {
            return false
        }
        l1 = l1.next
        l2 = l2.next
    }

    if((!l1&&!l2) || (l1&&!l2&&!l1.next)) {
        return true
    }

    return false
}

const reverseLink = head => {
    if(!head || !head.next) {
        return head
    }

    let temp
    let newHead = new ListNode(-1)
    while(head) {
        temp = head.next
        head.next = newHead.next
        newHead.next = head
        head = temp
    }

    return newHead.next
}

// 奇数个节点和偶数个即节点要分开考虑


const cutLink = head => {
    if(!head || !head.next) {
        return head
    }

    let newHead = new ListNode(-1)
    let fastp = newHead
    let slowp = newHead

    while(fastp) {
        fastp = fastp.next
        if(!fastp) { 
            break
        }
        fastp = fastp.next
        slowp = slowp.next
    }
    
    fastp = slowp.next
    slowp.next = null
    return fastp
}


// 725. 分隔链表
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
 

// 提示:

// root 的长度范围： [0, 1000].
// 输入的每个节点的大小范围：[0, 999].
// k 的取值范围： [1, 50]

const splitListToParts = (root, k) => {
    if(!root) {
        return []
    }

    let resArr = new Array(k)
    let len = 0
    let cur = root
    while(cur) {
        len++
        cur = cur.next
    }

    let size = Math.floor(len/k)
    let mod = len % k

    for(let i = 0; i < k; i++) {
        if(root) {
            resArr.push(root)
            const curLen = size + mod-- > 0 ? 1 : 0
            for(let j = 0; j < curLen - 1; j++) {
                root = root.next
            }
            cur = root.next
            root.next = null
            root = cur
        }
    }

    return resArr
}

// 328. 奇偶链表
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL
// 示例 2:

// 输入: 2->1->3->5->6->4->7->NULL 
// 输出: 2->3->6->7->1->5->4->NULL
// 说明:

// 应当保持奇数节点和偶数节点的相对顺序。
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

var oddEvenList = function(head) {

};
