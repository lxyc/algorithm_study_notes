class Stack {
  constructor() {
    this._items = [];
  }

  push(item) {
    this._items.push(item);
  }

  pop() {
    return this._items.pop();
  }

  peek() {
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return !this._items.length;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }

  toString() {
    return this._items.toString();
  }
}

function isLegalBrackets(str) {
  const list = str.split('');
  const stack = new Stack();

  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// console.log(isLegalBrackets('sdf(ds(ew(we)rw)rwqq)qwewe'));
// console.log(isLegalBrackets('(sd(qwqw)sd(sd))'));
// console.log(isLegalBrackets('()()sd()(sd()fw))('));

function divideBy2(delNumber) {
  const stack = new Stack();
  let rem = null;
  let ret = [];

  while (delNumber > 0) {
    rem = Math.floor(delNumber % 2);
    stack.push(rem);
    delNumber = Math.floor(delNumber / 2);
  }

  while (!stack.isEmpty()) {
    ret.push(stack.pop());
  }

  return ret.join('');
}

// console.log(divideBy2(233)); //输出11101001
// console.log(divideBy2(10)); //输出1010
// console.log(divideBy2(1000)); //输出1111101000


function baseConverter(delNumber, base) {
  const stack = new Stack();
  let rem = null;
  let ret = [];
  const digits = '0123456789ABCDEF';

  while (delNumber > 0) {
    rem = Math.floor(delNumber % base);
    stack.push(rem);
    delNumber = Math.floor(delNumber / base);
  }

  while (!stack.isEmpty()) {
    ret.push(digits[stack.pop()]);
  }

  return ret.join('');
}

// console.log(baseConverter(10, 2)); //输出11000011111111001
// console.log(baseConverter(100345, 8)); //输出303771
// console.log(baseConverter(30, 16)); //输出187F9

function isOperator(str) {
  return ['+', '-', '*', '/'].includes(str);
}
// 逆波兰表达式计算
function clacExp(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    const one = exp[i];
    if (isOperator(one)) {
      const operatNum1 = stack.pop();
      const operatNum2 = stack.pop();
      const expStr = `${operatNum2}${one}${operatNum1}`;
      const res = eval(expStr);
      stack.push(res);
    } else {
      stack.push(one);
    }
  }
  return stack.peek();
}

console.log(clacExp(["4", "13", "5", "/", "+"]));
console.log(clacExp(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));

class MinStack {
  constructor() {
    this._dataStack = new Stack();
    this._minStack = new Stack();
  }

  push(item) {
    this._dataStack.push(item);
    if (this._minStack.isEmpty() || this._minStack.peek() > item) {
      this._minStack.push(item);
    } else {
      this._minStack.push(this._minStack.peek());
    }
  }

  pop() {
    this._dataStack.pop();
    return this._minStack.pop();
  }

  min() {
    return this._minStack.peek();
  }
}

minstack = new MinStack();

minstack.push(3);
minstack.push(4);
minstack.push(8);
console.log(minstack.min());
minstack.push(2);
console.log(minstack.min());