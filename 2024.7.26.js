function LinkNode(val) {
    this.val = val;
    this.next = null;
  }

  class Link {
    constructor() {
      this.head = new LinkNode();
    }
  
    add(num) {
      const newNode = new LinkNode(num);
      let cur = this.head.next;
      let prev = this.head;
      while (cur && cur.val < newNode.val) {
        prev = cur;
        cur = cur.next;
      }
  
      newNode.next = prev.next;
      prev.next = newNode;
    }
  
    show() {
      let cur = this.head.next;
      while (cur) {
        console.log(cur.val);
        cur = cur.next;
      }
    }
  }