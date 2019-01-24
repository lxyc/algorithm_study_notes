export default class Set {
  constructor() {
    this._items = [];
  }

  add(item) {
    if (this._items.indexOf(item) !== -1) return false;

    this._items.push(item);
    return true;
  }

  remove(item) {
    const pos = this._items.indexOf(item);
    if (pos === -1) return false;

    this._items.splice(pos, 1);
    return true;
  }

  has(item) {
    return this._items.indexOf(item) !== -1;
  }

  clear() {
    this._items = [];
  }

  size() {
    return this._items.length;
  }

  values() {
    return this._items;
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