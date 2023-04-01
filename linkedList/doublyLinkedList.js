class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    } else if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    newNode.prev = firstPointer;
    const holdingPointer = firstPointer.next;
    holdingPointer.prev = newNode;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  delete(index) {
    if (index >= this.length) {
      return undefined;
    } else if (index < 0) {
      return undefined;
    } else if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next.next;
    holdingPointer.prev = firstPointer;
    firstPointer.next = holdingPointer;

    this.length--;
    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.prepend(3);
console.log(myDoublyLinkedList);