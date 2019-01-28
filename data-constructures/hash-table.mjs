export default class HashTable {
  constructor(size = 37) {
    this._table = new Array(size);
    this._length = size;
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') return key;

    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash += key.charCodeAt(i);
    }
    return hash % this._length;
  }

  put(key, value) {
    const pos = this.loseloseHashCode(key);
    this._table[pos] = value;
  }

  get(key) {
    const pos = this.loseloseHashCode(key);
    return this._table[pos];
  }

  remove(key) {
    const pos = this.loseloseHashCode(key);
    delete this._table[pos];
  }

  print() {
    this._table.forEach((item, index) => {
      if (item !== undefined) {
        console.log(index + ' --> ' + item);
      }
    })
  }
}