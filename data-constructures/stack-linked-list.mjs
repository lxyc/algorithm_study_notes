import LinkedList from './linked-list.mjs';

export default class StackLinkedList {
  constructor() {
    this._link = new LinkedList();
  }

  push(item) {
    this._link.append(item);
  }

  pop() {
    const tailIndex = this._link.size() - 1;
    return this._link.removeAt(tailIndex);
  }

  peek() {
    if (this._link.size() === 0) return undefined;
    return this._link.getTail().data;
  }

  size() {
    return this._link.size();
  }

  isEmpty() {
    return this._link.isEmpty();
  }

  clear() {
    this._link.clear()
  }
};