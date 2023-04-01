class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.length > 0) {
      return this.top;
    } else {
      return undefined;
    }
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    if (this.length === 1) {
      this.bottom = newNode;
    }
    return this;
  }
  pop() {
    if (this.length == 0) {
      return undefined;
    } else {
      this.top = this.top.next;
      this.length--;
      return this;
    }
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);