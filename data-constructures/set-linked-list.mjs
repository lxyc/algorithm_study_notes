import LinkedList from './linked-list.mjs';

export default class Set {
  constructor() {
    this._linkedList = new LinkedList();
  }

  add(item) {
    if (this.has(item)) return false;

    this._linkedList.append(item);
    return true;
  }

  remove(item) {
    if (!this.has(item)) return false;

    const pos = this._linkedList.indexOf(item);
    this._linkedList.removeAt(pos);
    return true;
  }

  has(item) {
    return this._linkedList.indexOf(item) !== -1;
  }

  clear() {
    this._linkedList.clear();
  }

  size() {
    return this._linkedList.size();
  }

  values() {
    let ret = [];
    let currItem = this._linkedList.getHead();
    while(currItem) {
      ret.push(currItem.data);
      currItem = currItem.next;
    }
    return ret;
  }

  union(otherSet) {
    const unionSet = new Set();

    const values = this.values();
    values.forEach(item => unionSet.add(item));

    const otherSetValues = otherSet.values();
    otherSetValues.forEach(item => unionSet.add(item));

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();

    const values = this.values();
    values.forEach(item => {
      if (otherSet.has(item)) intersectionSet.add(item);
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();

    const values = this.values();
    values.forEach(item => {
      if (!otherSet.has(item)) differenceSet.add(item);
    })

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    const values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      const item = values[i];
      if (!otherSet.has(item)) return false;
    }
    return true;
  }
}