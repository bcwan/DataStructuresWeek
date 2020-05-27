//Time complexity
  //access: O(n)
  //search: O(n)
  //insertion: O(1)
  //deletion: O(1)

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let node = this.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {

  }

  // TODO: Implement the set method here
  set(index, val) {

  }

  // TODO: Implement the insert method here
  insert(index, val) {

  }

  // TODO: Implement the remove method here
  remove(index) {

  }

  // TODO: Implement the size method here
  size() {

  }
}

