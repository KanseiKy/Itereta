import { Iterator } from '../index.js';

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Array:', testArray);

const iterator = new Iterator(testArray);

// Returns `0`
console.log(iterator.now());

// Retruns `1`
console.log(iterator.peekable().peek());

// Returns `0` since we used `peek` and not `next`
console.log(iterator.now());

// Retruns `1`
console.log(iterator.next());

// Returns `1` since we used `next`
console.log(iterator.now());

// Repeatedly calling `now`
iterator.next();
iterator.next();
iterator.next();

// Returns `4` since we called `next` 4 times
// 1 + 3 = 4
console.log(iterator.now());

// Returns the `iterator`
console.log(iterator.peekable());