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

  shift() {
    if (this.head) {
      let temp = this.head;
      this.head = temp.next;
      // temp.next = null
      this.length--;
      return temp;
    }
    return undefined;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  get(index) {
    let ind = Number(index);
    if (typeof ind == "number") {
      if (this.head) {
        let temp = this.head;
        if (ind > this.length - 1) return "your index doesn't exist";

        for (let i = 0; i <= ind; i++) {
          if (i == ind) {
            return temp;
          }
          temp = temp.next;
        }
      }
      return undefined;
    }
  }

  set(index, val) {
    let ind = Number(index);
    if (typeof ind == "number") {
      if (this.head) {
        let temp = this.head;
        if (ind > this.length - 1) return "your index doesn't exist";

        for (let i = 0; i <= ind; i++) {
          if (i == ind) {
            temp.value = val;
            return temp;
          }
          temp = temp.next;
        }
      }
      return undefined;
    }
  }

  prev(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (i == index - 1) {
        return temp;
      }
      temp = temp.next;
    }
  }

  insert(index, value) {
    let newNode = new Node(value);

    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    let prevNode = this.prev(index);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

   size(){
   let temp = this.head;
   let count = 0
    while (temp) {
      count++;
      temp = temp.next;
    }

    return count;
  }

   clear() {
    this.head = null;
    return null;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const myLinkList = new LinkedList(0);

myLinkList.push(1);
myLinkList.push(2);
myLinkList.push(3);
myLinkList.push(4);
myLinkList.print();
