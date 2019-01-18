class Queue {
  constructor() {
    this._items = [];
  }

  enqueue(item) {
    this._items.push(item);
  }

  dequeue() {
    return this._items.shift();
  }

  head() {
    return this._items[0];
  }

  tail() {
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return !this._items.length;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }

  toString() {
    return this._items.toString();
  }
}

const arr = Array.from({ length: 100 }, (_, i) => i*i);
function delRing(list) {
  const queue = new Queue();
  list.forEach(e => { queue.enqueue(e); });

  let index = 0;
  while (queue.size() !== 1) {
    const item = queue.dequeue();
    index += 1;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  console.log(index);
  return queue.tail();
}

console.log(delRing(arr));