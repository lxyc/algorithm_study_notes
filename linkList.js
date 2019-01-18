function LinkList() {
  const Node = function (data) {
    this.data = data;
    this.next = null;
  }

  var head = null;
  var tail = null;
  var length = 0;

  // 获得指定位置的节点
  const _getItem = function (index) {
    if (index < 0 || index >= length) {
      return null;
    }
    var currentItem = head;
    var currentIndex = 0;
    while (currentIndex < index) {
      currentIndex += 1;
      currentItem = currentItem.next;
    }
    return currentItem;
  }

  this.getItem = function (index) {
    return _getItem(index);
  }

  // 在队列尾部追加一个节点
  this.append = function (data) {
    const newItem = new Node(data);

    if (head === null) {
      head = newItem;
      tail = newItem;
    } else {
      tail.next = newItem;
      tail = newItem;
    }
    length += 1;
    return true;
  }

  // 在指定位置插入元素
  this.insert = function (index, data) {
    if (index < 0 || index > length) return false;
    if (index === length) return this.append(data);

    const newItem = new Node(data);

    if (index === 0) {
      // 头部
      newItem.next = head;
      head = newItem;
    } else {
      const prevItem = _getItem(index - 1);
      const targetItem = prevItem.next;
      prevItem.next = newItem;
      newItem.next = targetItem;
    }

    length += 1;
    return true;
  }

  // 在指定位置移除元素
  this.removeAt = function (index) {
    if (index < 0 || index >= length) return false;

    let delItem = null;
    if (index === 0) {
      delItem = head;
      head = delItem.next;
    } else {
      const prevItem = _getItem(index - 1);
      const delItem = prevItem.next;
      const nextItem = delItem.next;
      // 被删除的节点为尾节点，需要更新tail
      if (!nextItem) tail = prevItem;
      prevItem.next = nextItem;
    }

    length -= 1;
    return true;
  }

  this.indexOf = function (data) {
    let currentItem = head;
    let index = 0;
    while (currentItem) {
      if (data === currentItem.data) return index;
      index += 1;
      currentItem = currentItem.next;
    }
    return -1;
  }

  // 获取链表头部
  this.getHead = function () {
    return head;
  }

  // 获取链表尾部
  this.getTail = function () {
    return tail;
  }

  // 获取链表长度
  this.size = function () {
    return length;
  }

  // 链表是否为空
  this.isEmpty = function () {
    return !length;
  }

  // 打印链表
  this.print = function () {
    let currentItem = head;
    const linkArr = [];
    while (currentItem) {
      linkArr.push(currentItem.data);
      currentItem = currentItem.next;
    }
    console.log(linkArr.join(' --> '));
  }
}

const link = new LinkList();

link.append(1);
link.append(2);
link.append(3);

// link.removeAt(2);
console.log(link.indexOf(3));

link.print();