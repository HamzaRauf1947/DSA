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

   pop() {
    if (!this.first) return "list is empty";
    let temp = this.first;
    if (this.length === 1) {
      temp.next = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }


}

let theStack = new stack(0);
console.log(theStack.push(1));
console.log(theStack.push(2));
console.log(theStack.print());
console.log("p2", theStack.pop());
console.log(theStack.print());
;
