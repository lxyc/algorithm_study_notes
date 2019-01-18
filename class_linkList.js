class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  // 在链表尾端插入元素
  append(data) {
    const newNode = new Node(data);
    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length += 1;
    return true;
  }

  // 获取某一元素
  getNode(index) {
    let currNode = this._head;
    let currIndex = 0;
    while(currIndex < index) {
      currIndex += 1;
      currNode = currNode.next;
    }
    return currNode;
  }

  // 在链表指定位置插入元素
  insert(index, data) {
    if (index < 0 || index > this._length) return false;
    if (index === this._length) return this.append(data);

    const insertNode = new Node(data);
    if (index === 0) {
      insertNode.next = this._head;
      this._head = insertNode;
    } else {
      const prevTargetNode = this.getNode(index - 1);
      const targetNode = prevTargetNode.next;
      prevTargetNode.next = insertNode;
      insertNode.next = targetNode;
    }

    this._length += 1;
    return true;
  }

  // 在链表指定位置移除元素
  removeAt(index) {
    if (index < 0 || index >= this._length) return false;

    if (index === 0) {
      this._head = this._head.next;
    } else {
      const prevNode = this.getNode(index - 1);
      const delNode = prevNode.next;
      const nextNode = delNode.next;
      // 若移除为最后一个元素
      if(!nextNode) this._tail = prevNode;
      prevNode.next = nextNode;
    }

    this._length -= 1;
    return true;
  }

  // 判断数据是否存在于链表内，存在返回index，否则返回-1
  indexOf(data) {
    let currNode = this._head;
    let index = 0;
    while (currNode) {
      if (currNode.data === data) return index;
      index += 1;
      currNode = currNode.next;
    }

    return -1;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  size() {
    return this._length;
  }

  isEmpty() {
    return !this._length;
  }

  // 打印链表
  print() {
    let ret = [];
    let currNode = this._head;
    while(currNode) {
      ret.push(currNode.data);
      currNode = currNode.next;
    }
    console.log(ret.join(' --> '));
  }
}

const link = new LinkList();

link.append(1);
link.append(2);
link.append(3);

link.insert(3, 0);

console.log(link.indexOf(0));

link.print();

