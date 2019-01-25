import Dictionary from '../data-constructures/dictionary-object.mjs';

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.values());