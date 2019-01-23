export const BIT_SIZE = 64;

// 设置位的值
export function setBit(bitMap, bit) {
  var arrIndex = Math.floor(bit / BIT_SIZE);
  var bitIndex = Math.floor(bit % BIT_SIZE);
  bitMap[arrIndex] |= (1 << bitIndex);
}

// 读取位的值
export function getBit(bitMap, bit) {
  var arrIndex = Math.floor(bit / BIT_SIZE);
  var bitIndex = Math.floor(bit % BIT_SIZE);
  return bitMap[arrIndex] &= (1 << bitIndex);
}