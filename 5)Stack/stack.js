class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class stack {
  constructor(value) {
    var newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode;
    if (!this.first) {
      newNode = new Node(value);
    } else {
      newNode = new Node(value);
      newNode.next = this.first;
    }
    this.first = newNode;
    this.length++;
    // return this;
  }

  print() {
    let res = "";
    let temp = this.first;
    while (temp) {
      res += temp.value + (temp.value ? "->" : "");
      temp = temp.next;
    }
    console.log(res);
  }

  
}

let theStack = new stack(0);
console.log(theStack);
