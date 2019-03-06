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

export class BinaryTreeNode {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}