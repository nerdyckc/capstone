// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }
  forEach(cb) {
    let currNode = this.head;
    let counter = 0;

    while(currNode) {
      cb(currNode);
      currNode = currNode.next;
      counter++;
    }
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prevNode = this.getAt(index-1);
    if (!prevNode || !prevNode.next) {
      let last = this.getLast();
      last.next = new Node(data);
      return;
    }
    prevNode.next = new Node(data,prevNode.next);
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let currNode = this.head;
    let counter = 0;

    while (currNode && counter < index) {
      counter++;
      currNode = currNode.next;
    }
    return currNode;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    let currNode = this.head;

    while (currNode) {
      if (!currNode.next) {
        return currNode;
      }
      currNode = currNode.next;
    }
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prevNode = this.getAt(index-1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = prev.next;
      node = node.next;
    }
    prev.next = null;
  }
  size() {
    let count = 0;
    let currNode = this.head;

    while (currNode) {
      // console.log('current node: ', currNode);
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
