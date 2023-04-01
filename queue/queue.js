class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return this;
    } else {
      const holdingPointer = this.last.prev;
      this.last = holdingPointer;
      this.last.next = null;
      this.length--;
      return this;
    }
  }
  peek() {
    if (this.first) {
      return this.first;
    } else {
      return undefined;
    }
  }
}

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue);