import "./styles.css";

function LinkNode(val: Number) {
  this.val = val;
  this.next = null;
}

interface Node {
  val: Number;
  next: any;
}

class Link {
  constructor() {
    this.head = new LinkNode();
  }

  add(num: Number) {
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

export default function App() {
  const link = new Link();
  link.add(4);
  link.add(6);
  link.add(2);
  link.add(2);
  link.add(3);
  link.show();
  console.log(link.head);

  return null;
}
