class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.lenght = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.lenght++;
    return newNode;
  }

      pop(){

        if(this.lenght === 0){
            return undefined;
        }

        if(this.lenght === 1){
            this.head = null;
            this.tail = null;
        }
        let temp = this.tail;
        this.tail = temp.prev;
        temp.prev.next = null;
        temp.prev = null;
        this.lenght--;
        return temp;
    }

    unshift(value){

        if(this.lenght == 0){
            this.head = newNode;
            this.tail = newNode;
        }
        let newNode = new Node(value);
        let temp = this.head;
        temp.prev = newNode;
        newNode.next = temp;
        this.head = newNode;
        this.lenght++;
        return temp

    }
}

const DLL = new DoublyLinkedList(0);
DLL.push(1);
