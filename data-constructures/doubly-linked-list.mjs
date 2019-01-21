import { DoublyNode } from './models/node.mjs';
import LinkedList from './linked-list.mjs';

export default class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
  }

  append(data) {
    const newNode = new DoublyNode(data);

    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.prev = this._tail; // NEW
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length += 1;
    return true;
  }

  insert(index, data) {
    if (index < 0 || index > this._length) return false;
    if (index === this._length) return this.append(data);

    const insertNode = new DoublyNode(data);
    if (index === 0) {
      insertNode.prev = null; // NEW
      this._head.prev = insertNode; // NEW
      insertNode.next = this._head;
      this._head = insertNode;
    } else {
      // 找到原有位置节点
      const prevTargetNode = this.getNode(index - 1);
      const targetNode = prevTargetNode.next;
      // 重塑节点连接
      prevTargetNode.next = insertNode;
      insertNode.next = targetNode;
      insertNode.prev = prevTargetNode; // NEW
      targetNode.prev = insertNode; // NEW
    }

    this._length += 1;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this._length) return false;

    let delNode;

    if (index === 0) {
      delNode = this._head;
      this._head = this._head.next;
      this._head.prev = null; // NEW
    } else {
      const prevNode = this.getNode(index - 1);
      delNode = prevNode.next;
      const nextNode = delNode.next;
      // 若移除为最后一个元素
      if (!nextNode) {
        this._tail = prevNode;
        this._tail.next = null; // NEW
      } else {
        prevNode.next = nextNode; // NEW
        nextNode.prev = prevNode; // NEW
      }
    }

    this._length -= 1;
    return delNode.data;
  }
}