import LinkedList from './linked-list.mjs';

export default class QueueLinkedList {
  constructor() {
    this._link = new LinkedList();
  }

  enqueue(item) {
    this._link.append(item);
  }

  dequeue() {
    return this._link.removeAt(0);
  }

  head() {
    if (this._link.size() === 0) return undefined;
    return this._link.getHead().data;
  }

  tail() {
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
}