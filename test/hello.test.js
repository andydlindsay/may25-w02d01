const assert = require('assert');
const functions = require('../hello');

const sayHello = functions.sayHello;

const actual = sayHello('Alice');
const expected = 'hello there Alice';

assert.strictEqual(actual, expected);
