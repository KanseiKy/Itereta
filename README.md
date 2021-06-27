# Itereta
💻 A simple `Iterator` class similar to how Rust's

# Example
```js
import { Iterator } from 'itereta';

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Array:', testArray);

const iterator = new Iterator(testArray);

// Returns `0`
console.log(iterator.now());

// Retruns `1`
console.log(iterator.peekable().peek());

// Returns `0` since we used `peek` and not `next`
console.log(iterator.now());
```

# License
This project is licensed under the MIT License. For more info, please read the `LICENSE` file.