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
}

module.exports = { Node, LinkedList };
