export default 
class HashTable {
  constructor() {
    this._table = [];
  }

  // 哈希函数【社区中实践较好的简单哈希函数】
  hashMethod(key) {
    if (typeof key === 'number') return key;

    let hash = 5381;
    for (let i = 0; i < key.length; i += 1) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }

  put(key, value) {
    const pos = this.hashMethod(key);
    this._table[pos] = value;
  }

  get(key) {
    const pos = this.hashMethod(key);
    return this._table[pos];
  }

  remove(key) {
    const pos = this.hashMethod(key);
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