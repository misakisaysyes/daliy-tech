const bubbleSort = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

console.log(bubbleSort([43,1,3,76,2,6]));

var sortList = function(head) {
    if(head === null) return head;
    let len = 0;
    for(let cur = head; cur; len++, cur = cur.next);
    const staticHead = new ListNode(0, head);
    const curHead = new ListNode(0, head);
    let mountNode = staticHead;
    for(let subLen = 1; subLen < len; subLen <<= 1) {
        // console.log(subLen);
        while(!!curHead.next) { 
            let list1 = cutLinkfromHead(curHead, subLen);
            let list2 = cutLinkfromHead(curHead, subLen);
            mountNode.next = merge(list1, list2);
            while(mountNode.next) { mountNode = mountNode.next };
            // console.log(staticHead, mountNode, curHead);
        }
        curHead.next = staticHead.next;
        mountNode = staticHead;
    }
    return staticHead.next;
};

function cutLinkfromHead(headNode, len) {
    let newHead = headNode.next;
    let cur = newHead;
    let count = 1;
    while(count < len && cur) {
        cur = cur.next;
        count++;
    }
    if(cur && cur.next) {
        headNode.next = cur.next;
        cur.next = null;
    } else {
        headNode.next = null
    }
    return newHead;
}

function merge(list1, list2) {
    let head = new ListNode();
    let tail = head;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 || list2;
    return head.next;
};