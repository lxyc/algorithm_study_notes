// import Stack from '../data-constructures/stack-array.mjs';
import Stack from '../data-constructures/stack-linked-list.mjs';

export default class MinStack {
  constructor() {
    this._dataStack = new Stack();
    this._minStack = new Stack();
  }

  push(item) {
    this._dataStack.push(item);
    if (this._minStack.isEmpty() || this._minStack.peek() > item) {
      this._minStack.push(item);
    } else {
      this._minStack.push(this._minStack.peek());
    }
  }

  pop() {
    this._dataStack.pop();
    return this._minStack.pop();
  }

  min() {
    return this._minStack.peek();
  }

  peek() {
    return this._dataStack.peek();
  }

  size() {
    return this._dataStack.size();
  }

  isEmpty() {
    return !this._dataStack.length;
  }

  clear() {
    this._dataStack.clear();
    this._minStack.clear();
  };
}