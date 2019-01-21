import LinkedList from '../data-constructures/linked-list.mjs';
import DoublyLinkedList from '../data-constructures/doubly-linked-list.mjs';

const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.print();

linkedList.insert(0, 0);
linkedList.insert(3, 30);
linkedList.insert(5, 50);

linkedList.print();

linkedList.removeAt(0);
linkedList.removeAt(2);
linkedList.removeAt(4);
linkedList.removeAt(4);

linkedList.print();

console.log('===============');

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
doublyLinkedList.append(5);

doublyLinkedList.print();

doublyLinkedList.insert(0, 0);
doublyLinkedList.insert(3, 30);
doublyLinkedList.insert(5, 50);

doublyLinkedList.print();

doublyLinkedList.removeAt(0);
doublyLinkedList.removeAt(2);
doublyLinkedList.removeAt(4);
doublyLinkedList.removeAt(4);

doublyLinkedList.print();