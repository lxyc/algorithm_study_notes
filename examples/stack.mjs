// import Stack from '../data-constructures/stack-array.mjs';
// import Stack from '../data-constructures/stack-queue.mjs';
import Stack from '../data-constructures/stack-linked-list.mjs';
import MinStack from '../data-constructures/stack-array.min.mjs';

/**
 * 案例1：检测括号是否
 */
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

console.log(isLegalBrackets('sdf(ds(ew(we)rw)rwqq)qwewe')); // true
console.log(isLegalBrackets('(sd(qwqw)sd(sd))')); // true
console.log(isLegalBrackets('()()sd()(sd()fw))(')); // false


/**
 * 案例2：计算逆波兰表达式
 */
function isOperator(str) {
  return ['+', '-', '*', '/'].includes(str);
}

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

var exp_1 = ["4", "13", "5", "/", "+"];
var exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(reversePolishExp(exp_1));
console.log(reversePolishExp(exp_2));


/**
 * 案例3：中缀表达式转后缀表达式
 */
var priorityMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
};

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

console.log(infixExp2PostfixExp('12+3'.split('')));
console.log(infixExp2PostfixExp('2-3+2'.split('')));
console.log(infixExp2PostfixExp('(1+(4+5+3)-3)+(9+8)'.split('')));
console.log(infixExp2PostfixExp('(1+(4+5+3)/4-3)+(6+8)*3'.split('')));

console.log(infixExp2PostfixExp(['12', '+', '3', '*', '5']));
console.log(infixExp2PostfixExp(['12', '*', '3', '+', '5']));

/**
 * 案例4：最小值
 */

const minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(4);
minStack.push(5);

console.log(minStack.min());