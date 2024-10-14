export default class LinkedList {
  constructor() {
    this.root = new Node(null);
  }

  get head() {
    return this.root;
  }

  get tail() {
    return this.getLastNode();
  }

  getLastNode() {
    let current = this.root;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  size() {
    let count = 0;
    let current = this.root;

    while (current) {
      current = current.nextNode;
      count++;
    }
    return count;
  }

  append(value) {
    const newNode = new Node(value);
    let lastNode = this.getLastNode();
    if (lastNode.value === null) lastNode.value = value;
    else {
      lastNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.root);
    this.root = newNode;
  }

  at(index) {
    let count = 0;
    let current = this.root;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
  }

  pop() {
    let node = this.root;
    while (node) {
      if (node.nextNode.nextNode === null) {
        node.nextNode = null;
        return;
      }
      node = node.nextNode;
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let count = 0;
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
