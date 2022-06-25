'use strict';

const stack = require('./lib/stack');

const newStack = new stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);


console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());



