import { DoublyNode } from './models/node.mjs';
import LinkedList from './linked-list.mjs';

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
  }

  append(data) {
    const newNode = new DoublyNode(data);

    if (this._length === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length += 1;
    return true;
  }

}

const doublyLiskedList = new DoublyLinkedList();

doublyLiskedList.append(1);
doublyLiskedList.append(2);

doublyLiskedList.print();