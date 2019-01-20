class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length += 1;
    return true;
  }

  
}