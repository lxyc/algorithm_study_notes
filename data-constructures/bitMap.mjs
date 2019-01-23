import {
  setBit,
  getBit
} from './models/bit.mjs';

export default class BitMap {
  constructor(size) {
    this._bitArr = Array.from({
      length: size
    }, () => 0);
  }

  addMember(member) {
    setBit(this._bitArr, member);
  }

  isExist(member) {
    const isExist = getBit(this._bitArr, member);
    return Boolean(isExist);
  }
}