// import Set from '../data-constructures/set-array.mjs';
// import Set from '../data-constructures/set-object.mjs';
import Set from '../data-constructures/set-linked-list.mjs';

const names = new Set();
const others = new Set();

names.add('A');
names.add('B');
names.add('C');
names.add('D');
names.add('E');

console.log(names.values());

names.remove('A');
names.remove('E');

console.log(names.values());

console.log(names.has('A'));
console.log(names.has('B'));

// names.clear();
console.log(names.size());


others.add('A');
others.add('D');
others.add('H');
others.add('J');

const union = names.union(others);
console.log(union.values());

const intersection = names.intersection(others);
console.log(intersection.values());

const difference = names.difference(others);
console.log(difference.values());

console.log(names.isSubsetOf(others));