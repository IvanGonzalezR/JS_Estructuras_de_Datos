// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
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
    const holdingPointer = firstPointer.next;
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
    firstPointer.next = holdingPointer;

    this.length--;
    return this;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
// myLinkedList.insert(1, 23);
// myLinkedList.prepend(6);
myLinkedList.delete(2);

console.log(myLinkedList);