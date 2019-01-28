import BitMap from '../data-constructures/bitMap.mjs';

// const arr = [0, 6, 88, 7, 73, 34, 10, 99, 22];
// const MAX_NUMBER = 99;

// const ret = [];
// const bitMap = new BitMap(4);

// arr.forEach(item => {
//   bitMap.addMember(item);
// })

// for (let i = 0; i <= MAX_NUMBER; i += 1) {
//   if (bitMap.isExist(i)) {
//     ret.push(i);
//   }
// }

// console.log(ret);

const arr1 = [1, 4, 6, 8, 9, 10, 15];
const arr2 = [6, 14, 9, 2, 0, 7];
const intersectionArr = []

const bitMap = new BitMap();
arr1.forEach(item => bitMap.addMember(item))

arr2.forEach(item => {
  if (bitMap.isExist(item)) {
    intersectionArr.push(item);
  }
})

console.log(intersectionArr);