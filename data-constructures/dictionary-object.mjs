export default class Dictionary {
  constructor() {
    this._table = {};
    this._length = 0;
  }

  set(key, value) {
    if (!this.has(key)) {
      this._length += 1;
    }
    this._table[key] = value;
  }

  has(key) {
    return this._table.hasOwnProperty(key);
  }

  remove(key) {
    if (this.has(key)) {
      delete this._table[key];
      this._length -= 1;
      return true;
    }
    return false;
  }

  get(key) {
    return this._table[key];
  }

  clear() {
    this._table = {};
    this._length = 0;
  }

  size() {
    return this._length;
  }

  keys() {
    return Object.keys(this._table);
  }

  values() {
    return Object.values(this._table);
  }
}