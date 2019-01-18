// 普通栈(先进后出)
function Stack() {
  var items = [];

  this.push = function(item) {
    items.push(item);
  };

  this.pop = function() {
    return items.pop();
  };

  this.peek = function() {
    return items[items.length - 1];
  };

  this.size = function() {
    return items.length;
  };

  this.isEmpty = function() {
    return !items.length;
  };

  this.clear = function() {
    items = [];
  };
}

// 含有最小值方法的栈
function MinStack() {
  var minStack = new Stack();
  var dataStack = new Stack();

  this.push = function(item) {
    dataStack.push(item);

    if (minStack.size() === 0 || item < minStack.peek()) {
      minStack.push(item);
    } else {
      minStack.push(minStack.peek());
    }
  };

  this.pop = function() {
    minStack.pop();
    return dataStack.pop();
  };

  this.min = function() {
    return minStack.peek();
  };

  this.peek = function() {
    return dataStack.peek();
  };

  this.size = function() {
    return dataStack.size();
  };

  this.isEmpty = function() {
    return !dataStack.length;
  };

  this.clear = function() {
    this.dataStack.clear();
    this.minStack.clear();
  };
}

// 验证括号合法性
function isLegalBrackets(str) {
  var arr = str.split('');
  var stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    var one = arr[i];
    if (one === '(') {
      stack.push(one);
    } else if (one === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// console.log(isLegalBrackets('sdf(ds(ew(we)rw)rwqq)qwewe'));
// console.log(isLegalBrackets('(sd(qwqw)sd(sd))'));
// console.log(isLegalBrackets('()()sd()(sd()fw))('));

function isOperator(str) {
  return ['+', '-', '*', '/'].includes(str);
}

// 计算逆波兰表达式
function reversePolishExp(list) {
  if (list.length < 3) return;
  const stack = new Stack();
  for (let i = 0; i < list.length; i++) {
    const one = list[i];
    if (isOperator(one)) {
      const operatNum1 = stack.pop();
      const operatNum2 = stack.pop();
      const expStr = operatNum2 + one + operatNum1;
      var res = parseInt(eval(expStr));
      stack.push(String(res));
    } else {
      stack.push(one);
    }
  }
  return stack.pop();
}

// var exp_1 = ["4", "13", "5", "/", "+"];
// var exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
// console.log(reversePolishExp(exp_1));
// console.log(reversePolishExp(exp_2));

var minstack = new MinStack();

// minstack.push(3);
// minstack.push(6);
// minstack.push(8);
// console.log(minstack.min());
// minstack.push(2);
// console.log(minstack.min());

var priorityMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};

// 中缀表达式转后缀表达式
function infixExp2PostfixExp(exp) {
  var stack = new Stack();
  var ret = [];

  for (let i = 0; i < exp.length; i++) {
    var item = exp[i];
    if (!isNaN(item)) {
      ret.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.peek() !== '(') {
        ret.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        !stack.isEmpty() &&
        Object.keys(priorityMap).includes(stack.peek()) &&
        priorityMap[stack.peek()] >= priorityMap[item]
      ) {
        ret.push(stack.pop());
      }
      stack.push(item);
    }
  }

  while (!stack.isEmpty()) {
    ret.push(stack.pop());
  }
  return ret;
}

console.log(infixExp2PostfixExp('12+3'.split()));
console.log(infixExp2PostfixExp('2-3+2'.split()));
console.log(infixExp2PostfixExp('(1+(4+5+3)-3)+(9+8)'.split('')));
console.log(infixExp2PostfixExp('(1+(4+5+3)/4-3)+(6+8)*3'.split('')));

console.log(infixExp2PostfixExp(['12', '+', '3', '*', '5']));
console.log(infixExp2PostfixExp(['12', '*', '3', '+', '5']));
