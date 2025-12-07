class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const enqueueNode = new Node(value);
    let returnValue = enqueueNode;
    if (!this.first) {
      this.first = enqueueNode;
      this.last = enqueueNode;
    } else {
      this.last.next = enqueueNode;
      this.last = enqueueNode;
    }
    this.length++;
    return returnValue;
  }

  dequeue() {
    if (!this.first) return undefined;
    let temp = this.first;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first.next;
      temp.next = null;
      this.first = temp;
    }
    this.length--;
    return temp;
  }

  min() {
    let temp = this.first;
    let min = temp.value;
    while (temp) {
      if (temp.value < min) min = temp.value;
      temp = temp.next;
    }
    return min;
  }
}

const queue = new Queue(0);
