class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function _reverseByRecusive(node) {
  if (!node) return null;
  if (!node.next) return node; // 递归终止条件

  _reverseByRecusive(node.next);
  node.next.next = node;
  node.next = null;
};

function _reversePrint(node){
  if(!node) return;// 递归终止条件
  _reversePrint(node.next);
  console.log(node.data);
};

class LinkedList {
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
    while (currIndex < index) {
      currIndex += 1;
      currNode = currNode.next;
    }
    return currNode;
  }

  // 在链表指定位置插入元素
  insert(index, data) {
    // 不满足条件的索引值
    if (index < 0 || index > this._length) return false;
    // 插入尾部
    if (index === this._length) return this.append(data);

    const insertNode = new Node(data);
    if (index === 0) {
      // 插入首部
      insertNode.next = this._head;
      this._head = insertNode;
    } else {
      // 找到原有位置节点
      const prevTargetNode = this.getNode(index - 1);
      const targetNode = prevTargetNode.next;
      // 重塑节点连接
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
      if (!nextNode) this._tail = prevNode;
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

  clear() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  // 翻转
  reverse() {
    if (!this._head) return false;

    let prevNode = null;
    let currNode = this._head;
    while (currNode) {
      // 记录下一节点并重塑连接
      const nextNode = currNode.next;
      currNode.next = prevNode;
      // 轮询至下一节点
      prevNode = currNode;
      currNode = nextNode;
    }

    // 交换首尾
    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    return true;
  }

  reverseByRecusive() {
    if (!this._head) return false;
    
    _reverseByRecusive(this._head);
    // 交换首尾
    let temp = this._tail;
    this._tail = this._head;
    this._head = temp;

    return true;
  }

  // 打印链表
  print() {
    let ret = [];
    let currNode = this._head;
    while (currNode) {
      ret.push(currNode.data);
      currNode = currNode.next;
    }
    console.log(ret.join(' --> '));
  }

  reversePrint() {
    _reversePrint(this._head);
  }
}

class Stack {
  constructor() {
    this._link = new LinkedList();
  }
  push(item) {
    this._link.append(item);
  }
  pop() {
    const tailIndex = this._link - 1;
    return this._link.removeAt(tailIndex);
  }
  peek() {
    return this._link.getTail();
  }
  size() {
    this._link.size();
  }
  isEmpty() {
    return this._link.isEmpty();
  }
  clear() {
    this._link.clear()
  }
};

class Queue {
  constructor() {
    this._link = new LinkedList();
  }
  enqueue(item) {
    this._link.append(item);
  }
  dequeue() {
    return this._link.removeAt(0);
  }
  head() {
    return this._link.getHead();
  }
  tail() {
    return this._link.getTail();
  }
  size() {
    this._link.size();
  }
  isEmpty() {
    return this._link.isEmpty();
  }
  clear() {
    this._link.clear()
  }
}

const link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);

link.reverseByRecusive();