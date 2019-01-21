import Queue from '../data-constructures/queue-array.mjs';

export default class StackQueue {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
    this._dataQueue = null;
    this._emptyQueue = null;
  }

  _initQueue() {
    if (this.queue1.isEmpty() && this.queue2.isEmpty()) {
      this._dataQueue = this.queue1;
      this._emptyQueue = this.queue2;
    } else if (this.queue1.isEmpty()) {
      this._dataQueue = this.queue2;
      this._emptyQueue = this.queue1;
    } else {
      this._dataQueue = this.queue1;
      this._emptyQueue = this.queue2;
    }
  }

  push(item) {
    this._initQueue();
    this._dataQueue.enqueue(item);
  }

  peek() {
    this._initQueue();
    return this._dataQueue.tail();
  }

  pop() {
    this._initQueue();
    while(this._dataQueue.size() > 1) {
      this._emptyQueue.enqueue(this._dataQueue.dequeue())
    }
    return this._dataQueue.dequeue();
  }

  size() {
    this._initQueue();
    return this._dataQueue.size();
  }

  isEmpty() {
    this._initQueue();
    return !this._dataQueue.size();
  }

  clear() {
    this._initQueue();
    this._dataQueue.clear();
  }
}