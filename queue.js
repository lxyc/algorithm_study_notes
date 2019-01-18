// 队列(先进先出)
function Queue() {
  var items = [];

  this.enqueue = function (item) {
    items.push(item);
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.head = function () {
    return items[0];
  }

  this.tail = function () {
    return items[items.length - 1];
  }

  this.size = function () {
    return items.length;
  }

  this.clear = function () {
    items = [];
  }

  this.isEmpty = function () {
    return !items.length;
  }
}

// 约瑟夫环
function delRing(list) {
  var queue = new Queue();
  list.forEach(e => {
    queue.enqueue(e);
  })

  var index = 0;
  while (queue.size() !== 1) {
    var item = queue.dequeue();
    index += 1;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }

  return queue.head();
}

var arr = Array.from({
  length: 100
}, (_, i) => i + 1);

console.log(delRing(arr));

// 计算斐波那契数列的第n项
function fibo(n) {
  var queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(1);

  var index = 0;
  while (index < n - 2) {
    index += 1;
    var item1 = queue.dequeue();
    var item2 = queue.head();
    var nextVal = item1 + item2;
    queue.enqueue(nextVal);
  }

  return queue.tail();
}

// arr.forEach(e => { console.log(e, fibo(e)); });

// 使用队列实现栈
function QueueStack() {
  var queue1 = new Queue();
  var queue2 = new Queue();
  var dataQueue = null;
  var emptyQueue = null;

  var initQueue = function () {
    if (queue1.isEmpty() && queue2.isEmpty()) {
      dataQueue = queue1;
      emptyQueue = queue2;
    } else if (queue1.isEmpty()) {
      dataQueue = queue2;
      emptyQueue = queue1;
    } else {
      dataQueue = queue1;
      emptyQueue = queue2;
    }
  };

  this.push = function (item) {
    initQueue();
    dataQueue.enqueue(item);
  };

  this.peek = function () {
    initQueue();
    return dataQueue.tail();
  }

  this.pop = function () {
    initQueue();
    while (dataQueue.size() > 1) {
      emptyQueue.enqueue(dataQueue.dequeue());
    }
    return dataQueue.dequeue();
  };

  this.isEmpty = function () {
    initQueue();
    return dataQueue.isEmpty();
  }

  this.size = function () {
    initQueue();
    return dataQueue.size();
  }

  this.clear = function () {
    initQueue();
    dataQueue = [];
  }
};


