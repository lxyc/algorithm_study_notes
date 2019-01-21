export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class DoublyNode extends Node {
  constructor(data) {
    super(data);
    this.prev = null;
  }
}