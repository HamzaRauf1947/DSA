class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  print() {
    let curr = this.head;
    let res = "";
    while (curr) {
      res += curr.value + (curr.next ? "->" : "");
      curr = curr.next;
    }
    console.log(res);
  }

  pop() {
    let ptr1 = this.head;
    let ptr2 = ptr1.next;

    if (!this.head) return undefined;
    if (this.length == 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    while (ptr2.next) {
      ptr1 = ptr2;
      ptr2 = ptr2.next;
    }
    this.tail = ptr1;
    ptr1.next = null;
    this.length--;
    return ptr2;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.head) {
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
      this.length++;
    } else {
      // this.head = newNode;
      // this.tail = newNode;
      // this.length++;
      this.push(value);
    }
    return newNode;
  }

 
}

const myLinkList = new LinkedList(0);


myLinkList.push(1);
myLinkList.push(2);
myLinkList.push(3);
myLinkList.push(4);
myLinkList.print();





