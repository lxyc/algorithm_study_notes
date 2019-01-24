export default class Set {
  constructor() {
    this._items = {};
    this._length = 0;
  }

  // 添加成员时，如果已有成员则不操作
  add(value) {
    if (this.has(value)) return false;
    this._items[value] = value;
    this._length += 1;
    return true;
  }

  // 移除成员时，如果没有对应成员则不操作
  remove(value) {
    if (!this.has(value)) return false;
    delete this._items[value];
    this._length -= 1;
    return true;
  }

  values() {
    return Object.values(this._items);
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();

    const values = this.values();
    values.forEach(item => unionSet.add(item));

    const otherValues = otherSet.values();
    otherValues.forEach(item => unionSet.add(item));

    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();

    const values = this.values();
    values.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    })

    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set();

    const values = this.values();
    values.forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    })

    return differenceSet;
  }

  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    const values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      const item = values[i];
      if (!otherSet.has(item)) return false;
    }

    return true;
  }

  has(value) {
    return this._items.hasOwnProperty(value);
  }

  clear() {
    this._items = {};
    this._length = 0;
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return !this._length;
  }
}