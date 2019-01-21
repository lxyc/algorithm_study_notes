// import Queue from '../data-constructures/queue-array.mjs';
import Queue from '../data-constructures/queue-linked-list.mjs';

/**
 * 案例1：约瑟夫环
 */
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
  length: 10
}, (_, i) => i + 1);

console.log(delRing(arr));

/**
 * 案例2：菲波那切数列
 */
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

arr.forEach(e => { console.log(e, fibo(e)); });

