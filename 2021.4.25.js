// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

//  

// 示例 1：


// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]
//  

// 提示：

// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100

var swapPairs = function(head) {
    if(!head || !head.next) {
        return head
    }

    let stack = []
    let newHead = new ListNode(-1)
    let tail = newHead.next
    while(head) {
        console.log(stack)
        if(stack.length < 2) {
            stack.push(head)
        } else {
            tail = stack.pop()
            tail = tail.next
            tail = stack.pop()
            tail = tail.next
        }
        head = head.next
    }
    return newHead.next
}

console.log('交换链表项', swapPairs([1,2,3,4]))