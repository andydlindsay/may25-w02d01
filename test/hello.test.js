const assert = require('assert');
const functions = require('../hello');
const sayHello = functions.sayHello;

describe('sayHello Tests', () => {

  it('can say hello to "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';

    assert.strictEqual(actual, expected);
  });

});
