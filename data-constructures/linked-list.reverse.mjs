import LinkedList from './linked-list.mjs';

function _reverseByRecusive(node) {
  if (!node) return null;
  if (!node.next) return node; // 递归终止条件

  let newNode = _reverseByRecusive(node.next);
  node.next.next = node;
  node.next = null;
  return newNode;
};

function _reversePrint(node) {
  if (!node) return; // 递归终止条件
  _reversePrint(node.next);
  console.log(node.data);
};

export default class LinkedListExtend extends LinkedList {
  constructor() {
    super();
  }

  // 翻转
  reverse() {
    if (!this._head) return false;

    let prevNode = null;
    let currNode = this._head;
    while (currNode) {
      const nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    // 交换首尾
    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    return true;
  }

  reverseByRecusive() {
    if (!this._head) return false;

    _reverseByRecusive(this._head);
    // 交换首尾
    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    return true;
  }

  reversePrint() {
    _reversePrint(this._head);
  }
}