export const BIT_SIZE = 32;

// 设置位的值
export function setBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE);
  const bitIndex = Math.floor(bit % BIT_SIZE);
  bitMap[arrIndex] |= (1 << bitIndex);
}

// 读取位的值
export function getBit(bitMap, bit) {
  const arrIndex = Math.floor(bit / BIT_SIZE);
  const bitIndex = Math.floor(bit % BIT_SIZE);
  const ret = bitMap[arrIndex] & (1 << bitIndex);
  return ret;
}