import BinarySearchTree from '../data-constructures/binary-search-tree.mjs';

const tree = new BinarySearchTree();

tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

const prev = [];
const next = [];
tree.inOrderTraverse((key) => {
  prev.push(key);
})

// tree.preOrderTraverse((key) => {
//   console.log(key);
// })

// tree.postOrderTraverse((key) => {
//   console.log(key);
// })

// console.log(tree.getMin(), tree.getMinNode(), tree.getMax());

// console.log(tree.search(1));
// console.log(tree.find(1));

tree.remove(5);
tree.inOrderTraverse((key) => {
  next.push(key);
})

console.log(prev);
console.log(next);